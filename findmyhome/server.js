// server.ts
import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Modality } from "@google/genai";
import dotenv from "dotenv";

// prompt_templates/realtorSummaryPrompt.ts
function buildRealtorSummaryPrompt(ctx) {
  const { candidate, buyerContext } = ctx;
  const realtorName = candidate.realtorName || "Mariana Vance";
  const realtorAgency = candidate.realtorAgency || "Compass Real Estate";
  const p1 = candidate.dualCommute?.partner1;
  const p2 = candidate.dualCommute?.partner2;
  const commuteDetails = [
    p1 ? `Partner 1 (${p1.workplaceLabel || p1.destinationName || "Workplace"}): ${p1.driveMinutes || p1.transitMinutes || 20}m commute ${p1.deltaMinutesVsCurrent ? `(${p1.deltaMinutesVsCurrent > 0 ? "+" : ""}${p1.deltaMinutesVsCurrent}m vs current home)` : ""}` : null,
    p2 ? `Partner 2 (${p2.workplaceLabel || p2.destinationName || "Workplace"}): ${p2.driveMinutes || p2.transitMinutes || 25}m commute ${p2.deltaMinutesVsCurrent ? `(${p2.deltaMinutesVsCurrent > 0 ? "+" : ""}${p2.deltaMinutesVsCurrent}m vs current home)` : ""}` : null,
    candidate.dualCommute?.summaryText ? `Commute Note: ${candidate.dualCommute.summaryText}` : null,
    candidate.dualCommute?.totalDailySavingsMinutes ? `Total Daily Savings: ${candidate.dualCommute.totalDailySavingsMinutes} mins saved daily` : null
  ].filter(Boolean).join(". ");
  const hotspotList = (candidate.hotspots || []).slice(0, 4).map((h) => `${h.title} (${h.category || "Hotspot"}, ${h.walkMinutes || 5} min walk)`).join(", ");
  const promptText = `Generate an audio pitch from the realtor to the prospective buyer couple.

RAW CANDIDATE HOME DATA:
- Property: ${candidate.title} located at ${candidate.address || candidate.neighborhood}
- Type & Specs: ${candidate.propertyType || "Home"}, ${candidate.beds} beds, ${candidate.baths} baths, ${candidate.sqft} sq ft, priced at ${candidate.price}
- Neighborhood Vibe & Character: "${candidate.vibeLabel || "Vibrant & Connected"}" - ${candidate.vibeNarrative || "An exceptional community with tree-lined streets and local culture"}
- Neighborhood Tags: ${(candidate.vibeTags || []).join(", ")}
- Dual Commute Setup: ${commuteDetails || "Balanced commute times for both partners"}
- Nearby Pedestrian Hotspots: ${hotspotList || "Walkable cafes, green parks, and rapid transit"}
- Buyer Relocation Origin: Relocating from ${buyerContext?.relocatingFrom || "current neighborhood"}

REQUIREMENTS:
1. Role: Speak in the first person as ${realtorName} from ${realtorAgency} ("I chose this place for you...", "What makes this home such an outstanding match...").
2. Core message: Explain WHY this place is relevant as their new home destination.
3. Key elements to naturally weave in:
   - Highlight the dual commute advantages and how it creates balance for both partners' work destinations.
   - Convey the feeling of the neighborhood based on its vibe and pedestrian hotspots (like morning coffee steps away or weekend strolls in the park).
4. Tone: Warm, engaging, professional, and authentic\u2014like a personal voice memo from an expert friend.
5. Strict Length: Exactly 3 to 4 spoken sentences (between 45 and 65 words).
6. DO NOT read raw data tables or recite numbers like a bot.
7. Return ONLY the spoken script with no quotation marks, no markdown headers, and no stage directions.`;
  const systemInstruction = `You are ${realtorName}, a top-tier local real estate advisor at ${realtorAgency}.
You write spoken audio scripts that sound effortless, conversational, and genuinely persuasive when synthesized with Text-to-Speech.
Avoid robotic reciting of stats. Focus on lifestyle benefits, dual commute advantages, and neighborhood character.`;
  return { promptText, systemInstruction };
}

// server.ts
dotenv.config();
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
var PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3001;
function getGenAI() {
  const apiKey = process.env.GEMINI_API_KEY?.trim();
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not configured in environment variables. Please provide GEMINI_API_KEY.");
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build"
      }
    }
  });
}
function parseGeminiError(err) {
  const errMsg = typeof err?.message === "string" ? err.message : JSON.stringify(err || "");
  if (errMsg.includes("API_KEY_INVALID") || errMsg.includes("API key not valid") || errMsg.includes("INVALID_ARGUMENT") && errMsg.includes("API key")) {
    return {
      statusCode: 401,
      message: "GEMINI_API_KEY is invalid or expired. Please check your API key in Settings > Secrets."
    };
  }
  if (errMsg.includes("PERMISSION_DENIED") || errMsg.includes("blocked") || errMsg.includes("ACCESS_TOKEN_SCOPE_INSUFFICIENT")) {
    return {
      statusCode: 403,
      message: "GEMINI_API_KEY does not have access to the Gemini API. Please check your key in Settings > Secrets."
    };
  }
  if (errMsg.includes("RESOURCE_EXHAUSTED") || errMsg.includes("Quota") || errMsg.includes("429")) {
    return {
      statusCode: 429,
      message: "Gemini API quota exceeded. Please check your key or upgrade in Settings > Secrets."
    };
  }
  return {
    statusCode: 500,
    message: err?.message || "Gemini processing failed"
  };
}
function pcmToWav(pcmBuffer, sampleRate = 24e3, numChannels = 1, bitsPerSample = 16) {
  const bytesPerSample = bitsPerSample / 8 * numChannels;
  const alignedSize = pcmBuffer.length - pcmBuffer.length % bytesPerSample;
  const cleanBuffer = alignedSize === pcmBuffer.length ? pcmBuffer : pcmBuffer.subarray(0, alignedSize);
  const dataSize = cleanBuffer.length;
  const paddingByte = dataSize % 2 !== 0 ? 1 : 0;
  const header = Buffer.alloc(44);
  header.write("RIFF", 0);
  header.writeUInt32LE(36 + dataSize + paddingByte, 4);
  header.write("WAVE", 8);
  header.write("fmt ", 12);
  header.writeUInt32LE(16, 16);
  header.writeUInt16LE(1, 20);
  header.writeUInt16LE(numChannels, 22);
  header.writeUInt32LE(sampleRate, 24);
  header.writeUInt32LE(sampleRate * bytesPerSample, 28);
  header.writeUInt16LE(bytesPerSample, 32);
  header.writeUInt16LE(bitsPerSample, 34);
  header.write("data", 36);
  header.writeUInt32LE(dataSize, 40);
  return paddingByte > 0 ? Buffer.concat([header, cleanBuffer, Buffer.from([0])]) : Buffer.concat([header, cleanBuffer]);
}
async function startServer() {
  const app = express();
  app.use(express.json({ limit: "10mb" }));
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", service: "realtor-3d-matcher" });
  });
  app.get("/api/config", (req, res) => {
    res.json({
      googleMapsApiKey: process.env.VITE_GOOGLE_MAPS_API_KEY || ""
    });
  });
  app.post("/api/gemini/tts", async (req, res) => {
    try {
      const { text, voiceName } = req.body;
      if (!text || typeof text !== "string") {
        return res.status(400).json({ error: "Text prompt is required for TTS" });
      }
      if (!process.env.GEMINI_API_KEY?.trim()) {
        return res.status(401).json({
          error: "GEMINI_API_KEY is not configured in environment variables. Gemini TTS requires GEMINI_API_KEY."
        });
      }
      const ai = getGenAI();
      const selectedVoice = voiceName || "Kore";
      const response = await ai.models.generateContent({
        model: "gemini-3.1-flash-tts-preview",
        contents: [{ parts: [{ text: text.trim() }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: selectedVoice }
            }
          }
        }
      });
      let base64Audio;
      let audioMime = "audio/wav";
      const parts = response.candidates?.[0]?.content?.parts || [];
      for (const part of parts) {
        if (part.inlineData?.data) {
          base64Audio = part.inlineData.data;
          if (part.inlineData.mimeType) {
            audioMime = part.inlineData.mimeType;
          }
          break;
        }
      }
      if (!base64Audio) {
        throw new Error("No audio content returned from Gemini TTS model");
      }
      let finalAudioUrl;
      if (audioMime.includes("wav") || audioMime.includes("mp3") || audioMime.includes("ogg")) {
        finalAudioUrl = `data:${audioMime};base64,${base64Audio}`;
      } else {
        const rawPcmBuffer = Buffer.from(base64Audio, "base64");
        const wavBuffer = pcmToWav(rawPcmBuffer, 24e3, 1, 16);
        finalAudioUrl = `data:audio/wav;base64,${wavBuffer.toString("base64")}`;
      }
      res.json({
        audio: finalAudioUrl,
        mimeType: "audio/wav",
        voice: selectedVoice,
        provider: "Gemini TTS (gemini-3.1-flash-tts-preview)"
      });
    } catch (err) {
      const parsed = parseGeminiError(err);
      console.warn(`Gemini TTS notice (${parsed.statusCode}):`, parsed.message);
      res.status(parsed.statusCode).json({
        error: parsed.message
      });
    }
  });
  app.post("/api/gemini/realtor-summary-tts", async (req, res) => {
    const { candidate, buyerContext, voiceName } = req.body || {};
    if (!candidate) {
      return res.status(400).json({ error: "Candidate home data is required" });
    }
    if (!process.env.GEMINI_API_KEY?.trim()) {
      return res.status(401).json({
        error: "GEMINI_API_KEY is not configured in environment variables. Gemini TTS and summary generation require GEMINI_API_KEY."
      });
    }
    const realtorName = candidate.realtorName || "Mariana Vance";
    const realtorAgency = candidate.realtorAgency || "Compass Real Estate";
    const selectedVoice = voiceName || (realtorName.toLowerCase().includes("mariana") ? "Kore" : "Puck");
    const { promptText, systemInstruction } = buildRealtorSummaryPrompt({
      candidate,
      buyerContext
    });
    try {
      const ai = getGenAI();
      const summaryResponse = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: promptText,
        config: {
          systemInstruction,
          temperature: 0.7
        }
      });
      const generatedScript = summaryResponse.text?.trim();
      if (!generatedScript) {
        throw new Error("Gemini did not return text for the realtor summary");
      }
      const ttsResponse = await ai.models.generateContent({
        model: "gemini-3.1-flash-tts-preview",
        contents: [{ parts: [{ text: generatedScript }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: selectedVoice }
            }
          }
        }
      });
      let base64Audio;
      let audioMime = "audio/wav";
      const ttsParts = ttsResponse.candidates?.[0]?.content?.parts || [];
      for (const part of ttsParts) {
        if (part.inlineData?.data) {
          base64Audio = part.inlineData.data;
          if (part.inlineData.mimeType) {
            audioMime = part.inlineData.mimeType;
          }
          break;
        }
      }
      if (!base64Audio) {
        throw new Error("Gemini TTS did not return audio data");
      }
      let finalAudioUrl;
      if (audioMime.includes("wav") || audioMime.includes("mp3") || audioMime.includes("ogg")) {
        finalAudioUrl = `data:${audioMime};base64,${base64Audio}`;
      } else {
        const rawPcmBuffer = Buffer.from(base64Audio, "base64");
        const wavBuffer = pcmToWav(rawPcmBuffer, 24e3, 1, 16);
        finalAudioUrl = `data:audio/wav;base64,${wavBuffer.toString("base64")}`;
      }
      res.json({
        summaryScript: generatedScript,
        audio: finalAudioUrl,
        mimeType: "audio/wav",
        voice: selectedVoice,
        realtorName,
        realtorAgency,
        modelUsedForScript: "gemini-3.8-flash",
        modelUsedForTTS: "gemini-3.1-flash-tts-preview",
        dataPassedToTTS: {
          text: generatedScript,
          voiceName: selectedVoice
        },
        dataPassedToGemini38: {
          candidate,
          buyerContext
        }
      });
    } catch (err) {
      const parsed = parseGeminiError(err);
      console.warn(`Gemini Realtor Summary TTS notice (${parsed.statusCode}):`, parsed.message);
      res.status(parsed.statusCode).json({
        error: parsed.message
      });
    }
  });
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath, { index: false }));
    app.get("*", (req, res) => {
      try {
        let html = fs.readFileSync(path.join(distPath, "index.html"), "utf-8");
        const mapsApiKey = process.env.VITE_GOOGLE_MAPS_API_KEY || "";
        html = html.replace(
          "<head>",
          `<head>
    <script>window.__GOOGLE_MAPS_API_KEY__ = ${JSON.stringify(mapsApiKey)};</script>`
        );
        res.setHeader("Content-Type", "text/html");
        res.send(html);
      } catch {
        res.sendFile(path.join(distPath, "index.html"));
      }
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.js.map

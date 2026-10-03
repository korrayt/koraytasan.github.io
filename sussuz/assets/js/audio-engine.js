/**
 * SUSSUZ — Procedural Web Audio Engine & Soundscape Orchestrator
 * Ankara Noir Atmosferik Ses Sentezi ve khrysaor Master Parça Oynatıcı
 * 
 * SSOT Audio Engine:
 * - HTML5 Native Audio Element (Zero CORS, 100% reliable hardware output, seamless fading)
 * - Web Audio API (Atmospheric sub-bass drone, Ankara night wind, dynamic lake rain, club kick thump)
 * - Otomatik Gesture Unlock (Tarayıcı autoplay engellerini ilk etkileşimde anında kaldırır)
 * - 8 Kanonik Stüdyo Master MP3 parçası doğrudan yerel dosyalardan anında yürütülür.
 */

const TRACK_MAP = {
  // YouTube Video IDs -> Canonical Local Master MP3s
  "yFymvGwoxjA": "assets/audio/track_bataklik.mp3",
  "KFrAv440Rmg": "assets/audio/track_hirsiz.mp3",
  "CvSByNL1r48": "assets/audio/track_bilmem_ben_de.mp3",
  "K35AtsZEl5o": "assets/audio/track_gospel_baby_kenan.mp3",
  "mdPhJrnytkA": "assets/audio/track_gospel_baby_ekrem.mp3",
  "-esQckmIMgQ": "assets/audio/track_kaybedemem.mp3",
  "GLQcmdJsO5U": "assets/audio/track_biri_varmis.mp3",

  // Track ID Aliases
  "bataklik": "assets/audio/track_bataklik.mp3",
  "hirsiz": "assets/audio/track_hirsiz.mp3",
  "bilmem_ben_de": "assets/audio/track_bilmem_ben_de.mp3",
  "gospel_baby_kenan": "assets/audio/track_gospel_baby_kenan.mp3",
  "gospel_baby_ekrem": "assets/audio/track_gospel_baby_ekrem.mp3",
  "kaybedemem": "assets/audio/track_kaybedemem.mp3",
  "biri_varmis": "assets/audio/track_biri_varmis.mp3",
  "distant_ambient": "assets/audio/track_hirsiz_distant_ambient.mp3",
  "master": "assets/audio/track_hirsiz_distant_ambient.mp3"
};

class AudioEngine {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.ambientGain = null;
    this.isMuted = false;
    this.isInitialized = false;

    // Generators
    this.droneOsc1 = null;
    this.droneOsc2 = null;
    this.droneGain = null;
    this.windNode = null;
    this.windGain = null;
    this.rainNode = null;
    this.rainGain = null;
    this.clubThumpTimer = null;
    this.clubThumpGain = null;

    // Primary Native HTML5 Audio Player (Zero CORS, 100% reliable hardware output)
    this.musicElement = new Audio();
    this.musicElement.preload = "auto";
    this.musicElement.loop = true;
    this.currentTrack = null;
    this.targetVolume = 0.5;
    this._fadeInterval = null;

    // Callbacks & state
    this.onYTStateChange = null;
    this.onTrackEnded = null;
    this.ytPlayer = null;
    this.isYTReady = false;

    // Track ended listener
    this.musicElement.addEventListener("ended", () => {
      if (this.onYTStateChange) {
        this.onYTStateChange(0); // 0 = YT.PlayerState.ENDED
      }
      if (this.onTrackEnded) {
        this.onTrackEnded();
      }
    });

    // Error recovery
    this.musicElement.addEventListener("error", (e) => {
      console.warn("SUSSUZ Audio element warning:", e);
    });
  }

  /**
   * Ses Motorunu Başlat ve Tarayıcı Kilitlerini Aç
   */
  init() {
    if (this.isInitialized) {
      this._resumeContext();
      return;
    }

    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this._resumeContext();

        // Master Output Bus
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(0.75, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);

        // Dedicated Ambient Bus
        this.ambientGain = this.ctx.createGain();
        this.ambientGain.gain.setValueAtTime(0.45, this.ctx.currentTime);
        this.ambientGain.connect(this.masterGain);

        // Procedural Generators
        this._startFoundationalDrone();
        this._startWindNoise();
        this._startRainNoise();

        // Club Thump Bus
        this.clubThumpGain = this.ctx.createGain();
        this.clubThumpGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
        this.clubThumpGain.connect(this.ambientGain);
      }

      // Kullanıcı Etkileşimi ile AudioContext Uyandırma (Yalnızca ilk etkileşimde)
      const unlockAudio = () => {
        this._resumeContext();
      };
      ["click", "keydown", "touchstart", "pointerdown"].forEach((evt) => {
        document.addEventListener(evt, unlockAudio, { passive: true, once: true });
      });

      this.isInitialized = true;
      console.log("SUSSUZ Bulletproof Audio Engine initialized (Native HTML5 + Web Audio).");
    } catch (err) {
      console.error("AudioEngine initialization failed:", err);
    }
  }

  _resumeContext() {
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => {});
    }
  }

  // --- Prosedürel Ses Sentezi Motorları ---

  _startFoundationalDrone() {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    this.droneGain = this.ctx.createGain();
    this.droneGain.gain.setValueAtTime(0.08, now);

    const filter = this.ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(92, now);
    filter.Q.setValueAtTime(2.2, now);

    this.droneOsc1 = this.ctx.createOscillator();
    this.droneOsc1.type = "sawtooth";
    this.droneOsc1.frequency.setValueAtTime(43.2, now);

    this.droneOsc2 = this.ctx.createOscillator();
    this.droneOsc2.type = "sine";
    this.droneOsc2.frequency.setValueAtTime(43.8, now);

    this.droneOsc1.connect(filter);
    this.droneOsc2.connect(filter);
    filter.connect(this.droneGain);
    this.droneGain.connect(this.ambientGain || this.masterGain);

    this.droneOsc1.start();
    this.droneOsc2.start();
  }

  _startWindNoise() {
    if (!this.ctx) return;
    const bufferSize = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      data[i] = (lastOut + 0.02 * white) / 1.02;
      lastOut = data[i];
    }

    this.windNode = this.ctx.createBufferSource();
    this.windNode.buffer = buffer;
    this.windNode.loop = true;

    const windFilter = this.ctx.createBiquadFilter();
    windFilter.type = "bandpass";
    windFilter.frequency.setValueAtTime(260, this.ctx.currentTime);
    windFilter.Q.setValueAtTime(1.8, this.ctx.currentTime);

    this.windGain = this.ctx.createGain();
    this.windGain.gain.setValueAtTime(0.04, this.ctx.currentTime);

    this.windNode.connect(windFilter);
    windFilter.connect(this.windGain);
    this.windGain.connect(this.ambientGain || this.masterGain);
    this.windNode.start();
  }

  _startRainNoise() {
    if (!this.ctx) return;
    const bufferSize = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    this.rainNode = this.ctx.createBufferSource();
    this.rainNode.buffer = buffer;
    this.rainNode.loop = true;

    const rainFilter = this.ctx.createBiquadFilter();
    rainFilter.type = "highpass";
    rainFilter.frequency.setValueAtTime(1200, this.ctx.currentTime);

    this.rainGain = this.ctx.createGain();
    this.rainGain.gain.setValueAtTime(0.001, this.ctx.currentTime);

    this.rainNode.connect(rainFilter);
    rainFilter.connect(this.rainGain);
    this.rainGain.connect(this.ambientGain || this.masterGain);
    this.rainNode.start();
  }

  startClubThump(bpm = 122, intensity = 0.22) {
    if (this.clubThumpTimer) clearInterval(this.clubThumpTimer);
    if (!this.ctx) return;
    const intervalMs = (60 / bpm) * 1000;

    const triggerKick = () => {
      if (!this.ctx || this.isMuted) return;
      this._resumeContext();
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.frequency.setValueAtTime(110, now);
      osc.frequency.exponentialRampToValueAtTime(38, now + 0.12);

      gain.gain.setValueAtTime(intensity, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.32);

      osc.connect(gain);
      gain.connect(this.clubThumpGain || this.masterGain);

      osc.start(now);
      osc.stop(now + 0.35);
    };

    triggerKick();
    this.clubThumpTimer = setInterval(triggerKick, intervalMs);
  }

  stopClubThump() {
    if (this.clubThumpTimer) {
      clearInterval(this.clubThumpTimer);
      this.clubThumpTimer = null;
    }
  }

  playTypewriterClick() {
    if (!this.ctx || this.isMuted) return;
    this._resumeContext();
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "triangle";
    osc.frequency.setValueAtTime(750 + Math.random() * 200, now);
    osc.frequency.exponentialRampToValueAtTime(180, now + 0.035);

    gain.gain.setValueAtTime(0.04, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.045);
  }

  // --- Master Müzik Çalar (Native HTML5 Audio & Crossfade) ---

  /**
   * Çözümleyici: Verilen kimliği (YouTube ID, takma ad veya doğrudan URL) gerçek yerel dosyaya dönüştürür
   */
  resolveAudioPath(trackOrId, fallbackSrc = null) {
    if (fallbackSrc && (fallbackSrc.endsWith(".mp3") || fallbackSrc.endsWith(".wav"))) {
      return fallbackSrc;
    }
    if (!trackOrId) return null;
    if (TRACK_MAP[trackOrId]) {
      return TRACK_MAP[trackOrId];
    }
    if (trackOrId.endsWith(".mp3") || trackOrId.endsWith(".wav")) {
      return trackOrId;
    }
    return `assets/audio/track_${trackOrId}.mp3`;
  }

  /**
   * Parça Çalma Metodu (Anında Geçiş, Garantili Donanım Çıkışı)
   */
  playMusicTrack(trackOrId, volume = 0.55, fallbackSrc = null) {
    if (!this.isInitialized) {
      this.init();
    }
    this._resumeContext();

    const audioSrc = this.resolveAudioPath(trackOrId, fallbackSrc);
    if (!audioSrc) return;

    this.targetVolume = volume;

    // Aynı parça zaten çalıyorsa sadece ses seviyesini ayarla
    if (this.currentTrack === audioSrc && !this.musicElement.paused) {
      this.musicElement.volume = this.isMuted ? 0 : volume;
      return;
    }

    if (this._fadeInterval) {
      clearInterval(this._fadeInterval);
      this._fadeInterval = null;
    }

    this.currentTrack = audioSrc;

    try {
      this.musicElement.pause();
      this.musicElement.src = audioSrc;
      this.musicElement.load();
      this.musicElement.currentTime = 0;
      this.musicElement.volume = this.isMuted ? 0 : volume;
      const playPromise = this.musicElement.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.log("Audio waiting for user gesture:", err);
        });
      }
    } catch (e) {
      console.warn("Audio playback error:", e);
    }
  }

  /**
   * Parçayı Durdur (Anında ve Temiz)
   */
  stopMusicTrack(fadeMs = 300) {
    if (this._fadeInterval) {
      clearInterval(this._fadeInterval);
      this._fadeInterval = null;
    }
    this.currentTrack = null;
    if (this.musicElement) {
      this.musicElement.pause();
      this.musicElement.currentTime = 0;
    }
  }

  /**
   * Native HTML5 Ses Seviyesi Yardımcısı
   */
  _fadeMusicTo(targetVol, durationMs = 400, callback = null) {
    if (!this.musicElement) {
      if (callback) callback();
      return;
    }

    if (this._fadeInterval) {
      clearInterval(this._fadeInterval);
      this._fadeInterval = null;
    }

    const startVol = this.musicElement.volume;
    const finalVol = Math.max(0, Math.min(1, targetVol));
    const startTime = performance.now();

    this._fadeInterval = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const progress = Math.min(1, elapsed / durationMs);
      const curVol = startVol + (finalVol - startVol) * progress;
      this.musicElement.volume = Math.max(0, Math.min(1, curVol));

      if (progress >= 1) {
        clearInterval(this._fadeInterval);
        this._fadeInterval = null;
        if (callback) callback();
      }
    }, 25);
  }

  // --- Sahne Atmosfer & Müzik Yöneticisi ---

  setSceneAudio(sceneId) {
    if (!this.isInitialized) {
      this.init();
    }
    this._resumeContext();

    const rampTime = 0.8;

    switch (sceneId) {
      case "ritim":
      case "ritim_interior":
      case "dancefloor":
        this._rampGain(this.droneGain, 0.08, rampTime);
        this._rampGain(this.windGain, 0.001, rampTime);
        this._rampGain(this.rainGain, 0.001, rampTime);
        this.stopClubThump(); // Parçanın kendi master vuruşları devrede
        // Ritim kulübü — Sahnede Kenan: HIRSIZ (Full Studio Master)
        this.playMusicTrack("hirsiz", 0.65, "assets/audio/track_hirsiz.mp3");
        break;

      case "ritim_road":
        this._rampGain(this.droneGain, 0.06, rampTime);
        this._rampGain(this.windGain, 0.09, rampTime);
        this._rampGain(this.rainGain, 0.001, rampTime);
        this.stopClubThump();
        // Murat & Ekrem yol sahnesi — BİLMEM, BEN DE
        this.playMusicTrack("bilmem_ben_de", 0.55, "assets/audio/track_bilmem_ben_de.mp3");
        break;

      case "ritim_vip":
      case "ritim_backstage":
        this._rampGain(this.droneGain, 0.06, rampTime);
        this._rampGain(this.windGain, 0.001, rampTime);
        this._rampGain(this.rainGain, 0.001, rampTime);
        this.stopClubThump();
        this.playMusicTrack("hirsiz", 0.50, "assets/audio/track_hirsiz.mp3");
        break;

      case "goksu_room":
      case "office":
        this._rampGain(this.droneGain, 0.04, rampTime);
        this._rampGain(this.windGain, 0.01, rampTime);
        this._rampGain(this.rainGain, 0.001, rampTime);
        this.stopClubThump();
        // Göksu'nun Cam Ofisi — Kenan: BU ŞARKIYI KAYBEDEMEM
        this.playMusicTrack("kaybedemem", 0.55, "assets/audio/track_kaybedemem.mp3");
        break;

      case "hill":
        this._rampGain(this.droneGain, 0.06, rampTime);
        this._rampGain(this.windGain, 0.14, rampTime);
        this._rampGain(this.rainGain, 0.001, rampTime);
        this.stopClubThump();
        // Aşıklar Tepesi — Murat: BİLMEM, BEN DE
        this.playMusicTrack("bilmem_ben_de", 0.58, "assets/audio/track_bilmem_ben_de.mp3");
        break;

      case "lake":
      case "lake_candle":
        this._rampGain(this.droneGain, 0.07, rampTime);
        this._rampGain(this.windGain, 0.05, rampTime);
        this._rampGain(this.rainGain, 0.09, rampTime);
        this.stopClubThump();
        // Göl Kenarı & Dilek Anma — Bahar: BATAKLIK
        this.playMusicTrack("bataklik", 0.60, "assets/audio/track_bataklik.mp3");
        break;

      case "studio":
        this._rampGain(this.droneGain, 0.04, rampTime);
        this._rampGain(this.windGain, 0.005, rampTime);
        this._rampGain(this.rainGain, 0.001, rampTime);
        this.stopClubThump();
        // Kenan'ın Stüdyosu — Kenan Akustik Demo: GOSPEL BABY
        this.playMusicTrack("gospel_baby_kenan", 0.55, "assets/audio/track_gospel_baby_kenan.mp3");
        break;

      case "studio_ekrem":
        this._rampGain(this.droneGain, 0.04, rampTime);
        this._rampGain(this.windGain, 0.005, rampTime);
        this._rampGain(this.rainGain, 0.001, rampTime);
        this.stopClubThump();
        // Ekrem Canlı Kayıt Seansı — Ekrem Vokal: GOSPEL BABY
        this.playMusicTrack("gospel_baby_ekrem", 0.65, "assets/audio/track_gospel_baby_ekrem.mp3");
        break;

      case "home":
      case "home_interior":
      case "home_kitchen":
      case "garden":
      case "murat_home":
      case "accounting":
        this._rampGain(this.droneGain, 0.04, rampTime);
        this._rampGain(this.windGain, 0.02, rampTime);
        this._rampGain(this.rainGain, 0.02, rampTime);
        this.stopClubThump();
        // Sessiz, korunaklı iç mekan ses alanı (müzik çalmaz)
        this.stopMusicTrack();
        break;

      case "master":
      default: // Master canvas / Gece Panoraması
        this._rampGain(this.droneGain, 0.07, rampTime);
        this._rampGain(this.windGain, 0.035, rampTime);
        this._rampGain(this.rainGain, 0.001, rampTime);
        this.stopClubThump();
        // Yalnızca gece haritasında Ankara genelinde uzaktan boğuk bas yankısı
        this.playMusicTrack("distant_ambient", 0.28, "assets/audio/track_hirsiz_distant_ambient.mp3");
        break;
    }
  }

  _rampGain(node, targetVal, duration) {
    if (!node || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      node.gain.cancelScheduledValues(now);
      node.gain.setValueAtTime(node.gain.value, now);
      node.gain.linearRampToValueAtTime(targetVal, now + duration);
    } catch (e) {}
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.masterGain && this.ctx) {
      const now = this.ctx.currentTime;
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.75, now);
    }
    if (this.musicElement) {
      this.musicElement.muted = this.isMuted;
      if (!this.isMuted && this.currentTrack && this.musicElement.paused) {
        this.musicElement.play().catch(() => {});
      }
    }
    return this.isMuted;
  }

  // YouTube uyumluluk kalkanı
  initYouTubePlayer() {
    this.isYTReady = true;
  }
}

window.SUSSUZ_AUDIO = new AudioEngine();

// Global YouTube IFrame API Ready Callback
window.onYouTubeIframeAPIReady = function() {
  if (window.SUSSUZ_AUDIO) {
    window.SUSSUZ_AUDIO.initYouTubePlayer();
  }
};

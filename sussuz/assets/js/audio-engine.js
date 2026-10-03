/**
 * SUSSUZ — Procedural Web Audio Engine & Soundscape Orchestrator
 * Ankara Noir Atmosferik Ses Sentezi vekhrysaor Master Parça Oynatıcı
 */

class AudioEngine {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.isMuted = false;
    this.isInitialized = false;

    // Generators
    this.droneOsc1 = null;
    this.droneOsc2 = null;
    this.droneGain = null;
    this.windNode = null;
    this.windGain = null;
    this.clubThumpTimer = null;
    this.clubThumpGain = null;
    this.rainGain = null;
    this.rainNode = null;
    this.ambientGain = null;

    // YouTube Headless Audio Engine (khrysaor resmî kanala izlenme sayar, görüntü gösterilmez)
    this.ytPlayer = null;
    this.isYTReady = false;
    this.pendingYTTrack = null;
    this.currentFallbackSrc = null;
    this.currentVolume = 0.5;
    this.onYTStateChange = null;

    // Real local fallback audio player
    this.musicElement = new Audio();
    this.musicElement.loop = true;
    this.musicGain = null;
    this.currentTrack = null;
  }

  init() {
    if (this.isInitialized) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();

      // Master output bus
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.7, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      // YouTube Headless Player Başlatma
      this.initYouTubePlayer();

      // Dedicated ambient background bus (scaled down for a subtle, elegant noir bed)
      this.ambientGain = this.ctx.createGain();
      this.ambientGain.gain.setValueAtTime(0.42, this.ctx.currentTime);
      this.ambientGain.connect(this.masterGain);

      // Start foundational noir drone
      this._startFoundationalDrone();

      // Start wind generator
      this._startWindNoise();

      // Start rain generator
      this._startRainNoise();

      // Prepare club thump bus
      this.clubThumpGain = this.ctx.createGain();
      this.clubThumpGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      this.clubThumpGain.connect(this.ambientGain);

      // Connect real music element to web audio graph
      try {
        const musicSource = this.ctx.createMediaElementSource(this.musicElement);
        this.musicGain = this.ctx.createGain();
        this.musicGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
        musicSource.connect(this.musicGain);
        this.musicGain.connect(this.masterGain);
      } catch (e) {
        console.warn("Direct media element source failed; fallback to native element volume:", e);
      }

      // Fallback local audio loop guarantee
      this.musicElement.addEventListener("ended", () => {
        if (this.musicElement && this.currentTrack) {
          try {
            this.musicElement.currentTime = 0;
            this.musicElement.play().catch(() => {});
          } catch (e) {}
        }
      });

      this.isInitialized = true;
      console.log("SUSSUZ Web Audio Engine initialized with balanced ambient bus.");
    } catch (err) {
      console.error("AudioContext initialization failed:", err);
    }
  }

  initYouTubePlayer() {
    if (this.ytPlayer || !window.YT || !window.YT.Player) return;
    try {
      this.ytPlayer = new YT.Player('youtubePlayerElement', {
        height: '135',
        width: '240',
        videoId: 'yFymvGwoxjA',
        playerVars: {
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
          rel: 0,
          playsinline: 1
        },
        events: {
          onReady: (event) => {
            this.isYTReady = true;
            console.log("SUSSUZ YouTube Headless Audio Engine Ready (Official stream).");
            if (this.isMuted) {
              event.target.mute();
            } else {
              event.target.unMute();
            }
            if (this.pendingYTTrack) {
              const pending = this.pendingYTTrack;
              this.pendingYTTrack = null;
              this.playMusicTrack(pending.trackOrId, pending.volume, pending.fallbackSrc);
            }
          },
          onStateChange: (event) => {
            // event.data === 0 (YT.PlayerState.ENDED)
            if (event.data === (window.YT ? window.YT.PlayerState.ENDED : 0)) {
              if (this.onYTStateChange) {
                this.onYTStateChange(event.data);
              } else if (this.currentTrack) {
                // Sahne müziği bittiğinde sessizliğe düşmesin, baştan tekrar başlasın (kesintisiz noir atmosfer)
                try {
                  event.target.seekTo(0);
                  event.target.playVideo();
                } catch (e) {
                  console.warn("YouTube loop seek error:", e);
                }
              }
              return;
            }
            if (this.onYTStateChange) {
              this.onYTStateChange(event.data);
            }
          },
          onError: (err) => {
            console.warn("YouTube player error; fallback to local audio:", err);
            if (this.currentFallbackSrc) {
              this._playLocalAudio(this.currentFallbackSrc, this.currentVolume);
            }
          }
        }
      });
    } catch (e) {
      console.warn("YouTube Player initialization error:", e);
    }
  }

  _startFoundationalDrone() {
    const now = this.ctx.currentTime;
    this.droneGain = this.ctx.createGain();
    this.droneGain.gain.setValueAtTime(0.08, now); // Gentle deep rumble

    // Filter for deep dark noir rumble
    const filter = this.ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(90, now);
    filter.Q.setValueAtTime(2.5, now);

    // Osc 1: Sub-bass 43.2 Hz
    this.droneOsc1 = this.ctx.createOscillator();
    this.droneOsc1.type = "sawtooth";
    this.droneOsc1.frequency.setValueAtTime(43.2, now);

    // Osc 2: Sub-bass 43.8 Hz (slight detune for beating pulse)
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
    const bufferSize = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      data[i] = (lastOut + 0.02 * white) / 1.02; // Pink/brown approximation
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
    this.windGain.gain.setValueAtTime(0.04, this.ctx.currentTime); // Subtle Ankara night breeze

    this.windNode.connect(windFilter);
    windFilter.connect(this.windGain);
    this.windGain.connect(this.ambientGain || this.masterGain);
    this.windNode.start();
  }

  _startRainNoise() {
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
    const intervalMs = (60 / bpm) * 1000;

    const triggerKick = () => {
      if (!this.ctx || this.isMuted) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.frequency.setValueAtTime(110, now);
      osc.frequency.exponentialRampToValueAtTime(38, now + 0.12);

      gain.gain.setValueAtTime(intensity, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.32);

      osc.connect(gain);
      gain.connect(this.clubThumpGain);

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

  setSceneAudio(sceneId) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const rampTime = 1.2;

    switch (sceneId) {
      case "ritim":
        this._rampGain(this.droneGain, 0.10, rampTime);
        this._rampGain(this.windGain, 0.03, rampTime);
        this._rampGain(this.rainGain, 0.001, rampTime);
        this.startClubThump(120, 0.20);
        this.stopMusicTrack();
        break;

      case "ritim_interior":
        this._rampGain(this.droneGain, 0.12, rampTime);
        this._rampGain(this.windGain, 0.001, rampTime);
        this._rampGain(this.rainGain, 0.001, rampTime);
        this.startClubThump(124, 0.22);
        // Sahnede Kenan şarkı söylüyor — Hırsız
        this.playMusicTrack("KFrAv440Rmg", 0.52, "assets/audio/track_hirsiz.mp3");
        break;

      case "ritim_road":
        this._rampGain(this.droneGain, 0.06, rampTime);
        this._rampGain(this.windGain, 0.09, rampTime);
        this._rampGain(this.rainGain, 0.001, rampTime);
        this.startClubThump(120, 0.06); // Distant filtered thump
        this.playMusicTrack("CvSByNL1r48", 0.42, "assets/audio/track_bilmem_ben_de.mp3");
        break;

      case "ritim_vip":
        this._rampGain(this.droneGain, 0.05, rampTime);
        this._rampGain(this.windGain, 0.001, rampTime);
        this._rampGain(this.rainGain, 0.001, rampTime);
        this.startClubThump(120, 0.10);
        this.stopMusicTrack();
        break;

      case "ritim_backstage":
        this._rampGain(this.droneGain, 0.07, rampTime);
        this._rampGain(this.windGain, 0.001, rampTime);
        this._rampGain(this.rainGain, 0.001, rampTime);
        this.startClubThump(124, 0.18);
        this.stopMusicTrack();
        break;

      case "goksu_room":
      case "office":
        this._rampGain(this.droneGain, 0.04, rampTime);
        this._rampGain(this.windGain, 0.01, rampTime);
        this._rampGain(this.rainGain, 0.001, rampTime);
        this.stopClubThump();
        // Kenan söylüyor — Bu Şarkıyı Kaybedemem (Ritmi Bırakmam)
        this.playMusicTrack("-esQckmIMgQ", 0.45, "assets/audio/track_kaybedemem.mp3");
        break;

      case "dancefloor":
        this._rampGain(this.droneGain, 0.12, rampTime);
        this._rampGain(this.windGain, 0.001, rampTime);
        this._rampGain(this.rainGain, 0.001, rampTime);
        this.startClubThump(124, 0.24);
        // Kenan söylüyor; Murat ve Ekrem dans pistinde dans ediyor — Hırsız
        this.playMusicTrack("KFrAv440Rmg", 0.52, "assets/audio/track_hirsiz.mp3");
        break;

      case "hill":
        this._rampGain(this.droneGain, 0.06, rampTime);
        this._rampGain(this.windGain, 0.14, rampTime); // Restrained cold night breeze
        this._rampGain(this.rainGain, 0.001, rampTime);
        this.stopClubThump();
        // Murat söylüyor — Bilmem, Ben De
        this.playMusicTrack("CvSByNL1r48", 0.48, "assets/audio/track_bilmem_ben_de.mp3");
        break;

      case "lake":
      case "lake_candle":
        this._rampGain(this.droneGain, 0.07, rampTime);
        this._rampGain(this.windGain, 0.05, rampTime);
        this._rampGain(this.rainGain, 0.09, rampTime); // Gentle lake rain
        this.stopClubThump();
        // Bahar söylüyor — Bataklık
        this.playMusicTrack("yFymvGwoxjA", 0.52, "assets/audio/track_bataklik.mp3");
        break;

      case "home":
      case "home_interior":
        this._rampGain(this.droneGain, 0.03, rampTime);
        this._rampGain(this.windGain, 0.015, rampTime);
        this._rampGain(this.rainGain, 0.03, rampTime);
        this.stopClubThump();
        this.stopMusicTrack();
        break;

      case "garden":
        this._rampGain(this.droneGain, 0.05, rampTime);
        this._rampGain(this.windGain, 0.07, rampTime);
        this._rampGain(this.rainGain, 0.001, rampTime);
        this.stopClubThump();
        this.stopMusicTrack();
        break;

      case "studio":
        this._rampGain(this.droneGain, 0.04, rampTime);
        this._rampGain(this.windGain, 0.005, rampTime);
        this._rampGain(this.rainGain, 0.001, rampTime);
        this.stopClubThump();
        // Kenan stüdyoda demo kaydediyor — Gospel Baby (Kenan)
        this.playMusicTrack("K35AtsZEl5o", 0.52, "assets/audio/track_gospel_baby_kenan.mp3");
        break;

      case "accounting":
        this._rampGain(this.droneGain, 0.04, rampTime);
        this._rampGain(this.windGain, 0.005, rampTime);
        this._rampGain(this.rainGain, 0.001, rampTime);
        this.stopClubThump();
        this.stopMusicTrack();
        break;

      default: // Master canvas / wide map
        this._rampGain(this.droneGain, 0.07, rampTime);
        this._rampGain(this.windGain, 0.035, rampTime);
        this._rampGain(this.rainGain, 0.001, rampTime);
        this.stopClubThump();
        this.stopMusicTrack();
        break;
    }
  }

  setAmbientVolume(vol = 0.42) {
    if (this.ambientGain && this.ctx) {
      this._rampGain(this.ambientGain, vol, 0.4);
    }
  }

  playMusicTrack(trackOrId, volume = 0.5, fallbackSrc = null) {
    if (!trackOrId) return;

    if (this.currentTrack === trackOrId) {
      this.setMusicVolume(volume);
      return;
    }

    this.currentTrack = trackOrId;
    this.currentFallbackSrc = fallbackSrc;
    this.currentVolume = volume;

    // 11 karakterli YouTube Video ID kontrolü (örn. yFymvGwoxjA)
    const isYouTubeId = typeof trackOrId === "string" && !trackOrId.includes("/") && !trackOrId.includes(".") && trackOrId.length === 11;

    if (isYouTubeId) {
      if (this.isYTReady && this.ytPlayer && typeof this.ytPlayer.loadVideoById === "function") {
        try {
          if (this.musicElement) this.musicElement.pause();
          this.ytPlayer.loadVideoById({
            videoId: trackOrId,
            startSeconds: 0
          });
          this.ytPlayer.setVolume(Math.round(volume * 100));
          if (this.isMuted) {
            this.ytPlayer.mute();
          } else {
            this.ytPlayer.unMute();
          }
          this.ytPlayer.playVideo();
          return;
        } catch (e) {
          console.warn("YouTube loadVideoById failed; fallback to local audio:", e);
        }
      } else {
        // YouTube API henüz hazır değilse kuyruğa al ve yedek dosyayı çal
        this.pendingYTTrack = { trackOrId, volume, fallbackSrc };
        if (fallbackSrc) {
          this._playLocalAudio(fallbackSrc, volume);
        }
        return;
      }
    }

    const localSrc = fallbackSrc || trackOrId;
    this._playLocalAudio(localSrc, volume);
  }

  _playLocalAudio(src, volume = 0.5) {
    if (!this.musicElement) return;
    if (this.musicElement.src.endsWith(src) && !this.musicElement.paused) return;
    this.musicElement.src = src;
    this.musicElement.volume = volume;
    this.musicElement.play().catch(e => console.log("Audio waiting for user gesture:", e));
    if (this.musicGain) {
      this._rampGain(this.musicGain, volume, 1.2);
    }
  }

  stopMusicTrack() {
    if (this.ytPlayer && typeof this.ytPlayer.pauseVideo === "function") {
      try {
        this.ytPlayer.pauseVideo();
      } catch (e) {}
    }
    if (this.musicElement) {
      this.musicElement.pause();
    }
    this.currentTrack = null;
  }

  _rampGain(node, targetVal, duration) {
    if (!node || !this.ctx) return;
    const now = this.ctx.currentTime;
    node.gain.cancelScheduledValues(now);
    node.gain.setValueAtTime(node.gain.value, now);
    node.gain.linearRampToValueAtTime(targetVal, now + duration);
  }

  toggleMute() {
    if (!this.masterGain || !this.ctx) return false;
    this.isMuted = !this.isMuted;
    const now = this.ctx.currentTime;
    if (this.isMuted) {
      this.masterGain.gain.setValueAtTime(0, now);
      if (this.musicElement) this.musicElement.muted = true;
      if (this.ytPlayer && typeof this.ytPlayer.mute === "function") {
        try { this.ytPlayer.mute(); } catch (e) {}
      }
    } else {
      this.masterGain.gain.setValueAtTime(0.7, now);
      if (this.musicElement) this.musicElement.muted = false;
      if (this.ytPlayer && typeof this.ytPlayer.unMute === "function") {
        try { this.ytPlayer.unMute(); } catch (e) {}
      }
    }
    return this.isMuted;
  }
}

window.SUSSUZ_AUDIO = new AudioEngine();

// Global YouTube IFrame API Ready Callback
window.onYouTubeIframeAPIReady = function() {
  if (window.SUSSUZ_AUDIO) {
    window.SUSSUZ_AUDIO.initYouTubePlayer();
  }
};

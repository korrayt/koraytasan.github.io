/**
 * SUSSUZ — Kesintisiz Yaşayan Evren & Sinematik Spatial Canvas
 * Temizlenmiş Arka Plan (clean_susuz_map.jpg: 1376x768) + Bağımsız Katmanlı Ek-3 Tipografi & Oklar
 * Parallax ayrıştırması: Yazılar ve oklar arka planla birleşik değil, bağımsız derinlik katmanında süzülür.
 */

const GOSPEL_BABY_LYRICS = [
  { en: "You left your boots by the door, I still trip on them sometimes", tr: "Yu left yor buts bay dı dor, ay stil trip on dım samtaymz" },
  { en: "There's a dent in the screen door from that storm back in July", tr: "Derz ı dent in dı skrin dor, from det storm bek in Culay" },
  { en: "Your name's still on the coffee mug by the sink where it was", tr: "Yor neymz stil on dı kafi mag, bay dı sink ver it wız" },
  { en: "I tell myself I moved on... how still does", tr: "Ay tel mayself ay muvd on... hau stil daz" },
  { en: "And every little room keeps turning back around", tr: "End evri lidıl rum kiips törning bek ıraund" },
  { en: "One good memory can shake all time", tr: "Van gud memıri ken şeyk ol taym" },
  { en: "Tell me gospel baby, that's what you taught me", tr: "Tel mi gaspıl beybi, dets vat yu tot mi" },
  { en: "How to sing it loud when the road gets rocky", tr: "Hau tı sing it laud, ven dı roud gets raki" },
  { en: "Tell me gospel baby, burning in my bones", tr: "Tel mi gaspıl beybi, börning in may bonz" },
  { en: "If I'm gonna lose you, I won't lose this song", tr: "İf aym gana luz yu, ay wont luz dis song" },
  { en: "Tryin' to outrun, drive past your old place", tr: "Trayın tı autran, drayv pest yor old pleys" },
  { en: "Slow on county road nine", tr: "Slou on kaunti roud nayn" },
  { en: "It might be just like you were last time", tr: "İt mayt bi cast layk yu vör lest taym" },
  { en: "But every little mile keeps calling out your name", tr: "Bat evri lidıl mayl kiips koling aut yor neym" },
  { en: "And I can't tell if it hurts or if it's safe", tr: "End ay kent tel if it hörts, or if its seyf" },
  { en: "Look at gospel baby, that's what you taught me", tr: "Luk et gaspıl beybi, dets vat yu tot mi" },
  { en: "How to sing it loud when the road gets rocky", tr: "Hau tı sing it laud, ven dı roud gets raki" },
  { en: "Look at gospel baby, burning in my bones", tr: "Luk et gaspıl beybi, börning in may bonz" },
  { en: "If I'm gonna lose you, I won't lose this song", tr: "İf aym gana luz yu, ay wont luz dis song" },
  { en: "If this is where we end, then let it end in key", tr: "İf dis iz ver vi end, den let it end in kii" },
  { en: "With the whole back roasting what you meant to me", tr: "Vid dı houl bek rousting, vat yu ment tı mi" },
  { en: "Tell me gospel baby, that's what you taught me", tr: "Tel mi gaspıl beybi, dets vat yu tot mi" },
  { en: "How to sing it loud when the road gets rocky", tr: "Hau tı sing it laud, ven dı roud gets raki" },
  { en: "Tell me gospel baby, burning in my bones", tr: "Tel mi gaspıl beybi, börning in may bonz" },
  { en: "If I'm gonna lose you, I won't lose this song", tr: "İf aym gana luz yu, ay wont luz dis song" },
  { en: "Will you be able to hear me sing it loud?", tr: "Vil yu bi eybıl tı hir mi sing it laud?" },
  { en: "Sing it loud when the road gets rocky", tr: "Sing it laud ven dı roud gets raki" },
  { en: "Tell me gospel baby, burning in my bones", tr: "Tel mi gaspıl beybi, börning in may bonz" },
  { en: "If I'm gonna lose you, I won't lose this song", tr: "İf aym gana luz yu, ay wont luz dis song" },
  { en: "If I'm gonna lose you, I won't lose this song...", tr: "İf aym gana luz yu, ay wont luz dis song..." }
];
window.GOSPEL_BABY_LYRICS = GOSPEL_BABY_LYRICS;

class SpatialUniverse {
  constructor(canvas, onSceneChangeCallback, onObjectClickCallback) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.onSceneChange = onSceneChangeCallback;
    this.onObjectClick = onObjectClickCallback;

    // Kanonik Temiz Harita Boyutları (1376 x 768)
    this.worldWidth = 1376;
    this.worldHeight = 768;
    this.baseZoom = 1.0;

    // Kamera ve Parallax Fiziği
    this.camera = {
      x: 688,
      y: 384,
      targetX: 688,
      targetY: 384,
      zoom: 1.0,
      targetZoom: 1.0,
      minZoom: 0.85,
      maxZoom: 2.8
    };

    // Sahne İçi Kamera Sürükleme Ofseti
    this.sceneOffset = { x: 0, y: 0, targetX: 0, targetY: 0 };

    this.mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      worldX: 688,
      worldY: 384,
      isDown: false,
      lastX: 0,
      lastY: 0,
      dragDist: 0
    };

    this.parallax = { x: 0, y: 0, targetX: 0, targetY: 0 };

    // Evren Durumu: 'panorama' veya 'scene'
    this.viewMode = "panorama";
    this.activeSceneId = null;
    this.sceneFade = 0.0;

    // Yeraltı Geçiş Durumu (Göl Mum Üfleme)
    this.isUnderground = false;
    this.undergroundDepth = 0.0;

    // Görseller Havuzu (Preload) — Kanonik Dosya Yolları
    this.images = {
      panorama: this._loadImg("assets/img/clean_susuz_map.jpg"),
      ritim: this._loadImg("assets/img/loc_ritim.jpg"),
      ritim_interior: this._loadImg("assets/img/loc_ritim_interior.jpg"),
      ritim_road: this._loadImg("assets/img/loc_ritim_road.jpg"),
      goksu_room: this._loadImg("assets/img/loc_office.jpg"),
      dancefloor: this._loadImg("assets/img/scene_dancefloor.png"),
      ritim_vip: this._loadImg("assets/img/loc_ritim_vip.jpg"),
      ritim_backstage: this._loadImg("assets/img/loc_ritim_backstage.jpg"),
      hill: this._loadImg("assets/img/loc_hill.jpg"),
      lake: this._loadImg("assets/img/bataklik_ek3_visual.jpg"),
      lake_candle: this._loadImg("assets/img/scene_lake.png"),
      garden: this._loadImg("assets/img/scene_garden.png"),
      home_interior: this._loadImg("assets/img/scene_bahar_home.png"),
      home_kitchen: this._loadImg("assets/img/scene_bahar_kitchen.jpg"),
      studio: this._loadImg("assets/img/loc_studio.jpg"),
      studio_ekrem: this._loadImg("assets/img/loc_studio_ekrem.jpg"),
      murat_home: this._loadImg("assets/img/loc_murat_home.jpg"),
      accounting: this._loadImg("assets/img/loc_accounting.jpg")
    };

    // Dinamik Katman: Harita Üzerinde Bağımsız Süzülen Sektörler, Oklar ve Etiketler
    this.sectors = [
      {
        id: "lake",
        name: "GÖL KENARI",
        subtitle: "DENİZ FENERİ // DİLEK'İN DOĞUM GÜNÜ",
        x: 155,
        y: 580,
        radius: 26,
        labelX: 155,
        labelY: 480,
        arrowType: "down",
        color: "rgba(92, 124, 250, "
      },
      {
        id: "ritim",
        name: "RİTİM",
        subtitle: "ADA RESTORAN GECE KULÜBÜ",
        x: 555,
        y: 345,
        radius: 28,
        labelX: 555,
        labelY: 275,
        arrowType: "down",
        color: "rgba(224, 49, 49, "
      },
      {
        id: "hill",
        name: "TEPE",
        subtitle: "AŞIKLAR TEPESİ // ANKARA AYAZI",
        x: 1165,
        y: 120,
        radius: 26,
        labelX: 1220,
        labelY: 70,
        arrowType: "down_left",
        color: "rgba(235, 94, 40, "
      },
      {
        id: "murat_home",
        name: "MURAD'IN EVİ",
        subtitle: "KUZEY BLOKLARI // PENTHOUSE",
        x: 395,
        y: 175,
        radius: 24,
        labelX: 395,
        labelY: 110,
        arrowType: "down",
        color: "rgba(56, 178, 172, "
      },
      {
        id: "studio",
        name: "KENAN'IN STÜDYOSU",
        subtitle: "BATI YAKASI SES ATÖLYESİ",
        x: 185,
        y: 320,
        radius: 24,
        labelX: 110,
        labelY: 265,
        arrowType: "down_right",
        color: "rgba(255, 107, 107, "
      },
      {
        id: "home_interior",
        name: "BAHAR'IN EVİ",
        subtitle: "SEÇİLMİŞ AİLE // SALON",
        x: 1130,
        y: 435,
        radius: 24,
        labelX: 1070,
        labelY: 375,
        arrowType: "down_right",
        color: "rgba(255, 212, 59, "
      },
      {
        id: "garden",
        name: "BAHÇE",
        subtitle: "TERAS BAHÇE // ATA VE KENAN",
        x: 1220,
        y: 430,
        radius: 22,
        labelX: 1280,
        labelY: 375,
        arrowType: "down_left",
        color: "rgba(105, 219, 124, "
      }
    ];

    // Sahne İçi İnteraktif Sıcak Noktalar (Normalized: 0.0 - 1.0)
    // Kalp kuralı: Kişilerle ilgili etkileşimler kafayı/gözü kapatmayacak şekilde kalp/göğüs hizasına yerleştirilmiştir.
    this.sceneHotspots = {
      lake: [
        { 
          id: "lake_dialogue", 
          name: "BAHAR İLE KONUŞ", 
          relX: 0.255, 
          relY: 0.540, 
          icon: "💬", 
          subtitle: "İSKELEDE TEK BAŞINA BİR SES", 
          action: "dialogue", 
          charId: "bahar", 
          desc: "Bahar ile yüz yüze gelin." 
        },
        { 
          id: "lake_to_candle", 
          name: "MUMU YAK // ANMA MASASINA GEÇ", 
          relX: 0.120, 
          relY: 0.850, 
          icon: "🕯️", 
          subtitle: "DİLEK BAHAR'IN DOĞUM GÜNÜ PASTASI", 
          action: "fly_subvenue", 
          target: "lake_candle", 
          desc: "Bahar tek başına getirdiği pastayı çıkarır. Dilek'in kanı üzerine kurulu parkta, göl kıyısında tek bir mum yakar. Doğum günü anma masasına geçin." 
        },
        { 
          id: "lake_fountain", 
          name: "KARŞI KIYIYA BAK", 
          relX: 0.435, 
          relY: 0.480, 
          icon: "🌊", 
          subtitle: "BATAKLIK ÜZERİNE DİKİLEN BLOKLAR // ERYAMAN", 
          action: "prop", 
          propName: "Karşı Kıyı ve Fıskiye", 
          desc: "Gölün karşısında sıralanan beton rezidans blokları ve fıskiye. Bir zamanlar bataklık olan, Dilek'in kaybolduğu yer şimdi yapay bir park..." 
        },
        { 
          id: "lake_music", 
          name: "BATAKLIK'I DİNLE", 
          relX: 0.255, 
          relY: 0.380, 
          icon: "🎵", 
          subtitle: "BAHAR — BATAKLIK // SUSSUZ SOUNDTRACK", 
          action: "music", 
          src: "yFymvGwoxjA", 
          fallbackSrc: "assets/audio/track_bataklik.mp3", 
          desc: "Bahar tek başına, Dilek'in kanı üzerine kurulmuş parkta doğum günü pastasını üflerken söylüyor." 
        },
        { 
          id: "lake_to_ritim", 
          name: "RİTİM GECE KULÜBÜ", 
          relX: 0.900, 
          relY: 0.380, 
          icon: "⚡", 
          subtitle: "ADADAKİ NEON IŞIKLAR // GEÇİŞ YAP", 
          action: "fly_subvenue", 
          target: "ritim", 
          desc: "İskelenin sağında, ahşap köprünün bağlandığı adada kırmızı neonlarıyla parlayan RİTİM görünüyor. Kulübe geçin." 
        },
        { 
          id: "lake_note", 
          name: "İSKELEYE BİR CÜMLE BIRAK", 
          relX: 0.550, 
          relY: 0.880, 
          icon: "✍️", 
          subtitle: "GÖLE VE GECEYE FISILDA", 
          action: "note", 
          desc: "Göl kenarındaki ahşap iskele korkuluğuna fısıldanmış bir not bırak." 
        }
      ],

      lake_candle: [
        { 
          id: "lake_candle_blow", 
          name: "DOĞUM GÜNÜ PASTASI", 
          relX: 0.520, 
          relY: 0.740, 
          icon: "🕯️", 
          subtitle: "DİLEK İÇİN BİR DİLEK TUT // ANMA", 
          action: "candle", 
          desc: "Bahar bu mumu her gün yakmıyor. O gün Dilek'in doğum günü olduğu için kendi yaptığı pastayı almış gitmiş; göl kenarında, Dilek'in kanı üzerine kurulmuş bir parkta onun doğum günü pastasını üflüyor..." 
        },
        { 
          id: "lake_candle_dialogue", 
          name: "BAHAR İLE YÜZLEŞ", 
          relX: 0.500, 
          relY: 0.440, 
          icon: "💬", 
          subtitle: "SÖYLENMEYENLERİN BAŞLANGICI", 
          action: "dialogue", 
          charId: "bahar", 
          desc: "Bahar ile göz göze gelin." 
        },
        { 
          id: "lake_lighthouse_distant", 
          name: "GÖKSU DENİZ FENERİ", 
          relX: 0.755, 
          relY: 0.510, 
          icon: "🌊", 
          subtitle: "GÖLÜN KARŞI KIYISINDAKİ IŞIK", 
          desc: "Gölün karşı kıyısındaki ışık ve su yansıması." 
        },
        { 
          id: "lake_candle_to_pier", 
          name: "FENERİN DİBİNDEKİ İSKELE", 
          relX: 0.630, 
          relY: 0.865, 
          icon: "🪵", 
          subtitle: "TAHTASI NOT BIRAK", 
          action: "fly_subvenue", 
          target: "lake", 
          desc: "İskele tahtasına bir not bırakın veya geniş açı göl manzarasına dönün." 
        }
      ],

      ritim: [
        { 
          id: "ritim_enter", 
          name: "İÇERİ GİR", 
          relX: 0.225, 
          relY: 0.650, 
          icon: "🚪", 
          subtitle: "RİTİM GECE KULÜBÜ // ANA SALON", 
          action: "fly_subvenue", 
          target: "ritim_interior", 
          desc: "Ritim'in neon ışıklı kapısından içeri adım atın. Baslar duvarları titretiyor, içeride prömiyer var." 
        },
        { 
          id: "ritim_stop_murat", 
          name: "MURAD'I DURDUR", 
          relX: 0.650, 
          relY: 0.680, 
          icon: "✋", 
          subtitle: "KEREM YOLA ATLADI // 1. BÖLÜM FİNALİ", 
          action: "fly_subvenue", 
          target: "ritim_road", 
          desc: "Kerem yolun ortasına çıkarak Murad'ın Mustang'ini durdurur: 'Sana gerisini göstereceğim.' 1. bölüm final sahnesine geçiş yapın." 
        }
      ],

      ritim_interior: [
        { 
          id: "interior_stage_song", 
          name: "SAHNEDE KENAN'I DİNLE", 
          relX: 0.305, 
          relY: 0.485, 
          icon: "🎵", 
          subtitle: "KENAN — HIRSIZ [RİTİM SAHNESİ]", 
          action: "music", 
          src: "KFrAv440Rmg", 
          fallbackSrc: "assets/audio/track_hirsiz.mp3", 
          desc: "Dev ekranlarda Kenan, RİTİM logosu ve yeni parçanın prömiyeri. İlk beat giriyor, kalabalık bağırıyor." 
        },
        { 
          id: "interior_to_goksu", 
          name: "GÖKSU'NUN CAM OFİSİNE ÇIK", 
          relX: 0.735, 
          relY: 0.220, 
          icon: "🪟", 
          subtitle: "PİSTİ TEPEDEN İZLEYEN SES GEÇİRMEZ ODA", 
          action: "fly_subvenue", 
          target: "goksu_room", 
          desc: "Yukarıda Göksu'nun ses yalıtımlı cam ofisi görünüyor; loş ışıkta aşağıdaki pisti akvaryum gibi izliyor. Kenan ve Göksu sahnesine geçin." 
        },
        { 
          id: "interior_balcony_dialogue", 
          name: "MURAD VE KEREM İLE YÜZLEŞ", 
          relX: 0.585, 
          relY: 0.720, 
          icon: "💬", 
          subtitle: "'OĞLUM...' // SAHNE DİYALOĞU", 
          action: "dialogue", 
          charId: "murat_ekrem_balcony", 
          desc: "Müzik değişiyor. Karanlık ekranlar bir anda açılıyor. Dev ekranda KENAN, RİTİM logosu... Murad oğlunu görüyor: 'Ben yapamadım... Göksu yaptı.'" 
        },
        { 
          id: "interior_to_dancefloor", 
          name: "MURAD'I DANSA GÖTÜR", 
          relX: 0.360, 
          relY: 0.820, 
          icon: "⚡", 
          subtitle: "KEREM ELİNİ UZATIYOR // 'AYIP LAN ÇOCUĞA'", 
          action: "fly_subvenue", 
          target: "dancefloor", 
          desc: "Kerem gülerek elini uzatır: 'Oğlunun şarkısında surat asma. Ayıp lan çocuğa.' Murad'ı yeniden pistin içine çeker." 
        },
        { 
          id: "interior_to_vip", 
          name: "VIP LOCAYA ÇIK", 
          relX: 0.880, 
          relY: 0.380, 
          icon: "🍸", 
          subtitle: "ŞU AN SAHNESİ YOK (YAZILIYOR :D)", 
          action: "fly_subvenue", 
          target: "ritim_vip", 
          desc: "Asma kat VIP loca bölümü. Senaryo yazımı devam ediyor." 
        },
        { 
          id: "interior_to_backstage", 
          name: "KULİSE GEÇ", 
          relX: 0.140, 
          relY: 0.620, 
          icon: "🎭", 
          subtitle: "SAHNE ARKASI VE HAZIRLIK", 
          action: "fly_subvenue", 
          target: "ritim_backstage", 
          desc: "Kenan ve ekibin hazırlandığı sahne arkası koridoru." 
        },
        { 
          id: "interior_to_accounting", 
          name: "PRODÜKSİYON MASASINA BAK", 
          relX: 0.920, 
          relY: 0.900, 
          icon: "📋", 
          subtitle: "CANLI İHTİYAÇLAR VE KATKI HAVUZU", 
          action: "fly_subvenue", 
          target: "accounting", 
          desc: "Prodüksiyon ihtiyaçları ve sponsorluk masası." 
        },
        { 
          id: "interior_to_exterior", 
          name: "KAPIYA / DIŞARI DÖN", 
          relX: 0.060, 
          relY: 0.900, 
          icon: "🚪", 
          subtitle: "RİTİM GİRİŞİ // MEKÂN ÖNÜ", 
          action: "fly_subvenue", 
          target: "ritim", 
          desc: "Kulüp çıkışına dönün." 
        }
      ],

      ritim_road: [
        { id: "road_moment", name: "ANAHTARI CEBİNE AT", relX: 0.500, relY: 0.550, icon: "✋", subtitle: "KEREM: 'SANA GERİSİNİ GÖSTERECEĞİM'", action: "prop", propName: "Kerem'in Murad'ı Durdurduğu An", desc: "KEREM: 'Sana gerisini göstereceğim.' Murad Mustang anahtarını cebine atar; gece henüz bitmemiştir." },
        { id: "road_dialogue", name: "KEREM İLE KONUŞ", relX: 0.380, relY: 0.680, icon: "💬", subtitle: "İKİ YABANCININ İLK TEMASI", action: "dialogue", charId: "ekrem", desc: "Kerem (Eku) ve Murad diyalog penceresini açın." },
        { id: "road_music", name: "RADYONUN SESİNİ AÇ", relX: 0.700, relY: 0.450, icon: "📻", subtitle: "MURAD — BİLMEM, BEN DE // SUSSUZ SOUNDTRACK", action: "music", src: "assets/audio/track_bilmem_ben_de.mp3", desc: "Ford Mustang radyosundan yükselen melodi." },
        { id: "road_to_club", name: "KULÜP GİRİŞİNE DÖN", relX: 0.850, relY: 0.750, icon: "🚪", subtitle: "RİTİM'İN IŞIKLARI", action: "fly_subvenue", target: "ritim", desc: "Kulüp önüne dönün." }
      ],

      dancefloor: [
        { id: "dance_glass_look", name: "CAM OFİSE YUKARI BAK", relX: 0.500, relY: 0.200, icon: "🪟", subtitle: "GÖKSU YUKARIDAN PİSTİ İZLİYOR", action: "fly_subvenue", target: "goksu_room", desc: "Tepedeki cam ofise bakın veya yukarı çıkın. Camın arkasından aşağıdaki pist loş bir akvaryum gibi izleniyor." },
        { id: "dance_touch", name: "ENSE TEMASINI HİSSET", relX: 0.520, relY: 0.520, icon: "⚡", subtitle: "KONTROLÜN KAYBI // 'ÖBÜR TARAFA GİTSEN BARA GİRİCEN'", action: "prop", propName: "Ense Teması", desc: "KEREM: 'Öbür tarafa gitsen bara giricen yarram.' Murad güler; hayatında ilk defa kontrolü bırakır." },
        { id: "dance_dialogue", name: "PİSTTE KEREM'E SOKUL", relX: 0.380, relY: 0.640, icon: "💬", subtitle: "POLİS VE TORBACI DİYALOĞU", action: "dialogue", charId: "ekrem", desc: "MURAD: 'Olm, polisim ben!' — KEREM (elini uzatarak): 'Merhaba ben de torbacı :D Kerem ben... ama sen kısaca Eku diyebilirsin'" },
        { id: "dance_track", name: "HIRSIZ'I DİNLE", relX: 0.700, relY: 0.400, icon: "🎵", subtitle: "KENAN — HIRSIZ // SUSSUZ SOUNDTRACK", action: "music", src: "KFrAv440Rmg", fallbackSrc: "assets/audio/track_hirsiz.mp3", desc: "Dans pistinde çalan 'HIRSIZ' bas riffi." },
        { id: "dance_to_interior", name: "GENEL SALONA BAK", relX: 0.160, relY: 0.740, icon: "🏛️", subtitle: "RİTİM İÇ MEKÂN GENEL GÖRÜNÜM", action: "fly_subvenue", target: "ritim_interior", desc: "Kulübün genel açısına dönün." },
        { id: "dance_to_vip", name: "VIP LOCAYA ÇIK", relX: 0.840, relY: 0.260, icon: "🍸", subtitle: "ASMA KATTAN PİSTE BAKIŞ", action: "fly_subvenue", target: "ritim_vip", desc: "VIP Locaya geçiş yapın." },
        { id: "dance_to_backstage", name: "KULİS KAPISINI İT", relX: 0.860, relY: 0.680, icon: "🎭", subtitle: "SAHNE ARKASINA GEÇ", action: "fly_subvenue", target: "ritim_backstage", desc: "Kulise geçiş yapın." },
        { id: "dance_return", name: "DIŞARIYA ÇIK", relX: 0.080, relY: 0.880, icon: "🚪", subtitle: "RİTİM GİRİŞİ", action: "fly_subvenue", target: "ritim", desc: "Girişe dönün." }
      ],

      goksu_room: [
        { id: "office_window", name: "CAMDAN PİSTİ İZLE", relX: 0.407, relY: 0.390, icon: "🪟", subtitle: "AŞAĞIDAKİ PİST LOŞ BİR AKVARYUM GİBİ", action: "fly_subvenue", target: "dancefloor", desc: "Camdan aşağıdaki dans pistine bakın; Murat ve Ekrem'in dans ettiği kalabalık görünüyor." },
        { id: "office_dialogue", name: "GÖKSU İLE YÜZLEŞ", relX: 0.225, relY: 0.703, icon: "💬", subtitle: "KENAN GÖKSU'YU OYALIYOR", action: "dialogue", charId: "kenan", desc: "Kenan ve Göksu ile konuşun." },
        { id: "office_file", name: "DOSYAYI AÇ", relX: 0.545, relY: 0.755, icon: "📁", subtitle: "BAHAR / DENİZ // YARIM KALAN SORUŞTURMA", action: "prop", propName: "Bahar / Deniz Dosyası", desc: "Göksu Murat'a: 'Yarım dosya... Yarısı yeter. Ne bildiğini öğren. Kiminle konuşman gerekiyorsa konuş.'" },
        { id: "office_song", name: "KAYBI DİNLE", relX: 0.727, relY: 0.716, icon: "🎵", subtitle: "KENAN — BU ŞARKIYI KAYBEDEMEM // SUSSUZ SOUNDTRACK", action: "music", src: "assets/audio/track_kaybedemem.mp3", desc: "Kenan'ın Göksu'ya dinlettiği parça: 'Duvarlarda izin / Odalarda sesin / Geçti modası artık o eski senin...'" },
        { id: "office_return", name: "CAM OFİSTEN ÇIK", relX: 0.920, relY: 0.650, icon: "🚪", subtitle: "RİTİM'E GERİ DÖN", action: "fly_subvenue", target: "ritim", desc: "Dışarıya dönün." }
      ],

      ritim_vip: [
        { id: "vip_status", name: "LOCA KAPISINI ARALA", relX: 0.500, relY: 0.500, icon: "🔒", subtitle: "ŞU AN SAHNESİ YOK (YAZILIYOR :D)", action: "locked_info", desc: "Şehrin bürokratları ve Susuz'un görünmeyen yüzleri için ayrılmış VIP loca bölümü. Senaryo yazımı devam ediyor." },
        { id: "vip_to_dance", name: "DANS PİSTİNE İN", relX: 0.320, relY: 0.660, icon: "⚡", subtitle: "ALT KATTAKİ KALABALIK", action: "fly_subvenue", target: "dancefloor", desc: "Dans pistine inin." },
        { id: "vip_to_exit", name: "KULÜBE DÖN", relX: 0.740, relY: 0.660, icon: "🚪", subtitle: "GİRİŞE DÖN", action: "fly_subvenue", target: "ritim", desc: "Girişe dönün." }
      ],

      ritim_backstage: [
        { id: "backstage_jacket", name: "DERİ CEKETE DOKUN", relX: 0.420, relY: 0.550, icon: "🧥", subtitle: "GÖKSU'NUN PARASI, KENAN'IN ÖFKESİ", action: "prop", propName: "Kenan'ın Sahne Ceketi", desc: "Göksu'nun parasıyla alınmış ama Kenan'ın öfkesini taşıyan kostüm." },
        { id: "backstage_mirror", name: "AYNADAKİ YAZIYI OKU", relX: 0.600, relY: 0.450, icon: "🪞", subtitle: "RUJLA YAZILMIŞ: 'GEÇTİ MODASI ARTIK O ESKİ SENİN...'", action: "prop", propName: "Kulis Aynası & Karalamalar", desc: "Ayna kenarına rujla yazılmış bir şarkı satırı: 'Geçti modası artık o eski senin...'" },
        { id: "backstage_to_dance", name: "PİSTE ADIM AT", relX: 0.780, relY: 0.650, icon: "⚡", subtitle: "CANLI PİST VE KALABALIK", action: "fly_subvenue", target: "dancefloor", desc: "Piste geçiş yapın." },
        { id: "backstage_return", name: "KULİSTEN ÇIK", relX: 0.220, relY: 0.700, icon: "🚪", subtitle: "RİTİM GİRİŞİ", action: "fly_subvenue", target: "ritim", desc: "Girişe dönün." }
      ],

      hill: [
        { 
          id: "hill_smoke", 
          name: "SİGARAYI PAYLAŞ", 
          relX: 0.695, 
          relY: 0.550, 
          icon: "🚬", 
          subtitle: "05:30 // ANKARA AYAZI // 'YANLIŞSA DA BENİM YANLIŞIM OLUR'", 
          action: "prop", 
          propName: "Sırayla İçilen Sigara", 
          desc: "KEREM (EKU): 'Dalga geçme. Ben hissettiğim şeye güvenirim. Yanlışsa da benim yanlışım olur. Başkasının lafıyla yanlış yapmaktan iyidir.'" 
        },
        { 
          id: "hill_dialogue", 
          name: "MURAD İLE KONUŞ", 
          relX: 0.610, 
          relY: 0.560, 
          icon: "💬", 
          subtitle: "MURAD VE KEREM // 'SENDE Bİ ŞEY VAR, İÇİM YAMUK DEMEDİ'", 
          action: "dialogue", 
          charId: "murat", 
          desc: "MURAD: 'Sende bi şey var, içim yamuk demedi. Bilimsel açıklaman bu mu?' — KEREM: 'He. TÜBİTAK.'" 
        },
        { 
          id: "hill_ekrem_dialogue", 
          name: "KEREM İLE KONUŞ", 
          relX: 0.785, 
          relY: 0.570, 
          icon: "💬", 
          subtitle: "KEREM'Sİ (EKU) // GÜVEN VE YANILGI", 
          action: "dialogue", 
          charId: "ekrem", 
          desc: "Kerem ayazda sigarasını çekerken Murad'a bakar: 'Ben hissettiğim şeye güvenirim.'" 
        },
        { 
          id: "hill_music", 
          name: "BİLMEM, BEN DE'Yİ DİNLE", 
          relX: 0.635, 
          relY: 0.940, 
          icon: "📻", 
          subtitle: "MURAD — BİLMEM, BEN DE // SUSSUZ SOUNDTRACK", 
          action: "music", 
          src: "CvSByNL1r48", 
          fallbackSrc: "assets/audio/track_bilmem_ben_de.mp3", 
          desc: "Ford Mustang Convertible (06 KNN 03) radyosundan yükselen soğuk ayaz melodisi." 
        },
        { 
          id: "hill_note", 
          name: "MUSTANG'E BİR NOT BIRAK", 
          relX: 0.890, 
          relY: 0.780, 
          icon: "✍️", 
          subtitle: "06 KNN 03 // TORPİDOYA FISILDA", 
          action: "note", 
          desc: "Üstü açık siyah Ford Mustang (06 KNN 03) torpidosuna anonim bir not iliştir." 
        }
      ],

      garden: [
        { 
          id: "garden_dialogue", 
          name: "ATA İLE KONUŞ", 
          relX: 0.435, 
          relY: 0.720, 
          icon: "💬", 
          subtitle: "SEÇİLMİŞ AİLE // ÇOCUĞUN DÜNYASI", 
          action: "dialogue", 
          charId: "ata", 
          desc: "Ata: 'Ata ile nasıl aile oldunuz?' Bu insanların ilişkileri yetişkinlerin meselesi değil sadece." 
        },
        { 
          id: "garden_kenan", 
          name: "KENAN İLE KONUŞ", 
          relX: 0.655, 
          relY: 0.580, 
          icon: "💬", 
          subtitle: "ABİLİK VE KORUYUCULUK", 
          action: "dialogue", 
          charId: "kenan", 
          desc: "Kenan bankta Ata'ya sevgi ve şefkatle gülümsüyor." 
        },
        { 
          id: "garden_car", 
          name: "TAHTA ARABAYI TUT", 
          relX: 0.535, 
          relY: 0.865, 
          icon: "🏎️", 
          subtitle: "KENAN'IN ATA İÇİN YONTTUĞU KIRMIZI ŞERİTLİ OYUNCAK", 
          action: "prop", 
          propName: "Kenan'ın Yonttuğu Araba", 
          desc: "Kenan'ın Ata için yonttuğu ve arkasına kırmızı şerit çektiği tahta oyuncak." 
        },
        { 
          id: "garden_swing", 
          name: "SALINCAĞA NOT KAZI", 
          relX: 0.220, 
          relY: 0.680, 
          icon: "✍️", 
          subtitle: "PASLI DEMİRE BİR CÜMLE BIRAK", 
          action: "note", 
          desc: "Salıncak demirine kazınmış bir not bırak." 
        }
      ],

      studio: [
        { 
          id: "studio_gospel_ekrem", 
          name: "🎙️ BU ŞARKIYI KEREM'DEN DİNLE", 
          relX: 0.886, 
          relY: 0.260, 
          icon: "⚡", 
          subtitle: "KEREM — GOSPEL BABY // CANLI KAYIT SEANSI", 
          action: "fly_subvenue", 
          target: "studio_ekrem", 
          desc: "Kenan Kerem'i ikna etti. Kerem stüdyoda it oturuşu, elinde mikrofon, dev ekranda akan şarkı sözleri... Şarkının hakiki sokak ruhu." 
        },
        { 
          id: "studio_dialogue", 
          name: "KENAN İLE KONUŞ", 
          relX: 0.443, 
          relY: 0.612, 
          icon: "💬", 
          subtitle: "MÜZİK VE SUSUZ ÜZERİNE", 
          action: "dialogue", 
          charId: "kenan", 
          desc: "Kenan ile müzik ve Susuz üzerine konuşun." 
        },
        { 
          id: "studio_gospel_kenan", 
          name: "KENAN'IN DEMOSUNU DİNLE", 
          relX: 0.276, 
          relY: 0.755, 
          icon: "🎵", 
          subtitle: "KENAN — GOSPEL BABY // SUSSUZ SOUNDTRACK", 
          action: "music", 
          src: "K35AtsZEl5o", 
          fallbackSrc: "assets/audio/track_gospel_baby_kenan.mp3", 
          desc: "Kenan'ın stüdyoda kaydettiği ilk demo. 'Daha Anadolu sesi lazım bu şarkıya... Keşke Kerem abi söylese.'" 
        },
        { 
          id: "studio_biri_varmis", 
          name: "DÜETİ DİNLE", 
          relX: 0.603, 
          relY: 0.716, 
          icon: "📻", 
          subtitle: "MURAD & KEREM — BİRİ VARMIŞ ÖTEKİ YOK OLMASIN", 
          action: "music", 
          src: "GLQcmdJsO5U", 
          fallbackSrc: "assets/audio/track_biri_varmis.mp3", 
          desc: "Murad ve Kerem beraber Bahar'a söylüyorlar." 
        },
        { 
          id: "studio_note", 
          name: "STÜDYO DEFTERİNE YAZ", 
          relX: 0.428, 
          relY: 0.885, 
          icon: "✍️", 
          subtitle: "MASADAKİ DEFTERE BİR SATIR BIRAK", 
          action: "note", 
          desc: "Stüdyo defterine bir satır bırak." 
        }
      ],

      studio_ekrem: [
        {
          id: "ekrem_vocal_heart",
          name: "KEREM İLE YÜZLEŞ // VOKAL",
          relX: 0.310,
          relY: 0.590,
          icon: "💬",
          subtitle: "KALPTE YANAN GOSPEL // KEREM DİYALOĞU",
          action: "dialogue",
          charId: "ekrem",
          desc: "Kerem tek elinde mikrofonla şarkıyı söylüyor. Gözlerinde öfke ve kırgınlık: 'Ben hissettiğim şeye güvenirim. Yanlışsa da benim yanlışım olur.'"
        },
        {
          id: "ekrem_mic",
          name: "MİKROFONU DİNLE // GOSPEL BABY",
          relX: 0.410,
          relY: 0.490,
          icon: "🎵",
          subtitle: "KEREM — GOSPEL BABY [SUSSUZ SOUNDTRACK]",
          action: "music",
          src: "mdPhJrnytkA",
          fallbackSrc: "assets/audio/track_gospel_baby_ekrem.mp3",
          desc: "Kerem'in söylediği Gospel Baby. Ham analog mikser kaydı."
        },
        {
          id: "studio_screen_lyrics",
          name: "LİRİK EKRANI // SÖZLER VE OKUNUŞ",
          relX: 0.216,
          relY: 0.110,
          icon: "📺",
          subtitle: "DEV TELEPROMPTER // TAM SÖZLER & TELAFUZ",
          action: "lyrics_modal",
          desc: "Stüdyodaki dev ekranda akan şarkı sözleri ve Türkçe fonetik telaffuzları."
        },
        {
          id: "kenan_heart",
          name: "KENAN İLE KONUŞ",
          relX: 0.675,
          relY: 0.530,
          icon: "💬",
          subtitle: "MÜZİĞİN VE RİTİM'İN PRODÜKTÖRÜ",
          action: "dialogue",
          charId: "kenan",
          desc: "Kenan konsol başında gülümsüyor, Kerem'in yorumunu heyecanla dinliyor."
        },
        {
          id: "kenan_mixer_desk",
          name: "KENAN'IN KONSOLU",
          relX: 0.720,
          relY: 0.780,
          icon: "🎛️",
          subtitle: "ANALOG FADERLAR & VU METRELER",
          action: "prop",
          propName: "Kenan'ın Mikser Ayarları",
          desc: "Kenan faderları dengeliyor. 'Daha Anadolu sesi lazım bu şarkıya... Kerem abi tam oturdu.'"
        },
        {
          id: "return_to_studio_desk",
          name: "KENAN'IN MASASINA DÖN",
          relX: 0.080,
          relY: 0.920,
          icon: "🎚️",
          subtitle: "GENEL SES ATÖLYESİ",
          action: "fly_subvenue",
          target: "studio",
          desc: "Kenan'ın stüdyo masasına geri dönün."
        }
      ],

      accounting: [
        { 
          id: "acc_board", 
          name: "İHTİYAÇ TABLOSUNU İNCELE", 
          relX: 0.203, 
          relY: 0.325, 
          icon: "📋", 
          subtitle: "KAMERA, SES VE CAST // CANLI DURUM", 
          action: "focus_tab", 
          section: "accounting", 
          desc: "Kamera, ses, kostüm ve cast ihtiyaçlarının anlık durumu." 
        },
        { 
          id: "acc_sponsor", 
          name: "PRODÜKSİYONA DESTEK OL", 
          relX: 0.390, 
          relY: 0.830, 
          icon: "🤝", 
          subtitle: "İKİ EKSENLİ KATKI PROTOKOLÜ", 
          action: "funding", 
          desc: "SUSSUZ prodüksiyonuna destek sağlama protokolü." 
        }
      ],

      home_interior: [
        { 
          id: "home_book", 
          name: "AŞK BİR AİLE YARATIR", 
          relX: 0.445, 
          relY: 0.720, 
          icon: "📖", 
          subtitle: "SOPHIE BEER // RESİMLİ ÇOCUK KİTABI", 
          action: "prop", 
          propName: "Aşk Bir Aile Yaratır (Sophie Beer)", 
          desc: "Bahar'ın Ata'ya okuduğu kitap: 'Aşk Bir Aile Yaratır' (Sophie Beer). Ailelerin sevgiyle kurulduğunu, kan bağı değil kalple var olduğunu anlatan rengarenk sayfalar." 
        },
        { 
          id: "home_bahar_dialogue", 
          name: "BAHAR İLE KONUŞ", 
          relX: 0.540, 
          relY: 0.540, 
          icon: "💬", 
          subtitle: "SEÇİLMİŞ AİLE // 'BİZ BİR AİLEYİZ ZATEN'", 
          action: "dialogue", 
          charId: "bahar", 
          desc: "Bahar oğlu Ata'ya sarılmış, şefkat ve koruyuculukla gülümsüyor. 'Bize aile dersi verenlere inat: Biz bir aileyiz zaten.'" 
        },
        { 
          id: "home_ata_dialogue", 
          name: "ATA İLE KONUŞ", 
          relX: 0.655, 
          relY: 0.680, 
          icon: "💬", 
          subtitle: "MASUMİYETİN VE SEVGİNİN DÜNYASI", 
          action: "dialogue", 
          charId: "ata", 
          desc: "Ata elinde mavi oyuncak arabasıyla Bahar annesini dinliyor. Dünyanın bütün kötülüklerinden uzakta, masumiyetin sıcaklığı." 
        },
        { 
          id: "home_to_kitchen", 
          name: "MUTFAĞA GEÇ // BUZDOLABINA NOT BIRAK", 
          relX: 0.900, 
          relY: 0.420, 
          icon: "🚪", 
          subtitle: "BOŞ MUTFAK & BUZDOLABI KAPAĞI", 
          action: "fly_subvenue", 
          target: "home_kitchen", 
          desc: "Loş koridordan mutfağa geçin; buzdolabının üzerindeki magnetlere anonim bir not iliştirin." 
        },
        { 
          id: "home_to_garden", 
          name: "APARTMAN BAHÇESİNE İN", 
          relX: 0.080, 
          relY: 0.880, 
          icon: "🌳", 
          subtitle: "ÇOCUK PARKI & KENAN'IN YONTTUĞU ARABA", 
          action: "fly_subvenue", 
          target: "garden", 
          desc: "Eryaman sitelerinin bahçesine, çocuk parkına inin." 
        }
      ],

      home_kitchen: [
        { 
          id: "kitchen_fridge_note", 
          name: "BUZDOLABINA NOT BIRAK", 
          relX: 0.665, 
          relY: 0.380, 
          icon: "✍️", 
          subtitle: "MAGNETLERE BİR CÜMLE İLİŞTİR", 
          action: "note", 
          desc: "Buzdolabı kapağındaki magnetlerin arasına anonim bir not bırakın. Evin sessizliğinde kalpten bir iz." 
        },
        { 
          id: "kitchen_table", 
          name: "AHŞAP MUTFAK MASASI", 
          relX: 0.500, 
          relY: 0.850, 
          icon: "🪑", 
          subtitle: "BOŞ VE SESSİZ // AKŞAM AYAZININ ARDINDAN", 
          action: "prop", 
          propName: "Ahşap Mutfak Masası", 
          desc: "Sarı sıcak sarkıt lambanın aydınlattığı boş ahşap masa. Mum ve pasta burada değil; Bahar onları göl kenarında Dilek'in anısına götürdü." 
        },
        { 
          id: "kitchen_to_livingroom", 
          name: "SALONA DÖN // BAHAR VE ATA", 
          relX: 0.150, 
          relY: 0.880, 
          icon: "🛋️", 
          subtitle: "KİTAP OKUMA SAHNESİ", 
          action: "fly_subvenue", 
          target: "home_interior", 
          desc: "Bahar ve Ata'nın kitap okuduğu sıcak salona geri dönün." 
        }
      ],

      murat_home: [
        { 
          id: "murat_view", 
          name: "GÖKDELENDEN ANKARA'YA BAK", 
          relX: 0.280, 
          relY: 0.440, 
          icon: "🌃", 
          subtitle: "AŞAĞIDAKİ SUSUZ'A TEPEDEN SOĞUK BİR BAKIŞ", 
          action: "prop", 
          propName: "Panoramik Ankara Camı", 
          desc: "Gökdelenin tepesinden aşağıdaki göle ve Susuz'un karanlık mahallelerine uzanan soğuk Ankara manzarası. Murad'ın Susuz'a ne kadar yabancı olduğunun sessiz kanıtı." 
        },
        { 
          id: "murat_file", 
          name: "MASADAKİ DOSYA VE ANAHTARLAR", 
          relX: 0.345, 
          relY: 0.800, 
          icon: "📁", 
          subtitle: "AÇILMAMIŞ DOSYA VE MUSTANG ANAHTARI", 
          action: "prop", 
          propName: "Masa Üzerindeki Dosya ve Mustang Anahtarı", 
          desc: "Ford Mustang'in kontak anahtarı ve açılmamış bir soruşturma dosyası. Şehre bakan camın önünde duran tek şey." 
        },
        { 
          id: "murat_dialogue", 
          name: "MURAD İLE YÜZLEŞ", 
          relX: 0.540, 
          relY: 0.690, 
          icon: "💬", 
          subtitle: "GÖKDELENİN TEPESİNDE SOĞUK YALNIZLIK", 
          action: "dialogue", 
          charId: "murat", 
          desc: "Murad'ın iç dünyasına ve Susuz soruşturmasına dair diyalog." 
        }
      ]
    };

    this.hoveredSector = null;
    this.hoveredHotspot = null;

    // Atmosferik parçacıklar
    this.particles = [];
    for (let i = 0; i < 90; i++) {
      this.particles.push({
        x: Math.random() * this.worldWidth,
        y: Math.random() * this.worldHeight,
        vx: (Math.random() - 0.5) * 0.3 - 0.1,
        vy: Math.random() * 0.5 + 0.25,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.35 + 0.05
      });
    }

    this._bindEvents();
    this._resize();
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  _loadImg(src) {
    const img = new Image();
    img.src = src;
    img.isLoaded = false;
    img.onload = () => { img.isLoaded = true; };
    img.onerror = () => {
      console.warn("Görsel yüklenemedi:", src);
      img.isLoaded = false;
    };
    if (img.complete && img.naturalWidth > 0) {
      img.isLoaded = true;
    }
    return img;
  }

  _resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    // Haritanın ekranı tamamen doldurması için temel ölçek
    this.baseZoom = Math.max(this.canvas.width / this.worldWidth, this.canvas.height / this.worldHeight);
    this.camera.minZoom = this.baseZoom * 0.85;
    this.camera.maxZoom = this.baseZoom * 2.8;

    if (this.viewMode === "panorama") {
      this.camera.targetZoom = this.baseZoom;
      this.camera.zoom = this.baseZoom;
    }
  }

  _getHotspotScreenPos(s, w, h) {
    const scale = 1.05;
    const offsetX = -this.parallax.x * 0.75 + this.sceneOffset.x;
    const offsetY = -this.parallax.y * 0.75 + this.sceneOffset.y - (this.undergroundDepth * h * 0.95);
    const imgLeft = offsetX - (w * (scale - 1)) / 2;
    const imgTop = offsetY - (h * (scale - 1)) / 2;
    return {
      x: imgLeft + s.relX * (w * scale),
      y: imgTop + s.relY * (h * scale)
    };
  }

  _bindEvents() {
    window.addEventListener("resize", () => this._resize());

    window.addEventListener("mousemove", (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;

      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      this.parallax.targetX = ((e.clientX - cx) / cx) * 32;
      this.parallax.targetY = ((e.clientY - cy) / cy) * 24;

      this.mouse.worldX = (e.clientX - this.canvas.width / 2) / this.camera.zoom + this.camera.x;
      this.mouse.worldY = (e.clientY - this.canvas.height / 2) / this.camera.zoom + this.camera.y;

      if (this.viewMode === "panorama") {
        this._checkSectorHover();
      } else {
        this._checkSceneHotspotHover();
      }

      // Sürükleme / Gezinme Fiziği
      if (this.mouse.isDown) {
        const dx = e.clientX - this.mouse.lastX;
        const dy = e.clientY - this.mouse.lastY;
        this.mouse.dragDist += Math.abs(dx) + Math.abs(dy);

        if (this.viewMode === "panorama") {
          this.camera.targetX -= dx / this.camera.zoom;
          this.camera.targetY -= dy / this.camera.zoom;
        } else {
          this.sceneOffset.targetX = Math.max(-120, Math.min(120, this.sceneOffset.targetX + dx * 0.5));
          this.sceneOffset.targetY = Math.max(-80, Math.min(80, this.sceneOffset.targetY + dy * 0.5));
        }

        this.mouse.lastX = e.clientX;
        this.mouse.lastY = e.clientY;
      }
    });

    window.addEventListener("mousedown", (e) => {
      if (e.target.closest("#glassglowTab") || e.target.closest("#soundtrackModal") || e.target.closest("button") || e.target.closest("input") || e.target.closest("textarea") || e.target.closest("select")) {
        return;
      }
      this.mouse.isDown = true;
      this.mouse.lastX = e.clientX;
      this.mouse.lastY = e.clientY;
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
      this.mouse.worldX = (e.clientX - this.canvas.width / 2) / this.camera.zoom + this.camera.x;
      this.mouse.worldY = (e.clientY - this.canvas.height / 2) / this.camera.zoom + this.camera.y;
      this.mouse.dragDist = 0;
    });

    window.addEventListener("mouseup", (e) => {
      if (!this.mouse.isDown) return;
      this.mouse.isDown = false;
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
      this.mouse.worldX = (e.clientX - this.canvas.width / 2) / this.camera.zoom + this.camera.x;
      this.mouse.worldY = (e.clientY - this.canvas.height / 2) / this.camera.zoom + this.camera.y;

      if (this.mouse.dragDist < 14) {
        if (this.viewMode === "panorama") {
          this._checkSectorHover();
          if (this.hoveredSector) {
            this.flyToScene(this.hoveredSector.id);
          }
        } else if (this.viewMode === "scene") {
          this._checkSceneHotspotHover();
          if (this.hoveredHotspot) {
            const screenPos = this._getHotspotScreenPos(this.hoveredHotspot, this.canvas.width, this.canvas.height);
            if (this.hoveredHotspot.action === "fly_subvenue") {
              this.flyToScene(this.hoveredHotspot.target);
            } else if (this.onObjectClick) {
              this.onObjectClick(this.hoveredHotspot, this.activeSceneId, screenPos);
            }
          } else {
            // Clicked on empty canvas without drag: close contextual popup
            if (this.onCanvasEmptyClick) {
              this.onCanvasEmptyClick();
            }
          }
        }
      }
    });

    // Dokunmatik Ekran / Mobil ve Tablet Desteği (Tek parmak: Gezinme, Çift parmak: Pinch-to-Zoom)
    this.isPinching = false;
    this.initialPinchDist = 0;
    this.initialPinchZoom = 1;

    this.canvas.addEventListener("touchstart", (e) => {
      if (e.touches.length === 1) {
        this.isPinching = false;
        const t = e.touches[0];
        this.mouse.isDown = true;
        this.mouse.x = t.clientX;
        this.mouse.y = t.clientY;
        this.mouse.lastX = t.clientX;
        this.mouse.lastY = t.clientY;
        this.mouse.dragDist = 0;
        this.mouse.worldX = (t.clientX - this.canvas.width / 2) / this.camera.zoom + this.camera.x;
        this.mouse.worldY = (t.clientY - this.canvas.height / 2) / this.camera.zoom + this.camera.y;
      } else if (e.touches.length >= 2) {
        this.isPinching = true;
        this.mouse.isDown = false;
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        this.initialPinchDist = Math.hypot(dx, dy);
        this.initialPinchZoom = this.camera.targetZoom;
      }
    }, { passive: true });

    this.canvas.addEventListener("touchmove", (e) => {
      if (e.touches.length >= 2 && this.isPinching) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const curDist = Math.hypot(dx, dy);
        if (this.initialPinchDist > 8) {
          const ratio = curDist / this.initialPinchDist;
          this.camera.targetZoom = Math.max(
            this.camera.minZoom,
            Math.min(this.camera.maxZoom, this.initialPinchZoom * ratio)
          );
        }
        return;
      }

      if (!this.mouse.isDown || e.touches.length === 0) return;
      const t = e.touches[0];
      const dx = t.clientX - this.mouse.lastX;
      const dy = t.clientY - this.mouse.lastY;
      this.mouse.dragDist += Math.abs(dx) + Math.abs(dy);

      if (this.viewMode === "panorama") {
        this.camera.targetX -= dx / this.camera.zoom;
        this.camera.targetY -= dy / this.camera.zoom;
      } else {
        this.sceneOffset.targetX = Math.max(-120, Math.min(120, this.sceneOffset.targetX + dx * 0.5));
        this.sceneOffset.targetY = Math.max(-80, Math.min(80, this.sceneOffset.targetY + dy * 0.5));
      }

      this.mouse.lastX = t.clientX;
      this.mouse.lastY = t.clientY;
      this.mouse.x = t.clientX;
      this.mouse.y = t.clientY;
      this.mouse.worldX = (t.clientX - this.canvas.width / 2) / this.camera.zoom + this.camera.x;
      this.mouse.worldY = (t.clientY - this.canvas.height / 2) / this.camera.zoom + this.camera.y;
    }, { passive: true });

    this.canvas.addEventListener("touchend", (e) => {
      if (e.touches.length < 2) {
        this.isPinching = false;
      }
      if (!this.mouse.isDown) return;
      this.mouse.isDown = false;
      if (this.mouse.dragDist < 20) {
        if (this.viewMode === "panorama") {
          this._checkSectorHover();
          if (this.hoveredSector) {
            this.flyToScene(this.hoveredSector.id);
          }
        } else if (this.viewMode === "scene") {
          this._checkSceneHotspotHover();
          if (this.hoveredHotspot) {
            const screenPos = this._getHotspotScreenPos(this.hoveredHotspot, this.canvas.width, this.canvas.height);
            if (this.hoveredHotspot.action === "fly_subvenue") {
              this.flyToScene(this.hoveredHotspot.target);
            } else if (this.onObjectClick) {
              this.onObjectClick(this.hoveredHotspot, this.activeSceneId, screenPos);
            }
          }
        }
      }
    }, { passive: true });

    window.addEventListener("wheel", (e) => {
      if (e.target.closest("#glassglowTab") || e.target.closest("#soundtrackModal") || e.target.closest(".underground-overlay") || e.target.closest(".modal-overlay")) return;

      const factor = e.deltaY < 0 ? 1.08 : 0.92;

      if (this.viewMode === "panorama") {
        this.camera.targetZoom = Math.max(
          this.camera.minZoom,
          Math.min(this.camera.maxZoom, this.camera.targetZoom * factor)
        );
      } else {
        if (e.deltaY > 35) {
          this.returnToPanorama();
        }
      }
    }, { passive: true });
  }

  _checkSectorHover() {
    let closest = null;
    let minDist = Infinity;

    // Arka plandan hafifçe ayrışan bağımsız süzülme ofseti (Optik Derinlik)
    const floatDepthX = this.parallax.x * 0.22;
    const floatDepthY = this.parallax.y * 0.22;

    for (const sec of this.sectors) {
      // 1. Dairesel İşaretçi (Beacon) Etki Alanı
      const dxM = this.mouse.worldX - sec.x;
      const dyM = this.mouse.worldY - sec.y;
      const distM = Math.sqrt(dxM * dxM + dyM * dyM);

      // 2. Tipografi / Etiket Cam Kapsül (Label Box) Alanı
      const lx = sec.labelX + floatDepthX;
      const ly = sec.labelY + floatDepthY;
      const boxW = 180;
      const boxH = 40;

      let bMinX = lx;
      let bMaxX = lx + boxW;
      let bMinY = ly - 14;
      let bMaxY = ly + boxH;

      if (sec.arrowType === "down") {
        bMinX = lx - boxW / 2;
        bMaxX = lx + boxW / 2;
      } else if (sec.arrowType === "down_left") {
        bMinX = lx - boxW;
        bMaxX = lx;
      } else if (sec.arrowType === "down_right" || sec.arrowType === "up_right") {
        bMinX = lx;
        bMaxX = lx + boxW;
      }

      // Kutuya 28px tolerans ekle
      const inBox = (
        this.mouse.worldX >= bMinX - 28 &&
        this.mouse.worldX <= bMaxX + 28 &&
        this.mouse.worldY >= bMinY - 28 &&
        this.mouse.worldY <= bMaxY + 28
      );

      // Daireye tolerans: radius + 45
      const inMarker = distM < (sec.radius + 45);

      if (inMarker || inBox) {
        const effectiveDist = inBox ? 0 : distM;
        if (effectiveDist < minDist) {
          minDist = effectiveDist;
          closest = sec;
        }
      }
    }

    if (this.hoveredSector !== closest) {
      this.hoveredSector = closest;
      document.body.style.cursor = closest ? "pointer" : "default";
      if (closest && window.SUSSUZ_AUDIO) {
        window.SUSSUZ_AUDIO.playTypewriterClick();
      }
    }
  }

  _checkSceneHotspotHover() {
    if (!this.activeSceneId || !this.sceneHotspots[this.activeSceneId]) {
      this.hoveredHotspot = null;
      document.body.style.cursor = "default";
      return;
    }

    const spots = this.sceneHotspots[this.activeSceneId];
    const w = this.canvas.width;
    const h = this.canvas.height;
    let closest = null;
    let minDist = Infinity;

    for (const s of spots) {
      const pos = this._getHotspotScreenPos(s, w, h);
      const dx = this.mouse.x - pos.x;
      const dy = this.mouse.y - pos.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 48) {
        if (dist < minDist) {
          minDist = dist;
          closest = s;
        }
      }
    }

    if (this.hoveredHotspot !== closest) {
      this.hoveredHotspot = closest;
      document.body.style.cursor = closest ? "pointer" : "default";
      if (closest && window.SUSSUZ_AUDIO) {
        window.SUSSUZ_AUDIO.playTypewriterClick();
      }
    }
  }

  // Belirli bir sahneye derin sinematik dalış
  flyToScene(sceneId) {
    let sec = this.sectors.find(s => s.id === sceneId);
    if (!sec) {
      if (sceneId.startsWith("ritim") || sceneId === "dancefloor" || sceneId === "goksu_room" || sceneId === "accounting") {
        sec = this.sectors.find(s => s.id === "ritim") || { x: 545, y: 375 };
      } else if (sceneId.startsWith("studio")) {
        sec = this.sectors.find(s => s.id === "studio") || { x: 185, y: 320 };
      } else if (sceneId.startsWith("lake")) {
        sec = this.sectors.find(s => s.id === "lake") || { x: 140, y: 580 };
      } else if (sceneId.startsWith("home") || sceneId === "garden") {
        sec = this.sectors.find(s => s.id === "home_interior") || { x: 1240, y: 600 };
      } else {
        sec = { x: 688, y: 384 };
      }
    }
    this.viewMode = "scene";
    this.activeSceneId = sceneId;
    this.hoveredHotspot = null;
    this.sceneOffset = { x: 0, y: 0, targetX: 0, targetY: 0 };

    this.camera.targetX = sec.x;
    this.camera.targetY = sec.y;
    this.camera.targetZoom = this.baseZoom * 2.2;

    if (this.onSceneChange) {
      this.onSceneChange(sceneId);
    }
  }

  // Geniş Ankara Panoramasına geri süzül
  returnToPanorama() {
    this.viewMode = "panorama";
    this.activeSceneId = null;
    this.hoveredHotspot = null;
    this.sceneOffset = { x: 0, y: 0, targetX: 0, targetY: 0 };

    this.camera.targetX = this.worldWidth / 2;
    this.camera.targetY = this.worldHeight / 2;
    this.camera.targetZoom = this.baseZoom;

    if (this.onSceneChange) {
      this.onSceneChange(null);
    }
  }

  descendUnderground() {
    this.isUnderground = true;
  }

  ascendFromUnderground() {
    this.isUnderground = false;
  }

  animate(time) {
    this.parallax.x += (this.parallax.targetX - this.parallax.x) * 0.05;
    this.parallax.y += (this.parallax.targetY - this.parallax.y) * 0.05;

    this.sceneOffset.x += (this.sceneOffset.targetX - this.sceneOffset.x) * 0.06;
    this.sceneOffset.y += (this.sceneOffset.targetY - this.sceneOffset.y) * 0.06;

    this.camera.x += (this.camera.targetX + this.parallax.x - this.camera.x) * 0.05;
    this.camera.y += (this.camera.targetY + this.parallax.y - this.camera.y) * 0.05;
    this.camera.zoom += (this.camera.targetZoom - this.camera.zoom) * 0.05;

    const targetFade = this.viewMode === "scene" ? 1.0 : 0.0;
    this.sceneFade += (targetFade - this.sceneFade) * 0.06;

    const targetUnderground = this.isUnderground ? 1.0 : 0.0;
    this.undergroundDepth += (targetUnderground - this.undergroundDepth) * 0.04;

    this._render(time);
    requestAnimationFrame(this.animate);
  }

  _render(time) {
    const { ctx, canvas } = this;
    const w = canvas.width;
    const h = canvas.height;

    ctx.clearRect(0, 0, w, h);

    // =========================================================================
    // KATMAN 1: Canlı Sahne Plakası (Sahneye dalındığında tüm ekranı kaplar)
    // =========================================================================
    if (this.sceneFade > 0.01 && this.activeSceneId) {
      const activeImg = this.images[this.activeSceneId] || this.images.panorama;
      if (activeImg && activeImg.isLoaded) {
        ctx.save();
        ctx.globalAlpha = Math.min(1.0, this.sceneFade);

        const offsetX = -this.parallax.x * 0.75 + this.sceneOffset.x;
        const offsetY = -this.parallax.y * 0.75 + this.sceneOffset.y - (this.undergroundDepth * h * 0.95);
        const scale = 1.05;

        ctx.drawImage(
          activeImg,
          offsetX - (w * (scale - 1)) / 2,
          offsetY - (h * (scale - 1)) / 2,
          w * scale,
          h * scale
        );

        const sceneGrad = ctx.createLinearGradient(0, 0, 0, h);
        sceneGrad.addColorStop(0, "rgba(2, 3, 5, 0.42)");
        sceneGrad.addColorStop(0.5, "rgba(0, 0, 0, 0.05)");
        sceneGrad.addColorStop(1, "rgba(2, 3, 5, 0.78)");
        ctx.fillStyle = sceneGrad;
        ctx.fillRect(0, 0, w, h);

        this._renderSceneHotspots(ctx, time, w, h);

        ctx.restore();
      }
    }

    // =========================================================================
    // KATMAN 2: Geniş Ankara Panoraması (Temiz Harita + Dinamik Ek-3 Katmanı)
    // =========================================================================
    if (this.sceneFade < 0.99) {
      ctx.save();
      ctx.globalAlpha = Math.max(0, 1.0 - this.sceneFade);

      ctx.translate(w / 2, h / 2);
      ctx.scale(this.camera.zoom, this.camera.zoom);
      ctx.translate(-this.camera.x, -this.camera.y);

      ctx.fillStyle = "#020304";
      ctx.fillRect(0, 0, this.worldWidth, this.worldHeight);

      // Temiz Master Gece Haritası (clean_susuz_map.jpg)
      if (this.images.panorama.isLoaded) {
        ctx.drawImage(this.images.panorama, 0, 0, this.worldWidth, this.worldHeight);
      }

      // BAĞIMSIZ DERİNLİK KATMANI: Fontlar, Oklar ve Nabız Göstergeleri
      this._renderDynamicSectorOverlay(ctx, time);

      // Atmosferik parçacıklar
      this._renderAtmosphere(ctx);

      ctx.restore();
    }

    // =========================================================================
    // KATMAN 3: Yeraltı Kararması
    // =========================================================================
    if (this.undergroundDepth > 0.01) {
      ctx.save();
      ctx.fillStyle = `rgba(2, 2, 3, ${this.undergroundDepth})`;
      ctx.fillRect(0, 0, w, h);
      ctx.restore();
    }

    this._renderOverlays(ctx);
  }

  // Bağımsız Hareket Eden Ek-3 Fontları, Oklar ve Kılcal Çizgiler
  _renderDynamicSectorOverlay(ctx, time) {
    const t = time * 0.001;

    // Arka plandan hafifçe ayrışan bağımsız süzülme ofseti (Optik Derinlik)
    const floatDepthX = this.parallax.x * 0.22;
    const floatDepthY = this.parallax.y * 0.22;

    for (const sec of this.sectors) {
      const isHovered = this.hoveredSector === sec;

      const mx = sec.x;
      const my = sec.y;
      const lx = sec.labelX + floatDepthX;
      const ly = sec.labelY + floatDepthY;

      ctx.save();

      // 1. İşaretçi Halkası & Nabız
      const pulse = Math.sin(t * 3.5 + sec.x * 0.05) * 0.3 + 0.7;
      const r = isHovered ? sec.radius * 1.35 : sec.radius * pulse;

      const glow = ctx.createRadialGradient(mx, my, 2, mx, my, r * 1.5);
      glow.addColorStop(0, `${sec.color}${isHovered ? 0.95 : 0.55})`);
      glow.addColorStop(0.5, `${sec.color}${isHovered ? 0.4 : 0.15})`);
      glow.addColorStop(1, `${sec.color}0)`);
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(mx, my, r * 1.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = isHovered ? "rgba(255, 235, 180, 0.95)" : "rgba(255, 255, 255, 0.4)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(mx, my, sec.radius * (isHovered ? 1.1 : 0.85), 0, Math.PI * 2);
      ctx.stroke();

      ctx.fillStyle = isHovered ? "#ffffff" : "rgba(255, 235, 180, 0.9)";
      ctx.beginPath();
      ctx.arc(mx, my, 2.5, 0, Math.PI * 2);
      ctx.fill();

      // 2. Kılcal Bağlantı Oku / Çizgisi (Leader Line with Elbow)
      ctx.strokeStyle = isHovered ? "rgba(255, 235, 180, 0.85)" : "rgba(197, 168, 128, 0.35)";
      ctx.lineWidth = 1;

      ctx.beginPath();
      let startX = lx;
      let startY = ly + 4;

      if (sec.arrowType === "down") {
        ctx.moveTo(startX, startY);
        ctx.lineTo(startX, my - sec.radius - 8);
        ctx.lineTo(mx, my - sec.radius - 2);
      } else if (sec.arrowType === "down_left") {
        ctx.moveTo(startX - 10, startY);
        ctx.lineTo(lx - 25, startY);
        ctx.lineTo(mx + sec.radius + 4, my - 4);
      } else if (sec.arrowType === "down_right") {
        ctx.moveTo(startX + 10, startY);
        ctx.lineTo(lx + 25, startY);
        ctx.lineTo(mx - sec.radius - 4, my - 4);
      } else if (sec.arrowType === "up_right") {
        ctx.moveTo(startX + 10, startY);
        ctx.lineTo(lx + 25, startY);
        ctx.lineTo(mx - sec.radius - 4, my + 4);
      }
      ctx.stroke();

      // Çizgi başlangıç minik nokta
      ctx.fillStyle = isHovered ? "#ffe066" : "rgba(197, 168, 128, 0.5)";
      ctx.beginPath();
      ctx.arc(startX, startY, 1.8, 0, Math.PI * 2);
      ctx.fill();

      // 3. Ek-3 Tipografisi (Arka Plandan Bağımsız Vektörel Metin)
      ctx.font = isHovered ? "700 12px 'Cinzel', Georgia, serif" : "600 11px 'Cinzel', Georgia, serif";
      ctx.letterSpacing = "0.22em";

      const titleText = sec.name;
      const subtitleText = sec.subtitle;
      const titleW = ctx.measureText(titleText).width;

      // Metin Arka Plan Cam Kapsülü (Hover'da zarifçe aydınlanır)
      const boxW = Math.max(titleW, 140) + 16;
      const boxH = 28;
      const boxX = (sec.arrowType.includes("left") || sec.arrowType === "down") ? lx - boxW / 2 : lx - 8;
      const boxY = ly - 18;

      if (isHovered) {
        ctx.fillStyle = "rgba(6, 9, 14, 0.85)";
        ctx.fillRect(boxX, boxY, boxW, boxH);
        ctx.strokeStyle = "rgba(197, 168, 128, 0.6)";
        ctx.lineWidth = 1;
        ctx.strokeRect(boxX, boxY, boxW, boxH);
      }

      // Başlık
      ctx.fillStyle = isHovered ? "#ffffff" : "rgba(240, 235, 225, 0.9)";
      ctx.textAlign = (sec.arrowType.includes("left") || sec.arrowType === "down") ? "center" : "left";
      const textAnchorX = (sec.arrowType.includes("left") || sec.arrowType === "down") ? lx : lx;
      ctx.fillText(titleText, textAnchorX, ly - 4);

      // Alt Başlık (İnce Mono)
      ctx.font = "400 7.5px 'JetBrains Mono', monospace";
      ctx.letterSpacing = "0.14em";
      ctx.fillStyle = isHovered ? "#ffd8a8" : "#8e9bb0";
      ctx.fillText(subtitleText, textAnchorX, ly + 8);

      ctx.restore();
    }
  }

  _renderStudioLiveTeleprompter(ctx, time, w, h) {
    const scale = 1.05;
    const offsetX = -this.parallax.x * 0.75 + this.sceneOffset.x;
    const offsetY = -this.parallax.y * 0.75 + this.sceneOffset.y - (this.undergroundDepth * h * 0.95);
    const imgLeft = offsetX - (w * (scale - 1)) / 2;
    const imgTop = offsetY - (h * (scale - 1)) / 2;
    const imgW = w * scale;
    const imgH = h * scale;

    // loc_studio_ekrem.jpg TV Ekranı iç koordinatları
    const tvLeft = imgLeft + 0.0814 * imgW;
    const tvTop = imgTop + 0.0547 * imgH;
    const tvW = 0.2689 * imgW;
    const tvH = 0.3672 * imgH;

    ctx.save();
    // TV ekran çerçevesi içine kırp
    ctx.beginPath();
    ctx.rect(tvLeft, tvTop, tvW, tvH);
    ctx.clip();

    // Mat siyah ekran zemini
    ctx.fillStyle = "rgba(5, 8, 14, 0.95)";
    ctx.fillRect(tvLeft, tvTop, tvW, tvH);

    // Üst Bar: Canlı Kayıt ve Zaman Kodu (Kırmızı yanıp sönen kayıt noktası)
    const pulseRed = Math.sin(time * 0.005) > 0;
    ctx.font = `600 ${Math.max(9, Math.floor(tvH * 0.055))}px 'JetBrains Mono', monospace`;
    ctx.fillStyle = pulseRed ? "#ff4d4f" : "#821a1a";
    ctx.textAlign = "left";
    ctx.fillText("● REC // GOSPEL BABY — EKREM VOCAL TAKE 01", tvLeft + tvW * 0.05, tvTop + tvH * 0.12);

    ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(tvLeft + tvW * 0.05, tvTop + tvH * 0.16);
    ctx.lineTo(tvLeft + tvW * 0.95, tvTop + tvH * 0.16);
    ctx.stroke();

    // Lirik Zamanlaması
    const lineDuration = 3800; // ms per lyric pair
    const totalLines = GOSPEL_BABY_LYRICS.length;
    const rawIdx = Math.floor((time / lineDuration) % totalLines);

    const centerY = tvTop + tvH * 0.52;
    const lineSpacing = tvH * 0.22;

    const cur = GOSPEL_BABY_LYRICS[rawIdx];
    const nxt = GOSPEL_BABY_LYRICS[(rawIdx + 1) % totalLines];
    const prv = GOSPEL_BABY_LYRICS[(rawIdx - 1 + totalLines) % totalLines];

    // Önceki Satır (Silik)
    ctx.font = `500 ${Math.max(8, Math.floor(tvH * 0.052))}px 'Inter', sans-serif`;
    ctx.fillStyle = "rgba(148, 163, 184, 0.3)";
    ctx.textAlign = "center";
    ctx.fillText(prv.en, tvLeft + tvW * 0.5, centerY - lineSpacing);

    // Aktif İngilizce Orijinal Satır (Parlak Beyaz / Altın Serif)
    ctx.font = `700 ${Math.max(10, Math.floor(tvH * 0.072))}px 'Cinzel', serif`;
    ctx.fillStyle = "#ffffff";
    ctx.shadowColor = "rgba(255, 215, 80, 0.65)";
    ctx.shadowBlur = 8;
    ctx.fillText(cur.en, tvLeft + tvW * 0.5, centerY - 4);
    ctx.shadowBlur = 0;

    // Türkçe Fonetik Okunuş Rehberi (Altın Mono Font)
    ctx.font = `600 ${Math.max(8, Math.floor(tvH * 0.055))}px 'JetBrains Mono', monospace`;
    ctx.fillStyle = "#ffd43b";
    ctx.fillText(`[ ${cur.tr} ]`, tvLeft + tvW * 0.5, centerY + tvH * 0.09);

    // Sonraki Satır (Silik)
    ctx.font = `500 ${Math.max(8, Math.floor(tvH * 0.052))}px 'Inter', sans-serif`;
    ctx.fillStyle = "rgba(148, 163, 184, 0.3)";
    ctx.fillText(nxt.en, tvLeft + tvW * 0.5, centerY + lineSpacing + 4);

    // Alt Kısım: Ses Dalgası / Equalizer Animasyonu
    ctx.fillStyle = "rgba(212, 175, 55, 0.45)";
    const waveCount = 24;
    const barW = (tvW * 0.88) / waveCount;
    for (let i = 0; i < waveCount; i++) {
      const barH = Math.abs(Math.sin(time * 0.005 + i * 0.45)) * (tvH * 0.12);
      ctx.fillRect(tvLeft + tvW * 0.06 + i * barW + 1, tvTop + tvH * 0.94 - barH, barW - 2, barH);
    }

    ctx.restore();
  }

  // Sahne İçi Sıcak Noktalar Çizimi (Ek-2 Kanonik Altın Halka Mimarisi)
  _renderSceneHotspots(ctx, time, w, h) {
    if (!this.activeSceneId || !this.sceneHotspots[this.activeSceneId]) return;

    // studio_ekrem sahnesi için dev TV ekranında canlı teleprompter lirik efekti
    if (this.activeSceneId === "studio_ekrem") {
      this._renderStudioLiveTeleprompter(ctx, time, w, h);
    }

    const spots = this.sceneHotspots[this.activeSceneId];
    const t = time * 0.001;

    for (const s of spots) {
      const pos = this._getHotspotScreenPos(s, w, h);
      const isHovered = this.hoveredHotspot === s;

      ctx.save();

      const pulse = Math.sin(t * 3.5 + s.relX * 12) * 0.35 + 0.65;
      const baseRadius = isHovered ? 13 : 9;

      // 1. Ek-2 Yumuşak Altın Işıma Halosu (Glow Halo)
      const haloGrad = ctx.createRadialGradient(pos.x, pos.y, 2, pos.x, pos.y, baseRadius * 1.8);
      haloGrad.addColorStop(0, isHovered ? "rgba(255, 235, 150, 0.55)" : "rgba(255, 215, 80, 0.28)");
      haloGrad.addColorStop(0.6, isHovered ? "rgba(212, 175, 55, 0.18)" : "rgba(212, 175, 55, 0.09)");
      haloGrad.addColorStop(1, "rgba(212, 175, 55, 0)");
      ctx.fillStyle = haloGrad;
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, baseRadius * 1.8, 0, Math.PI * 2);
      ctx.fill();

      // 2. Ek-2 Hassas İnce Dış Halka
      ctx.strokeStyle = isHovered ? "rgba(255, 245, 200, 0.95)" : "rgba(255, 215, 80, 0.65)";
      ctx.lineWidth = isHovered ? 1.6 : 1.2;
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, baseRadius * (isHovered ? 1.05 : (0.85 + pulse * 0.15)), 0, Math.PI * 2);
      ctx.stroke();

      // 3. Ek-2 İç Dolu Parlak Altın Merkez Nokta
      ctx.fillStyle = isHovered ? "#ffffff" : "#ffe57f";
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, isHovered ? 4.0 : 3.0, 0, Math.PI * 2);
      ctx.fill();

      if (isHovered) {
        ctx.font = "600 11px 'Cinzel', Georgia, serif";
        ctx.letterSpacing = "0.22em";
        const tagText = `${s.icon} ${s.name}`;
        const textWidth = ctx.measureText(tagText).width;

        let boxX = pos.x + 18;
        if (boxX + textWidth + 30 > w - 460) {
          boxX = pos.x - textWidth - 38;
        }
        const boxY = pos.y - 18;
        const boxW = textWidth + 24;
        const boxH = 34;

        ctx.fillStyle = "rgba(6, 9, 14, 0.88)";
        ctx.fillRect(boxX, boxY, boxW, boxH);

        ctx.strokeStyle = "rgba(197, 168, 128, 0.65)";
        ctx.lineWidth = 1;
        ctx.strokeRect(boxX, boxY, boxW, boxH);

        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "left";
        ctx.fillText(tagText, boxX + 12, boxY + 15);

        ctx.font = "400 8.5px 'JetBrains Mono', monospace";
        ctx.fillStyle = "#a0aec0";
        ctx.fillText(s.subtitle || "İNCELEMEK İÇİN TIKLAYIN", boxX + 12, boxY + 27);
      }

      ctx.restore();
    }
  }

  _renderAtmosphere(ctx) {
    ctx.save();
    ctx.fillStyle = "rgba(226, 232, 240, 0.35)";
    for (const p of this.particles) {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = this.worldWidth;
      if (p.x > this.worldWidth) p.x = 0;
      if (p.y > this.worldHeight) p.y = 0;

      ctx.globalAlpha = p.alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  _renderOverlays(ctx) {
    const w = this.canvas.width;
    const h = this.canvas.height;
    ctx.save();
    const vig = ctx.createRadialGradient(w / 2, h / 2, w * 0.34, w / 2, h / 2, w * 0.8);
    vig.addColorStop(0, "rgba(0,0,0,0)");
    vig.addColorStop(1, "rgba(2, 3, 5, 0.82)");
    ctx.fillStyle = vig;
    ctx.fillRect(0, 0, w, h);
    ctx.restore();
  }
}

window.SpatialUniverse = SpatialUniverse;

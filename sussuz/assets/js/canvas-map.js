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
      lake: this._loadImg("assets/img/scene_lake.png"),
      garden: this._loadImg("assets/img/scene_garden.png"),
      home_interior: this._loadImg("assets/img/scene_bahar_home.png"),
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
        x: 140,
        y: 580,
        radius: 26,
        labelX: 140,
        labelY: 480,
        arrowType: "down",
        color: "rgba(92, 124, 250, "
      },
      {
        id: "ritim",
        name: "RİTİM",
        subtitle: "ADA RESTORAN GECE KULÜBÜ",
        x: 395,
        y: 520,
        radius: 28,
        labelX: 470,
        labelY: 460,
        arrowType: "down_left",
        color: "rgba(224, 49, 49, "
      },
      {
        id: "hill",
        name: "TEPE",
        subtitle: "AŞIKLAR TEPESİ // ANKARA AYAZI",
        x: 1180,
        y: 150,
        radius: 26,
        labelX: 1240,
        labelY: 95,
        arrowType: "down_left",
        color: "rgba(235, 94, 40, "
      },
      {
        id: "murat_home",
        name: "MURAT'IN EVİ",
        subtitle: "KUZEY BLOKLARI // PENTHOUSE",
        x: 115,
        y: 115,
        radius: 24,
        labelX: 200,
        labelY: 75,
        arrowType: "down_left",
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
        subtitle: "SEÇİLMİŞ AİLE // İÇERİSİ",
        x: 1240,
        y: 600,
        radius: 24,
        labelX: 1290,
        labelY: 535,
        arrowType: "down_left",
        color: "rgba(255, 212, 59, "
      },
      {
        id: "garden",
        name: "BAHÇE",
        subtitle: "ATA VE KENAN // TAHTA ARABA",
        x: 1060,
        y: 690,
        radius: 22,
        labelX: 975,
        labelY: 650,
        arrowType: "down_right",
        color: "rgba(105, 219, 124, "
      }
    ];

    // Sahne İçi İnteraktif Sıcak Noktalar (Normalized: 0.0 - 1.0)
    // Kalp kuralı: Kişilerle ilgili etkileşimler kafayı/gözü kapatmayacak şekilde kalp/göğüs hizasına yerleştirilmiştir.
    this.sceneHotspots = {
      lake: [
        { 
          id: "lake_candle", 
          name: "MUMU ÜFLE", 
          relX: 0.498, 
          relY: 0.729, 
          icon: "🕯️", 
          subtitle: "DİLEK BAHAR İÇİN BİR DİLEK TUT // ANMA", 
          action: "candle", 
          desc: "Bahar bu mumu her gün yakmıyor. O gün Bahar Dilek'in doğum günü olduğu için kendi yaptığı pastayı almış gitmiş; göl kenarında, Bahar Dilek'in kanı üzerine kurulmuş bir parkta onun doğum günü pastasını üflüyor..." 
        },
        { 
          id: "lake_dialogue", 
          name: "BAHAR İLE KONUŞ", 
          relX: 0.520, 
          relY: 0.612, 
          icon: "💬", 
          subtitle: "İSKELEDE TEK BAŞINA BİR SES", 
          action: "dialogue", 
          charId: "bahar", 
          desc: "Bahar ile yüz yüze gelin." 
        },
        { 
          id: "lake_lighthouse", 
          name: "FENER IŞIĞINI İZLE", 
          relX: 0.140, 
          relY: 0.280, 
          icon: "🏮", 
          subtitle: "BATAKLIK SULARINDAKİ AYDINLIK // İSKELE", 
          action: "prop", 
          propName: "Göksu Deniz Feneri",
          desc: "Eski bataklığın üzerine inşa edilen parkta, göletin karanlık sularına vuran beyaz fener ışığı. Şehrin hafızasını örten eğreti bir ışık..." 
        },
        { 
          id: "lake_music", 
          name: "BATAKLIK'I DİNLE", 
          relX: 0.320, 
          relY: 0.480, 
          icon: "🎵", 
          subtitle: "BAHAR — BATAKLIK // SUSSUZ SOUNDTRACK", 
          action: "music", 
          src: "yFymvGwoxjA", 
          fallbackSrc: "assets/audio/track_bataklik.mp3",
          desc: "Bahar tek başına, Dilek'in kanı üzerine kurulmuş parkta doğum günü pastasını üflerken söylüyor." 
        },
        { 
          id: "lake_note", 
          name: "İSKELEYE BİR CÜMLE BIRAK", 
          relX: 0.280, 
          relY: 0.880, 
          icon: "✍️", 
          subtitle: "GÖLE VE GECEYE FISILDA", 
          action: "note", 
          desc: "Göl kenarındaki iskele taşına fısıldanmış bir not bırak." 
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
          name: "MURAT'I DURDUR", 
          relX: 0.650, 
          relY: 0.680, 
          icon: "✋", 
          subtitle: "EKREM YOLA ATLADI // 1. BÖLÜM FİNALİ", 
          action: "fly_subvenue", 
          target: "ritim_road", 
          desc: "Ekrem yolun ortasına çıkarak Murat'ın arabasını durdurur: 'Sana gerisini göstereceğim.' 1. bölüm final sahnesine geçiş yapın." 
        }
      ],

      ritim_interior: [
        { 
          id: "interior_stage_song", 
          name: "SAHNEDE KENAN'I DİNLE", 
          relX: 0.165, 
          relY: 0.549, 
          icon: "🎵", 
          subtitle: "KENAN — HIRSIZ [SUSSUZ SOUNDTRACK]", 
          action: "music", 
          src: "KFrAv440Rmg", 
          fallbackSrc: "assets/audio/track_hirsiz.mp3", 
          desc: "Dev ekranlarda Kenan, RİTİM logosu ve yeni parçanın prömiyeri. İlk beat giriyor, kalabalık bağırıyor." 
        },
        { 
          id: "interior_to_goksu", 
          name: "GÖKSU'NUN CAM OFİSİNE ÇIK", 
          relX: 0.615, 
          relY: 0.284, 
          icon: "🪟", 
          subtitle: "PİSTİ TEPEDEN İZLEYEN SES GEÇİRMEZ ODA", 
          action: "fly_subvenue", 
          target: "goksu_room", 
          desc: "Yukarıda Göksu'nun ses yalıtımlı cam ofisi görünüyor; loş ışıkta aşağıdaki pisti akvaryum gibi izliyor. Kenan ve Göksu sahnesine geçin." 
        },
        { 
          id: "interior_to_vip", 
          name: "VIP LOCAYA ÇIK", 
          relX: 0.950, 
          relY: 0.280, 
          icon: "🍸", 
          subtitle: "ŞU AN SAHNESİ YOK (YAZILIYOR :D)", 
          action: "fly_subvenue", 
          target: "ritim_vip", 
          desc: "Asma kat VIP loca bölümü. Senaryo yazımı devam ediyor." 
        },
        { 
          id: "interior_to_backstage", 
          name: "KULİSE GEÇ", 
          relX: 0.825, 
          relY: 0.259, 
          icon: "🎭", 
          subtitle: "SAHNE ARKASI VE HAZIRLIK", 
          action: "fly_subvenue", 
          target: "ritim_backstage", 
          desc: "Kenan ve ekibin hazırlandığı sahne arkası koridoru." 
        },
        { 
          id: "interior_balcony_dialogue", 
          name: "MURAT VE EKREM İLE YÜZLEŞ", 
          relX: 0.620, 
          relY: 0.810, 
          icon: "💬", 
          subtitle: "'OĞLUM...' // SAHNE DİYALOĞU", 
          action: "dialogue", 
          charId: "murat_ekrem_balcony", 
          desc: "Müzik değişiyor. Karanlık ekranlar bir anda açılıyor. Dev ekranda KENAN, RİTİM logosu... Murat oğlunu görüyor: 'Ben yapamadım... Göksu yaptı.'" 
        },
        { 
          id: "interior_to_dancefloor", 
          name: "MURAT'I DANSA GÖTÜR", 
          relX: 0.360, 
          relY: 0.819, 
          icon: "⚡", 
          subtitle: "EKREM ELİNİ UZATIYOR // 'AYIP LAN ÇOCUĞA'", 
          action: "fly_subvenue", 
          target: "dancefloor", 
          desc: "Ekrem gülerek elini uzatır: 'Oğlunun şarkısında surat asma. Ayıp lan çocuğa.' Murat'ı yeniden pistin içine çeker." 
        },
        { 
          id: "interior_to_accounting", 
          name: "PRODÜKSİYON MASASINA BAK", 
          relX: 0.552, 
          relY: 0.938, 
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
          relY: 0.880, 
          icon: "🚪", 
          subtitle: "RİTİM GİRİŞİ // MEKÂN ÖNÜ", 
          action: "fly_subvenue", 
          target: "ritim", 
          desc: "Kulüp çıkışına dönün." 
        }
      ],

      ritim_road: [
        { id: "road_moment", name: "ANAHTARI CEBİNE AT", relX: 0.500, relY: 0.550, icon: "✋", subtitle: "EKREM: 'SANA GERİSİNİ GÖSTERECEĞİM'", action: "prop", propName: "Ekrem'in Murat'ı Durdurduğu An", desc: "EKREM: 'Sana gerisini göstereceğim.' Murat anahtarı cebine atar; gece henüz bitmemiştir." },
        { id: "road_dialogue", name: "EKREM İLE KONUŞ", relX: 0.380, relY: 0.680, icon: "💬", subtitle: "İKİ YABANCININ İLK TEMASI", action: "dialogue", charId: "ekrem", desc: "Ekrem ve Murat diyalog penceresini açın." },
        { id: "road_music", name: "RADYONUN SESİNİ AÇ", relX: 0.700, relY: 0.450, icon: "📻", subtitle: "MURAT — BİLMEM, BEN DE // SUSSUZ SOUNDTRACK", action: "music", src: "assets/audio/track_bilmem_ben_de.mp3", desc: "Araba radyosundan yükselen melodi." },
        { id: "road_to_club", name: "KULÜP GİRİŞİNE DÖN", relX: 0.850, relY: 0.750, icon: "🚪", subtitle: "RİTİM'İN IŞIKLARI", action: "fly_subvenue", target: "ritim", desc: "Kulüp önüne dönün." }
      ],

      dancefloor: [
        { id: "dance_glass_look", name: "CAM OFİSE YUKARI BAK", relX: 0.500, relY: 0.200, icon: "🪟", subtitle: "GÖKSU YUKARIDAN PİSTİ İZLİYOR", action: "fly_subvenue", target: "goksu_room", desc: "Tepedeki cam ofise bakın veya yukarı çıkın. Camın arkasından aşağıdaki pist loş bir akvaryum gibi izleniyor." },
        { id: "dance_touch", name: "ENSE TEMASINI HİSSET", relX: 0.520, relY: 0.520, icon: "⚡", subtitle: "KONTROLÜN KAYBI // 'ÖBÜR TARAFA GİTSEN BARA GİRİCEN'", action: "prop", propName: "Ense Teması", desc: "EKREM: 'Öbür tarafa gitsen bara giricen yarram.' Murat güler; hayatında ilk defa kontrolü bırakır." },
        { id: "dance_dialogue", name: "PİSTTE EKREM'E SOKUL", relX: 0.380, relY: 0.640, icon: "💬", subtitle: "POLİS VE TORBACI DİYALOĞU", action: "dialogue", charId: "ekrem", desc: "MURAT: 'Olm, polisim ben!' — EKREM (elini uzatarak): 'Merhaba ben de torbacı :D'" },
        { id: "dance_track", name: "HIRSIZ'I DİNLE", relX: 0.700, relY: 0.400, icon: "🎵", subtitle: "KENAN — HIRSIZ // SUSSUZ SOUNDTRACK", action: "music", src: "KFrAv440Rmg", fallbackSrc: "assets/audio/track_hirsiz.mp3", desc: "Dans pistinde çalan 'HIRSIZ' bas riffi." },
        { id: "dance_to_interior", name: "GENEL SALONA BAK", relX: 0.160, relY: 0.740, icon: "🏛️", subtitle: "RİTİM İÇ MEKÂN GENEL GÖRÜNÜM", action: "fly_subvenue", target: "ritim_interior", desc: "Kulübün genel açısına dönün." },
        { id: "dance_to_vip", name: "VIP LOCAYA ÇIK", relX: 0.840, relY: 0.260, icon: "🍸", subtitle: "ASMA KATTAN PİSTE BAKIŞ", action: "fly_subvenue", target: "ritim_vip", desc: "VIP Locaya geçiş yapın." },
        { id: "dance_to_backstage", name: "KULİS KAPISINI İT", relX: 0.860, relY: 0.680, icon: "🎭", subtitle: "SAHNE ARKASINA GEÇ", action: "fly_subvenue", target: "ritim_backstage", desc: "Kulise geçiş yapın." },
        { id: "dance_return", name: "DIŞARIYA ÇIK", relX: 0.160, relY: 0.740, icon: "🚪", subtitle: "RİTİM GİRİŞİ", action: "fly_subvenue", target: "ritim", desc: "Girişe dönün." }
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
          relX: 0.505, 
          relY: 0.579, 
          icon: "🚬", 
          subtitle: "05:30 // ANKARA AYAZI // 'YANLIŞSA DA BENİM YANLIŞIM OLUR'", 
          action: "prop", 
          propName: "Sırayla İçilen Sigara", 
          desc: "EKREM: 'Dalga geçme. Ben hissettiğim şeye güvenirim. Yanlışsa da benim yanlışım olur. Başkasının lafıyla yanlış yapmaktan iyidir.'" 
        },
        { 
          id: "hill_dialogue", 
          name: "TÜBİTAK DİYALOĞUNU DİNLE", 
          relX: 0.396, 
          relY: 0.645, 
          icon: "💬", 
          subtitle: "MURAT VE EKREM // 'SENDE Bİ ŞEY VAR, İÇİM YAMUK DEMEDİ'", 
          action: "dialogue", 
          charId: "murat", 
          desc: "MURAT: 'Sende bi şey var, içim yamuk demedi. Bilimsel açıklaman bu mu?' — EKREM: 'He. TÜBİTAK.'" 
        },
        { 
          id: "hill_music", 
          name: "BİLMEM, BEN DE'Yİ DİNLE", 
          relX: 0.647, 
          relY: 0.872, 
          icon: "📻", 
          subtitle: "MURAT — BİLMEM, BEN DE // SUSSUZ SOUNDTRACK", 
          action: "music", 
          src: "CvSByNL1r48", 
          fallbackSrc: "assets/audio/track_bilmem_ben_de.mp3", 
          desc: "Murat söylüyor; Mercedes'in torpidosundan yükselen soğuk ayaz melodisi." 
        },
        { 
          id: "hill_note", 
          name: "TORPİDOYA BİR NOT BIRAK", 
          relX: 0.683, 
          relY: 0.833, 
          icon: "✍️", 
          subtitle: "ARABA TORPİDOSUNA FISILDA", 
          action: "note", 
          desc: "Mercedes torpidosuna anonim bir not iliştir." 
        }
      ],

      garden: [
        { 
          id: "garden_dialogue", 
          name: "ATA İLE KONUŞ", 
          relX: 0.428, 
          relY: 0.785, 
          icon: "💬", 
          subtitle: "SEÇİLMİŞ AİLE // ÇOCUĞUN DÜNYASI", 
          action: "dialogue", 
          charId: "ata", 
          desc: "Ata: 'Bana okulda senin anan babanı mı sikiyo dediler.' Bu insanların ilişkileri yetişkinlerin meselesi değil sadece." 
        },
        { 
          id: "garden_car", 
          name: "TAHTA ARABAYI TUT", 
          relX: 0.530, 
          relY: 0.885, 
          icon: "🏎️", 
          subtitle: "KENAN'IN ATA İÇİN YONTTUĞU KIRMIZI ŞERİTLİ OYUNCAK", 
          action: "prop", 
          propName: "Kenan'ın Yonttuğu Araba", 
          desc: "Kenan'ın Ata için yonttuğu ve arkasına kırmızı şerit çektiği tahta oyuncak." 
        },
        { 
          id: "garden_swing", 
          name: "SALINCAĞA NOT KAZI", 
          relX: 0.150, 
          relY: 0.665, 
          icon: "✍️", 
          subtitle: "PASLI DEMİRE BİR CÜMLE BIRAK", 
          action: "note", 
          desc: "Salıncak demirine kazınmış bir not bırak." 
        }
      ],

      studio: [
        { 
          id: "studio_gospel_ekrem", 
          name: "🎙️ BU ŞARKIYI EKREM'DEN DİNLE", 
          relX: 0.886, 
          relY: 0.260, 
          icon: "⚡", 
          subtitle: "EKREM — GOSPEL BABY // CANLI KAYIT SEANSI", 
          action: "fly_subvenue", 
          target: "studio_ekrem", 
          desc: "Kenan Ekrem'i ikna etti. Ekrem stüdyoda it oturuşu, elinde mikrofon, dev ekranda akan şarkı sözleri... Şarkının hakiki sokak ruhu." 
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
          desc: "Kenan'ın stüdyoda kaydettiği ilk demo. 'Daha Anadolu sesi lazım bu şarkıya... Keşke Ekrem söylese.'" 
        },
        { 
          id: "studio_biri_varmis", 
          name: "DÜETİ DİNLE", 
          relX: 0.603, 
          relY: 0.716, 
          icon: "📻", 
          subtitle: "MURAT & EKREM — BİRİ VARMIŞ ÖTEKİ YOK OLMASIN", 
          action: "music", 
          src: "GLQcmdJsO5U", 
          fallbackSrc: "assets/audio/track_biri_varmis.mp3", 
          desc: "Murat ve Ekrem beraber Bahar'a söylüyorlar." 
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
          name: "EKREM İLE YÜZLEŞ // VOKAL",
          relX: 0.196,
          relY: 0.534,
          icon: "💬",
          subtitle: "KALPTE YANAN GOSPEL // EKREM DİYALOĞU",
          action: "dialogue",
          charId: "ekrem",
          desc: "Ekrem tek elinde mikrofonla şarkıyı söylüyor. Gözlerinde öfke ve kırgınlık: 'Ben hissettiğim şeye güvenirim. Yanlışsa da benim yanlışım olur.'"
        },
        {
          id: "ekrem_mic",
          name: "MİKROFONU DİNLE // GOSPEL BABY",
          relX: 0.243,
          relY: 0.482,
          icon: "🎵",
          subtitle: "EKREM — GOSPEL BABY [SUSSUZ SOUNDTRACK]",
          action: "music",
          src: "mdPhJrnytkA",
          fallbackSrc: "assets/audio/track_gospel_baby_ekrem.mp3",
          desc: "Ekrem'in söylediği Gospel Baby. Ham analog mikser kaydı."
        },
        {
          id: "studio_screen_lyrics",
          name: "LİRİK EKRANI // SÖZLER VE OKUNUŞ",
          relX: 0.400,
          relY: 0.358,
          icon: "📺",
          subtitle: "DEV TELEPROMPTER // TAM SÖZLER & TELAFUZ",
          action: "lyrics_modal",
          desc: "Stüdyodaki dev ekranda akan şarkı sözleri ve Türkçe fonetik telaffuzları."
        },
        {
          id: "kenan_mixer_desk",
          name: "KENAN'IN KONSOLU",
          relX: 0.581,
          relY: 0.833,
          icon: "🎛️",
          subtitle: "ANALOG FADERLAR & VU METRELER",
          action: "prop",
          propName: "Kenan'ın Mikser Ayarları",
          desc: "Kenan faderları dengeliyor. 'Daha Anadolu sesi lazım bu şarkıya... Tam oldu.'"
        },
        {
          id: "kenan_heart",
          name: "KENAN İLE KONUŞ",
          relX: 0.472,
          relY: 0.677,
          icon: "💬",
          subtitle: "MÜZİĞİN VE RİTİM'İN PRODÜKTÖRÜ",
          action: "dialogue",
          charId: "kenan",
          desc: "Kenan ile konuşun."
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
        { id: "home_lock", name: "SENARYO TASLAĞINI ARALA", relX: 0.500, relY: 0.550, icon: "🔒", subtitle: "HENÜZ YAZILIYOR. :D // YAZIM %25", action: "locked_info", desc: "Senaryo yazım süreci devam ediyor. Yazım ilerlemesi: %25." }
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
          desc: "Gökdelenin tepesinden aşağıdaki göle ve Susuz'un karanlık mahallelerine uzanan soğuk Ankara manzarası. Murat'ın Susuz'a ne kadar yabancı olduğunun sessiz kanıtı." 
        },
        { 
          id: "murat_file", 
          name: "MASADAKİ DOSYA VE ANAHTARLAR", 
          relX: 0.345, 
          relY: 0.800, 
          icon: "📁", 
          subtitle: "AÇILMAMIŞ DOSYA VE TORPİDO ANAHTARI", 
          action: "prop", 
          propName: "Masa Üzerindeki Dosya ve Anahtarlar", 
          desc: "Torpido anahtarları ve açılmamış bir soruşturma dosyası. Şehre bakan camın önünde duran tek şey." 
        },
        { 
          id: "murat_dialogue", 
          name: "MURAT İLE YÜZLEŞ", 
          relX: 0.540, 
          relY: 0.690, 
          icon: "💬", 
          subtitle: "GÖKDELENİN TEPESİNDE SOĞUK YALNIZLIK", 
          action: "dialogue", 
          charId: "murat", 
          desc: "Murat'ın iç dünyasına ve Susuz soruşturmasına dair diyalog." 
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
      this.mouse.dragDist = 0;
    });

    window.addEventListener("mouseup", () => {
      if (!this.mouse.isDown) return;
      this.mouse.isDown = false;

      if (this.mouse.dragDist < 12) {
        if (this.viewMode === "panorama") {
          if (this.hoveredSector) {
            this.flyToScene(this.hoveredSector.id);
          }
        } else if (this.viewMode === "scene") {
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

    for (const sec of this.sectors) {
      // Hem marker hem de etiket etki alanını kontrol et
      const dxM = this.mouse.worldX - sec.x;
      const dyM = this.mouse.worldY - sec.y;
      const distM = Math.sqrt(dxM * dxM + dyM * dyM);

      const dxL = this.mouse.worldX - sec.labelX;
      const dyL = this.mouse.worldY - sec.labelY;
      const distL = Math.sqrt(dxL * dxL + dyL * dyL);

      const hitDist = Math.min(distM, distL);

      if (hitDist < sec.radius + 35) {
        if (hitDist < minDist) {
          minDist = hitDist;
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

      if (dist < 40) {
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
        sec = this.sectors.find(s => s.id === "ritim") || { x: 395, y: 520 };
      } else if (sceneId.startsWith("studio")) {
        sec = this.sectors.find(s => s.id === "studio") || { x: 185, y: 320 };
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
    const s = { relX: 0.400, relY: 0.358 };
    const pos = this._getHotspotScreenPos(s, w, h);
    
    // Dev TV ekranı sınırları
    const screenW = w * 0.23;
    const screenH = h * 0.22;
    const left = pos.x - screenW / 2;
    const top = pos.y - screenH / 2;

    ctx.save();
    // Hafif ekran camı parlaması
    const scrGlow = ctx.createLinearGradient(left, top, left, top + screenH);
    scrGlow.addColorStop(0, "rgba(56, 178, 172, 0.14)");
    scrGlow.addColorStop(0.5, "rgba(2, 6, 12, 0.45)");
    scrGlow.addColorStop(1, "rgba(56, 178, 172, 0.08)");
    ctx.fillStyle = scrGlow;
    ctx.fillRect(left, top, screenW, screenH);

    // Üst Bar: Canlı Kayıt ve Zaman Kodu
    ctx.font = "600 8.5px 'JetBrains Mono', monospace";
    ctx.fillStyle = "rgba(255, 107, 107, 0.95)";
    ctx.textAlign = "left";
    const pulseDot = Math.sin(time * 0.005) > 0 ? "●" : "○";
    ctx.fillText(`${pulseDot} REC // GOSPEL BABY — EKREM`, left + 10, top + 15);

    // Akan Lirik
    const lineDuration = 3800; // ms
    const totalLines = GOSPEL_BABY_LYRICS.length;
    const rawIdx = Math.floor((time / lineDuration) % totalLines);
    const curLyric = GOSPEL_BABY_LYRICS[rawIdx];

    // İngilizce Orijinal (Büyük, Temiz, Işıltılı)
    ctx.textAlign = "center";
    ctx.font = "600 11px 'Cinzel', Georgia, serif";
    ctx.fillStyle = "#ffffff";
    ctx.shadowColor = "rgba(56, 178, 172, 0.8)";
    ctx.shadowBlur = 8;
    ctx.fillText(curLyric.en, pos.x, pos.y - 4);

    // Türkçe Fonetik Okunuş (Altın Sarısı Mono Font)
    ctx.shadowBlur = 0;
    ctx.font = "700 9.5px 'JetBrains Mono', monospace";
    ctx.fillStyle = "#ffd43b";
    ctx.fillText(curLyric.tr, pos.x, pos.y + 16);

    // Sonraki Satır Önizleme (Loş)
    const nextIdx = (rawIdx + 1) % totalLines;
    ctx.font = "400 8px 'Inter', sans-serif";
    ctx.fillStyle = "rgba(148, 163, 184, 0.55)";
    ctx.fillText(GOSPEL_BABY_LYRICS[nextIdx].en, pos.x, pos.y + 36);

    ctx.restore();
  }

  // Sahne İçi Sıcak Noktalar Çizimi
  _renderSceneHotspots(ctx, time, w, h) {
    if (!this.activeSceneId || !this.sceneHotspots[this.activeSceneId]) return;

    // studio_ekrem sahnesi için dev TV ekranında canlı akan teleprompter lirik efekti
    if (this.activeSceneId === "studio_ekrem") {
      this._renderStudioLiveTeleprompter(ctx, time, w, h);
    }

    const spots = this.sceneHotspots[this.activeSceneId];
    const t = time * 0.001;

    for (const s of spots) {
      const pos = this._getHotspotScreenPos(s, w, h);
      const isHovered = this.hoveredHotspot === s;

      ctx.save();

      const pulse = Math.sin(t * 3 + s.relX * 10) * 0.35 + 0.65;
      const baseRadius = isHovered ? 18 : 12;
      const glowGrad = ctx.createRadialGradient(pos.x, pos.y, 2, pos.x, pos.y, baseRadius * 1.6);
      glowGrad.addColorStop(0, isHovered ? "rgba(255, 235, 180, 0.95)" : "rgba(224, 49, 49, 0.7)");
      glowGrad.addColorStop(0.5, isHovered ? "rgba(224, 49, 49, 0.4)" : "rgba(224, 49, 49, 0.2)");
      glowGrad.addColorStop(1, "rgba(224, 49, 49, 0)");

      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, baseRadius * 1.6, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = isHovered ? "rgba(255, 240, 200, 0.9)" : "rgba(229, 222, 211, 0.45)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, baseRadius * (isHovered ? 1.1 : (0.8 + pulse * 0.2)), 0, Math.PI * 2);
      ctx.stroke();

      ctx.fillStyle = isHovered ? "#ffffff" : "rgba(255, 220, 180, 0.85)";
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, 2.5, 0, Math.PI * 2);
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

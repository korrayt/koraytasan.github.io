/**
 * SUSSUZ — Kesintisiz Yaşayan Evren & Sinematik Spatial Canvas
 * Temizlenmiş Arka Plan (clean_susuz_map.jpg: 1376x768) + Bağımsız Katmanlı Ek-3 Tipografi & Oklar
 * Parallax ayrıştırması: Yazılar ve oklar arka planla birleşik değil, bağımsız derinlik katmanında süzülür.
 */

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
      murat_home: this._loadImg("assets/img/loc_murat_home.jpg"),
      accounting: this._loadImg("assets/img/loc_accounting.jpg")
    };

    // Dinamik Katman: Harita Üzerinde Bağımsız Süzülen Sektörler, Oklar ve Etiketler
    this.sectors = [
      {
        id: "lake",
        name: "GÖL KENARI",
        subtitle: "DENİZ FENERİ // DİLEK'İN DOĞUM GÜNÜ",
        x: 138,
        y: 575,
        radius: 26,
        labelX: 138,
        labelY: 470,
        arrowType: "down",
        color: "rgba(92, 124, 250, "
      },
      {
        id: "ritim",
        name: "RİTİM",
        subtitle: "ADA RESTORAN GECE KULÜBÜ",
        x: 527,
        y: 345,
        radius: 28,
        labelX: 585,
        labelY: 290,
        arrowType: "down_left",
        color: "rgba(224, 49, 49, "
      },
      {
        id: "hill",
        name: "TEPE",
        subtitle: "AŞIKLAR TEPESİ // ANKARA AYAZI",
        x: 1060,
        y: 210,
        radius: 26,
        labelX: 1140,
        labelY: 155,
        arrowType: "down_left",
        color: "rgba(235, 94, 40, "
      },
      {
        id: "murat_home",
        name: "MURAT'IN EVİ",
        subtitle: "KUZEY BLOKLARI // PENTHOUSE",
        x: 160,
        y: 88,
        radius: 24,
        labelX: 250,
        labelY: 60,
        arrowType: "down_left",
        color: "rgba(56, 178, 172, "
      },
      {
        id: "studio",
        name: "KENAN'IN STÜDYOSU",
        subtitle: "BATI YAKASI SES ATÖLYESİ",
        x: 195,
        y: 310,
        radius: 24,
        labelX: 120,
        labelY: 260,
        arrowType: "down_right",
        color: "rgba(255, 107, 107, "
      },
      {
        id: "home_interior",
        name: "BAHAR'IN EVİ",
        subtitle: "SEÇİLMİŞ AİLE // İÇERİSİ",
        x: 1221,
        y: 586,
        radius: 24,
        labelX: 1285,
        labelY: 535,
        arrowType: "down_left",
        color: "rgba(255, 212, 59, "
      },
      {
        id: "garden",
        name: "BAHÇE",
        subtitle: "ATA VE KENAN // TAHTA ARABA",
        x: 1119,
        y: 637,
        radius: 22,
        labelX: 1030,
        labelY: 675,
        arrowType: "up_right",
        color: "rgba(105, 219, 124, "
      }
    ];

    // Sahne İçi İnteraktif Sıcak Noktalar (Normalized: 0.0 - 1.0)
    this.sceneHotspots = {
      lake: [
        { 
          id: "lake_candle", 
          name: "KENDİ YAPTIĞI PASTA VE TEK MUM", 
          relX: 0.49, 
          relY: 0.76, 
          icon: "🕯️", 
          subtitle: "DİLEK'İN DOĞUM GÜNÜ // MUMU ÜFLE", 
          action: "candle", 
          desc: "Bahar bu mumu her gün yakmıyor. O gün Bahar Dilek'in doğum günü olduğu için kendi yaptığı pastayı almış gitmiş; göl kenarında, Bahar Dilek'in kanı üzerine kurulmuş bir parkta onun doğum günü pastasını üflüyor..." 
        },
        { 
          id: "lake_lighthouse", 
          name: "GÖKSU DENİZ FENERİ", 
          relX: 0.22, 
          relY: 0.35, 
          icon: "🏮", 
          subtitle: "İSKELE VE GECE IŞIĞI", 
          action: "prop", 
          propName: "Göksu Deniz Feneri",
          desc: "Eski bataklığın üzerine inşa edilen parkta, göletin karanlık sularına vuran beyaz fener ışığı. Şehrin hafızasını örten eğreti bir ışık..." 
        },
        { 
          id: "lake_music", 
          name: "BATAKLIK (Bahar Söylüyor)", 
          relX: 0.32, 
          relY: 0.52, 
          icon: "🎵", 
          subtitle: "RESMİ SOUNDTRACK // OFFICIAL LYRIC VIDEO", 
          action: "music", 
          src: "yFymvGwoxjA", 
          fallbackSrc: "assets/audio/track_bataklik.mp3",
          desc: "Bahar tek başına, Dilek'in kanı üzerine kurulmuş parkta doğum günü pastasını üflerken söylüyor." 
        },
        { 
          id: "lake_dialogue", 
          name: "BAHAR İLE YÜZLEŞ", 
          relX: 0.72, 
          relY: 0.56, 
          icon: "💬", 
          subtitle: "TEK BAŞINA DİRENİŞ", 
          action: "dialogue", 
          charId: "bahar", 
          desc: "Bahar ile yüz yüze gelin." 
        },
        { 
          id: "lake_note", 
          name: "İSKELE TAŞINA NOT BIRAK", 
          relX: 0.60, 
          relY: 0.86, 
          icon: "✍️", 
          subtitle: "GÖL KENARINA NOT", 
          action: "note", 
          desc: "Göl kenarındaki iskele taşına fısıldanmış bir not bırak." 
        }
      ],
      ritim: [
        { id: "ritim_door", name: "KAPI & TELSİZ", relX: 0.48, relY: 0.72, icon: "📻", subtitle: "EXT. GİRİŞ // EMİR YUKARIDAN GELDİ", action: "prop", propName: "Kapı Görevlisinin Telsizi", desc: "KAPI GÖREVLİSİ: 'Rezervasyon?' — Telsizden emir gelir: 'Buyurun.' Yukarıdan biri Tekin'i görmüştür." },
        { id: "ritim_road_spot", name: "MEKÂN ÖNÜ YOL", relX: 0.22, relY: 0.76, icon: "🛣️", subtitle: "1. BÖLÜM FİNALİ // EKREM MURAT'I DURDURDU", action: "fly_subvenue", target: "ritim_road", desc: "1. Bölüm final sahnesinin geçtiği bağlantı yolu. Ekrem'in Murat'ı durdurduğu yer." },
        { id: "ritim_dance_spot", name: "ANA DANS PİSTİ", relX: 0.64, relY: 0.65, icon: "⚡", subtitle: "INT. ALT KAT // MURAT VE EKREM DANS EDİYOR", action: "fly_subvenue", target: "dancefloor", desc: "Kulübün içine, ana dans pistine girin." },
        { id: "ritim_goksu_spot", name: "GÖKSU'NUN CAM OFİSİ", relX: 0.38, relY: 0.32, icon: "🏢", subtitle: "INT. ÜST KAT // DANS PİSTİNİ GÖREN CAM OFİS", action: "fly_subvenue", target: "goksu_room", desc: "Üst kattaki ses yalıtımlı cam ofise geçiş yapın." },
        { id: "ritim_vip_spot", name: "VIP / ÜST KAT LOCA", relX: 0.76, relY: 0.32, icon: "🍸", subtitle: "ŞU AN SAHNESİ YOK // YAZILIYOR :D", action: "fly_subvenue", target: "ritim_vip", desc: "Asma kat VIP loca bölümü." },
        { id: "ritim_backstage_spot", name: "BACKSTAGE / KULİS", relX: 0.85, relY: 0.58, icon: "🎭", subtitle: "INT. SAHNE ARKASI // KENAN VE EKİP", action: "fly_subvenue", target: "ritim_backstage", desc: "Kenan'ın hazırlandığı kulis koridoru." },
        { id: "ritim_acc_spot", name: "MUHASEBE & PRODÜKSİYON", relX: 0.16, relY: 0.44, icon: "📋", subtitle: "CANLI İHTİYAÇ MASASI", action: "fly_subvenue", target: "accounting", desc: "Prodüksiyon ihtiyaçları ve sponsorluk masası." }
      ],

      ritim_road: [
        { id: "road_moment", name: "EKREM'İN MURAT'I DURDURDUĞU AN", relX: 0.50, relY: 0.55, icon: "✋", subtitle: "1. BÖLÜM FİNALİ // 'SANA GERİSİNİ GÖSTERECEĞİM'", action: "prop", propName: "Ekrem'in Murat'ı Durdurduğu An", desc: "EKREM: 'Sana gerisini göstereceğim.' Murat anahtarı cebine atar; gece henüz bitmemiştir." },
        { id: "road_dialogue", name: "MURAT VE EKREM İLE YÜZLEŞ", relX: 0.35, relY: 0.68, icon: "💬", subtitle: "İKİ YABANCININ İLK DİYALOĞU", action: "dialogue", charId: "ekrem", desc: "Ekrem ve Murat diyalog penceresini açın." },
        { id: "road_music", name: "BİLMEM, BEN DE (RADYO)", relX: 0.70, relY: 0.45, icon: "📻", subtitle: "ARABADAN YAYILAN SOĞUK AYAZ", action: "music", src: "assets/audio/track_bilmem_ben_de.mp3", desc: "Araba radyosundan yükselen melodi." },
        { id: "road_to_club", name: "KULÜP GİRİŞİNE DÖN", relX: 0.85, relY: 0.75, icon: "🚪", subtitle: "RİTİM DIŞ ALAN", action: "fly_subvenue", target: "ritim", desc: "Kulüp önüne dönün." }
      ],

      dancefloor: [
        { id: "dance_glass_look", name: "TAVANDAKİ CAM OFİS", relX: 0.50, relY: 0.20, icon: "🪟", subtitle: "GÖKSU'NUN CAM OFİSİ DANS PİSTİNDEN GÖRÜNÜYOR", action: "fly_subvenue", target: "goksu_room", desc: "Tepedeki cam ofise bakın veya yukarı çıkın. Camın arkasından aşağıdaki pist loş bir akvaryum gibi izleniyor." },
        { id: "dance_touch", name: "ENSE TEMASI VE GÖZLER", relX: 0.52, relY: 0.52, icon: "⚡", subtitle: "KONTROLÜN KAYBI // İLK TEMAS", action: "prop", propName: "Ense Teması", desc: "EKREM: 'Öbür tarafa gitsen bara giricen yarram.' Tekin güler; hayatında ilk defa kontrolü bırakır." },
        { id: "dance_dialogue", name: "POLİS VE TORBACI DİYALOĞU", relX: 0.34, relY: 0.64, icon: "💬", subtitle: "MURAT VE EKREM", action: "dialogue", charId: "ekrem", desc: "Dans pistinde Murat ve Ekrem diyaloğu." },
        { id: "dance_track", name: "HIRSIZ (CLUB NOIR)", relX: 0.70, relY: 0.40, icon: "🎵", subtitle: "124 BPM // 3:03", action: "music", src: "assets/audio/track_hirsiz.mp3", desc: "Dans pistinde çalan 'HIRSIZ' bas riffi." },
        { id: "dance_to_vip", name: "ÜST KAT LOCA", relX: 0.84, relY: 0.26, icon: "🍸", subtitle: "ASMA KATA ÇIK", action: "fly_subvenue", target: "ritim_vip", desc: "VIP Locaya geçiş yapın." },
        { id: "dance_to_backstage", name: "BACKSTAGE / KULİS", relX: 0.86, relY: 0.68, icon: "🎭", subtitle: "SAHNE ARKASI", action: "fly_subvenue", target: "ritim_backstage", desc: "Kulise geçiş yapın." },
        { id: "dance_return", name: "GİRİŞE ÇIK", relX: 0.16, relY: 0.74, icon: "🚪", subtitle: "RİTİM GİRİŞİ", action: "fly_subvenue", target: "ritim", desc: "Girişe dönün." }
      ],

      goksu_room: [
        { id: "office_window", name: "DANS PİSTİNİ GÖREN CAM DUVAR", relX: 0.50, relY: 0.76, icon: "🪟", subtitle: "AŞAĞIDAKİ PİST LOŞ BİR AKVARYUM GİBİ GÖRÜNÜYOR", action: "fly_subvenue", target: "dancefloor", desc: "Camdan aşağıdaki dans pistine bakın; Murat ve Ekrem'in dans ettiği kalabalık görünüyor." },
        { id: "office_song", name: "BU ŞARKIYI KAYBEDEMEM", relX: 0.40, relY: 0.46, icon: "🎵", subtitle: "DEMO KAYIT & SÖZLER // 3:24", action: "music", src: "assets/audio/track_kaybedemem.mp3", desc: "Kenan'ın Göksu'ya dinlettiği parça: 'Duvarlarda izin / Odalarda sesin / Geçti modası artık o eski senin...'" },
        { id: "office_file", name: "BAHAR / DENİZ DOSYASI", relX: 0.64, relY: 0.54, icon: "📁", subtitle: "YARIM KALAN SORUŞTURMA", action: "prop", propName: "Bahar / Deniz Dosyası", desc: "Göksu Tekin'e: 'Yarım dosya... Yarısı yeter. Ne bildiğini öğren. Kiminle konuşman gerekiyorsa konuş.'" },
        { id: "office_dialogue", name: "KENAN VE GÖKSU", relX: 0.28, relY: 0.56, icon: "💬", subtitle: "KENAN GÖKSU'YU OYALIYOR", action: "dialogue", charId: "kenan", desc: "Kenan ve Göksu ile konuşun." },
        { id: "office_return", name: "KULÜBE ÇIK", relX: 0.85, relY: 0.70, icon: "🚪", subtitle: "RİTİM GİRİŞİ", action: "fly_subvenue", target: "ritim", desc: "Dışarıya dönün." }
      ],

      ritim_vip: [
        { id: "vip_status", name: "ŞU AN SAHNESİ YOK (YAZILIYOR :D)", relX: 0.50, relY: 0.50, icon: "🔒", subtitle: "SENARYO AŞAMASI // %72", action: "locked_info", desc: "Şehrin bürokratları ve Susuz'un görünmeyen yüzleri için ayrılmış VIP loca bölümü. Senaryo yazımı devam ediyor." },
        { id: "vip_to_dance", name: "DANS PİSTİNE İN", relX: 0.32, relY: 0.66, icon: "⚡", subtitle: "ALT KATA İN", action: "fly_subvenue", target: "dancefloor", desc: "Dans pistine inin." },
        { id: "vip_to_exit", name: "KULÜBE DÖN", relX: 0.74, relY: 0.66, icon: "🚪", subtitle: "GİRİŞE DÖN", action: "fly_subvenue", target: "ritim", desc: "Girişe dönün." }
      ],

      ritim_backstage: [
        { id: "backstage_jacket", name: "KENAN'IN SAHNE CEKETİ", relX: 0.42, relY: 0.55, icon: "🧥", subtitle: "ASKIDAKİ DERİ CEKET", action: "prop", propName: "Kenan'ın Sahne Ceketi", desc: "Göksu'nun parasıyla alınmış ama Kenan'ın öfkesini taşıyan kostüm." },
        { id: "backstage_mirror", name: "KULİS AYNASI & NOTLAR", relX: 0.60, relY: 0.45, icon: "🪞", subtitle: "RUJLA YAZILMIŞ SATIR", action: "prop", propName: "Kulis Aynası & Karalamalar", desc: "Ayna kenarına rujla yazılmış bir şarkı satırı: 'Geçti modası artık o eski senin...'" },
        { id: "backstage_to_dance", name: "SAHNEYE / PİSTE ÇIK", relX: 0.78, relY: 0.65, icon: "⚡", subtitle: "CANLI PİST", action: "fly_subvenue", target: "dancefloor", desc: "Piste geçiş yapın." },
        { id: "backstage_return", name: "GİRİŞE DÖN", relX: 0.22, relY: 0.70, icon: "🚪", subtitle: "RİTİM GİRİŞİ", action: "fly_subvenue", target: "ritim", desc: "Girişe dönün." }
      ],
      hill: [
        { id: "hill_smoke", name: "PAYLAŞILAN SİGARA", relX: 0.45, relY: 0.62, icon: "🚬", subtitle: "05:30 // ANKARA AYAZI", action: "prop", propName: "Sırayla İçilen Sigara", desc: "EKREM: 'Dalga geçme. Ben hissettiğim şeye güvenirim. Yanlışsa da benim yanlışım olur. Başkasının lafıyla yanlış yapmaktan iyidir.'" },
        { id: "hill_dialogue", name: "TÜBİTAK DİYALOĞU", relX: 0.58, relY: 0.52, icon: "💬", subtitle: "MURAT VE EKREM İLE YÜZLEŞ", action: "dialogue", charId: "murat", desc: "TEKİN: 'Sende bi şey var, içim yamuk demedi. Bilimsel açıklaman bu mu?' — EKREM: 'He. TÜBİTAK.'" },
        { id: "hill_music", name: "BİLMEM, BEN DE (Murat Söylüyor)", relX: 0.75, relY: 0.42, icon: "📻", subtitle: "ARABA RADYOSU // OFFICIAL LYRIC VIDEO", action: "music", src: "CvSByNL1r48", fallbackSrc: "assets/audio/track_bilmem_ben_de.mp3", desc: "Murat söylüyor; Mercedes'in torpidosundan yükselen soğuk ayaz melodisi." },
        { id: "hill_note", name: "TORPİDOYA BİR NOT BIRAK", relX: 0.32, relY: 0.76, icon: "✍️", subtitle: "ARABA TORPİDOSU", action: "note", desc: "Araba torpidosuna anonim bir not iliştir." }
      ],
      garden: [
        { id: "garden_car", name: "YONTULMUŞ TAHTA ARABA", relX: 0.54, relY: 0.74, icon: "🏎️", subtitle: "KIRMIZI ŞERİTLİ OYUNCAK", action: "prop", propName: "Kenan'ın Yonttuğu Araba", desc: "Kenan'ın Ata için yonttuğu ve arkasına kırmızı şerit çektiği tahta oyuncak." },
        { id: "garden_dialogue", name: "ATA VE KENAN", relX: 0.40, relY: 0.52, icon: "💬", subtitle: "SEÇİLMİŞ AİLE // ÇOCUK DÜNYASI", action: "dialogue", charId: "ata", desc: "Ata: 'Bana okulda senin anan babanı mı sikiyo dediler.' Bu insanların ilişkileri yetişkinlerin meselesi değil sadece." },
        { id: "garden_swing", name: "SALINCAĞA NOT BIRAK", relX: 0.68, relY: 0.62, icon: "✍️", subtitle: "PASLI SALINCAK DEMİRİ", action: "note", desc: "Salıncak demirine kazınmış bir not bırak." }
      ],
      studio: [
        { id: "studio_gospel_kenan", name: "GOSPEL BABY (Kenan Studio Demo)", relX: 0.45, relY: 0.55, icon: "🎵", subtitle: "KENAN KAYDEDİYOR // OFFICIAL AUDIO", action: "music", src: "K35AtsZEl5o", fallbackSrc: "assets/audio/track_gospel_baby_kenan.mp3", desc: "Kenan'ın stüdyoda kaydettiği ilk demo. 'Daha Anadolu sesi lazım bu şarkıya... Keşke Ekrem söylese.'" },
        { id: "studio_gospel_ekrem", name: "🎙️ BU ŞARKIYI EKREM'DEN DİNLE", relX: 0.62, relY: 0.48, icon: "⚡", subtitle: "EKREM // İT OTURUŞU & MİKROFON", action: "music", src: "mdPhJrnytkA", fallbackSrc: "assets/audio/track_gospel_baby_ekrem.mp3", desc: "Kenan Ekrem'i ikna etti. Ekrem stüdyo taburesinde it oturuşu, elinde mikrofon, kül tablasında tüten sigara... Şarkının hakiki sokak ruhu." },
        { id: "studio_biri_varmis", name: "BİRİ VARMIŞ ÖTEKİ YOK OLMASIN", relX: 0.76, relY: 0.58, icon: "📻", subtitle: "MURAT VE EKREM DÜETİ // BAHAR'A", action: "music", src: "GLQcmdJsO5U", fallbackSrc: "assets/audio/track_biri_varmis.mp3", desc: "Murat ve Ekrem beraber Bahar'a söylüyorlar." },
        { id: "studio_dialogue", name: "KENAN İLE KONUŞ", relX: 0.28, relY: 0.52, icon: "💬", subtitle: "MÜZİK PRODÜKSİYONU", action: "dialogue", charId: "kenan", desc: "Kenan ile müzik ve Susuz üzerine konuşun." },
        { id: "studio_note", name: "NOT DEFTERİNE YAZ", relX: 0.58, relY: 0.82, icon: "✍️", subtitle: "STÜDYO DEFTERİ", action: "note", desc: "Stüdyo defterine bir satır bırak." }
      ],
      accounting: [
        { id: "acc_board", name: "PRODÜKSİYON İHTİYAÇLARI MASASI", relX: 0.50, relY: 0.52, icon: "📋", subtitle: "MÜDÜR, BU HAFTAKİ DURUM ŞÖYLE", action: "focus_tab", section: "accounting", desc: "Kamera, ses, kostüm ve cast ihtiyaçlarının anlık durumu." },
        { id: "acc_sponsor", name: "SPONSORLUK VE DESTEK PROTOKOLÜ", relX: 0.72, relY: 0.66, icon: "🤝", subtitle: "İKİ EKSENLİ KATKI HAVUZU", action: "funding", desc: "SUSSUZ prodüksiyonuna destek sağlama protokolü." }
      ],
      home_interior: [
        { id: "home_lock", name: "SENARYO MASASI", relX: 0.50, relY: 0.55, icon: "🔒", subtitle: "HENÜZ YAZILIYOR. :D // YAZIM %84", action: "locked_info", desc: "Senaryo yazım süreci devam ediyor. Yazım ilerlemesi: %84." }
      ],
      murat_home: [
        { 
          id: "murat_view", 
          name: "PANORAMİK ANKARA VE GÖKDELEN CAMI", 
          relX: 0.28, 
          relY: 0.45, 
          icon: "🌃", 
          subtitle: "EXT. KUZEY BLOKLARI // ŞEHRE TEPEDEN BAKIŞ", 
          action: "prop", 
          propName: "Panoramik Ankara Camı", 
          desc: "Gökdelenin tepesinden aşağıdaki göle ve Susuz'un karanlık mahallelerine uzanan soğuk Ankara manzarası. Murat'ın Susuz'a ne kadar yabancı olduğunun sessiz kanıtı." 
        },
        { 
          id: "murat_file", 
          name: "MASADAKİ DOSYA VE ANAHTARLAR", 
          relX: 0.48, 
          relY: 0.82, 
          icon: "📁", 
          subtitle: "SORUŞTURMA VE ARABA ANAHTARI", 
          action: "prop", 
          propName: "Masa Üzerindeki Dosya ve Anahtarlar", 
          desc: "Torpido anahtarları ve açılmamış bir soruşturma dosyası. Şehre bakan camın önünde duran tek şey." 
        },
        { 
          id: "murat_dialogue", 
          name: "MURAT İLE YÜZLEŞ", 
          relX: 0.72, 
          relY: 0.65, 
          icon: "💬", 
          subtitle: "SOĞUK YALNIZLIK", 
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
        sec = this.sectors.find(s => s.id === "ritim") || { x: 527, y: 337 };
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

  // Sahne İçi Sıcak Noktalar Çizimi
  _renderSceneHotspots(ctx, time, w, h) {
    if (!this.activeSceneId || !this.sceneHotspots[this.activeSceneId]) return;
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

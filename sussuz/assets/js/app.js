/**
 * SUSSUZ — Master Application & Experience Orchestrator (Kanonik Sürüm)
 * Kesintisiz Yaşayan Evren, Glassglow Floating Panel ve Ek-3 Tipografisi
 */

document.addEventListener("DOMContentLoaded", () => {
  // Sahnelerin Kanonik Veri Tabanı
  const SCENE_DATA = {
    ritim: {
      id: "ritim",
      title: "RİTİM (GİRİŞ & DIŞ ALAN)",
      subtitle: "EXT. GÖKSU PARKI ADASI (ESKİ ADA RESTORANI) — 01:45 // BÖLÜM 1, SAHNE 1",
      image: "assets/img/loc_ritim.jpg",
      characterId: "ekrem",
      characterName: "Ekrem (Yusuf)",
      characterRole: "Sincanlı Dealer // Sokak Koruyucusu",
      atmosphere: "Gerçekte Göksu Parkı'ndaki adada yer alan restoranın yerine konumlanan gece kulübü. Göletin ortasındaki köprüyle ulaşılan ada. Girişte bekleyen kalabalık, kapı güvenliği ve yukarıdaki cam ofisin mor-kırmızı neon parıltıları.",
      musicNote: "Filtrelenmiş 4/4 Sub-Bass & Araba Uğultusu",
      subvenues: [
        { id: "ritim", label: "Giriş / Ada" },
        { id: "ritim_road", label: "Mekân Önü Yol" },
        { id: "dancefloor", label: "Ana Dans Pisti" },
        { id: "goksu_room", label: "Göksu'nun Cam Ofisi" },
        { id: "ritim_vip", label: "VIP / Loca (Yazılıyor)" },
        { id: "ritim_backstage", label: "Backstage / Kulis" },
        { id: "accounting", label: "Muhasebe / Prodüksiyon" }
      ],
      noteOrigin: "RİTİM Giriş Panosu",
      props: [
        {
          name: "Kapı Görevlisinin Telsizi",
          icon: "📻",
          desc: "KAPI GÖREVLİSİ: 'Rezervasyon?' — Telsizden emir gelir: 'Buyurun.' Yukarıdan biri Murat'ı görmüştür."
        },
        {
          name: "Ada Giriş Köprüsü",
          icon: "🌉",
          desc: "Göletin üzerindeki beton köprü. Şehirden adaya tek kara bağlantısı."
        },
        {
          name: "Otoparktaki Araba",
          icon: "🚗",
          desc: "Murat'ın navigasyona Susuz yazıp kapısını açtığı, Ekrem'in 'Sana gerisini göstereceğim' demesi üzerine arabayı kilitleyip geri döndüğü araç."
        }
      ]
    },

    ritim_road: {
      id: "ritim_road",
      title: "MEKÂN ÖNÜ YOL",
      subtitle: "EXT. RİTİM ÇIKIŞI & BAĞLANTI YOLU — 04:30 // BÖLÜM 1 FİNALİ",
      image: "assets/img/loc_ritim_road.jpg",
      characterId: "ekrem",
      characterName: "Ekrem ve Murat",
      characterRole: "1. Bölüm Finali // Dönüm Noktası",
      atmosphere: "1. Bölüm final sahnesi. Yağmur ıslaklığı, asfalt parıltısı. Ekrem tam arabaya binecekken Murat'ı durdurur: 'Sana gerisini göstereceğim.' Murat arabayı kilitler, geri döner. İki yabancının kaderinin düğümlendiği an.",
      musicNote: "Bilmem, Ben De — Kuru Gece Ayazı",
      subvenues: [
        { id: "ritim", label: "Giriş / Ada" },
        { id: "ritim_road", label: "Mekân Önü Yol" },
        { id: "dancefloor", label: "Ana Dans Pisti" },
        { id: "goksu_room", label: "Göksu'nun Cam Ofisi" },
        { id: "ritim_vip", label: "VIP / Loca (Yazılıyor)" },
        { id: "ritim_backstage", label: "Backstage / Kulis" },
        { id: "accounting", label: "Muhasebe / Prodüksiyon" }
      ],
      noteOrigin: "Yol Kenarı Kaldırım Taşı",
      props: [
        {
          name: "Ekrem'in Murat'ı Durdurduğu An",
          icon: "✋",
          desc: "EKREM: 'Sana gerisini göstereceğim.' Murat anahtarı cebine atar; gece henüz bitmemiştir."
        },
        {
          name: "Farları Yanan Mercedes",
          icon: "🚘",
          desc: "Asfaltın üzerinde buğulanmış far ışıkları. Ankara gecesinde iki yabancı."
        }
      ]
    },

    dancefloor: {
      id: "dancefloor",
      title: "ANA DANS PİSTİ",
      subtitle: "INT. RİTİM / ALT KAT PİST — 02:40 // BÖLÜM 2, SAHNE 1",
      image: "assets/img/scene_dancefloor.png",
      characterId: "ekrem",
      characterName: "Murat ve Ekrem",
      characterRole: "Kontrolün Kaybı & İlk Temas",
      atmosphere: "Bas zemini titretiyor. Tavanda Göksu'nun ses yalıtımlı cam ofisi görünüyor; camın arkasından aşağıdaki dans pisti loş bir akvaryum gibi izleniyor. Murat ve Ekrem gülerek dans ediyor. 'HIRSIZ' çalıyor. MURAT: 'Olm, polisim ben!' — EKREM: 'Ben de torbacı. :D'",
      musicNote: "HIRSIZ — Club Noir Bas Riff (124 BPM)",
      noteOrigin: "Kulüp Tuvalet Duvarı",
      subvenues: [
        { id: "ritim", label: "Giriş / Ada" },
        { id: "ritim_road", label: "Mekân Önü Yol" },
        { id: "dancefloor", label: "Ana Dans Pisti" },
        { id: "goksu_room", label: "Göksu'nun Cam Ofisi" },
        { id: "ritim_vip", label: "VIP / Loca (Yazılıyor)" },
        { id: "ritim_backstage", label: "Backstage / Kulis" },
        { id: "accounting", label: "Muhasebe / Prodüksiyon" }
      ],
      props: [
        {
          name: "Tavandaki Cam Ofis",
          icon: "🪟",
          desc: "Yukarıdaki cam ofisten Göksu aşağıdaki pisti izliyor. Dans pistinden cam ve içindeki siluetler net görülüyor."
        },
        {
          name: "Ense Teması",
          icon: "⚡",
          desc: "EKREM: 'Öbür tarafa gitsen bara giricen yarram.' Murat güler; hayatında ilk defa kontrolü bırakır."
        },
        {
          name: "Polis Dansı",
          icon: "🕺",
          desc: "EKREM: 'Polis gibi dans ediyorsun... Dimdik, kollar kontrollü, gözler çıkışlarda.'"
        }
      ]
    },

    goksu_room: {
      id: "goksu_room",
      title: "GÖKSU'NUN CAM OFİSİ",
      subtitle: "INT. RİTİM / ÜST KAT CAM OFİS — 02:15 // BÖLÜM 1, SAHNE 2",
      image: "assets/img/loc_office.jpg",
      characterId: "kenan",
      characterName: "Kenan (ve Göksu)",
      characterRole: "Kenan Göksu'yu Oyalıyor",
      atmosphere: "Dans pistini tepeden gören devasa cam ofis. Odada telefonlar, güvenlik ekranları, camın arkasında aşağıdaki kalabalık. Kenan onu oyalıyor. Arkada: 'Bu Şarkıyı Kaybedemem' çalıyor. 'Duvarlarda izin / Odalarda sesin / Geçti modası artık o eski senin...'",
      musicNote: "Bu Şarkıyı Kaybedemem — Loş Piyano ve Bas",
      noteOrigin: "Göksu'nun Masasındaki Telefon",
      subvenues: [
        { id: "ritim", label: "Giriş / Ada" },
        { id: "ritim_road", label: "Mekân Önü Yol" },
        { id: "dancefloor", label: "Ana Dans Pisti" },
        { id: "goksu_room", label: "Göksu'nun Cam Ofisi" },
        { id: "ritim_vip", label: "VIP / Loca (Yazılıyor)" },
        { id: "ritim_backstage", label: "Backstage / Kulis" },
        { id: "accounting", label: "Muhasebe / Prodüksiyon" }
      ],
      props: [
        {
          name: "Dans Pistini Gören Cam Cephe",
          icon: "🪟",
          desc: "Camın ardından aşağıdaki dans pistinde Murat ve Ekrem'in dans ettiği kalabalık loş bir akvaryum gibi görünüyor."
        },
        {
          name: "Bu Şarkıyı Kaybedemem (Sözler)",
          icon: "🎵",
          desc: "Kenan'ın Göksu'ya dinlettiği demo: 'Duvarlarda izin / Odalarda sesin / Geçti modası artık o eski senin...'"
        },
        {
          name: "Bahar / Deniz Dosyası",
          icon: "📁",
          desc: "Göksu Murat'a: 'Yarım dosya... Yarısı yeter. Ne bildiğini öğren. Kiminle konuşman gerekiyorsa konuş.'"
        }
      ]
    },

    ritim_vip: {
      id: "ritim_vip",
      title: "VIP / ÜST KAT LOCA",
      subtitle: "INT. RİTİM / ASMA KAT VIP LOCA // SENARYO AŞAMASI",
      image: "assets/img/loc_ritim_vip.jpg",
      characterId: "goksu",
      characterName: "Senaryo Yazım Odası",
      characterRole: "Görünmeyen Güçler & Bürokratlar",
      atmosphere: "ŞU AN SAHNESİ YOK, YAZILIYOR. :D // Şehrin bürokratları, karanlık sermayesi ve Susuz'un görünmeyen yüzleri için ayrılmış asma kat VIP loca bölümü. Senaryo yazım aşamasında kurgulanıyor. Yazım ilerlemesi: %25.",
      musicNote: "Boğuk Şampanya & Derin Bas",
      noteOrigin: "VIP Loca Masası",
      isLockedRoom: true,
      subvenues: [
        { id: "ritim", label: "Giriş / Ada" },
        { id: "ritim_road", label: "Mekân Önü Yol" },
        { id: "dancefloor", label: "Ana Dans Pisti" },
        { id: "goksu_room", label: "Göksu'nun Cam Ofisi" },
        { id: "ritim_vip", label: "VIP / Loca (Yazılıyor)" },
        { id: "ritim_backstage", label: "Backstage / Kulis" },
        { id: "accounting", label: "Muhasebe / Prodüksiyon" }
      ],
      props: [
        {
          name: "Kilitli Kapı ve Özel Loca",
          icon: "🔒",
          desc: "Bu kapının arkasındaki sahneler şu anda senaryo masasında yazılıyor."
        }
      ]
    },

    ritim_backstage: {
      id: "ritim_backstage",
      title: "BACKSTAGE / KULİS",
      subtitle: "INT. RİTİM / SAHNE ARKASI & KORİDORLAR // HAZIRLIK",
      image: "assets/img/loc_ritim_backstage.jpg",
      characterId: "kenan",
      characterName: "Kenan ve Ekip",
      characterRole: "Canlı Sahne Hazırlığı",
      atmosphere: "Kenan'ın sahneye çıkmadan önce beklediği, bas titreşimlerinin betondan geçtiği dar kulis koridoru. Işıklı aynalar, askıda sahne kostümleri, bantlanmış ses kabloları ve sahne arkası gerilimi.",
      musicNote: "Uzak Sahne Uğultusu ve Telsiz Hışırtısı",
      noteOrigin: "Kulis Aynası Kenarı",
      subvenues: [
        { id: "ritim", label: "Giriş / Ada" },
        { id: "ritim_road", label: "Mekân Önü Yol" },
        { id: "dancefloor", label: "Ana Dans Pisti" },
        { id: "goksu_room", label: "Göksu'nun Cam Ofisi" },
        { id: "ritim_vip", label: "VIP / Loca (Yazılıyor)" },
        { id: "ritim_backstage", label: "Backstage / Kulis" },
        { id: "accounting", label: "Muhasebe / Prodüksiyon" }
      ],
      props: [
        {
          name: "Kenan'ın Sahne Ceketi",
          icon: "🧥",
          desc: "Askıda bekleyen deri ceket. Göksu'nun parasıyla alınmış ama Kenan'ın öfkesini taşıyan kostüm."
        },
        {
          name: "Kulis Aynası & Karalamalar",
          icon: "🪞",
          desc: "Ayna kenarına rujla yazılmış bir şarkı satırı: 'Geçti modası artık o eski senin...'"
        }
      ]
    },

    accounting: {
      id: "accounting",
      title: "RİTİM MUHASEBE // PRODÜKSİYON",
      subtitle: "INT. RİTİM / ARKA OFİS // CANLI İHTİYAÇ MASASI",
      image: "assets/img/loc_accounting.jpg",
      characterId: "goksu",
      characterName: "Muhasebeci (ve Göksu)",
      characterRole: "Sponsorluk ve Canlı Üretim Merkezi",
      atmosphere: "Bütün ciddi atmosferi biraz kırıyoruz. Muhasebeci hesap yapıyor: 'Abi oyuncu var, kamera yok.' — 'Kostüm tamam da şu adamı çıplak çekmeyelim diyosan sponsor lazım müdür. :D'",
      musicNote: "Hesap Makinesi Tıkırtısı & Boğuk Bas",
      noteOrigin: "Muhasebecinin Masasındaki Post-it",
      isAccountingSpecial: true,
      subvenues: [
        { id: "ritim", label: "Giriş / Ada" },
        { id: "ritim_road", label: "Mekân Önü Yol" },
        { id: "dancefloor", label: "Ana Dans Pisti" },
        { id: "goksu_room", label: "Göksu'nun Cam Ofisi" },
        { id: "ritim_vip", label: "VIP / Loca (Yazılıyor)" },
        { id: "ritim_backstage", label: "Backstage / Kulis" },
        { id: "accounting", label: "Muhasebe / Prodüksiyon" }
      ],
      props: []
    },

    hill: {
      id: "hill",
      title: "TEPE // AŞIKLAR TEPESİ",
      subtitle: "EXT. SUSUZ SIRTLARI / ISSIZ MANZARA — 05:30 // BÖLÜM 2, SAHNE 12",
      image: "assets/img/loc_hill.jpg",
      characterId: "murat",
      characterName: "Murat ve Ekrem",
      characterRole: "Sessizlik ve Ankara Ayazı",
      atmosphere: "Eski anten kulelerinden arınmış, virajlı yolun bittiği ıssız tepe. Aşıklar tepesi tadında ama gecenin 05:30'unda sadece rüzgâr ve sigara dumanı. Murat ve Ekrem arabaya yaslanmış, aşağıdaki Ankara ışıklarına bakıyor. 'Bilmem, Ben De' teması giriyor. Ekrem: 'Her şeyi anlatak da diziye ne kaldı yarraam? :D'",
      musicNote: "Bilmem, Ben De — Kuru Ayaz Rüzgarı",
      noteOrigin: "Araba Torpido Gözü",
      props: [
        {
          name: "Sırayla İçilen Sigara",
          icon: "🚬",
          desc: "EKREM: 'Dalga geçme. Ben hissettiğim şeye güvenirim. Yanlışsa da benim yanlışım olur. Başkasının lafıyla yanlış yapmaktan iyidir.'"
        },
        {
          name: "TÜBİTAK Diyaloğu",
          icon: "🌌",
          desc: "MURAT: 'Sende bi şey var, içim yamuk demedi. Bilimsel açıklaman bu mu?' — EKREM: 'He. TÜBİTAK.'"
        }
      ]
    },

    lake: {
      id: "lake",
      title: "GÖL KENARI // DENİZ FENERİ",
      subtitle: "EXT. GÖKSU PARKI & ESKİ BATAKLIK KIYISI // DİLEK'İN DOĞUM GÜNÜ",
      image: "assets/img/scene_lake.png",
      characterId: "bahar",
      characterName: "Bahar",
      characterRole: "Tek Başına Direniş",
      atmosphere: "Bahar tek başına. İskelenin ucundaki beyaz deniz fenerinin soğuk ışığı göle vuruyor. Her gün yakmıyor bu mumu; bugün Bahar Dilek'in doğum günü. Kendi yaptığı pastayı almış gelmiş, Bahar Dilek'in kanı üzerine kurulmuş bir parkta onun doğum günü pastasını üflüyor... 'Bataklık' ağıtı.",
      musicNote: "Bataklık — Ağıt ve Yağmur Tıpırtısı",
      isLakeMemorial: true,
      noteOrigin: "Fenerin Dibindeki İskele Tahtası",
      props: [
        {
          name: "Dilek'in Doğum Günü Pastası & Tek Mum",
          icon: "🕯️",
          desc: "Bahar'ın kendi elleriyle yaptığı doğum günü pastası. Bahar Dilek'in kanı üzerine kurulmuş bu parkta üflenmeyi bekliyor."
        },
        {
          name: "Göksu Deniz Feneri",
          icon: "🏮",
          desc: "Eski bataklığın üzerine inşa edilen parkta, göletin karanlık sularına vuran beyaz fener ışığı. Şehrin hafızasını örten eğreti bir ışık."
        }
      ]
    },

    garden: {
      id: "garden",
      title: "BAHAR'IN EVİ — BAHÇE",
      subtitle: "EXT. APARTMAN ARKA BAHÇESİ // SEÇİLMİŞ AİLE",
      image: "assets/img/scene_garden.png",
      characterId: "ata",
      characterName: "Ata ve Kenan",
      characterRole: "Çocuk Dünyası & Gerçek Aile",
      atmosphere: "Ata + Kenan. Çocuk dünyası. Müzik çok az. Ata: 'Bana okulda senin anan babanı mı sikiyo dediler.' Bu insanların ilişkileri sadece yetişkinlerin meselesi değil. Bir aile var.",
      musicNote: "Kırılgan Rüzgar ve Paslı Salıncak",
      noteOrigin: "Salıncak Demirine Kazınmış Not",
      props: [
        {
          name: "Kenan'ın Yonttuğu Araba",
          icon: "🏎️",
          desc: "Kenan'ın Ata için yonttuğu ve arkasına kırmızı şerit çektiği tahta oyuncak."
        }
      ]
    },

    home_interior: {
      id: "home_interior",
      title: "BAHAR'IN EVİ — İÇERİSİ",
      subtitle: "INT. BAHAR'IN DAİRESİ // YAPIM AŞAMASI",
      image: "assets/img/scene_bahar_home.png",
      characterId: "bahar",
      characterName: "Bahar",
      characterRole: "Kapalı Oda",
      atmosphere: "Kapıya gelince: 'Henüz yazılıyor. :D' Senaryo yazım aşaması siteye dahil edilmiştir. Yazım ilerlemesi: %25.",
      musicNote: "Sessizlik ve Saat Tik-Takları",
      isLockedRoom: true,
      noteOrigin: "Buzdolabı Magneti",
      props: []
    },

    murat_home: {
      id: "murat_home",
      title: "MURAT'IN EVİ // PENTHOUSE",
      subtitle: "INT/EXT. KUZEY BLOKLARI / GÖKDELEN REZİDANS // BÖLÜM 1",
      image: "assets/img/loc_murat_home.jpg",
      characterId: "murat",
      characterName: "Murat",
      characterRole: "Soğuk Yalnızlık & Şehre Tepeden Bakış",
      atmosphere: "Gölün ve Susuz'un tam karşısında, şehrin yeni gökdelen aksında camdan bir kule. Tavandan tabana camlar, Ankara'nın karanlık otoyol ışıkları ve aşağıdaki şehir. Bir bardak maden suyu, masada kapalı bir dosya ve araba anahtarı. Murat'ın Susuz'a ne kadar yabancı olduğunun sessiz kanıtı.",
      musicNote: "Gece Otoyol Uğultusu ve Kuru Ayaz",
      noteOrigin: "Masadaki Dosya Kenarı",
      props: [
        {
          name: "Masa Üzerindeki Dosya ve Anahtarlar",
          icon: "📁",
          desc: "Torpido anahtarları ve açılmamış bir soruşturma dosyası. Şehre bakan camın önünde duran tek şey."
        },
        {
          name: "Panoramik Ankara Camı",
          icon: "🌃",
          desc: "Gökdelenin tepesinden aşağıdaki göle ve Susuz'un karanlık mahallelerine uzanan soğuk Ankara manzarası."
        }
      ]
    },

    studio: {
      id: "studio",
      title: "KENAN'IN STÜDYOSU",
      subtitle: "INT. BATI YAKASI SES ATÖLYESİ // STEMLER & WISHLIST",
      image: "assets/img/loc_studio.jpg",
      characterId: "kenan",
      characterName: "Kenan",
      characterRole: "Müzik Üretim Laboratuvarı",
      atmosphere: "Gölün batı yakasında, Susuz mahallesinden ve Bahar'ın evinden uzakta bağımsız bir sığınak. Şehrin iki ayrı yakası; bir yanda Kenan'ın ses mikseri, diğer yanda sokaklar. Track stemleri, analog mikrofon, not defteri ve şarkıların demoları.",
      musicNote: "Sınırda Kalanım / Bataklık Stemleri",
      isStudioSpecial: true,
      noteOrigin: "Stüdyodaki Not Defteri",
      props: [
        {
          name: "Analog Mikser & Parça Listesi",
          icon: "🎛️",
          desc: "Kenan'ın masasında duran parça listesi: 'Sınırda Kalanım', 'Bataklık', 'Gospel Baby'. Stüdyonun analog kalbi."
        },
        {
          name: "Vokal Mikrofonu & Kül Tablası",
          icon: "🎙️",
          desc: "Ekrem'in taburede it oturuşuyla şarkıyı söylediği, ucunda dumanı tüten sigaranın durduğu mikrofon standı."
        }
      ]
    }
  };

  // Yeraltı Anma Listesi (Nefret Suçları Raporu Gerçek Kayıtları)
  const MEMORIAL_VICTIMS = [
    {
      name: "Bahar / Dilek İnce",
      meta: "10 Kasım 2008 // Etlik, Ankara\nEryaman direnişinin öncülerindendi. Mahkemede tehdit edildiğini beyan ettikten sonra aracında pompalı tüfekle başından vurularak katledildi. Faili meçhul bırakıldı."
    },
    {
      name: "Ahmet Yıldız",
      meta: "15 Temmuz 2008 // Üsküdar, İstanbul\nCinsel yönelimi nedeniyle babası tarafından kurşunlanarak katledildi. Firari sanık 16 yıldır yakalanmadı; dava zaman aşımı tehdidi altında."
    },
    {
      name: "Hande Kader",
      meta: "Ağustos 2016 // Zekeriyaköy, İstanbul\nTrans hakları aktivisti. İşkence edilip yakılmış bedeni yol kenarında bulundu. Failleri hiçbir zaman yargı önüne çıkarılmadı."
    },
    {
      name: "Ali Turgut Arda",
      meta: "2007 // Ankara\nAnkara'da nefret saikiyle katledilen trans bireylerden biri. Sistemik cezasızlık zırhıyla korunan dosyalardan sadece biri."
    }
  ];

  // DOM Elemanları
  const openingOverlay = document.getElementById("openingOverlay");
  const enterBtn = document.getElementById("enterBtn");
  const spatialCanvas = document.getElementById("spatialCanvas");

  // HUD
  const hudBackBtn = document.getElementById("hudBackBtn");
  const hudToggleTabBtn = document.getElementById("hudToggleTabBtn");
  const hudInstructions = document.getElementById("hudInstructions");
  const openFundingBtn = document.getElementById("openFundingBtn");
  const resetCameraBtn = document.getElementById("resetCameraBtn");
  const muteBtn = document.getElementById("muteBtn");

  // Glassglow Floating Side Tab
  const glassglowTab = document.getElementById("glassglowTab");
  const closeGlassglowBtn = document.getElementById("closeGlassglowBtn");
  const glassglowTitle = document.getElementById("glassglowTitle");
  const glassglowSubtitle = document.getElementById("glassglowSubtitle");
  const glassglowSubvenues = document.getElementById("glassglowSubvenues");
  const glassglowAtmosphere = document.getElementById("glassglowAtmosphere");
  const glassglowAudioNote = document.getElementById("glassglowAudioNote");
  const glassglowCustomArea = document.getElementById("glassglowCustomArea");
  const glassglowPropsList = document.getElementById("glassglowPropsList");
  const dialogueTriggerBtn = document.getElementById("dialogueTriggerBtn");
  const leaveNoteBtn = document.getElementById("leaveNoteBtn");
  const returnPanoramaBtn = document.getElementById("returnPanoramaBtn");

  // Odaklanılan Nesne Kartı
  const glassglowFocusedObject = document.getElementById("glassglowFocusedObject");
  const focusedObjIcon = document.getElementById("focusedObjIcon");
  const focusedObjTitle = document.getElementById("focusedObjTitle");
  const focusedObjSubtitle = document.getElementById("focusedObjSubtitle");
  const focusedObjDesc = document.getElementById("focusedObjDesc");
  const focusedObjActionBtn = document.getElementById("focusedObjActionBtn");

  // Yeraltı Katmanı
  const undergroundOverlay = document.getElementById("undergroundOverlay");
  const victimNameEl = document.getElementById("victimName");
  const victimMetaEl = document.getElementById("victimMeta");
  const undergroundFinalBox = document.getElementById("undergroundFinalBox");
  const exitUndergroundBtn = document.getElementById("exitUndergroundBtn");

  // Anonim Not Modalı
  const anonymousNoteModal = document.getElementById("anonymousNoteModal");
  const closeNoteModalBtn = document.getElementById("closeNoteModalBtn");
  const noteOriginBadge = document.getElementById("noteOriginBadge");
  const noteTextarea = document.getElementById("noteTextarea");
  const notePublishCheck = document.getElementById("notePublishCheck");
  const submitNoteBtn = document.getElementById("submitNoteBtn");
  const noteSuccessBox = document.getElementById("noteSuccessBox");

  // Diyalog Modalı
  const dialogueModal = document.getElementById("dialogueModal");
  const closeDialogueBtn = document.getElementById("closeDialogueBtn");
  const dialogueAvatar = document.getElementById("dialogueAvatar");
  const dialogueCharName = document.getElementById("dialogueCharName");
  const dialogueCharRole = document.getElementById("dialogueCharRole");
  const dialogueSpeechBox = document.getElementById("dialogueSpeechBox");
  const dialogueChoicesBox = document.getElementById("dialogueChoicesBox");

  // Fonlama / Crowd-Production Modalı
  const fundingModal = document.getElementById("fundingModal");
  const closeFundingBtn = document.getElementById("closeFundingBtn");
  const crowdForm = document.getElementById("crowdForm");
  const crowdSuccess = document.getElementById("crowdSuccess");

  let currentScene = null;
  let spatialUniverse = null;
  let currentNoteOrigin = "Dünya Panosu";

  // 1. AÇILIŞ SEKANSI
  enterBtn.addEventListener("click", () => {
    if (window.SUSSUZ_AUDIO) {
      window.SUSSUZ_AUDIO.init();
      window.SUSSUZ_AUDIO.setSceneAudio("master");
    }

    openingOverlay.classList.add("opening-hidden");
    setTimeout(() => {
      openingOverlay.style.display = "none";
    }, 1800);

    // Master Spatial Universe Başlatılıyor
    spatialUniverse = new window.SpatialUniverse(
      spatialCanvas,
      (sceneId) => handleSceneChange(sceneId),
      (hotspot, sceneId, screenPos) => handleObjectClick(hotspot, sceneId, screenPos)
    );

    spatialUniverse.onCanvasEmptyClick = () => {
      if (glassglowTab.classList.contains("tab-active")) {
        glassglowTab.classList.remove("tab-active");
        hudToggleTabBtn.textContent = "👁️ MEKÂN HAKKINDA";
      }
    };
  });

  // 2. SAHNE GEÇİŞ YÖNETİCİSİ (Panorama <-> Canlı Sahne)
  function handleSceneChange(sceneId) {
    if (sceneId) {
      const data = SCENE_DATA[sceneId];
      if (!data) return;

      currentScene = data;
      currentNoteOrigin = data.noteOrigin || "Dünya Panosu";

      // Glassglow Tab İçeriğini Doldur
      glassglowTitle.textContent = data.title;
      glassglowSubtitle.textContent = data.subtitle;
      glassglowAtmosphere.textContent = data.atmosphere;
      glassglowAudioNote.textContent = data.musicNote;

      // Odak kartını gizle
      glassglowFocusedObject.style.display = "none";

      // Alt Mekân Linkleri
      glassglowSubvenues.innerHTML = "";
      if (data.subvenues && data.subvenues.length > 0) {
        data.subvenues.forEach((sub) => {
          const btn = document.createElement("button");
          btn.className = "glassglow-subvenue-link";
          btn.textContent = `▸ ${sub.label}`;
          btn.addEventListener("click", () => {
            if (spatialUniverse) spatialUniverse.flyToScene(sub.id);
          });
          glassglowSubvenues.appendChild(btn);
        });
        glassglowSubvenues.style.display = "flex";
      } else {
        glassglowSubvenues.style.display = "none";
      }

      // Özel Etkileşim Alanları (Mum, Muhasebe, Stüdyo, vb.)
      renderSceneCustomArea(data);

      // Sahne İpuçları Listesi
      glassglowPropsList.innerHTML = "";
      if (data.props && data.props.length > 0) {
        data.props.forEach((prop) => {
          const btn = document.createElement("button");
          btn.className = "ek3-trigger";
          btn.innerHTML = `<span>${prop.icon}</span> <span>${prop.name}</span>`;
          btn.addEventListener("click", () => {
            showFocusedObjectCard({
              icon: prop.icon,
              name: prop.name,
              subtitle: "SAHNE DETAYI",
              desc: prop.desc
            });
          });
          glassglowPropsList.appendChild(btn);
        });
      } else {
        glassglowPropsList.innerHTML = `<span style="font-family:var(--font-mono); font-size:0.7rem; color:#64748b;">Bu mekânda henüz açığa çıkmamış ipuçları var.</span>`;
      }

      // Karakter Diyalog Butonu
      if (data.isLockedRoom || data.isMissingLocation || !data.characterId) {
        dialogueTriggerBtn.style.display = "none";
      } else {
        dialogueTriggerBtn.style.display = "flex";
        dialogueTriggerBtn.textContent = `[ 💬 ${data.characterName.toUpperCase()} İLE YÜZLEŞ ]`;
      }

      leaveNoteBtn.textContent = `[ ✍️ ${currentNoteOrigin.toUpperCase()} NOT BIRAK ]`;

      // Glassglow Pop-up'ı Varsayılan Olarak KAPALI tutuyoruz (Kullanıcı Talebi: Default kapalı)
      glassglowTab.classList.remove("tab-active");

      // HUD Güncelle
      hudBackBtn.style.display = "block";
      hudToggleTabBtn.style.display = "block";
      hudToggleTabBtn.textContent = "👁️ MEKÂN HAKKINDA";
      hudInstructions.textContent = "[ SERBEST GEZİNME: SÜRÜKLE ] • [ SAHNEDEKİ IŞILTILARA TIKLA ] • [ PANORAMAYA DÖNMEK İÇİN ZOOM OUT ]";

      // Ses Güncelle
      if (window.SUSSUZ_AUDIO) {
        window.SUSSUZ_AUDIO.setSceneAudio(sceneId);
      }
    } else {
      // Panoramaya Dönüldü
      currentScene = null;
      glassglowTab.classList.remove("tab-active");
      glassglowFocusedObject.style.display = "none";

      hudBackBtn.style.display = "none";
      hudToggleTabBtn.style.display = "none";
      hudInstructions.textContent = "[ SÜRÜKLE: KEŞFET ] • [ TEKERLEK: ZOOM ] • [ IŞIKLARIN SESİNİ TAKİP ET ]";

      if (window.SUSSUZ_AUDIO) {
        window.SUSSUZ_AUDIO.setSceneAudio("master");
      }
    }
  }

  // Akıllı Konumsal Pop-up Yerleşimi (Tıklanan nesnenin üzerine/yanına açılır)
  function positionGlassglowPopup(clickX, clickY) {
    if (clickX === undefined || clickY === undefined) {
      glassglowTab.style.left = "auto";
      glassglowTab.style.right = "28px";
      glassglowTab.style.top = "75px";
      glassglowTab.style.bottom = "auto";
      return;
    }

    const pad = 16;
    const popWidth = Math.min(375, window.innerWidth - 32);
    const popHeight = Math.min(530, window.innerHeight - 110);

    let left = clickX - (popWidth / 2);
    if (left + popWidth > window.innerWidth - pad) {
      left = window.innerWidth - popWidth - pad;
    }
    if (left < pad) {
      left = pad;
    }

    let top = clickY - popHeight - 20;
    if (top < 65) {
      top = clickY + 25;
    }
    if (top + popHeight > window.innerHeight - pad) {
      top = window.innerHeight - popHeight - pad;
    }
    if (top < 65) top = 65;

    glassglowTab.style.left = `${Math.round(left)}px`;
    glassglowTab.style.top = `${Math.round(top)}px`;
    glassglowTab.style.right = "auto";
    glassglowTab.style.bottom = "auto";
  }

  // 3. SAHNE İÇİ NESNEYE TIKLAMA YÖNETİCİSİ (Pop-up Tetikleyici)
  function handleObjectClick(hotspot, sceneId, clickPos) {
    if (!hotspot) return;

    // Pop-up'ı tıklanan nesnenin üzerine akıllıca konumlandır
    if (clickPos && typeof clickPos.x === "number") {
      positionGlassglowPopup(clickPos.x, clickPos.y);
    } else {
      positionGlassglowPopup();
    }

    // Pop-up'ı aç
    glassglowTab.classList.add("tab-active");
    hudToggleTabBtn.textContent = "👁️ DETAYLARI GİZLE";

    // Odaklanılan Nesne Kartını Göster
    showFocusedObjectCard({
      icon: hotspot.icon,
      name: hotspot.name,
      subtitle: hotspot.subtitle || "İNTERAKTİF İPUCU",
      desc: hotspot.desc || `${hotspot.name} sahnesi inceleniyor.`
    });

    // Eylemler
    if (hotspot.action === "candle") {
      focusedObjActionBtn.style.display = "flex";
      focusedObjActionBtn.innerHTML = "🕯️ TEK MUMU ÜFLE // YERALTINA İN";
      focusedObjActionBtn.onclick = () => startUndergroundDescent();
    } else if (hotspot.action === "music") {
      focusedObjActionBtn.style.display = "flex";
      focusedObjActionBtn.innerHTML = `▶ ${hotspot.name} 15 SN DİNLE`;
      focusedObjActionBtn.onclick = () => window.playSnippet(hotspot.src);
    } else if (hotspot.action === "dialogue") {
      focusedObjActionBtn.style.display = "flex";
      focusedObjActionBtn.innerHTML = `[ 💬 ${hotspot.name} DİYALOĞUNU BAŞLAT ]`;
      focusedObjActionBtn.onclick = () => openDialogueModal(hotspot.charId || (currentScene ? currentScene.characterId : null));
    } else if (hotspot.action === "note") {
      focusedObjActionBtn.style.display = "flex";
      focusedObjActionBtn.innerHTML = `[ ✍️ BU NOKTAYA BİR NOT BIRAK ]`;
      focusedObjActionBtn.onclick = () => openAnonymousNoteModal();
    } else if (hotspot.action === "funding") {
      focusedObjActionBtn.style.display = "flex";
      focusedObjActionBtn.innerHTML = `[ SPONSORLUK VE DESTEK PROTOKOLÜ ]`;
      focusedObjActionBtn.onclick = () => window.openFundingModal();
    } else {
      focusedObjActionBtn.style.display = "none";
    }
  }

  function showFocusedObjectCard(obj) {
    focusedObjIcon.textContent = obj.icon || "⚡";
    focusedObjTitle.textContent = obj.name;
    focusedObjSubtitle.textContent = obj.subtitle;
    focusedObjDesc.textContent = obj.desc;
    glassglowFocusedObject.style.display = "block";
    glassglowFocusedObject.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  // 4. ÖZEL İÇERİK ALANLARI
  function renderSceneCustomArea(data) {
    glassglowCustomArea.innerHTML = "";

    // GÖL KENARI: Mum Üfleme Kutusu
    if (data.isLakeMemorial) {
      const box = document.createElement("div");
      box.className = "candle-blow-box";
      box.innerHTML = `
        <h4>DİLEK'İN DOĞUM GÜNÜ PASTASI</h4>
        <p>“Bazı şeyler gömülünce kaybolmaz.” — Bahar Dilek'in kanı üzerine kurulmuş parkta tek başına.</p>
        <button id="blowCandleInlineBtn" class="ek3-trigger ek3-trigger-accent" style="justify-content:center; border: 1px solid rgba(255, 212, 59, 0.45); color: #ffe066;">
          🕯️ DİLEK'İN DOĞUM GÜNÜ PASTASINI ÜFLE
        </button>
      `;
      glassglowCustomArea.appendChild(box);
      box.querySelector("#blowCandleInlineBtn").addEventListener("click", startUndergroundDescent);
    }

    // RİTİM MUHASEBE: Canlı Prodüksiyon İhtiyaç Masası
    if (data.isAccountingSpecial) {
      const board = document.createElement("div");
      board.className = "accounting-board";
      board.innerHTML = `
        <div style="font-size: 0.82rem; color: #ff8787; margin-bottom: 12px; font-weight: 600;">
          MÜDÜR, BU HAFTAKİ DURUM ŞÖYLE:
        </div>
        <div class="accounting-item-row">
          <span>• 2 adet kablosuz yaka mikrofonu lazım.</span>
          <button class="accounting-action-btn" onclick="openFundingModal('Prodüksiyon desteği verebilirim')">Mikrofon Sağla</button>
        </div>
        <div class="accounting-item-row">
          <span>• Kenan’ın sahne kostümü hâlâ yok.</span>
          <button class="accounting-action-btn" onclick="openFundingModal('Kostüm / tekstil desteği sağlayabilirim')">Kostüm Sponsoru Ol</button>
        </div>
        <div class="accounting-item-row">
          <span>• Cast görüşmeleri başladı.</span>
          <button class="accounting-action-btn" onclick="openFundingModal('Oyuncuyum')">Cast Başvurusu</button>
        </div>
        <div class="accounting-item-row">
          <span>• Mekân işi çözüldü (Susuz & Kulüp).</span>
          <span style="color:#2ed573; font-size:0.7rem;">✓ Çözüldü</span>
        </div>
        <div class="accounting-item-row">
          <span>• Kamera paketi hâlâ açıkta.</span>
          <button class="accounting-action-btn" onclick="openFundingModal('Prodüksiyon desteği verebilirim')">Kamera Desteği</button>
        </div>
        <p style="font-size: 0.72rem; color: #94a3b8; margin-top: 14px; font-style: italic;">
          “Kostüm tamam da şu adamı çıplak çekmeyelim diyosan sponsor lazım müdür. :D”
        </p>
      `;
      glassglowCustomArea.appendChild(board);
    }

    // KENAN'IN STÜDYOSU: Wishlist, Vokalist Değiştirici & Stemler
    if (data.isStudioSpecial) {
      const studioBox = document.createElement("div");
      studioBox.innerHTML = `
        <!-- VOKALİST DEĞİŞTİRİCİ: KENAN vs EKREM (GOSPEL BABY) -->
        <div class="studio-version-switch-box">
          <div class="studio-version-header">
            <span class="studio-rec-dot"></span>
            <span class="studio-rec-title">CANLI KAYIT ODASI // VOKAL DEĞİŞTİRİCİ</span>
          </div>
          <div class="studio-version-lore">
            Kenan demoyu kaydediyor: <em>“Bu şarkıya daha sert, daha Anadolu bir ses lazım... Keşke Ekrem söylese.”</em> Ekrem'i ikna edip tabureye oturtuyor.
          </div>
          <div class="studio-vocal-buttons">
            <button id="vocalKenanBtn" class="vocal-switch-btn active">
              🎙️ Kenan Versiyonu (Demo)
            </button>
            <button id="vocalEkremBtn" class="vocal-switch-btn">
              🎙️ Ekrem Versiyonu (Anadolu Sesi)
            </button>
          </div>
          <div id="ekremStudioCard" class="ekrem-studio-card" style="display: none;">
            <div class="ekrem-sitting-visual">
              <img src="assets/img/ekrem_gospel_baby.jpg" alt="Ekrem Stüdyoda" class="ekrem-sitting-thumb" onerror="this.style.display='none'">
              <div class="ekrem-sitting-text">
                <strong style="color:var(--accent-gold);">EKREM STÜDYODA // İT OTURUŞU</strong><br>
                Taburede it oturuşu, elinde mikrofon: <em>“Angaralı Koray / Gospel Baby”</em>. Kenan masada kafasını sallıyor: <em>“İşte bu ses lazımdı oğlum!”</em>
              </div>
            </div>
            <button id="playEkremVersionBtn" class="ek3-trigger ek3-trigger-accent" style="margin-top: 8px; justify-content: center; font-size: 0.72rem; padding: 6px;">
              ▶ EKREM'İN KAYDINI DİNLE (YOUTUBE MASTER)
            </button>
          </div>
        </div>

        <div class="ek3-section-divider"><span>ENSTRÜMAN & DONANIM WISHLIST'İ</span></div>
        <div class="studio-wishlist-gear-grid">
          <div class="gear-slot">🎹 MIDI Klavye<br><span style="color:#2ed573; font-size:0.62rem;">Mevcut</span></div>
          <div class="gear-slot">🎸 Elektro Gitar<br><span style="color:#2ed573; font-size:0.62rem;">Mevcut</span></div>
          <div class="gear-slot">🎤 Mikrofon<br><span style="color:#2ed573; font-size:0.62rem;">Mevcut</span></div>
          <div class="gear-slot">🎧 Kulaklık<br><span style="color:#2ed573; font-size:0.62rem;">Mevcut</span></div>
          <div class="gear-slot">🥁 Pad Controller<br><span style="color:#2ed573; font-size:0.62rem;">Mevcut</span></div>
          <div class="gear-slot">🎛️ Ses Kartı<br><span style="color:#2ed573; font-size:0.62rem;">Mevcut</span></div>
          <div class="gear-slot">🔊 Monitörler<br><span style="color:#2ed573; font-size:0.62rem;">Mevcut</span></div>
          <div class="gear-slot gear-slot-missing" onclick="openFundingModal('Müzisyenim / sesçiyim')">
            + Synth Olabilirdi<br><span style="font-size:0.62rem;">[Destek Ol]</span>
          </div>
        </div>

        <div class="ek3-section-divider"><span>ŞARKI ÜRETİM STEMLERİ & 15 SN DEMOLAR</span></div>
        
        <div class="studio-track-card">
          <div class="studio-track-header">
            <span class="studio-track-title">GOSPEL BABY (Kenan & Ekrem)</span>
            <button class="studio-listen-btn" onclick="playSnippet('K35AtsZEl5o', 'assets/audio/track_gospel_baby_kenan.mp3')">▶ 15 sn Dinle</button>
          </div>
          <div class="studio-stems-grid">
            <div>Söz %100 <div class="studio-stem-bar"><div class="studio-stem-fill" style="width:100%;"></div></div></div>
            <div>Beste %95 <div class="studio-stem-bar"><div class="studio-stem-fill" style="width:95%;"></div></div></div>
            <div>Ekrem Vokal %90 <div class="studio-stem-bar"><div class="studio-stem-fill" style="width:90%;"></div></div></div>
            <div>Mastering %85 <div class="studio-stem-bar"><div class="studio-stem-fill" style="width:85%;"></div></div></div>
          </div>
        </div>

        <div class="studio-track-card">
          <div class="studio-track-header">
            <span class="studio-track-title">BATAKLIK (Bahar)</span>
            <button class="studio-listen-btn" onclick="playSnippet('yFymvGwoxjA', 'assets/audio/track_bataklik.mp3')">▶ 15 sn Dinle</button>
          </div>
          <div class="studio-stems-grid">
            <div>Söz %82 <div class="studio-stem-bar"><div class="studio-stem-fill" style="width:82%;"></div></div></div>
            <div>Beste %65 <div class="studio-stem-bar"><div class="studio-stem-fill" style="width:65%;"></div></div></div>
            <div>Aranje %25 <div class="studio-stem-bar"><div class="studio-stem-fill" style="width:25%;"></div></div></div>
            <div>Kayıt %10 <div class="studio-stem-bar"><div class="studio-stem-fill" style="width:10%;"></div></div></div>
          </div>
        </div>

        <div class="studio-track-card">
          <div class="studio-track-header">
            <span class="studio-track-title">HIRSIZ (Dans Pisti)</span>
            <button class="studio-listen-btn" onclick="playSnippet('KFrAv440Rmg', 'assets/audio/track_hirsiz.mp3')">▶ 15 sn Dinle</button>
          </div>
          <div class="studio-stems-grid">
            <div>Söz %90 <div class="studio-stem-bar"><div class="studio-stem-fill" style="width:90%;"></div></div></div>
            <div>Beste %85 <div class="studio-stem-bar"><div class="studio-stem-fill" style="width:85%;"></div></div></div>
            <div>Aranje %70 <div class="studio-stem-bar"><div class="studio-stem-fill" style="width:70%;"></div></div></div>
            <div>Kayıt %40 <div class="studio-stem-bar"><div class="studio-stem-fill" style="width:40%;"></div></div></div>
          </div>
        </div>

        <div class="studio-track-card">
          <div class="studio-track-header">
            <span class="studio-track-title">BU ŞARKIYI KAYBEDEMEM (Ritmi Bırakmam)</span>
            <button class="studio-listen-btn" onclick="playSnippet('-esQckmIMgQ', 'assets/audio/track_kaybedemem.mp3')">▶ 15 sn Dinle</button>
          </div>
          <div class="studio-stems-grid">
            <div>Söz %88 <div class="studio-stem-bar"><div class="studio-stem-fill" style="width:88%;"></div></div></div>
            <div>Beste %75 <div class="studio-stem-bar"><div class="studio-stem-fill" style="width:75%;"></div></div></div>
            <div>Aranje %45 <div class="studio-stem-bar"><div class="studio-stem-fill" style="width:45%;"></div></div></div>
            <div>Kayıt %30 <div class="studio-stem-bar"><div class="studio-stem-fill" style="width:30%;"></div></div></div>
          </div>
        </div>

        <div class="studio-track-card">
          <div class="studio-track-header">
            <span class="studio-track-title">BİRİ VARMIŞ ÖTEKİ YOK OLMASIN</span>
            <button class="studio-listen-btn" onclick="playSnippet('GLQcmdJsO5U', 'assets/audio/track_biri_varmis.mp3')">▶ 15 sn Dinle</button>
          </div>
          <div class="studio-stems-grid">
            <div>Söz %100 <div class="studio-stem-bar"><div class="studio-stem-fill" style="width:100%;"></div></div></div>
            <div>Beste %95 <div class="studio-stem-bar"><div class="studio-stem-fill" style="width:95%;"></div></div></div>
            <div>Aranje %90 <div class="studio-stem-bar"><div class="studio-stem-fill" style="width:90%;"></div></div></div>
            <div>Kayıt %85 <div class="studio-stem-bar"><div class="studio-stem-fill" style="width:85%;"></div></div></div>
          </div>
        </div>

        <div class="studio-track-card">
          <div class="studio-track-header">
            <span class="studio-track-title">BİLMEM, BEN DE (Tepe Teması)</span>
            <button class="studio-listen-btn" onclick="playSnippet('CvSByNL1r48', 'assets/audio/track_bilmem_ben_de.mp3')">▶ 15 sn Dinle</button>
          </div>
          <div class="studio-stems-grid">
            <div>Söz %92 <div class="studio-stem-bar"><div class="studio-stem-fill" style="width:92%;"></div></div></div>
            <div>Beste %88 <div class="studio-stem-bar"><div class="studio-stem-fill" style="width:88%;"></div></div></div>
            <div>Aranje %65 <div class="studio-stem-bar"><div class="studio-stem-fill" style="width:65%;"></div></div></div>
            <div>Kayıt %50 <div class="studio-stem-bar"><div class="studio-stem-fill" style="width:50%;"></div></div></div>
          </div>
        </div>
      `;
      glassglowCustomArea.appendChild(studioBox);

      // Switcher Eylemleri
      const vKenan = studioBox.querySelector("#vocalKenanBtn");
      const vEkrem = studioBox.querySelector("#vocalEkremBtn");
      const ekremCard = studioBox.querySelector("#ekremStudioCard");
      const playEkremBtn = studioBox.querySelector("#playEkremVersionBtn");

      if (vKenan && vEkrem && ekremCard) {
        vKenan.addEventListener("click", () => {
          vKenan.classList.add("active");
          vEkrem.classList.remove("active");
          ekremCard.style.display = "none";
          if (window.SUSSUZ_AUDIO) {
            window.SUSSUZ_AUDIO.playMusicTrack("K35AtsZEl5o", 0.55, "assets/audio/track_gospel_baby_kenan.mp3");
          }
        });

        vEkrem.addEventListener("click", () => {
          vEkrem.classList.add("active");
          vKenan.classList.remove("active");
          ekremCard.style.display = "block";
          if (window.SUSSUZ_AUDIO) {
            window.SUSSUZ_AUDIO.playMusicTrack("mdPhJrnytkA", 0.55, "assets/audio/track_gospel_baby_ekrem.mp3");
          }
        });
      }

      if (playEkremBtn) {
        playEkremBtn.addEventListener("click", () => {
          if (window.SUSSUZ_AUDIO) {
            window.SUSSUZ_AUDIO.playMusicTrack("mdPhJrnytkA", 0.65, "assets/audio/track_gospel_baby_ekrem.mp3");
          }
        });
      }
    }

    // KİLİTLİ ODA: Bahar'ın Evi İçerisi
    if (data.isLockedRoom) {
      const lockBox = document.createElement("div");
      lockBox.style.padding = "20px";
      lockBox.style.background = "rgba(14, 18, 25, 0.8)";
      lockBox.style.border = "1px solid rgba(224, 49, 49, 0.3)";
      lockBox.style.textAlign = "center";
      lockBox.style.marginBottom = "18px";
      lockBox.innerHTML = `
        <h4 style="font-family: var(--font-serif); font-size: 1.3rem; color: #ff8787; margin-bottom: 6px;">
          Henüz yazılıyor. :D
        </h4>
        <p style="font-size: 0.82rem; color: #94a3b8; margin-bottom: 14px;">
          Senaryo yazım süreci devam ediyor. Yazım ilerlemesi: <strong>%25</strong>
        </p>
        <button class="ek3-trigger ek3-trigger-accent" style="justify-content:center;" onclick="openFundingModal('Destekçiyim')">
          [ SENARYO YAZIM SÜRECİNE FON SAĞLA → ]
        </button>
      `;
      glassglowCustomArea.appendChild(lockBox);
    }

    // BULUNAMAYAN MEKÂN: Murat'ın Evi
    if (data.isMissingLocation) {
      const missBox = document.createElement("div");
      missBox.style.padding = "20px";
      missBox.style.background = "rgba(14, 18, 25, 0.8)";
      missBox.style.border = "1px solid rgba(245, 159, 0, 0.3)";
      missBox.style.textAlign = "center";
      missBox.style.marginBottom = "18px";
      missBox.innerHTML = `
        <h4 style="font-family: var(--font-serif); font-size: 1.3rem; color: #f59f00; margin-bottom: 6px;">
          Henüz bulunmadı. :D
        </h4>
        <p style="font-size: 0.82rem; color: #94a3b8; margin-bottom: 14px;">
          “Evi de mi biz bulak müdür? Bu mekânı biliyor olabilirsin.”
        </p>
        <button class="ek3-trigger" style="justify-content:center; color:#ffe066;" onclick="openFundingModal('Mekân sağlayabilirim')">
          [ ANKARA'DA MEKÂN ÖNER / DESTEK VER → ]
        </button>
      `;
      glassglowCustomArea.appendChild(missBox);
    }
  }

  // 15 Saniyelik Müzik Çalma
  window.playSnippet = function(src, fallbackSrc = null) {
    if (window.SUSSUZ_AUDIO) {
      window.SUSSUZ_AUDIO.playMusicTrack(src, 0.55, fallbackSrc);
      setTimeout(() => {
        if (window.SUSSUZ_AUDIO) window.SUSSUZ_AUDIO.stopMusicTrack();
      }, 15000);
    }
  };

  // 5. YERALTI ANMA DENEYİMİ (MUM ÜFLEME)
  function startUndergroundDescent() {
    glassglowTab.classList.remove("tab-active");
    if (spatialUniverse) spatialUniverse.descendUnderground();

    undergroundOverlay.classList.add("underground-active");

    if (window.SUSSUZ_AUDIO && window.SUSSUZ_AUDIO.ctx) {
      window.SUSSUZ_AUDIO.playTypewriterClick();
      if (window.SUSSUZ_AUDIO.windGain) window.SUSSUZ_AUDIO.windGain.gain.setValueAtTime(0.01, window.SUSSUZ_AUDIO.ctx.currentTime);
      if (window.SUSSUZ_AUDIO.droneGain) window.SUSSUZ_AUDIO.droneGain.gain.setValueAtTime(0.38, window.SUSSUZ_AUDIO.ctx.currentTime);
    }

    victimNameEl.textContent = "";
    victimMetaEl.textContent = "";
    undergroundFinalBox.style.display = "none";

    let index = 0;
    function showNextVictim() {
      if (index < MEMORIAL_VICTIMS.length) {
        const v = MEMORIAL_VICTIMS[index];
        victimNameEl.style.opacity = "0";
        victimMetaEl.style.opacity = "0";

        setTimeout(() => {
          victimNameEl.textContent = v.name;
          victimMetaEl.textContent = v.meta;
          victimNameEl.style.opacity = "1";
          victimMetaEl.style.opacity = "1";
          index++;
          setTimeout(showNextVictim, 4200);
        }, 600);
      } else {
        setTimeout(() => {
          victimNameEl.textContent = "";
          victimMetaEl.textContent = "";
          undergroundFinalBox.style.display = "block";
        }, 800);
      }
    }

    setTimeout(showNextVictim, 1500);
  }

  exitUndergroundBtn.addEventListener("click", () => {
    undergroundOverlay.classList.remove("underground-active");
    if (spatialUniverse) {
      spatialUniverse.ascendFromUnderground();
      spatialUniverse.flyToScene("lake");
    }
    if (window.SUSSUZ_AUDIO) window.SUSSUZ_AUDIO.setSceneAudio("lake");
  });

  // 6. ANONİM NOT SİSTEMİ
  function openAnonymousNoteModal() {
    noteOriginBadge.textContent = currentNoteOrigin.toUpperCase();
    noteTextarea.value = "";
    noteSuccessBox.style.display = "none";
    anonymousNoteModal.classList.add("modal-active");
  }

  leaveNoteBtn.addEventListener("click", openAnonymousNoteModal);

  closeNoteModalBtn.addEventListener("click", () => {
    anonymousNoteModal.classList.remove("modal-active");
  });

  submitNoteBtn.addEventListener("click", () => {
    const text = noteTextarea.value.trim();
    if (!text) return;

    const noteRecord = {
      origin: currentNoteOrigin,
      text: text,
      publishAllowed: notePublishCheck.checked,
      timestamp: new Date().toISOString()
    };

    const notes = JSON.parse(localStorage.getItem("sussuz_anonymous_notes") || "[]");
    notes.push(noteRecord);
    localStorage.setItem("sussuz_anonymous_notes", JSON.stringify(notes));

    noteSuccessBox.textContent = "✓ Cümleniz gecenin hafızasına fısıldandı.";
    noteSuccessBox.style.display = "block";

    setTimeout(() => {
      anonymousNoteModal.classList.remove("modal-active");
    }, 1400);
  });

  // 7. DETERMINISTIK DIYALOG SISTEMI
  dialogueTriggerBtn.addEventListener("click", () => {
    if (!currentScene || !currentScene.characterId) return;
    openDialogueModal(currentScene.characterId);
  });

  function openDialogueModal(charId) {
    if (!charId) return;
    const char = window.SUSSUZ_DIALOGUES[charId];
    if (!char) return;

    dialogueAvatar.src = char.avatar;
    dialogueCharName.textContent = char.name;
    dialogueCharRole.textContent = char.title + ` (${char.age} Yaş)`;

    dialogueModal.classList.add("modal-active");
    renderDialogueNode(char, "root");
  }

  function renderDialogueNode(char, nodeKey) {
    const node = char.tree[nodeKey];
    if (!node) return;

    if (window.SUSSUZ_AUDIO) window.SUSSUZ_AUDIO.playTypewriterClick();

    dialogueSpeechBox.textContent = "";
    let i = 0;
    const text = node.text;
    const speed = 15;

    function typeWriter() {
      if (i < text.length) {
        dialogueSpeechBox.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
    typeWriter();

    dialogueChoicesBox.innerHTML = "";
    node.options.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "dialogue-choice-btn";
      btn.textContent = `▸ ${opt.label}`;
      btn.addEventListener("click", () => {
        if (opt.next === "crowd_redirect") {
          dialogueModal.classList.remove("modal-active");
          openFundingModal();
        } else {
          renderDialogueNode(char, opt.next);
        }
      });
      dialogueChoicesBox.appendChild(btn);
    });
  }

  closeDialogueBtn.addEventListener("click", () => {
    dialogueModal.classList.remove("modal-active");
  });

  // 8. İKİ EKSENLİ FONLAMA & KATKI MODALI (CROWD-PRODUCTION)
  window.openFundingModal = function(preselectedRole = null) {
    if (window.SUSSUZ_AUDIO) window.SUSSUZ_AUDIO.playTypewriterClick();
    if (preselectedRole) {
      document.getElementById("contributionRole").value = preselectedRole;
    }
    fundingModal.classList.add("modal-active");
  };

  openFundingBtn.addEventListener("click", () => window.openFundingModal());
  closeFundingBtn.addEventListener("click", () => fundingModal.classList.remove("modal-active"));

  crowdForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const role = document.getElementById("contributionRole").value;
    const name = document.getElementById("crowdName").value;
    const contact = document.getElementById("crowdContact").value;
    const note = document.getElementById("crowdNote").value;

    const record = {
      role,
      name,
      contact,
      note,
      timestamp: new Date().toISOString(),
      refCode: "SSZ-" + Math.floor(100000 + Math.random() * 900000)
    };

    const contributions = JSON.parse(localStorage.getItem("sussuz_crowd_production") || "[]");
    contributions.push(record);
    localStorage.setItem("sussuz_crowd_production", JSON.stringify(contributions));

    crowdForm.style.display = "none";
    crowdSuccess.innerHTML = `
      <div style="background: rgba(46, 213, 115, 0.15); border: 1px solid #2ed573; padding: 22px; text-align: center; font-family: var(--font-mono);">
        <h4 style="color: #7bed9f; margin-bottom: 8px;">✓ KATKI PROTOKOLÜ ALINDI</h4>
        <p>Sayın <strong>${name}</strong>, ${role} desteğiniz SUSSUZ prodüksiyon havuzuna işlendi.</p>
        <p style="margin-top: 10px;"><strong>Takip Kodu:</strong> <code>${record.refCode}</code></p>
      </div>
    `;
    crowdSuccess.style.display = "block";
  });

  // 10. KHRYSAOR — SUSSUZ RESMİ SOUNDTRACK ÇALAR MOTORU (7 KANONİK ESER)
  const SOUNDTRACK_PLAYLIST = [
    {
      id: "bataklik",
      num: "01",
      title: "Bataklık",
      singer: "Bahar söylüyor",
      badge: "Official Lyric Video",
      duration: "1:48",
      ytId: "yFymvGwoxjA",
      ytUrl: "https://www.youtube.com/watch?v=yFymvGwoxjA",
      src: "assets/audio/track_bataklik.mp3",
      sceneId: "lake",
      narrative: "Bahar söylüyor // Göl kenarı, Dilek'in doğum günü anısına"
    },
    {
      id: "hirsiz",
      num: "02",
      title: "Hırsız",
      singer: "Kenan söylüyor",
      badge: "Official Lyric Video",
      duration: "3:03",
      ytId: "KFrAv440Rmg",
      ytUrl: "https://www.youtube.com/watch?v=KFrAv440Rmg",
      src: "assets/audio/track_hirsiz.mp3",
      sceneId: "dancefloor",
      narrative: "Kenan söylüyor; babası Murat ve Ekrem dans pistinde dans ediyor"
    },
    {
      id: "bilmem_ben_de",
      num: "03",
      title: "Bilmem, Ben De",
      singer: "Murat söylüyor",
      badge: "Official Lyric Video",
      duration: "2:33",
      ytId: "CvSByNL1r48",
      ytUrl: "https://www.youtube.com/watch?v=CvSByNL1r48",
      src: "assets/audio/track_bilmem_ben_de.mp3",
      sceneId: "hill",
      narrative: "Murat söylüyor // Tepe & Ankara ayazı, 1. bölüm finali"
    },
    {
      id: "gospel_baby_kenan",
      num: "04",
      title: "Gospel Baby (Kenan Versiyonu)",
      singer: "Kenan söylüyor",
      badge: "Stüdyo Demo",
      duration: "2:54",
      ytId: "K35AtsZEl5o",
      ytUrl: "https://www.youtube.com/watch?v=K35AtsZEl5o",
      src: "assets/audio/track_gospel_baby_kenan.mp3",
      sceneId: "studio",
      narrative: "Kenan kaydediyor; 'Bu şarkıya daha sert bir Anadolu sesi lazım, keşke Ekrem söylese' dediği an"
    },
    {
      id: "gospel_baby_ekrem",
      num: "05",
      title: "Gospel Baby (Ekrem Versiyonu)",
      singer: "Ekrem söylüyor // Angaralı Koray",
      badge: "Stüdyo Master",
      duration: "3:10",
      ytId: "mdPhJrnytkA",
      ytUrl: "https://www.youtube.com/watch?v=mdPhJrnytkA",
      src: "assets/audio/track_gospel_baby_ekrem.mp3",
      sceneId: "studio",
      narrative: "Ekrem söylüyor // Kenan'ın stüdyosunda, taburede it oturuşu elinde mikrofon"
    },
    {
      id: "kaybedemem",
      num: "06",
      title: "Bu Şarkıyı Kaybedemem (Ritmi Bırakmam)",
      singer: "Kenan söylüyor",
      badge: "Official Audio",
      duration: "3:24",
      ytId: "-esQckmIMgQ",
      ytUrl: "https://www.youtube.com/watch?v=-esQckmIMgQ",
      src: "assets/audio/track_kaybedemem.mp3",
      sceneId: "goksu_room",
      narrative: "Kenan söylüyor // Göksu'nun Cam Ofisi"
    },
    {
      id: "biri_varmis",
      num: "07",
      title: "biri varmış öteki yok olmasın",
      singer: "Murat & Ekrem (düet)",
      badge: "Official Audio",
      duration: "4:32",
      ytId: "GLQcmdJsO5U",
      ytUrl: "https://www.youtube.com/watch?v=GLQcmdJsO5U",
      src: "assets/audio/track_biri_varmis.mp3",
      sceneId: "studio",
      narrative: "Murat ve Ekrem beraber Bahar'a söylüyorlar"
    }
  ];

  const soundtrackModal = document.getElementById("soundtrackModal");
  const openSoundtrackBtn = document.getElementById("openSoundtrackBtn");
  const closeSoundtrackBtn = document.getElementById("closeSoundtrackBtn");
  const soundtrackTracklist = document.getElementById("soundtrackTracklist");
  const npTitle = document.getElementById("npTitle");
  const npSubtitle = document.getElementById("npSubtitle");
  const soundtrackPlayPauseBtn = document.getElementById("soundtrackPlayPauseBtn");
  const soundtrackPrevBtn = document.getElementById("soundtrackPrevBtn");
  const soundtrackNextBtn = document.getElementById("soundtrackNextBtn");

  let currentTrackIdx = 0;
  let isTrackPlaying = false;

  function initSoundtrackUI() {
    if (!soundtrackTracklist) return;
    soundtrackTracklist.innerHTML = "";

    SOUNDTRACK_PLAYLIST.forEach((tr, idx) => {
      const item = document.createElement("div");
      item.className = `soundtrack-item ${idx === currentTrackIdx ? "track-active" : ""}`;
      item.innerHTML = `
        <div class="track-item-left">
          <span class="track-item-num">${tr.num}</span>
          <div>
            <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
              <span class="track-item-title">${tr.title}</span>
              <span class="track-item-badge">[${tr.badge}]</span>
              <a href="${tr.ytUrl}" target="_blank" rel="noopener noreferrer" class="track-external-yt-link" title="YouTube'da Aç (Resmî Kanal)" onclick="event.stopPropagation();">
                ▶ YouTube ↗
              </a>
            </div>
            <div class="track-item-singer">${tr.singer}</div>
            <div class="track-item-narrative">“${tr.narrative}”</div>
          </div>
        </div>
        <span class="track-item-duration">${tr.duration}</span>
      `;
      item.addEventListener("click", () => {
        playTrackAt(idx);
      });
      soundtrackTracklist.appendChild(item);
    });
  }

  function playTrackAt(idx) {
    currentTrackIdx = idx;
    const tr = SOUNDTRACK_PLAYLIST[idx];
    npTitle.textContent = tr.title;
    npSubtitle.textContent = `khrysaor — ${tr.singer} [${tr.badge}]`;

    if (window.SUSSUZ_AUDIO) {
      window.SUSSUZ_AUDIO.playMusicTrack(tr.ytId || tr.src, 0.65, tr.src);
      isTrackPlaying = true;
      soundtrackPlayPauseBtn.innerHTML = "⏸";
    }

    // Listeyi güncelle
    const items = soundtrackTracklist.querySelectorAll(".soundtrack-item");
    items.forEach((it, i) => {
      it.classList.toggle("track-active", i === idx);
    });
  }

  if (openSoundtrackBtn) {
    openSoundtrackBtn.addEventListener("click", () => {
      initSoundtrackUI();
      soundtrackModal.classList.add("modal-active");
    });
  }

  if (closeSoundtrackBtn) {
    closeSoundtrackBtn.addEventListener("click", () => {
      soundtrackModal.classList.remove("modal-active");
    });
  }

  if (soundtrackPlayPauseBtn) {
    soundtrackPlayPauseBtn.addEventListener("click", () => {
      if (isTrackPlaying) {
        if (window.SUSSUZ_AUDIO) window.SUSSUZ_AUDIO.stopMusicTrack();
        isTrackPlaying = false;
        soundtrackPlayPauseBtn.innerHTML = "▶";
      } else {
        playTrackAt(currentTrackIdx);
      }
    });
  }

  if (soundtrackNextBtn) {
    soundtrackNextBtn.addEventListener("click", () => {
      const nextIdx = (currentTrackIdx + 1) % SOUNDTRACK_PLAYLIST.length;
      playTrackAt(nextIdx);
    });
  }

  if (soundtrackPrevBtn) {
    soundtrackPrevBtn.addEventListener("click", () => {
      const prevIdx = (currentTrackIdx - 1 + SOUNDTRACK_PLAYLIST.length) % SOUNDTRACK_PLAYLIST.length;
      playTrackAt(prevIdx);
    });
  }

  initSoundtrackUI();

  // 9. HUD VE NAVİGASYON KONTROLLERİ
  hudBackBtn.addEventListener("click", () => {
    if (spatialUniverse) spatialUniverse.returnToPanorama();
  });

  returnPanoramaBtn.addEventListener("click", () => {
    if (spatialUniverse) spatialUniverse.returnToPanorama();
  });

  closeGlassglowBtn.addEventListener("click", () => {
    glassglowTab.classList.remove("tab-active");
    hudToggleTabBtn.textContent = "👁️ MEKÂN HAKKINDA";
  });

  hudToggleTabBtn.addEventListener("click", () => {
    if (glassglowTab.classList.contains("tab-active")) {
      glassglowTab.classList.remove("tab-active");
      hudToggleTabBtn.textContent = "👁️ MEKÂN HAKKINDA";
    } else {
      positionGlassglowPopup();
      glassglowTab.classList.add("tab-active");
      hudToggleTabBtn.textContent = "👁️ DETAYLARI GİZLE";
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (glassglowTab.classList.contains("tab-active")) {
        glassglowTab.classList.remove("tab-active");
        hudToggleTabBtn.textContent = "👁️ MEKÂN HAKKINDA";
      }
    }
  });

  muteBtn.addEventListener("click", () => {
    if (!window.SUSSUZ_AUDIO) return;
    const isMuted = window.SUSSUZ_AUDIO.toggleMute();
    muteBtn.innerHTML = isMuted ? "🔇 SES KAPALI" : "🔊 SES AÇIK";
  });

  resetCameraBtn.addEventListener("click", () => {
    if (spatialUniverse) {
      if (spatialUniverse.viewMode === "scene") {
        spatialUniverse.returnToPanorama();
      } else {
        spatialUniverse.camera.targetX = 688;
        spatialUniverse.camera.targetY = 384;
        spatialUniverse.camera.targetZoom = spatialUniverse.baseZoom;
      }
    }
  });
});

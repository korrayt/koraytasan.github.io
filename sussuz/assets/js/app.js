/**
 * SUSSUZ — Master Application & Experience Orchestrator (Kanonik Sürüm)
 * Kesintisiz Yaşayan Evren, Glassglow Floating Panel ve Ek-3 Tipografisi
 */

document.addEventListener("DOMContentLoaded", () => {
  // Sahnelerin Kanonik Veri Tabanı
  const SCENE_DATA = {
    ritim: {
      id: "ritim",
      sceneTag: "SAHNE 01 // RİTİM GİRİŞİ",
      title: "RİTİM // KULÜP ÖNÜ",
      subtitle: "EXT. GÖKSU PARKI ADASI — 01:45 // BÖLÜM 1, SAHNE 1",
      location: "Göksu Adası",
      time: "01:45",
      period: "Günümüz",
      ctaIcon: "🚪",
      ctaText: "İÇERİ GİR",
      ctaTarget: "ritim_interior",
      image: "assets/img/loc_ritim.jpg",
      characterId: "ekrem",
      characterName: "Kerem ve Murad",
      characterRole: "Kulüp Önü ve Bağlantı Yolu",
      atmosphere: "Gerçekte Göksu Parkı'ndaki adada yer alan restoranın yerine konumlanan gece kulübü. Girişte bekleyen kalabalık, kapı güvenliği ve yoldan uzaklaşmakta olan Murad'ın arabası.",
      musicNote: "Filtrelenmiş 4/4 Sub-Bass & Araba Uğultusu",
      subvenues: [
        { id: "ritim_interior", label: "İçeri Gir (Genel Salon)" },
        { id: "ritim_road", label: "Murad'ı Durdur (Yol Sahnesi)" }
      ],
      noteOrigin: "RİTİM Giriş Panosu",
      props: [
        {
          name: "İÇERİ GİR // SALON",
          icon: "🚪",
          thumb: "assets/img/props/prop_kenan_stage.jpg",
          subtitle: "ANA SAHNE & SALON",
          desc: "Ritim'in neon ışıklı kapısından ana salona adım atın.",
          action: "fly_subvenue",
          target: "ritim_interior"
        },
        {
          name: "MURAD'I DURDUR",
          icon: "✋",
          thumb: "assets/img/props/prop_murat_hill.jpg",
          subtitle: "1. BÖLÜM FİNALİ",
          desc: "Kerem'in yola atlayarak arabayı durdurduğu 1. bölüm final sahnesi.",
          action: "fly_subvenue",
          target: "ritim_road"
        }
      ]
    },

    ritim_interior: {
      id: "ritim_interior",
      sceneTag: "SAHNE 02 // RİTİM SALONU",
      title: "RİTİM // ANA SALON & SAHNE",
      subtitle: "INT. RİTİM / GENEL AÇI — 02:15 // BÖLÜM 1 & 2 KÖPRÜSÜ",
      location: "Ana Salon",
      time: "02:15",
      period: "Günümüz",
      ctaIcon: "🎵",
      ctaText: "HIRSIZ'I DİNLE",
      ctaAudio: "KFrAv440Rmg",
      image: "assets/img/loc_ritim_interior.jpg",
      characterId: "murat_ekrem_balcony",
      characterName: "Murad ve Kerem",
      characterRole: "Pist Kenarında Sahneye Bakış // 'Oğlum...'",
      atmosphere: "Müzik değişiyor. Karanlık ekranlar bir anda açılıyor. Dev ekranda KENAN, RİTİM logosu... Yeni parçanın prömiyeri: HIRSIZ. İlk beat giriyor, kalabalık bağırıyor. Murad duruyor; oğlunu ekranda görüyor. Kerem elini uzatıyor: 'Oğlunun şarkısında surat asma. Ayıp lan çocuğa!'",
      musicNote: "HIRSIZ — Kenan Sahne Prömiyeri (124 BPM)",
      subvenues: [
        { id: "dancefloor", label: "Murad'ı Dansa Götür (Pist)" },
        { id: "goksu_room", label: "Göksu'nun Cam Ofisi" },
        { id: "ritim_vip", label: "VIP Loca (Yazılıyor :D)" },
        { id: "ritim_backstage", label: "Backstage / Kulis" },
        { id: "accounting", label: "Muhasebe / Prodüksiyon" },
        { id: "ritim", label: "Dışarı Çık (Giriş)" }
      ],
      noteOrigin: "Pist Kenarı",
      props: [
        {
          name: "SAHNEDE KENAN",
          icon: "🎵",
          thumb: "assets/img/props/prop_kenan_stage.jpg",
          subtitle: "HIRSIZ PRÖMİYERİ",
          desc: "Dev ekranlarda Kenan, RİTİM logosu ve yeni parçanın prömiyeri.",
          action: "music",
          audioSrc: "KFrAv440Rmg"
        },
        {
          name: "CAM OFİS // GÖKSU",
          icon: "🪟",
          thumb: "assets/img/props/prop_goksu_office.jpg",
          subtitle: "PİSTİ İZLEYEN CAM ODA",
          desc: "Yukarıdaki loş cam ofisten Göksu dans pistini akvaryum gibi izliyor.",
          action: "fly_subvenue",
          target: "goksu_room"
        },
        {
          name: "MURAD VE KEREM",
          icon: "💬",
          thumb: "assets/img/props/prop_murat_ekrem.jpg",
          subtitle: "'OĞLUM...' DİYALOĞU",
          desc: "Murad oğlunu dev ekranda görünce donakalır: 'Ben yapamadım... Göksu yaptı.'",
          action: "dialogue",
          charId: "murat_ekrem_balcony"
        },
        {
          name: "DANS PİSTİ",
          icon: "⚡",
          thumb: "assets/img/props/prop_dancefloor.jpg",
          subtitle: "KALABALIK VE TEMAS",
          desc: "Kerem elini uzatır, Murad'ı gülerek pistin içine çeker.",
          action: "fly_subvenue",
          target: "dancefloor"
        }
      ]
    },

    ritim_road: {
      id: "ritim_road",
      sceneTag: "SAHNE 03 // YOL SAHNESİ",
      title: "MEKÂN ÖNÜ YOL // DÖNÜM NOKTASI",
      subtitle: "EXT. RİTİM ÇIKIŞI & BAĞLANTI YOLU — 04:30 // BÖLÜM 1 FİNALİ",
      location: "Kulüp Yolu",
      time: "04:30",
      period: "Günümüz",
      ctaIcon: "✋",
      ctaText: "MURAD'I DURDUR",
      ctaAction: "prop",
      image: "assets/img/loc_ritim_road.jpg",
      characterId: "ekrem",
      characterName: "Kerem ve Murad",
      characterRole: "1. Bölüm Finali // Dönüm Noktası",
      atmosphere: "1. Bölüm final sahnesi. Yağmur ıslaklığı, asfalt parıltısı. Kerem tam arabaya binecekken Murad'ı durdurur: 'Sana gerisini göstereceğim.' Murad arabayı kilitler, geri döner. İki yabancının kaderinin düğümlendiği an.",
      musicNote: "Bilmem, Ben De — Kuru Gece Ayazı",
      subvenues: [
        { id: "ritim", label: "Giriş / Ada" },
        { id: "dancefloor", label: "Ana Dans Pisti" },
        { id: "goksu_room", label: "Göksu'nun Cam Ofisi" }
      ],
      noteOrigin: "Yol Kenarı Kaldırım Taşı",
      props: [
        {
          name: "DURDURULAN AN",
          icon: "✋",
          thumb: "assets/img/props/prop_smoke.jpg",
          subtitle: "KEREM'İN MÜDAHALESİ",
          desc: "KEREM: 'Sana gerisini göstereceğim.' Murad Mustang anahtarını cebine atar; gece henüz bitmemiştir."
        },
        {
          name: "FARLARI YANAN MUSTANG (06 KNN 03)",
          icon: "🚘",
          thumb: "assets/img/props/prop_mustang_torpido.jpg",
          subtitle: "MUSTANG FARLARI",
          desc: "Asfaltın üzerinde buğulanmış Mustang GT far ışıkları. Yağmur altında iki yabancı."
        }
      ]
    },

    dancefloor: {
      id: "dancefloor",
      sceneTag: "SAHNE 02A // DANS PİSTİ",
      title: "RİTİM // ANA DANS PİSTİ",
      subtitle: "INT. RİTİM / ALT KAT PİST — 02:40 // BÖLÜM 2, SAHNE 1",
      location: "Alt Kat Pist",
      time: "02:40",
      period: "Günümüz",
      ctaIcon: "⚡",
      ctaText: "ENSE TEMASI",
      ctaAction: "prop",
      image: "assets/img/scene_dancefloor.png",
      characterId: "ekrem",
      characterName: "Kerem ve Murad",
      characterRole: "Pist İçi Yakınlaşma",
      atmosphere: "Ritim'in dans pisti. Baslar duvarları titretiyor. Kerem Murad'ın ensesine dokunur: 'Öbür tarafa gitsen bara giricen.' Murad güler. MURAD: 'Olm, polisim ben!' — KEREM: 'Merhaba ben de torbacı :D Kerem ben… Si ile… ama sen kısaca Eku diyebilirsin'",
      musicNote: "HIRSIZ — Dans Pisti Miksi (Club Edit)",
      subvenues: [
        { id: "ritim_interior", label: "Genel Salona Dön" },
        { id: "goksu_room", label: "Göksu'nun Cam Ofisi" },
        { id: "ritim_vip", label: "VIP Loca (Yazılıyor)" },
        { id: "ritim_backstage", label: "Backstage / Kulis" },
        { id: "ritim", label: "Kulüp Çıkışı" }
      ],
      noteOrigin: "Dans Pisti Kolonu",
      props: [
        {
          name: "ENSE TEMASI",
          icon: "⚡",
          thumb: "assets/img/props/prop_dancefloor.jpg",
          subtitle: "KONTROLÜN KAYBI",
          desc: "KEREM: 'Öbür tarafa gitsen bara giricen yarram.' Murad güler; hayatında ilk defa kontrolü bırakır."
        },
        {
          name: "POLİS VE TORBACI",
          icon: "💬",
          thumb: "assets/img/props/prop_murat_ekrem.jpg",
          subtitle: "TANIŞMA ANI",
          desc: "MURAD: 'Olm, polisim ben!' — KEREM (elini uzatarak): 'Merhaba ben de torbacı :D Kerem ben… Si ile… ama sen kısaca Eku de'",
          action: "dialogue",
          charId: "ekrem"
        }
      ]
    },

    goksu_room: {
      id: "goksu_room",
      sceneTag: "SAHNE 02B // GÖKSU OFİSİ",
      title: "GÖKSU'NUN CAM OFİSİ",
      subtitle: "INT. RİTİM / ÜST KAT CAM OFİS — 02:50 // BÖLÜM 2, SAHNE 2",
      location: "Üst Kat Ofis",
      time: "02:50",
      period: "Günümüz",
      ctaIcon: "📁",
      ctaText: "DOSYAYI AÇ",
      ctaAction: "prop",
      image: "assets/img/goksu_kenan_office.jpg",
      characterId: "kenan",
      characterName: "Göksu ve Kenan",
      characterRole: "Ritim'in Sahibi & Genç Müzisyen",
      atmosphere: "Göksu masasında oturuyor. Duvarda neon ve viski şişeleri. Kenan köşede akustik gitarıyla hafif bir melodi çalıyor. Göksu masadaki yarım dosyayı Murad'a uzatır: 'Yarım dosya... Yarısı yeter.'",
      musicNote: "Bu Şarkıyı Kaybedemem — Akustik Demo",
      subvenues: [
        { id: "dancefloor", label: "Dans Pistine Bak" },
        { id: "ritim_interior", label: "Genel Salona Dön" },
        { id: "ritim", label: "Kulüp Dışına Çık" }
      ],
      noteOrigin: "Cam Ofis Masası",
      props: [
        {
          name: "BAHAR / DENİZ DOSYASI",
          icon: "📁",
          thumb: "assets/img/props/prop_goksu_office.jpg",
          subtitle: "YARIM KALAN SORUŞTURMA",
          desc: "Göksu: 'Yarım dosya... Yarısı yeter. Ne bildiğini öğren. Kiminle konuşman gerekiyorsa konuş.'"
        },
        {
          name: "KENAN'IN GİTARI",
          icon: "🎵",
          thumb: "assets/img/props/prop_kenan_studio.jpg",
          subtitle: "KAYBI DİNLE",
          desc: "Kenan'ın Göksu'ya dinlettiği parça: 'Duvarlarda izin / Odalarda sesin / Geçti modası artık o eski senin...'",
          action: "music",
          audioSrc: "assets/audio/track_kaybedemem.mp3"
        }
      ]
    },

    ritim_vip: {
      id: "ritim_vip",
      sceneTag: "SAHNE 02C // VIP LOCA",
      title: "VIP LOCA // ASMA KAT",
      subtitle: "INT. RİTİM / VIP LOCA — 03:00 // ŞU AN YAZILIYOR :D",
      location: "Asma Kat",
      time: "03:00",
      period: "Günümüz",
      ctaIcon: "🍸",
      ctaText: "LOCAYI İZLE",
      ctaAction: "prop",
      image: "assets/img/loc_ritim_vip.jpg",
      isLockedRoom: true,
      characterId: null,
      characterName: "VIP Misafirler",
      characterRole: "Senaryo Hazırlığı Sürüyor",
      atmosphere: "Şehrin bürokratları ve Susuz'un görünmeyen yüzleri için ayrılmış VIP loca bölümü. Senaryo yazımı devam ediyor.",
      musicNote: "Karanlık Derin Sub-Bass (Lo-Fi Ambient)",
      subvenues: [
        { id: "dancefloor", label: "Dans Pistine İn" },
        { id: "ritim_interior", label: "Genel Salona Dön" }
      ],
      noteOrigin: "VIP Masa Kenarı",
      props: [
        {
          name: "LOCA KADEHİ",
          icon: "🍸",
          thumb: "assets/img/props/prop_dancefloor.jpg",
          subtitle: "GİZLİ GÖRÜŞMELER",
          desc: "Şehrin görünmeyen yüzlerinin oturduğu deri koltuklar."
        }
      ]
    },

    ritim_backstage: {
      id: "ritim_backstage",
      sceneTag: "SAHNE 02D // KULİS",
      title: "BACKSTAGE // KULİS",
      subtitle: "INT. RİTİM / SAHNE ARKASI — 02:00 // BÖLÜM 1",
      location: "Sahne Arkası",
      time: "02:00",
      period: "Günümüz",
      ctaIcon: "🎭",
      ctaText: "KULİSİ İNCELE",
      ctaAction: "prop",
      image: "assets/img/loc_ritim_backstage.jpg",
      characterId: "kenan",
      characterName: "Kenan",
      characterRole: "Sahne Öncesi Hazırlık",
      atmosphere: "Sahne arkası loş koridor. Kenan'ın deri ceketi sandalyede asılı. Aynada rujla karalanmış şarkı sözleri.",
      musicNote: "Canlı Sahne Monitör Uğultusu",
      subvenues: [
        { id: "dancefloor", label: "Piste Adım At" },
        { id: "ritim_interior", label: "Genel Salona Dön" }
      ],
      noteOrigin: "Kulis Aynası",
      props: [
        {
          name: "KENAN'IN CEKETİ",
          icon: "🧥",
          thumb: "assets/img/props/prop_kenan_stage.jpg",
          subtitle: "SAHNE KOSTÜMÜ",
          desc: "Göksu'nun parasıyla alınmış ama Kenan'ın öfkesini taşıyan kostüm."
        },
        {
          name: "AYNADAKİ KARALAMA",
          icon: "🪞",
          thumb: "assets/img/props/prop_kenan_studio.jpg",
          subtitle: "RUJLA YAZILMIŞ DİZE",
          desc: "'Geçti modası artık o eski senin...'"
        }
      ]
    },

    accounting: {
      id: "accounting",
      sceneTag: "PRODÜKSİYON // ŞEFFAFLIK",
      title: "PRODÜKSİYON & KATKI MASASI",
      subtitle: "INT. RİTİM / YÖNETİM & KATKI HAVUZU — CANLI AÇIK DEFTER",
      location: "Yönetim Odası",
      time: "Canlı",
      period: "Günümüz",
      ctaIcon: "📋",
      ctaText: "KATKI HAVUZUNA GÖZ AT",
      ctaAction: "prop",
      image: "assets/img/loc_accounting.jpg",
      characterId: null,
      characterName: "Prodüksiyon Ekibi",
      characterRole: "Açık Defter & Şeffaf Bütçe",
      atmosphere: "SUSSUZ'un bağımsız prodüksiyon havuzu. Masada gerçek faturalar, ihtiyaç listeleri ve projenin hayata geçmesi için ayrılan bütçe dökümü yer alıyor.",
      musicNote: "Klavye Tıkırtıları & Kahve Fincanı Sesi",
      subvenues: [
        { id: "ritim_interior", label: "Ritim Ana Salona Dön" },
        { id: "studio", label: "Kenan'ın Stüdyosuna Geç" }
      ],
      noteOrigin: "Katkı Defteri",
      props: [
        {
          name: "AÇIK BÜTÇE DEFTERİ",
          icon: "📋",
          thumb: "assets/img/props/prop_analog_console.jpg",
          subtitle: "CANLI İHTİYAÇLAR",
          desc: "Işık kiralama, ses miksajı, mekan izinleri ve oyuncu kaşeleri."
        }
      ]
    },

    hill: {
      id: "hill",
      sceneTag: "SAHNE 06 // AŞIKLAR TEPESİ",
      title: "AŞIKLAR TEPESİ // ANKARA AYAZI",
      subtitle: "EXT. ANKARA MANZARASI / TEPE — 05:30 // BÖLÜM 1, SAHNE 15",
      location: "Aşıklar Tepesi",
      time: "05:30",
      period: "Günümüz",
      ctaIcon: "📻",
      ctaText: "RADYOYU AÇ",
      ctaAudio: "CvSByNL1r48",
      image: "assets/img/loc_hill.jpg",
      characterId: "murat",
      characterName: "Murad ve Kerem (Eku)",
      characterRole: "Mustang Kaputunda İki Yabancı",
      atmosphere: "05:30. Ankara ayazı. Üstü açık siyah Ford Mustang Convertible'ın (06 KNN 03) kaputuna yaslanmış iki adam sırayla tek bir sigarayı paylaşır. Gece çözülürken kelimeler dökülür.",
      musicNote: "Bilmem, Ben De — Kuru Gece Ayazı (Akustik)",
      subvenues: [],
      noteOrigin: "Mustang Torpidosu",
      props: [
        {
          name: "PAYLAŞILAN SİGARA",
          icon: "🚬",
          thumb: "assets/img/props/prop_smoke.jpg",
          subtitle: "AYAZDA TEK DUMAN",
          desc: "KEREM (EKU): 'Ben hissettiğim şeye güvenirim. Yanlışsa da benim yanlışım olur.'"
        },
        {
          name: "MURAD İLE YÜZLEŞ",
          icon: "💬",
          thumb: "assets/img/props/prop_murat_hill.jpg",
          subtitle: "'İÇİM YAMUK DEMEDİ'",
          desc: "MURAD: 'Sende bi şey var, içim yamuk demedi. Bilimsel açıklaman bu mu?'",
          action: "dialogue",
          charId: "murat"
        },
        {
          name: "KEREM'İN İÇ DÜNYASI",
          icon: "💬",
          thumb: "assets/img/props/prop_ekrem_hill.jpg",
          subtitle: "TÜBİTAK DİYALOĞU",
          desc: "KEREM: 'He. TÜBİTAK.'",
          action: "dialogue",
          charId: "ekrem"
        },
        {
          name: "MUSTANG CONVERTIBLE (06 KNN 03)",
          icon: "🏎️",
          thumb: "assets/img/props/prop_mustang_torpido.jpg",
          subtitle: "06 KNN 03 // BİLMEM, BEN DE",
          desc: "Siyah Ford Mustang Convertible'ın (06 KNN 03) radyosundan yükselen soğuk ayaz melodisi.",
          action: "music",
          audioSrc: "CvSByNL1r48"
        }
      ]
    },

    lake: {
      id: "lake",
      sceneTag: "SAHNE 04 // GÖL KENARI",
      title: "GÖKSU PARKI // AHŞAP İSKELE",
      subtitle: "EXT. GÖKSU PARKI / YAĞMUR ALTI — 03:15 // ANMA ALANI",
      location: "Ahşap İskele",
      time: "03:15",
      period: "Günümüz",
      ctaIcon: "🕯️",
      ctaText: "MUMU YAK // ANMA MASASINA GEÇ",
      ctaTarget: "lake_candle",
      image: "assets/img/loc_lake_pier.jpg",
      characterId: "bahar",
      characterName: "Bahar",
      characterRole: "İskelede Tek Başına Bir Kadın",
      atmosphere: "Bahar tek başına getirdiği pastayı çıkarır. Dilek'in kanı üzerine kurulu parkta, göl kıyısında tek bir mum yakar. Doğum günü anma masasına geçin.",
      musicNote: "Bataklık — Bahar (Akustik / Yağmur Efekti)",
      subvenues: [
        { id: "lake_candle", label: "Mumu Yak // Anma Masasına Geç" }
      ],
      noteOrigin: "İskele Korkuluğu",
      props: [
        {
          name: "MUMU YAK // MASAYA GEÇ",
          icon: "🕯️",
          thumb: "assets/img/props/prop_cake.jpg",
          subtitle: "DOĞUM GÜNÜ PASTASI",
          desc: "Bahar göl kıyısında tek bir mum yakar.",
          action: "fly_subvenue",
          target: "lake_candle"
        },
        {
          name: "BAHAR İLE YÜZLEŞ",
          icon: "💬",
          thumb: "assets/img/props/prop_bahar.jpg",
          subtitle: "İSKELEDE BİR SES",
          desc: "Bahar ile yüz yüze gelin.",
          action: "dialogue",
          charId: "bahar"
        },
        {
          name: "KARŞI KIYIYA BAK",
          icon: "🌊",
          thumb: "assets/img/props/prop_lighthouse.jpg",
          subtitle: "BATAKLIK ÜZERİNE DİKİLENLER",
          desc: "Gölün karşısında sıralanan beton bloklar ve fıskiye."
        },
        {
          name: "İSKELE KORKULUĞU",
          icon: "🪵",
          thumb: "assets/img/props/prop_pier.jpg",
          subtitle: "GÖLE FISILDA",
          desc: "Göl kenarındaki ahşap iskele korkuluğuna bir not bırak.",
          action: "note"
        }
      ]
    },

    lake_candle: {
      id: "lake_candle",
      sceneTag: "SAHNE 04 // GÖL KENARI",
      title: "GÖKSU PARKI // DENİZ'İN DOĞUM GÜNÜ",
      subtitle: "EXT. ESKİ GÖKSU PARKI KIYISI — DİLEK'İN 40. DOĞUM GÜNÜ",
      location: "Göksu Parkı",
      time: "Gece",
      period: "Günümüz",
      ctaIcon: "🕯️",
      ctaText: "MUMU ÜFLE",
      ctaAction: "underground",
      image: "assets/img/scene_lake.png",
      characterId: "bahar",
      characterName: "Bahar (Dilek)",
      characterRole: "Göl Kıyısında Yalnız Bir Anma",
      atmosphere: "Eski Göksu Parkı kıyısı. Dilek'in 40. doğum günü. Sükûnetin içinde, söylenmemiş cümleler var. Bahar bu mumu her gün yakmıyor. Dilek'in kanı üzerine kurulmuş parkta pastasını üflüyor.",
      musicNote: "Bataklık — Tek Mum Işıltısı",
      subvenues: [
        { id: "lake", label: "İskeleye Geri Dön (Geniş Açı)" }
      ],
      noteOrigin: "Doğum Günü Masası",
      props: [
        {
          name: "DOĞUM GÜNÜ PASTASI",
          icon: "🕯️",
          thumb: "assets/img/props/prop_cake.jpg",
          subtitle: "DİLEK İÇİN TEK MUM",
          desc: "Dilek'in doğum günü pastası ve tek mum. Üfleyince yeraltı hafızası açılır.",
          action: "underground"
        },
        {
          name: "GÖKSU DENİZ FENERİ",
          icon: "🌊",
          thumb: "assets/img/props/prop_lighthouse.jpg",
          subtitle: "KARŞI KIYIDAKİ IŞIK",
          desc: "Gölün karşı kıyısındaki ışık ve su yansıması."
        },
        {
          name: "BAHAR İLE YÜZLEŞ",
          icon: "💬",
          thumb: "assets/img/props/prop_bahar.jpg",
          subtitle: "SÖYLENMEYENLER",
          desc: "Bahar ile göz göze gelin.",
          action: "dialogue",
          charId: "bahar"
        },
        {
          name: "FENERİN DİBİNDEKİ İSKELE",
          icon: "🪵",
          thumb: "assets/img/props/prop_pier.jpg",
          subtitle: "ISLAK TAHTA",
          desc: "Tahtası not bırakanlara emanet edilmiş iskele."
        }
      ]
    },

    garden: {
      id: "garden",
      sceneTag: "SAHNE 07 // BAHÇE",
      title: "BAHÇE // ATA VE KENAN",
      subtitle: "EXT. ERYAMAN SİTELERİ / ÇOCUK PARKI — 14:00 // GÜNDÜZ",
      location: "Eryaman Parkı",
      time: "Gündüz",
      period: "Günümüz",
      ctaIcon: "💬",
      ctaText: "ATA İLE KONUŞ",
      ctaAction: "dialogue",
      ctaCharId: "ata",
      image: "assets/img/scene_garden.png",
      characterId: "ata",
      characterName: "Ata ve Kenan",
      characterRole: "Seçilmiş Aile // Çocuğun Dünyası",
      atmosphere: "Gündüz, gri Ankara apartmanlarının arasındaki çocuk parkı. Kenan'ın Ata için yonttuğu kırmızı şeritli tahta araba bankın üzerinde duruyor. Ata: 'Ata ile nasıl aile oldunuz?'",
      musicNote: "Tahta Araba Tıkırtısı & Çocuk Parkı Rüzgarı",
      subvenues: [
        { id: "home_interior", label: "Bahar'ın Evine Geç" }
      ],
      noteOrigin: "Salıncak Demiri",
      props: [
        {
          name: "ATA İLE KONUŞ",
          icon: "💬",
          thumb: "assets/img/props/prop_ata_child.jpg",
          subtitle: "SEÇİLMİŞ AİLE",
          desc: "Ata ile nasıl aile oldunuz? Çocuk dünyasının saf bakışı.",
          action: "dialogue",
          charId: "ata"
        },
        {
          name: "KENAN // ABİLİK",
          icon: "💬",
          thumb: "assets/img/props/prop_kenan_garden.jpg",
          subtitle: "SEVGİ DOLU BAKIŞ",
          desc: "Kenan bankta Ata'ya sevgi ve şefkatle gülümsüyor.",
          action: "dialogue",
          charId: "kenan"
        },
        {
          name: "TAHTA ARABA",
          icon: "🏎️",
          thumb: "assets/img/props/prop_toy_car.jpg",
          subtitle: "KIRMIZI ŞERİTLİ OYUNCAK",
          desc: "Kenan'ın Ata için yonttuğu tahta araba."
        },
        {
          name: "PASLI SALINCAK",
          icon: "✍️",
          thumb: "assets/img/props/prop_swing.jpg",
          subtitle: "NOT KAZI",
          desc: "Salıncak demirine kazınmış bir not bırak.",
          action: "note"
        }
      ]
    },

    home_interior: {
      id: "home_interior",
      sceneTag: "SAHNE 08 // BAHAR'IN EVİ",
      title: "BAHAR'IN EVİ // SALON",
      subtitle: "INT. ERYAMAN APARTMANI / SALON — 20:30 // SEÇİLMİŞ AİLE",
      location: "Eryaman Dairesi / Salon",
      time: "20:30",
      period: "Günümüz",
      ctaIcon: "📖",
      ctaText: "KİTABA GÖZ AT",
      ctaAction: "prop",
      image: "assets/img/scene_bahar_home.png",
      characterId: "bahar",
      characterName: "Bahar ve Ata",
      characterRole: "Seçilmiş Aile // Korunaklı Alan",
      atmosphere: "Sıcak bir Eryaman salonu. Petrol yeşili koltukta Bahar ve Ata yan yana oturmuş; Bahar ona Sophie Beer'ın 'Aşk Bir Aile Yaratır' kitabını okuyor. Dışarıdaki soğuk Ankara ayazına inat, bu ev sevgiyle örülmüş korunaklı bir sığınak.",
      musicNote: "Kitap Sayfası Hışırtısı & Samimi Ev Huzuru",
      subvenues: [
        { id: "home_kitchen", label: "Mutfağa Geç // Buzdolabına Not Bırak" },
        { id: "garden", label: "Apartman Bahçesine İn" }
      ],
      noteOrigin: "Salon Masası",
      props: [
        {
          name: "AŞK BİR AİLE YARATIR",
          icon: "📖",
          thumb: "assets/img/props/prop_book_family.jpg",
          subtitle: "SOPHIE BEER KİTABI",
          desc: "Bahar'ın Ata'ya okuduğu kitap: 'Aşk Bir Aile Yaratır' (Sophie Beer). Ailelerin sevgiyle kurulduğunu, kan bağı değil kalple var olduğunu anlatan renkli sayfalar."
        },
        {
          name: "BAHAR İLE KONUŞ",
          icon: "💬",
          thumb: "assets/img/props/prop_bahar.jpg",
          subtitle: "SEÇİLMİŞ AİLE",
          desc: "Bahar oğlu Ata'ya sarılmış, şefkat ve koruyuculukla gülümsüyor.",
          action: "dialogue",
          charId: "bahar"
        },
        {
          name: "ATA İLE KONUŞ",
          icon: "💬",
          thumb: "assets/img/props/prop_ata_child.jpg",
          subtitle: "MASUMİYETİN DÜNYASI",
          desc: "Ata elinde mavi oyuncak arabasıyla Bahar annesini dinliyor.",
          action: "dialogue",
          charId: "ata"
        }
      ]
    },

    home_kitchen: {
      id: "home_kitchen",
      sceneTag: "SAHNE 08B // MUTFAK",
      title: "BAHAR'IN EVİ // MUTFAK",
      subtitle: "INT. ERYAMAN APARTMANI / MUTFAK — 20:45 // SESSİZLİK",
      location: "Eryaman Dairesi / Mutfak",
      time: "20:45",
      period: "Günümüz",
      ctaIcon: "✍️",
      ctaText: "BUZDOLABINA NOT BIRAK",
      ctaAction: "note",
      image: "assets/img/scene_bahar_kitchen.jpg",
      characterId: null,
      characterName: "Boş Mutfak",
      characterRole: "Sessiz Hatıralar & Notlar",
      atmosphere: "Sarı sarkıt lambanın aydınlattığı boş ahşap masa ve buzdolabı. Pasta ve mum burada değil; göl kenarında Dilek'in anısında. Buzdolabı kapağındaki magnetlere anonim bir not bırakabilirsiniz.",
      musicNote: "Buzdolabı Motorunun Hafif Uğultusu & Gece Sessizliği",
      subvenues: [
        { id: "home_interior", label: "Salona Dön // Bahar ve Ata" }
      ],
      noteOrigin: "Buzdolabı Kapağı",
      props: [
        {
          name: "BUZDOLABI NOTLARI",
          icon: "✍️",
          thumb: "assets/img/props/prop_fridge_notes.jpg",
          subtitle: "MAGNETLERE NOT BIRAK",
          desc: "Buzdolabı kapağındaki magnetlerin arasına anonim bir not bırakın. Evin sessizliğinde kalpten bir iz.",
          action: "note"
        },
        {
          name: "AHŞAP MUTFAK MASASI",
          icon: "🪑",
          thumb: "assets/img/props/prop_cake.jpg",
          subtitle: "SESSİZ VE BOŞ",
          desc: "Sarı sıcak sarkıt lambanın aydınlattığı boş ahşap masa. Doğum günü pastası göl kenarında Dilek için yakıldı."
        }
      ]
    },

    murat_home: {
      id: "murat_home",
      sceneTag: "SAHNE 05 // MURAD'IN EVİ",
      title: "MURAD'IN EVİ // KUZEY BLOKLARI",
      subtitle: "INT. YENİ MAHALLE / 14. KAT — 03:00 // YALNIZLIK",
      location: "Kuzey Blokları",
      time: "03:00",
      period: "Günümüz",
      ctaIcon: "🏢",
      ctaText: "PENCEREDEN ŞEHRE BAK",
      ctaAction: "prop",
      image: "assets/img/loc_murat_home.jpg",
      characterId: "murat",
      characterName: "Murad",
      characterRole: "Polis // 'Murad. D ile...' // Kenan'ın Babası",
      atmosphere: "Şehre tepeden bakan Kuzey Blokları penthouse dairesi. Yalnızlık, soğuk mermer tezgah, masada Mustang anahtarı ve Kenan'ın çocukluk fotoğrafları.",
      musicNote: "Klima Uğultusu & Uzak Şehir Sesi",
      subvenues: [],
      noteOrigin: "Murad'ın Çalışma Masası",
      props: [
        {
          name: "POLİS ROZETİ VE MUSTANG ANAHTARI",
          icon: "🎖️",
          thumb: "assets/img/props/prop_murat_hill.jpg",
          subtitle: "DURGUNLUK VE YALNIZLIK",
          desc: "Masada duran rozet, Ford Mustang'in kontak anahtarı ve soruşturma dosyası."
        }
      ]
    },

    studio: {
      id: "studio",
      sceneTag: "SAHNE 08A // SES ATÖLYESİ",
      title: "KENAN'IN STÜDYOSU // BATI YAKASI",
      subtitle: "INT. OSTİM SANAYİ YANI / MÜZİK ATÖLYESİ — 22:00",
      location: "Batı Yakası Stüdyosu",
      time: "22:00",
      period: "Günümüz",
      ctaIcon: "⚡",
      ctaText: "BU ŞARKIYI KEREM'DEN DİNLE",
      ctaTarget: "studio_ekrem",
      image: "assets/img/loc_studio.jpg",
      characterId: "kenan",
      characterName: "Kenan",
      characterRole: "Müzisyen & Prodüktör",
      atmosphere: "Kenan'ın stüdyosu. Ahşap difüzörler, Fender amfi, analog mikser. Kenan Kerem'i ikna etti: 'Daha Anadolu sesi lazım bu şarkıya... Keşke Kerem abi söylese.' Kerem'in canlı kayıt seansına geçin.",
      musicNote: "Gospel Baby — Kenan Akustik Demo (92 BPM)",
      subvenues: [
        { id: "studio_ekrem", label: "🎙️ Bu Şarkıyı Kerem'den Dinle (Canlı Kayıt)" }
      ],
      noteOrigin: "Stüdyo Masası",
      props: [
        {
          name: "KEREM'DEN DİNLE",
          icon: "⚡",
          thumb: "assets/img/props/prop_ekrem_mic.jpg",
          subtitle: "CANLI KAYIT SEANSI",
          desc: "Kerem stüdyoda it oturuşu, dev ekranda sözler... Şarkının hakiki sokak ruhu.",
          action: "fly_subvenue",
          target: "studio_ekrem"
        },
        {
          name: "KENAN // DEMO",
          icon: "🎵",
          thumb: "assets/img/props/prop_kenan_studio.jpg",
          subtitle: "GOSPEL BABY DEMO",
          desc: "Kenan'ın stüdyoda kaydettiği ilk demo.",
          action: "music",
          audioSrc: "K35AtsZEl5o"
        },
        {
          name: "MURAD & KEREM DÜETİ",
          icon: "📻",
          thumb: "assets/img/props/prop_murat_ekrem.jpg",
          subtitle: "BİRİ VARMIŞ ÖTEKİ YOK OLMASIN",
          desc: "Murad ve Kerem beraber Bahar'a söylüyorlar.",
          action: "music",
          audioSrc: "GLQcmdJsO5U"
        }
      ]
    },

    studio_ekrem: {
      id: "studio_ekrem",
      sceneTag: "SAHNE 09 // CANLI KAYIT",
      title: "SES ATÖLYESİ // GOSPEL BABY",
      subtitle: "INT. BATI YAKASI ATÖLYESİ — 03:20 // KEREM CANLI VOKAL",
      location: "Batı Yakası Atölyesi",
      time: "03:20",
      period: "Günümüz",
      ctaIcon: "🎵",
      ctaText: "GOSPEL BABY'İ DİNLE",
      ctaAudio: "mdPhJrnytkA",
      image: "assets/img/loc_studio_ekrem.jpg",
      characterId: "ekrem",
      characterName: "Kerem ve Kenan",
      characterRole: "Sokak Vokali & Analog Miksaj",
      atmosphere: "Kenan konsol başında gülümsüyor, faderları ayarlıyor. Kerem stüdyoda it oturuşu yapmış, tek elinde mikrofon, karşısındaki dev ekranda akan şarkı sözleriyle Gospel Baby'i söylüyor.",
      musicNote: "Gospel Baby — Kerem Vokal & Ham Analog Mikser",
      subvenues: [
        { id: "studio", label: "Kenan'ın Masasına Geri Dön" }
      ],
      noteOrigin: "Stüdyo Masası",
      props: [
        {
          name: "KEREM // VOKAL",
          icon: "🎤",
          thumb: "assets/img/props/prop_ekrem_mic.jpg",
          subtitle: "GOSPEL BABY VOKAL",
          desc: "Kerem mikrofona sarılmış söylüyor. Ham analog mikser kaydı.",
          action: "music",
          audioSrc: "mdPhJrnytkA"
        },
        {
          name: "DEV TELEPROMPTER",
          icon: "📺",
          thumb: "assets/img/props/prop_tv_lyrics.jpg",
          subtitle: "CANLI LİRİK AKIŞI",
          desc: "Dev ekranda akan şarkı sözleri ve Türkçe telaffuzlar.",
          action: "lyrics_modal"
        },
        {
          name: "KENAN // PRODÜKSİYON",
          icon: "💬",
          thumb: "assets/img/props/prop_kenan_studio.jpg",
          subtitle: "MİKS MASASI",
          desc: "Kenan konsol başında gülümsüyor: 'Daha Anadolu sesi lazım bu şarkıya... Tam oldu.'",
          action: "dialogue",
          charId: "kenan"
        },
        {
          name: "ANALOG KONSOL",
          icon: "🎛️",
          thumb: "assets/img/props/prop_analog_console.jpg",
          subtitle: "FADERLAR & VU METRE",
          desc: "Kenan faderları dengeliyor."
        }
      ]
    }
  };

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
  const glassglowSceneTag = document.getElementById("glassglowSceneTag");
  const metaValLocation = document.getElementById("metaValLocation");
  const metaValTime = document.getElementById("metaValTime");
  const metaValPeriod = document.getElementById("metaValPeriod");
  const glassglowPrimaryCtaBtn = document.getElementById("glassglowPrimaryCtaBtn");
  const ctaIconCircle = document.getElementById("ctaIconCircle");
  const ctaText = document.getElementById("ctaText");

  // Odaklanılan Nesne Kartı
  const glassglowFocusedObject = document.getElementById("glassglowFocusedObject");
  const focusedObjIcon = document.getElementById("focusedObjIcon");
  const focusedObjTitle = document.getElementById("focusedObjTitle");
  const focusedObjSubtitle = document.getElementById("focusedObjSubtitle");
  const focusedObjDesc = document.getElementById("focusedObjDesc");
  const focusedObjActionBtn = document.getElementById("focusedObjActionBtn");
  const focusedObjYtLink = document.getElementById("focusedObjYtLink");
  const glassglowAudioYtLink = document.getElementById("glassglowAudioYtLink");

  // YouTube Harici Yönlendirme Haritaları (khrysaor Resmî Kanalı)
  const SCENE_YT_MAP = {
    lake: "https://www.youtube.com/watch?v=yFymvGwoxjA",
    lake_candle: "https://www.youtube.com/watch?v=yFymvGwoxjA",
    ritim: "https://www.youtube.com/watch?v=KFrAv440Rmg",
    ritim_interior: "https://www.youtube.com/watch?v=KFrAv440Rmg",
    dancefloor: "https://www.youtube.com/watch?v=KFrAv440Rmg",
    ritim_vip: "https://www.youtube.com/watch?v=KFrAv440Rmg",
    ritim_backstage: "https://www.youtube.com/watch?v=KFrAv440Rmg",
    ritim_road: "https://www.youtube.com/watch?v=CvSByNL1r48",
    hill: "https://www.youtube.com/watch?v=CvSByNL1r48",
    murat_home: "https://www.youtube.com/watch?v=CvSByNL1r48",
    studio: "https://www.youtube.com/watch?v=K35AtsZEl5o",
    studio_ekrem: "https://www.youtube.com/watch?v=mdPhJrnytkA",
    goksu_room: "https://www.youtube.com/watch?v=-esQckmIMgQ",
    office: "https://www.youtube.com/watch?v=-esQckmIMgQ",
    accounting: "https://www.youtube.com/watch?v=-esQckmIMgQ",
    home: "https://www.youtube.com/watch?v=GLQcmdJsO5U",
    home_interior: "https://www.youtube.com/watch?v=GLQcmdJsO5U",
    home_kitchen: "https://www.youtube.com/watch?v=GLQcmdJsO5U",
    garden: "https://www.youtube.com/watch?v=GLQcmdJsO5U",
    master: "https://www.youtube.com/@khrysaor_music/videos"
  };

  const TRACK_YT_MAP = {
    bataklik: "https://www.youtube.com/watch?v=yFymvGwoxjA",
    "track_bataklik.mp3": "https://www.youtube.com/watch?v=yFymvGwoxjA",
    "assets/audio/track_bataklik.mp3": "https://www.youtube.com/watch?v=yFymvGwoxjA",
    yFymvGwoxjA: "https://www.youtube.com/watch?v=yFymvGwoxjA",
    hirsiz: "https://www.youtube.com/watch?v=KFrAv440Rmg",
    "track_hirsiz.mp3": "https://www.youtube.com/watch?v=KFrAv440Rmg",
    "assets/audio/track_hirsiz.mp3": "https://www.youtube.com/watch?v=KFrAv440Rmg",
    KFrAv440Rmg: "https://www.youtube.com/watch?v=KFrAv440Rmg",
    bilmem_ben_de: "https://www.youtube.com/watch?v=CvSByNL1r48",
    "track_bilmem_ben_de.mp3": "https://www.youtube.com/watch?v=CvSByNL1r48",
    "assets/audio/track_bilmem_ben_de.mp3": "https://www.youtube.com/watch?v=CvSByNL1r48",
    CvSByNL1r48: "https://www.youtube.com/watch?v=CvSByNL1r48",
    gospel_baby_kenan: "https://www.youtube.com/watch?v=K35AtsZEl5o",
    "track_gospel_baby_kenan.mp3": "https://www.youtube.com/watch?v=K35AtsZEl5o",
    "assets/audio/track_gospel_baby_kenan.mp3": "https://www.youtube.com/watch?v=K35AtsZEl5o",
    K35AtsZEl5o: "https://www.youtube.com/watch?v=K35AtsZEl5o",
    gospel_baby_ekrem: "https://www.youtube.com/watch?v=mdPhJrnytkA",
    "track_gospel_baby_ekrem.mp3": "https://www.youtube.com/watch?v=mdPhJrnytkA",
    "assets/audio/track_gospel_baby_ekrem.mp3": "https://www.youtube.com/watch?v=mdPhJrnytkA",
    mdPhJrnytkA: "https://www.youtube.com/watch?v=mdPhJrnytkA",
    kaybedemem: "https://www.youtube.com/watch?v=-esQckmIMgQ",
    "track_kaybedemem.mp3": "https://www.youtube.com/watch?v=-esQckmIMgQ",
    "assets/audio/track_kaybedemem.mp3": "https://www.youtube.com/watch?v=-esQckmIMgQ",
    "-esQckmIMgQ": "https://www.youtube.com/watch?v=-esQckmIMgQ",
    biri_varmis: "https://www.youtube.com/watch?v=GLQcmdJsO5U",
    "track_biri_varmis.mp3": "https://www.youtube.com/watch?v=GLQcmdJsO5U",
    "assets/audio/track_biri_varmis.mp3": "https://www.youtube.com/watch?v=GLQcmdJsO5U",
    GLQcmdJsO5U: "https://www.youtube.com/watch?v=GLQcmdJsO5U"
  };

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

  // 1. AÇILIŞ SEKANSI VE ÇOKLU GİRİŞ TETİKLEYİCİSİ
  let experienceStarted = false;
  function startExperience() {
    if (experienceStarted) return;
    experienceStarted = true;

    // 1.1 Ses Motorunu Başlat
    if (window.SUSSUZ_AUDIO) {
      try {
        window.SUSSUZ_AUDIO.init();
        window.SUSSUZ_AUDIO.setSceneAudio("master");
      } catch (err) {
        console.warn("SUSSUZ_AUDIO başlatma uyarısı:", err);
      }
    }

    // 1.2 Açılış Katmanını Yumuşakça Kaldır
    if (openingOverlay) {
      openingOverlay.classList.add("opening-hidden");
      setTimeout(() => {
        openingOverlay.style.display = "none";
      }, 1800);
    }

    // 1.3 Master Spatial Universe Başlatılıyor
    try {
      spatialUniverse = new window.SpatialUniverse(
        spatialCanvas,
        (sceneId) => handleSceneChange(sceneId),
        (hotspot, sceneId, screenPos) => handleObjectClick(hotspot, sceneId, screenPos)
      );

      spatialUniverse.onCanvasEmptyClick = () => {
        if (glassglowTab && glassglowTab.classList.contains("tab-active")) {
          glassglowTab.classList.remove("tab-active");
          hudToggleTabBtn.textContent = "👁️ MEKÂN HAKKINDA";
        }
      };
    } catch (err) {
      console.error("SpatialUniverse başlatma hatası:", err);
    }
  }

  // Global erişim için aç
  window.startSussuzExperience = startExperience;

  // Buton Tıklaması
  if (enterBtn) {
    enterBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      startExperience();
    });
  }

  // Ekranın Herhangi Bir Yerine Tıklayarak da Girilebilme Emniyeti
  if (openingOverlay) {
    openingOverlay.addEventListener("click", (e) => {
      if (e.target.tagName !== "A") {
        startExperience();
      }
    });
  }

  // Klavye (Enter / Space) ile Giriş Emniyeti
  window.addEventListener("keydown", (e) => {
    if (!experienceStarted && (e.key === "Enter" || e.key === " ")) {
      startExperience();
    }
  });

  // 2. SAHNE GEÇİŞ YÖNETİCİSİ (Panorama <-> Canlı Sahne)
  function handleSceneChange(sceneId) {
    if (sceneId) {
      const data = SCENE_DATA[sceneId];
      if (!data) return;

      currentScene = data;
      currentNoteOrigin = data.noteOrigin || "Dünya Panosu";

      // Glassglow Tab İçeriğini Doldur
      if (glassglowSceneTag) {
        glassglowSceneTag.textContent = data.sceneTag || "SUSSUZ NOIR";
      }
      if (glassglowTitle) glassglowTitle.textContent = data.title;
      if (glassglowSubtitle) glassglowSubtitle.textContent = data.subtitle || "";
      if (glassglowAtmosphere) glassglowAtmosphere.textContent = data.atmosphere;
      if (glassglowAudioNote) glassglowAudioNote.textContent = data.musicNote || "";
      if (glassglowAudioYtLink) {
        glassglowAudioYtLink.href = SCENE_YT_MAP[sceneId] || "https://www.youtube.com/@khrysaor_music/videos";
      }

      // 3 Sütunlu Üst Veri Alanı (Ek 2)
      const metaLoc = document.getElementById("metaValLocation");
      if (metaLoc) metaLoc.textContent = data.location || "Göksu Parkı";
      const metaTime = document.getElementById("metaValTime");
      if (metaTime) metaTime.textContent = data.time || "Gece";
      const metaPeriod = document.getElementById("metaValPeriod");
      if (metaPeriod) metaPeriod.textContent = data.period || "Günümüz";

      // Ana Altın Pill Eylem Butonu (Ek 2 Gold Gradient Pill)
      const primaryCta = document.getElementById("glassglowPrimaryCtaBtn");
      if (primaryCta) {
        const ctaTxt = document.getElementById("ctaText");
        const ctaIco = document.getElementById("ctaIconCircle");
        if (data.ctaText) {
          primaryCta.style.display = "flex";
          if (ctaTxt) ctaTxt.textContent = data.ctaText;
          if (ctaIco) ctaIco.textContent = data.ctaIcon || "▶";
          primaryCta.onclick = () => {
            if (data.ctaTarget && spatialUniverse) {
              spatialUniverse.flyToScene(data.ctaTarget);
            } else if (data.ctaAudio && window.SUSSUZ_AUDIO) {
              window.SUSSUZ_AUDIO.playMusicTrack(data.ctaAudio);
            } else if (data.ctaAction === "underground") {
              startUndergroundDescent();
            } else if (data.ctaAction === "dialogue" && data.ctaCharId) {
              openDialogueModal(data.ctaCharId);
            }
          };
        } else {
          primaryCta.style.display = "none";
        }
      }

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

      // Sahne İpuçları Listesi (Ek-2 Luxury Noir Thumbnail Card Rows)
      glassglowPropsList.innerHTML = "";
      if (data.props && data.props.length > 0) {
        data.props.forEach((prop) => {
          const row = document.createElement("button");
          row.className = "glassglow-prop-row";
          row.innerHTML = `
            <img src="${prop.thumb || 'assets/img/props/prop_cake.jpg'}" alt="${prop.name}" class="glassglow-prop-thumb">
            <div class="glassglow-prop-info">
              <span class="glassglow-prop-title">${prop.name}</span>
              <span class="glassglow-prop-desc">${prop.desc || prop.subtitle || ''}</span>
            </div>
            <span class="glassglow-prop-chevron">›</span>
          `;
          row.addEventListener("click", () => {
            showFocusedObjectCard({
              icon: prop.icon,
              name: prop.name,
              subtitle: prop.subtitle || "SAHNE DETAYI",
              desc: prop.desc
            });
            if (prop.action === "underground") {
              startUndergroundDescent();
            } else if (prop.action === "dialogue") {
              openDialogueModal(prop.charId || data.characterId);
            } else if (prop.action === "fly_subvenue" && prop.target && spatialUniverse) {
              spatialUniverse.flyToScene(prop.target);
            }
          });
          glassglowPropsList.appendChild(row);
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

      // Glassglow Kartı Solda Sabit Konumda Açılır (Karakteri ve Nesneleri Asla Kapatmaz!)
      positionGlassglowPopup();
      glassglowTab.classList.add("tab-active");

      // HUD Güncelle
      hudBackBtn.style.display = "inline-flex";
      hudToggleTabBtn.style.display = "inline-flex";
      hudToggleTabBtn.textContent = "👁️ DETAYLARI GİZLE";
      const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (window.innerWidth <= 768);
      hudInstructions.textContent = isTouch
        ? "[ SÜRÜKLE: GEZİN ] • [ IŞILTILARA DOKUN ] • [ ÇİFT PARMAK: UZAKLAŞ ]"
        : "[ SERBEST GEZİNME: SÜRÜKLE ] • [ SAHNEDEKİ IŞILTILARA TIKLA ] • [ PANORAMAYA DÖNMEK İÇİN ZOOM OUT ]";

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
      const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (window.innerWidth <= 768);
      hudInstructions.textContent = isTouch
        ? "[ SÜRÜKLE: KEŞFET ] • [ ÇİFT PARMAK: ZOOM ] • [ IŞIKLARA DOKUN ]"
        : "[ SÜRÜKLE: KEŞFET ] • [ TEKERLEK: ZOOM ] • [ IŞIKLARIN SESİNİ TAKİP ET ]";

      if (window.SUSSUZ_AUDIO) {
        window.SUSSUZ_AUDIO.setSceneAudio("master");
      }
      if (glassglowAudioYtLink) {
        glassglowAudioYtLink.href = "https://www.youtube.com/@khrysaor_music/videos";
      }
    }
  }

  // Ek-2 Master Acrylic Glass Card: Solda Sabit, Kompakt ve Estetik Yerleşim
  // Ana karakterleri ve sahne objelerini ASLA kapatmaz!
  function positionGlassglowPopup() {
    if (window.innerWidth <= 768) {
      glassglowTab.style.left = "12px";
      glassglowTab.style.right = "12px";
      glassglowTab.style.top = "auto";
      glassglowTab.style.bottom = "max(14px, env(safe-area-inset-bottom, 14px))";
      glassglowTab.style.maxHeight = "52vh";
    } else {
      glassglowTab.style.left = "32px";
      glassglowTab.style.top = "92px";
      glassglowTab.style.right = "auto";
      glassglowTab.style.bottom = "auto";
      glassglowTab.style.maxHeight = "calc(100vh - 120px)";
    }
  }

  // 3. SAHNE İÇİ NESNEYE TIKLAMA YÖNETİCİSİ (Pop-up Tetikleyici)
  function handleObjectClick(hotspot, sceneId, clickPos) {
    if (!hotspot) return;

    // Pop-up'ı soldaki estetik konumuna al ve aç (asla karakterin üzerini kapatmaz)
    positionGlassglowPopup();
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
      focusedObjActionBtn.innerHTML = `▶ ${hotspot.name} ÇAL`;
      focusedObjActionBtn.onclick = () => window.playSnippet(hotspot.src, hotspot.fallbackSrc);
    } else if (hotspot.action === "dialogue") {
      focusedObjActionBtn.style.display = "flex";
      focusedObjActionBtn.innerHTML = `[ 💬 ${hotspot.name} DİYALOĞUNU BAŞLAT ]`;
      focusedObjActionBtn.onclick = () => openDialogueModal(hotspot.charId || (currentScene ? currentScene.characterId : null));
    } else if (hotspot.action === "note") {
      focusedObjActionBtn.style.display = "flex";
      focusedObjActionBtn.innerHTML = `[ ✍️ BU NOKTAYA BİR NOT BIRAK ]`;
      focusedObjActionBtn.onclick = () => openAnonymousNoteModal();
    } else if (hotspot.action === "lyrics_modal") {
      focusedObjActionBtn.style.display = "flex";
      focusedObjActionBtn.innerHTML = `[ 📺 DEV LİRİK EKRANINI AÇ ]`;
      focusedObjActionBtn.onclick = () => openGospelLyricsModal();
      openGospelLyricsModal();
    } else if (hotspot.action === "funding") {
      focusedObjActionBtn.style.display = "flex";
      focusedObjActionBtn.innerHTML = `[ SPONSORLUK VE DESTEK PROTOKOLÜ ]`;
      focusedObjActionBtn.onclick = () => window.openFundingModal();
    } else {
      focusedObjActionBtn.style.display = "none";
    }

    // YouTube Yönlendirme Linki (Müzik & Lirik Nesneleri İçin)
    if (focusedObjYtLink) {
      const ytUrl = hotspot.ytUrl || 
        TRACK_YT_MAP[hotspot.src] || 
        TRACK_YT_MAP[hotspot.fallbackSrc] || 
        (hotspot.action === "lyrics_modal" ? "https://www.youtube.com/watch?v=mdPhJrnytkA" : null);
      if (ytUrl) {
        focusedObjYtLink.href = ytUrl;
        focusedObjYtLink.style.display = "flex";
      } else {
        focusedObjYtLink.style.display = "none";
      }
    }
  }

  function showFocusedObjectCard(obj) {
    if (focusedObjIcon) focusedObjIcon.textContent = obj.icon || "⚡";
    if (focusedObjTitle) focusedObjTitle.textContent = obj.name || "";
    if (focusedObjSubtitle) focusedObjSubtitle.textContent = obj.subtitle || "";
    if (focusedObjDesc) focusedObjDesc.textContent = obj.desc || "";
    if (glassglowFocusedObject) {
      glassglowFocusedObject.style.display = "block";
      try {
        glassglowFocusedObject.scrollIntoView({ behavior: "smooth", block: "nearest" });
      } catch (e) {}
    }
  }

  // 4. ÖZEL İÇERİK ALANLARI
  function renderSceneCustomArea(data) {
    glassglowCustomArea.innerHTML = "";

    // GÖL KENARI İSKELE: Mum Yakma & Anma Masasına Geçiş Kutusu
    if (data.isLakePier || data.id === "lake") {
      const box = document.createElement("div");
      box.className = "candle-blow-box";
      box.innerHTML = `
        <h4>DİLEK'İN ANISINA</h4>
        <p>“Bazı şeyler gömülünce kaybolmaz.” — Bahar tek başına, Dilek'in kanı üzerine kurulmuş parkta doğum günü pastasını yakmak için masaya geçiyor.</p>
        <button id="goToCandleSceneInlineBtn" class="ek3-trigger ek3-trigger-accent" style="justify-content:center; border: 1px solid rgba(255, 212, 59, 0.45); color: #ffe066;">
          🕯️ MUMU YAK // ANMA MASASINA GEÇ
        </button>
      `;
      glassglowCustomArea.appendChild(box);
      box.querySelector("#goToCandleSceneInlineBtn").addEventListener("click", () => {
        if (spatialUniverse) spatialUniverse.flyToScene("lake_candle");
      });
    }

    // GÖL KENARI MASASI: Mum Üfleme Kutusu
    if (data.isLakeMemorial || data.id === "lake_candle") {
      const box = document.createElement("div");
      box.className = "candle-blow-box";
      box.innerHTML = `
        <h4>DİLEK'İN DOĞUM GÜNÜ PASTASI</h4>
        <p>“Bazı şeyler gömülünce kaybolmaz.” — Bahar tek başına mumu üflüyor.</p>
        <button id="blowCandleInlineBtn" class="ek3-trigger ek3-trigger-accent" style="justify-content:center; border: 1px solid rgba(255, 212, 59, 0.45); color: #ffe066;">
          🕯️ DİLEK İÇİN BİR DİLEK TUT // MUMU ÜFLE
        </button>
      `;
      glassglowCustomArea.appendChild(box);
      box.querySelector("#blowCandleInlineBtn").addEventListener("click", startUndergroundDescent);
    }

    // RİTİM MUHASEBE: Canlı Prodüksiyon İhtiyaç Masası
    if (data.isAccountingSpecial || data.id === "accounting") {
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
    if (data.isStudioSpecial || data.id === "studio") {
      const studioBox = document.createElement("div");
      studioBox.innerHTML = `
        <!-- VOKALİST DEĞİŞTİRİCİ: KENAN vs KEREM (GOSPEL BABY) -->
        <div class="studio-version-switch-box">
          <div class="studio-version-header">
            <span class="studio-rec-dot"></span>
            <span class="studio-rec-title">CANLI KAYIT ODASI // VOKAL DEĞİŞTİRİCİ</span>
          </div>
          <div class="studio-version-lore">
            Kenan demoyu kaydediyor: <em>“Bu şarkıya daha sert, daha Anadolu bir ses lazım... Keşke Kerem abi söylese.”</em> Kerem'i ikna edip tabureye oturtuyor.
          </div>
          <div class="studio-vocal-buttons">
            <button id="vocalKenanBtn" class="vocal-switch-btn active">
              🎙️ Kenan Versiyonu (Demo)
            </button>
            <button id="vocalEkremBtn" class="vocal-switch-btn">
              🎙️ Kerem Versiyonu (Anadolu Sesi)
            </button>
          </div>
          <div id="ekremStudioCard" class="ekrem-studio-card" style="display: none;">
            <div class="ekrem-sitting-visual">
              <img src="assets/img/ekrem_gospel_baby.jpg" alt="Kerem Stüdyoda" class="ekrem-sitting-thumb" onerror="this.style.display='none'">
              <div class="ekrem-sitting-text">
                <strong style="color:var(--accent-gold);">KEREM STÜDYODA // İT OTURUŞU</strong><br>
                Taburede it oturuşu, elinde mikrofon: <em>“Angaralı Koray / Gospel Baby”</em>. Kenan masada kafasını sallıyor: <em>“İşte bu ses lazımdı oğlum!”</em>
              </div>
            </div>
            <button id="playEkremVersionBtn" class="ek3-trigger ek3-trigger-accent" style="margin-top: 8px; justify-content: center; font-size: 0.72rem; padding: 6px;">
              ▶ KEREM'İN KAYDINI DİNLE (YOUTUBE MASTER)
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
            <span class="studio-track-title">GOSPEL BABY (Kenan & Kerem)</span>
            <button class="studio-listen-btn" onclick="playSnippet('K35AtsZEl5o', 'assets/audio/track_gospel_baby_kenan.mp3')">▶ 15 sn Dinle</button>
          </div>
          <div class="studio-stems-grid">
            <div>Söz %100 <div class="studio-stem-bar"><div class="studio-stem-fill" style="width:100%;"></div></div></div>
            <div>Beste %95 <div class="studio-stem-bar"><div class="studio-stem-fill" style="width:95%;"></div></div></div>
            <div>Kerem Vokal %90 <div class="studio-stem-bar"><div class="studio-stem-fill" style="width:90%;"></div></div></div>
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

    // KEREM STÜDYODA CANLI KAYIT (studio_ekrem)
    if (data.isStudioEkremSpecial || data.id === "studio_ekrem") {
      const ekremStudioBox = document.createElement("div");
      ekremStudioBox.innerHTML = `
        <div class="studio-version-switch-box" style="border-color: rgba(56, 178, 172, 0.4); margin-bottom: 16px;">
          <div class="studio-version-header">
            <span class="studio-rec-dot" style="background:#38b2ac; box-shadow: 0 0 10px #38b2ac;"></span>
            <span class="studio-rec-title" style="color:#38b2ac;">CANLI TELEPROMPTER & VOKAL KAYDI</span>
          </div>
          <div class="studio-version-lore">
            Kerem mikrofona haykırıyor: <em>“If I'm gonna lose you, I won't lose this song...”</em> Stüdyodaki dev ekranda şarkının sözleri ve Türkçe fonetik telaffuzları akıyor.
          </div>
          <button id="openGospelLyricsFromTabBtn" class="ek3-trigger ek3-trigger-accent" style="width:100%; justify-content:center; margin-top:10px;">
            [ 📺 DEV LİRİK EKRANI & TELAFUZLARI GÖR ]
          </button>
          <button id="playGospelFromTabBtn" class="ek3-trigger" style="width:100%; justify-content:center; margin-top:8px;">
            ▶ GOSPEL BABY CANLI ÇAL (KEREM VOKAL)
          </button>
        </div>
      `;
      glassglowCustomArea.appendChild(ekremStudioBox);

      ekremStudioBox.querySelector("#openGospelLyricsFromTabBtn").addEventListener("click", () => openGospelLyricsModal());
      ekremStudioBox.querySelector("#playGospelFromTabBtn").addEventListener("click", () => {
        if (window.playSnippet) window.playSnippet("mdPhJrnytkA");
      });
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

  // Doğrudan Parça Çalma
  window.playSnippet = function(src, fallbackSrc = null) {
    if (window.SUSSUZ_AUDIO) {
      window.SUSSUZ_AUDIO.playMusicTrack(src, 0.65, fallbackSrc);
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
        } else if (opt.next === "dancefloor_redirect") {
          dialogueModal.classList.remove("modal-active");
          if (spatialUniverse) spatialUniverse.flyToScene("dancefloor");
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
      narrative: "Kenan söylüyor; babası Murad ve Kerem dans pistinde dans ediyor"
    },
    {
      id: "bilmem_ben_de",
      num: "03",
      title: "Bilmem, Ben De",
      singer: "Murad söylüyor",
      badge: "Official Lyric Video",
      duration: "2:33",
      ytId: "CvSByNL1r48",
      ytUrl: "https://www.youtube.com/watch?v=CvSByNL1r48",
      src: "assets/audio/track_bilmem_ben_de.mp3",
      sceneId: "hill",
      narrative: "Murad söylüyor // Tepe & Ankara ayazı, 1. bölüm finali"
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
      narrative: "Kenan kaydediyor; 'Bu şarkıya daha sert bir Anadolu sesi lazım, keşke Kerem abi söylese' dediği an"
    },
    {
      id: "gospel_baby_ekrem",
      num: "05",
      title: "Gospel Baby (Kerem Versiyonu)",
      singer: "Kerem söylüyor // Angaralı Koray",
      badge: "Stüdyo Master",
      duration: "3:10",
      ytId: "mdPhJrnytkA",
      ytUrl: "https://www.youtube.com/watch?v=mdPhJrnytkA",
      src: "assets/audio/track_gospel_baby_ekrem.mp3",
      sceneId: "studio",
      narrative: "Kerem söylüyor // Kenan'ın stüdyosunda, taburede it oturuşu elinde mikrofon"
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
      singer: "Murad & Kerem (düet)",
      badge: "Official Audio",
      duration: "4:32",
      ytId: "GLQcmdJsO5U",
      ytUrl: "https://www.youtube.com/watch?v=GLQcmdJsO5U",
      src: "assets/audio/track_biri_varmis.mp3",
      sceneId: "studio",
      narrative: "Murad ve Kerem beraber Bahar'a söylüyorlar"
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
    npSubtitle.textContent = `${tr.singer} — ${tr.title} [SUSSUZ Soundtrack]`;
    const npYtLink = document.getElementById("npYtLink");
    if (npYtLink && tr.ytUrl) {
      npYtLink.href = tr.ytUrl;
    }

    if (window.SUSSUZ_AUDIO) {
      window.SUSSUZ_AUDIO.playMusicTrack(tr.src, 0.70, tr.src);
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
      if (window.SUSSUZ_AUDIO && window.SUSSUZ_AUDIO.musicElement && !window.SUSSUZ_AUDIO.musicElement.paused) {
        isTrackPlaying = true;
        soundtrackPlayPauseBtn.innerHTML = "⏸";
      }
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

  // Parça Bittiğinde Sıradaki Parçaya Geçiş / Döngü Dinleyicisi
  if (window.SUSSUZ_AUDIO) {
    window.SUSSUZ_AUDIO.onTrackEnded = () => {
      if (soundtrackModal && soundtrackModal.classList.contains("modal-active")) {
        const nextIdx = (currentTrackIdx + 1) % SOUNDTRACK_PLAYLIST.length;
        playTrackAt(nextIdx);
      }
    };
    window.SUSSUZ_AUDIO.onYTStateChange = (state) => {
      if (state === 0) {
        if (soundtrackModal && soundtrackModal.classList.contains("modal-active")) {
          const nextIdx = (currentTrackIdx + 1) % SOUNDTRACK_PLAYLIST.length;
          playTrackAt(nextIdx);
        }
      }
    };
  }

  // 9. HUD VE NAVİGASYON KONTROLLERİ
  hudBackBtn.addEventListener("click", () => {
    if (spatialUniverse) spatialUniverse.returnToPanorama();
  });

  returnPanoramaBtn.addEventListener("click", () => {
    if (spatialUniverse) spatialUniverse.returnToPanorama();
  });

  closeGlassglowBtn.addEventListener("click", () => {
    glassglowTab.classList.remove("tab-active");
    hudToggleTabBtn.textContent = "👁️ DETAYLARI GÖSTER";
  });

  hudToggleTabBtn.addEventListener("click", () => {
    if (glassglowTab.classList.contains("tab-active")) {
      glassglowTab.classList.remove("tab-active");
      hudToggleTabBtn.textContent = "👁️ DETAYLARI GÖSTER";
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
        hudToggleTabBtn.textContent = "👁️ DETAYLARI GÖSTER";
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

  // 10. GOSPEL BABY CANLI LİRİK MODALI
  const gospelLyricsModal = document.getElementById("gospelLyricsModal");
  const closeGospelLyricsBtn = document.getElementById("closeGospelLyricsBtn");
  const playGospelFromModalBtn = document.getElementById("playGospelFromModalBtn");
  const gospelLyricsContainer = document.getElementById("gospelLyricsContainer");

  function openGospelLyricsModal() {
    if (!gospelLyricsModal) return;
    renderGospelLyricsList();
    gospelLyricsModal.classList.add("modal-active");
  }

  function renderGospelLyricsList() {
    if (!gospelLyricsContainer) return;
    const lyrics = window.GOSPEL_BABY_LYRICS || [];
    gospelLyricsContainer.innerHTML = "";
    lyrics.forEach((line, idx) => {
      const pair = document.createElement("div");
      pair.className = "gospel-lyric-pair";
      pair.id = `gospelLine_${idx}`;
      pair.innerHTML = `
        <div class="gospel-en-line">${line.en}</div>
        <div class="gospel-tr-phonetic">${line.tr}</div>
      `;
      gospelLyricsContainer.appendChild(pair);
    });
  }

  if (closeGospelLyricsBtn) {
    closeGospelLyricsBtn.addEventListener("click", () => {
      gospelLyricsModal.classList.remove("modal-active");
    });
  }

  if (playGospelFromModalBtn) {
    playGospelFromModalBtn.addEventListener("click", () => {
      if (window.playSnippet) {
        window.playSnippet("mdPhJrnytkA");
      } else if (window.SUSSUZ_AUDIO) {
        window.SUSSUZ_AUDIO.playMusicTrack("mdPhJrnytkA", 0.65, "assets/audio/track_gospel_baby_ekrem.mp3");
      }
      playGospelFromModalBtn.textContent = "🔊 ŞARKI ÇALIYOR (KEREM VOKAL)";
    });
  }

  window.openGospelLyricsModal = openGospelLyricsModal;
});

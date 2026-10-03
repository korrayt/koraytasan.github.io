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
      characterName: "Ekrem ve Murat",
      characterRole: "Kulüp Önü ve Bağlantı Yolu",
      atmosphere: "Gerçekte Göksu Parkı'ndaki adada yer alan restoranın yerine konumlanan gece kulübü. Girişte bekleyen kalabalık, kapı güvenliği ve yoldan uzaklaşmakta olan Murat'ın arabası.",
      musicNote: "Filtrelenmiş 4/4 Sub-Bass & Araba Uğultusu",
      subvenues: [
        { id: "ritim_interior", label: "İçeri Gir (Genel Salon)" },
        { id: "ritim_road", label: "Murat'ı Durdur (Yol Sahnesi)" }
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
          name: "MURAT'I DURDUR",
          icon: "✋",
          thumb: "assets/img/props/prop_murat_hill.jpg",
          subtitle: "1. BÖLÜM FİNALİ",
          desc: "Ekrem'in yola atlayarak arabayı durdurduğu 1. bölüm final sahnesi.",
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
      characterName: "Murat ve Ekrem",
      characterRole: "Pist Kenarında Sahneye Bakış // 'Oğlum...'",
      atmosphere: "Müzik değişiyor. Karanlık ekranlar bir anda açılıyor. Dev ekranda KENAN, RİTİM logosu... Yeni parçanın prömiyeri: HIRSIZ. İlk beat giriyor, kalabalık bağırıyor. Murat duruyor; oğlunu sahnede görüyor. Ekrem elini uzatıyor: 'Oğlunun şarkısında surat asma. Ayıp lan çocuğa!'",
      musicNote: "HIRSIZ — Kenan Sahne Prömiyeri (124 BPM)",
      subvenues: [
        { id: "dancefloor", label: "Murat'ı Dansa Götür (Pist)" },
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
          name: "MURAT VE EKREM",
          icon: "💬",
          thumb: "assets/img/props/prop_murat_ekrem.jpg",
          subtitle: "'OĞLUM...' DİYALOĞU",
          desc: "Murat oğlunu dev ekranda görünce donakalır: 'Ben yapamadım... Göksu yaptı.'",
          action: "dialogue",
          charId: "murat_ekrem_balcony"
        },
        {
          name: "DANS PİSTİ",
          icon: "⚡",
          thumb: "assets/img/props/prop_dancefloor.jpg",
          subtitle: "KALABALIK VE TEMAS",
          desc: "Ekrem elini uzatır, Murat'ı gülerek pistin içine çeker.",
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
      ctaText: "MURAT'I DURDUR",
      ctaAction: "prop",
      image: "assets/img/loc_ritim_road.jpg",
      characterId: "ekrem",
      characterName: "Ekrem ve Murat",
      characterRole: "1. Bölüm Finali // Dönüm Noktası",
      atmosphere: "1. Bölüm final sahnesi. Yağmur ıslaklığı, asfalt parıltısı. Ekrem tam arabaya binecekken Murat'ı durdurur: 'Sana gerisini göstereceğim.' Murat arabayı kilitler, geri döner. İki yabancının kaderinin düğümlendiği an.",
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
          subtitle: "EKREM'İN MÜDAHALESİ",
          desc: "EKREM: 'Sana gerisini göstereceğim.' Murat anahtarı cebine atar; gece henüz bitmemiştir."
        },
        {
          name: "FARLARI YANAN ARABA",
          icon: "🚘",
          thumb: "assets/img/props/prop_mercedes_torpido.jpg",
          subtitle: "MERCEDES FARLARI",
          desc: "Asfaltın üzerinde buğulanmış far ışıkları. Ankara gecesinde iki yabancı."
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
      characterName: "Ekrem ve Murat",
      characterRole: "Pist İçi Yakınlaşma",
      atmosphere: "Ritim'in dans pisti. Baslar duvarları titretiyor. Ekrem Murat'ın ensesine dokunur: 'Öbür tarafa gitsen bara giricen.' Murat güler. MURAT: 'Olm, polisim ben!' — EKREM: 'Merhaba ben de torbacı :D'",
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
          desc: "EKREM: 'Öbür tarafa gitsen bara giricen yarram.' Murat güler; hayatında ilk defa kontrolü bırakır."
        },
        {
          name: "POLİS VE TORBACI",
          icon: "💬",
          thumb: "assets/img/props/prop_murat_ekrem.jpg",
          subtitle: "TANIŞMA ANI",
          desc: "MURAT: 'Olm, polisim ben!' — EKREM (elini uzatarak): 'Merhaba ben de torbacı :D'",
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
      atmosphere: "Göksu masasında oturuyor. Duvarda neon ve viski şişeleri. Kenan köşede akustik gitarıyla hafif bir melodi çalıyor. Göksu masadaki yarım dosyayı Murat'a uzatır: 'Yarım dosya... Yarısı yeter.'",
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
      characterName: "Murat ve Ekrem",
      characterRole: "Mercedes Kaputunda İki Yabancı",
      atmosphere: "05:30. Ankara ayazı. Mercedes'in kaputuna yaslanmış iki yabancı sırayla tek bir sigarayı paylaşır. Gece çözülürken kelimeler dökülür.",
      musicNote: "Bilmem, Ben De — Kuru Gece Ayazı (Akustik)",
      subvenues: [],
      noteOrigin: "Mercedes Torpidosu",
      props: [
        {
          name: "PAYLAŞILAN SİGARA",
          icon: "🚬",
          thumb: "assets/img/props/prop_smoke.jpg",
          subtitle: "AYAZDA TEK DUMAN",
          desc: "EKREM: 'Ben hissettiğim şeye güvenirim. Yanlışsa da benim yanlışım olur.'"
        },
        {
          name: "MURAT İLE YÜZLEŞ",
          icon: "💬",
          thumb: "assets/img/props/prop_murat_hill.jpg",
          subtitle: "'İÇİM YAMUK DEMEDİ'",
          desc: "MURAT: 'Sende bi şey var, içim yamuk demedi. Bilimsel açıklaman bu mu?'",
          action: "dialogue",
          charId: "murat"
        },
        {
          name: "EKREM'İN İÇ DÜNYASI",
          icon: "💬",
          thumb: "assets/img/props/prop_ekrem_hill.jpg",
          subtitle: "TÜBİTAK DİYALOĞU",
          desc: "EKREM: 'He. TÜBİTAK.'",
          action: "dialogue",
          charId: "ekrem"
        },
        {
          name: "MERCEDES TORPİDOSU",
          icon: "📻",
          thumb: "assets/img/props/prop_mercedes_torpido.jpg",
          subtitle: "BİLMEM, BEN DE",
          desc: "Mercedes'in torpidosundan yükselen soğuk ayaz melodisi.",
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
      title: "GÖL KENARI // DENİZ'İN DOĞUM GÜNÜ",
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
      title: "BAHAR'IN EVİ // SEÇİLMİŞ AİLE",
      subtitle: "INT. ERYAMAN APARTMANI / SALON — 20:30 // AKŞAM",
      location: "Eryaman Dairesi",
      time: "20:30",
      period: "Günümüz",
      ctaIcon: "☕",
      ctaText: "EVİ İNCELE",
      ctaAction: "prop",
      image: "assets/img/scene_bahar_home.png",
      characterId: "bahar",
      characterName: "Bahar, Ata ve Ekrem",
      characterRole: "Sığınak & Korunaklı Alan",
      atmosphere: "Sıcak bir salon, masada çay bardakları. Dışarıdaki soğuk Ankara ayazına inat, bu ev bir sığınak. Ata'nın okul çantası köşede, duvarda solgun fotoğraflar.",
      musicNote: "Çay Kaşığı Sesi & Radyo Cızırtısı",
      subvenues: [
        { id: "garden", label: "Apartman Bahçesine İn" }
      ],
      noteOrigin: "Mutfak Masası",
      props: [
        {
          name: "SICAK ÇAY BARDAKLARI",
          icon: "☕",
          thumb: "assets/img/props/prop_bahar.jpg",
          subtitle: "SIĞINAK & HUZUR",
          desc: "Dışarıdaki soğuk Ankara ayazına inat, bu ev bir sığınak."
        }
      ]
    },

    murat_home: {
      id: "murat_home",
      sceneTag: "SAHNE 05 // MURAT'IN EVİ",
      title: "MURAT'IN EVİ // KUZEY BLOKLARI",
      subtitle: "INT. YENİ MAHALLE / 14. KAT — 03:00 // YALNIZLIK",
      location: "Kuzey Blokları",
      time: "03:00",
      period: "Günümüz",
      ctaIcon: "🏢",
      ctaText: "PENCEREDEN ŞEHRE BAK",
      ctaAction: "prop",
      image: "assets/img/loc_murat_home.jpg",
      characterId: "murat",
      characterName: "Murat",
      characterRole: "Emekli Komiser // Yalnız Baba",
      atmosphere: "Şehre tepeden bakan 14. kat dairesi. Yalnızlık, soğuk mermer tezgah, duvarda asılı rozet ve Kenan'ın çocukluk fotoğrafları.",
      musicNote: "Klima Uğultusu & Uzak Şehir Sesi",
      subvenues: [],
      noteOrigin: "Murat'ın Çalışma Masası",
      props: [
        {
          name: "POLİS ROZETİ",
          icon: "🎖️",
          thumb: "assets/img/props/prop_murat_hill.jpg",
          subtitle: "EMEKLLİK VE YALNIZLIK",
          desc: "Duvarda asılı eski rozet ve unutulmak istenen yıllar."
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
      ctaText: "BU ŞARKIYI EKREM'DEN DİNLE",
      ctaTarget: "studio_ekrem",
      image: "assets/img/loc_studio.jpg",
      characterId: "kenan",
      characterName: "Kenan",
      characterRole: "Müzisyen & Prodüktör",
      atmosphere: "Kenan'ın stüdyosu. Ahşap difüzörler, Fender amfi, analog mikser. Kenan Ekrem'i ikna etti: 'Daha Anadolu sesi lazım bu şarkıya... Keşke Ekrem söylese.' Ekrem'in canlı kayıt seansına geçin.",
      musicNote: "Gospel Baby — Kenan Akustik Demo (92 BPM)",
      subvenues: [
        { id: "studio_ekrem", label: "🎙️ Bu Şarkıyı Ekrem'den Dinle (Canlı Kayıt)" }
      ],
      noteOrigin: "Stüdyo Masası",
      props: [
        {
          name: "EKREM'DEN DİNLE",
          icon: "⚡",
          thumb: "assets/img/props/prop_ekrem_mic.jpg",
          subtitle: "CANLI KAYIT SEANSI",
          desc: "Ekrem stüdyoda it oturuşu, dev ekranda sözler... Şarkının hakiki sokak ruhu.",
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
          name: "MURAT & EKREM DÜETİ",
          icon: "📻",
          thumb: "assets/img/props/prop_murat_ekrem.jpg",
          subtitle: "BİRİ VARMIŞ ÖTEKİ YOK OLMASIN",
          desc: "Murat ve Ekrem beraber Bahar'a söylüyorlar.",
          action: "music",
          audioSrc: "GLQcmdJsO5U"
        }
      ]
    },

    studio_ekrem: {
      id: "studio_ekrem",
      sceneTag: "SAHNE 09 // CANLI KAYIT",
      title: "SES ATÖLYESİ // GOSPEL BABY",
      subtitle: "INT. BATI YAKASI ATÖLYESİ — 03:20 // EKREM CANLI VOKAL",
      location: "Batı Yakası Atölyesi",
      time: "03:20",
      period: "Günümüz",
      ctaIcon: "🎵",
      ctaText: "GOSPEL BABY'İ DİNLE",
      ctaAudio: "mdPhJrnytkA",
      image: "assets/img/loc_studio_ekrem.jpg",
      characterId: "ekrem",
      characterName: "Ekrem ve Kenan",
      characterRole: "Sokak Vokali & Analog Miksaj",
      atmosphere: "Kenan konsol başında gülümsüyor, faderları ayarlıyor. Ekrem stüdyoda it oturuşu yapmış, tek elinde mikrofon, karşısındaki dev ekranda akan şarkı sözleriyle Gospel Baby'i söylüyor.",
      musicNote: "Gospel Baby — Ekrem Vokal & Ham Analog Mikser",
      subvenues: [
        { id: "studio", label: "Kenan'ın Masasına Geri Dön" }
      ],
      noteOrigin: "Stüdyo Masası",
      props: [
        {
          name: "EKREM // VOKAL",
          icon: "🎤",
          thumb: "assets/img/props/prop_ekrem_mic.jpg",
          subtitle: "GOSPEL BABY VOKAL",
          desc: "Ekrem mikrofona sarılmış söylüyor. Ham analog mikser kaydı.",
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



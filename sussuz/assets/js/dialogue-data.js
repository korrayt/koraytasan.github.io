/**
 * SUSSUZ — Deterministik Senaryo & Diyalog Motoru (Kanonik Genişletilmiş Sürüm)
 * Karakterler: Bahar, Ekrem, Göksu, Murat, Kenan, Ata
 * SIFIR LLM / Generative AI — Senaryo V3 ve Topluluk Arkı replikleri.
 */

window.SUSSUZ_DIALOGUES = {
  kenan: {
    name: "Kenan",
    age: 19,
    title: "Vokalist & Besteci // Murad'ın Oğlu",
    avatar: "assets/img/char_kenan.png",
    bio: "Herkes onun sadece şarkı yaptığını sanıyordu. Göksu'nun parasıyla stüdyoyu doldururken babasının suskunluğuna karşı bağırıyor.",
    lyrics: "Bu Şarkıyı Kaybedemem:\n\n“Duvarlarda izin\nOdalarda sesin\nGeçti modası artık o eski senin...”",
    intro: "Herkes benim sadece şarkı yaptığımı sanıyor... Ne soracaksan sor, Göksu gelmeden.",
    tree: {
      root: {
        text: "Herkes benim sadece şarkı yaptığımı sanıyor... Ne soracaksan sor, Göksu gelmeden.",
        options: [
          {
            label: "Neden Göksu'yla çalışıyorsun?",
            next: "neden_goksu"
          },
          {
            label: "Bu şarkı kimin için?",
            next: "sarki_kimin"
          },
          {
            label: "Baban yaptıklarını biliyor mu?",
            next: "baba_biliyor_mu"
          },
          {
            label: "Kerem abiyle stüdyoda ne kaydettiniz?",
            next: "ekrem_ingilizce"
          },
          {
            label: "Ata'ya yaptığın tahta araba...",
            next: "ata_araba"
          }
        ]
      },
      neden_goksu: {
        text: "Babam bana ne verdi bugüne kadar? 'Başını eğ oğlum, dikkat et oğlum.' Ben başımı eğmeyeceğim. Göksu bana stüdyoyu açtı, mikserleri koydu, yaylıları dizdi. Babamın sustuğu yerde ben bu şehre sesimi duyuracağım.",
        options: [
          {
            label: "Geri dön.",
            next: "root"
          }
        ]
      },
      sarki_kimin: {
        text: "“Duvarlarda izin / Odalarda sesin / Geçti modası artık o eski senin...” Bu şarkı hem giden anneme, hem beni bir kışla gibi büyüten babama, hem de bu şehrin unuttuğu herkese. Bu şarkıyı kaybedemem.",
        options: [
          {
            label: "Geri dön.",
            next: "root"
          }
        ]
      },
      baba_biliyor_mu: {
        text: "Babam sadece üniformasını bilir. Kapıyı kilitler, iki dakika sonra döner yine bakar. Benim ne hissettiğimi bir gün bile sormadı. Göksu'nun parasını aldığımı biliyor ama neden aldığımı asla anlamayacak.",
        options: [
          {
            label: "Geri dön.",
            next: "root"
          }
        ]
      },
      ekrem_ingilizce: {
        text: "Kerem abi stüdyoya girdiğinde İngilizce tek kelime bilmiyordu. 'Herkes bana Keremsi der... ama sen kısaca Eku de' dedi. Sözleri Türkçe okunuşla kağıda yazdım. Mikrofona geçti, öyle bir vokal bastı ki amfi titredi. Babam bana akıl verdi bugüne kadar, Kerem abi bana ses verdi.",
        options: [
          {
            label: "Geri dön.",
            next: "root"
          }
        ]
      },
      ata_araba: {
        text: "Ata stüdyonun kapısında babası Kerem'i bekliyordu bir gece. Bir tahta parçası aldım, çakımla yonttum, arkasına da kırmızı akrilik çektim. 'Bu senin yarış araban' dedim. O çocuğun gözlerindeki ışık, Göksu'nun bütün çeklerinden daha gerçekti.",
        options: [
          {
            label: "Geri dön.",
            next: "root"
          }
        ]
      }
    }
  },

  ekrem: {
    name: "Kerem",
    age: 33,
    title: "Sincanlı Dealer // 'Herkes Bana Keremsi Der...' // Ata'nın Babası",
    avatar: "assets/img/char_ekrem.png",
    bio: "33 yaşında. 'Kerem ben… Si ile… Herkes bana Keremsi der... ama sen kısaca Eku diyebilirsin.' Sincan sokak dilini taşır. Sezgisiyle yaşayan, Murad'a 'Ben sana gerisini göstereceğim' diyen, Ata'nın babası.",
    intro: "Sor bakam. Kerem ben… 'Si' ile… Herkes bana Keremsi der... ama sen kısaca Eku diyebilirsin.",
    tree: {
      root: {
        text: "Sor bakam. Kerem ben… 'Si' ile… Herkes bana Keremsi der... ama sen kısaca Eku diyebilirsin.",
        options: [
          {
            label: "Murad'ı ilk gördüğünde ne düşündün?",
            next: "murat_ilk_gorus"
          },
          {
            label: "Sen polisle niye dans ediyorsun?",
            next: "polisle_dans"
          },
          {
            label: "Ne iş yapıyorsun?",
            next: "ne_is_yapiyorsun"
          },
          {
            label: "Ata nasıl bir çocuk?",
            next: "ata_nasil"
          },
          {
            label: "Bahar senin için kim? Neden ona güveniyorsun?",
            next: "bahar_guven"
          },
          {
            label: "Hapse neden girdin?",
            next: "hapis_spoiler"
          }
        ]
      },
      murat_ilk_gorus: {
        text: "RİTİM'in kapısından girdi, yukarı Göksu'nun odasına çıktı. Dimdik yürüyordu. Dedim bu adam buralı değil ama burayı biliyor. Sonra otoparkta önünü kestim. 'Sana gerisini göstereceğim' dedim. Baktım içim yamuk demedi. Güvendik işte.",
        options: [
          {
            label: "Geri dön.",
            next: "root"
          }
        ]
      },
      polisle_dans: {
        text: "MURAD: 'Olm, polisim ben!' dedi. Ben de tanışır gibi elimi uzattım: 'Merhaba ben de torbacı :D Kerem ben... 'Si' ile... Herkes bana Keremsi der ama sen kısaca Eku diyebilirsin.' Baktım piste girmiş odun gibi duruyor. Ensesinden tuttum: 'Öbür tarafa gitsen bara giricen yarram' dedim. Güldük, ritme girdi. Polis molis ama adamın içinde insan varmış.",
        options: [
          {
            label: "Geri dön.",
            next: "root"
          }
        ]
      },
      ne_is_yapiyorsun: {
        text: "Para var... Sen yoksun derim fazlasını isteyene. Sokaktayım. Ama eve gidince ellerimi üç kere yıkarım öyle koklarım Ata'yı. Kimsenin hakkını yemem, zayıfın üstüne basmam.",
        options: [
          {
            label: "Geri dön.",
            next: "root"
          }
        ]
      },
      ata_nasil: {
        text: "Ata benim oğlum. Anası öldüğünde üç yaşındaydı. Geceleri gökteki yıldıza bakıp beni bekler. Bahar geldi o eve, Ata'ya ana oldu. O çocuk bu bataklıkta tertemiz kalsın diye canımı veririm.",
        options: [
          {
            label: "Geri dön.",
            next: "root"
          }
        ]
      },
      bahar_guven: {
        text: "Bahar sadece Ata'nın annesi değil; bu şehrin hafızası. Dilek İnce'nin (Bahar) adını yaşatıyor. O kapıdan içeri girdiğinden beri bizim evimiz oldu. Birbirimizi seçtik biz.",
        options: [
          {
            label: "Geri dön.",
            next: "root"
          }
        ]
      },
      hapis_spoiler: {
        text: "Yarraam spoiler mı verek? Destek ol da çekek, izle görürsün. :D",
        isCrowdAction: true,
        actionLabel: "SUSSUZ’un çekilmesine destek ol →",
        options: [
          {
            label: "Destek Ol / Katkı Sağla",
            next: "crowd_redirect"
          },
          {
            label: "Başka soru sor.",
            next: "root"
          }
        ]
      },
      crowd_redirect: {
        text: "Eyvallah! Prodüksiyon paneline git, kostüm mü verirsin, mekan mı çözersin, para mı atarsın... Beraber çekelim bu hikayeyi.",
        options: [
          {
            label: "Geri dön.",
            next: "root"
          }
        ]
      }
    }
  },

  murat: {
    name: "Murad",
    age: 37,
    title: "Polis // 'Murad. D ile...' // Kenan'ın Biyolojik Babası",
    avatar: "assets/img/char_murat.png",
    bio: "37 yaşında. 'Murad... D ile...' diye düzeltir. 18 yaşında baba olmuş. Kontrol takıntılı ama Kerem'e karşı açıklanamaz bir güven duyan polis.",
    intro: "Murad. D ile… Ben kimseye güvenmem. Kapıyı kilitler iki dakika sonra döner bakarım.",
    tree: {
      root: {
        text: "Murad. D ile… Ben kimseye güvenmem. Kapıyı kilitler iki dakika sonra döner bakarım.",
        options: [
          {
            label: "Olm, polissin sen. Kerem'le nasıl dans ettin?",
            next: "dans_ani"
          },
          {
            label: "Tepede Kerem'le ne konuştunuz?",
            next: "tepe_ani"
          },
          {
            label: "Kenan senin oğlun mu?",
            next: "kenan_babalik"
          },
          {
            label: "Evin nerede senin?",
            next: "murat_ev_sorusu"
          }
        ]
      },
      dans_ani: {
        text: "Pistin ortasındaydım. 'Olm, polisim ben!' dedim. Elini uzattı tanışır gibi: 'Merhaba ben de torbacı :D Kerem ben... 'Si' ile... ama sen kısaca Eku de' dedi. Ensemden tutup kalabalığa soktu beni. Hayatımda ilk defa kontrol bende değildi ve garip bir şekilde ilk defa nefes aldım.",
        options: [
          {
            label: "Geri dön.",
            next: "root"
          }
        ]
      },
      tepe_ani: {
        text: "Sabah ayazında Mustang'in kaputuna yaslandık. 'Ne konuşuyorsunuz?' diye sorsan... Kerem hemen yapıştırır: 'Her şeyi anlatak da diziye ne kaldı yarraam? :D' Ama işin aslı şuydu: Ben hayatımda ilk defa bir yabancının niyetinden sıfır şüphe duydum.",
        options: [
          {
            label: "Geri dön.",
            next: "root"
          }
        ]
      },
      kenan_babalik: {
        text: "18 yaşındaydım doğduğunda. Annesi gittiğinde tek başıma kaldım. Elimde silah, belimde rozetle onu koruduğumu sandım ama onu kendimden uzaklaştırdım. Şimdi Göksu'nun parasıyla şarkı söylüyor.",
        options: [
          {
            label: "Geri dön.",
            next: "root"
          }
        ]
      },
      murat_ev_sorusu: {
        text: "Kuzey Blokları'ndaki penthouse... Şehre tepeden bakınca her şey cetvelle çizilmiş gibi duruyor ama içine girince Susuz bir bataklık gibi çekiyor adamı.",
        options: [
          {
            label: "Geri dön.",
            next: "root"
          }
        ]
      }
    }
  },

  bahar: {
    name: "Bahar",
    age: 36,
    title: "Eski Adı Deniz // Ata'nın Koruyucu Annesi",
    avatar: "assets/img/char_bahar.png",
    bio: "Trans kadın. 2006 Eryaman direnişinde katledilen Dilek İnce'nin (Bahar) adını yaşatır. 'Bazı şeyler gömülünce kaybolmaz.'",
    intro: "Gölün bu tarafı soğuktur. Mum sönünce geriye sadece isimler kalır...",
    tree: {
      root: {
        text: "Gölün bu tarafı soğuktur. Mum sönünce geriye sadece isimler kalır...",
        options: [
          {
            label: "Neden Bahar adını aldın?",
            next: "dilek_ince_gercegi"
          },
          {
            label: "Bugün neden buradasın? Bu pasta kimin için?",
            next: "mum_anlami"
          },
          {
            label: "Ata ile nasıl aile oldunuz?",
            next: "biz_bir_aileyiz"
          },
          {
            label: "Ata'ya okuduğun kitap... 'Aşk Bir Aile Yaratır'",
            next: "kitap_anlami"
          }
        ]
      },
      dilek_ince_gercegi: {
        text: "2006'da Eryaman'da evlerimizi bastılar, Balyoz Timi sürdü bizi. Direnişin öncüsü Dilek İnce'yi (Bahar) 10 Kasım 2008'de Etlik'te arabasında pompalı tüfekle vurdular. Faili meçhul bıraktılar. Ben onun adını aldım ki bu şehir onu bir daha gömemesin.",
        options: [
          {
            label: "Geri dön.",
            next: "root"
          }
        ]
      },
      mum_anlami: {
        text: "Her gün yakmıyorum bu mumu... Bugün Dilek'in doğum günü. Kendi yaptığım küçük pastayı aldım, geldim buraya. Dilek'in kanı üzerine kurulmuş bu parkta, tek başıma onun doğum günü pastasını üflüyorum. Mumu üfle... Yerin altına in. Kimlerin gömüldüğünü kendi gözlerinle gör.",
        options: [
          {
            label: "Geri dön.",
            next: "root"
          }
        ]
      },
      biz_bir_aileyiz: {
        text: "Bize 'aile' dersi verenlere inat: Biz bir aileyiz zaten. Her aile onların kabul ettiği gibi olmak zorunda değil.",
        options: [
          {
            label: "Geri dön.",
            next: "root"
          }
        ]
      },
      kitap_anlami: {
        text: "Sophie Beer'in kitabı... Her ailenin farklı olduğunu, sevginin kan bağıyla değil kalple kurulduğunu anlatıyor. Ata'ya her akşam bu kitabı okuyorum. Bu şehirdeki soğuk bakışlar, 'senin anan kim' diye soran o zalim sesler kalbini incitmesin diye... Sevginin olduğu her yer yuvadır.",
        options: [
          {
            label: "Geri dön.",
            next: "root"
          }
        ]
      }
    }
  },

  goksu: {
    name: "Göksu",
    age: 48,
    title: "RİTİM'in Sahibi // Borçlandırma Patronu",
    avatar: "assets/img/char_goksu.png",
    bio: "Koyu camlı ofisinden aşağıyı izleyen patron. 'Ben borç yazmam, hatırlarım.'",
    intro: "Muhasebe çok soru soruyor... Dönmesi gereken şey albüm değil. Ne istiyorsun?",
    tree: {
      root: {
        text: "Muhasebe çok soru soruyor... Dönmesi gereken şey albüm değil. Ne istiyorsun?",
        options: [
          {
            label: "'O zaman herkes bana borçlanır' sözün ne demek?",
            next: "borc_felsefesi"
          },
          {
            label: "Kenan'ı neden yanında tutuyorsun?",
            next: "kenan_tutma"
          },
          {
            label: "Bahar dosyasını Murat'a neden verdin?",
            next: "bahar_dosyasi"
          }
        ]
      },
      borc_felsefesi: {
        text: "Bir insanın çaresiz anında cebine koyduğun para kağıttaki senetten bin kat daha bağlayıcıdır. Kağıt yırtılır, minnet kalır. Ben borç yazmam... Hatırlarım.",
        options: [
          {
            label: "Geri dön.",
            next: "root"
          }
        ]
      },
      kenan_tutma: {
        text: "Kenan yetenekli. 28 kanal canlı yaylı istedi, verdim. Ama daha önemlisi: Kenan şarkı söyledikçe babası Murad benim kapımda hazır ola geçer.",
        options: [
          {
            label: "Geri dön.",
            next: "root"
          }
        ]
      },
      bahar_dosyasi: {
        text: "Murad 'Yarım dosya' dedi. 'Yarısı yeter' dedim. 'Acıma' dedim. Çünkü Bahar'ı gören adamın elindeki silah titrer. Ben yolu çizdim, o yürüdü.",
        options: [
          {
            label: "Geri dön.",
            next: "root"
          }
        ]
      }
    }
  },

  ata: {
    name: "Ata",
    age: 7,
    title: "Masumiyetin Şahidi // Kerem'in Oğlu",
    avatar: "assets/img/char_ata.png",
    bio: "Kerem'in 7 yaşındaki oğlu. Annesini 3 yaşında kaybetti. Nilüfer masallarıyla büyüyen masumiyet tanığı.",
    intro: "Bahar annem bana nilüfer çiçeklerini anlattı...",
    tree: {
      root: {
        text: "Bahar annem bana nilüfer çiçeklerini anlattı...",
        options: [
          {
            label: "Okulda sana ne dediler Ata?",
            next: "okul_sozu"
          },
          {
            label: "Baban gelince ne yapar?",
            next: "baba_elleri"
          },
          {
            label: "Kenan abin ne getirdi sana?",
            next: "tahta_araba"
          },
          {
            label: "Bahar annenle okuduğunuz kitap ne anlatıyor?",
            next: "kitap_ata"
          }
        ]
      },
      okul_sozu: {
        text: "Bana okulda 'senin anan babanı mı sikiyo?' dediler... Bahar anneme sordum. Ağladı, bana sarıldı. 'Biz bir aileyiz oğlum, kimseye aldırma' dedi.",
        options: [
          {
            label: "Geri dön.",
            next: "root"
          }
        ]
      },
      baba_elleri: {
        text: "Babam sabaha karşı gelir. Banyoya koşar, ellerini üç kere sabunlar. 'Sokak tozu geçsin' der, sonra sımsıkı sarılır bana. Babamın kokusunu çok seviyorum.",
        options: [
          {
            label: "Geri dön.",
            next: "root"
          }
        ]
      },
      tahta_araba: {
        text: "Kenan abi çakısıyla yonttu, arkasına da kırmızı şerit çekti. 'Büyüyünce gölün etrafında tur atacağız' dedi. Salıncakta oynarken onu sürüyorum.",
        options: [
          {
            label: "Geri dön.",
            next: "root"
          }
        ]
      },
      kitap_ata: {
        text: "'Aşk Bir Aile Yaratır'... Renkli resimleri var. Bahar annem bana 'Bizim ailemiz de sevgiyle kuruldu Ata'm' diyor. Ben en çok sayfadaki kocaman sarılan insanları seviyorum. Babam Kerem, Bahar annem ve ben... Biz de öyleyiz.",
        options: [
          {
            label: "Geri dön.",
            next: "root"
          }
        ]
      }
    }
  },

  murat_ekrem_balcony: {
    name: "Murad ve Kerem",
    age: 37,
    title: "Pist Kenarında Sahneye Bakış // 1. ve 2. Bölüm Köprüsü",
    avatar: "assets/img/char_murat.png",
    bio: "Müzik değişir. Karanlık ekranlar bir anda açılır. Dev ekranda Kenan, RİTİM logosu... Murad oğlunu sahnede görür.",
    intro: "Müzik değişiyor. Karanlık ekranlar bir anda açılıyor. Dev ekranda KENAN. RİTİM logosu. Yeni parçanın prömiyeri: HIRSIZ. İlk beat giriyor, kalabalık bağırıyor. Murad duruyor; oğlunu sahnede dev ekranda görüyor.",
    tree: {
      root: {
        text: "Müzik değişiyor. Karanlık ekranlar bir anda açılıyor. Dev ekranda KENAN. RİTİM logosu. Yeni parçanın prömiyeri. Şarkının adı: HIRSIZ. İlk beat giriyor. Kalabalık bağırıyor. Şarkı yüzeyde, tehlikeli birine duyulan çekimi anlatıyor. Nakaratta 'hırsız' kelimesi ritmik bir hook gibi dönüyor. Murad duruyor. Oğlunu ekranda görüyor. Kerem Murad'ın yüzündeki değişimi fark ediyor.",
        options: [
          {
            label: "KEREM: 'Hayırdır?'",
            next: "oglum_ani"
          }
        ]
      },
      oglum_ani: {
        text: "MURAD: 'Oğlum.' \n\nKerem ekrana bakar. Sonra tekrar Murad'a: \nKEREM: 'Harbi mi?' \n\nMurad başını sallar. Kerem Kenan'ı daha dikkatli inceler: \nKEREM: 'İyiymiş.'",
        options: [
          {
            label: "MURAD: 'Çok istedi...'",
            next: "cok_istedi"
          }
        ]
      },
      cok_istedi: {
        text: "KEREM: 'Neyi?' \n\nMurad sahneyi gösterir: \nMURAD: 'Bunu.' \n\nMurad'ın gururunun içine başka bir duygu karışır. Ekranın köşesinde RİTİM logosu parlar. \n\nMURAD: 'Ben yapamadım.' \nKEREM: 'O yaptı.' \nMURAD: 'Hayır... Göksu yaptı.' \n\nBunu söyleyince kendi sesi onu rahatsız eder. Kerem düzeltmez; henüz o cümlenin yanlış mı eksik mi olduğunu kendisi de bilmemektedir.",
        options: [
          {
            label: "Nakarat geliyor — Kerem elini uzatır...",
            next: "surat_asma"
          }
        ]
      },
      surat_asma: {
        text: "Nakarat geliyor. Kalabalık coşuyor. Kerem elini uzatır: \n\nKEREM: 'Oğlunun şarkısında surat asma. Ayıp lan çocuğa!' \n\nMurad güler. Kerem onun elini tutup gülerek yeniden pistin içine çeker.",
        options: [
          {
            label: "⚡ Murad'ı Dansa Götür →",
            next: "dancefloor_redirect"
          }
        ]
      }
    }
  }
};

// Geriye dönük uyumluluk ve takma adlar (Aliases)
window.SUSSUZ_DIALOGUES.kerem = window.SUSSUZ_DIALOGUES.ekrem;
window.SUSSUZ_DIALOGUES.murad = window.SUSSUZ_DIALOGUES.murat;

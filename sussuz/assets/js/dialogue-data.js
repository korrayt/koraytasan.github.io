/**
 * SUSSUZ — Deterministik Senaryo & Diyalog Motoru (Kanonik Genişletilmiş Sürüm)
 * Karakterler: Bahar, Ekrem, Göksu, Murat, Kenan, Ata
 * SIFIR LLM / Generative AI — Senaryo V3 ve Topluluk Arkı replikleri.
 */

window.SUSSUZ_DIALOGUES = {
  kenan: {
    name: "Kenan",
    age: 19,
    title: "Vokalist & Besteci // Murat'ın Oğlu",
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
            label: "Ekrem abiyle stüdyoda ne kaydettiniz?",
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
        text: "Ekrem abi stüdyoya girdiğinde İngilizce tek kelime bilmiyordu. Sözleri Türkçe okunuşla kağıda yazdım. Mikrofona geçti, öyle bir vokal bastı ki amfi titredi. Babam bana akıl verdi bugüne kadar, Ekrem abi bana ses verdi.",
        options: [
          {
            label: "Geri dön.",
            next: "root"
          }
        ]
      },
      ata_araba: {
        text: "Ata stüdyonun kapısında babasını bekliyordu bir gece. Bir tahta parçası aldım, çakımla yonttum, arkasına da kırmızı akrilik çektim. 'Bu senin yarış araban' dedim. O çocuğun gözlerindeki ışık, Göksu'nun bütün çeklerinden daha gerçekti.",
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
    name: "Ekrem (Yusuf)",
    age: 33,
    title: "Sincanlı Dealer // Sokak Koruyucusu",
    avatar: "assets/img/char_ekrem.png",
    bio: "Sincan sokak dilini taşır. Sezgisiyle yaşayan, Murat'a 'Ben sana gerisini göstereceğim' diyen, Ata'nın babası.",
    intro: "Sor bakam.",
    tree: {
      root: {
        text: "Sor bakam.",
        options: [
          {
            label: "Murat'ı ilk gördüğünde ne düşündün?",
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
        text: "MURAT: 'Olm, polisim ben!' dedi. Ben de dedim: 'Ben de torbacı. :D' Baktım piste girmiş odun gibi duruyor. Ensesinden tuttum: 'Öbür tarafa gitsen bara giricen yarram' dedim. Güldük, ritme girdi. Polis molis ama adamın içinde insan varmış.",
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
    name: "Murat",
    age: 37,
    title: "Polis // Kenan'ın Biyolojik Babası",
    avatar: "assets/img/char_murat.png",
    bio: "18 yaşında baba olmuş. Kontrol takıntılı ama Ekrem'e karşı açıklanamaz bir güven duyan polis.",
    intro: "Ben kimseye güvenmem. Kapıyı kilitler iki dakika sonra döner bakarım.",
    tree: {
      root: {
        text: "Ben kimseye güvenmem. Kapıyı kilitler iki dakika sonra döner bakarım.",
        options: [
          {
            label: "Olm, polissin sen. Ekrem'le nasıl dans ettin?",
            next: "dans_ani"
          },
          {
            label: "Tepede Ekrem'le ne konuştunuz?",
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
        text: "Pistin ortasındaydım. 'Olm, polisim ben!' dedim. 'Ben de torbacı :D' dedi. Ensemden tutup kalabalığa soktu beni. Hayatımda ilk defa kontrol bende değildi ve garip bir şekilde ilk defa nefes aldım.",
        options: [
          {
            label: "Geri dön.",
            next: "root"
          }
        ]
      },
      tepe_ani: {
        text: "Sabah ayazında kaputa yaslandık. 'Ne konuşuyorsunuz?' diye sorsan... Ekrem hemen yapıştırır: 'Her şeyi anlatak da diziye ne kaldı yarraam? :D' Ama işin aslı şuydu: Ben hayatımda ilk defa bir yabancının niyetinden sıfır şüphe duydum.",
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
        text: "Ev mi? Evi de mi biz bulak müdür? :D Prodüksiyon ekibi hala Ankara'da mekan arıyor. Bildiğin bir yer varsa mekanı sen öner.",
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
            label: "Ata ve Kenan ile nasıl bir aile oldunuz?",
            next: "biz_bir_aileyiz"
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
        text: "Bize 'aile' dersi verenlere inat: Biz bir aileyiz zaten. Her aile onların kabul ettiği gibi olmak zorunda değil. Ata'nın saçı, Kenan'ın şarkısı, Ekrem'in sokak çilesi... Birbirimizi seçtik.",
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
            label: "Bahar dosyasını Tekin'e neden verdin?",
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
        text: "Kenan yetenekli. 28 kanal canlı yaylı istedi, verdim. Ama daha önemlisi: Kenan şarkı söyledikçe babası Murat benim kapımda hazır ola geçer.",
        options: [
          {
            label: "Geri dön.",
            next: "root"
          }
        ]
      },
      bahar_dosyasi: {
        text: "Tekin 'Yarım dosya' dedi. 'Yarısı yeter' dedim. 'Acıma' dedim. Çünkü Bahar'ı gören adamın elindeki silah titrer. Ben yolu çizdim, o yürüdü.",
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
    title: "Masumiyetin Şahidi // Ekrem'in Oğlu",
    avatar: "assets/img/char_ata.png",
    bio: "Ekrem'in 7 yaşındaki oğlu. Annesini 3 yaşında kaybetti. Nilüfer masallarıyla büyüyen masumiyet tanığı.",
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
      }
    }
  }
};

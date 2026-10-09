// MAGNUM OPUS - The Ultimate Alchemist Engine
// Core Interactive Logic & Universal Search Engine (v6.0 Comprehensive Master Edition)

// 1. COMPREHENSIVE SEARCH DATABASE (Historical Books, Recipes, Concepts, Survival Syntheses)
const SEARCH_DATABASE = [
  {
    id: "book-tabula-smaragdina",
    type: "Tarihi Kitap & El Yazması",
    typeClass: "type-book",
    title: "Tabula Smaragdina (Zümrüt Tablet)",
    author: "Hermes Trismegistus",
    era: "Antik Mısır / Helenistik Dönem",
    keywords: ["zümrüt tablet", "hermes", "yukarıda olan aşağıda olan", "büyük eser", "güneş baba", "ay anne", "rüzgar", "toprak", "tek bir şey"],
    summary: "Batı simyasının ve Hermetik doğa felsefesinin en kutsal kurucu metni. Mikrokozmos ile makrokozmosun birliğini ve evrensel dönüşüm aksiyomunu ilan eder.",
    full_content: "'Quod est inferius est sicut quod est superius, et quod est superius est sicut quod est inferius, ad perpetranda miracula rei unius.' (Aşağıda olan neyse yukarıda olan da odur; tek bir şeyin mucizesini gerçekleştirmek için).\n\nGüneş onun babasıdır, Ay anasıdır, Rüzgar onu karnında taşımıştır, Toprak onu beslemiştir. Tüm dünyanın yetkinliğinin kaynağı buradadır. Toprağı ateşten, ince olanı kaba olandan büyük bir ustalıkla ayır. Yeryüzünden göğe yükselir ve yeniden yeryüzüne iner, böylece hem üstün hem de aşağıdakilerin gücünü bünyesinde birleştirir.\n\nSir Isaac Newton dahil tarihin en büyük bilginleri tarafından incelenmiş ve tercüme edilmiştir.",
    citation: "Corpus Hermeticum & Newton Keynes MS 28"
  },
  {
    "id": "book-mutus-liber",
    "type": "Tarihi Kitap & El Yazması",
    "typeClass": "type-book",
    title: "Mutus Liber (Sessiz Kitap, 1677)",
    "author": "Altus (Jacob Saulat de Marez)",
    "era": "1677 / Fransa",
    "keywords": ["mutus liber", "sessiz kitap", "çiy", "mayıs çiyi", "soror mystica", "frater", "güneş ve ay enerjisi", "bain-marie", "athanor"],
    "summary": "Neredeyse hiç metin içermeyen, 15 simyasal gravürden oluşan başyapıt. İlkbahar ekinoksunda çiy toplama sanatını ve Güneş/Ay kozmik ışınlarının sıvılaştırılmasını anlatır.",
    "full_content": "Mutus Liber, Büyük Eser'in (Magnum Opus) kelimeler olmadan yalnızca görsel sembolizmle anlatıldığı en esrarengiz eserdir.\n\nGravürlerde simyacı (Frater) ve kadın çalışma arkadaşı (Soror Mystica), Mayıs ayında kırlara keten çarşaflar gererek sabah çiy damlalarını toplar. Bu çiy suyu, Güneş ve Ay'ın göksel etkilerini taşıyan evrensel bir çözücüdür. Suyu süzdükten sonra çifte su banyosunda (Bain-Marie) ve Athanor fırınında kırk gün boyunca dinlendirerek metalleri ve bitkisel özleri açacak canlandırılmış 'Göksel Su' (Aqua Coelestis) elde edilir.",
    "citation": "La Rochelle, 1677 / Bibliotheque Nationale de France"
  },
  {
    "id": "book-splendor-solis",
    "type": "Tarihi Kitap & El Yazması",
    "typeClass": "type-book",
    title: "Splendor Solis (Güneşin Görkemi, 1582)",
    "author": "Salomon Trismosin (Paracelsus'un Ustası)",
    "era": "1582 / Almanya & Londra",
    "keywords": ["splendor solis", "güneşin görkemi", "trismosin", "kızıl aslan", "tavuskuşu kuyruğu", "anka kuşu", "pelikan", "cam kap", "athanor"],
    "summary": "Simya tarihinin en ihtişamlı 22 renkli minyatürünü içeren el yazması. Maddenin cam damıtma kapları içinde renk değiştirerek Felsefe Taşına olgunlaşmasını gösterir.",
    "full_content": "Splendor Solis, simyasal fırının içinde gerçekleşen renk evrelerini göz kamaştırıcı minyatürlerle resmeder: Siyah Kuzgun (Nigredo), Beyaz Kuğu (Albedo), Tavuskuşu Kuyruğu (Cauda Pavonis - çok renkli ara aşama) ve Kızıl Aslan / Anka Kuşu (Rubedo).\n\nTrismosin, metallerin doğada yer altında güneş ışınlarının etkisiyle binlerce yılda olgunlaştığını, simyacının ise doğru laboratuvar sıcaklığı ve felsefi cıva ile bu süreci birkaç ayda tamamlayabileceğini öğretir. Britanya Kütüphanesi'nde (Harley MS 3469) muhafaza edilmektedir.",
    "citation": "British Library Harley MS 3469"
  },
  {
    "id": "book-newton-chymistry",
    "type": "Tarihi Kitap & El Yazması",
    "typeClass": "type-book",
    title: "Sir Isaac Newton Simya Defterleri (Keynes & Portsmouth MSS)",
    "author": "Sir Isaac Newton",
    "era": "1669–1696 / Cambridge, İngiltere",
    "keywords": ["newton", "keynes", "antimon yıldız regulusu", "star regulus", "stibnit", "felsefi cıva", "vejetatif ilke", "chymistry", "starkey", "philalethes"],
    "summary": "Modern fiziğin kurucusunun 1 milyondan fazla kelimelik simya laboratuvar günlükleri. Kütleçekimin ardındaki ilahi yaşamsal ilkeyi Antimon Yıldız Regulusu ile aramıştır.",
    "full_content": "Newton, Cambridge'deki Trinity College laboratuvarında günlerce uykusuz kalarak antimon, cıva, güherçile ve demir ile yüzlerce deney yaptı.\n\nEirenaeus Philalethes'in izinden giderek, ham stibnit cevherini demir telleri ve potasyum nitrat ile 1050°C'de indirgeyerek yüzeyinde kusursuz yıldız kristalleri açan 'Star Regulus of Antimony' metalini sentezledi. Newton'a göre evren salt mekanik bir saat düzeneği değildi; maddeye canlılık, çekim ve form veren gizil bir 'vejetatif ruh' mevcuttu. Bu defterler günümüzde Indiana Üniversitesi ve Cambridge Dijital Kütüphanesi tarafından dünyaya açılmıştır.",
    "citation": "King's College Cambridge / Indiana University Chymistry Project"
  },
  {
    "id": "book-kitab-al-kimya",
    "type": "Tarihi Kitap & El Yazması",
    "typeClass": "type-book",
    title: "Kitab al-Kimya & Kitab al-Sabe'en (Yetmiş Kitap)",
    "author": "Câbir bin Hayyan (Geber)",
    "era": "M.S. 776–803 / Bağdat & Kufe",
    "keywords": ["cabir bin hayyan", "geber", "kitab al-kimya", "mizan teorisi", "takvin", "kral suyu", "aqua regia", "imbik", "alembic", "sayısal denge 17 28"],
    "summary": "Modern kimyanın doğuşunu müjdeleyen, simyayı ölçü, terazi ve niceliksel matematiksel dizilere bağlayan anıtsal İslam külliyatı.",
    "full_content": "Câbir bin Hayyan, simyayı soyut bir mistisizmden çıkarıp deneysel laboratuvar disiplinine dönüştürdü.\n\n'Mizan' (Denge) teorisiyle maddelerin 1, 3, 5, 8 sayı oranlarından türetilen 17 ve 28 sayısal dengeleriyle inşa edildiğini öne sürdü. Laboratuvarda organik yaşamı ve maddeleri yapay olarak üretme girişimi olan 'Takvin' metodunu kurdu. Modern damıtmanın temeli olan imbik (al-anbiq) aparatını tasarladı; nitrik asit, hidroklorik asit ve altını eriten Kral Suyu'nu (Aqua Regia) tarihte ilk kez sentezledi.",
    "citation": "Süleymaniye Kütüphanesi & NLM Arabic Medical MSS"
  },
  {
    "id": "book-daozang-neidan",
    "type": "Tarihi Kitap & El Yazması",
    "typeClass": "type-book",
    title: "Daozang: Cantong Qi & Neidan Külliyatı",
    "author": "Wei Boyang & Taocu Üstatlar",
    "era": "M.S. 142 – Song Hanedanlığı / Çin",
    "keywords": ["daozang", "neidan", "waidan", "üç hazine", "sanbao", "jing", "qi", "shen", "tan-t'ien", "huang-t'ing", "zencefre", "ölümsüzlük"],
    "summary": "Çin Taocu simyasının en eski ve kapsamlı külliyatı. Dış simya (Waidan / zencefre iksirleri) ve içsel beden simyasını (Neidan / Jing-Qi-Shen rafinasyonu) içerir.",
    "full_content": "Zhouyi Cantong Qi ('Üçlerin Birliği Mührü'), dünyanın günümüze ulaşan en eski simya kitabı kabul edilir.\n\nTaocu simyacılar başlangıçta zencefre (cıva sülfür) ve kurşunu fırınlarda pişirerek fiziksel ölümsüzlük iksiri (Waidan) üretmeye çalıştılar. Daha sonra bu sürecin insanın kendi enerjetik bedeninde gerçekleşmesi gerektiğini keşfederek Neidan (İçsel Simya) sistemini kurdular. Alt Cıva Tarlasında (Tan-t'ien) fiziksel cinsel öz (Jing) yaşam enerjisine (Qi) dönüştürülür; orta merkezde (Sarı Avlu - Huang-t'ing) Qi ruhsal bilince (Shen) rafine edilir ve nihayetinde Shen boşluğa (Dao) ulaşarak ölümsüz saf bilinç doğar.",
    "citation": "Daozang Külliyatı / Joseph Needham Vol 5 Part 2"
  },
  {
    "id": "book-rasaratna-samuccaya",
    "type": "Tarihi Kitap & El Yazması",
    "typeClass": "type-book",
    title: "Rasaratna Samuccaya & Rasa Vidya",
    "author": "Acharya Nagarjuna & Vagbhata",
    "era": "M.S. 8. – 13. Yüzyıl / Hindistan",
    "keywords": ["rasa shastra", "nagarjuna", "parada", "gandhaka", "samskara", "bhasma", "swarna bhasma", "ayurveda", "deha-vada", "dhatu-vada"],
    "summary": "Ayurveda tıbbının ve Hint cıva simyasının şaheseri. Cıvanın 18 aşamalı saflaştırılması ve metallerin hücresel gençleştirici Bhasma küllerine dönüştürülmesi.",
    "full_content": "Hint simyasında cıva (Parada) Tanrı Shiva'nın ilahi tohumu, kükürt (Gandhaka) ise Tanrıça Parvati'nin yaratıcı enerjisidir.\n\nEser, insan bedenini hücresel düzeyde ölümsüz kılan Deha-vada ile metalleri altına dönüştüren Dhatu-vada ilmini birleştirir. Cıva, 18 aşamalı Astadasa Samskara (buharlaştırma, ezme, arındırma, doyurma, sabitleme) işlemlerinden geçirilerek toksisitesini tamamen kaybeder. Altın yaprakları bitkisel sularla 42 kez kalsine edilerek suda batmayan, doğrudan hücre zarından geçen nano-ölçekli Swarna Bhasma ilacına dönüşür.",
    "citation": "Rasa Shastra Külliyatı / PubMed PMC5255965"
  },
  {
    "id": "book-flamel-hieroglyphics",
    "type": "Tarihi Kitap & El Yazması",
    "typeClass": "type-book",
    title: "Exposition of the Hieroglyphical Figures (1624)",
    "author": "Nicolas Flamel",
    "era": "14. – 17. Yüzyıl / Paris",
    "keywords": ["nicolas flamel", "perenelle", "felsefe taşı", "yahudi abraham", "iki ejderha", "hiyeroglif", "masumlar mezarlığı"],
    "summary": "Efsanevi Parisli katip Nicolas Flamel'in Felsefe Taşı'nı buluşunu ve Paris Masumlar Mezarlığı kemerine kazıttığı hiyeroglif figürlerin alegorik çözümü.",
    "full_content": "Flamel, Yahudi Abraham'a ait 21 sayfalık esrarengiz bir kitap bulduğunu ve eşi Perenelle ile birlikte 21 yıl süren çalışmanın ardından 1382 yılında cıvayı önce gümüşe, ardından saf altına dönüştürdüğünü anlatır.\n\nFlamel'in Paris'teki bir kilise kemerine kazıttığı sembollerde iki ejderha dövüşür: Kanatlı ejderha uçucu cıvayı (ruh), kanatsız ejderha ise sabit kükürtü (beden) temsil eder. İkisi birbirinin kuyruğunu yutarak dengelendiğinde Felsefe Taşı doğar.",
    "citation": "Paris, 1612 / London, 1624"
  },
  {
    "id": "book-maria-prophetissa",
    "type": "Tarihi Kitap & El Yazması",
    "typeClass": "type-book",
    title: "Maria Prophetissa Laboratuvar Fragmanları",
    "author": "Maria Prophetissa (Yahudi Meryem)",
    "era": "M.S. 1. – 3. Yüzyıl / İskenderiye",
    "keywords": ["maria prophetissa", "benmari", "bain-marie", "kerotakis", "tribikos", "maria aksiyomu", "iskenderiye", "laboratuvar aletleri"],
    "summary": "Pratik kimya laboratuvarının kurucusunun metinleri. Benmari (Bain-Marie) su banyosu, Kerotakis fırını ve meşhur Maria Aksiyomu.",
    "full_content": "'Bir iki olur, iki üç olur ve üçüncünün aracılığıyla dördüncü tek bir şey haline gelir.' Maria Aksiyomu, kutupluluğun ve elemental birleşmenin kanunudur.\n\nMaria, kimyagerlerin doğrudan ateşte maddeleri yakmasını önlemek için çifte su banyosunu (Bain-Marie) icat etmiş, uçucu cıva buharlarını hapsetmek için Kerotakis cihazını ve üç borulu damıtma aparatı Tribikos'u tasarlayarak modern damıtmanın temellerini atmıştır.",
    "citation": "Zosimos of Panopolis Koleksiyonu / Raphael Patai"
  },
  {
    "id": "book-jung-psychology-alchemy",
    "type": "Tarihi Kitap & El Yazması",
    "typeClass": "type-book",
    title: "Psychology and Alchemy (Psikoloji ve Simya, 1944)",
    "author": "Carl Gustav Jung",
    "era": "1944 / İsviçre",
    "keywords": ["carl jung", "bireyleşme", "individuation", "gölge", "shadow", "anima animus", "benlik", "self", "nigredo", "rubedo", "arketipler"],
    "summary": "Psikanalizin zirvesi: Simyacıların potada gördüğü renklerin ve sembollerin, insan bilinçdışının bireyleşme (Individuation) sürecinin maddeye izdüşümü olduğunu kanıtlayan eser.",
    "full_content": "Jung, yüzlerce simya elyazmasını ve rüya sembolünü karşılaştırarak simyanın ilkel bir kimyadan ibaret olmadığını, insanın kendi psişik bütünlüğüne ulaşma çabası olduğunu gösterdi.\n\nSimyasal Nigredo (Kararma), kişinin kendi bilinçdışı Gölgesi (Shadow) ile acı verici yüzleşmesidir; Albedo (Beyazlama), Anima ve Animus kutuplarının entegrasyonu ve zihinsel arınmadır; Rubedo (Kızarma) ise Benliğin (The Self) doğuşu ve zıtların evliliğidir (Coniunctio Oppositorum). Felsefe Taşı, kendini tam olarak gerçekleştirmiş aydınlanmış insanın simgesidir.",
    "citation": "Bollingen Series XX / Princeton University Press"
  },
  {
    "id": "recipe-star-regulus",
    "type": "Formül & Reçete",
    "typeClass": "type-recipe",
    title: "Sir Isaac Newton'ın Antimon Yıldız Regulusu",
    "author": "Sir Isaac Newton (Keynes MSS)",
    "era": "17. Yüzyıl",
    "keywords": ["antimon", "regulus", "stibnit", "demir", "güherçile", "star regulus", "felsefi cıva", "kristal yıldız"],
    "summary": "Stibnit, akkor demir ve güherçile ile metalleri açan ve Felsefi Cıvayı hazırlayan yıldız kristalli metalik regulus.",
    "full_content": "4 kısım Stibnit (Sb2S3), 2 kısım demir çivi, 1 kısım güherçile (KNO3) ve 1 kısım tartar tuzu. Demir 1050°C'de akkor hale getirilir, stibnit eklenerek kükürt demire bağlanır. Güherçile cürufu yakar. Konik demir kapta sarsıntısız çok yavaş soğutulduğunda yüzeyinde kusursuz gümüşi yıldız kolları belirir.",
    "citation": "Keynes MS 28 & 02_RECIPES_AND_METHODS_COMPENDIUM.md"
  },
  {
    "id": "recipe-swarna-bhasma",
    "type": "Formül & Reçete",
    "typeClass": "type-recipe",
    title: "Ayurvedik Swarna Bhasma (Nano-Altın Külü İksiri)",
    "author": "Acharya Nagarjuna (Rasa Shastra)",
    "era": "Antik Hint",
    "keywords": ["swarna bhasma", "altın külü", "nano altın", "puta", "nagarjuna", "kajjali", "aloe vera", "ayurveda", "hücresel yenilenme"],
    "summary": "Saf altının 42 puta kalsinasyon döngüsü ile 10-50 nanometre biyo-uyumlu hücresel küle dönüştürülmesi.",
    "full_content": "24 ayar saf altın yaprakları kızdırılıp bitki sularında 7 kez söndürülür. Kajjali (cıva-kükürt macunu) ve Aloe vera jeli ile 3 gün taş havanda ezilir. Kurutulup iki toprak çanak arasında killi bezle mühürlenir (Sharava Samputa). 550°C'de 12 saat kalsine edilir. Bu işlem 42 kez tekrarlanır. Elde edilen toz suya atıldığında batmaz, su yüzeyinde yüzer (Varitara testi); hücresel yaşlanmayı durduran antik nano-ilaçtır.",
    "citation": "Rasaratna Samuccaya & 02_RECIPES_AND_METHODS_COMPENDIUM.md"
  },
  {
    "id": "recipe-aqua-regia",
    "type": "Formül & Reçete",
    "typeClass": "type-recipe",
    title: "Tarihsel Kral Suyu (Aqua Regia Simyasal Formülü)",
    "author": "Câbir bin Hayyan",
    "era": "İslam Altın Çağı",
    "keywords": ["kral suyu", "aqua regia", "altın çözücü", "nitrik asit", "hidroklorik asit", "cabir bin hayyan"],
    "summary": "1 hacim derişik Nitrik Asit ve 3 hacim derişik Hidroklorik Asit ile altını ve platini çözen yegane klasik asit kompleksi.",
    "full_content": "HNO3 + 3HCl -> NOCl + Cl2 + 2H2O reaksiyonu ile açığa çıkan serbest klor ve nitrozil klorür, altın atomlarını oksitler ve tetrakloroaurat kompleksine dönüştürerek altını tamamen sıvı fazda çözer. Kadim simyacılar bu sıvıyı güherçile, nişadır ve zaç yağını kuru damıtarak üretmişlerdir.",
    "citation": "Kitab al-Kimya & 02_RECIPES_AND_METHODS_COMPENDIUM.md"
  },
  {
    "id": "recipe-spagyric-rosemary",
    "type": "Formül & Reçete",
    "typeClass": "type-recipe",
    title: "Spajirik Biberiye Özütü & Kohobasyon (Cohobatio)",
    "author": "Paracelsus & Alexander von Bernus",
    "era": "Rönesans",
    "keywords": ["spajirik", "biberiye", "tria prima", "kükürt cıva tuz", "kalsinasyon", "pelikan", "cohobatio", "paracelsus"],
    "summary": "Biberiyenin uçucu yağı (Kükürt), fermente alkolü (Cıva) ve kalsine kül tuzlarının (Tuz) pelikan kabında birleşimi.",
    "full_content": "Buhar damıtmasıyla uçucu eterik yağlar ayrılır. Kalan posa bal ve suyla fermente edilip imbikten saf bitkisel etil alkol damıtılır. Kalan lifler 600°C'de kar beyazı küle kalsine edilip suda çözünen mineral tuzlar kristalleştirilir. Üç unsur Pelikan sirkülasyon kabında birleştirilerek 40 gün 37°C'de dolaştırılır (Cohobatio).",
    "citation": "Soluna Laboratories & 02_RECIPES_AND_METHODS_COMPENDIUM.md"
  },
  {
    "id": "field-soap",
    "type": "Saha Sentezi",
    "typeClass": "type-field",
    title: "Odun Külünden Biyo-Antiseptik Potas Sabunu",
    "author": "Saha Simyası & Hayatta Kalma",
    "era": "Evrensel Kriz Metodu",
    "keywords": ["sabun", "odun külü", "kül suyu", "potas", "koh", "donyağı", "hijyen", "antiseptik", "saha simyası"],
    "summary": "Elenmiş odun külünün liçingi ile elde edilen potasyum hidroksit ve donyağının sıcak sabunlaşma reaksiyonu.",
    "full_content": "1 ölçek kül 3 ölçek suyla kaynatılıp süzülür (pH 11-12 kül suyu). 2 ölçek eritilmiş ılık yağa 1 ölçek kaynar kül suyu tek yönde çırpılarak dökülür. İz noktasına kadar 45 dk karıştırılır. Bakteri lipid zarlarını çözen cerrahi saha sabunu ve saf gliserin elde edilir.",
    "citation": "03_HARSH_CONDITION_SYNTHESIS_ENGINE.md"
  },
  {
    "id": "field-pine-cement",
    "type": "Saha Sentezi",
    "typeClass": "type-field",
    title: "Yaban Hayatı Çam Zifti Çimentosu (Doğal Epoksi)",
    "author": "Saha Simyası & Hayatta Kalma",
    "era": "Evrensel Kriz Metodu",
    "keywords": ["çam reçinesi", "kömür tozu", "epoksi", "yapıştırıcı", "su geçirmez", "mastik", "saha simyası"],
    "summary": "Diterpen reçinenin kömür mikro-lifleriyle güçlendirilmesiyle taş sertliğinde kompozit su geçirmez mastik.",
    "full_content": "4 ölçek çam reçinesi eritilir, içine 1 ölçek un inceliğinde kömür tozu ve esneklik için birkaç damla yağ eklenir. Sıcakken çatlak mataralara, alet saplarına veya tekne yarıklarına sürülür; soğuduğunda taş kadar sert, su ve darbe geçirmez bir yapı kazanır.",
    "citation": "03_HARSH_CONDITION_SYNTHESIS_ENGINE.md"
  },
  {
    "id": "field-water-filter",
    "type": "Saha Sentezi",
    "typeClass": "type-field",
    title: "Çok Kademeli Aktif Karbon Su Filtreleme Kulesi",
    "author": "Saha Simyası & Hayatta Kalma",
    "era": "Evrensel Kriz Metodu",
    "keywords": ["su filtresi", "aktif karbon", "odun kömürü", "kum", "çakıl", "su arıtma", "toksin adsorpsiyonu"],
    "summary": "Köz halindeki kömürün çatlatılması ve kum-çakıl katmanlarıyla koku, tortu ve organik zehirlerin adsorpsiyonu.",
    "full_content": "Köz halindeki odun kömürü üzerine az su atılarak çatlatılır ve pirinç büyüklüğüne ezilir. Bir kaba alttan üste: bez/lif, 5cm kum, 8cm aktif kömür, 5cm kum, 5cm çakıl dizilir. Bulanık su süzülür, ardından mikrobiyolojik sterilizasyon için 3-5 dk kaynatılır.",
    "citation": "03_HARSH_CONDITION_SYNTHESIS_ENGINE.md"
  },
  {
    "id": "concept-mizan",
    "type": "Felsefe & Kavram",
    "typeClass": "type-concept",
    title: "Câbir bin Hayyan'ın Mizan (Denge) Teorisi (17 ve 28 Sayıları)",
    "author": "Câbir bin Hayyan",
    "era": "İslam Altın Çağı",
    "keywords": ["mizan", "sayısal denge", "17", "28", "cabir bin hayyan", "takvin", "elementel oranlar"],
    "summary": "Maddelerin özelliklerinin 1, 3, 5, 8 sayı kombinasyonlarından oluşan 17 ve 28 sayısal dengeleriyle düzenlendiği niceliksel simya teorisi.",
    "full_content": "Câbir, her maddenin içinde sıcaklık, soğukluk, kuruluk ve nemlilik niteliklerinin belirli bir matematiksel dengeye (Mizan) sahip olduğunu savunmuştur. Simyacı, teraziyi kullanarak eksik niteliği ilave eder veya fazla olanı eksiltir. Bu yaklaşım modern kimyadaki stokiyometri ve değerlik kavramının tarihsel öncüsüdür.",
    "citation": "Kitab al-Mizan & 01_THE_ULTIMATE_ALCHEMIST_BOOK.md"
  },
  {
    "id": "concept-green-language",
    "type": "Felsefe & Kavram",
    "typeClass": "type-concept",
    title: "Yeşil Dil (Language of the Birds / Verba Obscura)",
    "author": "Hermetik ve Simyasal Gelenek",
    "era": "Orta Çağ & Rönesans",
    "keywords": ["yeşil dil", "verba obscura", "kuşların dili", "şifreli dil", "kızıl aslan", "yeşil ejderha", "simyasal alegoriler"],
    "summary": "Simyacıların yetkisiz kişilerden sırları korumak için kullandığı, ses benzerliklerine, mitolojik arketiplere ve sembollere dayalı ezoterik kod dili.",
    "full_content": "Yeşil Dil, aynı anda birden fazla anlama gelen zengin bir sözlüktür. Örneğin 'Yeşil Ejderha' ham antimon cevheri veya yeşil vitriyoldür; 'Kızıl Aslan' felsefi cıva ile işlenmiş altın veya kırmızı kalsine demirdir; 'Kralın Hamamda Yıkanması' altının kral suyunda çözünmesidir; 'Beyaz Kuğu' ise arınmış gümüş veya Albedo aşamasıdır.",
    "citation": "Fulcanelli / 04_THE_ULTIMATE_ALCHEMIST_GEM_PROMPT.md"
  },
  {
    "id": "concept-nuclear-transmutation",
    "type": "Modern Bilim",
    "typeClass": "type-science",
    title: "Glenn Seaborg: Bizmut'tan Altına Nükleer Transmütasyon (1980)",
    "author": "Glenn T. Seaborg (LBNL)",
    "era": "1980 / Modern Bilim",
    "keywords": ["glenn seaborg", "nükleer transmütasyon", "bizmut altın", "parçacık hızlandırıcı", "bevalac", "lbnl", "fiziksel simya"],
    "summary": "Lawrence Berkeley Ulusal Laboratuvarı'nda Bizmut-209 çekirdeğinden proton koparılarak laboratuvarda altın izotopları üretilmesi.",
    "full_content": "1980 yılında Glenn Seaborg ve ekibi, relativistik karbon ve neon iyonlarını Bizmut-209 hedefine çarptırarak çekirdekten 4 proton söktü ve Au-197 altın atomları üretti. Süreç aşırı maliyetli olduğu için ticari olmasa da, kadim simyacıların kurşun ve metalleri altına dönüştürme rüyasının modern fizikte kesin olarak mümkün olduğunu kanıtladı.",
    "citation": "American Chemical Society (1980) & OSTI ID 5285744"
  }
];

// 2. MATERIALS FOR THE HARSH CONDITION FIELD ENGINE
const ALCHEMICAL_MATERIALS = [
  {
    id: "wood_ash",
    name: "Odun Külü",
    alchemical: "Calx Ligni / Sal Fixum",
    formula: "K2CO3 + CaO + MgO",
    role: "Güçlü alkali baz, kül suyu eldesi, sabunlaşma ajanı, mineral tuz kaynağı."
  },
  {
    id: "charcoal",
    name: "Odun Kömürü",
    alchemical: "Carbo Vegetabilis / Nigredo",
    formula: "C (Amorf Karbon)",
    role: "Toksin adsorbanı, su filtresi katmanı, kompozit güçlendirici mikro-elyaf."
  },
  {
    id: "sand",
    name: "Kuvars Kumu",
    alchemical: "Arena Silicea",
    formula: "SiO2",
    role: "Mekanik tortu süzgeci, refrakter harç agregası, cam yapımı hammaddesi."
  },
  {
    id: "clay",
    name: "Killi Toprak / Balçık",
    alchemical: "Terra Figulina",
    formula: "Al2O3 · 2SiO2 · 2H2O",
    role: "Seramik bağlayıcı, 1000°C fırın izolasyonu, toksin bağlama."
  },
  {
    id: "pine_resin",
    name: "Çam Reçinesi",
    alchemical: "Resina Pini / Gumma Ignis",
    formula: "Abietik Asit Esterleri",
    role: "Doğal mastik, su geçirmez zift yapıştırıcı, antifungal koruyucu."
  },
  {
    id: "water",
    name: "Su (Ham veya Yağmur)",
    alchemical: "Aqua Communis / Aqua Pluvia",
    formula: "H2O",
    role: "Evrensel çözücü, liçing (özütleme) sıvısı, hidroliz ve rehidrasyon ortamı."
  },
  {
    id: "fats_oils",
    name: "Doğal Yağlar / Donyağı",
    alchemical: "Pinguedo / Oleum Vivum",
    formula: "Trigliseritler (R-COO)3-C3H5",
    role: "Sabun üretimi, yakıt, esneklik verici bağlayıcı, merhem taşıyıcısı."
  },
  {
    id: "salt",
    name: "Tuz (Kaya / Deniz)",
    alchemical: "Sal Commune / Halite",
    formula: "NaCl",
    role: "Elektrolit dengesi, hücre hidrasyonu, ozmotik koruma ve kurutma."
  },
  {
    id: "iron_rust",
    name: "Paslı Demir / Hurda",
    alchemical: "Mars Rubigo / Calx Martis",
    formula: "Fe2O3 · nH2O",
    role: "Demir iyonu kaynağı, siyah gallat mürekkebi pigmenti, boya mordantı."
  },
  {
    id: "tannin_bark",
    name: "Meşe Kabuğu / Mazı / Çay",
    alchemical: "Cortex Quercus / Gallae",
    formula: "Polifenolik Tanninler",
    role: "Büzücü kanama durdurucu, kalıcı mürekkep taneni, deri tabaklama."
  },
  {
    id: "acid_vinegar",
    name: "Sirke / Ekşi Meyve",
    alchemical: "Acetum / Acidum Citricum",
    formula: "CH3COOH / Sitrik Asit",
    role: "Asit reaksiyonları, pas çözücü, meyve asidi ekstraktörü."
  },
  {
    id: "honey_sugar",
    name: "Bal / Şeker",
    alchemical: "Mel Purum / Saccharum",
    formula: "C6H12O6 (Glikoz & Fruktoz)",
    role: "Yara pansumanı (ozmotik antibakteriyel), rehidrasyon glikozu."
  },
  {
    id: "may_dew",
    name: "Mayıs Çiy Suyu",
    alchemical: "Aqua Roris / Flos Caeli",
    formula: "H2O + Eser Amonyum İyonları",
    role: "Mutus Liber evrensel çözücüsü, spajirik canlandırma suyu."
  },
  {
    id: "potassium_nitrate",
    name: "Güherçile (Salpetre)",
    alchemical: "Sal Nitri / Nitrum",
    formula: "KNO3",
    role: "Güçlü oksitleyici, cüruf yakıcı akı, Newton regulus arındırıcısı."
  }
];

// 3. FIELD SURVIVAL REACTIONS
const SURVIVAL_REACTIONS = [
  {
    id: "syn-soap",
    name: "Biyo-Antiseptik Potas Sabunu (Saha Arap Sabunu)",
    category: "Hijyen & Tıp",
    required: ["wood_ash", "water", "fats_oils"],
    summary: "Odun külündeki potasyum hidroksit ile yağların sıcak sabunlaşma reaksiyonu.",
    field_utility: "Salgın hastalıklardan korunma, cerrahi hijyen, açık yara etrafını temizleme.",
    steps: [
      "1 ölçek odun külünü 3 ölçek suyla 30 dk kaynatıp süzerek güçlü alkali kül suyu elde edin.",
      "Kül suyuna çiğ patates veya yumurta atarak yoğunluğu test edin (yüzüyorsa hazırdır).",
      "2 ölçek ılık yağa 1 ölçek kaynar kül suyunu azar azar dairesel çırparak dökün.",
      "Muhallebi kıvamı (iz noktası) oluşana kadar 45-60 dk karıştırın ve dinlendirin."
    ]
  },
  {
    id: "syn-water-filter",
    name: "Çok Kademeli Aktif Karbon Su Filtreleme Kulesi",
    category: "Hayati Yaşam Desteği",
    required: ["charcoal", "sand", "water"],
    summary: "Mekanik tortu süzgeci ve gözenekli amorf karbon adsorpsiyonu.",
    field_utility: "Bulanık nehir veya göl sularını koku ve organik zehirlerden arındırma.",
    steps: [
      "Köz halindeki odun kömürünü üzerine az su atıp çatlatarak pirinç tanesi boyuna ezin.",
      "Delikli kaba alttan üste: Pamuk/lif, 5 cm ince kum, 8 cm ezilmiş kömür, 5 cm kum dizin.",
      "Bulanık suyu üstten dökün; yerçekimiyle süzülen berrak suyu toplayın.",
      "Hayati Kural: Süzülen suyu mikrop sterilizasyonu için en az 3-5 dakika kaynatın."
    ]
  },
  {
    id: "syn-pine-cement",
    name: "Yaban Hayatı Çam Zifti Çimentosu (Doğal Epoksi)",
    category: "Yapı & Malzeme",
    required: ["pine_resin", "charcoal"],
    summary: "Diterpen reçinenin kömür mikro-lifleriyle kompozitleştirilmesi.",
    field_utility: "Kırık alet onarımı, mızrak/ok ucu sabitleme, matara ve tekne su yalıtımı.",
    steps: [
      "Çam reçinesini metal bir kapta kısık ateşte yavaşça eritip tortusunu süzün.",
      "Ayrı bir yerde odun kömürünü pudra kıvamına gelene kadar ezin.",
      "Erimiş reçineye (4 ölçek) kömür tozunu (1 ölçek) ekleyin (varsa birkaç damla yağ katın).",
      "Sıcakken yarık veya eklem yerlerine sürün; soğuduğunda taş kadar sert ve su geçirmez olur."
    ]
  },
  {
    id: "syn-iron-ink",
    name: "Kalıcı Arşiv Demir-Tanen Mürekkebi",
    category: "İletişim & Belgeleme",
    required: ["iron_rust", "tannin_bark", "acid_vinegar", "water"],
    summary: "Demir asetat iyonları ile meşe polifenollerinin siyah ferrus kompleksi oluşturması.",
    field_utility: "Asla silinmeyen saha haritaları, acil durum işaretleri ve kalıcı kayıt.",
    steps: [
      "Paslı çivileri sirke içinde 48 saat bekleterek demir iyonlarını çözündürün.",
      "Meşe kabuklarını veya koyu çayı suda kaynatarak yoğun tannik asit elde edin.",
      "İki sıvıyı eşit oranda karıştırın; temas ettiği anda simsiyah mürekkebe dönüşür.",
      "Kalıcılığı artırmak için içine birkaç damla çam reçinesi damlatın."
    ]
  },
  {
    id: "syn-ors-serum",
    name: "Acil Durum Oral Elektrolit Çözeltisi (ORS)",
    category: "Tıbbi Kurtarma",
    required: ["water", "salt", "honey_sugar"],
    summary: "SGLT-1 sodyum-glukoz eştaşıyıcı pompalarını tetikleyen fizyolojik serum.",
    field_utility: "Ağır dehidrasyon, ishal, sıcak çarpması veya kan kaybı sonrası şoku durdurma.",
    steps: [
      "1 litre kaynatılıp ılıtılmış temiz su hazırlayın.",
      "İçine yarım tatlı kaşığı (~3 gram) sofra veya kaya tuzu ekleyin.",
      "6 tatlı kaşığı (~25 gram) bal veya toz şeker ilave edin.",
      "Varsa yarım limon suyu veya bir damla sirke ekleyip tamamen çözünene kadar karıştırın."
    ]
  },
  {
    id: "syn-refractory-clay",
    name: "Refrakter Kil ve Odun Külü Yüksek Isı Harcı",
    category: "Yapı & Enerji",
    required: ["clay", "sand", "wood_ash", "water"],
    summary: "Termal şoklara dayanıklı 1000°C refrakter fırın ve pota harcı.",
    field_utility: "Eritme potası, ekmek fırını, metal tavlama ocağı ve ocak bacası inşası.",
    steps: [
      "2 ölçek killi toprağı, 1 ölçek kuvars kumu ve 0.5 ölçek elenmiş odun külü ile harmanlayın.",
      "Su ekleyerek macun kıvamına gelene kadar yoğurun (varsa kuru ot lifleri ekleyin).",
      "İstenen fırın kubbesini veya döküm potasını şekillendirin.",
      "48 saat gölgede kurutun, ardından kısık odun ateşiyle yavaşça kürleyin."
    ]
  },
  {
    id: "syn-hemostatic-powder",
    name: "Doğal Meşe Taneni Büzücü Kanama Durdurucu",
    category: "Hijyen & Tıp",
    required: ["tannin_bark", "water"],
    summary: "Bitkisel polifenollerin plazma proteinlerini çöktürerek koagülasyonu hızlandırması.",
    field_utility: "Derin kesikler, kontrol edilemeyen yüzeyel kanamalar ve açık yaralar.",
    steps: [
      "Meşe kabuğunun iç katmanını (kambiyum) soyup kurutun ve taşla ezerek un haline getirin.",
      "Küçük kanamalı yaraların üzerine doğrudan toz olarak serpin (hemostatik büzüşme sağlar).",
      "Veya tozu suda 20 dk kaynatarak elde edilen koyu suyu pansuman beziyle yaraya bastırın."
    ]
  },
  {
    id: "syn-wound-salve",
    name: "Antiseptik Çam-Bal Koruyucu Yara Macunu",
    category: "Hijyen & Tıp",
    required: ["pine_resin", "fats_oils", "honey_sugar"],
    summary: "Çam reçinesinin bariyeri ile balın ozmotik antibakteriyel aktivitesinin birleşimi.",
    field_utility: "Yanıklar, derin deri sıyrıkları ve mikrop kapmış açık yaraların tedavisi.",
    steps: [
      "2 birim çam reçinesini 1 birim sıvı yağ ile hafif ateşte eritin ve ılıtın.",
      "Ilındıktan sonra içine 2 birim doğal bal ekleyip homojen bir merhem kıvamına getirin.",
      "Yaranın üzerine kalın tabaka sürün ve temiz bezle kapatın; su ve mikrop geçirmez."
    ]
  },
  {
    id: "syn-dew-solvent",
    name: "Canlandırılmış Çiy Suyu ve Spajirik Çözücü",
    category: "Laboratuvar Operasyonu",
    required: ["may_dew", "honey_sugar"],
    summary: "Mutus Liber protokolüyle toplanan çiy suyunun ozmotik sindirimi.",
    field_utility: "Yüksek saflıkta bitkisel özütleme ve metalleri açan biyo-çözücü.",
    steps: [
      "Şafak vakti keten çarşafla toplanan Mayıs çiy suyunu süzün.",
      "Eser miktarda bal veya nektar katarak hafif su banyosunda (Bain-Marie) 40 gün dinlendirin.",
      "Elde edilen su, şifalı bitkilerin hücre duvarlarını normal sudan çok daha hızlı çözer."
    ]
  },
  {
    id: "syn-flux-nitre",
    name: "Oksitleyici Metal Tasfiye ve Cüruf Yakıcı Akı (Flux)",
    category: "Metalurji & Maden",
    required: ["potassium_nitrate", "wood_ash", "sand"],
    summary: "Newtonyen antimon ve metal indirgemesinde cürufu temizleyen yüksek sıcaklık akısı.",
    field_utility: "Hurda metalleri saflaştırma, döküm yapma ve lehimcilik.",
    steps: [
      "1 ölçek güherçile (KNO3), 1 ölçek elenmiş odun külü ve 1 ölçek ince kumu kuru harmanlayın.",
      "Eritme potasındaki hurda veya cevherin üzerine serpin; yüksek sıcaklıkta cürufu üst tabakada camsı bir fazda toplar.",
      "Saf metal kütlesi dipte temiz bir regulus olarak birikir."
    ]
  }
];

// 4. MASTER RECIPES DATA
const RECIPES_DATA = [
  {
    id: "rec-01",
    name: "Spajirik Biberiye Özütü (Rosmarinus Spagyric Tincture)",
    category: "Spagyrics",
    era: "Rönesans / Paracelsus & Von Bernus",
    target: "Zihinsel netlik, antioksidan hücresel koruma ve dolaşım desteği",
    tria_prima: {
      sulfur: "Uçucu Biberiye Yağları (Sineol, Kamfor, Pinen)",
      mercury: "Fermente Biberiye Bitkisel Alkolü (%85)",
      sal: "Kalsine Edilmiş Bitki Külü Potasyum Tuzu"
    },
    difficulty: "İleri Düzey",
    time: "40 Gün (Pelikan Sindirimi)",
    safety: "Güvenli (Tıbbi Doz)",
    keywords: ["bitki", "bitkisel", "biberiye", "spajirik", "rosmarinus", "tria prima", "pelikan", "sindirim", "iksir"],
    steps: [
      "Taze biberiyeden su buharı damıtması ile uçucu esansiyel yağları (Kükürt) ayırın.",
      "Kalan posayı su ve bal ile 14 gün fermente edip imbikten etil alkolü (Cıva) damıtın.",
      "Posayı 600°C'de kalsine edip beyaz külden suda çözünen tuzları (Sal) kristalize edin.",
      "Üç bileşeni Pelikan sirkülasyon kabında 40 gün boyunca 37°C'de birleştirin (Cohobatio)."
    ]
  },
  {
    id: "rec-02",
    name: "Scriptorium Demir Mazı Mürekkebi (Iron Gall Ink)",
    category: "Malzeme Bilimi",
    era: "Orta Çağ",
    target: "Bin yıl silinmeyen, parşömene işleyen hermetik el yazması mürekkebi",
    tria_prima: {
      sulfur: "Meşe Mazısı Tannik ve Gallik Asitleri",
      mercury: "Yağmur Suyu / Beyaz Şarap Çözücüsü",
      sal: "Yeşil Vitriol (Demir-II Sülfat) ve Arap Gamı"
    },
    difficulty: "Orta",
    time: "3 Gün",
    safety: "Toksik Değil (Dış Kullanım)",
    keywords: ["mürekkep", "el yazması", "parşömen", "demir sülfat", "meşe mazısı", "vitriol", "tannik asit"],
    steps: [
      "30g ezilmiş meşe mazısını 250ml suda 3 gün güneşte demlendirin.",
      "Süzülen solüsyona 15g Yeşil Vitriol (Demir-II Sülfat) ekleyin; sıvı anında siyahlaşır.",
      "10g Arap Zamkı ekleyerek karıştırın ve parşömen üzerine dolmakalem/hokka ile uygulayın."
    ]
  },
  {
    id: "rec-03",
    name: "Kadim Dört Hırsız Sirkesi (Acetum Quattuor Furum)",
    category: "Apothecary",
    era: "17. Yüzyıl Veba Dönemi",
    target: "Geniş spektrumlu doğal antiviral, antibakteriyel saha dezenfektanı",
    tria_prima: {
      sulfur: "Pelin otu, Biberiye, Adaçayı, Sarımsak uçucu yağları",
      mercury: "Doğal Asetik Asit (Elma Sirkesi)",
      sal: "Bitkisel alkali mineraller"
    },
    difficulty: "Kolay",
    time: "21 Gün Maserasyon",
    safety: "Güvenli (Harici & Seyreltik Dahili)",
    keywords: ["bitki", "bitkisel", "sirke", "veba", "dezenfektan", "biberiye", "adaçayı", "pelin otu", "sarımsak", "antiviral", "şifalı otlar"],
    steps: [
      "Pelin otu, biberiye, adaçayı, nane, lavanta, karanfil ve ezilmiş sarımsağı kavanoza doldurun.",
      "Üzerini kaplayacak şekilde organik elma sirkesi dökün.",
      "Karanlık ve ılık bir yerde 3 hafta çalkalayarak bekletin, ardından süzün."
    ]
  },
  {
    id: "rec-04",
    name: "Kupelasyon ile Gümüş Saflaştırma (Cupellation)",
    category: "Metalurji",
    era: "Antik Mısır / Mezopotamya",
    target: "Kirli cevher veya kurşunlu alaşımlardan saf gümüş ve altın ayrıştırma",
    tria_prima: {
      sulfur: "Yüksek Oksitleyici Fırın Isısı ve Hava Akımı",
      mercury: "Erimiş Metal Matrisi",
      sal: "Kemik Külü Kalsiyum Fosfat Potası"
    },
    difficulty: "Usta Simyacı",
    time: "4 Saat",
    safety: "Yüksek Isı & Kurşun Buharı Koruması Gerekli",
    steps: [
      "Kalsine kemik külünden gözenekli kupele (pota) presleyin ve kurutun.",
      "Metali kupele içine koyup 950°C'de hava akımı altında eritin.",
      "Baz metaller kurşun oksite (litarge) dönüp gözenekli potaya emilir.",
      "Pota merkezinde parıldayan parlak gümüş 'düğme' donunca çıkarılır."
    ]
  },
  {
    id: "rec-05",
    name: "Yeşil Sentez ile Kolloidal Nano-Gümüş",
    category: "Fütüristik Nano-Simya",
    era: "Modern & Gelecek",
    target: "Zehirsiz indirgeyicilerle medikal antibakteriyel nano-partikül eldesi",
    tria_prima: {
      sulfur: "Sitrik Asit ve Askorbik Asit Biyo-İndirgeyicisi",
      mercury: "Ultra Saf Deiyonize Su",
      sal: "Gümüş İyonları (Ag+)"
    },
    difficulty: "Orta",
    time: "30 Dakika",
    safety: "Laboratuvar Gözlüğü & Hassasiyet",
    steps: [
      "100ml deiyonize suda 1mM AgNO3 çözeltisini 90°C'ye ısıtın.",
      "Taze sıkılmış ve 0.22 mikron filtre edilmiş limon suyunu damla damla ekleyin.",
      "Plazmonik yüzey rezonansı ile çözelti kehribar sarısına döndüğünde soğutun.",
      "Nano-boyutlu (10-20nm) biyo-kararlı gümüş kolloidi elde edilir."
    ]
  },
  {
    id: "rec-06",
    name: "Tarihsel Kral Suyu (Aqua Regia Simyasal Prosedürü)",
    category: "Laboratuvar Operasyonu",
    era: "İslam Altın Çağı / Cabir bin Hayyan",
    target: "Asil metalleri (altın, platin) çözebilen yegane mineral asit kompleksi",
    tria_prima: {
      sulfur: "Serbest Klor ve Nitrozil Klorür Gaz Fazı",
      mercury: "Aqua Fortis (HNO3) Taşıyıcısı",
      sal: "Sal Ammoniac / Spirit of Salt (HCl)"
    },
    difficulty: "Usta Kimyager",
    time: "15 Dakika",
    safety: "Kritik: Duman Çeker Ocak ve Asit Koruyucu Şart",
    steps: [
      "1 hacim konsantre Nitrik Asit (%65 HNO3) ölçün.",
      "3 hacim konsantre Hidroklorik Asit (%37 HCl) yavaşça üzerine ekleyin.",
      "Sıvı birkaç dakika içinde saman sarısından koyu turuncu-kırmızı dumanlı hale geçer.",
      "Altın yaprağını temas ettirdiğinizde çözünerek kloroaurik asit oluşturur."
    ]
  },
  {
    id: "rec-07",
    name: "Sir Isaac Newton'ın Antimon Yıldız Regulusu (Star Regulus)",
    category: "Metalurji",
    era: "17. Yüzyıl / Isaac Newton (Keynes MSS)",
    target: "Metallerin içindeki yaşamsal ruhu açan ve Felsefi Cıvayı hazırlayan kristal regulus",
    tria_prima: {
      sulfur: "Güherçile (KNO3) Oksitleyici Gücü",
      mercury: "Antimon Erimiş Metalik Kristali (Sb)",
      sal: "Tartar Tuzu ve Demir Sülfür (FeS) Cürufu"
    },
    difficulty: "Usta Simyacı",
    time: "3 Saat",
    safety: "1050°C Yüksek Sıcaklık ve Kükürt Dumanı Havalandırması",
    steps: [
      "Demir çivileri potada akkor beyaz ısıya (1050°C) kadar getirin.",
      "Toz stibnit (Sb2S3) ekleyin; demir kükürtü bağlayarak erimiş antimonu serbest bırakır.",
      "Güherçile ve tartar tuzu ekleyerek cürufu yakın ve saflaştırın.",
      "Konik demir kaba döküp titreşimsiz çok yavaş soğutun; yüzeyde muazzam gümüşi yıldız kristalleri oluşur."
    ]
  },
  {
    id: "rec-08",
    name: "Ayurvedik Swarna Bhasma (Hücresel Nano-Altın İksiri)",
    category: "Apothecary",
    era: "Antik Hint / Acharya Nagarjuna (Rasa Shastra)",
    target: "Ağır metal toksisitesini sıfırlayan, hücre yenileyici biyo-uyumlu altın",
    tria_prima: {
      sulfur: "Kajjali (Cıva-Kükürt Macunu) ve Aloe Vera (Kumari)",
      mercury: "Parada (Sıvı Cıva İletkeni)",
      sal: "Sharava Samputa ile 42 kez kalsine edilmiş altın mikro-külleri"
    },
    difficulty: "Büyük Usta",
    time: "42 Puta Döngüsü (Aylar sürer)",
    safety: "Hassas Kapalı Pota Kalsinasyonu (Sharava Mührü)",
    steps: [
      "24 ayar saf altın yaprakları kızdırılıp susam yağı ve bitki sularında 7'şer kez söndürülür (Shodhana).",
      "Arıtılmış altın, Kajjali macunu ve taze Aloe vera jeli ile taş havanda 3 gün boyunca durmaksızın ezilir.",
      "Macun diskler halinde kurutulup iki toprak çanak arasında killi bezle mühürlenir (Sharava Samputa).",
      "Fırında 550°C'de 12 saat kalsine edilir. Bu işlem taze bitki sularıyla 42 kez tekrarlanarak 10-50nm boyutuna indirgenir."
    ]
  },
  {
    id: "rec-09",
    name: "Mutus Liber Mayıs Çiyi ve Kozmik Enerji Yoğunlaştırma",
    category: "Laboratuvar Operasyonu",
    era: "1677 / Mutus Liber (Sessiz Kitap)",
    target: "Güneş ve Ay ışığını emmiş, metalleri açacak en saf evrensel çözücü",
    tria_prima: {
      sulfur: "İlkbahar Güneş ve Ay Radyasyonu",
      mercury: "Atmosferik Yoğunlaşma Çiy Suyu (Aqua Roris)",
      sal: "Çiyde Çözünmüş Amonyum ve Uçucu Kozmik Tuzlar"
    },
    difficulty: "Orta",
    time: "40 Gün Sindirim (Bain-Marie)",
    safety: "Tamamen Güvenli (Doğal)",
    keywords: ["çiy", "mayıs çiyi", "mutus liber", "evrensel çözücü", "bain-marie", "güneş", "ay", "aqua roris"],
    steps: [
      "Mayıs ekinoksunda şafaktan önce kırlara temiz keten örtüler gererek çiy damlalarını toplayın.",
      "Toplanan suyu ipek filtreden süzüp cam balona aktarın.",
      "Maria Prophetissa'nın Bain-Marie su banyosunda 40 gün hafif güneş ve ay ışığı altında dinlendirin (Digestio).",
      "Elde edilen canlandırılmış su, spajirik ekstraksiyonlarda metalleri ve bitkileri açmak için kullanılır."
    ]
  },
  {
    id: "rec-10",
    name: "Spajirik Sarı Kantaron Kızıl İksiri (Hypericum Rubedo Yağı)",
    category: "Spagyrics",
    era: "Rönesans / Paracelsus İatrokimyası",
    target: "Hücre yenileyici, yara kapatıcı, sinir yatıştırıcı ve derin doku onarıcı kızıl tentür",
    tria_prima: {
      sulfur: "Kırmızı Hiperisin ve Uçucu Sarı Kantaron Çiçek Yağları",
      mercury: "Fermente Sarı Kantaron Bitki Alkolü (%70)",
      sal: "Kalsine Edilmiş Kök ve Sap Külü Tuzları (Potasyum Karbonat)"
    },
    difficulty: "Orta",
    time: "40 Gün (Güneş Işığında Demleme & Kohobasyon)",
    safety: "Güvenli (Harici & Tıbbi Dahili)",
    keywords: ["bitki", "bitkisel", "sarı kantaron", "hypericum", "rubedo", "kızıl yağ", "yara", "sinir", "spajirik", "paracelsus", "şifalı ot"],
    steps: [
      "Yaz gündönümünde toplanan taze sarı kantaron çiçeklerini soğuk sıkım zeytinyağı veya saf bitkisel alkol içine yatırın.",
      "Cam balonda güneşe bırakın; hiperisin salınımıyla sıvı 14 günde kan kırmızısı (Rubedo) rengini alır.",
      "Kalan bitki posasını fırında 650°C'de kalsine ederek bembeyaz kül tuzu elde edin.",
      "Kırmızı özüt ile kalsine tuzu birleştirip 40 gün sirküle edin (Cohobatio); nihai spajirik şifa iksiri oluşur."
    ]
  },
  {
    id: "rec-11",
    name: "Spajirik Söğüt Kabuğu Salisilat Özütü (Doğal Aspirin İksiri)",
    category: "Apothecary",
    era: "Antik İskenderiye / Orta Çağ Manastır Eczacılığı",
    target: "Mideyi tahriş etmeyen biyo-uyumlu ağrı kesici, ateş düşürücü ve antienflamatuar salisin iksiri",
    tria_prima: {
      sulfur: "Salisin ve Fenolik Glikozit Uçucu Fraksiyonu",
      mercury: "Sirke & Yağmur Suyu Hidroalkolik Çözücüsü",
      sal: "Söğüt Kabuğu Külünden Elde Edilen Alkali Kristaller"
    },
    difficulty: "Kolay - Orta",
    time: "28 Gün Maserasyon",
    safety: "Güvenli (Tıbbi Doz)",
    keywords: ["bitki", "bitkisel", "söğüt kabuğu", "salisilat", "salisin", "aspirin", "ağrı kesici", "ateş düşürücü", "spajirik", "şifalı ağaç"],
    steps: [
      "İlkbaharda genç söğüt (Salix alba) dallarından taze iç kabukları soyup ince ince kıyın.",
      "Kabukları %60 doğal elma sirkesi ve %40 saf su karışımında 21 gün çalkalayarak masere edin.",
      "Süzülen posayı kurutup akkor ateşte kalsine edin; küldeki mineral tuzu distile suyla ekstrakte edip kristalize edin.",
      "Kristal tuzları sıvı öze ekleyin; asit nötrlenir, salisin midede yanma yapmayan biyo-uyumlu bir tuza dönüşür."
    ]
  },
  {
    id: "rec-12",
    name: "Spajirik Pelin Otu Acı İksiri (Artemisia Absinthium Tonik)",
    category: "Spagyrics",
    era: "Orta Çağ & Rönesans / Paracelsus",
    target: "Karaciğer arındırıcı, safra artırıcı, parazit dökücü ve sindirim ateşini (Archaeus) uyandırıcı tonik",
    tria_prima: {
      sulfur: "Absintin, Anabsintin ve Uçucu Tuyon Fraksiyonu",
      mercury: "Pelin Otu Fermentasyon Şarabı Alkolü",
      sal: "Artemisia Külünden Arıtılmış Potasyum Tuzu"
    },
    difficulty: "Orta",
    time: "30 Gün",
    safety: "Hassas Dozaj (Günde 3-5 Damla)",
    keywords: ["bitki", "bitkisel", "pelin otu", "artemisia", "absinthium", "sindirim", "karaciğer", "parazit", "archaeus", "spajirik", "acı tonik"],
    steps: [
      "Çiçeklenme döneminde toplanan pelin otunu gölgede kurutup havanda hafifçe ezin.",
      "Saf su ve organik alkol ile karanlıkta 14 gün masere ederek acı glikozitleri ve uçucu bileşenleri çekin.",
      "Bitki liflerini porselen potada gri-beyaz küle kadar kalsine edip tuzunu ayrıştırın.",
      "Tuz ve tentürü birleştirip Maria banyosunda 10 gün olgunlaştırın; sindirim sistemini anında ayağa kaldıran kadim iksir hazırdır."
    ]
  }
];

// 5. ARCHIVE LINKS
const ARCHIVE_LINKS = [
  {
    title: "The Chymistry of Isaac Newton Project",
    category: "Akademik El Yazmaları",
    institution: "Indiana University Bloomington (Prof. William R. Newman)",
    url: "http://www.chymistry.org",
    desc: "Isaac Newton'ın 1 milyondan fazla kelimelik simya laboratuvarı notlarının diplomatik transkripsiyonları ve dijital kopyaları."
  },
  {
    title: "Cambridge Digital Library - Newton Manuscripts",
    category: "Orijinal Arşivler",
    institution: "Cambridge University Library, UK",
    url: "https://cudl.lib.cam.ac.uk/collections/newton",
    desc: "Newton'ın el yazısıyla tuttuğu kimyasal fırın çizimleri, bitkisel büyüme yasaları ve metalurji not defterleri."
  },
  {
    title: "The Alchemy Website (Adam McLean Arşivi)",
    category: "Küresel Kütüphane",
    institution: "Levity / AlchemyWebsite",
    url: "https://www.alchemywebsite.com",
    desc: "İnternetin en kapsamlı simya arşivi: 10.000'den fazla sayfa metin, Ripley Scroll, Atalanta Fugiens ve hermetik gravürler."
  },
  {
    title: "Science History Institute Alchemy Collections",
    category: "Müze & Arşiv",
    institution: "Science History Institute (Philadelphia)",
    url: "https://digital.sciencehistory.org",
    desc: "Rönesans dönemi imbikleri, Athanor fırınları, Paracelsiyen el yazmaları ve erken modern kimya aletleri koleksiyonu."
  },
  {
    title: "The Jewish Alchemists: A History & Source Book",
    category: "İskenderiye ve Maria Prophetissa",
    institution: "Raphael Patai / Princeton University Press",
    url: "https://dokumen.pub/the-jewish-alchemists-a-history-and-source-book-course-booknbsped-9781400863662.html",
    desc: "Maria Prophetissa'nın icatları (Bain-marie, Kerotakis, Tribikos) ve erken dönem simya tarihi üzerine temel eser."
  },
  {
    title: "Princeton Library Digital PUL - Experimenting with the Past",
    category: "Akademik Sergiler",
    institution: "Princeton University Library",
    url: "https://dpul.princeton.edu/alchemy/feature/experimenting-with-the-past",
    desc: "Erken modern dönem kimyasal el yazmaları ve laboratuvar rekonstrüksiyon deneyleri."
  },
  {
    title: "Spagyrik nach Paracelsus und Alexander von Bernus",
    category: "Tıbbi Spajirik & İatrokimya",
    institution: "Soluna Laboratories / Alexander von Bernus Ekolü",
    url: "https://www.soluna.de/en/SOLUNA-REMEDIES/Spagiric/",
    desc: "Tria Prima bitki ve mineral ekstraksiyonu, kalsinasyon ve kohobasyon (Cohobatio) protokolleri."
  },
  {
    title: "Critical Review of Rasaratna Samuccaya (PMC / PubMed)",
    category: "Hint Rasa Shastra & Bhasma",
    institution: "National Center for Biotechnology Information (NCBI)",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5255965/",
    desc: "18 Astadasa Samskara operasyonları, Swarna Bhasma hücresel emilimi ve Ayurveda cıva arındırması."
  },
  {
    title: "Science and Civilisation in China - Vol 5: Alchemy",
    category: "Doğu Simyası (Waidan/Neidan)",
    institution: "Joseph Needham / Cambridge University Press",
    url: "https://archive.org/details/NeedhamJosephScienceAndCivilisationInChinaVol5Part2",
    desc: "Taocu ölümsüzlük iksirleri (Waidan), potalar ve bedensel iç simya (Neidan / Üç Hazine) üzerine anıtsal külliyat."
  },
  {
    title: "Glenn Seaborg Bizmut'tan Altın Transmütasyonu (1980)",
    category: "Modern Nükleer Transmütasyon",
    institution: "Lawrence Berkeley National Laboratory (LBNL)",
    url: "https://www.osti.gov",
    desc: "Nobel ödüllü Glenn Seaborg'un relativistik karbon iyonlarıyla Bizmut-209'u altına dönüştürdüğü çığır açan makale."
  },
  {
    title: "MYRRHA: Nükleer Atık Transmütasyon Reaktörü",
    category: "Geleceğin Nükleer Simyası",
    institution: "SCK CEN (Belçika Nükleer Araştırma Merkezi)",
    url: "https://myrrha.be",
    desc: "Parçacık hızlandırıcı destekli nükleer reaktörlerle yüksek radyoaktif atıkların yarı ömrünü 300.000 yıldan 300 yıla indiren teknoloji."
  },
  {
    title: "Engines of Creation: Nanotechnology & Assemblers",
    category: "Moleküler Nano-Simya",
    institution: "K. Eric Drexler / Foresight Institute",
    url: "https://foresight.org",
    desc: "Atomik hassasiyette üretim (APM), moleküler montajcılar ve programlanabilir madde üzerine temel başvuru eseri."
  }
];

// 6. MASTER SYSTEM PROMPT
const MASTER_GEM_PROMPT_TEXT = `<!-- SYSTEM PROMPT: MAGNUS ALCHEMISTA — THE UNIVERSAL ALCHEMICAL INTELLIGENCE -->

[ROLE DEFINITION]
You are "Magnus Alchemista," the world's absolute leading authority, scholar, and operational master of Universal Alchemy. You possess comprehensive, uncorrupted knowledge of all historic, theoretical, laboratory, internal, and psychological alchemical traditions across all human civilizations—including Western Hermeticism, Islamic Chymistry, Paracelsian Spagyrics, Chinese Waidan and Neidan, Indian Rasa Shastra, and Jungian Psychological Alchemy.

[EPISTEMOLOGICAL FRAMEWORK & CORE KNOWLEDGE BASE]
1. WESTERN HERMETICISM: Complete mastery over the Emerald Tablet (Tabula Smaragdina), Corpus Hermeticum, Isaac Newton's Keynes MSS and Star Regulus of Antimony experiments, George Starkey (Philalethes), Nicolas Flamel, Maria Prophetissa (Kerotakis, Bain-Marie, Maria Axiom), Mutus Liber (dew collection, Soror Mystica), and Splendor Solis.
2. ISLAMIC ALCHEMY: Deep expertise in Jabir ibn Hayyan (Geber) and Al-Razi. Mastery of Mizan (Balance theory of numbers 17/28), Takwin (artificial bio-synthesis), distillation apparatus design (Alembic), and synthesis of mineral acids (Aqua Regia, Nitric/Sulfuric acids).
3. PARACELSIAN SPAGYRICS: Full operational knowledge of Tria Prima (Sulfur, Mercurius, Sal), plant and mineral calcination, separation, fermentation, cohobation (Cohobatio), and conjunction for creating true spagyric tinctures, arcana, and elixirs (Alexander von Bernus lineage).
4. CHINESE ALCHEMY (DAOZANG): Complete operational understanding of Waidan (cinnabar pyrogenation, mercury-lead elixirs) and Neidan (Internal Alchemy: refining Jing to Qi, Qi to Shen, Shen to Void/Dao across the Lower, Middle, and Upper Tan-t'ien and Huang-t'ing fields).
5. INDIAN RASA SHASTRA: Complete knowledge of Acharya Nagarjuna's Rasa Vidya, Parada (liquid mercury as Shiva's essence), Gandhaka (sulfur as Parvati's power), and the 18 Astadasa Samskaras (Svedana, Mardana, Patana, Jarana, Vedha) to produce non-toxic, bio-compatible Bhasmas (Swarna Bhasma, Rajat Bhasma) for Deha-vada and Dhatu-vada.
6. FIELD & CRISIS ALCHEMY: Mastery of resource-constrained survival chemistry (activated carbon filtration, potash lye saponification, pine pitch epoxy cement, iron-gall inks, refractory adobe kilns, oral rehydration electrolytes) from primitive environmental inputs.
7. MODERN & FUTURISTIC TRANSMUTATION: Understanding Glenn Seaborg's nuclear transmutation of bismuth to gold (LBNL 1980), particle accelerator isotopic engineering (MYRRHA project), and Drexlerian atomically precise molecular assemblers (APM).
8. PSYCHOLOGICAL ALCHEMY: Absolute integration of Carl Jung's Opus Alchymicum, interpreting laboratory operations as projective Individuation dynamics across Nigredo, Albedo, Citrinitas, and Rubedo.

[OPERATIONAL PROTOCOLS & RESPONSE RULES]
- MULTI-LAYERED ANALYSIS: Every query must be evaluated and answered through three synchronized lenses:
  a) Physical / Proto-Chemical (Laboratory operations, molecular reactions, thermodynamic procedures, IUPAC equivalents).
  b) Energetic / Internal (Neidan, Qi/Prana circulation, physiological and cellular alignment).
  c) Symbolic / Psychological (Hermetic allegories, Jungian individuation, archetypal transformation).
- GREEN LANGUAGE (VERBA OBSCURA) TRANSLATION: Decode any obscure alchemical text, metaphor, or artwork (e.g., Green Dragon, Red Lion, King Swimming in the Sea, Star Regulus, White Swan) into exact scientific, metallurgical, thermodynamic, and psychological equivalents.
- RIGOROUS HISTORICAL ACCURACY: Cite original treatises, manuscripts, dates, and historical figures accurately when explaining any concept.
- ABSOLUTE SYNTHESIS: Never treat Eastern and Western traditions as contradictory; demonstrate their underlying epistemological unity (e.g., parallel between Neidan's Jing-Qi-Shen and Paracelsus's Sal-Mercurius-Sulfur).

[MANDATORY OUTPUT STRUCTURE]
Whenever the user prompts a query regarding alchemical recipes, philosophy, materials, or transformation processes, structure your response rigorously as follows:

### 1. Executive Hermetic Summary (The Core Principle)
A dense, profound synthesis of the universal law, axiom, or archetype at play (incorporating Tabula Smaragdina principles).

### 2. Physical & Laboratory Mechanics
Exact historical and modern experimental procedures, chemical stoichiometry, apparatus (Athanor, Alembic, Kerotakis), temperatures, solvents, and safety protocols.

### 3. Internal & Energetic Mechanics (Neidan / Rasa Shastra)
The physiological, bio-energetic, and cellular counterpart (meridian alignment, Jing-Qi-Shen cultivation, or Ayurvedic cellular rejuvenation).

### 4. Symbolic & Psychological Decoding (Jungian Individuation)
Deconstruction of the Green Language allegories, archetypal shadow/anima dynamics, and consciousness expansion.

### 5. Integrated Practical Synthesis (Step-by-Step Actionable Guide)
A clear, numbered protocol for practical execution—including a "Field Survival Adaptation" if high-end reagents are unavailable.

[TONE & STYLE]
Authoritative, scholarly, profound, yet strictly precise, clear, and dignified. Avoid shallow fantasy tropes. You are the living library of the Great Work (Magnum Opus).

[MUTLAK ETİK VE KORUYUCU GÜVENLİK KALKANI (OMNI-GUARD)]
- Asla patlayıcı maddeler, kitle imha kimyasalları, ölümcül zehirler veya yasadışı uyuşturucuların sentez tariflerini vermezsin.
- Bu tür tehlikeli bir taleple karşılaştığında, simyacı etiğiyle konuyu maddenin arındırılmasına, şifaya ve güvenli bilimsel ilkelere yönlendirirsin.
- Birincil amacın hayatı yüceltmek, insan bilincini aydınlatmak ve bilgiyi insanlığın refahına vakfetmektir.`;

// State
let selectedMaterials = new Set();
let activeSearchFilter = "all";

// DOM Initialization
document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  initBookReaderModal();
  initSearchEngine();
  initMaterialsGrid();
  initSynthesisEngine();
  initRecipesTab();
  initGemPrompt();
  initLibrary();
  initKeyboardShortcuts();
});

// Tab Navigation
function initTabs() {
  const navBtns = document.querySelectorAll(".nav-btn");
  const panes = document.querySelectorAll(".tab-pane");

  navBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-tab");
      switchToTab(targetId);
    });
  });
}

function switchToTab(tabId) {
  const navBtns = document.querySelectorAll(".nav-btn");
  const panes = document.querySelectorAll(".tab-pane");

  navBtns.forEach(b => {
    if (b.getAttribute("data-tab") === tabId) {
      b.classList.add("active");
    } else {
      b.classList.remove("active");
    }
  });

  panes.forEach(p => {
    if (p.id === tabId) {
      p.classList.add("active");
    } else {
      p.classList.remove("active");
    }
  });
}

// Global Keyboard Shortcuts
function initKeyboardShortcuts() {
  window.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      switchToTab("tab-search");
      const mainInput = document.getElementById("main-alch-search");
      mainInput?.focus();
      mainInput?.select();
    }
  });
}

// Helper: Normalize Turkish characters for robust search
function normalizeSearchText(str) {
  if (!str) return "";
  return str
    .toLowerCase()
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[\.,\/#!$%\^&\*;:{}=\-_`~()]/g, " ")
    .trim();
}

// 7. UNIVERSAL SEARCH ENGINE IMPLEMENTATION
function initSearchEngine() {
  const globalInput = document.getElementById("global-search-input");
  const mainInput = document.getElementById("main-alch-search");
  const filterChips = document.querySelectorAll(".filter-chip");
  const suggestedTags = document.querySelectorAll(".tag-chip");
  const resultsContainer = document.getElementById("search-results-container");
  const resultsCount = document.getElementById("search-results-count");
  const speedTag = document.getElementById("search-speed-tag");

  // Sync Global Header Search with Main Search Engine
  globalInput?.addEventListener("input", (e) => {
    const val = e.target.value;
    if (mainInput) mainInput.value = val;
    switchToTab("tab-search");
    executeSearch(val);
  });

  globalInput?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      switchToTab("tab-search");
      mainInput?.focus();
    }
  });

  // Main Search Input
  mainInput?.addEventListener("input", (e) => {
    if (globalInput) globalInput.value = e.target.value;
    executeSearch(e.target.value);
  });

  // Filter Chips
  filterChips.forEach(chip => {
    chip.addEventListener("click", () => {
      filterChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      activeSearchFilter = chip.getAttribute("data-filter") || "all";
      executeSearch(mainInput?.value || "");
    });
  });

  // Suggested Quick Tags
  suggestedTags.forEach(tag => {
    tag.addEventListener("click", () => {
      const q = tag.getAttribute("data-query") || tag.textContent.trim();
      if (mainInput) mainInput.value = q;
      if (globalInput) globalInput.value = q;
      executeSearch(q);
    });
  });

  // Modal Setup
  initSearchModal();

  // Merge downloaded local books from window.ALCHEMIST_LIBRARY_CATALOG into SEARCH_DATABASE
  if (window.ALCHEMIST_LIBRARY_CATALOG && Array.isArray(window.ALCHEMIST_LIBRARY_CATALOG)) {
    window.ALCHEMIST_LIBRARY_CATALOG.forEach(book => {
      const existingIdx = SEARCH_DATABASE.findIndex(item => item.id === book.id);
      const isAcademic = !!book.is_academic_archive;
      const searchItem = {
        id: book.id,
        type: isAcademic ? "Akademik Araştırma & Arşiv" : "Tarihi Kitap & El Yazması",
        typeClass: isAcademic ? "type-recipe" : "type-book",
        title: book.title,
        author: book.author,
        era: book.era,
        keywords: [
          ...(book.keywords || []),
          "kitap", "tam metin", "el yazması", "gutenberg", "yerel", "database", "arşiv",
          book.tradition || "",
          book.archive_org || "",
          book.filename || ""
        ],
        summary: `${book.summary} [Boyut: ${book.size_display} | Kelime: ${book.word_count.toLocaleString()} | Bölümler: ${book.chapters.length}]`,
        full_content: book.snippet,
        citation: `Yerel Veritabanı: database/books/${book.filename}`,
        bookId: book.id,
        file_url: book.file_url,
        isLocalBook: true
      };

      if (existingIdx >= 0) {
        SEARCH_DATABASE[existingIdx] = searchItem;
      } else {
        SEARCH_DATABASE.push(searchItem);
      }
    });
  }

  // Initial Search Run (Show all)
  executeSearch("");

  function executeSearch(query) {
    const t0 = performance.now();
    const rawQ = query.trim();
    const normQ = normalizeSearchText(rawQ);
    const tokens = normQ.split(/\s+/).filter(t => t.length > 0);

    let filtered = SEARCH_DATABASE;

    // Apply category filter
    if (activeSearchFilter !== "all") {
      filtered = filtered.filter(item => item.type === activeSearchFilter);
    }

    // Score & Rank items if query exists
    let ranked = [];
    if (tokens.length === 0) {
      ranked = filtered.map(item => ({ ...item, score: 1 }));
    } else {
      filtered.forEach(item => {
        let score = 0;
        const normTitle = normalizeSearchText(item.title);
        const normAuthor = normalizeSearchText(item.author || "");
        const normSummary = normalizeSearchText(item.summary || "");
        const normContent = normalizeSearchText(item.full_content || "");
        const normKeywords = (item.keywords || []).map(k => normalizeSearchText(k)).join(" ");

        tokens.forEach(token => {
          if (normTitle.includes(token)) score += 120;
          if (normKeywords.includes(token)) score += 80;
          if (normAuthor.includes(token)) score += 60;
          if (normSummary.includes(token)) score += 40;
          if (normContent.includes(token)) score += 20;
        });

        if (score > 0) {
          ranked.push({ ...item, score });
        }
      });

      ranked.sort((a, b) => b.score - a.score);
    }

    const t1 = performance.now();
    const elapsedMs = (t1 - t0).toFixed(1);

    // Update Counts & Meta
    if (resultsCount) {
      if (rawQ) {
        resultsCount.textContent = `"${rawQ}" için ${ranked.length} simyasal kayıt bulundu (${elapsedMs} ms)`;
      } else {
        resultsCount.textContent = `Toplam ${ranked.length} simyasal kayıt hazır (${elapsedMs} ms)`;
      }
    }

    if (speedTag) {
      speedTag.textContent = `Sorgu Hızı: ${elapsedMs} ms`;
    }

    renderSearchResults(ranked, rawQ);
  }

  function renderSearchResults(items, query) {
    if (!resultsContainer) return;
    resultsContainer.innerHTML = "";

    if (items.length === 0) {
      resultsContainer.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
          <div style="font-size: 3rem; margin-bottom: 1rem;">🜍</div>
          <h3 style="color: #fff; margin-bottom: 0.5rem; font-family: var(--font-serif);">Eşleşen Simyasal Kayıt Bulunamadı</h3>
          <p>Aradığınız kavram veya formül için farklı anahtar kelimeler deneyebilir (örn: 'Zümrüt', 'Antimon', 'Çiy', 'Mürekkep', 'Bitki') veya filtreleri sıfırlayabilirsiniz.</p>
        </div>
      `;
      return;
    }

    items.forEach(item => {
      const card = document.createElement("div");
      card.className = "search-result-card";
      
      const highlightedTitle = highlightMatch(item.title, query);
      const highlightedSnippet = highlightMatch(item.summary, query);

      card.innerHTML = `
        <div class="search-card-header">
          <span class="search-card-type ${item.typeClass || 'type-book'}">${item.type}</span>
          <span style="font-size: 0.75rem; color: var(--text-dim);">${item.era}</span>
        </div>
        <h3 class="search-card-title">${highlightedTitle}</h3>
        <div class="search-card-author">📜 ${item.author}</div>
        <p class="search-card-snippet">${highlightedSnippet}</p>
        <div class="search-card-footer">
          <span>🏛️ ${item.citation}</span>
          ${item.bookId ? `<span style="color: var(--gold-light); font-weight: 600;">📖 Kitabı Oku ↗</span>` : `<span style="color: var(--gold-primary); font-weight: 600;">Detaylı İncele ↗</span>`}
        </div>
      `;

      card.addEventListener("click", () => {
        if (item.bookId) {
          openBookReader(item.bookId);
        } else {
          openSearchDetailModal(item);
        }
      });

      resultsContainer.appendChild(card);
    });
  }

  function highlightMatch(text, query) {
    if (!text || !query.trim()) return text;
    const tokens = query.trim().split(/\s+/).filter(t => t.length > 1);
    if (tokens.length === 0) return text;

    try {
      const pattern = new RegExp(`(${tokens.map(escapeRegExp).join("|")})`, "gi");
      return text.replace(pattern, `<mark class="search-highlight">$1</mark>`);
    } catch (e) {
      return text;
    }
  }

  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
}

// Modal Manager
function initSearchModal() {
  const modal = document.getElementById("search-detail-modal");
  const closeBtn = document.getElementById("modal-close-btn");
  const closeAction = document.getElementById("modal-close-action");
  const copyBtn = document.getElementById("modal-copy-btn");

  const closeModal = () => modal?.classList.remove("active");

  closeBtn?.addEventListener("click", closeModal);
  closeAction?.addEventListener("click", closeModal);

  modal?.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal?.classList.contains("active")) {
      closeModal();
    }
  });

  copyBtn?.addEventListener("click", () => {
    const textToCopy = document.getElementById("modal-body-content")?.textContent || "";
    navigator.clipboard.writeText(textToCopy).then(() => {
      const orig = copyBtn.innerHTML;
      copyBtn.innerHTML = "✓ Kopyalandı!";
      copyBtn.style.borderColor = "#10b981";
      copyBtn.style.color = "#10b981";
      setTimeout(() => {
        copyBtn.innerHTML = orig;
        copyBtn.style.borderColor = "";
        copyBtn.style.color = "";
      }, 2000);
    });
  });
}

function openSearchDetailModal(item) {
  const modal = document.getElementById("search-detail-modal");
  const typeBadge = document.getElementById("modal-type-badge");
  const title = document.getElementById("modal-title");
  const author = document.getElementById("modal-author");
  const era = document.getElementById("modal-era");
  const body = document.getElementById("modal-body-content");
  const citation = document.getElementById("modal-citation-text");
  const readBookBtn = document.getElementById("modal-read-book-btn");

  if (!modal) return;

  if (typeBadge) {
    typeBadge.textContent = item.type;
    typeBadge.className = `search-card-type ${item.typeClass || 'type-book'}`;
  }
  if (title) title.textContent = item.title;
  if (author) author.textContent = `Müellif: ${item.author}`;
  if (era) era.textContent = `Dönem: ${item.era}`;
  if (body) body.textContent = item.full_content || item.summary;
  if (citation) citation.textContent = `Arşiv / Metin Kaynağı: ${item.citation}`;

  if (readBookBtn) {
    if (item.bookId) {
      readBookBtn.style.display = "inline-flex";
      readBookBtn.onclick = () => {
        modal.classList.remove("active");
        openBookReader(item.bookId);
      };
    } else {
      readBookBtn.style.display = "none";
    }
  }

  modal.classList.add("active");
}

// 8. MATERIALS GRID LOGIC
function initMaterialsGrid() {
  const container = document.getElementById("materials-container");
  if (!container) return;

  container.innerHTML = "";
  ALCHEMICAL_MATERIALS.forEach(mat => {
    const card = document.createElement("div");
    card.className = "material-card";
    card.id = `mat-${mat.id}`;
    card.innerHTML = `
      <div class="material-card-header">
        <span class="material-name">${mat.name}</span>
        <div class="material-check">✓</div>
      </div>
      <div class="material-alch">${mat.alchemical}</div>
      <div class="material-formula">${mat.formula}</div>
      <div class="material-role">${mat.role}</div>
    `;

    card.addEventListener("click", () => {
      toggleMaterial(mat.id);
    });

    container.appendChild(card);
  });

  const btnSelectAll = document.getElementById("btn-select-all");
  const btnClearAll = document.getElementById("btn-clear-all");

  btnSelectAll?.addEventListener("click", () => {
    ALCHEMICAL_MATERIALS.forEach(m => selectedMaterials.add(m.id));
    updateMaterialUI();
    evaluateSynthesis();
  });

  btnClearAll?.addEventListener("click", () => {
    selectedMaterials.clear();
    updateMaterialUI();
    evaluateSynthesis();
  });
}

function toggleMaterial(matId) {
  if (selectedMaterials.has(matId)) {
    selectedMaterials.delete(matId);
  } else {
    selectedMaterials.add(matId);
  }
  updateMaterialUI();
  evaluateSynthesis();
}

function updateMaterialUI() {
  ALCHEMICAL_MATERIALS.forEach(mat => {
    const card = document.getElementById(`mat-${mat.id}`);
    if (card) {
      if (selectedMaterials.has(mat.id)) {
        card.classList.add("selected");
      } else {
        card.classList.remove("selected");
      }
    }
  });

  const countBadge = document.getElementById("selected-count");
  if (countBadge) {
    countBadge.textContent = `${selectedMaterials.size} Malzeme Seçili`;
  }
}

// 9. FIELD SYNTHESIS EVALUATOR
function initSynthesisEngine() {
  evaluateSynthesis();
}

function evaluateSynthesis() {
  const container = document.getElementById("synthesis-results-container");
  const matchBadge = document.getElementById("match-count");
  if (!container) return;

  container.innerHTML = "";
  let readyCount = 0;

  const evaluated = SURVIVAL_REACTIONS.map(rx => {
    const missing = rx.required.filter(req => !selectedMaterials.has(req));
    const isReady = missing.length === 0;
    if (isReady) readyCount++;
    return { ...rx, isReady, missing };
  });

  evaluated.sort((a, b) => (b.isReady ? 1 : 0) - (a.isReady ? 1 : 0));

  if (matchBadge) {
    matchBadge.textContent = `${readyCount} Çözüm Sentezlenebilir`;
  }

  evaluated.forEach(rx => {
    const card = document.createElement("div");
    card.className = `reaction-card ${rx.isReady ? "can-synthesize" : "cannot-synthesize"}`;

    const pillsHtml = rx.required.map(reqId => {
      const mat = ALCHEMICAL_MATERIALS.find(m => m.id === reqId);
      const matName = mat ? mat.name : reqId;
      const have = selectedMaterials.has(reqId);
      return `<span class="req-pill ${have ? "req-have" : "req-lack"}">${have ? "✓" : "✗"} ${matName}</span>`;
    }).join("");

    const stepsHtml = rx.steps.map(s => `<li>${s}</li>`).join("");

    card.innerHTML = `
      <div class="reaction-status-tag ${rx.isReady ? "status-ready" : "status-missing"}">
        ${rx.isReady ? "⚡ Sentezlemeye Hazır" : `⏳ Eksik: ${rx.missing.length} Malzeme`}
      </div>
      <h4 class="reaction-title">${rx.name}</h4>
      <p class="reaction-summary">${rx.summary}</p>
      
      <div class="ingredients-pills">
        ${pillsHtml}
      </div>

      <div class="reaction-steps">
        <h5>Saha Üretim Prosedürü</h5>
        <ol>${stepsHtml}</ol>
      </div>

      <div class="field-utility-box">
        <strong>Hayati Fonksiyon:</strong> ${rx.field_utility}
      </div>
    `;

    container.appendChild(card);
  });
}

// 10. RECIPES TAB
function initRecipesTab() {
  const container = document.getElementById("recipes-container");
  const searchInput = document.getElementById("recipe-search");
  const categoryFilter = document.getElementById("recipe-category-filter");

  function renderRecipes() {
    if (!container) return;
    const rawQ = (searchInput?.value || "").trim();
    const normQ = normalizeSearchText(rawQ);
    const tokens = normQ.split(/\s+/).filter(t => t.length > 0);
    const category = categoryFilter?.value || "all";

    const filtered = RECIPES_DATA.filter(rec => {
      const matchCat = category === "all" || rec.category === category;
      if (!matchCat) return false;
      if (tokens.length === 0) return true;

      const searchableBlob = [
        rec.name,
        rec.target,
        rec.era,
        rec.category,
        rec.difficulty,
        rec.safety,
        rec.tria_prima?.sulfur || "",
        rec.tria_prima?.mercury || "",
        rec.tria_prima?.sal || "",
        ...(rec.steps || []),
        ...(rec.keywords || [])
      ].map(s => normalizeSearchText(s)).join(" ");

      return tokens.every(token => searchableBlob.includes(token));
    });

    container.innerHTML = "";
    if (filtered.length === 0) {
      container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 2rem;">Arama kriterine uygun tarif bulunamadı.</p>`;
      return;
    }

    filtered.forEach(rec => {
      const card = document.createElement("div");
      card.className = "recipe-card";

      const stepsHtml = rec.steps.map(s => `<li>${s}</li>`).join("");

      card.innerHTML = `
        <div class="recipe-header">
          <h3>${rec.name}</h3>
          <span class="recipe-badge">${rec.category}</span>
        </div>

        <div class="recipe-meta-row">
          <span><strong>Dönem:</strong> ${rec.era}</span>
          <span><strong>Zorluk:</strong> ${rec.difficulty}</span>
          <span><strong>Süre:</strong> ${rec.time}</span>
        </div>

        <p style="font-size: 0.85rem; color: #e5e7eb;"><strong>Amaç:</strong> ${rec.target}</p>

        <div class="recipe-tria-prima">
          <div class="tria-line"><strong>🜍 Kükürt (Ruh):</strong> ${rec.tria_prima.sulfur}</div>
          <div class="tria-line"><strong>☿ Cıva (Can):</strong> ${rec.tria_prima.mercury}</div>
          <div class="tria-line"><strong>🜔 Tuz (Beden):</strong> ${rec.tria_prima.sal}</div>
        </div>

        <div>
          <h5 style="font-size: 0.8rem; text-transform: uppercase; color: var(--gold-light); margin-bottom: 0.4rem;">Operasyon Aşamaları</h5>
          <ol class="recipe-steps-list">${stepsHtml}</ol>
        </div>

        <div style="font-size: 0.75rem; color: #94a3b8; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 0.5rem;">
          <strong>Güvenlik Sınıfı:</strong> ${rec.safety}
        </div>
      `;

      container.appendChild(card);
    });
  }

  searchInput?.addEventListener("input", renderRecipes);
  categoryFilter?.addEventListener("change", renderRecipes);
  renderRecipes();
}

// 11. GEM PROMPT TAB
function initGemPrompt() {
  const display = document.getElementById("gem-prompt-display");
  const copyBtn = document.getElementById("btn-copy-gem");

  if (display) {
    display.textContent = MASTER_GEM_PROMPT_TEXT;
  }

  copyBtn?.addEventListener("click", () => {
    navigator.clipboard.writeText(MASTER_GEM_PROMPT_TEXT).then(() => {
      const originalText = copyBtn.innerHTML;
      copyBtn.innerHTML = "✓ Kopyalandı!";
      copyBtn.style.background = "#10b981";
      setTimeout(() => {
        copyBtn.innerHTML = originalText;
        copyBtn.style.background = "";
      }, 2000);
    });
  });
}

// 12. LOCAL ALCHEMICAL LIBRARY & READER
function initLibrary() {
  const localContainer = document.getElementById("local-books-container");
  const academicContainer = document.getElementById("academic-archives-container");
  const countBadge = document.getElementById("local-books-count");
  const academicCountBadge = document.getElementById("academic-archives-count");
  const searchInput = document.getElementById("local-book-search");
  const traditionFilter = document.getElementById("local-book-tradition-filter");

  const catalog = window.ALCHEMIST_LIBRARY_CATALOG || [];

  function renderLocalBooks() {
    const rawQ = (searchInput?.value || "").trim();
    const query = normalizeSearchText(rawQ);
    const selectedTradition = traditionFilter?.value || "all";

    const filterFn = (book) => {
      let matchTradition = true;
      if (selectedTradition === "Klasik") {
        matchTradition = !book.is_academic_archive;
      } else if (selectedTradition === "Akademik") {
        matchTradition = !!book.is_academic_archive;
      } else if (selectedTradition !== "all") {
        const traditionStr = (book.tradition || "") + " " + (book.keywords || []).join(" ");
        matchTradition = traditionStr.toLowerCase().includes(selectedTradition.toLowerCase());
      }

      if (!matchTradition) return false;
      if (!query) return true;

      const blob = [
        book.title,
        book.author,
        book.era,
        book.tradition,
        book.summary,
        book.archive_org || "",
        ...(book.keywords || []),
        ...(book.chapters || [])
      ].map(s => normalizeSearchText(s)).join(" ");

      return blob.includes(query);
    };

    const classicBooks = catalog.filter(b => !b.is_academic_archive && filterFn(b));
    const academicArchives = catalog.filter(b => b.is_academic_archive && filterFn(b));

    // Update Counts
    if (countBadge) {
      countBadge.textContent = `${classicBooks.length} Eser Listeleniyor`;
    }
    if (academicCountBadge) {
      academicCountBadge.textContent = `${academicArchives.length} Yerel Arşiv Eseri`;
    }

    // 1. Render Classical Books
    if (localContainer) {
      localContainer.innerHTML = "";
      if (classicBooks.length === 0) {
        localContainer.innerHTML = `
          <div style="grid-column: 1/-1; text-align: center; padding: 2rem 1rem; color: var(--text-muted);">
            <div style="font-size: 2rem; margin-bottom: 0.5rem;">📜</div>
            <h4 style="color: #fff;">Arama kriterine uygun klasik kitap bulunamadı.</h4>
          </div>
        `;
      } else {
        classicBooks.forEach(book => {
          const card = createBookCard(book, false);
          localContainer.appendChild(card);
        });
      }
    }

    // 2. Render Academic Research Archives
    if (academicContainer) {
      academicContainer.innerHTML = "";
      if (academicArchives.length === 0) {
        academicContainer.innerHTML = `
          <div style="grid-column: 1/-1; text-align: center; padding: 2rem 1rem; color: var(--text-muted);">
            <div style="font-size: 2rem; margin-bottom: 0.5rem;">🏛️</div>
            <h4 style="color: #fff;">Arama kriterine uygun akademik arşiv bulunamadı.</h4>
          </div>
        `;
      } else {
        academicArchives.forEach(book => {
          const card = createBookCard(book, true);
          academicContainer.appendChild(card);
        });
      }
    }
  }

  function createBookCard(book, isAcademic = false) {
    const card = document.createElement("div");
    card.className = "local-book-card";

    const badgeLabel = isAcademic 
      ? (book.archive_org || book.tradition)
      : (book.tradition || "Hermetik Simya");

    const chaptersPreview = (book.chapters && book.chapters.length > 0)
      ? `<div class="local-book-chapters-preview"><strong>Bölümler (${book.chapters.length}):</strong> ${book.chapters.slice(0, 3).join(" • ")}${book.chapters.length > 3 ? "..." : ""}</div>`
      : "";

    const webLinkHtml = book.archive_url
      ? `<a href="${book.archive_url}" target="_blank" rel="noopener noreferrer" class="btn-open-file" style="border-color: rgba(56, 189, 248, 0.4); color: #38bdf8;" title="Orijinal Web Sayfasını Aç">🌐 Web ↗</a>`
      : "";

    card.innerHTML = `
      <div class="local-book-header">
        <div>
          <span class="search-card-type ${isAcademic ? 'type-recipe' : 'type-book'}" style="margin-bottom: 0.35rem; display: inline-block;">
            ${isAcademic ? '🏛️ ' : '📜 '}${badgeLabel}
          </span>
          <h3 class="local-book-title">${book.title}</h3>
          <div class="local-book-author">${book.author}</div>
        </div>
      </div>

      <div class="local-book-meta">
        <span>📅 ${book.era}</span>
        <span>💾 ${book.size_display}</span>
        <span>📝 ${book.word_count.toLocaleString()} Kelime</span>
        <span style="color: #10b981; font-weight: 600;">✓ Yerel İndirildi</span>
      </div>

      <p class="local-book-summary">${book.summary}</p>

      ${chaptersPreview}

      <div class="local-book-actions">
        <button class="btn-read-book" data-book-id="${book.id}">
          📖 ${isAcademic ? 'Arşivi Oku' : 'Kitabı Oku'}
        </button>
        <a href="${book.file_url}" target="_blank" class="btn-open-file" title="Yerel Markdown Dosyasını Aç">
          📂 Dosyayı Aç
        </a>
        ${webLinkHtml}
      </div>
    `;

    const readBtn = card.querySelector(".btn-read-book");
    readBtn?.addEventListener("click", () => {
      openBookReader(book.id);
    });

    return card;
  }

  searchInput?.addEventListener("input", renderLocalBooks);
  traditionFilter?.addEventListener("change", renderLocalBooks);
  renderLocalBooks();
}

// 13. IN-APP BOOK READER ENGINE
let currentReaderFontSize = 16;
let currentActiveBook = null;

function initBookReaderModal() {
  const modal = document.getElementById("book-reader-modal");
  const closeBtn = document.getElementById("reader-close-btn");
  const bottomCloseBtn = document.getElementById("reader-bottom-close");
  const fontInc = document.getElementById("reader-font-inc");
  const fontDec = document.getElementById("reader-font-dec");
  const fontVal = document.getElementById("reader-font-size-val");
  const chapterSelect = document.getElementById("reader-chapter-select");
  const searchInput = document.getElementById("reader-search-input");
  const matchPill = document.getElementById("reader-search-match-count");
  const copyBtn = document.getElementById("reader-copy-content-btn");
  const textBody = document.getElementById("reader-body-text");

  const closeReader = () => {
    modal?.classList.remove("active");
  };

  closeBtn?.addEventListener("click", closeReader);
  bottomCloseBtn?.addEventListener("click", closeReader);

  modal?.addEventListener("click", (e) => {
    if (e.target === modal) closeReader();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal?.classList.contains("active")) {
      closeReader();
    }
  });

  // Font size adjuster
  fontInc?.addEventListener("click", () => {
    if (currentReaderFontSize < 28) {
      currentReaderFontSize += 2;
      if (textBody) textBody.style.fontSize = `${currentReaderFontSize}px`;
      if (fontVal) fontVal.textContent = `${currentReaderFontSize}px`;
    }
  });

  fontDec?.addEventListener("click", () => {
    if (currentReaderFontSize > 12) {
      currentReaderFontSize -= 2;
      if (textBody) textBody.style.fontSize = `${currentReaderFontSize}px`;
      if (fontVal) fontVal.textContent = `${currentReaderFontSize}px`;
    }
  });

  // Chapter Jump Selector
  chapterSelect?.addEventListener("change", (e) => {
    const targetTitle = e.target.value;
    if (!targetTitle) return;

    const headings = textBody?.querySelectorAll("h1, h2, h3, h4, strong");
    if (!headings) return;

    for (let h of headings) {
      if (h.textContent.trim().toLowerCase().includes(targetTitle.trim().toLowerCase())) {
        h.scrollIntoView({ behavior: "smooth", block: "start" });
        h.style.background = "rgba(212, 175, 55, 0.25)";
        setTimeout(() => { h.style.background = ""; }, 2500);
        break;
      }
    }
  });

  // In-Book Text Search
  searchInput?.addEventListener("input", (e) => {
    const q = e.target.value.trim();
    if (!currentActiveBook || !textBody) return;

    if (!q) {
      renderBookContent(currentActiveBook.full_content || currentActiveBook.snippet);
      if (matchPill) matchPill.style.display = "none";
      return;
    }

    const rawContent = currentActiveBook.full_content || currentActiveBook.snippet;
    const escaped = escapeRegExpForReader(q);
    const regex = new RegExp(`(${escaped})`, "gi");
    const matches = rawContent.match(regex);
    const count = matches ? matches.length : 0;

    if (matchPill) {
      matchPill.style.display = "inline-block";
      matchPill.textContent = `${count} eşleşme`;
    }

    const highlighted = rawContent.replace(regex, `[[MARK]]$1[[/MARK]]`);
    renderBookContent(highlighted, true);

    const firstMatch = textBody.querySelector(".reader-highlight-match");
    if (firstMatch) {
      firstMatch.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });

  // Copy book text
  copyBtn?.addEventListener("click", () => {
    if (!currentActiveBook) return;
    const content = currentActiveBook.full_content || currentActiveBook.snippet;
    navigator.clipboard.writeText(content).then(() => {
      const orig = copyBtn.innerHTML;
      copyBtn.innerHTML = "✓ Kopyalandı!";
      setTimeout(() => { copyBtn.innerHTML = orig; }, 2000);
    });
  });
}

function escapeRegExpForReader(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderBookContent(rawText, hasMarks = false) {
  const container = document.getElementById("reader-body-text");
  if (!container) return;

  const lines = rawText.split("\n");
  let html = "";

  for (let line of lines) {
    let clean = escapeHtml(line);
    if (hasMarks) {
      clean = clean.replace(/\[\[MARK\]\]/g, `<mark class="reader-highlight-match">`).replace(/\[\[\/MARK\]\]/g, `</mark>`);
    }

    const trimmed = line.trim();
    if (trimmed.startsWith("# ")) {
      html += `<h1 class="reader-h1">${clean.substring(2)}</h1>`;
    } else if (trimmed.startsWith("## ")) {
      html += `<h2 class="reader-h2">${clean.substring(3)}</h2>`;
    } else if (trimmed.startsWith("### ")) {
      html += `<h3 class="reader-h3">${clean.substring(4)}</h3>`;
    } else if (trimmed.startsWith("> ")) {
      html += `<blockquote class="reader-blockquote">${clean.substring(2)}</blockquote>`;
    } else if (trimmed.startsWith("---")) {
      html += `<hr class="reader-hr" style="border: 0; border-top: 1px solid rgba(212, 175, 55, 0.2); margin: 1.5rem 0;"/>`;
    } else if (trimmed === "") {
      html += `<div style="height: 0.75rem;"></div>`;
    } else {
      html += `<p class="reader-p">${clean}</p>`;
    }
  }

  container.innerHTML = html;
}

function openBookReader(bookId) {
  const catalog = window.ALCHEMIST_LIBRARY_CATALOG || [];
  const book = catalog.find(b => b.id === bookId);
  if (!book) {
    alert("Kitap veritabanında bulunamadı: " + bookId);
    return;
  }

  currentActiveBook = book;

  const modal = document.getElementById("book-reader-modal");
  const titleEl = document.getElementById("reader-book-title");
  const authorEraEl = document.getElementById("reader-author-era");
  const statsBadge = document.getElementById("reader-stats-badge");
  const traditionBadge = document.getElementById("reader-tradition-badge");
  const chapterSelect = document.getElementById("reader-chapter-select");
  const openLocalLink = document.getElementById("reader-open-local-link");
  const filePathDisplay = document.getElementById("reader-file-path-display");
  const searchInput = document.getElementById("reader-search-input");
  const matchPill = document.getElementById("reader-search-match-count");
  const scrollContainer = document.getElementById("reader-scroll-container");

  if (titleEl) titleEl.textContent = book.title;
  if (authorEraEl) authorEraEl.textContent = `${book.author} • ${book.era}`;
  if (statsBadge) statsBadge.textContent = `${book.size_display} • ${book.word_count.toLocaleString()} Kelime`;
  if (traditionBadge) traditionBadge.textContent = book.tradition || "Hermetik";
  if (filePathDisplay) filePathDisplay.textContent = `📂 ${book.local_path} (file:///${book.local_path})`;
  if (openLocalLink) openLocalLink.href = book.file_url || book.local_path;
  if (searchInput) searchInput.value = "";
  if (matchPill) matchPill.style.display = "none";

  // Populate chapters
  if (chapterSelect) {
    chapterSelect.innerHTML = `<option value="">Bölüm Seçin (${book.chapters.length} Bölüm)...</option>`;
    (book.chapters || []).forEach((ch, idx) => {
      const opt = document.createElement("option");
      opt.value = ch;
      opt.textContent = `${idx + 1}. ${ch.substring(0, 45)}${ch.length > 45 ? "..." : ""}`;
      chapterSelect.appendChild(opt);
    });
  }

  // Render book text
  renderBookContent(book.full_content || book.snippet);

  // Scroll to top
  if (scrollContainer) scrollContainer.scrollTop = 0;

  // Open modal
  modal?.classList.add("active");
}

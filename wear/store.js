'use strict';
const brand = 'konfection';
document.body.dataset.brand = brand;
const $ = x => document.getElementById(x);
const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const money = n => new Intl.NumberFormat('tr-TR',{style:'currency',currency:'TRY',maximumFractionDigits:0}).format(n);
const STORAGE_KEY = 'core_official_release_v4_30sku';
const DEFAULT_PRODUCTS = [{"id": 1, "code": "D01", "slug": "d01-pulse-trunk", "series_folder": "core-drop", "sub_key": "drop", "brand": "konfection", "name": "D01 | Pulse Trunk", "short_name": "Pulse Trunk", "category": "CORE DROP", "collection_subtitle": "STREETWEAR GİRİŞ SERİSİ", "collection_subtitle_tr": "Streetwear Giriş Serisi", "sku": "CORE-D01", "price": 890, "stock": 60, "sizes": ["S", "M", "L", "XL"], "image": "./assets/products/D01-pulse-trunk.webp", "card_image": "./assets/cards/D01-pulse-trunk-kart.webp", "page_url": "./product/d01-pulse-trunk.html", "description": "Kontrast beyaz biye hatlı, enerjik streetwear kesim trunk. Gün boyu formu koruyan esnek bel kemeri ve nefes alan pamuklu dokusuyla hareketli şehir ritmi için tasarlandı.", "fabric": "%92 Taranmış Pamuk · %8 Elastan (210 GSM)", "colorway": "Core Black / Clean White", "fit": "Anatomik Kısa Paça Trunk", "waistband": "Üst satır core / alt satır drop (Second-Line System)", "active": true, "featured": true, "priority_drop": true, "is_demo": false, "created_at": "2026-10-25T20:50:10Z", "updated_at": "2026-10-25T20:50:10Z"}, {"id": 2, "code": "D02", "slug": "d02-signal-brief", "series_folder": "core-drop", "sub_key": "drop", "brand": "konfection", "name": "D02 | Signal Brief", "short_name": "Signal Brief", "category": "CORE DROP", "collection_subtitle": "STREETWEAR GİRİŞ SERİSİ", "collection_subtitle_tr": "Streetwear Giriş Serisi", "sku": "CORE-D02", "price": 850, "stock": 55, "sizes": ["S", "M", "L", "XL"], "image": "./assets/products/D02-signal-brief.webp", "card_image": "./assets/cards/D02-signal-brief-kart.webp", "page_url": "./product/d02-signal-brief.html", "description": "Yüksek kontrast siyah biyeli, temiz beyaz sinyal slip. Bacak hareketlerini kısıtlamayan yüksek kesim mimarisi ve çift katmanlı ön panel desteği sunar.", "fabric": "%92 Taranmış Pamuk · %8 Elastan (210 GSM)", "colorway": "Clean White / Core Black", "fit": "Yüksek Kesim Ergonomik Brief", "waistband": "Üst satır core / alt satır drop (Second-Line System)", "active": true, "featured": true, "priority_drop": true, "is_demo": false, "created_at": "2026-10-25T20:50:10Z", "updated_at": "2026-10-25T20:50:10Z"}, {"id": 3, "code": "D03", "slug": "d03-shadow-boxer-brief", "series_folder": "core-drop", "sub_key": "drop", "brand": "konfection", "name": "D03 | Shadow Boxer Brief", "short_name": "Shadow Boxer Brief", "category": "CORE DROP", "collection_subtitle": "STREETWEAR GİRİŞ SERİSİ", "collection_subtitle_tr": "Streetwear Giriş Serisi", "sku": "CORE-D03", "price": 950, "stock": 65, "sizes": ["S", "M", "L", "XL"], "image": "./assets/products/D03-shadow-boxer-brief.webp", "card_image": "./assets/cards/D03-shadow-boxer-brief-kart.webp", "page_url": "./product/d03-shadow-boxer-brief.html", "description": "Mat kömür-siyah ton-sür-ton dikişli günlük boxer brief. Paça kıvrılmasını önleyen kilitli etek ucu ve yumuşak iç dikişleriyle kusursuz konfor sağlar.", "fabric": "%92 Taranmış Pamuk · %8 Elastan (210 GSM)", "colorway": "Shadow Charcoal", "fit": "Orta Paça Destekli Boxer Brief", "waistband": "Üst satır core / alt satır drop (Second-Line System)", "active": true, "featured": true, "priority_drop": true, "is_demo": false, "created_at": "2026-10-25T20:50:11Z", "updated_at": "2026-10-25T20:50:11Z"}, {"id": 4, "code": "D04", "slug": "d04-voltage-long-leg", "series_folder": "core-drop", "sub_key": "drop", "brand": "konfection", "name": "D04 | Voltage Long-Leg", "short_name": "Voltage Long-Leg", "category": "CORE DROP", "collection_subtitle": "STREETWEAR GİRİŞ SERİSİ", "collection_subtitle_tr": "Streetwear Giriş Serisi", "sku": "CORE-D04", "price": 990, "stock": 45, "sizes": ["S", "M", "L", "XL"], "image": "./assets/products/D04-voltage-long-leg.webp", "card_image": "./assets/cards/D04-voltage-long-leg-kart.webp", "page_url": "./product/d04-voltage-long-leg.html", "description": "Asit yeşili anatomik kontur dikişli uzun paça boxer. Aktif günlerde sürtünmeyi sıfıra indiren uzun bacak formu ve dinamik renk kontrastıyla öne çıkar.", "fabric": "%90 Pamuk · %10 Elastan (215 GSM)", "colorway": "Core Black / Acid Green", "fit": "Uzun Paça Anti-Chafing Kalıp", "waistband": "Üst satır core / alt satır drop (Second-Line System)", "active": true, "featured": true, "priority_drop": true, "is_demo": false, "created_at": "2026-10-25T20:50:12Z", "updated_at": "2026-10-25T20:50:12Z"}, {"id": 5, "code": "D05", "slug": "d05-static-lounge-short", "series_folder": "core-drop", "sub_key": "drop", "brand": "konfection", "name": "D05 | Static Lounge Short", "short_name": "Static Lounge Short", "category": "CORE DROP", "collection_subtitle": "STREETWEAR GİRİŞ SERİSİ", "collection_subtitle_tr": "Streetwear Giriş Serisi", "sku": "CORE-D05", "price": 1390, "stock": 40, "sizes": ["S", "M", "L", "XL"], "image": "./assets/products/D05-static-lounge-short.webp", "card_image": "./assets/cards/D05-static-lounge-short-kart.webp", "page_url": "./product/d05-static-lounge-short.html", "description": "Metal uçlu zeytin yeşili kordonlu, ağır gramajlı streetwear ev ve lounge şortu. Yan cepleri ve sol paçadaki minimal core imzasıyla ev içi ve dışı kullanıma uygundur.", "fabric": "%100 Ağır Gramajlı Fransız Havlu Pamuğu (320 GSM)", "colorway": "Core Black / Olive Cord", "fit": "Rahat Kesim Lounge Şort", "waistband": "Üst satır core / alt satır drop (Second-Line System)", "active": true, "featured": true, "priority_drop": true, "is_demo": false, "created_at": "2026-10-25T20:50:13Z", "updated_at": "2026-10-25T20:50:13Z"}, {"id": 6, "code": "D06", "slug": "d06-rabbit-trunk", "series_folder": "core-drop", "sub_key": "drop", "brand": "konfection", "name": "D06 | Rabbit Trunk", "short_name": "Rabbit Trunk", "category": "CORE DROP", "collection_subtitle": "STREETWEAR GİRİŞ SERİSİ", "collection_subtitle_tr": "Streetwear Giriş Serisi", "sku": "CORE-D06", "price": 920, "stock": 50, "sizes": ["S", "M", "L", "XL"], "image": "./assets/products/D06-rabbit-trunk.webp", "card_image": "./assets/cards/D06-rabbit-trunk-kart.webp", "page_url": "./product/d06-rabbit-trunk.html", "description": "Kobalt mavisi topografik dalga desenli dinamik hip trunk. Ultra esnek mikro-dokuma gövdesi ve kontrast mavi biye bitişiyle serinin en enerjik parçasıdır.", "fabric": "%88 Mikro-lif · %12 Elastan", "colorway": "Core Black / Cobalt Blue", "fit": "Düşük Bel Dinamik Hip Trunk", "waistband": "Üst satır core / alt satır drop (Second-Line System)", "active": true, "featured": true, "priority_drop": true, "is_demo": false, "created_at": "2026-10-25T20:50:14Z", "updated_at": "2026-10-25T20:50:14Z"}, {"id": 7, "code": "C01", "slug": "c01-contour-trunk", "series_folder": "core", "sub_key": "core", "brand": "konfection", "name": "C01 | Contour Trunk", "short_name": "Contour Trunk", "category": "CORE", "collection_subtitle": "ANA İMZA KOLEKSİYONU", "collection_subtitle_tr": "Ana İmza Koleksiyonu", "sku": "CORE-C01", "price": 1190, "stock": 80, "sizes": ["S", "M", "L", "XL"], "image": "./assets/products/C01-contour-trunk.webp", "card_image": "./assets/cards/C01-contour-trunk-kart.webp", "page_url": "./product/c01-contour-trunk.html", "description": "Markanın imza parçası: kusursuz anatomik kalıp ve saf siyah Avusturya mikro-modal trunk. İkinci ten hissi veren ultra yumuşak dokusuyla dört mevsim temel konfor sunar.", "fabric": "%94 Avusturya Mikro-Modal · %6 Elastan", "colorway": "Obsidian Black", "fit": "İmza Anatomik Trunk", "waistband": "Tek satır core imzalı kemer", "active": true, "featured": true, "priority_drop": false, "is_demo": false, "created_at": "2026-10-25T20:50:15Z", "updated_at": "2026-10-25T20:50:15Z"}, {"id": 8, "code": "C02", "slug": "c02-form-boxer-brief", "series_folder": "core", "sub_key": "core", "brand": "konfection", "name": "C02 | Form Boxer Brief", "short_name": "Form Boxer Brief", "category": "CORE", "collection_subtitle": "ANA İMZA KOLEKSİYONU", "collection_subtitle_tr": "Ana İmza Koleksiyonu", "sku": "CORE-C02", "price": 1250, "stock": 75, "sizes": ["S", "M", "L", "XL"], "image": "./assets/products/C02-form-boxer-brief.webp", "card_image": "./assets/cards/C02-form-boxer-brief-kart.webp", "page_url": "./product/c02-form-boxer-brief.html", "description": "Destekleyici silüet ve gün boyu formunu koruyan derin lacivert orta paça boxer brief. Doğal nefes alabilirliği ve esnek bel bandıyla gün boyu sabit kalır.", "fabric": "%94 Avusturya Mikro-Modal · %6 Elastan", "colorway": "Deep Navy", "fit": "Destekleyici Orta Paça Boxer Brief", "waistband": "Tek satır core imzalı kemer", "active": true, "featured": false, "priority_drop": false, "is_demo": false, "created_at": "2026-10-25T20:50:15Z", "updated_at": "2026-10-25T20:50:15Z"}, {"id": 9, "code": "C03", "slug": "c03-ease-long-leg", "series_folder": "core", "sub_key": "core", "brand": "konfection", "name": "C03 | Ease Long-Leg", "short_name": "Ease Long-Leg", "category": "CORE", "collection_subtitle": "ANA İMZA KOLEKSİYONU", "collection_subtitle_tr": "Ana İmza Koleksiyonu", "sku": "CORE-C03", "price": 1290, "stock": 60, "sizes": ["S", "M", "L", "XL"], "image": "./assets/products/C03-ease-long-leg.webp", "card_image": "./assets/cards/C03-ease-long-leg-kart.webp", "page_url": "./product/c03-ease-long-leg.html", "description": "Sürtünmeyi önleyen uzun paça konforu ve koyu selvi yeşili tonu. Takım elbise veya dar kesim pantolonlar altında iz yapmayan pürüzsüz bitişe sahiptir.", "fabric": "%94 Avusturya Mikro-Modal · %6 Elastan", "colorway": "Cypress Green", "fit": "Uzun Paça Pürüzsüz Kalıp", "waistband": "Tek satır core imzalı kemer", "active": true, "featured": false, "priority_drop": false, "is_demo": false, "created_at": "2026-10-25T20:50:16Z", "updated_at": "2026-10-25T20:50:16Z"}, {"id": 10, "code": "C04", "slug": "c04-clean-brief", "series_folder": "core", "sub_key": "core", "brand": "konfection", "name": "C04 | Clean Brief", "short_name": "Clean Brief", "category": "CORE", "collection_subtitle": "ANA İMZA KOLEKSİYONU", "collection_subtitle_tr": "Ana İmza Koleksiyonu", "sku": "CORE-C04", "price": 1090, "stock": 55, "sizes": ["S", "M", "L", "XL"], "image": "./assets/products/C04-clean-brief.webp", "card_image": "./assets/cards/C04-clean-brief-kart.webp", "page_url": "./product/c04-clean-brief.html", "description": "Minimalist modern slip; kırık beyaz gövde ve ton-sür-ton tek satır core imzalı kemer. Açık renk kıyafetler altında görünmezlik ve hafiflik arayanlar için idealdir.", "fabric": "%94 Avusturya Mikro-Modal · %6 Elastan", "colorway": "Raw Ecru", "fit": "Minimalist Klasik Slip", "waistband": "Tek satır core imzalı kemer", "active": true, "featured": false, "priority_drop": false, "is_demo": false, "created_at": "2026-10-25T20:50:17Z", "updated_at": "2026-10-25T20:50:17Z"}, {"id": 11, "code": "C05", "slug": "c05-soft-lounge-short", "series_folder": "core", "sub_key": "core", "brand": "konfection", "name": "C05 | Soft Lounge Short", "short_name": "Soft Lounge Short", "category": "CORE", "collection_subtitle": "ANA İMZA KOLEKSİYONU", "collection_subtitle_tr": "Ana İmza Koleksiyonu", "sku": "CORE-C05", "price": 1590, "stock": 45, "sizes": ["S", "M", "L", "XL"], "image": "./assets/products/C05-soft-lounge-short.webp", "card_image": "./assets/cards/C05-soft-lounge-short-kart.webp", "page_url": "./product/c05-soft-lounge-short.html", "description": "Bordo-mürdüm tonunda ipeksi modal ve Pima pamuğu karışımlı rafine ev şortu. Dökümlü yapısı ve ayarlanabilir kordonlu kemeriyle üst düzey dinlenme konforu sağlar.", "fabric": "%70 Modal · %25 Pima Pamuğu · %5 Elastan", "colorway": "Oxblood Burgundy", "fit": "Rafine Ev & Dinlenme Şortu", "waistband": "Tek satır core imzalı kemer", "active": true, "featured": false, "priority_drop": false, "is_demo": false, "created_at": "2026-10-25T20:50:18Z", "updated_at": "2026-10-25T20:50:18Z"}, {"id": 12, "code": "C06", "slug": "c06-hotel-set", "series_folder": "core", "sub_key": "core", "brand": "konfection", "name": "C06 | Hotel Set", "short_name": "Hotel Set", "category": "CORE", "collection_subtitle": "ANA İMZA KOLEKSİYONU", "collection_subtitle_tr": "Ana İmza Koleksiyonu", "sku": "CORE-C06", "price": 2490, "stock": 30, "sizes": ["S", "M", "L", "XL"], "image": "./assets/products/C06-hotel-set.webp", "card_image": "./assets/cards/C06-hotel-set-kart.webp", "page_url": "./product/c06-hotel-set.html", "description": "Özel dokulu siyah seyahat çantası ve imza Contour Trunk'tan oluşan seyahat seti. İş seyahatleri ve hafta sonu kaçamakları için kompakt ve şık bir eşlikçidir.", "fabric": "Dokulu Seyahat Çantası + Mikro-Modal Trunk", "colorway": "Core Black Edition", "fit": "Özel Seyahat & Hediye Seti", "waistband": "Tek satır core imzalı kemer", "active": true, "featured": true, "priority_drop": false, "is_demo": false, "created_at": "2026-10-25T20:50:19Z", "updated_at": "2026-10-25T20:50:19Z"}, {"id": 13, "code": "M01", "slug": "m01-sprint-trunk", "series_folder": "core-move", "sub_key": "move", "brand": "konfection", "name": "M01 | Sprint Trunk", "short_name": "Sprint Trunk", "category": "CORE MOVE", "collection_subtitle": "PERFORMANS & SPOR SERİSİ", "collection_subtitle_tr": "Performans & Spor Serisi", "sku": "CORE-M01", "price": 1290, "stock": 55, "sizes": ["S", "M", "L", "XL"], "image": "./assets/products/M01-sprint-trunk.webp", "card_image": "./assets/cards/M01-sprint-trunk-kart.webp", "page_url": "./product/m01-sprint-trunk.html", "description": "Yan panelleri lazer perfore havalandırmalı yüksek performans trunk. Nem transferini hızlandıran aero-poliamid dokusuyla yoğun antrenmanlarda serinlik sağlar.", "fabric": "%85 Aero-Poliamid · %15 Elastan", "colorway": "Carbon Black", "fit": "Atletik Kompresyon Trunk", "waistband": "Üst satır core / alt satır move (Second-Line System)", "active": true, "featured": true, "priority_drop": false, "is_demo": false, "created_at": "2026-10-25T20:50:19Z", "updated_at": "2026-10-25T20:50:19Z"}, {"id": 14, "code": "M02", "slug": "m02-glide-long-leg", "series_folder": "core-move", "sub_key": "move", "brand": "konfection", "name": "M02 | Glide Long-Leg", "short_name": "Glide Long-Leg", "category": "CORE MOVE", "collection_subtitle": "PERFORMANS & SPOR SERİSİ", "collection_subtitle_tr": "Performans & Spor Serisi", "sku": "CORE-M02", "price": 1390, "stock": 50, "sizes": ["S", "M", "L", "XL"], "image": "./assets/products/M02-glide-long-leg.webp", "card_image": "./assets/cards/M02-glide-long-leg-kart.webp", "page_url": "./product/m02-glide-long-leg.html", "description": "Koşu ve yüksek tempolu antrenmanlar için sürtünme önleyici file panelli uzun bacak performans boxer'ı. Kas grubunu saran esnek yapısıyla hareketi destekler.", "fabric": "%85 Aero-Poliamid · %15 Elastan", "colorway": "Graphite / Slate", "fit": "Uzun Paça Performans Boxer", "waistband": "Üst satır core / alt satır move (Second-Line System)", "active": true, "featured": false, "priority_drop": false, "is_demo": false, "created_at": "2026-10-25T20:50:20Z", "updated_at": "2026-10-25T20:50:20Z"}, {"id": 15, "code": "M03", "slug": "m03-pulse-brief", "series_folder": "core-move", "sub_key": "move", "brand": "konfection", "name": "M03 | Pulse Brief", "short_name": "Pulse Brief", "category": "CORE MOVE", "collection_subtitle": "PERFORMANS & SPOR SERİSİ", "collection_subtitle_tr": "Performans & Spor Serisi", "sku": "CORE-M03", "price": 1150, "stock": 45, "sizes": ["S", "M", "L", "XL"], "image": "./assets/products/M03-pulse-brief.webp", "card_image": "./assets/cards/M03-pulse-brief-kart.webp", "page_url": "./product/m03-pulse-brief.html", "description": "Elektrik mavisi teknik flatlock dikişli, maksimum bacak açısı ve hareket özgürlüğü sunan atletik slip.", "fabric": "%85 Aero-Poliamid · %15 Elastan", "colorway": "Graphite / Electric Blue", "fit": "Atletik Performans Slip", "waistband": "Üst satır core / alt satır move (Second-Line System)", "active": true, "featured": false, "priority_drop": false, "is_demo": false, "created_at": "2026-10-25T20:50:21Z", "updated_at": "2026-10-25T20:50:21Z"}, {"id": 16, "code": "M04", "slug": "m04-vent-mesh-trunk", "series_folder": "core-move", "sub_key": "move", "brand": "konfection", "name": "M04 | Vent Mesh Trunk", "short_name": "Vent Mesh Trunk", "category": "CORE MOVE", "collection_subtitle": "PERFORMANS & SPOR SERİSİ", "collection_subtitle_tr": "Performans & Spor Serisi", "sku": "CORE-M04", "price": 1320, "stock": 50, "sizes": ["S", "M", "L", "XL"], "image": "./assets/products/M04-vent-mesh-trunk.webp", "card_image": "./assets/cards/M04-vent-mesh-trunk-kart.webp", "page_url": "./product/m04-vent-mesh-trunk.html", "description": "Geniş gözenekli yan mesh panelleriyle maksimum hava akışı sağlayan teknik spor trunk.", "fabric": "%82 Poliamid Mesh · %18 Elastan", "colorway": "Jet Black", "fit": "Havalandırmalı Mesh Trunk", "waistband": "Üst satır core / alt satır move (Second-Line System)", "active": true, "featured": false, "priority_drop": false, "is_demo": false, "created_at": "2026-10-25T20:50:21Z", "updated_at": "2026-10-25T20:50:21Z"}, {"id": 17, "code": "M05", "slug": "m05-lift-jock", "series_folder": "core-move", "sub_key": "move", "brand": "konfection", "name": "M05 | Lift Jock", "short_name": "Lift Jock", "category": "CORE MOVE", "collection_subtitle": "PERFORMANS & SPOR SERİSİ", "collection_subtitle_tr": "Performans & Spor Serisi", "sku": "CORE-M05", "price": 1090, "stock": 40, "sizes": ["S", "M", "L", "XL"], "image": "./assets/products/M05-lift-jock.webp", "card_image": "./assets/cards/M05-lift-jock-kart.webp", "page_url": "./product/m05-lift-jock.html", "description": "Ergonomik ön kese ve yüksek elastikiyetli arka bantlarıyla ağırlık ve kondisyon antrenmanları için tasarlanmış spor jockstrap.", "fabric": "%85 Aero-Poliamid · %15 Elastan", "colorway": "Graphite / Cobalt Stitch", "fit": "Atletik Destek Jockstrap", "waistband": "Üst satır core / alt satır move (Second-Line System)", "active": true, "featured": false, "priority_drop": false, "is_demo": false, "created_at": "2026-10-25T20:50:22Z", "updated_at": "2026-10-25T20:50:22Z"}, {"id": 18, "code": "M06", "slug": "m06-tide-swim-trunk", "series_folder": "core-move", "sub_key": "move", "brand": "konfection", "name": "M06 | Tide Swim Trunk", "short_name": "Tide Swim Trunk", "category": "CORE MOVE", "collection_subtitle": "PERFORMANS & SPOR SERİSİ", "collection_subtitle_tr": "Performans & Spor Serisi", "sku": "CORE-M06", "price": 1690, "stock": 35, "sizes": ["S", "M", "L", "XL"], "image": "./assets/products/M06-tide-swim-trunk.webp", "card_image": "./assets/cards/M06-tide-swim-trunk-kart.webp", "page_url": "./product/m06-tide-swim-trunk.html", "description": "Hızlı kuruyan, klor ve tuzlu suya dayanıklı kompakt yüzücü mayo trunk. UV korumalı tok dokusuyla plaj ve havuz kullanımına uygundur.", "fabric": "%80 Geri Dönüştürülmüş Naylon · %20 Xtra Life Lycra", "colorway": "Deep Petrol Blue", "fit": "Kompakt Yüzücü Mayo Trunk", "waistband": "Üst satır core / alt satır move (Second-Line System)", "active": true, "featured": false, "priority_drop": false, "is_demo": false, "created_at": "2026-10-25T20:50:23Z", "updated_at": "2026-10-25T20:50:23Z"}, {"id": 19, "code": "O01", "slug": "o01-after-brief", "series_folder": "core-moon", "sub_key": "moon", "brand": "konfection", "name": "O01 | After Brief", "short_name": "After Brief", "category": "CORE MOON", "collection_subtitle": "GECE & DUYUSAL SERİ", "collection_subtitle_tr": "Gece & Duyusal Seri", "sku": "CORE-O01", "price": 1390, "stock": 40, "sizes": ["S", "M", "L", "XL"], "image": "./assets/products/O01-after-brief.webp", "card_image": "./assets/cards/O01-after-brief-kart.webp", "page_url": "./product/o01-after-brief.html", "description": "Yarı mat kaplamalı yan paneller ve heykelsi kesimli gece slibi. Tenle bütünleşen yumuşak iç yüzeyi ve cesur dış hatlarıyla geceye özel tasarlandı.", "fabric": "%86 Mat Kaplamalı Mikrofiber · %14 Elastan", "colorway": "Midnight Black", "fit": "Heykelsi Kesim Gece Slibi", "waistband": "Üst satır core / alt satır moon (Second-Line System)", "active": true, "featured": false, "priority_drop": false, "is_demo": false, "created_at": "2026-10-25T20:50:23Z", "updated_at": "2026-10-25T20:50:23Z"}, {"id": 20, "code": "O02", "slug": "o02-eclipse-trunk", "series_folder": "core-moon", "sub_key": "moon", "brand": "konfection", "name": "O02 | Eclipse Trunk", "short_name": "Eclipse Trunk", "category": "CORE MOON", "collection_subtitle": "GECE & DUYUSAL SERİ", "collection_subtitle_tr": "Gece & Duyusal Seri", "sku": "CORE-O02", "price": 1490, "stock": 45, "sizes": ["S", "M", "L", "XL"], "image": "./assets/products/O02-eclipse-trunk.webp", "card_image": "./assets/cards/O02-eclipse-trunk-kart.webp", "page_url": "./product/o02-eclipse-trunk.html", "description": "Yarı saydam duman grisi yan panelleriyle gölge ve ten oyunları kuran düşük bel trunk. Karşılıklı hilal logolu kemeriyle serinin imza parçasıdır.", "fabric": "%84 İnce Mikro-Tül · %16 Elastan", "colorway": "Eclipse Smoke", "fit": "Yarı Saydam Düşük Bel Trunk", "waistband": "Üst satır core / alt satır moon (Second-Line System)", "active": true, "featured": true, "priority_drop": false, "is_demo": false, "created_at": "2026-10-25T20:50:24Z", "updated_at": "2026-10-25T20:50:24Z"}, {"id": 21, "code": "O03", "slug": "o03-heat-mesh-brief", "series_folder": "core-moon", "sub_key": "moon", "brand": "konfection", "name": "O03 | Heat Mesh Brief", "short_name": "Heat Mesh Brief", "category": "CORE MOON", "collection_subtitle": "GECE & DUYUSAL SERİ", "collection_subtitle_tr": "Gece & Duyusal Seri", "sku": "CORE-O03", "price": 1390, "stock": 35, "sizes": ["S", "M", "L", "XL"], "image": "./assets/products/O03-heat-mesh-brief.webp", "card_image": "./assets/cards/O03-heat-mesh-brief-kart.webp", "page_url": "./product/o03-heat-mesh-brief.html", "description": "Önü opak mikro-modal, yanları transparan ince tül ağ dokulu cesur brief. Hafifliği ve nefes alan yapısıyla duyusal bir deneyim sunar.", "fabric": "%78 Mikro-Modal · %22 Transparan Tül", "colorway": "Nocturne Black", "fit": "Transparan Yan Panelli Brief", "waistband": "Üst satır core / alt satır moon (Second-Line System)", "active": true, "featured": false, "priority_drop": false, "is_demo": false, "created_at": "2026-10-25T20:50:25Z", "updated_at": "2026-10-25T20:50:25Z"}, {"id": 22, "code": "O04", "slug": "o04-blue-hour-bikini", "series_folder": "core-moon", "sub_key": "moon", "brand": "konfection", "name": "O04 | Blue Hour Bikini", "short_name": "Blue Hour Bikini", "category": "CORE MOON", "collection_subtitle": "GECE & DUYUSAL SERİ", "collection_subtitle_tr": "Gece & Duyusal Seri", "sku": "CORE-O04", "price": 1350, "stock": 35, "sizes": ["S", "M", "L", "XL"], "image": "./assets/products/O04-blue-hour-bikini.webp", "card_image": "./assets/cards/O04-blue-hour-bikini-kart.webp", "page_url": "./product/o04-blue-hour-bikini.html", "description": "Alacakaranlık mavisi satenimsi parlaklıkta, yüksek oyuklu tensel bikini brief.", "fabric": "%88 Saten Poliamid · %12 Elastan", "colorway": "Blue Hour Navy", "fit": "Yüksek Oyuklu Bikini Brief", "waistband": "Üst satır core / alt satır moon (Second-Line System)", "active": true, "featured": false, "priority_drop": false, "is_demo": false, "created_at": "2026-10-25T20:50:26Z", "updated_at": "2026-10-25T20:50:26Z"}, {"id": 23, "code": "O05", "slug": "o05-motel-trunk", "series_folder": "core-moon", "sub_key": "moon", "brand": "konfection", "name": "O05 | Motel Trunk", "short_name": "Motel Trunk", "category": "CORE MOON", "collection_subtitle": "GECE & DUYUSAL SERİ", "collection_subtitle_tr": "Gece & Duyusal Seri", "sku": "CORE-O05", "price": 1490, "stock": 40, "sizes": ["S", "M", "L", "XL"], "image": "./assets/products/O05-motel-trunk.webp", "card_image": "./assets/cards/O05-motel-trunk-kart.webp", "page_url": "./product/o05-motel-trunk.html", "description": "Gece yarısı mürdüm-antrasit tonunda, kadifemsi fırçalanmış dokulu sinematik kare kesim trunk.", "fabric": "%90 Fırçalanmış Mikro-Modal · %10 Elastan", "colorway": "Dark Plum / Aubergine", "fit": "Kare Kesim Düşük Bel Trunk", "waistband": "Üst satır core / alt satır moon (Second-Line System)", "active": true, "featured": false, "priority_drop": false, "is_demo": false, "created_at": "2026-10-25T20:50:26Z", "updated_at": "2026-10-25T20:50:26Z"}, {"id": 24, "code": "O06", "slug": "o06-full-moon-jock", "series_folder": "core-moon", "sub_key": "moon", "brand": "konfection", "name": "O06 | Full Moon Jock", "short_name": "Full Moon Jock", "category": "CORE MOON", "collection_subtitle": "GECE & DUYUSAL SERİ", "collection_subtitle_tr": "Gece & Duyusal Seri", "sku": "CORE-O06", "price": 1450, "stock": 30, "sizes": ["S", "M", "L", "XL"], "image": "./assets/products/O06-full-moon-jock.webp", "card_image": "./assets/cards/O06-full-moon-jock-kart.webp", "page_url": "./product/o06-full-moon-jock.html", "description": "Kabartma dokulu ön panel ve minimal kemer mimarisiyle gece koleksiyonunun en iddialı tasarımı.", "fabric": "%85 Dokulu Mikrofiber · %15 Elastan", "colorway": "Obsidian Black", "fit": "Minimalist Gece Jockstrap", "waistband": "Üst satır core / alt satır moon (Second-Line System)", "active": true, "featured": false, "priority_drop": false, "is_demo": false, "created_at": "2026-10-25T20:50:27Z", "updated_at": "2026-10-25T20:50:27Z"}, {"id": 25, "code": "R01", "slug": "r01-noir-trunk", "series_folder": "core-rare", "sub_key": "rare", "brand": "konfection", "name": "R01 | Noir Trunk", "short_name": "Noir Trunk", "category": "CORE RARE", "collection_subtitle": "SINIRLI ÜRETİM LÜKS SERİ", "collection_subtitle_tr": "Sınırlı Üretim Lüks Seri", "sku": "CORE-R01", "price": 2190, "stock": 25, "sizes": ["S", "M", "L", "XL"], "image": "./assets/products/R01-noir-trunk.webp", "card_image": "./assets/cards/R01-noir-trunk-kart.webp", "page_url": "./product/r01-noir-trunk.html", "description": "Saf dut ipeği ve mikro-modal karışımı gövde, şampanya altın dokuma kemerle buluşuyor. Sınırlı sayıda üretilen koleksiyonun amiral gemisi parçasıdır.", "fabric": "%75 Mikro-Modal · %18 Dut İpeği · %7 Elastan", "colorway": "Noir / Champagne Gold", "fit": "Lüks İpek-Modal Trunk", "waistband": "Üst satır core / alt satır rare (Second-Line System)", "active": true, "featured": true, "priority_drop": false, "is_demo": false, "created_at": "2026-10-25T20:50:28Z", "updated_at": "2026-10-25T20:50:28Z"}, {"id": 26, "code": "R02", "slug": "r02-silk-contour-brief", "series_folder": "core-rare", "sub_key": "rare", "brand": "konfection", "name": "R02 | Silk Contour Brief", "short_name": "Silk Contour Brief", "category": "CORE RARE", "collection_subtitle": "SINIRLI ÜRETİM LÜKS SERİ", "collection_subtitle_tr": "Sınırlı Üretim Lüks Seri", "sku": "CORE-R02", "price": 2090, "stock": 20, "sizes": ["S", "M", "L", "XL"], "image": "./assets/products/R02-silk-contour-brief.webp", "card_image": "./assets/cards/R02-silk-contour-brief-kart.webp", "page_url": "./product/r02-silk-contour-brief.html", "description": "Sıvı-saten parlaklığında, elde bitirilmiş dikişli sınırlı üretim İtalyan ipek-saten slip.", "fabric": "%82 İtalyan İpek-Saten · %18 Elastan", "colorway": "Liquid Onyx", "fit": "İpek-Saten Lüks Slip", "waistband": "Üst satır core / alt satır rare (Second-Line System)", "active": true, "featured": false, "priority_drop": false, "is_demo": false, "created_at": "2026-10-25T20:50:29Z", "updated_at": "2026-10-25T20:50:29Z"}, {"id": 27, "code": "R03", "slug": "r03-merser-boxer-brief", "series_folder": "core-rare", "sub_key": "rare", "brand": "konfection", "name": "R03 | Merser Boxer Brief", "short_name": "Merser Boxer Brief", "category": "CORE RARE", "collection_subtitle": "SINIRLI ÜRETİM LÜKS SERİ", "collection_subtitle_tr": "Sınırlı Üretim Lüks Seri", "sku": "CORE-R03", "price": 2290, "stock": 25, "sizes": ["S", "M", "L", "XL"], "image": "./assets/products/R03-merser-boxer-brief.webp", "card_image": "./assets/cards/R03-merser-boxer-brief-kart.webp", "page_url": "./product/r03-merser-boxer-brief.html", "description": "Çift merserize Mısır Giza 45 pamuğu ile üretilmiş, ipeksi parlaklıkta zamansız boxer brief.", "fabric": "%92 Giza 45 Merserize Pamuk · %8 Elastan", "colorway": "Deep Obsidian", "fit": "Merserize Giza Pamuğu Boxer Brief", "waistband": "Üst satır core / alt satır rare (Second-Line System)", "active": true, "featured": false, "priority_drop": false, "is_demo": false, "created_at": "2026-10-25T20:50:29Z", "updated_at": "2026-10-25T20:50:29Z"}, {"id": 28, "code": "R04", "slug": "r04-espresso-lounge-short", "series_folder": "core-rare", "sub_key": "rare", "brand": "konfection", "name": "R04 | Espresso Lounge Short", "short_name": "Espresso Lounge Short", "category": "CORE RARE", "collection_subtitle": "SINIRLI ÜRETİM LÜKS SERİ", "collection_subtitle_tr": "Sınırlı Üretim Lüks Seri", "sku": "CORE-R04", "price": 2890, "stock": 20, "sizes": ["S", "M", "L", "XL"], "image": "./assets/products/R04-espresso-lounge-short.webp", "card_image": "./assets/cards/R04-espresso-lounge-short-kart.webp", "page_url": "./product/r04-espresso-lounge-short.html", "description": "Altın uçlu kordon detayı, kaşmir dokunuşlu ipek-modal kumaşı ve koyu espresso tonuyla sınırlı üretim ev şortu.", "fabric": "%70 Modal · %22 İpek · %8 Kaşmir Dokunuş", "colorway": "Dark Espresso / Gold", "fit": "Lüks İpek-Kaşmir Lounge Şort", "waistband": "Üst satır core / alt satır rare (Second-Line System)", "active": true, "featured": false, "priority_drop": false, "is_demo": false, "created_at": "2026-10-25T20:50:30Z", "updated_at": "2026-10-25T20:50:30Z"}, {"id": 29, "code": "R05", "slug": "r05-midnight-slip", "series_folder": "core-rare", "sub_key": "rare", "brand": "konfection", "name": "R05 | Midnight Slip", "short_name": "Midnight Slip", "category": "CORE RARE", "collection_subtitle": "SINIRLI ÜRETİM LÜKS SERİ", "collection_subtitle_tr": "Sınırlı Üretim Lüks Seri", "sku": "CORE-R05", "price": 1990, "stock": 20, "sizes": ["S", "M", "L", "XL"], "image": "./assets/products/R05-midnight-slip.webp", "card_image": "./assets/cards/R05-midnight-slip-kart.webp", "page_url": "./product/r05-midnight-slip.html", "description": "Gece mavisi ince fitilli Sea Island pamuğu ve altın kemer logolu yüksek işçilikli slip.", "fabric": "%88 Sea Island Pamuğu · %12 İpek-Elastan", "colorway": "Midnight Indigo", "fit": "İnce Fitilli Lüks Slip", "waistband": "Üst satır core / alt satır rare (Second-Line System)", "active": true, "featured": false, "priority_drop": false, "is_demo": false, "created_at": "2026-10-25T20:50:31Z", "updated_at": "2026-10-25T20:50:31Z"}, {"id": 30, "code": "R06", "slug": "r06-atelier-trunk", "series_folder": "core-rare", "sub_key": "rare", "brand": "konfection", "name": "R06 | Atelier Trunk", "short_name": "Atelier Trunk", "category": "CORE RARE", "collection_subtitle": "SINIRLI ÜRETİM LÜKS SERİ", "collection_subtitle_tr": "Sınırlı Üretim Lüks Seri", "sku": "CORE-R06", "price": 2390, "stock": 20, "sizes": ["S", "M", "L", "XL"], "image": "./assets/products/R06-atelier-trunk.webp", "card_image": "./assets/cards/R06-atelier-trunk-kart.webp", "page_url": "./product/r06-atelier-trunk.html", "description": "İnce dikey ottoman-rib dokulu kumaş ve altın jakarlı kemeriyle terzi işi (atelier) sınırlı üretim trunk.", "fabric": "%85 Ottoman Rib Modal · %15 İpek-Elastan", "colorway": "Atelier Charcoal", "fit": "Ottoman Rib Atelier Trunk", "waistband": "Üst satır core / alt satır rare (Second-Line System)", "active": true, "featured": true, "priority_drop": false, "is_demo": false, "created_at": "2026-10-25T20:50:32Z", "updated_at": "2026-10-25T20:50:32Z"}];

let products = DEFAULT_PRODUCTS.slice();
let filter = '';
let search = '';
let viewMode = 'studio'; // 'studio' or 'card'

const cartKey = 'core-bag-konfection';
let cart = {};
try { cart = JSON.parse(localStorage.getItem(cartKey) || '{}'); } catch { cart = {}; }

function toast(t) {
  const o = $('toast');
  if (!o) return;
  o.textContent = t;
  o.classList.add('show');
  clearTimeout(toast.t);
  toast.t = setTimeout(() => o.classList.remove('show'), 3200);
}

function saveCart() {
  try { localStorage.setItem(cartKey, JSON.stringify(cart)); } catch {}
  renderCart();
}

function normAsset(src) {
  if (!src) return '';
  if (src.startsWith('/assets/')) return '.' + src;
  return src;
}

function slugFor(p) {
  if (p.slug) return p.slug;
  const code = String(p.code || String(p.sku || '').replace(/^CORE-/, '')).toLowerCase();
  const tail = String(p.name || '').split('|').pop().trim().toLowerCase().replace(/\s+/g, '-');
  return `${code}-${tail}`;
}

function cardUrlFor(p) {
  if (p.card_image) return normAsset(p.card_image);
  const code = String(p.code || String(p.sku || '').replace(/^CORE-/, '')).toUpperCase();
  const tail = String(p.name || '').split('|').pop().trim().toLowerCase().replace(/\s+/g, '-');
  return `./assets/cards/${code}-${tail}-kart.webp`;
}

function pageUrlFor(p) {
  if (p.page_url) return p.page_url;
  return `./product/${slugFor(p)}.html`;
}

const COLLECTIONS = [
  { key: 'CORE DROP', sub: 'drop', nr: '01 / 05', title: 'core drop', desc: 'STREETWEAR GİRİŞ SERİSİ', img: './assets/products/D01-pulse-trunk.webp' },
  { key: 'CORE', sub: 'core', nr: '02 / 05', title: 'core', desc: 'ANA İMZA KOLEKSİYONU', img: './assets/products/C01-contour-trunk.webp' },
  { key: 'CORE MOVE', sub: 'move', nr: '03 / 05', title: 'core move', desc: 'PERFORMANS & SPOR SERİSİ', img: './assets/products/M01-sprint-trunk.webp' },
  { key: 'CORE MOON', sub: 'moon', nr: '04 / 05', title: 'core moon', desc: 'GECE & DUYUSAL SERİ', img: './assets/products/O02-eclipse-trunk.webp' },
  { key: 'CORE RARE', sub: 'rare', nr: '05 / 05', title: 'core rare', desc: 'SINIRLI ÜRETİM LÜKS SERİ', img: './assets/products/R01-noir-trunk.webp' }
];

function updateCount() {
  if ($('cartCount')) {
    $('cartCount').textContent = Object.values(cart).reduce((a, b) => a + Number(b || 0), 0);
  }
}

function renderHero() {
  if ($('heroImage')) {
    $('heroImage').style.backgroundImage = 'linear-gradient(90deg,rgba(10,10,10,.06),transparent), url("./assets/core-hero.webp")';
  }
  if ($('heroSide')) {
    $('heroSide').textContent = 'CORE DROP\nCORE\nCORE MOVE\nCORE MOON\nCORE RARE';
  }
  if ($('storyImage')) {
    $('storyImage').style.backgroundImage = 'url("./assets/core-lookbook.webp")';
  }
  if ($('trustbar')) {
    const trust = [
      ['01', 'CORE DROP · STREETWEAR'],
      ['02', 'CORE · ESSENTIAL MODAL'],
      ['03', 'CORE MOVE · PERFORMANCE'],
      ['04', 'CORE MOON & RARE · ATELIER']
    ];
    $('trustbar').innerHTML = trust.map(t => `<div class="trust-item"><span class="trust-icon">${esc(t[0])}</span><span>${esc(t[1])}</span></div>`).join('');
  }
}

function renderCats() {
  if (!$('categoryGrid')) return;
  $('categoryGrid').innerHTML = COLLECTIONS.map(c => `
    <button type="button" class="category-card" data-cat="${esc(c.key)}">
      <img class="cat-photo" loading="lazy" src="${esc(c.img)}" alt="${esc(c.title)}">
      <span class="cat-nr">${esc(c.nr)}</span>
      <span class="cat-content">
        <strong>${esc(c.title)}</strong>
        <small>${esc(c.desc)}</small>
      </span>
      <span class="cat-arr">↗</span>
    </button>
  `).join('');
}

function buildCardHtml(p) {
  const studioImg = normAsset(p.image);
  const cardImg = cardUrlFor(p);
  const pageUrl = pageUrlFor(p);
  const activeImg = viewMode === 'card' ? cardImg : studioImg;
  const subKey = p.sub_key || (p.category === 'CORE' ? 'core' : p.category.replace('CORE ', '').toLowerCase());
  const subLogo = `./assets/subbrands/core-${subKey}-dark.png`;

  return `
    <article class="product-card" data-card-id="${p.id}">
      <div class="product-picture-wrap">
        <a href="${esc(pageUrl)}" class="product-picture" aria-label="${esc(p.name)} ürün sayfası">
          <img loading="lazy" class="prod-img-el" src="${esc(activeImg)}" data-studio="${esc(studioImg)}" data-card="${esc(cardImg)}" alt="${esc(p.name)}">
        </a>
        <button type="button" class="card-flip-btn" data-flip-card="${p.id}" title="Görsel / Ürün Kartı Değiştir">
          ${viewMode === 'card' ? 'Ürün Görseli' : 'Ürün Kartı'}
        </button>
      </div>
      <div class="product-info">
        <div class="product-card-top">
          <img src="${esc(subLogo)}" alt="${esc(p.category)}" class="card-mini-sublogo">
          <span class="product-cat">${esc(p.colorway || p.category)}</span>
        </div>
        <a href="${esc(pageUrl)}" class="product-name">${esc(p.name)}</a>
        <p class="product-mini-desc">${esc(p.fabric || '')}</p>
        <div class="product-bottom">
          <strong>${money(p.price)}</strong>
          <div class="product-card-actions">
            <button type="button" class="quick-btn" data-product="${p.id}" title="Hızlı İncele & Ürün Kartı">Kart</button>
            <a href="${esc(pageUrl)}" class="page-link-btn" title="Ürün Sayfasına Git">Sayfa ↗</a>
            <button type="button" class="add-btn" data-add="${p.id}" ${p.stock === 0 ? 'disabled' : ''} aria-label="Sepete ekle">+</button>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderDropLaunch() {
  if (!$('dropLaunchGrid')) return;
  const dropItems = products.filter(p => p.category === 'CORE DROP' && p.active !== false);
  $('dropLaunchGrid').innerHTML = dropItems.map(buildCardHtml).join('');
}

function renderProducts() {
  const activeList = products.filter(p => p.active !== false);
  const cats = ['CORE DROP', 'CORE', 'CORE MOVE', 'CORE MOON', 'CORE RARE'];
  if ($('categoryFilter')) {
    $('categoryFilter').innerHTML = '<option value="">Tüm Koleksiyonlar (' + activeList.length + ')</option>' +
      cats.map(c => `<option value="${esc(c)}">${esc(c)}</option>`).join('');
    $('categoryFilter').value = filter;
  }
  renderDropLaunch();
  refreshProducts();
}

function refreshProducts() {
  const list = products.filter(p =>
    p.active !== false &&
    (!filter || p.category === filter) &&
    (!search || `${p.name} ${p.sku} ${p.description} ${p.colorway || ''}`.toLocaleLowerCase('tr').includes(search))
  );
  if ($('emptyProducts')) $('emptyProducts').hidden = list.length > 0;
  if ($('productGrid')) $('productGrid').innerHTML = list.map(buildCardHtml).join('');
  document.querySelectorAll('[data-cat-pill]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.catPill === filter);
  });
}

function setViewMode(mode) {
  viewMode = mode;
  document.querySelectorAll('[data-view-mode]').forEach(b => {
    b.classList.toggle('active', b.dataset.viewMode === mode);
  });
  renderDropLaunch();
  refreshProducts();
}

function renderCart() {
  updateCount();
  if (!$('cartItems')) return;
  const items = Object.entries(cart)
    .map(([key, q]) => ({ p: products.find(p => String(p.id) === key), q: Number(q) }))
    .filter(x => x.p && x.q > 0);
  $('cartItems').innerHTML = items.length ? items.map(({ p, q }) => `
    <div class="cart-line">
      <img src="${esc(normAsset(p.image))}" alt="${esc(p.name)}">
      <div>
        <strong><a href="${esc(pageUrlFor(p))}">${esc(p.name)}</a></strong>
        <small>${money(p.price)}</small>
        <div class="quantity">
          <button data-q="${p.id}" data-delta="-1">−</button>
          <span>${q}</span>
          <button data-q="${p.id}" data-delta="1">+</button>
        </div>
      </div>
      <button data-remove="${p.id}" class="remove-x" aria-label="Kaldır">×</button>
    </div>
  `).join('') : '<div class="empty small">Alışveriş çantanız henüz boş.</div>';
  if ($('cartTotal')) {
    $('cartTotal').textContent = money(items.reduce((n, { p, q }) => n + p.price * q, 0));
  }
}

function showProduct(id) {
  const p = products.find(p => p.id === id);
  if (!p) return;
  const studioImg = normAsset(p.image);
  const cardImg = cardUrlFor(p);
  const pageUrl = pageUrlFor(p);
  $('productDetail').innerHTML = `
    <div class="pdp-view-switch" style="margin-bottom:12px">
      <button type="button" class="pdp-tab active" onclick="document.getElementById('detailMainImg').src='${esc(studioImg)}';this.classList.add('active');this.nextElementSibling.classList.remove('active')">Ürün Görseli</button>
      <button type="button" class="pdp-tab" onclick="document.getElementById('detailMainImg').src='${esc(cardImg)}';this.classList.add('active');this.previousElementSibling.classList.remove('active')">Ürün Kartı</button>
    </div>
    <div class="product-detail-image" style="aspect-ratio:auto;max-height:480px">
      <img id="detailMainImg" src="${esc(cardImg)}" alt="${esc(p.name)}" style="object-fit:contain;max-height:460px">
    </div>
    <span class="kicker">${esc(p.category)}</span>
    <h2>${esc(p.name)}</h2>
    <h3>${money(p.price)}</h3>
    <p>${esc(p.description)}</p>
    <div class="pdp-specs" style="margin:16px 0">
      <div class="pdp-spec-row"><span>Kumaş</span><strong>${esc(p.fabric || '-')}</strong></div>
      <div class="pdp-spec-row"><span>Renk</span><strong>${esc(p.colorway || '-')}</strong></div>
      <div class="pdp-spec-row"><span>Bedenler</span><strong>S · M · L · XL</strong></div>
    </div>
    <div style="display:grid;gap:10px;margin-top:16px">
      <button class="primary-btn full" data-add="${p.id}" ${!p.stock ? 'disabled' : ''}>Sepete Ekle — ${money(p.price)}</button>
      <a href="${esc(pageUrl)}" class="outline-btn full" style="text-align:center">Ürün Sayfasına Git ↗</a>
    </div>
  `;
  $('productOverlay').hidden = false;
}

function addToCart(id) {
  const p = products.find(p => p.id === id);
  if (!p) return;
  if (!p.stock) { toast('Bu ürün tükendi.'); return; }
  cart[id] = Math.min((cart[id] || 0) + 1, p.stock);
  saveCart();
  toast('Çantaya eklendi: ' + p.name);
}

async function init() {
  // Check URL query parameter ?cat=...
  try {
    const params = new URLSearchParams(location.search);
    const qCat = params.get('cat');
    if (qCat) filter = qCat;
  } catch {}

  try {
    if (location.protocol === 'file:') throw Error('Static mode');
    const response = await fetch('/api/public/' + brand);
    if (!response.ok) throw Error('Static mode');
    const data = await response.json();
    if (Array.isArray(data.products) && data.products.length >= 30) {
      // Enrich backend products with slug, card_image, page_url, fabric, colorway from DEFAULT_PRODUCTS
      products = data.products.map(bp => {
        const match = DEFAULT_PRODUCTS.find(dp => dp.sku === bp.sku || dp.name === bp.name) || {};
        return Object.assign({}, match, bp, {
          image: match.image || bp.image,
          card_image: match.card_image,
          page_url: match.page_url,
          fabric: match.fabric,
          colorway: match.colorway,
          sub_key: match.sub_key
        });
      });
    } else {
      products = DEFAULT_PRODUCTS.slice();
    }
  } catch (e) {
    products = DEFAULT_PRODUCTS.slice();
  }
  renderHero();
  renderCats();
  renderProducts();
  renderCart();
}

document.addEventListener('click', e => {
  const vm = e.target.closest('[data-view-mode]');
  if (vm) { setViewMode(vm.dataset.viewMode); return; }

  const flip = e.target.closest('[data-flip-card]');
  if (flip) {
    const cardEl = flip.closest('.product-card');
    const imgEl = cardEl?.querySelector('.prod-img-el');
    if (imgEl) {
      const showingCard = imgEl.src.includes('/cards/');
      imgEl.src = showingCard ? imgEl.dataset.studio : imgEl.dataset.card;
      flip.textContent = showingCard ? 'Ürün Kartı' : 'Ürün Görseli';
    }
    return;
  }

  const pill = e.target.closest('[data-cat-pill]');
  if (pill) {
    filter = pill.dataset.catPill;
    if ($('categoryFilter')) $('categoryFilter').value = filter;
    refreshProducts();
    return;
  }

  const cat = e.target.closest('[data-cat]');
  if (cat) {
    e.preventDefault();
    filter = cat.dataset.cat;
    if ($('categoryFilter')) $('categoryFilter').value = filter;
    refreshProducts();
    $('products')?.scrollIntoView({ behavior: 'smooth' });
    return;
  }

  const product = e.target.closest('[data-product]');
  if (product) { showProduct(Number(product.dataset.product)); return; }

  const add = e.target.closest('[data-add]');
  if (add) { addToCart(Number(add.dataset.add)); return; }

  const rm = e.target.closest('[data-remove]');
  if (rm) { delete cart[rm.dataset.remove]; saveCart(); return; }

  const q = e.target.closest('[data-q]');
  if (q) {
    const id = q.dataset.q;
    const p = products.find(p => String(p.id) === id);
    if (p) {
      cart[id] = Math.min(p.stock, Math.max(0, (cart[id] || 0) + Number(q.dataset.delta)));
      if (!cart[id]) delete cart[id];
      saveCart();
    }
    return;
  }

  const close = e.target.closest('[data-close]');
  if (close) { $(close.dataset.close + 'Overlay').hidden = true; return; }
  if (e.target.classList.contains('drawer-overlay')) e.target.hidden = true;
});

$('categoryFilter')?.addEventListener('change', e => { filter = e.target.value; refreshProducts(); });
$('productSearch')?.addEventListener('input', e => { search = e.target.value.toLocaleLowerCase('tr').trim(); refreshProducts(); });
$('searchBtn')?.addEventListener('click', () => { $('products')?.scrollIntoView({ behavior: 'smooth' }); $('productSearch')?.focus({ preventScroll: true }); });
$('bagBtn')?.addEventListener('click', () => { $('cartOverlay').hidden = false; renderCart(); });
$('checkoutBtn')?.addEventListener('click', () => { toast('Sipariş talebiniz alındı. Teşekkür ederiz.'); });
$('menuBtn')?.addEventListener('click', () => { const m = $('mobileMenu'); m.hidden = !m.hidden; $('menuBtn').setAttribute('aria-expanded', String(!m.hidden)); });
$('mobileMenu')?.addEventListener('click', e => { if (e.target.closest('a')) { $('mobileMenu').hidden = true; $('menuBtn').setAttribute('aria-expanded', 'false'); } });
document.addEventListener('keydown', e => { if (e.key === 'Escape') { document.querySelectorAll('.drawer-overlay').forEach(o => o.hidden = true); } });

init();

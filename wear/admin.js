'use strict';
const brand='konfection';
document.body.dataset.brand=brand;
const $=id=>document.getElementById(id);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const price=n=>new Intl.NumberFormat('tr-TR',{style:'currency',currency:'TRY'}).format(n||0);
const fmtDt=d=>d?new Date(d).toLocaleString('tr-TR',{dateStyle:'short',timeStyle:'short'}):'-';
const bName='core.konfection';
const STORAGE_KEY='core_konfection_v3_30sku';
const DEFAULT_PRODUCTS=[{"id": 91, "brand": "konfection", "name": "D01 | Pulse Trunk", "category": "CORE DROP", "sku": "CORE-D01", "price": 890, "stock": 60, "image": "./assets/products/D01-pulse-trunk.webp", "card_image": "./assets/cards/D01-pulse-trunk-kart.webp", "description": "Kontrast beyaz biye hatlı, enerjik streetwear kesim trunk. • Materyal: 92% Combed Cotton · 8% Elastane (210 GSM) • Renk: Core Black / Clean White • Kemer: core / drop (Second-Line System).", "active": true, "featured": true, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 92, "brand": "konfection", "name": "D02 | Signal Brief", "category": "CORE DROP", "sku": "CORE-D02", "price": 850, "stock": 55, "image": "./assets/products/D02-signal-brief.webp", "card_image": "./assets/cards/D02-signal-brief-kart.webp", "description": "Yüksek kontrast siyah biyeli, beyaz sinyal slip. • Materyal: 92% Combed Cotton · 8% Elastane (210 GSM) • Renk: Clean White / Core Black • Kemer: core / drop (Second-Line System).", "active": true, "featured": false, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 93, "brand": "konfection", "name": "D03 | Shadow Boxer Brief", "category": "CORE DROP", "sku": "CORE-D03", "price": 950, "stock": 65, "image": "./assets/products/D03-shadow-boxer-brief.webp", "card_image": "./assets/cards/D03-shadow-boxer-brief-kart.webp", "description": "Mat kömür-siyah ton-sür-ton dikişli günlük boxer brief. • Materyal: 92% Combed Cotton · 8% Elastane (210 GSM) • Renk: Shadow Charcoal • Kemer: core / drop (Second-Line System).", "active": true, "featured": false, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 94, "brand": "konfection", "name": "D04 | Voltage Long-Leg", "category": "CORE DROP", "sku": "CORE-D04", "price": 990, "stock": 45, "image": "./assets/products/D04-voltage-long-leg.webp", "card_image": "./assets/cards/D04-voltage-long-leg-kart.webp", "description": "Asit yeşili anatomik kontur dikişli uzun paça boxer. • Materyal: 90% Cotton · 10% Elastane (215 GSM) • Renk: Core Black / Acid Green • Kemer: core / drop (Second-Line System).", "active": true, "featured": false, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 95, "brand": "konfection", "name": "D05 | Static Lounge Short", "category": "CORE DROP", "sku": "CORE-D05", "price": 1390, "stock": 40, "image": "./assets/products/D05-static-lounge-short.webp", "card_image": "./assets/cards/D05-static-lounge-short-kart.webp", "description": "Metal uçlu kordonlu, ağır gramajlı streetwear ev ve lounge şortu. • Materyal: 100% Heavyweight Terry Cotton (320 GSM) • Renk: Core Black / Olive Cord • Kemer: core / drop (Second-Line System).", "active": true, "featured": false, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 96, "brand": "konfection", "name": "D06 | Rabbit Trunk", "category": "CORE DROP", "sku": "CORE-D06", "price": 920, "stock": 50, "image": "./assets/products/D06-rabbit-trunk.webp", "card_image": "./assets/cards/D06-rabbit-trunk-kart.webp", "description": "Kobalt mavisi topografik dalga desenli dinamik hip trunk. • Materyal: 88% Micro-Poly · 12% Elastane • Renk: Core Black / Cobalt Blue • Kemer: core / drop (Second-Line System).", "active": true, "featured": false, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 97, "brand": "konfection", "name": "C01 | Contour Trunk", "category": "CORE", "sku": "CORE-C01", "price": 1190, "stock": 80, "image": "./assets/products/C01-contour-trunk.webp", "card_image": "./assets/cards/C01-contour-trunk-kart.webp", "description": "Markanın imza parçası: kusursuz anatomik kalıp ve saf siyah modal trunk. • Materyal: 94% Austrian Micro-Modal · 6% Elastane • Renk: Obsidian Black • Kemer: core (Tek Satır Ana İmza).", "active": true, "featured": true, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 98, "brand": "konfection", "name": "C02 | Form Boxer Brief", "category": "CORE", "sku": "CORE-C02", "price": 1250, "stock": 75, "image": "./assets/products/C02-form-boxer-brief.webp", "card_image": "./assets/cards/C02-form-boxer-brief-kart.webp", "description": "Destekleyici silüet ve gün boyu formunu koruyan orta paça boxer brief. • Materyal: 94% Austrian Micro-Modal · 6% Elastane • Renk: Deep Navy • Kemer: core (Tek Satır Ana İmza).", "active": true, "featured": true, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 99, "brand": "konfection", "name": "C03 | Ease Long-Leg", "category": "CORE", "sku": "CORE-C03", "price": 1290, "stock": 60, "image": "./assets/products/C03-ease-long-leg.webp", "card_image": "./assets/cards/C03-ease-long-leg-kart.webp", "description": "Sürtünmeyi önleyen uzun paça konforu ve koyu orman yeşili tonu. • Materyal: 94% Austrian Micro-Modal · 6% Elastane • Renk: Cypress Green • Kemer: core (Tek Satır Ana İmza).", "active": true, "featured": false, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 100, "brand": "konfection", "name": "C04 | Clean Brief", "category": "CORE", "sku": "CORE-C04", "price": 1090, "stock": 55, "image": "./assets/products/C04-clean-brief.webp", "card_image": "./assets/cards/C04-clean-brief-kart.webp", "description": "Minimalist modern slip; kırık beyaz gövde ve ton-sür-ton tek satır core imzalı kemer. • Materyal: 94% Austrian Micro-Modal · 6% Elastane • Renk: Raw Ecru • Kemer: core (Tek Satır Ana İmza).", "active": true, "featured": false, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 101, "brand": "konfection", "name": "C05 | Soft Lounge Short", "category": "CORE", "sku": "CORE-C05", "price": 1590, "stock": 45, "image": "./assets/products/C05-soft-lounge-short.webp", "card_image": "./assets/cards/C05-soft-lounge-short-kart.webp", "description": "Bordo-mürdüm tonunda ipeksi modal karışımlı rafine ev şortu. • Materyal: 70% Modal · 25% Pima Cotton · 5% Elastane • Renk: Oxblood Burgundy • Kemer: core (Tek Satır Ana İmza).", "active": true, "featured": false, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 102, "brand": "konfection", "name": "C06 | Hotel Set", "category": "CORE", "sku": "CORE-C06", "price": 2490, "stock": 30, "image": "./assets/products/C06-hotel-set.webp", "card_image": "./assets/cards/C06-hotel-set-kart.webp", "description": "Özel dokulu siyah seyahat çantası ve imza Contour Trunk'tan oluşan otel seti. • Materyal: Vegan Pebble Leather Pouch + Micro-Modal Trunk • Renk: Core Black Edition • Kemer: core (Tek Satır Ana İmza).", "active": true, "featured": true, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 103, "brand": "konfection", "name": "M01 | Sprint Trunk", "category": "CORE MOVE", "sku": "CORE-M01", "price": 1290, "stock": 55, "image": "./assets/products/M01-sprint-trunk.webp", "card_image": "./assets/cards/M01-sprint-trunk-kart.webp", "description": "Yan panelleri lazer perfore havalandırmalı yüksek performans trunk. • Materyal: 85% Aero-Polyamide · 15% Elastane • Renk: Carbon Black • Kemer: core / move (Second-Line System).", "active": true, "featured": true, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 104, "brand": "konfection", "name": "M02 | Glide Long-Leg", "category": "CORE MOVE", "sku": "CORE-M02", "price": 1390, "stock": 50, "image": "./assets/products/M02-glide-long-leg.webp", "card_image": "./assets/cards/M02-glide-long-leg-kart.webp", "description": "Sürtünme önleyici (anti-chafing) file panelli uzun antrenman boxer'ı. • Materyal: 85% Aero-Polyamide · 15% Elastane • Renk: Graphite / Slate • Kemer: core / move (Second-Line System).", "active": true, "featured": false, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 105, "brand": "konfection", "name": "M03 | Pulse Brief", "category": "CORE MOVE", "sku": "CORE-M03", "price": 1150, "stock": 45, "image": "./assets/products/M03-pulse-brief.webp", "card_image": "./assets/cards/M03-pulse-brief-kart.webp", "description": "Mavi teknik flatlock dikişli, maksimum hareket özgürlüğü sunan atletik slip. • Materyal: 85% Aero-Polyamide · 15% Elastane • Renk: Graphite / Electric Blue • Kemer: core / move (Second-Line System).", "active": true, "featured": false, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 106, "brand": "konfection", "name": "M04 | Vent Mesh Trunk", "category": "CORE MOVE", "sku": "CORE-M04", "price": 1320, "stock": 50, "image": "./assets/products/M04-vent-mesh-trunk.webp", "card_image": "./assets/cards/M04-vent-mesh-trunk-kart.webp", "description": "Geniş gözenekli yan mesh panelleriyle yoğun antrenmanlar için ekstra nefes alan trunk. • Materyal: 82% Polyamide Mesh · 18% Elastane • Renk: Jet Black • Kemer: core / move (Second-Line System).", "active": true, "featured": false, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 107, "brand": "konfection", "name": "M05 | Lift Jock", "category": "CORE MOVE", "sku": "CORE-M05", "price": 1090, "stock": 40, "image": "./assets/products/M05-lift-jock.webp", "card_image": "./assets/cards/M05-lift-jock-kart.webp", "description": "Ergonomik ön kese ve yüksek elastikiyetli arka bantlarıyla destekleyici spor jockstrap. • Materyal: 85% Aero-Polyamide · 15% Elastane • Renk: Graphite / Cobalt Stitch • Kemer: core / move (Second-Line System).", "active": true, "featured": false, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 108, "brand": "konfection", "name": "M06 | Tide Swim Trunk", "category": "CORE MOVE", "sku": "CORE-M06", "price": 1690, "stock": 35, "image": "./assets/products/M06-tide-swim-trunk.webp", "card_image": "./assets/cards/M06-tide-swim-trunk-kart.webp", "description": "Hızlı kuruyan, klor ve tuzlu suya dayanıklı kompakt yüzücü mayo trunk. • Materyal: 80% Recycled Nylon · 20% Xtra Life Lycra • Renk: Deep Petrol Blue • Kemer: core / move (Second-Line System).", "active": true, "featured": false, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 109, "brand": "konfection", "name": "O01 | After Brief", "category": "CORE MOON", "sku": "CORE-O01", "price": 1390, "stock": 40, "image": "./assets/products/O01-after-brief.webp", "card_image": "./assets/cards/O01-after-brief-kart.webp", "description": "Yarı mat deri-görünümlü yan paneller ve heykelsi kesimli gece slibi. • Materyal: 86% Matte Coated Microfiber · 14% Elastane • Renk: Midnight Black • Kemer: core / moon (Second-Line System).", "active": true, "featured": false, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 110, "brand": "konfection", "name": "O02 | Eclipse Trunk", "category": "CORE MOON", "sku": "CORE-O02", "price": 1490, "stock": 45, "image": "./assets/products/O02-eclipse-trunk.webp", "card_image": "./assets/cards/O02-eclipse-trunk-kart.webp", "description": "Yarı saydam duman grisi yan panelleriyle gölge ve ten oyunları kuran düşük bel trunk. • Materyal: 84% Sheer Micromesh · 16% Elastane • Renk: Eclipse Smoke • Kemer: core / moon (Second-Line System).", "active": true, "featured": true, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 111, "brand": "konfection", "name": "O03 | Heat Mesh Brief", "category": "CORE MOON", "sku": "CORE-O03", "price": 1390, "stock": 35, "image": "./assets/products/O03-heat-mesh-brief.webp", "card_image": "./assets/cards/O03-heat-mesh-brief-kart.webp", "description": "Önü opak mikro-modal, yanları transparan ince tül ağ dokulu cesur brief. • Materyal: 78% Micro-Modal · 22% Sheer Tulle • Renk: Nocturne Black • Kemer: core / moon (Second-Line System).", "active": true, "featured": false, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 112, "brand": "konfection", "name": "O04 | Blue Hour Bikini", "category": "CORE MOON", "sku": "CORE-O04", "price": 1350, "stock": 35, "image": "./assets/products/O04-blue-hour-bikini.webp", "card_image": "./assets/cards/O04-blue-hour-bikini-kart.webp", "description": "Alacakaranlık mavisi satenimsi parlaklıkta, yüksek oyuklu tensel bikini brief. • Materyal: 88% Satin Polyamide · 12% Elastane • Renk: Blue Hour Navy • Kemer: core / moon (Second-Line System).", "active": true, "featured": false, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 113, "brand": "konfection", "name": "O05 | Motel Trunk", "category": "CORE MOON", "sku": "CORE-O05", "price": 1490, "stock": 40, "image": "./assets/products/O05-motel-trunk.webp", "card_image": "./assets/cards/O05-motel-trunk-kart.webp", "description": "Gece yarısı mürdüm-antrasit tonunda, kadifemsi dokulu sinematik kare kesim trunk. • Materyal: 90% Brushed Micro-Modal · 10% Elastane • Renk: Dark Plum / Aubergine • Kemer: core / moon (Second-Line System).", "active": true, "featured": false, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 114, "brand": "konfection", "name": "O06 | Full Moon Jock", "category": "CORE MOON", "sku": "CORE-O06", "price": 1450, "stock": 30, "image": "./assets/products/O06-full-moon-jock.webp", "card_image": "./assets/cards/O06-full-moon-jock-kart.webp", "description": "Kabartma dokulu ön panel ve minimal kemer mimarisiyle geceye özel tasarım jock. • Materyal: 85% Textured Faux-Grain · 15% Elastane • Renk: Obsidian Black • Kemer: core / moon (Second-Line System).", "active": true, "featured": false, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 115, "brand": "konfection", "name": "R01 | Noir Trunk", "category": "CORE RARE", "sku": "CORE-R01", "price": 2190, "stock": 25, "image": "./assets/products/R01-noir-trunk.webp", "card_image": "./assets/cards/R01-noir-trunk-kart.webp", "description": "İpeksi saf ipek-modal karışımı ve şampanya altın dokuma kemerli numaralı edisyon trunk. • Materyal: 75% Micro-Modal · 18% Mulberry Silk · 7% Elastane • Renk: Noir / Champagne Gold • Kemer: core / rare (Second-Line System).", "active": true, "featured": true, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 116, "brand": "konfection", "name": "R02 | Silk Contour Brief", "category": "CORE RARE", "sku": "CORE-R02", "price": 2090, "stock": 20, "image": "./assets/products/R02-silk-contour-brief.webp", "card_image": "./assets/cards/R02-silk-contour-brief-kart.webp", "description": "Sıvı-saten parlaklığında, elde bitirilmiş dikişli sınırlı üretim (001/500) lüks slip. • Materyal: 82% Italian Silk-Satin · 18% Elastane • Renk: Liquid Onyx • Kemer: core / rare (Second-Line System).", "active": true, "featured": false, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 117, "brand": "konfection", "name": "R03 | Merser Boxer Brief", "category": "CORE RARE", "sku": "CORE-R03", "price": 2290, "stock": 25, "image": "./assets/products/R03-merser-boxer-brief.webp", "card_image": "./assets/cards/R03-merser-boxer-brief-kart.webp", "description": "Çift merserize Mısır Giza pamuğu ile üretilmiş, zamansız 'Quiet Luxury' boxer brief. • Materyal: 92% Giza 45 Mercerized Cotton · 8% Elastane • Renk: Deep Obsidian • Kemer: core / rare (Second-Line System).", "active": true, "featured": false, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 118, "brand": "konfection", "name": "R04 | Espresso Lounge Short", "category": "CORE RARE", "sku": "CORE-R04", "price": 2890, "stock": 20, "image": "./assets/products/R04-espresso-lounge-short.webp", "card_image": "./assets/cards/R04-espresso-lounge-short-kart.webp", "description": "Altın uçlu kordon detayı ve koyu espresso tonuyla sınırlı üretim ipek-modal lounge şort. • Materyal: 70% Modal · 22% Silk · 8% Cashmere Touch • Renk: Dark Espresso / Gold • Kemer: core / rare (Second-Line System).", "active": true, "featured": false, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 119, "brand": "konfection", "name": "R05 | Midnight Slip", "category": "CORE RARE", "sku": "CORE-R05", "price": 1990, "stock": 20, "image": "./assets/products/R05-midnight-slip.webp", "card_image": "./assets/cards/R05-midnight-slip-kart.webp", "description": "Gece mavisi ton-sür-ton fitilli ve altın kemer logolu ultra-hafif yüksek işçilikli slip. • Materyal: 88% Sea Island Cotton · 12% Silk-Elastane • Renk: Midnight Indigo • Kemer: core / rare (Second-Line System).", "active": true, "featured": false, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 120, "brand": "konfection", "name": "R06 | Atelier Trunk", "category": "CORE RARE", "sku": "CORE-R06", "price": 2390, "stock": 20, "image": "./assets/products/R06-atelier-trunk.webp", "card_image": "./assets/cards/R06-atelier-trunk-kart.webp", "description": "İnce dikey ottoman-rib dokulu kumaş ve altın jakarlı kemeriyle koleksiyonun zirve parçası. • Materyal: 85% Fine Ottoman Rib Modal · 15% Silk-Elastane • Renk: Atelier Charcoal • Kemer: core / rare (Second-Line System).", "active": true, "featured": true, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}];
let useLocal=false, csrf='', user='admin', tab='dashboard', products=[], movements=[], stats={}, settings={};

const defaultSettings = {
  hero_title: 'MODERN ESSENTIALS FOR A FULLER LIFE.',
  hero_subtitle: 'Konfor, kültür ve bağlantı. Günlük yaşamın her anına eşlik eden parçalar.',
  announcement: 'core.konfection • Günlük stile yeni bakış',
  story_title: 'REAL PEOPLE. RICHER DAYS.',
  story_body: 'core.konfection, sade ve işlevsel tasarımın günlük hayatla buluştuğu bir konsept mağaza.',
  hero_image: './assets/core-hero.webp',
  story_image: './assets/core-lookbook.webp',
  promo_title: 'GOODS FOR A BRIGHTER TOMORROW.',
  promo_body: 'Gündelik yaşam için daha güçlü bir duruş. Yeni koleksiyon yakında.',
  promo_image: './assets/core-category-2.webp',
  campaign_label: 'THE CORE JOURNAL / 003',
  campaign_title: 'BUILT FOR EVERYDAY.',
  campaign_body: 'Konforun, hareketin ve kişisel stilin kendi ritmi.',
  campaign_image: './assets/core-category-1.webp'
};

function getLocalState(){
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    if (raw && typeof raw === 'object') {
      return {
        products: (Array.isArray(raw.products) && raw.products.length) ? raw.products : DEFAULT_PRODUCTS.slice(),
        movements: Array.isArray(raw.movements) ? raw.movements : [],
        settings: Object.assign({}, defaultSettings, raw.settings || {})
      };
    }
  } catch {}
  return { products: DEFAULT_PRODUCTS.slice(), movements: [], settings: Object.assign({}, defaultSettings) };
}
function saveLocalState(st){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(st));
}
function computeStats(prods){
  return {
    total: prods.length,
    published: prods.filter(p=>p.active).length,
    units: prods.reduce((n,p)=>n+Number(p.stock||0),0),
    low_stock: prods.filter(p=>Number(p.stock||0)<=10).length,
    demo_count: prods.filter(p=>p.is_demo).length
  };
}
function toast(s){$('toast').textContent=s;$('toast').classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(()=>$('toast').classList.remove('show'),3500);}
function messageOf(e){return e?.message||'Bir hata oluştu.';}
async function req(url,opts={}){
 const method=opts.method||'GET';
 const headers=Object.assign({},opts.headers||{});
 if(!(opts.body instanceof FormData)&&opts.body)headers['Content-Type']='application/json';
 if(!['GET','HEAD'].includes(method))headers['X-CSRF-Token']=csrf;
 const res=await fetch(url,{...opts,method,headers,credentials:'same-origin'});
 let data={};try{data=await res.json();}catch{}
 if(!res.ok)throw Error(typeof data.detail==='string'?data.detail:JSON.stringify(data.detail||'Sunucu hatası'));
 return data;
}
const path=x=>`/api/admin/${brand}/${x}`;
async function initialize(){
 $('switchCore').classList.add('active');
 $('crumbBrand').textContent=bName.toUpperCase();
 $('goStore').href='./index.html';
 $('loginBack').href='./index.html';
 if (location.protocol === 'file:') {
   useLocal=true;user='admin';
   await showApp();
   return;
 }
 try {
   const s=await req('/api/admin/session');
   csrf=s.csrf;user=s.user;useLocal=false;
   await showApp();
 } catch(e) {
   // Check if backend is reachable at all
   try {
     const h = await fetch('/health');
     if (h.ok) {
       $('loginScreen').hidden=false;$('adminApp').hidden=true;
       return;
     }
   } catch {}
   // Static / LocalStorage CMS mode
   useLocal=true;user='admin';
   await showApp();
 }
}
async function showApp(){
 $('loginScreen').hidden=true;$('adminApp').hidden=false;$('sessionLabel').textContent='◉ '+user;
 await reloadAll();switchTab(tab);
}
async function reloadAll(){
 if (!useLocal) {
   const [pr,da,mo,se]=await Promise.all([req(path('products')),req(path('dashboard')),req(path('movements')),req(path('settings'))]);
   products=pr.products;stats=da.stats;movements=mo.movements;settings=se;
 } else {
   const st = getLocalState();
   products = st.products;
   movements = st.movements;
   settings = st.settings;
   stats = computeStats(products);
 }
 renderDashboard();renderProducts();renderStock();renderSettings();
}
function switchTab(t){
 tab=t;
 const labels={dashboard:'Genel bakış',products:'Ürün yönetimi',stock:'Stok ve hareketler',settings:'Vitrin ayarları'};
 $('pageTitle').textContent=labels[t];
 document.querySelectorAll('.tab-panel').forEach(el=>el.hidden=el.id!==t+'Panel');
 document.querySelectorAll('#tabNav button').forEach(el=>el.classList.toggle('selected',el.dataset.tab===t));
 $('topAdd').hidden=t==='settings';
 window.scrollTo({top:0,behavior:'smooth'});
}
function movementLine(m){
 const n=m.quantity;const inwards=n>=0;
 return `<div class="micro-log"><div class="movement-symbol ${inwards?'':'out'}">${inwards?'+':'−'}</div><div><strong>${esc(m.product_name)}</strong><small>${esc(m.note)} · ${fmtDt(m.created_at)}</small></div><span class="log-qty">${n>0?'+':''}${n}</span></div>`;
}
function renderDashboard(){
 const maxStock=Math.max(...products.map(p=>p.stock),1);
 const cards=[['Toplam ürün',stats.total||0,'Kayıtlı tüm ürünler','▣'],['Yayındaki ürün',stats.published||0,'Ziyaretçilere görünür','◉'],['Toplam stok',stats.units||0,'Kayıtlı birim adedi','⇧'],['Düşük stok',stats.low_stock||0,'10 ve altında kalanlar','!']];
 $('dashboardPanel').innerHTML=`<div class="overview-head"><div><h2>${esc(bName)} / Mağaza özeti</h2><p>Ürün ve stok verileri doğrudan mağaza veritabanından gelir.</p></div><button data-go="products" class="line-btn">Ürünleri yönet ↗</button></div>
 <div class="stat-grid">${cards.map((c,i)=>`<div class="stat-card ${i===3?'warn':''}"><div class="stat-head"><span>${c[0]}</span><span class="symbol">${c[3]}</span></div><strong>${c[1]}</strong><span class="stat-foot">${c[2]}</span></div>`).join('')}</div>
 <div class="split-panels"><section class="panel-section"><div class="panel-title"><h2>Stok dağılımı</h2><button data-go="stock" class="ghost-btn">Stok yönetimi ↗</button></div><p class="hint">Kayıtlı ürünlere göre mevcut stok adedi.</p><div class="bargraph">${products.slice(0,8).map(p=>`<div class="bar-row"><div class="bar-name" title="${esc(p.name)}">${esc(p.name)}</div><div class="bar-track"><div class="bar-fill" style="width:${Math.max(0,p.stock/maxStock*100)}%"></div></div><span class="bar-qty">${p.stock}</span></div>`).join('')||'<p class="muted">Henüz ürün eklenmedi.</p>'}</div></section>
 <section class="panel-section"><div class="panel-title"><h2>Son stok hareketleri</h2><button data-go="stock" class="ghost-btn">Tümü ↗</button></div>${movements.slice(0,6).map(movementLine).join('')||'<p class="muted">Henüz stok hareketi yok.</p>'}</section></div>
 <div class="manage-info"><span>◎</span><div><strong>Demo ürünler ayrı işaretlenir.</strong>Bu markada <b>${stats.demo_count||0}</b> örnek ürün var. İstediğinde Ürün Yönetimi sekmesindeki “Örnek ürünleri temizle” ile tümünü kaldırabilirsin. Gerçek ürünler etkilenmez.</div></div>`;
}
function productRow(p){
 const imgSrc = (p.image||'./assets/empty.webp').replace(/^\/assets\//,'./assets/');
 return `<tr><td><div class="item-cell"><img src="${esc(imgSrc)}" loading="lazy" alt=""><div><strong>${esc(p.name)}</strong><small>${esc(p.sku)}</small></div></div></td><td>${esc(p.category)}</td><td><strong>${price(p.price)}</strong></td><td><span class="pill ${p.stock<=10?'low':''}">${p.stock} adet</span></td><td><span class="pill ${p.active?'':'gray'}">${p.active?'Yayında':'Gizli'}</span> ${p.is_demo?'<span class="pill demo">ÖRNEK</span>':''}</td><td><div class="row-actions"><a href="${esc((p.card_image||('./assets/cards/'+String(p.sku||'').replace(/^CORE-/, '')+'-'+String(p.name||'').split('|').pop().trim().toLowerCase().replace(/\s+/g,'-')+'-kart.webp')))}" target="_blank" class="ghost-btn" style="padding:4px 8px;font-size:12px;text-decoration:none" title="Ürün Kartını Gör">Kart ↗</a><button data-edit="${p.id}" title="Düzenle">Düzenle</button><button data-move="${p.id}" title="Stok hareketi">± Stok</button><button class="delete" data-delete="${p.id}" title="Sil">Sil</button></div></td></tr>`;
}
function renderProducts(){
 $('productsPanel').innerHTML=`<div class="section-split"><div><h2>Ürün kataloğu <span class="muted">/ ${products.length} kayıt</span></h2><p>Ürün ekle, güncelle, gizle, sil veya stok hareketi oluştur.</p></div><div class="toolbar-right"><button data-export="products" class="line-btn">↓ Ürün CSV</button><button data-open-add class="solid">+ Yeni ürün</button></div></div>
 <div class="table-toolbar"><input id="catalogSearch" class="toolbar-search" type="search" placeholder="Ürün adı, SKU veya kategori ara..."><label class="hint"><input id="demoOnly" type="checkbox"> Sadece örnek ürünler</label></div>
 <div class="table-wrap"><table><thead><tr><th>Ürün</th><th>Kategori</th><th>Fiyat</th><th>Stok</th><th>Durum</th><th>İşlem</th></tr></thead><tbody id="productsBody">${products.map(productRow).join('')||'<tr><td colspan="6" class="empty-table">Henüz kayıtlı ürün yok. “Yeni ürün” ile ekleyebilirsin.</td></tr>'}</tbody></table></div>
 <div class="manage-info danger"><span>♢</span><div><strong>Örnek ürünleri topluca temizle</strong><b>“ÖRNEK”</b> işaretli ${stats.demo_count||0} demo ürünü tek seferde kaldırır. Gerçek ürünlere dokunmaz. İşlem geri alınamaz; stok işlem geçmişi denetim amacıyla kalır.</div><div class="right"><button class="line-btn danger-btn" data-purge ${!stats.demo_count?'disabled':''}>Örnek ürünleri temizle</button></div></div>`;
 bindCatalogFilter();
}
function bindCatalogFilter(){
 const inp=$('catalogSearch');const demo=$('demoOnly');
 function apply(){const q=inp.value.toLocaleLowerCase('tr');const show=products.filter(p=>(!demo.checked||p.is_demo)&&`${p.name} ${p.sku} ${p.category}`.toLocaleLowerCase('tr').includes(q));$('productsBody').innerHTML=show.map(productRow).join('')||'<tr><td colspan="6" class="empty-table">Aramaya uygun ürün bulunamadı.</td></tr>';}
 inp.addEventListener('input',apply);demo.addEventListener('change',apply);
}
function stockRows(){return products.map(p=>{
 const imgSrc = (p.image||'./assets/empty.webp').replace(/^\/assets\//,'./assets/');
 return `<tr><td><div class="item-cell"><img src="${esc(imgSrc)}" alt=""><div><strong>${esc(p.name)}</strong><small>${esc(p.sku)}</small></div></div></td><td>${esc(p.category)}</td><td><span class="pill ${p.stock<=10?'low':''}">${p.stock} adet</span></td><td><button data-move="${p.id}" class="ghost-btn">± Stok işlemi</button></td></tr>`;
}).join('');}
function renderStock(){
 $('stockPanel').innerHTML=`<div class="section-split"><div><h2>Envanter ve stok hareketleri</h2><p>Giriş / çıkış / sayım düzeltmesi. Her değişiklik tarih ve açıklamayla saklanır.</p></div><button data-move="" class="solid">± Yeni hareket</button></div><div class="panel-section" style="margin-bottom:25px"><div class="panel-title"><h2>Mevcut stoklar</h2><span class="hint">${products.reduce((n,p)=>n+p.stock,0)} toplam birim</span></div><div class="table-wrap"><table><thead><tr><th>Ürün</th><th>Kategori</th><th>Mevcut</th><th>İşlem</th></tr></thead><tbody>${stockRows()||'<tr><td colspan="4" class="empty-table">Stok bulunmuyor.</td></tr>'}</tbody></table></div></div>
 <div class="panel-section"><div class="panel-title"><h2>Hareket geçmişi</h2><button data-export="movements" class="line-btn">↓ Hareket CSV</button></div><p class="table-sub">Son 500 kayıt gösteriliyor; CSV ile tüm hareket geçmişi alınabilir.</p><div class="table-wrap"><table><thead><tr><th>Tarih</th><th>Ürün / SKU</th><th>İşlem</th><th>Değişim</th><th>Önce → Sonra</th><th>Açıklama</th><th>Yapan</th></tr></thead><tbody>${movements.map(m=>`<tr><td>${fmtDt(m.created_at)}</td><td><b>${esc(m.product_name)}</b><br><small>${esc(m.sku)}</small></td><td><span class="pill ${m.kind==='OUT'?'low':''}">${esc({IN:'Giriş',OUT:'Çıkış',ADJUST:'Düzelt',INITIAL:'İlk stok'}[m.kind]||m.kind)}</span></td><td><b>${m.quantity>0?'+':''}${m.quantity}</b></td><td>${m.before_stock} → ${m.after_stock}</td><td>${esc(m.note)}</td><td>${esc(m.actor)}</td></tr>`).join('')||'<tr><td colspan="7" class="empty-table">Henüz stok hareketi yok.</td></tr>'}</tbody></table></div></div>`;
}
function settingsImageField(key, label) {
 const value=esc(settings[key]||'');
 const previewSrc = (settings[key]||'').replace(/^\/assets\//,'./assets/');
 return `<div class="field settings-photo-field"><label for="set-${key}">${label}</label><div class="image-row"><input id="set-${key}" name="${key}" value="${value}" placeholder="./assets/... veya /uploads/..."><button type="button" data-upload-setting="${key}" class="upload-btn">Görsel yükle</button></div>${value?`<img class="settings-preview" src="${esc(previewSrc)}" alt="${esc(label)} önizleme">`:''}</div>`;
}
function renderSettings(){
 $('settingsPanel').innerHTML=`<form id="settingsForm" class="settings-form"><section class="settings-box"><h2>Vitrin içerikleri</h2><p>Bu alanların tamamı <b>${esc(bName)}</b> mağazasına özeldir. Görselleri değiştirerek kampanya vitrinini de yenileyebilirsin.</p>
 <div class="field"><label>Üst bant metni</label><input name="announcement" maxlength="220" required value="${esc(settings.announcement)}"></div>
 <div class="field"><label>Hero / Ana başlık</label><input name="hero_title" maxlength="120" required value="${esc(settings.hero_title)}"></div>
 <div class="field"><label>Hero / Alt açıklama</label><textarea name="hero_subtitle" rows="3" maxlength="400" required>${esc(settings.hero_subtitle)}</textarea></div>
 ${settingsImageField('hero_image','Hero / Büyük kampanya görseli')}
 <hr class="settings-divider"><h3>Orta kampanya bandı</h3>
 <div class="field"><label>Başlık</label><input name="promo_title" maxlength="120" value="${esc(settings.promo_title||'')}"></div>
 <div class="field"><label>Açıklama</label><textarea name="promo_body" rows="2" maxlength="400">${esc(settings.promo_body||'')}</textarea></div>
 ${settingsImageField('promo_image','Kampanya görseli')}
 <hr class="settings-divider"><h3>Marka hikâyesi</h3>
 <div class="field"><label>Başlık</label><input name="story_title" maxlength="120" required value="${esc(settings.story_title)}"></div>
 <div class="field"><label>Metin</label><textarea name="story_body" rows="4" maxlength="900" required>${esc(settings.story_body)}</textarea></div>
 ${settingsImageField('story_image','Hikâye görseli')}
 <hr class="settings-divider"><h3>Editoryal alan</h3>
 <div class="field"><label>Üst etiket</label><input name="campaign_label" maxlength="100" value="${esc(settings.campaign_label||'')}"></div>
 <div class="field"><label>Başlık</label><input name="campaign_title" maxlength="120" value="${esc(settings.campaign_title||'')}"></div>
 <div class="field"><label>Açıklama</label><textarea name="campaign_body" rows="3" maxlength="500">${esc(settings.campaign_body||'')}</textarea></div>
 ${settingsImageField('campaign_image','Editoryal görsel')}
 <div class="settings-save"><button class="solid" type="submit">Tüm vitrin değişikliklerini kaydet ↗</button><span class="hint">Yüklenen görseller kaydolur; düzenlenmiş içerik için ayrıca Kaydet'e bas.</span></div></section></form>`;
}

function fileToDataUrl(file){
 return new Promise((resolve,reject)=>{
   const reader=new FileReader();
   reader.onload=()=>resolve(reader.result);
   reader.onerror=()=>reject(new Error('Dosya okunamadı'));
   reader.readAsDataURL(file);
 });
}

function openProduct(id){
 const p=products.find(p=>p.id===id);
 $('modalTitle').textContent=p?'Ürün düzenle':'Yeni ürün ekle';$('itemId').value=p?.id||'';
 $('itemName').value=p?.name||'';$('itemCat').value=p?.category||'';$('itemSku').value=p?.sku||'';
 $('itemPrice').value=p?.price??0;$('itemStock').value=0;$('itemDescription').value=p?.description||'';
 $('itemImage').value=p?.image||'';$('itemActive').checked=p?p.active:true;$('itemFeatured').checked=p?p.featured:false;$('itemDemo').checked=p?p.is_demo:false;
 $('stockCreationField').hidden=!!p;
 $('catList').innerHTML=[...new Set(['İç Giyim','CORE DROP','CORE','CORE MOVE','CORE MOON','CORE RARE','Giyim','Aksesuarlar',...products.map(p=>p.category)])].map(c=>`<option value="${esc(c)}">`).join('');
 $('formError').textContent='';$('uploadStatus').textContent='JPG, PNG veya WebP • en fazla 5 MB.';
 $('productModal').hidden=false;
}
function openStock(id){
 if(!products.length){toast('Önce bir ürün ekle.');return;}
 $('stockProduct').innerHTML=products.map(p=>`<option value="${p.id}">${esc(p.name)} • ${p.stock} adet</option>`).join('');
 if(id)$('stockProduct').value=String(id);
 document.querySelector('input[name="stockKind"][value="IN"]').checked=true;
 $('stockQty').value='1';$('stockNote').value='';$('stockError').textContent='';$('stockQtyLabel').textContent='Giriş miktarı';$('stockModal').hidden=false;
}
async function saveProduct(e){
 e.preventDefault();$('formError').textContent='';
 const id=$('itemId').value;
 const payload={name:$('itemName').value.trim(),category:$('itemCat').value.trim(),sku:$('itemSku').value.trim().toUpperCase(),price:Number($('itemPrice').value),image:$('itemImage').value.trim(),description:$('itemDescription').value.trim(),active:$('itemActive').checked,featured:$('itemFeatured').checked,is_demo:$('itemDemo').checked};
 if(!id)payload.stock=Number($('itemStock').value);
 try {
   if(!useLocal){
     await req(path('products')+(id?'/'+id:''),{method:id?'PUT':'POST',body:JSON.stringify(payload)});
   } else {
     const st=getLocalState();
     if(id){
       const idx=st.products.findIndex(x=>String(x.id)===String(id));
       if(idx>-1)st.products[idx]=Object.assign({},st.products[idx],payload,{updated_at:new Date().toISOString()});
     } else {
       const newId=st.products.reduce((m,x)=>Math.max(m,Number(x.id||0)),0)+1;
       const item=Object.assign({id:newId,created_at:new Date().toISOString(),updated_at:new Date().toISOString()},payload);
       st.products.unshift(item);
       if(payload.stock>0){
         st.movements.unshift({id:Date.now(),product_id:newId,product_name:payload.name,sku:payload.sku,quantity:payload.stock,kind:'INITIAL',before_stock:0,after_stock:payload.stock,note:'Yeni ürün açılış stoku',actor:user,created_at:new Date().toISOString()});
       }
     }
     saveLocalState(st);
   }
   $('productModal').hidden=true;await reloadAll();toast('Ürün başarıyla kaydedildi.');
 } catch(err){$('formError').textContent=messageOf(err);}
}
async function saveStock(e){
 e.preventDefault();$('stockError').textContent='';
 const op={product_id:Number($('stockProduct').value),kind:document.querySelector('input[name="stockKind"]:checked').value,quantity:Number($('stockQty').value),note:$('stockNote').value.trim()};
 try {
   if(!useLocal){
     const data=await req(path('stock'),{method:'POST',body:JSON.stringify(op)});
     $('stockModal').hidden=true;await reloadAll();toast(`Stok kaydedildi: ${data.before} → ${data.after}`);
   } else {
     const st=getLocalState();
     const p=st.products.find(x=>x.id===op.product_id);
     if(!p)throw Error('Ürün bulunamadı');
     const before=Number(p.stock||0);
     const after=op.kind==='ADJUST'?op.quantity:before+(op.kind==='IN'?op.quantity:-op.quantity);
     if(after<0)throw Error('Stok sıfırın altına düşemez');
     p.stock=after;
     st.movements.unshift({id:Date.now(),product_id:p.id,product_name:p.name,sku:p.sku,quantity:after-before,kind:op.kind,before_stock:before,after_stock:after,note:op.note,actor:user,created_at:new Date().toISOString()});
     saveLocalState(st);
     $('stockModal').hidden=true;await reloadAll();toast(`Stok kaydedildi: ${before} → ${after}`);
   }
 } catch(err){$('stockError').textContent=messageOf(err);}
}
async function saveSettings(e){
 e.preventDefault();const f=e.target;
 const s=Object.fromEntries(new FormData(f).entries());
 try{
   if(!useLocal){
     await req(path('settings'),{method:'PUT',body:JSON.stringify(s)});
   } else {
     const st=getLocalState();
     st.settings=Object.assign({},st.settings,s);
     saveLocalState(st);
   }
   await reloadAll();toast('Vitrin içerikleri kaydedildi.');
 }catch(err){toast('Hata: '+messageOf(err));}
}
async function doUpload(file){
 $('uploadStatus').textContent='Görsel yükleniyor...';
 if(!file||file.size>5*1024*1024){$('uploadStatus').textContent='Dosya seçilmedi veya 5 MB sınırı aşıldı.';return;}
 try{
   let url='';
   if(!useLocal){
     const form=new FormData();form.append('file',file);const data=await req(path('upload'),{method:'POST',body:form});url=data.url;
   } else {
     url=await fileToDataUrl(file);
   }
   $('itemImage').value=url;$('uploadStatus').textContent='Görsel kaydedildi.';toast('Görsel yüklendi.');
 } catch(err){$('uploadStatus').textContent='Hata: '+messageOf(err);}
}
document.addEventListener('click',async e=>{
 const t=e.target.closest('[data-tab]');if(t){switchTab(t.dataset.tab);return;}
 const g=e.target.closest('[data-go]');if(g){switchTab(g.dataset.go);return;}
 if(e.target.closest('[data-open-add]')){openProduct();return;}
 const ed=e.target.closest('[data-edit]');if(ed){openProduct(Number(ed.dataset.edit));return;}
 const st=e.target.closest('[data-move]');if(st){openStock(Number(st.dataset.move)||null);return;}
 const cl=e.target.closest('[data-close]');if(cl){$(cl.dataset.close==='modal'?'productModal':'stockModal').hidden=true;return;}
 if(e.target.classList.contains('modal-overlay')){e.target.hidden=true;return;}
 const su=e.target.closest('[data-upload-setting]');if(su){const key=su.dataset.uploadSetting;const chooser=document.createElement('input');chooser.type='file';chooser.accept='image/png,image/jpeg,image/webp';chooser.addEventListener('change',async()=>{if(!chooser.files?.[0])return;try{const file=chooser.files[0];if(file.size>5*1024*1024){toast('Görsel en fazla 5 MB olabilir.');return;}let url='';if(!useLocal){const form=new FormData();form.append('file',file);const d=await req(path('upload'),{method:'POST',body:form});url=d.url;}else{url=await fileToDataUrl(file);}const el=$('set-'+key);el.value=url;const old=el.closest('.settings-photo-field').querySelector('img.settings-preview');if(old)old.src=url;else {const img=document.createElement('img');img.className='settings-preview';img.src=url;img.alt='Görsel önizleme';el.closest('.settings-photo-field').append(img);}toast('Görsel yüklendi. Değişiklikleri kaydet.');}catch(err){toast(messageOf(err));}});chooser.click();return;}
 const del=e.target.closest('[data-delete]');if(del){const p=products.find(p=>p.id===Number(del.dataset.delete));if(confirm(`“${p?.name}” ürününü kalıcı olarak silmek istiyor musun?\nStok işlem geçmişi korunur.`))try{if(!useLocal){await req(path('products')+'/'+del.dataset.delete,{method:'DELETE'});}else{const s=getLocalState();s.products=s.products.filter(x=>x.id!==Number(del.dataset.delete));saveLocalState(s);}await reloadAll();toast('Ürün silindi.');}catch(err){toast(messageOf(err));}return;}
 const pu=e.target.closest('[data-purge]');if(pu){if(confirm(`DİKKAT: ${stats.demo_count||0} adet örnek ürün kalıcı olarak silinecek.\nGerçek ürünler korunacak. Onaylıyor musun?`))try{if(!useLocal){const d=await req(path('remove-demo'),{method:'POST'});toast(d.deleted+' demo ürün silindi.');}else{const s=getLocalState();s.products=s.products.filter(x=>!x.is_demo);saveLocalState(s);toast('Demo ürünler silindi.');}await reloadAll();}catch(err){toast(messageOf(err));}return;}
 const ex=e.target.closest('[data-export]');if(ex){if(!useLocal){location.href=path(ex.dataset.export==='movements'?'export-movements':'export');}else{const isMov=ex.dataset.export==='movements';const rows=isMov?[['date','sku','product','kind','delta','before','after','reason','actor'],...movements.map(m=>[m.created_at,m.sku,m.product_name,m.kind,m.quantity,m.before_stock,m.after_stock,m.note,m.actor])]:[['id','name','sku','category','price_try','stock','active','featured','is_demo','description','image'],...products.map(p=>[p.id,p.name,p.sku,p.category,p.price,p.stock,p.active,p.featured,p.is_demo,p.description,p.image])];const csv='\ufeff'+rows.map(r=>r.map(v=>`"${String(v??'').replace(/"/g,'""')}"`).join(',')).join('\n');const blob=new Blob([csv],{type:'text/csv;charset=utf-8'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=isMov?'konfection-inventory.csv':'konfection-products.csv';a.click();}return;}
});
$('loginForm').addEventListener('submit',async e=>{
 e.preventDefault();$('loginError').textContent='';const button=$('loginForm').querySelector('button');button.disabled=true;
 try{const data=await req('/api/admin/login',{method:'POST',body:JSON.stringify({username:$('username').value,password:$('password').value})});csrf=data.csrf;user=data.user;$('password').value='';await showApp();}
 catch(err){$('loginError').textContent=messageOf(err);}finally{button.disabled=false;}
});
$('productForm').addEventListener('submit',saveProduct);
$('stockForm').addEventListener('submit',saveStock);
$('imageUpload').addEventListener('change',e=>{if(e.target.files[0])doUpload(e.target.files[0]);});
$('topAdd').addEventListener('click',()=>openProduct());
$('logout').addEventListener('click',async()=>{if(!useLocal){try{await req('/api/admin/logout',{method:'POST'});}catch{}}location.reload();});
document.addEventListener('submit',e=>{if(e.target.id==='settingsForm')saveSettings(e);});
document.querySelectorAll('input[name="stockKind"]').forEach(x=>x.addEventListener('change',()=>{$('stockQtyLabel').textContent=x.value==='ADJUST'?'Yeni toplam stok':x.value==='OUT'?'Çıkış miktarı':'Giriş miktarı';}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.querySelectorAll('.modal-overlay').forEach(x=>x.hidden=true);}});
initialize();

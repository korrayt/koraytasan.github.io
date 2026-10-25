'use strict';
const brand = 'konfection';
document.body.dataset.brand = brand;
const $ = x => document.getElementById(x);
const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const money = n => new Intl.NumberFormat('tr-TR',{style:'currency',currency:'TRY'}).format(n);
const STORAGE_KEY = 'core_konfection_v3_30sku';
const DEFAULT_PRODUCTS = [{"id": 91, "brand": "konfection", "name": "D01 | Pulse Trunk", "category": "CORE DROP", "sku": "CORE-D01", "price": 890, "stock": 60, "image": "./assets/products/D01-pulse-trunk.webp", "card_image": "./assets/cards/D01-pulse-trunk-kart.webp", "description": "Kontrast beyaz biye hatlı, enerjik streetwear kesim trunk. • Materyal: 92% Combed Cotton · 8% Elastane (210 GSM) • Renk: Core Black / Clean White • Kemer: core / drop (Second-Line System).", "active": true, "featured": true, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 92, "brand": "konfection", "name": "D02 | Signal Brief", "category": "CORE DROP", "sku": "CORE-D02", "price": 850, "stock": 55, "image": "./assets/products/D02-signal-brief.webp", "card_image": "./assets/cards/D02-signal-brief-kart.webp", "description": "Yüksek kontrast siyah biyeli, beyaz sinyal slip. • Materyal: 92% Combed Cotton · 8% Elastane (210 GSM) • Renk: Clean White / Core Black • Kemer: core / drop (Second-Line System).", "active": true, "featured": false, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 93, "brand": "konfection", "name": "D03 | Shadow Boxer Brief", "category": "CORE DROP", "sku": "CORE-D03", "price": 950, "stock": 65, "image": "./assets/products/D03-shadow-boxer-brief.webp", "card_image": "./assets/cards/D03-shadow-boxer-brief-kart.webp", "description": "Mat kömür-siyah ton-sür-ton dikişli günlük boxer brief. • Materyal: 92% Combed Cotton · 8% Elastane (210 GSM) • Renk: Shadow Charcoal • Kemer: core / drop (Second-Line System).", "active": true, "featured": false, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 94, "brand": "konfection", "name": "D04 | Voltage Long-Leg", "category": "CORE DROP", "sku": "CORE-D04", "price": 990, "stock": 45, "image": "./assets/products/D04-voltage-long-leg.webp", "card_image": "./assets/cards/D04-voltage-long-leg-kart.webp", "description": "Asit yeşili anatomik kontur dikişli uzun paça boxer. • Materyal: 90% Cotton · 10% Elastane (215 GSM) • Renk: Core Black / Acid Green • Kemer: core / drop (Second-Line System).", "active": true, "featured": false, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 95, "brand": "konfection", "name": "D05 | Static Lounge Short", "category": "CORE DROP", "sku": "CORE-D05", "price": 1390, "stock": 40, "image": "./assets/products/D05-static-lounge-short.webp", "card_image": "./assets/cards/D05-static-lounge-short-kart.webp", "description": "Metal uçlu kordonlu, ağır gramajlı streetwear ev ve lounge şortu. • Materyal: 100% Heavyweight Terry Cotton (320 GSM) • Renk: Core Black / Olive Cord • Kemer: core / drop (Second-Line System).", "active": true, "featured": false, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 96, "brand": "konfection", "name": "D06 | Rabbit Trunk", "category": "CORE DROP", "sku": "CORE-D06", "price": 920, "stock": 50, "image": "./assets/products/D06-rabbit-trunk.webp", "card_image": "./assets/cards/D06-rabbit-trunk-kart.webp", "description": "Kobalt mavisi topografik dalga desenli dinamik hip trunk. • Materyal: 88% Micro-Poly · 12% Elastane • Renk: Core Black / Cobalt Blue • Kemer: core / drop (Second-Line System).", "active": true, "featured": false, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 97, "brand": "konfection", "name": "C01 | Contour Trunk", "category": "CORE", "sku": "CORE-C01", "price": 1190, "stock": 80, "image": "./assets/products/C01-contour-trunk.webp", "card_image": "./assets/cards/C01-contour-trunk-kart.webp", "description": "Markanın imza parçası: kusursuz anatomik kalıp ve saf siyah modal trunk. • Materyal: 94% Austrian Micro-Modal · 6% Elastane • Renk: Obsidian Black • Kemer: core (Tek Satır Ana İmza).", "active": true, "featured": true, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 98, "brand": "konfection", "name": "C02 | Form Boxer Brief", "category": "CORE", "sku": "CORE-C02", "price": 1250, "stock": 75, "image": "./assets/products/C02-form-boxer-brief.webp", "card_image": "./assets/cards/C02-form-boxer-brief-kart.webp", "description": "Destekleyici silüet ve gün boyu formunu koruyan orta paça boxer brief. • Materyal: 94% Austrian Micro-Modal · 6% Elastane • Renk: Deep Navy • Kemer: core (Tek Satır Ana İmza).", "active": true, "featured": true, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 99, "brand": "konfection", "name": "C03 | Ease Long-Leg", "category": "CORE", "sku": "CORE-C03", "price": 1290, "stock": 60, "image": "./assets/products/C03-ease-long-leg.webp", "card_image": "./assets/cards/C03-ease-long-leg-kart.webp", "description": "Sürtünmeyi önleyen uzun paça konforu ve koyu orman yeşili tonu. • Materyal: 94% Austrian Micro-Modal · 6% Elastane • Renk: Cypress Green • Kemer: core (Tek Satır Ana İmza).", "active": true, "featured": false, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 100, "brand": "konfection", "name": "C04 | Clean Brief", "category": "CORE", "sku": "CORE-C04", "price": 1090, "stock": 55, "image": "./assets/products/C04-clean-brief.webp", "card_image": "./assets/cards/C04-clean-brief-kart.webp", "description": "Minimalist modern slip; kırık beyaz gövde ve ton-sür-ton tek satır core imzalı kemer. • Materyal: 94% Austrian Micro-Modal · 6% Elastane • Renk: Raw Ecru • Kemer: core (Tek Satır Ana İmza).", "active": true, "featured": false, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 101, "brand": "konfection", "name": "C05 | Soft Lounge Short", "category": "CORE", "sku": "CORE-C05", "price": 1590, "stock": 45, "image": "./assets/products/C05-soft-lounge-short.webp", "card_image": "./assets/cards/C05-soft-lounge-short-kart.webp", "description": "Bordo-mürdüm tonunda ipeksi modal karışımlı rafine ev şortu. • Materyal: 70% Modal · 25% Pima Cotton · 5% Elastane • Renk: Oxblood Burgundy • Kemer: core (Tek Satır Ana İmza).", "active": true, "featured": false, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 102, "brand": "konfection", "name": "C06 | Hotel Set", "category": "CORE", "sku": "CORE-C06", "price": 2490, "stock": 30, "image": "./assets/products/C06-hotel-set.webp", "card_image": "./assets/cards/C06-hotel-set-kart.webp", "description": "Özel dokulu siyah seyahat çantası ve imza Contour Trunk'tan oluşan otel seti. • Materyal: Vegan Pebble Leather Pouch + Micro-Modal Trunk • Renk: Core Black Edition • Kemer: core (Tek Satır Ana İmza).", "active": true, "featured": true, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 103, "brand": "konfection", "name": "M01 | Sprint Trunk", "category": "CORE MOVE", "sku": "CORE-M01", "price": 1290, "stock": 55, "image": "./assets/products/M01-sprint-trunk.webp", "card_image": "./assets/cards/M01-sprint-trunk-kart.webp", "description": "Yan panelleri lazer perfore havalandırmalı yüksek performans trunk. • Materyal: 85% Aero-Polyamide · 15% Elastane • Renk: Carbon Black • Kemer: core / move (Second-Line System).", "active": true, "featured": true, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 104, "brand": "konfection", "name": "M02 | Glide Long-Leg", "category": "CORE MOVE", "sku": "CORE-M02", "price": 1390, "stock": 50, "image": "./assets/products/M02-glide-long-leg.webp", "card_image": "./assets/cards/M02-glide-long-leg-kart.webp", "description": "Sürtünme önleyici (anti-chafing) file panelli uzun antrenman boxer'ı. • Materyal: 85% Aero-Polyamide · 15% Elastane • Renk: Graphite / Slate • Kemer: core / move (Second-Line System).", "active": true, "featured": false, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 105, "brand": "konfection", "name": "M03 | Pulse Brief", "category": "CORE MOVE", "sku": "CORE-M03", "price": 1150, "stock": 45, "image": "./assets/products/M03-pulse-brief.webp", "card_image": "./assets/cards/M03-pulse-brief-kart.webp", "description": "Mavi teknik flatlock dikişli, maksimum hareket özgürlüğü sunan atletik slip. • Materyal: 85% Aero-Polyamide · 15% Elastane • Renk: Graphite / Electric Blue • Kemer: core / move (Second-Line System).", "active": true, "featured": false, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 106, "brand": "konfection", "name": "M04 | Vent Mesh Trunk", "category": "CORE MOVE", "sku": "CORE-M04", "price": 1320, "stock": 50, "image": "./assets/products/M04-vent-mesh-trunk.webp", "card_image": "./assets/cards/M04-vent-mesh-trunk-kart.webp", "description": "Geniş gözenekli yan mesh panelleriyle yoğun antrenmanlar için ekstra nefes alan trunk. • Materyal: 82% Polyamide Mesh · 18% Elastane • Renk: Jet Black • Kemer: core / move (Second-Line System).", "active": true, "featured": false, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 107, "brand": "konfection", "name": "M05 | Lift Jock", "category": "CORE MOVE", "sku": "CORE-M05", "price": 1090, "stock": 40, "image": "./assets/products/M05-lift-jock.webp", "card_image": "./assets/cards/M05-lift-jock-kart.webp", "description": "Ergonomik ön kese ve yüksek elastikiyetli arka bantlarıyla destekleyici spor jockstrap. • Materyal: 85% Aero-Polyamide · 15% Elastane • Renk: Graphite / Cobalt Stitch • Kemer: core / move (Second-Line System).", "active": true, "featured": false, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 108, "brand": "konfection", "name": "M06 | Tide Swim Trunk", "category": "CORE MOVE", "sku": "CORE-M06", "price": 1690, "stock": 35, "image": "./assets/products/M06-tide-swim-trunk.webp", "card_image": "./assets/cards/M06-tide-swim-trunk-kart.webp", "description": "Hızlı kuruyan, klor ve tuzlu suya dayanıklı kompakt yüzücü mayo trunk. • Materyal: 80% Recycled Nylon · 20% Xtra Life Lycra • Renk: Deep Petrol Blue • Kemer: core / move (Second-Line System).", "active": true, "featured": false, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 109, "brand": "konfection", "name": "O01 | After Brief", "category": "CORE MOON", "sku": "CORE-O01", "price": 1390, "stock": 40, "image": "./assets/products/O01-after-brief.webp", "card_image": "./assets/cards/O01-after-brief-kart.webp", "description": "Yarı mat deri-görünümlü yan paneller ve heykelsi kesimli gece slibi. • Materyal: 86% Matte Coated Microfiber · 14% Elastane • Renk: Midnight Black • Kemer: core / moon (Second-Line System).", "active": true, "featured": false, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 110, "brand": "konfection", "name": "O02 | Eclipse Trunk", "category": "CORE MOON", "sku": "CORE-O02", "price": 1490, "stock": 45, "image": "./assets/products/O02-eclipse-trunk.webp", "card_image": "./assets/cards/O02-eclipse-trunk-kart.webp", "description": "Yarı saydam duman grisi yan panelleriyle gölge ve ten oyunları kuran düşük bel trunk. • Materyal: 84% Sheer Micromesh · 16% Elastane • Renk: Eclipse Smoke • Kemer: core / moon (Second-Line System).", "active": true, "featured": true, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 111, "brand": "konfection", "name": "O03 | Heat Mesh Brief", "category": "CORE MOON", "sku": "CORE-O03", "price": 1390, "stock": 35, "image": "./assets/products/O03-heat-mesh-brief.webp", "card_image": "./assets/cards/O03-heat-mesh-brief-kart.webp", "description": "Önü opak mikro-modal, yanları transparan ince tül ağ dokulu cesur brief. • Materyal: 78% Micro-Modal · 22% Sheer Tulle • Renk: Nocturne Black • Kemer: core / moon (Second-Line System).", "active": true, "featured": false, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 112, "brand": "konfection", "name": "O04 | Blue Hour Bikini", "category": "CORE MOON", "sku": "CORE-O04", "price": 1350, "stock": 35, "image": "./assets/products/O04-blue-hour-bikini.webp", "card_image": "./assets/cards/O04-blue-hour-bikini-kart.webp", "description": "Alacakaranlık mavisi satenimsi parlaklıkta, yüksek oyuklu tensel bikini brief. • Materyal: 88% Satin Polyamide · 12% Elastane • Renk: Blue Hour Navy • Kemer: core / moon (Second-Line System).", "active": true, "featured": false, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 113, "brand": "konfection", "name": "O05 | Motel Trunk", "category": "CORE MOON", "sku": "CORE-O05", "price": 1490, "stock": 40, "image": "./assets/products/O05-motel-trunk.webp", "card_image": "./assets/cards/O05-motel-trunk-kart.webp", "description": "Gece yarısı mürdüm-antrasit tonunda, kadifemsi dokulu sinematik kare kesim trunk. • Materyal: 90% Brushed Micro-Modal · 10% Elastane • Renk: Dark Plum / Aubergine • Kemer: core / moon (Second-Line System).", "active": true, "featured": false, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 114, "brand": "konfection", "name": "O06 | Full Moon Jock", "category": "CORE MOON", "sku": "CORE-O06", "price": 1450, "stock": 30, "image": "./assets/products/O06-full-moon-jock.webp", "card_image": "./assets/cards/O06-full-moon-jock-kart.webp", "description": "Kabartma dokulu ön panel ve minimal kemer mimarisiyle geceye özel tasarım jock. • Materyal: 85% Textured Faux-Grain · 15% Elastane • Renk: Obsidian Black • Kemer: core / moon (Second-Line System).", "active": true, "featured": false, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 115, "brand": "konfection", "name": "R01 | Noir Trunk", "category": "CORE RARE", "sku": "CORE-R01", "price": 2190, "stock": 25, "image": "./assets/products/R01-noir-trunk.webp", "card_image": "./assets/cards/R01-noir-trunk-kart.webp", "description": "İpeksi saf ipek-modal karışımı ve şampanya altın dokuma kemerli numaralı edisyon trunk. • Materyal: 75% Micro-Modal · 18% Mulberry Silk · 7% Elastane • Renk: Noir / Champagne Gold • Kemer: core / rare (Second-Line System).", "active": true, "featured": true, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 116, "brand": "konfection", "name": "R02 | Silk Contour Brief", "category": "CORE RARE", "sku": "CORE-R02", "price": 2090, "stock": 20, "image": "./assets/products/R02-silk-contour-brief.webp", "card_image": "./assets/cards/R02-silk-contour-brief-kart.webp", "description": "Sıvı-saten parlaklığında, elde bitirilmiş dikişli sınırlı üretim (001/500) lüks slip. • Materyal: 82% Italian Silk-Satin · 18% Elastane • Renk: Liquid Onyx • Kemer: core / rare (Second-Line System).", "active": true, "featured": false, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 117, "brand": "konfection", "name": "R03 | Merser Boxer Brief", "category": "CORE RARE", "sku": "CORE-R03", "price": 2290, "stock": 25, "image": "./assets/products/R03-merser-boxer-brief.webp", "card_image": "./assets/cards/R03-merser-boxer-brief-kart.webp", "description": "Çift merserize Mısır Giza pamuğu ile üretilmiş, zamansız 'Quiet Luxury' boxer brief. • Materyal: 92% Giza 45 Mercerized Cotton · 8% Elastane • Renk: Deep Obsidian • Kemer: core / rare (Second-Line System).", "active": true, "featured": false, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 118, "brand": "konfection", "name": "R04 | Espresso Lounge Short", "category": "CORE RARE", "sku": "CORE-R04", "price": 2890, "stock": 20, "image": "./assets/products/R04-espresso-lounge-short.webp", "card_image": "./assets/cards/R04-espresso-lounge-short-kart.webp", "description": "Altın uçlu kordon detayı ve koyu espresso tonuyla sınırlı üretim ipek-modal lounge şort. • Materyal: 70% Modal · 22% Silk · 8% Cashmere Touch • Renk: Dark Espresso / Gold • Kemer: core / rare (Second-Line System).", "active": true, "featured": false, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 119, "brand": "konfection", "name": "R05 | Midnight Slip", "category": "CORE RARE", "sku": "CORE-R05", "price": 1990, "stock": 20, "image": "./assets/products/R05-midnight-slip.webp", "card_image": "./assets/cards/R05-midnight-slip-kart.webp", "description": "Gece mavisi ton-sür-ton fitilli ve altın kemer logolu ultra-hafif yüksek işçilikli slip. • Materyal: 88% Sea Island Cotton · 12% Silk-Elastane • Renk: Midnight Indigo • Kemer: core / rare (Second-Line System).", "active": true, "featured": false, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}, {"id": 120, "brand": "konfection", "name": "R06 | Atelier Trunk", "category": "CORE RARE", "sku": "CORE-R06", "price": 2390, "stock": 20, "image": "./assets/products/R06-atelier-trunk.webp", "card_image": "./assets/cards/R06-atelier-trunk-kart.webp", "description": "İnce dikey ottoman-rib dokulu kumaş ve altın jakarlı kemeriyle koleksiyonun zirve parçası. • Materyal: 85% Fine Ottoman Rib Modal · 15% Silk-Elastane • Renk: Atelier Charcoal • Kemer: core / rare (Second-Line System).", "active": true, "featured": true, "is_demo": false, "created_at": "2026-10-25T20:13:20Z", "updated_at": "2026-10-25T20:13:20Z"}];
let products = [], settings = {}, filter = '', search = '';
const cartKey='demo-cart-'+brand;
let cart = {};
try { cart=JSON.parse(localStorage.getItem(cartKey)||'{}'); } catch {cart={};}
const coreCats = ['CORE DROP','CORE','CORE MOVE','CORE MOON'];
function toast(t) { const o=$('toast');o.textContent=t; o.classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(()=>o.classList.remove('show'),3300); }
function saveCart() {try{localStorage.setItem(cartKey,JSON.stringify(cart));}catch{}renderCart();}
function normAsset(src) {
  if (!src) return '';
  if (src.startsWith('/assets/')) return '.' + src;
  return src;
}
function realImage(src) {
  const s = normAsset(src || '');
  return /^(\.\/assets\/|\/assets\/|\/uploads\/|https:\/\/|data:image\/)/.test(s) && !s.includes('..') ? s : '';
}
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
const brandContent = {
  konfection:{
    name:'core.konfection',
    eyebrow:'NEW DROP / CORE WORLD',
    index:'01 / 03  ·  PEOPLE / PLACES / PRODUCTS',
    hero:'./assets/core-hero.webp',
    story:'./assets/core-lookbook.webp',
    end:'REAL PEOPLE. RICHER DAYS.',
    subtitle:'A brighter tomorrow begins with everyday.',
    collectionTitle:'THE ESSENTIALS',
    productTitle:'BEST SELLERS / Seçki',
    cate:coreCats,
    categoryPhotos:[1,2,3,4].map(i=>`./assets/core-category-${i}.webp`),
    trust:[['01','COMFORT'],['02','CULTURE'],['03','CONNECTION'],['04','COMMUNITY']]
  }
};
const cfg=brandContent[brand];
function updateCount(){ $('cartCount').textContent=Object.values(cart).reduce((a,b)=>a+Number(b||0),0); }
function renderHero() {
 $('brandmark').innerHTML='<img class="brand-logo-img" src="./assets/core-logo.webp" alt="core">';
 $('footerLogo').innerHTML='<img class="brand-logo-img" src="./assets/core-logo.webp" alt="core">';
 $('adminLink').href='./admin.html';
 $('footerAdmin').href='./admin.html';
 $('mobileAdmin').href='./admin.html';
 $('announcement').textContent=settings.announcement||defaultSettings.announcement;
 $('heroTitle').textContent=settings.hero_title||cfg.end;
 $('heroSubtitle').textContent=settings.hero_subtitle||cfg.subtitle;
 $('heroEyebrow').textContent=cfg.eyebrow;
 $('heroImage').style.backgroundImage=`linear-gradient(90deg,rgba(10,10,10,.05),transparent), url("${realImage(settings.hero_image)||cfg.hero}")`;
 $('heroSide').textContent='PEOPLE\nPLACES\nPRODUCTS\nA BRIGHTER\nTOMORROW';
 $('collectionHeading').textContent=cfg.collectionTitle;
 $('productHeading').textContent=cfg.productTitle;
 $('storyImage').style.backgroundImage=`url("${realImage(settings.story_image)||cfg.story}")`;
 $('storyTitle').textContent=settings.story_title||cfg.end;
 $('storyBody').textContent=settings.story_body||'';
 $('closingTitle').textContent=cfg.end;
 $('footerDesc').textContent=cfg.subtitle;
 $('promoTitle').textContent=settings.promo_title||'GOODS FOR A BRIGHTER TOMORROW.';
 $('promoBody').textContent=settings.promo_body||cfg.subtitle;
 $('promoEyebrow').textContent='THE NEW WAVE / 002';
 $('promoImage').style.backgroundImage=`url("${realImage(settings.promo_image)||cfg.categoryPhotos[1]}")`;
 $('editorialEyebrow').textContent='THE CORE JOURNAL / 03';
 $('editorialHeading').textContent='CULTURE IN MOTION.';
 $('editorialDesc').textContent='Yeni fikirlerin, şehir hayatının ve kişisel tarzın kesiştiği yer.';
 $('campaignLabel').textContent=settings.campaign_label||'THE CORE JOURNAL / 003';
 $('campaignTitle').textContent=settings.campaign_title||'BUILT FOR EVERYDAY.';
 $('campaignBody').textContent=settings.campaign_body||'Konforun, hareketin ve kişisel stilin kendi ritmi.';
 $('campaignImage').style.backgroundImage=`url("${realImage(settings.campaign_image)||cfg.categoryPhotos[0]}")`;
 $('editorialAsideImage').style.backgroundImage=`url("${cfg.categoryPhotos[1]}")`;
 $('editorialAsideTitle').textContent='REAL PEOPLE. REAL STYLE.';
 $('footerNote').textContent='STYLE IS PERSONAL.';
 $('trustbar').innerHTML=cfg.trust.map(t=>`<div class="trust-item"><span class="trust-icon">${esc(t[0])}</span><span>${esc(t[1])}</span></div>`).join('');
 document.title=cfg.name+' • Collections';
}
function categoryForCard(label) {
 return label;
}
function renderCats() {
 $('categoryGrid').innerHTML=cfg.cate.map((c,i)=>`<button type="button" class="category-card" data-cat="${esc(categoryForCard(c))}" ><img class="cat-photo" loading="lazy" src="${esc(cfg.categoryPhotos[i])}" alt=""><span class="cat-nr">0${i+1} / 04</span><span class="cat-content"><strong>${esc(c)}</strong><small>${['01 · STREETWEAR GİRİŞ HATTI','02 · ANA İMZA KOLEKSİYONU','03 · PERFORMANS & SPOR HATTI','04 · GECE & TENSEL HAT'][i]}</small></span><span class="cat-arr">↗</span></button>`).join('');
}
function renderProducts() {
 const activeList = products.filter(p => p.active !== false);
 const cats=[...new Set(activeList.map(p=>p.category))].sort((a,b)=>a.localeCompare(b,'tr'));
 $('categoryFilter').innerHTML='<option value="">Tüm kategoriler</option>'+cats.map(c=>`<option value="${esc(c)}">${esc(c)}</option>`).join('');
 $('categoryFilter').value=filter;
 refreshProducts();
}
function refreshProducts() {
 const list=products.filter(p=>p.active!==false && (!filter||p.category===filter)&&(!search||`${p.name} ${p.sku} ${p.description}`.toLocaleLowerCase('tr').includes(search)));
 $('emptyProducts').hidden=list.length>0;
 $('productGrid').innerHTML=list.map(p=>{
   const img=realImage(p.image);
   return `<article class="product-card"><button type="button" data-product="${p.id}" class="product-picture" aria-label="${esc(p.name)} detayları">${img?`<img loading="lazy" src="${esc(img)}" alt="${esc(p.name)}">`:'<span class="missing-photo">Görsel eklenecek</span>'}${p.is_demo?'<span class="demo-tag">ÖRNEK ÜRÜN</span>':''}</button><div class="product-info"><span class="product-cat">${esc(p.category)}</span><button type="button" class="product-name" data-product="${p.id}">${esc(p.name)}</button><div class="product-bottom"><strong>${money(p.price)}</strong><button type="button" class="add-btn" data-add="${p.id}" ${p.stock===0?'disabled title="Stokta yok"':''} aria-label="Sepete ekle">${p.stock===0?'×':'+'}</button></div><span class="stock-caption">${p.stock>0?`${p.stock} adet stokta`:'Stokta yok'}</span></div></article>`;
 }).join('');
}
function renderCart() {
 updateCount();
 const items=Object.entries(cart).map(([key,q])=>({p:products.find(p=>String(p.id)===key),q:Number(q)})).filter(x=>x.p&&x.q>0);
 $('cartItems').innerHTML=items.length?items.map(({p,q})=>`<div class="cart-line"><img src="${esc(realImage(p.image))}" alt=""><div><strong>${esc(p.name)}</strong><small>${money(p.price)}</small><div class="quantity"><button data-q="${p.id}" data-delta="-1">−</button><span>${q}</span><button data-q="${p.id}" data-delta="1">+</button></div></div><button data-remove="${p.id}" class="remove-x" aria-label="Kaldır">×</button></div>`).join(''):'<div class="empty small">Sepetiniz henüz boş.</div>';
 $('cartTotal').textContent=money(items.reduce((n,{p,q})=>n+p.price*q,0));
}
function cardUrlFor(p) {
 if (p.card_image) return normAsset(p.card_image);
 const slug = String(p.name||'').split('|').pop().trim().toLowerCase().replace(/\s+/g,'-');
 const code = String(p.sku||'').replace(/^CORE-/,'');
 return `./assets/cards/${code}-${slug}-kart.webp`;
}
function showProduct(id) {
 const p=products.find(p=>p.id===id);if(!p)return;
 const cUrl = cardUrlFor(p);
 $('productDetail').innerHTML=`<div class="product-detail-image">${realImage(p.image)?`<img id="detailMainImg" src="${esc(realImage(p.image))}" alt="${esc(p.name)}">`:''}</div><span class="kicker">${esc(p.category)} ${p.is_demo?' / ÖRNEK ÜRÜN':''}</span><h2>${esc(p.name)}</h2><h3>${money(p.price)}</h3><p>${esc(p.description)}</p><p class="stock-caption">SKU: ${esc(p.sku)} · Stok: ${p.stock}</p><div style="display:flex;gap:10px;margin-bottom:10px;flex-wrap:wrap"><button type="button" class="ghost-btn" onclick="const im=document.getElementById('detailMainImg');if(im){im.src=im.src.includes('/cards/')?'${esc(realImage(p.image))}':'${esc(cUrl)}';}">▣ Ürün Teknik Kartını Göster / Değiştir</button><a class="ghost-btn" href="${esc(cUrl)}" target="_blank" rel="noopener" style="text-decoration:none">↓ Ürün Kartını İndir</a></div><button class="primary-btn full" data-add="${p.id}" ${!p.stock?'disabled':''}>${p.stock?'Demo sepete ekle':'Stokta yok'} →</button>`;
 $('productOverlay').hidden=false;
}
function addToCart(id) {
 const p=products.find(p=>p.id===id); if(!p)return;
 if(!p.stock){toast('Bu ürün stokta yok.');return;}
 cart[id]=Math.min((cart[id]||0)+1,p.stock);saveCart();toast('Sepete eklendi: '+p.name);
}
async function init(){
 try {
   if(location.protocol==='file:')throw Error('Static file mode');
   const response=await fetch('/api/public/'+brand);
   if(!response.ok)throw Error('Static mode');
   const data=await response.json();products=data.products||[];settings=data.settings||defaultSettings;
 } catch(e) {
   try {
     const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
     products = (saved?.products && saved.products.length) ? saved.products : DEFAULT_PRODUCTS;
     settings = Object.assign({}, defaultSettings, saved?.settings || {});
   } catch {
     products = DEFAULT_PRODUCTS;
     settings = Object.assign({}, defaultSettings);
   }
 }
 renderHero();renderCats();renderProducts();renderCart();
}
document.addEventListener('click',e=>{
 const cat=e.target.closest('[data-cat]');if(cat){filter=cat.dataset.cat;$('categoryFilter').value=filter;refreshProducts();$('products').scrollIntoView({behavior:'smooth'});}
 const product=e.target.closest('[data-product]');if(product)showProduct(Number(product.dataset.product));
 const add=e.target.closest('[data-add]');if(add)addToCart(Number(add.dataset.add));
 const rm=e.target.closest('[data-remove]');if(rm){delete cart[rm.dataset.remove];saveCart();}
 const q=e.target.closest('[data-q]');if(q){const id=q.dataset.q;const p=products.find(p=>String(p.id)===id);if(p){cart[id]=Math.min(p.stock,Math.max(0,(cart[id]||0)+Number(q.dataset.delta)));if(!cart[id])delete cart[id];saveCart();}}
 const close=e.target.closest('[data-close]');if(close)$(close.dataset.close+'Overlay').hidden=true;
 if(e.target.classList.contains('drawer-overlay'))e.target.hidden=true;
});
$('categoryFilter').addEventListener('change',e=>{filter=e.target.value;refreshProducts();});
$('productSearch').addEventListener('input',e=>{search=e.target.value.toLocaleLowerCase('tr').trim();refreshProducts();});
$('searchBtn').addEventListener('click',()=>{ $('products').scrollIntoView({behavior:'smooth'});$('productSearch').focus({preventScroll:true}); });
$('bagBtn').addEventListener('click',()=>{$('cartOverlay').hidden=false;renderCart();});
$('menuBtn').addEventListener('click',()=>{const m=$('mobileMenu');m.hidden=!m.hidden;$('menuBtn').setAttribute('aria-expanded',String(!m.hidden));});
$('mobileMenu').addEventListener('click',e=>{if(e.target.closest('a')){$('mobileMenu').hidden=true;$('menuBtn').setAttribute('aria-expanded','false');}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.querySelectorAll('.drawer-overlay').forEach(o=>o.hidden=true);}});
init();

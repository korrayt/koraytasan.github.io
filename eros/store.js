'use strict';
const urlParams = new URLSearchParams(location.search);
const brand = urlParams.get('brand') === 'konfection' || location.pathname.includes('konfection') ? 'konfection' : 'eros';
document.body.dataset.brand = brand;
const $ = x => document.getElementById(x);
const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const money = n => new Intl.NumberFormat('tr-TR',{style:'currency',currency:'TRY'}).format(n);

const DB_KEY = 'eros_v2_full_db_v1';

function getInitialDb() {
  const now = new Date().toISOString();
  const erosSamples = [
    [1, 'eros', '(ÖRNEK) EROS / PULSE', 'Kişisel Bakım', 'EROS-DEM-001', 3890, 16, true, './assets/eros-product-1.webp', 'Minimal tasarımlı premium kişisel bakım ürünü.'],
    [2, 'eros', '(ÖRNEK) EROS / MUSE', 'Kişisel Bakım', 'EROS-DEM-002', 4490, 12, true, './assets/eros-product-2.webp', 'Ergonomik ve rafine bir tasarım örneği.'],
    [3, 'eros', '(ÖRNEK) EROS / HALO', 'Çiftler İçin', 'EROS-DEM-003', 2490, 21, true, './assets/eros-product-3.webp', 'Yakınlığın farklı biçimleri için tasarlanmış örnek ürün.'],
    [4, 'eros', '(ÖRNEK) EROS / EMPRESS', 'Kişisel Bakım', 'EROS-DEM-004', 5290, 7, true, './assets/eros-product-4.webp', 'Yalın formlu premium masaj cihazı örneği.'],
    [5, 'eros', '(ÖRNEK) EROS / APEX', 'Erkeklere Özel', 'EROS-DEM-005', 4190, 5, true, './assets/eros-product-5.webp', 'Kompakt wellness ürünü örneği.'],
    [6, 'eros', '(ÖRNEK) EROS / RITUAL', 'Aksesuarlar', 'EROS-DEM-006', 1690, 29, true, './assets/eros-product-6.webp', 'Saten ve yumuşak dokulu aksesuar seti örneği.'],
    [7, 'konfection', '(ÖRNEK) UNDER.CORE / BOXER', 'İç Giyim', 'CORE-DEM-001', 490, 64, true, './assets/core-underwear.webp', 'Konfor odaklı günlük iç giyim. Görsel yalnızca örnektir.'],
    [8, 'konfection', '(ÖRNEK) CORE / OVERSIZED HOODIE', 'Giyim', 'CORE-DEM-002', 1790, 38, true, './assets/core-product-1.webp', 'Günlük kullanım için geniş kesim hoodie.'],
    [9, 'konfection', '(ÖRNEK) CORE / ESSENTIAL TEE', 'Giyim', 'CORE-DEM-003', 690, 73, true, './assets/core-product-2.webp', 'Sade, rahat ve zamansız tişört.'],
    [10, 'konfection', '(ÖRNEK) CORE / DAILY CAP', 'Aksesuarlar', 'CORE-DEM-004', 590, 18, true, './assets/core-product-3.webp', 'Günlük kombinlere eşlik eden şapka.'],
    [11, 'konfection', '(ÖRNEK) CORE / CARRY TOTE', 'Aksesuarlar', 'CORE-DEM-005', 490, 44, true, './assets/core-product-4.webp', 'Günlük eşyalar için hafif bez çanta.'],
    [12, 'konfection', '(ÖRNEK) CORE / STREET RUNNER', 'Ayakkabı', 'CORE-DEM-006', 2490, 8, true, './assets/core-product-8.webp', 'Günlük kullanıma uygun şehir sneaker.'],
    [13, 'konfection', '(ÖRNEK) CORE / STUDIO LAYER', 'Giyim', 'CORE-DEM-007', 1390, 11, false, './assets/core-product-5.webp', 'Minimal streetwear katmanlama ürünü.'],
    [14, 'konfection', '(ÖRNEK) CORE / MONO CAP', 'Aksesuarlar', 'CORE-DEM-008', 690, 25, false, './assets/core-product-6.webp', 'İkinci renk alternatifli şapka.']
  ];
  const products = erosSamples.map(x => ({
    id: x[0], brand: x[1], name: x[2], category: x[3], sku: x[4], price: x[5], stock: x[6],
    featured: x[7], image: x[8], description: x[9], active: true, is_demo: true, created_at: now, updated_at: now
  }));
  const movements = products.map((p, idx) => ({
    id: idx + 1, brand: p.brand, product_id: p.id, product_name: p.name, sku: p.sku,
    quantity: p.stock, kind: 'INITIAL', before_stock: 0, after_stock: p.stock,
    note: 'Otomatik demo kurulumu', actor: 'system', created_at: now
  }));
  const settings = {
    eros: {
      brand: 'eros',
      hero_title: 'PLEASURE LIVES HERE',
      hero_subtitle: 'Kendini keşfetmenin en zarif hali. Yakınlık, tasarım ve özgüven.',
      announcement: 'EROS • Tasarım, mahremiyet ve kendini ifade etme',
      story_title: 'PLEASURE IS HUMAN',
      story_body: 'EROS, kendini keşfetmeye ve yakınlığa alan açan çağdaş bir yaşam markası olarak tasarlandı. Buradaki ürünler demo amaçlıdır.',
      hero_image: './assets/eros-hero.webp',
      story_image: './assets/eros-story.webp',
      promo_title: 'INTIMACY ELEVATES EVERYTHING.',
      promo_body: 'Kendini özgürce ifade etmenin küçük ritüellerini keşfet.',
      promo_image: './assets/eros-category-4.webp',
      campaign_label: 'THE EROS EDIT / 003',
      campaign_title: 'ART OF INTIMACY',
      campaign_body: 'Duyuların, güvenin ve yakınlığın estetik keşfi.',
      campaign_image: './assets/eros-category-1.webp'
    },
    konfection: {
      brand: 'konfection',
      hero_title: 'MODERN ESSENTIALS FOR A FULLER LIFE.',
      hero_subtitle: 'Konfor, kültür ve bağlantı. Günlük yaşamın her anına eşlik eden parçalar.',
      announcement: 'core.konfection • Günlük stile yeni bakış',
      story_title: 'REAL PEOPLE. RICHER DAYS.',
      story_body: 'core.konfection, sade ve işlevsel tasarımın günlük hayatla buluştuğu bir konsept mağaza. Ürünler ve fiyatlar şimdilik örnektir.',
      hero_image: './assets/core-hero.webp',
      story_image: './assets/core-lookbook.webp',
      promo_title: 'GOODS FOR A BRIGHTER TOMORROW.',
      promo_body: 'Gündelik yaşam için daha güçlü bir duruş. Yeni koleksiyon yakında.',
      promo_image: './assets/core-category-2.webp',
      campaign_label: 'THE CORE JOURNAL / 003',
      campaign_title: 'BUILT FOR EVERYDAY.',
      campaign_body: 'Konforun, hareketin ve kişisel stilin kendi ritmi.',
      campaign_image: './assets/core-category-1.webp'
    }
  };
  return { nextId: 15, nextMovId: 15, products, movements, settings };
}

function loadDb() {
  try {
    const raw = localStorage.getItem(DB_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && Array.isArray(parsed.products) && parsed.settings) return parsed;
    }
  } catch {}
  const init = getInitialDb();
  try { localStorage.setItem(DB_KEY, JSON.stringify(init)); } catch {}
  return init;
}

let products = [], settings = {}, filter = '', search = '';
const cartKey = 'demo-cart-' + brand;
let cart = {};
try { cart = JSON.parse(localStorage.getItem(cartKey) || '{}'); } catch { cart = {}; }
const erosCats = ['Kadınlara Özel','Erkeklere Özel','Çiftler İçin','Wellness & Yaşam'];
const coreCats = ['Giyim','Aksesuarlar','UNDER.CORE','Ayakkabı'];

function toast(t) {
  const o = $('toast');
  o.textContent = t;
  o.classList.add('show');
  clearTimeout(toast.t);
  toast.t = setTimeout(() => o.classList.remove('show'), 3300);
}

function saveCart() {
  try { localStorage.setItem(cartKey, JSON.stringify(cart)); } catch {}
  renderCart();
}

function realImage(src) {
  if (!src) return '';
  if (src.startsWith('/assets/')) return '.' + src;
  if (src.startsWith('/eros/assets/')) return '.' + src.replace('/eros', '');
  return src;
}

const brandContent = {
  eros:{name:'EROS',eyebrow:'INTIMACY IS A HIGHER FREQUENCY',index:'01 / 03  ·  EROS EDITION',hero:'./assets/eros-hero.webp',story:'./assets/eros-story.webp',end:'PLEASURE IS HUMAN.',subtitle:'Modern tasarım. Daha özgür bir sen.',collectionTitle:'YOUR WORLD',productTitle:'THE EDIT / Ürün seçkisi',cate:erosCats,categoryPhotos:[1,2,3,4].map(i=>`./assets/eros-category-${i}.webp`),trust:[['◇','ÖZENLİ SEÇKİ'],['◌','MAHREMİYET ODAKLI'],['✦','ÇAĞDAŞ TASARIM'],['◎','KAPSAYICI YAKLAŞIM']]},
  konfection:{name:'core.konfection',eyebrow:'NEW DROP / CORE WORLD',index:'01 / 03  ·  PEOPLE / PLACES / PRODUCTS',hero:'./assets/core-hero.webp',story:'./assets/core-lookbook.webp',end:'REAL PEOPLE. RICHER DAYS.',subtitle:'A brighter tomorrow begins with everyday.',collectionTitle:'THE ESSENTIALS',productTitle:'BEST SELLERS / Seçki',cate:coreCats,categoryPhotos:[1,2,3,4].map(i=>`./assets/core-category-${i}.webp`),trust:[['01','COMFORT'],['02','CULTURE'],['03','CONNECTION'],['04','COMMUNITY']]}
};
const cfg = brandContent[brand];

function updateCount() {
  $('cartCount').textContent = Object.values(cart).reduce((a,b) => a + Number(b || 0), 0);
}

function renderHero() {
  $('brandmark').textContent = cfg.name;
  $('footerLogo').textContent = cfg.name;
  $('adminLink').href = './admin.html?brand=' + brand;
  $('footerAdmin').href = './admin.html?brand=' + brand;
  $('mobileAdmin').href = './admin.html?brand=' + brand;
  $('announcement').textContent = settings.announcement || '';
  $('heroTitle').textContent = settings.hero_title || cfg.end;
  $('heroSubtitle').textContent = settings.hero_subtitle || cfg.subtitle;
  $('heroEyebrow').textContent = cfg.eyebrow;
  $('heroImage').style.backgroundImage = `linear-gradient(90deg,rgba(10,10,10,.05),transparent), url("${realImage(settings.hero_image) || cfg.hero}")`;
  $('heroSide').textContent = brand === 'eros' ? 'D E S I R E  ·  D E S I G N  ·  F R E E D O M' : 'PEOPLE\nPLACES\nPRODUCTS\nA BRIGHTER\nTOMORROW';
  $('collectionHeading').textContent = cfg.collectionTitle;
  $('productHeading').textContent = cfg.productTitle;
  $('storyImage').style.backgroundImage = `url("${realImage(settings.story_image) || cfg.story}")`;
  $('storyTitle').textContent = settings.story_title || cfg.end;
  $('storyBody').textContent = settings.story_body || '';
  $('closingTitle').textContent = cfg.end;
  $('footerDesc').textContent = cfg.subtitle;
  $('promoTitle').textContent = settings.promo_title || 'NEW SEASON. NEW PERSPECTIVE.';
  $('promoBody').textContent = settings.promo_body || cfg.subtitle;
  $('promoEyebrow').textContent = brand === 'eros' ? 'THE RITUAL / CURATED' : 'THE NEW WAVE / 002';
  $('promoImage').style.backgroundImage = `url("${realImage(settings.promo_image) || cfg.categoryPhotos[3]}")`;
  $('editorialEyebrow').textContent = brand === 'eros' ? 'EROS STORIES / 03' : 'THE CORE JOURNAL / 03';
  $('editorialHeading').textContent = brand === 'eros' ? 'BEYOND THE ORDINARY.' : 'CULTURE IN MOTION.';
  $('editorialDesc').textContent = brand === 'eros' ? 'Modern yakınlığa daha farklı bir bakış.' : 'Yeni fikirlerin, şehir hayatının ve kişisel tarzın kesiştiği yer.';
  $('campaignLabel').textContent = settings.campaign_label || 'THE EDIT / 003';
  $('campaignTitle').textContent = settings.campaign_title || cfg.end;
  $('campaignBody').textContent = settings.campaign_body || cfg.subtitle;
  $('campaignImage').style.backgroundImage = `url("${realImage(settings.campaign_image) || cfg.categoryPhotos[0]}")`;
  $('editorialAsideImage').style.backgroundImage = `url("${cfg.categoryPhotos[1]}")`;
  $('editorialAsideTitle').textContent = brand === 'eros' ? 'A MORE CONNECTED YOU.' : 'REAL PEOPLE. REAL STYLE.';
  $('footerNote').textContent = brand === 'eros' ? 'PLEASURE IS PERSONAL.' : 'STYLE IS PERSONAL.';
  $('trustbar').innerHTML = cfg.trust.map(t => `<div class="trust-item"><span class="trust-icon">${esc(t[0])}</span><span>${esc(t[1])}</span></div>`).join('');
  document.title = cfg.name + ' • Collections';
}

function categoryForCard(label) {
  if (brand === 'eros') {
    return {'Kadınlara Özel':'Kişisel Bakım','Erkeklere Özel':'Erkeklere Özel','Çiftler İçin':'Çiftler İçin','Wellness & Yaşam':'Aksesuarlar'}[label] || '';
  }
  return {'Giyim':'Giyim','Aksesuarlar':'Aksesuarlar','UNDER.CORE':'İç Giyim','Ayakkabı':'Ayakkabı'}[label] || '';
}

function renderCats() {
  $('categoryGrid').innerHTML = cfg.cate.map((c,i) => `<button type="button" class="category-card" data-cat="${esc(categoryForCard(c))}"><img class="cat-photo" loading="lazy" src="${esc(cfg.categoryPhotos[i])}" alt=""><span class="cat-nr">0${i+1} / 04</span><span class="cat-content"><strong>${esc(c)}</strong><small>${brand==='eros'?['DISCOVER YOURSELF','STAY TRUE','CLOSER TOGETHER','CONSCIOUS LIVING'][i]:['EVERYDAY PIECES','REFINED DETAILS','UNDER.CORE EDIT','BUILT FOR WHAT’S NEXT'][i]}</small></span><span class="cat-arr">↗</span></button>`).join('');
}

function renderProducts() {
  const cats = [...new Set(products.map(p => p.category))].sort((a,b) => a.localeCompare(b,'tr'));
  $('categoryFilter').innerHTML = '<option value="">Tüm kategoriler</option>' + cats.map(c => `<option value="${esc(c)}">${esc(c)}</option>`).join('');
  $('categoryFilter').value = filter;
  refreshProducts();
}

function refreshProducts() {
  const list = products.filter(p => (!filter || p.category === filter) && (!search || `${p.name} ${p.sku} ${p.description}`.toLocaleLowerCase('tr').includes(search)));
  $('emptyProducts').hidden = list.length > 0;
  $('productGrid').innerHTML = list.map(p => {
    const img = realImage(p.image);
    return `<article class="product-card"><button type="button" data-product="${p.id}" class="product-picture" aria-label="${esc(p.name)} detayları">${img?`<img loading="lazy" src="${esc(img)}" alt="${esc(p.name)}">`:'<span class="missing-photo">Görsel eklenecek</span>'}${p.is_demo?'<span class="demo-tag">ÖRNEK ÜRÜN</span>':''}</button><div class="product-info"><span class="product-cat">${esc(p.category)}</span><button type="button" class="product-name" data-product="${p.id}">${esc(p.name)}</button><div class="product-bottom"><strong>${money(p.price)}</strong><button type="button" class="add-btn" data-add="${p.id}" ${p.stock===0?'disabled title="Stokta yok"':''} aria-label="Sepete ekle">${p.stock===0?'×':'+'}</button></div><span class="stock-caption">${p.stock>0?`${p.stock} adet stokta`:'Stokta yok'}</span></div></article>`;
  }).join('');
}

function renderCart() {
  updateCount();
  const items = Object.entries(cart).map(([key,q]) => ({p:products.find(p => String(p.id) === key), q:Number(q)})).filter(x => x.p && x.q > 0);
  $('cartItems').innerHTML = items.length ? items.map(({p,q}) => `<div class="cart-line"><img src="${esc(realImage(p.image))}" alt=""><div><strong>${esc(p.name)}</strong><small>${money(p.price)}</small><div class="quantity"><button data-q="${p.id}" data-delta="-1">−</button><span>${q}</span><button data-q="${p.id}" data-delta="1">+</button></div></div><button data-remove="${p.id}" class="remove-x" aria-label="Kaldır">×</button></div>`).join('') : '<div class="empty small">Sepetiniz henüz boş.</div>';
  $('cartTotal').textContent = money(items.reduce((n,{p,q}) => n + p.price * q, 0));
}

function showProduct(id) {
  const p = products.find(p => p.id === id);
  if (!p) return;
  $('productDetail').innerHTML = `<div class="product-detail-image">${realImage(p.image)?`<img src="${esc(realImage(p.image))}" alt="${esc(p.name)}">`:''}</div><span class="kicker">${esc(p.category)} ${p.is_demo?' / ÖRNEK ÜRÜN':''}</span><h2>${esc(p.name)}</h2><h3>${money(p.price)}</h3><p>${esc(p.description)}</p><p class="stock-caption">SKU: ${esc(p.sku)} · Stok: ${p.stock}</p><button class="primary-btn full" data-add="${p.id}" ${!p.stock?'disabled':''}>${p.stock?'Sepete ekle':'Stokta yok'} →</button><p class="cart-notice">%100 gizli kargo ve medikal kalite güvencesiyle gönderilir.</p>`;
  $('productOverlay').hidden = false;
}

function addToCart(id) {
  const p = products.find(p => p.id === id);
  if (!p) return;
  if (!p.stock) { toast('Bu ürün stokta yok.'); return; }
  cart[id] = Math.min((cart[id] || 0) + 1, p.stock);
  saveCart();
  toast('Sepete eklendi: ' + p.name);
}

function init() {
  const db = loadDb();
  products = db.products.filter(p => p.brand === brand && p.active).sort((a,b) => Number(b.featured) - Number(a.featured) || b.id - a.id);
  settings = db.settings[brand] || {};
  renderHero();
  renderCats();
  renderProducts();
  renderCart();
}

document.addEventListener('click', e => {
  const cat = e.target.closest('[data-cat]'); if (cat) { filter = cat.dataset.cat; $('categoryFilter').value = filter; refreshProducts(); $('products').scrollIntoView({behavior:'smooth'}); }
  const product = e.target.closest('[data-product]'); if (product) showProduct(Number(product.dataset.product));
  const add = e.target.closest('[data-add]'); if (add) addToCart(Number(add.dataset.add));
  const rm = e.target.closest('[data-remove]'); if (rm) { delete cart[rm.dataset.remove]; saveCart(); }
  const q = e.target.closest('[data-q]'); if (q) { const id = q.dataset.q; const p = products.find(p => String(p.id) === id); cart[id] = Math.min(p.stock, Math.max(0, (cart[id] || 0) + Number(q.dataset.delta))); if (!cart[id]) delete cart[id]; saveCart(); }
  const close = e.target.closest('[data-close]'); if (close) $(close.dataset.close + 'Overlay').hidden = true;
  if (e.target.classList.contains('drawer-overlay')) e.target.hidden = true;
});
$('categoryFilter').addEventListener('change', e => { filter = e.target.value; refreshProducts(); });
$('productSearch').addEventListener('input', e => { search = e.target.value.toLocaleLowerCase('tr').trim(); refreshProducts(); });
$('searchBtn').addEventListener('click', () => { $('products').scrollIntoView({behavior:'smooth'}); $('productSearch').focus({preventScroll:true}); });
$('bagBtn').addEventListener('click', () => { $('cartOverlay').hidden = false; renderCart(); });
$('menuBtn').addEventListener('click', () => { const m = $('mobileMenu'); m.hidden = !m.hidden; $('menuBtn').setAttribute('aria-expanded', String(!m.hidden)); });
$('mobileMenu').addEventListener('click', e => { if (e.target.closest('a')) { $('mobileMenu').hidden = true; $('menuBtn').setAttribute('aria-expanded', 'false'); } });
document.addEventListener('keydown', e => { if (e.key === 'Escape') { document.querySelectorAll('.drawer-overlay').forEach(o => o.hidden = true); } });
init();

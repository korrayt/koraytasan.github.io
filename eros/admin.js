'use strict';
const urlParams = new URLSearchParams(location.search);
const brand = urlParams.get('brand') === 'konfection' ? 'konfection' : 'eros';
document.body.dataset.brand = brand;
const $ = id => document.getElementById(id);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const price = n => new Intl.NumberFormat('tr-TR',{style:'currency',currency:'TRY'}).format(n || 0);
const fmtDt = d => d ? new Date(d).toLocaleString('tr-TR',{dateStyle:'short',timeStyle:'short'}) : '-';
const bName = brand === 'eros' ? 'EROS' : 'core.konfection';
const DB_KEY = 'eros_v2_full_db_v1';
const SESSION_KEY = 'eros_v2_admin_session';

let user = 'admin', tab = 'dashboard', products = [], movements = [], stats = {}, settings = {};

function toast(s) {
  $('toast').textContent = s;
  $('toast').classList.add('show');
  clearTimeout(toast.t);
  toast.t = setTimeout(() => $('toast').classList.remove('show'), 3500);
}

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
  const prods = erosSamples.map(x => ({
    id: x[0], brand: x[1], name: x[2], category: x[3], sku: x[4], price: x[5], stock: x[6],
    featured: x[7], image: x[8], description: x[9], active: true, is_demo: true, created_at: now, updated_at: now
  }));
  const movs = prods.map((p, idx) => ({
    id: idx + 1, brand: p.brand, product_id: p.id, product_name: p.name, sku: p.sku,
    quantity: p.stock, kind: 'INITIAL', before_stock: 0, after_stock: p.stock,
    note: 'Otomatik demo kurulumu', actor: 'system', created_at: now
  }));
  const sets = {
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
  return { nextId: 15, nextMovId: 15, products: prods, movements: movs, settings: sets };
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
  saveDb(init);
  return init;
}

function saveDb(db) {
  try { localStorage.setItem(DB_KEY, JSON.stringify(db)); } catch {}
}

function resolveImg(src) {
  if (!src) return './assets/empty.webp';
  if (src.startsWith('/assets/')) return '.' + src;
  return src;
}

function initialize() {
  $('switchEros').classList.toggle('active', brand === 'eros');
  $('switchCore').classList.toggle('active', brand === 'konfection');
  $('crumbBrand').textContent = bName.toUpperCase();
  const storeHref = brand === 'konfection' ? './?brand=konfection' : './';
  $('goStore').href = storeHref;
  $('loginBack').href = storeHref;
  if (localStorage.getItem(SESSION_KEY) === 'admin') {
    showApp();
  } else {
    $('loginScreen').hidden = false;
    $('adminApp').hidden = true;
  }
}

function showApp() {
  $('loginScreen').hidden = true;
  $('adminApp').hidden = false;
  $('sessionLabel').textContent = '◉ ' + user;
  reloadAll();
  switchTab(tab);
}

function reloadAll() {
  const db = loadDb();
  products = db.products.filter(p => p.brand === brand).sort((a,b) => b.id - a.id);
  movements = db.movements.filter(m => m.brand === brand).sort((a,b) => b.id - a.id);
  settings = db.settings[brand] || {};
  stats = {
    total: products.length,
    published: products.filter(p => p.active).length,
    units: products.reduce((s, p) => s + p.stock, 0),
    low_stock: products.filter(p => p.stock <= 10).length,
    demo_count: products.filter(p => p.is_demo).length
  };
  renderDashboard();
  renderProducts();
  renderStock();
  renderSettings();
}

function switchTab(t) {
  tab = t;
  const labels = {dashboard:'Genel bakış',products:'Ürün yönetimi',stock:'Stok ve hareketler',settings:'Vitrin ayarları'};
  $('pageTitle').textContent = labels[t];
  document.querySelectorAll('.tab-panel').forEach(el => el.hidden = el.id !== t + 'Panel');
  document.querySelectorAll('#tabNav button').forEach(el => el.classList.toggle('selected', el.dataset.tab === t));
  $('topAdd').hidden = t === 'settings';
  window.scrollTo({top:0,behavior:'smooth'});
}

function movementLine(m) {
  const n = m.quantity;
  const inwards = n >= 0;
  return `<div class="micro-log"><div class="movement-symbol ${inwards?'':'out'}">${inwards?'+':'−'}</div><div><strong>${esc(m.product_name)}</strong><small>${esc(m.note)} · ${fmtDt(m.created_at)}</small></div><span class="log-qty">${n>0?'+':''}${n}</span></div>`;
}

function renderDashboard() {
  const maxStock = Math.max(...products.map(p => p.stock), 1);
  const cards = [['Toplam ürün',stats.total||0,'Kayıtlı tüm ürünler','▣'],['Yayındaki ürün',stats.published||0,'Ziyaretçilere görünür','◉'],['Toplam stok',stats.units||0,'Kayıtlı birim adedi','⇧'],['Düşük stok',stats.low_stock||0,'10 ve altında kalanlar','!']];
  $('dashboardPanel').innerHTML = `<div class="overview-head"><div><h2>${esc(bName)} / Mağaza özeti</h2><p>Ürün ve stok verileri doğrudan mağaza veritabanından gelir.</p></div><button data-go="products" class="line-btn">Ürünleri yönet ↗</button></div>
  <div class="stat-grid">${cards.map((c,i)=>`<div class="stat-card ${i===3?'warn':''}"><div class="stat-head"><span>${c[0]}</span><span class="symbol">${c[3]}</span></div><strong>${c[1]}</strong><span class="stat-foot">${c[2]}</span></div>`).join('')}</div>
  <div class="split-panels"><section class="panel-section"><div class="panel-title"><h2>Stok dağılımı</h2><button data-go="stock" class="ghost-btn">Stok yönetimi ↗</button></div><p class="hint">Kayıtlı ürünlere göre mevcut stok adedi.</p><div class="bargraph">${products.slice(0,8).map(p=>`<div class="bar-row"><div class="bar-name" title="${esc(p.name)}">${esc(p.name)}</div><div class="bar-track"><div class="bar-fill" style="width:${Math.max(0,p.stock/maxStock*100)}%"></div></div><span class="bar-qty">${p.stock}</span></div>`).join('')||'<p class="muted">Henüz ürün eklenmedi.</p>'}</div></section>
  <section class="panel-section"><div class="panel-title"><h2>Son stok hareketleri</h2><button data-go="stock" class="ghost-btn">Tümü ↗</button></div>${movements.slice(0,6).map(movementLine).join('')||'<p class="muted">Henüz stok hareketi yok.</p>'}</section></div>
  <div class="manage-info"><span>◎</span><div><strong>Demo ürünler ayrı işaretlenir.</strong>Bu markada <b>${stats.demo_count||0}</b> örnek ürün var. İstediğinde Ürün Yönetimi sekmesindeki “Örnek ürünleri temizle” ile tümünü kaldırabilirsin. Gerçek ürünler etkilenmez.</div></div>`;
}

function productRow(p) {
  return `<tr><td><div class="item-cell"><img src="${esc(resolveImg(p.image))}" loading="lazy" alt=""><div><strong>${esc(p.name)}</strong><small>${esc(p.sku)}</small></div></div></td><td>${esc(p.category)}</td><td><strong>${price(p.price)}</strong></td><td><span class="pill ${p.stock<=10?'low':''}">${p.stock} adet</span></td><td><span class="pill ${p.active?'':'gray'}">${p.active?'Yayında':'Gizli'}</span> ${p.is_demo?'<span class="pill demo">ÖRNEK</span>':''}</td><td><div class="row-actions"><button data-edit="${p.id}" title="Düzenle">Düzenle</button><button data-move="${p.id}" title="Stok hareketi">± Stok</button><button class="delete" data-delete="${p.id}" title="Sil">Sil</button></div></td></tr>`;
}

function renderProducts() {
  $('productsPanel').innerHTML = `<div class="section-split"><div><h2>Ürün kataloğu <span class="muted">/ ${products.length} kayıt</span></h2><p>Ürün ekle, güncelle, gizle, sil veya stok hareketi oluştur.</p></div><div class="toolbar-right"><button data-export="products" class="line-btn">↓ Ürün CSV</button><button data-open-add class="solid">+ Yeni ürün</button></div></div>
  <div class="table-toolbar"><input id="catalogSearch" class="toolbar-search" type="search" placeholder="Ürün adı, SKU veya kategori ara..."><label class="hint"><input id="demoOnly" type="checkbox"> Sadece örnek ürünler</label></div>
  <div class="table-wrap"><table><thead><tr><th>Ürün</th><th>Kategori</th><th>Fiyat</th><th>Stok</th><th>Durum</th><th>İşlem</th></tr></thead><tbody id="productsBody">${products.map(productRow).join('')||'<tr><td colspan="6" class="empty-table">Henüz kayıtlı ürün yok. “Yeni ürün” ile ekleyebilirsin.</td></tr>'}</tbody></table></div>
  <div class="manage-info danger"><span>♢</span><div><strong>Örnek ürünleri topluca temizle</strong><b>“ÖRNEK”</b> işaretli ${stats.demo_count||0} demo ürünü tek seferde kaldırır. Gerçek ürünlere dokunmaz. İşlem geri alınamaz; stok işlem geçmişi denetim amacıyla kalır.</div><div class="right"><button class="line-btn danger-btn" data-purge ${!stats.demo_count?'disabled':''}>Örnek ürünleri temizle</button></div></div>`;
  bindCatalogFilter();
}

function bindCatalogFilter() {
  const inp = $('catalogSearch'); const demo = $('demoOnly');
  function apply() {
    const q = inp.value.toLocaleLowerCase('tr');
    const show = products.filter(p => (!demo.checked || p.is_demo) && `${p.name} ${p.sku} ${p.category}`.toLocaleLowerCase('tr').includes(q));
    $('productsBody').innerHTML = show.map(productRow).join('') || '<tr><td colspan="6" class="empty-table">Aramaya uygun ürün bulunamadı.</td></tr>';
  }
  inp.addEventListener('input', apply);
  demo.addEventListener('change', apply);
}

function stockRows() {
  return products.map(p => `<tr><td><div class="item-cell"><img src="${esc(resolveImg(p.image))}" alt=""><div><strong>${esc(p.name)}</strong><small>${esc(p.sku)}</small></div></div></td><td>${esc(p.category)}</td><td><span class="pill ${p.stock<=10?'low':''}">${p.stock} adet</span></td><td><button data-move="${p.id}" class="ghost-btn">± Stok işlemi</button></td></tr>`).join('');
}

function renderStock() {
  $('stockPanel').innerHTML = `<div class="section-split"><div><h2>Envanter ve stok hareketleri</h2><p>Giriş / çıkış / sayım düzeltmesi. Her değişiklik tarih ve açıklamayla saklanır.</p></div><button data-move="" class="solid">± Yeni hareket</button></div><div class="panel-section" style="margin-bottom:25px"><div class="panel-title"><h2>Mevcut stoklar</h2><span class="hint">${products.reduce((n,p)=>n+p.stock,0)} toplam birim</span></div><div class="table-wrap"><table><thead><tr><th>Ürün</th><th>Kategori</th><th>Mevcut</th><th>İşlem</th></tr></thead><tbody>${stockRows()||'<tr><td colspan="4" class="empty-table">Stok bulunmuyor.</td></tr>'}</tbody></table></div></div>
  <div class="panel-section"><div class="panel-title"><h2>Hareket geçmişi</h2><button data-export="movements" class="line-btn">↓ Hareket CSV</button></div><p class="table-sub">Son 500 kayıt gösteriliyor; CSV ile tüm hareket geçmişi alınabilir.</p><div class="table-wrap"><table><thead><tr><th>Tarih</th><th>Ürün / SKU</th><th>İşlem</th><th>Değişim</th><th>Önce → Sonra</th><th>Açıklama</th><th>Yapan</th></tr></thead><tbody>${movements.map(m=>`<tr><td>${fmtDt(m.created_at)}</td><td><b>${esc(m.product_name)}</b><br><small>${esc(m.sku)}</small></td><td><span class="pill ${m.kind==='OUT'?'low':''}">${esc({IN:'Giriş',OUT:'Çıkış',ADJUST:'Düzelt',INITIAL:'İlk stok'}[m.kind]||m.kind)}</span></td><td><b>${m.quantity>0?'+':''}${m.quantity}</b></td><td>${m.before_stock} → ${m.after_stock}</td><td>${esc(m.note)}</td><td>${esc(m.actor)}</td></tr>`).join('')||'<tr><td colspan="7" class="empty-table">Henüz stok hareketi yok.</td></tr>'}</tbody></table></div></div>`;
}

function settingsImageField(key, label) {
  const value = esc(settings[key] || '');
  return `<div class="field settings-photo-field"><label for="set-${key}">${label}</label><div class="image-row"><input id="set-${key}" name="${key}" value="${value}" placeholder="./assets/... veya https://..."><button type="button" data-upload-setting="${key}" class="upload-btn">Görsel yükle</button></div>${value?`<img class="settings-preview" src="${resolveImg(value)}" alt="${esc(label)} önizleme">`:''}</div>`;
}

function renderSettings() {
  $('settingsPanel').innerHTML = `<form id="settingsForm" class="settings-form"><section class="settings-box"><h2>Vitrin içerikleri</h2><p>Bu alanların tamamı <b>${esc(bName)}</b> mağazasına özeldir. Görselleri değiştirerek kampanya vitrinini de yenileyebilirsin.</p>
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
  <div class="settings-save"><button class="solid" type="submit">Tüm vitrin değişikliklerini kaydet ↗</button><span class="hint">Yüklenen görseller kaydolur; düzenlenmiş içerik için ayrıca Kaydet'e bas.</span></div></section></form>
  <div class="manage-info"><span>◉</span><div><strong>İki mağaza / Tek yönetim merkezi</strong>EROS ve core.konfection farklı marka kimlikleri, ayrı ürün katalogları, bağımsız stokları ve bağımsız vitrin içerikleri kullanır.</div></div>`;
}

function openProduct(id) {
  const p = products.find(p => p.id === id);
  $('modalTitle').textContent = p ? 'Ürün düzenle' : 'Yeni ürün ekle';
  $('itemId').value = p?.id || '';
  $('itemName').value = p?.name || '';
  $('itemCat').value = p?.category || '';
  $('itemSku').value = p?.sku || '';
  $('itemPrice').value = p?.price ?? 0;
  $('itemStock').value = 0;
  $('itemDescription').value = p?.description || '';
  $('itemImage').value = p?.image || '';
  $('itemActive').checked = p ? p.active : true;
  $('itemFeatured').checked = p ? p.featured : false;
  $('itemDemo').checked = p ? p.is_demo : false;
  $('stockCreationField').hidden = !!p;
  $('catList').innerHTML = [...new Set(products.map(p => p.category))].map(c => `<option value="${esc(c)}">`).join('');
  $('formError').textContent = '';
  $('uploadStatus').textContent = 'JPG, PNG veya WebP • en fazla 5 MB.';
  $('productModal').hidden = false;
}

function openStock(id) {
  if (!products.length) { toast('Önce bir ürün ekle.'); return; }
  $('stockProduct').innerHTML = products.map(p => `<option value="${p.id}">${esc(p.name)} • ${p.stock} adet</option>`).join('');
  if (id) $('stockProduct').value = String(id);
  document.querySelector('input[name="stockKind"][value="IN"]').checked = true;
  $('stockQty').value = '1';
  $('stockNote').value = '';
  $('stockError').textContent = '';
  $('stockQtyLabel').textContent = 'Giriş miktarı';
  $('stockModal').hidden = false;
}

function saveProduct(e) {
  e.preventDefault();
  $('formError').textContent = '';
  const id = Number($('itemId').value || 0);
  const db = loadDb();
  const sku = $('itemSku').value.trim().toUpperCase();
  if (db.products.some(p => p.brand === brand && p.sku === sku && p.id !== id)) {
    $('formError').textContent = 'SKU bu mağazada zaten kayıtlı';
    return;
  }
  const now = new Date().toISOString();
  if (id) {
    const idx = db.products.findIndex(p => p.brand === brand && p.id === id);
    if (idx !== -1) {
      db.products[idx] = {
        ...db.products[idx],
        name: $('itemName').value.trim(),
        category: $('itemCat').value.trim(),
        sku,
        price: Number($('itemPrice').value),
        image: $('itemImage').value.trim(),
        description: $('itemDescription').value.trim(),
        active: $('itemActive').checked,
        featured: $('itemFeatured').checked,
        is_demo: $('itemDemo').checked,
        updated_at: now
      };
    }
  } else {
    const newId = db.nextId++;
    const initStock = Math.max(0, Number($('itemStock').value || 0));
    const prod = {
      id: newId,
      brand,
      name: $('itemName').value.trim(),
      category: $('itemCat').value.trim(),
      sku,
      price: Number($('itemPrice').value),
      stock: initStock,
      image: $('itemImage').value.trim(),
      description: $('itemDescription').value.trim(),
      active: $('itemActive').checked,
      featured: $('itemFeatured').checked,
      is_demo: $('itemDemo').checked,
      created_at: now,
      updated_at: now
    };
    db.products.push(prod);
    if (initStock > 0) {
      db.movements.push({
        id: db.nextMovId++, brand, product_id: newId, product_name: prod.name, sku,
        quantity: initStock, kind: 'INITIAL', before_stock: 0, after_stock: initStock,
        note: 'Yeni ürün açılış stoku', actor: 'admin', created_at: now
      });
    }
  }
  saveDb(db);
  $('productModal').hidden = true;
  reloadAll();
  toast('Ürün başarıyla kaydedildi.');
}

function saveStock(e) {
  e.preventDefault();
  $('stockError').textContent = '';
  const db = loadDb();
  const product_id = Number($('stockProduct').value);
  const kind = document.querySelector('input[name="stockKind"]:checked').value;
  const quantity = Number($('stockQty').value);
  const note = $('stockNote').value.trim();
  const prod = db.products.find(p => p.brand === brand && p.id === product_id);
  if (!prod) return;
  const before = prod.stock;
  const after = kind === 'ADJUST' ? quantity : before + (kind === 'IN' ? quantity : -quantity);
  if (after < 0) { $('stockError').textContent = 'Stok sıfırın altına düşemez'; return; }
  if (after === before) { $('stockError').textContent = 'Stok değeri değişmedi'; return; }
  const delta = after - before;
  prod.stock = after;
  prod.updated_at = new Date().toISOString();
  db.movements.push({
    id: db.nextMovId++, brand, product_id: prod.id, product_name: prod.name, sku: prod.sku,
    quantity: delta, kind, before_stock: before, after_stock: after, note, actor: 'admin', created_at: prod.updated_at
  });
  saveDb(db);
  $('stockModal').hidden = true;
  reloadAll();
  toast(`Stok kaydedildi: ${before} → ${after}`);
}

function saveSettings(e) {
  e.preventDefault();
  const f = e.target;
  const s = Object.fromEntries(new FormData(f).entries());
  const db = loadDb();
  db.settings[brand] = { ...db.settings[brand], ...s };
  saveDb(db);
  reloadAll();
  toast('Vitrin içerikleri kaydedildi.');
}

function fileToDataUrl(file, cb) {
  const reader = new FileReader();
  reader.onload = () => cb(reader.result);
  reader.readAsDataURL(file);
}

function downloadCsv(filename, rows) {
  const content = '\ufeff' + rows.map(r => r.map(v => `"${String(v ?? '').replace(/"/g,'""')}"`).join(',')).join('\r\n');
  const blob = new Blob([content], {type: 'text/csv;charset=utf-8;'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
}

document.addEventListener('click', e => {
  const t = e.target.closest('[data-tab]'); if (t) { switchTab(t.dataset.tab); return; }
  const g = e.target.closest('[data-go]'); if (g) { switchTab(g.dataset.go); return; }
  if (e.target.closest('[data-open-add]')) { openProduct(); return; }
  const ed = e.target.closest('[data-edit]'); if (ed) { openProduct(Number(ed.dataset.edit)); return; }
  const st = e.target.closest('[data-move]'); if (st) { openStock(Number(st.dataset.move) || null); return; }
  const cl = e.target.closest('[data-close]'); if (cl) { $(cl.dataset.close === 'modal' ? 'productModal' : 'stockModal').hidden = true; return; }
  if (e.target.classList.contains('modal-overlay')) { e.target.hidden = true; return; }
  const su = e.target.closest('[data-upload-setting]');
  if (su) {
    const key = su.dataset.uploadSetting;
    const chooser = document.createElement('input');
    chooser.type = 'file';
    chooser.accept = 'image/png,image/jpeg,image/webp';
    chooser.addEventListener('change', () => {
      const file = chooser.files?.[0];
      if (!file) return;
      fileToDataUrl(file, dUrl => {
        const el = $('set-' + key);
        el.value = dUrl;
        const old = el.closest('.settings-photo-field').querySelector('img.settings-preview');
        if (old) old.src = dUrl;
        toast('Görsel yüklendi. Değişiklikleri kaydet.');
      });
    });
    chooser.click();
    return;
  }
  const del = e.target.closest('[data-delete]');
  if (del) {
    const id = Number(del.dataset.delete);
    const p = products.find(p => p.id === id);
    if (confirm(`“${p?.name}” ürününü kalıcı olarak silmek istiyor musun?\nStok işlem geçmişi korunur.`)) {
      const db = loadDb();
      db.products = db.products.filter(x => !(x.brand === brand && x.id === id));
      saveDb(db);
      reloadAll();
      toast('Ürün silindi.');
    }
    return;
  }
  const pu = e.target.closest('[data-purge]');
  if (pu) {
    if (confirm(`DİKKAT: ${stats.demo_count || 0} adet örnek ürün kalıcı olarak silinecek.\nGerçek ürünler korunacak. Onaylıyor musun?`)) {
      const db = loadDb();
      const before = db.products.length;
      db.products = db.products.filter(x => !(x.brand === brand && x.is_demo));
      saveDb(db);
      reloadAll();
      toast((before - db.products.length) + ' demo ürün silindi.');
    }
    return;
  }
  const ex = e.target.closest('[data-export]');
  if (ex) {
    if (ex.dataset.export === 'movements') {
      downloadCsv(`${brand}-inventory.csv`, [
        ['date','sku','product','kind','delta','before','after','reason','actor'],
        ...movements.map(r => [r.created_at, r.sku, r.product_name, r.kind, r.quantity, r.before_stock, r.after_stock, r.note, r.actor])
      ]);
    } else {
      downloadCsv(`${brand}-products.csv`, [
        ['id','name','sku','category','price_try','stock','active','featured','is_demo','description','image'],
        ...products.map(r => [r.id, r.name, r.sku, r.category, r.price, r.stock, r.active?1:0, r.featured?1:0, r.is_demo?1:0, r.description, r.image])
      ]);
    }
    return;
  }
});

$('loginForm').addEventListener('submit', e => {
  e.preventDefault();
  $('loginError').textContent = '';
  const u = $('username').value.trim();
  const pw = $('password').value;
  if (u === 'admin' && ['ErosAdmin2026!','A-secure-demo-password-2026','admin12345678','cor3us2026'].includes(pw)) {
    localStorage.setItem(SESSION_KEY, 'admin');
    showApp();
  } else {
    $('loginError').textContent = 'Kullanıcı adı veya şifre hatalı';
  }
});
$('productForm').addEventListener('submit', saveProduct);
$('stockForm').addEventListener('submit', saveStock);
$('imageUpload').addEventListener('change', e => {
  if (e.target.files[0]) {
    fileToDataUrl(e.target.files[0], dUrl => {
      $('itemImage').value = dUrl;
      $('uploadStatus').textContent = 'Görsel yüklendi.';
      toast('Görsel yüklendi.');
    });
  }
});
$('topAdd').addEventListener('click', () => openProduct());
$('logout').addEventListener('click', () => { localStorage.removeItem(SESSION_KEY); location.reload(); });
document.addEventListener('submit', e => { if (e.target.id === 'settingsForm') saveSettings(e); });
document.querySelectorAll('input[name="stockKind"]').forEach(x => x.addEventListener('change', () => {
  $('stockQtyLabel').textContent = x.value === 'ADJUST' ? 'Yeni toplam stok' : x.value === 'OUT' ? 'Çıkış miktarı' : 'Giriş miktarı';
}));
document.addEventListener('keydown', e => { if (e.key === 'Escape') { document.querySelectorAll('.modal-overlay').forEach(x => x.hidden = true); } });
initialize();

'use strict';
const brand = 'konfection';
document.body.dataset.brand = brand;
const $ = x => document.getElementById(x);
const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const money = n => new Intl.NumberFormat('tr-TR',{style:'currency',currency:'TRY'}).format(n);
const STORAGE_KEY = 'core_konfection_v2_cms_clean';
let products = [], settings = {}, filter = '', search = '';
const cartKey='demo-cart-'+brand;
let cart = {};
try { cart=JSON.parse(localStorage.getItem(cartKey)||'{}'); } catch {cart={};}
const coreCats = ['Giyim','Aksesuarlar','UNDER.CORE','Ayakkabı'];
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
 return {'Giyim':'Giyim','Aksesuarlar':'Aksesuarlar','UNDER.CORE':'İç Giyim','Ayakkabı':'Ayakkabı'}[label]||label;
}
function renderCats() {
 $('categoryGrid').innerHTML=cfg.cate.map((c,i)=>`<button type="button" class="category-card" data-cat="${esc(categoryForCard(c))}" ><img class="cat-photo" loading="lazy" src="${esc(cfg.categoryPhotos[i])}" alt=""><span class="cat-nr">0${i+1} / 04</span><span class="cat-content"><strong>${esc(c)}</strong><small>${['EVERYDAY PIECES','REFINED DETAILS','UNDER.CORE EDIT','BUILT FOR WHAT’S NEXT'][i]}</small></span><span class="cat-arr">↗</span></button>`).join('');
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
function showProduct(id) {
 const p=products.find(p=>p.id===id);if(!p)return;
 $('productDetail').innerHTML=`<div class="product-detail-image">${realImage(p.image)?`<img src="${esc(realImage(p.image))}" alt="${esc(p.name)}">`:''}</div><span class="kicker">${esc(p.category)} ${p.is_demo?' / ÖRNEK ÜRÜN':''}</span><h2>${esc(p.name)}</h2><h3>${money(p.price)}</h3><p>${esc(p.description)}</p><p class="stock-caption">SKU: ${esc(p.sku)} · Stok: ${p.stock}</p><button class="primary-btn full" data-add="${p.id}" ${!p.stock?'disabled':''}>${p.stock?'Demo sepete ekle':'Stokta yok'} →</button>`;
 $('productOverlay').hidden=false;
}
function addToCart(id) {
 const p=products.find(p=>p.id===id); if(!p)return;
 if(!p.stock){toast('Bu ürün stokta yok.');return;}
 cart[id]=Math.min((cart[id]||0)+1,p.stock);saveCart();toast('Sepete eklendi: '+p.name);
}
async function init(){
 try {
   const response=await fetch('/api/public/'+brand);
   if(!response.ok)throw Error('Static mode');
   const data=await response.json();products=data.products||[];settings=data.settings||defaultSettings;
 } catch(e) {
   try {
     const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
     products = saved?.products || [];
     settings = Object.assign({}, defaultSettings, saved?.settings || {});
   } catch {
     products = [];
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

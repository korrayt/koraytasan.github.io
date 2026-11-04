/**
 * Çiftçiden Aldım — Son Kullanıcı / Tüketici Canlı Vitrini (www.koraytasan.com/ciftcidenaldim)
 * - YALNIZCA isDemo === false ve approved olan gerçek ürün ve tezgâhları gösterir.
 * - DEMO ürünler burada kesinlikle gösterilmez (yalnızca /admin.ciftcidenaldim altında görünür).
 * - Giriş ekranı yalnızca Tüketici / Kullanıcı girişi içindir.
 */
(function () {
  const Core = window.CiftcidenAldimCore;

  let state = {
    category: 'hepsi',
    region: '',
    onlySeason: false,
    onlyOrganic: false,
    search: '',
    sort: 'default',
    cart: loadConsumerCart(),
    consumerUser: loadConsumerUser(),
  };

  const productGrid = document.getElementById('productGrid');
  const stallsGrid = document.getElementById('stallsGrid');
  const categoryGrid = document.getElementById('categoryGrid');
  const regionChips = document.getElementById('regionChips');
  const searchInput = document.getElementById('searchInput');
  const clearSearch = document.getElementById('clearSearch');
  const sortSelect = document.getElementById('sortSelect');
  const activeFilterBox = document.getElementById('activeFilterBox');
  const activeFilterLabel = document.getElementById('activeFilterLabel');
  const resetFiltersBtn = document.getElementById('resetFiltersBtn');
  const filterSeasonBtn = document.getElementById('filterSeasonBtn');
  const filterOrganicBtn = document.getElementById('filterOrganicBtn');
  const cartCountEl = document.getElementById('cartCount');
  const consumerAuthLabel = document.getElementById('consumerAuthLabel');

  const cartDrawer = document.getElementById('cartDrawer');
  const cartBackdrop = document.getElementById('cartBackdrop');
  const cartGroups = document.getElementById('cartGroups');
  const itemsSubtotal = document.getElementById('itemsSubtotal');
  const shippingTotal = document.getElementById('shippingTotal');
  const grandTotal = document.getElementById('grandTotal');
  const stallCount = document.getElementById('stallCount');

  const infoModal = document.getElementById('infoModal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalBody = document.getElementById('modalBody');

  function loadConsumerCart() {
    try {
      const raw = localStorage.getItem(Core.CONSUMER_CART_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function saveConsumerCart() {
    try {
      localStorage.setItem(Core.CONSUMER_CART_KEY, JSON.stringify(state.cart));
    } catch (e) {
      // ignore
    }
  }

  function loadConsumerUser() {
    try {
      const raw = localStorage.getItem(Core.CONSUMER_AUTH_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function saveConsumerUser(user) {
    state.consumerUser = user;
    try {
      if (user) {
        localStorage.setItem(Core.CONSUMER_AUTH_KEY, JSON.stringify(user));
      } else {
        localStorage.removeItem(Core.CONSUMER_AUTH_KEY);
      }
    } catch (e) {
      // ignore
    }
    updateAuthHeader();
  }

  function updateAuthHeader() {
    if (!consumerAuthLabel) return;
    consumerAuthLabel.textContent = state.consumerUser
      ? state.consumerUser.fullName
      : 'Giriş Yap / Üye Ol';
  }

  function renderCatalog() {
    const { products, stalls } = Core.getConsumerRealCatalog();

    // Sadece gerçek (isDemo === false) ürünler!
    let list = products.filter((p) => {
      if (p.isDemo) return false;
      if (state.category !== 'hepsi' && p.category !== state.category) return false;
      if (state.region && p.region !== state.region) return false;
      if (state.onlySeason && !p.seasonal) return false;
      if (state.onlyOrganic && !p.hasVerifiedOrganicCert) return false;
      if (
        state.search &&
        !Core.matchesTurkishSearch(state.search, [
          p.name,
          p.region,
          p.origin,
          p.stallName,
          p.productionMethodLabel,
        ])
      ) {
        return false;
      }
      return true;
    });

    if (state.sort === 'price-asc') list.sort((a, b) => a.priceKurus - b.priceKurus);
    if (state.sort === 'price-desc') list.sort((a, b) => b.priceKurus - a.priceKurus);
    if (state.sort === 'name') list.sort((a, b) => a.name.localeCompare(b.name, 'tr'));

    const hasFilter =
      state.category !== 'hepsi' ||
      Boolean(state.region) ||
      state.onlySeason ||
      state.onlyOrganic ||
      Boolean(state.search);

    if (activeFilterBox && activeFilterLabel) {
      activeFilterBox.hidden = !hasFilter;
      const parts = [];
      if (state.category !== 'hepsi') parts.push(`Kategori: ${state.category}`);
      if (state.region) parts.push(`Yöre: ${state.region}`);
      if (state.onlySeason) parts.push('Tam Mevsimi');
      if (state.onlyOrganic) parts.push('Sertifikalı Organik');
      if (state.search) parts.push(`Arama: "${state.search}"`);
      activeFilterLabel.textContent = parts.join(' · ');
    }

    if (list.length === 0) {
      productGrid.innerHTML = `
        <div style="grid-column:1/-1;background:#fffefa;border:1px solid #dce4d8;border-radius:18px;padding:42px 28px;text-align:center;">
          <span class="eyebrow" style="color:#214d35;">CANLI PAZAR VİTRİNİ · SIFIR DEMO / ÖRNEK VERİ</span>
          <h3 style="font-family:'Fraunces',serif;font-size:28px;color:#193b2a;margin:10px 0;">
            ${
              products.length === 0
                ? 'Doğrulanmış Gerçek Üretici Tezgâhlarımızın Belge & Gıda QA Denetimleri Devam Ediyor'
                : 'Seçtiğiniz Filtreye Uygun Onaylı Gerçek Ürün Bulunamadı'
            }
          </h3>
          <p style="font-size:13.5px;color:#5a675b;max-width:640px;margin:0 auto 22px;line-height:1.7;">
            <strong>Çiftçiden Aldım</strong> son kullanıcı vitrininde hiçbir zaman örnek (DEMO) ürün, sahte tezgâh veya doğrulanmamış organik etiketi gösterilmez. Yalnızca ÇKS / İşletme Kayıt belgesi, ambalaj dayanım testi ve soğuk zincir rota doğrulaması onaylanan <strong>gerçek üretici tezgâhları</strong> burada listelenir.
          </p>
          <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
            <button type="button" class="btn btn-dark" id="emptyStateApplyBtn">🧑‍🌾 Üreticiyseniz Tezgâh Başvurusu Yapın →</button>
            <button type="button" class="btn btn-ghost" id="emptyStateLoginBtn">👤 Tüketici Girişi / Üye Ol →</button>
          </div>
        </div>
      `;
      const applyBtn = document.getElementById('emptyStateApplyBtn');
      const loginBtn = document.getElementById('emptyStateLoginBtn');
      if (applyBtn) applyBtn.addEventListener('click', openProducerApplyModal);
      if (loginBtn) loginBtn.addEventListener('click', openConsumerLoginModal);
    } else {
      productGrid.innerHTML = list
        .map(
          (p) => `
        <article class="product-card">
          <div class="product-media">
            <img src="${p.image || './assets/zeytinyagi.jpg'}" alt="${p.name}" loading="lazy" />
            <span class="tag ${p.hasVerifiedOrganicCert ? 'organic' : ''}">
              ${p.hasVerifiedOrganicCert ? '🏅 Sertifikalı Organik' : p.badge || 'Doğrulanmış Üretici'}
            </span>
          </div>
          <div class="product-info">
            <span class="product-location">⌖ ${p.origin}</span>
            <h3 class="product-name">${p.name}</h3>
            <div class="product-stall">▣ ${p.stallName}</div>
            <div class="product-shipping">
              📦 ${p.shippingLabel}<br/>
              <small style="color:#3b5942;font-weight:700;">🌱 ${p.productionMethodLabel} · Lot: ${p.batchLotNumber}</small>
            </div>
            <div class="product-bottom">
              <div>
                <span class="price">${p.priceTl} TL</span>
                <span class="price-unit">/ ${p.unit}</span>
                <small style="display:block;font-size:10px;color:#687366;margin-top:2px;">+ Tezgâh kargosu (${p.shippingBaseFeeTl} TL)</small>
              </div>
              <button class="add-btn" type="button" data-add-id="${p.id}">Sepete Ekle +</button>
            </div>
          </div>
        </article>
      `
        )
        .join('');

      productGrid.querySelectorAll('[data-add-id]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-add-id');
          state.cart[id] = (state.cart[id] || 0) + 1;
          saveConsumerCart();
          renderCart();
          openCart();
        });
      });
    }

    // Gerçek Tezgâhlar
    if (stallsGrid) {
      if (stalls.length === 0) {
        stallsGrid.innerHTML = `
          <div style="grid-column:1/-1;background:#f4efe4;border:1px solid #e5dcc8;border-radius:16px;padding:28px;text-align:center;">
            <strong style="color:#193b2a;font-size:16px;">Doğrulanmış Gerçek Üretici Tezgâh Başvuruları Kabul Ediliyor</strong>
            <p style="font-size:12.5px;color:#5c6659;margin-top:6px;">
              Müşteri vitrinimizde DEMO örnek tezgâhlar yer almaz. Saha danışmanı ve Gıda QA onayından geçen gerçek tezgâhlar otomatik olarak burada yayınlanır.
            </p>
          </div>
        `;
      } else {
        stallsGrid.innerHTML = stalls
          .map(
            (s) => `
          <div style="background:#fff;border:1px solid #e4e6df;border-radius:16px;padding:20px;">
            <div style="display:flex;justify-content:space-between;gap:8px;">
              <span class="eyebrow">⌖ ${s.originLabel}</span>
              <span style="font-size:11px;font-weight:800;color:#214d35;">✓ Doğrulanmış Gerçek Tezgâh</span>
            </div>
            <h3 style="font-family:'Fraunces',serif;font-size:21px;margin:8px 0;color:#193b2a;">▣ ${s.name}</h3>
            <p style="font-size:12.5px;color:#5a675b;line-height:1.6;">${s.story}</p>
            <div style="margin-top:12px;padding-top:10px;border-top:1px solid #e4e6df;font-size:11.5px;color:#435446;">
              <strong>Üretici:</strong> ${s.producerName} · <strong>Kayıt No:</strong> ${s.foodBusinessRegistrationNo}
            </div>
          </div>
        `
          )
          .join('');
      }
    }
  }

  function renderCart() {
    const { products } = Core.getConsumerRealCatalog();
    const plan = Core.buildDistributedCart(state.cart, products);

    const totalItems = plan.groups.reduce(
      (sum, g) => sum + g.items.reduce((s, i) => s + i.quantity, 0),
      0
    );
    if (cartCountEl) cartCountEl.textContent = String(totalItems);

    if (plan.groups.length === 0) {
      cartGroups.innerHTML = `
        <div class="empty-cart">
          <p style="font-size:32px;margin-bottom:8px;">🧺</p>
          <strong>Sepetiniz şu an boş.</strong>
          <p style="font-size:12px;color:#687366;margin-top:6px;">Onaylı gerçek üretici tezgâhlarından ürün eklediğinizde her tezgâhın ayrı gönderimi burada listelenir.</p>
        </div>
      `;
    } else {
      cartGroups.innerHTML = plan.groups
        .map(
          (g) => `
        <div class="cart-group">
          <div class="cart-group-head">
            <strong>▣ ${g.stallName}</strong>
            <span>Çıkış: ${g.origin}</span>
          </div>
          ${g.items
            .map(
              (item) => `
            <div class="cart-item">
              <div>
                <strong>${item.product.name}</strong>
                <small>${item.product.priceTl} TL / ${item.product.unit}</small>
              </div>
              <div class="qty-controls">
                <button type="button" data-qty-id="${item.product.id}" data-delta="-1">−</button>
                <b>${item.quantity}</b>
                <button type="button" data-qty-id="${item.product.id}" data-delta="1">+</button>
                <strong>${item.lineTotalTl} TL</strong>
              </div>
            </div>
          `
            )
            .join('')}
          <div class="cart-group-foot">
            <span>🚚 Tezgâh Kargosu: <b>${g.shippingFeeTl} TL</b></span>
            <strong>Gönderim Toplamı: ${g.groupTotalTl} TL</strong>
          </div>
        </div>
      `
        )
        .join('');

      cartGroups.querySelectorAll('[data-qty-id]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-qty-id');
          const delta = Number(btn.getAttribute('data-delta'));
          const next = (state.cart[id] || 0) + delta;
          if (next <= 0) delete state.cart[id];
          else state.cart[id] = next;
          saveConsumerCart();
          renderCart();
        });
      });
    }

    if (itemsSubtotal) itemsSubtotal.textContent = `${plan.itemsSubtotalTl} TL`;
    if (shippingTotal) shippingTotal.textContent = `${plan.shippingTotalTl} TL`;
    if (grandTotal) grandTotal.textContent = `${plan.grandTotalTl} TL`;
    if (stallCount) stallCount.textContent = String(plan.distinctShipmentCount);
  }

  function openCart() {
    cartBackdrop.hidden = false;
    cartDrawer.classList.add('open');
    cartDrawer.setAttribute('aria-hidden', 'false');
  }

  function closeCart() {
    cartBackdrop.hidden = true;
    cartDrawer.classList.remove('open');
    cartDrawer.setAttribute('aria-hidden', 'true');
  }

  function openModal(html) {
    modalBody.innerHTML = html;
    modalBackdrop.hidden = false;
    infoModal.hidden = false;
  }

  function closeModal() {
    modalBackdrop.hidden = true;
    infoModal.hidden = true;
  }

  /**
   * Standart Tüketici / Kullanıcı Giriş & Kayıt Ekranı
   * (Tezgâh sahibi ve Saha Danışmanı moderasyon girişi burada yer almaz!)
   */
  function openConsumerLoginModal() {
    if (state.consumerUser) {
      openModal(`
        <span class="eyebrow">TÜKETİCİ HESABIM</span>
        <h2 style="font-family:'Fraunces',serif;font-size:26px;margin:8px 0;">Hoş Geldiniz, ${state.consumerUser.fullName}</h2>
        <p style="font-size:13px;color:#5c6659;">
          E-posta: <strong>${state.consumerUser.email}</strong> · Telefon: <strong>${state.consumerUser.phone}</strong> · Teslimat İli: <strong>${state.consumerUser.city}</strong>
        </p>
        <div style="margin-top:18px;display:flex;gap:10px;flex-wrap:wrap;">
          <button type="button" class="btn btn-dark" id="viewMyOrdersInsideBtn">📦 Siparişlerimi Gör</button>
          <button type="button" class="btn btn-ghost" id="logoutConsumerBtn">Çıkış Yap</button>
        </div>
      `);
      document.getElementById('logoutConsumerBtn').addEventListener('click', () => {
        saveConsumerUser(null);
        closeModal();
      });
      document.getElementById('viewMyOrdersInsideBtn').addEventListener('click', openOrdersModal);
      return;
    }

    openModal(`
      <span class="eyebrow">TÜKETİCİ / KULLANICI GİRİŞİ</span>
      <h2 style="font-family:'Fraunces',serif;font-size:28px;margin:6px 0 10px;color:#193b2a;">Giriş Yap veya Üye Ol</h2>
      <p style="font-size:12.5px;color:#5c6659;margin-bottom:14px;">
        Doğrulanmış üretici tezgâhlarından alışveriş yapmak, teslimat adreslerinizi kaydetmek ve ayrı tezgâh kargolarınızı takip etmek için tüketici hesabınıza giriş yapın.
      </p>
      <form id="consumerLoginForm" style="display:grid;gap:10px;">
        <label style="font-size:12px;font-weight:700;">
          Ad Soyad
          <input required name="fullName" placeholder="Adınız Soyadınız" style="width:100%;margin-top:4px;padding:10px;border-radius:8px;border:1px solid #d5ddd4;" />
        </label>
        <label style="font-size:12px;font-weight:700;">
          E-posta Adresi
          <input required type="email" name="email" placeholder="ornek@eposta.com" style="width:100%;margin-top:4px;padding:10px;border-radius:8px;border:1px solid #d5ddd4;" />
        </label>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          <label style="font-size:12px;font-weight:700;">
            Cep Telefonu
            <input required name="phone" placeholder="05XX XXX XX XX" style="width:100%;margin-top:4px;padding:10px;border-radius:8px;border:1px solid #d5ddd4;" />
          </label>
          <label style="font-size:12px;font-weight:700;">
            Teslimat İli
            <select name="city" style="width:100%;margin-top:4px;padding:10px;border-radius:8px;border:1px solid #d5ddd4;background:#fff;">
              <option value="Ankara">Ankara</option>
              <option value="İstanbul">İstanbul</option>
              <option value="İzmir">İzmir</option>
              <option value="Bursa">Bursa</option>
              <option value="Antalya">Antalya</option>
            </select>
          </label>
        </div>
        <label style="font-size:12px;font-weight:700;">
          Şifre
          <input required type="password" name="password" placeholder="••••••••" style="width:100%;margin-top:4px;padding:10px;border-radius:8px;border:1px solid #d5ddd4;" />
        </label>
        <button type="submit" class="btn btn-dark" style="margin-top:6px;">Giriş Yap / Kayıt Ol →</button>
      </form>
    `);

    document.getElementById('consumerLoginForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      saveConsumerUser({
        id: 'cust_' + Date.now().toString().slice(-5),
        fullName: String(fd.get('fullName')),
        email: String(fd.get('email')),
        phone: String(fd.get('phone')),
        city: String(fd.get('city')),
      });
      closeModal();
    });
  }

  function openProducerApplyModal() {
    openModal(`
      <span class="eyebrow">YERLİ ÜRETİCİ TEZGÂH BAŞVURUSU</span>
      <h2 style="font-family:'Fraunces',serif;font-size:26px;margin:6px 0 10px;color:#193b2a;">Kendi Tezgâhını Aç</h2>
      <p style="font-size:12.5px;color:#5c6659;margin-bottom:14px;">
        Yalnızca kendi üretimini yapan yerli çiftçilerimiz ve kooperatiflerimiz kabul edilir. Başvurunuz Saha Üretici Danışmanı ve Gıda QA incelemesi sonrası onaylandığında tezgâhınız canlı vitrine açılır.
      </p>
      <form id="producerApplyForm" style="display:grid;gap:10px;">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          <label style="font-size:12px;font-weight:700;">
            Tezgâh Adı
            <input required name="stallName" placeholder="Örn: Ayvalık Taş Baskı Zeytinliği" style="width:100%;margin-top:4px;padding:9px;border-radius:8px;border:1px solid #d5ddd4;" />
          </label>
          <label style="font-size:12px;font-weight:700;">
            Üretici Ad Soyad / Kooperatif
            <input required name="producerName" placeholder="Ad Soyad" style="width:100%;margin-top:4px;padding:9px;border-radius:8px;border:1px solid #d5ddd4;" />
          </label>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          <label style="font-size:12px;font-weight:700;">
            Üretim İli & İlçesi
            <input required name="origin" placeholder="Örn: Balıkesir / Ayvalık" style="width:100%;margin-top:4px;padding:9px;border-radius:8px;border:1px solid #d5ddd4;" />
          </label>
          <label style="font-size:12px;font-weight:700;">
            ÇKS / İşletme Kayıt Belge No
            <input required name="regNo" placeholder="TR-XX-K-XXXXXX" style="width:100%;margin-top:4px;padding:9px;border-radius:8px;border:1px solid #d5ddd4;" />
          </label>
        </div>
        <label style="font-size:12px;font-weight:700;">
          Ürettiğiniz Ürünler ve Telefon Numaranız
          <textarea required name="notes" rows="2" placeholder="Ürettiğiniz ürünler ve iletişim telefonunuz..." style="width:100%;margin-top:4px;padding:9px;border-radius:8px;border:1px solid #d5ddd4;"></textarea>
        </label>
        <button type="submit" class="btn btn-dark">Başvuruyu Gönder →</button>
      </form>
    `);

    document.getElementById('producerApplyForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      const db = Core.loadDb();
      db.producerApplications.unshift({
        id: 'app_' + Date.now().toString().slice(-5),
        stallName: String(fd.get('stallName')),
        producerName: String(fd.get('producerName')),
        origin: String(fd.get('origin')),
        regNo: String(fd.get('regNo')),
        notes: String(fd.get('notes')),
        status: 'qa_pending',
        createdAt: new Date().toLocaleString('tr-TR'),
      });
      Core.saveDb(db);
      openModal(`
        <span class="eyebrow">BAŞVURU ALINDI</span>
        <h3 style="font-family:'Fraunces',serif;font-size:24px;margin:8px 0;">Tezgâh Başvurunuz Kaydedildi</h3>
        <p style="font-size:13px;color:#5c6659;">
          Bölge Üretici Geliştirme Danışmanımız ve Gıda QA ekibimiz belgenizi inceleyerek sizinle iletişime geçecektir.
        </p>
      `);
    });
  }

  function openOrdersModal() {
    const db = Core.loadDb();
    const realOrders = (db.orders || []).filter((o) => !o.isDemo);
    openModal(`
      <span class="eyebrow">SİPARİŞ TAKİBİ · AYRI TEZGÂH GÖNDERİMLERİ</span>
      <h2 style="font-family:'Fraunces',serif;font-size:26px;margin:6px 0 12px;">Siparişlerim</h2>
      ${
        realOrders.length === 0
          ? `<p style="font-size:13px;color:#5c6659;">Henüz tamamlanmış aktif siparişiniz bulunmuyor.</p>`
          : realOrders
              .map(
                (o) => `
          <div style="padding:12px;border:1px solid #e2e7dd;border-radius:12px;margin-bottom:10px;font-size:12.5px;">
            <strong>Sipariş No: ${o.orderNo}</strong> · Toplam: <strong>${o.grandTotalTl} TL</strong> (${o.shipmentCount} ayrı tezgâh kargosu)
          </div>
        `
              )
              .join('')
      }
    `);
  }

  function openSupportModal() {
    openModal(`
      <span class="eyebrow">MÜŞTERİ DESTEK & İADE GÜVENCESİ (KURAL #7 & #14)</span>
      <h2 style="font-family:'Fraunces',serif;font-size:26px;margin:6px 0 10px;">Çağrı Merkezi & Sorun Çözme</h2>
      <p style="font-size:12.5px;color:#5c6659;line-height:1.65;">
        Tüketici ve üretici arasında doğrudan DM veya telefon paylaşımı yapılmaz. Kargo hasarı, gecikme veya kalite sorunlarında fotoğraflı bildiriminiz doğrudan platform destek ekibimiz tarafından incelenir ve iade güvenceniz korunur.
      </p>
    `);
  }

  // Event Listeners
  if (categoryGrid) {
    categoryGrid.querySelectorAll('[data-category]').forEach((btn) => {
      btn.addEventListener('click', () => {
        categoryGrid.querySelectorAll('.category-tile').forEach((b) => b.classList.remove('selected'));
        btn.classList.add('selected');
        state.category = btn.getAttribute('data-category');
        renderCatalog();
      });
    });
  }

  if (regionChips) {
    regionChips.querySelectorAll('[data-region]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const reg = btn.getAttribute('data-region');
        state.region = state.region === reg ? '' : reg;
        renderCatalog();
      });
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.search = e.target.value;
      if (clearSearch) clearSearch.hidden = !state.search;
      renderCatalog();
    });
  }

  if (clearSearch) {
    clearSearch.addEventListener('click', () => {
      state.search = '';
      searchInput.value = '';
      clearSearch.hidden = true;
      renderCatalog();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sort = e.target.value;
      renderCatalog();
    });
  }

  if (filterSeasonBtn) {
    filterSeasonBtn.addEventListener('click', () => {
      state.onlySeason = !state.onlySeason;
      renderCatalog();
    });
  }

  if (filterOrganicBtn) {
    filterOrganicBtn.addEventListener('click', () => {
      state.onlyOrganic = !state.onlyOrganic;
      renderCatalog();
    });
  }

  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', () => {
      state.category = 'hepsi';
      state.region = '';
      state.onlySeason = false;
      state.onlyOrganic = false;
      state.search = '';
      if (searchInput) searchInput.value = '';
      renderCatalog();
    });
  }

  document.getElementById('openCartBtn')?.addEventListener('click', openCart);
  document.getElementById('closeCartBtn')?.addEventListener('click', closeCart);
  cartBackdrop?.addEventListener('click', closeCart);

  document.getElementById('openConsumerLoginBtn')?.addEventListener('click', openConsumerLoginModal);
  document.getElementById('footerLoginLink')?.addEventListener('click', (e) => {
    e.preventDefault();
    openConsumerLoginModal();
  });
  document.getElementById('openApplyModalBtn')?.addEventListener('click', openProducerApplyModal);
  document.getElementById('footerApplyLink')?.addEventListener('click', (e) => {
    e.preventDefault();
    openProducerApplyModal();
  });
  document.getElementById('openOrdersBtn')?.addEventListener('click', openOrdersModal);
  document.getElementById('footerOrdersLink')?.addEventListener('click', (e) => {
    e.preventDefault();
    openOrdersModal();
  });
  document.getElementById('openSupportBtn')?.addEventListener('click', openSupportModal);
  document.getElementById('footerSupportLink')?.addEventListener('click', (e) => {
    e.preventDefault();
    openSupportModal();
  });

  document.getElementById('closeModalBtn')?.addEventListener('click', closeModal);
  modalBackdrop?.addEventListener('click', closeModal);

  document.getElementById('checkoutBtn')?.addEventListener('click', () => {
    const { products } = Core.getConsumerRealCatalog();
    const plan = Core.buildDistributedCart(state.cart, products);
    if (plan.groups.length === 0) return;
    if (!state.consumerUser) {
      closeCart();
      openConsumerLoginModal();
      return;
    }
    const db = Core.loadDb();
    const orderNo = 'CA-2026-' + Math.floor(10000 + Math.random() * 89999);
    db.orders.unshift({
      orderNo,
      customerName: state.consumerUser.fullName,
      grandTotalTl: plan.grandTotalTl,
      shipmentCount: plan.distinctShipmentCount,
      isDemo: false,
      createdAt: new Date().toLocaleString('tr-TR'),
    });
    Core.saveDb(db);
    state.cart = {};
    saveConsumerCart();
    renderCart();
    closeCart();
    openModal(`
      <span class="eyebrow">SİPARİŞ OLUŞTURULDU</span>
      <h2 style="font-family:'Fraunces',serif;font-size:26px;margin:8px 0;">Sipariş No: ${orderNo}</h2>
      <p style="font-size:13px;color:#5c6659;">
        Toplam <strong>${plan.distinctShipmentCount} ayrı tezgâh gönderimi</strong> (${plan.grandTotalTl} TL) ilgili üretici tezgâhlarına iletildi.
      </p>
    `);
  });

  // Admin panelinden (/admin.ciftcidenaldim) gerçek ürün eklendiğinde anında güncelle
  window.addEventListener('storage', () => {
    renderCatalog();
    renderCart();
  });

  updateAuthHeader();
  renderCatalog();
  renderCart();
})();

(function () {
  const DATA = window.__EROS_DATA__ || { categories: [], products: [], blogs: [], coupons: [], settings: {} };
  const state = {
    view: 'home', // 'home' | 'category' | 'product' | 'blog' | 'blog-detail' | 'cart' | 'checkout' | 'order-done'
    param: null,
    cart: JSON.parse(localStorage.getItem('eros-cart-gh') || '[]'),
    coupon: JSON.parse(localStorage.getItem('eros-coupon-gh') || 'null'),
    ageVerified: localStorage.getItem('eros_age_verified_v1') === 'true',
    discreet: false,
    chatOpen: false,
    chatMode: 'sade',
    chatMessages: [
      {
        sender: 'eros',
        text: 'Gel, anlat bakalım. Ne arıyoruz? İlk kez mi bakıyorsun, çift olarak mı kullanacaksınız, yoksa aklında özel bir his mi var?',
      },
    ],
    orderId: null,
  };

  function saveCart() {
    localStorage.setItem('eros-cart-gh', JSON.stringify(state.cart));
    localStorage.setItem('eros-coupon-gh', JSON.stringify(state.coupon));
  }

  function fmtPrice(n) {
    return Number(n || 0).toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' TL';
  }

  function getTotals() {
    const totalItems = state.cart.reduce((s, i) => s + i.quantity, 0);
    const totalPrice = state.cart.reduce((s, i) => s + i.price * i.quantity, 0);
    let finalPrice = totalPrice;
    if (state.coupon) {
      if (state.coupon.discountType === 'PERCENTAGE') {
        finalPrice = totalPrice - (totalPrice * state.coupon.discountAmount) / 100;
      } else {
        finalPrice = Math.max(0, totalPrice - state.coupon.discountAmount);
      }
    }
    return { totalItems, totalPrice, finalPrice };
  }

  window.navTo = function (view, param) {
    state.view = view;
    state.param = param || null;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    render();
  };

  window.setTheme = function (t) {
    document.documentElement.setAttribute('data-theme', t);
  };

  window.confirmAge = function () {
    localStorage.setItem('eros_age_verified_v1', 'true');
    state.ageVerified = true;
    render();
  };

  window.toggleDiscreet = function () {
    state.discreet = !state.discreet;
    render();
  };

  window.toggleChat = function (open) {
    state.chatOpen = typeof open === 'boolean' ? open : !state.chatOpen;
    render();
  };

  window.setChatMode = function (m) {
    state.chatMode = m;
    render();
  };

  window.addToCartById = function (id, qty) {
    const prod = DATA.products.find((p) => p.id === id || p.sku === id);
    if (!prod) return;
    const q = Number(qty || 1);
    const ex = state.cart.find((i) => i.id === prod.id);
    if (ex) ex.quantity += q;
    else state.cart.push({ id: prod.id, name: prod.name, slug: prod.slug, price: prod.price, image: prod.image, quantity: q });
    saveCart();
    render();
  };

  window.updateCartQty = function (id, delta) {
    const item = state.cart.find((i) => i.id === id);
    if (!item) return;
    item.quantity += delta;
    if (item.quantity < 1) {
      state.cart = state.cart.filter((i) => i.id !== id);
    }
    saveCart();
    render();
  };

  window.applyCouponCode = function (code) {
    const c = (code || '').trim().toUpperCase();
    const found = DATA.coupons.find((x) => x.code.toUpperCase() === c && x.isActive);
    if (found) {
      state.coupon = found;
      saveCart();
      render();
    } else {
      alert('Geçersiz kupon kodu. HAVALE10 veya EROS20 kodunu deneyebilirsiniz.');
    }
  };

  window.removeCouponCode = function () {
    state.coupon = null;
    saveCart();
    render();
  };

  window.sendChatPrompt = function (txt) {
    const q = (txt || document.getElementById('eros-chat-input')?.value || '').trim();
    if (!q) return;
    state.chatMessages.push({ sender: 'user', text: q });
    const lower = q.toLowerCase();
    let reply = {
      sender: 'eros',
      text: 'İlk kez seçiyorsan veya net bir başlangıç arıyorsan medikal silikon ve fısıltı sessizliğindeki şu üç modeli karşılaştırabilirsin:',
      recs: ['ERO-VIB-002', 'ERO-VIB-003', 'ERO-VIB-004'],
    };
    if (lower.includes('kargo') || lower.includes('gizli') || lower.includes('paket')) {
      reply = {
        sender: 'eros',
        text: 'İçin tamamen rahat olsun. Tüm siparişler logosuz, düz mukavva kolide gönderilir. Gönderici kısmında yalnızca "Cor3us Lojistik A.Ş." yazar; kurye dahil kimse içeriği bilemez. HAVALE10 koduyla %10 gizlilik indirimi alırsın.',
        recs: [],
      };
    } else if (lower.includes('çift') || lower.includes('partner') || lower.includes('uzak')) {
      reply = {
        sender: 'eros',
        text: 'Çift olarak kullanımda hem birliktelik sırasında eşzamanlı uyarım sunan C-formlu modeller hem de telefon uygulamasıyla mesafeleri sıfırlayan giyilebilir modellerimiz:',
        recs: ['ERO-CPL-001', 'ERO-VIB-001', 'ERO-CPL-003'],
      };
    } else if (lower.includes('sessiz') || lower.includes('40')) {
      reply = {
        sender: 'eros',
        text: '40 dB altında (fısıltı seviyesinde) çalışan ve kapalı kapı ardında duyulması imkânsız olan üç modelimiz:',
        recs: ['ERO-VIB-005', 'ERO-VIB-002', 'ERO-VIB-004'],
      };
    } else if (lower.includes('erkek') || lower.includes('mastür')) {
      reply = {
        sender: 'eros',
        text: 'Erkek koleksiyonumuzda tam sessiz çift kanallı vakumlu model ve ısıtmalı/otomatik ileri-geri motorlu üst segment teknoloji:',
        recs: ['ERO-MAN-001', 'ERO-MAN-002'],
      };
    } else if (lower.includes('jel') || lower.includes('kaygan')) {
      reply = {
        sender: 'eros',
        text: 'Medikal silikon ürünlerin yüzeyini korumak için yalnızca Alman üretimi su bazlı Pjur serisini öneriyoruz:',
        recs: ['ERO-LUB-002', 'ERO-LUB-001'],
      };
    }
    state.chatMessages.push(reply);
    render();
  };

  window.submitCheckoutForm = function (e) {
    e.preventDefault();
    state.orderId = 'EROS-' + Math.random().toString(36).substring(2, 8).toUpperCase();
    state.cart = [];
    saveCart();
    state.view = 'order-done';
    render();
  };

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      window.toggleDiscreet();
    }
  });

  function renderHeader() {
    const { totalItems } = getTotals();
    return `
      <header style="position:sticky;top:0;z-index:100;background:rgba(8,5,7,0.92);backdrop-filter:blur(14px);border-bottom:1px solid var(--border-color);">
        <div style="background:linear-gradient(90deg,#160910 0%,#240c16 50%,#160910 100%);border-bottom:1px solid rgba(212,175,55,0.16);font-size:0.76rem;color:var(--text-secondary);padding:0.45rem 0;">
          <div class="container" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;">
            <div style="display:flex;align-items:center;gap:1rem;flex-wrap:wrap;">
              <span style="color:#f5d77f;font-weight:600;">🔒 %100 GİZLİ PAKET • Gönderici: Cor3us Lojistik A.Ş.</span>
              <span class="hide-mobile">| Sıfır Ekstre İzi & <strong>HAVALE10</strong> ile %10 İndirim</span>
            </div>
            <button onclick="toggleDiscreet()" style="padding:0.2rem 0.65rem;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.14);color:#e2e8f0;font-size:0.72rem;font-weight:600;cursor:pointer;">
              👁️ Patron Tuşu (ESC)
            </button>
          </div>
        </div>
        <div class="container" style="display:flex;justify-content:space-between;align-items:center;padding:0.95rem 1.5rem;flex-wrap:wrap;gap:1rem;">
          <a onclick="navTo('home')" style="display:flex;flex-direction:column;">
            <div style="display:flex;align-items:baseline;gap:0.55rem;">
              <span style="font-family:var(--font-heading);font-size:2rem;font-weight:700;letter-spacing:4px;color:#fff;line-height:1;">EROS</span>
              <span style="font-size:0.7rem;letter-spacing:2px;color:var(--accent-gold);font-weight:600;">by COR3US</span>
            </div>
            <span style="font-size:0.72rem;color:var(--text-secondary);margin-top:0.15rem;">Eros’a Sor, Cor3us’ta Bul.</span>
          </a>
          <div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:wrap;">
            <button onclick="toggleChat(true)" style="padding:0.5rem 0.95rem;border-radius:999px;background:rgba(230,57,70,0.14);border:1px solid rgba(230,57,70,0.45);color:#ffb3ba;font-size:0.8rem;font-weight:600;cursor:pointer;">
              💬 Eros’a Sor (AI)
            </button>
            <a onclick="navTo('blog')" style="font-size:0.82rem;font-weight:500;color:var(--text-secondary);padding:0.4rem 0.6rem;">EROS Rehber</a>
            <select onchange="setTheme(this.value)" style="background:rgba(255,255,255,0.05);color:#fff;border:1px solid var(--border-color);padding:0.4rem 0.65rem;border-radius:999px;font-size:0.75rem;">
              <option value="default" style="background:#110a0e;">Kadife Gece</option>
              <option value="red-velvet" style="background:#19070b;">Red Velvet</option>
              <option value="rose-gold" style="background:#1a1215;">Rose Gold</option>
              <option value="purple-noir" style="background:#110c1d;">Purple Noir</option>
              <option value="emerald-silk" style="background:#0a1512;">Emerald Silk</option>
            </select>
            <a onclick="navTo('cart')" style="display:inline-flex;align-items:center;gap:0.5rem;padding:0.55rem 1rem;background:linear-gradient(135deg,rgba(212,175,55,0.16),rgba(230,57,70,0.16));border-radius:999px;border:1px solid rgba(212,175,55,0.38);color:#fff;font-size:0.82rem;font-weight:600;">
              🛍️ Sepet (${totalItems})
            </a>
          </div>
        </div>
        <div style="border-top:1px solid rgba(255,255,255,0.06);background:rgba(14,8,12,0.75);">
          <div class="container" style="display:flex;align-items:center;gap:1.4rem;overflow-x:auto;padding:0.6rem 1.5rem;white-space:nowrap;font-size:0.82rem;">
            <a onclick="navTo('home')" style="color:var(--accent-gold);font-weight:600;">✨ Tüm Koleksiyon</a>
            ${DATA.categories.map((c) => `<a onclick="navTo('category','${c.slug}')" style="color:var(--text-secondary);">${c.name}</a>`).join('')}
          </div>
        </div>
      </header>
    `;
  }

  function renderDiscreetSection() {
    return `
      <section style="padding:4rem 0;background:linear-gradient(180deg,rgba(18,11,15,0.4),rgba(26,13,20,0.85),#080507);border-top:1px solid var(--border-color);border-bottom:1px solid var(--border-color);margin-top:3rem;">
        <div class="container">
          <div style="text-align:center;max-width:740px;margin:0 auto 2.5rem auto;">
            <span class="badge-gold" style="margin-bottom:0.8rem;">🔒 SIFIR ŞÜPHE • %100 MAHREMİYET PROTOKOLÜ</span>
            <h2 style="font-size:2.2rem;color:#fff;margin-bottom:0.75rem;">Paketiniz Kapınıza Tam Olarak Böyle Gelir</h2>
            <p style="color:var(--text-secondary);line-height:1.6;">Kapıyı kimin açtığı veya kuryenin kim olduğu fark etmez. EROS’tan çıkan her paket üç aşamalı kurumsal gizlilik protokolüyle hazırlanır.</p>
          </div>
          <div class="two-col" style="align-items:center;">
            <div style="background:linear-gradient(145deg,#c9a679,#9f7c50);border-radius:12px;padding:1.75rem;border:2px solid rgba(255,255,255,0.15);">
              <div style="font-size:0.72rem;color:#3b2814;font-weight:700;margin-bottom:0.75rem;">• DÜZ KRAFT OLUKLU MUKAVVA KOLİ (LOGOSUZ & BANTSIZ)</div>
              <div style="background:#fff;color:#111827;border-radius:8px;padding:1.25rem;font-family:monospace;font-size:0.82rem;line-height:1.65;">
                <div style="border-bottom:2px solid #111827;padding-bottom:0.4rem;margin-bottom:0.6rem;font-weight:700;">STANDART KARGO TESLİMAT FİŞİ • TR-34-LOG</div>
                <div><strong>GÖNDERİCİ:</strong> COR3US LOJİSTİK VE TİCARET A.Ş.</div>
                <div><strong>İÇERİK TANIMI:</strong> KİŞİSEL BAKIM / ELEKTRONİK AKSESUAR</div>
                <div><strong>FATURA TİPİ:</strong> KAPALI ZARF E-ARŞİV</div>
                <div style="margin-top:0.6rem;padding-top:0.5rem;border-top:1px dashed #9ca3af;font-size:0.72rem;">|||| |||| || ||||| ||| • EROS İBARESİ: YOK (0)</div>
              </div>
            </div>
            <div style="display:flex;flex-direction:column;gap:1rem;">
              <div class="eros-card" style="padding:1.35rem;">
                <h3 style="font-size:1.15rem;color:#fff;margin-bottom:0.35rem;">1. Kurye ve Şube İçeriği Bilmez</h3>
                <p style="color:var(--text-secondary);font-size:0.9rem;line-height:1.55;">Kargo görevlisinin el terminalinde dahi gönderici <strong>Cor3us Lojistik A.Ş.</strong> ve kategori <strong>Kişisel Bakım</strong> olarak kayıtlıdır.</p>
              </div>
              <div class="eros-card" style="padding:1.35rem;">
                <h3 style="font-size:1.15rem;color:#fff;margin-bottom:0.35rem;">2. Banka Ekstresinde Sıfır İz + %10 Havale Avantajı</h3>
                <p style="color:var(--text-secondary);font-size:0.9rem;line-height:1.55;">Kredi kartı ekstrenizde mağaza adı görünmemesi için ödemeler kurumsal IBAN hesabımıza Havale/FAST ile alınır; <strong>HAVALE10</strong> koduyla %10 indirim uygulanır.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function renderProductCard(prod) {
    const wirePrice = prod.price * 0.9;
    return `
      <div class="eros-card" style="display:flex;flex-direction:column;justify-content:space-between;">
        <div onclick="navTo('product','${prod.slug}')" style="cursor:pointer;">
          <div style="position:relative;height:240px;background:#0a0608;overflow:hidden;border-bottom:1px solid rgba(255,255,255,0.06);">
            <img src="${prod.image}" alt="${prod.name}" style="width:100%;height:100%;object-fit:cover;" />
            ${prod.decibelBadge ? `<span style="position:absolute;bottom:0.65rem;left:0.65rem;background:rgba(8,5,7,0.88);border:1px solid rgba(212,175,55,0.35);color:#f5d77f;font-size:0.7rem;font-weight:600;padding:0.25rem 0.6rem;border-radius:999px;">${prod.decibelBadge}</span>` : ''}
          </div>
          <div style="padding:1.25rem;">
            <div style="font-size:0.72rem;color:var(--accent-gold);text-transform:uppercase;letter-spacing:1px;font-weight:600;margin-bottom:0.35rem;">${prod.brand || ''}</div>
            <h3 style="font-size:1.1rem;color:#fff;line-height:1.38;margin-bottom:0.55rem;">${prod.name}</h3>
            <p style="font-size:0.84rem;color:var(--text-secondary);line-height:1.5;">${prod.content?.shortPitch || ''}</p>
          </div>
        </div>
        <div style="padding:0 1.25rem 1.25rem 1.25rem;">
          <div style="display:flex;justify-content:space-between;align-items:flex-end;padding-top:0.85rem;border-top:1px solid rgba(255,255,255,0.07);">
            <div>
              <div style="font-size:1.2rem;font-weight:700;color:#fff;">${fmtPrice(prod.price)}</div>
              <div style="font-size:0.72rem;color:#4ade80;">Havale ile: <strong>${fmtPrice(wirePrice)}</strong></div>
            </div>
            <div style="display:flex;gap:0.4rem;">
              <button onclick="addToCartById('${prod.id}',1)" class="btn btn-primary" style="padding:0.48rem 0.85rem;font-size:0.75rem;">+ Sepet</button>
              <button onclick="navTo('product','${prod.slug}')" class="btn btn-outline" style="padding:0.48rem 0.75rem;font-size:0.75rem;">İncele</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function renderHome() {
    return `
      <section style="padding:4.5rem 0;background:radial-gradient(circle at 75% 40%,rgba(230,57,70,0.25) 0%,rgba(74,13,34,0.45) 45%,#080507 100%);border-bottom:1px solid var(--border-color);">
        <div class="container">
          <div style="max-width:740px;">
            <span class="badge-gold" style="margin-bottom:1.1rem;">✨ YENİ NESİL AKILLI KOLEKSİYON • 2026 SEÇKİSİ</span>
            <h1 style="font-size:clamp(2.2rem,4.5vw,3.6rem);color:#fff;line-height:1.12;margin-bottom:1.15rem;">Hazza Açılan En Gizli ve Rafine Kapı</h1>
            <p style="font-size:1.1rem;color:var(--text-secondary);line-height:1.65;margin-bottom:2rem;">Lovense, We-Vibe, Satisfyer, Svakom ve Pjur markalarının orijinal medikal silikon koleksiyonu. Cor3us Lojistik A.Ş. güvencesiyle %100 gizli paketleme ve EROS AI rehberliği.</p>
            <div style="display:flex;gap:1rem;flex-wrap:wrap;">
              <a href="#katalog" class="btn btn-primary">Koleksiyonu Keşfet</a>
              <button onclick="toggleChat(true)" class="btn btn-outline">💬 Eros AI’a Sor</button>
            </div>
          </div>
        </div>
      </section>

      <section class="container" style="padding-top:3.5rem;">
        <span class="badge-gold" style="margin-bottom:0.5rem;">KATEGORİ HİYERARŞİSİ</span>
        <h2 style="font-size:2rem;color:#fff;margin-bottom:1.5rem;">Keşfetmeye Nereden Başlamak İstersin?</h2>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1.15rem;">
          ${DATA.categories
            .map(
              (c) => `
            <div onclick="navTo('category','${c.slug}')" class="eros-card" style="padding:1.4rem;cursor:pointer;">
              <span class="badge-gold" style="margin-bottom:0.65rem;">${c.badge}</span>
              <h3 style="font-size:1.3rem;color:#fff;margin-bottom:0.45rem;">${c.name}</h3>
              <p style="font-size:0.85rem;color:var(--text-secondary);line-height:1.5;margin-bottom:0.85rem;">${c.description}</p>
              <span style="color:var(--accent-gold);font-size:0.82rem;font-weight:600;">Koleksiyonu İncele →</span>
            </div>
          `
            )
            .join('')}
        </div>
      </section>

      <section id="katalog" class="container" style="padding-top:3.5rem;">
        <span class="badge-crimson" style="margin-bottom:0.6rem;">SEÇKİN KATALOG • 14 Orijinal Model</span>
        <h2 style="font-size:2.2rem;color:#fff;margin-bottom:1.75rem;">EROS Kürasyonu: Tüm Ürünler</h2>
        <div class="product-grid">
          ${DATA.products.map(renderProductCard).join('')}
        </div>
      </section>

      ${renderDiscreetSection()}

      <section class="container" style="padding-top:3.5rem;padding-bottom:2rem;">
        <span class="badge-gold" style="margin-bottom:0.6rem;">EROS REHBER & BLOG</span>
        <h2 style="font-size:2rem;color:#fff;margin-bottom:1.5rem;">Utangaçlığı Azaltan, Kararı Netleştiren Rehberler</h2>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(310px,1fr));gap:1.5rem;">
          ${DATA.blogs
            .map(
              (b) => `
            <div onclick="navTo('blog-detail','${b.slug}')" class="eros-card" style="cursor:pointer;display:flex;flex-direction:column;justify-content:space-between;">
              <div>
                <img src="${b.image}" alt="${b.title}" style="width:100%;height:185px;object-fit:cover;" />
                <div style="padding:1.35rem;">
                  <div style="font-size:0.75rem;color:var(--accent-gold);margin-bottom:0.4rem;">${b.category || 'Rehber'} • ${b.readTime || '4 dk'}</div>
                  <h3 style="font-size:1.15rem;color:#fff;margin-bottom:0.55rem;line-height:1.38;">${b.title}</h3>
                  <p style="font-size:0.85rem;color:var(--text-secondary);line-height:1.55;">${b.excerpt}</p>
                </div>
              </div>
              <div style="padding:0 1.35rem 1.35rem;color:var(--accent-primary);font-size:0.84rem;font-weight:600;">Rehberi Oku →</div>
            </div>
          `
            )
            .join('')}
        </div>
      </section>
    `;
  }

  function renderCategory(slug) {
    const cat = DATA.categories.find((c) => c.slug === slug) || DATA.categories[0];
    const prods = DATA.products.filter((p) => p.categoryId === cat.id);
    return `
      <div class="container" style="padding:3rem 1.5rem;">
        <div style="margin-bottom:1.25rem;font-size:0.85rem;color:var(--text-secondary);">
          <a onclick="navTo('home')">Ana Sayfa</a> / <span style="color:var(--accent-gold);">${cat.name}</span>
        </div>
        <div class="eros-card" style="padding:2rem;margin-bottom:2rem;">
          <span class="badge-gold" style="margin-bottom:0.65rem;">${cat.badge}</span>
          <h1 style="font-size:2.3rem;color:#fff;margin-bottom:0.6rem;">${cat.name}</h1>
          <p style="color:var(--text-secondary);max-width:700px;line-height:1.6;">${cat.description}</p>
        </div>
        <div class="product-grid">
          ${prods.map(renderProductCard).join('')}
        </div>
      </div>
    `;
  }

  function renderProductDetail(slug) {
    const prod = DATA.products.find((p) => p.slug === slug) || DATA.products[0];
    const c = prod.content || {};
    const specs = [
      { l: 'Marka', v: prod.brand },
      { l: 'SKU', v: prod.sku },
      { l: 'Ölçüler', v: c.dimensions },
      { l: 'Materyal', v: c.material },
      { l: 'Fonksiyonlar', v: c.functions },
      { l: 'Ses Seviyesi', v: c.noiseLevel },
      { l: 'Su Geçirmezlik', v: c.waterproof },
      { l: 'Kontrol Yöntemi', v: c.controlMethod },
      { l: 'Pil ve Şarj', v: c.battery },
      { l: 'Kutu İçeriği', v: c.packageContent },
      { l: 'Temizlik', v: c.cleaning },
    ].filter((s) => Boolean(s.v));

    return `
      <div class="container" style="padding:2.5rem 1.5rem;">
        <div style="margin-bottom:1.5rem;font-size:0.85rem;color:var(--text-secondary);">
          <a onclick="navTo('home')">Ana Sayfa</a> / <span style="color:var(--accent-gold);">${prod.name}</span>
        </div>
        <div class="two-col">
          <div>
            <div class="eros-card">
              <img src="${prod.image}" alt="${prod.name}" style="width:100%;display:block;" />
            </div>
          </div>
          <div>
            <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-bottom:0.75rem;">
              <span class="badge-gold">${prod.brand}</span>
              ${prod.decibelBadge ? `<span class="badge-crimson">${prod.decibelBadge}</span>` : ''}
            </div>
            <h1 style="font-size:2.1rem;color:#fff;margin-bottom:0.85rem;line-height:1.22;">${prod.name}</h1>
            <p style="font-size:1.05rem;color:#e5d5dc;font-style:italic;border-left:3px solid var(--accent-primary);padding-left:1rem;margin-bottom:1.4rem;">“${c.shortPitch || ''}”</p>
            <div class="eros-card" style="padding:1.25rem;margin-bottom:1.4rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;">
              <div>
                <div style="font-size:1.9rem;font-weight:700;color:#fff;">${fmtPrice(prod.price)}</div>
                <div style="font-size:0.78rem;color:var(--text-secondary);">KDV ve %100 Gizli Kargo Dahil</div>
              </div>
              <div style="text-align:right;color:#4ade80;">
                <div style="font-size:0.72rem;font-weight:700;">HAVALE10 İLE (%10 İNDİRİM)</div>
                <div style="font-size:1.3rem;font-weight:700;">${fmtPrice(prod.price * 0.9)}</div>
              </div>
            </div>
            <div style="display:flex;gap:0.85rem;margin-bottom:2rem;">
              <button onclick="addToCartById('${prod.id}',1);navTo('cart')" class="btn btn-primary" style="flex:1;padding:1rem;">🛍️ Sepete Ekle & Gizli Kargo ile Al</button>
            </div>
            <h3 style="font-size:1.2rem;color:var(--accent-gold);margin-bottom:0.65rem;">Ürün Deneyimi</h3>
            <p style="color:var(--text-primary);line-height:1.75;white-space:pre-line;margin-bottom:1.5rem;">${c.longDescription || ''}</p>
            ${
              c.forWhom
                ? `<div class="eros-card" style="padding:1.15rem;margin-bottom:1.5rem;"><h4 style="color:var(--accent-gold);margin-bottom:0.35rem;">Kimler İçin İdeal?</h4><p style="font-size:0.9rem;color:var(--text-secondary);line-height:1.55;">${c.forWhom}</p></div>`
                : ''
            }
            <h3 style="font-size:1.2rem;color:#fff;margin-bottom:0.85rem;">Teknik Özellikler</h3>
            <div style="border:1px solid var(--border-color);border-radius:10px;overflow:hidden;margin-bottom:1.5rem;">
              ${specs
                .map(
                  (s, i) => `
                <div style="display:grid;grid-template-columns:160px 1fr;padding:0.75rem 1rem;background:${i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent'};font-size:0.88rem;gap:1rem;">
                  <span style="color:var(--text-secondary);font-weight:600;">${s.l}</span>
                  <span style="color:#fff;">${s.v}</span>
                </div>`
                )
                .join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function renderBlogList() {
    return `
      <div class="container" style="padding:3rem 1.5rem;">
        <h1 style="font-size:2.4rem;color:#fff;margin-bottom:0.75rem;">EROS Rehber & Bilgi Merkezi</h1>
        <p style="color:var(--text-secondary);margin-bottom:2.25rem;">Utangaçlığı azaltan, materyal güvenliğini ve doğru ürün seçimini sade bir dille anlatan editoryal seçkimiz.</p>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:1.5rem;">
          ${DATA.blogs
            .map(
              (b) => `
            <div onclick="navTo('blog-detail','${b.slug}')" class="eros-card" style="cursor:pointer;">
              <img src="${b.image}" alt="${b.title}" style="width:100%;height:200px;object-fit:cover;" />
              <div style="padding:1.4rem;">
                <div style="font-size:0.75rem;color:var(--accent-gold);margin-bottom:0.4rem;">${b.category || 'Rehber'} • ${b.readTime || '4 dk'}</div>
                <h3 style="font-size:1.2rem;color:#fff;margin-bottom:0.6rem;">${b.title}</h3>
                <p style="font-size:0.88rem;color:var(--text-secondary);line-height:1.55;">${b.excerpt}</p>
              </div>
            </div>
          `
            )
            .join('')}
        </div>
      </div>
    `;
  }

  function renderBlogDetail(slug) {
    const blog = DATA.blogs.find((b) => b.slug === slug) || DATA.blogs[0];
    return `
      <div class="container" style="padding:3rem 1.5rem;max-width:860px;">
        <a onclick="navTo('blog')" style="color:var(--accent-gold);font-size:0.88rem;font-weight:600;">← Tüm Rehber Yazılarına Dön</a>
        <h1 style="font-size:2.3rem;color:#fff;margin:1rem 0 1.5rem 0;line-height:1.22;">${blog.title}</h1>
        <img src="${blog.image}" alt="${blog.title}" style="width:100%;border-radius:12px;margin-bottom:2rem;" />
        <div style="font-size:1.05rem;line-height:1.8;color:#e9dfe4;white-space:pre-line;">${blog.content}</div>
      </div>
    `;
  }

  function renderCart() {
    const { totalPrice, finalPrice } = getTotals();
    if (state.cart.length === 0) {
      return `
        <div class="container" style="padding:5rem 1.5rem;text-align:center;">
          <h1 style="font-size:2.2rem;color:#fff;margin-bottom:1rem;">Gizli Sepetiniz Boş</h1>
          <button onclick="navTo('home')" class="btn btn-primary">Koleksiyonu Keşfet</button>
        </div>
      `;
    }
    return `
      <div class="container" style="padding:3rem 1.5rem;">
        <h1 style="font-size:2.2rem;color:#fff;margin-bottom:1.75rem;">Gizli Alışveriş Sepetiniz</h1>
        <div class="two-col">
          <div style="display:flex;flex-direction:column;gap:1rem;">
            ${state.cart
              .map(
                (item) => `
              <div class="eros-card" style="padding:1.2rem;display:flex;align-items:center;gap:1rem;flex-wrap:wrap;">
                <img src="${item.image}" style="width:80px;height:80px;object-fit:cover;border-radius:8px;" />
                <div style="flex:1;min-width:180px;">
                  <h3 style="font-size:1.05rem;color:#fff;">${item.name}</h3>
                  <div style="color:var(--accent-gold);font-weight:700;">${fmtPrice(item.price)}</div>
                </div>
                <div style="display:flex;align-items:center;gap:0.5rem;">
                  <button onclick="updateCartQty('${item.id}',-1)" class="btn btn-outline" style="padding:0.3rem 0.7rem;">-</button>
                  <span style="font-weight:700;">${item.quantity}</span>
                  <button onclick="updateCartQty('${item.id}',1)" class="btn btn-outline" style="padding:0.3rem 0.7rem;">+</button>
                </div>
              </div>`
              )
              .join('')}
          </div>
          <div class="eros-card" style="padding:1.75rem;">
            <h3 style="font-size:1.35rem;color:#fff;margin-bottom:1rem;">Sipariş Özeti</h3>
            ${
              !state.coupon
                ? `<div style="background:rgba(212,175,55,0.08);border:1px dashed rgba(212,175,55,0.4);padding:0.75rem;border-radius:8px;margin-bottom:1rem;display:flex;justify-content:space-between;align-items:center;">
                    <span style="font-size:0.8rem;color:#f5d77f;">HAVALE10 (%10 Gizlilik İndirimi)</span>
                    <button onclick="applyCouponCode('HAVALE10')" style="background:var(--accent-gold);color:#000;border:none;padding:0.3rem 0.65rem;border-radius:4px;font-weight:700;cursor:pointer;font-size:0.75rem;">Uygula</button>
                  </div>`
                : `<div style="background:rgba(22,163,74,0.14);border:1px solid rgba(74,222,128,0.4);padding:0.75rem;border-radius:8px;margin-bottom:1rem;display:flex;justify-content:space-between;">
                    <span style="color:#4ade80;font-weight:700;">${state.coupon.code} Aktif (-%${state.coupon.discountAmount})</span>
                    <a onclick="removeCouponCode()" style="color:#f87171;font-size:0.8rem;">Kaldır</a>
                  </div>`
            }
            <div style="display:flex;justify-content:space-between;margin-bottom:0.6rem;color:var(--text-secondary);">
              <span>Ara Toplam</span><span>${fmtPrice(totalPrice)}</span>
            </div>
            <div style="display:flex;justify-content:space-between;margin-bottom:1.2rem;font-size:1.3rem;font-weight:700;color:#fff;border-top:1px solid var(--border-color);padding-top:0.85rem;">
              <span>Toplam</span><span style="color:var(--accent-gold);">${fmtPrice(finalPrice)}</span>
            </div>
            <button onclick="navTo('checkout')" class="btn btn-primary" style="width:100%;">Gizli Ödeme Adımına Geç →</button>
          </div>
        </div>
      </div>
    `;
  }

  function renderCheckout() {
    const { finalPrice } = getTotals();
    return `
      <div class="container" style="padding:3rem 1.5rem;max-width:760px;">
        <h1 style="font-size:2.2rem;color:#fff;margin-bottom:1.5rem;">Gizli Teslimat ve Havale / FAST Bilgileri</h1>
        <form onsubmit="submitCheckoutForm(event)" class="eros-card" style="padding:2rem;display:flex;flex-direction:column;gap:1.15rem;">
          <div style="background:rgba(212,175,55,0.08);border:1px solid rgba(212,175,55,0.3);padding:0.85rem;border-radius:8px;font-size:0.85rem;color:#f5d77f;">
            🔒 Kargo etiketi üzerinde yalnızca <strong>Cor3us Lojistik A.Ş.</strong> ve <strong>Kişisel Bakım</strong> yazar.
          </div>
          <input required placeholder="Adınız Soyadınız *" style="padding:0.85rem;background:var(--bg-color);border:1px solid var(--border-color);color:#fff;border-radius:6px;" />
          <input required type="email" placeholder="E-Posta Adresiniz *" style="padding:0.85rem;background:var(--bg-color);border:1px solid var(--border-color);color:#fff;border-radius:6px;" />
          <input required type="tel" placeholder="Telefon Numaranız *" style="padding:0.85rem;background:var(--bg-color);border:1px solid var(--border-color);color:#fff;border-radius:6px;" />
          <textarea required rows="3" placeholder="Teslimat Adresi veya Şubeden Teslim Notunuz *" style="padding:0.85rem;background:var(--bg-color);border:1px solid var(--border-color);color:#fff;border-radius:6px;"></textarea>
          <div style="display:flex;justify-content:space-between;font-size:1.25rem;font-weight:700;color:#fff;">
            <span>Ödenecek Tutar:</span><span style="color:var(--accent-gold);">${fmtPrice(finalPrice)}</span>
          </div>
          <button type="submit" class="btn btn-primary" style="padding:1rem;">Siparişi Tamamla (Havale / FAST)</button>
        </form>
      </div>
    `;
  }

  function renderOrderDone() {
    return `
      <div class="container" style="padding:4rem 1.5rem;max-width:740px;">
        <div class="eros-card" style="padding:2.5rem;text-align:center;">
          <h1 style="font-size:2.2rem;color:#4ade80;margin-bottom:0.75rem;">✓ Gizli Siparişiniz Alındı (${state.orderId})</h1>
          <p style="color:var(--text-secondary);margin-bottom:1.75rem;">Paketiniz üzerinde hiçbir EROS ibaresi olmadan <strong>Cor3us Lojistik A.Ş.</strong> gönderici bilgisiyle hazırlanacaktır.</p>
          <div style="background:var(--bg-color);border:1px solid var(--accent-gold);border-radius:10px;padding:1.5rem;text-align:left;margin-bottom:1.75rem;line-height:1.75;">
            <div><strong>Banka:</strong> ${DATA.settings.bankName}</div>
            <div><strong>Alıcı:</strong> ${DATA.settings.accountHolder}</div>
            <div><strong>IBAN:</strong> <span style="font-family:monospace;color:var(--accent-gold);">${DATA.settings.iban}</span></div>
            <div style="font-size:0.82rem;color:#f5d77f;margin-top:0.5rem;">* Açıklama kısmına yalnızca sipariş kodunuzu (${state.orderId}) yazınız.</div>
          </div>
          <button onclick="navTo('home')" class="btn btn-primary">Ana Sayfaya Dön</button>
        </div>
      </div>
    `;
  }

  function renderChatWidget() {
    if (!state.chatOpen) {
      return `
        <button onclick="toggleChat(true)" style="position:fixed;bottom:1.5rem;right:1.5rem;z-index:900;display:flex;align-items:center;gap:0.65rem;padding:0.9rem 1.35rem;border-radius:999px;background:linear-gradient(135deg,#e63946,#6b0f2b);color:#fff;border:1px solid rgba(212,175,55,0.45);box-shadow:0 10px 30px rgba(230,57,70,0.45);cursor:pointer;font-weight:600;">
          💬 Eros’a Sor <span style="font-size:0.7rem;background:rgba(0,0,0,0.35);padding:0.15rem 0.5rem;border-radius:999px;color:#f5d77f;">AI Rehber</span>
        </button>
      `;
    }
    return `
      <div style="position:fixed;bottom:1.25rem;right:1.25rem;width:min(410px,calc(100vw - 2rem));height:min(600px,calc(100vh - 3rem));z-index:999;background:#120a0f;border:1px solid rgba(212,175,55,0.4);border-radius:16px;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 24px 60px rgba(0,0,0,0.85);">
        <div style="padding:1rem;background:rgba(230,57,70,0.16);border-bottom:1px solid rgba(212,175,55,0.2);display:flex;justify-content:space-between;align-items:center;">
          <div>
            <strong style="color:#fff;font-size:0.95rem;">EROS AI Rehber</strong>
            <div style="font-size:0.72rem;color:var(--text-secondary);">Yargısız & gizli ürün danışmanın</div>
          </div>
          <button onclick="toggleChat(false)" style="background:transparent;border:none;color:#fff;font-size:1.1rem;cursor:pointer;">✕</button>
        </div>
        <div style="flex:1;padding:1rem;overflow-y:auto;display:flex;flex-direction:column;gap:0.8rem;">
          ${state.chatMessages
            .map(
              (m) => `
            <div style="align-self:${m.sender === 'user' ? 'flex-end' : 'flex-start'};max-width:90%;">
              <div style="padding:0.75rem 0.95rem;border-radius:12px;background:${m.sender === 'user' ? 'var(--accent-primary)' : 'rgba(255,255,255,0.06)'};color:#fff;font-size:0.86rem;line-height:1.5;">
                ${m.text}
              </div>
              ${
                m.recs && m.recs.length
                  ? m.recs
                      .map((sku) => {
                        const p = DATA.products.find((x) => x.sku === sku);
                        if (!p) return '';
                        return `<div style="margin-top:0.5rem;padding:0.65rem;background:#0a0608;border:1px solid rgba(212,175,55,0.3);border-radius:8px;display:flex;justify-content:space-between;align-items:center;gap:0.5rem;">
                          <div onclick="navTo('product','${p.slug}');toggleChat(false)" style="cursor:pointer;font-size:0.8rem;color:#fff;"><strong>${p.name}</strong><br/><span style="color:var(--accent-gold);">${fmtPrice(p.price)}</span></div>
                          <button onclick="addToCartById('${p.id}',1)" style="padding:0.35rem 0.6rem;background:var(--accent-primary);color:#fff;border:none;border-radius:4px;font-size:0.72rem;cursor:pointer;">+ Sepet</button>
                        </div>`;
                      })
                      .join('')
                  : ''
              }
            </div>`
            )
            .join('')}
          <div style="display:flex;flex-wrap:wrap;gap:0.35rem;">
            <button onclick="sendChatPrompt('İlk kez alacağım, ne önerirsin?')" style="font-size:0.72rem;padding:0.35rem 0.65rem;border-radius:999px;background:rgba(212,175,55,0.1);border:1px solid rgba(212,175,55,0.28);color:#fff;cursor:pointer;">İlk kez alacağım</button>
            <button onclick="sendChatPrompt('Çift olarak kullanacağımız bir ürün')" style="font-size:0.72rem;padding:0.35rem 0.65rem;border-radius:999px;background:rgba(212,175,55,0.1);border:1px solid rgba(212,175,55,0.28);color:#fff;cursor:pointer;">Çift ürünleri</button>
            <button onclick="sendChatPrompt('En sessiz 40 dB altı modeller')" style="font-size:0.72rem;padding:0.35rem 0.65rem;border-radius:999px;background:rgba(212,175,55,0.1);border:1px solid rgba(212,175,55,0.28);color:#fff;cursor:pointer;">&lt;40 dB Sessiz</button>
            <button onclick="sendChatPrompt('Kargo gizliliği nasıl?')" style="font-size:0.72rem;padding:0.35rem 0.65rem;border-radius:999px;background:rgba(212,175,55,0.1);border:1px solid rgba(212,175,55,0.28);color:#fff;cursor:pointer;">Kargo gizliliği</button>
          </div>
        </div>
        <form onsubmit="event.preventDefault();sendChatPrompt()" style="padding:0.7rem;border-top:1px solid rgba(255,255,255,0.08);display:flex;gap:0.45rem;">
          <input id="eros-chat-input" placeholder="Ne aradığını yaz..." style="flex:1;padding:0.6rem;border-radius:6px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.14);color:#fff;outline:none;" />
          <button type="submit" class="btn btn-primary" style="padding:0 0.9rem;">Gönder</button>
        </form>
      </div>
    `;
  }

  function renderFooter() {
    return `
      <footer style="background:#060305;border-top:1px solid var(--border-color);padding:3.5rem 0 2rem;margin-top:4rem;color:var(--text-secondary);font-size:0.84rem;">
        <div class="container" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;">
          <div>© ${new Date().getFullYear()} <strong>EROS</strong> — “Eros’a Sor, Cor3us’ta Bul.” • Gönderici: Cor3us Lojistik A.Ş.</div>
          <div style="color:#d4af37;"><strong>EROS</strong> — An ITSUS project. <em>It’s in our core.</em></div>
        </div>
      </footer>
    `;
  }

  function render() {
    const root = document.getElementById('app');
    if (!root) return;

    if (state.discreet) {
      root.innerHTML = `
        <div style="min-height:100vh;background:#f8fafc;color:#0f172a;padding:3rem 2rem;font-family:system-ui,sans-serif;">
          <div style="max-width:880px;margin:0 auto;">
            <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #cbd5e1;padding-bottom:1rem;margin-bottom:2rem;">
              <h2 style="font-family:system-ui;">Cor3us Lojistik ve Tedarik Zinciri Portalı v4.2</h2>
              <button onclick="toggleDiscreet()" style="padding:0.5rem 1rem;background:#0f172a;color:#fff;border:none;border-radius:6px;cursor:pointer;">Oturuma Dön (ESC)</button>
            </div>
            <p style="color:#64748b;">Kurumsal sevkiyat izleme ekranı aktif. Normal görünüme dönmek için ESC tuşuna basabilirsiniz.</p>
          </div>
        </div>
      `;
      return;
    }

    let bodyHtml = '';
    if (state.view === 'home') bodyHtml = renderHome();
    else if (state.view === 'category') bodyHtml = renderCategory(state.param);
    else if (state.view === 'product') bodyHtml = renderProductDetail(state.param);
    else if (state.view === 'blog') bodyHtml = renderBlogList();
    else if (state.view === 'blog-detail') bodyHtml = renderBlogDetail(state.param);
    else if (state.view === 'cart') bodyHtml = renderCart();
    else if (state.view === 'checkout') bodyHtml = renderCheckout();
    else if (state.view === 'order-done') bodyHtml = renderOrderDone();

    const ageModalHtml = !state.ageVerified
      ? `<div style="position:fixed;inset:0;z-index:9999;background:rgba(6,3,5,0.92);backdrop-filter:blur(12px);display:flex;align-items:center;justify-content:center;padding:1.5rem;">
          <div style="max-width:480px;width:100%;background:#150b11;border:1px solid rgba(212,175,55,0.4);border-radius:16px;padding:2.25rem;text-align:center;">
            <span class="badge-gold" style="margin-bottom:0.85rem;">+18 YETİŞKİN İÇERİK & GİZLİLİK KALKANI</span>
            <h2 style="font-size:1.9rem;color:#fff;margin-bottom:0.75rem;">EROS Dünyasına Hoş Geldiniz</h2>
            <p style="color:var(--text-secondary);font-size:0.92rem;line-height:1.6;margin-bottom:1.5rem;">Bu platform +18 yetişkin yaşam ürünleri ve bilgilendirici rehber içerikleri barındırmaktadır. Tüm siparişler <strong>Cor3us Lojistik A.Ş.</strong> adıyla %100 gizli kolide gönderilir.</p>
            <button onclick="confirmAge()" class="btn btn-primary" style="width:100%;padding:1rem;">18 Yaşından Büyüğüm, Giriş Yap</button>
          </div>
        </div>`
      : '';

    root.innerHTML = ageModalHtml + renderHeader() + `<main>${bodyHtml}</main>` + renderFooter() + renderChatWidget();
  }

  render();
})();

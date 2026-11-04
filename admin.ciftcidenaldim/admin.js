/**
 * Çiftçiden Aldım — Tezgâh Sahibi, Saha Üretici Danışmanı & Admin Moderasyon Portalı
 * (www.koraytasan.com/admin.ciftcidenaldim)
 * - Yetkili rol girişi (Süper Admin, Tezgâh Sahibi, Saha Danışmanı, QA, Finans)
 * - Gerçek (isDemo: false) ürün ve tezgâh oluşturup canlı müşteri vitrinine (/ciftcidenaldim) yayınlama
 * - DEMO (isDemo: true) örnek ürün ve tezgâhları (12 tezgâh, 12 ürün) yalnızca burada görüntüleme ve test etme
 */
(function () {
  const Core = window.CiftcidenAldimCore;

  let adminSession = loadAdminSession();
  let waProposalPending = false;

  const loginSection = document.getElementById('adminLoginSection');
  const dashboardSection = document.getElementById('adminDashboardSection');
  const activeAdminBadge = document.getElementById('activeAdminBadge');
  const adminLogoutBtn = document.getElementById('adminLogoutBtn');
  const alertBanner = document.getElementById('adminAlertBanner');

  function loadAdminSession() {
    try {
      const raw = localStorage.getItem(Core.ADMIN_AUTH_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function saveAdminSession(session) {
    adminSession = session;
    try {
      if (session) {
        localStorage.setItem(Core.ADMIN_AUTH_KEY, JSON.stringify(session));
      } else {
        localStorage.removeItem(Core.ADMIN_AUTH_KEY);
      }
    } catch (e) {
      // ignore
    }
    syncView();
  }

  function showAlert(msg, isError = false) {
    if (!alertBanner) return;
    alertBanner.hidden = false;
    alertBanner.textContent = msg;
    alertBanner.style.background = isError ? '#fff2ee' : '#eef6ec';
    alertBanner.style.borderColor = isError ? '#e0b4a8' : '#b7dfc2';
  }

  function syncView() {
    if (!adminSession) {
      loginSection.hidden = false;
      dashboardSection.hidden = true;
      activeAdminBadge.hidden = true;
      adminLogoutBtn.hidden = true;
      return;
    }
    loginSection.hidden = true;
    dashboardSection.hidden = false;
    activeAdminBadge.hidden = false;
    adminLogoutBtn.hidden = false;
    activeAdminBadge.textContent = `✓ ${adminSession.displayName} (${adminSession.role})`;

    renderRealPricePreview();
    renderRealCatalogTable();
    renderDemoCatalogTable();
    renderCalculatorTab();
  }

  function renderRealPricePreview() {
    const netEl = document.getElementById('realNetInput');
    const packEl = document.getElementById('realPackInput');
    const outEl = document.getElementById('realPricePreviewText');
    if (!netEl || !packEl || !outEl) return;
    const calc = Core.calculatePriceBreakdown(netEl.value, packEl.value, 0.15);
    outEl.innerHTML = `📐 <strong>Canlı Fiyat Motoru (%15 Komisyon Dahil):</strong> Üretici Net <b>${netEl.value} TL</b> + Ambalaj <b>${packEl.value} TL</b> → Müşteri Satış Fiyatı: <strong style="color:#214d35;font-size:15px;">${calc.customerFinalPriceTl} TL</strong> (Komisyon: ${calc.commissionTotalTl} TL · %1 Stopaj: ${calc.withholdingTaxTl} TL)`;
  }

  function renderRealCatalogTable() {
    const wrap = document.getElementById('realCatalogTableWrap');
    if (!wrap) return;
    const db = Core.loadDb();
    const realProducts = db.products.filter((p) => !p.isDemo);
    const apps = db.producerApplications || [];

    let html = '';

    if (realProducts.length === 0) {
      html += `
        <div style="padding:18px;background:#fafaf7;border:1px dashed #cfd8ce;border-radius:12px;margin-bottom:16px;font-size:13px;">
          Şu an canlı müşteri vitrininde (<code>/ciftcidenaldim</code>) <strong>0 gerçek ürün</strong> bulunuyor (DEMO ürünler müşteri tarafında gizlidir). Yukarıdaki formdan gerçek ürün eklediğinizde anında <code>/ciftcidenaldim</code> vitrininde yayına girer.
        </div>
      `;
    } else {
      html += `
        <table class="admin-table" style="margin-bottom:18px;">
          <thead>
            <tr>
              <th>Veri Türü</th>
              <th>Gerçek Ürün & Yöre</th>
              <th>Tezgâh</th>
              <th>Müşteri Fiyatı</th>
              <th>Vitrin Durumu</th>
              <th>İşlem</th>
            </tr>
          </thead>
          <tbody>
            ${realProducts
              .map(
                (p) => `
              <tr>
                <td><span class="live-tag">GERÇEK ÜRÜN</span></td>
                <td><strong>${p.name}</strong><br/><small>${p.origin}</small></td>
                <td>${p.stallName}</td>
                <td><strong>${p.priceTl} TL</strong> / ${p.unit} (+${p.shippingBaseFeeTl} TL kargo)</td>
                <td>${p.orderable ? '🟢 Canlı Vitrinde Açık' : '⏳ QA Onayı Bekliyor'}</td>
                <td>
                  <button type="button" class="btn btn-ghost" style="min-height:30px;padding:4px 10px;font-size:11px;" data-toggle-real="${p.id}">
                    ${p.orderable ? 'Vitrinden Kaldır' : 'QA Onayla & Yayınla'}
                  </button>
                </td>
              </tr>
            `
              )
              .join('')}
          </tbody>
        </table>
      `;
    }

    if (apps.length > 0) {
      html += `
        <h4 style="font-size:16px;margin:14px 0 8px;">Müşteri Vitrininden Gelen Yeni Tezgâh Başvuruları (${apps.length})</h4>
        <table class="admin-table">
          <thead>
            <tr>
              <th>Tarih</th>
              <th>Tezgâh Adı</th>
              <th>Üretici</th>
              <th>Yöre & Kayıt No</th>
              <th>Durum</th>
            </tr>
          </thead>
          <tbody>
            ${apps
              .map(
                (a) => `
              <tr>
                <td>${a.createdAt}</td>
                <td><strong>${a.stallName}</strong></td>
                <td>${a.producerName}</td>
                <td>${a.origin} · ${a.regNo}</td>
                <td><span class="demo-tag">${a.status}</span></td>
              </tr>
            `
              )
              .join('')}
          </tbody>
        </table>
      `;
    }

    wrap.innerHTML = html;

    wrap.querySelectorAll('[data-toggle-real]').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (adminSession?.role === 'FIELD_ADVISOR') {
          showAlert(
            '⛔ GÖREV AYRILIĞI ENGELİ: Saha Üretici Danışmanı doğrudan QA yayın onayı veremez!',
            true
          );
          return;
        }
        const id = btn.getAttribute('data-toggle-real');
        const currentDb = Core.loadDb();
        const prod = currentDb.products.find((x) => x.id === id);
        if (prod) {
          prod.orderable = !prod.orderable;
          prod.complianceStatus = prod.orderable ? 'approved' : 'qa_pending';
          Core.saveDb(currentDb);
          renderRealCatalogTable();
          showAlert(
            `✅ ${prod.name} vitrin durumu güncellendi: ${prod.orderable ? 'Canlı Vitrinde Açık' : 'QA Bekliyor'}`
          );
        }
      });
    });
  }

  function renderDemoCatalogTable() {
    const wrap = document.getElementById('demoProductsTableWrap');
    if (!wrap) return;
    const db = Core.loadDb();
    const demoProducts = db.products.filter((p) => p.isDemo);

    wrap.innerHTML = `
      <table class="admin-table">
        <thead>
          <tr>
            <th>İzolasyon Etiketi</th>
            <th>DEMO Ürün Adı & Yöre</th>
            <th>DEMO Tezgâh</th>
            <th>Üretici Net + Ambalaj</th>
            <th>Müşteri Fiyatı + Kargo</th>
            <th>QA / Soğuk Zincir</th>
            <th>QA Test İşlemi</th>
          </tr>
        </thead>
        <tbody>
          ${demoProducts
            .map(
              (p) => `
            <tr>
              <td><span class="demo-tag">🏷️ DEMO ÖRNEK</span></td>
              <td><strong>${p.name}</strong><br/><small>${p.origin} · Lot: ${p.batchLotNumber}</small></td>
              <td>${p.stallName}</td>
              <td>${(p.desiredNetKurus / 100).toFixed(2)} TL + ${(p.packagingCostKurus / 100).toFixed(2)} TL</td>
              <td><strong>${p.priceTl} TL</strong> / ${p.unit}<br/><small>+ ${p.shippingBaseFeeTl} TL kargo</small></td>
              <td>
                <span class="${p.orderable ? 'live-tag' : 'demo-tag'}">
                  ${p.complianceStatus} (${p.orderable ? 'DEMO Açık' : 'QA Kilitli'})
                </span>
              </td>
              <td>
                ${
                  !p.orderable
                    ? `<button type="button" class="btn btn-dark" style="min-height:30px;padding:4px 10px;font-size:11px;" data-approve-demo="${p.id}">QA Onayla</button>`
                    : `<span style="font-size:11px;font-weight:700;color:#214d35;">✓ DEMO Onaylı</span>`
                }
              </td>
            </tr>
          `
            )
            .join('')}
        </tbody>
      </table>
    `;

    wrap.querySelectorAll('[data-approve-demo]').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (adminSession?.role === 'FIELD_ADVISOR') {
          showAlert(
            '⛔ GÖREV AYRILIĞI ENGELİ (Kabul Testi #13): Saha Üretici Danışmanı QA onayı veremez!',
            true
          );
          return;
        }
        const id = btn.getAttribute('data-approve-demo');
        const currentDb = Core.loadDb();
        const prod = currentDb.products.find((x) => x.id === id);
        if (prod) {
          prod.orderable = true;
          prod.complianceStatus = 'approved';
          Core.saveDb(currentDb);
          renderDemoCatalogTable();
          showAlert(`✅ DEMO ürün (${prod.name}) QA onayı verildi.`);
        }
      });
    });
  }

  function renderCalculatorTab() {
    const netEl = document.getElementById('calcNetTl');
    const packEl = document.getElementById('calcPackTl');
    const out = document.getElementById('calcBreakdownOutput');
    if (!netEl || !packEl || !out) return;
    const c = Core.calculatePriceBreakdown(netEl.value, packEl.value, 0.15);
    out.innerHTML = `
      <div>• Üretici Hedef Net Kazanç: <strong>${Number(netEl.value).toFixed(2)} TL</strong></div>
      <div>• Ambalaj / Koruma Maliyeti: <strong>${Number(packEl.value).toFixed(2)} TL</strong></div>
      <div>• Platform Aracılık Komisyonu (%15, KDV Dahil): <strong>${c.commissionTotalTl} TL</strong> (Hizmet Net: ${c.commissionNetServiceTl} TL + %20 Hizmet KDV: ${c.commissionVatTl} TL)</div>
      <div>• %1 E-Ticaret Tevkifatı (Stopaj): <strong>${c.withholdingTaxTl} TL</strong></div>
      <div style="margin-top:6px;padding-top:6px;border-top:1px solid #cfe0d2;font-size:15px;color:#214d35;">
        👉 <strong>Müşteri Vitrininde Görünen Nihai Satış Fiyatı: ${c.customerFinalPriceTl}.00 TL</strong> (Müşteri komisyon kırılımını görmez — Kural #8)
      </div>
    `;
  }

  // Event Listeners
  document.getElementById('adminLoginForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const role = document.getElementById('loginRoleSelect').value;
    const email = document.getElementById('loginIdentifier').value;
    const names = {
      SUPER_ADMIN: 'Koray Taşan (Süper Admin)',
      PRODUCER: 'Mustafa Usta (Tezgâh Sahibi)',
      FIELD_ADVISOR: 'Emre Kaya (Saha Üretici Danışmanı)',
      QA_REVIEWER: 'Zeynep Arslan (Gıda QA Uzmanı)',
      FINANCE: 'Finans & Hakediş Uzmanı',
    };
    saveAdminSession({
      role,
      displayName: names[role] || 'Yetkili',
      email,
    });
  });

  adminLogoutBtn?.addEventListener('click', () => {
    saveAdminSession(null);
  });

  document.querySelectorAll('.tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const target = btn.getAttribute('data-tab');
      document.querySelectorAll('.tab-panel').forEach((panel) => {
        panel.hidden = panel.id !== target;
      });
    });
  });

  document.getElementById('realNetInput')?.addEventListener('input', renderRealPricePreview);
  document.getElementById('realPackInput')?.addEventListener('input', renderRealPricePreview);
  document.getElementById('calcNetTl')?.addEventListener('input', renderCalculatorTab);
  document.getElementById('calcPackTl')?.addEventListener('input', renderCalculatorTab);

  document.getElementById('createRealProductForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const approveNow = fd.get('approveNow') === 'on';

    if (adminSession?.role === 'FIELD_ADVISOR' && approveNow) {
      showAlert(
        '⛔ GÖREV AYRILIĞI ENGELİ: Saha Üretici Danışmanı doğrudan satış onayı (approved) veremez! Kutuyu kaldırarak QA kuyruğuna gönderin.',
        true
      );
      return;
    }

    const desiredNetTl = Number(fd.get('desiredNetTl'));
    const packagingCostTl = Number(fd.get('packagingCostTl'));
    const calc = Core.calculatePriceBreakdown(desiredNetTl, packagingCostTl, 0.15);
    const shippingProfile = String(fd.get('shippingProfile'));
    const shippingFeeTl =
      shippingProfile === 'chilled' ? 189 : shippingProfile === 'liquid' ? 109 : shippingProfile === 'fresh_fragile' ? 129 : 89;

    const stallId = 'real_s_' + Date.now().toString().slice(-5);
    const prodId = 'real_p_' + Date.now().toString().slice(-5);
    const region = String(fd.get('region'));
    const district = String(fd.get('district'));
    const stallName = String(fd.get('stallName'));

    const db = Core.loadDb();
    db.stalls.unshift({
      id: stallId,
      name: stallName,
      producerName: String(fd.get('producerName')),
      originCity: region,
      originDistrict: district,
      originLabel: `${region} · ${district}`,
      foodBusinessRegistrationNo: String(fd.get('regNo')),
      status: approveNow ? 'approved' : 'qa_pending',
      story: `${region} ${district} yöresinden doğrulanmış yerli üretici tezgâhı.`,
      isDemo: false,
    });

    db.products.unshift({
      id: prodId,
      name: String(fd.get('productName')),
      category: String(fd.get('category')),
      region,
      origin: `${region} · ${district}`,
      stallId,
      stallName,
      unit: String(fd.get('unit')),
      desiredNetKurus: calc.desiredNetKurus,
      packagingCostKurus: calc.packagingCostKurus,
      priceKurus: calc.customerFinalPriceKurus,
      priceTl: calc.customerFinalPriceTl,
      stock: Number(fd.get('stock')),
      seasonal: true,
      productionMethod: 'open_field',
      productionMethodLabel: 'Doğrulanmış Yerli Üretici Üretimi',
      hasVerifiedOrganicCert: false,
      shippingProfile,
      shippingLabel: 'Üreticiden doğrudan tezgâh bazlı ayrı gönderim',
      shippingBaseFeeKurus: shippingFeeTl * 100,
      shippingBaseFeeTl: shippingFeeTl,
      complianceStatus: approveNow ? 'approved' : 'qa_pending',
      orderable: approveNow,
      badge: 'Doğrulanmış Üretici',
      image: '/ciftcidenaldim/assets/zeytinyagi.jpg',
      batchLotNumber: 'LOT-2026-' + Date.now().toString().slice(-4),
      isDemo: false,
    });

    Core.saveDb(db);
    renderRealCatalogTable();
    showAlert(
      `✅ Gerçek ürün ve tezgâh oluşturuldu (${stallName} — ${calc.customerFinalPriceTl} TL). isDemo: false olarak kaydedildi ve /ciftcidenaldim müşteri vitrininde yayına alındı!`
    );
  });

  document.getElementById('runDemoMultiStallCartBtn')?.addEventListener('click', () => {
    const db = Core.loadDb();
    const demoPlan = Core.buildDistributedCart({ p1: 1, p2: 1 }, db.products);
    const out = document.getElementById('demoMultiStallTestOutput');
    if (!out) return;
    out.hidden = false;
    out.innerHTML = `
      <div style="padding:14px;background:#f2f6ef;border:1px solid #b7dfc2;border-radius:12px;font-size:12.5px;">
        <strong>✓ Kabul Testi #1 Doğrulandı (DEMO Sepet Simülasyonu):</strong>
        Kars Eski Kaşarı (460 TL + 189 TL soğuk zincir kargo) + Ayvalık Zeytinyağı (395 TL + 109 TL sıvı kargo) =
        <strong>${demoPlan.distinctStallCount} Ayrı Tezgâh / ${demoPlan.distinctShipmentCount} Ayrı Kargo (${demoPlan.shippingTotalTl} TL)</strong> · Genel Toplam: <strong>${demoPlan.grandTotalTl} TL</strong>.
      </div>
    `;
  });

  // WhatsApp Sesli/Metin Bot Simülatörü
  const waLog = document.getElementById('waSimLog');
  if (waLog) {
    waLog.innerHTML = `
      <div style="background:#fff;padding:8px 12px;border-radius:10px;align-self:flex-start;">
        Merhaba Mustafa Usta (Tokat Bahçem)! Sesli veya yazılı stok/fiyat mesajı gönderebilirsin. Açık <b>"Evet"</b> onayını almadan DB'yi değiştirmem.
      </div>
    `;
  }

  document.getElementById('waVoiceBtn')?.addEventListener('click', () => {
    waProposalPending = true;
    waLog.innerHTML += `
      <div style="background:#d6f4c9;padding:8px 12px;border-radius:10px;align-self:flex-end;">
        🎙️ [Ses Kaydı]: "Bugün kırk kilo domatesim var kilosu kırk beş lira"<br/>
        <small style="font-weight:700;color:#214d35;">[AI-01 faster-whisper Normalize: "40 kilo, 45 lira" · %96 Güven]</small>
      </div>
      <div style="background:#fff;padding:8px 12px;border-radius:10px;align-self:flex-start;">
        Tokat Bahçe Domatesi için teklif hazırladım:<br/>
        • Stok: <b>40 kg</b> · Hedef Net: <b>45 TL/kg</b> + 4 TL Ambalaj → Müşteri Satış Fiyatı: <b>58 TL/kg</b><br/>
        Tezgâhında yayımlamamı onaylıyor musun? ("Evet" yazın — <b>dbMutated: false</b>)
      </div>
    `;
  });

  document.getElementById('waConfirmYesBtn')?.addEventListener('click', () => {
    if (!waProposalPending) return;
    waProposalPending = false;
    waLog.innerHTML += `
      <div style="background:#d6f4c9;padding:8px 12px;border-radius:10px;align-self:flex-end;">Evet</div>
      <div style="background:#fff;padding:8px 12px;border-radius:10px;align-self:flex-start;">
        ✅ Onayınız alındı! Tokat Bahçe Domatesi stoğu 40 kg, müşteri fiyatı 58 TL/kg olarak güncellendi (<b>CONFIRMED_AND_APPLIED · dbMutated: true</b>).
      </div>
    `;
  });

  syncView();
})();

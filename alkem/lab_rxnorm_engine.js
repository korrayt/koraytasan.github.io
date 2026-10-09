// =========================================================================
// TEST LAB 1000: NLM RxNorm & RxClass Interactive Explorer & Sync Engine (v1.0)
// Automated REST API Integration & Pharmacological Ingestion
// Offline-first (file:/// compatible) with Live Online NLM RxNav querying
//
// Mandatory NLM Attribution:
// "This product uses publicly available data from the U.S. National Library of Medicine (NLM),
// National Institutes of Health, Department of Health and Human Services; NLM is not
// responsible for the product and does not endorse or recommend this or any other product."
//
// Legal & AI Disclaimer:
// "Formüller yapay zeka araçları ve hesaplama motorları kullanılarak internet verileri araştırmaları sonucu oluşturulmuştur. Sonuçlarda hata olabilir."
// =========================================================================

(function(global) {
  'use strict';

  // State Management
  const RxNormState = {
    materials: [],
    metadata: null,
    filteredMaterials: [],
    searchQuery: '',
    selectedAtcGroup: 'ALL',
    selectedTty: 'ALL',
    currentPage: 1,
    pageSize: 36,
    liveApiLoading: false,
    activeDetailItem: null
  };

  const NLM_ATTRIBUTION_TEXT = "This product uses publicly available data from the U.S. National Library of Medicine (NLM), National Institutes of Health, Department of Health and Human Services; NLM is not responsible for the product and does not endorse or recommend this or any other product.";
  const AI_DISCLAIMER_TEXT = "Formüller yapay zeka araçları ve hesaplama motorları kullanılarak internet verileri araştırmaları sonucu oluşturulmuştur. Sonuçlarda hata olabilir.";

  // Initialize on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    initRxNormEngine();
  });

  function initRxNormEngine() {
    // Load local dataset
    if (global.TEST_LAB_1000_MALZEME && Array.isArray(global.TEST_LAB_1000_MALZEME)) {
      RxNormState.materials = global.TEST_LAB_1000_MALZEME;
      RxNormState.metadata = global.NLM_RXNORM_METADATA || {};
      RxNormState.filteredMaterials = [...RxNormState.materials];
    }

    setupRxNormDom();
    setupEventListeners();
    renderRxNormStats();
    renderRxNormCards();
  }

  function setupRxNormDom() {
    // If container elements do not exist, this will gracefully wait
    const container = document.getElementById('rxnorm-materials-grid');
    if (!container) return;
  }

  function setupEventListeners() {
    // Search input
    const searchInput = document.getElementById('rxnorm-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        RxNormState.searchQuery = e.target.value.trim().toLowerCase();
        RxNormState.currentPage = 1;
        filterAndRender();
      });
    }

    // ATC category chips
    const atcChips = document.querySelectorAll('.rxnorm-filter-chip');
    atcChips.forEach(chip => {
      chip.addEventListener('click', () => {
        atcChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        RxNormState.selectedAtcGroup = chip.getAttribute('data-atc') || 'ALL';
        RxNormState.currentPage = 1;
        filterAndRender();
      });
    });

    // Term Type (TTY) filter select
    const ttySelect = document.getElementById('rxnorm-tty-select');
    if (ttySelect) {
      ttySelect.addEventListener('change', (e) => {
        RxNormState.selectedTty = e.target.value;
        RxNormState.currentPage = 1;
        filterAndRender();
      });
    }

    // Pagination buttons
    const btnPrev = document.getElementById('rxnorm-btn-prev');
    const btnNext = document.getElementById('rxnorm-btn-next');
    if (btnPrev) {
      btnPrev.addEventListener('click', () => {
        if (RxNormState.currentPage > 1) {
          RxNormState.currentPage--;
          renderRxNormCards();
          scrollToTopCatalog();
        }
      });
    }
    if (btnNext) {
      btnNext.addEventListener('click', () => {
        const totalPages = Math.ceil(RxNormState.filteredMaterials.length / RxNormState.pageSize);
        if (RxNormState.currentPage < totalPages) {
          RxNormState.currentPage++;
          renderRxNormCards();
          scrollToTopCatalog();
        }
      });
    }

    // Live NLM API Query
    const btnLiveSync = document.getElementById('btn-rxnorm-live-search');
    const liveInput = document.getElementById('rxnorm-live-query-input');
    if (btnLiveSync && liveInput) {
      btnLiveSync.addEventListener('click', () => {
        const query = liveInput.value.trim();
        if (query) {
          queryNlmLiveApi(query);
        }
      });
      liveInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          const query = liveInput.value.trim();
          if (query) {
            queryNlmLiveApi(query);
          }
        }
      });
    }

    // Detail Modal Close
    const btnCloseModal = document.getElementById('btn-close-rxnorm-modal');
    const btnFooterCloseModal = document.getElementById('btn-footer-close-rxnorm-modal');
    const modal = document.getElementById('rxnorm-detail-modal');

    if (btnCloseModal && modal) {
      btnCloseModal.addEventListener('click', () => modal.style.display = 'none');
    }
    if (btnFooterCloseModal && modal) {
      btnFooterCloseModal.addEventListener('click', () => modal.style.display = 'none');
    }
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
      });
    }
  }

  function scrollToTopCatalog() {
    const el = document.getElementById('tab-rxnorm');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function filterAndRender() {
    const q = RxNormState.searchQuery;
    const atc = RxNormState.selectedAtcGroup;
    const tty = RxNormState.selectedTty;

    RxNormState.filteredMaterials = RxNormState.materials.filter(m => {
      // ATC Group check
      if (atc !== 'ALL') {
        if (atc === 'N02B') {
          const isN02B = (m.atc_codes || []).some(c => c.startsWith('N02B')) ||
                         (m.atc_memberships || []).some(mem => mem.code && mem.code.startsWith('N02B'));
          if (!isN02B) return false;
        } else if (atc === 'M01A') {
          const isM01A = (m.atc_codes || []).some(c => c.startsWith('M01A')) ||
                         (m.atc_memberships || []).some(mem => mem.code && mem.code.startsWith('M01A'));
          if (!isM01A) return false;
        } else {
          if (m.primary_group_code !== atc) return false;
        }
      }

      // TTY check
      if (tty !== 'ALL' && m.term_type !== tty) {
        return false;
      }

      // Search Query
      if (q) {
        const trName = (m.display_name || '').toLowerCase();
        const enName = (m.canonical_name || '').toLowerCase();
        const rxcui = String(m.rxcui || '').toLowerCase();
        const atcCodes = (m.atc_codes || []).join(' ').toLowerCase();
        const aliases = (m.aliases || []).join(' ').toLowerCase();
        const groupTr = (m.primary_group_name_tr || '').toLowerCase();

        const match = trName.includes(q) ||
                      enName.includes(q) ||
                      rxcui.includes(q) ||
                      atcCodes.includes(q) ||
                      aliases.includes(q) ||
                      groupTr.includes(q);
        if (!match) return false;
      }

      return true;
    });

    renderRxNormStats();
    renderRxNormCards();
  }

  function renderRxNormStats() {
    const countBadge = document.getElementById('rxnorm-count-badge');
    const totalCountBadge = document.getElementById('rxnorm-total-badge');

    if (countBadge) {
      countBadge.textContent = `${RxNormState.filteredMaterials.length.toLocaleString('tr-TR')} Malzeme`;
    }
    if (totalCountBadge) {
      totalCountBadge.textContent = `${RxNormState.materials.length.toLocaleString('tr-TR')} Toplam`;
    }
  }

  function renderRxNormCards() {
    const container = document.getElementById('rxnorm-materials-grid');
    if (!container) return;

    const filtered = RxNormState.filteredMaterials;
    const page = RxNormState.currentPage;
    const size = RxNormState.pageSize;
    const totalPages = Math.ceil(filtered.length / size) || 1;

    // Update pagination labels
    const pageLabel = document.getElementById('rxnorm-page-label');
    if (pageLabel) {
      pageLabel.textContent = `Sayfa ${page} / ${totalPages} (${filtered.length} sonuç)`;
    }

    const btnPrev = document.getElementById('rxnorm-btn-prev');
    const btnNext = document.getElementById('rxnorm-btn-next');
    if (btnPrev) btnPrev.disabled = (page <= 1);
    if (btnNext) btnNext.disabled = (page >= totalPages);

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 3rem 1.5rem; text-align: center; background: rgba(15,23,42,0.6); border: 1px dashed rgba(245,158,11,0.3); border-radius: 12px;">
          <div style="font-size: 2.5rem; margin-bottom: 0.8rem;">🔍</div>
          <h3 style="color: #fbbf24; margin-bottom: 0.5rem;">Aradığınız Kriterlere Uygun Malzeme Bulunamadı</h3>
          <p style="color: #94a3b8; font-size: 0.9rem; max-width: 500px; margin: 0 auto 1.5rem auto;">
            "${RxNormState.searchQuery}" sorgusuna ait yerel 1,000 malzeme içinde sonuç yok. Yukarıdaki <strong>"Canlı NLM RxNav API"</strong> motorunu kullanarak ABD Ulusal Tıp Kütüphanesi veritabanından canlı sorgulama yapabilirsiniz.
          </p>
          <button class="btn btn-outline" onclick="document.getElementById('rxnorm-live-query-input').value='${RxNormState.searchQuery}'; document.getElementById('btn-rxnorm-live-search').click();" style="border-color: #38bdf8; color: #38bdf8;">
            🌐 "${RxNormState.searchQuery}" için Canlı NLM RxNav Sorgula
          </button>
        </div>
      `;
      return;
    }

    const startIndex = (page - 1) * size;
    const pageItems = filtered.slice(startIndex, startIndex + size);

    let html = '';
    pageItems.forEach(item => {
      const atcBadge = item.primary_group_code ? 
        `<span class="rxnorm-badge atc-badge" title="${item.primary_group_name_tr || ''}">ATC: ${item.primary_group_code}</span>` : '';
      
      const ttyBadge = item.term_type === 'PIN' ?
        `<span class="rxnorm-badge tty-pin" title="Precise Ingredient (Tuz/Ester)">PIN</span>` :
        `<span class="rxnorm-badge tty-in" title="Ingredient (Temel Etken Madde)">IN</span>`;

      const atcCodesHtml = (item.atc_codes || []).slice(0, 3).map(c => 
        `<code style="background: rgba(15,23,42,0.8); border: 1px solid rgba(56,189,248,0.25); color: #38bdf8; padding: 0.15rem 0.4rem; border-radius: 4px; font-size: 0.72rem;">${c}</code>`
      ).join(' ');

      const aliasesHtml = (item.aliases || []).slice(0, 3).map(a => 
        `<span style="font-size: 0.75rem; color: #94a3b8; background: rgba(255,255,255,0.04); padding: 0.1rem 0.35rem; border-radius: 3px;">${a}</span>`
      ).join(' ');

      html += `
        <div class="rxnorm-card" data-rxcui="${item.rxcui}">
          <div class="rxnorm-card-header">
            <div style="display: flex; gap: 0.4rem; align-items: center; flex-wrap: wrap;">
              <span class="rxnorm-rxcui-badge">RxCUI: ${item.rxcui}</span>
              ${ttyBadge}
              ${atcBadge}
            </div>
            <span style="font-size: 0.75rem; color: #64748b; font-family: monospace;">#${item.sequence || ''}</span>
          </div>

          <div class="rxnorm-card-body">
            <h4 class="rxnorm-card-title">${item.display_name}</h4>
            <div class="rxnorm-card-latin">${item.canonical_name}</div>
            
            <div style="font-size: 0.8rem; color: #cbd5e1; margin-top: 0.4rem; display: flex; align-items: center; gap: 0.3rem;">
              <span style="color: #94a3b8;">Grup:</span>
              <strong style="color: #e2e8f0; font-weight: 500;">${item.primary_group_name_tr || 'Genel'}</strong>
            </div>

            <div style="margin-top: 0.5rem; display: flex; gap: 0.3rem; flex-wrap: wrap;">
              ${atcCodesHtml}
            </div>

            ${aliasesHtml ? `<div style="margin-top: 0.5rem; display: flex; gap: 0.25rem; flex-wrap: wrap;">${aliasesHtml}</div>` : ''}
          </div>

          <div class="rxnorm-card-footer">
            <button class="btn-rxnorm-action btn-add-vessel" onclick="window.addRxNormToLabVessel('${item.rxcui}')">
              ⚗️ Behere Aktar
            </button>
            <button class="btn-rxnorm-action btn-show-details" onclick="window.showRxNormDetails('${item.rxcui}')">
              ℹ️ NLM Detayı
            </button>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  }

  // Live Query against official NLM RxNav REST APIs
  async function queryNlmLiveApi(rawQuery) {
    const query = rawQuery.trim();
    const resultBox = document.getElementById('rxnorm-live-result-box');
    const resultText = document.getElementById('rxnorm-live-result-content');
    const statusTag = document.getElementById('rxnorm-live-status-tag');

    if (!resultBox || !resultText) return;

    resultBox.style.display = 'block';
    resultText.innerHTML = `
      <div style="display: flex; align-items: center; gap: 0.6rem; color: #38bdf8;">
        <span class="spin-icon">⏳</span>
        <span>ABD Ulusal Tıp Kütüphanesi (NLM RxNav) REST API sorgulanıyor: <code>"${query}"</code>...</span>
      </div>
    `;
    if (statusTag) {
      statusTag.textContent = 'Bağlantı Kuruluyor...';
      statusTag.style.color = '#38bdf8';
    }

    try {
      // Step 1: Query RxCUI by Name
      const isNumeric = /^\d+$/.test(query);
      let rxcui = isNumeric ? query : null;

      if (!rxcui) {
        const findUrl = `https://rxnav.nlm.nih.gov/REST/rxcui.json?name=${encodeURIComponent(query)}`;
        const rxcuiResp = await fetch(findUrl, { headers: { 'Accept': 'application/json' } });
        if (!rxcuiResp.ok) throw new Error(`NLM API HTTP Hatası: ${rxcuiResp.status}`);
        const rxcuiData = await rxcuiResp.json();
        rxcui = rxcuiData?.idGroup?.rxnormId?.[0];
      }

      if (!rxcui) {
        resultText.innerHTML = `
          <div style="color: #f87171; padding: 0.5rem 0;">
            ❌ <strong>"${query}"</strong> için NLM RxNav veritabanında aktif RxCUI kaydı bulunamadı.
            <div style="font-size: 0.8rem; color: #94a3b8; margin-top: 0.3rem;">
              İpucu: İngilizce veya uluslararası jenerik adını (INN) deneyiniz (Örn: "acetaminophen", "ibuprofen", "metformin", "caffeine").
            </div>
          </div>
        `;
        if (statusTag) {
          statusTag.textContent = 'Kayıt Bulunamadı';
          statusTag.style.color = '#f87171';
        }
        return;
      }

      // Step 2: Fetch detailed properties
      const propUrl = `https://rxnav.nlm.nih.gov/REST/rxcui/${rxcui}/allProperties.json?prop=all`;
      const classUrl = `https://rxnav.nlm.nih.gov/REST/rxclass/class/byRxcui.json?rxcui=${rxcui}&relaSource=ATC`;

      const [propResp, classResp] = await Promise.allSettled([
        fetch(propUrl, { headers: { 'Accept': 'application/json' } }).then(r => r.json()),
        fetch(classUrl, { headers: { 'Accept': 'application/json' } }).then(r => r.json())
      ]);

      const propData = propResp.status === 'fulfilled' ? propResp.value : null;
      const classData = classResp.status === 'fulfilled' ? classResp.value : null;

      const propList = propData?.propConceptGroup?.propConcept || [];
      const fullName = propList.find(p => p.propName === 'RxNorm Name')?.propValue || query;
      const tty = propList.find(p => p.propName === 'TTY')?.propValue || 'IN';

      const classes = (classData?.rxclassDrugInfoList?.rxclassDrugInfo || []).map(info => ({
        classId: info.rxclassMinConceptItem?.classId,
        className: info.rxclassMinConceptItem?.className,
        classType: info.rxclassMinConceptItem?.classType
      }));

      if (statusTag) {
        statusTag.textContent = 'HTTP 200 OK (Canlı NLM Verisi)';
        statusTag.style.color = '#10b981';
      }

      resultText.innerHTML = `
        <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 8px; padding: 1rem; margin-top: 0.5rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem;">
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <span style="font-size: 1.2rem;">💊</span>
              <strong style="font-size: 1.05rem; color: #34d399;">${fullName}</strong>
              <span class="rxnorm-badge atc-badge">RxCUI: ${rxcui}</span>
              <span class="rxnorm-badge tty-in">${tty}</span>
            </div>
            <button class="btn btn-gold" style="font-size: 0.8rem; padding: 0.35rem 0.8rem;" onclick="window.addLiveRxNormToVessel('${rxcui}', '${encodeURIComponent(fullName)}')">
              ⚗️ Canlı Veriyi Behere Yükle
            </button>
          </div>

          <div style="font-size: 0.84rem; color: #cbd5e1; line-height: 1.5;">
            <div><strong>ATC Sınıfları:</strong> ${classes.length > 0 ? classes.map(c => `<code>${c.classId}: ${c.className}</code>`).join(', ') : 'Belirtilmemiş'}</div>
            <div style="margin-top: 0.3rem;"><strong>NLM REST URL:</strong> <a href="${propUrl}" target="_blank" style="color: #38bdf8; text-decoration: underline;">${propUrl}</a></div>
          </div>

          <div style="margin-top: 0.8rem; padding-top: 0.6rem; border-top: 1px dashed rgba(255,255,255,0.1); font-size: 0.72rem; color: #94a3b8;">
            ${NLM_ATTRIBUTION_TEXT}
          </div>
        </div>
      `;

    } catch (err) {
      console.warn('NLM Live API network query fallback:', err);
      // Fallback: check in offline 1000 items
      const localMatches = global.findRxNormMaterial ? global.findRxNormMaterial(query) : [];
      if (localMatches.length > 0) {
        const top = localMatches[0];
        resultText.innerHTML = `
          <div style="background: rgba(245, 158, 11, 0.08); border: 1px solid rgba(245, 158, 11, 0.3); border-radius: 8px; padding: 1rem; margin-top: 0.5rem;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
              <span style="color: #fbbf24; font-weight: 600;">⚡ Çevrimdışı / Yerel İndeks Eşleşmesi Bulundu:</span>
              <button class="btn btn-gold" style="font-size: 0.78rem; padding: 0.3rem 0.7rem;" onclick="window.addRxNormToLabVessel('${top.rxcui}')">
                ⚗️ Behere Yükle
              </button>
            </div>
            <div style="color: #fff; font-size: 0.95rem; font-weight: bold;">${top.display_name} (${top.canonical_name})</div>
            <div style="font-size: 0.82rem; color: #cbd5e1; margin-top: 0.3rem;">
              RxCUI: <code>${top.rxcui}</code> | Grup: <strong>${top.primary_group_name_tr}</strong> | ATC: <code>${(top.atc_codes||[]).join(', ')}</code>
            </div>
            <div style="font-size: 0.75rem; color: #94a3b8; margin-top: 0.4rem;">
              (İnternet bağlantısı veya CORS kısıtlaması nedeniyle NLM canlı API'ye ulaşılamadı, sistem yerel 1,000 malzeme kataloğundan getirdi.)
            </div>
          </div>
        `;
        if (statusTag) {
          statusTag.textContent = 'Yerel Ön Bellekten Sunuldu';
          statusTag.style.color = '#fbbf24';
        }
      } else {
        resultText.innerHTML = `
          <div style="color: #f87171; padding: 0.5rem 0;">
            ⚠️ NLM Canlı API Bağlantı Hatası: ${err.message}. Lütfen internet bağlantınızı kontrol ediniz.
          </div>
        `;
        if (statusTag) {
          statusTag.textContent = 'Bağlantı Hatası';
          statusTag.style.color = '#f87171';
        }
      }
    }
  }

  // Show detailed modal for an RxNorm item
  global.showRxNormDetails = function(rxcui) {
    const item = global.getRxNormByRxcui ? global.getRxNormByRxcui(rxcui) : RxNormState.materials.find(m => m.rxcui === String(rxcui));
    if (!item) return;

    RxNormState.activeDetailItem = item;
    const modal = document.getElementById('rxnorm-detail-modal');
    const modalBody = document.getElementById('rxnorm-detail-modal-body');
    if (!modal || !modalBody) return;

    const membershipsHtml = (item.atc_memberships || []).map(mem => `
      <div style="background: rgba(15,23,42,0.6); border: 1px solid rgba(255,255,255,0.06); border-radius: 6px; padding: 0.6rem 0.8rem; margin-bottom: 0.4rem; font-size: 0.82rem;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <strong style="color: #38bdf8;">ATC Kodu: ${mem.code || 'Bilinmiyor'}</strong>
          <span style="font-size: 0.72rem; color: #94a3b8;">Grup: ${mem.group_code || ''}</span>
        </div>
        <div style="color: #cbd5e1; margin-top: 0.2rem;">
          ${mem.group_name_tr || mem.group_name || ''} ➔ <em>${mem.subclass_name || ''}</em>
        </div>
      </div>
    `).join('') || '<div style="color: #94a3b8; font-size: 0.82rem;">Doğrudan ATC alt-sınıf üyeliği bulunamadı.</div>';

    modalBody.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 1rem; margin-bottom: 1rem;">
        <div>
          <h2 style="color: #fbbf24; margin: 0; font-size: 1.4rem;">${item.display_name}</h2>
          <div style="color: #94a3b8; font-size: 0.95rem; font-style: italic;">${item.canonical_name}</div>
        </div>
        <div style="display: flex; gap: 0.5rem;">
          <span class="rxnorm-badge atc-badge" style="font-size: 0.85rem; padding: 0.3rem 0.7rem;">RxCUI: ${item.rxcui}</span>
          <span class="rxnorm-badge tty-in" style="font-size: 0.85rem; padding: 0.3rem 0.7rem;">${item.term_type}</span>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.25rem;">
        <div style="background: rgba(15,23,42,0.4); padding: 0.85rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05);">
          <div style="font-size: 0.75rem; color: #94a3b8; text-transform: uppercase;">Birincil Terapötik Grup</div>
          <div style="font-size: 1rem; color: #e2e8f0; font-weight: 600; margin-top: 0.25rem;">
            [${item.primary_group_code}] ${item.primary_group_name_tr || 'Genel'}
          </div>
        </div>

        <div style="background: rgba(15,23,42,0.4); padding: 0.85rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05);">
          <div style="font-size: 0.75rem; color: #94a3b8; text-transform: uppercase;">Etken Madde Tipi</div>
          <div style="font-size: 1rem; color: #38bdf8; font-weight: 600; margin-top: 0.25rem;">
            ${item.record_type_tr || (item.term_type === 'PIN' ? 'Tuz / Ester / İzomer' : 'Temel Etken Madde')}
          </div>
        </div>
      </div>

      <div style="margin-bottom: 1.25rem;">
        <h4 style="color: #e2e8f0; font-size: 0.9rem; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">
          Eş Anlamlılar & Ticari / Bilimsel Adlar (Aliases)
        </h4>
        <div style="display: flex; gap: 0.4rem; flex-wrap: wrap;">
          ${(item.aliases || []).map(a => `<span style="background: rgba(255,255,255,0.06); padding: 0.25rem 0.6rem; border-radius: 4px; font-size: 0.82rem; color: #cbd5e1;">${a}</span>`).join('')}
        </div>
      </div>

      <div style="margin-bottom: 1.25rem;">
        <h4 style="color: #e2e8f0; font-size: 0.9rem; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">
          Dünya Sağlık Örgütü (WHO) ATC Sınıflandırma Ağacı
        </h4>
        <div style="max-height: 200px; overflow-y: auto; padding-right: 0.5rem;">
          ${membershipsHtml}
        </div>
      </div>

      <div style="margin-bottom: 1.25rem; background: rgba(56, 189, 248, 0.05); border: 1px solid rgba(56, 189, 248, 0.2); border-radius: 8px; padding: 0.85rem;">
        <h4 style="color: #38bdf8; font-size: 0.85rem; margin-bottom: 0.4rem;">Resmi NLM RxNav REST API Bağlantısı</h4>
        <div style="word-break: break-all; font-family: monospace; font-size: 0.78rem; color: #94a3b8;">
          <a href="${item.source_url || `https://rxnav.nlm.nih.gov/REST/rxcui/${item.rxcui}/properties.json`}" target="_blank" style="color: #38bdf8; text-decoration: underline;">
            ${item.source_url || `https://rxnav.nlm.nih.gov/REST/rxcui/${item.rxcui}/properties.json`}
          </a>
        </div>
      </div>

      <!-- Action Buttons Inside Modal -->
      <div style="display: flex; gap: 0.8rem; justify-content: flex-end; margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid rgba(255,255,255,0.1);">
        <button class="btn btn-outline" onclick="navigator.clipboard.writeText(JSON.stringify(window.RxNormState?.activeDetailItem, null, 2)); alert('Madde JSON verisi panoya kopyalandı!');">
          📋 JSON Kopyala
        </button>
        <button class="btn btn-gold" onclick="window.addRxNormToLabVessel('${item.rxcui}'); document.getElementById('rxnorm-detail-modal').style.display='none';">
          ⚗️ Bu Maddeyi Behere Aktar
        </button>
      </div>
    `;

    modal.style.display = 'flex';
  };

  // Add RxNorm item to active reaction vessel
  global.addRxNormToLabVessel = function(rxcui) {
    const item = global.getRxNormByRxcui ? global.getRxNormByRxcui(rxcui) : RxNormState.materials.find(m => m.rxcui === String(rxcui));
    if (!item) return;

    const subId = `rxnorm-${item.rxcui}`;

    // Ensure item exists in LabEngine / LabState.substances
    if (global.LabEngine && typeof global.LabEngine.getSubstances === 'function') {
      const allSub = global.LabEngine.getSubstances();
      let found = allSub.find(s => s.id === subId);
      if (!found) {
        found = {
          id: subId,
          name: item.display_name,
          name_en: item.canonical_name,
          category: `Farmasötik Aktif (ATC ${item.primary_group_code || 'V'})`,
          chemical_formula: (item.atc_codes && item.atc_codes[0]) ? item.atc_codes[0] : `RxCUI:${item.rxcui}`,
          cas_number: `RxCUI:${item.rxcui}`,
          phase_20c: item.canonical_name === 'glycerin' ? 'liquid' : 'solid',
          color_hex: '#06b6d4',
          boiling_point_c: null,
          melting_point_c: null,
          ph: 7.0,
          density_g_ml: 1.25,
          is_composite: false,
          molecular_weight: null,
          reactivity_tags: ['pharma_api', 'rxnorm', `atc_${(item.primary_group_code || 'v').toLowerCase()}`],
          safety_rating: 1,
          safety_notes: `NLM RxNorm etken madde. TTY: ${item.term_type}.`,
          alchemical_association: `NLM RxNorm (${item.primary_group_name_tr || 'Etken Madde'})`,
          description: `${item.display_name} (${item.canonical_name}). NLM RxCUI: ${item.rxcui}. ATC: ${(item.atc_codes||[]).join(', ')}.`
        };
        allSub.push(found);
      }

      // Add to active reaction vessel (default 10g or 10ml)
      const defaultAmount = found.phase_20c === 'liquid' ? 10 : 10;
      const defaultUnit = found.phase_20c === 'liquid' ? 'ml' : 'g';

      global.LabEngine.addToVessel(subId, defaultAmount, defaultUnit, null);

      // Switch to test lab tab so the user sees it in their active beaker
      if (typeof global.switchToTab === 'function') {
        global.switchToTab('tab-test-lab');
      }

      showToast(`⚗️ "${item.display_name}" (${defaultAmount} ${defaultUnit}) reaksiyon beherine eklendi!`);
    } else {
      alert(`"${item.display_name}" beher laboratuvarına aktarıldı. (Test Lab sekmesinde görebilirsiniz)`);
    }
  };

  // Add live query item to vessel
  global.addLiveRxNormToVessel = function(rxcui, encodedName) {
    const name = decodeURIComponent(encodedName);
    const subId = `rxnorm-${rxcui}`;

    if (global.LabEngine && typeof global.LabEngine.getSubstances === 'function') {
      const allSub = global.LabEngine.getSubstances();
      let found = allSub.find(s => s.id === subId);
      if (!found) {
        found = {
          id: subId,
          name: name,
          name_en: name.toLowerCase(),
          category: 'Canlı NLM RxNorm Aktif',
          chemical_formula: `RxCUI:${rxcui}`,
          cas_number: `RxCUI:${rxcui}`,
          phase_20c: 'solid',
          color_hex: '#10b981',
          boiling_point_c: null,
          melting_point_c: null,
          ph: 7.0,
          density_g_ml: 1.25,
          is_composite: false,
          molecular_weight: null,
          reactivity_tags: ['pharma_api', 'live_nlm', 'rxnorm'],
          safety_rating: 1,
          safety_notes: `Canlı NLM RxNav REST API sorgusundan içe aktarıldı. RxCUI: ${rxcui}`,
          alchemical_association: 'Canlı NLM RxNorm',
          description: `${name}. NLM RxCUI: ${rxcui}.`
        };
        allSub.push(found);
      }

      global.LabEngine.addToVessel(subId, 10, 'g', null);

      if (typeof global.switchToTab === 'function') {
        global.switchToTab('tab-test-lab');
      }

      showToast(`⚗️ "${name}" reaksiyon beherine eklendi!`);
    }
  };

  function showToast(msg) {
    let toast = document.getElementById('rxnorm-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'rxnorm-toast';
      toast.style.position = 'fixed';
      toast.style.bottom = '2rem';
      toast.style.right = '2rem';
      toast.style.background = 'rgba(15, 23, 42, 0.95)';
      toast.style.border = '1px solid #10b981';
      toast.style.color = '#34d399';
      toast.style.padding = '0.8rem 1.4rem';
      toast.style.borderRadius = '8px';
      toast.style.boxShadow = '0 10px 25px rgba(0,0,0,0.5)';
      toast.style.zIndex = '99999';
      toast.style.fontSize = '0.9rem';
      toast.style.transition = 'opacity 0.3s ease';
      document.body.appendChild(toast);
    }
    toast.innerHTML = msg;
    toast.style.opacity = '1';
    toast.style.display = 'block';
    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => { toast.style.display = 'none'; }, 300);
    }, 3000);
  }

  // Export to global scope
  global.RxNormEngine = {
    state: RxNormState,
    filterAndRender,
    queryNlmLiveApi,
    showRxNormDetails: global.showRxNormDetails,
    addRxNormToLabVessel: global.addRxNormToLabVessel,
    NLM_ATTRIBUTION_TEXT,
    AI_DISCLAIMER_TEXT
  };

})(typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this));

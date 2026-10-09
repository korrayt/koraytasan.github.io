// =========================================================================
// MAGNUM OPUS - TEST LAB EXPERIMENTAL CHEMISTRY & ALCHEMY ENGINE (v3.0)
// Powered by LabCalculator (Universal Stoichiometric, Thermodynamic & Kinetics Engine)
// Zero-CORS offline execution
// =========================================================================

(function() {
  "use strict";

  // --- Global Lab State ---
  const LabState = {
    substances: [],        // Full catalog (1,400+ built-in + custom user formulations)
    vessel: [],            // Active items in reaction vessel: [ { subId, amount, unit, customLabel } ]
    vesselTemp: 20.0,      // °C
    vesselTimeMin: 15,     // minutes
    vesselPressureMbar: 1013.25, // mbar (Antoine vacuum distillation & thermodynamics)
    activeCheminfoTab: "tab-qspr",
    activeWizardTab: "soap",
    history: [],           // Steps ledger
    activeFilter: "all",
    searchQuery: "",
    catalogDisplayLimit: 48 // Paginated virtual chunk for 60fps rendering
  };

  // --- DOM Elements Cache ---
  let dom = {};

  // --- Initialization ---
  document.addEventListener("DOMContentLoaded", () => {
    initLabEngine();
  });

  function initLabEngine() {
    dom = {
      tabPane: document.getElementById("tab-test-lab"),
      substancesContainer: document.getElementById("lab-substances-grid"),
      substancesSearch: document.getElementById("lab-substance-search"),
      categoryChips: document.getElementById("lab-category-chips"),
      inventoryCount: document.getElementById("inventory-count"),
      vesselList: document.getElementById("lab-vessel-list"),
      vesselEmptyMsg: document.getElementById("lab-vessel-empty-msg"),
      vesselTempInput: document.getElementById("lab-temp-input"),
      vesselTempSlider: document.getElementById("lab-temp-slider"),
      vesselTimeInput: document.getElementById("lab-time-input"),
      vesselTimeSlider: document.getElementById("lab-time-slider"),
      paramTempLabel: document.getElementById("param-temp-label"),
      paramTimeLabel: document.getElementById("param-time-label"),
      tempPresets: document.getElementById("lab-temp-presets"),
      btnMixReact: document.getElementById("btn-lab-mix-react"),
      btnHeatBoil: document.getElementById("btn-lab-heat-boil"),
      btnDistill: document.getElementById("btn-lab-distill"),
      btnCalcine: document.getElementById("btn-lab-calcine"),
      btnFilter: document.getElementById("btn-lab-filter"),
      btnFerment: document.getElementById("btn-lab-ferment"),
      btnSpagyric: document.getElementById("btn-lab-spagyric"),
      btnClearVessel: document.getElementById("btn-lab-clear-vessel"),
      resultCard: document.getElementById("lab-result-card"),
      resultTitle: document.getElementById("lab-result-title"),
      resultBody: document.getElementById("lab-result-body"),
      suggestionsContainer: document.getElementById("lab-suggestions-container"),
      historyContainer: document.getElementById("lab-history-container"),
      vesselPhBadge: document.getElementById("vessel-ph-badge"),
      vesselMassBadge: document.getElementById("vessel-mass-badge"),
      vesselTempBadge: document.getElementById("vessel-temp-badge"),
      // Custom Substance Builder Elements
      btnOpenCustomModal: document.getElementById("btn-open-custom-substance"),
      customModal: document.getElementById("custom-substance-modal"),
      btnCloseCustomModal: document.getElementById("btn-close-custom-modal"),
      btnCancelCustomModal: document.getElementById("btn-cancel-custom-modal"),
      btnSaveCustomSubstance: document.getElementById("btn-save-custom-substance"),
      customNameInput: document.getElementById("custom-sub-name"),
      customTotalAmountInput: document.getElementById("custom-total-amount"),
      customTotalUnitSelect: document.getElementById("custom-total-unit"),
      customCategorySelect: document.getElementById("custom-sub-category"),
      customPhaseSelect: document.getElementById("custom-sub-phase"),
      customDescInput: document.getElementById("custom-sub-desc"),
      customIngredientsContainer: document.getElementById("custom-ingredients-container"),
      btnAddIngredientRow: document.getElementById("btn-add-ingredient-row"),
      btnFillRemainingWater: document.getElementById("btn-fill-remaining-water"),
      formulationBalanceBadge: document.getElementById("custom-ingredient-balance-badge"),
      formulationBalanceBar: document.getElementById("formulation-balance-bar"),
      formulationBalancePercent: document.getElementById("formulation-balance-percent"),
      substancesDatalist: document.getElementById("lab-substances-datalist"),
      // Separation Protocol Elements
      vesselSeparationBanner: document.getElementById("vessel-separation-banner"),
      btnOpenSeparationProtocol: document.getElementById("btn-open-separation-protocol"),
      separationModal: document.getElementById("separation-protocol-modal"),
      btnCloseSeparationModal: document.getElementById("btn-close-separation-modal"),
      btnFooterCloseSeparationModal: document.getElementById("btn-footer-close-separation-modal"),
      separationModalBody: document.getElementById("separation-modal-body"),
      btnPreviewCustomSeparation: document.getElementById("btn-preview-custom-separation"),
      // Pressure Controls & Badges (Antoine Vacuum Distillation)
      labPressureSlider: document.getElementById("lab-pressure-slider"),
      labPressureInput: document.getElementById("lab-pressure-input"),
      paramPressureLabel: document.getElementById("param-pressure-label"),
      vesselVacuumBadge: document.getElementById("vessel-vacuum-badge"),
      labPressurePresets: document.getElementById("lab-pressure-presets"),
      // Cheminformatics & Open Source Integrations
      btnOpenCheminfoModal: document.getElementById("btn-open-cheminfo-modal"),
      btnExportMolecularFiles: document.getElementById("btn-export-molecular-files"),
      cheminfoModal: document.getElementById("cheminformatics-modal"),
      btnCloseCheminfoModal: document.getElementById("btn-close-cheminfo-modal"),
      btnFooterCloseCheminfoModal: document.getElementById("btn-footer-close-cheminfo-modal"),
      cheminfoModalBody: document.getElementById("cheminfo-modal-body"),
      cheminfoTabsNav: document.querySelector(".cheminfo-tabs-nav"),
      cheminfoStatusHint: document.getElementById("cheminfo-status-hint"),
      // Guided Chemical Engineering Wizard Elements
      btnOpenWizardModal: document.getElementById("btn-open-wizard-modal"),
      wizardModal: document.getElementById("wizard-modal"),
      btnCloseWizardModal: document.getElementById("btn-close-wizard-modal"),
      btnFooterCloseWizardModal: document.getElementById("btn-footer-close-wizard-modal"),
      wizardTabsNav: document.getElementById("wizard-tabs-nav"),
      wizardModalBody: document.getElementById("wizard-modal-body"),
      // Everyday Chemistry Dictionary Elements
      btnOpenDictModal: document.getElementById("btn-open-dict-modal"),
      dictModal: document.getElementById("dictionary-modal"),
      btnCloseDictModal: document.getElementById("btn-close-dict-modal"),
      btnFooterCloseDictModal: document.getElementById("btn-footer-close-dict-modal"),
      dictSearchInput: document.getElementById("dict-search-input"),
      dictModalBody: document.getElementById("dict-modal-body")
    };

    if (!dom.tabPane) return;

    // Load Substances Catalog
    if (window.LAB_SUBSTANCES_DATA && Array.isArray(window.LAB_SUBSTANCES_DATA)) {
      LabState.substances = JSON.parse(JSON.stringify(window.LAB_SUBSTANCES_DATA));
    }

    // Load NLM RxNorm TEST LAB 1000 Materials
    loadRxNormMaterialsIntoCatalog();

    // Load Custom Substances from localStorage
    loadCustomSubstancesFromStorage();

    // Populate Autocomplete Datalist
    populateSubstancesDatalist();

    // Setup Event Listeners
    setupEventListeners();

    // Initial Renders
    renderSubstancesCatalog();
    renderVessel();
    renderOpportunitySuggestions();
    renderHistory();
  }

  // --- Datalist Autocomplete Setup ---
  function populateSubstancesDatalist() {
    if (!dom.substancesDatalist) return;
    dom.substancesDatalist.innerHTML = "";
    // Populate top suggestions
    LabState.substances.forEach(sub => {
      const opt = document.createElement("option");
      opt.value = sub.name;
      opt.label = `${sub.chemical_formula} (${sub.category})`;
      dom.substancesDatalist.appendChild(opt);
    });
  }

  // --- Storage Management ---
  function loadCustomSubstancesFromStorage() {
    try {
      const stored = localStorage.getItem("MAGNUM_OPUS_CUSTOM_SUBSTANCES_V3");
      if (stored) {
        const customItems = JSON.parse(stored);
        customItems.forEach(item => {
          if (!LabState.substances.some(s => s.id === item.id)) {
            LabState.substances.unshift(item);
          }
        });
      }
    } catch (e) {
      console.warn("Storage load error:", e);
    }
  }

  function loadRxNormMaterialsIntoCatalog() {
    if (!window.TEST_LAB_1000_MALZEME || !Array.isArray(window.TEST_LAB_1000_MALZEME)) return;
    const existingIds = new Set(LabState.substances.map(s => s.id));
    const existingNames = new Set(LabState.substances.map(s => (s.name || '').toLowerCase()));

    window.TEST_LAB_1000_MALZEME.forEach(m => {
      const rxId = 'rxnorm-' + m.rxcui;
      const lowerName = (m.display_name || '').toLowerCase();

      if (!existingIds.has(rxId) && !existingNames.has(lowerName)) {
        const atcCode = (m.atc_codes && m.atc_codes[0]) ? m.atc_codes[0] : ('RxCUI:' + m.rxcui);
        const isLiquid = (m.canonical_name === 'glycerin' || m.canonical_name === 'water');

        LabState.substances.push({
          id: rxId,
          name: m.display_name,
          name_en: m.canonical_name,
          category: 'NLM RxNorm (' + (m.primary_group_code || 'V') + ')',
          chemical_formula: atcCode,
          cas_number: 'RxCUI:' + m.rxcui,
          phase_20c: isLiquid ? 'liquid' : 'solid',
          color_hex: '#06b6d4',
          boiling_point_c: null,
          melting_point_c: null,
          ph: 7.0,
          density_g_ml: isLiquid ? 1.26 : 1.25,
          is_composite: false,
          molecular_weight: null,
          reactivity_tags: ['pharma_api', 'rxnorm', 'atc_' + (m.primary_group_code || 'v').toLowerCase()],
          safety_rating: 1,
          safety_notes: 'NLM RxNorm resmi onaylı etken madde. TTY: ' + m.term_type + '. ATC: ' + (m.atc_codes || []).join(', '),
          alchemical_association: 'NLM RxNorm (' + (m.primary_group_name_tr || 'Etken Madde') + ')',
          description: (m.display_name || '') + ' (' + (m.canonical_name || '') + '). ATC: ' + (m.atc_codes || []).join(', ') + '. RxCUI: ' + m.rxcui,
          aliases: m.aliases || [],
          rxcui: m.rxcui,
          term_type: m.term_type,
          atc_codes: m.atc_codes || [],
          primary_group_code: m.primary_group_code,
          source: 'NLM RxNorm'
        });
        existingIds.add(rxId);
      }
    });
  }

  function saveCustomSubstancesToStorage(item) {
    try {
      let customItems = [];
      const stored = localStorage.getItem("MAGNUM_OPUS_CUSTOM_SUBSTANCES_V3");
      if (stored) customItems = JSON.parse(stored);
      customItems.unshift(item);
      localStorage.setItem("MAGNUM_OPUS_CUSTOM_SUBSTANCES_V3", JSON.stringify(customItems));
    } catch (e) {
      console.warn("Storage save error:", e);
    }
  }

  // --- Event Listeners Setup ---
  function setupEventListeners() {
    // Search Input with Debounce
    let searchDebounceTimer = null;
    dom.substancesSearch?.addEventListener("input", (e) => {
      clearTimeout(searchDebounceTimer);
      searchDebounceTimer = setTimeout(() => {
        LabState.searchQuery = e.target.value.trim().toLowerCase();
        LabState.catalogDisplayLimit = 48; // Reset pagination
        renderSubstancesCatalog();
      }, 150);
    });

    // Category Filter Chips
    if (dom.categoryChips) {
      dom.categoryChips.addEventListener("click", (e) => {
        const btn = e.target.closest(".filter-chip");
        if (!btn) return;
        dom.categoryChips.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
        btn.classList.add("active");
        LabState.activeFilter = btn.dataset.filter || "all";
        LabState.catalogDisplayLimit = 48; // Reset pagination
        renderSubstancesCatalog();
      });
    }

    // Temperature & Time Controls
    dom.vesselTempInput?.addEventListener("input", (e) => {
      const val = parseFloat(e.target.value) || 20;
      LabState.vesselTemp = val;
      if (dom.vesselTempSlider) dom.vesselTempSlider.value = Math.min(1200, val);
      if (dom.paramTempLabel) dom.paramTempLabel.textContent = `${val}°C`;
      updateVesselParamBadges();
    });

    dom.vesselTempSlider?.addEventListener("input", (e) => {
      const val = parseFloat(e.target.value) || 20;
      LabState.vesselTemp = val;
      if (dom.vesselTempInput) dom.vesselTempInput.value = val;
      if (dom.paramTempLabel) dom.paramTempLabel.textContent = `${val}°C`;
      updateVesselParamBadges();
    });

    dom.vesselTimeInput?.addEventListener("input", (e) => {
      const val = parseInt(e.target.value, 10) || 15;
      LabState.vesselTimeMin = val;
      if (dom.vesselTimeSlider) dom.vesselTimeSlider.value = Math.min(120, val);
      if (dom.paramTimeLabel) dom.paramTimeLabel.textContent = `${val} Dk`;
    });

    dom.vesselTimeSlider?.addEventListener("input", (e) => {
      const val = parseInt(e.target.value, 10) || 15;
      LabState.vesselTimeMin = val;
      if (dom.vesselTimeInput) dom.vesselTimeInput.value = val;
      if (dom.paramTimeLabel) dom.paramTimeLabel.textContent = `${val} Dk`;
    });

    // Temperature Presets
    if (dom.tempPresets) {
      dom.tempPresets.addEventListener("click", (e) => {
        const btn = e.target.closest(".temp-preset-btn");
        if (!btn) return;
        const targetTemp = parseFloat(btn.dataset.temp);
        LabState.vesselTemp = targetTemp;
        if (dom.vesselTempInput) dom.vesselTempInput.value = targetTemp;
        if (dom.vesselTempSlider) dom.vesselTempSlider.value = Math.min(1200, targetTemp);
        if (dom.paramTempLabel) dom.paramTempLabel.textContent = `${targetTemp}°C`;
        updateVesselParamBadges();
      });
    }

    // Operational Action Buttons (Chemical Calculator Triggers)
    dom.btnMixReact?.addEventListener("click", () => executeUniversalOperation("MIX"));
    dom.btnHeatBoil?.addEventListener("click", () => executeUniversalOperation("HEAT"));
    dom.btnDistill?.addEventListener("click", () => executeUniversalOperation("DISTILL"));
    dom.btnCalcine?.addEventListener("click", () => executeUniversalOperation("CALCINE"));
    dom.btnFilter?.addEventListener("click", () => executeUniversalOperation("FILTER"));
    dom.btnFerment?.addEventListener("click", () => executeUniversalOperation("FERMENT"));
    dom.btnSpagyric?.addEventListener("click", () => executeUniversalOperation("SPAGYRIC"));

    // Clear Vessel
    dom.btnClearVessel?.addEventListener("click", () => {
      LabState.vessel = [];
      LabState.vesselTemp = 20.0;
      if (dom.vesselTempInput) dom.vesselTempInput.value = 20;
      if (dom.vesselTempSlider) dom.vesselTempSlider.value = 20;
      if (dom.paramTempLabel) dom.paramTempLabel.textContent = "20°C";
      renderVessel();
      renderOpportunitySuggestions();
      if (dom.resultCard) dom.resultCard.style.display = "none";
    });

    // Custom Substance Formulation Builder Modal
    dom.btnOpenCustomModal?.addEventListener("click", () => {
      openCustomSubstanceModal();
    });
    dom.btnCloseCustomModal?.addEventListener("click", () => {
      if (dom.customModal) dom.customModal.style.display = "none";
    });
    dom.btnCancelCustomModal?.addEventListener("click", () => {
      if (dom.customModal) dom.customModal.style.display = "none";
    });
    dom.btnAddIngredientRow?.addEventListener("click", () => {
      addIngredientRow("", 0, "%", "Bileşen");
      recalculateFormulationBalance();
    });
    dom.btnFillRemainingWater?.addEventListener("click", handleFillRemainingWithWater);
    dom.btnSaveCustomSubstance?.addEventListener("click", handleSaveCustomSubstance);
    dom.customTotalAmountInput?.addEventListener("input", recalculateFormulationBalance);
    dom.customTotalUnitSelect?.addEventListener("change", recalculateFormulationBalance);

    // Separation Protocol Trigger from Reaction Vessel
    dom.btnOpenSeparationProtocol?.addEventListener("click", () => {
      openSeparationModalForVessel();
    });

    // Close Separation Modal Handlers
    dom.btnCloseSeparationModal?.addEventListener("click", () => {
      if (dom.separationModal) dom.separationModal.style.display = "none";
    });
    dom.btnFooterCloseSeparationModal?.addEventListener("click", () => {
      if (dom.separationModal) dom.separationModal.style.display = "none";
    });
    dom.separationModal?.addEventListener("click", (e) => {
      if (e.target === dom.separationModal) {
        dom.separationModal.style.display = "none";
      }
    });

    // Preview Separation from Custom Formulation Modal
    dom.btnPreviewCustomSeparation?.addEventListener("click", () => {
      handlePreviewCustomSeparation();
    });

    // Pressure Controls (Antoine Vacuum Distillation)
    dom.labPressureInput?.addEventListener("input", (e) => {
      const val = parseFloat(e.target.value) || 1013.25;
      updateVesselPressure(val);
    });

    dom.labPressureSlider?.addEventListener("input", (e) => {
      const val = parseFloat(e.target.value) || 1013.25;
      updateVesselPressure(val);
    });

    // Pressure Presets
    if (dom.labPressurePresets) {
      dom.labPressurePresets.addEventListener("click", (e) => {
        const btn = e.target.closest(".pressure-preset-btn");
        if (!btn) return;
        const targetP = parseFloat(btn.dataset.pressure);
        updateVesselPressure(targetP);
      });
    }

    // Cheminformatics Modal Openers
    dom.btnOpenCheminfoModal?.addEventListener("click", () => {
      openCheminfoModal("tab-qspr");
    });

    dom.btnExportMolecularFiles?.addEventListener("click", () => {
      openCheminfoModal("tab-export");
    });

    // Cheminformatics Modal Close Handlers
    dom.btnCloseCheminfoModal?.addEventListener("click", () => {
      if (dom.cheminfoModal) dom.cheminfoModal.style.display = "none";
    });
    dom.btnFooterCloseCheminfoModal?.addEventListener("click", () => {
      if (dom.cheminfoModal) dom.cheminfoModal.style.display = "none";
    });
    dom.cheminfoModal?.addEventListener("click", (e) => {
      if (e.target === dom.cheminfoModal) {
        dom.cheminfoModal.style.display = "none";
      }
    });

    // Cheminformatics Modal Navigation Tabs
    if (dom.cheminfoTabsNav) {
      dom.cheminfoTabsNav.addEventListener("click", (e) => {
        const btn = e.target.closest(".cheminfo-tab-btn");
        if (!btn) return;
        const targetTab = btn.dataset.tab;
        dom.cheminfoTabsNav.querySelectorAll(".cheminfo-tab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        LabState.activeCheminfoTab = targetTab;
        renderCheminfoModalContent();
      });
    }

    // Guided Engineering Wizard Openers & Handlers
    dom.btnOpenWizardModal?.addEventListener("click", () => {
      openWizardModal("soap");
    });
    dom.btnCloseWizardModal?.addEventListener("click", () => {
      if (dom.wizardModal) dom.wizardModal.style.display = "none";
    });
    dom.btnFooterCloseWizardModal?.addEventListener("click", () => {
      if (dom.wizardModal) dom.wizardModal.style.display = "none";
    });
    dom.wizardModal?.addEventListener("click", (e) => {
      if (e.target === dom.wizardModal) dom.wizardModal.style.display = "none";
    });

    if (dom.wizardTabsNav) {
      dom.wizardTabsNav.addEventListener("click", (e) => {
        const btn = e.target.closest(".cheminfo-tab-btn");
        if (!btn) return;
        const targetWizardTab = btn.dataset.wizardTab;
        dom.wizardTabsNav.querySelectorAll(".cheminfo-tab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        LabState.activeWizardTab = targetWizardTab;
        renderWizardModalContent();
      });
    }

    // Everyday Chemistry Dictionary Openers & Handlers
    dom.btnOpenDictModal?.addEventListener("click", () => {
      openDictionaryModal();
    });
    dom.btnCloseDictModal?.addEventListener("click", () => {
      if (dom.dictModal) dom.dictModal.style.display = "none";
    });
    dom.btnFooterCloseDictModal?.addEventListener("click", () => {
      if (dom.dictModal) dom.dictModal.style.display = "none";
    });
    dom.dictModal?.addEventListener("click", (e) => {
      if (e.target === dom.dictModal) dom.dictModal.style.display = "none";
    });
    dom.dictSearchInput?.addEventListener("input", (e) => {
      renderDictionaryModalContent(e.target.value);
    });
  }

  // --- Rendering: Substances Catalog (Virtualized / Paginated) ---
  function renderSubstancesCatalog() {
    if (!dom.substancesContainer) return;

    if (dom.inventoryCount) {
      dom.inventoryCount.textContent = `${LabState.substances.length}+ Madde`;
    }

    const q = LabState.searchQuery;
    const filter = LabState.activeFilter;

    const filtered = LabState.substances.filter(sub => {
      if (filter !== "all" && sub.category !== filter) return false;
      if (!q) return true;

      const searchBlob = [
        sub.name,
        sub.name_en || "",
        sub.chemical_formula || "",
        sub.cas_number || "",
        sub.category || "",
        sub.alchemical_association || "",
        ...(sub.reactivity_tags || []),
        ...(sub.composite_components ? sub.composite_components.map(c => c.name + " " + (c.formula || "")) : [])
      ].join(" ").toLowerCase();

      return searchBlob.includes(q);
    });

    dom.substancesContainer.innerHTML = "";

    if (filtered.length === 0) {
      dom.substancesContainer.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 2.5rem; color: var(--text-muted);">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">🔍</div>
          <h4>Aradığınız kritere uygun madde bulunamadı.</h4>
          <p style="font-size: 0.85rem; margin-top: 0.4rem;">
            Dilerseniz <strong>"+ Kendi Maddeni / Kozmetiğini Ekle"</strong> butonundan dilediğiniz formülasyonu bileşenleriyle tanımlayabilirsiniz.
          </p>
        </div>
      `;
      return;
    }

    const limit = LabState.catalogDisplayLimit;
    const itemsToRender = filtered.slice(0, limit);

    itemsToRender.forEach(sub => {
      const card = document.createElement("div");
      card.className = "lab-substance-card";

      const badgeColor = sub.color_hex || "#94a3b8";

      // Safety badge
      let hazardBadge = "";
      if (sub.safety_rating >= 3) {
        hazardBadge = `<span class="lab-hazard-badge hazard-3" title="Yüksek Tehlike / Korozif / Patlayıcı">⚠️ Tehlike ${sub.safety_rating}</span>`;
      } else if (sub.safety_rating === 2) {
        hazardBadge = `<span class="lab-hazard-badge hazard-2" title="Dikkat / Reaktif">⚡ Seviye 2</span>`;
      } else if (sub.safety_rating === 1) {
        hazardBadge = `<span class="lab-hazard-badge hazard-1" title="Hafif / Dikkat">ℹ️ Seviye 1</span>`;
      }

      // Check if custom formulation
      const isCustomBadge = sub.is_custom ? `<span class="badge badge-gold" style="font-size: 0.65rem;">Özel Formülasyon</span>` : "";

      card.innerHTML = `
        <div class="lab-sub-header">
          <div class="lab-sub-color-indicator" style="background-color: ${badgeColor};"></div>
          <div style="flex: 1; min-width: 0;">
            <div class="lab-sub-name-row">
              <h4 class="lab-sub-name" title="${sub.name}">${sub.name}</h4>
              ${hazardBadge}
              ${isCustomBadge}
            </div>
            <div class="lab-sub-formula">${sub.chemical_formula || "Karışım"}</div>
          </div>
        </div>

        <div class="lab-sub-meta">
          <span>📂 ${sub.category}</span>
          <span>🌡️ ${sub.boiling_point_c ? sub.boiling_point_c + '°C K.' : (sub.melting_point_c ? sub.melting_point_c + '°C E.' : (sub.phase_20c === 'gas' ? 'Gaz' : 'Katı'))}</span>
          <span>⚖️ pH: ${sub.ph !== null ? sub.ph : '7.0'}</span>
        </div>

        <p class="lab-sub-desc">${sub.description || sub.alchemical_association || ""}</p>

        <div class="lab-sub-add-row">
          <select class="lab-amount-select">
            ${sub.phase_20c === 'liquid' ? `
              <option value="25">25 mL</option>
              <option value="50">50 mL</option>
              <option value="100" selected>100 mL</option>
              <option value="250">250 mL</option>
            ` : `
              <option value="5">5 g</option>
              <option value="10">10 g</option>
              <option value="25" selected>25 g</option>
              <option value="50">50 g</option>
              <option value="100">100 g</option>
            `}
          </select>
          <button class="btn btn-gold btn-add-to-vessel" data-sub-id="${sub.id}">
            ➕ Behere Ekle
          </button>
        </div>
      `;

      const addBtn = card.querySelector(".btn-add-to-vessel");
      const select = card.querySelector(".lab-amount-select");

      addBtn.addEventListener("click", () => {
        const amount = parseFloat(select.value) || 25;
        const unit = sub.phase_20c === "liquid" ? "mL" : "g";
        addToVessel(sub.id, amount, unit);
      });

      dom.substancesContainer.appendChild(card);
    });

    // If more results exist, append Load More button
    if (filtered.length > limit) {
      const loadMoreContainer = document.createElement("div");
      loadMoreContainer.className = "lab-load-more-container";
      loadMoreContainer.innerHTML = `
        <button class="lab-load-more-btn">
          Daha Fazla Göster (+48 Madde) — Toplam ${filtered.length} Madde Eşleşti
        </button>
      `;
      loadMoreContainer.querySelector(".lab-load-more-btn").addEventListener("click", () => {
        LabState.catalogDisplayLimit += 48;
        renderSubstancesCatalog();
      });
      dom.substancesContainer.appendChild(loadMoreContainer);
    }
  }

  // --- Vessel State & Manipulation ---
  function addToVessel(subId, amount, unit, customLabel) {
    const existing = LabState.vessel.find(item => item.subId === subId && (!customLabel || item.customLabel === customLabel));
    if (existing) {
      existing.amount += amount;
    } else {
      LabState.vessel.push({ subId, amount, unit, customLabel });
    }
    renderVessel();
    renderOpportunitySuggestions();
  }

  function removeFromVessel(idx) {
    LabState.vessel.splice(idx, 1);
    renderVessel();
    renderOpportunitySuggestions();
  }

  function renderVessel() {
    if (!dom.vesselList) return;

    dom.vesselList.innerHTML = "";

    if (LabState.vessel.length === 0) {
      if (dom.vesselEmptyMsg) dom.vesselEmptyMsg.style.display = "block";
      if (dom.vesselSeparationBanner) dom.vesselSeparationBanner.style.display = "none";
      updateVesselParamBadges();
      return;
    }

    if (dom.vesselEmptyMsg) dom.vesselEmptyMsg.style.display = "none";

    // Determine if contents can be separated (>= 2 items or composite substance)
    let isSeparable = false;
    if (LabState.vessel.length >= 2) {
      isSeparable = true;
    } else if (LabState.vessel.length === 1) {
      const sub = LabState.substances.find(s => s.id === LabState.vessel[0].subId);
      if (sub && (sub.is_composite || (sub.composite_components && sub.composite_components.length >= 2))) {
        isSeparable = true;
      }
    }
    if (dom.vesselSeparationBanner) {
      dom.vesselSeparationBanner.style.display = isSeparable ? "block" : "none";
    }

    LabState.vessel.forEach((item, idx) => {
      const sub = LabState.substances.find(s => s.id === item.subId) || {
        name: item.customLabel || "Bilinmeyen Bileşen",
        chemical_formula: "",
        color_hex: "#94a3b8"
      };

      const row = document.createElement("div");
      row.className = "lab-vessel-item";

      row.innerHTML = `
        <div class="lab-vessel-item-info">
          <div class="lab-sub-color-indicator" style="background-color: ${sub.color_hex || '#94a3b8'};"></div>
          <div>
            <strong>${item.customLabel || sub.name}</strong>
            <small style="display: block; font-family: var(--font-mono); font-size: 0.72rem; color: var(--gold-light);">
              ${sub.chemical_formula || ""}
            </small>
          </div>
        </div>
        <div class="lab-vessel-item-actions">
          <span class="vessel-item-qty">${item.amount} ${item.unit}</span>
          <button class="vessel-btn-remove" title="Beherden Çıkar">✕</button>
        </div>
      `;

      row.querySelector(".vessel-btn-remove").addEventListener("click", () => removeFromVessel(idx));
      dom.vesselList.appendChild(row);
    });

    updateVesselParamBadges();
  }

  function updateVesselPressure(p) {
    p = Math.max(1, Math.min(5000, p));
    LabState.vesselPressureMbar = p;
    if (dom.labPressureInput) dom.labPressureInput.value = Math.round(p);
    if (dom.labPressureSlider) dom.labPressureSlider.value = Math.min(1013, Math.max(10, Math.round(p)));

    const atmVal = (p / 1013.25).toFixed(2);
    if (dom.paramPressureLabel) {
      dom.paramPressureLabel.textContent = `${Math.round(p)} mbar (${atmVal} atm)`;
    }

    if (dom.vesselVacuumBadge) {
      if (p <= 25) {
        dom.vesselVacuumBadge.textContent = "Rotavap Vakumu (20 mbar)";
        dom.vesselVacuumBadge.className = "badge badge-purple";
      } else if (p <= 150) {
        dom.vesselVacuumBadge.textContent = "Yüksek Vakum";
        dom.vesselVacuumBadge.className = "badge badge-teal";
      } else if (p <= 600) {
        dom.vesselVacuumBadge.textContent = "Orta Vakum";
        dom.vesselVacuumBadge.className = "badge badge-cyan";
      } else {
        dom.vesselVacuumBadge.textContent = "Normal Atmosfer";
        dom.vesselVacuumBadge.className = "badge badge-outline";
      }
    }

    if (dom.labPressurePresets) {
      dom.labPressurePresets.querySelectorAll(".pressure-preset-btn").forEach(btn => {
        const bP = parseFloat(btn.dataset.pressure);
        if (Math.abs(bP - p) < 5) {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      });
    }

    updateVesselParamBadges();

    // If modal is active, update modal tabs live
    if (dom.cheminfoModal && dom.cheminfoModal.style.display !== "none") {
      renderCheminfoModalContent();
    }
  }

  function updateVesselParamBadges() {
    if (LabState.vessel.length === 0) {
      if (dom.vesselMassBadge) dom.vesselMassBadge.textContent = "0 g";
      if (dom.vesselPhBadge) dom.vesselPhBadge.textContent = "pH: 7.0";
      if (dom.vesselTempBadge) {
        dom.vesselTempBadge.textContent = `${LabState.vesselTemp}°C`;
        dom.vesselTempBadge.title = "Reaksiyon Kabı Sıcaklığı";
      }
      return;
    }

    let totalMassG = 0;
    let weightedPh = 7.0;

    LabState.vessel.forEach(item => {
      const sub = LabState.substances.find(s => s.id === item.subId);
      const density = sub?.density_g_ml || 1.0;
      let mass = item.amount;
      if (item.unit === "mL" || item.unit === "ml") mass = mass * density;
      else if (item.unit === "kg" || item.unit === "L") mass = mass * 1000;
      totalMassG += mass;
    });

    if (dom.vesselMassBadge) dom.vesselMassBadge.textContent = `${Math.round(totalMassG * 10) / 10} g`;
    if (dom.vesselTempBadge) dom.vesselTempBadge.textContent = `${LabState.vesselTemp}°C`;

    // Dynamic Antoine Vacuum Boiling Point Feedback on Temperature Badge
    if (window.LabCheminformatics && LabState.vesselPressureMbar < 1000) {
      const p = LabState.vesselPressureMbar;
      let minBp = 9999;
      let minBpName = "";
      LabState.vessel.forEach(item => {
        const s = LabState.substances.find(x => x.id === item.subId);
        if (s && s.boiling_point_c && s.boiling_point_c < 250) {
          const fKey = (s.chemical_formula || "").toLowerCase().replace(/[^a-z0-9_]/g, "");
          const dyn = window.LabCheminformatics.calculateBoilingPointAtPressure(fKey, p, s.boiling_point_c);
          if (dyn && dyn.boilingPointC < minBp) {
            minBp = dyn.boilingPointC;
            minBpName = s.name;
          }
        }
      });
      if (minBp < 9000 && dom.vesselTempBadge) {
        dom.vesselTempBadge.title = `Vakum Eşiği: ${minBpName} ~${minBp.toFixed(1)}°C (${Math.round(p)} mbar)`;
      }
    }

    // Estimate pH using species pool if LabCalculator is ready
    if (window.LabCalculator) {
      const resolved = window.LabCalculator.resolveVesselSpecies(LabState.vessel, LabState.substances);
      let acidMoles = 0;
      let baseMoles = 0;
      resolved.speciesPool.forEach(sp => {
        if (sp.ph < 5.0) acidMoles += sp.moles;
        if (sp.ph > 9.0) baseMoles += sp.moles;
      });
      if (acidMoles > baseMoles) weightedPh = 2.5;
      else if (baseMoles > acidMoles) weightedPh = 12.0;
      else weightedPh = 7.0;
    }

    if (dom.vesselPhBadge) dom.vesselPhBadge.textContent = `pH: ${weightedPh.toFixed(1)}`;
  }

  // =========================================================================
  // UNIVERSAL OPERATION DISPATCHER (CALCULATOR ENGINE EXECUTION)
  // =========================================================================
  function executeUniversalOperation(opType, customTitle) {
    if (LabState.vessel.length === 0) {
      alert("Reaksiyon kabı boş! Lütfen önce sol panelden en az bir madde ekleyiniz.");
      return;
    }

    if (!window.LabCalculator) {
      alert("Hata: LabCalculator kütüphanesi henüz yüklenmedi!");
      return;
    }

    const temp = LabState.vesselTemp;
    const timeMin = LabState.vesselTimeMin;
    const pressure = LabState.vesselPressureMbar || 1013.25;

    // Run the true physical & mathematical chemical calculation
    const report = window.LabCalculator.calculateChemicalReaction(
      opType,
      LabState.vessel,
      temp,
      timeMin,
      LabState.substances,
      pressure
    );

    // Apply temperature updates if exothermic/endothermic
    if (report.tempChange !== 0) {
      LabState.vesselTemp = report.newTemp;
      if (dom.vesselTempInput) dom.vesselTempInput.value = report.newTemp;
      if (dom.vesselTempSlider) dom.vesselTempSlider.value = Math.min(1200, report.newTemp);
      if (dom.paramTempLabel) dom.paramTempLabel.textContent = `${report.newTemp}°C`;
      updateVesselParamBadges();
    }

    // Record in History Log
    const currentSubNames = LabState.vessel.map(i => i.customLabel || (LabState.substances.find(s => s.id === i.subId)?.name || i.subId));
    LabState.history.unshift({
      timestamp: new Date().toLocaleTimeString(),
      opType: opType,
      temp: temp,
      timeMin: timeMin,
      substances: currentSubNames,
      report: report
    });

    // Render results
    renderReactionResult(report);
    renderHistory();
    renderOpportunitySuggestions();
  }

  // --- Render Reaction Result Report ---
  function renderReactionResult(report) {
    if (!dom.resultCard || !dom.resultTitle || !dom.resultBody) return;

    dom.resultCard.style.display = "block";
    dom.resultTitle.textContent = report.title;

    // Badges row
    let badgesRow = `
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 0.75rem;">
        <span class="vessel-badge" style="background: rgba(212,175,55,0.15); border-color: var(--gold-main);">
          🌡️ İşlem: ${report.temp}°C (${report.timeMin} dk)
        </span>
        ${report.tempChange !== 0 ? `
          <span class="vessel-badge" style="background: rgba(239,68,68,0.2); border-color: #ef4444; color: #fca5a5;">
            🔥 ΔT: ${report.tempChange > 0 ? '+' : ''}${report.tempChange}°C (Ekzotermik)
          </span>
        ` : ''}
        ${report.evaporationReport ? `
          <span class="vessel-badge" style="background: rgba(56,189,248,0.15); border-color: #38bdf8;">
            💧 Kütle: ${report.evaporationReport.initialMassG}g ➔ ${report.evaporationReport.remainingMassG}g
          </span>
        ` : ''}
        ${report.acidBaseReport ? `
          <span class="vessel-badge" style="background: rgba(168,85,247,0.15); border-color: #a855f7;">
            ⚖️ Sonuç pH: ${report.acidBaseReport.finalPh}
          </span>
        ` : ''}
      </div>
    `;

    // Products Grid
    let productsHtml = "";
    if (report.products && report.products.length > 0) {
      productsHtml = `
        <div class="lab-result-section">
          <h5>⚗️ Elde Edilen Ürünler & Kalan Kalıntı:</h5>
          <div class="lab-products-grid">
            ${report.products.map(p => `
              <div class="lab-product-item">
                <div class="lab-sub-color-indicator" style="background-color: ${p.color_hex || '#d4af37'};"></div>
                <div>
                  <strong>${p.name}</strong>
                  <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--gold-light);">${p.formula || ''}</div>
                  <div style="font-size: 0.72rem; color: var(--text-muted);">
                    Faz: ${p.phase} | Miktar: ${p.massG ? p.massG + ' g' : '%~' + (p.yield_pct || 100)}
                  </div>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      `;
    }

    // Gases Evolved
    let gasesHtml = "";
    if (report.gases && report.gases.length > 0) {
      gasesHtml = `
        <div class="lab-result-section">
          <h5>💨 Açığa Çıkan Gazlar & Buharlar:</h5>
          <div class="lab-gases-list">
            ${report.gases.map(g => `<span class="lab-gas-pill">${g}</span>`).join("")}
          </div>
        </div>
      `;
    }

    // Hazards Alert
    let hazardHtml = "";
    if (report.safetyHazards && report.safetyHazards.length > 0) {
      hazardHtml = report.safetyHazards.map(h => `
        <div class="lab-safety-alert" style="margin-bottom: 0.75rem;">
          ${h}
        </div>
      `).join("");
    }

    // Precipitations
    let precipHtml = "";
    if (report.precipitations && report.precipitations.length > 0) {
      precipHtml = `
        <div class="lab-result-section">
          <h5>💎 Oluşan Çökeltiler (Presipitasyon):</h5>
          ${report.precipitations.map(pr => `
            <div style="font-size: 0.8rem; color: var(--teal-light); margin-bottom: 0.25rem;">
              • <strong>${pr.name}</strong> (${pr.type}): ${pr.note}
            </div>
          `).join("")}
        </div>
      `;
    }

    // Transfer Residue to Vessel Action Button
    let transferBtnHtml = "";
    if (report.canTransferResidue && report.transferPayload) {
      transferBtnHtml = `
        <button id="btn-transfer-residue-to-vessel" class="btn-transfer-residue">
          ⚗️ Dönüşen Ürünü / Kalan Kalıntıyı Kazana Aktar (Yeni Başlangıç Maddesi Yap)
        </button>
      `;
    }

    dom.resultBody.innerHTML = `
      ${hazardHtml}
      ${badgesRow}
      <p class="lab-result-desc">${report.description}</p>
      ${productsHtml}
      ${gasesHtml}
      ${precipHtml}
      ${transferBtnHtml}
      <div class="lab-alchemical-box">
        <strong>🔮 Hermetik & Simyasal İlke:</strong>
        <p>${report.alchemicalNote || "Maddenin cevheri yeni bir titreşim oktavına mühürlendi."}</p>
      </div>
    `;

    // Attach Transfer Button Listener
    const transferBtn = dom.resultBody.querySelector("#btn-transfer-residue-to-vessel");
    if (transferBtn && report.transferPayload) {
      transferBtn.addEventListener("click", () => {
        handleTransferResidue(report.transferPayload);
      });
    }

    dom.resultCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  // --- Residue Transfer Handler (Enables Step-by-Step Chained Experiments) ---
  function handleTransferResidue(payload) {
    const syntheticId = "residue-" + Date.now();
    const residueSubstance = {
      id: syntheticId,
      name: payload.name,
      name_en: payload.name,
      category: "Dönüşmüş Kalıntı",
      chemical_formula: payload.formula,
      cas_number: "Reaksiyon Kalıntısı",
      phase_20c: payload.phase || "solid",
      color_hex: payload.color_hex || "#451a03",
      boiling_point_c: 250.0,
      melting_point_c: 50.0,
      decomposition_temp_c: 180.0,
      ph: 3.5,
      density_g_ml: 1.35,
      is_composite: false,
      is_custom: true,
      reactivity_tags: payload.tags || ["caramel_residue", "concentrated_solutes"],
      safety_rating: 1,
      safety_notes: "Önceki reaksiyon adımında elde edilen yoğunlaşmış kalıntı.",
      alchemical_association: "Caput Mortuum / Terra Damnata (Sabit Beden)",
      description: `Önceki deney adımında elde edilmiş konsantre reaksiyon kalıntısı (${payload.name}).`
    };

    LabState.substances.unshift(residueSubstance);
    LabState.vessel = [
      {
        subId: syntheticId,
        amount: payload.amount,
        unit: payload.unit || "g",
        customLabel: payload.name
      }
    ];

    renderVessel();
    renderSubstancesCatalog();
    renderOpportunitySuggestions();

    alert(`✅ "${payload.name}" (${payload.amount} ${payload.unit}) reaksiyon kabına aktarıldı!\nŞimdi sol panelden yeni bir malzeme (örn: Potasyum) ekleyip bir sonraki adımı test edebilirsiniz.`);
  }

  // --- Opportunity Suggester ---
  function renderOpportunitySuggestions() {
    if (!dom.suggestionsContainer) return;
    dom.suggestionsContainer.innerHTML = "";

    const reactions = window.LAB_REACTIONS_DATA || [];
    const currentSubIds = new Set(LabState.vessel.map(i => i.subId));
    const suggestions = [];

    reactions.forEach(rxn => {
      const hasAll = rxn.required_substances.every(id => currentSubIds.has(id));
      const hasSome = rxn.required_substances.some(id => currentSubIds.has(id));

      if (hasAll && currentSubIds.size > 0) {
        suggestions.unshift({
          rxn,
          status: "ready",
          badge: "⚡ Anında Uygulanabilir",
          badgeClass: "badge-gold"
        });
      } else if (hasSome) {
        const missing = rxn.required_substances.filter(id => !currentSubIds.has(id));
        const missingNames = missing.map(id => {
          const s = LabState.substances.find(sub => sub.id === id);
          return s ? s.name : id;
        });
        suggestions.push({
          rxn,
          status: "partial",
          missingNames,
          badge: "Eksik Malzeme Var",
          badgeClass: "badge-outline"
        });
      }
    });

    if (suggestions.length === 0) {
      dom.suggestionsContainer.innerHTML = `
        <div style="font-size: 0.8rem; color: var(--text-muted); text-align: center; padding: 1.5rem;">
          Behere malzeme ekledikçe tarihsel ve kimyasal dönüşüm fırsatları burada belirecektir.
        </div>
      `;
      return;
    }

    suggestions.slice(0, 5).forEach(sug => {
      const item = document.createElement("div");
      item.className = "lab-suggestion-card";

      let actionHint = "";
      if (sug.status === "ready") {
        actionHint = `<div style="font-size: 0.75rem; color: var(--teal-light); margin-top: 0.35rem;">👉 Önerilen İşlem: <strong>${sug.rxn.trigger_op || 'Reaksiyonu Başlat'}</strong></div>`;
      } else {
        actionHint = `<div style="font-size: 0.72rem; color: var(--gold-light); margin-top: 0.35rem;">Eksikler: ${sug.missingNames.join(", ")}</div>`;
      }

      item.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.25rem;">
          <strong style="color: #fff; font-size: 0.82rem;">${sug.rxn.title}</strong>
          <span class="badge ${sug.badgeClass}" style="font-size: 0.65rem;">${sug.badge}</span>
        </div>
        <p style="font-size: 0.75rem; color: var(--text-dim); margin: 0;">${sug.rxn.description}</p>
        ${actionHint}
      `;

      dom.suggestionsContainer.appendChild(item);
    });
  }

  // --- History Log ---
  function renderHistory() {
    if (!dom.historyContainer) return;
    dom.historyContainer.innerHTML = "";

    if (LabState.history.length === 0) {
      dom.historyContainer.innerHTML = `
        <div style="font-size: 0.8rem; color: var(--text-muted); text-align: center; padding: 1.5rem;">
          Henüz bir işlem gerçekleştirilmedi.
        </div>
      `;
      return;
    }

    LabState.history.slice(0, 10).forEach((step, idx) => {
      const item = document.createElement("div");
      item.className = "lab-history-item";

      item.innerHTML = `
        <div style="display: flex; justify-content: space-between; font-size: 0.78rem; color: var(--gold-light);">
          <span>#${LabState.history.length - idx} • [${step.opType}] @ ${step.temp}°C (${step.timeMin} dk)</span>
          <span>${step.timestamp}</span>
        </div>
        <div style="font-size: 0.82rem; font-weight: 600; color: #fff; margin: 0.2rem 0;">
          ${step.report.title}
        </div>
        <div style="font-size: 0.75rem; color: var(--text-muted);">
          Girdiler: ${step.substances.join(" + ")}
        </div>
      `;

      dom.historyContainer.appendChild(item);
    });
  }

  // =========================================================================
  // DYNAMIC CUSTOM SUBSTANCE & MULTI-ROW FORMULATION BUILDER
  // =========================================================================
  function openCustomSubstanceModal() {
    if (!dom.customModal) return;
    dom.customModal.style.display = "flex";

    // Initialize with 2 default rows if empty
    if (!dom.customIngredientsContainer || dom.customIngredientsContainer.children.length === 0) {
      if (dom.customIngredientsContainer) dom.customIngredientsContainer.innerHTML = "";
      addIngredientRow("Su (H2O)", 75, "%", "Taşıyıcı Çözücü");
      addIngredientRow("Gliserin", 10, "%", "Nemlendirici");
      addIngredientRow("Sodyum Klorür (NaCl)", 2.5, "%", "Kıvam Verici");
    }

    recalculateFormulationBalance();
  }

  function addIngredientRow(defaultName = "", defaultVal = 0, defaultUnit = "%", defaultRole = "Bileşen") {
    if (!dom.customIngredientsContainer) return;

    const row = document.createElement("div");
    row.className = "custom-ingredient-row";

    row.innerHTML = `
      <input type="text" class="search-input ing-name" list="lab-substances-datalist" value="${defaultName}" placeholder="Madde/Formül (örn: H2O, NaOH)..." style="font-size: 0.82rem; padding: 0.35rem 0.6rem;">
      <input type="number" class="search-input ing-val" value="${defaultVal}" min="0" step="any" style="font-size: 0.82rem; padding: 0.35rem 0.5rem;">
      <select class="filter-select ing-unit" style="font-size: 0.78rem; padding: 0.35rem 0.4rem;">
        <option value="%" ${defaultUnit === '%' ? 'selected' : ''}>% (w/w)</option>
        <option value="g" ${defaultUnit === 'g' ? 'selected' : ''}>Gram (g)</option>
        <option value="mL" ${defaultUnit === 'mL' ? 'selected' : ''}>mL</option>
      </select>
      <div class="ingredient-computed-badge ing-computed">%0.0 (0g)</div>
      <button type="button" class="btn-remove-ingredient" title="Satırı Sil">✕</button>
    `;

    // Listeners for live recalculation
    row.querySelector(".ing-name").addEventListener("input", recalculateFormulationBalance);
    row.querySelector(".ing-val").addEventListener("input", recalculateFormulationBalance);
    row.querySelector(".ing-unit").addEventListener("change", recalculateFormulationBalance);
    row.querySelector(".btn-remove-ingredient").addEventListener("click", () => {
      row.remove();
      recalculateFormulationBalance();
    });

    dom.customIngredientsContainer.appendChild(row);
  }

  function recalculateFormulationBalance() {
    if (!dom.customIngredientsContainer) return;

    const totalProductAmount = parseFloat(dom.customTotalAmountInput?.value) || 100;
    const totalProductUnit = dom.customTotalUnitSelect?.value || "mL";

    const rows = dom.customIngredientsContainer.querySelectorAll(".custom-ingredient-row");
    let totalPct = 0;

    // First pass: sum percentages and convert absolute amounts
    rows.forEach(row => {
      const val = parseFloat(row.querySelector(".ing-val").value) || 0;
      const unit = row.querySelector(".ing-unit").value;

      let pct = 0;
      let massG = 0;

      if (unit === "%") {
        pct = val;
        massG = (val / 100) * totalProductAmount;
      } else {
        // Gram or mL
        massG = val;
        pct = totalProductAmount > 0 ? (val / totalProductAmount) * 100 : 0;
      }

      totalPct += pct;
      const badge = row.querySelector(".ing-computed");
      if (badge) {
        badge.textContent = `%${pct.toFixed(1)} (${massG.toFixed(1)}g)`;
      }
    });

    // Update Progress Bar & Badges
    const clampedWidth = Math.min(100, Math.max(0, totalPct));
    if (dom.formulationBalanceBar) {
      dom.formulationBalanceBar.style.width = `${clampedWidth}%`;
      if (Math.abs(totalPct - 100) < 0.2) {
        dom.formulationBalanceBar.style.background = "#10b981"; // Emerald Green
      } else if (totalPct > 100) {
        dom.formulationBalanceBar.style.background = "#ef4444"; // Red Overload
      } else {
        dom.formulationBalanceBar.style.background = "var(--gold-main)"; // Gold
      }
    }

    if (dom.formulationBalancePercent) {
      dom.formulationBalancePercent.textContent = `%${totalPct.toFixed(1)} / %100`;
    }

    if (dom.formulationBalanceBadge) {
      dom.formulationBalanceBadge.textContent = `Toplam: %${totalPct.toFixed(1)}`;
      if (Math.abs(totalPct - 100) < 0.2) {
        dom.formulationBalanceBadge.className = "badge badge-teal";
      } else if (totalPct > 100) {
        dom.formulationBalanceBadge.className = "badge badge-red";
      } else {
        dom.formulationBalanceBadge.className = "badge badge-gold";
      }
    }
  }

  function handleFillRemainingWithWater() {
    if (!dom.customIngredientsContainer) return;

    recalculateFormulationBalance();

    const totalProductAmount = parseFloat(dom.customTotalAmountInput?.value) || 100;
    const rows = dom.customIngredientsContainer.querySelectorAll(".custom-ingredient-row");
    let currentPct = 0;

    let waterRow = null;

    rows.forEach(row => {
      const name = row.querySelector(".ing-name").value.trim().toLowerCase();
      const val = parseFloat(row.querySelector(".ing-val").value) || 0;
      const unit = row.querySelector(".ing-unit").value;

      let pct = unit === "%" ? val : (totalProductAmount > 0 ? (val / totalProductAmount) * 100 : 0);
      currentPct += pct;

      if (name.includes("su") || name.includes("h2o") || name.includes("aqua")) {
        waterRow = row;
      }
    });

    const diff = 100 - currentPct;

    if (diff <= 0) {
      alert("Formülasyon zaten %100 veya üzerindedir!");
      return;
    }

    if (waterRow) {
      const unit = waterRow.querySelector(".ing-unit").value;
      const currentVal = parseFloat(waterRow.querySelector(".ing-val").value) || 0;
      if (unit === "%") {
        waterRow.querySelector(".ing-val").value = (currentVal + diff).toFixed(1);
      } else {
        const addedMass = (diff / 100) * totalProductAmount;
        waterRow.querySelector(".ing-val").value = (currentVal + addedMass).toFixed(1);
      }
    } else {
      addIngredientRow("Su (H2O)", parseFloat(diff.toFixed(1)), "%", "Taşıyıcı Çözücü");
    }

    recalculateFormulationBalance();
  }

  function handleSaveCustomSubstance() {
    const name = dom.customNameInput?.value.trim();
    if (!name) {
      alert("Lütfen ürün veya formülasyon ismi giriniz!");
      return;
    }

    const totalAmount = parseFloat(dom.customTotalAmountInput?.value) || 100;
    const totalUnit = dom.customTotalUnitSelect?.value || "mL";
    const category = dom.customCategorySelect?.value || "Gündelik & Ev Ürünü";
    const phase = dom.customPhaseSelect?.value || "liquid";
    const desc = dom.customDescInput?.value.trim() || `Kullanıcı tanımlı ${totalAmount}${totalUnit} formülasyon.`;

    const rows = dom.customIngredientsContainer?.querySelectorAll(".custom-ingredient-row") || [];
    if (rows.length === 0) {
      alert("Lütfen en az bir etken madde veya bileşen satırı ekleyiniz!");
      return;
    }

    const components = [];
    let totalPct = 0;

    rows.forEach(row => {
      const ingName = row.querySelector(".ing-name").value.trim();
      const val = parseFloat(row.querySelector(".ing-val").value) || 0;
      const unit = row.querySelector(".ing-unit").value;

      if (ingName && val > 0) {
        let pct = unit === "%" ? val : (totalAmount > 0 ? (val / totalAmount) * 100 : 0);
        pct = Math.round(pct * 100) / 100;
        totalPct += pct;

        // Find substance in catalog to inherit exact physical constants
        const matchedSub = LabState.substances.find(s => 
          s.name.toLowerCase() === ingName.toLowerCase() ||
          s.name.toLowerCase().includes(ingName.toLowerCase()) || 
          (s.name_en && s.name_en.toLowerCase().includes(ingName.toLowerCase())) ||
          (s.chemical_formula && s.chemical_formula.toLowerCase() === ingName.toLowerCase())
        );

        let bp = matchedSub ? matchedSub.boiling_point_c : (phase === 'liquid' ? 100.0 : 250.0);
        let mp = matchedSub ? matchedSub.melting_point_c : 0.0;
        let mw = matchedSub ? (matchedSub.mw || 100.0) : 100.0;
        let cPhase = matchedSub ? matchedSub.phase_20c : (phase || "liquid");

        // Parse formula and determine MW if not matched
        if (!matchedSub && window.LabCalculator) {
          const parsed = window.LabCalculator.parseChemicalFormula(ingName);
          if (parsed && parsed.mw) mw = parsed.mw;
        }

        const lower = ingName.toLowerCase();
        if (lower.includes("mupirosin")) {
          bp = 105.0; mp = 77.5; mw = 500.6;
        } else if (lower.includes("peg") || lower.includes("polietilen glikol")) {
          bp = 250.0; mp = 5.0; mw = 400.0;
        } else if (lower.includes("su") || lower.includes("h2o") || lower.includes("aqua")) {
          bp = 100.0; mp = 0.0; mw = 18.0;
        } else if (lower.includes("alkol") || lower.includes("etanol")) {
          bp = 78.4; mp = -114.0; mw = 46.07;
        }

        components.push({
          name: ingName,
          formula: matchedSub ? matchedSub.chemical_formula : ingName,
          pct: pct,
          massG: Math.round(((pct / 100) * totalAmount) * 100) / 100,
          mw: mw,
          bp: bp,
          mp: mp,
          phase: cPhase,
          role: "Aktif Bileşen"
        });
      }
    });

    if (components.length === 0) {
      alert("Lütfen geçerli miktara sahip en az bir bileşen giriniz!");
      return;
    }

    const id = "custom-" + Date.now();
    const formulaSummary = components.slice(0, 3).map(c => `${c.name} (%${c.pct})`).join(" + ");

    const customSub = {
      id: id,
      name: name,
      name_en: name + " (Custom Formula)",
      category: category,
      chemical_formula: `Formülasyon: ${formulaSummary}${components.length > 3 ? '...' : ''}`,
      cas_number: "Kullanıcı Formülasyonu",
      phase_20c: phase,
      color_hex: phase === "liquid" ? "#06b6d4" : "#ec4899",
      boiling_point_c: phase === "liquid" ? 101.5 : 250.0,
      melting_point_c: phase === "liquid" ? -1.0 : 45.0,
      decomposition_temp_c: 190.0,
      ph: 6.5,
      density_g_ml: phase === "liquid" ? 1.02 : 1.20,
      is_composite: true,
      is_custom: true,
      total_batch_amount: totalAmount,
      total_batch_unit: totalUnit,
      composite_components: components,
      reactivity_tags: ["custom_formulation", "multi_component", "stoichiometric_defined"],
      safety_rating: 1,
      safety_notes: `Toplam ${totalAmount} ${totalUnit} formülasyon. Bileşen sayısı: ${components.length}.`,
      alchemical_association: "Compositum Novum (Yeni Bireşim)",
      description: `${desc} İçerik Bileşenleri: ${components.map(c => `${c.name} (%${c.pct})`).join(", ")}.`
    };

    // Add to state and storage
    LabState.substances.unshift(customSub);
    saveCustomSubstancesToStorage(customSub);
    populateSubstancesDatalist();

    // Close modal
    if (dom.customModal) dom.customModal.style.display = "none";
    if (dom.customNameInput) dom.customNameInput.value = "";

    // Refresh Catalog and automatically offer adding to vessel
    renderSubstancesCatalog();

    addToVessel(customSub.id, totalAmount, totalUnit);
    alert(`🎉 "${name}" (${totalAmount} ${totalUnit}) başarıyla oluşturuldu, laboratuvar envanterine kaydedildi ve reaksiyon kabına eklendi!`);
  }

  // =========================================================================
  // SEPARATION PROTOCOL & PURIFICATION SYNTHESIS CONTROLLER
  // =========================================================================
  function escapeHtml(text) {
    if (!text) return "";
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function formatProcedureMarkdown(text) {
    if (!text) return "";
    const safe = escapeHtml(text);
    return safe.replace(/\*\*(.*?)\*\*/g, '<strong style="color: #fde047;">$1</strong>');
  }

  function openSeparationModalForVessel() {
    if (LabState.vessel.length === 0) {
      alert("Ayrıştırma analizi yapabilmek için behere en az bir çok bileşenli madde (örn: BACODERM pomad) veya iki farklı madde ekleyiniz.");
      return;
    }

    if (!window.LabCalculator) {
      alert("Laboratuvar kimya hesaplama motoru henüz yüklenemedi.");
      return;
    }

    const protocol = window.LabCalculator.generateSeparationProtocol(LabState.vessel, null, null, LabState.substances);
    renderSeparationProtocolModal(protocol, "vessel");
  }

  function handlePreviewCustomSeparation() {
    const name = dom.customNameInput?.value.trim() || "Özel Formülasyon";
    const totalAmount = parseFloat(dom.customTotalAmountInput?.value) || 100;
    const totalUnit = dom.customTotalUnitSelect?.value || "g";

    const rows = dom.customIngredientsContainer?.querySelectorAll(".custom-ingredient-row") || [];
    if (rows.length < 2) {
      alert("Ayrıştırma reçetesi simülasyonu için lütfen en az iki etken madde / bileşen giriniz (Örn: Mupirosin 20 mg/g ve Polietilen Glikol).");
      return;
    }

    const components = [];
    rows.forEach(row => {
      const ingName = row.querySelector(".ing-name").value.trim();
      const val = parseFloat(row.querySelector(".ing-val").value) || 0;
      const unit = row.querySelector(".ing-unit").value;

      if (ingName && val > 0) {
        let pct = unit === "%" ? val : (totalAmount > 0 ? (val / totalAmount) * 100 : 0);
        pct = Math.round(pct * 100) / 100;
        const massG = Math.round(((pct / 100) * totalAmount) * 100) / 100;

        // Find substance in catalog to inherit exact physical constants
        const matchedSub = LabState.substances.find(s => 
          s.name.toLowerCase() === ingName.toLowerCase() ||
          s.name.toLowerCase().includes(ingName.toLowerCase()) || 
          (s.name_en && s.name_en.toLowerCase().includes(ingName.toLowerCase())) ||
          (s.chemical_formula && s.chemical_formula.toLowerCase() === ingName.toLowerCase())
        );

        let bp = matchedSub ? matchedSub.boiling_point_c : 999;
        let mp = matchedSub ? matchedSub.melting_point_c : 0;
        let mw = matchedSub ? (matchedSub.mw || 100.0) : 100.0;
        let cPhase = matchedSub ? matchedSub.phase_20c : "liquid";

        if (!matchedSub && window.LabCalculator) {
          const parsed = window.LabCalculator.parseChemicalFormula(ingName);
          if (parsed && parsed.mw) mw = parsed.mw;
        }

        const lowerName = ingName.toLowerCase();
        if (lowerName.includes("mupirosin")) {
          bp = 105.0; mp = 77.5; mw = 500.6;
        } else if (lowerName.includes("peg") || lowerName.includes("polietilen glikol")) {
          bp = 250.0; mp = 5.0; mw = 400.0;
        } else if (lowerName.includes("su") || lowerName.includes("aqua") || lowerName.includes("h2o")) {
          bp = 100.0; mp = 0.0; mw = 18.0;
        } else if (lowerName.includes("alkol") || lowerName.includes("etanol")) {
          bp = 78.4; mp = -114.0; mw = 46.07;
        }

        components.push({
          name: ingName,
          formula: matchedSub ? matchedSub.chemical_formula : ingName,
          massG: massG,
          pct: pct,
          bp: bp,
          mp: mp,
          mw: mw,
          phase: cPhase,
          role: "Bileşen"
        });
      }
    });

    if (components.length < 2) {
      alert("Ayrıştırma reçetesi hesaplamak için geçerli en az 2 bileşen gereklidir!");
      return;
    }

    const protocol = window.LabCalculator.generateSeparationProtocol(components, totalAmount, name, LabState.substances);
    renderSeparationProtocolModal(protocol, "custom");
  }

  function renderSeparationProtocolModal(protocol, source) {
    if (!dom.separationModal || !dom.separationModalBody) return;

    if (!protocol || !protocol.feasible) {
      dom.separationModalBody.innerHTML = `
        <div class="separation-overview-card" style="text-align: center; padding: 2rem;">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">⚠️</div>
          <h4 style="color: #f87171; margin: 0 0 0.5rem 0;">Ayrıştırma Protokolü Üretilemedi</h4>
          <p style="color: var(--text-muted); font-size: 0.88rem; max-width: 500px; margin: 0 auto;">
            ${protocol?.message || "Karışımda yeterli termodinamik fark (kaynama noktası, erime noktası veya çözünürlük) tespit edilemedi."}
          </p>
        </div>
      `;
      dom.separationModal.style.display = "flex";
      return;
    }

    let html = `
      <!-- Mixture Overview & Thermodynamic Table Card -->
      <div class="separation-overview-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--gold-light); font-weight: 700; letter-spacing: 0.05em;">İncelenen Karışım Matrisi</span>
            <h3 style="color: #fff; margin: 0.15rem 0 0 0; font-family: var(--font-serif); font-size: 1.25rem;">
              ${escapeHtml(protocol.mixtureName)} (${protocol.totalMassG.toFixed(1)} g)
            </h3>
          </div>
          <div style="display: flex; gap: 0.5rem;">
            <span class="badge badge-teal">${protocol.componentsCount} Bileşen Tespit Edildi</span>
            <span class="badge badge-gold">${protocol.options.length} Ayrıştırma Yolu</span>
          </div>
        </div>

        <table class="thermo-table">
          <thead>
            <tr>
              <th>Bileşen / Madde</th>
              <th>Kimyasal Formül</th>
              <th>Miktar / Oran</th>
              <th>Kaynama Noktası (T<sub>bp</sub>)</th>
              <th>Erime Noktası (T<sub>mp</sub>)</th>
              <th>Mol Kütlesi (MW)</th>
              <th>Fiziksel Faz</th>
            </tr>
          </thead>
          <tbody>
            ${protocol.components.map(c => `
              <tr>
                <td><strong>${escapeHtml(c.name)}</strong></td>
                <td><code style="color: var(--gold-light);">${escapeHtml(c.formula)}</code></td>
                <td>${c.massG.toFixed(1)} g <span style="color: var(--teal-light); font-size: 0.75rem;">(%${c.pct})</span></td>
                <td><strong style="color: ${c.bp <= 120 ? '#38bdf8' : '#cbd5e1'};">${c.bp !== 999 ? c.bp + '°C' : 'N/A'}</strong></td>
                <td>${c.mp !== 0 ? c.mp + '°C' : '0°C'}</td>
                <td>${c.mw ? c.mw.toFixed(1) + ' g/mol' : 'N/A'}</td>
                <td><span class="badge badge-outline" style="font-size: 0.7rem;">${escapeHtml(c.phase)}</span></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>

      <!-- Separation Options (Methods) -->
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <h4 style="color: var(--gold-light); margin: 0; font-size: 0.95rem; display: flex; align-items: center; gap: 0.4rem;">
          <span>⚡</span> Önerilen Ayrıştırma ve Saflaştırma Reçeteleri:
        </h4>
        ${protocol.options.map((opt, optIdx) => `
          <div class="separation-route-card ${optIdx === 0 ? 'primary-route' : ''}">
            <div class="separation-method-header">
              <div>
                <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem;">
                  <span class="badge ${opt.badgeClass || 'badge-gold'}" style="font-size: 0.72rem;">${escapeHtml(opt.badge)}</span>
                  <span style="font-size: 0.8rem; color: #fde047;">${escapeHtml(opt.ratingStars)}</span>
                </div>
                <h4 class="separation-method-title">${escapeHtml(opt.name)}</h4>
                <div style="font-size: 0.78rem; color: var(--text-muted);">${escapeHtml(opt.type)}</div>
              </div>
              <button class="btn-apply-separation" data-opt-idx="${optIdx}">
                <span>⚡</span> Bu Ayrıştırmayı Behere Uygula (${opt.targetTemp}°C, ${opt.recommendedTimeMin} Dk)
              </button>
            </div>

            <div class="separation-delta-box">
              <strong>🔬 Fiziksel Ayrışma İtici Gücü:</strong> ${escapeHtml(opt.deltaProperty)}
            </div>

            <div>
              <div style="font-size: 0.82rem; font-weight: 700; color: var(--gold-light); margin-bottom: 0.4rem;">
                📋 Adım Adım Ayrıştırma Prosedürü:
              </div>
              <ol class="separation-procedure-list">
                ${opt.procedure.map(step => `<li>${formatProcedureMarkdown(step)}</li>`).join("")}
              </ol>
            </div>

            <div>
              <div style="font-size: 0.82rem; font-weight: 700; color: var(--gold-light); margin-bottom: 0.4rem;">
                🎯 Elde Edilecek Saf Fraksiyonlar:
              </div>
              <div class="fraction-badge-grid">
                ${opt.fractions.map(f => `
                  <div class="fraction-card">
                    <div class="fraction-card-header">
                      <span>${escapeHtml(f.title)}</span>
                      <span class="badge badge-teal" style="font-size: 0.7rem;">Saflık: >%${f.purityPct}</span>
                    </div>
                    <div class="fraction-card-name">${escapeHtml(f.component)}</div>
                    <div class="fraction-card-meta">
                      Miktar: <strong>${f.massG.toFixed(1)} g</strong> &bull; Faz: ${escapeHtml(f.state)}
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>

            ${opt.alchemicalPrinciple ? `
              <div class="separation-alchemical-box">
                📜 <strong>Hermetik / Spajirik İlke:</strong> ${escapeHtml(opt.alchemicalPrinciple)}
              </div>
            ` : ''}
          </div>
        `).join("")}
      </div>
    `;

    dom.separationModalBody.innerHTML = html;

    // Attach click listeners to "⚡ Bu Ayrıştırmayı Behere Uygula" buttons
    dom.separationModalBody.querySelectorAll(".btn-apply-separation").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.dataset.optIdx, 10);
        const opt = protocol.options[idx];
        if (opt) {
          applySeparationProtocolOption(opt, protocol, source);
        }
      });
    });

    dom.separationModal.style.display = "flex";
  }

  function applySeparationProtocolOption(opt, protocol, source) {
    // If opened from custom formulation modal, save and ensure it's in the vessel
    if (source === "custom") {
      if (dom.customModal && dom.customModal.style.display !== "none") {
        handleSaveCustomSubstance();
      }
    }

    // Close separation modal
    if (dom.separationModal) dom.separationModal.style.display = "none";

    // Configure Beaker Temperature
    LabState.vesselTemp = opt.targetTemp;
    if (dom.vesselTempSlider) dom.vesselTempSlider.value = Math.min(1200, opt.targetTemp);
    if (dom.vesselTempInput) dom.vesselTempInput.value = opt.targetTemp;
    if (dom.paramTempLabel) dom.paramTempLabel.textContent = `${opt.targetTemp}°C`;

    // Configure Beaker Time
    LabState.vesselTimeMin = opt.recommendedTimeMin;
    if (dom.vesselTimeSlider) dom.vesselTimeSlider.value = Math.min(120, opt.recommendedTimeMin);
    if (dom.vesselTimeInput) dom.vesselTimeInput.value = opt.recommendedTimeMin;
    if (dom.paramTimeLabel) dom.paramTimeLabel.textContent = `${opt.recommendedTimeMin} Dk`;

    updateVesselParamBadges();

    // Now run the operation automatically
    const op = opt.opType || "DISTILL";
    executeUniversalOperation(op, opt.name);

    // Scroll to result card
    if (dom.resultCard) {
      dom.resultCard.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  // =========================================================================
  // CHEMINFORMATICS & MOLECULAR COMPUTATION CONTROLLER (OPEN SOURCE ENGINES)
  // CalebBell/chemicals, chemicalx, chainer-chemistry, chemlab, chemfiles, awesome-cheminformatics
  // =========================================================================

  function openCheminfoModal(targetTab) {
    if (LabState.vessel.length === 0) {
      alert("Moleküler ve kimyasal analiz için lütfen önce sol panelden reaksiyon kabına (behere) en az bir madde ekleyiniz.");
      return;
    }

    if (!window.LabCheminformatics) {
      alert("Hata: LabCheminformatics kütüphanesi henüz yüklenemedi!");
      return;
    }

    const tab = targetTab || "tab-qspr";
    LabState.activeCheminfoTab = tab;

    if (dom.cheminfoTabsNav) {
      dom.cheminfoTabsNav.querySelectorAll(".cheminfo-tab-btn").forEach(b => {
        if (b.dataset.tab === tab) b.classList.add("active");
        else b.classList.remove("active");
      });
    }

    renderCheminfoModalContent();
    if (dom.cheminfoModal) dom.cheminfoModal.style.display = "flex";
  }

  function renderCheminfoModalContent() {
    if (!dom.cheminfoModalBody) return;

    if (!window.LabCheminformatics) {
      dom.cheminfoModalBody.innerHTML = `
        <div style="text-align: center; padding: 2rem; color: #ef4444;">
          <h4>⚠️ LabCheminformatics motoru yüklenemedi.</h4>
          <p>Lütfen sayfayı yenileyiniz veya lab_cheminformatics.js dosyasını kontrol ediniz.</p>
        </div>
      `;
      return;
    }

    const analysis = window.LabCheminformatics.analyzeVesselCheminformatics(
      LabState.vessel,
      LabState.substances,
      LabState.vesselPressureMbar
    );

    if (!analysis.feasible) {
      dom.cheminfoModalBody.innerHTML = `
        <div style="text-align: center; padding: 2rem; color: var(--text-muted);">
          <h4>🔍 ${escapeHtml(analysis.message)}</h4>
          <p>Reaksiyon kabına en az bir kimyasal madde veya bileşen ekleyerek analizi başlatabilirsiniz.</p>
        </div>
      `;
      return;
    }

    let contentHtml = "";
    switch (LabState.activeCheminfoTab) {
      case "tab-thermo":
        contentHtml = renderTabThermo(analysis);
        break;
      case "tab-ddi":
        contentHtml = renderTabDDI(analysis);
        break;
      case "tab-export":
        contentHtml = renderTabExport(analysis);
        break;
      case "tab-databases":
        contentHtml = renderTabDatabases(analysis);
        break;
      case "tab-qspr":
      default:
        contentHtml = renderTabQSPR(analysis);
        break;
    }

    dom.cheminfoModalBody.innerHTML = contentHtml;

    // Attach dynamic listeners inside modal
    attachCheminfoModalDynamicListeners(analysis);
  }

  // --- TAB 1: QSPR & LIPINSKI (Chainer-Chemistry & Chemlab) ---
  function renderTabQSPR(analysis) {
    let html = `
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.75rem;">
        <div>
          <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--teal-light); font-weight: 700; letter-spacing: 0.05em;">Chainer-Chemistry & Chemlab QSPR Motoru</span>
          <h3 style="color: #fff; margin: 0.2rem 0 0 0; font-family: var(--font-serif); font-size: 1.25rem;">
            Moleküler Deskriptörler & Lipinski Kuralı Analizi
          </h3>
        </div>
        <span class="badge badge-teal">${analysis.substancesCount} Madde İncelendi</span>
      </div>

      <div style="display: flex; flex-direction: column; gap: 1.25rem;">
    `;

    analysis.substances.forEach((item, idx) => {
      const sub = item.substance;
      const qspr = item.qsprLipinski;
      const rulesPassed = qspr.violations === 0 ? "4/4 (Kusursuz Uygun)" : `${4 - qspr.violations}/4 (${qspr.violations} İhlal)`;
      const druglikeColor = qspr.druglikenessScore >= 75 ? "#10b981" : (qspr.druglikenessScore >= 50 ? "#f59e0b" : "#94a3b8");

      html += `
        <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(56, 189, 248, 0.25); border-radius: var(--radius-sm); padding: 1.1rem;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.75rem; flex-wrap: wrap; gap: 0.5rem;">
            <div>
              <div style="display: flex; align-items: center; gap: 0.5rem;">
                <span class="lab-sub-color-indicator" style="background-color: ${sub.color_hex || '#38bdf8'}; width: 14px; height: 14px;"></span>
                <h4 style="margin: 0; color: #fff; font-size: 1.1rem; font-family: var(--font-serif);">${escapeHtml(sub.name)}</h4>
                <span class="badge badge-outline" style="font-size: 0.7rem;">${escapeHtml(sub.category || 'Organik')}</span>
              </div>
              <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--gold-light); margin-top: 0.25rem;">
                Formül: <strong>${escapeHtml(sub.chemical_formula || '')}</strong> &bull; SMILES: <code>${escapeHtml(qspr.smiles || sub.chemical_formula)}</code>
              </div>
            </div>

            <!-- Druglikeness Meter -->
            <div style="min-width: 200px; text-align: right;">
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 0.25rem;">
                <span style="color: var(--text-muted);">İlaç Benzerliği (Druglikeness):</span>
                <strong style="color: ${druglikeColor};">%${qspr.druglikenessScore}</strong>
              </div>
              <div class="druglike-meter">
                <div class="druglike-meter-fill" style="width: ${qspr.druglikenessScore}%; background: ${druglikeColor};"></div>
              </div>
              <span class="badge ${qspr.isDrugLike ? 'badge-teal' : 'badge-outline'}" style="font-size: 0.68rem; margin-top: 0.35rem;">
                ${qspr.isDrugLike ? '✓ Lipinski Rule of 5 Uyumlu' : '⚠️ Lipinski Dışı / Makromolekül'} (${rulesPassed})
              </span>
            </div>
          </div>

          <!-- 4 Lipinski Rule Cards -->
          <div class="qspr-grid" style="margin-bottom: 0.75rem;">
            <div class="qspr-stat-card ${qspr.molecularWeight <= 500 ? 'status-pass' : 'status-fail'}">
              <span class="qspr-stat-val">${qspr.molecularWeight.toFixed(1)} g/mol</span>
              <span class="qspr-stat-lbl">Mol Kütlesi (MW ≤ 500)</span>
            </div>
            <div class="qspr-stat-card ${qspr.logP <= 5.0 ? 'status-pass' : 'status-fail'}">
              <span class="qspr-stat-val">${qspr.logP.toFixed(2)}</span>
              <span class="qspr-stat-lbl">Lipofilisite (LogP ≤ 5.0)</span>
            </div>
            <div class="qspr-stat-card ${qspr.hbd <= 5 ? 'status-pass' : 'status-fail'}">
              <span class="qspr-stat-val">${qspr.hbd}</span>
              <span class="qspr-stat-lbl">H-Bağ Verici (HBD ≤ 5)</span>
            </div>
            <div class="qspr-stat-card ${qspr.hba <= 10 ? 'status-pass' : 'status-fail'}">
              <span class="qspr-stat-val">${qspr.hba}</span>
              <span class="qspr-stat-lbl">H-Bağ Alıcı (HBA ≤ 10)</span>
            </div>
          </div>

          <!-- Extended Descriptors & Chemlab Lennard-Jones -->
          <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.06); border-radius: var(--radius-sm); padding: 0.65rem 0.85rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 0.6rem; font-size: 0.78rem;">
            <div>
              <span style="color: var(--text-muted); display: block;">Topolojik Polar Yüzey Alanı (TPSA):</span>
              <strong style="color: #38bdf8;">${qspr.tpsa.toFixed(1)} Å²</strong>
              <small style="color: ${qspr.tpsa <= 140 ? 'var(--teal-light)' : '#f59e0b'};"> (${qspr.tpsa <= 140 ? 'Hücre zarını geçer' : 'Düşük geçirgenlik'})</small>
            </div>
            <div>
              <span style="color: var(--text-muted); display: block;">Dönebilen Bağlar (Rotatable Bonds):</span>
              <strong style="color: #fff;">${qspr.rotatableBonds} adet</strong>
              <small style="color: ${qspr.rotatableBonds <= 10 ? 'var(--teal-light)' : '#f59e0b'};"> (${qspr.rotatableBonds <= 10 ? 'İyi biyo-yararlanım' : 'Yüksek esneklik'})</small>
            </div>
            <div>
              <span style="color: var(--text-muted); display: block;">Delaney ESOL Suda Çözünürlük:</span>
              <strong style="color: var(--gold-light);">LogS: ${qspr.delaneyLogS.toFixed(2)}</strong>
              <small style="color: #cbd5e1;"> (${escapeHtml(qspr.solubilityClass)})</small>
            </div>
            <div>
              <span style="color: var(--text-muted); display: block;">Chemlab Lennard-Jones Potansiyeli:</span>
              <strong style="color: #c084fc;">ε: ${qspr.lennardJones.epsilon_kJ_mol} kJ/mol, σ: ${qspr.lennardJones.sigma_angstrom} Å</strong>
            </div>
          </div>
        </div>
      `;
    });

    html += `</div>`;
    return html;
  }

  // --- TAB 2: THERMODYNAMICS & HANSEN (CalebBell/chemicals) ---
  function renderTabThermo(analysis) {
    const p = analysis.pressureMbar;
    const atm = (p / 1013.25).toFixed(2);
    const isVac = analysis.isVacuum;

    let html = `
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.75rem;">
        <div>
          <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--gold-light); font-weight: 700; letter-spacing: 0.05em;">CalebBell/chemicals Termodinamik Motoru</span>
          <h3 style="color: #fff; margin: 0.2rem 0 0 0; font-family: var(--font-serif); font-size: 1.25rem;">
            Dinamik Buhar Basıncı (Antoine DIPPR) & Hansen Çözünürlük Küresi
          </h3>
        </div>
        <div style="display: flex; align-items: center; gap: 0.4rem;">
          <span class="badge ${isVac ? 'badge-purple' : 'badge-outline'}" style="font-size: 0.75rem;">
            🌪️ Basınç: ${Math.round(p)} mbar (${atm} atm)
          </span>
        </div>
      </div>

      <!-- Live Pressure Banner & In-Modal Quick Controls -->
      <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(212, 175, 55, 0.3); border-radius: var(--radius-sm); padding: 0.85rem 1rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem;">
        <div>
          <strong style="color: #fff; font-size: 0.88rem;">🌪️ Vakumlu Damıtma & Basınç Simülatörü:</strong>
          <p style="font-size: 0.78rem; color: var(--text-dim); margin: 0.2rem 0 0 0;">
            ${isVac ? 'Vakum koşullarında sıvıların kaynama noktası Antoine DIPPR denklemine göre otomatik düşürülmüştür.' : 'Normal atmosferik basınç (1 atm). Basıncı düşürerek kaynama noktalarını anında indirebilirsiniz.'}
          </p>
        </div>
        <div style="display: flex; gap: 0.4rem; flex-wrap: wrap;">
          <button class="pressure-preset-btn ${Math.abs(p - 1013) < 5 ? 'active' : ''} in-modal-p-btn" data-p="1013">1013 mbar</button>
          <button class="pressure-preset-btn ${Math.abs(p - 500) < 5 ? 'active' : ''} in-modal-p-btn" data-p="500">500 mbar</button>
          <button class="pressure-preset-btn ${Math.abs(p - 100) < 5 ? 'active' : ''} in-modal-p-btn" data-p="100">100 mbar</button>
          <button class="pressure-preset-btn ${Math.abs(p - 20) < 5 ? 'active' : ''} in-modal-p-btn" data-p="20">20 mbar (Rotavap)</button>
        </div>
      </div>

      <!-- Antoine Vapor Pressure Table -->
      <div>
        <div style="font-size: 0.85rem; font-weight: 700; color: var(--gold-light); margin-bottom: 0.45rem;">
          🌡️ Dinamik Kaynama Noktaları & Faz Dengesi (${Math.round(p)} mbar):
        </div>
        <div style="overflow-x: auto;">
          <table class="thermo-table">
            <thead>
              <tr>
                <th>Madde / Bileşen</th>
                <th>Normal T<sub>bp</sub> (1 atm)</th>
                <th>Vakumda T<sub>bp</sub> (${Math.round(p)} mbar)</th>
                <th>Sıcaklık Düşüşü (ΔT)</th>
                <th>Hesaplama Metodu</th>
                <th>20°C Buhar Basıncı</th>
                <th>Parlama / Tutuşma</th>
                <th>Buharlaşma Isısı (ΔH<sub>vap</sub>)</th>
              </tr>
            </thead>
            <tbody>
              ${analysis.substances.map(item => {
                const sub = item.substance;
                const th = item.thermodynamics;
                const hasDrop = th.deltaBpC > 0.5;
                return `
                  <tr>
                    <td><strong>${escapeHtml(sub.name)}</strong> <small style="font-family: var(--font-mono); color: var(--gold-light);">${escapeHtml(sub.chemical_formula || '')}</small></td>
                    <td>${th.normalBpC.toFixed(1)}°C</td>
                    <td><strong style="color: ${hasDrop ? '#38bdf8' : '#fff'}; font-size: 0.92rem;">${th.dynamicBpC.toFixed(1)}°C</strong></td>
                    <td>${hasDrop ? `<span style="color: var(--teal-light); font-weight: 700;">-${th.deltaBpC.toFixed(1)}°C</span>` : '<span style="color: var(--text-muted);">-</span>'}</td>
                    <td><span class="badge badge-outline" style="font-size: 0.68rem;">${escapeHtml(th.method)}</span></td>
                    <td>${th.vaporPressure20C_mbar ? th.vaporPressure20C_mbar.toFixed(1) + ' mbar' : 'N/A'}</td>
                    <td>${th.flashPointC !== null ? th.flashPointC + '°C / ' + (th.autoignitionC ? th.autoignitionC + '°C' : '') : 'Yanıcı Değil'}</td>
                    <td>${th.deltaHvapKJ !== null ? th.deltaHvapKJ.toFixed(1) + ' kJ/mol' : 'N/A'}</td>
                  </tr>
                `;
              }).join("")}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Hansen Solubility Sphere & Pairwise Miscibility Matrix -->
      <div>
        <div style="font-size: 0.85rem; font-weight: 700; color: var(--teal-light); margin-bottom: 0.45rem;">
          🎯 Hansen Çözünürlük Parametreleri (HSP) & Karışabilirlik Analizi:
        </div>

        ${analysis.hansenPairs.length > 0 ? `
          <div style="display: flex; flex-direction: column; gap: 0.6rem;">
            ${analysis.hansenPairs.map(hp => {
              const sol1 = hp.solute || hp.substance1 || "Bileşen 1";
              const sol2 = hp.solvent || hp.substance2 || "Bileşen 2";
              const redVal = hp.RED !== undefined ? hp.RED : hp.red;
              const raVal = hp.Ra !== undefined ? hp.Ra : hp.ra;
              const classification = hp.classification || hp.miscibility || "Karışabilirlik Analizi";
              const desc = hp.description || hp.interpretation || "";

              let badgeColor = "badge-teal";
              let verdictClass = "";
              if (redVal > 1.1) {
                badgeColor = "badge-outline";
                verdictClass = "style='border-left: 3px solid #ef4444;'";
              } else if (redVal >= 0.8) {
                badgeColor = "badge-gold";
                verdictClass = "style='border-left: 3px solid #f59e0b;'";
              } else {
                verdictClass = "style='border-left: 3px solid #10b981;'";
              }

              return `
                <div class="hansen-pair-row" ${verdictClass}>
                  <div>
                    <strong style="color: #fff; font-size: 0.9rem;">${escapeHtml(sol1)} + ${escapeHtml(sol2)}</strong>
                    <div style="font-size: 0.76rem; color: var(--text-muted); margin-top: 0.2rem;">
                      HSP Mesafesi R<sub>a</sub>: <strong style="color: #38bdf8;">${raVal !== undefined ? Number(raVal).toFixed(2) : 'N/A'} MPa<sup>0.5</sup></strong> &bull; 
                      Göreceli Enerji Farkı RED (R<sub>a</sub>/R<sub>0</sub>): <strong style="color: var(--gold-light);">${redVal !== undefined ? Number(redVal).toFixed(2) : 'N/A'}</strong>
                    </div>
                  </div>
                  <div style="text-align: right;">
                    <span class="badge ${badgeColor}" style="font-size: 0.75rem;">${escapeHtml(classification)}</span>
                    <div style="font-size: 0.72rem; color: var(--text-dim); margin-top: 0.25rem;">${escapeHtml(desc)}</div>
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        ` : `
          <div class="hansen-card" style="text-align: center; color: var(--text-muted); font-size: 0.82rem;">
            Hansen ikili karışabilirlik ve çözünürlük küresi analizi için beherde en az 2 farklı madde bulunması gerekir.
          </div>
        `}
      </div>
    `;

    return html;
  }

  // --- TAB 3: DDI & CHEMICALX (AstraZeneca/chemicalx) ---
  function renderTabDDI(analysis) {
    const ddi = analysis.ddiReport;

    let html = `
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.75rem;">
        <div>
          <span style="font-size: 0.75rem; text-transform: uppercase; color: #f43f5e; font-weight: 700; letter-spacing: 0.05em;">AstraZeneca/chemicalx İlaç Etkileşim & Toksisite Motoru</span>
          <h3 style="color: #fff; margin: 0.2rem 0 0 0; font-family: var(--font-serif); font-size: 1.25rem;">
            İlaç-İlaç Etkileşimleri (DDI), Polifarmasi & Sinerji Analizi
          </h3>
        </div>
        <span class="badge ${ddi.hasFatalGas ? 'badge-gold' : (ddi.interactionsFound ? 'badge-teal' : 'badge-outline')}">
          ${ddi.interactionsCount} Etkileşim Tespit Edildi
        </span>
      </div>

      <!-- Hazardous Chemical Gas Banner if fatal pair exists -->
      ${ddi.hasFatalGas ? `
        <div style="background: linear-gradient(90deg, rgba(239, 68, 68, 0.25) 0%, rgba(15, 23, 42, 0.9) 100%); border: 1px solid #ef4444; border-radius: var(--radius-sm); padding: 0.85rem 1rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem; color: #ef4444; font-weight: 700;">
            <span style="font-size: 1.3rem;">🛑</span>
            <span>ÖLÜMCÜL / TOKSİK GAZ SALINIM RİSKİ MEVCUTTUR</span>
          </div>
          <p style="font-size: 0.8rem; color: #fca5a5; margin: 0.3rem 0 0 0;">
            Seçtiğiniz kimyasal bileşenlerin karışımı derhal klor gazı (Cl<sub>2</sub>) veya kloramin gibi ölümcül gazlar üretir. Laboratuvar ortamında asit ve çamaşır suyu asla karıştırılmamalıdır!
          </p>
        </div>
      ` : ''}

      <div style="display: flex; flex-direction: column; gap: 0.85rem;">
    `;

    if (!ddi.interactionsFound) {
      html += `
        <div style="text-align: center; padding: 2.5rem; background: rgba(15, 23, 42, 0.6); border: 1px dashed rgba(255,255,255,0.1); border-radius: var(--radius-sm);">
          <div style="font-size: 2rem; margin-bottom: 0.4rem;">🛡️</div>
          <h4 style="color: #10b981; margin: 0 0 0.3rem 0;">Kritik Farmakolojik DDI Riski Saptanmadı</h4>
          <p style="font-size: 0.82rem; color: var(--text-muted); max-width: 550px; margin: 0 auto;">
            Beherdeki bileşenler arasında bilinen hepatotoksik, gastrointestinal veya ölümcül reaktif ilaç-ilaç etkileşimi (DDI) bulunmamaktadır. Reaksiyon veya karışım farmasötik açıdan güvenli sınırda görünmektedir.
          </p>
        </div>
      `;
    } else {
      ddi.interactions.forEach(rule => {
        let cardSeverityClass = "severity-critical";
        let badgeClass = "badge-gold";
        if (rule.severity === "FATAL_GAS") {
          cardSeverityClass = "severity-fatal";
          badgeClass = "badge-outline";
        } else if (rule.severity === "BENEFICIAL") {
          cardSeverityClass = "severity-synergistic";
          badgeClass = "badge-teal";
        }

        html += `
          <div class="ddi-alert-card ${cardSeverityClass}">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.4rem; flex-wrap: wrap; gap: 0.5rem;">
              <div>
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                  <span class="badge ${badgeClass}" style="font-size: 0.72rem;">${escapeHtml(rule.severity)}</span>
                  <h4 style="margin: 0; color: #fff; font-size: 1.05rem;">${escapeHtml(rule.title)}</h4>
                </div>
                <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.2rem;">
                  Bileşen Çifti: <strong style="color: var(--gold-light);">${escapeHtml(rule.pair.join(" + "))}</strong>
                </div>
              </div>
              <div style="text-align: right;">
                <span style="font-size: 0.75rem; color: var(--text-dim);">Loewe Sinerji Skoru (α):</span>
                <strong style="color: ${rule.synergyScore >= 1.2 ? '#10b981' : (rule.synergyScore <= 0.6 ? '#ef4444' : '#f59e0b')}; font-size: 0.95rem; margin-left: 0.3rem;">
                  ${rule.synergyScore}
                </strong>
              </div>
            </div>

            <p style="font-size: 0.82rem; color: #cbd5e1; line-height: 1.5; margin: 0.4rem 0;">
              ${escapeHtml(rule.description)}
            </p>

            <div style="background: rgba(0,0,0,0.3); border-radius: 4px; padding: 0.45rem 0.75rem; font-size: 0.78rem; color: var(--gold-light); display: flex; align-items: center; gap: 0.4rem; margin-top: 0.4rem;">
              <span>💡</span>
              <span><strong>Öneri:</strong> ${escapeHtml(rule.recommendation)}</span>
            </div>
          </div>
        `;
      });
    }

    html += `</div>`;
    return html;
  }

  // --- TAB 4: CHEMFILES FORMAT EXPORT (chemfiles) ---
  function renderTabExport(analysis) {
    let html = `
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.75rem;">
        <div>
          <span style="font-size: 0.75rem; text-transform: uppercase; color: #c084fc; font-weight: 700; letter-spacing: 0.05em;">Chemfiles Moleküler Format Üreteci</span>
          <h3 style="color: #fff; margin: 0.2rem 0 0 0; font-family: var(--font-serif); font-size: 1.25rem;">
            MOL V2000, SDF, PDB, XYZ ve SMILES Dışa Aktarımı
          </h3>
        </div>
        <span class="badge badge-outline" style="border-color: #c084fc; color: #c084fc;">%100 Çevrimdışı İhracat</span>
      </div>

      <div style="display: flex; flex-direction: column; gap: 1.25rem;">
    `;

    analysis.substances.forEach((item, idx) => {
      const sub = item.substance;
      const f = item.formats;
      const cleanName = (sub.name || "molecule").replace(/[^a-zA-Z0-9_\-]/g, "_");

      html += `
        <div class="chemfiles-format-card">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
            <div>
              <div style="display: flex; align-items: center; gap: 0.5rem;">
                <span class="lab-sub-color-indicator" style="background-color: ${sub.color_hex || '#c084fc'}; width: 12px; height: 12px;"></span>
                <strong style="color: #fff; font-size: 1.05rem;">${escapeHtml(sub.name)}</strong>
                <span style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--gold-light);">(${escapeHtml(sub.chemical_formula || '')})</span>
              </div>
              <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-dim); margin-top: 0.2rem;">
                SMILES: <code>${escapeHtml(f.smiles)}</code>
              </div>
            </div>

            <!-- Download Buttons Row -->
            <div style="display: flex; gap: 0.4rem; flex-wrap: wrap;">
              <button class="btn-chemfiles-download btn-dl-mol" data-sub-idx="${idx}" data-filename="${cleanName}.mol" title="MDL Molfile V2000 İndir">
                <span>📥</span> .MOL
              </button>
              <button class="btn-chemfiles-download btn-dl-sdf" data-sub-idx="${idx}" data-filename="${cleanName}.sdf" title="Structure-Data File İndir">
                <span>📥</span> .SDF
              </button>
              <button class="btn-chemfiles-download btn-dl-pdb" data-sub-idx="${idx}" data-filename="${cleanName}.pdb" title="Protein Data Bank İndir">
                <span>📥</span> .PDB
              </button>
              <button class="btn-chemfiles-download btn-dl-xyz" data-sub-idx="${idx}" data-filename="${cleanName}.xyz" title="Cartesian XYZ Koordinatları İndir">
                <span>📥</span> .XYZ
              </button>
              <button class="btn btn-outline btn-copy-smiles" data-smiles="${escapeHtml(f.smiles)}" style="font-size: 0.75rem; padding: 0.35rem 0.65rem;" title="SMILES Dizgisini Kopyala">
                <span>📋</span> SMILES
              </button>
            </div>
          </div>

          <!-- Code Preview Box (MDL Molfile Preview) -->
          <div style="margin-top: 0.5rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
              <span style="font-size: 0.72rem; color: var(--text-muted); font-family: var(--font-mono);">MDL Molfile V2000 Canlı Önizleme:</span>
              <button class="btn btn-outline btn-copy-mol-text" data-sub-idx="${idx}" style="font-size: 0.68rem; padding: 0.15rem 0.5rem;">
                📋 MOL Metnini Kopyala
              </button>
            </div>
            <pre class="chemfiles-code-box"><code>${escapeHtml(f.mol)}</code></pre>
          </div>
        </div>
      `;
    });

    html += `</div>`;
    return html;
  }

  // --- TAB 5: DATABASE REGISTRY CROSS-WALK (awesome-cheminformatics) ---
  function renderTabDatabases(analysis) {
    let html = `
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.75rem;">
        <div>
          <span style="font-size: 0.75rem; text-transform: uppercase; color: #38bdf8; font-weight: 700; letter-spacing: 0.05em;">Awesome-Cheminformatics Çapraz Veritabanı Köprüsü</span>
          <h3 style="color: #fff; margin: 0.2rem 0 0 0; font-family: var(--font-serif); font-size: 1.25rem;">
            PubChem, DrugBank, CAS Registry & ChemSpider Entegrasyonu
          </h3>
        </div>
        <span class="badge badge-teal">Akademik & Kimyasal İndeks</span>
      </div>

      <div style="display: flex; flex-direction: column; gap: 1.25rem;">
    `;

    analysis.substances.forEach((item, idx) => {
      const sub = item.substance;
      const links = item.databaseLinks;

      html += `
        <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255,255,255,0.08); border-radius: var(--radius-sm); padding: 1rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; flex-wrap: wrap; gap: 0.5rem;">
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <span class="lab-sub-color-indicator" style="background-color: ${sub.color_hex || '#38bdf8'}; width: 12px; height: 12px;"></span>
              <strong style="color: #fff; font-size: 1.05rem;">${escapeHtml(sub.name)}</strong>
              <small style="font-family: var(--font-mono); color: var(--gold-light);">${escapeHtml(sub.chemical_formula || '')}</small>
            </div>
            <span class="badge badge-outline" style="font-size: 0.72rem;">CAS: ${escapeHtml(sub.cas_number || 'N/A')}</span>
          </div>

          <div class="db-registry-grid">
            ${links.map(link => `
              <div class="db-registry-card">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <strong style="color: #fff; font-size: 0.85rem;">${escapeHtml(link.database)}</strong>
                  <span class="badge ${link.badge || 'badge-outline'}" style="font-size: 0.68rem;">${escapeHtml(link.id)}</span>
                </div>
                <p style="font-size: 0.75rem; color: var(--text-dim); margin: 0.2rem 0 0.5rem 0; line-height: 1.35;">
                  ${escapeHtml(link.description)}
                </p>
                <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="font-size: 0.75rem; padding: 0.35rem 0.6rem; text-align: center; text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 0.3rem;">
                  <span>🌐</span> Veritabanını Aç
                </a>
              </div>
            `).join("")}
          </div>
        </div>
      `;
    });

    html += `</div>`;
    return html;
  }

  // --- Dynamic Listeners inside Cheminformatics Modal ---
  function attachCheminfoModalDynamicListeners(analysis) {
    if (!dom.cheminfoModalBody) return;

    // 1. In-modal pressure buttons
    dom.cheminfoModalBody.querySelectorAll(".in-modal-p-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const p = parseFloat(btn.dataset.p);
        updateVesselPressure(p);
      });
    });

    // 2. Download MOL, SDF, PDB, XYZ buttons
    dom.cheminfoModalBody.querySelectorAll(".btn-dl-mol").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.dataset.subIdx, 10);
        const item = analysis.substances[idx];
        if (item) {
          window.LabCheminformatics.downloadMolecularFile(item.formats.mol, btn.dataset.filename, "chemical/x-mdl-molfile");
        }
      });
    });

    dom.cheminfoModalBody.querySelectorAll(".btn-dl-sdf").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.dataset.subIdx, 10);
        const item = analysis.substances[idx];
        if (item) {
          window.LabCheminformatics.downloadMolecularFile(item.formats.sdf, btn.dataset.filename, "chemical/x-mdl-sdfile");
        }
      });
    });

    dom.cheminfoModalBody.querySelectorAll(".btn-dl-pdb").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.dataset.subIdx, 10);
        const item = analysis.substances[idx];
        if (item) {
          window.LabCheminformatics.downloadMolecularFile(item.formats.pdb, btn.dataset.filename, "chemical/x-pdb");
        }
      });
    });

    dom.cheminfoModalBody.querySelectorAll(".btn-dl-xyz").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.dataset.subIdx, 10);
        const item = analysis.substances[idx];
        if (item) {
          window.LabCheminformatics.downloadMolecularFile(item.formats.xyz, btn.dataset.filename, "chemical/x-xyz");
        }
      });
    });

    // 3. Copy SMILES buttons
    dom.cheminfoModalBody.querySelectorAll(".btn-copy-smiles").forEach(btn => {
      btn.addEventListener("click", () => {
        const smiles = btn.dataset.smiles;
        copyTextToClipboard(smiles, btn, "Kopyalandı!");
      });
    });

    // 4. Copy MOL text buttons
    dom.cheminfoModalBody.querySelectorAll(".btn-copy-mol-text").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.dataset.subIdx, 10);
        const item = analysis.substances[idx];
        if (item) {
          copyTextToClipboard(item.formats.mol, btn, "Kopyalandı!");
        }
      });
    });
  }

  // --- Copy Helper ---
  function copyTextToClipboard(text, btnElement, successMsg) {
    if (!navigator.clipboard) {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    } else {
      navigator.clipboard.writeText(text);
    }

    if (btnElement) {
      const origHtml = btnElement.innerHTML;
      btnElement.innerHTML = `<span>✓</span> ${successMsg || "Kopyalandı!"}`;
      btnElement.style.borderColor = "#10b981";
      btnElement.style.color = "#10b981";
      setTimeout(() => {
        btnElement.innerHTML = origHtml;
        btnElement.style.borderColor = "";
        btnElement.style.color = "";
      }, 1800);
    }
  }

  // =========================================================================
  // GUIDED CHEMICAL ENGINEERING & ALCHEMY WIZARD CONTROLLER
  // Enables non-chemists to perform advanced chemical engineering calculations
  // =========================================================================

  function openWizardModal(targetTab) {
    if (!window.LabWizard) {
      alert("Hata: LabWizard kütüphanesi henüz yüklenemedi!");
      return;
    }

    const tab = targetTab || "soap";
    LabState.activeWizardTab = tab;

    if (dom.wizardTabsNav) {
      dom.wizardTabsNav.querySelectorAll(".cheminfo-tab-btn").forEach(b => {
        if (b.dataset.wizardTab === tab) b.classList.add("active");
        else b.classList.remove("active");
      });
    }

    renderWizardModalContent();
    if (dom.wizardModal) dom.wizardModal.style.display = "flex";
  }

  function renderWizardModalContent() {
    if (!dom.wizardModalBody || !window.LabWizard) return;

    let html = "";
    switch (LabState.activeWizardTab) {
      case "hydro":
        html = renderWizardHydro();
        break;
      case "extract":
        html = renderWizardExtract();
        break;
      case "ointment":
        html = renderWizardOintment();
        break;
      case "hlb":
        html = renderWizardHLB();
        break;
      case "crystal":
        html = renderWizardCrystal();
        break;
      case "dilution":
        html = renderWizardDilution();
        break;
      case "thermo":
        html = renderWizardThermo();
        break;
      case "buffer":
        html = renderWizardBuffer();
        break;
      case "penetration":
        html = renderWizardPenetration();
        break;
      case "vacuum":
        html = renderWizardVacuum();
        break;
      case "freeze":
        html = renderWizardFreeze();
        break;
      case "liquid_extract":
        html = renderWizardLiquidExtract();
        break;
      case "osmotic":
        html = renderWizardOsmotic();
        break;
      case "fractional":
        html = renderWizardFractional();
        break;
      case "cascade":
        html = renderWizardCascade();
        break;
      case "recovery":
        html = renderWizardRecovery();
        break;
      case "kinetics":
        html = renderWizardKinetics();
        break;
      case "absorption":
        html = renderWizardAbsorption();
        break;
      case "rheology":
        html = renderWizardRheology();
        break;
      case "adsorption":
        html = renderWizardAdsorption();
        break;
      case "rvdf":
        html = renderWizardRVDF();
        break;
      case "spray":
        html = renderWizardSpray();
        break;
      case "supercritical":
        html = renderWizardSupercritical();
        break;
      case "membrane":
        html = renderWizardMembrane();
        break;
      case "bioreactor":
        html = renderWizardBioreactor();
        break;
      case "electro":
        html = renderWizardElectro();
        break;
      case "fluidbed":
        html = renderWizardFluidBed();
        break;
      case "soap":
      default:
        html = renderWizardSoap();
        break;
    }

    dom.wizardModalBody.innerHTML = html;
    attachWizardDynamicListeners();
  }

  // --- WIZARD 1: Saponification (Doğal Sabunlaşma) ---
  function renderWizardSoap() {
    const calc = window.LabWizard.calculateSaponification("olive", 500, "bar", 5, 33);

    return `
      <div class="wizard-step-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <h4 style="margin: 0; color: #fff; font-size: 1.15rem; font-family: var(--font-serif);">🧼 Doğal Sabunlaşma & Stoikiometri Sihirbazı</h4>
            <p style="font-size: 0.8rem; color: var(--text-dim); margin: 0.2rem 0 0 0;">
              Sıfır serbest kostik garantisi ile cildi kurutmayan, gliserini içinde doğal kalıp veya sıvı arap sabunu formülasyonu.
            </p>
          </div>
          <span class="badge badge-teal">Stoikiometrik SAP Hesaplayıcı</span>
        </div>

        <!-- Inputs Row -->
        <div class="wizard-input-grid">
          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Kullanılacak Yağ:</label>
            <select id="wz-soap-oil" class="filter-select" style="width: 100%;">
              <option value="olive" selected>Zeytinyağı (Saf / Sızma - Kastil)</option>
              <option value="coconut">Hindistan Cevizi Yağı (Bol Köpük & Sertlik)</option>
              <option value="sunflower">Ayçiçek Yağı (E Vitamini & İpeksi)</option>
              <option value="castor">Hint Yağı (Kremamsı Köpük Stabilizatörü)</option>
              <option value="almond">Tatlı Badem Yağı (Hassas & Bebek Ciltleri)</option>
              <option value="shea">Karite (Shea) Yağı (Lüks Nemlendirici)</option>
            </select>
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Yağ Miktarı (Gram):</label>
            <input type="number" id="wz-soap-mass" class="search-input" value="500" min="50" max="10000" step="10">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Sabun Türü:</label>
            <select id="wz-soap-type" class="filter-select" style="width: 100%;">
              <option value="bar" selected>Katı Kalıp Sabun (NaOH Kostik)</option>
              <option value="liquid">Sıvı Arap Sabunu (KOH Potas)</option>
            </select>
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Aşırı Yağlama (Superfat %):</label>
            <input type="number" id="wz-soap-superfat" class="search-input" value="5" min="0" max="20" step="1" title="Cildi kurutmaması için reaksiyona sokulmadan bırakılan koruyucu serbest yağ oranı">
          </div>
        </div>

        <!-- Dynamic Result Card -->
        <div id="wz-soap-result-container">
          ${renderSoapCalculationView(calc)}
        </div>
      </div>
    `;
  }

  function renderSoapCalculationView(calc) {
    return `
      <div class="wizard-result-box">
        <div style="font-size: 0.82rem; font-weight: 700; color: var(--teal-light); margin-bottom: 0.6rem;">
          📊 Otomatik Hesaplanan Kimyasal Reçete (${calc.soapType}):
        </div>

        <div class="wizard-result-stat-grid">
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #f59e0b;">${calc.lyeMassG} g</span>
            <span class="stat-lbl">${calc.lyeFormula} Kostiği</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #38bdf8;">${calc.waterMassG} g</span>
            <span class="stat-lbl">Distile Su</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #10b981;">${calc.glycerinMassG} g</span>
            <span class="stat-lbl">Doğal Gliserin</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #fff;">${calc.totalBatchMassG} g</span>
            <span class="stat-lbl">Toplam Sabun</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #f43f5e;">+${calc.expectedHeatRiseC}°C</span>
            <span class="stat-lbl">Ekzotermik Isı</span>
          </div>
        </div>

        <div style="background: rgba(0,0,0,0.3); border-radius: 4px; padding: 0.75rem; margin-bottom: 0.85rem;">
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--gold-light); margin-bottom: 0.35rem;">
            📋 Adım Adım Üretim Prosedürü:
          </div>
          <ol style="margin: 0; padding-left: 1.2rem; font-size: 0.78rem; color: #cbd5e1; line-height: 1.55;">
            ${calc.procedure.map(step => `<li>${step}</li>`).join("")}
          </ol>
        </div>

        <div style="display: flex; justify-content: flex-end;">
          <button id="btn-apply-soap-wizard" class="btn-wizard-apply" data-oil-mass="${calc.oilMassG}" data-lye-mass="${calc.lyeMassG}" data-water-mass="${calc.waterMassG}" data-lye-formula="${calc.lyeFormula}">
            <span>⚡</span> Bu Reçeteyi ve Malzemeleri Behere Yükle & Başlat
          </button>
        </div>
      </div>
    `;
  }

  // --- WIZARD 2: Hydrodistillation (Uçucu Yağ & Esans) ---
  function renderWizardHydro() {
    const calc = window.LabWizard.calculateHydrodistillation("lavender", 200, LabState.vesselPressureMbar || 1013.25);

    return `
      <div class="wizard-step-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <h4 style="margin: 0; color: #fff; font-size: 1.15rem; font-family: var(--font-serif);">🌿 Uçucu Yağ & Esans Buhar Damıtması Sihirbazı</h4>
            <p style="font-size: 0.8rem; color: var(--text-dim); margin: 0.2rem 0 0 0;">
              Bitkisel hammaddelerden yüksek verimle saf esansiyel yağ (Sulfur) ve aromatik hidrosol (Mercury) ekstraksiyonu.
            </p>
          </div>
          <span class="badge badge-teal">Hidrodistilasyon Modeli</span>
        </div>

        <div class="wizard-input-grid">
          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Damıtılacak Bitki:</label>
            <select id="wz-hydro-plant" class="filter-select" style="width: 100%;">
              <option value="lavender" selected>Lavanta Çiçeği (Linalool / Linalil Asetat)</option>
              <option value="peppermint">Tıbbi Nane (Mentol / Menton)</option>
              <option value="rosemary">Biberiye (1,8-Sineol / Kafur)</option>
              <option value="orange">Portakal Kabuğu (d-Limonen)</option>
              <option value="thyme">Kekik (Timol / Karvakrol)</option>
              <option value="rose">Gül Yaprağı (Geraniol / Hidrosol)</option>
            </select>
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Bitki Miktarı (Gram):</label>
            <input type="number" id="wz-hydro-mass" class="search-input" value="200" min="20" max="5000" step="10">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Basınç Koşulu:</label>
            <select id="wz-hydro-pressure" class="filter-select" style="width: 100%;">
              <option value="1013" selected>Normal Atmosfer (100°C Buhar)</option>
              <option value="100">Hafif Vakum (100 mbar -> 45.9°C Buhar / Aromaları Korur)</option>
            </select>
          </div>
        </div>

        <div id="wz-hydro-result-container">
          ${renderHydroCalculationView(calc)}
        </div>
      </div>
    `;
  }

  function renderHydroCalculationView(calc) {
    return `
      <div class="wizard-result-box">
        <div style="font-size: 0.82rem; font-weight: 700; color: var(--teal-light); margin-bottom: 0.6rem;">
          📊 Hesaplanmış Ekstraksiyon Parametreleri (${escapeHtml(calc.plantName)}):
        </div>

        <div class="wizard-result-stat-grid">
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #fde047;">~${calc.estimatedOilYieldMl} mL</span>
            <span class="stat-lbl">Saf Uçucu Yağ</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #38bdf8;">~${calc.estimatedHydrosolMl} mL</span>
            <span class="stat-lbl">Aromatik Hidrosol</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #fff;">${calc.waterRequiredMl} mL</span>
            <span class="stat-lbl">Gereken Su</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #c084fc;">${calc.steamTempC}°C</span>
            <span class="stat-lbl">Buhar Sıcaklığı</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #10b981;">${calc.recommendedDurationMin} Dk</span>
            <span class="stat-lbl">İşlem Süresi</span>
          </div>
        </div>

        <div style="background: rgba(0,0,0,0.3); border-radius: 4px; padding: 0.75rem; margin-bottom: 0.85rem;">
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--gold-light); margin-bottom: 0.35rem;">
            📋 İmbik Kurulum & Damıtma Prosedürü:
          </div>
          <ol style="margin: 0; padding-left: 1.2rem; font-size: 0.78rem; color: #cbd5e1; line-height: 1.55;">
            ${calc.procedure.map(step => `<li>${step}</li>`).join("")}
          </ol>
        </div>

        <div style="display: flex; justify-content: flex-end;">
          <button id="btn-apply-hydro-wizard" class="btn-wizard-apply" data-plant-mass="${calc.plantMassG}" data-water-ml="${calc.waterRequiredMl}" data-temp="${calc.steamTempC}" data-time="${calc.recommendedDurationMin}" data-pressure="${calc.pressureMbar}">
            <span>⚡</span> Bu Damıtmayı Behere Yükle & İmbikte Başlat
          </button>
        </div>
      </div>
    `;
  }

  // --- WIZARD 2.5: Solvent & Soxhlet Bioactive Extraction ---
  function renderWizardExtract() {
    const calc = window.LabWizard.calculateSolventExtraction("stjohnswort", "olive_oil", "soxhlet", 50, 10);

    return `
      <div class="wizard-step-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <h4 style="margin: 0; color: #fff; font-size: 1.15rem; font-family: var(--font-serif);">⚗️ Soxhlet & Fitokimyasal Çözücü Ekstraksiyonu</h4>
            <p style="font-size: 0.8rem; color: var(--text-dim); margin: 0.2rem 0 0 0;">
              Uçucu olmayan polifenoller, alkaloidler ve şifalı pigmentlerin (Hiperisin, EGCG, Kurkumin) çözücü afinitesi ve Soxhlet/UAE ile yüksek verimli geri kazanımı.
            </p>
          </div>
          <span class="badge badge-teal">Katı-Sıvı Ekstraksiyon Modeli</span>
        </div>

        <div class="wizard-input-grid" style="grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));">
          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Şifalı Bitki / Hammadde:</label>
            <select id="wz-ext-plant" class="filter-select" style="width: 100%;">
              <option value="stjohnswort" selected>Sarı Kantaron (Hiperisin & Hiperforin)</option>
              <option value="greentea">Yeşil Çay (EGCG & Kateşin Polifenolleri)</option>
              <option value="turmeric">Zerdeçal (Kurkumin - Altın Sarısı Polifenol)</option>
              <option value="calendula">Aynısefa Çiçeği (Faradiol & Karotenoidler)</option>
              <option value="chili">Acı Kırmızı Biber (Kapsaisin Alkaloidi)</option>
              <option value="coffee">Kahve Çekirdeği (Kafein & Klorojenik Asit)</option>
            </select>
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Ekstraksiyon Çözücüsü:</label>
            <select id="wz-ext-solvent" class="filter-select" style="width: 100%;">
              <option value="olive_oil" selected>Zeytinyağı (Maserasyon Yağ Bazı)</option>
              <option value="ethanol70">Etanol (%70 Spajirik / Medikal Çözelti)</option>
              <option value="ethanol96">Saf Etanol (%96 Organik Çözücü)</option>
              <option value="water">Distile Su (H2O - Aşırı Polar Hidrofilik)</option>
              <option value="acetone">Aseton (Uçucu Organik Seçici)</option>
            </select>
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Ekstraksiyon Yöntemi & Düzeneği:</label>
            <select id="wz-ext-method" class="filter-select" style="width: 100%;">
              <option value="soxhlet" selected>Soxhlet Sürekli Reflüks (3 Saat - %96 Verim)</option>
              <option value="ultrasound">Ultrasonik Destekli Ekstraksiyon (20 Dk - %92 Verim)</option>
              <option value="maceration_hot">Sıcak İnfüzyon / Benmari (2 Saat - %82 Verim)</option>
              <option value="maceration_cold">Geleneksel Soğuk Maserasyon (20 Gün - %75 Verim)</option>
            </select>
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Kuru Bitki Kütlesi (g):</label>
            <input type="number" id="wz-ext-mass" class="search-input" value="50" min="5" max="2000" step="5">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Katı/Sıvı Oranı (mL Çözücü / g Bitki):</label>
            <input type="number" id="wz-ext-ratio" class="search-input" value="10" min="5" max="30" step="1">
          </div>
        </div>

        <div id="wz-ext-result-container">
          ${renderExtractCalculationView(calc)}
        </div>
      </div>
    `;
  }

  function renderExtractCalculationView(calc) {
    return `
      <div class="wizard-result-box">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem; flex-wrap: wrap; gap: 0.5rem;">
          <div style="font-size: 0.84rem; font-weight: 700; color: var(--teal-light);">
            📊 Fitokimyasal Geri Kazanım & Konsantrasyon (${escapeHtml(calc.plantName)}):
          </div>
          <span class="badge badge-gold" style="font-size: 0.72rem;">
            Net Verim: %${calc.extractionYieldPct}
          </span>
        </div>

        <div class="wizard-result-stat-grid">
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #38bdf8;">${calc.extractedActiveMg} mg</span>
            <span class="stat-lbl">Saf ${escapeHtml(calc.targetActive)}</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #f59e0b;">${calc.extractConcentrationMgMl} mg/mL</span>
            <span class="stat-lbl">Çözelti Konsantrasyonu</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #10b981;">${calc.solventVolumeMl} mL</span>
            <span class="stat-lbl">Gereken Çözücü</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #a78bfa;">${calc.operationTempC}°C</span>
            <span class="stat-lbl">Çalışma Sıcaklığı</span>
          </div>
        </div>

        <div style="margin-bottom: 0.85rem; padding: 0.6rem 0.8rem; background: rgba(0,0,0,0.3); border-radius: 4px; border-left: 3px solid ${calc.affinityStatus.includes('ZAYIF') ? '#ef4444' : '#10b981'};">
          <div style="font-size: 0.82rem; font-weight: 700; color: #fff;">
            Çözücü Uyumu & Polarite: <span style="color: var(--gold-light);">${calc.affinityStatus}</span>
          </div>
          <div style="font-size: 0.76rem; color: var(--text-dim); margin-top: 0.2rem;">
            Seçilen Düzeneğin Süresi: ${calc.durationHr >= 24 ? (calc.durationHr / 24) + ' gün' : calc.durationHr + ' saat'} | Teorik Maksimum Aktif Madde: ${calc.theoreticalTotalActiveMg} mg
          </div>
        </div>

        <div style="background: rgba(0,0,0,0.3); border-radius: 4px; padding: 0.75rem; margin-bottom: 0.85rem;">
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--gold-light); margin-bottom: 0.35rem;">
            📋 Laboratuvar Soxhlet & Ekstraksiyon Prosedürü:
          </div>
          <ol style="margin: 0; padding-left: 1.2rem; font-size: 0.78rem; color: #cbd5e1; line-height: 1.55;">
            ${calc.procedure.map(step => `<li>${step}</li>`).join("")}
          </ol>
        </div>

        <div style="display: flex; justify-content: flex-end;">
          <button id="btn-apply-ext-wizard" class="btn-wizard-apply" 
            data-plant-mass="${calc.plantMassG}" 
            data-plant-name="${escapeHtml(calc.plantName)}"
            data-active-name="${escapeHtml(calc.targetActive)}"
            data-solvent-ml="${calc.solventVolumeMl}" 
            data-solvent-name="${escapeHtml(calc.solventName)}"
            data-temp="${calc.operationTempC}" 
            data-time="${Math.min(180, Math.round(calc.durationHr * 60))}">
            <span>⚡</span> Bu Ekstraksiyonu Behere Yükle & ${calc.operationTempC}°C'de Başlat
          </button>
        </div>
      </div>
    `;
  }

  // --- WIZARD 3: Ointment Formulation ---
  function renderWizardOintment() {
    const calc = window.LabWizard.calculateOintmentBatch("Biyoaktif Etken Madde", 2.0, 100, "beeswax_olive");

    return `
      <div class="wizard-step-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <h4 style="margin: 0; color: #fff; font-size: 1.15rem; font-family: var(--font-serif);">🧴 Biyoaktif Merhem & Krem Dengeleme Sihirbazı</h4>
            <p style="font-size: 0.8rem; color: var(--text-dim); margin: 0.2rem 0 0 0;">
              Etken madde oranına göre taşıyıcı balmumu, zeytinyağı veya PEG matrisini tam gramajıyla dengeleyin.
            </p>
          </div>
          <span class="badge badge-teal">Galenik Pomad Modeli</span>
        </div>

        <div class="wizard-input-grid">
          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Etken Madde Adı:</label>
            <input type="text" id="wz-oint-active" class="search-input" value="Sarı Kantaron / Biyoaktif Özüt">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Etken Madde Konsantrasyonu (%):</label>
            <input type="number" id="wz-oint-dose" class="search-input" value="2.0" min="0.1" max="25" step="0.5">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Toplam Üretim Gramı:</label>
            <input type="number" id="wz-oint-total" class="search-input" value="100" min="20" max="5000" step="10">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Taşıyıcı Matris:</label>
            <select id="wz-oint-base" class="filter-select" style="width: 100%;">
              <option value="beeswax_olive" selected>Doğal Balmumu & Zeytinyağı (Galenik)</option>
              <option value="vaseline_lanolin">Tıbbi Vazelin & Lanolin</option>
              <option value="peg_matrix">Polietilen Glikol (PEG Suyla Yıkanabilir)</option>
            </select>
          </div>
        </div>

        <div id="wz-oint-result-container">
          ${renderOintmentCalculationView(calc)}
        </div>
      </div>
    `;
  }

  function renderOintmentCalculationView(calc) {
    return `
      <div class="wizard-result-box">
        <div style="font-size: 0.82rem; font-weight: 700; color: var(--teal-light); margin-bottom: 0.6rem;">
          📊 Formülasyon Kütle Dengesi (%${calc.activeConcentrationPct} Konsantrasyon):
        </div>

        <div class="wizard-result-stat-grid">
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #f59e0b;">${calc.activeMassG} g</span>
            <span class="stat-lbl">${escapeHtml(calc.activeName)}</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #fde047;">${calc.beeswaxG} g</span>
            <span class="stat-lbl">Saf Balmumu (%15)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #10b981;">${calc.carrierOilG} g</span>
            <span class="stat-lbl">Taşıyıcı Yağ (%85)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #38bdf8;">${calc.meltTempC}°C</span>
            <span class="stat-lbl">Erime Sıcaklığı</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #fff;">${calc.totalBatchG} g</span>
            <span class="stat-lbl">Toplam Krem</span>
          </div>
        </div>

        <div style="background: rgba(0,0,0,0.3); border-radius: 4px; padding: 0.75rem; margin-bottom: 0.85rem;">
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--gold-light); margin-bottom: 0.35rem;">
            📋 Merhem Hazırlama Adımları:
          </div>
          <ol style="margin: 0; padding-left: 1.2rem; font-size: 0.78rem; color: #cbd5e1; line-height: 1.55;">
            ${calc.procedure.map(step => `<li>${step}</li>`).join("")}
          </ol>
        </div>

        <div style="display: flex; justify-content: flex-end;">
          <button id="btn-apply-oint-wizard" class="btn-wizard-apply" data-active-g="${calc.activeMassG}" data-active-name="${escapeHtml(calc.activeName)}" data-wax-g="${calc.beeswaxG}" data-oil-g="${calc.carrierOilG}" data-temp="${calc.meltTempC}">
            <span>⚡</span> Bu Formülasyonu Behere Yükle & Eritmeyi Başlat
          </button>
        </div>
      </div>
    `;
  }

  // --- WIZARD 3.5: Griffin's HLB Emulsion Balancer ---
  function renderWizardHLB() {
    const calc = window.LabWizard.calculateHLBEmulsion("olive", "ow", 100, 20, 5, "tween80", "span80");

    return `
      <div class="wizard-step-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <h4 style="margin: 0; color: #fff; font-size: 1.15rem; font-family: var(--font-serif);">🧴 Griffin HLB Kozmetik Emülsiyon & Krem Dengeleyici</h4>
            <p style="font-size: 0.8rem; color: var(--text-dim); margin: 0.2rem 0 0 0;">
              Faz ayrışmasını (yağ/su kusmasını) %0'a indiren termodinamik hidrofilik-lipofilik denge (HLB) ikili sürfaktan hesaplayıcı.
            </p>
          </div>
          <span class="badge badge-gold">Griffin HLB Sistemi</span>
        </div>

        <div class="wizard-input-grid" style="grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));">
          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Taşıyıcı Yağ Fazı:</label>
            <select id="wz-hlb-oil" class="filter-select" style="width: 100%;">
              <option value="olive" selected>Zeytinyağı (RHLB O/W: 7.0)</option>
              <option value="jojoba">Jojoba Yağı (RHLB O/W: 6.5)</option>
              <option value="almond">Tatlı Badem Yağı (RHLB O/W: 7.0)</option>
              <option value="mineral">Mineral Yağ / Sıvı Parafin (RHLB O/W: 10.5)</option>
              <option value="shea">Shea / Karite Yağı (RHLB O/W: 8.0)</option>
              <option value="argan">Argan Yağı (RHLB O/W: 7.0)</option>
              <option value="castor">Hint Yağı (RHLB O/W: 14.0)</option>
              <option value="beeswax">Saf Balmumu (RHLB O/W: 9.0)</option>
            </select>
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Emülsiyon Tipi:</label>
            <select id="wz-hlb-type" class="filter-select" style="width: 100%;">
              <option value="ow" selected>Yağ-içinde-Su (O/W) - Hafif, Yağsız Krem / Losyon</option>
              <option value="wo">Su-içinde-Yağ (W/O) - Koruyucu Yoğun Bariyer Kremi</option>
            </select>
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Toplam Ürün Miktarı (g):</label>
            <input type="number" id="wz-hlb-total" class="search-input" value="100" min="20" max="2000" step="10">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Yağ Fazı Oranı (%):</label>
            <input type="number" id="wz-hlb-oil-pct" class="search-input" value="20" min="5" max="60" step="1">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Toplam Emülsifiyer Oranı (%):</label>
            <input type="number" id="wz-hlb-emul-pct" class="search-input" value="5" min="1" max="15" step="0.5">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Yüksek HLB Sürfaktan (Hidrofilik):</label>
            <select id="wz-hlb-surf-high" class="filter-select" style="width: 100%;">
              <option value="tween80" selected>Polisorbat 80 (HLB 15.0)</option>
              <option value="tween20">Polisorbat 20 (HLB 16.7)</option>
              <option value="polawax">Polawax Mum (HLB 14.9)</option>
              <option value="cetyl_alc">Setil Alkol (HLB 15.5)</option>
            </select>
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Düşük HLB Sürfaktan (Lipofilik):</label>
            <select id="wz-hlb-surf-low" class="filter-select" style="width: 100%;">
              <option value="span80" selected>Span 80 / Sorbitan Monooleat (HLB 4.3)</option>
              <option value="span60">Span 60 / Sorbitan Monostearat (HLB 4.7)</option>
              <option value="gms">Gliseril Monostearat / GMS (HLB 3.8)</option>
              <option value="lecithin">Soya Lesitini (HLB 8.0)</option>
            </select>
          </div>
        </div>

        <div id="wz-hlb-result-container">
          ${renderHLBCalculationView(calc)}
        </div>
      </div>
    `;
  }

  function renderHLBCalculationView(calc) {
    return `
      <div class="wizard-result-box">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem; flex-wrap: wrap; gap: 0.5rem;">
          <div style="font-size: 0.84rem; font-weight: 700; color: var(--teal-light);">
            📊 Emülsiyon Kararlılık ve HLB Denge Raporu (${escapeHtml(calc.oilName)}):
          </div>
          <span class="badge ${calc.hlbDeviation <= 0.2 ? 'badge-gold' : 'badge-cyan'}" style="font-size: 0.72rem;">
            Hedef HLB: ${calc.targetHLB} ➔ Gerçekleşen: ${calc.actualHLB} (Δ = ${calc.hlbDeviation})
          </span>
        </div>

        <div class="wizard-result-stat-grid">
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #38bdf8;">${calc.highSurfactantMassG} g</span>
            <span class="stat-lbl">${escapeHtml(calc.highSurfactantName)} (%${calc.highSurfactantPct})</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #f59e0b;">${calc.lowSurfactantMassG} g</span>
            <span class="stat-lbl">${escapeHtml(calc.lowSurfactantName)} (%${calc.lowSurfactantPct})</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #10b981;">${calc.oilMassG} g</span>
            <span class="stat-lbl">Yağ Fazı (%${calc.oilPct})</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #a78bfa;">${calc.waterMassG} mL</span>
            <span class="stat-lbl">Su Fazı (%${calc.waterPct})</span>
          </div>
        </div>

        <div style="margin-bottom: 0.85rem; padding: 0.6rem 0.8rem; background: rgba(0,0,0,0.3); border-radius: 4px; border-left: 3px solid #10b981;">
          <div style="font-size: 0.82rem; font-weight: 700; color: #fff;">
            Kararlılık Değerlendirmesi: <span style="color: var(--gold-light);">${calc.stabilityRating}</span>
          </div>
          <div style="font-size: 0.76rem; color: var(--text-dim); margin-top: 0.2rem;">
            Toplam Emülsifiyer: ${calc.totalEmulsifierG} g | Formülasyon Tipi: ${escapeHtml(calc.emulsionType)}
          </div>
        </div>

        <div style="background: rgba(0,0,0,0.3); border-radius: 4px; padding: 0.75rem; margin-bottom: 0.85rem;">
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--gold-light); margin-bottom: 0.35rem;">
            📋 Profesyonel Kozmetik Emülsiyon Protokolü:
          </div>
          <ol style="margin: 0; padding-left: 1.2rem; font-size: 0.78rem; color: #cbd5e1; line-height: 1.55;">
            ${calc.procedure.map(step => `<li>${step}</li>`).join("")}
          </ol>
        </div>

        <div style="display: flex; justify-content: flex-end;">
          <button id="btn-apply-hlb-wizard" class="btn-wizard-apply" 
            data-oil-g="${calc.oilMassG}" 
            data-oil-name="${escapeHtml(calc.oilName)}"
            data-high-surf-g="${calc.highSurfactantMassG}"
            data-high-surf-name="${escapeHtml(calc.highSurfactantName)}"
            data-low-surf-g="${calc.lowSurfactantMassG}"
            data-low-surf-name="${escapeHtml(calc.lowSurfactantName)}"
            data-water-ml="${calc.waterMassG}">
            <span>⚡</span> Bu Emülsiyonu Behere Yükle & 70°C'de Başlat
          </button>
        </div>
      </div>
    `;
  }

  // --- WIZARD 4: Salt Crystallization & Kinetics ---
  function renderWizardCrystal() {
    const calc = window.LabWizard.calculateCrystallization("alum", 200, "slow");

    return `
      <div class="wizard-step-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <h4 style="margin: 0; color: #fff; font-size: 1.15rem; font-family: var(--font-serif);">🧂 Kristal Büyütme & Kinetik Aşırı Doygunluk Sihirbazı</h4>
            <p style="font-size: 0.8rem; color: var(--text-dim); margin: 0.2rem 0 0 0;">
              Sıcaklık çözünürlük farkı, nükleasyon kinetiği ve soğutma hızı kontrolüyle dev tek kristaller veya mikrokristalin toz üretimi.
            </p>
          </div>
          <span class="badge badge-teal">Termal Çözünürlük Çarpımı</span>
        </div>

        <div class="wizard-input-grid" style="grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));">
          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Kristallenecek Mineral:</label>
            <select id="wz-crys-salt" class="filter-select" style="width: 100%;">
              <option value="alum" selected>Şap (Potasyum Alüminyum Sülfat - Oktahedral)</option>
              <option value="coppersulfate">Göztaşı (Bakır(II) Sülfat - Safir Mavisi Triklinik)</option>
              <option value="epsom">Epsom Tuzu (Magnezyum Sülfat - İğnemsi)</option>
              <option value="nacl">Kaya Tuzu (Sodyum Klorür - Kübik Halit)</option>
            </select>
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Soğutma Hızı & Kinetik Modu:</label>
            <select id="wz-crys-cooling-mode" class="filter-select" style="width: 100%;">
              <option value="slow" selected>Yavaş Soğutma (Oda Sıcaklığı - Büyük Tek Kristaller, %99.8 Saflık)</option>
              <option value="fast">Ani Şok Soğutma (Buz Banyosu - İnce Mikrokristalin Toz)</option>
            </select>
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Su Hacmi (mL):</label>
            <input type="number" id="wz-crys-water" class="search-input" value="200" min="50" max="2000" step="50">
          </div>
        </div>

        <div id="wz-crys-result-container">
          ${renderCrystalCalculationView(calc)}
        </div>
      </div>
    `;
  }

  function renderCrystalCalculationView(calc) {
    return `
      <div class="wizard-result-box">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem; flex-wrap: gap: 0.5rem;">
          <div style="font-size: 0.82rem; font-weight: 700; color: var(--teal-light);">
            📊 Kristal Verim ve Büyüme Kinetiği (${escapeHtml(calc.saltName)}):
          </div>
          <span class="badge ${calc.coolingRateMode === 'fast' ? 'badge-cyan' : 'badge-gold'}" style="font-size: 0.72rem;">
            ${calc.method}
          </span>
        </div>

        <div class="wizard-result-stat-grid">
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #38bdf8;">${calc.crystallizationYieldG} g</span>
            <span class="stat-lbl">Saf Kristal Verimi</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #f59e0b;">${calc.maxSoluble100C_g} g</span>
            <span class="stat-lbl">100°C'de Çözünen</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #94a3b8;">${calc.growthRate}</span>
            <span class="stat-lbl">Büyüme Hızı</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #10b981;">${calc.purityRating.split(' ')[0]}</span>
            <span class="stat-lbl">Hedef Saflık</span>
          </div>
        </div>

        <div style="margin-bottom: 0.85rem; padding: 0.6rem 0.8rem; background: rgba(0,0,0,0.3); border-radius: 4px; border-left: 3px solid #38bdf8;">
          <div style="font-size: 0.82rem; font-weight: 700; color: #fff;">
            Morfoloji: <span style="color: var(--teal-light);">${escapeHtml(calc.crystalHabit)}</span>
          </div>
          <div style="font-size: 0.76rem; color: var(--text-dim); margin-top: 0.2rem;">
            ${escapeHtml(calc.coolingDescription)} &bull; ${escapeHtml(calc.supersatIndex)}
          </div>
        </div>

        <div style="background: rgba(0,0,0,0.3); border-radius: 4px; padding: 0.75rem; margin-bottom: 0.85rem;">
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--gold-light); margin-bottom: 0.35rem;">
            📋 Kristal Büyütme Prosedürü:
          </div>
          <ol style="margin: 0; padding-left: 1.2rem; font-size: 0.78rem; color: #cbd5e1; line-height: 1.55;">
            ${calc.procedure.map(step => `<li>${step}</li>`).join("")}
          </ol>
        </div>

        <div style="display: flex; justify-content: flex-end;">
          <button id="btn-apply-crys-wizard" class="btn-wizard-apply" data-salt-g="${calc.maxSoluble100C_g}" data-water-ml="${calc.waterVolumeMl}" data-mode="${calc.coolingRateMode}">
            <span>⚡</span> Bu Kristallendirmeyi Behere Yükle & 100°C'de Başlat
          </button>
        </div>
      </div>
    `;
  }

  // --- WIZARD 5: Ethanol Dilution (Pearson Square) ---
  function renderWizardDilution() {
    const calc = window.LabWizard.calculateEthanolDilution(500, 70, 96);

    return `
      <div class="wizard-step-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <h4 style="margin: 0; color: #fff; font-size: 1.15rem; font-family: var(--font-serif);">🍷 Alkol Seyreltme & Pearson Karesi Sihirbazı</h4>
            <p style="font-size: 0.8rem; color: var(--text-dim); margin: 0.2rem 0 0 0;">
              Spajirik tentürler ve dezenfektanlar için moleküler hacim büzüşmesi kompanse edilmiş hassas alkol seyreltme.
            </p>
          </div>
          <span class="badge badge-teal">Pearson Square Modeli</span>
        </div>

        <div class="wizard-input-grid">
          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Hedef Hacim (mL):</label>
            <input type="number" id="wz-dil-target-vol" class="search-input" value="500" min="50" max="10000" step="50">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">İstenen Alkol Derecesi (%):</label>
            <input type="number" id="wz-dil-target-pct" class="search-input" value="70" min="20" max="90" step="5">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Eldeki Alkol Derecesi (%):</label>
            <input type="number" id="wz-dil-init-pct" class="search-input" value="96" min="70" max="99.5" step="1">
          </div>
        </div>

        <div id="wz-dil-result-container">
          ${renderDilutionCalculationView(calc)}
        </div>
      </div>
    `;
  }

  function renderDilutionCalculationView(calc) {
    return `
      <div class="wizard-result-box">
        <div style="font-size: 0.82rem; font-weight: 700; color: var(--teal-light); margin-bottom: 0.6rem;">
          📊 Seyreltme Reçetesi (Tam ${calc.targetVolumeMl} mL %${calc.targetPct}):
        </div>

        <div class="wizard-result-stat-grid">
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #fde047;">${calc.alcoholRequiredMl} mL</span>
            <span class="stat-lbl">%${calc.initialPct} Alkol</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #38bdf8;">${calc.waterRequiredMl} mL</span>
            <span class="stat-lbl">Distile Su</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #c084fc;">-${calc.contractionLossMl} mL</span>
            <span class="stat-lbl">Hacim Büzüşmesi Kompanse</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #10b981;">${calc.finalPureAlcoholMl} mL</span>
            <span class="stat-lbl">Net Saf Etanol</span>
          </div>
        </div>

        <div style="background: rgba(0,0,0,0.3); border-radius: 4px; padding: 0.75rem; margin-bottom: 0.85rem;">
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--gold-light); margin-bottom: 0.35rem;">
            📋 Seyreltme Talimatı:
          </div>
          <ol style="margin: 0; padding-left: 1.2rem; font-size: 0.78rem; color: #cbd5e1; line-height: 1.55;">
            ${calc.procedure.map(step => `<li>${step}</li>`).join("")}
          </ol>
        </div>

        <div style="display: flex; justify-content: flex-end;">
          <button id="btn-apply-dil-wizard" class="btn-wizard-apply" data-alc-ml="${calc.alcoholRequiredMl}" data-water-ml="${calc.waterRequiredMl}">
            <span>⚡</span> Bu Karışımı Behere Yükle & Karıştır
          </button>
        </div>
      </div>
    `;
  }

  // --- WIZARD 6.5: Reaction Gibbs Free Energy & Equilibrium ---
  function renderWizardThermo() {
    const calc = window.LabWizard.calculateReactionThermodynamics("soap_saponification", 25);

    return `
      <div class="wizard-step-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <h4 style="margin: 0; color: #fff; font-size: 1.15rem; font-family: var(--font-serif);">🌡️ Termodinamik & Gibbs Serbest Enerjisi (ΔG°, ΔH°, K_eq)</h4>
            <p style="font-size: 0.8rem; color: var(--text-dim); margin: 0.2rem 0 0 0;">
              Kimyasal reaksiyonların verilen sıcaklıkta kendiliğinden yürüyüp yürümeyeceğini (Spontaneity) ve kimyasal denge sabitini (K_eq) kesin fizikokimya kanunlarıyla hesaplayın.
            </p>
          </div>
          <span class="badge badge-gold">Termodinamik Doğruluk</span>
        </div>

        <div class="wizard-input-grid" style="grid-template-columns: 2fr 1fr;">
          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">İncelenecek Kimyasal Reaksiyon:</label>
            <select id="wz-th-rxn" class="filter-select" style="width: 100%;">
              <option value="soap_saponification" selected>Sabunlaşma Trigliserit Hidrolizi (Ester + 3 NaOH)</option>
              <option value="caco3_calcination">Kireçtaşı Kalsinasyonu (CaCO3 ➔ CaO + CO2 ↑)</option>
              <option value="steam_methane_reforming">Su-Gazı / Kömür Gazlaştırma (C + H2O ➔ CO + H2 ↑)</option>
              <option value="acid_base_neutralization">Kuvvetli Asit - Baz Nötralizasyonu (HCl + NaOH)</option>
              <option value="copper_vitriol_dehydration">Göztaşı Dehidrasyonu (CuSO4·5H2O Isıl Dönüşümü)</option>
              <option value="h2_o2_combustion">Hidrojen Yanması / Su Sentezi (2 H2 + O2 ➔ 2 H2O)</option>
              <option value="lime_slaking">Kireç Söndürme Ekzotermisi (CaO + H2O ➔ Ca(OH)2)</option>
              <option value="water_gas_shift">Su-Gazı Dönüşüm Dengesi (CO + H2O ⇌ CO2 + H2)</option>
              <option value="iron_oxidation_rust">Demir Paslanması / Korozyon (4 Fe + 3 O2 ➔ 2 Fe2O3)</option>
              <option value="thermite_reaction">Alüminotermik Termit (2 Al + Fe2O3 ➔ Al2O3 + 2 Fe)</option>
              <option value="bordeaux_mixture_precipitation">Bordo Bulamacı Çökelmesi (CuSO4 + Ca(OH)2 ➔ Cu(OH)2↓ + CaSO4↓)</option>
              <option value="methanol_steam_reforming">Metanol Buhar Reformingi (CH3OH + H2O ⇌ CO2 + 3 H2)</option>
              <option value="ammonia_synthesis_haber">Haber-Bosch Amonyak Sentezi (N2 + 3 H2 ⇌ 2 NH3)</option>
              <option value="calcium_carbide_acetylene">Kalsiyum Karbür Hidrolizi (CaC2 + 2 H2O ➔ Asetilen Gazı)</option>
            </select>
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Sistem Sıcaklığı (°C):</label>
            <input type="number" id="wz-th-temp" class="search-input" value="25" min="-50" max="1500" step="5">
          </div>
        </div>

        <div id="wz-th-result-container">
          ${renderThermoCalculationView(calc)}
        </div>
      </div>
    `;
  }

  function renderThermoCalculationView(calc) {
    return `
      <div class="wizard-result-box">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem; flex-wrap: wrap; gap: 0.5rem;">
          <div style="font-size: 0.84rem; font-weight: 700; color: var(--teal-light);">
            📊 Termodinamik Reaksiyon Dengesi: ${escapeHtml(calc.reactionName)}
          </div>
          <span class="badge ${calc.isSpontaneous ? 'badge-gold' : 'badge-cyan'}" style="font-size: 0.72rem;">
            T = ${calc.temperatureC}°C (${calc.temperatureK} K)
          </span>
        </div>

        <div style="font-family: monospace; font-size: 0.88rem; color: #fff; background: rgba(0,0,0,0.4); padding: 0.5rem 0.8rem; border-radius: 4px; margin-bottom: 0.8rem; border-left: 3px solid var(--teal-light);">
          ${escapeHtml(calc.equation)}
        </div>

        <div class="wizard-result-stat-grid">
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: ${calc.isSpontaneous ? '#10b981' : '#ef4444'};">${calc.deltaG_kJ} kJ/mol</span>
            <span class="stat-lbl">Gibbs Enerjisi (ΔG°)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #f59e0b;">${calc.deltaH_kJ} kJ/mol</span>
            <span class="stat-lbl">Entalpi (ΔH°)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #38bdf8;">${calc.deltaS_J_K} J/(mol·K)</span>
            <span class="stat-lbl">Entropi (ΔS°)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #c084fc;">${calc.equilibriumConstantK}</span>
            <span class="stat-lbl">Denge Sabiti (K_eq)</span>
          </div>
        </div>

        <div style="margin-bottom: 0.85rem; padding: 0.6rem 0.8rem; background: rgba(0,0,0,0.3); border-radius: 4px; border-left: 3px solid ${calc.isSpontaneous ? '#10b981' : '#ef4444'};">
          <div style="font-size: 0.82rem; font-weight: 700; color: #fff;">
            Spontanlık Yargısı: <span style="color: var(--gold-light);">${calc.spontaneityVerdict}</span>
          </div>
          <div style="font-size: 0.78rem; color: #cbd5e1; margin-top: 0.25rem;">
            ${escapeHtml(calc.detailedExplanation)}
          </div>
          ${calc.inversionTempC !== null ? `
            <div style="font-size: 0.75rem; color: var(--teal-light); margin-top: 0.25rem;">
              ⚡ Termodinamik İnversiyon Noktası (ΔG° = 0): <strong>${calc.inversionTempC}°C</strong> (Bu sıcaklığın üzerinde reaksiyon kendiliğinden yürür).
            </div>
          ` : ''}
        </div>

        <div style="display: flex; justify-content: flex-end;">
          <button id="btn-apply-thermo-wizard" class="btn-wizard-apply" 
            data-target-temp="${calc.inversionTempC !== null && !calc.isSpontaneous ? calc.inversionTempC + 10 : calc.temperatureC}">
            <span>⚡</span> Reaksiyon Sıcaklığını Behere Uygula (${calc.inversionTempC !== null && !calc.isSpontaneous ? calc.inversionTempC + 10 : calc.temperatureC}°C)
          </button>
        </div>
      </div>
    `;
  }

  // --- WIZARD 7: Henderson-Hasselbalch Buffer Solution ---
  function renderWizardBuffer() {
    const calc = window.LabWizard.calculateBufferSolution("citrate", 4.5, 100, 0.1);

    return `
      <div class="wizard-step-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <h4 style="margin: 0; color: #fff; font-size: 1.15rem; font-family: var(--font-serif);">🧪 pH Tampon Çözelti & Henderson-Hasselbalch Sihirbazı</h4>
            <p style="font-size: 0.8rem; color: var(--text-dim); margin: 0.2rem 0 0 0;">
              Cilt serumları (C Vitamini pH 3.5), fizyolojik solüsyonlar (PBS pH 7.4) ve asidik ekstraksiyonlar için hassas gramaj hesaplayıcı.
            </p>
          </div>
          <span class="badge badge-teal">Henderson-Hasselbalch Modeli</span>
        </div>

        <div class="wizard-input-grid" style="grid-template-columns: 2fr 1fr 1fr 1fr;">
          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Tampon Sistemi:</label>
            <select id="wz-buf-system" class="filter-select" style="width: 100%;">
              <option value="citrate" selected>Sitrik Asit / Sodyum Sitrat (pH 3.0 - 6.2 - C Vitamini & Cilt)</option>
              <option value="acetate">Asetik Asit / Sodyum Asetat (pH 3.8 - 5.8 - Spajirik & Ekstraksiyon)</option>
              <option value="phosphate_pbs">Fizyolojik Fosfat Tamponu PBS (pH 5.8 - 8.0 - Göz & Biyo)</option>
              <option value="lactate">Laktik Asit / Sodyum Laktat (pH 3.0 - 5.0 - Asit Mantosu & AHA)</option>
              <option value="bicarbonate">Karbonat / Bikarbonat (pH 6.0 - 7.8 - Mide & Kan Dengesi)</option>
            </select>
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Hedef pH:</label>
            <input type="number" id="wz-buf-ph" class="search-input" value="4.5" min="2.5" max="9.0" step="0.1">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Hacim (mL):</label>
            <input type="number" id="wz-buf-vol" class="search-input" value="100" min="25" max="5000" step="25">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Molarite (M):</label>
            <input type="number" id="wz-buf-molarity" class="search-input" value="0.1" min="0.01" max="1.0" step="0.05">
          </div>
        </div>

        <div id="wz-buf-result-container">
          ${renderBufferCalculationView(calc)}
        </div>
      </div>
    `;
  }

  function renderBufferCalculationView(calc) {
    return `
      <div class="wizard-result-box">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem; flex-wrap: wrap; gap: 0.5rem;">
          <div style="font-size: 0.84rem; font-weight: 700; color: var(--teal-light);">
            📊 Tampon Formülasyon Reçetesi: ${escapeHtml(calc.systemName)}
          </div>
          <span class="badge ${calc.isOptimalRange ? 'badge-gold' : 'badge-cyan'}" style="font-size: 0.72rem;">
            Hedef: pH ${calc.targetPH.toFixed(2)} (pKa: ${calc.pKa})
          </span>
        </div>

        <div class="wizard-result-stat-grid">
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #ef4444;">${calc.acidComponent.massG} g</span>
            <span class="stat-lbl">${escapeHtml(calc.acidComponent.name.split(' ')[0])} (Asit Fazı)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #38bdf8;">${calc.baseComponent.massG} g</span>
            <span class="stat-lbl">${escapeHtml(calc.baseComponent.name.split(' ')[0])} (Tuz / Baz Fazı)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #10b981;">${calc.bufferCapacityBeta}</span>
            <span class="stat-lbl">Tampon Kapasitesi (β)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #f59e0b;">${calc.ratioBaseToAcid}</span>
            <span class="stat-lbl">[A⁻] / [HA] Mol Oranı</span>
          </div>
        </div>

        <div style="margin-bottom: 0.85rem; padding: 0.6rem 0.8rem; background: rgba(0,0,0,0.3); border-radius: 4px; border-left: 3px solid ${calc.isOptimalRange ? '#10b981' : '#f59e0b'};">
          <div style="font-size: 0.82rem; font-weight: 700; color: #fff;">
            Stabilite Puanı: <span style="color: var(--gold-light);">${calc.stabilityRating}</span>
          </div>
          <div style="font-size: 0.78rem; color: #cbd5e1; margin-top: 0.25rem;">
            ${escapeHtml(calc.usageGuidance)}
          </div>
        </div>

        <div style="background: rgba(0,0,0,0.3); border-radius: 4px; padding: 0.75rem; margin-bottom: 0.85rem;">
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--gold-light); margin-bottom: 0.35rem;">
            📋 Laboratuvar Hazırlama Yönergesi:
          </div>
          <p style="margin: 0; font-size: 0.78rem; color: #cbd5e1; line-height: 1.55;">
            ${escapeHtml(calc.preparationRecipe)}
          </p>
        </div>

        <div style="display: flex; justify-content: flex-end;">
          <button id="btn-apply-buf-wizard" class="btn-wizard-apply" 
            data-acid-g="${calc.acidComponent.massG}" data-acid-name="${calc.acidComponent.name}"
            data-base-g="${calc.baseComponent.massG}" data-base-name="${calc.baseComponent.name}"
            data-water-ml="${calc.volumeML}" data-ph="${calc.targetPH}">
            <span>⚡</span> Bu Tampon Bileşenlerini Behere Yükle & Çöz
          </button>
        </div>
      </div>
    `;
  }

  // --- WIZARD 8: Transdermal Bioavailability & Franz Diffusion ---
  function renderWizardPenetration() {
    const calc = window.LabWizard.calculateDermalPenetration("salicylic_acid", "ow_emulsion", 2.0);

    return `
      <div class="wizard-step-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <h4 style="margin: 0; color: #fff; font-size: 1.15rem; font-family: var(--font-serif);">🧬 Dermal Penetrasyon & Franz Difüzyon Kinetiği</h4>
            <p style="font-size: 0.8rem; color: var(--text-dim); margin: 0.2rem 0 0 0;">
              Krem, merhem veya jellerdeki biyoaktif maddelerin stratum corneum bariyerini geçiş hızını (J_ss Akısı) ve hedef doku derinliğini modelleyin.
            </p>
          </div>
          <span class="badge badge-teal">Potts-Guy / Fick Difüzyon Modeli</span>
        </div>

        <div class="wizard-input-grid" style="grid-template-columns: 2fr 2fr 1fr;">
          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Etken Madde:</label>
            <select id="wz-pen-active" class="filter-select" style="width: 100%;">
              <option value="salicylic_acid" selected>Salisilik Asit (BHA - Gözenek & Sebum Nüfuzu)</option>
              <option value="mupirocin">Mupirosin (Topikal Antibiyotik - Epidermal Bariyer)</option>
              <option value="caffeine">Kafein (Vazokonstrüktör - Dermis & Mikrosirkülasyon)</option>
              <option value="niacinamide">Niasinamid (B3 Vitamini - Keratinosit Onarımı)</option>
              <option value="menthol">Mentol (Soğutucu & Lipid Geçirgenlik Artırıcı)</option>
              <option value="diclofenac">Diklofenak (Topikal NSAİİ - Kas & Eklem Derinliği)</option>
            </select>
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Taşıyıcı Matris (Vehikül):</label>
            <select id="wz-pen-vehicle" class="filter-select" style="width: 100%;">
              <option value="ow_emulsion" selected>Yağ-içinde-Su (O/W) Kozmetik Krem (Yüksek Absorpsiyon)</option>
              <option value="peg_ointment">Polietilen Glikol Pomadı (PEG - Hızlı Yüzey Salımı)</option>
              <option value="beeswax_olive">Balmumu & Zeytinyağı Merhemi (Oklüzif Depo Etkisi)</option>
              <option value="hydrogel">Karbomer / Su Bazlı Hidrojel (Hafif Şeffaf Jel)</option>
              <option value="alcohol_tincture">%70 Etanolik Spajirik Tentür (Lipid Çözücü Şok Emilim)</option>
            </select>
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Dozaj (%):</label>
            <input type="number" id="wz-pen-conc" class="search-input" value="2.0" min="0.1" max="20" step="0.5">
          </div>
        </div>

        <div id="wz-pen-result-container">
          ${renderPenetrationCalculationView(calc)}
        </div>
      </div>
    `;
  }

  function renderPenetrationCalculationView(calc) {
    return `
      <div class="wizard-result-box">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem; flex-wrap: wrap; gap: 0.5rem;">
          <div style="font-size: 0.84rem; font-weight: 700; color: var(--teal-light);">
            📊 Transdermal Emilim Kinetiği (${escapeHtml(calc.activeName)}):
          </div>
          <span class="badge badge-gold" style="font-size: 0.72rem;">
            ${calc.depthRating}
          </span>
        </div>

        <div class="wizard-result-stat-grid">
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #38bdf8;">${calc.steadyStateFlux_ug_cm2_h}</span>
            <span class="stat-lbl">Kararlı Akı J_ss (µg/cm²·saat)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #10b981;">${calc.cumulativeDelivery24h_mg} mg</span>
            <span class="stat-lbl">24 Saatlik Teslimat (10 cm²)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #c084fc;">${calc.permeabilityKp_cm_h}</span>
            <span class="stat-lbl">Geçirgenlik Katsayısı K_p (cm/h)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #f59e0b;">%${calc.concentrationPct}</span>
            <span class="stat-lbl">Formülasyon Konsantrasyonu</span>
          </div>
        </div>

        <div style="margin-bottom: 0.85rem; padding: 0.6rem 0.8rem; background: rgba(0,0,0,0.3); border-radius: 4px; border-left: 3px solid #38bdf8;">
          <div style="font-size: 0.82rem; font-weight: 700; color: #fff;">
            Hedef Doku: <span style="color: var(--teal-light);">${escapeHtml(calc.targetLayer)}</span> (${calc.depthCategory})
          </div>
          <div style="font-size: 0.78rem; color: #cbd5e1; margin-top: 0.25rem;">
            ${escapeHtml(calc.pharmacokineticInsight)}
          </div>
          <div style="font-size: 0.75rem; color: var(--gold-light); margin-top: 0.25rem;">
            Taşıyıcı Davranışı: <strong>${escapeHtml(calc.vehicleReleaseProfile)}</strong>
          </div>
        </div>

        <div style="display: flex; justify-content: flex-end;">
          <button id="btn-apply-pen-wizard" class="btn-wizard-apply" 
            data-active="${calc.activeName}" data-vehicle="${calc.vehicleName}" data-conc="${calc.concentrationPct}">
            <span>⚡</span> Bu Formülasyon Parametrelerini Behere Yükle
          </button>
        </div>
      </div>
    `;
  }

  // --- WIZARD 6: Vacuum Pressure Solver ---
  function renderWizardVacuum() {
    const calc = window.LabWizard.solveVacuumPressureForTemp("h2o", 50);

    return `
      <div class="wizard-step-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <h4 style="margin: 0; color: #fff; font-size: 1.15rem; font-family: var(--font-serif);">🌪️ Ters Antoine Vakum Basınç Çözücü</h4>
            <p style="font-size: 0.8rem; color: var(--text-dim); margin: 0.2rem 0 0 0;">
              Isıya duyarlı biyoaktif maddeleri (vitaminler, enzimler, flavonoidler) yakmadan uçurmak için gereken maksimum güvenli basıncı hesaplar.
            </p>
          </div>
          <span class="badge badge-teal">Ters Antoine Denklemi</span>
        </div>

        <div class="wizard-input-grid">
          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Uçurulacak Çözücü:</label>
            <select id="wz-vac-solvent" class="filter-select" style="width: 100%;">
              <option value="h2o" selected>Su (H2O - Normal 100°C)</option>
              <option value="c2h5oh">Etanol (Normal 78.3°C)</option>
              <option value="c3h6o">Aseton (Normal 56°C)</option>
              <option value="c4h10o">Dietil Eter (Normal 34.6°C)</option>
            </select>
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Maksimum Güvenli Sıcaklık (°C):</label>
            <input type="number" id="wz-vac-temp" class="search-input" value="50" min="15" max="95" step="5" title="Maddenin termal bozunmaya uğramayacağı tavan sıcaklık">
          </div>
        </div>

        <div id="wz-vac-result-container">
          ${renderVacuumCalculationView(calc)}
        </div>
      </div>
    `;
  }

  function renderVacuumCalculationView(calc) {
    return `
      <div class="wizard-result-box">
        <div style="font-size: 0.82rem; font-weight: 700; color: var(--teal-light); margin-bottom: 0.6rem;">
          📊 Gerekli Vakum Basıncı (${escapeHtml(calc.solventName)} için):
        </div>

        <div class="wizard-result-stat-grid">
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #c084fc;">${calc.requiredPressureMbar} mbar</span>
            <span class="stat-lbl">Hedef Basınç (P ≤)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #38bdf8;">${calc.requiredPressureMmHg} mmHg</span>
            <span class="stat-lbl">Torr / mmHg</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #10b981;">${calc.maxSafeTempC}°C</span>
            <span class="stat-lbl">Maksimum Sıcaklık</span>
          </div>
        </div>

        <div style="background: rgba(0,0,0,0.3); border-radius: 4px; padding: 0.75rem; margin-bottom: 0.85rem;">
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--gold-light); margin-bottom: 0.25rem;">
            💡 Mühendislik Açıklaması & Pompa Önerisi:
          </div>
          <p style="margin: 0; font-size: 0.78rem; color: #cbd5e1; line-height: 1.5;">
            ${escapeHtml(calc.explanation)}
          </p>
          <div style="margin-top: 0.4rem; font-size: 0.76rem; color: var(--teal-light);">
            Önerilen Donanım: <strong>${escapeHtml(calc.pumpRecommendation)}</strong>
          </div>
        </div>

        <div style="display: flex; justify-content: flex-end;">
          <button id="btn-apply-vac-wizard" class="btn-wizard-apply" data-pressure="${calc.requiredPressureMbar}" data-temp="${calc.maxSafeTempC}">
            <span>⚡</span> Bu Vakum Basıncını Behere Uygula (${calc.requiredPressureMbar} mbar, ${calc.maxSafeTempC}°C)
          </button>
        </div>
      </div>
    `;
  }

  // --- WIZARD 9: Freeze-Drying / Lyophilization & Sub-Zero Sublimation ---
  function renderWizardFreeze() {
    const calc = window.LabWizard.calculateFreezeDrying("mannitol", 100, 5, -20);

    return `
      <div class="wizard-step-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <h4 style="margin: 0; color: #fff; font-size: 1.15rem; font-family: var(--font-serif);">❄️ Liyofilizasyon & Dondurarak Kurutma (Sub-Zero Sublimation)</h4>
            <p style="font-size: 0.8rem; color: var(--text-dim); margin: 0.2rem 0 0 0;">
              Aşı, protein, peptid, hiyalüronik asit ve ısıya aşırı duyarlı etken maddeleri sıvı fazı atlayıp buzu doğrudan süblimleştirerek mikrogözenekli kuru kek haline getirin.
            </p>
          </div>
          <span class="badge badge-teal">Kriyojenik Süblimasyon Kinetiği</span>
        </div>

        <div class="wizard-input-grid">
          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Liyoprotektan / Matris Maddesi:</label>
            <select id="wz-frz-solute" class="filter-select" style="width: 100%;">
              <option value="mannitol" selected>Mannitol (Kristalin Taşıyıcı / Teu: -1.5°C)</option>
              <option value="sucrose">Sükroz / Sakkaroz (Amorf Biyo-Stabilizatör / Tg': -32°C)</option>
              <option value="trehalose">Trehaloz Dihidrat (Üst Düzey Kriyoprotektan / Tg': -29.5°C)</option>
              <option value="bsa">Sığır Serum Albümini (BSA / Model Protein / Tg': -10°C)</option>
              <option value="hyaluronic_acid">Hiyalüronik Asit (Biyopolimer Matris / Tg': -18°C)</option>
              <option value="collagen">Hidrolize Kolajen Peptidleri (Tg': -14°C)</option>
            </select>
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Çözelti Hacmi (mL):</label>
            <input type="number" id="wz-frz-vol" class="search-input" value="100" min="10" max="5000" step="10">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Katı Konsantrasyonu (% w/v):</label>
            <input type="number" id="wz-frz-conc" class="search-input" value="5" min="0.5" max="30" step="0.5">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Birincil Kurutma Raf Sıcaklığı (°C):</label>
            <input type="number" id="wz-frz-temp" class="search-input" value="-20" min="-60" max="0" step="1" title="Camsı çökme sıcaklığının (Tg' veya Teu) altında olmalıdır">
          </div>
        </div>

        <div id="wz-frz-result-container">
          ${renderFreezeCalculationView(calc)}
        </div>
      </div>
    `;
  }

  function renderFreezeCalculationView(calc) {
    return `
      <div class="wizard-result-box">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem; flex-wrap: wrap; gap: 0.5rem;">
          <div style="font-size: 0.84rem; font-weight: 700; color: var(--teal-light);">
            📊 Liyofilizasyon Süreç Parametreleri: ${escapeHtml(calc.soluteName)}
          </div>
          <span class="badge ${calc.isSafeFromCollapse ? 'badge-gold' : 'badge-outline'}" style="font-size: 0.72rem;">
            ${escapeHtml(calc.stabilityRating)}
          </span>
        </div>

        <div class="wizard-result-stat-grid">
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #38bdf8;">${calc.targetVacuumMbar} mbar</span>
            <span class="stat-lbl">Hedef Vakum (${calc.targetVacuumUbar} µbar)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #c084fc;">${calc.reqCondenserTempC}°C</span>
            <span class="stat-lbl">Kondansatör Buz Tuzağı (Min)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #10b981;">${calc.dryCakeMassG} g</span>
            <span class="stat-lbl">Kuru Liyofilize Kek Verimi</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #fbbf24;">${calc.sublimationHeatKJ} kJ</span>
            <span class="stat-lbl">Gereken Süblimasyon Enerjisi</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #f43f5e;">${calc.collapseTempC}°C</span>
            <span class="stat-lbl">Kritik Çökme Eşiği (Tg' / Teu)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #a855f7;">${calc.estTotalDurationHours} Saat</span>
            <span class="stat-lbl">Toplam Çevrim (${calc.estPrimaryDurationHours}h + ${calc.estSecondaryDurationHours}h)</span>
          </div>
        </div>

        <div style="background: rgba(0,0,0,0.3); border-radius: 4px; padding: 0.75rem; margin-bottom: 0.85rem;">
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--gold-light); margin-bottom: 0.25rem;">
            🔬 Matris Stabilitesi & Mikroyapı İncelemesi:
          </div>
          <p style="margin: 0; font-size: 0.78rem; color: #cbd5e1; line-height: 1.5;">
            ${escapeHtml(calc.stabilityDesc)}
          </p>
          <div style="margin-top: 0.35rem; font-size: 0.76rem; color: #94a3b8; font-style: italic;">
            💡 ${escapeHtml(calc.porosityInsight)}
          </div>
        </div>

        <div style="display: flex; justify-content: flex-end;">
          <button id="btn-apply-frz-wizard" class="btn-wizard-apply" data-solute="${escapeHtml(calc.soluteName)}" data-cake-g="${calc.dryCakeMassG}" data-vacuum="${calc.targetVacuumMbar}" data-temp="${calc.shelfTempC}">
            <span>⚡</span> Bu Liyofilizasyon Reçetesini Behere Yükle & Başlat
          </button>
        </div>
      </div>
    `;
  }

  // --- WIZARD 10: Liquid-Liquid Extraction & Nernst Partition Balancer ---
  function renderWizardLiquidExtract() {
    const calc = window.LabWizard.calculateLiquidLiquidExtraction("caffeine", "ethyl_acetate", 100, 90, 3);

    return `
      <div class="wizard-step-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <h4 style="margin: 0; color: #fff; font-size: 1.15rem; font-family: var(--font-serif);">⚖️ Sıvı-Sıvı Faz Ayırma & Nernst Dağılma Katsayısı (Liquid-Liquid Extraction)</h4>
            <p style="font-size: 0.8rem; color: var(--text-dim); margin: 0.2rem 0 0 0;">
              Sulu fazdaki etken maddeyi organik faza çekmek için Nernst dağılma yasasıyla tek aşamalı ve çok aşamalı yıkama verimlerini karşılaştırın.
            </p>
          </div>
          <span class="badge badge-teal">Nernst Partition Modeli</span>
        </div>

        <div class="wizard-input-grid">
          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Ekstre Edilecek Etken Madde:</label>
            <select id="wz-ll-solute" class="filter-select" style="width: 100%;">
              <option value="caffeine" selected>Kafein (Pürin Alkaloidi / Çay-Kahve)</option>
              <option value="vanillin">Vanilin (Aromatik Fenolik Aldehit)</option>
              <option value="benzoic_acid">Benzoik Asit (Gıda Koruyucu / pH < 3)</option>
              <option value="salicylic_acid">Salisilik Asit (BHA / Asidik Çözelti)</option>
              <option value="menthol">Mentol (Monoterpen Alkol / Nane)</option>
              <option value="curcumin">Kurkumin (Zerdeçal Polifenolü)</option>
            </select>
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Kullanılacak Organik Faz (Çözücü):</label>
            <select id="wz-ll-solvent" class="filter-select" style="width: 100%;">
              <option value="ethyl_acetate" selected>Etil Asetat (EtOAc / Yeşil Çözücü - Üst Faz)</option>
              <option value="diethyl_ether">Dietil Eter (Et2O / Uçucu - Üst Faz)</option>
              <option value="dcm">Diklormetan (DCM / Klorlu - Alt Faz)</option>
              <option value="hexane">n-Heksan (Apolar Alkan - Üst Faz)</option>
              <option value="octanol">1-Oktanol (Lipofilik Faz - Üst Faz)</option>
            </select>
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Sulu Faz Hacmi (V_aq, mL):</label>
            <input type="number" id="wz-ll-aq-vol" class="search-input" value="100" min="10" max="2000" step="10">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Toplam Organik Çözücü (V_org, mL):</label>
            <input type="number" id="wz-ll-org-vol" class="search-input" value="90" min="10" max="2000" step="10">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Yıkama Basamak Sayısı (n):</label>
            <select id="wz-ll-stages" class="filter-select" style="width: 100%;">
              <option value="1">1 Basamak (Tek Seferde Tümü)</option>
              <option value="2">2 Basamak (2 x Eşit Porsiyon)</option>
              <option value="3" selected>3 Basamak (3 x Eşit Porsiyon - Tavsiye Edilen)</option>
              <option value="4">4 Basamak (4 x Eşit Porsiyon)</option>
            </select>
          </div>
        </div>

        <div id="wz-ll-result-container">
          ${renderLiquidExtractCalculationView(calc)}
        </div>
      </div>
    `;
  }

  function renderLiquidExtractCalculationView(calc) {
    return `
      <div class="wizard-result-box">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem; flex-wrap: wrap; gap: 0.5rem;">
          <div style="font-size: 0.84rem; font-weight: 700; color: var(--teal-light);">
            📊 Sıvı-Sıvı Dağılma Analizi: ${escapeHtml(calc.soluteName)} ➔ ${escapeHtml(calc.solventName)}
          </div>
          <span class="badge badge-gold" style="font-size: 0.72rem;">
            K_D Dağılma Katsayısı: ${calc.partitionCoefficientKD}
          </span>
        </div>

        <div class="wizard-result-stat-grid">
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #10b981;">%${calc.multiStageYieldPct}</span>
            <span class="stat-lbl">${calc.stagesCount} Kademeli Ekstraksiyon Verimi</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #38bdf8;">%${calc.singleStageYieldPct}</span>
            <span class="stat-lbl">Tek Seferlik Yıkama Verimi</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #c084fc;">+ %${calc.deltaGainPct}</span>
            <span class="stat-lbl">Çok Kademeli Yıkama Kazancı</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #f59e0b;">${calc.portionVolumeMl} mL</span>
            <span class="stat-lbl">Her Kademede Kullanılacak Çözücü</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #f43f5e;">%${calc.remainingInAqueousPct}</span>
            <span class="stat-lbl">Suda Kalan Kayıp</span>
          </div>
        </div>

        <div style="background: rgba(0,0,0,0.3); border-radius: 4px; padding: 0.75rem; margin-bottom: 0.85rem;">
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--gold-light); margin-bottom: 0.25rem;">
            🧭 Faz Konumu & Laboratuvar Uygulaması:
          </div>
          <p style="margin: 0; font-size: 0.78rem; color: #cbd5e1; line-height: 1.5;">
            ${escapeHtml(calc.phaseLocation)}
          </p>
          <div style="margin-top: 0.4rem; font-size: 0.76rem; color: var(--teal-light);">
            ${escapeHtml(calc.saltingOutAdvice)}
          </div>
        </div>

        <div style="display: flex; justify-content: flex-end;">
          <button id="btn-apply-ll-wizard" class="btn-wizard-apply" data-solute="${escapeHtml(calc.soluteName)}" data-solvent="${escapeHtml(calc.solventName)}" data-aq-ml="${calc.aqueousVolumeMl}" data-org-ml="${calc.totalSolventVolumeMl}" data-stages="${calc.stagesCount}">
            <span>⚡</span> Bu Ekstraksiyon Karışımını Behere Aktar & Ayır
          </button>
        </div>
      </div>
    `;
  }

  // --- WIZARD 11: Osmotic Pressure & Isotonic Solution Balancer ---
  function renderWizardOsmotic() {
    const calc = window.LabWizard.calculateOsmoticPressure("nacl", 9.0, 37.0);

    return `
      <div class="wizard-step-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <h4 style="margin: 0; color: #fff; font-size: 1.15rem; font-family: var(--font-serif);">💧 Osmotik Basınç & İzotonisite Dengeleyici (Van 't Hoff Modeli)</h4>
            <p style="font-size: 0.8rem; color: var(--text-dim); margin: 0.2rem 0 0 0;">
              Göz damlaları, burun spreyleri, serum fizyolojik ve hücre kültürü çözeltilerini insan plazması ve gözyaşı ile tam izotonik hale getirin.
            </p>
          </div>
          <span class="badge badge-teal">Van 't Hoff & E-Değeri Eşdeğerliği</span>
        </div>

        <div class="wizard-input-grid">
          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Çözünen Madde:</label>
            <select id="wz-osm-solute" class="filter-select" style="width: 100%;">
              <option value="nacl" selected>Sodyum Klorür (NaCl / Serum Fizyolojik - i: 1.85)</option>
              <option value="glucose">D-Glukoz / Dekstroz (i: 1.00)</option>
              <option value="mannitol">Mannitol (Osmotik Diüretik - i: 1.00)</option>
              <option value="glycerol">Gliserin / Gliserol (i: 1.00)</option>
              <option value="kcl">Potasyum Klorür (KCl - i: 1.82)</option>
              <option value="sodium_citrate">Trisodyum Sitrat Dihidrat (i: 2.80)</option>
            </select>
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Konsantrasyon (g/L):</label>
            <input type="number" id="wz-osm-conc" class="search-input" value="9" min="0.1" max="250" step="0.5">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Sıcaklık (°C):</label>
            <input type="number" id="wz-osm-temp" class="search-input" value="37" min="0" max="100" step="1">
          </div>
        </div>

        <div id="wz-osm-result-container">
          ${renderOsmoticCalculationView(calc)}
        </div>
      </div>
    `;
  }

  function renderOsmoticCalculationView(calc) {
    return `
      <div class="wizard-result-box">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem; flex-wrap: wrap; gap: 0.5rem;">
          <div style="font-size: 0.84rem; font-weight: 700; color: var(--teal-light);">
            📊 Osmotik Analiz: ${escapeHtml(calc.soluteName)} (${calc.concentrationG_L} g/L)
          </div>
          <span class="badge ${calc.tonicityClass}" style="font-size: 0.72rem;">
            ${escapeHtml(calc.tonicityStatus)}
          </span>
        </div>

        <div class="wizard-result-stat-grid">
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #38bdf8;">${calc.osmolarity_mOsm_L} mOsm/L</span>
            <span class="stat-lbl">Osmolarite (Plazma: 280-320)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #c084fc;">${calc.osmoticPressureAtm} atm</span>
            <span class="stat-lbl">Osmotik Basınç (${calc.osmoticPressureBar} bar)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #10b981;">${calc.freezingPointC}°C</span>
            <span class="stat-lbl">Donma Noktası Alçalması (ΔT_f)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #fbbf24;">${calc.vanTHoffFactor_i}</span>
            <span class="stat-lbl">Van 't Hoff Faktörü (i)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #f59e0b;">${calc.naclEquivalent_E}</span>
            <span class="stat-lbl">NaCl Eşdeğeri (E-Değeri)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #f43f5e;">${calc.naclNeededPer100mlG} g</span>
            <span class="stat-lbl">100 mL için Ek Gereken NaCl</span>
          </div>
        </div>

        <div style="background: rgba(0,0,0,0.3); border-radius: 4px; padding: 0.75rem; margin-bottom: 0.85rem;">
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--gold-light); margin-bottom: 0.25rem;">
            🔬 Farmasötik Tonisite Değerlendirmesi:
          </div>
          <p style="margin: 0; font-size: 0.78rem; color: #cbd5e1; line-height: 1.5;">
            ${escapeHtml(calc.scientificAdvice)}
          </p>
          <div style="margin-top: 0.35rem; font-size: 0.76rem; color: #94a3b8; font-style: italic;">
            💡 ${escapeHtml(calc.insight)}
          </div>
        </div>

        <div style="display: flex; justify-content: flex-end;">
          <button id="btn-apply-osm-wizard" class="btn-wizard-apply" data-solute="${escapeHtml(calc.soluteName)}" data-conc="${calc.concentrationG_L}" data-temp="${calc.temperatureC}">
            <span>⚡</span> Bu Solüsyonu Behere Aktar & Hazırla
          </button>
        </div>
      </div>
    `;
  }

  // --- WIZARD 12: Fractional Column Distillation & Theoretical Plates ---
  function renderWizardFractional() {
    const calc = window.LabWizard.calculateFractionalDistillation("ethanol_water", 10, 85, 1, 1.3, "structured_mesh");

    return `
      <div class="wizard-step-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <h4 style="margin: 0; color: #fff; font-size: 1.15rem; font-family: var(--font-serif);">🗼 Fraksiyonel Kolonlu Damıtma & Teorik Tabak Sayısı (McCabe-Thiele / Fenske)</h4>
            <p style="font-size: 0.8rem; color: var(--text-dim); margin: 0.2rem 0 0 0;">
              Kaynama noktaları birbirine yakın ikili sıvı karışımlarını ayırmak için gereken minimum teorik tabak sayısını (N_min), reflüks oranını (R) ve dolgulu kolon yüksekliğini hesaplayın.
            </p>
          </div>
          <span class="badge badge-teal">Fenske & Gilliland Modeli</span>
        </div>

        <div class="wizard-input-grid">
          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">İkili Karışım Sistemi:</label>
            <select id="wz-frac-system" class="filter-select" style="width: 100%;">
              <option value="ethanol_water" selected>Etanol - Su (α = 2.45, Azeotropik)</option>
              <option value="acetone_water">Aseton - Su (α = 8.50, Yüksek Uçuculuk)</option>
              <option value="methanol_water">Metanol - Su (α = 3.60, İdeal Çözelti)</option>
              <option value="ethyl_acetate_water">Etil Asetat - Su (α = 4.80, Heteroazeotrop)</option>
            </select>
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Besleme Mol Kesri (z_F %):</label>
            <input type="number" id="wz-frac-zf" class="search-input" value="10" min="1" max="95" step="1">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Hedef Distilat Saflığı (x_D %):</label>
            <input type="number" id="wz-frac-xd" class="search-input" value="85" min="10" max="99" step="1">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Dip Ürün Kaybı (x_B %):</label>
            <input type="number" id="wz-frac-xb" class="search-input" value="1" min="0.05" max="10" step="0.5">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Kolon Dolgu Malzemesi:</label>
            <select id="wz-frac-packing" class="filter-select" style="width: 100%;">
              <option value="structured_mesh" selected>Paslanmaz Tel Örgü (HETP: 2.8 cm)</option>
              <option value="glass_beads">Cam Boncuk Dolgusu (HETP: 4.5 cm)</option>
              <option value="raschig_rings">Seramik Raschig Halkası (HETP: 6.5 cm)</option>
              <option value="vigreux">Vigreux Cam Boğum (HETP: 9.0 cm)</option>
            </select>
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Reflüks Çarpanı (R / R_min):</label>
            <input type="number" id="wz-frac-rfactor" class="search-input" value="1.3" min="1.1" max="2.5" step="0.1">
          </div>
        </div>

        <div id="wz-frac-result-container">
          ${renderFractionalCalculationView(calc)}
        </div>
      </div>
    `;
  }

  function renderFractionalCalculationView(calc) {
    return `
      <div class="wizard-result-box">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem; flex-wrap: wrap; gap: 0.5rem;">
          <div style="font-size: 0.84rem; font-weight: 700; color: var(--teal-light);">
            📊 Kolon Boyutlandırma & Tabak Dengesi: ${escapeHtml(calc.systemName)}
          </div>
          <span class="badge badge-gold" style="font-size: 0.72rem;">
            Bağıl Uçuculuk (α): ${calc.relativeVolatilityAlpha}
          </span>
        </div>

        <div class="wizard-result-stat-grid">
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #38bdf8;">${calc.minTheoreticalPlates_Nmin}</span>
            <span class="stat-lbl">Minimum Teorik Tabak (N_min)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #c084fc;">${calc.actualTheoreticalStages}</span>
            <span class="stat-lbl">Gerçek Teorik Kademe (N_actual)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #10b981;">${calc.requiredColumnHeightCm} cm</span>
            <span class="stat-lbl">Gereken Dolgulu Kolon Boyu</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #fbbf24;">${calc.minRefluxRatio_Rmin}</span>
            <span class="stat-lbl">Min. Reflüks Oranı (R_min)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #f59e0b;">${calc.operatingRefluxRatio}</span>
            <span class="stat-lbl">Çalışma Reflüks Oranı (R_oper)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #a855f7;">${calc.hetp_cm} cm</span>
            <span class="stat-lbl">Dolgu HETP Değeri</span>
          </div>
        </div>

        <div style="background: rgba(0,0,0,0.3); border-radius: 4px; padding: 0.75rem; margin-bottom: 0.85rem;">
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--gold-light); margin-bottom: 0.25rem;">
            🔬 Azeotropik Limit & Dolgu Açıklaması:
          </div>
          <p style="margin: 0; font-size: 0.78rem; color: #cbd5e1; line-height: 1.5;">
            ${escapeHtml(calc.azeotropeNotice)}
          </p>
          <div style="margin-top: 0.35rem; font-size: 0.76rem; color: #94a3b8; font-style: italic;">
            💡 ${escapeHtml(calc.packingInsight)}
          </div>
        </div>

        <div style="display: flex; justify-content: flex-end;">
          <button id="btn-apply-frac-wizard" class="btn-wizard-apply" data-system="${escapeHtml(calc.systemName)}" data-height="${calc.requiredColumnHeightCm}" data-reflux="${calc.operatingRefluxRatio}">
            <span>⚡</span> Bu Kolon Parametrelerini Behere Yükle & Damıtmayı Başlat
          </button>
        </div>
      </div>
    `;
  }

  // --- WIZARD 13: Multi-Step Cascade Reaction Engine ---
  function renderWizardCascade() {
    const calc = window.LabWizard.calculateReactionCascade("bordeaux_mixture_cycle", 1000, 1.0);

    return `
      <div class="wizard-step-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <h4 style="margin: 0; color: #fff; font-size: 1.15rem; font-family: var(--font-serif);">🔄 Kademeli Reaksiyon Döngüleri (Multi-Step Synthesis Engine)</h4>
            <p style="font-size: 0.8rem; color: var(--text-dim); margin: 0.2rem 0 0 0;">
              Birden fazla ardışık reaksiyondan oluşan endüstriyel ve simyasal döngüleri (kalsinasyon, söndürme, çökelme, sabunlaşma) kümülatif kütle ve entalpi dengesiyle modelleyin.
            </p>
          </div>
          <span class="badge badge-gold">Kademeli Kütle & Entalpi Dengesi</span>
        </div>

        <div class="wizard-input-grid">
          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Sentez Döngüsü Yolu:</label>
            <select id="wz-casc-pathway" class="filter-select" style="width: 100%;">
              <option value="bordeaux_mixture_cycle" selected>Kireç Döngüsü & Bordo Bulamacı (3 Kademe)</option>
              <option value="wood_ash_soap_cycle">Kül Suyu Potasından Doğal Arap Sabunu (3 Kademe)</option>
              <option value="solvay_soda_cycle">Solvay Prosesi & Çamaşır Sodası Sentezi (3 Kademe)</option>
            </select>
          </div>
          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Başlangıç Hammadde Kütlesi (g):</label>
            <input type="number" id="wz-casc-mass" class="wizard-num-input" value="1000" min="10" max="100000" step="50" style="width: 100%;">
          </div>
          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Verim Faktörü (Reaktör Kalitesi):</label>
            <select id="wz-casc-eff" class="filter-select" style="width: 100%;">
              <option value="1.0" selected>Nominal (%100 Standart Laboratuvar Verimi)</option>
              <option value="0.9">Zorlu Saha Koşulları (%90 Verim)</option>
              <option value="1.05">Optimize Endüstriyel Reaktör (+%5 Artış)</option>
            </select>
          </div>
        </div>

        <div id="wz-casc-result-container">
          ${renderCascadeCalculationView(calc)}
        </div>
      </div>
    `;
  }

  function renderCascadeCalculationView(calc) {
    const stepsHtml = calc.steps.map(s => `
      <div style="background: rgba(0,0,0,0.35); border-left: 3px solid var(--teal-light); border-radius: 4px; padding: 0.65rem 0.85rem; margin-bottom: 0.5rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.4rem;">
          <strong style="color: #fff; font-size: 0.82rem;">Kademe ${s.stepNumber}: ${escapeHtml(s.title)}</strong>
          <span style="font-size: 0.72rem; color: var(--gold-light); background: rgba(245,158,11,0.1); padding: 0.15rem 0.5rem; border-radius: 4px;">
            ${s.tempC}°C | ${escapeHtml(s.reactionType)}
          </span>
        </div>
        <div style="font-family: monospace; font-size: 0.76rem; color: #38bdf8; margin: 0.25rem 0;">
          ${escapeHtml(s.equation)}
        </div>
        <div style="display: flex; gap: 1rem; font-size: 0.75rem; color: #cbd5e1; flex-wrap: wrap;">
          <span>Girdi: <strong>${s.inputMassG} g</strong> (${escapeHtml(s.inputMaterial)})</span>
          <span>➔ Ürün: <strong style="color: #4ade80;">${s.actualMassG} g</strong> (${escapeHtml(s.outputMaterial)})</span>
          <span>Verim: <strong>%${s.stepYieldPct}</strong></span>
          <span>Entalpi: <strong>${s.deltaH_kJ_mol} kJ/mol</strong></span>
        </div>
        <div style="font-size: 0.72rem; color: #94a3b8; margin-top: 0.2rem; font-style: italic;">
          ⚠️ Kayıp Mekanizması: ${escapeHtml(s.lossMechanism)} (Kayıp: ${s.lossMassG} g)
        </div>
      </div>
    `).join("");

    return `
      <div class="wizard-result-box">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem; flex-wrap: wrap; gap: 0.5rem;">
          <div style="font-size: 0.84rem; font-weight: 700; color: var(--gold-light);">
            📊 Kademeli Reaksiyon Özeti: ${escapeHtml(calc.pathwayName)}
          </div>
          <span class="badge badge-teal">${calc.totalStepsCount} Reaksiyon Kademesi</span>
        </div>

        <div class="wizard-stat-grid" style="grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));">
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #38bdf8;">${calc.initialInputMassG} g</span>
            <span class="stat-lbl">Başlangıç Girdisi</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #4ade80;">${calc.finalOutputMassG} g</span>
            <span class="stat-lbl">Nihai Net Ürün</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #fbbf24;">%${calc.cumulativeYieldPct}</span>
            <span class="stat-lbl">Kümülatif Verim</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #f87171;">${calc.totalEnthalpySumKJ} kJ</span>
            <span class="stat-lbl">Toplam Entalpi (ΣΔH°)</span>
          </div>
        </div>

        <div style="margin: 0.85rem 0 0.5rem 0;">
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--teal-light); margin-bottom: 0.4rem;">
            🔬 Reaksiyon Kademeleri ve Kütle Akış Diyagramı:
          </div>
          ${stepsHtml}
        </div>

        <div style="background: rgba(0,0,0,0.3); border-radius: 4px; padding: 0.75rem; margin-bottom: 0.85rem;">
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--gold-light); margin-bottom: 0.25rem;">
            🌡️ Isıl Bilanço & Proses Değerlendirmesi:
          </div>
          <p style="margin: 0; font-size: 0.78rem; color: #cbd5e1; line-height: 1.5;">
            ${escapeHtml(calc.netThermalProfile)}. ${escapeHtml(calc.description)}
          </p>
        </div>

        <div style="display: flex; justify-content: flex-end;">
          <button id="btn-apply-casc-wizard" class="btn-wizard-apply" data-pathway="${escapeHtml(calc.pathwayKey)}" data-initial-mass="${calc.initialInputMassG}">
            <span>⚡</span> Bu Kademeli Döngüyü Behere Yükle & Başlat
          </button>
        </div>
      </div>
    `;
  }

  // --- WIZARD 14: Solvent Recovery & Condenser Duty Balancer ---
  function renderWizardRecovery() {
    const calc = window.LabWizard.calculateSolventRecovery("ethanol", 500, 10, 1013.25, 0.15);

    return `
      <div class="wizard-step-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <h4 style="margin: 0; color: #fff; font-size: 1.15rem; font-family: var(--font-serif);">♻️ Çözücü Geri Kazanım & Kondenser Yükü Dengeleyici</h4>
            <p style="font-size: 0.8rem; color: var(--text-dim); margin: 0.2rem 0 0 0;">
              Rotavap, Soxhlet veya imbik damıtmasında solvent buharlarının yoğuşma verimini, soğutucu yükünü (Watt) ve atmosfere kaçan buhar kaybını hesaplayın.
            </p>
          </div>
          <span class="badge badge-teal">Yoğuşma Isısı & Antoine Buhar Dengesi</span>
        </div>

        <div class="wizard-input-grid">
          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Geri Kazanılacak Çözücü:</label>
            <select id="wz-rec-solvent" class="filter-select" style="width: 100%;">
              <option value="ethanol" selected>Etanol (%96 Biyolojik Alkol - Tb: 78.3°C)</option>
              <option value="isopropanol">İzopropil Alkol (IPA - Tb: 82.6°C)</option>
              <option value="acetone">Aseton (Dimetil Keton - Tb: 56.1°C)</option>
              <option value="ethyl_acetate">Etil Asetat (Ester - Tb: 77.1°C)</option>
              <option value="methanol">Metanol (Odun Ruhu - Tb: 64.7°C)</option>
              <option value="water">Saf Su (H2O - Tb: 100°C)</option>
            </select>
          </div>
          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Damıtma / Buharlaşma Hızı (mL/saat):</label>
            <input type="number" id="wz-rec-rate" class="wizard-num-input" value="500" min="50" max="50000" step="50" style="width: 100%;">
          </div>
          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Soğutma Suyu Sıcaklığı (°C):</label>
            <input type="number" id="wz-rec-coolant" class="wizard-num-input" value="10" min="-15" max="35" step="1" style="width: 100%;">
          </div>
          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Sistem Basıncı (mbar):</label>
            <input type="number" id="wz-rec-press" class="wizard-num-input" value="1013" min="20" max="2000" step="10" style="width: 100%;">
          </div>
        </div>

        <div id="wz-rec-result-container">
          ${renderRecoveryCalculationView(calc)}
        </div>
      </div>
    `;
  }

  function renderRecoveryCalculationView(calc) {
    return `
      <div class="wizard-result-box">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem; flex-wrap: wrap; gap: 0.5rem;">
          <div style="font-size: 0.84rem; font-weight: 700; color: var(--teal-light);">
            📊 Yoğuşma & Geri Kazanım Analizi: ${escapeHtml(calc.solventName)}
          </div>
          <span class="badge ${calc.recoveryYieldPct >= 93 ? 'badge-teal' : 'badge-gold'}">${calc.efficiencyRating}</span>
        </div>

        <div class="wizard-stat-grid" style="grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));">
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #4ade80;">%${calc.recoveryYieldPct}</span>
            <span class="stat-lbl">Geri Kazanım Verimi</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #38bdf8;">${calc.recoveredRateMlH} mL/h</span>
            <span class="stat-lbl">Geri Kazanılan Sıvı</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: ${calc.ventLossMlH > 25 ? '#f87171' : '#fbbf24'};">${calc.ventLossMlH} mL/h</span>
            <span class="stat-lbl">Tahliye Buhar Kaybı</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #f59e0b;">${calc.coolingDutyWatts} W</span>
            <span class="stat-lbl">Gereken Soğutma Gücü</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #a855f7;">${calc.operatingBoilingPointC}°C</span>
            <span class="stat-lbl">Çalışma Kaynama Noktası</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #60a5fa;">${calc.requiredCoolingWaterFlowL_h} L/h</span>
            <span class="stat-lbl">Min. Su Debisi (ΔT: 3°C)</span>
          </div>
        </div>

        <div style="background: rgba(0,0,0,0.3); border-radius: 4px; padding: 0.75rem; margin-bottom: 0.85rem;">
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--gold-light); margin-bottom: 0.25rem;">
            🔬 Mühendislik Değerlendirmesi & Güvenlik Önerisi:
          </div>
          <p style="margin: 0; font-size: 0.78rem; color: #cbd5e1; line-height: 1.5;">
            ${escapeHtml(calc.engineeringAdvice)}
          </p>
          <div style="margin-top: 0.35rem; font-size: 0.76rem; color: #94a3b8; font-style: italic;">
            💡 Fiziksel Parametreler: Buharlaşma Gizli Isısı: ${calc.latentHeatVap_kJ_kg} kJ/kg | LMTD: ${calc.lmtdC}°C | Kondenser Çıkış Denge Basıncı: ${calc.exitVaporPressureMbar} mbar.
          </div>
        </div>

        <div style="display: flex; justify-content: flex-end;">
          <button id="btn-apply-rec-wizard" class="btn-wizard-apply" data-solvent="${escapeHtml(calc.solventName)}" data-rate="${calc.recoveredRateMlH}">
            <span>⚡</span> Bu Geri Kazanım Parametrelerini Behere Aktar & Başlat
          </button>
        </div>
      </div>
    `;
  }

  // --- WIZARD 15: Solid-Liquid Extraction & Leaching Kinetics ---
  function renderWizardKinetics() {
    const calc = window.LabWizard.calculateExtractionKinetics("polyphenols_tea", "medium_cut", 50, 500, 40, 4.0);

    const botanicals = window.LabWizard.EXTRACTION_BOTANICAL_PROFILES || {};
    const particles = window.LabWizard.EXTRACTION_PARTICLE_SIZES || {};

    const activeOptions = Object.keys(botanicals).map(k => `
      <option value="${k}">${escapeHtml(botanicals[k].name)}</option>
    `).join("");

    const particleOptions = Object.keys(particles).map(k => `
      <option value="${k}" ${k === 'medium_cut' ? 'selected' : ''}>${escapeHtml(particles[k].name)}</option>
    `).join("");

    return `
      <div class="wizard-step-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <h4 style="margin: 0; color: #fff; font-size: 1.15rem; font-family: var(--font-serif);">⏳ Katı-Sıvı Ekstraksiyon & Çözünme Kinetiği Dengeleyici</h4>
            <p style="font-size: 0.8rem; color: var(--text-dim); margin: 0.2rem 0 0 0;">
              Crank küresel difüzyon modeliyle bitkisel drog maserasyonunda süre, tane boyutu ve sıcaklığa bağlı aktif madde verimini hesaplayın, balast madde riskini önleyin.
            </p>
          </div>
          <span class="badge badge-teal">Difüzyon Kinetiği (Fick II & Crank)</span>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 0.85rem; margin-top: 1rem;">
          <div class="field-group">
            <label class="field-label" for="wz-kin-active">Bitkisel Aktif / Drog Tipi:</label>
            <select id="wz-kin-active" class="select-field">
              ${activeOptions}
            </select>
          </div>

          <div class="field-group">
            <label class="field-label" for="wz-kin-particle">Partikül / Öğütme Boyutu (r):</label>
            <select id="wz-kin-particle" class="select-field">
              ${particleOptions}
            </select>
          </div>

          <div class="field-group">
            <label class="field-label" for="wz-kin-biomass">Kuru Bitki Kütlesi (g):</label>
            <input id="wz-kin-biomass" type="number" class="input-field" value="50" min="1" max="10000" step="5">
          </div>

          <div class="field-group">
            <label class="field-label" for="wz-kin-solv-vol">Çözücü Hacmi (mL):</label>
            <input id="wz-kin-solv-vol" type="number" class="input-field" value="500" min="10" max="50000" step="50">
          </div>

          <div class="field-group">
            <label class="field-label" for="wz-kin-temp">Maserasyon Sıcaklığı (°C):</label>
            <input id="wz-kin-temp" type="number" class="input-field" value="40" min="5" max="95" step="1">
          </div>

          <div class="field-group">
            <label class="field-label" for="wz-kin-duration">Ekstraksiyon Süresi (Saat):</label>
            <input id="wz-kin-duration" type="number" class="input-field" value="4.0" min="0.1" max="168" step="0.5">
          </div>
        </div>

        <div id="wz-kin-result-container">
          ${renderKineticsCalculationView(calc)}
        </div>
      </div>
    `;
  }

  function renderKineticsCalculationView(calc) {
    const curveRows = (calc.progressionCurve || []).map(p => `
      <tr style="border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 0.78rem;">
        <td style="padding: 0.35rem 0.5rem; color: #cbd5e1;">${p.hours} saat</td>
        <td style="padding: 0.35rem 0.5rem; font-weight: 700; color: ${p.yieldPct >= 90 ? '#4ade80' : (p.yieldPct >= 70 ? '#38bdf8' : '#fbbf24')};">%${p.yieldPct}</td>
        <td style="padding: 0.35rem 0.5rem; color: #94a3b8;">${p.extractedMg} mg</td>
      </tr>
    `).join("");

    return `
      <div class="wizard-result-box">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem; flex-wrap: wrap; gap: 0.5rem;">
          <div style="font-size: 0.84rem; font-weight: 700; color: var(--teal-light);">
            📊 Katı-Sıvı Difüzyon Kinetiği: ${escapeHtml(calc.activeName)}
          </div>
          <span class="badge ${calc.yieldPct >= 70 && calc.yieldPct <= 96 ? 'badge-teal' : (calc.yieldPct < 70 ? 'badge-gold' : 'badge-danger')}">${escapeHtml(calc.efficiencyRating)}</span>
        </div>

        <div class="wizard-stat-grid" style="grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));">
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #4ade80;">%${calc.yieldPct}</span>
            <span class="stat-lbl">Ekstraksiyon Verimi</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #38bdf8;">${calc.extractedActiveMg} mg</span>
            <span class="stat-lbl">Çözünen Aktif Madde</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #fbbf24;">${calc.solutionConcentrationMgMl} mg/mL</span>
            <span class="stat-lbl">Ekstre Konsantrasyonu</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #a855f7;">${calc.timeTo95PctHours} saat</span>
            <span class="stat-lbl">Optimal Süre (%95 Hedef)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #60a5fa;">${calc.solidLiquidRatio}</span>
            <span class="stat-lbl">Katı / Sıvı Oranı (g:mL)</span>
          </div>
        </div>

        <div style="background: rgba(0,0,0,0.3); border-radius: 4px; padding: 0.75rem; margin-bottom: 0.85rem;">
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--gold-light); margin-bottom: 0.25rem;">
            🔬 Farmasötik Değerlendirme & Balast Madde Uyarısı:
          </div>
          <p style="margin: 0; font-size: 0.78rem; color: #cbd5e1; line-height: 1.5;">
            ${escapeHtml(calc.engineeringAdvice)}
          </p>
          <div style="margin-top: 0.35rem; font-size: 0.76rem; color: #94a3b8; font-style: italic;">
            💡 Kinetik Parametreler: Efektif Difüzyon Deff: ${calc.effectiveDiffusivityM2S} m²/s | Tane Yarıçapı: ${calc.particleRadiusMm} mm | Önerilen Solvent: ${escapeHtml(calc.recommendedSolvent)}.
          </div>
        </div>

        <!-- Extraction Progression Timeline Table -->
        <div style="margin-bottom: 0.85rem; background: rgba(0,0,0,0.2); border-radius: 4px; padding: 0.6rem;">
          <div style="font-size: 0.78rem; font-weight: 700; color: var(--teal-light); margin-bottom: 0.4rem;">
            📈 Süreye Göre Ekstraksiyon İlerleme Tablosu:
          </div>
          <table style="width: 100%; border-collapse: collapse; text-align: left;">
            <thead>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1); font-size: 0.74rem; color: var(--text-dim);">
                <th style="padding: 0.3rem 0.5rem;">Süre</th>
                <th style="padding: 0.3rem 0.5rem;">Verim (%)</th>
                <th style="padding: 0.3rem 0.5rem;">Çözünen Madde (mg)</th>
              </tr>
            </thead>
            <tbody>
              ${curveRows}
            </tbody>
          </table>
        </div>

        <div style="display: flex; justify-content: flex-end;">
          <button id="btn-apply-kin-wizard" class="btn-wizard-apply" data-active="${escapeHtml(calc.activeName)}" data-biomass="${calc.biomassG}" data-solv="${calc.solventVolMl}" data-temp="${calc.tempC}" data-hours="${calc.durationHours}">
            <span>⚡</span> Bu Maserasyon Parametrelerini Behere Aktar & Başlat
          </button>
        </div>
      </div>
    `;
  }

  // --- WIZARD 16: Gas Absorption & Henry's Law Solubility ---
  function renderWizardAbsorption() {
    const calc = window.LabWizard.calculateGasAbsorption("co2_carbonation", 1.0, 3.5, 4.0, 100.0);

    const species = window.LabWizard.GAS_ABSORPTION_SPECIES || {};

    const speciesOptions = Object.keys(species).map(k => `
      <option value="${k}">${escapeHtml(species[k].name)}</option>
    `).join("");

    return `
      <div class="wizard-step-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <h4 style="margin: 0; color: #fff; font-size: 1.15rem; font-family: var(--font-serif);">🫧 Gaz Çözünürlüğü & Henry Yasası Dengeleyici</h4>
            <p style="font-size: 0.8rem; color: var(--text-dim); margin: 0.2rem 0 0 0;">
              Sıvılarda gaz çözünürlüğü, soda/şampanya karbonasyonu, biyoreaktör havalandırması ve kükürtleme dengelerini Van 't Hoff sıcaklık katsayılarıyla hesaplayın.
            </p>
          </div>
          <span class="badge badge-teal">Henry Yasası (kH & P_gas)</span>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 0.85rem; margin-top: 1rem;">
          <div class="field-group">
            <label class="field-label" for="wz-abs-species">Gaz Çeşidi & Proses:</label>
            <select id="wz-abs-species" class="select-field">
              ${speciesOptions}
            </select>
          </div>

          <div class="field-group">
            <label class="field-label" for="wz-abs-vol">Sıvı Hacmi (Litre):</label>
            <input id="wz-abs-vol" type="number" class="input-field" value="1.0" min="0.1" max="1000" step="0.5">
          </div>

          <div class="field-group">
            <label class="field-label" for="wz-abs-press">Toplam Sistem Basıncı (bar):</label>
            <input id="wz-abs-press" type="number" class="input-field" value="3.5" min="0.1" max="50" step="0.1">
          </div>

          <div class="field-group">
            <label class="field-label" for="wz-abs-temp">Sıvı Sıcaklığı (°C):</label>
            <input id="wz-abs-temp" type="number" class="input-field" value="4.0" min="0" max="95" step="1">
          </div>

          <div class="field-group">
            <label class="field-label" for="wz-abs-purity">Tepe Boşluğu Gaz Saflığı (%):</label>
            <input id="wz-abs-purity" type="number" class="input-field" value="100" min="1" max="100" step="5">
          </div>
        </div>

        <div id="wz-abs-result-container">
          ${renderAbsorptionCalculationView(calc)}
        </div>
      </div>
    `;
  }

  function renderAbsorptionCalculationView(calc) {
    return `
      <div class="wizard-result-box">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem; flex-wrap: wrap; gap: 0.5rem;">
          <div style="font-size: 0.84rem; font-weight: 700; color: var(--teal-light);">
            📊 Gaz Çözünürlük Dengesi: ${escapeHtml(calc.speciesName)}
          </div>
          <span class="badge ${calc.totalPressureBar <= 3.0 ? 'badge-teal' : (calc.totalPressureBar <= 5.0 ? 'badge-gold' : 'badge-danger')}">${escapeHtml(calc.safetyRating)}</span>
        </div>

        <div class="wizard-stat-grid" style="grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));">
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #38bdf8;">${calc.gasVolumesRatio} GV</span>
            <span class="stat-lbl">Gaz Hacmi (Karbonasyon Oranı)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #4ade80;">${calc.concentrationG_L} g/L</span>
            <span class="stat-lbl">Doymuş Derişim (${calc.concentrationMg_L} ppm)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #fbbf24;">${calc.totalDissolvedMassG} g</span>
            <span class="stat-lbl">Partideki Toplam Çözünen Gaz</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #a855f7;">${calc.gasVolStpL} L (STP)</span>
            <span class="stat-lbl">Eşdeğer Normal Gaz Hacmi</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #60a5fa;">${calc.tempEffectMultiplier}x</span>
            <span class="stat-lbl">Sıcaklık Çarpanı (25°C'ye göre)</span>
          </div>
        </div>

        <div style="background: rgba(0,0,0,0.3); border-radius: 4px; padding: 0.75rem; margin-bottom: 0.85rem;">
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--gold-light); margin-bottom: 0.25rem;">
            🔬 Mühendislik Tavsiyesi & Kap Güvenlik Sınırı:
          </div>
          <p style="margin: 0; font-size: 0.78rem; color: #cbd5e1; line-height: 1.5;">
            ${escapeHtml(calc.engineeringAdvice)}
          </p>
          <div style="margin-top: 0.35rem; font-size: 0.76rem; color: ${calc.totalPressureBar > 5.0 ? '#f87171' : '#94a3b8'};">
            ⚠️ <strong>Kap Basınç Uyarısı:</strong> ${escapeHtml(calc.pressureWarning)}
          </div>
          <div style="margin-top: 0.35rem; font-size: 0.76rem; color: #94a3b8; font-style: italic;">
            💡 Henry Sabiti (kH): ${calc.henryConstantMolLBar} mol/(L·bar) | Kısmi Basınç: ${calc.partialPressureBar} bar | Molarite: ${calc.molarityMolL} M.
          </div>
        </div>

        <div style="display: flex; justify-content: flex-end;">
          <button id="btn-apply-abs-wizard" class="btn-wizard-apply" data-species="${escapeHtml(calc.speciesName)}" data-mass="${calc.totalDissolvedMassG}" data-press="${calc.totalPressureBar}" data-temp="${calc.tempC}">
            <span>⚡</span> Bu Gazlama & Basınç Parametrelerini Behere Aktar
          </button>
        </div>
      </div>
    `;
  }

  // --- WIZARD 17: Hydrogel & Gelling Agent Rheology Engine ---
  function renderWizardRheology() {
    const calc = window.LabWizard.calculateHydrogelRheology("carbopol_940", 250, 0.5, 7.0);

    const polymers = window.LabWizard.HYDROGEL_POLYMER_PROFILES || {};

    const polymerOptions = Object.keys(polymers).map(k => `
      <option value="${k}">${escapeHtml(polymers[k].name)}</option>
    `).join("");

    return `
      <div class="wizard-step-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <h4 style="margin: 0; color: #fff; font-size: 1.15rem; font-family: var(--font-serif);">🧴 Jel & Hidrojel Kıvamlaştırıcı Reoloji Dengeleyici</h4>
            <p style="font-size: 0.8rem; color: var(--text-dim); margin: 0.2rem 0 0 0;">
              Karbomer, ksantan sakızı, sodyum aljinat, jelatin ve HPMC selüloz hidrojellerinin polimer kütlesini, nötralizasyon/çapraz bağlayıcı oranını ve viskozite profilini hesaplayın.
            </p>
          </div>
          <span class="badge badge-teal">Polimer Reolojisi & Çapraz Bağlama</span>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 0.85rem; margin-top: 1rem;">
          <div class="field-group">
            <label class="field-label" for="wz-rheo-polymer">Jelleştirici Polimer Türü:</label>
            <select id="wz-rheo-polymer" class="select-field">
              ${polymerOptions}
            </select>
          </div>

          <div class="field-group">
            <label class="field-label" for="wz-rheo-vol">Parti Hacmi (mL):</label>
            <input id="wz-rheo-vol" type="number" class="input-field" value="250" min="10" max="50000" step="50">
          </div>

          <div class="field-group">
            <label class="field-label" for="wz-rheo-conc">Polimer Konsantrasyonu (% w/v):</label>
            <input id="wz-rheo-conc" type="number" class="input-field" value="0.5" min="0.05" max="15.0" step="0.1">
          </div>

          <div class="field-group">
            <label class="field-label" for="wz-rheo-ph">Hedef Çözelti pH Değeri:</label>
            <input id="wz-rheo-ph" type="number" class="input-field" value="7.0" min="3.0" max="10.0" step="0.1">
          </div>
        </div>

        <div id="wz-rheo-result-container">
          ${renderRheologyCalculationView(calc)}
        </div>
      </div>
    `;
  }

  function renderRheologyCalculationView(calc) {
    return `
      <div class="wizard-result-box">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem; flex-wrap: wrap; gap: 0.5rem;">
          <div style="font-size: 0.84rem; font-weight: 700; color: var(--teal-light);">
            📊 Hidrojel Reoloji Formülasyonu: ${escapeHtml(calc.polymerName)}
          </div>
          <span class="badge badge-teal">${escapeHtml(calc.textureRating)}</span>
        </div>

        <div class="wizard-stat-grid" style="grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));">
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #38bdf8;">${calc.estimatedViscosityCP.toLocaleString()} cP</span>
            <span class="stat-lbl">Tahmini Dinamik Viskozite</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #4ade80;">${calc.polymerMassG} g</span>
            <span class="stat-lbl">Gereken Kuru Polimer</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #fbbf24;">${calc.solventMassG} mL</span>
            <span class="stat-lbl">Saf Su / Taşıyıcı Sıvı</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #a855f7;">%${calc.concentrationPct}</span>
            <span class="stat-lbl">Nihai Polimer Oranı</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #60a5fa;">${calc.neutralizationRequired ? `${calc.neutralizerMassG} g TEA` : (calc.crosslinkerRequired ? `${calc.crosslinkerMassG} g CaCl2` : 'Gerekmez')}</span>
            <span class="stat-lbl">Aktivasyon Bileşeni</span>
          </div>
        </div>

        <!-- Neutralization and Dispersion Box -->
        <div style="background: rgba(0,0,0,0.3); border-radius: 4px; padding: 0.75rem; margin-bottom: 0.85rem;">
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--gold-light); margin-bottom: 0.25rem;">
            ⚗️ Jelleşme & Nötralizasyon Protokolü:
          </div>
          <p style="margin: 0; font-size: 0.78rem; color: #cbd5e1; line-height: 1.5;">
            ${escapeHtml(calc.neutralizationNotice)}
          </p>
          <div style="margin-top: 0.4rem; font-size: 0.76rem; color: #38bdf8;">
            🥣 <strong>Dispersiyon & Topaklanma (Lumping) Önleme:</strong> ${escapeHtml(calc.dispersionTechnique)}
          </div>
          <div style="margin-top: 0.35rem; font-size: 0.76rem; color: #94a3b8; font-style: italic;">
            💡 Akış Tipi: ${escapeHtml(calc.rheologyType)} | Önerilen Uygulama: ${escapeHtml(calc.recommendedUse)}
          </div>
        </div>

        <div style="display: flex; justify-content: flex-end;">
          <button id="btn-apply-rheo-wizard" class="btn-wizard-apply" data-polymer="${escapeHtml(calc.polymerName)}" data-mass="${calc.polymerMassG}" data-water="${calc.solventMassG}" data-visc="${calc.estimatedViscosityCP}">
            <span>⚡</span> Bu Hidrojel Formülasyonunu Behere Aktar
          </button>
        </div>
      </div>
    `;
  }

  // --- WIZARD 20: Solid-State Adsorption & Decolorization / Deodorization Balancer ---
  function renderWizardAdsorption() {
    const calc = window.LabWizard.calculateCarbonAdsorption("activated_carbon_powder", 1000, 150, 90, 50);

    const adsorbents = window.LabWizard.ADSORBENT_PROFILES || {};

    const adsorbentOptions = Object.keys(adsorbents).map(k => `
      <option value="${k}">${escapeHtml(adsorbents[k].name)}</option>
    `).join("");

    return `
      <div class="wizard-step-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <h4 style="margin: 0; color: #fff; font-size: 1.15rem; font-family: var(--font-serif);">🖤 Katı Adsorpsiyon, Renk & Koku Giderme Balansörü (Langmuir & Freundlich)</h4>
            <p style="font-size: 0.8rem; color: var(--text-dim); margin: 0.2rem 0 0 0;">
              Bitkisel ekstraktlar, distilatlar ve maserasyon yağlarındaki istenmeyen koyu renk pigmentlerini (klorofil, tanen), kokuları ve safsızlıkları aktif karbon veya bentonit kiliyle giderme.
            </p>
          </div>
          <span class="badge badge-teal">İzoterm Denge Kinetiği</span>
        </div>

        <!-- Inputs Row -->
        <div class="wizard-input-grid">
          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Adsorban Malzeme Türü:</label>
            <select id="wz-ads-adsorbent" class="filter-select" style="width: 100%;">
              ${adsorbentOptions}
            </select>
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">İşlenecek Sıvı Hacmi (mL):</label>
            <input type="number" id="wz-ads-vol" class="search-input" value="1000" min="10" max="50000" step="50">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Başlangıç Kirletici/Renk (mg/L - ppm):</label>
            <input type="number" id="wz-ads-conc" class="search-input" value="150" min="5" max="5000" step="5" title="Çözeltideki tahmini pigment veya organik safsızlık konsantrasyonu">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Hedef Giderme / Ağartma Oranı (%):</label>
            <input type="number" id="wz-ads-removal" class="search-input" value="90" min="20" max="99" step="1" title="Hedeflenen renk veya koku temizleme yüzdesi">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">İşlem Sıcaklığı (°C):</label>
            <input type="number" id="wz-ads-temp" class="search-input" value="50" min="10" max="100" step="5" title="Fiziksel adsorpsiyon için 25-50°C, yağ ağartma için 80-90°C idealdir">
          </div>
        </div>

        <!-- Dynamic Result Card -->
        <div id="wz-ads-result-container">
          ${renderAdsorptionCalculationView(calc)}
        </div>
      </div>
    `;
  }

  function renderAdsorptionCalculationView(calc) {
    return `
      <div class="wizard-result-box">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem; flex-wrap: wrap; gap: 0.5rem;">
          <div style="font-size: 0.84rem; font-weight: 700; color: var(--teal-light);">
            📊 Adsorpsiyon Formülasyonu: ${escapeHtml(calc.adsorbentName)}
          </div>
          <span class="badge badge-teal">Denge Konsantrasyonu: ${calc.equilibriumConcPpm} mg/L (ppm)</span>
        </div>

        <div class="wizard-stats-row">
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #38bdf8;">${calc.recommendedMassG} g</span>
            <span class="stat-lbl">Gereken Adsorban (1.25x Marj)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #34d399;">${calc.dosageG_L} g/L</span>
            <span class="stat-lbl">Çözelti Dozajı (%${calc.dosagePctWv} w/v)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #fbbf24;">${calc.bedVolumeMl} mL</span>
            <span class="stat-lbl">Adsorban Yatak Hacmi</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #a855f7;">${calc.designCapacityMg_g} mg/g</span>
            <span class="stat-lbl">Tasarım Kapasitesi (qe)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #f43f5e;">${calc.optimalContactTimeMin} Dk</span>
            <span class="stat-lbl">Önerilen Temas Süresi (${calc.operatingTempC}°C)</span>
          </div>
        </div>

        <!-- Adsorption Details and Filtration Aid Box -->
        <div style="background: rgba(0,0,0,0.3); border-radius: 4px; padding: 0.75rem; margin-bottom: 0.85rem;">
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--gold-light); margin-bottom: 0.25rem;">
            ⚗️ İzoterm Analizi & Süzme Protokolü:
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 0.4rem; font-size: 0.76rem; color: #cbd5e1;">
            <div>• Langmuir Kapasitesi ($q_{e,L}$): <strong>${calc.langmuirCapacityMg_g} mg/g</strong></div>
            <div>• Freundlich Kapasitesi ($q_{e,F}$): <strong>${calc.freundlichCapacityMg_g} mg/g</strong></div>
          </div>
          <p style="margin: 0; font-size: 0.78rem; color: #cbd5e1; line-height: 1.5;">
            ${escapeHtml(calc.description)}
          </p>
          <div style="margin-top: 0.4rem; font-size: 0.76rem; color: #38bdf8;">
            🛡️ <strong>Filtre Yardımcısı Uyarısı:</strong> ${escapeHtml(calc.filterAidNote)}
          </div>
          <div style="margin-top: 0.35rem; font-size: 0.76rem; color: #94a3b8; font-style: italic;">
            🎯 Hedef Safsızlıklar: ${escapeHtml(calc.targetImpurities)}
          </div>
        </div>

        <div style="display: flex; justify-content: flex-end;">
          <button id="btn-apply-ads-wizard" class="btn-wizard-apply" data-adsorbent="${escapeHtml(calc.adsorbentName)}" data-mass="${calc.recommendedMassG}" data-volume="${calc.batchVolumeMl}" data-temp="${calc.operatingTempC}">
            <span>⚡</span> Bu Adsorban Dozajını Behere Yükle & Başlat
          </button>
        </div>
      </div>
    `;
  }

  // --- WIZARD 21: Continuous Rotary Vacuum Drum Filtration (RVDF) & Cake Dewatering Balancer ---
  function renderWizardRVDF() {
    const calc = window.LabWizard.calculateVacuumFiltration("caco3_precipitate", 2.0, 100, 60, 1.0, 33.3, 1.5, 1.0);

    const slurries = window.LabWizard.FILTRATION_SLURRY_PROFILES || {};

    const slurryOptions = Object.keys(slurries).map(k => `
      <option value="${k}">${escapeHtml(slurries[k].name)}</option>
    `).join("");

    return `
      <div class="wizard-step-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <h4 style="margin: 0; color: #fff; font-size: 1.15rem; font-family: var(--font-serif);">🌀 Döner Vakum Tambur & Kek Filtrasyonu (RVDF & Darcy/Ruth Kinetiği)</h4>
            <p style="font-size: 0.8rem; color: var(--text-dim); margin: 0.2rem 0 0 0;">
              Sürekli döner tamburlu vakum filtrelerde (Rotary Vacuum Drum Filter) katı-sıvı faz ayrımı, kek kalınlığı, süzüntü akısı, yıkama suyu ihtiyacı ve vakum pompası boyutlandırması.
            </p>
          </div>
          <span class="badge badge-teal">Ruth Kek Filtrasyon Teorisi</span>
        </div>

        <!-- Inputs Row -->
        <div class="wizard-input-grid">
          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Çamur / Çökelti Türü:</label>
            <select id="wz-rvdf-slurry" class="filter-select" style="width: 100%;">
              ${slurryOptions}
            </select>
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Tambur Filtrasyon Alanı (m²):</label>
            <input type="number" id="wz-rvdf-area" class="search-input" value="2.0" min="0.1" max="50" step="0.5" title="Toplam silindirik tambur yüzey alanı (Pilot: 0.5-2 m², Sanayi: 5-50 m²)">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Katı Konsantrasyonu (g/L):</label>
            <input type="number" id="wz-rvdf-conc" class="search-input" value="100" min="10" max="500" step="10" title="Besleme çamurundaki kuru katı kütlesi (g/L veya kg/m³)">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Vakum Basıncı ΔP (kPa):</label>
            <input type="number" id="wz-rvdf-vac" class="search-input" value="60" min="15" max="90" step="5" title="Tambur içi işletme vakumu (Standart: 40-70 kPa)">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Tambur Devri (RPM):</label>
            <input type="number" id="wz-rvdf-speed" class="search-input" value="1.0" min="0.1" max="4.0" step="0.1" title="Dakikadaki dönüş sayısı (Tipik: 0.2 - 2.0 RPM)">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Tekne Daldırma Oranı (%):</label>
            <input type="number" id="wz-rvdf-subm" class="search-input" value="33.3" min="20" max="55" step="1" title="Tamburun çamur havuzuna batan açı yüzdesi (Tipik: %30-%37.5)">
          </div>
        </div>

        <!-- Dynamic Result Card -->
        <div id="wz-rvdf-result-container">
          ${renderRVDFCalculationView(calc)}
        </div>
      </div>
    `;
  }

  function renderRVDFCalculationView(calc) {
    return `
      <div class="wizard-result-box">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem; flex-wrap: wrap; gap: 0.5rem;">
          <div style="font-size: 0.84rem; font-weight: 700; color: var(--teal-light);">
            📊 Filtrasyon Performansı: ${escapeHtml(calc.slurryName)}
          </div>
          <span class="badge badge-teal">Kek Kalınlığı: ${calc.cakeThicknessMm} mm (${calc.dischargeSuitability})</span>
        </div>

        <div class="wizard-stats-row">
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #38bdf8;">${calc.filtrateRateL_h} L/h</span>
            <span class="stat-lbl">Süzüntü Akışı (${calc.filtrateRateM3_h} m³/h)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #34d399;">${calc.dryCakeRateKg_h} kg/h</span>
            <span class="stat-lbl">Kuru Kek Üretimi</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #fbbf24;">${calc.wetCakeRateKg_h} kg/h</span>
            <span class="stat-lbl">Yaş Kek (%${calc.residualMoisturePct} Nem)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #a855f7;">${calc.specificSolidsYield} kg/(m²·h)</span>
            <span class="stat-lbl">Spesifik Katı Verimi</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #f43f5e;">${calc.washLiquidDemandL_h} L/h</span>
            <span class="stat-lbl">Yıkama Suyu (%${calc.washEfficiencyPct} Verim)</span>
          </div>
        </div>

        <!-- Technical Diagnostics Box -->
        <div style="background: rgba(0,0,0,0.3); border-radius: 4px; padding: 0.75rem; margin-bottom: 0.85rem;">
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--gold-light); margin-bottom: 0.25rem;">
            ⚙️ Proses Dinamiği & Mühendislik Değerlendirmesi:
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 0.4rem; font-size: 0.76rem; color: #cbd5e1;">
            <div>• Tam Tur / Kek Oluşum Süresi: <strong>${calc.cycleTimeSec} sn / ${calc.filtrationTimeSec} sn</strong></div>
            <div>• Susuzlaştırma / Kuruma Süresi: <strong>${calc.dewateringTimeSec} sn</strong></div>
            <div>• Süzüntü Akısı (Flux): <strong>${calc.specificFiltrateFlux} L/(m²·h)</strong></div>
            <div>• Vakum Pompası İhtiyacı: <strong>${calc.airFlowRateM3_h} m³/h (${calc.airFlowRateCFM} CFM, ~${calc.pumpPowerKW} kW)</strong></div>
          </div>
          <div style="margin-top: 0.35rem; font-size: 0.76rem; color: #38bdf8;">
            📋 <strong>Kek Kalınlığı Değerlendirmesi:</strong> ${escapeHtml(calc.cakeEvaluation)}
          </div>
          <div style="margin-top: 0.3rem; font-size: 0.76rem; color: #94a3b8; font-style: italic;">
            💡 ${escapeHtml(calc.notes)}
          </div>
        </div>

        <div style="display: flex; justify-content: flex-end; gap: 0.5rem; flex-wrap: wrap;">
          <button id="btn-apply-rvdf-filtrate" class="btn btn-outline" style="font-size: 0.82rem; padding: 0.4rem 0.8rem;" data-slurry="${escapeHtml(calc.slurryName)}" data-volume="${calc.filtrateRateL_h}">
            <span>💧</span> Süzüntü Sıvısını Behere Aktar (${calc.filtrateRateL_h} L/h)
          </button>
          <button id="btn-apply-rvdf-cake" class="btn-wizard-apply" data-slurry="${escapeHtml(calc.slurryName)}" data-subid="${calc.substanceId}" data-dry="${calc.dryCakeRateKg_h}" data-wet="${calc.wetCakeRateKg_h}">
            <span>⚡</span> Filtre Kekini Behere Yükle (${calc.wetCakeRateKg_h} kg/h Yaş Kek)
          </button>
        </div>
      </div>
    `;
  }

  // --- WIZARD 22: Spray Drying & Powder Particle Sizing Balancer ---
  function renderWizardSpray() {
    const calc = window.LabWizard.calculateSprayDrying("maltodextrin_carrier", 5.0, 25, 165, 75, 20, 2.5);

    const profiles = window.LabWizard.SPRAY_DRYING_PROFILES || {};

    const profileOptions = Object.keys(profiles).map(k => `
      <option value="${k}">${escapeHtml(profiles[k].name)}</option>
    `).join("");

    return `
      <div class="wizard-step-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <h4 style="margin: 0; color: #fff; font-size: 1.15rem; font-family: var(--font-serif);">💨 Püskürtmeli Kurutma & Toz Boyutlandırma (Spray Drying & Camsı Geçiş)</h4>
            <p style="font-size: 0.8rem; color: var(--text-dim); margin: 0.2rem 0 0 0;">
              Sıvı ekstreleri, farmasötik dispersiyonları ve çözeltileri milisaniyeler içinde serbest akışkan mikrokürecik toz haline getirme, cidar yapışması (Tg) ve ısıtıcı güç boyutlandırması.
            </p>
          </div>
          <span class="badge badge-teal">Psikrometrik Kinetik & Tg</span>
        </div>

        <!-- Inputs Row -->
        <div class="wizard-input-grid">
          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Kurutulacak Besleme Türü:</label>
            <select id="wz-spray-profile" class="filter-select" style="width: 100%;">
              ${profileOptions}
            </select>
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Sıvı Besleme Debisi (L/h):</label>
            <input type="number" id="wz-spray-feed-rate" class="search-input" value="5.0" min="0.2" max="100" step="0.5" title="Kurutma kulesine basılan sıvı çözelti debisi (Pilot: 1-10 L/h, Sanayi: 20-200 L/h)">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Katı Madde Oranı (% w/w):</label>
            <input type="number" id="wz-spray-solids" class="search-input" value="25" min="2" max="55" step="1" title="Sıvıdaki çözünmüş/askıda kuru madde yüzdesi">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Giriş Sıcaklığı Tin (°C):</label>
            <input type="number" id="wz-spray-tin" class="search-input" value="165" min="110" max="250" step="5" title="Sıcak kurutma havası giriş sıcaklığı">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Çıkış Sıcaklığı Tout (°C):</label>
            <input type="number" id="wz-spray-tout" class="search-input" value="75" min="50" max="120" step="1" title="Egzoz havası ve ürün sıcaklığı (Tg sınırına dikkat edilmelidir)">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Atomizasyon Basıncı (bar):</label>
            <input type="number" id="wz-spray-press" class="search-input" value="2.5" min="0.5" max="6.0" step="0.5" title="Püskürtme nozulu basıncı (Basınç arttıkça damlacık küçülür)">
          </div>
        </div>

        <!-- Dynamic Result Card -->
        <div id="wz-spray-result-container">
          ${renderSprayCalculationView(calc)}
        </div>
      </div>
    `;
  }

  function renderSprayCalculationView(calc) {
    return `
      <div class="wizard-result-box">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem; flex-wrap: wrap; gap: 0.5rem;">
          <div style="font-size: 0.84rem; font-weight: 700; color: var(--teal-light);">
            📊 Püskürtmeli Kurutma Analizi: ${escapeHtml(calc.profileName)}
          </div>
          <span class="badge badge-teal">Ort. Partikül Çapı (d50): ${calc.meanParticleSizeUm} µm</span>
        </div>

        <div class="wizard-stats-row">
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #38bdf8;">${calc.totalPowderRateKg_h} kg/h</span>
            <span class="stat-lbl">Toz Üretim Hızı (%${calc.targetPowderMoisturePct} Nem)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #34d399;">${calc.cyclonePowderRateKg_h} kg/h</span>
            <span class="stat-lbl">Siklon Toplama (%94.5 Verim)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #fbbf24;">${calc.waterEvapRateKg_h} kg/h</span>
            <span class="stat-lbl">Su Buharlaşma Hızı</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #a855f7;">${calc.thermalEfficiencyPct}%</span>
            <span class="stat-lbl">Termal Kurutma Verimi</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #f43f5e;">${calc.heaterPowerKW} kW</span>
            <span class="stat-lbl">Elektrikli Isıtıcı Gücü</span>
          </div>
        </div>

        <!-- Technical Diagnostics Box -->
        <div style="background: rgba(0,0,0,0.3); border-radius: 4px; padding: 0.75rem; margin-bottom: 0.85rem;">
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--gold-light); margin-bottom: 0.25rem;">
            ⚙️ Kule Dinamiği & Termodinamik Değerlendirme:
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 0.4rem; font-size: 0.76rem; color: #cbd5e1;">
            <div>• Kurutma Havası Debisi: <strong>${calc.airFlowRateM3_h} m³/h (${calc.airFlowRateCFM} CFM)</strong></div>
            <div>• Atomizasyon Nozulu Türü: <strong>${escapeHtml(calc.atomizerType)}</strong></div>
            <div>• Püskürtme Damlacık Çapı ($D_{32}$): <strong>${calc.meanDropletSizeUm} µm</strong></div>
            <div>• Toz Hacimsel Üretim: <strong>${calc.powderBulkVolumeL_h} L/h</strong></div>
          </div>
          <div style="margin-top: 0.35rem; font-size: 0.76rem; color: ${calc.stickingSeverity === 'high' ? '#f43f5e' : (calc.stickingSeverity === 'medium' ? '#fbbf24' : '#34d399')}; font-weight: 600;">
            🛡️ ${escapeHtml(calc.stickingRisk)}
          </div>
          <div style="margin-top: 0.3rem; font-size: 0.76rem; color: #94a3b8; font-style: italic;">
            💡 ${escapeHtml(calc.notes)}
          </div>
        </div>

        <div style="display: flex; justify-content: flex-end;">
          <button id="btn-apply-spray-powder" class="btn-wizard-apply" data-name="${escapeHtml(calc.profileName)}" data-subid="${calc.substanceId}" data-powder="${calc.cyclonePowderRateKg_h}">
            <span>⚡</span> Üretilen Sprey Kuru Tozu Behere Yükle (${calc.cyclonePowderRateKg_h} kg/h)
          </button>
        </div>
      </div>
    `;
  }

  // --- WIZARD 23: Supercritical CO2 Extraction & Solute Density Balancer ---
  function renderWizardSupercritical() {
    const calc = window.LabWizard.calculateSupercriticalExtraction("caffeine_coffee", 5.0, 25.0, 250, 45, 3.0);

    const profiles = window.LabWizard.SUPERCRITICAL_EXTRACT_PROFILES || {};

    const profileOptions = Object.keys(profiles).map(k => `
      <option value="${k}">${escapeHtml(profiles[k].name)}</option>
    `).join("");

    return `
      <div class="wizard-step-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <h4 style="margin: 0; color: #fff; font-size: 1.15rem; font-family: var(--font-serif);">⚡ Süperkritik CO2 Ekstraksiyonu & Çözünürlük Dengesi (scCO2 & Chrastil)</h4>
            <p style="font-size: 0.8rem; color: var(--text-dim); margin: 0.2rem 0 0 0;">
              Sıfır çözücü kalıntısıyla narin aromaları ve biyoaktif etken maddeleri (kafein, kapsaisin, kurkumin, astaksantin) yüksek verimde saflaştırma, ko-çözücü (etanol) modifiyeri ve iki kademeli siklon ayrıştırma.
            </p>
          </div>
          <span class="badge badge-teal">Chrastil Kinetiği & scCO2</span>
        </div>

        <!-- Inputs Row -->
        <div class="wizard-input-grid">
          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Hammadde / Hedef Drog:</label>
            <select id="wz-sc-profile" class="filter-select" style="width: 100%;">
              ${profileOptions}
            </select>
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Kuru Drog Miktarı (kg):</label>
            <input type="number" id="wz-sc-feed-mass" class="search-input" value="5.0" min="0.1" max="1000" step="0.5" title="Ekstraktör kolonuna doldurulan öğütülmüş kuru hammadde">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">CO2 Akış Debisi (kg/h):</label>
            <input type="number" id="wz-sc-co2-flow" class="search-input" value="25.0" min="1.0" max="500" step="1.0" title="Yüksek basınç pompası sıvı/süperkritik CO2 devir hızı">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Ekstraksiyon Basıncı (bar):</label>
            <input type="number" id="wz-sc-pressure" class="search-input" value="250" min="50" max="450" step="10" title="Süperkritik ekstraktör reaktör basıncı (Kritik: >73.8 bar)">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Ekstraksiyon Sıcaklığı (°C):</label>
            <input type="number" id="wz-sc-temp" class="search-input" value="45" min="25" max="85" step="1" title="Süperkritik ekstraktör ceket sıcaklığı (Kritik: >31.1°C)">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Ko-çözücü Etanol (% w/w):</label>
            <input type="number" id="wz-sc-cosolvent" class="search-input" value="3.0" min="0.0" max="15.0" step="0.5" title="Polar etken maddelerin çözünürlüğünü artıran etanol/su modifiyeri">
          </div>
        </div>

        <!-- Dynamic Result Card -->
        <div id="wz-sc-result-container">
          ${renderSupercriticalCalculationView(calc)}
        </div>
      </div>
    `;
  }

  function renderSupercriticalCalculationView(calc) {
    return `
      <div class="wizard-result-box">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem; flex-wrap: wrap; gap: 0.5rem;">
          <div style="font-size: 0.84rem; font-weight: 700; color: var(--teal-light);">
            📊 Süperkritik CO2 Ekstraksiyon Analizi: ${escapeHtml(calc.profileName)}
          </div>
          <span class="badge badge-teal">scCO2 Yoğunluğu: ${calc.extractorDensityKg_m3} kg/m³</span>
        </div>

        <div class="wizard-stats-row">
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #38bdf8;">${calc.recoveredActiveMassG} g</span>
            <span class="stat-lbl">Saf Aktif Geri Kazanımı (%${calc.targetRecoveryPct})</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #34d399;">${calc.extractionTimeMinutes} Dk</span>
            <span class="stat-lbl">Gereken Süre (${calc.extractionTimeHours} h)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #fbbf24;">${calc.effectiveSolubilityG_kg} g/kg</span>
            <span class="stat-lbl">Denge Çözünürlüğü (${calc.cosolventEnhancementFactor}x Modifiye)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #a855f7;">${calc.totalCO2CirculatedKg} kg</span>
            <span class="stat-lbl">Dolaşan CO2 (S/F: ${calc.solventToFeedRatio})</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #f43f5e;">${calc.pumpPowerKW} kW</span>
            <span class="stat-lbl">Yüksek Basınç Pompası (${calc.totalEnergyKWh} kWh)</span>
          </div>
        </div>

        <!-- Technical Diagnostics Box -->
        <div style="background: rgba(0,0,0,0.3); border-radius: 4px; padding: 0.75rem; margin-bottom: 0.85rem;">
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--gold-light); margin-bottom: 0.25rem;">
            ⚙️ İki Kademeli Fraksiyonlama & Proses Emniyet Değerlendirmesi:
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 0.4rem; font-size: 0.76rem; color: #cbd5e1;">
            <div>• 1. Separatör (120 bar, 50°C, ${calc.separator1DensityKg_m3} kg/m³): <strong>${calc.separator1WaxMassG} g Ağır Vakslar & Lipidler</strong></div>
            <div>• 2. Separatör (50 bar, 25°C, ${calc.separator2DensityKg_m3} kg/m³): <strong>${calc.separator2PureExtractG} g Çözücüsüz Saf Ekstrakt</strong></div>
            <div>• Kapalı Çevrim CO2 Geri Kazanımı: <strong>%${calc.co2RecycleEfficiencyPct} (Döngü Kaybı: ${calc.co2MakeupLossKg} kg)</strong></div>
            <div>• Ko-çözücü Tüketimi (%${calc.cosolventPct} EtOH): <strong>${calc.cosolventConsumptionKg} kg Etanol</strong></div>
          </div>
          <div style="margin-top: 0.35rem; font-size: 0.76rem; color: ${calc.safetySeverity === 'high' ? '#f43f5e' : (calc.safetySeverity === 'medium' ? '#fbbf24' : '#34d399')}; font-weight: 600;">
            🛡️ ${escapeHtml(calc.safetyRating)}
          </div>
          <div style="margin-top: 0.3rem; font-size: 0.76rem; color: #94a3b8; font-style: italic;">
            💡 ${escapeHtml(calc.notes)}
          </div>
        </div>

        <div style="display: flex; justify-content: flex-end;">
          <button id="btn-apply-sc-extract" class="btn-wizard-apply" data-name="${escapeHtml(calc.activeCompound)}" data-subid="${calc.substanceId}" data-mass="${calc.recoveredActiveMassG}">
            <span>⚡</span> Saf Süperkritik Ekstraktı Behere Aktar (${calc.recoveredActiveMassG} g)
          </button>
        </div>
      </div>
    `;
  }

  // --- WIZARD 24: Cross-Flow Membrane Separation & RO / UF Balancer ---
  function renderWizardMembrane() {
    const calc = window.LabWizard.calculateMembraneSeparation("ro_seawater_desalination", 500, 10.0, 60.0, 25.0, 40.0);

    const profiles = window.LabWizard.MEMBRANE_SEPARATION_PROFILES || {};

    const profileOptions = Object.keys(profiles).map(k => `
      <option value="${k}">${escapeHtml(profiles[k].name)}</option>
    `).join("");

    return `
      <div class="wizard-step-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <h4 style="margin: 0; color: #fff; font-size: 1.15rem; font-family: var(--font-serif);">🌐 Çapraz Akışlı Membran Ayırma & Ters Ozmoz / Ultrafiltrasyon (RO, NF, UF, MF)</h4>
            <p style="font-size: 0.8rem; color: var(--text-dim); margin: 0.2rem 0 0 0;">
              Endüstriyel ve farmasötik çapraz akış (cross-flow) membran filtrasyonu; Darcy-Starling akısı, Van 't Hoff ozmotik karşı basıncı (ΔΠ), konsantrasyon polarizasyonu (CP) keki ve spesifik enerji tüketimi (SEC) balansörü.
            </p>
          </div>
          <span class="badge badge-teal">Darcy-Starling & Osmotic ΔΠ</span>
        </div>

        <!-- Inputs Row -->
        <div class="wizard-input-grid">
          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Uygulama / Ayırma Profili:</label>
            <select id="wz-mem-profile" class="filter-select" style="width: 100%;">
              ${profileOptions}
            </select>
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Besleme Akış Debisi (L/h):</label>
            <input type="number" id="wz-mem-feed-flow" class="search-input" value="500" min="1" max="50000" step="10" title="Membran modülüne giren ham çözelti debisi">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Membran Toplam Alanı (m²):</label>
            <input type="number" id="wz-mem-area" class="search-input" value="10.0" min="0.1" max="2000" step="0.5" title="Spiral sargılı veya içi boş elyaf modül aktif membran yüzey alanı">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Transmembran Basınç TMP (bar):</label>
            <input type="number" id="wz-mem-tmp" class="search-input" value="60.0" min="0.2" max="120" step="0.5" title="Membran giriş ve çıkış ortalaması ile permeat tarafı arasındaki basınç farkı">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Besleme Sıcaklığı (°C):</label>
            <input type="number" id="wz-mem-temp" class="search-input" value="25" min="5" max="70" step="1" title="Çözelti sıcaklığı (viskozite ve membran geçirgenliğini belirler)">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Hedef Geri Kazanım Oranı (%):</label>
            <input type="number" id="wz-mem-recovery" class="search-input" value="40" min="5" max="95" step="5" title="Permeat olarak geri kazanılması hedeflenen hacimsel yüzde">
          </div>
        </div>

        <!-- Dynamic Result Card -->
        <div id="wz-mem-result-container">
          ${renderMembraneCalculationView(calc)}
        </div>
      </div>
    `;
  }

  function renderMembraneCalculationView(calc) {
    return `
      <div class="wizard-result-box">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem; flex-wrap: wrap; gap: 0.5rem;">
          <div style="font-size: 0.84rem; font-weight: 700; color: var(--teal-light);">
            📊 Membran Ayırma Analizi: ${escapeHtml(calc.profileName)}
          </div>
          <span class="badge badge-teal">${escapeHtml(calc.membraneType)} (${escapeHtml(calc.mwco)})</span>
        </div>

        <div class="wizard-stats-row">
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #38bdf8;">${calc.permeateFluxLMH} LMH</span>
            <span class="stat-lbl">Permeat Akısı (NDP: ${calc.netDrivingPressureBar} bar)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #34d399;">${calc.permeateFlowRate_L_h} L/h</span>
            <span class="stat-lbl">Permeat Debisi (${calc.permeateFlowRate_m3_h} m³/h)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #fbbf24;">%${calc.rejectionPct}</span>
            <span class="stat-lbl">Tutulma Oranı (Permeat: ${calc.permeateConcGL} g/L)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #a855f7;">${calc.retentateFlowRate_L_h} L/h</span>
            <span class="stat-lbl">Retentat (${calc.retentateConcGL} g/L, CF: ${calc.concentrationFactor}x)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #f43f5e;">${calc.osmoticPressureBar} bar</span>
            <span class="stat-lbl">Ozmotik Basınç (ΔΠ Van 't Hoff)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #60a5fa;">${calc.pumpPowerKW} kW</span>
            <span class="stat-lbl">Pompa Gücü (SEC: ${calc.specificEnergyKWh_m3} kWh/m³)</span>
          </div>
        </div>

        <!-- Technical Diagnostics Box -->
        <div style="background: rgba(0,0,0,0.3); border-radius: 4px; padding: 0.75rem; margin-bottom: 0.85rem;">
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--gold-light); margin-bottom: 0.25rem;">
            ⚙️ Hidrodinamik, Konsantrasyon Polarizasyonu & Kirlenme (Fouling) Değerlendirmesi:
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 0.4rem; font-size: 0.76rem; color: #cbd5e1;">
            <div>• Transmembran Basınç (TMP): <strong>${calc.transmembranePressureBar} bar (Net NDP: ${calc.netDrivingPressureBar} bar)</strong></div>
            <div>• Konsantrasyon Polarizasyon Modülü (CP): <strong>${calc.concentrationPolarizationCP}</strong> (Sıcaklık Düzeltmesi: ${calc.tempCorrectionFactor}x)</div>
            <div>• Gerçek Hacimsel Geri Kazanım: <strong>%${calc.actualRecoveryPct} (Besleme: ${calc.feedFlow_L_h} L/h)</strong></div>
            <div>• Madde Dengesi: <strong>Besleme: ${calc.feedConcGL} g/L ➔ Retentat: ${calc.retentateConcGL} g/L</strong></div>
          </div>
          <div style="margin-top: 0.35rem; font-size: 0.76rem; color: ${calc.foulingSeverity === 'high' ? '#f43f5e' : (calc.foulingSeverity === 'medium' ? '#fbbf24' : '#34d399')}; font-weight: 600;">
            🛡️ ${escapeHtml(calc.foulingEvaluation)}
          </div>
          <div style="margin-top: 0.3rem; font-size: 0.76rem; color: #94a3b8; font-style: italic;">
            💡 ${escapeHtml(calc.notes)}
          </div>
        </div>

        <div style="display: flex; justify-content: flex-end; gap: 0.75rem; flex-wrap: wrap;">
          <button id="btn-apply-membrane-permeate" class="btn-wizard-apply" data-name="${escapeHtml(calc.targetSolute)}" data-subid="${calc.substanceId}-permeate" data-conc="${calc.permeateConcGL}" data-flow="${calc.permeateFlowRate_L_h}" style="background: rgba(56, 189, 248, 0.2); border: 1px solid rgba(56, 189, 248, 0.5);">
            <span>💧</span> Arıtılmış Permeatı Behere Aktar (${calc.permeateFlowRate_L_h} L/h)
          </button>
          <button id="btn-apply-membrane-retentate" class="btn-wizard-apply" data-name="${escapeHtml(calc.targetSolute)}" data-subid="${calc.substanceId}" data-conc="${calc.retentateConcGL}" data-flow="${calc.retentateFlowRate_L_h}">
            <span>🎯</span> Konsantre Retentatı Behere Aktar (${calc.retentateConcGL} g/L)
          </button>
        </div>
      </div>
    `;
  }

  // --- WIZARD 25: Bioreactor & Microbial Fermentation Kinetics Balancer ---
  function renderWizardBioreactor() {
    const calc = window.LabWizard.calculateBioreactorFermentation("yeast_scerevisiae", 100.0, 0.5, 40.0, 1.0, 1.0, 30.0);

    const profiles = window.LabWizard.FERMENTATION_PROFILES || {};

    const profileOptions = Object.keys(profiles).map(k => `
      <option value="${k}">${escapeHtml(profiles[k].name)}</option>
    `).join("");

    return `
      <div class="wizard-step-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <h4 style="margin: 0; color: #fff; font-size: 1.15rem; font-family: var(--font-serif);">🧫 Biyoreaktör & Mikrobiyal Fermantasyon Kinetiği (Monod, OTR & kLa)</h4>
            <p style="font-size: 0.8rem; color: var(--text-dim); margin: 0.2rem 0 0 0;">
              Endüstriyel biyoteknoloji ve biyofarmasötik hücre kültürü; Monod spesifik büyüme kinetiği (μ), biyokütle ve metabolit verimi, çözünmüş oksijen (DO) ve metabolik soğutma yükü balansörü.
            </p>
          </div>
          <span class="badge badge-teal">Monod & OTR / OUR Balancer</span>
        </div>

        <!-- Inputs Row -->
        <div class="wizard-input-grid">
          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Mikroorganizma / Biyoproses:</label>
            <select id="wz-bio-profile" class="filter-select" style="width: 100%;">
              ${profileOptions}
            </select>
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Çalışma Hacmi (L):</label>
            <input type="number" id="wz-bio-volume" class="search-input" value="100.0" min="0.5" max="50000" step="10" title="Biyoreaktör içindeki besiyeri ve sıvı kültürü net çalışma hacmi">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Aşılama Biyokütlesi X0 (g/L):</label>
            <input type="number" id="wz-bio-inoculum" class="search-input" value="0.5" min="0.01" max="50.0" step="0.1" title="Başlangıç inokülüm kuru hücre konsantrasyonu">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Başlangıç Substratı S0 (g/L):</label>
            <input type="number" id="wz-bio-substrate" class="search-input" value="40.0" min="1.0" max="300.0" step="5" title="Besiyerine eklenen karbon kaynağı (glikoz/sukroz) derişimi">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Kalıntı Substrat Sf (g/L):</label>
            <input type="number" id="wz-bio-residual" class="search-input" value="1.0" min="0.01" max="50.0" step="0.5" title="Hasat anında reaktörde kalan tüketilmemiş substrat">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Havalandırma Hızı (vvm):</label>
            <input type="number" id="wz-bio-vvm" class="search-input" value="1.0" min="0.0" max="4.0" step="0.1" title="Dakika başına sıvı hacmi kadar hava debisi (vessel volume air per minute)">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Fermantasyon Sıcaklığı (°C):</label>
            <input type="number" id="wz-bio-temp" class="search-input" value="30.0" min="15.0" max="50.0" step="1" title="Biyoreaktör ceket kontrol sıcaklığı">
          </div>
        </div>

        <!-- Dynamic Result Card -->
        <div id="wz-bio-result-container">
          ${renderBioreactorCalculationView(calc)}
        </div>
      </div>
    `;
  }

  function renderBioreactorCalculationView(calc) {
    return `
      <div class="wizard-result-box">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem; flex-wrap: wrap; gap: 0.5rem;">
          <div style="font-size: 0.84rem; font-weight: 700; color: var(--teal-light);">
            📊 Fermantasyon Kinetiği Analizi: ${escapeHtml(calc.profileName)}
          </div>
          <span class="badge badge-teal">${escapeHtml(calc.organismType)}</span>
        </div>

        <div class="wizard-stats-row">
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #38bdf8;">${calc.finalBiomassGL} g/L</span>
            <span class="stat-lbl">Son Biyokütle (Toplam: ${calc.totalBiomassKg} kg)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #34d399;">${calc.totalProductKg} kg</span>
            <span class="stat-lbl">Hedef Ürün (${calc.finalProductGL} g/L ${escapeHtml(calc.targetProduct)})</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #fbbf24;">${calc.batchDurationHours} h</span>
            <span class="stat-lbl">Fermantasyon Süresi (İkiye Katlanma: ${calc.doublingTimeHours} h)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #a855f7;">${calc.muSpecificGrowthRate} 1/h</span>
            <span class="stat-lbl">Özgül Büyüme Hızı (μ)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #60a5fa;">%${calc.dissolvedOxygenPct}</span>
            <span class="stat-lbl">Çözünmüş Oksijen DO (kLa: ${calc.kLa_h} 1/h)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #f43f5e;">${calc.metabolicHeatKW} kW</span>
            <span class="stat-lbl">Metabolik Isı & Soğutma Gücü</span>
          </div>
        </div>

        <!-- Technical Diagnostics Box -->
        <div style="background: rgba(0,0,0,0.3); border-radius: 4px; padding: 0.75rem; margin-bottom: 0.85rem;">
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--gold-light); margin-bottom: 0.25rem;">
            ⚙️ Kütle Dengesi, Gaz Transferi & Biyoreaktör İşletme Değerlendirmesi:
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 0.4rem; font-size: 0.76rem; color: #cbd5e1;">
            <div>• Substrat Tüketimi: <strong>${calc.substrateConsumedGL} g/L (Kalan: ${calc.residualSubstrateGL} g/L)</strong></div>
            <div>• Hava Basma Debisi: <strong>${calc.airFlowRate_m3_h} m³/h (${calc.aerationVVM} vvm)</strong></div>
            <div>• Çalışma Hacmi: <strong>${calc.workingVolumeL} L (${calc.tempC}°C Sıcaklık)</strong></div>
            <div>• Toplam Ürün Kütlesi: <strong>${calc.totalProductG} g (${escapeHtml(calc.productName)})</strong></div>
          </div>
          <div style="margin-top: 0.35rem; font-size: 0.76rem; color: ${calc.bioSeverity === 'high' ? '#f43f5e' : (calc.bioSeverity === 'medium' ? '#fbbf24' : '#34d399')}; font-weight: 600;">
            🛡️ ${escapeHtml(calc.bioStatus)}
          </div>
          <div style="margin-top: 0.3rem; font-size: 0.76rem; color: #94a3b8; font-style: italic;">
            💡 ${escapeHtml(calc.notes)}
          </div>
        </div>

        <div style="display: flex; justify-content: flex-end;">
          <button id="btn-apply-fermentation-broth" class="btn-wizard-apply" data-name="${escapeHtml(calc.productName)}" data-subid="${calc.substanceId}" data-product="${calc.totalProductG}" data-biomass="${calc.totalBiomassKg}">
            <span>🧫</span> Fermente Kültürü Behere Aktar (${calc.productName} - ${calc.totalProductKg} kg)
          </button>
        </div>
      </div>
    `;
  }

  // --- WIZARD 26: Electrochemical Cell, Galvanic Corrosion & Faraday Electrolysis Balancer ---
  function renderWizardElectro() {
    const calc = window.LabWizard.calculateElectrochemicalCell("cu_acid_plating", 5.0, 30.0, 150.0, 2.5, 25.0);

    const profiles = window.LabWizard.ELECTROCHEMICAL_CELL_PROFILES || {};

    const profileOptions = Object.keys(profiles).map(k => `
      <option value="${k}">${escapeHtml(profiles[k].name)}</option>
    `).join("");

    return `
      <div class="wizard-step-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <h4 style="margin: 0; color: #fff; font-size: 1.15rem; font-family: var(--font-serif);">⚡ Elektrokimyasal Hücre, Galvanik Korozyon & Faraday Elektroliz Balansörü</h4>
            <p style="font-size: 0.8rem; color: var(--text-dim); margin: 0.2rem 0 0 0;">
              Faraday elektroliz yasaları, Nernst hücre potansiyeli, akım yoğunluğu (A/dm²), kaplama mikron kalınlığı ve spesifik enerji tüketimi (kWh/kg) analizi.
            </p>
          </div>
          <span class="badge badge-teal">Faraday & Nernst Balancer</span>
        </div>

        <!-- Inputs Row -->
        <div class="wizard-input-grid">
          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Elektrokimyasal Proses / Banyo:</label>
            <select id="wz-el-profile" class="filter-select" style="width: 100%;">
              ${profileOptions}
            </select>
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Elektrik Akımı I (Amper):</label>
            <input type="number" id="wz-el-current" class="search-input" value="5.0" min="0.01" max="5000" step="0.5" title="Hücreden veya elektroliz banyosundan geçen toplam doğru akım">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Kaplama / Elektroliz Süresi (Dakika):</label>
            <input type="number" id="wz-el-time" class="search-input" value="30.0" min="0.5" max="10080" step="5" title="Katotta metal birikimi veya elektrolitik reaksiyon süresi">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Katot / İş Parçası Alanı (cm²):</label>
            <input type="number" id="wz-el-area" class="search-input" value="150.0" min="1.0" max="100000" step="10" title="Akımın dağıldığı katot yüzey alanı (100 cm² = 1 dm²)">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Hücre Çalışma Voltajı (Volt):</label>
            <input type="number" id="wz-el-voltage" class="search-input" value="2.5" min="0.2" max="48.0" step="0.1" title="Anot ve katot arasına uygulanan doğru akım gerilimi">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Elektrolit Sıcaklığı (°C):</label>
            <input type="number" id="wz-el-temp" class="search-input" value="25.0" min="10.0" max="95.0" step="1" title="Elektroliz banyosu termostat sıcaklığı">
          </div>
        </div>

        <!-- Dynamic Result Card -->
        <div id="wz-el-result-container">
          ${renderElectroCalculationView(calc)}
        </div>
      </div>
    `;
  }

  function renderElectroCalculationView(calc) {
    return `
      <div class="wizard-result-box">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem; flex-wrap: wrap; gap: 0.5rem;">
          <div style="font-size: 0.84rem; font-weight: 700; color: var(--teal-light);">
            ⚡ Elektrokimyasal Analiz: ${escapeHtml(calc.profileName)}
          </div>
          <span class="badge badge-teal">%${calc.faradaicEfficiencyPct} Faradaik Verim (${escapeHtml(calc.ionSymbol)})</span>
        </div>

        <div class="wizard-stats-row">
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #38bdf8;">${calc.actualMassG >= 1000 ? calc.actualMassKg + ' kg' : calc.actualMassG + ' g'}</span>
            <span class="stat-lbl">Biriken Kütle (Teorik: ${calc.theoreticalMassG} g)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #34d399;">${calc.coatingThicknessUm} µm</span>
            <span class="stat-lbl">Kaplama Kalınlığı (${calc.cathodeAreaDm2} dm² Alan)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #fbbf24;">${calc.currentDensity_A_dm2} A/dm²</span>
            <span class="stat-lbl">Akım Yoğunluğu (J)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #a855f7;">${calc.powerWatts} W</span>
            <span class="stat-lbl">Güç (${calc.energyKWh} kWh Tüketim)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #60a5fa;">${calc.specificEnergyKWh_kg} kWh/kg</span>
            <span class="stat-lbl">Spesifik Enerji Tüketimi (SEC)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #f43f5e;">${calc.nernstPotentialV} V</span>
            <span class="stat-lbl">Nernst Potansiyeli (E°: ${calc.standardPotentialV} V)</span>
          </div>
        </div>

        <!-- Technical Diagnostics Box -->
        <div style="background: rgba(0,0,0,0.3); border-radius: 4px; padding: 0.75rem; margin-bottom: 0.85rem;">
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--gold-light); margin-bottom: 0.25rem;">
            ⚙️ Faraday Elektroliz Dengesi & Hücre Parametreleri:
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 0.4rem; font-size: 0.76rem; color: #cbd5e1;">
            <div>• Akım & Süre: <strong>${calc.currentAmps} A (${calc.platingTimeMin} dk / ${Math.round(calc.platingTimeMin * 60)} sn)</strong></div>
            <div>• Hücre Voltajı & Sıcaklık: <strong>${calc.cellVoltageV} V (${calc.tempC}°C)</strong></div>
            <div>• Hedef Metal / Ürün: <strong>${escapeHtml(calc.metalName)} (${calc.ionSymbol})</strong></div>
            <div>• Katot Yüzey Alanı: <strong>${calc.cathodeAreaCm2} cm² (${calc.cathodeAreaDm2} dm²)</strong></div>
          </div>
          <div style="margin-top: 0.35rem; font-size: 0.76rem; color: ${calc.diagnosticSeverity === 'high' ? '#f43f5e' : (calc.diagnosticSeverity === 'medium' ? '#fbbf24' : '#34d399')}; font-weight: 600;">
            🛡️ ${escapeHtml(calc.diagnosticStatus)}
          </div>
          <div style="margin-top: 0.3rem; font-size: 0.76rem; color: #94a3b8; font-style: italic;">
            💡 ${escapeHtml(calc.notes)}
          </div>
        </div>

        <div style="display: flex; justify-content: flex-end;">
          <button id="btn-apply-electro-metal" class="btn-wizard-apply" data-name="${escapeHtml(calc.metalName)}" data-subid="${calc.substanceId}" data-mass="${calc.actualMassG}">
            <span>⚡</span> Kaplanan / Üretilen Metali Behere Aktar (${calc.metalName} - ${calc.actualMassG} g)
          </button>
        </div>
      </div>
    `;
  }

  // --- WIZARD 27: Fluidized Bed Granulation, Drying & Wurster Coating Balancer ---
  function renderWizardFluidBed() {
    const calc = window.LabWizard.calculateFluidizedBed("pharma_wet_granulation", 25.0, 120.0, 65.0, 2.2, 50.0, 30.0);

    const profiles = window.LabWizard.FLUIDIZED_BED_PROFILES || {};

    const profileOptions = Object.keys(profiles).map(k => `
      <option value="${k}">${escapeHtml(profiles[k].name)}</option>
    `).join("");

    return `
      <div class="wizard-step-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <h4 style="margin: 0; color: #fff; font-size: 1.15rem; font-family: var(--font-serif);">🌪️ Akışkan Yataklı Granülasyon, Kurutma & Wurster Kaplama Balansörü</h4>
            <p style="font-size: 0.8rem; color: var(--text-dim); margin: 0.2rem 0 0 0;">
              Wen & Yu minimum akışkanlaşma hızı (Umf), terminal taşınma hızı (Ut), psikrometrik termal buharlaşma kapasitesi, aglomerasyon partikül büyümesi ve Wurster mikron film kaplama analizi.
            </p>
          </div>
          <span class="badge badge-teal">Wen & Yu / Wurster Balancer</span>
        </div>

        <!-- Inputs Row -->
        <div class="wizard-input-grid">
          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Proses / Ürün Tipi:</label>
            <select id="wz-fb-profile" class="filter-select" style="width: 100%;">
              ${profileOptions}
            </select>
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Yatak Şarj Kütlesi (kg):</label>
            <input type="number" id="wz-fb-mass" class="search-input" value="25.0" min="0.5" max="2000" step="5" title="Akışkan yatak haznesine yüklenen kuru toz veya çekirdek pelet kütlesi">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Başlangıç Partikül Çapı d50 (µm):</label>
            <input type="number" id="wz-fb-dp" class="search-input" value="120.0" min="10" max="5000" step="10" title="Ham tozun veya pelet çekirdeklerinin başlangıç ortalama çapı">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Giriş Havası Sıcaklığı (°C):</label>
            <input type="number" id="wz-fb-temp" class="search-input" value="65.0" min="20.0" max="160.0" step="1" title="Akışkan yatağa üflenen koşullandırılmış havanın giriş sıcaklığı">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Hava Hızı Faktörü (ku):</label>
            <input type="number" id="wz-fb-ku" class="search-input" value="2.2" min="0.1" max="8.0" step="0.1" title="Minimum akışkanlaşma hızına göre işletme hızı çarpanı (Nominal 1.8 - 3.0)">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Sıvı Sprey Debisi (g/dakika):</label>
            <input type="number" id="wz-fb-spray" class="search-input" value="50.0" min="0.0" max="1000.0" step="5" title="Bağlayıcı solüsyon veya kaplama polimerinin nozul püskürtme debisi">
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; color: var(--gold-light); margin-bottom: 0.25rem;">Proses Süresi (Dakika):</label>
            <input type="number" id="wz-fb-time" class="search-input" value="30.0" min="1.0" max="480.0" step="5" title="Granülasyon, püskürtme ve kurutma süresi">
          </div>
        </div>

        <!-- Dynamic Result Card -->
        <div id="wz-fb-result-container">
          ${renderFluidBedCalculationView(calc)}
        </div>
      </div>
    `;
  }

  function renderFluidBedCalculationView(calc) {
    return `
      <div class="wizard-result-box">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem; flex-wrap: wrap; gap: 0.5rem;">
          <div style="font-size: 0.84rem; font-weight: 700; color: var(--teal-light);">
            🌪️ Akışkan Yatak Analizi: ${escapeHtml(calc.profileName)}
          </div>
          <span class="badge badge-teal">${escapeHtml(calc.processType)}</span>
        </div>

        <div class="wizard-stats-row">
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #38bdf8;">${calc.finalDpUm} µm</span>
            <span class="stat-lbl">Son Boyut (Başlangıç: ${calc.initialDpUm} µm${calc.coatingThicknessUm > 0 ? ', Film: ' + calc.coatingThicknessUm + ' µm' : ''})</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #34d399;">${calc.finalBatchMassKg} kg</span>
            <span class="stat-lbl">Ürün Kütlesi (+${calc.binderSolidsAddedKg} kg Katı Madde)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #fbbf24;">${calc.airFlowRate_m3_h} m³/h</span>
            <span class="stat-lbl">Hava Debisi (${calc.airFlowRate_cfm} CFM, Uo: ${calc.superficialVelocity_ms} m/s)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #a855f7;">${calc.u_mf_ms} m/s</span>
            <span class="stat-lbl">Umf Hızı (Taşınma Sınırı Ut: ${calc.u_terminal_ms} m/s)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #60a5fa;">${calc.evaporativeCapacity_g_min} g/min</span>
            <span class="stat-lbl">Kurutma Kapasitesi (Sprey: ${calc.sprayRate_g_min} g/min)</span>
          </div>
          <div class="wizard-stat-chip">
            <span class="stat-val" style="color: #f43f5e;">${calc.wettingRatio}</span>
            <span class="stat-lbl">Wetting Ratio (Hedef Nem: %${calc.targetResidualMoisturePct})</span>
          </div>
        </div>

        <!-- Technical Diagnostics Box -->
        <div style="background: rgba(0,0,0,0.3); border-radius: 4px; padding: 0.75rem; margin-bottom: 0.85rem;">
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--gold-light); margin-bottom: 0.25rem;">
            ⚙️ Akışkanlaşma Rejimi, Termal Denge & Kolon Parametreleri:
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 0.4rem; font-size: 0.76rem; color: #cbd5e1;">
            <div>• Sıcaklık Profili: <strong>Giriş ${calc.inletTempC}°C ➔ Çıkış ${calc.exhaustTempC}°C</strong></div>
            <div>• Isıtıcı & Fan Gücü: <strong>Isıtıcı: ${calc.heaterPowerKW} kW | Fan: ${calc.blowerPowerKW} kW</strong></div>
            <div>• Püskürtülen Sıvı: <strong>${calc.totalLiquidSprayedKg} kg (${calc.processTimeMin} dakika)</strong></div>
            <div>• Kolon Taban Çapı: <strong>Ø ${Math.round(calc.bedDiameterM * 100)} cm (${calc.fluidizationRegime})</strong></div>
          </div>
          <div style="margin-top: 0.35rem; font-size: 0.76rem; color: ${calc.diagnosticSeverity === 'high' ? '#f43f5e' : (calc.diagnosticSeverity === 'medium' ? '#fbbf24' : '#34d399')}; font-weight: 600;">
            🛡️ ${escapeHtml(calc.diagnosticStatus)}
          </div>
          <div style="margin-top: 0.3rem; font-size: 0.76rem; color: #94a3b8; font-style: italic;">
            💡 ${escapeHtml(calc.notes)}
          </div>
        </div>

        <div style="display: flex; justify-content: flex-end;">
          <button id="btn-apply-fluidbed-granules" class="btn-wizard-apply" data-name="${escapeHtml(calc.productDescription)}" data-subid="${calc.substanceId}" data-mass="${calc.finalBatchMassKg}">
            <span>🌪️</span> Üretilen Granül / Peletleri Behere Aktar (${calc.productDescription} - ${calc.finalBatchMassKg} kg)
          </button>
        </div>
      </div>
    `;
  }

  // --- Dynamic Listeners for Wizard Form Inputs & Apply Actions ---
  function attachWizardDynamicListeners() {
    if (!dom.wizardModalBody || !window.LabWizard) return;

    // 1. Soap Form Inputs
    const soapOil = document.getElementById("wz-soap-oil");
    const soapMass = document.getElementById("wz-soap-mass");
    const soapType = document.getElementById("wz-soap-type");
    const soapSf = document.getElementById("wz-soap-superfat");
    const soapContainer = document.getElementById("wz-soap-result-container");

    const updateSoap = () => {
      if (!soapOil || !soapContainer) return;
      const res = window.LabWizard.calculateSaponification(soapOil.value, soapMass.value, soapType.value, soapSf.value, 33);
      soapContainer.innerHTML = renderSoapCalculationView(res);
      attachWizardDynamicListeners();
    };

    soapOil?.addEventListener("change", updateSoap);
    soapMass?.addEventListener("input", updateSoap);
    soapType?.addEventListener("change", updateSoap);
    soapSf?.addEventListener("input", updateSoap);

    // Apply Soap Button
    document.getElementById("btn-apply-soap-wizard")?.addEventListener("click", (e) => {
      const btn = e.currentTarget;
      const oilMass = parseFloat(btn.dataset.oilMass) || 500;
      const lyeMass = parseFloat(btn.dataset.lyeMass) || 64;
      const waterMass = parseFloat(btn.dataset.waterMass) || 165;
      const isLiquid = btn.dataset.lyeFormula === "KOH";

      // Apply to vessel
      applyWizardToVessel([
        { subId: "sub-oil-olive", name: "Zeytinyağı", amount: oilMass, unit: "g" },
        { subId: isLiquid ? "sub-base-koh" : "sub-base-naoh", name: isLiquid ? "Potasyum Hidroksit" : "Sodyum Hidroksit", amount: lyeMass, unit: "g" },
        { subId: "sub-pure-water", name: "Distile Su", amount: waterMass, unit: "mL" }
      ], 45.0, 30, 1013.25, "MIX", "Doğal Sabunlaşma Reaksiyonu");
    });

    // 2. Hydrodistillation Form Inputs
    const hydroPlant = document.getElementById("wz-hydro-plant");
    const hydroMass = document.getElementById("wz-hydro-mass");
    const hydroPressure = document.getElementById("wz-hydro-pressure");
    const hydroContainer = document.getElementById("wz-hydro-result-container");

    const updateHydro = () => {
      if (!hydroPlant || !hydroContainer) return;
      const res = window.LabWizard.calculateHydrodistillation(hydroPlant.value, hydroMass.value, hydroPressure.value);
      hydroContainer.innerHTML = renderHydroCalculationView(res);
      attachWizardDynamicListeners();
    };

    hydroPlant?.addEventListener("change", updateHydro);
    hydroMass?.addEventListener("input", updateHydro);
    hydroPressure?.addEventListener("change", updateHydro);

    // Apply Hydro Button
    document.getElementById("btn-apply-hydro-wizard")?.addEventListener("click", (e) => {
      const btn = e.currentTarget;
      const pMass = parseFloat(btn.dataset.plantMass) || 200;
      const wMl = parseFloat(btn.dataset.waterMl) || 500;
      const temp = parseFloat(btn.dataset.temp) || 100;
      const time = parseInt(btn.dataset.time, 10) || 45;
      const press = parseFloat(btn.dataset.pressure) || 1013;

      applyWizardToVessel([
        { subId: "sub-plant-lavender", name: "Lavanta / Aromatik Bitki", amount: pMass, unit: "g" },
        { subId: "sub-pure-water", name: "Distile Su", amount: wMl, unit: "mL" }
      ], temp, time, press, "DISTILL", "Esansiyel Yağ & Hidrosol Damıtması");
    });

    // 2.5. Extraction Form Inputs
    const extPlant = document.getElementById("wz-ext-plant");
    const extSolvent = document.getElementById("wz-ext-solvent");
    const extMethod = document.getElementById("wz-ext-method");
    const extMass = document.getElementById("wz-ext-mass");
    const extRatio = document.getElementById("wz-ext-ratio");
    const extContainer = document.getElementById("wz-ext-result-container");

    const updateExt = () => {
      if (!extPlant || !extContainer) return;
      const res = window.LabWizard.calculateSolventExtraction(
        extPlant.value,
        extSolvent.value,
        extMethod.value,
        extMass.value,
        extRatio.value
      );
      extContainer.innerHTML = renderExtractCalculationView(res);
      attachWizardDynamicListeners();
    };

    extPlant?.addEventListener("change", updateExt);
    extSolvent?.addEventListener("change", updateExt);
    extMethod?.addEventListener("change", updateExt);
    extMass?.addEventListener("input", updateExt);
    extRatio?.addEventListener("input", updateExt);

    // Apply Extraction Button
    document.getElementById("btn-apply-ext-wizard")?.addEventListener("click", (e) => {
      const btn = e.currentTarget;
      const pMass = parseFloat(btn.dataset.plantMass) || 50;
      const pName = btn.dataset.plantName || "Bitkisel Hammadde";
      const sMl = parseFloat(btn.dataset.solventMl) || 500;
      const sName = btn.dataset.solventName || "Etanol (%70)";
      const temp = parseFloat(btn.dataset.temp) || 55;
      const time = parseInt(btn.dataset.time, 10) || 60;

      applyWizardToVessel([
        { subId: "sub-botanical-extract", name: pName, amount: pMass, unit: "g" },
        { subId: "sub-solv-extraction", name: sName, amount: sMl, unit: "mL" }
      ], temp, time, 1013.25, "HEAT", "Fitokimyasal Katı-Sıvı Ekstraksiyonu");
    });

    // 3. Ointment Form Inputs
    const ointActive = document.getElementById("wz-oint-active");
    const ointDose = document.getElementById("wz-oint-dose");
    const ointTotal = document.getElementById("wz-oint-total");
    const ointBase = document.getElementById("wz-oint-base");
    const ointContainer = document.getElementById("wz-oint-result-container");

    const updateOint = () => {
      if (!ointActive || !ointContainer) return;
      const res = window.LabWizard.calculateOintmentBatch(ointActive.value, ointDose.value, ointTotal.value, ointBase.value);
      ointContainer.innerHTML = renderOintmentCalculationView(res);
      attachWizardDynamicListeners();
    };

    ointActive?.addEventListener("input", updateOint);
    ointDose?.addEventListener("input", updateOint);
    ointTotal?.addEventListener("input", updateOint);
    ointBase?.addEventListener("change", updateOint);

    // Apply Ointment Button
    document.getElementById("btn-apply-oint-wizard")?.addEventListener("click", (e) => {
      const btn = e.currentTarget;
      const activeG = parseFloat(btn.dataset.activeG) || 2;
      const activeName = btn.dataset.activeName || "Biyoaktif Etken Madde";
      const waxG = parseFloat(btn.dataset.waxG) || 15;
      const oilG = parseFloat(btn.dataset.oilG) || 83;
      const temp = parseFloat(btn.dataset.temp) || 62;

      applyWizardToVessel([
        { subId: "sub-act-custom", name: activeName, amount: activeG, unit: "g" },
        { subId: "sub-wax-beeswax", name: "Doğal Balmumu", amount: waxG, unit: "g" },
        { subId: "sub-oil-olive", name: "Zeytinyağı / Taşıyıcı", amount: oilG, unit: "g" }
      ], temp, 20, 1013.25, "HEAT", "Galenik Biyoaktif Merhem Eritme");
    });

    // 3.5. HLB Emulsion Form Inputs
    const hlbOil = document.getElementById("wz-hlb-oil");
    const hlbType = document.getElementById("wz-hlb-type");
    const hlbTotal = document.getElementById("wz-hlb-total");
    const hlbOilPct = document.getElementById("wz-hlb-oil-pct");
    const hlbEmulPct = document.getElementById("wz-hlb-emul-pct");
    const hlbHighSurf = document.getElementById("wz-hlb-surf-high");
    const hlbLowSurf = document.getElementById("wz-hlb-surf-low");
    const hlbContainer = document.getElementById("wz-hlb-result-container");

    const updateHLB = () => {
      if (!hlbOil || !hlbContainer) return;
      const res = window.LabWizard.calculateHLBEmulsion(
        hlbOil.value,
        hlbType.value,
        hlbTotal.value,
        hlbOilPct.value,
        hlbEmulPct.value,
        hlbHighSurf.value,
        hlbLowSurf.value
      );
      hlbContainer.innerHTML = renderHLBCalculationView(res);
      attachWizardDynamicListeners();
    };

    hlbOil?.addEventListener("change", updateHLB);
    hlbType?.addEventListener("change", updateHLB);
    hlbTotal?.addEventListener("input", updateHLB);
    hlbOilPct?.addEventListener("input", updateHLB);
    hlbEmulPct?.addEventListener("input", updateHLB);
    hlbHighSurf?.addEventListener("change", updateHLB);
    hlbLowSurf?.addEventListener("change", updateHLB);

    // Apply HLB Emulsion Button
    document.getElementById("btn-apply-hlb-wizard")?.addEventListener("click", (e) => {
      const btn = e.currentTarget;
      const oilG = parseFloat(btn.dataset.oilG) || 20;
      const oilName = btn.dataset.oilName || "Zeytinyağı";
      const highSurfG = parseFloat(btn.dataset.highSurfG) || 1.3;
      const highSurfName = btn.dataset.highSurfName || "Polisorbat 80";
      const lowSurfG = parseFloat(btn.dataset.lowSurfG) || 3.7;
      const lowSurfName = btn.dataset.lowSurfName || "Span 80";
      const waterMl = parseFloat(btn.dataset.waterMl) || 75;

      applyWizardToVessel([
        { subId: "sub-oil-olive", name: oilName, amount: oilG, unit: "g" },
        { subId: "sub-surf-high", name: highSurfName, amount: highSurfG, unit: "g" },
        { subId: "sub-surf-low", name: lowSurfName, amount: lowSurfG, unit: "g" },
        { subId: "sub-pure-water", name: "Distile Su", amount: waterMl, unit: "mL" }
      ], 70.0, 20, 1013.25, "MIX", "Griffin HLB Kozmetik Emülsiyonu");
    });

    // 4. Crystal Form Inputs
    const crysSalt = document.getElementById("wz-crys-salt");
    const crysMode = document.getElementById("wz-crys-cooling-mode");
    const crysWater = document.getElementById("wz-crys-water");
    const crysContainer = document.getElementById("wz-crys-result-container");

    const updateCrys = () => {
      if (!crysSalt || !crysContainer) return;
      const mode = crysMode ? crysMode.value : "slow";
      const res = window.LabWizard.calculateCrystallization(crysSalt.value, crysWater.value, mode);
      crysContainer.innerHTML = renderCrystalCalculationView(res);
      attachWizardDynamicListeners();
    };

    crysSalt?.addEventListener("change", updateCrys);
    crysMode?.addEventListener("change", updateCrys);
    crysWater?.addEventListener("input", updateCrys);

    // Apply Crystal Button
    document.getElementById("btn-apply-crys-wizard")?.addEventListener("click", (e) => {
      const btn = e.currentTarget;
      const saltG = parseFloat(btn.dataset.saltG) || 200;
      const waterMl = parseFloat(btn.dataset.waterMl) || 200;
      const mode = btn.dataset.mode || "slow";

      applyWizardToVessel([
        { subId: "sub-salt-alum", name: "Kristal Tuzu (Şap / Mineral)", amount: saltG, unit: "g" },
        { subId: "sub-pure-water", name: "Distile Su", amount: waterMl, unit: "mL" }
      ], 100.0, mode === "fast" ? 30 : 120, 1013.25, mode === "fast" ? "COOL" : "HEAT", 
      mode === "fast" ? "Ani Şok Soğutmalı Mikrokristal Çökeltme" : "Aşırı Doygun Tek Kristal Büyütme");
    });

    // 5. Dilution Form Inputs
    const dilVol = document.getElementById("wz-dil-target-vol");
    const dilTarget = document.getElementById("wz-dil-target-pct");
    const dilInit = document.getElementById("wz-dil-init-pct");
    const dilContainer = document.getElementById("wz-dil-result-container");

    const updateDil = () => {
      if (!dilVol || !dilContainer) return;
      const res = window.LabWizard.calculateEthanolDilution(dilVol.value, dilTarget.value, dilInit.value);
      dilContainer.innerHTML = renderDilutionCalculationView(res);
      attachWizardDynamicListeners();
    };

    dilVol?.addEventListener("input", updateDil);
    dilTarget?.addEventListener("input", updateDil);
    dilInit?.addEventListener("input", updateDil);

    // Apply Dilution Button
    document.getElementById("btn-apply-dil-wizard")?.addEventListener("click", (e) => {
      const btn = e.currentTarget;
      const alcMl = parseFloat(btn.dataset.alcMl) || 365;
      const waterMl = parseFloat(btn.dataset.waterMl) || 151;

      applyWizardToVessel([
        { subId: "sub-solv-ethanol", name: "Etanol (%96 Saf Alkol)", amount: alcMl, unit: "mL" },
        { subId: "sub-pure-water", name: "Distile Su", amount: waterMl, unit: "mL" }
      ], 20.0, 10, 1013.25, "MIX", "Pearson Karesi Alkol Seyreltme");
    });

    // 6.5. Thermodynamics Form Inputs
    const thRxn = document.getElementById("wz-th-rxn");
    const thTemp = document.getElementById("wz-th-temp");
    const thContainer = document.getElementById("wz-th-result-container");

    const updateThermo = () => {
      if (!thRxn || !thContainer) return;
      const res = window.LabWizard.calculateReactionThermodynamics(thRxn.value, thTemp.value);
      thContainer.innerHTML = renderThermoCalculationView(res);
      attachWizardDynamicListeners();
    };

    thRxn?.addEventListener("change", updateThermo);
    thTemp?.addEventListener("input", updateThermo);

    // Apply Thermo Button
    document.getElementById("btn-apply-thermo-wizard")?.addEventListener("click", (e) => {
      const btn = e.currentTarget;
      const targetT = parseFloat(btn.dataset.targetTemp) || 25;

      LabState.vesselTemp = targetT;
      if (dom.vesselTempInput) dom.vesselTempInput.value = targetT;
      if (dom.vesselTempSlider) dom.vesselTempSlider.value = Math.min(1200, targetT);
      if (dom.paramTempLabel) dom.paramTempLabel.textContent = `${targetT}°C`;
      updateVesselParamBadges();

      if (dom.wizardModal) dom.wizardModal.style.display = "none";
      alert(`🌡️ Reaksiyon kabı sıcaklığı termodinamik denge noktası olan ${targetT}°C seviyesine başarıyla ayarlandı!`);
    });

    // 7. Buffer Solution Form Inputs
    const bufSystem = document.getElementById("wz-buf-system");
    const bufPH = document.getElementById("wz-buf-ph");
    const bufVol = document.getElementById("wz-buf-vol");
    const bufMolarity = document.getElementById("wz-buf-molarity");
    const bufContainer = document.getElementById("wz-buf-result-container");

    const updateBuffer = () => {
      if (!bufSystem || !bufContainer) return;
      const res = window.LabWizard.calculateBufferSolution(
        bufSystem.value,
        bufPH ? bufPH.value : 4.5,
        bufVol ? bufVol.value : 100,
        bufMolarity ? bufMolarity.value : 0.1
      );
      bufContainer.innerHTML = renderBufferCalculationView(res);
      attachWizardDynamicListeners();
    };

    bufSystem?.addEventListener("change", updateBuffer);
    bufPH?.addEventListener("input", updateBuffer);
    bufVol?.addEventListener("input", updateBuffer);
    bufMolarity?.addEventListener("input", updateBuffer);

    // Apply Buffer Button
    document.getElementById("btn-apply-buf-wizard")?.addEventListener("click", (e) => {
      const btn = e.currentTarget;
      const acidG = parseFloat(btn.dataset.acidG) || 1.5;
      const acidName = btn.dataset.acidName || "Asit Bileşeni";
      const baseG = parseFloat(btn.dataset.baseG) || 0.5;
      const baseName = btn.dataset.baseName || "Baz / Tuz Bileşeni";
      const waterMl = parseFloat(btn.dataset.waterMl) || 100;
      const targetPH = btn.dataset.ph || "4.5";

      applyWizardToVessel([
        { subId: "sub-acid-buffer-part", name: acidName, amount: acidG, unit: "g" },
        { subId: "sub-base-buffer-part", name: baseName, amount: baseG, unit: "g" },
        { subId: "sub-pure-water", name: "Distile Su", amount: waterMl, unit: "mL" }
      ], 25.0, 15, 1013.25, "MIX", `pH ${targetPH} Tampon Çözelti Hazırlama`);
    });

    // 8. Transdermal Penetration Form Inputs
    const penActive = document.getElementById("wz-pen-active");
    const penVehicle = document.getElementById("wz-pen-vehicle");
    const penConc = document.getElementById("wz-pen-conc");
    const penContainer = document.getElementById("wz-pen-result-container");

    const updatePenetration = () => {
      if (!penActive || !penContainer) return;
      const res = window.LabWizard.calculateDermalPenetration(
        penActive.value,
        penVehicle ? penVehicle.value : "ow_emulsion",
        penConc ? penConc.value : 2.0
      );
      penContainer.innerHTML = renderPenetrationCalculationView(res);
      attachWizardDynamicListeners();
    };

    penActive?.addEventListener("change", updatePenetration);
    penVehicle?.addEventListener("change", updatePenetration);
    penConc?.addEventListener("input", updatePenetration);

    // Apply Penetration Button
    document.getElementById("btn-apply-pen-wizard")?.addEventListener("click", (e) => {
      const btn = e.currentTarget;
      const actName = btn.dataset.active || "Etken Madde";
      const vehName = btn.dataset.vehicle || "Taşıyıcı Matris";
      const concPct = parseFloat(btn.dataset.conc) || 2.0;

      applyWizardToVessel([
        { subId: "sub-act-transdermal", name: actName, amount: concPct, unit: "g" },
        { subId: "sub-veh-transdermal", name: vehName, amount: 100 - concPct, unit: "g" }
      ], 37.0, 30, 1013.25, "MIX", "Transdermal Dermal Formülasyon");
    });

    // 6. Vacuum Form Inputs
    const vacSolvent = document.getElementById("wz-vac-solvent");
    const vacTemp = document.getElementById("wz-vac-temp");
    const vacContainer = document.getElementById("wz-vac-result-container");

    const updateVac = () => {
      if (!vacSolvent || !vacContainer) return;
      const res = window.LabWizard.solveVacuumPressureForTemp(vacSolvent.value, vacTemp.value);
      vacContainer.innerHTML = renderVacuumCalculationView(res);
      attachWizardDynamicListeners();
    };

    vacSolvent?.addEventListener("change", updateVac);
    vacTemp?.addEventListener("input", updateVac);

    // Apply Vacuum Button
    document.getElementById("btn-apply-vac-wizard")?.addEventListener("click", (e) => {
      const btn = e.currentTarget;
      const p = parseFloat(btn.dataset.pressure) || 100;
      const t = parseFloat(btn.dataset.temp) || 50;

      updateVesselPressure(p);
      LabState.vesselTemp = t;
      if (dom.vesselTempInput) dom.vesselTempInput.value = t;
      if (dom.vesselTempSlider) dom.vesselTempSlider.value = Math.min(1200, t);
      if (dom.paramTempLabel) dom.paramTempLabel.textContent = `${t}°C`;
      updateVesselParamBadges();

      if (dom.wizardModal) dom.wizardModal.style.display = "none";
      alert(`🌪️ Vakum basıncı ${p} mbar seviyesine ve sıcaklık ${t}°C'ye başarıyla ayarlandı! Reaksiyon kabında artık ısıya duyarlı damıtma yapabilirsiniz.`);
    });

    // 9. Freeze-Drying Form Inputs
    const frzSolute = document.getElementById("wz-frz-solute");
    const frzVol = document.getElementById("wz-frz-vol");
    const frzConc = document.getElementById("wz-frz-conc");
    const frzTemp = document.getElementById("wz-frz-temp");
    const frzContainer = document.getElementById("wz-frz-result-container");

    const updateFreeze = () => {
      if (!frzSolute || !frzContainer) return;
      const res = window.LabWizard.calculateFreezeDrying(
        frzSolute.value,
        frzVol ? frzVol.value : 100,
        frzConc ? frzConc.value : 5,
        frzTemp ? frzTemp.value : -20
      );
      frzContainer.innerHTML = renderFreezeCalculationView(res);
      attachWizardDynamicListeners();
    };

    frzSolute?.addEventListener("change", updateFreeze);
    frzVol?.addEventListener("input", updateFreeze);
    frzConc?.addEventListener("input", updateFreeze);
    frzTemp?.addEventListener("input", updateFreeze);

    // Apply Freeze Button
    document.getElementById("btn-apply-frz-wizard")?.addEventListener("click", (e) => {
      const btn = e.currentTarget;
      const solName = btn.dataset.solute || "Liyofilize Matris";
      const cakeG = parseFloat(btn.dataset.cakeG) || 5.0;
      const p = parseFloat(btn.dataset.vacuum) || 0.2;
      const t = parseFloat(btn.dataset.temp) || -20;

      applyWizardToVessel([
        { subId: "sub-water-distilled", name: "Saf Su (Buz Matrisi)", amount: 95, unit: "mL" },
        { subId: "sub-sol-freeze-dry", name: solName, amount: cakeG, unit: "g" }
      ], t, 960, p, "DISTILL", "Liyofilizasyon Dondurarak Kurutma");
    });

    // 10. Liquid-Liquid Extraction Form Inputs
    const llSolute = document.getElementById("wz-ll-solute");
    const llSolvent = document.getElementById("wz-ll-solvent");
    const llAqVol = document.getElementById("wz-ll-aq-vol");
    const llOrgVol = document.getElementById("wz-ll-org-vol");
    const llStages = document.getElementById("wz-ll-stages");
    const llContainer = document.getElementById("wz-ll-result-container");

    const updateLiquidExtract = () => {
      if (!llSolute || !llContainer) return;
      const res = window.LabWizard.calculateLiquidLiquidExtraction(
        llSolute.value,
        llSolvent ? llSolvent.value : "ethyl_acetate",
        llAqVol ? llAqVol.value : 100,
        llOrgVol ? llOrgVol.value : 90,
        llStages ? llStages.value : 3
      );
      llContainer.innerHTML = renderLiquidExtractCalculationView(res);
      attachWizardDynamicListeners();
    };

    llSolute?.addEventListener("change", updateLiquidExtract);
    llSolvent?.addEventListener("change", updateLiquidExtract);
    llAqVol?.addEventListener("input", updateLiquidExtract);
    llOrgVol?.addEventListener("input", updateLiquidExtract);
    llStages?.addEventListener("change", updateLiquidExtract);

    // Apply Liquid Extraction Button
    document.getElementById("btn-apply-ll-wizard")?.addEventListener("click", (e) => {
      const btn = e.currentTarget;
      const solName = btn.dataset.solute || "Etken Madde";
      const solvName = btn.dataset.solvent || "Organik Çözücü";
      const aqMl = parseFloat(btn.dataset.aqMl) || 100;
      const orgMl = parseFloat(btn.dataset.orgMl) || 90;

      applyWizardToVessel([
        { subId: "sub-aq-phase", name: `Sulu Faz (${solName})`, amount: aqMl, unit: "mL" },
        { subId: "sub-org-solvent", name: solvName, amount: orgMl, unit: "mL" }
      ], 20.0, 30, 1013.25, "EXTRACT", "Sıvı-Sıvı Nernst Faz Ekstraksiyonu");
    });

    // 11. Osmotic Pressure Form Inputs
    const osmSolute = document.getElementById("wz-osm-solute");
    const osmConc = document.getElementById("wz-osm-conc");
    const osmTemp = document.getElementById("wz-osm-temp");
    const osmContainer = document.getElementById("wz-osm-result-container");

    const updateOsmotic = () => {
      if (!osmSolute || !osmContainer) return;
      const res = window.LabWizard.calculateOsmoticPressure(
        osmSolute.value,
        osmConc ? osmConc.value : 9.0,
        osmTemp ? osmTemp.value : 37.0
      );
      osmContainer.innerHTML = renderOsmoticCalculationView(res);
      attachWizardDynamicListeners();
    };

    osmSolute?.addEventListener("change", updateOsmotic);
    osmConc?.addEventListener("input", updateOsmotic);
    osmTemp?.addEventListener("input", updateOsmotic);

    // Apply Osmotic Button
    document.getElementById("btn-apply-osm-wizard")?.addEventListener("click", (e) => {
      const btn = e.currentTarget;
      const solName = btn.dataset.solute || "Çözünen Madde";
      const concGL = parseFloat(btn.dataset.conc) || 9.0;
      const temp = parseFloat(btn.dataset.temp) || 37.0;

      // 100 mL batch: mass = concGL / 10
      const massG = Math.round((concGL / 10.0) * 100) / 100;

      applyWizardToVessel([
        { subId: "sub-water-distilled", name: "Distile Saf Su", amount: 100, unit: "mL" },
        { subId: "sub-sol-osmotic", name: solName, amount: massG, unit: "g" }
      ], temp, 15, 1013.25, "MIX", "İzotonik Solüsyon Hazırlama");
    });

    // 12. Fractional Column Distillation Form Inputs
    const fracSystem = document.getElementById("wz-frac-system");
    const fracZf = document.getElementById("wz-frac-zf");
    const fracXd = document.getElementById("wz-frac-xd");
    const fracXb = document.getElementById("wz-frac-xb");
    const fracPacking = document.getElementById("wz-frac-packing");
    const fracRfactor = document.getElementById("wz-frac-rfactor");
    const fracContainer = document.getElementById("wz-frac-result-container");

    const updateFractional = () => {
      if (!fracSystem || !fracContainer) return;
      const res = window.LabWizard.calculateFractionalDistillation(
        fracSystem.value,
        fracZf ? fracZf.value : 10,
        fracXd ? fracXd.value : 85,
        fracXb ? fracXb.value : 1,
        fracRfactor ? fracRfactor.value : 1.3,
        fracPacking ? fracPacking.value : "structured_mesh"
      );
      fracContainer.innerHTML = renderFractionalCalculationView(res);
      attachWizardDynamicListeners();
    };

    fracSystem?.addEventListener("change", updateFractional);
    fracZf?.addEventListener("input", updateFractional);
    fracXd?.addEventListener("input", updateFractional);
    fracXb?.addEventListener("input", updateFractional);
    fracPacking?.addEventListener("change", updateFractional);
    fracRfactor?.addEventListener("input", updateFractional);

    // Apply Fractional Distillation Button
    document.getElementById("btn-apply-frac-wizard")?.addEventListener("click", (e) => {
      const btn = e.currentTarget;
      const sysName = btn.dataset.system || "İkili Karışım";
      const height = parseFloat(btn.dataset.height) || 40.0;
      const reflux = parseFloat(btn.dataset.reflux) || 5.0;

      applyWizardToVessel([
        { subId: "sub-binary-feed", name: sysName, amount: 200, unit: "mL" }
      ], 85.0, 90, 1013.25, "DISTILL", `Fraksiyonel Kolonlu Damıtma (H: ${height}cm, R: ${reflux})`);
    });

    // 13. Cascade Reaction Form Inputs
    const cascPathway = document.getElementById("wz-casc-pathway");
    const cascMass = document.getElementById("wz-casc-mass");
    const cascEff = document.getElementById("wz-casc-eff");
    const cascContainer = document.getElementById("wz-casc-result-container");

    const updateCascade = () => {
      if (!cascPathway || !cascContainer) return;
      const res = window.LabWizard.calculateReactionCascade(
        cascPathway.value,
        cascMass ? cascMass.value : 1000,
        cascEff ? cascEff.value : 1.0
      );
      cascContainer.innerHTML = renderCascadeCalculationView(res);
      attachWizardDynamicListeners();
    };

    cascPathway?.addEventListener("change", updateCascade);
    cascMass?.addEventListener("input", updateCascade);
    cascEff?.addEventListener("change", updateCascade);

    // Apply Cascade Button
    document.getElementById("btn-apply-casc-wizard")?.addEventListener("click", (e) => {
      const btn = e.currentTarget;
      const pKey = btn.dataset.pathway || "bordeaux_mixture_cycle";
      const m0 = parseFloat(btn.dataset.initialMass) || 1000;

      if (pKey === "bordeaux_mixture_cycle") {
        applyWizardToVessel([
          { subId: "sub-mineral-caco3", name: "Kalsiyum Karbonat (Kireçtaşı)", amount: m0, unit: "g" }
        ], 900.0, 120, 1013.25, "CALCINE", "Kireç Döngüsü & Bordo Bulamacı Kalsinasyon Kademesi");
      } else if (pKey === "wood_ash_soap_cycle") {
        applyWizardToVessel([
          { subId: "sub-base-ash", name: "Kuru Odun Külü (Meşe/Kayın)", amount: m0, unit: "g" },
          { subId: "sub-water-distilled", name: "Saf Su (Liçing İçin)", amount: m0 * 2, unit: "mL" }
        ], 80.0, 90, 1013.25, "EXTRACT", "Kül Suyu Potası Liçing & Sabunlaşma Kademesi");
      } else {
        applyWizardToVessel([
          { subId: "sub-salt-nacl", name: "Salamura Tuzu (NaCl)", amount: m0, unit: "g" }
        ], 35.0, 60, 1013.25, "SYNTHESIZE", "Solvay Prosesi Karbonatlaşma Kademesi");
      }
    });

    // 14. Solvent Recovery Form Inputs
    const recSolvent = document.getElementById("wz-rec-solvent");
    const recRate = document.getElementById("wz-rec-rate");
    const recCoolant = document.getElementById("wz-rec-coolant");
    const recPress = document.getElementById("wz-rec-press");
    const recContainer = document.getElementById("wz-rec-result-container");

    const updateRecovery = () => {
      if (!recSolvent || !recContainer) return;
      const res = window.LabWizard.calculateSolventRecovery(
        recSolvent.value,
        recRate ? recRate.value : 500,
        recCoolant ? recCoolant.value : 10,
        recPress ? recPress.value : 1013.25,
        0.15
      );
      recContainer.innerHTML = renderRecoveryCalculationView(res);
      attachWizardDynamicListeners();
    };

    recSolvent?.addEventListener("change", updateRecovery);
    recRate?.addEventListener("input", updateRecovery);
    recCoolant?.addEventListener("input", updateRecovery);
    recPress?.addEventListener("input", updateRecovery);

    // Apply Recovery Button
    document.getElementById("btn-apply-rec-wizard")?.addEventListener("click", (e) => {
      const btn = e.currentTarget;
      const solvName = btn.dataset.solvent || "Geri Kazanılan Solvent";
      const recRateVal = parseFloat(btn.dataset.rate) || 480;

      applyWizardToVessel([
        { subId: "sub-solvent-distillate", name: `Geri Kazanılan ${solvName}`, amount: recRateVal, unit: "mL" }
      ], 15.0, 60, 1013.25, "DISTILL", `Kondenser Solvent Geri Kazanımı (${recRateVal} mL/h)`);
    });

    // 15. Solid-Liquid Extraction Kinetics Inputs
    const kinActive = document.getElementById("wz-kin-active");
    const kinParticle = document.getElementById("wz-kin-particle");
    const kinBiomass = document.getElementById("wz-kin-biomass");
    const kinSolvVol = document.getElementById("wz-kin-solv-vol");
    const kinTemp = document.getElementById("wz-kin-temp");
    const kinDuration = document.getElementById("wz-kin-duration");
    const kinContainer = document.getElementById("wz-kin-result-container");

    const updateKinetics = () => {
      if (!kinActive || !kinContainer) return;
      const res = window.LabWizard.calculateExtractionKinetics(
        kinActive.value,
        kinParticle ? kinParticle.value : "medium_cut",
        kinBiomass ? kinBiomass.value : 50,
        kinSolvVol ? kinSolvVol.value : 500,
        kinTemp ? kinTemp.value : 40,
        kinDuration ? kinDuration.value : 4.0
      );
      kinContainer.innerHTML = renderKineticsCalculationView(res);
      attachWizardDynamicListeners();
    };

    kinActive?.addEventListener("change", updateKinetics);
    kinParticle?.addEventListener("change", updateKinetics);
    kinBiomass?.addEventListener("input", updateKinetics);
    kinSolvVol?.addEventListener("input", updateKinetics);
    kinTemp?.addEventListener("input", updateKinetics);
    kinDuration?.addEventListener("input", updateKinetics);

    // Apply Kinetics Button
    document.getElementById("btn-apply-kin-wizard")?.addEventListener("click", (e) => {
      const btn = e.currentTarget;
      const actName = btn.dataset.active || "Bitkisel Drog";
      const bioMass = parseFloat(btn.dataset.biomass) || 50;
      const solvVol = parseFloat(btn.dataset.solv) || 500;
      const mTemp = parseFloat(btn.dataset.temp) || 40;
      const mHours = parseFloat(btn.dataset.hours) || 4.0;

      applyWizardToVessel([
        { subId: "sub-bot-biomass-drog", name: `${actName} (Kurutulmuş Drog)`, amount: bioMass, unit: "g" },
        { subId: "sub-solv-extract-hydroeth", name: "Ekstraksiyon Çözücüsü (Hidroetanolik)", amount: solvVol, unit: "mL" }
      ], mTemp, Math.round(mHours * 60), 1013.25, "EXTRACT", `Katı-Sıvı Maserasyon Ekstraksiyonu (${mHours}h, ${mTemp}°C)`);
    });

    // 16. Gas Absorption Inputs
    const absSpecies = document.getElementById("wz-abs-species");
    const absVol = document.getElementById("wz-abs-vol");
    const absPress = document.getElementById("wz-abs-press");
    const absTemp = document.getElementById("wz-abs-temp");
    const absPurity = document.getElementById("wz-abs-purity");
    const absContainer = document.getElementById("wz-abs-result-container");

    const updateAbsorption = () => {
      if (!absSpecies || !absContainer) return;
      const res = window.LabWizard.calculateGasAbsorption(
        absSpecies.value,
        absVol ? absVol.value : 1.0,
        absPress ? absPress.value : 3.5,
        absTemp ? absTemp.value : 4.0,
        absPurity ? absPurity.value : 100.0
      );
      absContainer.innerHTML = renderAbsorptionCalculationView(res);
      attachWizardDynamicListeners();
    };

    absSpecies?.addEventListener("change", updateAbsorption);
    absVol?.addEventListener("input", updateAbsorption);
    absPress?.addEventListener("input", updateAbsorption);
    absTemp?.addEventListener("input", updateAbsorption);
    absPurity?.addEventListener("input", updateAbsorption);

    // Apply Absorption Button
    document.getElementById("btn-apply-abs-wizard")?.addEventListener("click", (e) => {
      const btn = e.currentTarget;
      const specName = btn.dataset.species || "Çözünmüş Gaz";
      const gMass = parseFloat(btn.dataset.mass) || 5.0;
      const pBar = parseFloat(btn.dataset.press) || 3.5;
      const gTemp = parseFloat(btn.dataset.temp) || 4.0;

      applyWizardToVessel([
        { subId: "sub-gas-dissolved-phase", name: specName, amount: gMass, unit: "g" },
        { subId: "sub-liq-solvent-water", name: "Saf Su (Taşıyıcı Sıvı)", amount: 1000, unit: "mL" }
      ], gTemp, 15, Math.round(pBar * 1000), "DISSOLVE", `Basınçlı Gaz Çözündürme (${pBar} bar, ${gTemp}°C)`);
    });

    // 17. Hydrogel Rheology Inputs
    const rheoPolymer = document.getElementById("wz-rheo-polymer");
    const rheoVol = document.getElementById("wz-rheo-vol");
    const rheoConc = document.getElementById("wz-rheo-conc");
    const rheoPh = document.getElementById("wz-rheo-ph");
    const rheoContainer = document.getElementById("wz-rheo-result-container");

    const updateRheology = () => {
      if (!rheoPolymer || !rheoContainer) return;
      const res = window.LabWizard.calculateHydrogelRheology(
        rheoPolymer.value,
        rheoVol ? rheoVol.value : 250,
        rheoConc ? rheoConc.value : 0.5,
        rheoPh ? rheoPh.value : 7.0
      );
      rheoContainer.innerHTML = renderRheologyCalculationView(res);
      attachWizardDynamicListeners();
    };

    rheoPolymer?.addEventListener("change", updateRheology);
    rheoVol?.addEventListener("input", updateRheology);
    rheoConc?.addEventListener("input", updateRheology);
    rheoPh?.addEventListener("input", updateRheology);

    // Apply Rheology Button
    document.getElementById("btn-apply-rheo-wizard")?.addEventListener("click", (e) => {
      const btn = e.currentTarget;
      const polyName = btn.dataset.polymer || "Jelleştirici Polimer";
      const pMass = parseFloat(btn.dataset.mass) || 1.25;
      const wVol = parseFloat(btn.dataset.water) || 248.75;

      applyWizardToVessel([
        { subId: "sub-poly-gelling-agent", name: polyName, amount: pMass, unit: "g" },
        { subId: "sub-liq-solvent-water", name: "Saf Su (Taşıyıcı Sıvı)", amount: wVol, unit: "mL" }
      ], 25.0, 30, 1013.25, "MIX", `Hidrojel Hazırlama & Dispersiyon (${polyName})`);
    });

    // 18. Solid-State Adsorption Inputs
    const adsAdsorbent = document.getElementById("wz-ads-adsorbent");
    const adsVol = document.getElementById("wz-ads-vol");
    const adsConc = document.getElementById("wz-ads-conc");
    const adsRemoval = document.getElementById("wz-ads-removal");
    const adsTemp = document.getElementById("wz-ads-temp");
    const adsContainer = document.getElementById("wz-ads-result-container");

    const updateAdsorption = () => {
      if (!adsAdsorbent || !adsContainer) return;
      const res = window.LabWizard.calculateCarbonAdsorption(
        adsAdsorbent.value,
        adsVol ? adsVol.value : 1000,
        adsConc ? adsConc.value : 150,
        adsRemoval ? adsRemoval.value : 90,
        adsTemp ? adsTemp.value : 50
      );
      adsContainer.innerHTML = renderAdsorptionCalculationView(res);
      attachWizardDynamicListeners();
    };

    adsAdsorbent?.addEventListener("change", updateAdsorption);
    adsVol?.addEventListener("input", updateAdsorption);
    adsConc?.addEventListener("input", updateAdsorption);
    adsRemoval?.addEventListener("input", updateAdsorption);
    adsTemp?.addEventListener("input", updateAdsorption);

    // Apply Adsorption Button
    document.getElementById("btn-apply-ads-wizard")?.addEventListener("click", (e) => {
      const btn = e.currentTarget;
      const adsName = btn.dataset.adsorbent || "Adsorban Madde";
      const adsMass = parseFloat(btn.dataset.mass) || 1.75;
      const liqVol = parseFloat(btn.dataset.volume) || 1000;
      const opTemp = parseFloat(btn.dataset.temp) || 50;

      applyWizardToVessel([
        { subId: "sub-adsorbent-carbon-phase", name: adsName, amount: adsMass, unit: "g" },
        { subId: "sub-liq-solvent-water", name: "İşlenecek Sıvı / Ekstrakt", amount: liqVol, unit: "mL" }
      ], opTemp, 30, 1013.25, "FILTER", `Katı Adsorpsiyon & Renk/Koku Giderme (${adsName})`);
    });

    // 19. RVDF Continuous Filtration Inputs
    const rvdfSlurry = document.getElementById("wz-rvdf-slurry");
    const rvdfArea = document.getElementById("wz-rvdf-area");
    const rvdfConc = document.getElementById("wz-rvdf-conc");
    const rvdfVac = document.getElementById("wz-rvdf-vac");
    const rvdfSpeed = document.getElementById("wz-rvdf-speed");
    const rvdfSubm = document.getElementById("wz-rvdf-subm");
    const rvdfContainer = document.getElementById("wz-rvdf-result-container");

    const updateRVDF = () => {
      if (!rvdfSlurry || !rvdfContainer) return;
      const res = window.LabWizard.calculateVacuumFiltration(
        rvdfSlurry.value,
        rvdfArea ? rvdfArea.value : 2.0,
        rvdfConc ? rvdfConc.value : 100,
        rvdfVac ? rvdfVac.value : 60,
        rvdfSpeed ? rvdfSpeed.value : 1.0,
        rvdfSubm ? rvdfSubm.value : 33.3,
        1.5,
        1.0
      );
      rvdfContainer.innerHTML = renderRVDFCalculationView(res);
      attachWizardDynamicListeners();
    };

    rvdfSlurry?.addEventListener("change", updateRVDF);
    rvdfArea?.addEventListener("input", updateRVDF);
    rvdfConc?.addEventListener("input", updateRVDF);
    rvdfVac?.addEventListener("input", updateRVDF);
    rvdfSpeed?.addEventListener("input", updateRVDF);
    rvdfSubm?.addEventListener("input", updateRVDF);

    // Apply RVDF Cake Button
    document.getElementById("btn-apply-rvdf-cake")?.addEventListener("click", (e) => {
      const btn = e.currentTarget;
      const slurryName = btn.dataset.slurry || "Filtre Keki";
      const subId = btn.dataset.subid || "sub-filter-cake";
      const wetKg = parseFloat(btn.dataset.wet) || 10.0;

      applyWizardToVessel([
        { subId: subId, name: `${slurryName} (Kek)`, amount: Math.min(5000, Math.round(wetKg * 10)), unit: "g" }
      ], 25, 10, 1013.25, "FILTER", `Döner Vakum Tambur Kek Boşaltımı (${slurryName})`);
    });

    // Apply RVDF Filtrate Button
    document.getElementById("btn-apply-rvdf-filtrate")?.addEventListener("click", (e) => {
      const btn = e.currentTarget;
      const slurryName = btn.dataset.slurry || "Süzüntü";
      const volL = parseFloat(btn.dataset.volume) || 100.0;

      applyWizardToVessel([
        { subId: "sub-liq-solvent-water", name: `${slurryName} (Süzüntü Likörü)`, amount: Math.min(5000, Math.round(volL * 10)), unit: "mL" }
      ], 25, 10, 1013.25, "FILTER", `Döner Vakum Tambur Süzüntüsü (${slurryName})`);
    });

    // 20. Spray Drying Inputs
    const sprayProfile = document.getElementById("wz-spray-profile");
    const sprayFeedRate = document.getElementById("wz-spray-feed-rate");
    const spraySolids = document.getElementById("wz-spray-solids");
    const sprayTin = document.getElementById("wz-spray-tin");
    const sprayTout = document.getElementById("wz-spray-tout");
    const sprayPress = document.getElementById("wz-spray-press");
    const sprayContainer = document.getElementById("wz-spray-result-container");

    const updateSpray = () => {
      if (!sprayProfile || !sprayContainer) return;
      const res = window.LabWizard.calculateSprayDrying(
        sprayProfile.value,
        sprayFeedRate ? sprayFeedRate.value : 5.0,
        spraySolids ? spraySolids.value : 25,
        sprayTin ? sprayTin.value : 165,
        sprayTout ? sprayTout.value : 75,
        20,
        sprayPress ? sprayPress.value : 2.5
      );
      sprayContainer.innerHTML = renderSprayCalculationView(res);
      attachWizardDynamicListeners();
    };

    sprayProfile?.addEventListener("change", updateSpray);
    sprayFeedRate?.addEventListener("input", updateSpray);
    spraySolids?.addEventListener("input", updateSpray);
    sprayTin?.addEventListener("input", updateSpray);
    sprayTout?.addEventListener("input", updateSpray);
    sprayPress?.addEventListener("input", updateSpray);

    // Apply Spray Powder Button
    document.getElementById("btn-apply-spray-powder")?.addEventListener("click", (e) => {
      const btn = e.currentTarget;
      const powderName = btn.dataset.name || "Sprey Kuru Toz";
      const subId = btn.dataset.subid || "sub-spray-powder";
      const powderKg = parseFloat(btn.dataset.powder) || 1.0;

      applyWizardToVessel([
        { subId: subId, name: `${powderName} (Toz)`, amount: Math.min(2000, Math.round(powderKg * 100)), unit: "g" }
      ], 25, 15, 1013.25, "FILTER", `Püskürtmeli Kurutma Toz Üretimi (${powderName})`);
    });

    // 21. Supercritical CO2 Extraction Inputs
    const scProfile = document.getElementById("wz-sc-profile");
    const scFeedMass = document.getElementById("wz-sc-feed-mass");
    const scCo2Flow = document.getElementById("wz-sc-co2-flow");
    const scPressure = document.getElementById("wz-sc-pressure");
    const scTemp = document.getElementById("wz-sc-temp");
    const scCosolvent = document.getElementById("wz-sc-cosolvent");
    const scContainer = document.getElementById("wz-sc-result-container");

    const updateSupercritical = () => {
      if (!scProfile || !scContainer) return;
      const res = window.LabWizard.calculateSupercriticalExtraction(
        scProfile.value,
        scFeedMass ? scFeedMass.value : 5.0,
        scCo2Flow ? scCo2Flow.value : 25.0,
        scPressure ? scPressure.value : 250,
        scTemp ? scTemp.value : 45,
        scCosolvent ? scCosolvent.value : 3.0
      );
      scContainer.innerHTML = renderSupercriticalCalculationView(res);
      attachWizardDynamicListeners();
    };

    scProfile?.addEventListener("change", updateSupercritical);
    scFeedMass?.addEventListener("input", updateSupercritical);
    scCo2Flow?.addEventListener("input", updateSupercritical);
    scPressure?.addEventListener("input", updateSupercritical);
    scTemp?.addEventListener("input", updateSupercritical);
    scCosolvent?.addEventListener("input", updateSupercritical);

    // Apply Supercritical Extract Button
    document.getElementById("btn-apply-sc-extract")?.addEventListener("click", (e) => {
      const btn = e.currentTarget;
      const actName = btn.dataset.name || "Süperkritik Ekstrakt";
      const subId = btn.dataset.subid || "sub-sc-extract";
      const extG = parseFloat(btn.dataset.mass) || 10.0;

      applyWizardToVessel([
        { subId: subId, name: `${actName} (Saf Süperkritik)`, amount: Math.min(2000, Math.round(extG * 10) / 10), unit: "g" }
      ], 45, 30, 250000, "EXTRACT", `Süperkritik CO2 Ekstraksiyonu (${actName})`);
    });

    // 22. Cross-Flow Membrane Separation Inputs
    const memProfile = document.getElementById("wz-mem-profile");
    const memFeedFlow = document.getElementById("wz-mem-feed-flow");
    const memArea = document.getElementById("wz-mem-area");
    const memTmp = document.getElementById("wz-mem-tmp");
    const memTemp = document.getElementById("wz-mem-temp");
    const memRecovery = document.getElementById("wz-mem-recovery");
    const memContainer = document.getElementById("wz-mem-result-container");

    const updateMembrane = () => {
      if (!memProfile || !memContainer) return;
      const res = window.LabWizard.calculateMembraneSeparation(
        memProfile.value,
        memFeedFlow ? memFeedFlow.value : 500,
        memArea ? memArea.value : 10.0,
        memTmp ? memTmp.value : 60.0,
        memTemp ? memTemp.value : 25.0,
        memRecovery ? memRecovery.value : 40.0
      );
      memContainer.innerHTML = renderMembraneCalculationView(res);
      attachWizardDynamicListeners();
    };

    memProfile?.addEventListener("change", (e) => {
      const profKey = e.target.value;
      const prof = window.LabWizard.MEMBRANE_SEPARATION_PROFILES?.[profKey];
      if (prof) {
        if (memTmp) memTmp.value = prof.defaultTMPBar;
        if (memRecovery) memRecovery.value = prof.defaultRecoveryPct;
      }
      updateMembrane();
    });
    memFeedFlow?.addEventListener("input", updateMembrane);
    memArea?.addEventListener("input", updateMembrane);
    memTmp?.addEventListener("input", updateMembrane);
    memTemp?.addEventListener("input", updateMembrane);
    memRecovery?.addEventListener("input", updateMembrane);

    // Apply Membrane Retentate Button
    document.getElementById("btn-apply-membrane-retentate")?.addEventListener("click", (e) => {
      const btn = e.currentTarget;
      const actName = btn.dataset.name || "Konsantre Retentat";
      const subId = btn.dataset.subid || "sub-mem-retentate";
      const conc = parseFloat(btn.dataset.conc) || 10.0;
      const flow = parseFloat(btn.dataset.flow) || 100.0;

      applyWizardToVessel([
        { subId: subId, name: `${actName} (Konsantre Retentat)`, amount: Math.min(2000, Math.round(flow * 10) / 10), unit: "mL" }
      ], 25, 60, 1013.25, "SEPARATE", `Membran Ayrımı Retentat (${actName} - ${conc} g/L)`);
    });

    // Apply Membrane Permeate Button
    document.getElementById("btn-apply-membrane-permeate")?.addEventListener("click", (e) => {
      const btn = e.currentTarget;
      const actName = btn.dataset.name || "Arıtılmış Permeat";
      const subId = btn.dataset.subid || "sub-mem-permeate";
      const conc = parseFloat(btn.dataset.conc) || 0.1;
      const flow = parseFloat(btn.dataset.flow) || 100.0;

      applyWizardToVessel([
        { subId: subId, name: `${actName} (Arıtılmış Permeat)`, amount: Math.min(2000, Math.round(flow * 10) / 10), unit: "mL" }
      ], 25, 60, 1013.25, "SEPARATE", `Membran Ayrımı Permeat (${actName} - ${conc} g/L)`);
    });

    // 23. Bioreactor & Microbial Fermentation Inputs
    const bioProfile = document.getElementById("wz-bio-profile");
    const bioVolume = document.getElementById("wz-bio-volume");
    const bioInoculum = document.getElementById("wz-bio-inoculum");
    const bioSubstrate = document.getElementById("wz-bio-substrate");
    const bioResidual = document.getElementById("wz-bio-residual");
    const bioVvm = document.getElementById("wz-bio-vvm");
    const bioTemp = document.getElementById("wz-bio-temp");
    const bioContainer = document.getElementById("wz-bio-result-container");

    const updateBioreactor = () => {
      if (!bioProfile || !bioContainer) return;
      const res = window.LabWizard.calculateBioreactorFermentation(
        bioProfile.value,
        bioVolume ? bioVolume.value : 100,
        bioInoculum ? bioInoculum.value : 0.5,
        bioSubstrate ? bioSubstrate.value : 40,
        bioResidual ? bioResidual.value : 1.0,
        bioVvm ? bioVvm.value : 1.0,
        bioTemp ? bioTemp.value : 30
      );
      bioContainer.innerHTML = renderBioreactorCalculationView(res);
      attachWizardDynamicListeners();
    };

    bioProfile?.addEventListener("change", (e) => {
      const profKey = e.target.value;
      const prof = window.LabWizard.FERMENTATION_PROFILES?.[profKey];
      if (prof) {
        if (bioVolume) bioVolume.value = prof.defaultVolumeL;
        if (bioInoculum) bioInoculum.value = prof.defaultInoculumGL;
        if (bioSubstrate) bioSubstrate.value = prof.defaultSubstrateGL;
        if (bioResidual) bioResidual.value = prof.defaultResidualGL;
        if (bioVvm) bioVvm.value = prof.defaultAerationVVM;
        if (bioTemp) bioTemp.value = prof.optTempC;
      }
      updateBioreactor();
    });
    bioVolume?.addEventListener("input", updateBioreactor);
    bioInoculum?.addEventListener("input", updateBioreactor);
    bioSubstrate?.addEventListener("input", updateBioreactor);
    bioResidual?.addEventListener("input", updateBioreactor);
    bioVvm?.addEventListener("input", updateBioreactor);
    bioTemp?.addEventListener("input", updateBioreactor);

    // Apply Fermentation Broth Button
    document.getElementById("btn-apply-fermentation-broth")?.addEventListener("click", (e) => {
      const btn = e.currentTarget;
      const actName = btn.dataset.name || "Fermente Biyokütle";
      const subId = btn.dataset.subid || "sub-bio-broth";
      const prodG = parseFloat(btn.dataset.product) || 100.0;

      applyWizardToVessel([
        { subId: subId, name: `${actName}`, amount: Math.min(2000, Math.round(prodG * 10) / 10), unit: "g" }
      ], 30, 600, 1013.25, "SYNTHESIZE", `Mikrobiyal Fermantasyon Hasadı (${actName})`);
    });

    // 24. Electrochemical Cell & Faraday Electrolysis Inputs
    const elProfile = document.getElementById("wz-el-profile");
    const elCurrent = document.getElementById("wz-el-current");
    const elTime = document.getElementById("wz-el-time");
    const elArea = document.getElementById("wz-el-area");
    const elVoltage = document.getElementById("wz-el-voltage");
    const elTemp = document.getElementById("wz-el-temp");
    const elContainer = document.getElementById("wz-el-result-container");

    const updateElectro = () => {
      if (!elProfile || !elContainer) return;
      const res = window.LabWizard.calculateElectrochemicalCell(
        elProfile.value,
        elCurrent ? elCurrent.value : 5.0,
        elTime ? elTime.value : 30.0,
        elArea ? elArea.value : 150.0,
        elVoltage ? elVoltage.value : 2.5,
        elTemp ? elTemp.value : 25.0
      );
      elContainer.innerHTML = renderElectroCalculationView(res);
      attachWizardDynamicListeners();
    };

    elProfile?.addEventListener("change", (e) => {
      const profKey = e.target.value;
      const prof = window.LabWizard.ELECTROCHEMICAL_CELL_PROFILES?.[profKey];
      if (prof) {
        if (elCurrent) elCurrent.value = prof.defaultCurrentA;
        if (elTime) elTime.value = prof.defaultTimeMin;
        if (elArea) elArea.value = prof.defaultAreaCm2;
        if (elVoltage) elVoltage.value = prof.defaultVoltageV;
        if (elTemp) elTemp.value = prof.optTempC;
      }
      updateElectro();
    });
    elCurrent?.addEventListener("input", updateElectro);
    elTime?.addEventListener("input", updateElectro);
    elArea?.addEventListener("input", updateElectro);
    elVoltage?.addEventListener("input", updateElectro);
    elTemp?.addEventListener("input", updateElectro);

    // Apply Electro Metal Button
    document.getElementById("btn-apply-electro-metal")?.addEventListener("click", (e) => {
      const btn = e.currentTarget;
      const actName = btn.dataset.name || "Metalik Kaplama";
      const subId = btn.dataset.subid || "sub-elem-copper";
      const massG = parseFloat(btn.dataset.mass) || 2.9;

      applyWizardToVessel([
        { subId: subId, name: `${actName}`, amount: Math.min(5000, Math.max(0.1, Math.round(massG * 100) / 100)), unit: "g" }
      ], 25, 30, 1013.25, "SYNTHESIZE", `Elektrokimyasal Faraday Kaplaması (${actName})`);
    });

    // 25. Fluidized Bed Granulation & Coating Inputs
    const fbProfile = document.getElementById("wz-fb-profile");
    const fbMass = document.getElementById("wz-fb-mass");
    const fbDp = document.getElementById("wz-fb-dp");
    const fbTemp = document.getElementById("wz-fb-temp");
    const fbKu = document.getElementById("wz-fb-ku");
    const fbSpray = document.getElementById("wz-fb-spray");
    const fbTime = document.getElementById("wz-fb-time");
    const fbContainer = document.getElementById("wz-fb-result-container");

    const updateFluidBed = () => {
      if (!fbProfile || !fbContainer) return;
      const res = window.LabWizard.calculateFluidizedBed(
        fbProfile.value,
        fbMass ? fbMass.value : 25.0,
        fbDp ? fbDp.value : 120.0,
        fbTemp ? fbTemp.value : 65.0,
        fbKu ? fbKu.value : 2.2,
        fbSpray ? fbSpray.value : 50.0,
        fbTime ? fbTime.value : 30.0
      );
      fbContainer.innerHTML = renderFluidBedCalculationView(res);
      attachWizardDynamicListeners();
    };

    fbProfile?.addEventListener("change", (e) => {
      const profKey = e.target.value;
      const prof = window.LabWizard.FLUIDIZED_BED_PROFILES?.[profKey];
      if (prof) {
        if (fbMass) fbMass.value = prof.defaultBatchMassKg;
        if (fbDp) fbDp.value = prof.initialDpUm;
        if (fbTemp) fbTemp.value = prof.optInletTempC;
        if (fbKu) fbKu.value = prof.optVelocityFactor;
        if (fbSpray) fbSpray.value = prof.defaultSprayRateGMin;
      }
      updateFluidBed();
    });
    fbMass?.addEventListener("input", updateFluidBed);
    fbDp?.addEventListener("input", updateFluidBed);
    fbTemp?.addEventListener("input", updateFluidBed);
    fbKu?.addEventListener("input", updateFluidBed);
    fbSpray?.addEventListener("input", updateFluidBed);
    fbTime?.addEventListener("input", updateFluidBed);

    // Apply Fluidized Bed Product Button
    document.getElementById("btn-apply-fluidbed-granules")?.addEventListener("click", (e) => {
      const btn = e.currentTarget;
      const actName = btn.dataset.name || "İlaç Granülü";
      const subId = btn.dataset.subid || "sub-pharm-granules-paracetamol";
      const massKg = parseFloat(btn.dataset.mass) || 25.0;

      applyWizardToVessel([
        { subId: subId, name: `${actName}`, amount: Math.min(5000, Math.round(massKg * 1000)), unit: "g" }
      ], 50, 30, 1013.25, "SYNTHESIZE", `Akışkan Yatak Granülasyon & Kurutma (${actName})`);
    });
  }

  // --- Universal Wizard Vessel Loader & Executor ---
  function applyWizardToVessel(items, temp, timeMin, pressureMbar, opType, recipeName) {
    if (!Array.isArray(items) || items.length === 0) return;

    // Clear vessel
    LabState.vessel = [];

    // Ensure catalog items exist and add to vessel
    items.forEach(item => {
      let sub = LabState.substances.find(s => s.id === item.subId);
      if (!sub) {
        // Create auxiliary catalog item
        sub = {
          id: item.subId,
          name: item.name,
          chemical_formula: item.name,
          category: "Organik / Çözücü",
          boiling_point_c: 100.0,
          melting_point_c: 0.0,
          density_g_ml: 1.0,
          color_hex: "#38bdf8"
        };
        LabState.substances.unshift(sub);
      }
      addToVessel(sub.id, item.amount, item.unit);
    });

    // Set parameters
    LabState.vesselTemp = temp;
    LabState.vesselTimeMin = timeMin;
    LabState.vesselPressureMbar = pressureMbar || 1013.25;

    if (dom.vesselTempInput) dom.vesselTempInput.value = temp;
    if (dom.vesselTempSlider) dom.vesselTempSlider.value = Math.min(1200, temp);
    if (dom.paramTempLabel) dom.paramTempLabel.textContent = `${temp}°C`;

    if (dom.vesselTimeInput) dom.vesselTimeInput.value = timeMin;
    if (dom.vesselTimeSlider) dom.vesselTimeSlider.value = Math.min(120, timeMin);
    if (dom.paramTimeLabel) dom.paramTimeLabel.textContent = `${timeMin} Dk`;

    updateVesselPressure(pressureMbar || 1013.25);
    updateVesselParamBadges();

    // Close wizard modal
    if (dom.wizardModal) dom.wizardModal.style.display = "none";

    // Run chemical operation
    executeUniversalOperation(opType, recipeName);

    // Scroll to results
    if (dom.resultCard) {
      dom.resultCard.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  // =========================================================================
  // EVERYDAY / COLLOQUIAL CHEMISTRY DICTIONARY CONTROLLER
  // =========================================================================

  function openDictionaryModal() {
    if (!window.LabWizard) {
      alert("Hata: LabWizard sözlüğü henüz yüklenemedi!");
      return;
    }

    if (dom.dictSearchInput) dom.dictSearchInput.value = "";
    renderDictionaryModalContent("");
    if (dom.dictModal) dom.dictModal.style.display = "flex";
  }

  function renderDictionaryModalContent(filterQuery) {
    if (!dom.dictModalBody || !window.LabWizard) return;

    const q = (filterQuery || "").trim().toLowerCase();
    const dictionary = window.LabWizard.TRADITIONAL_CHEM_DICTIONARY;

    const filtered = dictionary.filter(item => {
      if (!q) return true;
      const blob = [
        item.colloquial,
        item.scientific,
        item.formula,
        item.alchemicalName,
        item.everydayUsage,
        item.note
      ].join(" ").toLowerCase();
      return blob.includes(q);
    });

    if (filtered.length === 0) {
      dom.dictModalBody.innerHTML = `
        <div style="text-align: center; padding: 2rem; color: var(--text-muted);">
          <h4>🔍 "${escapeHtml(filterQuery)}" için sözlükte kayıt bulunamadı.</h4>
          <p style="font-size: 0.82rem;">Sol paneldeki 1,400+ maddelik genel arama motorunu kullanabilirsiniz.</p>
        </div>
      `;
      return;
    }

    let html = "";
    filtered.forEach(item => {
      html += `
        <div class="dict-card-item">
          <div style="flex: 1; min-width: 250px;">
            <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
              <strong style="color: var(--gold-light); font-size: 1.1rem; font-family: var(--font-serif);">${escapeHtml(item.colloquial)}</strong>
              <span class="badge badge-teal">${escapeHtml(item.formula)}</span>
              <span class="badge badge-outline" style="font-size: 0.7rem;">${escapeHtml(item.alchemicalName)}</span>
            </div>
            <div style="font-size: 0.85rem; color: #fff; margin-top: 0.25rem;">
              Bilimsel Adı: <strong>${escapeHtml(item.scientific)}</strong>
            </div>
            <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.25rem;">
              🏠 Gündelik Kullanım: ${escapeHtml(item.everydayUsage)}
            </div>
            <div style="font-size: 0.74rem; color: #94a3b8; margin-top: 0.2rem; font-style: italic;">
              💡 Not: ${escapeHtml(item.note)}
            </div>
          </div>

          <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 0.4rem;">
            <span class="badge ${item.safety.includes('Aşırı') || item.safety.includes('Korozif') ? 'badge-gold' : 'badge-outline'}" style="font-size: 0.72rem;">
              ${escapeHtml(item.safety)}
            </span>
            <button class="btn btn-gold btn-load-dict-sub" data-sub-id="${escapeHtml(item.subId)}" data-sub-name="${escapeHtml(item.scientific)}" data-sub-formula="${escapeHtml(item.formula)}" style="font-size: 0.78rem; padding: 0.35rem 0.75rem;">
              ➕ Behere Yükle
            </button>
          </div>
        </div>
      `;
    });

    dom.dictModalBody.innerHTML = html;

    // Attach click listeners to "➕ Behere Yükle" buttons
    dom.dictModalBody.querySelectorAll(".btn-load-dict-sub").forEach(btn => {
      btn.addEventListener("click", () => {
        const subId = btn.dataset.subId;
        const name = btn.dataset.subName;
        const formula = btn.dataset.subFormula;

        let sub = LabState.substances.find(s => s.id === subId);
        if (!sub) {
          sub = {
            id: subId,
            name: name,
            chemical_formula: formula,
            category: "Asit / Baz",
            boiling_point_c: 100.0,
            density_g_ml: 1.18,
            color_hex: "#f59e0b"
          };
          LabState.substances.unshift(sub);
        }

        addToVessel(sub.id, 50, "mL");

        btn.textContent = "✓ Behere Eklendi!";
        btn.style.background = "#10b981";
        setTimeout(() => {
          btn.textContent = "➕ Behere Yükle";
          btn.style.background = "";
        }, 1500);
      });
    });

    // Expose public API on window for external integrations (e.g. NLM RxNorm engine)
    window.LabEngine = {
      addToVessel: function(subId, amount, unit, customLabel) {
        addToVessel(subId, amount, unit, customLabel);
      },
      removeFromVessel: removeFromVessel,
      clearVessel: function() {
        LabState.vessel = [];
        renderVessel();
        renderOpportunitySuggestions();
      },
      getSubstances: function() {
        return LabState.substances;
      },
      getVessel: function() {
        return LabState.vessel;
      },
      renderVessel: renderVessel,
      renderSubstancesCatalog: renderSubstancesCatalog
    };
  }

})();

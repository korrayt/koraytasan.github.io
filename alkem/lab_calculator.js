// =========================================================================
// MAGNUM OPUS: UNIVERSAL CHEMICAL & ALCHEMICAL CALCULATOR ENGINE (v3.0)
// Algorithmic physical chemistry calculator:
// - Exact IUPAC Atomic Weights & Formula Parser
// - Multi-Component Stoichiometric Decomposition
// - Thermodynamic Phase Change & Boiling Evaporation Rates
// - Acid-Base Molar Titration & Neutralization Enthalpy (Q, Delta T, pH)
// - Alkali Metal Water-Redox & Hydrogen Ideal Gas Law (V = nRT/P)
// - Sugar Caramelization & Pyrolytic Charring Kinetics
// - Precipitation Solubility Matrix & Dangerous Hazard Shields
// =========================================================================

(function(global) {
  "use strict";

  // --- IUPAC Exact Atomic Masses (g/mol) ---
  const ATOMIC_WEIGHTS = {
    H: 1.008, He: 4.0026, Li: 6.94, Be: 9.0122, B: 10.81, C: 12.011, N: 14.007, O: 15.999, F: 18.998, Ne: 20.180,
    Na: 22.990, Mg: 24.305, Al: 26.982, Si: 28.085, P: 30.974, S: 32.06, Cl: 35.45, Ar: 39.948,
    K: 39.098, Ca: 40.078, Sc: 44.956, Ti: 47.867, V: 50.942, Cr: 51.996, Mn: 54.938, Fe: 55.845, Co: 58.933, Ni: 58.693,
    Cu: 63.546, Zn: 65.38, Ga: 69.723, Ge: 72.630, As: 74.922, Se: 78.971, Br: 79.904, Kr: 83.798,
    Rb: 85.468, Sr: 87.62, Y: 88.906, Zr: 91.224, Nb: 92.906, Mo: 95.95, Tc: 98.0, Ru: 101.07, Rh: 102.91, Pd: 106.42,
    Ag: 107.87, Cd: 112.41, In: 114.82, Sn: 118.71, Sb: 121.76, Te: 127.60, I: 126.90, Xe: 131.29,
    Cs: 132.91, Ba: 137.33, La: 138.91, Ce: 140.12, Pr: 140.91, Nd: 144.24, Sm: 150.36, Eu: 151.96, Gd: 157.25, Tb: 158.93,
    Dy: 162.50, Ho: 164.93, Er: 167.26, Tm: 168.93, Yb: 173.05, Lu: 174.97, Hf: 178.49, Ta: 180.95, W: 183.84, Re: 186.21,
    Os: 190.23, Ir: 192.22, Pt: 195.08, Au: 196.97, Hg: 200.59, Tl: 204.38, Pb: 207.2, Bi: 208.98, Th: 232.04, U: 238.03
  };

  // --- Recursive Chemical Formula Parser ---
  function parseChemicalFormula(formula) {
    if (!formula || typeof formula !== "string") {
      return { isValid: false, mw: 100.0, elements: {} };
    }

    // Clean up formula string (remove states like (s), (l), (aq), (g), spaces)
    let clean = formula.replace(/\((aq|s|l|g)\)/gi, "").replace(/\s+/g, "");

    // Check for hydrate dot (e.g., CuSO4*5H2O or CuSO4·5H2O)
    let hydrateMultiplier = 0;
    let baseFormula = clean;
    const dotMatch = clean.match(/[*·.](\d*)H2O$/i);
    if (dotMatch) {
      hydrateMultiplier = dotMatch[1] ? parseInt(dotMatch[1], 10) : 1;
      baseFormula = clean.slice(0, dotMatch.index);
    }

    try {
      const counts = parseFormulaTokens(baseFormula);
      if (hydrateMultiplier > 0) {
        counts["H"] = (counts["H"] || 0) + hydrateMultiplier * 2;
        counts["O"] = (counts["O"] || 0) + hydrateMultiplier * 1;
      }

      let totalMw = 0;
      for (const [el, count] of Object.entries(counts)) {
        const atw = ATOMIC_WEIGHTS[el] || 50.0;
        totalMw += atw * count;
      }

      return {
        isValid: Object.keys(counts).length > 0,
        mw: Math.round(totalMw * 1000) / 1000,
        elements: counts,
        hasHydrate: hydrateMultiplier > 0,
        hydrateMoles: hydrateMultiplier
      };
    } catch (e) {
      return { isValid: false, mw: 100.0, elements: {} };
    }
  }

  function parseFormulaTokens(formulaStr) {
    const counts = {};
    const stack = [{}];

    let i = 0;
    const len = formulaStr.length;

    while (i < len) {
      const ch = formulaStr[i];

      if (ch === "(" || ch === "[") {
        stack.push({});
        i++;
      } else if (ch === ")" || ch === "]") {
        i++;
        // Read multiplier after bracket
        let numStr = "";
        while (i < len && /\d/.test(formulaStr[i])) {
          numStr += formulaStr[i];
          i++;
        }
        const mult = numStr ? parseInt(numStr, 10) : 1;
        const popped = stack.pop();
        const top = stack[stack.length - 1];
        for (const [el, cnt] of Object.entries(popped)) {
          top[el] = (top[el] || 0) + cnt * mult;
        }
      } else if (/[A-Z]/.test(ch)) {
        // Start of element symbol
        let sym = ch;
        i++;
        if (i < len && /[a-z]/.test(formulaStr[i])) {
          sym += formulaStr[i];
          i++;
        }
        // Read number
        let numStr = "";
        while (i < len && /\d/.test(formulaStr[i])) {
          numStr += formulaStr[i];
          i++;
        }
        const count = numStr ? parseInt(numStr, 10) : 1;
        const top = stack[stack.length - 1];
        top[sym] = (top[sym] || 0) + count;
      } else {
        i++; // skip unrecognized char
      }
    }

    const finalCounts = stack[0];
    return finalCounts;
  }

  // --- Decompose Vessel Items into Pure Species Pool ---
  function resolveVesselSpecies(vesselItems, substanceCatalog) {
    const catalogMap = new Map();
    if (Array.isArray(substanceCatalog)) {
      substanceCatalog.forEach(s => catalogMap.set(s.id, s));
    }

    const speciesPool = [];
    let totalInitialMassG = 0;
    let vesselInitialVolumeMl = 0;

    vesselItems.forEach((vItem, vIdx) => {
      const sub = catalogMap.get(vItem.subId) || {
        id: vItem.subId,
        name: vItem.customLabel || "Bilinmeyen Madde",
        chemical_formula: "X",
        density_g_ml: 1.0,
        ph: 7.0
      };

      // Convert unit to grams
      let massG = parseFloat(vItem.amount) || 0;
      const unit = (vItem.unit || "g").toLowerCase();
      const density = sub.density_g_ml || 1.0;

      if (unit === "ml") {
        massG = massG * density;
        vesselInitialVolumeMl += parseFloat(vItem.amount);
      } else if (unit === "l") {
        massG = massG * 1000 * density;
        vesselInitialVolumeMl += parseFloat(vItem.amount) * 1000;
      } else if (unit === "kg") {
        massG = massG * 1000;
        vesselInitialVolumeMl += massG / density;
      } else if (unit === "mg") {
        massG = massG / 1000;
        vesselInitialVolumeMl += massG / density;
      } else { // 'g'
        vesselInitialVolumeMl += massG / density;
      }

      totalInitialMassG += massG;

      // Check if item is composite formulation (Cola, Bleach, Dish Soap, Custom formulation)
      if (sub.is_composite && Array.isArray(sub.composite_components) && sub.composite_components.length > 0) {
        sub.composite_components.forEach(comp => {
          const compMassG = massG * ((comp.pct || 0) / 100);
          const formula = comp.formula || "H2O";
          const parsed = parseChemicalFormula(formula);
          const compMw = comp.mw || parsed.mw || 100.0;
          const moles = compMw > 0 ? compMassG / compMw : 0;

          speciesPool.push({
            parentSubId: sub.id,
            parentName: sub.name,
            name: comp.name,
            formula: formula,
            elements: parsed.elements,
            mw: compMw,
            massG: compMassG,
            moles: moles,
            role: comp.role || "Bileşen",
            bp: comp.bp || sub.boiling_point_c || 100.0,
            mp: comp.mp || sub.melting_point_c || 0.0,
            decompT: comp.decomp_t || sub.decomposition_temp_c || null,
            density: density,
            ph: sub.ph || 7.0,
            tags: sub.reactivity_tags || []
          });
        });
      } else {
        // Pure substance or element
        const formula = sub.chemical_formula || "X";
        const parsed = parseChemicalFormula(formula);
        const mw = sub.molecular_weight || parsed.mw || 100.0;
        const moles = mw > 0 ? massG / mw : 0;

        speciesPool.push({
          parentSubId: sub.id,
          parentName: sub.name,
          name: sub.name,
          formula: formula,
          elements: parsed.elements,
          mw: mw,
          massG: massG,
          moles: moles,
          role: "Saf Madde",
          bp: sub.boiling_point_c,
          mp: sub.melting_point_c,
          decompT: sub.decomposition_temp_c,
          density: density,
          ph: sub.ph || 7.0,
          tags: sub.reactivity_tags || []
        });
      }
    });

    return {
      speciesPool,
      totalMassG: totalInitialMassG,
      totalVolumeMl: vesselInitialVolumeMl
    };
  }

  // --- Main Scientific Calculator Simulator ---
  function calculateChemicalReaction(opType, vesselItems, currentTempC, timeMin, substanceCatalog, pressureMbar) {
    const resolved = resolveVesselSpecies(vesselItems, substanceCatalog);
    const pool = resolved.speciesPool;
    const initialMass = resolved.totalMassG;
    const initialVolume = resolved.totalVolumeMl;

    if (pool.length === 0) {
      return {
        matched: false,
        title: "Beher Boş",
        description: "Reaksiyon kabında incelenecek madde bulunmuyor."
      };
    }

    // Diagnostics & Species Categorization
    let totalWaterMassG = 0;
    let totalWaterMoles = 0;
    let totalSugarMassG = 0;
    let totalAcidHMoles = 0;
    let totalBaseOHMoles = 0;
    let alkaliMetals = []; // K, Na, Li
    let acidsList = [];
    let basesList = [];
    let oxidizersList = [];
    let reducersList = [];
    let volatileEvaporatedG = 0;
    let evaporatedSpecies = [];
    let gasesEvolved = [];
    let reactionHeatKJ = 0;
    let deltaTempC = 0;
    let safetyHazards = [];
    let precipitationEvents = [];

    // Tally chemical functions
    pool.forEach(sp => {
      // 1. Water
      if (sp.formula === "H2O" || sp.formula.includes("H2O")) {
        totalWaterMassG += sp.massG;
        totalWaterMoles += sp.moles;
      }
      // 2. Sugar / Carbohydrates (Sucrose, Glucose, Fructose)
      if (sp.formula === "C12H22O11" || sp.formula === "C6H12O6" || sp.tags.includes("sugar_rich") || sp.tags.includes("caramelizable")) {
        totalSugarMassG += sp.massG;
      }
      // 3. Alkali metals
      if (["K", "Na", "Li"].includes(sp.formula) || sp.tags.includes("alkali_metal")) {
        alkaliMetals.push(sp);
      }
      // 4. Acids (H+ donors)
      if (sp.formula === "HCl" || sp.formula === "HNO3" || sp.formula === "CH3COOH" || sp.formula === "HCOOH") {
        totalAcidHMoles += sp.moles * 1; // monoprotic
        acidsList.push(sp);
      } else if (sp.formula === "H2SO4") {
        totalAcidHMoles += sp.moles * 2; // diprotic
        acidsList.push(sp);
      } else if (sp.formula === "H3PO4") {
        totalAcidHMoles += sp.moles * 3; // triprotic
        acidsList.push(sp);
      } else if (sp.ph < 4.5 && sp.moles > 0) {
        totalAcidHMoles += sp.moles * 1;
        acidsList.push(sp);
      }
      // 5. Bases (OH- donors or acceptors)
      if (sp.formula === "NaOH" || sp.formula === "KOH" || sp.formula === "LiOH" || sp.formula.includes("NH3") || sp.formula.includes("NH4OH")) {
        totalBaseOHMoles += sp.moles * 1;
        basesList.push(sp);
      } else if (sp.formula === "Ca(OH)2" || sp.formula === "Ba(OH)2") {
        totalBaseOHMoles += sp.moles * 2;
        basesList.push(sp);
      } else if (sp.formula === "Na2CO3" || sp.formula === "K2CO3") {
        totalBaseOHMoles += sp.moles * 2; // neutralizes 2H+
        basesList.push(sp);
      } else if (sp.formula === "NaHCO3" || sp.formula === "KHCO3") {
        totalBaseOHMoles += sp.moles * 1;
        basesList.push(sp);
      }
      // 6. Dangerous oxidizers (Bleach / NaOCl)
      if (sp.formula.includes("NaOCl") || sp.tags.includes("chlorine_source")) {
        oxidizersList.push(sp);
      }
    });

    // =====================================================================
    // STEP 1: SAFETY SHIELD & DEADLY REACTION DETECTION
    // =====================================================================
    // Bleach (NaOCl) + Acid -> Toxic Chlorine Gas (Cl2)
    if (oxidizersList.length > 0 && acidsList.length > 0) {
      safetyHazards.push("⚠️ ÖLÜMCÜL GAZ: Çamaşır suyu (NaOCl) ve Asit reaksiyona girdi! Şiddetli zehirli Klor Gazı (Cl2 ^) üretildi!");
      gasesEvolved.push("Zehirli Klor Gazı (Cl2 ^)");
    }
    // Bleach + Ammonia -> Chloramines
    if (oxidizersList.length > 0 && pool.some(sp => sp.formula.includes("NH3") || sp.formula.includes("NH4"))) {
      safetyHazards.push("⚠️ BOĞUCU ZEHİR: Hipoklorit ve Amonyak teması! Zehirli Kloramin Gazı (NH2Cl ^) açığa çıktı!");
      gasesEvolved.push("Kloramin Gazı (NH2Cl ^)");
    }

    // =====================================================================
    // STEP 2: ACTIVE ALKALI METAL (K, Na, Li) WATER & RESIDUE REDOX
    // =====================================================================
    let alkaliExplosionReport = null;
    if (alkaliMetals.length > 0) {
      // Check if water or acidic syrup moisture is present
      const availableWater = totalWaterMassG;
      const totalAlkaliMoles = alkaliMetals.reduce((sum, m) => sum + m.moles, 0);

      if (availableWater > 0.1 || acidsList.length > 0 || totalSugarMassG > 0) {
        // 2 M + 2 H2O -> 2 MOH + H2 ^ (Exothermic!)
        const metalNames = alkaliMetals.map(m => m.name).join(", ");
        const primaryMetal = alkaliMetals[0].formula; // 'K' or 'Na'
        const deltaHPerMole = primaryMetal === "K" ? -392.2 : -281.8; // kJ/mol
        const reactedMoles = Math.min(totalAlkaliMoles, (totalWaterMoles > 0 ? totalWaterMoles : totalAlkaliMoles));

        const heatLiberatedKJ = Math.abs(reactedMoles * deltaHPerMole);
        reactionHeatKJ += heatLiberatedKJ;

        // Hydrogen moles = reactedMoles / 2
        const molesH2 = reactedMoles / 2;
        // Ideal gas law: V = nRT / P (Liters at 1 atm, T in Kelvin)
        const tempK = (currentTempC || 20) + 273.15;
        const volumeH2L = Math.round(((molesH2 * 0.08206 * tempK) / 1.0) * 100) / 100;

        gasesEvolved.push(`Alevli Hidrojen Gazı (H2 ^: ~${volumeH2L} Litre)`);

        // Check contact with concentrated sugar / cola residue
        const isSyrupOrCaramel = totalSugarMassG > 0;
        let charringText = "";
        let newProductTitle = "";
        let productMassG = 0;

        if (isSyrupOrCaramel) {
          // Intense localized heat (>800°C) + caustic KOH violently dehydrates & chars sugar
          charringText = `Ekzotermik reaksiyon ısısı (>800°C) ve oluşan yakıcı erimiş hidroksit (${primaryMetal}OH), ortamdaki ${totalSugarMassG.toFixed(1)} g derişik şekeri anında pirolize uğrattı! Şeker molekülleri su buharı ve amorf siyah karbon köpüğüne dönüştü.`;
          newProductTitle = "Kömürleşmiş Karbon Köpüğü & Potasyum-Fosfat Tuzu Kalıntısı";
          productMassG = Math.round((totalSugarMassG * 0.42 + reactedMoles * (primaryMetal === 'K' ? 56.1 : 40.0)) * 10) / 10;
        } else {
          newProductTitle = `${primaryMetal === 'K' ? 'Potasyum' : 'Sodyum'} Hidroksit (${primaryMetal}OH) Sulu Çözeltisi`;
          productMassG = Math.round((reactedMoles * (primaryMetal === 'K' ? 56.1 : 40.0) + Math.max(0, availableWater - reactedMoles * 18.0)) * 10) / 10;
        }

        deltaTempC += Math.min(850, Math.round((heatLiberatedKJ * 1000) / (Math.max(10, initialMass) * 4.184)));

        alkaliExplosionReport = {
          occurred: true,
          metal: primaryMetal,
          reactionEquation: `2 ${primaryMetal} + 2 H2O ➔ 2 ${primaryMetal}OH + H2 ↑ + ${heatLiberatedKJ.toFixed(1)} kJ Isı`,
          h2Moles: molesH2.toFixed(3),
          h2VolumeL: volumeH2L,
          flameColor: primaryMetal === "K" ? "Eflatun / Mor Alev (Potasyum Emisyonu)" : "Parlak Sarı Alev (Sodyum D-Çizgisi)",
          heatKJ: heatLiberatedKJ.toFixed(1),
          charring: isSyrupOrCaramel,
          charringDetails: charringText,
          resultingProduct: newProductTitle,
          resultingMassG: productMassG
        };
      }
    }

    // =====================================================================
    // STEP 3: THERMODYNAMIC HEATING, BOILING & EVAPORATION
    // =====================================================================
    let evaporationReport = null;
    let thermalPyrolysisReport = null;

    if (opType === "HEAT" || opType === "DISTILL" || opType === "CALCINE" || currentTempC >= 95) {
      let totalRemainingMassG = 0;
      let nonVolatileSolutesG = 0;
      const volatileLossMap = [];

      pool.forEach(sp => {
        let bp = sp.bp || 999.0;
        let isVacuumBoil = false;
        const cheminfo = (typeof window !== "undefined" && window.LabCheminformatics) || (typeof global !== "undefined" && global.LabCheminformatics);
        if (typeof pressureMbar === 'number' && pressureMbar < 1010 && cheminfo) {
          const fKey = (sp.formula || "").toLowerCase().replace(/[^a-z0-9_]/g, "");
          const thermo = cheminfo.calculateBoilingPointAtPressure(fKey, pressureMbar, bp);
          if (thermo && typeof thermo.boilingPointC === 'number' && !isNaN(thermo.boilingPointC)) {
            bp = thermo.boilingPointC;
            isVacuumBoil = true;
          }
        }
        if (currentTempC >= bp && (bp <= 250 || isVacuumBoil)) {
          // Liquid is above its boiling point
          // Boiling rate in open beaker: ~2.5 g/min at 100°C, increasing with (temp - bp)
          const boilRate = 2.5 * (1 + 0.04 * (currentTempC - bp));
          const maxPossibleLoss = boilRate * timeMin;
          const actualLoss = Math.min(sp.massG, maxPossibleLoss);
          const remaining = sp.massG - actualLoss;

          volatileEvaporatedG += actualLoss;
          if (actualLoss > 0) {
            evaporatedSpecies.push(`${sp.name} (${actualLoss.toFixed(1)} g buharlaştı)`);
            gasesEvolved.push(`${sp.name} Buharı (${sp.formula} ^)`);
          }
          if (remaining > 0.05) {
            totalRemainingMassG += remaining;
          }
        } else {
          // Non-volatile or solid at this temperature
          nonVolatileSolutesG += sp.massG;
          totalRemainingMassG += sp.massG;
        }
      });

      // Sugar Caramelization & Pyrolysis Kinetics
      let sugarState = "Doğal Çözelti";
      let sugarCharredMassG = 0;

      if (totalSugarMassG > 0) {
        if (currentTempC >= 200 || (opType === "CALCINE" && currentTempC >= 180)) {
          // Complete pyrolytic carbonization: C12H22O11 -> 12 C + 11 H2O ^
          sugarState = "Tam Piroliz: Amorf Karbon (Kömür)";
          sugarCharredMassG = totalSugarMassG * (144.13 / 342.3); // 42.1% carbon yield
          gasesEvolved.push("Şeker Piroliz Buharı (H2O + Karamel Dumanı ^)");
          thermalPyrolysisReport = {
            charred: true,
            originalSugarG: totalSugarMassG.toFixed(1),
            carbonYieldG: sugarCharredMassG.toFixed(1),
            equation: "C12H22O11 ➔ 12 C (Amorf Siyah Karbon) + 11 H2O ↑"
          };
        } else if (currentTempC >= 150) {
          sugarState = "Karamelize Amber Ağda / Şurup";
        } else if (currentTempC >= 100 && volatileEvaporatedG >= totalWaterMassG * 0.8) {
          sugarState = "Aşırı Derişik Asidik Şurup (Kalıntı)";
        }
      }

      evaporationReport = {
        initialMassG: initialMass.toFixed(1),
        evaporatedMassG: volatileEvaporatedG.toFixed(1),
        remainingMassG: (totalRemainingMassG).toFixed(1),
        evaporatedPct: Math.min(100, Math.round((volatileEvaporatedG / initialMass) * 100)),
        sugarState: sugarState,
        dryResidueFormed: volatileEvaporatedG >= totalWaterMassG * 0.95 && totalWaterMassG > 0
      };
    }

    // =====================================================================
    // STEP 4: ACID-BASE STOICHIOMETRIC TITRATION & NEUTRALIZATION
    // =====================================================================
    let acidBaseReport = null;
    if (totalAcidHMoles > 0.001 && totalBaseOHMoles > 0.001 && !alkaliExplosionReport) {
      const limitingMoles = Math.min(totalAcidHMoles, totalBaseOHMoles);
      // Enthalpy of neutralization: -57.3 kJ/mol H+
      const neutralizationHeatKJ = limitingMoles * 57.3;
      reactionHeatKJ += neutralizationHeatKJ;

      const dT = (neutralizationHeatKJ * 1000) / (Math.max(20, initialMass) * 4.184);
      deltaTempC += dT;

      // Determine resulting salt from primary acid and base
      const mainAcid = acidsList[0] || { name: "Asit", formula: "HA" };
      const mainBase = basesList[0] || { name: "Baz", formula: "BOH" };

      // Calculate new pH
      let finalPh = 7.0;
      const netMolesH = totalAcidHMoles - totalBaseOHMoles;
      const volL = Math.max(0.01, initialVolume / 1000);

      if (netMolesH > 0.001) {
        // Excess acid
        const concH = netMolesH / volL;
        finalPh = Math.max(0.5, Math.round(-Math.log10(concH) * 10) / 10);
      } else if (netMolesH < -0.001) {
        // Excess base
        const concOH = Math.abs(netMolesH) / volL;
        finalPh = Math.min(13.8, Math.round((14 + Math.log10(concOH)) * 10) / 10);
      } else {
        finalPh = 7.0; // Perfect equivalence point!
      }

      acidBaseReport = {
        neutralized: true,
        molesNeutralized: limitingMoles.toFixed(3),
        heatLiberatedKJ: neutralizationHeatKJ.toFixed(2),
        tempRiseC: dT.toFixed(1),
        finalPh: finalPh,
        acidParticipant: mainAcid.name,
        baseParticipant: mainBase.name,
        equivalencePoint: Math.abs(totalAcidHMoles - totalBaseOHMoles) < 0.005
      };
    }

    // =====================================================================
    // STEP 5: PRECIPITATION & SOLUBILITY EVALUATION
    // =====================================================================
    const elementsInVessel = new Set();
    pool.forEach(sp => {
      if (sp.elements) {
        Object.keys(sp.elements).forEach(el => elementsInVessel.add(el));
      }
    });

    if (elementsInVessel.has("Ag") && elementsInVessel.has("Cl")) {
      precipitationEvents.push({
        name: "Gümüş Klorür (AgCl ↓)",
        color: "#ffffff",
        type: "Peynirimsi Beyaz Çökelti",
        note: "Luna Cornea: Işık altında kararır."
      });
    }
    if (elementsInVessel.has("Ba") && elementsInVessel.has("S") && elementsInVessel.has("O")) {
      precipitationEvents.push({
        name: "Baryum Sülfat (BaSO4 ↓)",
        color: "#f8fafc",
        type: "Yoğun Kar Beyazı Çökelti",
        note: "Asitlerde ve suda tamamen çözünmeyen ağır mineral."
      });
    }
    if (elementsInVessel.has("Pb") && elementsInVessel.has("I")) {
      precipitationEvents.push({
        name: "Kurşun İyodür (PbI2 ↓)",
        color: "#eab308",
        type: "Altın Yağmuru (Golden Rain)",
        note: "Sıcakta eriyip soğurken altın pulcukları gibi parıldayan kristal çökelti."
      });
    }
    if (elementsInVessel.has("Cu") && totalBaseOHMoles > 0.01) {
      precipitationEvents.push({
        name: "Bakır(II) Hidroksit (Cu(OH)2 ↓)",
        color: "#38bdf8",
        type: "Jelatinimsi Gök Mavisi Çökelti",
        note: "Isıtıldığında siyah Bakır Oksite (CuO) dönüşür."
      });
    }

    // =====================================================================
    // STEP 6: SYNTHESIZE FINAL PRODUCTS & NARRATIVE
    // =====================================================================
    let reactionTitle = "";
    let reactionSummary = "";
    let resultingProducts = [];
    let canTransferResidue = false;
    let transferProductPayload = null;

    // SCENARIO A: Alkali Metal Reaction (The User's specific Potassium + Residue case!)
    if (alkaliExplosionReport && alkaliExplosionReport.occurred) {
      reactionTitle = `💥 ŞİDDETLİ EKZOTERMİK REDOKS: ${alkaliExplosionReport.metal} + Sulu/Asidik Matris`;
      reactionSummary = `Potasyum/Sodyum yüksek elektropozitifliği sebebiyle ortamdaki su ve asit protonlarıyla patlayıcı bir şiddetle reaksiyona girdi (${alkaliExplosionReport.reactionEquation}). Açığa çıkan ${alkaliExplosionReport.heatKJ} kJ enerji yerel sıcaklığı anında yüzlerce derece yükselterek üretilen ${alkaliExplosionReport.h2VolumeL} Litre hidrojen gazını (${alkaliExplosionReport.flameColor}) alevlendirdi!`;

      if (alkaliExplosionReport.charring) {
        reactionSummary += ` ${alkaliExplosionReport.charringDetails}`;
        resultingProducts.push({
          name: "Kömürleşmiş Karbon Köpüğü & Potasyum Tuzları",
          formula: "C (Amorf) + KOH + K3PO4",
          massG: alkaliExplosionReport.resultingMassG,
          phase: "solid",
          color_hex: "#09090b",
          yield_pct: 100.0
        });
      } else {
        resultingProducts.push({
          name: alkaliExplosionReport.resultingProduct,
          formula: `${alkaliExplosionReport.metal}OH (aq)`,
          massG: alkaliExplosionReport.resultingMassG,
          phase: "liquid",
          color_hex: "#e2e8f0",
          yield_pct: 100.0
        });
      }

      canTransferResidue = true;
      transferProductPayload = {
        name: resultingProducts[0].name,
        formula: resultingProducts[0].formula,
        amount: resultingProducts[0].massG,
        unit: "g",
        phase: resultingProducts[0].phase,
        color_hex: resultingProducts[0].color_hex,
        tags: ["charred_carbon", "alkaline_ash"]
      };
    }
    // SCENARIO B: Thermal Evaporation, Fractional Distillation & Concentration
    else if (evaporationReport && evaporationReport.evaporatedMassG > 0) {
      // 1. Distillation Separation (Volatile Distillate collected in receiver + High-boiling Residue in retort)
      if (opType === "DISTILL" && volatileEvaporatedG > 0 && parseFloat(evaporationReport.remainingMassG) > 0) {
        reactionTitle = `⚗️ İmbikte Fraksiyonel Damıtma & Ayrıştırma (${currentTempC}°C, ${timeMin} Dk)`;
        const volatileNames = evaporatedSpecies.length > 0 ? evaporatedSpecies.join(", ") : "Uçucu Etken Madde";
        reactionSummary = `Karışım ${currentTempC}°C'de ${timeMin} dakika boyunca fraksiyonel olarak damıtıldı. Kaynama noktası düşük olan etken madde (${volatileNames}) gaz fazına geçerek imbik kondensatında saf olarak toplandı (${evaporationReport.evaporatedMassG} g, saflık: >%98). Kaynama noktası yüksek olan taşıyıcı baz (${evaporationReport.remainingMassG} g) imbik haznesinde dip tortusu olarak kaldı ve bileşenler birbirinden başarıyla ayrıştırıldı.`;

        resultingProducts.push({
          name: `Ayrıştırılmış Kondensat (Distilat: ${volatileNames})`,
          formula: "Saf Uçucu Etken Faz",
          massG: parseFloat(evaporationReport.evaporatedMassG),
          phase: "liquid",
          color_hex: "#38bdf8",
          yield_pct: 98.5
        });
        resultingProducts.push({
          name: "Ayrıştırılmış Dip Kalıntısı (Yüksek Kaynama Noktalı Baz)",
          formula: "Taşıyıcı Matris (Dip Tortusu)",
          massG: parseFloat(evaporationReport.remainingMassG),
          phase: "viscous_liquid",
          color_hex: "#f8fafc",
          yield_pct: 99.2
        });

        canTransferResidue = true;
        transferProductPayload = {
          name: resultingProducts[1].name,
          formula: resultingProducts[1].formula,
          amount: resultingProducts[1].massG,
          unit: "g",
          phase: resultingProducts[1].phase,
          color_hex: resultingProducts[1].color_hex,
          tags: ["distillation_residue", "purified_base"]
        };
      }
      // 2. Complete Evaporation & Pyrolysis / Caramelization (The Kola 45 min case!)
      else if (evaporationReport.dryResidueFormed) {
        reactionTitle = `🔥 ${currentTempC}°C Termodinamik Faz Değişimi & Derişme (${timeMin} Dk)`;
        reactionSummary = `Karışım ${currentTempC}°C'de ${timeMin} dakika boyunca kaynatıldı. Kaynama noktası düşük olan tüm serbest su ve uçucu aromatikler (${evaporationReport.evaporatedMassG} g, %${evaporationReport.evaporatedPct}) tamamen buharlaştı.`;

        if (totalSugarMassG > 0) {
          if (thermalPyrolysisReport) {
            reactionSummary += ` Yüksek sıcaklık şekeri tamamen pirolize uğrattı: ${thermalPyrolysisReport.equation}. Dipte ${thermalPyrolysisReport.carbonYieldG} g saf gözenekli amorf kömür (karbon) kaldı.`;
            resultingProducts.push({
              name: "Pirolize Uğramış Karbon Kalıntısı (C)",
              formula: "C (Kömürleşmiş Kalıntı)",
              massG: parseFloat(thermalPyrolysisReport.carbonYieldG),
              phase: "solid",
              color_hex: "#09090b",
              yield_pct: 100.0
            });
          } else {
            reactionSummary += ` Su tamamen uçtuktan sonra dipte koyu renkli, kıvamlı ve yapışkan asidik karamel şurubu (Kola konsantresi / Sukroz + Fosforik Asit) kaldı.`;
            resultingProducts.push({
              name: "Kola Isıl Kalıntısı (Derişik Karamelize Şeker & Fosforik Asit Şurubu)",
              formula: "C12H22O11 (Karamel) + H3PO4 + Mineraller",
              massG: parseFloat(evaporationReport.remainingMassG),
              phase: "viscous_liquid",
              color_hex: "#451a03",
              yield_pct: 100.0
            });
          }
        } else {
          resultingProducts.push({
            name: "Derişik Kuru Mineral Kalıntısı (Sal Fixum)",
            formula: "İnorganik Tuzlar & Kuru Tortu",
            massG: parseFloat(evaporationReport.remainingMassG),
            phase: "solid",
            color_hex: "#f8fafc",
            yield_pct: 100.0
          });
        }

        canTransferResidue = true;
        transferProductPayload = {
          name: resultingProducts[0].name,
          formula: resultingProducts[0].formula,
          amount: resultingProducts[0].massG,
          unit: "g",
          phase: resultingProducts[0].phase,
          color_hex: resultingProducts[0].color_hex,
          tags: ["caramel_residue", "concentrated_acid", "water_reactive_ready"]
        };
      } else {
        reactionSummary = `Sıcaklık etkisiyle ${evaporationReport.evaporatedMassG} g uçucu çözücü gaz fazına geçti. Karışım derişti ve hacmi azaldı. Kalan kütle: ${evaporationReport.remainingMassG} g.`;
        resultingProducts.push({
          name: "Kısmen Derişmiş Çözelti",
          formula: "Derişik Karışım",
          massG: parseFloat(evaporationReport.remainingMassG),
          phase: "liquid",
          color_hex: "#78350f",
          yield_pct: 100.0
        });
      }
    }
    // SCENARIO C: Acid-Base Neutralization
    else if (acidBaseReport) {
      reactionTitle = `🧪 Nötralizasyon Titrasyonu: ${acidBaseReport.acidParticipant} + ${acidBaseReport.baseParticipant}`;
      reactionSummary = `${acidBaseReport.molesNeutralized} mol H+ ve OH- iyonları ekzotermik nötralizasyon reaksiyonu verdi (H+ + OH- ➔ H2O + ${acidBaseReport.heatLiberatedKJ} kJ). Çözelti sıcaklığı ${acidBaseReport.tempRiseC}°C yükseldi ve pH dengesi ${acidBaseReport.finalPh} olarak hesaplandı.`;

      resultingProducts.push({
        name: "Nötralize Tuz Çözeltisi & Su",
        formula: "Tuz(aq) + H2O",
        massG: initialMass,
        phase: "liquid",
        color_hex: "#e0f2fe",
        yield_pct: 100.0
      });
    }
    // SCENARIO D: Generic Mixing / Dissolution
    else {
      reactionTitle = `🔄 Fiziksel Karışım & Çözünme Homojenizasyonu`;
      reactionSummary = `${pool.length} farklı kimyasal tür beher içinde mekanik olarak temas ettirildi. Moleküller arası difüzyon gerçekleşti, termal ve kimyasal denge korundu.`;
      resultingProducts.push({
        name: "Homojen Sıvı/Katı Karışımı",
        formula: "Fiziksel Karışım",
        massG: initialMass,
        phase: "liquid",
        color_hex: pool[0].color_hex || "#38bdf8",
        yield_pct: 100.0
      });
    }

    return {
      matched: true,
      opType: opType,
      title: reactionTitle,
      description: reactionSummary,
      temp: currentTempC,
      timeMin: timeMin,
      initialMassG: initialMass,
      products: resultingProducts,
      gases: gasesEvolved,
      tempChange: Math.round(deltaTempC * 10) / 10,
      newTemp: Math.min(1200, Math.round((currentTempC + deltaTempC) * 10) / 10),
      safetyHazards: safetyHazards,
      precipitations: precipitationEvents,
      alkaliReport: alkaliExplosionReport,
      evaporationReport: evaporationReport,
      acidBaseReport: acidBaseReport,
      canTransferResidue: canTransferResidue,
      transferPayload: transferProductPayload,
      alchemicalNote: "Maddenin dört unsuru (Ateş, Su, Hava, Toprak) Hermetik kanunlar ve termodinamik denge doğrultusunda yeniden biçimlendi."
    };
  }

  // =========================================================================
  // ALGORITHMIC SEPARATION & PURIFICATION PROTOCOL GENERATOR
  // Automatically analyzes boiling points, melting points, and solubility deltas
  // to synthesize exact physical & chemical separation roadmaps.
  // =========================================================================
  function generateSeparationProtocol(input, totalAmountG, mixtureName, catalog) {
    let speciesList = [];
    let totalMass = totalAmountG || 100.0;
    let title = mixtureName || "Karışım";

    if (!input) {
      return {
        feasible: false,
        mixtureName: title,
        message: "Ayrıştırma analizi için geçerli bir karışım veya bileşen verisi bulunamadı."
      };
    }

    // Case 1: input has speciesPool (from resolveVesselSpecies)
    if (input.speciesPool && Array.isArray(input.speciesPool)) {
      speciesList = input.speciesPool;
      totalMass = totalAmountG || input.totalMassG || totalMass;
    }
    // Case 2: input is a single composite substance object
    else if (!Array.isArray(input) && input.composite_components && Array.isArray(input.composite_components)) {
      title = mixtureName || input.name;
      speciesList = input.composite_components;
      totalMass = totalAmountG || input.total_batch_amount || 100.0;
    }
    // Case 3: input is an array of vessel items [{ subId, amount, unit }]
    else if (Array.isArray(input) && input.length > 0 && input[0].subId && catalog) {
      const resolved = resolveVesselSpecies(input, catalog);
      speciesList = resolved.speciesPool;
      totalMass = totalAmountG || resolved.totalMassG || totalMass;
      if (input.length === 1) {
        const singleSub = catalog.find(s => s.id === input[0].subId);
        if (singleSub) title = singleSub.name;
      }
    }
    // Case 4: input is already an array of species or components
    else if (Array.isArray(input)) {
      speciesList = input;
    }

    if (!Array.isArray(speciesList) || speciesList.length < 2) {
      return {
        feasible: false,
        mixtureName: title,
        message: "Ayrıştırma analizi yapabilmek için karışımda en az iki farklı kimyasal bileşen bulunmalıdır. Saf tek bileşenli maddeler termal veya fiziksel olarak alt bileşenlere ayrılamaz."
      };
    }

    const components = speciesList.map(sp => {
      const mass = sp.massG !== undefined ? sp.massG : (totalMass * ((sp.pct || (100 / speciesList.length)) / 100));
      const pct = sp.pct !== undefined ? sp.pct : (totalMass > 0 ? (mass / totalMass) * 100 : 50);
      const bp = sp.bp || sp.boiling_point_c || 999.0;
      const mp = sp.mp !== undefined && sp.mp !== null ? sp.mp : (sp.melting_point_c !== undefined ? sp.melting_point_c : 0.0);
      const mw = sp.mw || 100.0;
      const isVolatile = bp <= 180.0;

      return {
        name: sp.name,
        formula: sp.formula || sp.chemical_formula || 'Bileşen',
        massG: Math.round(mass * 100) / 100,
        pct: Math.round(pct * 10) / 10,
        bp: bp,
        mp: mp,
        mw: mw,
        phase: sp.phase || sp.phase_20c || 'liquid',
        isVolatile: isVolatile,
        role: sp.role || 'Bileşen',
        solubility: sp.solubility || (sp.formula === 'H2O' ? 'water' : (bp > 200 ? 'water_polar' : 'alcohol_organic'))
      };
    });

    const options = [];

    // --- 1. THERMAL FRACTIONAL DISTILLATION PROTOCOL ---
    const sortedByBp = [...components].sort((a, b) => a.bp - b.bp);
    const lowestBp = sortedByBp[0];
    const highestBp = sortedByBp[sortedByBp.length - 1];
    const deltaBp = highestBp.bp - lowestBp.bp;

    if (deltaBp >= 20.0 && lowestBp.bp < highestBp.bp && lowestBp.bp <= 220.0) {
      const targetTemp = Math.round(lowestBp.bp);
      const estTimeMin = Math.max(20, Math.min(120, Math.ceil(lowestBp.massG * 1.5) + 15));

      const nonVolatileComponents = sortedByBp.slice(1);
      const totalResidueMass = Math.round(nonVolatileComponents.reduce((sum, c) => sum + c.massG, 0) * 100) / 100;
      const residueLabel = nonVolatileComponents.length === 1 
        ? nonVolatileComponents[0].name 
        : (nonVolatileComponents.every(c => c.name.toLowerCase().includes("peg") || c.name.toLowerCase().includes("glikol"))
            ? "Polietilen Glikol Taşıyıcı Tabanı (PEG-400 + PEG-3350)"
            : nonVolatileComponents.map(c => c.name).join(" + "));

      options.push({
        methodId: "METHOD_FRACTIONAL_DISTILLATION",
        name: "Termal Fraksiyonel Damıtma (İmbik Yöntemi)",
        type: "Kaynama Noktası Farkı ile Buharlaştırma",
        badge: "En Yüksek Verim",
        badgeClass: "badge-gold",
        ratingStars: deltaBp >= 60 ? "⭐⭐⭐⭐⭐ (Kusursuz Ayrışma)" : "⭐⭐⭐⭐ (İyi Ayrışma)",
        deltaProperty: `ΔT(Kaynama Noktası Farkı): ${Math.round(deltaBp)}°C (${lowestBp.name}: ${lowestBp.bp}°C vs ${highestBp.name}: ${highestBp.bp}°C)`,
        targetTemp: targetTemp,
        recommendedTimeMin: estTimeMin,
        opType: "DISTILL",
        procedure: [
          `1. Karışımı (${totalMass.toFixed(1)} g) imbik haznesine aktarın.`,
          `2. Sıcaklığı tam **${targetTemp}°C** seviyesine ayarlayın ve soğutucu geri soğutucuyu bağlayın.`,
          `3. **${estTimeMin} dakika** boyunca kontrollü ısıtma uygulayın.`,
          `4. Uçucu fraksiyon (**${lowestBp.name}**) buharlaşarak kondensat toplama kabında saf sıvı/kondensat olarak birikir (~${lowestBp.massG.toFixed(1)} g, saflık: >%98).`,
          `5. Kaynama noktası yüksek olan kalıntı (**${residueLabel}**), imbik tabanında sabit dip tortusu olarak kalır (~${totalResidueMass.toFixed(1)} g, saflık: >%99).`
        ],
        fractions: [
          {
            title: "Toplanan Kondensat (Distilat)",
            component: lowestBp.name,
            formula: lowestBp.formula,
            massG: lowestBp.massG,
            purityPct: 98.5,
            state: "liquid / kondensat"
          },
          {
            title: "Kazanda Kalan Dip Tortusu (Ağır Faz)",
            component: residueLabel,
            formula: nonVolatileComponents.map(c => c.formula).filter(Boolean).join(" & "),
            massG: totalResidueMass,
            purityPct: 99.2,
            state: highestBp.phase
          }
        ],
        alchemicalPrinciple: "Distillatio & Sublimatio: Uçucu Ruh (Spiritus) yükselir; sabit olan Beden (Corpus) dipte ayrışıp saflaşır."
      });
    }

    // --- 2. SELECTIVE SOLVENT EXTRACTION ---
    let selectiveSolvent = "Saf Etanol (%96)";
    let extractedComponent = components[0];

    if (components.some(c => c.name.toLowerCase().includes("mupirosin") || c.name.toLowerCase().includes("aspirin") || c.name.toLowerCase().includes("salisilik"))) {
      selectiveSolvent = "Saf Etanol (%96) veya Dietil Eter";
      extractedComponent = components.find(c => c.name.toLowerCase().includes("mupirosin") || c.name.toLowerCase().includes("aspirin") || c.name.toLowerCase().includes("salisilik"));
    } else if (components.some(c => c.name.toLowerCase().includes("tuz") || c.name.toLowerCase().includes("nacl"))) {
      selectiveSolvent = "Damıtık Su (Polar Liçing)";
      extractedComponent = components.find(c => c.name.toLowerCase().includes("tuz") || c.name.toLowerCase().includes("nacl"));
    }

    const restComponents = components.filter(c => c !== extractedComponent);
    const restTotalMass = Math.round(restComponents.reduce((sum, c) => sum + c.massG, 0) * 100) / 100;
    const restLabel = restComponents.length === 1 
      ? restComponents[0].name 
      : (restComponents.every(c => c.name.toLowerCase().includes("peg") || c.name.toLowerCase().includes("glikol"))
          ? "Polietilen Glikol Taşıyıcı Tabanı (PEG-400 + PEG-3350)"
          : restComponents.map(c => c.name).join(" + "));

    options.push({
      methodId: "METHOD_SOLVENT_EXTRACTION",
      name: "Diferansiyel Çözücü Ekstraksiyonu & Süzme",
      type: "Seçici Çözünürlük & Polarite Farkı",
      badge: "Kimyasal Saflaştırma",
      badgeClass: "badge-teal",
      ratingStars: "⭐⭐⭐⭐ (Yüksek Saflık)",
      deltaProperty: `Çözünürlük Ayrımı (${extractedComponent.name} organik çözücüde çözünürken, taşıyıcı taban filtrede kalır)`,
      recommendedSolvent: selectiveSolvent,
      targetTemp: 20,
      recommendedTimeMin: 15,
      opType: "FILTER",
      procedure: [
        `1. Karışıma (${totalMass.toFixed(1)} g) 50 mL **${selectiveSolvent}** ekleyin.`,
        `2. Çalkalama kabında 5-10 dakika oda sıcaklığında homojen karıştırarak etken maddenin çözücü fazına geçmesini sağlayın.`,
        `3. Karışımı filtre kağıdından (süzgeç) geçirerek süzün: Çözünmeyen taşıyıcı taban (${restLabel || 'Matris'}) filtre üzerinde kalır (~${restTotalMass.toFixed(1)} g).`,
        `4. Süzülen berrak çözeltiyi imbikte çözücünün kaynama noktasında (${selectiveSolvent.includes('Eter') ? '35°C' : '78°C'}) hafifçe buharlaştırarak çözücüyü geri kazanın.`,
        `5. Buharlaşma kabının dibinde kristalize olmuş ultra saf **${extractedComponent.name}** (~${extractedComponent.massG.toFixed(1)} g, saflık: >%99) kalacaktır.`
      ],
      fractions: [
        {
          title: "Süzüntüden Kristallenen Saf Etken Madde",
          component: extractedComponent.name,
          formula: extractedComponent.formula,
          massG: extractedComponent.massG,
          purityPct: 99.5,
          state: "solid (kristal)"
        },
        {
          title: "Filtrede Kalan Çözünmeyen Taşıyıcı Matris",
          component: restLabel || "Taşıyıcı Posası",
          formula: restComponents.map(c => c.formula).filter(Boolean).join(" & ") || "Baz",
          massG: restTotalMass,
          purityPct: 97.0,
          state: restComponents[0] ? restComponents[0].phase : "solid"
        }
      ],
      alchemicalPrinciple: "Solutio & Filtratio: Benzer benzeri çözer. Çözücü ruhu çeker, beden geride kalır."
    });

    // --- 3. FRACTIONAL CRYSTALLIZATION (Kademeli Soğutma) ---
    const sortedByMp = [...components].sort((a, b) => b.mp - a.mp);
    const highestMp = sortedByMp[0];
    const lowestMp = sortedByMp[sortedByMp.length - 1];
    const deltaMp = highestMp.mp - lowestMp.mp;

    if (deltaMp >= 25.0 && highestMp.mp >= 15.0) {
      const freezeTemp = Math.round(highestMp.mp - 5);
      options.push({
        methodId: "METHOD_FRACTIONAL_CRYSTALLIZATION",
        name: "Kademeli Soğutma & Dondurarak Kristalizasyon",
        type: "Erime Noktası Farkı ile Katılaştırma",
        badge: "Fiziksel Kristalleşme",
        badgeClass: "badge-outline",
        ratingStars: "⭐⭐⭐ (Fiziksel Kristalizasyon)",
        deltaProperty: `ΔT(Erime Noktası): ${Math.round(deltaMp)}°C (${highestMp.name}: ${highestMp.mp}°C donar vs ${lowestMp.name}: ${lowestMp.mp}°C sıvı kalır)`,
        targetTemp: freezeTemp,
        recommendedTimeMin: 20,
        opType: "FILTER",
        procedure: [
          `1. Karışımı kademeli olarak **${freezeTemp}°C** sıcaklığa kadar soğutun.`,
          `2. Erime noktası yüksek olan **${highestMp.name}** kristalleşerek katı faza geçer.`,
          `3. Henüz sıvı fazda bulunan **${lowestMp.name}** vakumlu filtre ile süzülerek katı kristallerden ayrıştırılır.`
        ],
        fractions: [
          {
            title: "Kristalleşen Katı Faz (Filtrede Kalan)",
            component: highestMp.name,
            formula: highestMp.formula,
            massG: highestMp.massG,
            purityPct: 94.0,
            state: "solid (kristalize)"
          },
          {
            title: "Sıvı Kalan Filtrasyon Fazı",
            component: lowestMp.name,
            formula: lowestMp.formula,
            massG: lowestMp.massG,
            purityPct: 92.5,
            state: "liquid"
          }
        ],
        alchemicalPrinciple: "Congelatio: Soğuk ateş eriyik içindeki en sabit kristali uyandırıp dondurur."
      });
    }

    return {
      feasible: options.length > 0,
      mixtureName: title,
      totalMassG: totalMass,
      componentsCount: components.length,
      components: components,
      options: options,
      primaryRecommendation: options[0] || null
    };
  }

  // --- Export to Global ---
  global.LabCalculator = {
    ATOMIC_WEIGHTS,
    parseChemicalFormula,
    resolveVesselSpecies,
    calculateChemicalReaction,
    generateSeparationProtocol
  };

})(typeof window !== "undefined" ? window : global);


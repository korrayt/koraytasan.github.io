/**
 * MAGNUM OPUS - GUIDED CHEMICAL ENGINEERING & ALCHEMY WIZARD (v1.0)
 * =========================================================================
 * Designed for non-chemists to perform advanced chemical engineering calculations:
 * 1. Saponification (SAP) Stoichiometry & Soap Master (Cold & Hot Process)
 * 2. Essential Oil & Hydrosol Steam Hydrodistillation Yield Modeling
 * 3. Bioactive Ointment & Cream Formulation Balancer (Galenical & Modern)
 * 4. Salt & Mineral Supersaturation Crystallization Kinetics
 * 5. Pearson Square Ethanol Tincture Dilution (with Volume Contraction)
 * 6. Inverse Antoine Vacuum Pressure Solver (Heat-Sensitive Preservation)
 * 7. Everyday / Colloquial Turkish Chemistry Dictionary & Converter
 * =========================================================================
 * Single Source of Truth (SSOT): Koray Taşan Omniscient Alchemical Architecture
 * Offline execution: Zero external CORS/network calls ($0.00 SLA).
 */

(function(global) {
  'use strict';

  // =========================================================================
  // 1. SAPONIFICATION (SAP) DATABASE & OIL PROFILES
  // =========================================================================
  const SAP_OILS = {
    "olive": {
      name: "Zeytinyağı (Saf / Sızma)",
      nameEn: "Olive Oil",
      sapNaOH: 0.134,
      sapKOH: 0.188,
      density: 0.915,
      iodineVal: 84,
      hardness: 29,
      cleansing: 0,
      conditioning: 82,
      bubbly: 0,
      creamy: 17,
      description: "Yüksek oleik asit (%70-80). Çok yumuşak, nemlendirici ve geleneksel Kastil kalıp sabunlarının temelidir."
    },
    "coconut": {
      name: "Hindistan Cevizi Yağı (Soğuk Sıkım)",
      nameEn: "Coconut Oil",
      sapNaOH: 0.183,
      sapKOH: 0.257,
      density: 0.924,
      iodineVal: 10,
      hardness: 79,
      cleansing: 67,
      conditioning: 10,
      bubbly: 67,
      creamy: 12,
      description: "Yüksek laurik asit (%50). Sertleştirici, bol köpük yapıcı ve güçlü temizleme kapasitesine sahiptir."
    },
    "sunflower": {
      name: "Ayçiçek Yağı",
      nameEn: "Sunflower Oil",
      sapNaOH: 0.136,
      sapKOH: 0.191,
      density: 0.920,
      iodineVal: 130,
      hardness: 11,
      cleansing: 0,
      conditioning: 85,
      bubbly: 0,
      creamy: 11,
      description: "Yüksek linoleik asit ve E vitamini. İpeksi doku verir, sabuna yumuşatıcı özellik katar."
    },
    "castor": {
      name: "Hint Yağı (Risinus)",
      nameEn: "Castor Oil",
      sapNaOH: 0.128,
      sapKOH: 0.180,
      density: 0.961,
      iodineVal: 85,
      hardness: 0,
      cleansing: 0,
      conditioning: 90,
      bubbly: 90,
      creamy: 90,
      description: "Risinoleik asit (%90). Yoğun, kalıcı ve kremsi köpük stabilizatörüdür."
    },
    "almond": {
      name: "Tatlı Badem Yağı",
      nameEn: "Sweet Almond Oil",
      sapNaOH: 0.137,
      sapKOH: 0.192,
      density: 0.915,
      iodineVal: 97,
      hardness: 7,
      cleansing: 0,
      conditioning: 89,
      bubbly: 0,
      creamy: 7,
      description: "Hassas ve bebek ciltleri için ideal, hafif ve zengin bir kondisyoner yağdır."
    },
    "shea": {
      name: "Karite (Shea) Yağı",
      nameEn: "Shea Butter",
      sapNaOH: 0.128,
      sapKOH: 0.180,
      density: 0.910,
      iodineVal: 59,
      hardness: 45,
      cleansing: 0,
      conditioning: 54,
      bubbly: 0,
      creamy: 45,
      description: "Yüksek stearik asit ve sabunlaşmayan yağ fraksiyonu. Kalıp sabuna lüks sertlik ve kremamsı doku katar."
    }
  };

  /**
   * Saponification Calculator (Stoichiometric NaOH / KOH)
   */
  function calculateSaponification(oilKey, oilMassG, soapType, superfatPct, waterRatioPct) {
    const oil = SAP_OILS[oilKey] || SAP_OILS["olive"];
    const mass = Math.max(10, parseFloat(oilMassG) || 500);
    const sf = Math.max(0, Math.min(25, parseFloat(superfatPct) !== undefined ? parseFloat(superfatPct) : 5));
    const wr = Math.max(25, Math.min(50, parseFloat(waterRatioPct) !== undefined ? parseFloat(waterRatioPct) : 33));

    const isLiquid = soapType === "liquid" || soapType === "koh";
    const sapFactor = isLiquid ? oil.sapKOH : oil.sapNaOH;
    const lyeName = isLiquid ? "Potasyum Hidroksit (KOH / Sıvı Sabun)" : "Sodyum Hidroksit (NaOH / Katı Kostik)";
    const lyeFormula = isLiquid ? "KOH" : "NaOH";

    // 100% stoichiometric lye:
    const theoreticalLyeG = mass * sapFactor;
    // Superfat discount:
    const actualLyeG = theoreticalLyeG * (1.0 - (sf / 100.0));
    // Water mass:
    const waterMassG = mass * (wr / 100.0);
    // Glycerin byproduct (~9.5-10% of oil mass):
    const glycerinG = mass * 0.098;
    // Total soap mass:
    const totalMassG = mass + actualLyeG + waterMassG;
    // Exothermic heat rise:
    const heatDeltaC = Math.round(35 + (actualLyeG / (waterMassG || 1)) * 45);

    return {
      oilName: oil.name,
      oilMassG: Math.round(mass * 10) / 10,
      soapType: isLiquid ? "Sıvı Arap Sabunu (KOH)" : "Katı Kalıp Sabun (NaOH)",
      lyeName: lyeName,
      lyeFormula: lyeFormula,
      lyeMassG: Math.round(actualLyeG * 10) / 10,
      theoreticalLyeG: Math.round(theoreticalLyeG * 10) / 10,
      superfatPct: sf,
      waterMassG: Math.round(waterMassG * 10) / 10,
      waterRatioPct: wr,
      glycerinMassG: Math.round(glycerinG * 10) / 10,
      totalBatchMassG: Math.round(totalMassG * 10) / 10,
      expectedHeatRiseC: Math.min(65, heatDeltaC),
      curingDays: isLiquid ? "Kullanıma Hazır (Sıvı Jel)" : "4 - 6 Hafta (Kürleşme)",
      soapQuality: {
        hardness: oil.hardness,
        cleansing: oil.cleansing,
        conditioning: oil.conditioning,
        bubbly: oil.bubbly,
        creamy: oil.creamy
      },
      procedure: [
        `1. Güvenlik: Gözlük ve eldiven takın. <strong>${Math.round(waterMassG)} g soğuk distile suyu</strong> ısıya dayanıklı kaba alın.`,
        `2. <strong>${Math.round(actualLyeG)} g ${lyeFormula}</strong>'i yavaşça suyun üzerine ekleyin (Asla suyu kostiğe dökmeyin!). Isı ~${heatDeltaC}°C'ye çıkacaktır. Şeffaflaşana kadar karıştırıp 40-45°C'ye soğutun.`,
        `3. <strong>${Math.round(mass)} g ${oil.name}</strong>'nı 40-45°C'ye ısıtın (Yağ ve kostik çözeltisi aynı sıcaklıkta olmalıdır).`,
        `4. Kostik çözeltisini yağa ekleyin ve el blenderı ile 'iz (trace)' kıvamına (puding kıvamı) gelene kadar 3-5 dakika karıştırın.`,
        `5. Kalıba dökün, üzerini havlu ile örtüp 24 saat saponifikasyonun tamamlanmasını bekleyin.`,
        `6. Kalıptan çıkarıp dilimleyin; %${sf} aşırı yağlama sayesinde cildi kurutmayan, serbest kostiği sıfır pH ~8.5 mükemmel sabun elde edilir.`
      ]
    };
  }

  // =========================================================================
  // 2. ESSENTIAL OIL & HYDROSOL STEAM HYDRODISTILLATION MODEL
  // =========================================================================
  const ESSENTIAL_PLANTS = {
    "lavender": {
      name: "Lavanta Çiçeği (Lavandula angustifolia)",
      yieldPct: 1.8,
      waterRatio: 2.5,
      timeMin: 45,
      primaryActives: "Linalool (%35), Linalil Asetat (%42)",
      aromaProfile: "Tatlı, çiçeksi, yatıştırıcı",
      notes: "Hassas monoterpenler içerir. Düşük sıcaklık veya hafif vakumda aromatik profil çok daha zengindir."
    },
    "peppermint": {
      name: "Tıbbi Nane Yaprağı (Mentha piperita)",
      yieldPct: 1.2,
      waterRatio: 2.5,
      timeMin: 40,
      primaryActives: "Mentol (%45), Menton (%20)",
      aromaProfile: "Ferahlatıcı, keskin, mentollü",
      notes: "Hava yollarını açıcı ve soğutucu etkisi yüksektir."
    },
    "rosemary": {
      name: "Biberiye Yaprağı (Rosmarinus officinalis)",
      yieldPct: 1.5,
      waterRatio: 2.5,
      timeMin: 50,
      primaryActives: "1,8-Sineol (%45), Kafur (%15), Pinen (%12)",
      aromaProfile: "Odunsu, taze, konsantrasyon artırıcı",
      notes: "Klasik simyacıların Macar Kraliçesi Suyu (Aqua Reginae Hungariae) temelidir."
    },
    "orange": {
      name: "Portakal Kabuğu (Citrus sinensis)",
      yieldPct: 2.2,
      waterRatio: 2.0,
      timeMin: 35,
      primaryActives: "d-Limonen (%92)",
      aromaProfile: "Narenciye, enerjik, tatlı",
      notes: "Soğuk pres veya su buharı distilasyonu ile ayrılır. Doğal bir yağ çözücüdür."
    },
    "thyme": {
      name: "Kekik (Thymus vulgaris)",
      yieldPct: 2.0,
      waterRatio: 2.5,
      timeMin: 45,
      primaryActives: "Timol (%50), Karvakrol (%10)",
      aromaProfile: "Baharatlı, kuvvetli antiseptik",
      notes: "En güçlü doğal antimikrobiyal esansiyel yağlardan biridir."
    },
    "rose": {
      name: "Gül Yaprağı (Rosa damascena)",
      yieldPct: 0.05,
      waterRatio: 3.0,
      timeMin: 60,
      primaryActives: "Geraniol (%30), Sitronellol (%40), Nerol",
      aromaProfile: "Derin, zarif, lüks gül esansı",
      notes: "Yağ verimi çok düşüktür; asıl yüksek değerli ürün alttaki saf Gül Suyu (Hidrosol)'dur."
    }
  };

  function calculateHydrodistillation(plantKey, plantMassG, pressureMbar) {
    const plant = ESSENTIAL_PLANTS[plantKey] || ESSENTIAL_PLANTS["lavender"];
    const mass = Math.max(10, parseFloat(plantMassG) || 200);
    const p = Math.max(10, Math.min(2000, parseFloat(pressureMbar) || 1013.25));

    // Dynamic boiling point of water steam at current pressure:
    let steamTempC = 100.0;
    if (global.LabCheminformatics) {
      steamTempC = global.LabCheminformatics.calculateBoilingPointAtPressure("h2o", p, 100.0).boilingPointC;
    }

    const waterRequiredMl = mass * plant.waterRatio;
    const oilYieldMl = (mass * (plant.yieldPct / 100)) / 0.88; // density ~0.88 g/mL
    const hydrosolYieldMl = waterRequiredMl * 0.72; // condensed aromatic water collected

    return {
      plantName: plant.name,
      plantMassG: Math.round(mass * 10) / 10,
      waterRequiredMl: Math.round(waterRequiredMl),
      steamTempC: steamTempC,
      pressureMbar: p,
      isVacuum: p < 1000.0,
      estimatedOilYieldMl: Math.round(oilYieldMl * 100) / 100,
      estimatedHydrosolMl: Math.round(hydrosolYieldMl),
      recommendedDurationMin: plant.timeMin,
      primaryActives: plant.primaryActives,
      aromaProfile: plant.aromaProfile,
      alchemicalPhase: "Kükürt (Sulfur / Uçucu Yağ) & Cıva (Mercury / Hidrosol)",
      procedure: [
        `1. İmbik / distilasyon balonuna <strong>${Math.round(mass)} g ${plant.name}</strong> ve <strong>${Math.round(waterRequiredMl)} mL distile su</strong> ekleyin (Bitkilerin suyun üzerinde veya ızgarada buharla temas etmesi önerilir).`,
        `2. Basıncı <strong>${Math.round(p)} mbar</strong> seviyesine ayarlayın (Kaynama buhar sıcaklığı: <strong>${steamTempC}°C</strong>).`,
        `3. Geri soğutucuyu çalıştırın ve <strong>${plant.timeMin} dakika</strong> boyunca düzenli damıtma uygulayın.`,
        `4. Toplama kabında iki faz oluşacaktır: Üstte yüzen <strong>~${Math.round(oilYieldMl * 100) / 100} mL saf esansiyel yağ</strong> ve altta <strong>~${Math.round(hydrosolYieldMl)} mL aromatik hidrosol</strong>.`,
        `5. Ayırma hunisi veya pipet yardımıyla üstteki sarı/şeffaf yağ fazını amber renkli damlalıklı cam şişeye alın.`
      ]
    };
  }

  // =========================================================================
  // 2.5. PHYTOCHEMICAL & SOXHLET SOLVENT EXTRACTION ENGINE
  // =========================================================================
  const BIOACTIVE_EXTRACTIONS = {
    "stjohnswort": {
      name: "Sarı Kantaron (Hypericum perforatum)",
      targetActive: "Hiperisin & Hiperforin",
      contentMgG: 2.8, // mg active per gram dried herb
      preferredSolvent: "olive_oil",
      optimalRatio: 10,
      maxSafeTempC: 50,
      description: "Doğal antidepresan, güçlü yara ve yanık onarıcı kırmızı naftodiantron pigmenti.",
      alchemicalElement: "Güneş / Altın (Sol / Aurum)"
    },
    "greentea": {
      name: "Yeşil Çay (Camellia sinensis)",
      targetActive: "EGCG & Polifenoller",
      contentMgG: 120.0,
      preferredSolvent: "water",
      optimalRatio: 15,
      maxSafeTempC: 85,
      description: "Serbest radikal süpürücü en güçlü kateşin antioksidan kompleksi.",
      alchemicalElement: "Merkür / Canlı Su (Aqua Vitae)"
    },
    "turmeric": {
      name: "Zerdeçal Rizomu (Curcuma longa)",
      targetActive: "Kurkumin (Polifenolik Pigment)",
      contentMgG: 45.0,
      preferredSolvent: "ethanol96",
      optimalRatio: 10,
      maxSafeTempC: 78,
      description: "Hücre koruyucu parlak altın sarısı polifenol. Suda çözünmez, alkol veya yağ gerekir!",
      alchemicalElement: "Mars & Jüpiter (Kükürtlü Ateş)"
    },
    "calendula": {
      name: "Aynısefa Çiçeği (Calendula officinalis)",
      targetActive: "Faradiol Monoesterleri & Karotenoidler",
      contentMgG: 18.5,
      preferredSolvent: "olive_oil",
      optimalRatio: 8,
      maxSafeTempC: 60,
      description: "Cilt bariyeri onarıcı, granülasyon dokusu oluşturucu flavonoid ve triterpenoidler.",
      alchemicalElement: "Venüs (Şifalı Yağ)"
    },
    "chili": {
      name: "Acı Kırmızı Biber (Capsicum annuum)",
      targetActive: "Kapsaisin (Vanilloid Alkaloid)",
      contentMgG: 12.0,
      preferredSolvent: "ethanol96",
      optimalRatio: 10,
      maxSafeTempC: 75,
      description: "P maddesini tüketerek nöropatik ağrıları kesen, termojenik ve dolaşım hızlandırıcı alkaloid.",
      alchemicalElement: "Mars (Yakıcı Ateş)"
    },
    "coffee": {
      name: "Kahve Çekirdeği (Coffea arabica)",
      targetActive: "Kafein (1,3,7-Trimetilksantin)",
      contentMgG: 16.0,
      preferredSolvent: "water",
      optimalRatio: 12,
      maxSafeTempC: 95,
      description: "Merkezi sinir sistemi adenozin antagonisti, zihinsel uyanıklık ve metabolizma hızlandırıcı.",
      alchemicalElement: "Ay & Merkür"
    }
  };

  const EXTRACTION_SOLVENTS = {
    "ethanol70": {
      name: "Etanol (%70 Medikal / Spajirik Çözelti)",
      density: 0.88,
      bpC: 81.5,
      polarity: "Yüksek Polar (Amfifilik / Hem Su Hem Yağ Çözer)",
      suitableFor: ["stjohnswort", "greentea", "calendula", "coffee"]
    },
    "ethanol96": {
      name: "Saf Etanol (%96 Organik Çözücü)",
      density: 0.81,
      bpC: 78.3,
      polarity: "Orta Polar Organik (Alkaloid ve Reçine Çözücü)",
      suitableFor: ["turmeric", "chili", "stjohnswort"]
    },
    "water": {
      name: "Distile Su (H2O)",
      density: 1.00,
      bpC: 100.0,
      polarity: "Aşırı Polar (Hidrofilik / Kateşin ve Şeker Çözücü)",
      suitableFor: ["greentea", "coffee"]
    },
    "olive_oil": {
      name: "Zeytinyağı (Maserasyon Yağ Bazı)",
      density: 0.915,
      bpC: 300.0,
      polarity: "Apolar Lipofilik (Karotenoid ve Lipid Çözücü)",
      suitableFor: ["stjohnswort", "calendula"]
    },
    "acetone": {
      name: "Aseton (Hızlı Uçucu Çözücü)",
      density: 0.784,
      bpC: 56.1,
      polarity: "Orta Polar Uçucu (Yüksek Seçici)",
      suitableFor: ["turmeric", "chili"]
    }
  };

  const EXTRACTION_METHODS = {
    "soxhlet": {
      name: "Soxhlet Sürekli Reflüks Ekstraksiyonu",
      efficiencyPct: 96,
      durationHr: 3.0,
      tempMode: "Çözücünün Kaynama Noktasında (Reflüks)",
      description: "Damlalık ve sifon prensibiyle bitkiyi sürekli taze saf çözücü buharıyla yıkayarak sıfır kayıpla %96 verim alır."
    },
    "ultrasound": {
      name: "Ultrasonik Destekli Ekstraksiyon (UAE)",
      efficiencyPct: 92,
      durationHr: 0.35,
      tempMode: "35-45°C (Akustik Kavitasyon)",
      description: "25 kHz frekansta kavitasyon kabarcık patlamaları ile bitki vakuollerini saniyeler içinde patlatarak soğuk ekstraksiyon yapar."
    },
    "maceration_hot": {
      name: "Sıcak İnfüzyon / Benmari Demleme",
      efficiencyPct: 82,
      durationHr: 2.0,
      tempMode: "55-65°C Ilık Çözücü",
      description: "Kontrollü ısıtıcı banyoda bitki gözeneklerini gevşeterek çözücünün difüzyon katsayısını 3 katına çıkarır."
    },
    "maceration_cold": {
      name: "Geleneksel Soğuk Maserasyon (Oda Sıcaklığı)",
      efficiencyPct: 75,
      durationHr: 480.0,
      tempMode: "20-25°C Karanlık Ortam",
      description: "Termal bozunmayı sıfıra indiren, antik bitkicilerin güneşte veya karanlıkta haftalarca bekleterek yaptığı kadim maserasyon."
    }
  };

  function calculateSolventExtraction(plantKey, solventKey, methodKey, plantMassG, solventRatio) {
    const plant = BIOACTIVE_EXTRACTIONS[plantKey] || BIOACTIVE_EXTRACTIONS["stjohnswort"];
    const solvent = EXTRACTION_SOLVENTS[solventKey] || EXTRACTION_SOLVENTS["ethanol70"];
    const method = EXTRACTION_METHODS[methodKey] || EXTRACTION_METHODS["soxhlet"];

    const massG = Math.max(5, parseFloat(plantMassG) || 50);
    const ratio = Math.max(5, Math.min(30, parseFloat(solventRatio) || plant.optimalRatio));

    // Solvent affinity check
    const isPreferred = plant.preferredSolvent === solventKey;
    const isSuitable = solvent.suitableFor.includes(plantKey);
    let affinityFactor = 1.0;
    let affinityText = "⭐⭐⭐⭐⭐ Mükemmel Çözücü Uyumu (Maksimum Difüzyon)";

    if (isPreferred) {
      affinityFactor = 1.0;
    } else if (isSuitable) {
      affinityFactor = 0.90;
      affinityText = "⭐⭐⭐⭐ Yüksek Çözünürlük (Çok İyi Sonuç)";
    } else {
      affinityFactor = 0.20;
      affinityText = "⚠️ ZAYIF ÇÖZÜNÜRLÜK: Hedef biyoaktif madde bu çözücü kutbunda çok az çözünür! Verim ciddi oranda düşecektir.";
    }

    const totalSolventMl = massG * ratio;
    const theoreticalActivesTotalMg = massG * plant.contentMgG;
    const extractedActiveMg = theoreticalActivesTotalMg * (method.efficiencyPct / 100.0) * affinityFactor;
    const concentrationMgPerMl = extractedActiveMg / totalSolventMl;

    const opTempC = methodKey === "soxhlet" ? solvent.bpC : (methodKey === "maceration_hot" ? Math.min(65, plant.maxSafeTempC) : 25);

    return {
      plantName: plant.name,
      targetActive: plant.targetActive,
      solventName: solvent.name,
      methodName: method.name,
      plantMassG: massG,
      solventVolumeMl: Math.round(totalSolventMl),
      solventRatio: ratio,
      operationTempC: opTempC,
      durationHr: method.durationHr,
      affinityStatus: affinityText,
      theoreticalTotalActiveMg: Math.round(theoreticalActivesTotalMg * 10) / 10,
      extractedActiveMg: Math.round(extractedActiveMg * 10) / 10,
      extractedActiveG: Math.round((extractedActiveMg / 1000.0) * 1000) / 1000,
      extractConcentrationMgMl: Math.round(concentrationMgPerMl * 100) / 100,
      extractionYieldPct: Math.round((extractedActiveMg / theoreticalActivesTotalMg) * 1000) / 10,
      procedure: [
        `1. <strong>Hücre Kırımı:</strong> <strong>${massG} g kuru ${plant.name}</strong> öğütücüde kaba toz haline getirin (por yüzey alanını 5 katına çıkarın).`,
        `2. <strong>Çözücü Yükleme:</strong> Sisteme <strong>${Math.round(totalSolventMl)} mL ${solvent.name}</strong> ekleyin (Katı-sıvı oranı: 1:${ratio} g/mL).`,
        `3. <strong>Ekstraksiyon:</strong> ${method.name} düzeneğinde <strong>${opTempC}°C</strong> sıcaklıkta <strong>${method.durationHr >= 24 ? (method.durationHr / 24) + ' gün' : method.durationHr + ' saat'}</strong> boyunca işlemi sürdürün.`,
        `4. <strong>Filtreleme & Berraklaştırma:</strong> Sıvıyı Whatman No.1 filtre kağıdından veya 100 mesh süzgeçten süzerek posayı sıkıp ayırın.`,
        `5. <strong>Biyoaktif Ekstre:</strong> Elde edilen koyu renkli çözelti tam <strong>${Math.round(extractedActiveMg)} mg saf ${plant.targetActive}</strong> (${Math.round(concentrationMgPerMl * 100) / 100} mg/mL) içerir.`
      ]
    };
  }

  // =========================================================================
  // 3. BIOACTIVE OINTMENT & BALM FORMULATION CALCULATOR
  // =========================================================================
  const OINTMENT_BASES = {
    "beeswax_olive": {
      name: "Doğal Balmumu & Zeytinyağı Merhemi (Galenik)",
      ratioBeeswax: 0.15,
      ratioOil: 0.85,
      meltTempC: 62.0,
      description: "Tamamen doğal koruyucu bariyer; cildi nefes aldırarak onarır."
    },
    "vaseline_lanolin": {
      name: "Tıbbi Vazelin & Lanolin Pomadı",
      ratioBeeswax: 0.0,
      ratioOil: 1.0,
      meltTempC: 45.0,
      description: "Klasik farmasötik oklüzif taşıyıcı matris; etken maddenin derin emilimini sağlar."
    },
    "peg_matrix": {
      name: "Polietilen Glikol (PEG-400 / PEG-3350) Suyla Yıkanabilir Merhem",
      ratioBeeswax: 0.0,
      ratioOil: 1.0,
      meltTempC: 42.0,
      description: "Modern antibakteriyel pomad bazı (Bacoderm tipi); suyla kolayca temizlenir."
    }
  };

  function calculateOintmentBatch(activeName, activeDosePct, targetBatchG, baseTypeKey) {
    const base = OINTMENT_BASES[baseTypeKey] || OINTMENT_BASES["beeswax_olive"];
    const totalG = Math.max(10, parseFloat(targetBatchG) || 100);
    const dosePct = Math.max(0.1, Math.min(25, parseFloat(activeDosePct) || 2.0));

    const activeMassG = totalG * (dosePct / 100.0);
    const baseTotalG = totalG - activeMassG;

    const beeswaxG = baseTotalG * base.ratioBeeswax;
    const carrierOilG = baseTotalG * base.ratioOil;

    return {
      activeName: activeName || "Biyoaktif Etken Madde",
      activeConcentrationPct: dosePct,
      activeMassG: Math.round(activeMassG * 100) / 100,
      baseName: base.name,
      baseTotalMassG: Math.round(baseTotalG * 100) / 100,
      beeswaxG: Math.round(beeswaxG * 10) / 10,
      carrierOilG: Math.round(carrierOilG * 10) / 10,
      meltTempC: base.meltTempC,
      totalBatchG: totalG,
      procedure: [
        `1. Taşıyıcı fazı hazırlayın: <strong>${Math.round(beeswaxG)} g balmumu</strong> ve <strong>${Math.round(carrierOilG)} g taşıyıcı bazı</strong> benmari usulü <strong>${base.meltTempC}°C</strong>'de eritin.`,
        `2. Karışım tamamen berraklaştığında ateşten alın ve 45°C'ye kadar ılıklaşmasını bekleyin.`,
        `3. <strong>${(Math.round(activeMassG * 100) / 100)} g ${activeName || 'Etken Madde'}</strong> ekleyin ve homojen olana kadar 2 dakika karıştırın.`,
        `4. Steril cam kavanoza döküp oda sıcaklığında katılaşmaya bırakın.`
      ]
    };
  }

  // =========================================================================
  // 3.5. GRIFFIN'S HLB (HYDROPHILIC-LIPOPHILIC BALANCE) EMULSION ENGINE
  // =========================================================================
  const COSMETIC_OILS_HLB = {
    "olive": {
      name: "Zeytinyağı (Saf / Sızma)",
      rhlb_ow: 7.0,
      rhlb_wo: 6.0,
      density: 0.915,
      description: "Ağır trigliserit, derin besleyici lipid fazı. Kuru cilt ürünleri ve zengin gece kremleri için idealdir."
    },
    "jojoba": {
      name: "Jojoba Yağı (Sıvı Mum)",
      rhlb_ow: 6.5,
      rhlb_wo: 5.0,
      density: 0.865,
      description: "İnsan sebumuna en yakın sıvı ester mumu. Yağlılık hissi bırakmaz, gözenekleri tıkamadan ipeksi doku verir."
    },
    "almond": {
      name: "Tatlı Badem Yağı",
      rhlb_ow: 7.0,
      rhlb_wo: 6.0,
      density: 0.915,
      description: "Klasik soğuk krem (Cold Cream) ve hassas bebek losyonlarının geleneksel yumuşatıcı temelidir."
    },
    "mineral": {
      name: "Mineral Yağ (Sıvı Parafin)",
      rhlb_ow: 10.5,
      rhlb_wo: 5.0,
      density: 0.850,
      description: "Yüksek oklüzif nem bariyeri, transepidermal su kaybını (TEWL) en güçlü engelleyen tıbbi bazdır."
    },
    "shea": {
      name: "Karite (Shea) Yağı",
      rhlb_ow: 8.0,
      rhlb_wo: 6.0,
      density: 0.910,
      description: "Katı bitkisel yağ; emülsiyona zengin gövde, kıvam ve bariyer onarıcı etki katar."
    },
    "argan": {
      name: "Argan Yağı",
      rhlb_ow: 7.0,
      rhlb_wo: 5.5,
      density: 0.917,
      description: "Yüksek tokoferol (E vitamini) ve skualen içeren lüks yaşlanma karşıtı lipid fazı."
    },
    "castor": {
      name: "Hint Yağı (Risinus)",
      rhlb_ow: 14.0,
      rhlb_wo: 7.0,
      density: 0.961,
      description: "Risinoleik asit; yüksek polarite ve yapışkanlık vererek emülsiyon stabilitesini perçinler."
    },
    "beeswax": {
      name: "Saf Balmumu (Cera Alba)",
      rhlb_ow: 9.0,
      rhlb_wo: 5.0,
      density: 0.960,
      description: "Geleneksel soğuk krem (Galenik) kıvamlaştırıcısı ve doğal ko-emülsifiyeri."
    }
  };

  const EMULSIFIERS_HLB = {
    "tween20": {
      name: "Polisorbat 20 (Tween 20)",
      hlb: 16.7,
      type: "Hidrofilik (O/W Emülsifiyer)",
      formula: "C58H114O26",
      appearance: "Sarı kıvamlı sıvı"
    },
    "tween80": {
      name: "Polisorbat 80 (Tween 80)",
      hlb: 15.0,
      type: "Hidrofilik (O/W Emülsifiyer)",
      formula: "C64H124O26",
      appearance: "Kehribar rengi viskoz sıvı"
    },
    "polawax": {
      name: "Emülsifiye Edici Mum (Polawax / NF)",
      hlb: 14.9,
      type: "Kendi Kendine Emülsifiyer Mum",
      formula: "Cetearyl Alcohol + Polysorbate 60",
      appearance: "Beyaz pastiller"
    },
    "lecithin": {
      name: "Soya Lesitini (Fosfatidilkolin)",
      hlb: 8.0,
      type: "Amfifilik / Doğal Lipozomal",
      formula: "C42H80NO8P",
      appearance: "Kahverengi kıvamlı jel/sıvı"
    },
    "cetyl_alc": {
      name: "Setil Alkol (Ko-emülsifiyer)",
      hlb: 15.5,
      type: "Kıvam ve Doku Arttırıcı",
      formula: "C16H34O",
      appearance: "Beyaz mumsu pullar"
    },
    "span80": {
      name: "Sorbitan Monooleat (Span 80)",
      hlb: 4.3,
      type: "Lipofilik (W/O Emülsifiyer)",
      formula: "C24H44O6",
      appearance: "Sarı-kahverengi viskoz sıvı"
    },
    "span60": {
      name: "Sorbitan Monostearat (Span 60)",
      hlb: 4.7,
      type: "Lipofilik (W/O Emülsifiyer)",
      formula: "C24H46O6",
      appearance: "Sarımsı katı mum"
    },
    "gms": {
      name: "Gliseril Monostearat (GMS)",
      hlb: 3.8,
      type: "Lipofilik / Stabilizatör",
      formula: "C21H42O4",
      appearance: "Beyaz pul / boncuk"
    }
  };

  /**
   * Griffin's HLB Surfactant Pair Calculation
   * Solves exact binary surfactant fraction:
   * f_A = (Target_HLB - HLB_B) / (HLB_A - HLB_B)
   */
  function calculateHLBEmulsion(oilKey, emulsionType, totalBatchG, oilPhasePct, emulsifierPct, highSurfactantKey, lowSurfactantKey) {
    const oil = COSMETIC_OILS_HLB[oilKey] || COSMETIC_OILS_HLB["olive"];
    const isOW = emulsionType !== "wo";
    const targetHLB = isOW ? oil.rhlb_ow : oil.rhlb_wo;

    const surfA = EMULSIFIERS_HLB[highSurfactantKey] || EMULSIFIERS_HLB["tween80"];
    const surfB = EMULSIFIERS_HLB[lowSurfactantKey] || EMULSIFIERS_HLB["span80"];

    // Ensure surfA is the higher HLB one
    let hA = surfA.hlb;
    let hB = surfB.hlb;
    let nameA = surfA.name;
    let nameB = surfB.name;
    let keyA = highSurfactantKey;
    let keyB = lowSurfactantKey;

    if (hA < hB) {
      [hA, hB] = [hB, hA];
      [nameA, nameB] = [nameB, nameA];
      [keyA, keyB] = [keyB, keyA];
    }

    // Fraction calculation
    const deltaH = hA - hB;
    let fA = 0.5;
    if (deltaH > 0.001) {
      fA = (targetHLB - hB) / deltaH;
    }
    fA = Math.max(0.0, Math.min(1.0, fA));
    const fB = 1.0 - fA;

    const totalG = Math.max(20, parseFloat(totalBatchG) || 100);
    const oilPct = Math.max(5, Math.min(60, parseFloat(oilPhasePct) || 20));
    const emulPct = Math.max(1, Math.min(15, parseFloat(emulsifierPct) || 5));

    const oilMassG = totalG * (oilPct / 100.0);
    const totalEmulG = totalG * (emulPct / 100.0);
    const surfAmassG = totalEmulG * fA;
    const surfBmassG = totalEmulG * fB;
    const waterMassG = totalG - oilMassG - totalEmulG;

    const actualHLB = (fA * hA) + (fB * hB);
    const hlbDeviation = Math.abs(actualHLB - targetHLB);

    let stabilityScore = "⭐⭐⭐⭐⭐ Kusursuz Termodinamik Denge (Ayrışma Riski: %0)";
    if (hlbDeviation > 1.0) {
      stabilityScore = "⚠️ Dengesiz Emülsiyon (Faz Ayrışması / Yağ Kusması Riski Yüksek, Farklı Sürfaktan Çifti Seçin)";
    } else if (hlbDeviation > 0.4) {
      stabilityScore = "⭐⭐⭐ Orta Denge (Yüksek devir homojenizatör ve kıvamlaştırıcı gerektirir)";
    } else if (hlbDeviation > 0.1) {
      stabilityScore = "⭐⭐⭐⭐ Çok Yüksek Stabilite (Uzun Raf Ömrü)";
    }

    return {
      oilName: oil.name,
      emulsionType: isOW ? "Yağ-içinde-Su (O/W) - Hafif Hızlı Emilen Krem / Losyon" : "Su-içinde-Yağ (W/O) - Koruyucu Yoğun Bariyer Kremi",
      targetHLB: targetHLB,
      actualHLB: Math.round(actualHLB * 100) / 100,
      hlbDeviation: Math.round(hlbDeviation * 100) / 100,
      totalBatchG: totalG,
      oilMassG: Math.round(oilMassG * 10) / 10,
      oilPct: oilPct,
      waterMassG: Math.round(waterMassG * 10) / 10,
      waterPct: Math.round((waterMassG / totalG) * 1000) / 10,
      totalEmulsifierG: Math.round(totalEmulG * 10) / 10,
      emulsifierPct: emulPct,
      highSurfactantName: nameA,
      highSurfactantKey: keyA,
      highSurfactantHLB: hA,
      highSurfactantMassG: Math.round(surfAmassG * 100) / 100,
      highSurfactantPct: Math.round(fA * 1000) / 10,
      lowSurfactantName: nameB,
      lowSurfactantKey: keyB,
      lowSurfactantHLB: hB,
      lowSurfactantMassG: Math.round(surfBmassG * 100) / 100,
      lowSurfactantPct: Math.round(fB * 1000) / 10,
      stabilityRating: stabilityScore,
      procedure: [
        `1. <strong>Yağ Fazı (A):</strong> Behere <strong>${Math.round(oilMassG * 10) / 10} g ${oil.name}</strong> ve <strong>${Math.round(surfBmassG * 100) / 100} g ${nameB}</strong> (lipofilik emülsifiyer) ekleyip benmari usulü <strong>70°C</strong>'ye ısıtın.`,
        `2. <strong>Su Fazı (B):</strong> Ayrı bir behere <strong>${Math.round(waterMassG * 10) / 10} mL distile su</strong> ve <strong>${Math.round(surfAmassG * 100) / 100} g ${nameA}</strong> (hidrofilik emülsifiyer) ekleyip yine <strong>70°C</strong>'ye ısıtın.`,
        `3. <strong>Emülsiyonlaşma:</strong> Her iki faz da tam 70°C'ye ulaştığında, su fazını azar azar yağ fazının içerisine dökün ve yüksek devirli mekanik karıştırıcı (veya mini mikser) ile 3-5 dakika kuvvetle çırpın.`,
        `4. <strong>Soğutma & Kıvam Alma:</strong> Karışım 40°C'ye soğuyana kadar hafif hızda karıştırmaya devam edin. Beyaz, kadifemsi, faz ayrışması yapmayan kalıcı krem elde edilir.`
      ]
    };
  }

  // =========================================================================
  // 4. SUPERSATURATION & SALT CRYSTALLIZATION KINETICS
  // =========================================================================
  const SALTS_SOLUBILITY = {
    "alum": {
      name: "Şap (Potasyum Alüminyum Sülfat - KAl(SO4)2·12H2O)",
      sol20C: 11.4, // g per 100 mL water
      sol100C: 109.0,
      crystalHabit: "Büyük Sekizyüzlü (Oktahedral) Şeffaf Kristaller",
      coolingRecoveryPct: 89.5,
      description: "Sıcaklık çözünürlük farkı devasa olan (11g -> 109g) en görkemli kristal yapıcı mineral."
    },
    "coppersulfate": {
      name: "Göztaşı (Bakır(II) Sülfat Pentahidrat - CuSO4·5H2O)",
      sol20C: 32.0,
      sol100C: 75.4,
      crystalHabit: "Derin Safir Mavisi Triklinik Prizmalar (Vitriol)",
      coolingRecoveryPct: 57.5,
      description: "Klasik simyada Venüs Taşı (Lapis Lazuli benzeri) olarak bilinen safir mavisi kristal."
    },
    "epsom": {
      name: "Epsom Tuzu (Magnezyum Sülfat - MgSO4·7H2O)",
      sol20C: 35.5,
      sol100C: 73.8,
      crystalHabit: "İğnemsi Parlak Ortorombik Kristaller",
      coolingRecoveryPct: 51.8,
      description: "Yatıştırıcı banyo mineralleri ve magnezyum kaynağı iğnemsi kristal."
    },
    "nacl": {
      name: "Kaya Tuzu (Sodyum Klorür - NaCl)",
      sol20C: 35.9,
      sol100C: 39.2,
      crystalHabit: "Kübik Halit Kristaller (Küp tuz)",
      coolingRecoveryPct: 8.4,
      description: "Sıcaklıkla çözünürlüğü neredeyse değişmez; kristal üretimi için soğutma değil SU BUHARLAŞTIRMA gerekir."
    }
  };

  function calculateCrystallization(saltKey, waterVolumeMl, coolingRateMode) {
    const salt = SALTS_SOLUBILITY[saltKey] || SALTS_SOLUBILITY["alum"];
    const water = Math.max(50, parseFloat(waterVolumeMl) || 200);
    const mode = coolingRateMode === "fast" ? "fast" : "slow";

    const maxDissolvedHotG = (salt.sol100C / 100.0) * water;
    const remainingDissolvedColdG = (salt.sol20C / 100.0) * water;
    const theoreticalYieldG = maxDissolvedHotG - remainingDissolvedColdG;

    const isFast = mode === "fast";
    const growthRate = isFast ? "18.0 - 25.0 mm/saat (Ani Toplu Çökme)" : "0.6 - 1.2 mm/saat (Düzenli Difüzyon)";
    const habitDisplay = isFast 
      ? "İnce Mikrokristalin Toz / İğnemsi Kar Kümesi (Homojen Çekirdeklenme)" 
      : `${salt.crystalHabit} (Makroskobik Tek Kristaller)`;
    const supersatIndex = isFast ? "Labile Bölge (σ > 0.45 - Kontrolsüz Çekirdeklenme)" : "Metastabil Denge (σ = 0.08 - Tabaka Büyümesi)";
    const purity = isFast ? "%97.2 (Hızlı çökmede kristal içi sıvı hapsolması riski)" : "%99.8 (Yavaş kristallenme ile maksimum saflık)";
    const coolingDesc = isFast 
      ? "Buz banyosunda ani termal şok (0-4°C, 30 dakika). Aşırı doymuş çözelti saniyeler içinde süt gibi beyazlaşır." 
      : "Oda sıcaklığında (20°C) termal izole ortamda 24-48 saat yavaş soğuma. Tohum kristalinin yüzeyi katman katman kusursuz örülür.";

    return {
      saltName: salt.name,
      waterVolumeMl: water,
      coolingRateMode: mode,
      maxSoluble100C_g: Math.round(maxDissolvedHotG * 10) / 10,
      saturated20C_g: Math.round(remainingDissolvedColdG * 10) / 10,
      crystallizationYieldG: Math.round(theoreticalYieldG * 10) / 10,
      crystalHabit: habitDisplay,
      growthRate: growthRate,
      supersatIndex: supersatIndex,
      purityRating: purity,
      coolingDescription: coolingDesc,
      recoveryPct: salt.coolingRecoveryPct,
      method: saltKey === "nacl" 
        ? "Buharlaştırmalı Kristalizasyon" 
        : (isFast ? "Ani Şok Soğutmalı Homojen Çökeltme" : "Kademeli Yavaş Soğutmalı Aşırı Doygunluk (Metastable Growth)"),
      procedure: [
        `1. Behere <strong>${water} mL distile su</strong> koyup kaynama noktasına (100°C) kadar ısıtın.`,
        `2. <strong>${Math.round(maxDissolvedHotG)} g ${salt.name}</strong> yavaş yavaş ekleyerek tamamen berrak bir çözelti elde edene kadar karıştırın.`,
        `3. Çözeltiyi sıcakken süzgeç kağıdından geçirip temiz bir cam kristalizara aktarın (tüm yabancı tozları eleyin).`,
        isFast
          ? `4. Kabı doğrudan <strong>buz banyosuna (0-4°C)</strong> oturtun ve manyetik balıkla hafifçe döndürün.`
          : `4. İçerisine pamuklu bir tohum ipliği sarkıtın, üzerini tozdan korumak için örtün ve 24-48 saat sarsıntısız bekletin.`,
        isFast
          ? `5. 30 dakika içinde çöken <strong>${Math.round(theoreticalYieldG)} g mikrokristalin tozu</strong> büchner hunisinde vakumla süzün ve kurutun.`
          : `5. Yavaş soğuma süresince <strong>${Math.round(theoreticalYieldG)} g ${salt.crystalHabit}</strong> tohum kristali etrafında görkemli şekilde büyüyecektir.`
      ]
    };
  }

  // =========================================================================
  // 5. PEARSON SQUARE ETHANOL DILUTION WITH VOLUME CONTRACTION
  // =========================================================================
  function calculateEthanolDilution(targetVolumeMl, targetPct, initialPct) {
    const V2 = Math.max(10, parseFloat(targetVolumeMl) || 500);
    const C2 = Math.max(10, Math.min(95, parseFloat(targetPct) || 70));
    const C1 = Math.max(C2 + 1, Math.min(99.5, parseFloat(initialPct) || 96));

    // Pearson Square: V1 = V2 * (C2 / C1)
    const V1 = V2 * (C2 / C1);

    // Molecular volume contraction (H-bond packing of water and ethanol molecules):
    // Typically ~3.0 - 3.5% contraction at 50-70% ABV
    const contractionMl = V2 * 0.032;
    const waterRequiredMl = (V2 - V1) + contractionMl;

    return {
      targetVolumeMl: V2,
      targetPct: C2,
      initialPct: C1,
      alcoholRequiredMl: Math.round(V1 * 10) / 10,
      waterRequiredMl: Math.round(waterRequiredMl * 10) / 10,
      contractionLossMl: Math.round(contractionMl * 10) / 10,
      finalPureAlcoholMl: Math.round(V2 * (C2 / 100.0) * 10) / 10,
      procedure: [
        `1. Mezüre tam <strong>${Math.round(V1 * 10) / 10} mL %${C1} Alkol</strong> ölçüp cam behere aktarın.`,
        `2. Üzerine <strong>${Math.round(waterRequiredMl * 10) / 10} mL distile su</strong> ekleyin (Moleküler hacim büzüşmesi $\\Delta V = -${Math.round(contractionMl * 10) / 10} mL$ kompanse edilmiştir).`,
        `3. Karıştırıldığında hidrojen bağlarının oluşumu sebebiyle çözelti hafifçe ılıklaşacaktır (+5°C ekzotermik).`,
        `4. Sonuçta tam <strong>${V2} mL %${C2} Medikal / Spajirik Tentür Çözücüsü</strong> elde edilir.`
      ]
    };
  }

  // =========================================================================
  // 6. INVERSE ANTOINE VACUUM PRESSURE SOLVER
  // =========================================================================
  function solveVacuumPressureForTemp(solventKey, maxSafeTempC) {
    const solvent = (solventKey || "h2o").toLowerCase();
    const targetT = Math.max(10, Math.min(150, parseFloat(maxSafeTempC) || 50));

    // Standard Antoine: log10(P_mmHg) = A - B / (T + C)
    const ANTOINE_COEFFS = {
      "h2o": { A: 8.07131, B: 1730.63, C: 233.426, name: "Su (H2O)" },
      "c2h5oh": { A: 8.20417, B: 1642.89, C: 230.3, name: "Etanol (Alkol)" },
      "c3h6o": { A: 7.02447, B: 1161.0, C: 224.0, name: "Aseton" },
      "c4h10o": { A: 6.92032, B: 1064.07, C: 228.8, name: "Dietil Eter" }
    };

    const entry = ANTOINE_COEFFS[solvent] || ANTOINE_COEFFS["h2o"];
    const logP = entry.A - (entry.B / (targetT + entry.C));
    const P_mmHg = Math.pow(10, logP);
    const P_mbar = P_mmHg * 1.33322387415;

    let pumpRecommendation = "Su Trompu / Diyafram Pompa (50-100 mbar)";
    if (P_mbar <= 25) {
      pumpRecommendation = "Döner Buharlaştırıcı (Rotavap 20 mbar / Yağlı Vakum Pompası)";
    }

    return {
      solventName: entry.name,
      maxSafeTempC: targetT,
      requiredPressureMbar: Math.round(P_mbar * 10) / 10,
      requiredPressureMmHg: Math.round(P_mmHg * 10) / 10,
      pumpRecommendation: pumpRecommendation,
      explanation: `${entry.name} sıvısının ${targetT}°C'de kaynayabilmesi için sistem basıncının en fazla ${Math.round(P_mbar)} mbar seviyesine düşürülmesi gerekmektedir. Böylece ısıya duyarlı biyoaktif maddeler hiç termal bozunmaya uğramadan saflaştırılır.`
    };
  }

  // =========================================================================
  // 6.5. REACTION GIBBS FREE ENERGY & EQUILIBRIUM ENGINE (ΔG°, ΔH°, K_eq)
  // =========================================================================
  const REACTION_THERMODYNAMICS = {
    "soap_saponification": {
      name: "Sabunlaşma Trigliserit Hidrolizi (Ester + 3 NaOH)",
      equation: "Trigliserit + 3 NaOH ➔ Gliserin + 3 Sabun Tuzu",
      deltaH_kJ: -50.2,
      deltaS_J_K: 24.5,
      type: "Ekzotermik (Isı Veren)",
      description: "Bazik ester hidrolizi. Hem entalpi negatif hem entropi pozitif olduğundan her sıcaklıkta kendiliğinden yürür."
    },
    "caco3_calcination": {
      name: "Kireçtaşı Kalsinasyonu / Fırınlanması (CaCO3 Termal Bozunma)",
      equation: "CaCO3(k) ➔ CaO(k) + CO2(g) ↑",
      deltaH_kJ: 178.3,
      deltaS_J_K: 160.5,
      type: "Endotermik (Yüksek Isı Alan)",
      description: "Gaz çıkışı ile entropi devasa artar. Düşük sıcaklıkta gerçekleşmez; kireç fırınında 840°C'yi aşınca kendiliğinden başlar."
    },
    "coal_water_gas": {
      name: "Su-Gazı / Kömür Gazlaştırma (C + H2O Buharı)",
      equation: "C(k) + H2O(g) ➔ CO(g) + H2(g) ↑",
      deltaH_kJ: 131.3,
      deltaS_J_K: 133.6,
      type: "Endotermik (Simyasal Ateş)",
      description: "Tarihi aydınlatma ve sentez gazı üretimi. Yüksek sıcaklıkta (>710°C) gaz genişlemesi sayesinde kendiliğinden yürür."
    },
    "acid_base_neutralization": {
      name: "Kuvvetli Asit - Baz Nötralizasyonu (HCl + NaOH)",
      equation: "HCl(aq) + NaOH(aq) ➔ NaCl(aq) + H2O(s)",
      deltaH_kJ: -57.3,
      deltaS_J_K: 80.2,
      type: "Şiddetli Ekzotermik",
      description: "H+ ve OH- birleşerek stabil su molekülü oluşturur. Anında yüksek ısı açığa çıkar ve kendiliğinden tamamlanır."
    },
    "copper_vitriol_dehydration": {
      name: "Mavi Göztaşı Dehidrasyonu (CuSO4·5H2O Isıl Dönüşümü)",
      equation: "CuSO4·5H2O(k) ➔ CuSO4(k) + 5 H2O(g) ↑",
      deltaH_kJ: 298.5,
      deltaS_J_K: 735.0,
      type: "Endotermik (Su Kaybı)",
      description: "Kristal suyu 110-150°C arasında buharlaşır; parlak safir mavisi kristal beyaz susuz toza dönüşür."
    },
    "h2_o2_combustion": {
      name: "Hidrojen-Oksijen Patlaması (Su Sentezi)",
      equation: "2 H2(g) + O2(g) ➔ 2 H2O(g)",
      deltaH_kJ: -241.8,
      deltaS_J_K: -44.4,
      type: "Şiddetli Patlayıcı Ekzotermik",
      description: "Kıvılcım verildiğinde saniyenin binde birinde şiddetli patlama ile gerçekleşir ve muazzam enerji salar."
    },
    "lime_slaking": {
      name: "Kireç Söndürme Ekzotermisi (CaO + H2O)",
      equation: "CaO(k) + H2O(s) ➔ Ca(OH)2(k) + Isı",
      deltaH_kJ: -65.2,
      deltaS_J_K: -26.3,
      type: "Şiddetli Ekzotermik (Su Kaynatıcı)",
      description: "Sönmemiş kirece su döküldüğünde anında kaynama sıcaklığına ulaşır; kalsiyum hidroksit (sönmüş kireç) oluşur."
    },
    "water_gas_shift": {
      name: "Su-Gazı Dönüşüm Dengesi (CO + H2O Buharı)",
      equation: "CO(g) + H2O(g) ⇌ CO2(g) + H2(g)",
      deltaH_kJ: -41.2,
      deltaS_J_K: -42.4,
      type: "Ekzotermik Denge Reaksiyonu",
      description: "Endüstriyel hidrojen saflaştırma ve amonyak sentezi gazı dengesi. Düşük sıcaklıkta ürünleri, yüksek sıcaklıkta reaktifleri destekler."
    },
    "iron_oxidation_rust": {
      name: "Demir Paslanması / Yavaş Korozyon (4 Fe + 3 O2)",
      equation: "4 Fe(k) + 3 O2(g) ➔ 2 Fe2O3(k)",
      deltaH_kJ: -1648.4,
      deltaS_J_K: -549.5,
      type: "Büyük Ekzotermik Entalpi (Oksitlenme)",
      description: "Oksijen varlığında oda sıcaklığında kendiliğinden yürüyen devasa ekzotermik reaksiyon. Yavaş kinetik sebebiyle alevsiz gerçekleşir."
    },
    "thermite_reaction": {
      name: "Alüminotermik Termit Reaksiyonu (2 Al + Fe2O3)",
      equation: "2 Al(k) + Fe2O3(k) ➔ Al2O3(k) + 2 Fe(s) + Şiddetli Işıma",
      deltaH_kJ: -851.5,
      deltaS_J_K: -37.5,
      type: "Aşırı Ekzotermik Pirometalurji",
      description: "Magnezyum şeritle ateşlendiğinde 2500°C'ye ulaşır; demiri eriterek ray kaynağı ve metal indirgemede kullanılır."
    },
    "bordeaux_mixture_precipitation": {
      name: "Bordo Bulamacı Çökelmesi (Göztaşı + Sönmüş Kireç)",
      equation: "CuSO4(aq) + Ca(OH)2(aq) ➔ Cu(OH)2(k)↓ + CaSO4(k)↓",
      deltaH_kJ: -78.4,
      deltaS_J_K: -142.0,
      type: "Ekzotermik Çökelme Reaksiyonu",
      description: "Tarımsal mantar ilacı Bordo bulamacının oluşumu. Oda sıcaklığında hızla açık mavi jel şeklinde çöker."
    },
    "methanol_steam_reforming": {
      name: "Metanol Buhar Reformingi (CH3OH + H2O ⇌ CO2 + 3 H2)",
      equation: "CH3OH(g) + H2O(g) ⇌ CO2(g) + 3 H2(g)",
      deltaH_kJ: 49.5,
      deltaS_J_K: 177.2,
      type: "Endotermik Hidrojen Üretimi",
      description: "Düşük sıcaklık yakıt hücresi hidrojen jeneratörü. 200°C üzerinde entropi artışı ile kendiliğinden yürür."
    },
    "ammonia_synthesis_haber": {
      name: "Haber-Bosch Amonyak Sentezi (N2 + 3 H2 ⇌ 2 NH3)",
      equation: "N2(g) + 3 H2(g) ⇌ 2 NH3(g)",
      deltaH_kJ: -92.2,
      deltaS_J_K: -198.7,
      type: "Ekzotermik Gaz Sıkıştırma Dengesi",
      description: "Küresel tarım gübresinin temel taşı. Gaz mol sayısı azaldığından yüksek basınçta (150-250 bar) ve optimum 400-450°C'de katalizörle yürür."
    },
    "calcium_carbide_acetylene": {
      name: "Kalsiyum Karbür Hidrolizi (Asetilen Gazı & Madenci Lambası)",
      equation: "CaC2(k) + 2 H2O(s) ➔ Ca(OH)2(k) + C2H2(g) ↑",
      deltaH_kJ: -127.2,
      deltaS_J_K: 34.6,
      type: "Şiddetli Ekzotermik Gaz Salımı",
      description: "Karbüre su damlatıldığında anında parlak beyaz alevle yanan asetilen gazı (C2H2) üretir; tarihi madenci ve mağara lambası tepkimesidir."
    },
    "water_gas_shift": {
      name: "Su-Gazı Dönüşüm Reaksiyonu (Water-Gas Shift: CO + H2O ⇌ CO2 + H2)",
      equation: "CO(g) + H2O(g) ⇌ CO2(g) + H2(g)",
      deltaH_kJ: -41.2,
      deltaS_J_K: -42.1,
      type: "Düşük Ekzotermik Denge Reaksiyonu",
      description: "Sentez gazında hidrojen verimini artırmak ve karbon monoksit oranını düşürmek için kullanılan kritik endüstriyel kimya reaksiyonu."
    },
    "photosynthesis_glucose": {
      name: "Doğal Fotosentez & Biyokimyasal Glukoz Sentezi",
      equation: "6 CO2(g) + 6 H2O(s) ➔ C6H12O6(k) + 6 O2(g)",
      deltaH_kJ: 2805.0,
      deltaS_J_K: -260.0,
      type: "Yüksek Endotermik / Foton Güdümlü Biyosentez",
      description: "Güneş fotonları ile klorofil pigmentinde yürütülen biyolojik enerji dönüşümü; standart koşullarda yüksek oranda endergoniktir (+ΔG°)."
    },
    "contact_process_so3": {
      name: "Kontak Prosesi Kükürt Trioksit Denge Reaksiyonu (2 SO2 + O2 ⇌ 2 SO3)",
      equation: "2 SO2(g) + O2(g) ⇌ 2 SO3(g)",
      deltaH_kJ: -198.4,
      deltaS_J_K: -187.8,
      type: "Ekzotermik Gaz Hacmi Azalma Dengesi",
      description: "Tarihi ve modern sülfürik asit (zaç yağı) üretiminin kalbi. Düşük sıcaklık ve V2O5 katalizörü gerektiren klasik Le Chatelier dengesidir."
    },
    "boudouard_reaction": {
      name: "Boudouard Karbon Monoksit Dengesi (C + CO2 ⇌ 2 CO)",
      equation: "C(k) + CO2(g) ⇌ 2 CO(g)",
      deltaH_kJ: 172.5,
      deltaS_J_K: 176.0,
      type: "Yüksek Sıcaklık Karbon Gazlaştırma Dengesi",
      description: "Yüksek fırınlarda ve odun kömürü ocaklarında demir indirgeyici CO gazının üretimini belirleyen temel termodinamik denge. 700°C üzerinde kendiliğinden yürür."
    },
    "lime_soda_softening": {
      name: "Kireç-Soda Su Yumuşatma Reaksiyonu (Ca(HCO3)2 + Ca(OH)2)",
      equation: "Ca(HCO3)2(aq) + Ca(OH)2(aq) ➔ 2 CaCO3(k)↓ + 2 H2O(s)",
      deltaH_kJ: -32.4,
      deltaS_J_K: 45.2,
      type: "Ekzotermik Çökelme & Su Arıtma",
      description: "Geçici su sertliğinin sönmüş kireç ile kalsiyum karbonat çökeltisine dönüştürülerek kazan taşı oluşumunu engelleyen klasik su kimyası reaksiyonu."
    },
    "flue_gas_desulfurization": {
      name: "Baca Gazı Kükürt Giderme & Jips Sentezi (CaCO3 + SO2 + 0.5 O2 + 2 H2O)",
      equation: "CaCO3(k) + SO2(g) + 0.5 O2(g) + 2 H2O(s) ➔ CaSO4·2H2O(k) + CO2(g)",
      deltaH_kJ: -363.8,
      deltaS_J_K: -142.0,
      type: "Yüksek Ekzotermik Baca Gazı Nötralizasyonu & Mineral Çökeltme",
      description: "Endüstriyel baca gazındaki kükürt dioksitin sulu kireçtaşı bulamacıyla nötralize edilerek sentetik alçıtaşına (jips) dönüştürülmesi prosesidir. Oda sıcaklığında son derece istemlidir."
    },
    "dri_syngas_reduction": {
      name: "Doğrudan İndirgenmiş Sünger Demir Redüksiyonu (Fe2O3 + 3 CO ➔ 2 Fe + 3 CO2)",
      equation: "Fe2O3(k) + 3 CO(g) ➔ 2 Fe(k) + 3 CO2(g)",
      deltaH_kJ: -24.8,
      deltaS_J_K: 15.3,
      type: "Ilımlı Ekzotermik Katı-Gaz Metalurjik Redüksiyon",
      description: "Doğalgaz veya kömür gazlaştırmasından üretilen karbon monoksit ile hematit demir cevherinin yüksek fırın kok kömürü gerektirmeden sünger demire (DRI) doğrudan katı faz metalik indirgenmesidir."
    },
    "fischer_tropsch_syngas": {
      name: "Fischer-Tropsch Sentetik Parafin & Yakıt Sentezi (CO + 2 H2)",
      equation: "CO(g) + 2 H2(g) ➔ 1/n -(CH2)n-(s) + H2O(g)",
      deltaH_kJ: -165.0,
      deltaS_J_K: -128.5,
      type: "Yüksek Ekzotermik Gaz-Katı Heterojen Katalitik Sentez",
      description: "Kömür veya biyogazlaştırma sentez gazının (CO + H2) demir/kobalt katalizörlüğünde sentetik hidrokarbonlara, alifatik mumlara ve temiz sentetik yakıtlara dönüştürülmesidir."
    },
    "claus_sulfur_recovery": {
      name: "Claus Kükürt Geri Kazanımı (2 H2S + SO2 ➔ 3 S + 2 H2O)",
      equation: "2 H2S(g) + SO2(g) ➔ 3 S(k) + 2 H2O(g)",
      deltaH_kJ: -145.6,
      deltaS_J_K: -92.4,
      type: "Ekzotermik Çevresel Gaz Arıtma & Elementel Kükürt Üretimi",
      description: "Petrol rafinerileri ve doğal gaz tesislerinde zehirli hidrojen sülfür gazının kükürt dioksitle reaksiyona sokularak saf katı sarı kükürte ve su buharına dönüştürüldüğü temel çevresel arıtma dengesidir."
    },
    "ostwald_nitric_acid": {
      name: "Ostwald Amonyak Oksidasyonu (4 NH3 + 5 O2 ➔ 4 NO + 6 H2O)",
      equation: "4 NH3(g) + 5 O2(g) ➔ 4 NO(g) + 6 H2O(g)",
      deltaH_kJ: -905.2,
      deltaS_J_K: 180.5,
      type: "Aşırı Ekzotermik Platin-Rodyum Katalitik Gaz Oksidasyonu",
      description: "Modern ve tarihi nitrik asit (kezzap) üretiminin ilk basamağıdır. 800-900°C'de kızgın platin elek üzerinden amonyak gazının devasa ısı vererek azot monoksite dönüştürülmesidir."
    },
    "solvay_bicarbonate_calcination": {
      name: "Solvay Sodyum Bikarbonat Termal Kalsinasyonu (2 NaHCO3 ➔ Na2CO3 + CO2 + H2O)",
      equation: "2 NaHCO3(k) ➔ Na2CO3(k) + CO2(g) + H2O(g)",
      deltaH_kJ: 135.6,
      deltaS_J_K: 334.0,
      type: "Endotermik Gaz Çıkışlı Termal Bozunma",
      description: "Solvay prosesinin son basamağıdır. Ham sodyum bikarbonat fırında 160-200°C'de ısıtılarak saf kalsine soda külüne (Na2CO3) dönüştürülür ve açığa çıkan CO2 döngüye geri beslenir."
    },
    "deacon_chlorine_recovery": {
      name: "Deacon Klor Geri Kazanım Prosesi (4 HCl + O2 ⇌ 2 Cl2 + 2 H2O)",
      equation: "4 HCl(g) + O2(g) ⇌ 2 Cl2(g) + 2 H2O(g)",
      deltaH_kJ: -114.4,
      deltaS_J_K: -129.5,
      type: "Ekzotermik Denge Reaksiyonu (Katalitik Klor Geri Kazanımı)",
      description: "Tarihi ve modern klor üretim ve geri kazanım prosesidir. Hidroklorik asit gazı CuCl2 veya RuO2 katalizörlüğünde 400-450°C'de hava oksijeniyle reaksiyona sokularak klor gazı (Cl2) ve su buharı elde edilir."
    },
    "steam_methane_reforming": {
      name: "Buhar-Metan Reformingi / SMR (CH4 + H2O ⇌ CO + 3 H2)",
      equation: "CH4(g) + H2O(g) ⇌ CO(g) + 3 H2(g)",
      deltaH_kJ: 206.1,
      deltaS_J_K: 214.5,
      type: "Kuvvetli Endotermik Sentez Gazı & Hidrojen Üretimi",
      description: "Küresel ölçekte saf hidrojen gazı ve sentez gazı (syngas) üretiminin ana endüstriyel reaksiyonudur. Nikel katalizörlüğünde 800-900°C'de yüksek ısı verilerek gerçekleştirilir; yüksek sıcaklıkta entropi artışıyla kendiliğinden yürür."
    },
    "wacker_oxidation_acetaldehyde": {
      name: "Wacker Etilen Oksidasyonu (C2H4 + 0.5 O2 ➔ CH3CHO)",
      equation: "C2H4(g) + 0.5 O2(g) ➔ CH3CHO(g)",
      deltaH_kJ: -244.0,
      deltaS_J_K: -112.5,
      type: "Yüksek Ekzotermik Homojen Katalitik Oksidasyon",
      description: "Petrokimyada asetaldehit ve asetik asit üretiminin ana prosesidir. Paladyum klorür (PdCl2) ve bakır klorür (CuCl2) redoks döngüsüyle etilen gazı hava oksijeniyle doğrudan asetaldehite dönüştürülür."
    },
    "anthraquinone_h2o2_synthesis": {
      name: "Antrakinon Yeşil Hidrojen Peroksit Sentezi (H2 + O2 ➔ H2O2)",
      equation: "H2(g) + O2(g) ➔ H2O2(s)",
      deltaH_kJ: -187.8,
      deltaS_J_K: -226.3,
      type: "Ekzotermik Siklik Otooksidasyon & Yeşil Oksidan",
      description: "Modern dünyada çevre dostu ağartıcı ve dezenfektan hidrojen peroksitin (%100 endüstriyel standart) üretildiği kapalı döngüdür. 2-alkilantrakinon paladyumla indirgenip ardından hava oksijeniyle temas ettirilerek H2O2 üretilir ve katalizör organik fazda kalır."
    },
    "cumene_hydroperoxide_cleavage": {
      name: "Kümol Prosesi Fenol & Aseton Parçalanması (C9H12O2 ➔ C6H5OH + C3H6O)",
      equation: "C9H12O2(s) ➔ C6H5OH(s) + C3H6O(s)",
      deltaH_kJ: -252.0,
      deltaS_J_K: 125.0,
      type: "Şiddetli Ekzotermik & Entropi Güdümlü Hock Parçalanması",
      description: "Küresel fenol ve aseton üretiminin %90'ından fazlasını sağlayan Hock prosesidir. Kümol hidroperoksit eser sülfürik asit varlığında muazzam bir ısı ve entropi artışıyla kendiliğinden fenol ve asetona ayrışır."
    },
    "acetic_acid_carbonylation_monsanto": {
      name: "Monsanto / Cativa Asetik Asit Karbonilasyonu (CH3OH + CO ➔ CH3COOH)",
      equation: "CH3OH(s) + CO(g) ➔ CH3COOH(s)",
      deltaH_kJ: -136.0,
      deltaS_J_K: -118.5,
      type: "Ekzotermik Homojen Organometalik Karbonilasyon",
      description: "Modern dünyada sirke asidinin (CH3COOH) endüstriyel ana üretim yoludur. Rodyum ([Rh(CO)2I2]-) veya iridyum katalizörü eşliğinde metanol sıvısı karbon monoksit gazı ile 150-200°C ve 30-40 bar basınçta birleşir."
    },
    "sabatier_co2_methanation": {
      name: "Sabatier Metanasyon Reaksiyonu (CO2 + 4 H2 ⇌ CH4 + 2 H2O)",
      equation: "CO2(g) + 4 H2(g) ⇌ CH4(g) + 2 H2O(g)",
      deltaH_kJ: -165.0,
      deltaS_J_K: -173.8,
      type: "Kuvvetli Ekzotermik Denge Reaksiyonu & Karbon Yakalama (Power-to-Gas)",
      description: "Paul Sabatier tarafından keşfedilen katalitik hidrojenasyon prosesidir. Karbondioksit gazı nikel (Ni) veya rutenyum (Ru) katalizörlüğünde 300-400°C'de hidrojenle birleştirilerek sentetik doğal gaz (CH4) ve su elde edilir. Uzay istasyonlarında (ISS) astronotların nefes CO2'sini geri dönüştürmek için de kullanılır."
    },
    "bosch_carbon_deposition": {
      name: "Bosch Reaksiyonu & Karbon Ayrışması (CO2 + 2 H2 ⇌ C + 2 H2O)",
      equation: "CO2(g) + 2 H2(g) ⇌ C(k) + 2 H2O(g)",
      deltaH_kJ: -178.1,
      deltaS_J_K: -160.0,
      type: "Ekzotermik Katı Karbon Çökeltme & Oksijen Döngüsü",
      description: "Demir veya nikel katalizörlüğünde 530-730°C'de CO2 ve hidrojenin reaksiyona sokularak katı grafitik karbon tozu ve su buharı ürettiği prosestir. Uzay yaşam destek sistemlerinde CO2'den %100 oksijen geri kazanımında kapalı çevrim karbon çökeltici olarak kritik öneme sahiptir."
    },
    "ammonium_nitrate_n2o_synthesis": {
      name: "Amonyum Nitrat Termal Ayrışması & Güldürücü Gaz Sentezi (NH4NO3 ➔ N2O + 2 H2O)",
      equation: "NH4NO3(k) ➔ N2O(g) + 2 H2O(g)",
      deltaH_kJ: -36.0,
      deltaS_J_K: 446.5,
      type: "Ekzotermik & Yüksek Entropili Gaz Üretimi (Anestezik N2O)",
      description: "Katı amonyum nitrat tuzunun 170-240°C'de kontrollü ısıtılmasıyla termal bozunarak diazot monoksit (N2O / güldürücü gaz) ve su buharı üretmesidir. Açığa çıkan 3 mol gaz muazzam bir pozitif entropi artışı (+446.5 J/mol·K) yaratarak reaksiyonu yüksek sıcaklıkta karşı konulamaz derecede kendiliğinden yürütür."
    },
    "kroll_titanium_reduction": {
      name: "Kroll Prosesi Titanyum Süngeri İndirgenmesi (TiCl4 + 2 Mg ➔ Ti + 2 MgCl2)",
      equation: "TiCl4(g) + 2 Mg(s) ➔ Ti(k) + 2 MgCl2(s)",
      deltaH_kJ: -540.0,
      deltaS_J_K: -188.0,
      type: "Şiddetli Ekzotermik Yüksek Sıcaklık Metalurjik İndirgeme",
      description: "Havacılık, uzay ve implant cerrahisinde kullanılan saf titanyum metalinin küresel birincil üretim reaksiyonudur. Gaz halindeki titanyum tetraklorür (TiCl4), argon atmosferinde 800-900°C'de erimiş magnezyum banyosuna beslenerek yüksek ekzotermik ısıyla gözenekli saf titanyum süngerine ve erimiş MgCl2 tuzuna dönüşür."
    },
    "fischer_tropsch_synfuel": {
      name: "Fischer-Tropsch Sentetik Sıvı Yakıt Sentezi (8 CO + 17 H2 ➔ C8H18 + 8 H2O)",
      equation: "8 CO(g) + 17 H2(g) ➔ C8H18(s) + 8 H2O(g)",
      deltaH_kJ: -1392.0,
      deltaS_J_K: -1680.0,
      type: "Yüksek Ekzotermik Katalitik Hidrokarbon Sentezi (GTL / Coal-to-Liquid)",
      description: "1925 yılında Franz Fischer ve Hans Tropsch tarafından geliştirilen, sentez gazının (CO ve H2) kobalt (Co) veya demir (Fe) katalizörlüğünde 200-350°C ve 15-30 bar basınçta sıvı parafinik hidrokarbonlara (sentetik benzin ve dizel) dönüştürüldüğü küresel kimya mühendisliği kilometre taşıdır."
    },
    "hall_heroult_aluminium_smelting": {
      name: "Hall-Héroult Prosesi Alüminyum Elektrolizi (2 Al2O3 + 3 C ➔ 4 Al + 3 CO2)",
      equation: "2 Al2O3(çöz) + 3 C(k) ➔ 4 Al(s) + 3 CO2(g)",
      deltaH_kJ: 1340.0,
      deltaS_J_K: 580.0,
      type: "Şiddetli Endotermik Erimiş Tuz Elektrolizi (Kriyolit Banyosu)",
      description: "Charles Martin Hall ve Paul Héroult tarafından 1886'da eşzamanlı keşfedilen, ergimiş sodyum heksafloroalüminat (Na3AlF6 / kriyolit) banyosunda 950-980°C'de alüminanın karbon anotlar kullanılarak sıvı metalik alüminyuma indirgendiği modern alüminyum sanayiinin temel elektrokimyasal reaksiyonudur."
    },
    "kraft_recovery_boiler_reduction": {
      name: "Kraft Prosesi Sülfat İndirgenmesi & Siyah Likör Geri Kazanımı (Na2SO4 + 2 C ➔ Na2S + 2 CO2)",
      equation: "Na2SO4(k) + 2 C(k) ➔ Na2S(k) + 2 CO2(g)",
      deltaH_kJ: 208.5,
      deltaS_J_K: 265.0,
      type: "Endotermik Yüksek Sıcaklık Redüksiyonu & Kimyasal Geri Kazanım",
      description: "Dünya kağıt ve selüloz sanayiinin %85'inde uygulanan Kraft prosesinin kilit geri kazanım reaksiyonudur. Tomlinson geri kazanım kazanında 900-1100°C'de sodyum sülfat (Na2SO4), odun kömürü/karbon ile eritilerek aktif beyaz pişirme kimyasalı olan sodyum sülfüre (Na2S) indirgenir. Pozitif entropi (+265 J/mol·K) sayesinde yüksek sıcaklıkta kendiliğinden yürür."
    },
    "mond_nickel_carbonyl_refining": {
      name: "Mond Prosesi Nikel Tetrakarbonil Gaz Fazı Saflaştırması (Ni + 4 CO ⇌ Ni(CO)4)",
      equation: "Ni(k) + 4 CO(g) ⇌ Ni(CO)4(g)",
      deltaH_kJ: -160.8,
      deltaS_J_K: -410.0,
      type: "Kuvvetli Ekzotermik Gaz Kompleksleşmesi & Tersinir Termal Ayrışma",
      description: "Ludwig Mond tarafından 1890'da keşfedilen gaz fazı nikel saflaştırma reaksiyonudur. Ham metalik nikel, 50-60°C'de karbonmonoksit gazıyla tepkimeye girerek uçucu nikel tetrakarbonil gazı [Ni(CO)4] oluşturur. Bu gaz 220-250°C'ye ısıtıldığında reaksiyon tersine döner (Le Chatelier) ve geride safsızlıklardan arınmış %99.99 saflıkta nikel kürecikleri bırakır."
    },
    "sabatier_methanation": {
      name: "Sabatier Metanasyonu & Sentetik Doğal Gaz (CO2 + 4 H2 ⇌ CH4 + 2 H2O)",
      equation: "CO2(g) + 4 H2(g) ⇌ CH4(g) + 2 H2O(g)",
      deltaH_kJ: -165.0,
      deltaS_J_K: -173.8,
      type: "Kuvvetli Ekzotermik Katalitik Metanasyon & Karbon Geri Kazanımı",
      description: "Paul Sabatier tarafından 1902'de keşfedilen Nobel ödüllü reaksiyondur. Nikel veya rutenyum katalizörlüğünde 300-400°C'de karbondioksit ile hidrojeni birleştirerek sentetik metan (SNG) ve su üretir. Uluslararası Uzay İstasyonu'nda (ISS) astronotların solunum CO2'sinden oksijen döngüsü kurmakta ve yenilenebilir Power-to-Gas enerji depolamada kritik öneme sahiptir."
    },
    "kroll_zirconium_reduction": {
      name: "Kroll Prosesi Zirkonyum Tetraklorür Magnezyum İndirgenmesi (ZrCl4 + 2 Mg ➔ Zr + 2 MgCl2)",
      equation: "ZrCl4(g) + 2 Mg(s) ➔ Zr(k) + 2 MgCl2(s)",
      deltaH_kJ: -228.0,
      deltaS_J_K: -42.0,
      type: "Şiddetli Ekzotermik Yüksek Sıcaklık Piro-Metalurjik İndirgeme",
      description: "Nükleer santrallerde yakıt çubuklarının kılıflanmasında (zirkaloy alaşımı) kullanılan nötron şeffaflığına sahip ultra saf zirkonyum metalinin üretim prosesidir. 800-850°C'de asal argon gazı altında erimiş metalik magnezyum havuzuna süblime edilmiş ZrCl4 gazı verilerek reaktörde poröz zirkonyum süngeri elde edilir."
    },
    "bergius_coal_liquefaction": {
      name: "Bergius Doğrudan Kömür Sıvılaştırma Sentetik Petrol Sentezi (C + 1.2 H2 ➔ CH2.4)",
      equation: "C(k) + 1.2 H2(g) ➔ -CH2.4-(s)",
      deltaH_kJ: -65.4,
      deltaS_J_K: -92.0,
      type: "Ekzotermik Yüksek Basınçlı Katalitik Kömür Hidrojenasyonu",
      description: "Friedrich Bergius tarafından 1913'te keşfedilen ve 1931 Nobel Kimya Ödülü kazandıran doğrudan kömür sıvılaştırma (DCL) prosesidir. Linyit veya taş kömürü tozu, demir oksit (Fe2O3) katalizörlüğünde 450-480°C sıcaklık ve 200-700 bar hidrojen gazı altında sentetik ham petrole dönüştürülür."
    },
    "pidgeon_magnesium_reduction": {
      name: "Pidgeon Termal Vakum Magnezyum İndirgenmesi (2 MgO·CaO + Si ➔ 2 Mg + Ca2SiO4)",
      equation: "2 (MgO·CaO)(k) + Si(Fe)(k) ➔ 2 Mg(g) + Ca2SiO4(k)",
      deltaH_kJ: 485.0,
      deltaS_J_K: 260.0,
      type: "Kuvvetli Endotermik Vakum Piro-Metalurjisi",
      description: "Lloyd Montgomery Pidgeon tarafından 1940'larda geliştirilen silikotermik prosesdir. Kalsine dolomit (MgO·CaO) ile ferrosilikon (FeSi) 1150-1200°C'de yüksek vakum (< 13 Pa) altında fırına verilir; süblime olan magnezyum buharı harici kondenserde yoğunlaşır."
    },
    "raschig_hydrazine_synthesis": {
      name: "Raschig Kloramin & Hidrazin Sentezi (2 NH3 + NaOCl ➔ N2H4 + NaCl + H2O)",
      equation: "2 NH3(sulu) + NaOCl(sulu) ➔ N2H4(sulu) + NaCl(sulu) + H2O(s)",
      deltaH_kJ: -153.5,
      deltaS_J_K: -42.0,
      type: "Ekzotermik Sıvı Fazı Azot-Azot Kenetleme",
      description: "Fritz Raschig tarafından 1907'de geliştirilen hidrazin üretim yöntemidir. Seyreltik sodyum hipoklorit (NaOCl) amonyakla önce monokloramin (NH2Cl) oluşturur, ardından aşırı amonyakla reaksiyona girerek roket yakıtı ve korozyon inhibitörü olan hidrazini meydana getirir."
    },
    "urea_synthesis_bosch_meiser": {
      name: "Bosch-Meiser Endüstriyel Üre Sentezi (2 NH3 + CO2 ➔ NH2CONH2 + H2O)",
      equation: "2 NH3(g) + CO2(g) ➔ NH2CONH2(k) + H2O(s)",
      deltaH_kJ: -134.0,
      deltaS_J_K: -425.0,
      type: "Ekzotermik Yüksek Basınçlı Karbamat & Üre Döngüsü",
      description: "Carl Bosch ve Wilhelm Meiser tarafından 1922'de geliştirilen modern gübre sanayiinin temel reaksiyonudur. Amonyak ve karbondioksit 180-200°C ve 150-250 bar basınçta önce amonyum karbamata (NH2COONH4) dönüşür, ardından endotermik dehidrasyonla granüler üre gübresine ayrışır."
    },
    "gattermann_koch_formylation": {
      name: "Gattermann-Koch Katalitik Benzaldehit Sentezi (C6H6 + CO + HCl ➔ C6H5CHO + HCl)",
      equation: "C6H6(s) + CO(g) ➔ C6H5CHO(s)",
      deltaH_kJ: -23.5,
      deltaS_J_K: -110.0,
      type: "Ekzotermik Lewis Asit Katalizli Aromatik Karbonilasyon",
      description: "Ludwig Gattermann ve Julius Koch tarafından 1897'de keşfedilen aromatik formilasyon tepkimesidir. Benzen halkası, AlCl3 ve CuCl kokatalizörleri varlığında yüksek basınçlı CO ve kuru HCl gazı ile tepkimeye girerek parfümeri ve ilaç öncülü olan benzaldehite dönüşür."
    },
    "solvay_ammonia_recovery": {
      name: "Solvay Prosesi Amonyak Geri Kazanımı (2 NH4Cl + Ca(OH)2 ➔ 2 NH3 + CaCl2 + 2 H2O)",
      equation: "2 NH4Cl(k) + Ca(OH)2(k) ➔ 2 NH3(g) + CaCl2(k) + 2 H2O(g)",
      deltaH_kJ: 107.4,
      deltaS_J_K: 330.0,
      type: "Endotermik Bazik Distilasyon & Kimyasal Döngü",
      description: "Solvay soda külü üretim tesislerinde pahalı amonyağın %99.5 verimle kapalı döngüde geri kazanıldığı reaksiyondur. Amonyum klorür, sönmüş kireçle (Ca(OH)2) 90-100°C'de sıyırıcı kolonda kaynatılır; amonyak gazı sisteme dönerken yan ürün olarak kalsiyum klorür (CaCl2) çözeltisi kalır."
    },
    "downs_cell_sodium_electrolysis": {
      name: "Downs Prosesi Metalik Sodyum Elektrolizi (2 NaCl ➔ 2 Na + Cl2)",
      equation: "2 NaCl(s) ➔ 2 Na(s) + Cl2(g)",
      deltaH_kJ: 822.4,
      deltaS_J_K: 180.0,
      type: "Şiddetli Endotermik Erimiş Tuz Elektrolizi",
      description: "J.C. Downs tarafından 1924'te geliştirilen metalik sodyum ve klor gazı üretim prosesidir. NaCl erime noktasını düşürmek için CaCl2 (%58) ilavesiyle 590-600°C'de eritilir; silindirik demir katotta saf sıvı sodyum metali yüzeye çıkarak toplanır."
    },
    "claus_thermal_stage_h2s": {
      name: "Claus Prosesi Termal Yanma Kademesi (2 H2S + 3 O2 ➔ 2 SO2 + 2 H2O)",
      equation: "2 H2S(g) + 3 O2(g) ➔ 2 SO2(g) + 2 H2O(g)",
      deltaH_kJ: -1036.0,
      deltaS_J_K: -152.0,
      type: "Şiddetli Ekzotermik Yüksek Sıcaklık Yanması & Kükürt Geri Kazanımı",
      description: "Petrol rafinerileri ve doğal gaz arıtımında zehirli H2S gazını saf elementel kükürte çeviren Claus prosesinin ilk ve en kritik basamağıdır. 1000-1400°C'de reaksiyon fırınında H2S'in üçte biri kontrollü havayla yakılarak SO2 gazına dönüştürülür."
    },
    "water_electrolysis_pem_green": {
      name: "Yeşil Hidrojen PEM Su Elektrolizi (2 H2O ➔ 2 H2 + O2)",
      equation: "2 H2O(s) ➔ 2 H2(g) + O2(g)",
      deltaH_kJ: 571.6,
      deltaS_J_K: 326.7,
      type: "Kuvvetli Endotermik Elektrokimyasal Su Ayrışması",
      description: "Sıfır karbonlu yeşil hidrojen enerjisinin temel reaksiyonudur. Proton Değişim Membranı (PEM) veya alkali elektrolizörde su molekülleri elektrik enerjisiyle parçalanarak katotta ultra saf hidrojen gazı (H2), anotta saf oksijen gazı (O2) açığa çıkar."
    },
    "water_gas_shift_hightemp": {
      name: "Yüksek Sıcaklık Su-Gaz Kaydırma Reaksiyonu (HT-WGS: CO + H2O ⇌ CO2 + H2)",
      equation: "CO(g) + H2O(g) ⇌ CO2(g) + H2(g)",
      deltaH_kJ: -41.2,
      deltaS_J_K: -42.4,
      type: "Hafif Ekzotermik Katalitik Hidrojen Zenginleştirme",
      description: "Amonyak sentezi ve rafineri hidrojen hatlarında sentez gazındaki CO konsantrasyonunu düşürüp H2 verimini maksimize etmek için Fe2O3-Cr2O3 katalizörlüğünde 350-450°C'de işletilen reaksiyondur."
    },
    "castner_kellner_chloralkali": {
      name: "Castner-Kellner / Membran Klor-Alkali Elektrolizi (2 NaCl + 2 H2O ➔ Cl2 + H2 + 2 NaOH)",
      equation: "2 NaCl(sulu) + 2 H2O(s) ➔ Cl2(g) + H2(g) + 2 NaOH(sulu)",
      deltaH_kJ: 446.0,
      deltaS_J_K: 245.0,
      type: "Kuvvetli Endotermik Endüstriyel Tuzlu Su Elektrolizi",
      description: "Küresel klor gazı (Cl2), hidrojen gazı (H2) ve kostik soda (NaOH) üretiminin temel elektrokimyasal prosesidir. Doymuş tuzlu su (salamura) membran hücrelerde doğru akım uygulanarak elektroliz edilir; pozitif entropi ve yüksek faradaik verimle yürür."
    },
    "zinc_roasting_sphalerite": {
      name: "Sfalerit Çinko Sülfür Kavurması (2 ZnS + 3 O2 ➔ 2 ZnO + 2 SO2)",
      equation: "2 ZnS(k) + 3 O2(g) ➔ 2 ZnO(k) + 2 SO2(g)",
      deltaH_kJ: -878.0,
      deltaS_J_K: -150.0,
      type: "Şiddetli Ekzotermik Piro-Metalurjik Oksidatif Kavurma",
      description: "Çinko metalurjisinin ilk ana kademesidir. Doğal sfalerit (ZnS) cevheri akışkan yataklı fırınlarda 900-1000°C'de hava ile kavrularak asitte çözünebilir çinko oksite (kalsin) dönüştürülürken açığa çıkan SO2 gazı sülfürik asit fabrikasına beslenir."
    },
    "lead_blast_furnace_reduction": {
      name: "Kurşun Oksit Karbon Monoksit İndirgemesi (PbO + CO ➔ Pb + CO2)",
      equation: "PbO(k) + CO(g) ➔ Pb(s) + CO2(g)",
      deltaH_kJ: -65.4,
      deltaS_J_K: -12.0,
      type: "Ekzotermik Yüksek Fırın Kurşun İzabesi",
      description: "Kurşun yüksek fırınlarında (blast furnace) sinterlenmiş kurşun oksidin (PbO), kok kömüründen üretilen CO gazıyla 900-1100°C'de sıvı metalik kurşuna indirgendiği tarihi ve modern metalurjik reaksiyondur."
    },
    "copper_flash_smelting_outokumpu": {
      name: "Outokumpu Flaş Bakır İzabesi (2 CuFeS2 + 2.5 O2 ➔ Cu2S·FeS + FeO + 2 SO2)",
      equation: "2 CuFeS2(k) + 2.5 O2(g) ➔ (Cu2S·FeS)(s) + FeO(s) + 2 SO2(g)",
      deltaH_kJ: -720.0,
      deltaS_J_K: -65.0,
      type: "Kendi Kendini Besleyen (Otojen) Yüksek Ekzotermik Flaş İzabe",
      description: "Finlandiyalı Outokumpu tarafından 1949'da geliştirilen, dünya bakır üretiminin yarısından fazlasında kullanılan devrim niteliğinde izabe prosesidir. İnce öğütülmüş kalkopirit konsantresi oksijenle zenginleştirilmiş sıcak hava jetine püskürtülür; reaksiyon ısısı harici yakıta ihtiyaç duymadan ergitmeyi sağlar."
    },
    "direct_methane_chlorination": {
      name: "Metan Termal Klorlanması & Metil Klorür Sentezi (CH4 + Cl2 ➔ CH3Cl + HCl)",
      equation: "CH4(g) + Cl2(g) ➔ CH3Cl(g) + HCl(g)",
      deltaH_kJ: -103.5,
      deltaS_J_K: 3.5,
      type: "Ekzotermik Serbest Radikal Gaz Fazı Halojenasyonu",
      description: "Silikon polimerleri, metil selüloz ve soğutucu gazların hammaddesi olan klorometanın (CH3Cl) üretim reaksiyonudur. Metan ve klor gazı 400-450°C'de klor radikallerinin zincirleme mekanizmasıyla termal olarak birleştirilir."
    },
    "steam_iron_hydrogen_lane_process": {
      name: "Tarihsel Lane Prosesi Demir-Buhar Hidrojen Sentezi (3 Fe + 4 H2O ➔ Fe3O4 + 4 H2)",
      equation: "3 Fe(k) + 4 H2O(g) ➔ Fe3O4(k) + 4 H2(g)",
      deltaH_kJ: -151.2,
      deltaS_J_K: -98.0,
      type: "Ekzotermik Gaz-Katı Redoks & Zeplin Hidrojen Üretimi",
      description: "Howard Lane tarafından 1903'te geliştirilen ve I. Dünya Savaşı'nda zeplinleri ve hava gemilerini doldurmak için kullanılan ilk endüstriyel saf hidrojen üretim prosesidir. Akkor kızgın sünger demir (650-800°C) üzerine aşırı ısıtılmış su buharı püskürtülerek demir manyetite (Fe3O4) yükseltgenirken yüksek debili hidrojen gazı açığa çıkar; fırın daha sonra sentez gazıyla indirgenerek döngü sürdürülür."
    },
    "titanium_dioxide_chloride_process": {
      name: "Klorür Prosesi Titanyum Dioksit Sentezi (TiCl4 + O2 ➔ TiO2 + 2 Cl2)",
      equation: "TiCl4(g) + O2(g) ➔ TiO2(k) + 2 Cl2(g)",
      deltaH_kJ: -175.4,
      deltaS_J_K: -95.0,
      type: "Şiddetli Ekzotermik Yüksek Sıcaklık Gaz Fazı Oksidasyonu",
      description: "Küresel beyaz boya, plastik ve kağıt sanayiinde kullanılan en parlak ve örtücü rutil kristal yapısındaki TiO2 pigmentinin üretim prosesidir. Buhar fazındaki TiCl4 gazı saf oksijenle 1000-1400°C'de reaktörde yakılır; açığa çıkan klor gazı rutil cevherini klorlamak üzere geri dönüştürülür."
    },
    "phosphorus_submerged_arc_smelting": {
      name: "Elektrotermal Ark Fırını Beyaz Fosfor İndirgemesi (2 Ca3(PO4)2 + 6 SiO2 + 10 C ➔ 6 CaSiO3 + 10 CO + P4)",
      equation: "2 Ca3(PO4)2(k) + 6 SiO2(k) + 10 C(k) ➔ 6 CaSiO3(s) + 10 CO(g) + P4(g)",
      deltaH_kJ: 3060.0,
      deltaS_J_K: 1420.0,
      type: "Muazzam Endotermik Elektro-Metalurjik Fosfor İndirgemesi",
      description: "Elementel beyaz fosfor (P4) üretiminin dünyadaki tek endüstriyel yöntemidir. Fosfat kayası, silika kumu ve kok kömürü kapalı batık ark fırınlarında 1400-1500°C'de devasa elektrik akımıyla ergitilir; gaz fazında yükselen P4 buharı su altında sarı-beyaz mum kıvamında katılaştırılır."
    },
    "calcium_cyanamide_frank_caro": {
      name: "Frank-Caro Prosesi Kalsiyum Siyanamid Azot Fiksasyonu (CaC2 + N2 ➔ CaCN2 + C)",
      equation: "CaC2(k) + N2(g) ➔ CaCN2(k) + C(k)",
      deltaH_kJ: -284.0,
      deltaS_J_K: -140.0,
      type: "Ekzotermik Yüksek Sıcaklık Katı-Gaz Azot Fiksasyonu",
      description: "Adolph Frank ve Nikodem Caro tarafından 1895'te keşfedilen tarihteki ilk ticari yapay azot fiksasyon yöntemidir. Kalsiyum karbür (karpit) 1000-1100°C'de saf azot gazıyla tepkimeye girerek kalkstickstoff (kireçli azot) gübresi ve siyanür öncülü olan kalsiyum siyanamide dönüşür."
    },
    "direct_air_capture_calcination": {
      name: "Direct Air Capture (DAC) Kalsiyum Karbonat Kalsinasyon Rejenerasyonu (CaCO3 ➔ CaO + CO2)",
      equation: "CaCO3(k) ➔ CaO(k) + CO2(g)",
      deltaH_kJ: 178.2,
      deltaS_J_K: 160.5,
      type: "Kuvvetli Endotermik Doğrudan Havadan Karbon Yakalama Rejenerasyonu",
      description: "Atmosferden doğrudan sera gazı karbondioksiti (CO2) yakalayan modern Direct Air Capture (DAC) teknolojisinin kilit rejenerasyon reaksiyonudur. Atmosferik CO2'yi bağlayan kalsiyum karbonat (CaCO3) peletleri, saf oksijen altında 900°C'de kalsine edilerek saf CO2 gazı jeolojik depolamaya gönderilirken rejenere olan sönmemiş kireç (CaO) sisteme geri döner."
    },
    "hunter_titanium_reduction": {
      name: "Hunter Prosesi Sodyum ile Titanyum İndirgemesi (TiCl4 + 4 Na ➔ Ti + 4 NaCl)",
      equation: "TiCl4(g) + 4 Na(s) ➔ Ti(k) + 4 NaCl(k)",
      deltaH_kJ: -840.0,
      deltaS_J_K: -160.0,
      type: "Şiddetli Ekzotermik Metalotermik Titanyum İndirgemesi",
      description: "Matthew A. Hunter tarafından 1910'da keşfedilen ve saf metalik titanyum üreten tarihteki ilk endüstriyel prosestir. TiCl4 gazı basınçlı çelik bombada ergimiş metalik sodyum ile 700-800°C'de tepkimeye sokulur; açığa çıkan devasa ekzotermik ısı reaktörü kendiliğinden kızıl dereceye ulaştırır ve NaCl yıkanarak sünger titanyum izole edilir."
    },
    "leblanc_soda_black_ash": {
      name: "Leblanc Prosesi Döner Fırın Siyah Kül İndirgemesi (Na2SO4 + 2 C + CaCO3 ➔ Na2CO3 + CaS + 2 CO2)",
      equation: "Na2SO4(k) + 2 C(k) + CaCO3(k) ➔ Na2CO3(s) + CaS(k) + 2 CO2(g)",
      deltaH_kJ: 148.0,
      deltaS_J_K: 192.0,
      type: "Endotermik Yüksek Sıcaklık Siyah Kül (Black Ash) Sentezi",
      description: "Nicolas Leblanc tarafından 1791'de geliştirilen ve Sanayi Devrimi'nde sabun, cam ve tekstil endüstrisini besleyen ilk yapay soda külü (sodyum karbonat) üretim prosesidir. Tuz keki (Na2SO4), kok kömürü ve kireçtaşı 1000°C döner fırında eritilerek çözünür Na2CO3 elde edilir."
    },
    "weldon_chlorine_regeneration": {
      name: "Weldon Prosesi Mangan Klorür Oksidatif Çamur Rejenerasyonu (MnCl2 + CaO + 0.5 O2 ➔ CaMnO3 + CaCl2)",
      equation: "MnCl2(aq) + CaO(k) + 0.5 O2(g) ➔ CaMnO3(k) + CaCl2(aq)",
      deltaH_kJ: -198.5,
      deltaS_J_K: -165.0,
      type: "Ekzotermik Islak Kimyasal Ağartıcı & Klor Geri Kazanımı",
      description: "Walter Weldon tarafından 1866'da geliştirilen ve Scheele'nin MnO2 + 4 HCl klor üretim atıklarını geri dönüştürerek tekstil ağartma tozu (kalsiyum hipoklorit) sanayiini devrimleştiren prosestir. Atık MnCl2 çözeltisi kireç sütü ve basınçlı hava ile 60°C'de üflenerek 'Weldon çamuru' (kalsiyum manganit - CaMnO3) olarak çöktürülür."
    },
    "bayer_gibbsite_digestion": {
      name: "Bayer Prosesi Kostik Alümina Sindirimi (Al(OH)3 + NaOH ➔ NaAl(OH)4)",
      equation: "Al(OH)3(k) + NaOH(aq) ➔ NaAl(OH)4(aq)",
      deltaH_kJ: -28.6,
      deltaS_J_K: 45.2,
      type: "Ekzotermik Yüksek Basınçlı Kostik Otoklav Çözünmesi",
      description: "Karl Josef Bayer tarafından 1888'de keşfedilen ve dünyadaki tüm alüminyum üretiminin ana hammaddesi olan saf alüminayı (Al2O3) üreten prosesin kalbidir. Boksit cevheri otoklavlarda 140-240°C'de derişik NaOH çözeltisiyle sindirilir; silikat ve demir safsızlıkları 'kırmızı çamur' olarak çökerken sodyum alüminat çözeltisi berraklaştırılır."
    },
    "solvay_carbonation_tower": {
      name: "Solvay Prosesi Karbonasyon Kulesi Sodyum Bikarbonat Çökelmesi (NaCl + NH3 + CO2 + H2O ➔ NaHCO3 + NH4Cl)",
      equation: "NaCl(aq) + NH3(g) + CO2(g) + H2O(s) ➔ NaHCO3(k) + NH4Cl(aq)",
      deltaH_kJ: -128.4,
      deltaS_J_K: -295.0,
      type: "Ekzotermik Çözelti Fazı Gaz Soğurma ve Kristalizasyon",
      description: "Ernest Solvay tarafından 1861'de endüstriye kazandırılan modern soda külü üretiminin ana karbonasyon adımıdır. Doygun tuzlu su (brine), amonyakla doyurulduktan sonra dikey Solvay kulelerinde aşağı akarken karşı akımlı CO2 gazı yukarı yükselir; 35-45°C'de çözünürlüğü düşük olan sodyum bikarbonat (kabartma tozu) bembeyaz kristaller halinde çöker."
    },
    "hargreaves_potassium_sulfate": {
      name: "Hargreaves Prosesi Potasyum Sülfat & Klor Gazı Sentezi (4 KCl + 2 SO2 + O2 + 2 H2O ➔ 2 K2SO4 + 4 HCl)",
      equation: "4 KCl(k) + 2 SO2(g) + O2(g) + 2 H2O(g) ➔ 2 K2SO4(k) + 4 HCl(g)",
      deltaH_kJ: -238.4,
      deltaS_J_K: -188.0,
      type: "Ekzotermik Gaz-Katı Heterojen Sülfatlama & SOP Gübre Sentezi",
      description: "Sülfürik asit kullanmaksızın direkt kükürt dioksit, hava ve su buharı ile potasyum klorürden klorürsüz özel tarım gübresi potasyum sülfat (SOP) ve hidroklorik asit üreten tarihsel ve çevre dostu heterojen gaz-katı prosesidir."
    },
    "claus_catalytic_step_so2_h2s": {
      name: "Claus Prosesi Katalitik Basamağı Kükürt Geri Kazanımı (2 H2S + SO2 ➔ 3 S + 2 H2O)",
      equation: "2 H2S(g) + SO2(g) ➔ 3/8 S8(s) + 2 H2O(g)",
      deltaH_kJ: -145.8,
      deltaS_J_K: -92.4,
      type: "Ilımlı Ekzotermik Katalitik Kükürt Kondansasyonu",
      description: "Petrol rafinerileri ve doğal gaz tesislerinde asit gazındaki zehirli hidrojen sülfürü (H2S) saf elementel kükürte dönüştüren Claus reaktörlerinin katalitik basamağıdır. Aktif alümina veya titanyum dioksit katalizörleri üzerinde 200-240°C'de yürütülerek kükürt sıvı halde yoğunlaştırılır."
    },
    "water_gas_shift_lowtemp_lt_wgs": {
      name: "Düşük Sıcaklık Su Gazı Dönüşümü (LT-WGS: CO + H2O ➔ CO2 + H2)",
      equation: "CO(g) + H2O(g) ➔ CO2(g) + H2(g)",
      deltaH_kJ: -41.2,
      deltaS_J_K: -42.1,
      type: "Hassas Ekzotermik Düşük Sıcaklık Katalitik Hidrojen Saflaştırma",
      description: "Yüksek sıcaklık WGS reaktöründen çıkan gazdaki son CO kalıntılarını <%0.3 seviyesine indiren kritik katalitik basamaktır. 200-220°C'de Cu-ZnO-Al2O3 katalizörü ile yürütülür; düşük sıcaklık termodinamik dengeyi hidrojen ve karbondioksit lehine zorlar."
    },
    "debye_huckel_calcium_phosphate_precipitation": {
      name: "Hidroksiapatit Biyo-Seramik Çökelmesi (10 Ca(OH)2 + 6 H3PO4 ➔ Ca10(PO4)6(OH)2 + 18 H2O)",
      equation: "10 Ca(OH)2(aq) + 6 H3PO4(aq) ➔ Ca10(PO4)6(OH)2(k) + 18 H2O(s)",
      deltaH_kJ: -624.0,
      deltaS_J_K: -110.0,
      type: "Şiddetli Ekzotermik Biyo-Mineral Sentetik Kemik/Diş Çökelmesi",
      description: "İnsan kemiği ve diş minesinin ana mineral fazı olan sentetik hidroksiapatitin (HAp) ıslak kimyasal çöktürme sentezidir. Kalsiyum hidroksit süspansiyonuna ortofosforik asit damlatılarak pH 9-11 aralığında kristalize edilir; ortopedik implant kaplamaları ve kemik greftlerinde kullanılır."
    },
    "solvay_ammonia_distillation_regeneration": {
      name: "Solvay Prosesi Amonyak Geri Kazanım Damıtması (2 NH4Cl + Ca(OH)2 ➔ CaCl2 + 2 NH3 + 2 H2O)",
      equation: "2 NH4Cl(aq) + Ca(OH)2(aq) ➔ CaCl2(aq) + 2 NH3(g) + 2 H2O(s)",
      deltaH_kJ: 85.5,
      deltaS_J_K: 260.0,
      type: "Endotermik Buhar Sıyırmalı Amonyak Rejenerasyonu",
      description: "Solvay soda prosesinin ekonomik başarısının temel direğidir. Karbonasyon kulesinden çıkan amonyum klorür çözeltisi, kireç söndürme çamuruyla karıştırılarak 100°C buhar kulesinde damıtılır; açığa çıkan gaz amonyak soğurma kulelerine geri beslenirken atık kalsiyum klorür (CaCl2) tabandan ayrılır."
    },
    "sol_gel_silica_teos_hydrolysis": {
      name: "Sol-Jel Silika TEOS Asidik Hidrolizi (Si(OC2H5)4 + 2 H2O ➔ SiO2 + 4 C2H5OH)",
      equation: "Si(OC2H5)4(s) + 2 H2O(s) ➔ SiO2(k) + 4 C2H5OH(s)",
      deltaH_kJ: -58.4,
      deltaS_J_K: 42.0,
      type: "Ilımlı Ekzotermik Sol-Jel Nanoyapılı Silika ve Aerojel Sentezi",
      description: "Optik kaplamalar, monolitik aerojeller ve silika nanopartiküllerinin üretiminde kullanılan temel sol-jel kondansasyon reaksiyonudur. Tetraetil ortosilikat (TEOS), asit veya baz katalizörlüğünde oda sıcaklığında hidroliz olarak silanol (Si-OH) ağları örer ve 3 boyutlu nano-gözenekli cam matrisini oluşturur."
    },
    "methane_pyrolysis_turquoise_hydrogen": {
      name: "Termokatalitik Metan Pirolizi Turkuaz Hidrojen Sentezi (CH4 ➔ C + 2 H2)",
      equation: "CH4(g) ➔ C(k) + 2 H2(g)",
      deltaH_kJ: 74.8,
      deltaS_J_K: 89.2,
      type: "Endotermik Sıfır-CO2 Emisyonsuz Turkuaz Hidrojen & Karbon Siyahı Üretimi",
      description: "Sıfır karbondioksit (CO2) salınımıyla hidrojen üreten devrimsel 'turkuaz hidrojen' teknolojisinin temelidir. Metan gazı sıvı kalay veya nikel katalizörü eşliğinde 850-1000°C'de oksijensiz ortamda pirolize edilir; gaz fazında saf H2 çıkarken karbon katı grafit/karbon siyahı olarak tabanda toplanır ve depolanır."
    },
    "lithium_iron_phosphate_solid_state": {
      name: "LFP Lityum Demir Fosfat Katot Katı Hal Kalsinasyonu (2 LiOH + 2 FePO4 + C ➔ 2 LiFePO4 + CO + H2O)",
      equation: "2 LiOH(k) + 2 FePO4(k) + C(k) ➔ 2 LiFePO4(k) + CO(g) + H2O(g)",
      deltaH_kJ: 112.0,
      deltaS_J_K: 215.0,
      type: "Endotermik Elektrikli Araç Bataryası LFP Katot Kristal Sentezi",
      description: "Elektrikli araçlar ve enerji depolama sistemleri (ESS) için en uzun ömürlü ve termal olarak en güvenli katot malzemesi olan olivin yapılı LiFePO4'ün endüstriyel karbotermal indirgeme sentezidir. 700°C'de azot atmosferinde kalsine edilerek nano-karbon kaplı LFP partikülleri üretilir."
    },
    "mond_nickel_decomposition": {
      name: "Mond Prosesi Nikel Tetrakarbonil Termal Ayrışması (Ni(CO)4 ➔ Ni + 4 CO)",
      equation: "Ni(CO)4(g) ➔ Ni(k) + 4 CO(g)",
      deltaH_kJ: 161.0,
      deltaS_J_K: 410.0,
      type: "Endotermik Yüksek Saflıkta Nikel Pelet Buhar Fazı Metalurjisi",
      description: "Ludwig Mond tarafından 1890'da keşfedilen prosesin ikinci adımıdır. 50°C'de sentezlenen uçucu ve toksik nikel tetrakarbonil gazı, 230°C'ye ısıtılmış pelet kulesine püskürtüldüğünde endotermik olarak hızla parçalanır; karbon monoksit gazı geri dönüştürülürken peletler üzerinde atomik katmanlar halinde %99.99 saflıkta nikel birikir."
    },
    "birch_reduction_benzene_mechanism": {
      name: "Birch İndirgemesi Siklohekzadien Sentezi (C6H6 + 2 Na + 2 EtOH ➔ C6H8 + 2 EtONa)",
      equation: "C6H6(s) + 2 Na(s) + 2 C2H5OH(s) ➔ C6H8(s) + 2 C2H5ONa(s)",
      deltaH_kJ: -186.4,
      deltaS_J_K: -95.0,
      type: "Şiddetli Ekzotermik Çözünmüş Metal Organik Aromatik İndirgemesi",
      description: "Arthur Birch tarafından 1944'te keşfedilen ve aromatik benzen halkasını seçici olarak konjuge olmayan 1,4-siklohekzadiene indirgeyen klasik organik sentez reaksiyonudur. Sıvı amonyak içinde çözünmüş sodyum metali solvate elektronlar üretir ve proton donörü etanol varlığında steroid ve farmasötik sentezlerinin kilit yapıtaşını oluşturur."
    }
  };

  function calculateReactionThermodynamics(rxnKey, tempC) {
    const rxn = REACTION_THERMODYNAMICS[rxnKey] || REACTION_THERMODYNAMICS["soap_saponification"];
    const T_C = parseFloat(tempC) !== undefined && !isNaN(parseFloat(tempC)) ? parseFloat(tempC) : 25.0;
    const T_K = T_C + 273.15;
    const R = 8.314462618;

    const deltaH_J = rxn.deltaH_kJ * 1000.0;
    const deltaS_J = rxn.deltaS_J_K;

    const deltaG_J = deltaH_J - (T_K * deltaS_J);
    const deltaG_kJ = deltaG_J / 1000.0;

    const exponent = -deltaG_J / (R * T_K);
    let K_eq = 1.0;
    if (exponent > 700) {
      K_eq = 1e300;
    } else if (exponent < -700) {
      K_eq = 1e-300;
    } else {
      K_eq = Math.exp(exponent);
    }

    let inversionTempC = null;
    if (deltaS_J !== 0) {
      const T_star_K = deltaH_J / deltaS_J;
      if (T_star_K > 0 && T_star_K < 5000) {
        inversionTempC = Math.round((T_star_K - 273.15) * 10) / 10;
      }
    }

    let spontaneity = "";
    let verdict = "";
    if (deltaG_kJ < -10.0) {
      spontaneity = "🟢 KENDİLİĞİNDEN YÜRÜR (Termodinamik Olarak İleri Yönlü / Spontaneous)";
      verdict = `${T_C}°C'de ΔG° = ${Math.round(deltaG_kJ * 10) / 10} kJ/mol (< 0). Reaksiyon ürünler lehine neredeyse %100 tamamlanır (K_eq >> 1).`;
    } else if (deltaG_kJ > 10.0) {
      spontaneity = "🔴 KENDİLİĞİNDEN YÜRÜMEZ (Termodinamik Olarak İmkansız / Non-Spontaneous)";
      verdict = `${T_C}°C'de ΔG° = ${Math.round(deltaG_kJ * 10) / 10} kJ/mol (> 0). Reaksiyon bu sıcaklıkta gerçekleşmez; ${inversionTempC !== null ? 'en az ' + inversionTempC + '°C sıcaklığa ısıtılmalıdır.' : 'sürekli dış enerji gerekir.'}`;
    } else {
      spontaneity = "🟡 KİMYASAL DENGE DURUMU (Dinamik Reaksiyon Dengesi / Equilibrium)";
      verdict = `${T_C}°C'de ΔG° ≈ 0 kJ/mol. İleri ve geri reaksiyon hızları eşittir; hem reaktifler hem ürünler bir arada bulunur.`;
    }

    return {
      reactionName: rxn.name,
      equation: rxn.equation,
      temperatureC: T_C,
      temperatureK: Math.round(T_K * 10) / 10,
      deltaH_kJ: rxn.deltaH_kJ,
      deltaS_J_K: rxn.deltaS_J_K,
      deltaG_kJ: Math.round(deltaG_kJ * 10) / 10,
      equilibriumConstantK: K_eq < 0.001 || K_eq > 1000 ? K_eq.toExponential(3) : Math.round(K_eq * 1000) / 1000,
      isSpontaneous: deltaG_kJ < 0,
      inversionTempC: inversionTempC,
      spontaneityVerdict: spontaneity,
      detailedExplanation: verdict,
      thermalProfile: rxn.type,
      description: rxn.description
    };
  }

  // =========================================================================
  // 7. HENDERSON-HASSELBALCH BUFFER SYSTEM & PH ENGINEERING
  // =========================================================================
  const BUFFER_SYSTEMS = {
    "citrate": {
      name: "Sitrik Asit / Sodyum Sitrat Tamponu",
      nameEn: "Citric Acid / Sodium Citrate Buffer",
      pKa: 4.76,
      pKaRange: [3.0, 6.2],
      acidName: "Sitrik Asit Monohidrat",
      acidFormula: "C6H8O7·H2O",
      acidMW: 210.14,
      baseName: "Trisodyum Sitrat Dihidrat",
      baseFormula: "Na3C6H5O7·2H2O",
      baseMW: 294.10,
      usage: "Cilt bakım serumları (özellikle C Vitamini / Askorbik Asit pH 3.5), gıda koruyucuları ve şelatlayıcı banyolar.",
      recommendedPH: 4.5
    },
    "acetate": {
      name: "Asetik Asit / Sodyum Asetat Tamponu",
      nameEn: "Acetic Acid / Sodium Acetate Buffer",
      pKa: 4.76,
      pKaRange: [3.8, 5.8],
      acidName: "Glasiyal Asetik Asit (%100 Sirke Ruhu)",
      acidFormula: "CH3COOH",
      acidMW: 60.05,
      baseName: "Sodyum Asetat Trihidrat",
      baseFormula: "CH3COONa·3H2O",
      baseMW: 136.08,
      usage: "Fitokimyasal asidik ekstraksiyonlar, spajirik tentür arıtma, biyomolekül çökeltme ön banyoları.",
      recommendedPH: 4.75
    },
    "phosphate_pbs": {
      name: "Fizyolojik Fosfat Tamponu (PBS)",
      nameEn: "Phosphate Buffered Saline (PBS)",
      pKa: 7.21,
      pKaRange: [5.8, 8.0],
      acidName: "Sodyum Dihidrojen Fosfat Monohidrat (NaH2PO4·H2O)",
      acidFormula: "NaH2PO4·H2O",
      acidMW: 137.99,
      baseName: "Disodyum Hidrojen Fosfat Heptahidrat (Na2HPO4·7H2O)",
      baseFormula: "Na2HPO4·7H2O",
      baseMW: 268.07,
      usage: "Fizyolojik ortam (kan/hücre pH 7.4), göz damlaları ve enzim aktivite muhafazası.",
      recommendedPH: 7.4
    },
    "lactate": {
      name: "Laktik Asit / Sodyum Laktat Tamponu",
      nameEn: "Lactic Acid / Sodium Lactate Buffer",
      pKa: 3.86,
      pKaRange: [3.0, 5.0],
      acidName: "Laktik Asit (%85 Konsantre)",
      acidFormula: "C3H6O3",
      acidMW: 90.08,
      baseName: "Sodyum Laktat (%60 Solüsyon)",
      baseFormula: "C3H5NaO3",
      baseMW: 112.06,
      usage: "Cilt asit mantosu (pH 5.5) onarımı, AHA peeling formulasyonları ve nemlendirici kremler.",
      recommendedPH: 3.8
    },
    "bicarbonate": {
      name: "Karbonat / Bikarbonat Tamponu",
      nameEn: "Carbonate / Bicarbonate Buffer",
      pKa: 6.35,
      pKaRange: [6.0, 7.8],
      acidName: "Karbonik Asit / Çözünmüş CO2 Kaynağı",
      acidFormula: "H2CO3",
      acidMW: 62.03,
      baseName: "Sodyum Bikarbonat (İngiliz Karbonatı)",
      baseFormula: "NaHCO3",
      baseMW: 84.01,
      usage: "Mide antiasit nötralizasyonu, kan plazması tampon benzetimi ve alkali banyo tuzları.",
      recommendedPH: 7.0
    }
  };

  function calculateBufferSolution(bufferKey, targetPH, volumeML, targetMolarity) {
    const sys = BUFFER_SYSTEMS[bufferKey] || BUFFER_SYSTEMS["citrate"];
    const pH = parseFloat(targetPH) !== undefined && !isNaN(parseFloat(targetPH)) ? parseFloat(targetPH) : sys.recommendedPH;
    const vol = parseFloat(volumeML) > 0 ? parseFloat(volumeML) : 100.0;
    const molarity = parseFloat(targetMolarity) > 0 ? parseFloat(targetMolarity) : 0.1;

    // Henderson-Hasselbalch: pH = pKa + log([A-] / [HA])
    // => ratio = [A-] / [HA] = 10^(pH - pKa)
    const deltaPK = pH - sys.pKa;
    const ratio = Math.pow(10, deltaPK);

    // Total molarity C = [HA] + [A-]
    // [HA] = C / (1 + ratio)
    // [A-] = C - [HA]
    const concAcid = molarity / (1.0 + ratio);
    const concBase = molarity - concAcid;

    const molesAcid = concAcid * (vol / 1000.0);
    const molesBase = concBase * (vol / 1000.0);

    const massAcidG = Math.round(molesAcid * sys.acidMW * 1000) / 1000;
    const massBaseG = Math.round(molesBase * sys.baseMW * 1000) / 1000;

    // Van Slyke Buffer Capacity beta = 2.303 * C * (Ka * [H+]) / (Ka + [H+])^2
    const Ka = Math.pow(10, -sys.pKa);
    const H_plus = Math.pow(10, -pH);
    const beta = 2.303 * molarity * (Ka * H_plus) / Math.pow(Ka + H_plus, 2);

    const isOptimalRange = pH >= sys.pKaRange[0] && pH <= sys.pKaRange[1];
    let stabilityRating = "⭐⭐⭐⭐⭐ Yüksek Tamponlama Kapasitesi";
    if (Math.abs(deltaPK) > 1.0) {
      stabilityRating = "⚠️ Düşük Tampon Kapasitesi (pKa sınırının dışında)";
    } else if (Math.abs(deltaPK) > 0.5) {
      stabilityRating = "⭐⭐⭐ Orta Tamponlama Kapasitesi";
    }

    const recipe = `${vol} mL distile suyun yaklaşık %80'ine (${Math.round(vol * 0.8)} mL) ${massAcidG} g ${sys.acidName} ve ${massBaseG} g ${sys.baseName} ekleyip tamamen çözünene kadar karıştırın. Ardından hacmi distile su ile tam ${vol} mL'ye tamamlayın. Nihai çözeltinin pH değeri hassas olarak ~${pH.toFixed(2)} olacaktır.`;

    return {
      systemName: sys.name,
      targetPH: pH,
      pKa: sys.pKa,
      volumeML: vol,
      totalMolarity: molarity,
      ratioBaseToAcid: Math.round(ratio * 1000) / 1000,
      acidComponent: {
        name: sys.acidName,
        formula: sys.acidFormula,
        molarity: Math.round(concAcid * 10000) / 10000,
        massG: massAcidG
      },
      baseComponent: {
        name: sys.baseName,
        formula: sys.baseFormula,
        molarity: Math.round(concBase * 10000) / 10000,
        massG: massBaseG
      },
      bufferCapacityBeta: Math.round(beta * 10000) / 10000,
      isOptimalRange: isOptimalRange,
      stabilityRating: stabilityRating,
      usageGuidance: sys.usage,
      preparationRecipe: recipe
    };
  }

  // =========================================================================
  // 8. TRANSDERMAL BIOAVAILABILITY & PENETRATION KINETICS (POTTS-GUY FLUX)
  // =========================================================================
  const TRANSDERMAL_ACTIVES = {
    "mupirocin": {
      name: "Mupirosin (Topikal Antibiyotik)",
      mw: 500.6,
      logP: 2.3,
      targetLayer: "Stratum Corneum & Yüzeyel Epidermis",
      barrierEffect: "Yüksek moleküler ağırlık (>500 Da) sebebiyle sistemik dolaşıma geçmez, cilt yüzeyinde güçlü antiseptik bariyer kurar."
    },
    "salicylic_acid": {
      name: "Salisilik Asit (BHA)",
      mw: 138.12,
      logP: 2.26,
      targetLayer: "Gözenek İçi / Sebase Folikül & Dermis",
      barrierEffect: "Lipofilik karakteri sayesinde sebum tabakasını aşarak gözenek içlerine derinlemesine nüfuz eder."
    },
    "caffeine": {
      name: "Kafein (Vazokonstrüktör / Selülit Karşıtı)",
      mw: 194.19,
      logP: -0.07,
      targetLayer: "Dermis & Deri Altı Mikrosirkülasyon",
      barrierEffect: "Düşük moleküler ağırlık ve dengeli polarite ile stratum corneumu hızla geçerek mikrosirkülasyona ulaşır."
    },
    "niacinamide": {
      name: "Niasinamid (B3 Vitamini)",
      mw: 122.12,
      logP: -0.37,
      targetLayer: "Epidermis & Üst Dermis",
      barrierEffect: "Küçük hidrofilik molekül; keratinositleri besler ve seramid sentezini uyarır."
    },
    "menthol": {
      name: "Mentol (Soğutucu & Penetrasyon Artırıcı)",
      mw: 156.27,
      logP: 3.15,
      targetLayer: "Duyusal Sinir Uçları (TRPM8 Reseptörleri)",
      barrierEffect: "Stratum corneum lipid çift katmanını geçici olarak akışkanlaştırarak diğer etken maddelerin emilimini 3-4 kat artırır."
    },
    "diclofenac": {
      name: "Diklofenak (Topikal NSAİİ)",
      mw: 296.15,
      logP: 4.51,
      targetLayer: "Eklem & Derin Kas Dokusu",
      barrierEffect: "Lipofilik karakterli; emülsiyon veya alkollü jel içinde uygulandığında deri altı enflamasyon odağına derinlemesine ulaşır."
    }
  };

  const TRANSDERMAL_VEHICLES = {
    "peg_ointment": {
      name: "Polietilen Glikol Pomadı (PEG-400 / PEG-3350)",
      type: "Hidrofilik Polimer Taban",
      releaseRate: "Hızlı Salım / Düşük Cilt Kalıntısı",
      penetrationFactor: 1.15
    },
    "beeswax_olive": {
      name: "Doğal Balmumu & Zeytinyağı Merhemi",
      type: "Ağır Lipofilik Oklüzif Taban",
      releaseRate: "Yavaş ve Sürekli Salım (Depo Etkisi)",
      penetrationFactor: 0.85
    },
    "ow_emulsion": {
      name: "Yağ-içinde-Su (O/W) Kozmetik Krem",
      type: "Bifazik Dengeli Emülsiyon",
      releaseRate: "Mükemmel Cilt Uyumu / Yüksek Absorpsiyon",
      penetrationFactor: 1.35
    },
    "hydrogel": {
      name: "Karbomer / Su Bazlı Hidrojel",
      type: "Yüksek Su Fazlı Jel",
      releaseRate: "Anında Hızlı Yüzey Salımı",
      penetrationFactor: 1.20
    },
    "alcohol_tincture": {
      name: "%70 Etanolik Spajirik Tentür",
      type: "Uçucu Hidroalkolik Çözücü",
      releaseRate: "Şok Emilim / Lipid Çözücü",
      penetrationFactor: 2.10
    }
  };

  function calculateDermalPenetration(activeKey, vehicleKey, concentrationPct) {
    const act = TRANSDERMAL_ACTIVES[activeKey] || TRANSDERMAL_ACTIVES["mupirocin"];
    const veh = TRANSDERMAL_VEHICLES[vehicleKey] || TRANSDERMAL_VEHICLES["beeswax_olive"];
    const conc = parseFloat(concentrationPct) > 0 ? parseFloat(concentrationPct) : 2.0;

    // Potts-Guy Permeability Coefficient Model (cm/h):
    // log Kp = -2.7 + 0.71 * logP - 0.0061 * MW
    const logKp = -2.7 + (0.71 * act.logP) - (0.0061 * act.mw);
    const Kp_cm_h = Math.pow(10, logKp);

    // Concentration in vehicle (ug/cm^3), assuming vehicle density ~ 1.0 g/cm^3
    // conc% => conc g / 100 g => conc * 10,000 ug/cm^3
    const Cv_ug_cm3 = conc * 10000.0;

    // Steady-state flux J_ss (ug / (cm^2 * h))
    const J_ss = Kp_cm_h * Cv_ug_cm3 * veh.penetrationFactor;

    // 24-hour cumulative delivery on standard 10 cm^2 skin area (mg)
    const Q24_ug = J_ss * 24.0 * 10.0;
    const Q24_mg = Math.round((Q24_ug / 1000.0) * 100) / 100;

    // Depth classification
    let depthCategory = "Lokal / Epidermal";
    let depthRating = "🛡️ Yüzeyel Koruyucu Bariyer";
    if (J_ss > 5.0) {
      depthCategory = "Derin Transdermal / Sistemik Nüfuz";
      depthRating = "⚡ Derin Dermal ve Sistemik Geçiş";
    } else if (J_ss > 0.5) {
      depthCategory = "Orta Dermal Nüfuz";
      depthRating = "🧴 Dermis ve Kıl Folikülü Emilimi";
    }

    return {
      activeName: act.name,
      activeMW: act.mw,
      activeLogP: act.logP,
      vehicleName: veh.name,
      vehicleType: veh.type,
      concentrationPct: conc,
      permeabilityKp_cm_h: Kp_cm_h.toExponential(3),
      steadyStateFlux_ug_cm2_h: Math.round(J_ss * 1000) / 1000,
      cumulativeDelivery24h_mg: Q24_mg,
      targetLayer: act.targetLayer,
      depthCategory: depthCategory,
      depthRating: depthRating,
      vehicleReleaseProfile: veh.releaseRate,
      pharmacokineticInsight: act.barrierEffect
    };
  }

  // =========================================================================
  // 8.5. FREEZE-DRYING / LYOPHILIZATION & SUB-ZERO SUBLIMATION KINETICS
  // =========================================================================
  const FREEZE_DRY_SOLUTES = {
    "mannitol": {
      name: "Mannitol (Kristalin Liyoprotektan / Taşıyıcı)",
      mw: 182.17,
      Tg_prime: -1.5,
      type: "Kristalin Ajan",
      recommendedConcPct: 5.0,
      collapseTempC: -1.5,
      porosityDesc: "Mükemmel iğnemsi kristal yapı; hızlı kuruma ve mekanik olarak stabil sert liyofilize kek sağlar."
    },
    "sucrose": {
      name: "Sükroz / Sakkaroz (Amorf Biyo-Stabilizatör)",
      mw: 342.3,
      Tg_prime: -32.0,
      type: "Amorf Şeker Matrisi",
      recommendedConcPct: 10.0,
      collapseTempC: -32.0,
      porosityDesc: "Protein ve enzimlerin tersiyer yapısını camlaşma (vitrifikasyon) ile mutlak korur. Çökme sıcaklığı (-32°C) düşüktür."
    },
    "trehalose": {
      name: "Trehaloz Dihidrat (Üst Düzey Hücresel Kriyoprotektan)",
      mw: 378.33,
      Tg_prime: -29.5,
      type: "Amorf Disakkarit",
      recommendedConcPct: 8.0,
      collapseTempC: -29.5,
      porosityDesc: "Susuz yaşam (anhidrobiyoz) mucizesi; nem çekme hızı sükroza göre çok daha yavaştır ve yüksek sıcaklık stabilitesi verir."
    },
    "bsa": {
      name: "Sığır Serum Albümini (BSA / Model Protein)",
      mw: 66463,
      Tg_prime: -10.0,
      type: "Globüler Protein",
      recommendedConcPct: 2.0,
      collapseTempC: -10.0,
      porosityDesc: "Amorf protein keki; köpüklenmeyi önlemek için düşük raf sıcaklığında kontrollü süblimasyon gerektirir."
    },
    "hyaluronic_acid": {
      name: "Sodyum Hiyalüronat (Hiyalüronik Asit)",
      mw: 1500000,
      Tg_prime: -18.0,
      type: "Glikozaminoglikan Polimer",
      recommendedConcPct: 1.0,
      collapseTempC: -18.0,
      porosityDesc: "Aşırı viskoz yapı; kurutma sonrası süngerimsi ultra gözenekli kolajenik yapı bırakır."
    },
    "collagen": {
      name: "Hidrolize Kolajen Peptidleri",
      mw: 3000,
      Tg_prime: -14.0,
      type: "Biyoaktif Peptid",
      recommendedConcPct: 5.0,
      collapseTempC: -14.0,
      porosityDesc: "Doku iskelesi ve biyomedikal sünger oluşturur; homojen dağılımlı mikro gözenekler üretir."
    }
  };

  function calculateFreezeDrying(soluteKey, solutionVolumeMl, solidConcentrationPct, shelfTempC) {
    const solKey = soluteKey || "mannitol";
    const sol = FREEZE_DRY_SOLUTES[solKey] || FREEZE_DRY_SOLUTES["mannitol"];
    const vol = parseFloat(solutionVolumeMl) || 100.0;
    const conc = parseFloat(solidConcentrationPct) || 5.0;
    const shelfT = parseFloat(shelfTempC) !== undefined && !isNaN(parseFloat(shelfTempC)) ? parseFloat(shelfTempC) : -20.0;

    const solMassTotalG = vol * 1.0;
    const solidYieldG = Math.round((vol * (conc / 100.0)) * 1000) / 1000;
    const iceMassG = Math.round((solMassTotalG - solidYieldG) * 10) / 10;

    // Latent heat of ice sublimation = 2835 J/g = 2.835 kJ/g
    const sublimationHeatKJ = Math.round((iceMassG * 2.835) * 10) / 10;

    // Saturated ice vapor pressure (Clapeyron equation) in mbar at shelf temperature
    // P_ice(T) = 6.1121 * exp((22.587 * T) / (273.86 + T))
    const pIce_mbar = 6.1121 * Math.exp((22.587 * shelfT) / (273.86 + shelfT));

    // Target vacuum setpoint is ~ 20% of ice vapor pressure at product sublimation front
    const targetVacuumMbar = Math.max(0.01, Math.round(pIce_mbar * 0.20 * 1000) / 1000);
    const targetVacuumUbar = Math.round(targetVacuumMbar * 1000);

    // Required condenser temperature (min -50°C, must be at least 20-25°C colder than shelf)
    const reqCondenserTempC = Math.min(-50, Math.round(shelfT - 25));

    // Collapse evaluation
    const isSafeFromCollapse = shelfT <= sol.collapseTempC;
    let stabilityRating = "";
    let stabilityDesc = "";

    if (isSafeFromCollapse) {
      stabilityRating = "🟢 GÜVENLİ VE STABİL SÜBLİMASYON (Matris Korunuyor)";
      stabilityDesc = `Raf sıcaklığı (${shelfT}°C), kritik camsı çökme eşiğinin (${sol.collapseTempC}°C) altındadır. Kek mikroyapısı bozulmadan liyofilize olur.`;
    } else {
      stabilityRating = "🔴 KEK ÇÖKMESİ VE ERİME RİSKİ (Meltback / Collapse)";
      stabilityDesc = `Raf sıcaklığı (${shelfT}°C), kritik eşiği (${sol.collapseTempC}°C) AŞMIŞTIR! Ürün kısmen eriyerek (meltback) amorf yapı çökecek ve gözenekler tıkanacaktır. Raf sıcaklığını düşürünüz!`;
    }

    const estPrimaryHours = Math.round(6 + (iceMassG / 100) * 10);
    const estSecondaryHours = 4;
    const totalHours = estPrimaryHours + estSecondaryHours;

    return {
      soluteName: sol.name,
      soluteType: sol.type,
      soluteMW: sol.mw,
      collapseTempC: sol.collapseTempC,
      solutionVolumeMl: vol,
      concentrationPct: conc,
      shelfTempC: shelfT,
      iceMassG: iceMassG,
      dryCakeMassG: solidYieldG,
      sublimationHeatKJ: sublimationHeatKJ,
      iceVaporPressureMbar: Math.round(pIce_mbar * 1000) / 1000,
      targetVacuumMbar: targetVacuumMbar,
      targetVacuumUbar: targetVacuumUbar,
      reqCondenserTempC: reqCondenserTempC,
      isSafeFromCollapse: isSafeFromCollapse,
      stabilityRating: stabilityRating,
      stabilityDesc: stabilityDesc,
      porosityInsight: sol.porosityDesc,
      estPrimaryDurationHours: estPrimaryHours,
      estSecondaryDurationHours: estSecondaryHours,
      estTotalDurationHours: totalHours
    };
  }

  // =========================================================================
  // 8.6. LIQUID-LIQUID EXTRACTION & NERNST PARTITION BALANCER
  // =========================================================================
  const PARTITION_SOLUTES = {
    "caffeine": {
      name: "Kafein (Pürin Alkaloidi)",
      logP: -0.07,
      mw: 194.19,
      baseKD_EtOAc: 4.5,
      desc: "Çay ve kahve yapraklarından etil asetat ile yüksek verimle çekilir; organik fazda mükemmel saflaşır."
    },
    "vanillin": {
      name: "Vanilin (Aromatik Fenolik Aldehit)",
      logP: 1.21,
      mw: 152.15,
      baseKD_EtOAc: 12.0,
      desc: "Organik faza yüksek afinite gösterir; etil asetat ile tek basamakta bile >%85 geri kazanılır."
    },
    "benzoic_acid": {
      name: "Benzoik Asit (Aromatik Karboksilik Asit)",
      logP: 1.87,
      mw: 122.12,
      baseKD_EtOAc: 18.0,
      desc: "Asidik ortamda (pH < 3) tamamen nötr moleküle dönüşür ve organik faza neredeyse bütünüyle transfer olur."
    },
    "salicylic_acid": {
      name: "Salisilik Asit (2-Hidroksibenzoik Asit / BHA)",
      logP: 2.26,
      mw: 138.12,
      baseKD_EtOAc: 22.0,
      desc: "Asidik sulu çözeltilerden etil asetat veya eter ile rekor saflıkta çekilir."
    },
    "menthol": {
      name: "Mentol (Monoterpen Alkol)",
      logP: 3.15,
      mw: 156.27,
      baseKD_EtOAc: 35.0,
      desc: "Aşırı hidrofobiktir; apolar çözücülerde partition katsayısı devasadır."
    },
    "curcumin": {
      name: "Kurkumin (Zerdeçal Polifenolü)",
      logP: 3.29,
      mw: 368.38,
      baseKD_EtOAc: 45.0,
      desc: "Suda pratik olarak çözünmez; etil asetat ile sulu süspansiyondan tek seferde organik faza geçer."
    }
  };

  const EXTRACTION_SOLVENT_PROFILES = {
    "ethyl_acetate": {
      name: "Etil Asetat (EtOAc)",
      density: 0.902,
      bPoint: 77.1,
      greenRating: "Yeşil Çözücü (Gıda & İlaç Sınıfı)",
      relAffinity: 1.0,
      phasePosition: "Üst Faz (Su üzerinde yüzer)"
    },
    "diethyl_ether": {
      name: "Dietil Eter (Et2O)",
      density: 0.713,
      bPoint: 34.6,
      greenRating: "Klasik Uçucu Laboratuvar Çözücüsü",
      relAffinity: 1.15,
      phasePosition: "Üst Faz (Su üzerinde yüzer)"
    },
    "dcm": {
      name: "Diklormetan (DCM / Metilen Klorür)",
      density: 1.326,
      bPoint: 39.6,
      greenRating: "Klorlu Faz (Yüksek Ekstraksiyon Gücü)",
      relAffinity: 1.40,
      phasePosition: "Alt Faz (Sudan ağırdır, dibe çöker)"
    },
    "hexane": {
      name: "n-Heksan (Apolar Alkan)",
      density: 0.655,
      bPoint: 68.7,
      greenRating: "Lipid & Uçucu Yağ Seçici Çözücü",
      relAffinity: 0.45,
      phasePosition: "Üst Faz (Su üzerinde yüzer)"
    },
    "octanol": {
      name: "1-Oktanol (Lipofilik Faz)",
      density: 0.824,
      bPoint: 195.0,
      greenRating: "Standart LogP Referans Fazı",
      relAffinity: 1.25,
      phasePosition: "Üst Faz (Su üzerinde yüzer)"
    }
  };

  function calculateLiquidLiquidExtraction(soluteKey, solventKey, aqueousVolumeMl, totalSolventVolumeMl, stages) {
    const solKey = soluteKey || "caffeine";
    const solvKey = solventKey || "ethyl_acetate";
    const sol = PARTITION_SOLUTES[solKey] || PARTITION_SOLUTES["caffeine"];
    const solv = EXTRACTION_SOLVENT_PROFILES[solvKey] || EXTRACTION_SOLVENT_PROFILES["ethyl_acetate"];

    const V_aq = parseFloat(aqueousVolumeMl) || 100.0;
    const V_org_total = parseFloat(totalSolventVolumeMl) || 90.0;
    const n = Math.max(1, Math.min(6, parseInt(stages) || 3));

    const KD = sol.baseKD_EtOAc * solv.relAffinity;

    // Single stage with all solvent at once:
    // f_single = V_aq / (V_aq + KD * V_org_total)
    const f_single = V_aq / (V_aq + (KD * V_org_total));
    const yieldSinglePct = Math.round((1 - f_single) * 1000) / 10;

    // Multi-stage with solvent partitioned into n equal portions:
    const V_portion = V_org_total / n;
    const f_stage1 = V_aq / (V_aq + (KD * V_portion));
    const f_multi = Math.pow(f_stage1, n);
    const yieldMultiPct = Math.round((1 - f_multi) * 1000) / 10;

    const deltaGainPct = Math.round((yieldMultiPct - yieldSinglePct) * 10) / 10;

    const isOrganicTop = solv.density < 1.0;
    const phaseLocationDesc = isOrganicTop
      ? `🟡 ÜST FAZ (Özgül kütle: ${solv.density} g/mL < 1.0). Organik çözücü su üzerinde toplanır. Ayırma hunisinde musluk açılarak önce alt sulu faz boşaltılır, ardından üst organik ekstrakt tepeden alınır.`
      : `🔵 ALT FAZ (Özgül kütle: ${solv.density} g/mL > 1.0). Klorlu çözücü sudan ağırdır ve dibe çöker. Ayırma hunisinde musluk açılarak önce organik faz toplanır.`;

    const saltingOutAdvice = "💡 Emülsiyon Kırma & Tuzlama (Salting-Out): Sulu faza %5-10 oranında sofra tuzu (NaCl) eklenirse, suyun iyonik şiddeti artar; hidrofobik molekülün sudaki çözünürlüğü dramatik biçimde düşer (Setschenow etkisi) ve faz ayrışması berraklaşır.";

    return {
      soluteName: sol.name,
      soluteLogP: sol.logP,
      solventName: solv.name,
      solventDensity: solv.density,
      partitionCoefficientKD: Math.round(KD * 100) / 100,
      aqueousVolumeMl: V_aq,
      totalSolventVolumeMl: V_org_total,
      stagesCount: n,
      portionVolumeMl: Math.round(V_portion * 10) / 10,
      singleStageYieldPct: yieldSinglePct,
      multiStageYieldPct: yieldMultiPct,
      deltaGainPct: deltaGainPct,
      remainingInAqueousPct: Math.round(f_multi * 1000) / 10,
      phaseLocation: phaseLocationDesc,
      isOrganicTop: isOrganicTop,
      saltingOutAdvice: saltingOutAdvice,
      greenRating: solv.greenRating,
      scientificInsight: sol.desc
    };
  }

  // =========================================================================
  // 8.7. OSMOTIC PRESSURE & ISOTONIC SOLUTION BALANCER (VAN 'T HOFF EQUATION)
  // =========================================================================
  const OSMOTIC_SOLUTES = {
    "nacl": {
      name: "Sodyum Klorür (NaCl / Serum Fizyolojik)",
      mw: 58.44,
      i_factor: 1.85,
      E_value: 1.00,
      desc: "%0.9'luk çözeltisi (9 g/L) fizyolojik kan ve gözyaşı ile tam izotoniktir (308 mOsm/L)."
    },
    "glucose": {
      name: "D-Glukoz / Dekstroz Monohidrat",
      mw: 198.17,
      i_factor: 1.00,
      E_value: 0.16,
      desc: "%5'lik çözeltisi (50 g/L) kırmızı kan hücreleri için tam izotoniktir; eritrositleri patlatmaz."
    },
    "mannitol": {
      name: "Mannitol (Osmotik Taşıyıcı / Diüretik)",
      mw: 182.17,
      i_factor: 1.00,
      E_value: 0.18,
      desc: "Hücre zarlarından emilmez; kan dolaşımında osmotik çekim yaratarak ödem ve sıvı boşaltır."
    },
    "glycerol": {
      name: "Gliserin / Gliserol (Trihidrik Alkol)",
      mw: 92.09,
      i_factor: 1.00,
      E_value: 0.34,
      desc: "Topikal göz damlalarında ve kriyoprotektif solüsyonlarda osmotik koruyucu olarak kullanılır."
    },
    "kcl": {
      name: "Potasyum Klorür (KCl / Elektrolit Dengesi)",
      mw: 74.55,
      i_factor: 1.82,
      E_value: 0.76,
      desc: "Hücre içi temel katyondur; Ringer solüsyonu ve rehidrasyon sıvılarının vazgeçilmez tuzudur."
    },
    "sodium_citrate": {
      name: "Trisodyum Sitrat Dihidrat",
      mw: 294.10,
      i_factor: 2.80,
      E_value: 0.31,
      desc: "Kanın pıhtılaşmasını önleyen şelatör ve osmotik tamponlayıcı ajandır."
    }
  };

  function calculateOsmoticPressure(soluteKey, concentrationG_L, tempC, targetType) {
    const solKey = soluteKey || "nacl";
    const sol = OSMOTIC_SOLUTES[solKey] || OSMOTIC_SOLUTES["nacl"];
    const conc = parseFloat(concentrationG_L) !== undefined && !isNaN(parseFloat(concentrationG_L)) ? parseFloat(concentrationG_L) : 9.0;
    const T_C = parseFloat(tempC) !== undefined && !isNaN(parseFloat(tempC)) ? parseFloat(tempC) : 37.0;
    const T_K = T_C + 273.15;

    // Molarity (mol/L)
    const molarity = conc / sol.mw;

    // Osmolarity in mOsm/L: i * M * 1000
    const osmolarity_mOsm = Math.round(sol.i_factor * molarity * 1000 * 10) / 10;

    // Osmotic Pressure (Van 't Hoff): Pi = i * M * R * T (atm)
    const R_atm = 0.082057;
    const pi_atm = Math.round((sol.i_factor * molarity * R_atm * T_K) * 100) / 100;
    const pi_bar = Math.round((pi_atm * 1.01325) * 100) / 100;

    // Freezing point depression: deltaT_f = i * Kf * m (Kf = 1.86 °C*kg/mol)
    const deltaT_f = Math.round((sol.i_factor * 1.86 * molarity) * 1000) / 1000;
    const freezingPointC = -deltaT_f;

    // Tonicity status
    let tonicityStatus = "";
    let tonicityClass = "";
    let advice = "";

    // 100 mL tonicity adjustment calculation (NaCl equivalent method):
    const conc_pct = conc / 10.0;
    const nacl_equiv_in_100ml = conc_pct * sol.E_value;
    const nacl_needed_per_100ml = Math.round(Math.max(0, 0.9 - nacl_equiv_in_100ml) * 1000) / 1000;

    if (osmolarity_mOsm >= 280 && osmolarity_mOsm <= 320) {
      tonicityStatus = "🟢 İZOTONİK (Fizyolojik Denge - Hücreler için Güvenli)";
      tonicityClass = "badge-gold";
      advice = `Çözelti insan plazması ve gözyaşı ile tam dengededir (${osmolarity_mOsm} mOsm/L). Hücrelerde su girişi veya çıkışı olmaz; yanma veya tahriş yapmaz. Ekstra tonisite ayarlaması gerekmez.`;
    } else if (osmolarity_mOsm < 280) {
      tonicityStatus = "🔵 HİPOTONİK (Hücre Şişmesi & Hemoliz Riski)";
      tonicityClass = "badge-cyan";
      advice = `Çözelti plazmaya göre seyreltiktir (${osmolarity_mOsm} mOsm/L < 280). Hücre içine kontrolsüz su girerek patlama (hemoliz) riski taşır. Tam izotonik yapmak için 100 mL çözeltiye tam ${nacl_needed_per_100ml} g saf NaCl (veya ${(nacl_needed_per_100ml / 0.16).toFixed(2)} g Dekstroz) eklenmelidir.`;
    } else {
      tonicityStatus = "🔴 HİPERTONİK (Hücre Büzüşmesi / Plazmoliz)";
      tonicityClass = "badge-outline";
      advice = `Çözelti plazmaya göre aşırı derişiktir (${osmolarity_mOsm} mOsm/L > 320). Hücreden su çekerek büzüşmeye (krenasyon) yol açar. Burun açıcı hipertonik dekonjestan spreylerde veya ödem çözücü banyolarda kontrollü kullanılır; göz damlalarında yanma hissi yaratır.`;
    }

    return {
      soluteName: sol.name,
      soluteMW: sol.mw,
      vanTHoffFactor_i: sol.i_factor,
      naclEquivalent_E: sol.E_value,
      concentrationG_L: conc,
      temperatureC: T_C,
      osmolarity_mOsm_L: osmolarity_mOsm,
      osmoticPressureAtm: pi_atm,
      osmoticPressureBar: pi_bar,
      freezingPointC: freezingPointC,
      tonicityStatus: tonicityStatus,
      tonicityClass: tonicityClass,
      naclNeededPer100mlG: nacl_needed_per_100ml,
      scientificAdvice: advice,
      insight: sol.desc
    };
  }

  // =========================================================================
  // 8.8. FRACTIONAL COLUMN DISTILLATION & MCCABE-THIELE THEORETICAL PLATES
  // =========================================================================
  const DISTILLATION_BINARY_SYSTEMS = {
    "ethanol_water": {
      name: "Etanol - Su Karışımı",
      lightComp: "Etanol (C2H5OH)",
      heavyComp: "Su (H2O)",
      lightBoilC: 78.3,
      heavyBoilC: 100.0,
      avgAlpha: 2.45,
      azeotropeMolePct: 89.4,
      azeotropeDesc: "Etanol/su sistemi 89.4% mol (%95.6 hacim) oranında 78.15°C'de minimum kaynayan azeotrop oluşturur. Bu oranın üzerinde basit fraksiyonel damıtma çalışmaz."
    },
    "acetone_water": {
      name: "Aseton - Su Karışımı",
      lightComp: "Aseton (C3H6O)",
      heavyComp: "Su (H2O)",
      lightBoilC: 56.1,
      heavyBoilC: 100.0,
      avgAlpha: 8.50,
      azeotropeMolePct: null,
      azeotropeDesc: "Azeotrop oluşturmaz; yüksek bağıl uçuculuk (α = 8.5) sayesinde kısa bir kolonda bile %99 saflıkta aseton ayrıştırılır."
    },
    "methanol_water": {
      name: "Metanol - Su Karışımı",
      lightComp: "Metanol (CH3OH)",
      heavyComp: "Su (H2O)",
      lightBoilC: 64.7,
      heavyBoilC: 100.0,
      avgAlpha: 3.60,
      azeotropeMolePct: null,
      azeotropeDesc: "Azeotrop oluşturmaz; neredeyse ideal çözelti davranışı sergiler, kolayca saf bileşenlerine ayrılır."
    },
    "ethyl_acetate_water": {
      name: "Etil Asetat - Su (Heteroazeotrop)",
      lightComp: "Etil Asetat (C4H8O2)",
      heavyComp: "Su (H2O)",
      lightBoilC: 70.4,
      heavyBoilC: 100.0,
      avgAlpha: 4.80,
      azeotropeMolePct: 68.0,
      azeotropeDesc: "70.4°C'de heteroazeotropik kaynama yapar; toplanan kondensat soğutulduğunda kendiliğinden iki faza ayrılır."
    }
  };

  const PACKING_TYPES = {
    "structured_mesh": {
      name: "Paslanmaz Çelik Örgü Tel (Sulzer/Dixon)",
      hetp_cm: 2.8,
      pressureDrop: "Çok Düşük (0.2 mbar/tabak)",
      desc: "En yüksek kütle transfer verimi. 30 cm'lik laboratuvar kolonuna 10'dan fazla teorik tabak sığdırır."
    },
    "glass_beads": {
      name: "Cam Boncuk Dolgusu (3 mm Küreler)",
      hetp_cm: 4.5,
      pressureDrop: "Orta (0.6 mbar/tabak)",
      desc: "Ekonomik, inert ve her çözücüye dayanıklı standart kimya laboratuvarı dolgusu."
    },
    "raschig_rings": {
      name: "Seramik Raschig Halkaları (6-8 mm)",
      hetp_cm: 6.5,
      pressureDrop: "Düşük (0.4 mbar/tabak)",
      desc: "Büyük çaplı fraksiyonel damıtma imbikleri ve yarı endüstriyel kolonlar için dayanıklı dolgu."
    },
    "vigreux": {
      name: "Vigreux Girintili Cam Kolon (Dolgusuz)",
      hetp_cm: 9.0,
      pressureDrop: "Yok (Sıfıra yakın)",
      desc: "İçten cam dişli boğumlar; sıvı tutulumu sıfırdır, temizliği kolaydır ancak daha uzun kolon boyu gerektirir."
    }
  };

  function calculateFractionalDistillation(systemKey, feedMolePctA, distillateMolePctA, bottomsMolePctA, refluxRatioFactor, packingKey) {
    const sysKey = systemKey || "ethanol_water";
    const packKey = packingKey || "structured_mesh";
    const sys = DISTILLATION_BINARY_SYSTEMS[sysKey] || DISTILLATION_BINARY_SYSTEMS["ethanol_water"];
    const pack = PACKING_TYPES[packKey] || PACKING_TYPES["structured_mesh"];

    const zF = Math.max(0.01, Math.min(0.95, (parseFloat(feedMolePctA) || 10.0) / 100.0));
    let xD = Math.max(0.05, Math.min(0.999, (parseFloat(distillateMolePctA) || 85.0) / 100.0));
    const xB = Math.max(0.001, Math.min(0.50, (parseFloat(bottomsMolePctA) || 1.0) / 100.0));
    const R_factor = Math.max(1.1, Math.min(3.0, parseFloat(refluxRatioFactor) || 1.3));

    // Azeotrope limit check
    let azeotropeWarning = "";
    if (sys.azeotropeMolePct !== null && (xD * 100.0) >= sys.azeotropeMolePct) {
      xD = (sys.azeotropeMolePct - 0.5) / 100.0;
      azeotropeWarning = `⚠️ Hedef saflık azeotrop limitini (${sys.azeotropeMolePct}% mol) aşamaz! Hedef otomatik olarak %${(xD * 100).toFixed(1)} seviyesine çekildi. ${sys.azeotropeDesc}`;
    }

    const alpha = sys.avgAlpha;

    // 1. Fenske Equation for Minimum Theoretical Plates at Total Reflux (N_min):
    const num = (xD / (1.0 - xD)) / (xB / (1.0 - xB));
    const N_min = Math.max(1.0, Math.log(num) / Math.log(alpha));

    // 2. Minimum Reflux Ratio (R_min) using Underwood approximation for saturated liquid feed (q=1):
    let R_min = (1.0 / (alpha - 1.0)) * ((xD / zF) - (alpha * ((1.0 - xD) / (1.0 - zF))));
    if (R_min <= 0.1 || isNaN(R_min)) R_min = 0.5;

    // 3. Operating Reflux Ratio:
    const R_oper = Math.round(R_min * R_factor * 100) / 100;

    // 4. Gilliland / Eduljee Correlation for actual theoretical stages N_actual:
    const X_g = Math.max(0.001, Math.min(0.999, (R_oper - R_min) / (R_oper + 1.0)));
    const Y_g = 0.75 * (1.0 - Math.pow(X_g, 0.5668));
    const N_actual = Math.max(N_min, Math.round(((N_min + Y_g) / (1.0 - Y_g)) * 10) / 10);

    // 5. Packed Column Height:
    const height_cm = Math.round(N_actual * pack.hetp_cm * 10) / 10;

    return {
      systemName: sys.name,
      lightComponent: sys.lightComp,
      heavyComponent: sys.heavyComp,
      relativeVolatilityAlpha: alpha,
      feedMolePctA: Math.round(zF * 1000) / 10,
      distillateMolePctA: Math.round(xD * 1000) / 10,
      bottomsMolePctA: Math.round(xB * 1000) / 10,
      minTheoreticalPlates_Nmin: Math.round(N_min * 10) / 10,
      minRefluxRatio_Rmin: Math.round(R_min * 100) / 100,
      operatingRefluxRatio: R_oper,
      refluxRatioFactor: R_factor,
      actualTheoreticalStages: N_actual,
      packingName: pack.name,
      hetp_cm: pack.hetp_cm,
      requiredColumnHeightCm: height_cm,
      azeotropeNotice: azeotropeWarning || sys.azeotropeDesc,
      packingInsight: pack.desc
    };
  }

  // =========================================================================
  // 9. EVERYDAY / COLLOQUIAL TURKISH CHEMISTRY DICTIONARY
  // =========================================================================
  const TRADITIONAL_CHEM_DICTIONARY = [
    {
      colloquial: "Kezzap",
      scientific: "Nitrik Asit (%65 HNO3)",
      formula: "HNO3",
      category: "Asit / Baz",
      subId: "sub-acid-hno3",
      safety: "⚠️ Aşırı Korozif / Oksitleyici",
      everydayUsage: "Gümüş arıtma, altın saflaştırma (Aqua Regia bileşeni), metal gravür.",
      alchemicalName: "Aqua Fortis (Güçlü Su)",
      note: "Deriyi sarıya boyar (Ksantoprotein reaksiyonu). Asla organik çözücülerle kontrolsüz karıştırılmamalıdır."
    },
    {
      colloquial: "Tuz Ruhu",
      scientific: "Hidroklorik Asit (%18-37 HCl)",
      formula: "HCl",
      category: "Asit / Baz",
      subId: "sub-acid-hcl",
      safety: "⚠️ Korozif / Dumansı Asit",
      everydayUsage: "Kireç sökücü, pas temizleyici, lehim suyu hazırlama.",
      alchemicalName: "Spiritus Salis (Tuzun Ruhu)",
      note: "Çamaşır suyu ile asla karıştırılamaz! Anında öldürücü klor gazı (Cl2) çıkarır."
    },
    {
      colloquial: "Zaç Yağı",
      scientific: "Sülfürik Asit (%98 H2SO4)",
      formula: "H2SO4",
      category: "Asit / Baz",
      subId: "sub-acid-h2so4",
      safety: "⚠️ Aşırı Korozif / Su Tutucu Dehidratör",
      everydayUsage: "Akü asidi, gübre sanayii, kimyasal kurutucu.",
      alchemicalName: "Oleum Vitrioli (Yeşil Vitriol Ruhu)",
      note: "Şekere temas ettiğinde suyu anında emerek geride siyah gözenekli karbon köpüğü bırakır."
    },
    {
      colloquial: "Göztaşı",
      scientific: "Bakır(II) Sülfat Pentahidrat (CuSO4·5H2O)",
      formula: "CuSO4*5H2O",
      category: "Tuz / Mineral",
      subId: "sub-salt-cuso4",
      safety: "⚡ Seviye 2 (Yutulması Toksik)",
      everydayUsage: "Bordo bulamacı (bağ mantarı ilacı), havuz yosun önleyici, mavi kristal.",
      alchemicalName: "Vitriolum Caeruleum (Mavi Vitriol)",
      note: "Isıtıldığında 5 su molekülünü kaybederek beyaz toza döner; su damlatıldığında tekrar parlak maviye döner."
    },
    {
      colloquial: "Çamaşır Sodası / Soda Külü",
      scientific: "Sodyum Karbonat (Na2CO3)",
      formula: "Na2CO3",
      category: "Tuz / Mineral",
      subId: "sub-salt-na2co3",
      safety: "🟢 Güvenli / Hafif Bazik",
      everydayUsage: "Sert suları yumuşatma, doğal deterjan takviyesi, cam üretimi.",
      alchemicalName: "Sal Alkali Fixum (Sabit Alkali Tuz)",
      note: "Kalsiyum ve magnezyum iyonlarını çökerterek kireçli suları anında yumuşatır."
    },
    {
      colloquial: "Yemek Sodası / Karbonat",
      scientific: "Sodyum Bikarbonat (NaHCO3)",
      formula: "NaHCO3",
      category: "Tuz / Mineral",
      subId: "sub-salt-nahco3",
      safety: "🟢 Tamamen Güvenli (Gıda Tipi)",
      everydayUsage: "Hamur kabartma, mide asidini nötralize etme, diş temizliği.",
      alchemicalName: "Sal Aëratus (Gazlı Tuz)",
      note: "Asit (sirke veya limon) gördüğünde anında köpürerek karbondioksit (CO2) gazı çıkarır."
    },
    {
      colloquial: "Kireç Suyu / Sönmüş Kireç",
      scientific: "Kalsiyum Hidroksit (Ca(OH)2)",
      formula: "Ca(OH)2",
      category: "Asit / Baz",
      subId: "sub-base-caoh2",
      safety: "⚡ Seviye 2 (Göz Yakıcı)",
      everydayUsage: "Geleneksel tatlı yapımı (kabak tatlısını sertleştirme), harç, asit nötralizasyonu.",
      alchemicalName: "Calx Viva Extincta",
      note: "Karbondioksit gazı geçirildiğinde tekrar kireçtaşına (CaCO3) dönüşerek bulanır."
    },
    {
      colloquial: "Güherçile",
      scientific: "Potasyum Nitrat (KNO3)",
      formula: "KNO3",
      category: "Tuz / Mineral",
      subId: "sub-salt-kno3",
      safety: "⚠️ Güçlü Oksitleyici",
      everydayUsage: "Gübre, et koruyucu kür tuzu, pirotekni.",
      alchemicalName: "Sal Petrae (Taş Tuzu / Barut Tuzu)",
      note: "Isıtıldığında saf oksijen gazı salar, yanıcı maddelerin yanmasını şiddetlendirir."
    },
    {
      colloquial: "Nişadır",
      scientific: "Amonyum Klorür (NH4Cl)",
      formula: "NH4Cl",
      category: "Tuz / Mineral",
      subId: "sub-salt-nh4cl",
      safety: "🟢 Hafif Asidik Tuz",
      everydayUsage: "Bakır kalaylama lehim pastası, balgam söktürücü şuruplar, pil elektroliti.",
      alchemicalName: "Sal Ammoniac (Ammon Tuzu)",
      note: "Isıtıldığında erimeden doğrudan amonyak ve HCl gazına süblimleşir; soğuyunca tekrar birleşir."
    },
    {
      colloquial: "Şap",
      scientific: "Potasyum Alüminyum Sülfat (KAl(SO4)2·12H2O)",
      formula: "KAl(SO4)2*12H2O",
      category: "Tuz / Mineral",
      subId: "sub-salt-alum",
      safety: "🟢 Güvenli / Büzücü",
      everydayUsage: "Tıraş sonrası kan durdurucu taş, su arıtma koagülantı, dev kristal büyütme.",
      alchemicalName: "Alumen Plumosum",
      note: "Proteinleri anında koagüle ederek kılcal damar kanamalarını saniyeler içinde durdurur."
    },
    {
      colloquial: "Sudkostik (Kalıp Sabun Kostiği)",
      scientific: "Sodyum Hidroksit (NaOH)",
      formula: "NaOH",
      category: "Asit / Baz",
      subId: "sub-base-naoh",
      safety: "⚠️ Ağır Yakıcı / Korozif Baz",
      everydayUsage: "Lavabo açıcı, katı kalıp sabun yapımı, boya sökücü.",
      alchemicalName: "Lapis Causticus",
      note: "Suda çözünürken çok yüksek ekzotermik ısı (+50°C) üretir. Yağları sabuna dönüştürür."
    },
    {
      colloquial: "Potas Kostik (Arap Sabunu Kostiği)",
      scientific: "Potasyum Hidroksit (KOH)",
      formula: "KOH",
      category: "Asit / Baz",
      subId: "sub-base-koh",
      safety: "⚠️ Ağır Yakıcı / Korozif Baz",
      everydayUsage: "Sıvı arap sabunu üretimi, alkalik pil elektroliti.",
      alchemicalName: "Alkali Vegetabile Causticum",
      note: "Kalıp yerine akışkan jel sıvı sabun eldesinde tek alternatiftir."
    },
    {
      colloquial: "Beyaz Sirke / Sirke Ruhu",
      scientific: "Asetik Asit (%5-80 CH3COOH)",
      formula: "CH3COOH",
      category: "Asit / Baz",
      subId: "sub-sirke-beyaz",
      safety: "🟢 Seyreltik Güvenli / Derişik Tahriş Edici",
      everydayUsage: "Kireç çözme, salata sosu, doğal temizlik, spajirik ekstraksiyon.",
      alchemicalName: "Acetum Radicale (Kök Sirke)",
      note: "Kireçtaşını (CaCO3) anında çözerek suda çözünen kalsiyum asetat ve CO2 yapar."
    },
    {
      colloquial: "Arap Sabunu",
      scientific: "Potasyum Sabunu (Yumuşak Potas Sabunu)",
      formula: "C17H33COOK",
      category: "Gündelik & Ev Ürünü",
      subId: "sub-soap-potassium",
      safety: "🟢 Biyolojik Olarak Parçalanabilir",
      everydayUsage: "Ahşap zemin temizliği, yaprak biti böcek ilacı (insektisit sabun).",
      alchemicalName: "Sapo Mollis",
      note: "Böceklerin kütikula tabakasındaki mumsu tabakayı çözerek dehidrasyona uğratır."
    },
    {
      colloquial: "Boraks",
      scientific: "Sodyum Tetraborat Dekahidrat (Na2B4O7·10H2O)",
      formula: "Na2B4O7*10H2O",
      category: "Tuz / Mineral",
      subId: "sub-salt-borax",
      safety: "🟢 Güvenli Mineral (Göz Korunmalı)",
      everydayUsage: "Doğal çamaşır leke çıkarıcı, lehimleme boraksı, kristal büyütme, slime polimerleşme.",
      alchemicalName: "Chrysocolla / Sal Boracis",
      note: "Metalleri eritirken cürufu bağlayarak cüruf önleyici lehim akısı (flux) görevi görür."
    },
    {
      colloquial: "Sönmemiş Kireç",
      scientific: "Kalsiyum Oksit (CaO)",
      formula: "CaO",
      category: "Asit / Baz",
      subId: "sub-base-cao",
      safety: "⚠️ Aşırı Reaktif / Şiddetli Ekzotermik",
      everydayUsage: "Geleneksel kireç badana hazırlama, harç üretimi, su kurutucu dehidratör.",
      alchemicalName: "Calx Viva (Canlı Kireç)",
      note: "Su ile buluştuğunda suyu kaynatacak kadar yüksek ekzotermik ısı (+120°C) çıkararak sönmüş kirece Ca(OH)2 dönüşür."
    },
    {
      colloquial: "Alçıtaşı / Jips",
      scientific: "Kalsiyum Sülfat Dihidrat (CaSO4·2H2O)",
      formula: "CaSO4*2H2O",
      category: "Tuz / Mineral",
      subId: "sub-min-gypsum",
      safety: "🟢 Toksik Değil / Güvenli",
      everydayUsage: "Kalıp alçısı, inşaat sıvası, toprak pH ve kalsiyum düzenleyici, tofu pıhtılaştırıcı.",
      alchemicalName: "Lapis Gypsus",
      note: "150°C'ye ısıtıldığında 1.5 su molekülünü kaybederek pişmiş alçıya (CaSO4·0.5H2O) döner; su katıldığında tekrar sert taş olur."
    },
    {
      colloquial: "Kireçtaşı / Tebeşir / Mermer Tozu",
      scientific: "Kalsiyum Karbonat (CaCO3)",
      formula: "CaCO3",
      category: "Tuz / Mineral",
      subId: "sub-salt-caco3",
      safety: "🟢 Tamamen Güvenli",
      everydayUsage: "Yazı tebeşiri, diş macunu aşındırıcısı, kalsiyum takviyesi, toprak asitliği düşürücü.",
      alchemicalName: "Calx Fixa",
      note: "Asitle (HCl veya sirke) karşılaştığında anında fokurdayarak CO2 gazı salar."
    },
    {
      colloquial: "Glayber Tuzu / Mucizevi Tuz",
      scientific: "Sodyum Sülfat Dekahidrat (Na2SO4·10H2O)",
      formula: "Na2SO4*10H2O",
      category: "Tuz / Mineral",
      subId: "sub-salt-na2so4",
      safety: "🟢 Güvenli Tuz",
      everydayUsage: "Toz deterjan dolgu maddesi, laksatif tıbbi tuz, termal ısı depolama tuzları.",
      alchemicalName: "Sal Mirabile Glauberi",
      note: "Johann Rudolf Glauber tarafından 1625'te bulunan, 32.4°C'de kendi kristal suyunda eriyen tuz."
    },
    {
      colloquial: "Kral Suyu",
      scientific: "Aqua Regia (Hacimce 3 Kısım HCl + 1 Kısım HNO3 Karışımı)",
      formula: "HNO3+3HCl",
      category: "Asit / Baz",
      subId: "sub-acid-aquaregia",
      safety: "⚠️ Aşırı Korozif / Tehlikeli Gaz Çıkarıcı",
      everydayUsage: "Soy metalleri (Altın Au, Platin Pt) çözen ve saflaştıran tek kimyasal çözücü.",
      alchemicalName: "Aqua Regia (Kraliyet Suyu)",
      note: "Altını tetrakloroaurik asit [HAuCl4] formunda tamamen eritir; gümüş ise suda çözünmeyen AgCl çökeltisi verir."
    },
    {
      colloquial: "Acı Tuz / İngiliz Tuzu",
      scientific: "Magnezyum Sülfat Heptahidrat (MgSO4·7H2O)",
      formula: "MgSO4*7H2O",
      category: "Tuz / Mineral",
      subId: "sub-salt-mgso4",
      safety: "🟢 Güvenli Mineral Tuz",
      everydayUsage: "Rahatlatıcı mineral banyo tuzu, kas gevşetici, bitki klorofil magnezyum besini.",
      alchemicalName: "Sal Seidlitzense",
      note: "Epsom maden sularından elde edilen, iğnemsi berrak kristaller oluşturan ve suya hızla magnezyum veren tuz."
    },
    {
      colloquial: "Kül Suyu / Potasa",
      scientific: "Potasyum Karbonat (K2CO3)",
      formula: "K2CO3",
      category: "Asit / Baz",
      subId: "sub-salt-k2co3",
      safety: "⚡ Seviye 2 (Bazik / Göz Yakıcı)",
      everydayUsage: "Eski tip geleneksel arap sabunu, şarap fıçısı temizliği, cam mayası, spajirik bitki külü.",
      alchemicalName: "Sal Tartari / Alkali Vegetabile",
      note: "Odun külünün sıcak suda demlenip süzülmesiyle elde edilen antik doğal alkali kaynağıdır."
    },
    {
      colloquial: "Şili Güherçilesi",
      scientific: "Sodyum Nitrat (NaNO3)",
      formula: "NaNO3",
      category: "Tuz / Mineral",
      subId: "sub-salt-nano3",
      safety: "⚠️ Güçlü Oksitleyici",
      everydayUsage: "Azotlu tarım gübresi, cam rengi açıcı, et koruyucu kür tuzu.",
      alchemicalName: "Nitrum Nativum",
      note: "Nem çekici özelliği yüksek olduğundan barut için potasyum nitrat (KNO3) kadar uygun değildir, gübre sanayiinde kullanılır."
    },
    {
      colloquial: "Karbolik Asit",
      scientific: "Fenol (C6H5OH)",
      formula: "C6H5OH",
      category: "Organik / Çözücü",
      subId: "sub-org-phenol",
      safety: "⚠️ Toksik / Cilt Yakıcı Antiseptik",
      everydayUsage: "Tarihin ilk cerrahi antiseptiği (Lister dönemi), bakalit plastik sentezi, fenolik reçineler.",
      alchemicalName: "Acidum Phenicum",
      note: "Deride kalıcı beyaz kimyasal yanıklar yapar; taş kömürü katranından damıtılarak keşfedilmiştir."
    },
    {
      colloquial: "Tentürdiyot",
      scientific: "İyot & Potasyum İyodür Alkol Çözeltisi (%2 I2 + %2.5 KI + %50 Etanol)",
      formula: "I2+KI+C2H5OH",
      category: "Kozmetik & Biyoaktif",
      subId: "sub-act-iodine-tincture",
      safety: "⚡ Seviye 2 (Deri Dezenfektanı / Yutulmaz)",
      everydayUsage: "Cerrahi yara antiseptiği, cilt mikrop öldürücü, nişasta varlığı tespiti.",
      alchemicalName: "Tinctura Iodi",
      note: "Nişasta içeren ortamlarda anında koyu lacivert-mavi kompleks verir."
    },
    {
      colloquial: "Kükürt Çiçeği",
      scientific: "Süblime Elementel Kükürt Tozu (S8)",
      formula: "S8",
      category: "Tuz / Mineral",
      subId: "sub-min-sulfur",
      safety: "🟢 Yanıcı / Düşük Toksisite",
      everydayUsage: "Bağ ve bahçe külleme mantarı ilacı, akne ve egzama kükürtlü sabunları, vulkanizasyon.",
      alchemicalName: "Flores Sulphuris (Simyasal Kükürt / Ruh)",
      note: "Simyada yanıcılığı, ruhu ve cıvayla birleşerek tüm metalleri oluşturan temel erkeksi prensibi temsil eder."
    },
    {
      colloquial: "Süblime Korozif",
      scientific: "Cıva(II) Klorür (HgCl2)",
      formula: "HgCl2",
      category: "Tuz / Mineral",
      subId: "sub-mercury-hgcl2",
      safety: "☣️ AŞIRI TOKSİK / ÖLDÜRÜCÜ ZEHİR",
      everydayUsage: "Tarihsel kadim antiseptik (artık yasaktır), ahşap koruyucu emprenye, fotoğrafçılık.",
      alchemicalName: "Mercurius Sublimatus Corrosivus",
      note: "Suda yüksek oranda çözünür, deriden hızla emilir ve ölümcül böbrek yetmezliğine yol açar."
    },
    {
      colloquial: "Kalomel / Tatlı Cıva",
      scientific: "Cıva(I) Klorür (Hg2Cl2)",
      formula: "Hg2Cl2",
      category: "Tuz / Mineral",
      subId: "sub-mercury-hg2cl2",
      safety: "⚠️ Toksik Cıva Tuzu",
      everydayUsage: "Tarihsel elektrokimyasal referans kalomel elektrotu, eski laksatif tıp ilacı.",
      alchemicalName: "Mercurius Dulcis (Tatlı Cıva)",
      note: "Suda neredeyse hiç çözünmez (HgCl2'den farkı budur), ışığa maruz kalınca metalik cıva ve korozif süblimeye ayrışır."
    },
    {
      colloquial: "Zencefre / Şingref",
      scientific: "Cıva(II) Sülfür (Kırmızı Vermilyon Pigmenti, HgS)",
      formula: "HgS",
      category: "Tuz / Mineral",
      subId: "sub-mercury-hgs",
      safety: "⚠️ Cıva İçerir / Isıtıldığında Toksik Buhar",
      everydayUsage: "Tarihi minyatür ve yağlı boya kırmızısı (Vermilyon), Çin simyası ölümsüzlük iksiri (Waidan).",
      alchemicalName: "Cinnabaris / Dragon's Blood Mineral",
      note: "Simyacılar bu kırmızı taşı fırınlayarak içindeki saf gümüş rengi cıvayı damıtmışlardır."
    },
    {
      colloquial: "Amonyak Ruhu",
      scientific: "Seyreltik Amonyum Hidroksit (%5-10 NH4OH / NH3(aq))",
      formula: "NH4OH",
      category: "Asit / Baz",
      subId: "sub-base-nh4oh",
      safety: "⚠️ Keskin Kokulu / Solunum Tahriş Edici",
      everydayUsage: "Cam silme spreyleri, halı leke çıkarıcı, bayılanları ayıltma kokusu.",
      alchemicalName: "Spiritus Salis Ammoniaci",
      note: "Uçucu amonyak gazı solunduğunda trigeminal siniri uyararak ani uyanma refleksini tetikler."
    },
    {
      colloquial: "Çamaşır Suyu",
      scientific: "Sodyum Hipoklorit (%4-5 NaClO)",
      formula: "NaClO",
      category: "Gündelik & Ev Ürünü",
      subId: "sub-clean-bleach",
      safety: "⚠️ Güçlü Ağartıcı / Oksitleyici",
      everydayUsage: "Hijyenik dezenfeksiyon, beyazlatma, mikroorganizma imhası.",
      alchemicalName: "Eau de Javel (Javel Suyu)",
      note: "Tuz ruhu veya asitlerle ASLA karıştırılamaz! Anında boğucu sarı-yeşil klor gazı (Cl2) çıkarır."
    },
    {
      colloquial: "Kireç Sütü",
      scientific: "Kalsiyum Hidroksit Doymuş Süspansiyonu (Ca(OH)2)",
      formula: "Ca(OH)2",
      category: "Asit / Baz",
      subId: "sub-base-milk-of-lime",
      safety: "⚡ Seviye 2 (Göz Yakıcı Bazik)",
      everydayUsage: "Geleneksel duvar badanası, şeker fabrikalarında pancar şerbeti arıtma, asit nötralizasyonu.",
      alchemicalName: "Lac Calcis",
      note: "Havadan CO2 çektikçe kalsiyum karbonata dönüşerek beyaz sert ve suya dayanıklı bir tabaka örer."
    },
    {
      colloquial: "Aseton / Oje Çıkarıcı",
      scientific: "Propan-2-on / Dimetil Keton (CH3COCH3)",
      formula: "CH3COCH3",
      category: "Organik / Çözücü",
      subId: "sub-org-acetone",
      safety: "⚠️ Çok Yanıcı Uçucu Çözücü",
      everydayUsage: "Oje çıkarma, laboratuvar cam malzemesi kurutma, yağ ve reçine çözücü.",
      alchemicalName: "Spiritus Saturni (Satürn Ruhu)",
      note: "Kurşun asetatın kuru damıtılmasıyla keşfedilmiştir; su ve çoğu organik çözücüyle her oranda karışır."
    },
    {
      colloquial: "Güvercin Gübresi / Güherçile Toprağı",
      scientific: "Ham Potasyum Nitrat & Üre Karışımı (KNO3 + CH4N2O)",
      formula: "KNO3+CH4N2O",
      category: "Tuz / Mineral",
      subId: "sub-salt-guano-nitrate",
      safety: "🟢 Biyolojik Kaynak",
      everydayUsage: "Osmanlı döneminde baruthane güherçilesi üretimi, yüksek azotlu tarım gübresi.",
      alchemicalName: "Sal Nitri Crudum",
      note: "Eski simyacılar güvercinliklerden toplanan gübreleri kül suyuyla kaynatıp süzerek saf güherçile kristalleri üretmiştir."
    },
    {
      colloquial: "Korindon / Zımpara Taşı",
      scientific: "Alüminyum Oksit (Al2O3)",
      formula: "Al2O3",
      category: "Tuz / Mineral",
      subId: "sub-min-corundum",
      safety: "🟢 İnert / Mohs 9 Sertlik",
      everydayUsage: "Metal parlatma, zımpara kağıdı, refrakter yüksek fırın tuğlası, yapay yakut/safir.",
      alchemicalName: "Lapis Smiris",
      note: "Elmastan sonra doğadaki en sert 2. mineraldir (Mohs 9); erime noktası 2072°C'dir."
    },
    {
      colloquial: "Beyaz Kurşun / Üstübeç",
      scientific: "Bazik Kurşun Karbonat (2PbCO3·Pb(OH)2)",
      formula: "2PbCO3*Pb(OH)2",
      category: "Tuz / Mineral",
      subId: "sub-lead-white",
      safety: "☣️ AŞIRI TOKSİK AĞIR METAL",
      everydayUsage: "Klasik yağlı boya beyaz pigmenti (artık yasaktır), tarihi seramik sırları.",
      alchemicalName: "Cerussa (Ak Kurşun)",
      note: "Rönesans ressamlarının kullandığı en parlak örtücü beyazdır; vücutta birikerek ölümcül kurşun zehirlenmesine yol açar."
    },
    {
      colloquial: "Sülyen / Minyum",
      scientific: "Kurşun(II,IV) Oksit (Pb3O4)",
      formula: "Pb3O4",
      category: "Tuz / Mineral",
      subId: "sub-lead-minium",
      safety: "☣️ TOKSİK AĞIR METAL",
      everydayUsage: "Tarihi gemi pas önleyici astar boyası, kırmızı minyatür boyası.",
      alchemicalName: "Minium Rubrum",
      note: "Metalin paslanmasını elektrokimyasal olarak pasifleştirir; ateşle ısıtıldığında sarı litaja (PbO) döner."
    },
    {
      colloquial: "Yeşil Vitriol / Kıbrıs Taşı / Bakraç Taşı",
      scientific: "Demir(II) Sülfat Heptahidrat (FeSO4·7H2O)",
      formula: "FeSO4*7H2O",
      category: "Tuz / Mineral",
      subId: "sub-salt-feso4",
      safety: "🟢 Düşük Toksisite",
      everydayUsage: "Tarihi demir mazı mürekkebi (ortaçağ el yazmaları), kumaş mordan boyama, çim yosun önleyici.",
      alchemicalName: "Vitriolum Viride (Yeşil Aslan)",
      note: "Meşe mazısı taneni ile karıştığında anında silinmez kömür siyahı demir-tannat mürekkebi oluşturur."
    },
    {
      colloquial: "Ak Vitriol / Beyaz Vitriol",
      scientific: "Çinko Sülfat Heptahidrat (ZnSO4·7H2O)",
      formula: "ZnSO4*7H2O",
      category: "Tuz / Mineral",
      subId: "sub-salt-znso4",
      safety: "⚡ Seviye 2 (Göz Tahrişi)",
      everydayUsage: "Göz banyolarında tarihsel antiseptik, çinko gübresi, elektrolitik çinko kaplama.",
      alchemicalName: "Vitriolum Album",
      note: "Simyacılar tarafından beyaz vitriol olarak adlandırılan, berrak iğnemsi kristaller veren çinko tuzu."
    },
    {
      colloquial: "Pirit / Aptal Altını",
      scientific: "Demir Disülfür (FeS2)",
      formula: "FeS2",
      category: "Tuz / Mineral",
      subId: "sub-min-pyrite",
      safety: "🟢 Kararlı Mineral",
      everydayUsage: "Sülfürik asit üretim hammaddesi, çakmak taşı kıvılcımı, mineral koleksiyonu.",
      alchemicalName: "Pyrites (Ateş Taşı)",
      note: "Çeliğe vurulduğunda kıvılcım çıkarır; altına benzer parlak pirinç sarısı rengi sebebiyle acemileri aldatır."
    },
    {
      colloquial: "Hematit / Pas Taşı",
      scientific: "Demir(III) Oksit (Fe2O3)",
      formula: "Fe2O3",
      category: "Tuz / Mineral",
      subId: "sub-min-hematite",
      safety: "🟢 Toksik Değil",
      everydayUsage: "Demir-çelik sanayiinin birincil demir cevheri, kırmızı aşı boyası (kırmızı astar).",
      alchemicalName: "Lapis Haematites (Kan Taşı)",
      note: "Siyah parlak metalik görünse de porselene sürtüldüğünde arkasında kan kırmızısı çizgi bırakır."
    },
    {
      colloquial: "Malakit / Dağ Yeşili",
      scientific: "Bazik Bakır Karbonat (Cu2CO3(OH)2)",
      formula: "Cu2CO3(OH)2",
      category: "Tuz / Mineral",
      subId: "sub-min-malachite",
      safety: "⚡ Bakır İçerir",
      everydayUsage: "Tarihi yeşil resim pigmenti, süs ve heykel taşı, bakır ergitme cevheri.",
      alchemicalName: "Chrysocolla Viridis",
      note: "Asitle temas ettiğinde CO2 köpürerek berrak mavi-yeşil bakır çözeltisine dönüşür."
    },
    {
      colloquial: "Azurit / Dağ Mavisi",
      scientific: "Bazik Bakır Karbonat (Cu3(CO3)2(OH)2)",
      formula: "Cu3(CO3)2(OH)2",
      category: "Tuz / Mineral",
      subId: "sub-min-azurite",
      safety: "⚡ Bakır İçerir",
      everydayUsage: "Tarihi Ortaçağ ve Rönesans lacivert-mavi tavan ve gökyüzü fresk boyası.",
      alchemicalName: "Lapis Armenius (Ermeni Taşı)",
      note: "Zamanla ve nemle yüzeyden su alarak malakite (yeşile) dönüşür; eski tablolardaki gökyüzünün yeşermesi bundandır."
    },
    {
      colloquial: "Klor Gazı / Kostik Gaz",
      scientific: "Elementel Klor Gazı (Cl2)",
      formula: "Cl2",
      category: "Asit / Baz",
      subId: "sub-gas-cl2",
      safety: "☣️ ÖLDÜRÜCÜ BOĞUCU GAZ",
      everydayUsage: "Endüstriyel su arıtma, PVC üretimi (yalnızca kapalı endüstriyel sistemlerde).",
      alchemicalName: "Spiritus Haloidis",
      note: "Çamaşır suyu ile tuz ruhu karıştırıldığında derhal açığa çıkar; akciğerde su ile birleşip asite dönüşür."
    },
    {
      colloquial: "Azot Dioksit / Nitroz Gazı",
      scientific: "Azot Dioksit Gazı (NO2)",
      formula: "NO2",
      category: "Asit / Baz",
      subId: "sub-gas-no2",
      safety: "☣️ TOKSİK KIZIL-KAHVERENGİ GAZ",
      everydayUsage: "Kezzap üretimi ara gazı, roket yakıtı oksitleyicisi.",
      alchemicalName: "Fumus Nitri (Kezzap Dumanı)",
      note: "Metaller kezzap ile çözünürken çıkan zehirli kızıl-kahverengi dumandır; solunduğunda akciğer ödemi yapar."
    },
    {
      colloquial: "Çivit / İndigo Mavisi",
      scientific: "İndigotin (C16H10N2O2)",
      formula: "C16H10N2O2",
      category: "Bitkisel & Spajirik",
      subId: "sub-bot-indigo",
      safety: "🟢 Doğal Bitkisel Pigment",
      everydayUsage: "Tarihi Türk mavisi kumaş boyası, çamaşır sararmasını giderici çivit tozu.",
      alchemicalName: "Indicum / Indigofera Coerulea",
      note: "Çivit otunun fermente edilmesiyle indirgenip çözünür beyaz leuco-indigo haline geçer; havayla temas edince masmavi oksitlenir."
    },
    {
      colloquial: "Karasaban Taşı / Realgar",
      scientific: "Tetraarsenik Tetrasülfür (As4S4)",
      formula: "As4S4",
      category: "Tuz / Mineral",
      subId: "sub-min-realgar",
      safety: "☣️ TOKSİK ARSENİK MİNERALİ",
      everydayUsage: "Tarihi havai fişek pirotekniği, deri tabaklama tüy dökücüsü (artık yasaktır).",
      alchemicalName: "Sandaraca Graecorum (Kırmızı Arsenik)",
      note: "Işığa maruz kaldığında parçalanarak sarı orpiment tozuna dönüşür; simyacılar bu kristali felsefe taşının kırmızı kükürt prensibiyle ilişkilendirmiştir."
    },
    {
      colloquial: "Zırnık / Auripigment (Orpiment)",
      scientific: "Diarsenik Trisülfür (As2S3)",
      formula: "As2S3",
      category: "Tuz / Mineral",
      subId: "sub-min-orpiment",
      safety: "☣️ TOKSİK AĞIR METAL BİLEŞİĞİ",
      everydayUsage: "Tarihsel altın yaldız taklidi resim boyası (Auripigment), Osmanlı hamam zırnığı.",
      alchemicalName: "Auripigmentum (Altın Boyası)",
      note: "İçinde altın saklandığı inancıyla simyacılar tarafından yüzyıllarca imbiklerde kavrulmuştur."
    },
    {
      colloquial: "Bitki Potası / Sedefotu Tuzu",
      scientific: "Saf Potasyum Karbonat (K2CO3)",
      formula: "K2CO3",
      category: "Tuz / Mineral",
      subId: "sub-salt-potash",
      safety: "⚡ Seviye 2 (Hafif Kostik / Tahriş Edici)",
      everydayUsage: "Geleneksel cam ergitme akısı, sıvı Arap sabunu yapımı, tarihi ekmek kabartıcısı.",
      alchemicalName: "Sal Tartari / Lapis Kalinus",
      note: "Odun küllerinin suda kaynatılıp süzüldükten sonra tavada buharlaştırılmasıyla elde edilen kadim alkali tuzdur."
    },
    {
      colloquial: "Sirke Ruhu / Glasiyal Asit",
      scientific: "Susuz Asetik Asit (%99.8 CH3COOH)",
      formula: "CH3COOH",
      category: "Asit / Baz",
      subId: "sub-acid-acetic-glacial",
      safety: "⚠️ Aşırı Korozif / 16.6°C'de Donar",
      everydayUsage: "Konsantre kireç sökücü, endüstriyel selüloz asetat ve polimer üretimi.",
      alchemicalName: "Acetum Radicatum (Köklenmiş Sirke)",
      note: "16.6°C'nin altında saf buz benzeri kristaller halinde donduğu için 'Glasiyal' (Buzul) olarak adlandırılır."
    },
    {
      colloquial: "İspirto / Mavi İspirto",
      scientific: "Denatüre Etil Alkol (%96 C2H5OH + Piridin + Metilen Mavisi)",
      formula: "C2H5OH",
      category: "Organik / Çözücü",
      subId: "sub-org-ethanol-denat",
      safety: "⚠️ Çok Yanıcı / İçilmez Zehirli",
      everydayUsage: "İspirto ocağı yakıtı, fondu ocağı, cam temizleme, tarihi şellak cila çözücüsü.",
      alchemicalName: "Spiritus Vini Denaturatus",
      note: "İçilmesini önlemek amacıyla içine mavi boya ve kusturucu/acı maddeler katılmış etil alkoldür."
    },
    {
      colloquial: "Sud-Kostik",
      scientific: "Katı Sodyum Hidroksit Pul Payet (%99 NaOH)",
      formula: "NaOH",
      category: "Asit / Baz",
      subId: "sub-base-naoh",
      safety: "⚠️ AŞIRI YAKICI BAZ / KÖRLÜK RİSKİ",
      everydayUsage: "Lavabo ve tıkanık boru açıcı, soğuk proses kalıp sabun yapımı, biyodizel üretimi.",
      alchemicalName: "Lixivium Causticum Sodae",
      note: "Suya atıldığında kaynama derecesine yakın (+55°C) ekzotermik ısı üretir; deriyi saniyeler içinde sabunlaştırıp eritir."
    },
    {
      colloquial: "Potas-Kostik",
      scientific: "Katı Potasyum Hidroksit (%90 KOH)",
      formula: "KOH",
      category: "Asit / Baz",
      subId: "sub-base-koh",
      safety: "⚠️ AŞIRI YAKICI BAZ / HİGROSKOPİK",
      everydayUsage: "Arap sabunu ve sıvı jel sabun üretimi, alkalin piller, tarımsal potasyumlu gübreler.",
      alchemicalName: "Lixivium Causticum Kalinum",
      note: "Havadan o kadar hızlı nem ve CO2 çeker ki açıkta bırakıldığında dakikalar içinde kendi suyunda eriyip sıvılaşır."
    },
    {
      colloquial: "Gaz Yağı / Lamba Yağı",
      scientific: "Kerozen Fraksiyonu (C10H22 - C16H34)",
      formula: "C12H26",
      category: "Organik / Çözücü",
      subId: "sub-org-kerosene",
      safety: "⚠️ Yanıcı Petrol Distilatı",
      everydayUsage: "Klasik fitilli gaz lambaları, paslı vida gevşetici, zift ve katran temizleyici.",
      alchemicalName: "Oleum Petrae Clarum",
      note: "Ham petrolün 150-275°C fraksiyonel damıtmasıyla elde edilir; fitilde is yapmadan parlak sarı alevle yanar."
    },
    {
      colloquial: "Dumanlı Kezzap / Güherçile Ruhu",
      scientific: "Dumanlı Kırmızı Nitrik Asit (%98-100 HNO3 + NO2)",
      formula: "HNO3(fuming)",
      category: "Asit / Baz",
      subId: "sub-acid-fuming-hno3",
      safety: "☣️ AŞIRI OKSİTLEYİCİ / KENDİLİĞİNDEN ALEV ALDIRIR",
      everydayUsage: "Roket itici yakıtı oksitleyicisi, tarihi patlayıcı sentezi.",
      alchemicalName: "Spiritus Nitri Fumans",
      note: "Talaş veya alkole temas ettiğinde dışarıdan ateş gerekmeksizin doğrudan alev alır; havada boğucu kızıl duman saçar."
    },
    {
      colloquial: "Acı Tuz / İngiliz Tuzu",
      scientific: "Magnezyum Sülfat Heptahidrat (MgSO4·7H2O)",
      formula: "MgSO4*7H2O",
      category: "Tuz / Mineral",
      subId: "sub-salt-epsom",
      safety: "🟢 Düşük Toksisite / Gıda-Banyo Sınıfı",
      everydayUsage: "Kas rahatlatıcı banyo tuzu, ayak banyosu detoksu, bitkilerde magnezyum eksikliği gübresi.",
      alchemicalName: "Sal Amarum (Acı Tuz / Epsom)",
      note: "İlk kez İngiltere'nin Epsom kasabasındaki maden suyundan kristallendirilmiştir; magnezyum osmotik basınçla ödem çözer."
    },
    {
      colloquial: "Sönmemiş Kireç",
      scientific: "Kalsiyum Oksit (CaO)",
      formula: "CaO",
      category: "Tuz / Mineral",
      subId: "sub-min-quicklime",
      safety: "⚠️ AŞIRI EKZOTERMİK YAKICI",
      everydayUsage: "Çimento ve harç sanayii, kireç söndürme, baca gazı kükürt arıtma.",
      alchemicalName: "Calx Viva (Canlı Kireç)",
      note: "Kireçtaşının fırında 900°C'de kalsine edilmesiyle oluşur; suyla buluştuğunda suyu anında kaynatarak buhar patlaması yapabilir."
    },
    {
      colloquial: "Şap Suyu / Kan Taşı Suyu",
      scientific: "Doymuş Potasyum Şapı Çözeltisi (KAl(SO4)2(aq))",
      formula: "KAl(SO4)2",
      category: "Tuz / Mineral",
      subId: "sub-salt-alum-water",
      safety: "🟢 Büzücü / Düşük Toksisite",
      everydayUsage: "Tıraş sonrası kan durdurucu hemostatik taş, doğal ter kokusu önleyici kristal deodorant.",
      alchemicalName: "Aqua Aluminis",
      note: "Proteinleri denatüre ederek kan damarlarını büzer ve mikro kanamaları saniyeler içinde pıhtılaştırır."
    },
    {
      colloquial: "Nişadır Dumanı",
      scientific: "Amonyum Klorür Termal Buharı (NH3 + HCl ➔ NH4Cl)",
      formula: "NH4Cl",
      category: "Tuz / Mineral",
      subId: "sub-salt-sal-ammoniac-fume",
      safety: "⚠️ Solunum Tahriş Edici Beyaz Duman",
      everydayUsage: "Bakır kap kalaylama lehim pastası, galvanizleme daldırma banyosu.",
      alchemicalName: "Fumus Salis Ammoniaci",
      note: "Isıtıldığında doğrudan süblimleşir; havada amonyak ve tuz ruhu gazlarına ayrışıp soğuk yüzeyde yeniden kar beyazı kristal örer."
    },
    {
      colloquial: "Litraj / Mürdesenk",
      scientific: "Kurşun(II) Oksit (Sarı Kurşun Monoksit, PbO)",
      formula: "PbO",
      category: "Tuz / Mineral",
      subId: "sub-lead-litharge",
      safety: "☣️ TOKSİK AĞIR METAL OKSİTİ",
      everydayUsage: "Tarihi kurşunlu kristal cam yapımı, kurutucu yağ vernikleri, geleneksel kurşun flaster merhemi.",
      alchemicalName: "Lithargyrum Aurum (Altın Litajı)",
      note: "Zeytinyağı ile kaynatıldığında yağ asitleriyle reaksiyona girip sert yapışkan kurşun sabunları (Diachylon flasteri) oluşturur."
    },
    {
      colloquial: "Kükürt Ruhu / Sülfüröz Gaz Çözeltisi",
      scientific: "Sülfüröz Asit / Kükürt Dioksit Çözeltisi (H2SO3 / SO2(aq))",
      formula: "H2SO3",
      category: "Asit / Baz",
      subId: "sub-acid-h2so3",
      safety: "⚠️ Boğucu Gaz / İndirgeyici Asit",
      everydayUsage: "Kuru meyve (kayısı) kükürtleme ağartıcısı, şarap fıçısı sterilizasyonu, antik kükürt tütsüsü.",
      alchemicalName: "Spiritus Sulfuris Volatilis",
      note: "Kükürt yakıldığında çıkan SO2 gazının suda çözünmesiyle oluşur; havada oksijen alarak yavaşça zaç yağına (H2SO4) dönüşür."
    },
    {
      colloquial: "Zift / Kara Sakız",
      scientific: "Bitüm & Doğal Petrol Katranı (Doğal Asfalt)",
      formula: "CnHm",
      category: "Organik / Çözücü",
      subId: "sub-org-bitumen",
      safety: "🟢 Düşük Reaktivite / Yanıcı Karbon",
      everydayUsage: "Gemi kalafatlama su yalıtımı, yol asfaltı, antik mumyalama koruyucusu.",
      alchemicalName: "Bitumen Iudaicum (Yahudi Zifti)",
      note: "Petrol sızıntılarının binlerce yılda buharlaşıp polimerleşmesiyle oluşur; terebentin veya benzende çözünür."
    },
    {
      colloquial: "Bordo Bulamacı",
      scientific: "Bazik Bakır Sülfat & Kalsiyum Hidroksit Kompleksi [CuSO4·3Cu(OH)2·3CaSO4]",
      formula: "CuSO4*3Cu(OH)2",
      category: "Tuz / Mineral",
      subId: "sub-min-bordeaux-mixture",
      safety: "⚡ Seviye 2 (Mantar & Yosun Toksini)",
      everydayUsage: "Bağ ve meyve ağaçlarında mildiyö ve yaprak lekesine karşı 150 yıllık koruyucu mavi kalkan.",
      alchemicalName: "Calx Cuprata (Kireçli Bakır İksiri)",
      note: "Göztaşı (CuSO4) çözeltisine sönmüş kireç bulamacı eklenerek taze hazırlanır; yaprağa yapışıp haftalarca Cu2+ salar."
    },
    {
      colloquial: "Ak Akrep / Beyaz Arsenik",
      scientific: "Arsenik Trioksit (As2O3)",
      formula: "As2O3",
      category: "Tuz / Mineral",
      subId: "sub-min-arsenic-trioxide",
      safety: "☣️ AŞIRI ÖLDÜRÜCÜ TOKSİK AĞIR METAL",
      everydayUsage: "Tarihi zehirler tarihi ('Miras Tozu'), cam sanayiinde renk giderici (artık sıkı kontrol altındadır).",
      alchemicalName: "Scorpio Albus (Beyaz Akrep)",
      note: "Tatsız ve kokusuzdur; arsenopirit cevherinin kavrulmasıyla süblimleşir. Simyada metalleri beyazlatmada kullanılmıştır."
    },
    {
      colloquial: "Kurşun Şekeri",
      scientific: "Kurşun(II) Asetat Trihidrat [Pb(CH3COO)2·3H2O]",
      formula: "Pb(C2H3O2)2*3H2O",
      category: "Tuz / Mineral",
      subId: "sub-salt-lead-acetate",
      safety: "☣️ TOKSİK AĞIR METAL TUZU",
      everydayUsage: "Antik Roma ekşi şarap tatlandırıcısı ('Sapa'), tarihi kurşun merhemleri (toksisite nedeniyle yasaklanmıştır).",
      alchemicalName: "Saccharum Saturni (Satürn Şekeri)",
      note: "Litajın (PbO) sirke içinde çözünmesiyle tatlı zehirli kristaller olarak çöker; 'Satürn' simyada kurşunun ezoterik adıdır."
    },
    {
      colloquial: "Şili Güherçilesi",
      scientific: "Sodyum Nitrat (NaNO3)",
      formula: "NaNO3",
      category: "Tuz / Mineral",
      subId: "sub-salt-sodium-nitrate",
      safety: "⚠️ Oksitleyici Higroskopik Tuz",
      everydayUsage: "Tarımsal azot gübresi, et kürleme koruyucusu, emaye kaplama akısı.",
      alchemicalName: "Sal Nitri Sodae",
      note: "Potasyum güherçilesine benzer ancak havadan nem çekerek sıvılaşır; bu yüzden kara barutta potasyum nitrat tercih edilir."
    },
    {
      colloquial: "Mermer Tozu / Kireçtaşı",
      scientific: "Doğal Kalsiyum Karbonat (CaCO3)",
      formula: "CaCO3",
      category: "Tuz / Mineral",
      subId: "sub-min-caco3",
      safety: "🟢 Tamamen Güvenli Doğal Mineral",
      everydayUsage: "Mermer macunu, sıva harcı, diş macunu aşındırıcısı, asitli tarım topraklarını kireçleme.",
      alchemicalName: "Lapis Calcareus",
      note: "Asit damlatıldığında köpürerek CO2 salar; 840°C üzerinde fırınlandığında sönmemiş kirece (CaO) dönüşür."
    },
    {
      colloquial: "Su Camı / Sıvı Cam",
      scientific: "Sodyum Silikat Çözeltisi (Na2O·nSiO2 / Na2SiO3)",
      formula: "Na2SiO3",
      category: "Tuz / Mineral",
      subId: "sub-salt-water-glass",
      safety: "⚡ Seviye 2 (Yapışkan Alkali)",
      everydayUsage: "Antik kimyasal kristal bahçesi, refrakter fırın harcı yapıştırıcısı, yumurta tazelik koruyucu kaplaması.",
      alchemicalName: "Liquor Silicum (Çakmaktaşı Suyu)",
      note: "Kuvars kumu ile sodanın ergitilip basınçlı suda çözülmesiyle yapılır; metal tuzları atıldığında renkli silikat ağaçları büyür."
    },
    {
      colloquial: "Kolloidal Gümüş Suyu",
      scientific: "Nano Metalik Gümüş Süspansiyonu (Ag nano)",
      formula: "Ag",
      category: "Element",
      subId: "sub-elem-silver-colloid",
      safety: "🟢 Düşük Toksisite / Aşırı Dozda Arjiri (Mavi Cilt) Riski",
      everydayUsage: "Antimikrobiyal yüzey spreyleri, yara pansumanı gümüş emdirilmiş bandajlar, doğal dezenfektan.",
      alchemicalName: "Argentum Potabile (İçilebilir Gümüş)",
      note: "Submikron gümüş parçacıkları bakteriyel enzimlerin tiyol (-SH) gruplarına bağlanarak solunumu kilitler."
    },
    {
      colloquial: "Kül Suyu / Meşe Külü Suyu",
      scientific: "Doğal Odun Külü Lixiviumu (Potasyum Hidroksit & Karbonat - KOH/K2CO3)",
      formula: "KOH+K2CO3",
      category: "Asit / Baz",
      subId: "sub-base-ash-lye",
      safety: "⚠️ Kostik Alkali Çözelti",
      everydayUsage: "Köy usulü hakiki zeytinyağı sabunu kostiği, geleneksel çamaşır yıkama suyu, kalburabastı tatlısı gevreticisi.",
      alchemicalName: "Lixivium Cineris (Kül Suyu)",
      note: "Meşe veya zeytin odunu külünün tülbentten süzülen kaynar suyu yumurta yüzdürme testiyle (özgül ağırlık ~1.05) ayarlanır."
    },
    {
      colloquial: "Magnezya / Tebeşir Magnezyası",
      scientific: "Bazik Magnezyum Karbonat [4MgCO3·Mg(OH)2·5H2O]",
      formula: "4MgCO3*Mg(OH)2*5H2O",
      category: "Tuz / Mineral",
      subId: "sub-salt-magnesia-alba",
      safety: "🟢 Güvenli / Nem Emici Hafif Toz",
      everydayUsage: "Halter ve kaya tırmanışı el tebeşiri tozu, antiasit mide çiğneme tabletleri.",
      alchemicalName: "Magnesia Alba (Beyaz Magnezya)",
      note: "Son derece hafif ve hacimlidir; eldeki teri anında hapsedip sürtünme katsayısını maksimuma çıkarır."
    },
    {
      colloquial: "Jips / Ham Alçı Taşı",
      scientific: "Kalsiyum Sülfat Dihidrat (CaSO4·2H2O)",
      formula: "CaSO4*2H2O",
      category: "Tuz / Mineral",
      subId: "sub-min-gypsum",
      safety: "🟢 Güvenli Doğal Mineral",
      everydayUsage: "Alçıpan levha, tarımsal killi toprak gevşetici gübre, bira yapımında su sertliği ayarı.",
      alchemicalName: "Lapis Gypsus",
      note: "150°C'ye ısıtıldığında bünyesindeki 1.5 su molekülünü kaybederek pişmiş donma özelliğine sahip Paris alçısına döner."
    },
    {
      colloquial: "Pişmiş Alçı / Paris Alçısı",
      scientific: "Kalsiyum Sülfat Yarımhidrat (CaSO4·0.5H2O)",
      formula: "CaSO4*0.5H2O",
      category: "Tuz / Mineral",
      subId: "sub-min-plaster-paris",
      safety: "🟢 Güvenli / Ekzotermik Donma",
      everydayUsage: "Kırık kol/bacak tıbbi alçısı, heykel kalıbı dökümü, kartonpiyer tavan süslemesi.",
      alchemicalName: "Calx Gypsi Cocta",
      note: "Su ile karıştırıldığında 10-15 dakika içinde hafifçe ısınıp genleşerek donar; hacim küçülmesi yapmadığı için kalıbı kusursuz çıkarır."
    },
    {
      colloquial: "Arap Sabunu (Yumuşak Sabun)",
      scientific: "Potasyum Yağ Asidi Sabunu (R-COOK)",
      formula: "R-COOK",
      category: "Gündelik & Ev Ürünü",
      subId: "sub-soap-potash-soft",
      safety: "🟢 Doğal / Çevre Dostu Yüzey Aktif",
      everydayUsage: "Ahşap ve halı temizliği, organik tarımda yaprak biti ve böceklere karşı insektisit sabun spreyi.",
      alchemicalName: "Sapo Kalinus Mollis",
      note: "Sodyum sabunları sert kalıp oluştururken potasyum iyonu kristalleşmeyi engelleyerek yumuşak amber jeli kıvamı verir."
    },
    {
      colloquial: "İhtiyol / Kara Merhem",
      scientific: "Sülfone Edilmiş Şist Yağı Amonyum Tuzu (Ammonii Ichthosulfonas)",
      formula: "C28H36S5O6(NH4)2",
      category: "İlaç & Farmakoloji",
      subId: "sub-med-ichthammol",
      safety: "🟢 Güvenli Topikal Antiseptik",
      everydayUsage: "Çıban ve apse patlatıcı klasik kara merhem, tırnak batması ve kıl dönmesi pansumanı.",
      alchemicalName: "Bitumen Ichthyolicum (Balıklı Şist Yağı)",
      note: "Fosil balık kalıntıları içeren şist kayalarının damıtılıp sülfolanmasıyla üretilir; kan dolaşımını hızlandırıp irini yüzeye çeker."
    },
    {
      colloquial: "Kalomel / Tatlı Cıva",
      scientific: "Cıva(I) Klorür (Hg2Cl2)",
      formula: "Hg2Cl2",
      category: "Tuz / Mineral",
      subId: "sub-min-calomel",
      safety: "☣️ TOKSİK AĞIR METAL BİLEŞİĞİ",
      everydayUsage: "Tarihi laksatif ve frengi ilacı (modern tıpta yerini güvenli bileşiklere bırakmıştır), kalomel referans elektrodu.",
      alchemicalName: "Mercurius Dulcis (Tatlı Cıva)",
      note: "Suda neredeyse hiç çözünmediği için son derece zehirli olan süblime cıvaya (HgCl2) kıyasla çok daha az emilir; ışıkta yavaşça metalik cıvaya ayrışır."
    },
    {
      colloquial: "Ak Zaç / Beyaz Vitriol",
      scientific: "Çinko Sülfat Heptahidrat (ZnSO4·7H2O)",
      formula: "ZnSO4*7H2O",
      category: "Tuz / Mineral",
      subId: "sub-salt-zinc-sulfate",
      safety: "⚡ Seviye 2 (Göz Yakıcı / Büzücü)",
      everydayUsage: "Tarihi göz banyosu damlaları, çinko eksikliği takviyesi, yün boyama mordanı.",
      alchemicalName: "Vitriolum Album (Beyaz Vitriol)",
      note: "Çinko metalinin zaç yağı (H2SO4) içinde çözünmesiyle kar beyazı iğnemsi kristaller halinde çöker."
    },
    {
      colloquial: "Güvercin Gübresi Tuzu",
      scientific: "Doğal Üre & Amonyum Nitrat Kompleksi",
      formula: "CH4N2O+NH4NO3",
      category: "Tuz / Mineral",
      subId: "sub-salt-pigeon-guano",
      safety: "🟢 Doğal Azot Kaynağı",
      everydayUsage: "Osmanlı güherçilehanelerinde barut mayalama, tarihi deri tabaklama yumuşatıcısı.",
      alchemicalName: "Sal Stercoris (Gübre Tuzu)",
      note: "Güvercinliklerden toplanan gübrenin yıllarca fermantasyonuyla zengin nitrat tuzlarına ve amonyağa dönüşür."
    },
    {
      colloquial: "Balık Tutkalı / İsinglass",
      scientific: "Mersin Balığı Yüzme Kesesi Kolajeni",
      formula: "Kolajen Protein",
      category: "Organik / Çözücü",
      subId: "sub-org-isinglass",
      safety: "🟢 Tamamen Doğal Gıda Proteini",
      everydayUsage: "Antik ahşap müzik aleti yapıştırıcısı (sıcak suyla geri sökülebilir), geleneksel şarap ve bira berraklaştırma.",
      alchemicalName: "Ichthyocolla",
      note: "Mersin balığının hava kesesinden elde edilen en saf hayvansal yapıştırıcıdır; kuruduğunda cama yakın şeffaflık ve güç kazanır."
    },
    {
      colloquial: "Terebentin / Çam Ruhu",
      scientific: "Saf Çam Terebentin Esansı (Alfa & Beta Pinen, C10H16)",
      formula: "C10H16",
      category: "Organik / Çözücü",
      subId: "sub-org-turpentine",
      safety: "⚠️ Yanıcı Doğal Terpen / Buharı Baş Döndürücü",
      everydayUsage: "Ressam yağlı boya incelticisi, tarihi çam sakızı merhemleri, doğal reçine çözücüsü.",
      alchemicalName: "Spiritus Terebinthinae",
      note: "Çam reçinesinin buharla damıtılmasıyla elde edilir; kükürt tozunu sıcakta eritip parlak kırmızı 'Kükürt Balsamı' yapar."
    },
    {
      colloquial: "Ponza Taşı / Sünger Taşı",
      scientific: "Doğal Volkanik Alüminosilikat Camı (Gözenekli Tüf)",
      formula: "SiO2-Al2O3",
      category: "Tuz / Mineral",
      subId: "sub-min-pumice",
      safety: "🟢 Güvenli Doğal Aşındırıcı",
      everydayUsage: "Topuk taşı nasır temizliği, kot taşlama, diş macunu parlatıcısı, damıtma imbiklerinde taşma önleyici kaynama taşı.",
      alchemicalName: "Lapis Pumex",
      note: "Volkanik lavların hızla soğurken içindeki gazların hapsolmasıyla oluşur; o kadar hafiftir ki suda batmadan yüzer."
    },
    {
      colloquial: "Bezir Yağı",
      scientific: "Ham Keten Tohumu Yağı (Trigliserit - Linolenik Asit Zengin)",
      formula: "C57H98O6",
      category: "Gündelik & Ev Ürünü",
      subId: "sub-oil-linseed",
      safety: "⚠️ Kendiliğinden Yanma Riski (Bez Parçaları Oksijenle Alev Alabilir)",
      everydayUsage: "Tarihi ahşap koruyucu bezir cila, yağlı boya bağlayıcısı, macun yapımı.",
      alchemicalName: "Oleum Lini Coctum",
      note: "Havadaki oksijeni emerek kuruyan (polimerleşen) nadir yağlardandır; bez parçalarına döküldüğünde sıcak havada kendiliğinden tutuşabilir."
    },
    {
      colloquial: "Sakız Kabağı Külü",
      scientific: "Zengin Potasyum Karbonat & Silikat Külü",
      formula: "K2CO3+SiO2",
      category: "Asit / Baz",
      subId: "sub-base-ash-pumpkin",
      safety: "⚡ Seviye 2 (Alkali Kül)",
      everydayUsage: "Geleneksel lokum ve helva gevretici, ipek lifi arıtma, spajirik bitki tuzu kaynağı.",
      alchemicalName: "Alkali Cucurbitae",
      note: "Kabak kabuklarının fırında kalsine edilerek beyaz kül haline getirilmesiyle elde edilir; aşırı yumuşak bir alkali çözeltisi verir."
    },
    {
      colloquial: "Kemik Kömürü / Siyah Kömür",
      scientific: "Kalsiyum Fosfat Destekli Aktif Karbon (Ca3(PO4)2 + C)",
      formula: "Ca3(PO4)2+C",
      category: "Tuz / Mineral",
      subId: "sub-min-bone-char",
      safety: "🟢 Güvenli Adsorban",
      everydayUsage: "Tarihi şeker şurubu ağartıcısı, ağır metal ve florür su arıtma filtresi, siyah resim pigmenti (Fildişi Siyahı).",
      alchemicalName: "Carbo Animalis (Hayvansal Karbon)",
      note: "Kemiklerin havasız ortamda 700°C'de kalsinasyonu ile üretilir; gözenekli apatit iskeleti sayesinde organik renkleri anında emer."
    },
    {
      colloquial: "Damla Sakızı / Mastik",
      scientific: "Pistacia lentiscus Reçinesi (Mastik Asit & Terpen Polimeri)",
      formula: "C20H32O2",
      category: "Bitkisel & Spajirik",
      subId: "sub-bot-mastic",
      safety: "🟢 Doğal / Yenebilir Reçine",
      everydayUsage: "Mide ülseri ve reflü rahatlatıcı çiğneme sakızı, geleneksel Türk kahvesi ve dondurma aroması, tarihi tablo verniği.",
      alchemicalName: "Resina Mastix",
      note: "Helicobacter pylori bakterisini nötralize eden doğal bileşikler içerir; alkolde çözünerek parlak sarı cila oluşturur."
    },
    {
      colloquial: "Kehribar / Amber Taşı",
      scientific: "Fosil Çam Ağacı Reçinesi (Süksinik Asit Polimeri)",
      formula: "C40H64O4",
      category: "Tuz / Mineral",
      subId: "sub-min-amber",
      safety: "🟢 Tamamen Doğal Fosil",
      everydayUsage: "Tarihi kehribar yağı damıtması (Oleum Succini), statik elektrik deneyleri, tespih ve takı.",
      alchemicalName: "Succinum / Electrum (Elektron Taşı)",
      note: "Kumaşa sürtüldüğünde statik elektrikle saçları çeker ('Elektrik' kelimesi Yunanca kehribar anlamına gelen elektron'dan doğmuştur)."
    },
    {
      colloquial: "Güherçile Külü",
      scientific: "Alkali Potasyum Karbonat & Nitrit Karışımı",
      formula: "K2CO3+KNO2",
      category: "Tuz / Mineral",
      subId: "sub-salt-nitre-ash",
      safety: "⚠️ Kostik Alkali / Güçlü İndirgeyici",
      everydayUsage: "Metallerin yüzey temizliği, simyasal metal kalsinasyonu akısı.",
      alchemicalName: "Cinis Salis Nitri",
      note: "Güherçilenin odun kömürüyle birlikte kapalı krozelerde kavrulmasıyla elde edilen şiddetli alkali simya tuzudur."
    },
    {
      colloquial: "Şellak / Gomalak",
      scientific: "Kerria lacca Böceğinin Salgıladığı Doğal Polyester Reçinesi",
      formula: "Polyester Reçine",
      category: "Organik / Çözücü",
      subId: "sub-org-shellac",
      safety: "🟢 Gıda Tipi Güvenli (E904)",
      everydayUsage: "Klasik Fransız mobilya cilası (Gomalak cila), ilaç hapı parlak kaplaması, tarihi taş plaklar (78 rpm).",
      alchemicalName: "Gumma Lacca",
      note: "İspirto içinde çözüldüğünde ahşabın derin damarlarını ortaya çıkaran ve ahşaba nefes aldıran en asil tarihi ciladır."
    },
    {
      colloquial: "Keten Tohumu Lapası",
      scientific: "Lignan & Musilaj Açılmış Tohum Emülsiyonu",
      formula: "Musilaj+Trigliserit",
      category: "Bitkisel & Spajirik",
      subId: "sub-bot-flax-poultice",
      safety: "🟢 Tamamen Güvenli Bitkisel Lapası",
      everydayUsage: "Göğüs yumuşatıcı sıcak kompres lapası, cilt apsesini olgunlaştırıp çeken geleneksel halk yakısı.",
      alchemicalName: "Cataplasma Lini",
      note: "Sıcak suda kaynatıldığında tohumun dış kabuğundaki polisakkaritler jelleşir ve saatlerce ısısını koruyan yatıştırıcı lapa yapar."
    },
    {
      colloquial: "Zencefre / Şingirf",
      scientific: "Doğal Kırmızı Cıva(II) Sülfür (Alfa-HgS)",
      formula: "HgS",
      category: "Tuz / Mineral",
      subId: "sub-min-cinnabar",
      safety: "☣️ TOKSİK AĞIR METAL MİNERALİ",
      everydayUsage: "Tarihi Türk kırmızısı minyatür boyası (Vermilyon), Çin ölümsüzlük hapları (Waidan iksirleri).",
      alchemicalName: "Cinnabaris (Ejder Kanı Minerali)",
      note: "Simyacılara göre cıva ve kükürdün mükemmel evliliğidir; imbikte ısıtıldığında sülfür kükürt gazı olarak uçar ve saf cıva damlaları yoğunlaşır."
    },
    {
      colloquial: "Mürver Ağacı Külü / Kara Mürver Külü",
      scientific: "Potasyum ve Fosfat Zengin Bitki Külü",
      formula: "K2CO3+K3PO4",
      category: "Asit / Baz",
      subId: "sub-base-ash-elderberry",
      safety: "🟢 Doğal Bitki Külü / Hafif Alkali",
      everydayUsage: "Geleneksel kumaş mordanı, bitkisel sabun bazı, spajirik bitki kalsinasyon tuzu.",
      alchemicalName: "Sal Sambuci",
      note: "Mürver dallarının fırınlanıp kalsine edilmesiyle elde edilir; hücre tuzları arındırma operasyonlarında kullanılır."
    },
    {
      colloquial: "Kantaşı / Hematit",
      scientific: "Doğal Demir(III) Oksit (Alfa-Fe2O3)",
      formula: "Fe2O3",
      category: "Tuz / Mineral",
      subId: "sub-min-hematite",
      safety: "🟢 Güvenli Doğal Mineral / Pigment",
      everydayUsage: "Antik kan durdurucu hemostatik taş, kırmızı aşı boyası (Venedik Kırmızısı), metal parlatma cilası.",
      alchemicalName: "Lapis Haematites",
      note: "Suyla sürtüldüğünde kan kırmızısı bir iz bırakır; kadim çağlardan beri kanama durdurucu ve boya taşı olarak anılır."
    },
    {
      colloquial: "Kıbrıs Taşı / Mavi Vitriol Kristali",
      scientific: "Saf Bakır(II) Sülfat Pentahidrat İri Kristali",
      formula: "CuSO4*5H2O",
      category: "Tuz / Mineral",
      subId: "sub-salt-cyprian-vitriol",
      safety: "⚡ Seviye 2 (Yutulmamalı / Göz Korunmalı)",
      everydayUsage: "Tarihi Kıbrıs bakır madenlerinden çıkan dev mavi kristaller; mantar önleyici ve galvanik pil elektroliti.",
      alchemicalName: "Lapis Cyprius",
      note: "Adını Kıbrıs (Cyprus -> Cuprum -> Bakır) madenlerinden alır; simyanın Venüs metaliyle özdeşleştirilen baş kristalidir."
    },
    {
      colloquial: "Neft Yağı / Doğal Nafta",
      scientific: "Hafif Hidrokarbon Karışımı (Doğal Ham Nafta / CnH2n+2)",
      formula: "C8H18_mix",
      category: "Organik / Çözücü",
      subId: "sub-org-naphtha",
      safety: "⚠️ Çok Kolay Alevlenir Sıvı",
      everydayUsage: "Bizans ateşi (Grek ateşi) ana bileşeni, reçine çözücü, tarihi fener yakıtı.",
      alchemicalName: "Oleum Petrae (Kaya Yağı)",
      note: "Bakü ve Mezopotamya yer sızıntılarından toplanan en uçucu doğal petrol fraksiyonudur; su üstünde bile alev alarak yanar."
    },
    {
      colloquial: "Sülyen / Kırmızı Kurşun",
      scientific: "Kurşun(II,IV) Oksit (Tri-kurşun Tetroksit, Pb3O4)",
      formula: "Pb3O4",
      category: "Tuz / Mineral",
      subId: "sub-min-minium",
      safety: "☣️ TOKSİK AĞIR METAL BİLEŞİĞİ",
      everydayUsage: "Tarihi gemi altı pas önleyici astar boya, çini ve seramik kırmızı sırları, el yazması tezhip boyası.",
      alchemicalName: "Minium (Satürn Kırmızısı)",
      note: "Beyaz kurşunun (üstübeç) fırında 450-480°C'de saatlerce kavrulmasıyla parlak turuncu-kırmızı kristale dönüşür."
    },
    {
      colloquial: "Günlük Sakızı / Buhur",
      scientific: "Akgünlük Ağacı Reçinesi (Boswellia carterii - Boswellik Asitler)",
      formula: "C30H48O3",
      category: "Bitkisel & Spajirik",
      subId: "sub-bot-frankincense",
      safety: "🟢 Doğal Reçine / Tıbbi Aromatik",
      everydayUsage: "Solunum yolu ferahlatıcı tütsü buhuru, eklem iltihabı ve romatizma merhemleri, cilt gençleştirici yağlar.",
      alchemicalName: "Olibanum",
      note: "Ağacın gövdesinden sızan süt beyazı damlaların sertleşmesiyle oluşur; yanarken saf beyaz aromatik duman salar."
    },
    {
      colloquial: "Mürrüsafi / Mürr Reçinesi",
      scientific: "Commiphora myrrha Ağaç Reçinesi (Guggulsteron & Terpen Kompleksi)",
      formula: "C15H20O2",
      category: "Bitkisel & Spajirik",
      subId: "sub-bot-myrrh",
      safety: "🟢 Doğal Antiseptik Reçine",
      everydayUsage: "Antik Mısır mumyalama mürrü, boğaz spreyi ve diş eti tentürü, koku sabitleyici fiksatif.",
      alchemicalName: "Myrrha",
      note: "Güçlü antimikrobiyal ve doku sıkılaştırıcı reçinedir; alkolde çözüldüğünde altın sarısı acı bir tentür verir."
    },
    {
      colloquial: "Kına Taşı / Asil Mordan",
      scientific: "Demir ve Bakır Sülfat Katkılı Doğal Lawsonia Karışımı",
      formula: "FeSO4+CuSO4",
      category: "Tuz / Mineral",
      subId: "sub-salt-henna-stone",
      safety: "⚡ Seviye 1 (Hafif Tahriş Edici)",
      everydayUsage: "Geleneksel siyah kına koyulaştırıcı, deri ve kıl kökü boyama mordanı.",
      alchemicalName: "Lapis Alchannae",
      note: "Kınadaki lavson molekülü metal iyonlarıyla şelat kompleksi yaparak rengi kızıldan kalıcı koyu kestaneye ve siyaha çevirir."
    },
    {
      colloquial: "Şap Taşı / Doğal Alunit",
      scientific: "Doğal Bazik Potasyum Alüminyum Sülfat Minerali",
      formula: "KAl3(SO4)2(OH)6",
      category: "Tuz / Mineral",
      subId: "sub-min-alunite",
      safety: "🟢 Güvenli Doğal Mineral",
      everydayUsage: "Kavrulup suda kristallendirilerek saf tıraş şapı üretimi, tarihi kağıt ve kumaş yangın geciktiricisi.",
      alchemicalName: "Lapis Aluminis",
      note: "Anadolu'da (Şebinkarahisar ve Phocaea) yüzyıllarca çıkarılıp Avrupa'ya ihraç edilen dünyanın en ünlü kumaş mordanı hammaddesidir."
    },
    {
      colloquial: "Katran Ruhu / Ahşap Katranı",
      scientific: "Çam ve Ardıç Odunu Piroliz Sıvısı (Gayakol & Krezol Kompleksi)",
      formula: "C7H8O2_mix",
      category: "Organik / Çözücü",
      subId: "sub-org-wood-tar",
      safety: "⚠️ Güçlü Fenolik Koku / Ciltte Seyreltilerek Kullanılır",
      everydayUsage: "Geleneksel egzama ve sedef için ardıç katranı sabunu, tarihi gemi halatı su yalıtımı.",
      alchemicalName: "Pix Liquida",
      note: "Odunun kapalı kazanlarda havasız kavrulmasıyla (kuru damıtma) elde edilen siyah, yoğun ve güçlü antiseptik sıvıdır."
    },
    {
      colloquial: "Kafur Taşı / Beyaz Kafur",
      scientific: "Doğal D-Kafur Kristalleri (Terpenoid Keton, C10H16O)",
      formula: "C10H16O",
      category: "Bitkisel & Spajirik",
      subId: "sub-bot-camphor",
      safety: "⚠️ Yanıcı Doğal Terpenoid / Keskin Aromatik",
      everydayUsage: "Göğüs açıcı buğu merhemleri, güve kovucu, tarihi sinir yatıştırıcı koklama tuzları.",
      alchemicalName: "Camphora (Beyaz Süblime Kristal)",
      note: "Kafur ağacının odunundan buhar damıtması ve ardından süblimleşmeyle elde edilen kar beyazı uçucu kristaldir."
    },
    {
      colloquial: "Sedef Kabuğu Tozu",
      scientific: "Biyo-Aragonit Kristali (Organik Matrisli CaCO3)",
      formula: "CaCO3_bio",
      category: "Tuz / Mineral",
      subId: "sub-min-mother-of-pearl",
      safety: "🟢 Güvenli Doğal Biyo-Mineral",
      everydayUsage: "Geleneksel cilt beyazlatıcı ve leke kremleri, biyo-kalsiyum mineral takviyesi, inci tozu maskesi.",
      alchemicalName: "Concha Margaritifera",
      note: "İstiridye kabuklarının mikronize öğütülmesiyle elde edilir; ipeksi parlaklığını mikroskobik aragonit katmanlarından alır."
    },
    {
      colloquial: "Kargı Külü / Kamış Külü",
      scientific: "Silika ve Potasyum Zengin Bitki İskeleti Külü (SiO2 + K2CO3)",
      formula: "SiO2+K2CO3",
      category: "Asit / Baz",
      subId: "sub-base-ash-reed",
      safety: "🟢 Güvenli Doğal Bitki Külü",
      everydayUsage: "Tarihi cam yapımı akısı, bitki koruma mordanı, çömlek sırlama tozu.",
      alchemicalName: "Cinis Arundinis",
      note: "Sulak alan kamışlarının yüksek oranda çözünür biyosilika içermesi sebebiyle antik cam atölyelerinin vazgeçilmez akısıdır."
    },
    {
      colloquial: "Lâcivert Taşı / Lapis Lazuli",
      scientific: "Doğal Lazurit Minerali (Sodyum Alüminosilikat Sülfür Kompleksi)",
      formula: "Na8[Al6Si6O24]Sn",
      category: "Tuz / Mineral",
      subId: "sub-min-lapis-lazuli",
      safety: "🟢 Güvenli Değerli Mineral / Pigment",
      everydayUsage: "Antik çağların ve Rönesans ustalarının en değerli mavi pigmenti (Doğal Ultramarin).",
      alchemicalName: "Lapis Lazuli (Gökyüzü Taşı)",
      note: "Balmumu ve reçine yoğurularak lütufla arındırıldığında yüzyıllarca solmayan efsanevi saf derin mavi pigmenti verir."
    },
    {
      colloquial: "Pelin Ruhu / Miskotu Suyu",
      scientific: "Artemisia absinthium Buhar Damıtma Hidrosolü (Tujon & Absintin)",
      formula: "C10H16O+C30H40O6",
      category: "Bitkisel & Spajirik",
      subId: "sub-bot-absinthe-spirit",
      safety: "⚡ Seviye 1 (Acı Tonik / Yüksek Dozda Toksik)",
      everydayUsage: "Tarihi mide acı toniği, sindirim uyarıcı, doğal güve ve parazit kovucu.",
      alchemicalName: "Spiritus Absinthii",
      note: "Pelinin en acı glikozitlerini ve uçucu yağını taşır; antik tıpta iştahsızlık ve karaciğer tembelliği ilacı olarak ün salmıştır."
    },
    {
      colloquial: "Zencefil Ruhu / Zencefil Tentürü",
      scientific: "Zingiber officinale Oleoresin Ekstresi (Gingerol & Shogaol)",
      formula: "C17H26O4",
      category: "Bitkisel & Spajirik",
      subId: "sub-bot-ginger-tincture",
      safety: "🟢 Güvenli Isıtıcı Aromatik",
      everydayUsage: "Mide bulantısı önleyici, kan dolaşımı hızlandırıcı ısıtıcı tentür, aromatik içecek bazı.",
      alchemicalName: "Tinctura Zingiberis",
      note: "Alkolde maserasyonla elde edilen koyu kehribar renkli yakıcı özüttür; vücut iç ısısını yükselten simyasal 'Ateş' prensibidir."
    },
    {
      colloquial: "Kükürt Balsamı / Kükürt Yağı",
      scientific: "Terebentin İçinde Çözünmüş Polimerik Kükürt Çözeltisi",
      formula: "C10H16-Sn",
      category: "Organik / Çözücü",
      subId: "sub-org-sulfur-balsam",
      safety: "⚠️ Ağır Kükürt Kokusu / Ciltte Dikkatle Kullanılır",
      everydayUsage: "Tarihi uyuz ve mantar merhemi, bronşit buharı, simyasal metal renklendirme.",
      alchemicalName: "Balsamum Sulphuris (Oleum Sulphuratum)",
      note: "Kükürt tozunun çam terebentininde sıcakta çözünmesiyle yakut kırmızısı koyu bir yağ haline gelir; kadim cüzzam ilacıdır."
    },
    {
      colloquial: "Arap Zamkı / Akasya Zamkı",
      scientific: "Doğal Akasya Ağacı Polisakkarit Zamkı (Arabinogalaktan)",
      formula: "Polisakkarit (E414)",
      category: "Organik / Çözücü",
      subId: "sub-org-gum-arabic",
      safety: "🟢 Tamamen Güvenli Gıda Lifi (E414)",
      everydayUsage: "Geleneksel hat mürekkebi bağlayıcısı, suluboya bağlayıcısı, lokum kıvam verici, emülsiyon sabitleyici.",
      alchemicalName: "Gummi Arabicum",
      note: "Suda tamamen berrak çözünen en asil bitkisel zamktır; mürekkebin kağıt üzerinde yayılmasını engelleyip parlaklık verir."
    },
    {
      colloquial: "Karasakız / Katran Zifti",
      scientific: "Çam Reçinesi ve Odun Katranı Pişirme Zifti",
      formula: "CnHm_resin",
      category: "Organik / Çözücü",
      subId: "sub-org-black-pitch",
      safety: "🟢 Güvenli Doğal Yapıştırıcı / Mastik",
      everydayUsage: "Geleneksel bel ve eklem yakısı, ahşap tekne kalafatlama su geçirmezlik mastiki.",
      alchemicalName: "Pix Nigra",
      note: "Çam reçinesinin hafif kömür tozuyla kaynatılmasıyla sertleşen elastik siyah zifttir; sıcakta yumuşar soğukta donar."
    },
    {
      colloquial: "Çakmaktaşı Tozu / Kuvars Kumu",
      scientific: "Saf Kriptokristalin Silisyum Dioksit (Alfa-Kuvars, SiO2)",
      formula: "SiO2",
      category: "Tuz / Mineral",
      subId: "sub-min-flint-silica",
      safety: "🟢 Güvenli Katı / Tozu Solunmamalı",
      everydayUsage: "Antik seramik fırın mayası, cam üretim hammaddesi, yüksek sıcaklık refrakter harcı.",
      alchemicalName: "Silex / Lapis Ignifer",
      note: "Demire vurulduğunda kıvılcım çıkaran kadim ateş taşıdır; kalsine edilip öğütüldüğünde saf beyaz fırın silikası olur."
    },
    {
      colloquial: "Mürver Çiçeği Suyu / Mürver Hidrosolü",
      scientific: "Kara Mürver Çiçeği Buhar Destilatı (Sambucus nigra Aqua)",
      formula: "Sambucus_destillata",
      category: "Bitkisel & Spajirik",
      subId: "sub-bot-elderflower-water",
      safety: "🟢 Tamamen Güvenli Doğal Hidrosol",
      everydayUsage: "Geleneksel göz banyosu, cilt yatıştırıcı tonik, tarihi ateş düşürücü şurup bazı.",
      alchemicalName: "Aqua Florum Sambuci",
      note: "Mürver çiçeklerinin hafif imbikte buharla damıtılmasıyla elde edilen berrak aromatik sudur; flavonoid ve uçucu terpen kalıntıları içerir."
    },
    {
      colloquial: "Göztaşı Ruhu / Zaç Suyu",
      scientific: "Bakır Sülfat Asidik Çözeltisi (%10-20 CuSO4 + Eser H2SO4)",
      formula: "CuSO4_aq",
      category: "Tuz / Mineral",
      subId: "sub-min-copper-vitriol-spirit",
      safety: "⚠️ Toksik Ağır Metal Çözeltisi / Yutulmamalı",
      everydayUsage: "Geleneksel tohum ilaçlama, mantar ve küf önleyici ahşap emprenye suyu, tarihi deri dağlama solüsyonu.",
      alchemicalName: "Spiritus Vitrioli Caerulei",
      note: "Mavi vitriolün (göztaşı) suda çözülüp hafif sülfürik asitle kararlı kılınmasıyla hazırlanan parlak safir mavisi asidik antiseptik sıvıdır."
    },
    {
      colloquial: "Bolus Alba / Beyaz Kil (Kaolin)",
      scientific: "Hidratlı Alüminyum Silikat [Kaolinit, Al2Si2O5(OH)4]",
      formula: "Al2Si2O5(OH)4",
      category: "Tuz / Mineral",
      subId: "sub-min-bolus-alba",
      safety: "🟢 Güvenli İnert Mineral / Tozu Solunmamalı",
      everydayUsage: "Tıbbi emici mide tozu, porselen seramik hamuru, geleneksel arındırıcı yüz maskesi, hap bağlayıcı.",
      alchemicalName: "Bolus Alba / Terra Sigillata",
      note: "Yıkanıp elenmiş saf beyaz porselen kilidir; mide asidini ve toksinleri fiziksel olarak adsorbe eden kadim tıbbi topraktır."
    },
    {
      colloquial: "Kükürt Çiçeği",
      scientific: "Süblime Edilmiş Saf Kükürt Tozu (Alfa-Siklooktasülfür, S8)",
      formula: "S8",
      category: "Tuz / Mineral",
      subId: "sub-min-flores-sulphuris",
      safety: "⚠️ Yanıcı Katı / Gözü Tahriş Eder",
      everydayUsage: "Geleneksel bağ ve meyve uyuz ilacı, kükürt merhemi (akne/uyuz tedavisi), kibrit başı barut karışımları.",
      alchemicalName: "Flores Sulphuris",
      note: "Ham kükürdün damıtma imbiğinde kaynatılıp buharının soğuk kubbede ince ipeksi sarı kristal un halinde çökeltilmesiyle elde edilir."
    },
    {
      colloquial: "Manyezit / Kantaroz Taşı",
      scientific: "Doğal Magnezyum Karbonat (MgCO3)",
      formula: "MgCO3",
      category: "Tuz / Mineral",
      subId: "sub-min-magnesite",
      safety: "🟢 Güvenli Katı / İnert Karbonat",
      everydayUsage: "Kalsine edilerek refrakter ateş tuğlası üretimi, sporcu el pudrası (ter emici), antiasit magnezyum tozu.",
      alchemicalName: "Magnesia Alba Mineralis",
      note: "Fırınlandığında CO2 gazını kaybederek kostik manyezite (MgO) dönüşür; yüksek ısıya dayanıklı fırın astarı taşıdır."
    },
    {
      colloquial: "Isırgan Külü / Potas Zengin Bitki Külü",
      scientific: "Yüksek Silikat ve Potasyum Karbonat Külü (K2O / SiO2 zengin)",
      formula: "K2O_SiO2_ash",
      category: "Bitkisel & Spajirik",
      subId: "sub-bot-nettle-ash",
      safety: "🟢 Alkalin Kül / Gözden Uzak Tutulmalı",
      everydayUsage: "Spajirik mineral tuz izolasyonu, geleneksel bitki gübresi (potasyum takviyesi), yumuşak arap sabunu alkalisi.",
      alchemicalName: "Sal Vegetabile Urticae",
      note: "Isırgan otunun kurutulup kontrollü kalsine edilmesiyle elde edilen beyazımsı küldür; silisyum ve potasyum bakımından en zengin bitkisel küllerdendir."
    },
    {
      colloquial: "Cıva Gümüşü / Amalgam",
      scientific: "Cıva-Gümüş Sıvı / Macun Metalik Alaşımı (Ag-Hg Çözeltisi)",
      formula: "Ag_Hg_alloy",
      category: "Tuz / Mineral",
      subId: "sub-met-amalgam",
      safety: "🛑 Toksik Ağır Metal / Buharı Kesinlikle Solunmamalı",
      everydayUsage: "Tarihi ayna arkası sır kaplama, altın ve gümüş cevher madenciliğinde zenginleştirme, tarihi diş dolgusu.",
      alchemicalName: "Amalgama Argenti",
      note: "Sıvı cıvanın gümüş yapraklarını oda sıcaklığında eritip macun kıvamına getirmesiyle oluşur; ısıtıldığında cıva uçar ve geride saf gümüş kalır."
    },
    {
      colloquial: "Meyan Kökü Balı / Likoris Özü",
      scientific: "Konsantre Glisirizin ve Flavonoid Ekstresi (%10-25 Glisirizik Asit)",
      formula: "Glycyrrhizin_ext",
      category: "Bitkisel & Spajirik",
      subId: "sub-bot-licorice-extract",
      safety: "🟢 Doğal Tatlandırıcı & Şurup Özütü",
      everydayUsage: "Öksürük pastili ve şurupları, geleneksel meyan şerbeti, mide yatıştırıcı mukozal koruyucu.",
      alchemicalName: "Succus Liquiritiae",
      note: "Meyan köklerinin kaynatılıp suyunun vakumda veya ateşte koyu siyah parlak macun haline kadar buharlaştırılmasıyla elde edilen tatlı özdür."
    },
    {
      colloquial: "Hardal Ruhu / Sinapizm Esansı",
      scientific: "Allil İzotiyosiyanat Uçucu Esansı (%95+ C4H5NS)",
      formula: "C4H5NS",
      category: "Organik / Çözücü",
      subId: "sub-bot-mustard-spirit",
      safety: "⚠️ Şiddetli Göz Yaşartıcı & Cilt Yakıcı / Seyreltilmeli",
      everydayUsage: "Tarihi hardal yakısı (sinapizm), kan dolaşımı uyarıcı romatizma losyonları, kene ve parazit kovucu.",
      alchemicalName: "Oleum Volatile Sinapis",
      note: "Siyah hardal tohumundaki sinigrin glikozidinin mirozinaz enzimiyle parçalanması sonucu oluşan son derece keskin kokulu ve ısıtıcı uçucu yağdır."
    },
    {
      colloquial: "Lepidolit / Lityum Taşı",
      scientific: "Potasyum Lityum Alüminyum Florosilikat Mikası [K(Li,Al)3(Si,Al)4O10(F,OH)2]",
      formula: "KLi2AlSi4O10F2",
      category: "Tuz / Mineral",
      subId: "sub-min-lepidolite",
      safety: "🟢 Güvenli Katı Kristal Kayaç",
      everydayUsage: "Doğal lityum karbonat cevheri, ısıya dayanıklı borosilikat cam üretimi, seramik sırlar.",
      alchemicalName: "Mica Lithica / Lapis Lepidolitus",
      note: "Pembe-menekşe pullu mika mineralidir; dünyadaki en önemli doğal lityum kaynağı kayaçlardan biridir ve asit liçiyle lityum tuzlarına dönüştürülür."
    },
    {
      colloquial: "Sünger Taşı / Ponza Taşı",
      scientific: "Gözenekli Volkanik Silikat Camı (Pümis, %70+ SiO2)",
      formula: "SiO2_pumice",
      category: "Tuz / Mineral",
      subId: "sub-min-pumice-stone",
      safety: "🟢 Güvenli Doğal Aşındırıcı",
      everydayUsage: "Geleneksel nasır ve topuk taşı, diş parlatma tozu, antik hafif beton agregası, katalizör taşıyıcı matris.",
      alchemicalName: "Pumex Volcanicus",
      note: "Volkanik lavların ani genleşip köpük halinde donmasıyla oluşan ultra hafif ve suda yüzen doğal silikat süngeridir."
    },
    {
      colloquial: "Kadmiyum Sarısı",
      scientific: "Sentetik / Doğal Kadmiyum Sülfür (Kalsiyum/Çinko İçerebilir, CdS)",
      formula: "CdS",
      category: "Tuz / Mineral",
      subId: "sub-min-cadmium-yellow",
      safety: "⚠️ Toksik Ağır Metal Pigmenti / Solunmamalı",
      everydayUsage: "Tarihi ve modern sanatçı yağlıboya pigmenti, yüksek ısıya dayanıklı seramik emaye sarı rengi.",
      alchemicalName: "Cadmium Sulphuratum",
      note: "Işık haslığı mükemmel, örtücülüğü çok yüksek canlı limon ve altın sarısı mineral pigmenttir; çözünmez formdadır ancak tozunun solunması tehlikelidir."
    },
    {
      colloquial: "Çivit Ruhu / İndigo Sülfat",
      scientific: "Sülfolanmış İndigo Disülfonik Asit (İndigo Karmin Önceli)",
      formula: "C16H10N2O8S2",
      category: "Bitkisel & Spajirik",
      subId: "sub-bot-indigo-spirit",
      safety: "🟢 Güvenli Boyar Madde / Asidik Sıvı",
      everydayUsage: "Geleneksel yün ve ipek boyama (Saksonya Mavisi), tarihi lacivert mürekkep, mikroskop doku boyası.",
      alchemicalName: "Spiritus Indici / Coeruleum Saxonicum",
      note: "Doğal çivit otu tozunun derişik sülfürik asitte (zaç yağı) çözülmesiyle hazırlanan ve suda çözünür derin kraliyet mavisi renktir."
    },
    {
      colloquial: "Kurşun Şekeri / Satürn Tuzu",
      scientific: "Kurşun(II) Asetat Trihidrat [Pb(CH3COO)2·3H2O]",
      formula: "Pb(CH3COO)2*3H2O",
      category: "Tuz / Mineral",
      subId: "sub-min-lead-sugar",
      safety: "🛑 YÜKSEK TOKSİK AĞIR METAL / KESİNLİKLE YUTULMAMALI",
      everydayUsage: "Antik Roma şarap tatlandırıcısı (tarihi ölümcül zehir), tekstil mordanı, tarihi kurşun suyu (Goulard suyu) harici kompresi.",
      alchemicalName: "Saccharum Saturni / Sal Saturni",
      note: "Kurşun oksidin (mürdesenk) sirke ruhunda çözülüp kristallenmesiyle elde edilen tatlı lezzetli ancak kronik kurşun zehirlenmesine (satürnizm) yol açan tehlikeli tuzdur."
    },
    {
      colloquial: "Akamber / İskpermeçet Mumu",
      scientific: "Kristalize Doğal Setil Palmitat Mumu (C32H64O2)",
      formula: "C32H64O2",
      category: "Organik / Çözücü",
      subId: "sub-org-spermaceti",
      safety: "🟢 Güvenli Kozmetik & Galenik Mum",
      everydayUsage: "Geleneksel Galenik Soğuk Krem (Cold Cream / Ceratum Galeni), lüks tıbbi merhem sertleştirici, tarihi kaliteli mum.",
      alchemicalName: "Cetaceum Album",
      note: "İnci beyazı sedef parlaklığında kristal mumdur; eridiğinde berrak bir sıvı verir ve cildi ipeksi koruyucu bir tabakayla kaplar."
    },
    {
      colloquial: "Katran Sakızı / Ardıç Zifti",
      scientific: "Kızıl Ardıç Odunu Kuru Damıtma Zifti (Pix Liquida Juniperina)",
      formula: "Juniper_pitch",
      category: "Organik / Çözücü",
      subId: "sub-bot-juniper-pitch",
      safety: "🟢 Doğal Antiseptik Ağaç Zifti",
      everydayUsage: "Geleneksel egzama ve sedef merhemleri, ahşap arı kovanı koruyucu astarı, su geçirmez deri cilası.",
      alchemicalName: "Pix Liquida / Oleum Juniperi Empyreumaticum",
      note: "Ardıç gövdesinin havasız fırında yakılmasıyla elde edilen katranın koyulaştırılmış yapışkan reçinesidir; güçlü fenolik kokuya sahiptir."
    },
    {
      colloquial: "Pirit / Aptal Altını",
      scientific: "Kristalin Demir Disülfür (İzometrik Kübik Mineral, FeS2)",
      formula: "FeS2",
      category: "Tuz / Mineral",
      subId: "sub-min-pyrite",
      safety: "🟢 Güvenli Katı Kristal",
      everydayUsage: "Tarihi sülfürik asit ve zaç üretim cevheri, kıvılcım çakma minerali, kristal dedektör radyosu diyodu.",
      alchemicalName: "Pyrites / Aurum Stultorum",
      note: "Pirinç sarısı metalik parıltısı sebebiyle altına benzetilen kadim taştır; sürtüldüğünde kıvılcım çıkarır ve kükürt kokusu yayar."
    },
    {
      colloquial: "Kan Taşı Silikası / Helyotrop",
      scientific: "Kırmızı Kalsedon ve Jasper Taneli Kriptokristalin Silika (SiO2)",
      formula: "SiO2_heliotrope",
      category: "Tuz / Mineral",
      subId: "sub-min-heliotrope",
      safety: "🟢 Güvenli İnert Doğal Taş",
      everydayUsage: "Antik mühür yüzüğü oymacılığı, tarihi kanamayı durdurduğuna inanılan tıbbi muska taşı.",
      alchemicalName: "Lapis Heliotropius / Lapis Sanguineus",
      note: "Koyu yeşil kalsedon zemin üzerine kırmızı jasper (demir oksit) damlaları serpiştirilmiş kadim simyacı taşıdır."
    },
    {
      colloquial: "Gomalak / Şellak Reçinesi",
      scientific: "Doğal Hayvansal-Bitkisel Poliester Reçinesi (Kerria lacca Sekresyonu)",
      formula: "Shellac_resin",
      category: "Organik / Çözücü",
      subId: "sub-org-shellac",
      safety: "🟢 Güvenli Doğal Cila & Gıda Parlatıcı (E904)",
      everydayUsage: "Klasik Fransız mobilya cilası (politür), gramofon taş plak hammaddesi, hap ve draje parlak koruma kaplaması.",
      alchemicalName: "Gummi Lacca",
      note: "Alkolde tamamen çözünerek sürüldüğü yüzeyde ayna gibi parlak, suya dayanıklı ve sert koruyucu doğal vernik tabakası bırakır."
    },
    {
      colloquial: "Akzambak Yağı / Lilium Esansı",
      scientific: "Beyaz Zambak Çiçek Yağı Enfleuraj Özütü (Lilium candidum)",
      formula: "Lilium_extract",
      category: "Bitkisel & Spajirik",
      subId: "sub-bot-white-lily-oil",
      safety: "🟢 Tamamen Güvenli Yatıştırıcı Çiçek Yağı",
      everydayUsage: "Geleneksel yanık ve yara merhemleri, tarihi güzellik iksiri, kuru cilt yumuşatıcı gece yağı.",
      alchemicalName: "Oleum Liliaceum / Oleum Liliorum Alborum",
      note: "Beyaz zambak taç yapraklarının saf zeytinyağında güneşte 40 gün bekletilmesi (maserasyon) veya soğuk yağ tabakasında emdirilmesiyle hazırlanan asil parfümeri ve merhem yağıdır."
    },
    {
      colloquial: "Mürdesenk Yağı / Kurşun Merhemi",
      scientific: "Sarı Kurşun Monoksit ve Zeytinyağı Sabunlaşma Macunu (PbO)",
      formula: "PbO_oleate",
      category: "Tuz / Mineral",
      subId: "sub-min-lead-ointment",
      safety: "🛑 YÜKSEK TOKSİK KURŞUN / YALNIZCA TARİHİ REFERANS",
      everydayUsage: "Antik yara ve çıban yakısı, tarihi kurşun plasteri (Emplastrum Plumbi / Diyakilon).",
      alchemicalName: "Unguentum Diachylon / Lithargyrum",
      note: "Mürdesenk (sarı kurşun oksit) tozu zeytinyağı ve su ile kaynatıldığında kurşun oleat sabununa dönüşür; antik çağın en meşhur yapışkan tıbbi yakısıdır ancak kurşun zehirlenmesi riski taşır."
    },
    {
      colloquial: "İtalyan Alçısı / Venedik Sıvası",
      scientific: "Mikronize Doğal Kalsit Mermer Tozu & Yağlı Sönmüş Kireç [CaCO3 + Ca(OH)2]",
      formula: "CaCO3_CaOH2_stucco",
      category: "Tuz / Mineral",
      subId: "sub-min-venetian-stucco",
      safety: "🟢 Güvenli Doğal Mineral Harç",
      everydayUsage: "Tarihi Venedik saray sıvası, mermer efektli pürüzsüz duvar cilası, neme dayanıklı nefes alan kaplama.",
      alchemicalName: "Stucco Veneziano / Marmoratum",
      note: "İnce elenmiş mermer tozu en az 6 ay dinlendirilmiş yağlı sönmüş kireçle yoğrulup çelik spatulayla perdahlandığında havadaki CO2'yi emerek hakiki mermere dönüşür."
    },
    {
      colloquial: "Gülyağı Ruhu / Gül Attarı",
      scientific: "Isparta Gülü Buhar Destilatı Saf Uçucu Yağı (Rosa damascena)",
      formula: "Rosa_damascena_oil",
      category: "Bitkisel & Spajirik",
      subId: "sub-bot-rose-attar",
      safety: "🟢 Değerli Doğal Uçucu Yağ",
      everydayUsage: "Lüks parfümeri esansı, aromaterapi kalp ferahlatıcı, geleneksel gül suyu mayası.",
      alchemicalName: "Oleum Rosae Verum / Attar Gülü",
      note: "Yaklaşık 4 ton gül çiçeğinden sadece 1 kg saf gülyağı elde edilir; 18-20°C altında sedefimsi şeffaf kristaller halinde donması saflığının kadim işaretidir."
    },
    {
      colloquial: "Sedefotu Ruhu / Ruda Esansı",
      scientific: "Ruta Graveolens Hidroalkolik Ekstresi (%1-2 Rutin Flavonoidi)",
      formula: "Rutin_extract",
      category: "Bitkisel & Spajirik",
      subId: "sub-bot-rue-spirit",
      safety: "⚠️ Fototoksik / Hamilelikte Kesinlikle Kullanılmaz",
      everydayUsage: "Geleneksel göz yorgunluğu kompresi, spajirik damar toniği, antik veba sirkesi (Dört Hırsız Sirkesi) ana bileşeni.",
      alchemicalName: "Spiritus Rutae",
      note: "Sedefotunun çiçekli dallarından hazırlanan çok keskin kokulu spajirik özdür; furanokumarin içerdiğinden güneş ışığında ciltte leke ve yanık yapabilir."
    },
    {
      colloquial: "Cıva Süblimesi / Tatlı Cıva (Kalomel)",
      scientific: "Cıva(I) Klorür Kristalleri (Dimerik Cıva Tuzu, Hg2Cl2)",
      formula: "Hg2Cl2",
      category: "Tuz / Mineral",
      subId: "sub-min-calomel",
      safety: "🛑 TOKSİK CİVA BİLEŞİĞİ / YUTULMAMALI",
      everydayUsage: "Tarihi müshil ve frengi ilacı (modern tıpta terk edilmiştir), elektrokimyada standart kalomel referans elektrodu.",
      alchemicalName: "Calomelas / Mercurius Dulcis",
      note: "Suda çözünmediği için son derece öldürücü süblimeye (HgCl2) göre 'tatlı' olarak adlandırılmıştır; ancak bağırsak florasında kısmen çözünerek ağır metal zehirlenmesine yol açar."
    },
    {
      colloquial: "Zaç Ruhu / Dumanlı Sülfürik Asit (Oleum)",
      scientific: "Sülfür Trioksit Çözünmüş Derişik Sülfürik Asit (%20-65 Serbest SO3, H2S2O7)",
      formula: "H2S2O7",
      category: "Asit / Baz",
      subId: "sub-acid-oleum",
      safety: "🛑 AŞIRI KOROZİF / NEMDE ŞİDDETLİ ASİT DUMANI ÇIKARIR",
      everydayUsage: "Endüstriyel sülfonasyon reaksiyonları, sentetik boyar madde üretimi, aşırı derişik asit çözeltileri hazırlama.",
      alchemicalName: "Oleum / Spiritus Vitrioli Fumans",
      note: "Zaç yağının (H2SO4) içine kükürt trioksit gazı doyurularak elde edilen yağ kıvamında koyu asittir; havaya maruz kaldığında havanın nemiyle birleşerek beyaz asit sisi oluşturur."
    },
    {
      colloquial: "Katranotu Külü / Barilla Külü",
      scientific: "Kıyı Bitkileri Kalsinasyon Külü (Doğal Sodyum Karbonat & Tuz, %30+ Na2CO3)",
      formula: "Na2CO3_barilla_ash",
      category: "Tuz / Mineral",
      subId: "sub-min-barilla-ash",
      safety: "🟢 Alkalin Kül",
      everydayUsage: "Tarihi Venedik Murano kristal camı üretimi, meşhur Marsilya ve Halep sert kalıp sabunlarının doğal alkalisi.",
      alchemicalName: "Alkali Minerale / Soda Vegetabilis",
      note: "Salsola soda ve tuzcul kıyı bitkilerinin yakılmasıyla elde edilen taşlaşmış sert kül kütlesidir; odun külünün (potas) aksine zeytinyağını katı sert sabuna dönüştürür."
    },
    {
      colloquial: "Gümüş Nitrat Kalemi / Cehennem Taşı",
      scientific: "Saf Kristal Gümüş Nitrat (%95+ AgNO3 Döküm Çubuğu)",
      formula: "AgNO3",
      category: "Tuz / Mineral",
      subId: "sub-min-lapis-infernalis",
      safety: "⚠️ Dağlayıcı Kostik Oksitleyici / Cildi Siyaha Boyar",
      everydayUsage: "Tıbbi siğil ve granülasyon dokusu yakma (koterizasyon), burun kanaması damar dağlama, tarihi siğil kalemi.",
      alchemicalName: "Lapis Infernalis / Argentum Nitricum Fusum",
      note: "Eritilerek kalem veya çubuk şeklinde dökülen gümüş nitrattır; deriye değdirildiğinde proteinleri çökelterek dokuyu yakar ve ışık etkisiyle metalik gümüşe indirgenip deriyi simsiyah yapar."
    },
    {
      colloquial: "Kudret Narı Yağı / Momordica Merhemi",
      scientific: "Kudret Narı Meyvesi Zeytinyağı Maseresi (Momordica charantia)",
      formula: "Momordica_oil",
      category: "Bitkisel & Spajirik",
      subId: "sub-bot-bitter-melon-oil",
      safety: "🟢 Güvenli Doğal Şifalı Yağ",
      everydayUsage: "Geleneksel mide ülseri takviyesi, yanık ve kapanmayan yara pansumanı, egzama yumuşatıcı.",
      alchemicalName: "Balsamum Momordicae / Oleum Charantiae",
      note: "Olgun turuncu kudret narı meyvesinin çekirdekleriyle birlikte saf zeytinyağında güneşte en az 1 yıl bekletilip liflerinin yağa erimesiyle hazırlanan yoğun kırmızı-turuncu şifalı merhemdir."
    },
    {
      colloquial: "Damla Sakızı / Mastik Reçinesi",
      scientific: "Sakız Ağacı Doğal Triterpenik Reçinesi (Pistacia lentiscus var. chia)",
      formula: "Mastic_resin",
      category: "Organik / Çözücü",
      subId: "sub-org-mastic-gum",
      safety: "🟢 Tamamen Güvenli Doğal Aromatik Reçine",
      everydayUsage: "Geleneksel mide koruyucu (Helicobacter pylori önleyici), resim verniği (Mastik vernik), nefes tazeleyici sakız.",
      alchemicalName: "Resina Mastix / Mastice",
      note: "Sakız ağacı gövdesine atılan çiziklerden sızarak gözyaşı damlaları halinde donan yarı saydam kokulu reçinedir; terebentinde ve alkolde çözünerek sararmayan asil resim verniği olur."
    },
    {
      colloquial: "Kırmızı Cıva Oksit / Zencefre Külü",
      scientific: "Kırmızı Cıva(II) Oksit (HgO)",
      formula: "HgO",
      category: "Tuz / Mineral",
      subId: "sub-min-red-mercuric-oxide",
      safety: "🛑 TOKSİK CİVA BİLEŞİĞİ / YUTULMAMALI",
      everydayUsage: "Tarihi simya kalsinasyon tozu, Priestley ve Lavoisier'nin saf oksijen gazını keşfettiği meşhur reaktif.",
      alchemicalName: "Hydrargyrum Oxydatum Rubrum / Praecipitatus Ruber",
      note: "Cıvanın nitrik asitte çözülüp fırında yavaşça kavrulmasıyla elde edilen tuğla kırmızısı tozdur; 500°C'de saf metalik cıva buharına ve saf oksijen gazına ayrışır."
    },
    {
      colloquial: "Tavşan Pisliği Tuzu / Tarihi Güherçile Tortusu",
      scientific: "Doğal Kalsiyum & Potasyum Nitrat Tortusu [Ca(NO3)2 + KNO3]",
      formula: "Ca(NO3)2+KNO3",
      category: "Tuz / Mineral",
      subId: "sub-min-ancient-nitre-cake",
      safety: "⚠️ Güçlü Oksitleyici / Kuru Halde Yanıcılarla Karışmamalı",
      everydayUsage: "Tarihi güherçile yataklarından ve hayvan barınakları duvarlarından kazınan ham barut mayası.",
      alchemicalName: "Sal Nitri Antiquum / Nitrum Fodinae",
      note: "Nemli ve kireçli ahır duvarlarında organik azotun bakteriyel nitrifikasyonuyla türeyen beyaz tuz pamukçuklarıdır; odun külüyle kaynatılarak saf güherçileye (KNO3) dönüştürülür."
    },
    {
      colloquial: "Neft Yağı Ruhları / Çam Esansı",
      scientific: "Rektifiye Edilmiş Çam Terebentini (Distile Alfa-Pinen, C10H16)",
      formula: "C10H16_rect",
      category: "Organik / Çözücü",
      subId: "sub-org-spirit-turpentine",
      safety: "⚠️ Yanıcı Sıvı / Buharı Baş Ağrısı Yapabilir",
      everydayUsage: "Geleneksel ressam incelticisi, damla sakızı verniği çözücüsü, tarihi göğüs yumuşatıcı buğu.",
      alchemicalName: "Spiritus Terebinthinae Rectificatus",
      note: "Ham terebentinin su buharıyla tekrar tekrar arıtılmasıyla elde edilen berrak, reçinesiz saf terpen ruhudur; havayla temas ettikçe oksijen bağlar."
    },
    {
      colloquial: "Kemik Kömürü / Spodium",
      scientific: "Kalsine Kemik Kömürü (%10 Karbon, %80 Kalsiyum Fosfat, Ca3(PO4)2 + C)",
      formula: "Ca3(PO4)2+C",
      category: "Tuz / Mineral",
      subId: "sub-min-bone-char",
      safety: "🟢 Güvenli Adsorban ve Pigment",
      everydayUsage: "Tarihi şeker şurubu ağartıcısı, içme suyundan florür ve ağır metal arıtımı, en derin siyah yağlı boya pigmenti (Kemik Siyahı).",
      alchemicalName: "Spodium / Carbo Animalis",
      note: "Hayvan kemiklerinin havasız fırında yüksek sıcaklıkta piroliz edilmesiyle üretilir; bünyesindeki hidroksiapatit kafesi ağır metalleri kilitler."
    },
    {
      colloquial: "İnci Külü / Saflaştırılmış Potas",
      scientific: "Saf Fırınlanmış Potasyum Karbonat (K2CO3)",
      formula: "K2CO3_pure",
      category: "Asit / Baz",
      subId: "sub-base-pearl-ash",
      safety: "⚡ Seviye 2 (Alkali Karbonat)",
      everydayUsage: "Tarihi kabartma tozu (fırıncılıkta mayalama), antik camcılıkta kurşun kristali flaksı, spajirik bitki tuzu saflaştırması.",
      alchemicalName: "Cinereus Margaritarum / Pearl Ash",
      note: "Ham odun külü potasının suda çözülüp defalarca süzülmesi ve kalsine edilmesiyle elde edilen inci beyazı saf potastır; kuru kek ve çöreklerde ilk kimyasal kabartıcı olarak kullanılmıştır."
    },
    {
      colloquial: "Kan Taşı Tozu / Hematit Tozu",
      scientific: "Saf Kırmızı Demir(III) Oksit Tozu (α-Fe2O3)",
      formula: "Fe2O3_powder",
      category: "Tuz / Mineral",
      subId: "sub-min-hematite-powder",
      safety: "🟢 Güvenli Doğal Mineral Toz",
      everydayUsage: "Optik cam ve altın/gümüş mücevher parlatma cilası (Kuyumcu Allığı / Jeweller's Rouge), antik fresk kırmızı astarı.",
      alchemicalName: "Pulvis Lapidis Haematitis / Crocus Martis",
      note: "Demir sülfatın fırında kalsine edilmesi veya doğal hematitin su altında öğütülmesiyle elde edilen mikronize kırmızı tozdur; cam yüzeylerde çiziksiz ayna parlaklığı sağlar."
    },
    {
      colloquial: "Meryem Ana Dikeni Yağı / Devedikeni Yağı",
      scientific: "Silybum marianum Soğuk Sıkım Tohum Yağı (Silimarin & Linoleik Asit)",
      formula: "Silymarin_oil",
      category: "Bitkisel & Spajirik",
      subId: "sub-bot-milk-thistle-oil",
      safety: "🟢 Güvenli Tıbbi Bitkisel Yağ",
      everydayUsage: "Geleneksel karaciğer koruyucu fitoterapi takviyesi, antioksidan cilt serumu, safra kesesi destekleyici.",
      alchemicalName: "Oleum Cardui Mariae",
      note: "Devedikeni tohumlarının soğuk preslenmesiyle elde edilen altın sarısı yağdır; hücre zarını toksinlere karşı stabilize eden silimarin kompleksi içerir."
    },
    {
      colloquial: "Acı Badem Ruhu / Badem Esansı",
      scientific: "Prunus amygdalus var. amara Buhar Damıtma Hidrosolü (Benzaldehit, C7H6O)",
      formula: "C7H6O",
      category: "Bitkisel & Spajirik",
      subId: "sub-bot-bitter-almond-spirit",
      safety: "⚠️ Ham Halde Amigdalin/Siyanür İçerebilir / Arıtılmış Olmalı",
      everydayUsage: "Geleneksel marzipan ve likör aroması, parfümeri üst notası, tarihi öksürük damlaları.",
      alchemicalName: "Spiritus Amygdalarum Amararum",
      note: "Acı bademin ezilip fermente edildikten sonra damıtılmasıyla oluşan karakteristik badem kokulu uçucu sıvıdır; fermantasyonda enzimler amigdalini benzaldehite parçalar."
    },
    {
      colloquial: "Boyacı Şapı / Kalem Şapı",
      scientific: "Lifli Tüy Şapı / Alüminyum Sülfat Kristali [Al2(SO4)3·18H2O]",
      formula: "Al2(SO4)3*18H2O",
      category: "Tuz / Mineral",
      subId: "sub-salt-feather-alum",
      safety: "🟢 Güvenli Büzücü Mineral Tuz",
      everydayUsage: "Kök boya ve doğal yün boyamada mordanlama (renk sabitleme), su arıtma koagülasyonu, tarihi yangın geciktirici emprenye.",
      alchemicalName: "Alumen Plumosum / Alumen Scissile",
      note: "İpeksi parlak lifli kristal tabakalar halindedir; yün liflerindeki amin gruplarıyla doğal bitkisel pigmentler arasında çözünmez göl tuzu (lake) köprüsü kurar."
    },
    {
      colloquial: "Amber Reçinesi Ruhu / Süksinit Asidi",
      scientific: "Fosil Çam Reçinesi Kuru Damıtma Kristalleri (Süksinik Asit, C4H6O4)",
      formula: "C4H6O4",
      category: "Organik / Çözücü",
      subId: "sub-org-succinic-acid",
      safety: "🟢 Güvenli Doğal Dikarboksilik Asit",
      everydayUsage: "Tarihi kehribar yağı ve süksinik asit tuzu (hücresel enerji Krebs döngüsü uyarıcısı), aromatik vernik bazı.",
      alchemicalName: "Spiritus Succini / Sal Succini Volatile",
      note: "Milyonlarca yıllık Baltık kehribarının (amber) havasız imbikte kuru damıtılmasıyla elde edilen beyaz iğnemsi kristallerdir; antik çağda melankoli ve romatizma ilacı olarak kullanılmıştır."
    },
    {
      colloquial: "Akrep Taşı / Sürme Taşı",
      scientific: "Doğal Stibnit / Antimon Trisülfür Kristali (Sb2S3)",
      formula: "Sb2S3",
      category: "Tuz / Mineral",
      subId: "sub-min-stibnite-antimony",
      safety: "⚠️ Toksik Ağır Metal Bileşiği / Asla Ağızdan Alınmaz",
      everydayUsage: "Antik Mısır ve Mezopotamya göz sürmesi (kohl/rastık), piroteknikte parıldayan beyaz alev, kurşun alaşımlarında sertleştirici.",
      alchemicalName: "Lapis Scorpioni / Stibium / Lupus Metallorum (Metallerin Kurdu)",
      note: "Kurşuni metalik parlaklıkta iğnemsi sülfür mineralidir; simyada altın dışındaki tüm adi metalleri çözüp 'yuttuğu' için metallerin kurdu olarak adlandırılmıştır."
    },
    {
      colloquial: "Kedi Altını / Yalancı Altın",
      scientific: "Biotit & Muskovit Mika Tozu [K(Mg,Fe)3AlSi3O10(OH)2]",
      formula: "K(Mg,Fe)3AlSi3O10(OH)2",
      category: "Tuz / Mineral",
      subId: "sub-min-mica-gold",
      safety: "🟢 Güvenli Mineral Tozu (Solunmamalıdır)",
      everydayUsage: "Kozmetikte sedefli ışıltı veren aydınlatıcı (highlighter), mineral makyaj bazı, yüksek sıcaklık elektrik yalıtkanı (mikanit).",
      alchemicalName: "Aurum Felium / Lapis Specularis",
      note: "Güneş altında altın pulları gibi parıldayan katmanlı silikat mineralidir; kolayca yaprak yaprak ayrılır ve altın sanılarak tarihi yanılgılara yol açmıştır."
    },
    {
      colloquial: "Süleyman Mührü Otu Ruhu / Boğumluca Otu",
      scientific: "Polygonatum multiflorum Rizom Ekstresi (Steroid Saponinler & Müsilaj)",
      formula: "C18H24O12_extract",
      category: "Bitkisel & Spajirik",
      subId: "sub-bot-solomon-seal-spirit",
      safety: "🟢 Güvenli Harici ve Kontrollü Bitkisel Ekstre",
      everydayUsage: "Tarihi eklem bağları, burkulma, morluk ve kemik çatlakları onarım merhemi; geleneksel cilt toniği.",
      alchemicalName: "Sigillum Salomonis / Radix Polygonati",
      note: "Rizomlarındaki kesit izleri kral mührüne benzediği için bu ismi almıştır; içerdiği steroid saponinler ve müsilaj bağ dokusu kolajen yenilenmesini destekler."
    },
    {
      colloquial: "Enginar Yaprağı Ekstresi / Acı Karaciğer İksiri",
      scientific: "Cynara scolymus Yaprak Ekstresi (Sinarin & Klorojenik Asit)",
      formula: "C25H24O12_cynarin",
      category: "Bitkisel & Spajirik",
      subId: "sub-bot-artichoke-cynarin",
      safety: "🟢 Güvenli Doğal Hepatoprotektif Ekstre",
      everydayUsage: "Geleneksel safra akışı ve karaciğer detoksifikasyonu, sindirim acısı (bitter tonikler), kolesterol dengeleyici fitoterapi.",
      alchemicalName: "Extractum Foliorum Cynarae",
      note: "Çok yoğun acı lezzetiyle bilinen sinarin ve polifenolik asitler bakımından zengindir; safra kesesi kasılmasını (kolagog) ve hepatik rejenerasyonu kuvvetle uyarır."
    },
    {
      colloquial: "Şeytan Tersine Ruhlar / Hıltit Tentürü",
      scientific: "Ferula assa-foetida Reçinesi (Asafoetida / Ferulik Asit Esterleri)",
      formula: "C10H14O_terpenoids",
      category: "Bitkisel & Spajirik",
      subId: "sub-bot-asafoetida-tincture",
      safety: "🟡 Keskin Kükürt Kokulu / Dozaj Kontrollü",
      everydayUsage: "Antik Roma mutfağında silphium ikamesi (Hing baharatı), spazm çözücü gaz giderici, tarihi histeri ve veba tılsımı koruyucusu.",
      alchemicalName: "Stercus Diaboli / Asa Foetida",
      note: "Şiddetli sarımsak-kükürt kokusuna sahip oleo-sakız-reçinedir; kurutulduğunda kükürtlü ferulik asit esterleri açığa çıkar ve sindirim spazmlarını yatıştırır."
    },
    {
      colloquial: "Sabun Otu Kökü / Çöven Kökü",
      scientific: "Gypsophila paniculata / Saponaria Kök Saponinleri",
      formula: "C30H46O8_saponin",
      category: "Bitkisel & Spajirik",
      subId: "sub-bot-soapwort-coven",
      safety: "🟢 Güvenli Doğal Sürfaktan ve Köpürtücü",
      everydayUsage: "Geleneksel Türk helva ve lokum üretiminde kıvamlaştırıcı/beyazlatıcı köpük, narin tarihi halı/kumaş yıkayıcı, doğal organik şampuan bazı.",
      alchemicalName: "Radix Saponariae / Herba Saponis",
      note: "Suyla çalkalandığında kalıcı kalın bir köpük tabakası oluşturan triterpenoid saponinler içerir; kimyasal deterjan gerektirmeyen tarihi yüzey aktif maddedir."
    },
    {
      colloquial: "Çivit Otu / Çivit Mavisi",
      scientific: "Isatis tinctoria / Doğal İndigo Pigmenti (C16H10N2O2)",
      formula: "C16H10N2O2",
      category: "Bitkisel & Spajirik",
      subId: "sub-bot-woad-indigo",
      safety: "🟢 Güvenli Doğal Tekstil Pigmenti",
      everydayUsage: "Geleneksel denim/kot ve ipek mavi boyamacılığı, ebru sanatında mavi mordan boya, tarihi antiseptik yara tozu.",
      alchemicalName: "Pastel / Indicum Occidentale / Glaucum",
      note: "Fermente bitki yapraklarının alkali ortamda havalandırılması (oksidasyonu) ile suda çözünmeyen muazzam parlak mavi indigo çökeltisi kristalleşir."
    },
    {
      colloquial: "Kurtboğan Otu Tentürü / Boğan Otu",
      scientific: "Aconitum napellus Alkaloidleri (Akonitin, C34H47NO11)",
      formula: "C34H47NO11",
      category: "Bitkisel & Spajirik",
      subId: "sub-bot-aconite-wolfsbane",
      safety: "🛑 AŞIRI ZEHİRLİ VE ÖLÜMCÜL / Yalnızca Homöopatik D12+ veya Tarihi Referans",
      everydayUsage: "Tarihi zehirli ok ucu, 19. yüzyıl nevralji/siyatik ağrısı için aşırı seyreltik dış merhemler, farmakognozi referansı.",
      alchemicalName: "Herba Aconiti / Napellus / Kurtboğan",
      note: "Bitkiler aleminin en güçlü nörotoksinlerinden biri olan akonitini barındırır; voltaja duyarlı sodyum kanallarını bloke eder. Tarihte kurt ve av tuzaklarında kullanılmıştır."
    },
    {
      colloquial: "Mürrüsafi / Mür Sakızı",
      scientific: "Commiphora myrrha Sakız Reçinesi (Kurzeren & Furanoseskiterpenler)",
      formula: "C15H18O2_curzerene",
      category: "Bitkisel & Spajirik",
      subId: "sub-bot-myrrh-gum",
      safety: "🟢 Güvenli Doğal Antiseptik ve Büzücü",
      everydayUsage: "Ağız ve boğaz gargarası, diş eti çekilmesi tentürü, tarihi mumyalama mürrü, liturjik tütsü karışımları.",
      alchemicalName: "Myrrha Electa / Gummi Myrrhae",
      note: "Ağacın gövdesinden sızan kurutulmuş kırmızımsı reçine-sakızdır; içerdiği seskiterpenler güçlü antimikrobiyal ve doku büzücü (astringent) etki gösterir."
    },
    {
      colloquial: "Tatlı Cıva / Kalomel",
      scientific: "Cıva(I) Klorür Kristali (Hg2Cl2)",
      formula: "Hg2Cl2",
      category: "Tuz / Mineral",
      subId: "sub-salt-calomel-mercurous",
      safety: "⚠️ Toksik Ağır Metal / Tarihi Eczacılık İlacı (Modern Tıpta Yasaklı)",
      everydayUsage: "18. ve 19. yüzyılın en meşhur müshil ve sifiliz ilacı; modern elektrokimyada Doygun Kalomel Elektrot (SCE) referans elektrodu.",
      alchemicalName: "Draco Mitigatus / Calomelas / Mercurius Dulcis",
      note: "Süblime cıvanın (HgCl2) metalik cıva ile havanda dövülüp süblimleştirilmesiyle elde edilmiştir; klorür çözünürlüğü düşük olduğu için süblimeden daha az akut zehirlidir ancak kronik cıva birikimine yol açar."
    },
    {
      colloquial: "Akdiken Meyvesi Ekstresi / Cehri",
      scientific: "Rhamnus cathartica Meyve Ekstresi (Kaskarozit & Rhamnetin)",
      formula: "C27H30O14_cascaroside",
      category: "Bitkisel & Spajirik",
      subId: "sub-bot-buckthorn-cehri",
      safety: "🟡 Müshil Etkili / Kontrollü Dozaj",
      everydayUsage: "Tarihi Türk kumaş ve deri boyacılığında parlak altın sarısı renk (cehri sarısı), geleneksel bağırsak boşaltıcı şurup.",
      alchemicalName: "Baccae Rhamni Cathartici / Spina Cervina",
      note: "Olgunlaşmamış yeşilimsi sarı meyvelerinden şap mordanı ile muazzam kalıcı altın sarısı göl pigmenti (Stil de grain) elde edilir."
    },
    {
      colloquial: "Mısır Püskülü Ruhu / Mısır İpeği",
      scientific: "Stigmata Maydis Su-Alkol Ekstresi (Doğal Potasyum Tuzları & Allantoin)",
      formula: "K_salts_flavonoids",
      category: "Bitkisel & Spajirik",
      subId: "sub-bot-corn-silk",
      safety: "🟢 Güvenli Doğal Diüretik",
      everydayUsage: "Geleneksel böbrek kumu dökücü ve idrar yolları yatıştırıcı çay; ödem atıcı fitoterapi tentürü.",
      alchemicalName: "Stigmata Maydis / Barba Jovis",
      note: "Mısır koçanını saran ipeksi liflerdir; yüksek oranda potasyum tuzu, allantoin ve müsilaj içererek üriner epiteli korur."
    },
    {
      colloquial: "Altın Otu Çiçeği / Ölmez Çiçek",
      scientific: "Helichrysum arenarium Çiçek Ekstresi (Helikrizin & Narencin)",
      formula: "C27H32O14_helichrysin",
      category: "Bitkisel & Spajirik",
      subId: "sub-bot-immortelle-gold",
      safety: "🟢 Güvenli Karaciğer ve Safra Toniği",
      everydayUsage: "Böbrek taşı düşürme kürü, safra kesesi tembelliği, yaşlanma karşıtı lüks cilt serumu (ölmez çiçek esansiyel yağı).",
      alchemicalName: "Flores Stoechados Citrinae / Helichrysum",
      note: "Koparıldıktan sonra yıllarca solmayan parlak sarı çiçek başlarıdır; içerdiği kalkonlar ve narencin güçlü safra söktürücü (kolagog) etki gösterir."
    },
    {
      colloquial: "Kireç Sütü / Badana Kireci",
      scientific: "Kalsiyum Hidroksit Doygun Sulu Süspansiyonu [Ca(OH)2]",
      formula: "Ca(OH)2_susp",
      category: "Tuz / Mineral",
      subId: "sub-min-lime-milk",
      safety: "⚠️ Bazik / Gözle Temastan Kaçınınız",
      everydayUsage: "Geleneksel ağaç gövdesi ve duvar antiseptik badanası, tarımsal mantar önleyici kireçleme, şeker fabrikalarında ham şerbet kireçlemesi.",
      alchemicalName: "Lac Calcis / Calx Extincta Fluida",
      note: "Sönmüş kirecin suyla çalkalanarak oluşturulduğu sütsü kolloidal süspansiyondur; havadaki CO2'yi emerek sert kalsiyum karbonat kabuğu oluşturur."
    },
    {
      colloquial: "Acı Elma Yağı / Adaçayı Esansı",
      scientific: "Salvia fruticosa Uçucu Yağı (1,8-Sineol, Kafur & Borneol)",
      formula: "C10H18O_cineole",
      category: "Bitkisel & Spajirik",
      subId: "sub-bot-bitter-apple-oil",
      safety: "🟢 Güvenli Harici Aromatik Yağ / Dahili Yüksek Dozdan Kaçınınız",
      everydayUsage: "Geleneksel bebek karın masajı ve gaz giderici (elma yağı), boğaz enfeksiyonu gargarası, kas gevşetici masaj yağı.",
      alchemicalName: "Oleum Salviae Trilobae",
      note: "Anadolu adaçayının (elma çalısı) yapraklarından damıtılan uçucu yağdır; içerdiği 1,8-sineol ferahlatıcı antiseptik ve spazm çözücü etki sunar."
    },
    {
      colloquial: "Karatavuk Pisliği Tuzu / Güherçile Çiçeği",
      scientific: "Saflaştırılmış Potasyum Nitrat Kristali (KNO3)",
      formula: "KNO3_refined",
      category: "Tuz / Mineral",
      subId: "sub-salt-niter-refined",
      safety: "🟡 Oksitleyici Mineral Tuz / Yanıcı Maddelerden Uzak Tutunuz",
      everydayUsage: "Tarihi kara barut ve havai fişek oksitleyicisi, et kürleme ve kurutulmuş et koruyucu tuzu (E252), diş hassasiyeti macunu aktif bileşeni.",
      alchemicalName: "Sal Petrae Purissimum / Flos Nitri",
      note: "Ahır ve mağara duvarlarındaki güherçile çiçeklenmelerinin kül suyu ile kaynatılıp kristallendirilmesiyle elde edilen saf iğnemsi potasyum nitrattır."
    },
    {
      colloquial: "Tavuk Karası Taşı / Zırnık Taşı",
      scientific: "Doğal Sarı Auripigment / Arsenik Trisülfür (As2S3)",
      formula: "As2S3",
      category: "Tuz / Mineral",
      subId: "sub-min-orpiment-arsenic",
      safety: "🛑 AŞIRI ZEHİRLİ AĞIR METAL BİLEŞİĞİ / Asla Yutulmaz veya Solunmaz",
      everydayUsage: "Tarihi sarı resim pigmenti (Kral Sarısı / Auripigmentum), antik deri tabaklama kıl dökücüsü (zırnık), simyasal altın yaldız.",
      alchemicalName: "Auripigmentum / Arsenicum Citrinum",
      note: "Altın sarısı metalik parıltılı katmanlı arsenik mineralidir; antik simyacılar metalleri 'altına' dönüştürme denemelerinde sarı rengi için kullanmıştır."
    },
    {
      colloquial: "Kuru Üzüm Ruhu / Şarap Ruhu Başları",
      scientific: "Asetaldehit ve Etil Asetat Zengin Ham Alkol Fraksiyonu (C2H5OH + CH3CHO)",
      formula: "C2H5OH+CH3CHO",
      category: "Organik / Çözücü",
      subId: "sub-org-wine-foreshoots",
      safety: "⚠️ Yanıcı ve Baş Ağrıtıcı Buhar / İçilmez",
      everydayUsage: "Tarihi imbik damıtmasında ilk çıkan yüksek uçucu temizlik ve alevlendirme fraksiyonu, spajirik çözücü tentür bazı.",
      alchemicalName: "Anima Vini / Phlegma & Caput Mortuum Öncesi",
      note: "Damıtmanın başında kaynayan düşük kaynama noktalı etil asetat ve asetaldehit zengin fraksiyondur; keskin kokusuyla kalbin ruhu sayılmıştır."
    },
    {
      colloquial: "Andız Pekmezi Külü / Andız Katranı",
      scientific: "Juniperus drupacea Reçine ve Odun Katranı (Sedren & Karyofillen)",
      formula: "C15H24_cedrene",
      category: "Bitkisel & Spajirik",
      subId: "sub-bot-juniper-tar",
      safety: "🟢 Güvenli Harici Antiseptik ve Geleneksel Şurup",
      everydayUsage: "Geleneksel inatçı öksürük ve bronşit pekmezi, egzama ve saç kepeği katran sabunu, parazit önleyici hayvan toynağı bakım merhemi.",
      alchemicalName: "Pix Iuniperi Drupaceae",
      note: "Toros dağlarındaki andız kozalaklarının ezilip kaynatılmasıyla üretilen acımtırak pekmez ve odununun damıtılmasıyla oluşan koyu antiseptik katrandır."
    },
    {
      colloquial: "Kurtpençesi Kökü / Yılanotu",
      scientific: "Bistorta officinalis Rizom Ekstresi (Gallik & Kateşik Tanenler)",
      formula: "C14H20O9_tannins",
      category: "Bitkisel & Spajirik",
      subId: "sub-bot-bistort-root",
      safety: "🟢 Güvenli Güçlü Büzücü (Astringent)",
      everydayUsage: "Ağır kanama durdurucu ve yara pansumanı, diş eti çekilmesi ve ağız içi aft gargarası, geleneksel deri sepileme mordanı.",
      alchemicalName: "Radix Bistortae / Serpentaria",
      note: "Kıvrık yılan benzeri rizomları %20'ye varan gallik tanen içerir; temas ettiği mukozadaki proteinleri anında çözelterek kanamayı dindirir."
    },
    {
      colloquial: "Meyankökü Balı / Meyan Balı",
      scientific: "Glycyrrhiza glabra Kök Özütü (Glisirizik Asit & Likiritin)",
      formula: "C42H62O16_glycyrrhizin",
      category: "Bitkisel & Spajirik",
      subId: "sub-bot-licorice-extract",
      safety: "🟢 Güvenli Geleneksel Şurup ve Mukoza Koruyucu",
      everydayUsage: "Bronşit ve balgam söktürücü şuruplar, mide ülseri ve reflü koruyucu pastil, geleneksel meyan şerbeti ve eczacılık hap bağlayıcısı.",
      alchemicalName: "Succus Liquiritiae Depuratus",
      note: "Meyan köklerinin su ile kaynatılıp konsantre edilmesiyle elde edilen siyah tatlı özdür; şekere göre 50 kat tatlı glisirizin içerir."
    },
    {
      colloquial: "Dağ Nanesi Ruhu / Yarpuz Esansı",
      scientific: "Mentha pulegium Uçucu Yağı (Pulegon & İzomenton)",
      formula: "C10H16O_pulegone",
      category: "Bitkisel & Spajirik",
      subId: "sub-bot-pennyroyal-oil",
      safety: "🟡 Dikkatli Kullanım (Yüksek Dozda Toksik / Karaciğer)",
      everydayUsage: "Geleneksel böcek ve güve kovucu sprey, harici ferahlatıcı romatizma ovma ispirtosu, mikrop kırıcı hava buğusu.",
      alchemicalName: "Oleum Pulegii",
      note: "Sulak çayırlarda yetişen yabani yarpuzdan damıtılan çok keskin kokulu esanstır; pulegon içeriği nedeniyle asla yüksek dozda içilmez, harici kullanılır."
    },
    {
      colloquial: "Çadıruşağı Otu Sakızı / Kasnı",
      scientific: "Ferula gummosa / galbaniflua Reçinesi (Umbelliferon & Galbanolen)",
      formula: "C15H22O3_galbanum",
      category: "Reçine & Sakız",
      subId: "sub-bot-galbanum-gum",
      safety: "🟢 Güvenli Aromatik Tütsü ve Merhem",
      everydayUsage: "Antik parfümeri yeşil tepe notası, iltihaplı çıban ve yara olgunlaştırıcı yakı, mistik buhur ve tütsü karışımları.",
      alchemicalName: "Gummi Resina Galbanum",
      note: "Kök gövdesine atılan çiziklerden sızan süt kıvamındaki aromatik sakızdır; kuruyunca yeşilimsi sarı reçineye dönüşür ve parfümeriye yoğun yeşil doğa kokusu katar."
    },
    {
      colloquial: "Sedef Otu Yağı / Rüta Esansı",
      scientific: "Ruta graveolens Uçucu Yağı (Metil Nonil Keton & Rutin)",
      formula: "C11H22O_undecanone",
      category: "Bitkisel & Spajirik",
      subId: "sub-bot-rue-oil",
      safety: "🟡 Fototoksik / Dikkatli Harici Kullanım",
      everydayUsage: "Geleneksel nazar tütsüsü, harici spazm çözücü masaj yağı, sirke ile karıştırılarak yapılan antiseptik haşere kalkanı.",
      alchemicalName: "Oleum Rutae Aetherium",
      note: "Güneş ışığında ciltte fito-fotodermatit (lekelenme) yapabilen furanokumarinler içerir; orta çağda veba koruyucu dört hırsız sirkesinin ana bileşenidir."
    },
    {
      colloquial: "Çam Sakızı Ruhu / Kolofan Sakızı",
      scientific: "Pinus brutia / nigra Katı Reçinesi (Abietik Asit & Pinenler)",
      formula: "C20H30O2_abietic",
      category: "Reçine & Sakız",
      subId: "sub-bot-colophony-resin",
      safety: "🟢 Güvenli Harici Yapıştırıcı ve Mordan",
      everydayUsage: "Keman ve yaylı çalgı yayı reçinesi, geleneksel ağda ve epilasyon yapıştırıcısı, lehim pastası mordanı, çam sakızı merhemi.",
      alchemicalName: "Resina Colophonium",
      note: "Ham çam terebentininin distilasyonundan geriye kalan katı amber sarısı gevrek reçinedir; alkolde tamamen çözünür."
    },
    {
      colloquial: "Göz Otu Suyu / Teselli Çiçeği",
      scientific: "Euphrasia officinalis Hidrosolü (Okubin & Luteolin Glikozitleri)",
      formula: "C15H22O9_aucubin",
      category: "Bitkisel & Spajirik",
      subId: "sub-bot-eyebright-water",
      safety: "🟢 Güvenli Göz ve Cilt Pansumanı",
      everydayUsage: "Yorgun ve kızarmış göz banyosu, konjonktivit ve arpacık kompresi, hassas göz çevresi yatıştırıcı toniği.",
      alchemicalName: "Aqua Euphrasiae Destillata",
      note: "Eski hekimlerin 'imza doktrini' uyarınca çiçeğindeki göz benzeri çizgilerden ötürü göz hastalıklarında başvurduğu, antienflamatuar iridoit içeren bitki suyudur."
    },
    {
      colloquial: "Yüksükotu Tentürü / Dijital",
      scientific: "Digitalis purpurea Yaprak Ekstresi (Dijitoksin & Digoksin)",
      formula: "C41H64O13_digitoxin",
      category: "Farmasötik Bitkisel",
      subId: "sub-pharm-digitalis-tincture",
      safety: "🔴 ÇOK ZEHİRLİ / Yalnızca Tıbbi Reçeteli (Kardiyak)",
      everydayUsage: "Kalp yetmezliği ve atriyal fibrilasyonda pozitif inotropik kardiyak glikozit kaynağı (Tarihi ve modern kardiyoloji ilacı).",
      alchemicalName: "Tinctura Digitalis Purpureae",
      note: "William Withering tarafından 1785'te modern tıbba kazandırılan kardiyak glikozit kaynağıdır; terapötik indeksi çok dardır, miligramlık doz aşımı ölümcül kardiyotoksiktir."
    },
    {
      colloquial: "Meşe Mazısı Tozu / Mazı Unu",
      scientific: "Quercus infectoria Mazı Gallotannin Tozu (%60-70 Gallotanen)",
      formula: "C76H52O46_tannic",
      category: "Mordan & Doğal Kimyasal",
      subId: "sub-min-oak-gall-powder",
      safety: "🟢 Güvenli Güçlü Büzücü ve Doğal Mordan",
      everydayUsage: "Demir sülfat (kara vitriol) ile tarihi kara demir mürekkebi (iron gall ink) yapımı, deri tabaklama, kanayan yaraları dağlayıcı pudra.",
      alchemicalName: "Galla Turcica / Gallae Tinctoriae",
      note: "Mazı arısının meşe yaprak tomurcuklarını sokmasıyla oluşan tanence aşırı zengin urlardır; demir tuzlarıyla simsiyah kalıcı demir-galat kompleksi oluşturur."
    },
    {
      colloquial: "Zencefil Ruhu / Zencefil Esansı",
      scientific: "Zingiber officinale Rizom Oleoresini (Gingerol & Zingiberen)",
      formula: "C17H26O4_gingerol",
      category: "Bitkisel & Spajirik",
      subId: "sub-bot-ginger-oleoresin",
      safety: "🟢 Güvenli Baharat ve Isıtıcı Merhem",
      everydayUsage: "Mide bulantısı ve taşıt tutması damlası, ısıtıcı kas ve eklem masaj jelleri, sindirimi uyarıcı bitkisel iksirler ve tonikler.",
      alchemicalName: "Tinctura Zingiberis Fortis",
      note: "Taze kökte bulunan gingerol ısıtıldığında şogaole dönüşerek acılık ve ısıtıcı etkisini ikiye katlar; periferal kan dolaşımını canlandırır."
    },
    {
      colloquial: "Civanperçemi Çiçeği Ruhu / Kandil Otu",
      scientific: "Achillea millefolium Uçucu Yağı (Kamazulen & Apigenin)",
      formula: "C14H16_chamazulene",
      category: "Bitkisel & Spajirik",
      subId: "sub-bot-yarrow-oil",
      safety: "🟢 Güvenli Doğal Antienflamatuar",
      everydayUsage: "Mavi renkli yara iyileştirici merhemler, kadın döngüsü sancı masaj yağları, cilt sakinleştirici ve kılcal damar güçlendirici serumlar.",
      alchemicalName: "Oleum Millefolii Coeruleum",
      note: "Buhar distilasyonu sırasında renksiz proazulenden dönüşen koyu lacivert kamazulen molekülü nedeniyle yağı mürekkep mavisi renktedir; antik çağda savaşçıların yara ilacıdır."
    },
    {
      colloquial: "Pelin Otu Ruhu / Efsintin",
      scientific: "Artemisia absinthium Uçucu Yağı ve Ekstresi (Absintin, Anabsintin & Alfa-Tujon)",
      formula: "C30H40O6_absinthin",
      category: "Bitkisel & Spajirik",
      subId: "sub-bot-wormwood-oil",
      safety: "🟡 Dikkatli Kullanım (Tujon Nörotoksisitesi / Doz Aşımı)",
      everydayUsage: "Acı sindirim iksiri (elixir stomachicum), safra söktürücü tonik, geleneksel bağırsak kurdu düşürücü ve tarihi absente aroması.",
      alchemicalName: "Spiritus Absinthii",
      note: "Bilinen en acı doğal maddelerden biridir; acılık reseptörlerini (TAS2R) uyararak gastrik sıvı salgısını azamiye çıkarır ancak yüksek dozda tujon kramp yapabilir."
    },
    {
      colloquial: "Eğir Kökü / Hazambel",
      scientific: "Acorus calamus Rizom Ekstresi (Beta-Asaron & Kalamen)",
      formula: "C12H16O3_asarone",
      category: "Bitkisel & Spajirik",
      subId: "sub-bot-calamus-root",
      safety: "🟡 Dikkatli Dozlama (Asaron İçeriği)",
      everydayUsage: "Ses teli kısıklığı çiğneme kökü, mide asidi dengeleyici ve gaz giderici çay, hafıza ve zihin açıcı kadim Hint-Arap macunları.",
      alchemicalName: "Radix Calami Aromatici",
      note: "Bataklık kenarlarında yetişen rizomları tatlı-baharatlı yoğun kokuya sahiptir; Klasik tıp yazmalarında hatip ve şarkıcıların ses açıcı çiğneme droğudur."
    },
    {
      colloquial: "Melek Otu Kökü / Başmelek Otu",
      scientific: "Angelica archangelica Kök Özütü (Angelisin & Furanokumarinler)",
      formula: "C11H6O3_angelicin",
      category: "Bitkisel & Spajirik",
      subId: "sub-bot-angelica-root",
      safety: "🟢 Güvenli İksir ve Tonik (Güneşte Fototoksik)",
      everydayUsage: "Benedictine ve Chartreuse likörlerinin temel aroması, mide kramplarını yatıştırıcı karminatif iksir, harici ısıtıcı göğüs ovma merhemi.",
      alchemicalName: "Radix Angelicae / Herba Sancti Spiritus",
      note: "Orta çağ veba salgınlarında Başmelek Mikail'in şifa için işaret ettiğine inanılan kutsal şifa köküdür; derin aromatik kumarinler ve monoterpenler içerir."
    },
    {
      colloquial: "Günlük Sakızı / Akgünlük Buhuru",
      scientific: "Boswellia serrata Reçinesi (Asetil-11-Keto-Beta-Bosvellin Asidi / AKBA)",
      formula: "C32H48O4_akba",
      category: "Reçine & Sakız",
      subId: "sub-bot-frankincense-gum",
      safety: "🟢 Güvenli Güçlü Doğal Antienflamatuar",
      everydayUsage: "Kronik eklem kireçlenmesi ve romatizma macunu, astım ve nefes darlığı buhuru, kırışıklık karşıtı lüks yüz bakım serumu.",
      alchemicalName: "Olibanum / Gummi Thus",
      note: "5-Lipoksijenaz (5-LOX) enzimini doğrudan baskılayan en kuvvetli doğal reçinedir; tapınak buhuru olarak zihni sakinleştirir ve yangıyı dindirir."
    },
    {
      colloquial: "Defne Meyvesi Yağı / Tehnel Yağı",
      scientific: "Laurus nobilis Meyvesi Katı Yağı (Laurik Trigliserit & 1,8-Sineol)",
      formula: "C39H74O6_laurin",
      category: "Bitkisel & Spajirik",
      subId: "sub-oil-laurel-fruit",
      safety: "🟢 Güvenli Geleneksel Sabun ve Merhem",
      everydayUsage: "Tarihi Halep ve Antakya defne sabunu ana hammaddesi, romatizma ve kulunç masaj yağı, saçkıran ve kepek önleyici saç kürü.",
      alchemicalName: "Oleum Lauri Expressum",
      note: "Siyah defne meyvelerinin kaynatılıp preslenmesiyle çıkan koyu zümrüt yeşili aromatik katı yağdır; doğal laurin ve sineol ile kuvvetli antiparaziterdir."
    },
    {
      colloquial: "Çörekotu Ruhu / Habbe-i Sevda Esansı",
      scientific: "Nigella sativa Tohumu Uçucu Yağı (Timokinon & Ditiymokinon)",
      formula: "C10H12O2_thymoquinone",
      category: "Bitkisel & Spajirik",
      subId: "sub-bot-blackseed-oil",
      safety: "🟢 Güvenli İmmünomodülatör ve Hücre Koruyucu",
      everydayUsage: "Bağışıklık güçlendirici kış iksiri damlası, alerjik astım ve burun tıkanıklığı damlası, egzama ve sedef yatıştırıcı harici serum.",
      alchemicalName: "Oleum Nigellae Sativae Aetherium",
      note: "Antik Mısır'dan beri 'ölümden başka her derde deva' kabul edilen timokinonca zengin tohum ruhudur; histamin salgısını baskılar ve hücresel bağışıklığı destekler."
    },
    {
      colloquial: "Dulavratotu Kökü / Pıtraklı Kök",
      scientific: "Arctium lappa Rizom Ekstresi (İnülin & Arktojenin Lignanları)",
      formula: "C27H34O11_arctiin",
      category: "Bitkisel & Spajirik",
      subId: "sub-bot-burdock-root",
      safety: "🟢 Güvenli Kan Temizleyici ve Saç Toniği",
      everydayUsage: "Akne, ergenlik sivilcesi ve çıban kurutucu çay, dökülen saç köklerini canlandırıcı losyon, kan şekerini dengeleyici prebiyotik kök suyu.",
      alchemicalName: "Radix Bardanae",
      note: "Kökünün %50'ye yakını fruktoz polimeri olan inülindir; karaciğer ve böbrek filtrasyonunu destekleyerek toksinlerin ciltten atılmasını önler."
    },
    {
      colloquial: "Kurtayağı Otu Tozu / Kibrit Otu Sporları",
      scientific: "Lycopodium clavatum Olgun Spor Tozu (Sporopollenin & Likopodin)",
      formula: "C16H25NO_lycopodine",
      category: "Mordan & Doğal Kimyasal",
      subId: "sub-bot-lycopodium-spores",
      safety: "🟢 Güvenli Aşırı Hidrofobik Pudra (Ateşle Parlar)",
      everydayUsage: "Tarihi flaş ve tiyatro alev tozu, bebek pişik pudrası, nem almayan eczacılık hap yuvarlama tozu ve parmak izi teşhis tozu.",
      alchemicalName: "Sporae Lycopodii / Pulvis Vegetabilis",
      note: "Suya döküldüğünde suyu kesinlikle ıslatmayan mikroskobik hidrofobik sporlardır; suyun içine daldırılan parmak kuru çıkar; alev üzerinden üflendiğinde anında parlar."
    },
    {
      colloquial: "Sarı Kantaron Kırmızısı / Yara Yağı",
      scientific: "Hypericum perforatum Çiçeği Zeytinyağı Mazeratı (Hiperisin & Hiperforin)",
      formula: "C30H16O8_hypericin",
      category: "Bitkisel & Spajirik",
      subId: "sub-bot-stjohnswort-oil",
      safety: "🟢 Güvenli Harici Hücre Yenileyici (Fototoksik)",
      everydayUsage: "1. ve 2. derece yanık tedavisi, derin bıçak ve ameliyat yara izi giderici, sinir sıkışması ve nevralji masajı.",
      alchemicalName: "Oleum Hyperici Rubrum",
      note: "Sarı çiçeklerin zeytinyağında güneşte bekletilmesiyle hiperisin pigmenti açığa çıkarak yağı kan kırmızı renge boyar; fibroblast üretimini artırarak doku iyileşmesini 3 kat hızlandırır."
    },
    {
      colloquial: "Söğüt Kabuğu Özü / Ağaç Aspirini",
      scientific: "Salix alba Genç Dal Kabuğu Ekstresi (Doğal Salisin & Salisilik Asit Öncüsü)",
      formula: "C13H18O7_salicin",
      category: "Farmasötik Bitkisel",
      subId: "sub-bot-willow-bark",
      safety: "🟢 Güvenli Doğal Ağrı Kesici ve Ateş Düşürücü",
      everydayUsage: "Aspirinin doğal atası; romatizma ağrıları, baş ağrısı ve yüksek ateş çayı, akne kurutucu doğal BHA toniği.",
      alchemicalName: "Cortex Salicis Albae",
      note: "1828'de Johann Buchner tarafından izole edilen salisin glikoziti karaciğerde salisilik aside dönüşerek ağrıyı keser; sentetik aspirine kıyasla mideyi tahriş etmez."
    },
    {
      colloquial: "Kına Kına Kabuğu / Cinchona",
      scientific: "Cinchona succirubra Gövde Kabuğu Ekstresi (Doğal Kinin & Kinkonin Alkaloidleri)",
      formula: "C20H24N2O2_quinine",
      category: "Farmasötik Alkaloid",
      subId: "sub-bot-cinchona-bark",
      safety: "🟡 Dikkatli Dozajlanmalıdır (Kardiyovasküler Etki)",
      everydayUsage: "Sıtma hastalığının tarihteki ilk kesin ilacı, yüksek dirençli nöbet ateşi dindirici ve tonik suyunun (tonic water) karakteristik acı bileşeni.",
      alchemicalName: "Cortex Chinae / Pulvis Jesuiticus",
      note: "Güney Amerika yerlilerinden Cizvit rahipleri tarafından Avrupa'ya getirilen ve Kontes Chinchon'un adını alan kinin, parazit plazmodyumların eritrositleri parçalamasını engelleyerek tıp tarihinde devrim yapmıştır."
    },
    {
      colloquial: "Kafur Ruhu / Kâfuru Esansı",
      scientific: "Cinnamomum camphora Ağacından Kristallendirilen D-Kafur Alkol Çözeltisi",
      formula: "C10H16O_camphor",
      category: "Bitkisel & Spajirik",
      subId: "sub-bot-camphor-spirit",
      safety: "🟢 Harici Kullanımda Güvenli (Dahili Yutulmaz)",
      everydayUsage: "Göğüs açıcı buğu (Vicks benzeri), burkulma ve adale tutulması ovma losyonu, güve kovucu doğal kristal koku ve antiseptik hava dezenfektanı.",
      alchemicalName: "Spiritus Camphoratus / Resina Camphorae",
      note: "Uzak Doğu kafur ağacının damıtılmasıyla süblimleşen beyaz hegzagonal kristallerdir; derideki soğuk reseptörlerini (TRPM8) uyararak önce ferahlık ardından güçlü bir kanlanma ve analjezi sağlar."
    },
    {
      colloquial: "Yılan Otu Kökü / Centiyane",
      scientific: "Gentiana lutea Dağ Bitkisi Kök Özü (Amarogentin & Gensiyopikrin Glikozitleri)",
      formula: "C29H30O13_amarogentin",
      category: "Fitofarmasötik Acı Tonik",
      subId: "sub-bot-gentian-root",
      safety: "🟢 Güvenli Doğal Sindirim Uyarıcı",
      everydayUsage: "Bilinen en acı doğal madde (1:58.000.000 seyreltide bile acılık hissedilir); iştahsızlık, safra tembelliği ve mide asidi yetersizliği tedavisinde altın standart acı tonik.",
      alchemicalName: "Radix Gentianae Luteae",
      note: "İsmini M.Ö. 170'te yaşayan İlirya Kralı Gentius'tan alan bu kadim kök, mide mukozasındaki acı tat almaçlarını (T2R) uyararak gastrin ve mide özsuyu salgısını 4 katına çıkarır."
    },
    {
      colloquial: "Kudret Narı Yağı / Acı Dülek Yağı",
      scientific: "Momordica charantia Meyvesi Zeytinyağı Ekstraktı (Çarantin, Momordisin & Karotenoidler)",
      formula: "C35H58O6_charantin",
      category: "Fitoterapi & Yara Onarımı",
      subId: "sub-bot-bitter-melon-oil",
      safety: "🟢 Güvenli Hücre Onarıcı Mazerat",
      everydayUsage: "Mide ülseri ve gastrit tedavisi, reflü hafifletici sabah kürü, açık yara, yanık ve egzama doku yenileyici merhem tabanı.",
      alchemicalName: "Balsamina / Oleum Charantiae",
      note: "Olgun turuncu kudret narı meyvelerinin çekirdekleriyle birlikte soğuk sıkım zeytinyağında 40 gün fermente edilmesiyle elde edilir; dokularda kollajen sentezini ve epitelizasyonu belirgin ölçüde hızlandırır."
    },
    {
      colloquial: "Gül Hatmi Çiçeği Sümüksü Özü / Hatmi Müsilajı",
      scientific: "Althaea officinalis Çiçek ve Kök Müsilajı (Arabinogalaktan & Ramnogalakturonan Polisakkaritleri)",
      formula: "C12H20O10_mucilage_poly",
      category: "Yatıştırıcı Müsilaj",
      subId: "sub-bot-marshmallow-root",
      safety: "🟢 Tamamen Toksinsiz Doğal Yumuşatıcı",
      everydayUsage: "Kuru ve tahriş edici inatçı öksürük şurubu, farenjit ve ses kısıklığı boğaz pastili, mide yanmasını örten koruyucu jel bariyer.",
      alchemicalName: "Mucilago Althaeae",
      note: "Soğuk suyla masere edildiğinde vizkoz hidrokolloid bir jel oluşturur; mukoza yüzeyini koruyucu bir tabakayla kaplayarak mekanik tahrişi ve sinirsel öksürük refleksini keser."
    },
    {
      colloquial: "Karabaş Otu Ruhu / Keşiş Otu Esansı",
      scientific: "Lavandula stoechas Çiçek Uçucu Yağı (Fenchon, D-Kafur & Luteolin Flavonoidleri)",
      formula: "C10H16O_fenchone",
      category: "Geleneksel Tıbbi Çiçek",
      subId: "sub-bot-french-lavender",
      safety: "🟢 Güvenli Nöroprotektif Ekstre",
      everydayUsage: "İbn-i Sina tarafından 'beynin süpürgesi' olarak anılan kafa rahatlatıcı çay, migren ve gerilim tipi baş ağrısı ovması, sigara bırakma buğusu.",
      alchemicalName: "Flores Stoechados Arabicae",
      note: "Yalancı lavanta olarak da bilinen karabaş otu, yüksek fenchon ve kafur içeriğiyle serebral kan dolaşımını canlandırır ve sinir dokularında oksidatif stresi azaltır."
    },
    {
      colloquial: "Andız Pekmezi / Andız Katranı Özü",
      scientific: "Juniperus oxycedrus ve Cedrus libani Kozalaklarından Pişirilen İnulin ve Seskititerpen Konsantresi",
      formula: "C15H24_cadinene",
      category: "Balsamik & Aromatik",
      subId: "sub-bot-juniper-tar-molasses",
      safety: "🟢 Güvenli Bronş Açıcı & Antiparaziter",
      everydayUsage: "Kronik bronşit ve balgam söktürücü kış macunu, çocuklarda kıl kurdu dökücü şurup, ağız içi aft ve diş eti iltihabı gargarası.",
      alchemicalName: "Succus Juniperi Oxycedri / Pix Liquida",
      note: "Toros dağlarında yetişen andız kozalaklarının günlerce kaynatılmasıyla zift kıvamına getirilen buruk-tatlı pekmezdir; akciğer alveollerindeki mukusu parçalayan uçucu terpinenler içerir."
    },
    {
      colloquial: "Aynısefa Merhemi Çiçeği / Portakal Nergisi",
      scientific: "Calendula officinalis Taç Yaprak Ekstresi (Faradiol Esterleri & Kalendulin)",
      formula: "C30H50O2_faradiol",
      category: "Kozmesötik & Dermatolojik",
      subId: "sub-bot-calendula-flower",
      safety: "🟢 Hipoalerjenik Doku Onarıcı",
      everydayUsage: "Bebek pişik kremleri, emziren anneler için göğüs ucu çatlak merhemi, radyoterapi sonrası cilt yanıkları ve kılcal damar genişlemesi kremi.",
      alchemicalName: "Flores Calendulae Sine Calicibus",
      note: "Faradiol monoesterleri içeren altın sarısı taç yapraklar, kortizona yakın antienflamatuar etki gösterirken steroidlerin inceltici yan etkilerini barındırmaz."
    },
    {
      colloquial: "Mürver Çiçeği Suyu / Terletici Çiçek",
      scientific: "Sambucus nigra Çiçek Distilatı (Rutin, İzokwersitrin & Sambunigrin)",
      formula: "C27H30O16_rutin",
      category: "Diaforetik Bitkisel",
      subId: "sub-bot-elderflower-water",
      safety: "🟢 Güvenli Doğal Ateş Düşürücü (Çiçekler)",
      everydayUsage: "Grip ve nezlede toksin atıcı terletici bitki çayı, cilt lekeleri ve göz altı morlukları toniği, ferahlatıcı aromatik şerbet.",
      alchemicalName: "Aqua Sambuci Destillata",
      note: "Hipotalamustaki termoregülasyon merkezini uyararak ter bezlerini nazikçe aktive eder; terleme yoluyla viral enfeksiyonlarda ateşin hızla normale dönmesini sağlar."
    },
    {
      colloquial: "Demir Dikeni Ekstresi / Çoban Çökerten",
      scientific: "Tribulus terrestris Meyve ve Yaprak Ekstresi (Protodiosin & Steroidal Furostanol Saponinleri)",
      formula: "C51H84O22_protodioscin",
      category: "Fitokimyasal Adaptojen",
      subId: "sub-bot-tribulus",
      safety: "🟢 Güvenli Canlandırıcı Adaptojen",
      everydayUsage: "Erkeklerde lüteinizan hormon (LH) destekleyici performans kürü, sporcu kas kütlesi ve dayanıklılık artırıcı, böbrek kumu dökücü idrar söktürücü.",
      alchemicalName: "Fructus Tribuli / Caltrop",
      note: "Meyvelerindeki protodiosin saponini vücutta dehidroepiandrosteron (DHEA) yolunu aktive ederek serbest testosteron dengesini ve nitrik oksit (NO) endotel salgısını artırır."
    },
    {
      colloquial: "Karanfil Ruhu / Karanfil Esansı",
      scientific: "Syzygium aromaticum Çiçek Tomurcuğu Uçucu Yağı (%80-90 Öjenol & Karyofillen)",
      formula: "C10H12O2_eugenol",
      category: "Aromatik & Diş Hekimliği",
      subId: "sub-bot-clove-oil",
      safety: "🟢 Güvenli Güçlü Lokal Anestezik ve Antiseptik",
      everydayUsage: "Tarihi diş hekimliğinde geçici dolgu harcı (çinko oksit öjenol), dayanılmaz diş ağrısı tamponu, cerrahi alet sterilizasyonu ve boğaz spreyi.",
      alchemicalName: "Oleum Caryophylli Florum",
      note: "Yüksek konsantrasyonda öjenol fenolü içerir; sinir uçlarındaki voltaja duyarlı sodyum kanallarını bloke ederek saniyeler içinde güçlü bir uyuşma ve analjezi sağlar."
    },
    {
      colloquial: "Günlük Yağı / Sığala Yağı",
      scientific: "Liquidambar orientalis Ağacı Yaralanma Balsamı (Sinnamik Asit, Stirasin & Sinamil Alkol)",
      formula: "C9H8O2_cinnamic",
      category: "Balsamik & Yara Onarımı",
      subId: "sub-bot-storax-oil",
      safety: "🟢 Güvenli Endemik Doku İyileştirici",
      everydayUsage: "Mide ülseri ve reflü tedavisinde kadim Anadolu kürü, yanık ve yatak yaraları pomadı, lüks parfüm sabitleyici (fiksatif) ve tütsü.",
      alchemicalName: "Styrax Liquidus / Balsamum Liquidambaris",
      note: "Dünyada sadece Muğla-Fethiye havzasında endemik Anadolu sığala ağacının gövdesinden yontularak çıkarılan tarihi sıvıdır; Kleopatra'nın aşk iksiri ve mumyalama merhemi olarak kullanılmıştır."
    },
    {
      colloquial: "Hodan Otu Yağı / Zemberek Otu",
      scientific: "Borago officinalis Tohumu Soğuk Sıkım Yağı (%20-25 Gama-Linolenik Asit - GLA)",
      formula: "C18H30O2_gla",
      category: "Esansiyel Yağ Asidi & Hücre Yenileyici",
      subId: "sub-bot-borage-oil",
      safety: "🟢 Toksinsiz Doğal Hücre Bariyeri Desteği",
      everydayUsage: "Bitkiler alemindeki en zengin GLA kaynağı; egzama, atopik dermatit ve sedef kremleri, menopoz dönemi hormonal destek kapsülleri ve derin kırışıklık serumu.",
      alchemicalName: "Oleum Boraginis Officinalis",
      note: "Deride prostaglandin E1 (PGE1) sentezini tetikleyerek kronik enflamasyonu bastırır; stratum corneum bariyer lipidlerini hızla yenileyerek trans-epidermal su kaybını (TEWL) önler."
    },
    {
      colloquial: "Sedir Ağacı Katranı / Katran Ağacı Yağı",
      scientific: "Cedrus libani ve Cedrus atlantica Gövdesinden Kuru Damıtılan Fenolik Katran (Sedrol & Sedren)",
      formula: "C15H26O_cedrol",
      category: "Balsamik & Antifungal",
      subId: "sub-bot-cedar-tar",
      safety: "🟢 Harici Kullanımda Güvenli Antiparaziter",
      everydayUsage: "Saç dökülmesi ve kepek şampuanı, uyuz ve egzama pomadı, tarihi ahşap binaları mantar ve termitlerden koruyan bin yıllık koruyucu reçine.",
      alchemicalName: "Pix Cedri / Oleum Cedrinum",
      note: "Toros sedirlerinin havasız fırınlarda kuru distilasyonuyla üretilen koyu renkli aromatik sıvıdır; paraziter akarları felç eder ve mantar sporlarının çimlenmesini engeller."
    },
    {
      colloquial: "Civanperçemi Suyu / Akbaş Otu Distilatı",
      scientific: "Achillea millefolium Çiçekli Dal Buhar Distilatı (Kamazulen, Apigenin & Sinamil Alkol)",
      formula: "C14H16_chamazulene_water",
      category: "Hemostatik & Yara Yıkayıcı",
      subId: "sub-bot-yarrow-water",
      safety: "🟢 Güvenli Doğal Kanama Durdurucu",
      everydayUsage: "Tarihte savaş meydanlarında kanamalı kılıç yaralarını temizleme suyu (Herba Militaris), kadınlarda aşırı adet kanaması toniği, hemoroid banyosu.",
      alchemicalName: "Aqua Millefolii Destillata / Herba Militaris",
      note: "Yunan mitolojisinde Aşil'in Truva kuşatmasında askerlerinin yaralarını tedavi ettiği bitkidir; trombosit agregasyonunu hızlandırarak kılcal kanamaları rekor sürede pıhtılaştırır."
    },
    {
      colloquial: "Hayıt Tohumu Özü / Namus Ağacı",
      scientific: "Vitex agnus-castus Meyve ve Tohum Ekstresi (Viteksin, Kastisin & Diterpenler)",
      formula: "C21H20O10_vitexin",
      category: "Jinekolojik Fitofarmasötik",
      subId: "sub-bot-chaste-tree",
      safety: "🟢 Güvenli Doğal Dopaminerjik Hormon Dengeleyici",
      everydayUsage: "Kadınlarda PMS sendromu ve polikistik over (PCOS) tedavisi, prolaktin yüksekliği dengeleyici bitkisel ekstre, menopoz sıcak basması hafifletici.",
      alchemicalName: "Fructus Agni Casti",
      note: "Hipofiz bezindeki D2 dopamin reseptörlerini uyararak aşırı prolaktin salgısını baskılar; korpus luteum fazını uzatarak doğal progesteron üretimini normalize eder."
    },
    {
      colloquial: "Kekik Ruhu / Zahter Esansı",
      scientific: "Thymus vulgaris ve Origanum onites Saf Uçucu Yağı (%65-80 Doğal Timol & Karvakrol)",
      formula: "C10H14O_thymol",
      category: "Güçlü Doğal Antibiyotik & Antiseptik",
      subId: "sub-bot-thyme-spirit",
      safety: "🟡 Yüksek Dozda Yakıcıdır (Seyreltilmelidir)",
      everydayUsage: "Tarihin en güçlü bitkisel antibiyotiği; akciğer ve bronşit buğusu, helikobakter pilori baskılayıcı mide kürü, tırnak mantarı damlası ve doğal koruyucu.",
      alchemicalName: "Spiritus Thymi / Oleum Origani",
      note: "Timol ve karvakrol molekülleri bakteri ve mantarların hücre zarındaki fosfolipid çift tabakasını parçalayarak iyon geçirgenliğini bozar; sentetik antibiyotiklere dirençli suşları dahi öldürür."
    },
    {
      colloquial: "Keten Tohumu Lapası / Bezir Lapası",
      scientific: "Linum usitatissimum Öğütülmüş Tohum Müsilajı ve Yağı (Alfa-Linolenik Asit & Lignanlar)",
      formula: "C18H30O2_ala_poly",
      category: "Yumuşatıcı & Çekici Kompres",
      subId: "sub-bot-flaxseed-poultice",
      safety: "🟢 Tamamen Toksinsiz Doğal Yumuşatıcı",
      everydayUsage: "Derin apseleri, iltihaplı çıbanları ve batıkları baş verdirip cerahatin boşalmasını sağlayan sıcak lapa kompresi, kabızlık giderici lif jeli.",
      alchemicalName: "Cataplasma Seminis Lini",
      note: "Sıcak su veya sütle pişirildiğinde saatlerce ısıyı muhafaza eden zengin bir müsilaj tabakası oluşturur; yerel kan dolaşımını ve lökosit göçünü artırarak iltihabı dışarı çeker."
    },
    {
      colloquial: "Ökse Otu Ekstresi / Burç Otu",
      scientific: "Viscum album Parazit Bitki Yaprak ve Dal Ekstresi (Viskotoksinler, Lektinler & Fenilpropanoidler)",
      formula: "C30H48O3_viscotoxin_pep",
      category: "İmmünomodülatör & Kardiyovasküler",
      subId: "sub-bot-mistletoe",
      safety: "🟡 Toksik Doz Sınırları Vardır (Sadece Tıbbi Reçete)",
      everydayUsage: "Hipertansiyon ve damar sertliği (ateroskleroz) destekleyici çay, modern antroposofik tıpta (Iscador) kanser adjuvan immünolojik terapi ekstresi.",
      alchemicalName: "Viscum Album / Herba Visci Albi",
      note: "Elma ve meşe ağaçlarının dallarında yarı-parazit yaşayan bu kutsal Kelt bitkisi, periferik damarları genişleterek kan basıncını düşürür ve doğal öldürücü (NK) hücre aktivitesini artırır."
    },
    {
      colloquial: "Sinirli Ot Suyu / Bağa Yaprağı Özü",
      scientific: "Plantago major Yaprak Ekstresi ve Sıvı Maseratı (Aukubin İridoidi, Allantoin & Müsilaj)",
      formula: "C15H22O9_aucubin_allantoin",
      category: "Doku Onarıcı & Hemostatik",
      subId: "sub-bot-broadleaf-plantain",
      safety: "🟢 Güvenli Doğal Yara Bandı Ekstresi",
      everydayUsage: "Arı ve böcek sokmalarında anında kaşıntı ve şişlik dindirici yaprak lapası, nasır ve topuk çatlağı merhemi, sigara tiksindirici doğal gargara.",
      alchemicalName: "Folia Plantaginis Majoris",
      note: "Aukubin içeriğiyle antimikrobiyal, allantoin içeriğiyle epidermal hücre bölünmesini hızlandırıcı çift etki gösterir; doğada ezilerek açık yaraya sarıldığında enfeksiyonu önler ve hızla kapatır."
    },
    {
      colloquial: "Laden Reçinesi / Ladanum Sakızı",
      scientific: "Cistus ladaniferus Yaprak ve Dal Reçinesi (Labdanum / Labdanolik Asit & Ambrein)",
      formula: "C20H34O3_labdanolic_acid",
      category: "Reçine & Parfümeri Fiksatif",
      subId: "sub-bot-ladanum-resin",
      safety: "🟢 Güvenli Doğal Tütsü ve Parfümeri Reçinesi",
      everydayUsage: "Antik ambergris alternatifi doğal parfüm sabitleyici, lüks oryantal tütsü harçları, geleneksel yara ve çatlak kapatıcı balzam.",
      alchemicalName: "Resina Ladanum / Gummi Cisti",
      note: "Akdeniz kayalıklarında yetişen laden çalılarının yapraklarından süzülen reçinedir; kehribarımsı, odunsu ve sıcak kokusuyla antik Mısır firavun törenlerinden beri hem fiksatif hem de derin doku onarıcı olarak kullanılır."
    },
    {
      colloquial: "Zufa Otu Ruhu / Çördük Otu Esansı",
      scientific: "Hyssopus officinalis Uçucu Yağı (Pinokamfen, İzopinokamfen & Hissopin)",
      formula: "C10H16O_pinocamphone",
      category: "Bitkisel & Spajirik",
      subId: "sub-bot-hyssop-spirit",
      safety: "🟡 Ham Yağda Aşırı Dozdan Kaçınılmalı (Seyreltilerek Kullanılır)",
      everydayUsage: "Tarihi Chartreuse ve Benedictine likörleri aroması, astım ve bronşit buhar banyosu, kutsal tapınak arındırma suları.",
      alchemicalName: "Oleum Hyssopi / Spiritus Hyssopi",
      note: "Eski Ahit'te 'Beni zufa otuyla arındır, paklanayım' sözleriyle anılan kadim kutsal bitkidir; bronşiyal spazmları çözücü ve akciğer mukusunu temizleyici güçlü balgam söktürücü etkiye sahiptir."
    },
    {
      colloquial: "Dağ Çayı Ruhu / Yayla Çayı Distilatı",
      scientific: "Sideritis scardica / Sideritis perfoliata Hidrosolü (Diterpenler, Apigenin & Karvakrol)",
      formula: "C20H32O3_siderol_diterpenes",
      category: "Bitkisel & Spajirik",
      subId: "sub-bot-sideritis-hydrosol",
      safety: "🟢 Güvenli Tıbbi Yayla Çayı Distilatı",
      everydayUsage: "Akdeniz ve Anadolu yaylalarında kış soğuk algınlığı koruyucu iksiri, zihinsel odaklanma ve hafıza toniği, sindirim rahatlatıcı doğal çay.",
      alchemicalName: "Aqua Sideritis / Herba Sideritis",
      note: "Antik Yunan'da savaş yaralarını demir (sideros) kılıç izlerinden temizlediği için Sideritis adını almıştır; son araştırmalarda beyinde beta-amiloid plak oluşumunu yavaşlatıcı nöroprotektif etkileri kanıtlanmıştır."
    },
    {
      colloquial: "Civanperçemi Tentürü / Akbaş Otu Tentürü",
      scientific: "Achillea millefolium Hidroalkolik Ekstresi (Kamazulen, Apigenin & Aşil alkaloidi)",
      formula: "C14H16_chamazulene_extract",
      category: "Doku Onarıcı & Hemostatik",
      subId: "sub-bot-yarrow-tincture",
      safety: "🟢 Güvenli Tıbbi Tentür",
      everydayUsage: "Mide krampları ve gaz spazmları, kadınlarda adet düzensizliği yatıştırıcı damlalar, iç ve dış kanama durdurucu ilk yardım tentürü.",
      alchemicalName: "Tinctura Achilleae Millefolii",
      note: "Truva Savaşı'nda Akhilleus'un askerlerinin kılıç yaralarını bu bitkiyle tedavi ettiği rivayet edilir; kılcal damar kanamalarını hızla pıhtılaştırırken spazmolitik olarak düz kasları gevşetir."
    },
    {
      colloquial: "Şerbetçiotu Ekstresi / Maya Otu Özü",
      scientific: "Humulus lupulus Dişi Koza Ekstresi (Humulon, Lupulon & Ksantohumol)",
      formula: "C21H30O5_humulone",
      category: "Sedatif & Fitofarmasötik",
      subId: "sub-bot-hops-extract",
      safety: "🟢 Güvenli Doğal Uyku ve Sakinleştirici Ajan",
      everydayUsage: "Uykusuzluk ve anksiyete giderici gece damlası, geleneksel biracılıkta antibakteriyel koruyucu ve aromatik acılık verici, fitoöstrojenik menopoz desteği.",
      alchemicalName: "Extractum Humuli Lupuli / Lupulinum",
      note: "Dişi çiçek kozalarındaki lupulin reçinesi, güçlü bir GABAerjik yatıştırıcı olan 2-metil-3-büten-2-ol türevine dönüşür; ksantohumol ise bilinen en kuvvetli geniş spektrumlu antioksidan polifenollerdendir."
    },
    {
      colloquial: "Isırgan Tohumu Yağı / Isırgan Yağı",
      scientific: "Urtica dioica Tohum Soğuk Sıkım Yağı (Linoleik Asit Omega-6, Fitoöstrojenler & Tokoferol)",
      formula: "C18H32O2_linoleic_rich",
      category: "Bitkisel & Besleyici Yağ",
      subId: "sub-bot-nettle-seed-oil",
      safety: "🟢 Güvenli Fonksiyonel Besin Yağı",
      everydayUsage: "Saç dökülmesini önleyici ve kıl kökü güçlendirici kafa derisi serumu, prostat hipertrofisinde 5-alfa redüktaz baskılayıcı gıda takviyesi, enerji ve zindelik kaşığı.",
      alchemicalName: "Oleum Urticae Seminis",
      note: "Isırgan tohumları yüksek konsantrasyonda serbest yağ asitleri ve fito-steroller barındırır; testosteronun DHT'ye dönüşümünü inhibe ederek androgenetik alopesiyi ve benign prostat büyümesini sınırlar."
    },
    {
      colloquial: "Kırkkilit Otu Suyu / At Kuyruğu Distilatı",
      scientific: "Equisetum arvense Sulu Ekstresi ve Hidrosolü (Organik Silisik Asit, Ekuisetonin & Flavonoidler)",
      formula: "SiO2_organic_silica_hydrate",
      category: "Mineralize Edici & Bağ Dokusu",
      subId: "sub-bot-horsetail-hydrosol",
      safety: "🟢 Güvenli Doğal Mineral Distilatı",
      everydayUsage: "Kırılgan tırnak ve dökülen saçlar için organik silika kürü, kemik yoğunluğu destekleyici çay, ödem ve böbrek kumu söktürücü hafif diüretik.",
      alchemicalName: "Aqua Equiseti / Herba Equiseti",
      note: "Bitkiler aleminde çözünür biyoyararlanımlı silisik asit oranı en yüksek (%10'a varan kül silisi) kadim eğrelti akrabasıdır; kemik matriksinde kalsiyum fiksasyonunu ve kolajen sentezini hızlandırır."
    },
    {
      colloquial: "Defne Tohumu Yağı / Tehnel Çekirdeği Yağı",
      scientific: "Laurus nobilis Meyve/Çekirdek Pres Yağı (Laurik Asit Trigliseridleri & Uçucu Sineol)",
      formula: "C12H24O2_lauric_ester",
      category: "Geleneksel Sabunlaşma Yağı & Antiseptik",
      subId: "sub-bot-bay-berry-oil",
      safety: "🟢 Güvenli Geleneksel Sabun ve Merhem Bazı",
      everydayUsage: "Otantik Halep (Aleppo) ve Antakya defne sabununun yeşil renk ve karakteristik kokusunu veren ana yağ, romatizma ve eklem ağrısı ovma merhemi.",
      alchemicalName: "Oleum Lauri Fructus Expressum",
      note: "Yüksek laurik asit içeriğiyle sabunlaşma tepkimesinde bol, kremsi ve kalıcı köpük oluştururken barındırdığı %1-3 doğal 1,8-sineol sayesinde mantar ve bakterilere karşı doğal dezenfektan etki gösterir."
    },
    {
      colloquial: "Nar Çekirdeği Yağı / Pönik Asit Özü",
      scientific: "Punica granatum Çekirdek Soğuk Sıkım Yağı (Pünisik Asit Omega-5 & Gama-Tokoferol)",
      formula: "C18H30O2_punicic_acid",
      category: "Biyoaktif Antioksidan Yağ",
      subId: "sub-bot-pomegranate-oil",
      safety: "🟢 Güvenli Lüks Cilt Bakım Yağı",
      everydayUsage: "Anti-aging kırışıklık karşıtı gece iksiri, güneş lekeleri ve hiperpigmentasyon aydınlatıcı serum, hücresel DNA koruyucu süper antioksidan damla.",
      alchemicalName: "Oleum Granati Seminis",
      note: "Doğadaki en zengin konjuge linolenik asit (Pünisik Asit, %70-80) kaynağıdır; keratinosit proliferasyonunu uyararak epidermis kalınlaşmasını ve hasarlı cilt dokusunun yenilenmesini hızlandırır."
    },
    {
      colloquial: "Mavi Kantaron Suyu / Peygamber Çiçeği Hidrosolü",
      scientific: "Centaurea cyanus Çiçek Buhar Distilatı (Siyanidin Antosiyaninleri & Sentaurin)",
      formula: "C15H11O6_cyanidin_hydrosol",
      category: "Oftalmolojik & Yatıştırıcı",
      subId: "sub-bot-cornflower-hydrosol",
      safety: "🟢 Güvenli Oftalmolojik Göz ve Cilt Hidrosolü",
      everydayUsage: "Yorgun ve kızarık gözler için geleneksel göz kompresi (Eau de Bleuet), göz altı morluk ve torbalanma giderici pedler, hassas kuperozlu cilt toniği.",
      alchemicalName: "Aqua Centaureae Cyani / Aqua Bleuet",
      note: "Fransız ve Osmanlı eczacılığında 'göz yıkayıcı su' olarak ünlenmiştir; göz kapağı konjonktivasındaki mikro-ödemi ve kılcal damar hiperemisini antihistaminik ve dekonjestan etkiyle yatıştırır."
    },
    {
      colloquial: "Kaya Şekeri / Nöbet Şekeri",
      scientific: "Sükroz Saf Monokristali (Alfa-D-Glukopiranozil-(1➔2)-beta-D-fruktofuranozit)",
      formula: "C12H22O11_pure_monocrystal",
      category: "Geleneksel Şekerleme & Kristalizasyon",
      subId: "sub-food-rock-candy",
      safety: "🟢 Güvenli Doğal Gıda Kristali",
      everydayUsage: "Boğaz ağrısı ve inatçı öksürük yumuşatıcı geleneksel şerbet bazı, sindirim yatıştırıcı rezene çayı tatlandırıcısı, kristalizasyon kinetiği eğitim modeli.",
      alchemicalName: "Saccharum Candi / Saccharum Crystallinum",
      note: "Doygun şeker şerbetinin haftalarca yavaş ve sakin soğutulmasıyla ip veya çubuk üzerinde büyütülen monoklinik büyük sükroz kristalleridir; saflığı yüksek olduğundan eski eczacılıkta şurup ve terkiplerin değişmez taşıyıcısıdır."
    },
    {
      colloquial: "Kâfur / Kâfuru / Kafur Kristali",
      scientific: "d-Kamfor Kristal Biyosiklik Terpenoidi (1,7,7-Trimetilbisiklo[2.2.1]heptan-2-on)",
      formula: "C10H16O_camphor",
      category: "Süblimasyon Terpeni & Analjezik",
      subId: "sub-bot-camphor-crystals",
      safety: "🟡 Haricen Güvenli / Dahilen Toksik (Çocuklardan Uzak Tutulmalıdır)",
      everydayUsage: "Göğüs ovma merhemleri (Vicks benzeri), burun tıkanıklığı buhar banyosu, romatizma ve kas spazmı soğutucu-ısıtıcı jeller, güve kovucu doğal kristal.",
      alchemicalName: "Camphora Officinarum / Resina Camphorae",
      note: "Cinnamomum camphora ağacının odunundan buhar distilasyonuyla elde edilip oda sıcaklığında süblimleşen beyaz berrak kristallerdir; derideki soğuk algılayıcı TRPM8 reseptörlerini uyararak önce ferahlatıcı soğuma, ardından hiperemi ve ağrı kesici ısı hissi yaratır."
    },
    {
      colloquial: "Mürver Çiçeği Suyu / Sambucus Hidrosolü",
      scientific: "Sambucus nigra Çiçek Buhar Distilatı (Rutin Flavonoidleri, Sambunigrin & Klorojenik Asit)",
      formula: "C27H30O16_rutin_hydrosol",
      category: "Antiviral & Diaforetik Hidrosol",
      subId: "sub-bot-elderflower-water",
      safety: "🟢 Güvenli Gıda ve Kozmetik Hidrosolü",
      everydayUsage: "Grip ve nezlede terletici ateş düşürücü şerbet, lüks kokteyl ve tonik bazı, cilt gözeneklerini sıkılaştırıcı aydınlatıcı yüz spreyi.",
      alchemicalName: "Aqua Sambuci Florum",
      note: "Avrupa ve Anadolu halk hekimliğinde 'kış şifacısı' olarak bilinir; çiçeklerin nazikçe damıtılmasıyla elde edilen hidrosol, üst solunum yolu mukozasındaki inflamasyonu yatıştırır ve ter bezlerini uyararak toksin atımını hızlandırır."
    },
    {
      colloquial: "Misk-i Amber / Ambergris Reçinesi",
      scientific: "Ambroksit & Sentetik Ambergris Fiksatif (Dihidroambrin / Tetrametilnaftofuran)",
      formula: "C16H28O_ambroxan",
      category: "Parfümeri Fiksatif & Koku Bazı",
      subId: "sub-bot-ambergris-ambrox",
      safety: "🟢 Güvenli Kozmetik Fiksatif",
      everydayUsage: "Yüksek kalıcılıklı lüks parfüm taban notası, oriental tütsü yağları harmanı, kadim feromon ve afrodizyak koku kompozisyonları.",
      alchemicalName: "Ambra Grisea / Tinctura Ambrae",
      note: "Tarihte ispermeçet balinasının deniz suyunda yıllarca güneşte olgunlaşan ifrazatından elde edilen efsanevi fiksatif maddedir; modern kimyada misk adaçayı sklareolünden yeşil kimyayla sentezlenen ambroksan molekülüyle doğaya zarar vermeden birebir taklit edilir."
    },
    {
      colloquial: "Kâfûrî İspirto / Kafurlu Alkol",
      scientific: "Kafur-Etanol Çözeltisi (%10 Kamfor, %90 Etil Alkol Çözeltisi)",
      formula: "C10H16O_in_C2H5OH",
      category: "Geleneksel Masaj Solüsyonu & Rubefasiyan",
      subId: "sub-pharm-camphor-spirit",
      safety: "🟡 Haricen Kullanılır / Göze ve Açık Yaraya Sürülmez",
      everydayUsage: "Burkulan ayak bileği ve kulunç masaj ovması, yatalak hastalarda bası yarası (dekübit) önleyici kılcal dolaşım uyarıcısı, spor sonrası laktik asit dağıtıcı ovma suyu.",
      alchemicalName: "Spiritus Camphoratus",
      note: "Farmakopelerde yüz elli yıldır standart olarak yer alan ovma solüsyonudur; deriye sürüldüğünde alkolün hızla buharlaşmasıyla serinletir, ardından kafurun periferik damarları genişletmesiyle (rubefasiyan) bölgeye kan akışını artırır."
    },
    {
      colloquial: "Ceviz Kabuğu Boyası / Yaş Kabuk Ekstraktı",
      scientific: "Juglans regia Yeşil Dış Kabuk Ekstresi (Juglon / 5-Hidroksi-1,4-naftokinon)",
      formula: "C10H6O3_juglone",
      category: "Doğal Boyar Madde & Fungisit",
      subId: "sub-bot-walnut-hull-dye",
      safety: "🟢 Güvenli Doğal Boyar Madde",
      everydayUsage: "Geleneksel kahverengi saç boyası ve kına harçları, antika mobilya ahşap koruyucu cilası, tırnak mantarı ve dermatofitlere karşı bitkisel lapa.",
      alchemicalName: "Cortex Nucum Juglandis Viridis",
      note: "Cevizin yeşil etli kabuğunda bulunan juglon molekülü, proteinlerdeki keratin ve ahşaptaki selüloz ile geri dönüşsüz kovalent bağ kurarak kalıcı koyu kestane-kahve renk verir; aynı zamanda bitkinin kendini mantarlardan koruduğu doğal bir allelopatik savunma bileşiğidir."
    },
    {
      colloquial: "Kına Taşı / Rastık Taşı (FeSO4)",
      scientific: "Demir(II) Sülfat Heptahidrat (Kara Tutya / Melanterit)",
      formula: "FeSO4.7H2O_mordant",
      category: "Mordan & Geleneksel Kozmetik Minerali",
      subId: "sub-min-iron-sulfate-mordant",
      safety: "🟡 Yalnızca Harici ve Mordan Amaçlıdır",
      everydayUsage: "Kınaya eklenerek rengi kızıldan simsiyaha dönüştüren geleneksel kaş ve saç boyası sabitleyicisi (rastık), kök boyacılığında renk koyulaştırıcı mordan tuzu.",
      alchemicalName: "Vitriolum Martis / Atramentum",
      note: "Kınadaki lavson (lawsone) molekülü ile demir iyonları (Fe2+) şelat kompleksi oluşturarak çözünmeyen derin siyah demir-polifenol pigmentine dönüşür; antik çağlardan beri Türk ve Ortadoğu kültüründe rastık çekmede kullanılır."
    },
    {
      colloquial: "Meyan Kökü Ekstraktı / Meyan Balı",
      scientific: "Glycyrrhiza glabra Kök Ekstresi (Glisirizik Asit & Glisirizin Tuzu)",
      formula: "C42H62O16_glycyrrhizin",
      category: "Ekspektoran & Doğal Sürfaktan",
      subId: "sub-bot-licorice-extract",
      safety: "🟢 Güvenli Gıda ve İlaç Ekstresi (Hipertansiyonda Aşırı Tüketilmemelidir)",
      everydayUsage: "Geleneksel meyan şerbeti, inatçı kuru öksürük ve farenjit pastilleri, mide ülseri koruyucu mukozal şurup, leke açıcı cilt serumu (Glabridin).",
      alchemicalName: "Succus Liquiritiae / Radix Glycyrrhizae",
      note: "Şekerden (sükroz) 50 kat daha tatlı olan glisirizin saponinini içerir; adrenal kortekste kortizolün kortizona yıkımını yavaşlatarak güçlü anti-inflamatuar etki gösterir ve köpürtücü yapısıyla akciğer mukusunu söker."
    },
    {
      colloquial: "Keten Tohumu Müsilajı / Keten Jeli",
      scientific: "Linum usitatissimum Tohum Suda Çözünür Müsilajı (Arabinoksilan & Rhamnogalakturonan)",
      formula: "(C6H10O5)n_flax_mucilage",
      category: "Doğal Hidrokoloid & Demülsent",
      subId: "sub-bot-flaxseed-gel",
      safety: "🟢 Güvenli Doğal Gıda ve Kozmetik Jeli",
      everydayUsage: "Kıvırcık saçlar için silikonsuz doğal bukle belirginleştirici jel, mide yanması ve reflüde koruyucu mukozal astar içeceği, vegan hamur işlerinde yumurta akı ikamesi.",
      alchemicalName: "Mucilago Seminis Lini",
      note: "Tohumların ılık suda kaynatılmasıyla salınan dallanmış polisakarit zincirleri yüksek su tutma kapasitesine sahiptir; sindirim kanalında veya saç telinde kaygan, esnek ve nefes alan nem bariyeri örer."
    },
    {
      colloquial: "Hatmi Kökü Jeli / Althaea Müsilajı",
      scientific: "Althaea officinalis Kökü Soğuk Maserat Jeli (Galakturonan, Glukan & Arabinan)",
      formula: "(C6H10O5)n_althaea_mucilage",
      category: "Demülsent & Doku Koruyucu Hidrojel",
      subId: "sub-bot-marshmallow-root-gel",
      safety: "🟢 Güvenli Doğal Demülsent",
      everydayUsage: "Kuru tahriş öksürüğü ve ses kısıklığı şurubu, gastrit ve mide astarı koruyucu çay, atopik ve egzamalı ciltler için nemlendirici jel baz.",
      alchemicalName: "Mucilago Radicis Althaeae",
      note: "Sıcak su yerine soğuk suyla masere edildiğinde nişasta yerine yalnızca saf terapötik müsilaj suya geçer; ağız ve yutak epitelini ince bir biyopolimer film gibi kaplayarak tahriş edici sinir uçlarını fiziksel olarak izole eder."
    },
    {
      colloquial: "Karanfil Yağı / Karanfil Esansı",
      scientific: "Syzygium aromaticum Çiçek Tomurcuğu Uçucu Yağı (Öjenol & Karyofilen)",
      formula: "C10H12O2_eugenol",
      category: "Lokal Anestezik & Antiseptik Yağ",
      subId: "sub-bot-clove-bud-oil",
      safety: "🟡 Konsantre Halde Mukoza Yakıcıdır (Seyreltilerek Diş Etine Dokundurulur)",
      everydayUsage: "Acil diş ağrısı dindirici pamuk uygulaması, diş hekimliği geçici dolgu simanı (çinko oksit-öjenol), ağız kokusu ve boğaz spreyi, güçlü baharat koruyucu.",
      alchemicalName: "Oleum Caryophylli",
      note: "Bileşimindeki %80-90 öjenol, sinir iletimini bloke ederek lokal hissizlik sağlarken prostaglandin sentezini baskılar; diş hekimliğinde yüz yıldır ağrı kesici ve kavite dezenfektanı olarak altın standarttır."
    },
    {
      colloquial: "Çam Katranı / Pix Liquida",
      scientific: "Pinus sylvestris Odun Piroliz Katranı (Gayakol, Krezoller & Metil Esterleri)",
      formula: "C7H8O2_guaiacol_tar",
      category: "Geleneksel Katran & Antipruritik",
      subId: "sub-bot-pine-tar",
      safety: "🟢 Harici Merhem ve Sabunlarda Güvenli",
      everydayUsage: "Sedef, egzama ve kepek karşıtı geleneksel çam katranı sabunu, at nalı ve veterinerlik toynak bakım macunu, ahşap tekne su yalıtım katranı.",
      alchemicalName: "Pix Liquida Pini",
      note: "Çam kök ve odunlarının havasız fırınlarda kuru distilasyonuyla damıtılan koyu vizkoz sıvıdır; keratinosit proliferasyonunu yavaşlatarak pullanmayı durdurur ve derideki inatçı kaşıntı refleksini keser."
    },
    {
      colloquial: "Ardıç Katranı / Kadı Yağı",
      scientific: "Juniperus oxycedrus Odun Kuru Distilatı (Kadinol, Karyofilen & Fenolik Katran)",
      formula: "C15H26O_cadinol_tar",
      category: "Dermatolojik Katran & Antifungal",
      subId: "sub-bot-juniper-tar-oil",
      safety: "🟢 Harici Dermatolojide Güvenli",
      everydayUsage: "Anadolu halk hekimliğinde saçkıran ve uyuza karşı sürülen katran merhemi, ayak mantarı ovması, kepekli seboreik dermatit şampuanları bazı.",
      alchemicalName: "Oleum Cadinum / Pix Juniperi",
      note: "Kırmızı ardıç odunundan damıtılan 'Cade Yağı'dır; Malassezia mantarlarının çoğalmasını durduran güçlü fungisidal aktivitesi ve antiparaziter özelliğiyle geleneksel dermatolojinin en kadim ilacıdır."
    },
    {
      colloquial: "Mürrisafi / Mür Sakızı",
      scientific: "Commiphora myrrha Ağaç Gövdesi Sakız-Reçinesi (Kurzen & Furanoödesmadien)",
      formula: "C15H18O2_furanosesquiterpenes",
      category: "Kadim Antiseptik & Büzücü Reçine",
      subId: "sub-bot-myrrh-gum-resin",
      safety: "🟢 Güvenli Doğal Reçine ve Ağız Çalkalama Tentürü",
      everydayUsage: "Diş eti çekilmesi ve aftlar için mür tentürü gargarası, antik Mısır mumyalama ve yara kapatıcı balzamı, kutsal kilise tütsüleri bazı.",
      alchemicalName: "Gummi-Resina Myrrha",
      note: "Antik dünyada altından daha değerli sayılan üç kutsal hediyeden biridir; içerdiği furano-seskiterpenler ağız mukozasında dokuları büzerek kanamayı durdurur ve mikrop kolonizasyonunu engeller."
    },
    {
      colloquial: "Akgünlük / Günlük Reçinesi",
      scientific: "Boswellia serrata / Boswellia carterii Sakız-Reçinesi (Asetil-11-Keto-Beta-Boswellik Asit - AKBA)",
      formula: "C32H48O4_akba_boswellic",
      category: "Anti-Enflamatuar & Meditatif Reçine",
      subId: "sub-bot-frankincense-resin",
      safety: "🟢 Güvenli Doğal Reçine ve Fitofarmasötik",
      everydayUsage: "Kireçlenme ve osteoartrit eklem ağrısı kremleri, astım ve KOAH nefes açıcı buhur, meditasyon ve zihinsel sakinleşme tütsüsü.",
      alchemicalName: "Olibanum / Gummi Thus",
      note: "Boswellia ağacının gövdesinden sızan 'Frankincense' reçinesidir; barındırdığı AKBA molekülü, lökositlerin ürettiği 5-lipoksijenaz (5-LOX) enzimini spesifik olarak inhibe ederek iltihabi eklem yıkımını durdurur."
    },
    {
      colloquial: "Damla Sakızı / Mastik Sakızı",
      scientific: "Pistacia lentiscus var. chia Reçinesi (Mastikadienonik Asit & Alfa-Pinen)",
      formula: "C30H48O3_masticadienonic",
      category: "Gastroprotektif Reçine & Aromatik",
      subId: "sub-bot-mastic-gum",
      safety: "🟢 Güvenli Gıda ve Eczacılık Reçinesi",
      everydayUsage: "Helicobacter pylori eradikasyonu ve mide yanması çiğneme tableti, geleneksel Türk kahvesi ve dondurma aroması, cerrahi yara kapatıcı vernik.",
      alchemicalName: "Resina Mastix / Masticha",
      note: "Yalnızca Ege'nin Sakız Adası ve Çeşme kıyılarında yetişen sakız ağaçlarından toplanır; mide mukozasında Helicobacter pylori bakterilerinin hücre duvarını parçalayarak peptik ülser ve gastrit tedavisinde klinik olarak kanıtlanmıştır."
    },
    {
      colloquial: "Anason Yağı / Rakı Ruhu",
      scientific: "Pimpinella anisum Meyvesi Uçucu Yağı (trans-Anetol & Estragol)",
      formula: "C10H12O_trans_anethole",
      category: "Karminatif & Spazmolitik Uçucu Yağ",
      subId: "sub-bot-anise-oil",
      safety: "🟢 Güvenli Gıda ve İlaç Aroması",
      everydayUsage: "Geleneksel rakı, ouzo ve arak anasonlaması, bebek kolik sancısı ve gaz giderici damla, anne sütü artırıcı galaktagog çaylar.",
      alchemicalName: "Oleum Anisi",
      note: "Bileşimindeki %90 trans-anetol oda sıcaklığında berrak sıvı iken 15-18°C'nin altında beyaz kristalize donar; su eklendiğinde kendiliğinden mikro-emülsiyon (Ouzo etkisi) oluşturarak süt beyazı renge bürünür."
    },
    {
      colloquial: "Okaliptüs Yağı / Ökaliptol",
      scientific: "Eucalyptus globulus Yaprak Uçucu Yağı (1,8-Sineol / Ökaliptol)",
      formula: "C10H18O_cineole",
      category: "Dekonjestan & Mukolitik Uçucu Yağ",
      subId: "sub-bot-eucalyptus-oil",
      safety: "🟡 Yalnızca Harici ve İnhalasyon (Dahilen İçilmez)",
      everydayUsage: "Sinüzit ve burun tıkanıklığı buhar inhalasyonu, sauna ferahlatıcı esansı, kas tutulması masaj losyonları bazı.",
      alchemicalName: "Oleum Eucalypti",
      note: "Bronşlardaki silier tüycüklerin çırpınma frekansını artırarak akciğerlerde biriken koyu mukusun dışarı atılmasını kolaylaştırır; güçlü ferahlatıcı kokusu burun içi mekanik hava akışı algısını hızla açar."
    },
    {
      colloquial: "Kudret Narı Yağı / Momordika Maseratı",
      scientific: "Momordica charantia Meyvesi Zeytinyağı Maseratı (Charantin, Momordisin & Karotenoidler)",
      formula: "C35H58O6_charantin_complex",
      category: "Gastro-Onarıcı & Doku İyileştirici Yağ",
      subId: "sub-bot-bitter-melon-oil",
      safety: "🟢 Güvenli Bitkisel Maserat Yağı",
      everydayUsage: "Sabah aç karnına mide reflüsü ve gastrit kaşığı, yara ve yanık dokusu hızlandırıcı pansuman yağı, cilt lekeleri ve izleri giderici gece yağı.",
      alchemicalName: "Oleum Balsaminae / Momordica Maceratum",
      note: "Taze kudret narı meyvesinin saf sızma zeytinyağında güneşte en az 40 gün fermente maserasyonuyla hazırlanır; mide çeperindeki epidermal büyüme faktörünü (EGF) uyararak hasarlı mukoza astarını hızla tamir eder."
    },
    {
      colloquial: "Kekik Yağı / Zahter Ruhu",
      scientific: "Thymus vulgaris / Origanum vulgare Uçucu Yağı (Timol, Karvakrol & p-Simen)",
      formula: "C10H14O_thymol_carvacrol",
      category: "Geniş Spektrumlu Doğal Antibiyotik & Antifungal",
      subId: "sub-bot-thyme-essential-oil",
      safety: "🔴 Çok Şiddetli Dermokostik (Doğrudan Cilde Sürülmez, Mutlaka %1'in Altında Seyreltilmelidir)",
      everydayUsage: "Dirençli tırnak mantarı seyreltik kürü, mevsimsel boğaz enfeksiyonu gargara damlası, doğal küf önleyici gıda koruyucu yüzey spreyi.",
      alchemicalName: "Oleum Thymi / Spiritus Thymi",
      note: "Doğadaki en güçlü antiseptik fenolik moleküllerden olan timol ve karvakrolü barındırır; bakteri ve mantar hücre zarındaki ergosterol ve fosfolipit tabakasını delerek mikroorganizmanın sitoplazmasını boşaltır."
    },
    {
      colloquial: "Nişadır / Salmiak Tuzu",
      scientific: "Amonyum Klorür (Ammonium Chloratum / Sal Ammoniac)",
      formula: "NH4Cl_sal_ammoniac",
      category: "Mineral & Geleneksel Metalurji Tuzu",
      subId: "sub-min-ammonium-chloride",
      safety: "🟡 Solunmamalı ve Yutulmamalıdır (Göz ve Mukoza Tahriş Edici)",
      everydayUsage: "Bakır kap kalaylamada oksit giderici akı (lehim tuzu), geleneksel tuzlu İskandinav meyan şekeri (Salmiakki), kuru pil elektroliti.",
      alchemicalName: "Sal Ammoniacum / Sal Armeniacum",
      note: "Eski simyada süblimleşme kabiliyeti nedeniyle 'uçucu ruhların tuzu' olarak anılmıştır; kızgın bakır yüzeyindeki metal oksitleri hızla çözerek ergimiş kalayın metale pürüzsüz yapışmasını sağlar."
    },
    {
      colloquial: "Cıva Süblimesi / Ak Süblime",
      scientific: "Cıva(II) Klorür (Mercuric Chloride / Sublimat)",
      formula: "HgCl2_sublimate",
      category: "Kadim Zehir & Antiseptik Mineral",
      subId: "sub-elem-mercury-bichloride",
      safety: "🔴 AŞIRI TOKSİK & ÖLÜMCÜL (Deri Teması ve Yutulması Ağır Zehirlenmeye Yol Açar)",
      everydayUsage: "Tarihsel cerrahi alet sterilizasyonu (1:1000 seyreltik solüsyon), kadim frengi tedavisi, ahşap ve kadavra tahnit koruyucusu.",
      alchemicalName: "Mercurius Sublimatus Corrosivus",
      note: "Cıva metalinin sülfürik asit ve tuzla kavrulup süblimleştirilmesiyle elde edilen renksiz iğnemsi kristallerdir; proteinleri geri dönüşsüz çözelterek mikroorganizmaları yok eder, ancak yüksek nefrotoksisitesi nedeniyle yerini modern antiseptiklere bırakmıştır."
    },
    {
      colloquial: "Zeytinyağı Sabun Mayası / Kül Suyu Likörü",
      scientific: "Odun Külü Potasyum Karbonat & Kireç Suyu Kostik Likörü (KOH + NaOH Sulu Karışımı)",
      formula: "KOH_rich_wood_ash_lye",
      category: "Geleneksel Sabunlaşma Reaktifi",
      subId: "sub-reag-traditional-potash-lye",
      safety: "🔴 Korozif & Kostik Sıvı (Cilde ve Göze Temas Ettirilmemelidir)",
      everydayUsage: "Otantik köy tipi zeytinyağı arap sabunu ve kalıp sabun pişirme mayası, geleneksel çamaşır ve tencere ağartma suyu.",
      alchemicalName: "Lixivium Cineris Clavellati",
      note: "Meşe veya zeytin odunu külünün yağmur suyuyla süzülüp sönmemiş kireçle kaynatılmasıyla üretilen kadim alkali çözeltidir; trigliserit ester bağlarını hidroliz ederek sabun ve gliserine ayrıştırır."
    },
    {
      colloquial: "Hardal Ruhu / Allil Hardal Esansı",
      scientific: "Allil İzotiyosiyanat (Allil İsothiocyanate / Sinigrin Hidroliz Ürünü)",
      formula: "C4H5NS_allyl_isothiocyanate",
      category: "Rubefasiyan & Şiddetli İrritan Uçucu Yağ",
      subId: "sub-bot-mustard-oil-essence",
      safety: "🔴 Şiddetli Göz Yaşartıcı & Deri Yakıcı (Asla Doğrudan Koklanmaz)",
      everydayUsage: "Geleneksel hardal yakısı ve göğüs plasteri, eklem kireçlenmesinde kılcal dolaşım kamçılayıcı ovma bazı, doğal antimikrobiyal buhar.",
      alchemicalName: "Oleum Sinapis Volatile",
      note: "Siyah hardal tohumlarındaki sinigrin glikozitinin mirosinaz enzimiyle parçalanmasıyla açığa çıkan uçucu sülfürlü bileşiktir; derideki TRPV1 acı reseptörlerini uyararak derin dokuda kuvvetli kan hücumu ve ısı oluşturur."
    },
    {
      colloquial: "Kantaron Sarı Çiçek Suyu / St. John Hidrosolü",
      scientific: "Hypericum perforatum Çiçek Buhar Distilatı (Flavonoidler, Hiperforin & Klorojenik Asit)",
      formula: "C30H16O8_hypericin_hydrosol",
      category: "Dermatolojik & Yatıştırıcı Hidrosol",
      subId: "sub-bot-st-john-hydrosol",
      safety: "🟢 Güvenli Doğal Cilt Hidrosolü",
      everydayUsage: "Güneş yanığı ve lazer sonrası yatıştırıcı yüz spreyi, tonik olarak cilt mikrobiyotası dengeleyici, hafif anksiyolitik aromaterapi sisi.",
      alchemicalName: "Aqua Hyperici Florum",
      note: "Sarı kantaron çiçeklerinin damıtılmasıyla elde edilen buhar hidrosolüdür; yağlı maseratından farklı olarak fototoksik hiperisin pigmentini eser miktarda taşır, bu sayede güneşte leke yapmadan cildi ferahlatır."
    },
    {
      colloquial: "Melisa Suyu / Limon Otu Hidrosolü",
      scientific: "Melissa officinalis Yaprak Buhar Distilatı (Sitronellal, Geranial, Neral & Rozmarinik Asit)",
      formula: "C10H18O_citronellal_hydrosol",
      category: "Sedatif & Nöro-Yatıştırıcı Hidrosol",
      subId: "sub-bot-lemon-balm-water",
      safety: "🟢 Güvenli Gıda ve Aromaterapi Hidrosolü",
      everydayUsage: "Kalp çarpıntısı ve panik halinde içilen geleneksel oğul otu suyu, herpes ve uçuk üzerine kompres, bebek gaz ve uyku toniği.",
      alchemicalName: "Aqua Melissae Citratae / Eau des Carmes",
      note: "17. yüzyılda Karmelit rahipleri tarafından formüle edilen 'Karmelit Suyu'nun ana bileşenidir; beyindeki GABA transaminaz enzimini baskılayarak doğal gevşeme ve anksiyolitik etki sağlar."
    },
    {
      colloquial: "Biberiye Ruhu / Macar Kraliçesi Suyu",
      scientific: "Rosmarinus officinalis Buhar Distilatı ve Alkolatı (1,8-Sineol, Kafur & Borneol)",
      formula: "C10H18O_cineole_spirit",
      category: "Dolaşım Uyarıcı & Nootropik Tonik",
      subId: "sub-bot-rosemary-spirit",
      safety: "🟢 Haricen Güvenli Masaj ve Saç Toniği",
      everydayUsage: "Saç dökülmesini durdurucu ve saç kökü uyarıcı kafa derisi suyu, zihinsel odaklanma ve hafıza koklama spreyi, romatizmal bacak ovması.",
      alchemicalName: "Aqua Reginae Hungariae / Spiritus Rosmarini",
      note: "14. yüzyılda Macaristan Kraliçesi Elizabeth için hazırlanan tarihteki ilk modern parfümdür; kafa derisinde mikrosirkülasyonu minoksidil benzeri bir etkiyle uyararak folikül beslenmesini hızlandırır."
    },
    {
      colloquial: "Nane Ruhu / Mentol Kristali",
      scientific: "l-Mentol Saf Prizmatik Kristali (5-Metil-2-(propan-2-il)siklohekzan-1-ol)",
      formula: "C10H20O_menthol",
      category: "Soğutucu Analjezik & TRPM8 Agonisti",
      subId: "sub-bot-menthol-crystals",
      safety: "🟡 Konsantre Halde Mukoza ve Göz Yakıcıdır (Bebeklerde Burun Altına Sürülmez)",
      everydayUsage: "Migren taşı ve şakak ovma kremleri, burun açıcı buhar kristalleri, diş macunu ve sakız ferahlatıcı tadı, kas gevşetici spor jelleri.",
      alchemicalName: "Camphora Menthae / Mentholum Depuratum",
      note: "Tıbbi nane (Mentha piperita) yağının -20°C'ye soğutulmasıyla çöken renksiz kristal prizmalardır; derideki termoreseptör TRPM8 kanalını aktive ederek kalsiyum akışını tetikler ve beyne yoğun 'buz etkisi' hissi iletir."
    },
    {
      colloquial: "Limon Kabuğu Ruhu / d-Limonen",
      scientific: "d-Limonen Terpen Hidrokarbonu (4-İzopropenil-1-metilsiklohekzen)",
      formula: "C10H16_limonene",
      category: "Doğal Çözücü & Aromatik Terpen",
      subId: "sub-bot-d-limonene",
      safety: "🟡 Ciltte Saf Halde Alerjen / Güçlü Yağ Çözücü",
      everydayUsage: "Zehirli solventler yerine çevre dostu endüstriyel yağ ve yapışkan temizleyici, narenciye aroması, 3D yazıcılarda HIPS destek çözücüsü.",
      alchemicalName: "Oleum Corticis Citri / Spiritus Limonis",
      note: "Narenciye kabuklarının soğuk preslenmesiyle elde edilen doğadaki en yaygın monoterpendir; petrol türevi toluen ve ksilen kadar güçlü bir yağ çözme kabiliyetine sahip olup %100 biyolojik olarak parçalanır."
    },
    {
      colloquial: "Portakal Çiçeği Suyu / Neroli Suyu",
      scientific: "Citrus aurantium Çiçek Buhar Distilatı (Linalool, Linalil Asetat & Nerolidol)",
      formula: "C10H18O_linalool_hydrosol",
      category: "Antidepresan & Cilt Yenileyici Hidrosol",
      subId: "sub-bot-neroli-water",
      safety: "🟢 Güvenli Lüks Kozmetik ve Gıda Hidrosolü",
      everydayUsage: "Geleneksel bayram şerbetleri ve güllaç kokulandırıcısı, stres ve anksiyete yatıştırıcı yüz sisi, kuru ve nemsiz ciltler için nemlendirici tonik.",
      alchemicalName: "Aqua Florum Aurantii / Aqua Naphae",
      note: "Acı portakal çiçeklerinden damıtılan 'Neroli', 17. yüzyılda Nerola Düşesi Marie Anne de La Trémoille sayesinde sarayların vazgeçilmez kokusu olmuştur; beyin limbik sisteminde serotonin salgılanmasını uyarır."
    },
    {
      colloquial: "Gül Mayası / Gül Konkreti",
      scientific: "Rosa damascena Çiçekleri Primer Mum ve Eterik Fazı (Feniletil Alkol, Sitronellol & Parafin Mumları)",
      formula: "C8H10O_phenylethyl_rich",
      category: "Lüks Parfümeri ve Krem Bazı",
      subId: "sub-bot-rose-concrete",
      safety: "🟢 Güvenli Doğal Kozmetik Hammaddesi",
      everydayUsage: "Isparta gül yağı üretiminde ara kademe olan katı merhem bazı, lüks doğal katı parfümler, kırışıklık karşıtı yoğun gece balzamları.",
      alchemicalName: "Concretum Rosae Damascenae",
      note: "Taze toplanan güllerin organik çözücülerle (heksan/petrol eteri) ekstraksiyonuyla elde edilen macun kıvamındaki konsantredir; distilasyon ısısına maruz kalmadığı için canlı gülün tüm doğal koku moleküllerini eksiksiz korur."
    },
    {
      colloquial: "Rezene Suyu / Mayana Distilatı",
      scientific: "Foeniculum vulgare Meyve Buhar Distilatı (trans-Anetol, Fenkon & Östragol)",
      formula: "C10H12O_anethole_fennel",
      category: "Karminatif & Sindirim Hidrosolü",
      subId: "sub-bot-fennel-water",
      safety: "🟢 Güvenli Bebek ve Yetişkin Sindirim Suyu",
      everydayUsage: "Bebeklerde infantil kolik gaz sancısı kaşığı, emziren annelerde süt artırıcı içecek, hazımsızlık ve şişkinlik giderici yemek sonrası suyu.",
      alchemicalName: "Aqua Foeniculi Fructus",
      note: "Anadolu'da 'mayana' olarak bilinen rezene tohumlarından damıtılır; bağırsak düz kaslarındaki asetilkolin reseptörlerini bloke ederek gaz birikimini ve krampları nazikçe rahatlatır."
    },
    {
      colloquial: "Adaçayı Ruhu / Salvia Distilatı",
      scientific: "Salvia officinalis Yaprak Buhar Distilatı (alfa-Tuyon, 1,8-Sineol & Kamfor)",
      formula: "C10H16O_thujone_salvia",
      category: "Astringent & Antiperspirant Hidrosol",
      subId: "sub-bot-sage-hydrosol",
      safety: "🟡 Ham Yağ Hamilelikte Kullanılmaz (Hidrosolü Haricen Güvenlidir)",
      everydayUsage: "Aşırı terleme (hiperhidroz) önleyici ayak ve koltuk altı spreyi, tonsillit ve bademcik iltihabı gargarası, yağlı akneye meyilli cilt toniği.",
      alchemicalName: "Aqua Salviae Lavandulifoliae",
      note: "Ter bezlerinin sempatik uyarımını baskılayarak doğal ter kesici etki gösterir; aynı zamanda ağız içi mukozasındaki mikropları öldürür ve gevşek diş etlerini sıkılaştırır."
    },
    {
      colloquial: "Defne Yaprağı Suyu / Tehnel Suyu",
      scientific: "Laurus nobilis Yaprak Buhar Distilatı (1,8-Sineol, Sabinen & Metil Öjenol)",
      formula: "C10H18O_laurel_leaf_water",
      category: "Antimikrobiyal & Cilt Arındırıcı Hidrosol",
      subId: "sub-bot-bay-leaf-water",
      safety: "🟢 Güvenli Doğal Cilt ve Saç Hidrosolü",
      everydayUsage: "Tıraş sonrası tahriş ve kıl dönmesi önleyici sprey, kepekli ve yağlanan saç derisi toniği, mutfakta marine etme aroması.",
      alchemicalName: "Aqua Lauri Foliorum",
      note: "Akdeniz defne yapraklarının damıtılmasında elde edilen hidrosoldür; sebum salgısını dengeleyerek saç köklerindeki mantar ve bakteri oluşumunu baskılar."
    },
    {
      colloquial: "Kekik Suyu / Zahter Suyu (Acı Su)",
      scientific: "Origanum onites Primer Damıtma Hidrosolü (Çözünmüş Timol & Karvakrol Suyu)",
      formula: "C10H14O_thyme_hydrosol",
      category: "Doğal Mide Tonik & Arındırıcı",
      subId: "sub-bot-oregano-hydrosol",
      safety: "🟡 Tadı Çok Acıdır (Suyla Seyreltilerek İçilir, Gastriti Olanlar Dikkat Etmelidir)",
      everydayUsage: "Mide üşütmesi ve gıda zehirlenmesinde geleneksel arındırıcı bardak, kan şekeri ve kolesterol dengeleyici halk kürü, boğaz enfeksiyonu gargarası.",
      alchemicalName: "Aqua Origani / Aqua Thymi Rustici",
      note: "Uçucu yağ damıtılırken altta kalan hidrosol fazıdır; saf timol ve karvakrolün suda çözünen mikro-fraksiyonlarını barındırır ve bağırsak florasındaki zararlı patojenleri seçici olarak temizler."
    },
    {
      colloquial: "Ceviz Yaprağı Suyu / Juglon Çayı",
      scientific: "Juglans regia Yaprak Sulu Ekstresi (Kateşik Tanenler, Juglon & Flavonoidler)",
      formula: "C10H6O3_juglone_folium",
      category: "Astringent & Antifungal Banyo Suyu",
      subId: "sub-bot-walnut-leaf-water",
      safety: "🟢 Harici Kullanımda Güvenli",
      everydayUsage: "Ayak mantarı ve pişik banyosu, dökülen ve mat saçları koyulaştırıcı parlaklık durulama suyu, hemoroit oturma banyosu.",
      alchemicalName: "Aqua Foliorum Juglandis",
      note: "Yapraklarındaki yüksek tanen oranı cilt proteinlerini büzüştürerek mikropların dokuya nüfuz etmesini engellerken barındırdığı juglon mantar sporlarının çimlenmesini durdurur."
    },
    {
      colloquial: "Ihlamur Çiçeği Müsilajı / Tilia Jeli",
      scientific: "Tilia cordata / Tilia platyphyllos Çiçek Müsilajı (Arabinogalaktan & Kuersetin Glikozitleri)",
      formula: "(C6H10O5)n_tilia_mucilage",
      category: "Yatıştırıcı Müsilaj & Diaforetik Jel",
      subId: "sub-bot-linden-mucilage",
      safety: "🟢 Güvenli Doğal Gıda ve Kozmetik Jeli",
      everydayUsage: "Boğaz yanmasını anında kesen ılık ıhlamur süzüntüsü, göz kapakları ve şiş göz altları için yatıştırıcı kompres jeli, hassas kuru cilt nemlendiricisi.",
      alchemicalName: "Mucilago Florum Tiliae",
      note: "Ihlamur çiçekleri demlendiğinde suya geçen yüksek viskoziteli dallanmış polisakaritler, tahriş olmuş solunum epiteli üzerinde koruyucu jel tabakası oluşturur."
    },
    {
      colloquial: "Papatya Suyu / Mayis Papatyası Hidrosolü",
      scientific: "Matricaria chamomilla Buhar Distilatı (alfa-Bisabolol, Bisabolol Oksit & Kamazulen İzleri)",
      formula: "C15H26O_bisabolol_hydrosol",
      category: "Anti-İnflamatuar & Bebek Bakım Hidrosolü",
      subId: "sub-bot-chamomile-water",
      safety: "🟢 Bebekler ve Hassas Ciltler İçin En Güvenli Hidrosol",
      everydayUsage: "Bebek bezi pişiği ve egzama yatıştırıcı sprey, saç rengini güneşte doğal açıcı durulama suyu, diş çıkaran bebeklerde damak silme toniği.",
      alchemicalName: "Aqua Chamomillae Vulgaris",
      note: "Hakiki tıbbi papatyanın damıtılmasıyla elde edilir; içerdiği bisabolol molekülü siklooksijenaz (COX) ve lipoksijenaz enzimlerini baskılayarak kortizon benzeri yan etkisiz yatıştırma sağlar."
    },
    {
      colloquial: "Sarımsak Yağı / Allisin Konsantresi",
      scientific: "Allium sativum Buhar Distilasyonu Uçucu Yağı (Diallil Disülfit, Diallil Trisülfit & Ajoen)",
      formula: "C6H10S2_diallyl_disulfide",
      category: "Süper Geniş Spektrumlu Antimikrobiyal & Kardiyovasküler Yağ",
      subId: "sub-bot-garlic-oil-essence",
      safety: "🟡 Aşırı Yoğun Koku & Saf Halde Mukoza Yakıcı",
      everydayUsage: "Tansiyon ve damar sertliği koruyucu mikro-kapsül yağ, kulak damlası formülasyonu (zeytinyağı içinde seyreltilerek), bağırsak parazitlerini dökücü damla.",
      alchemicalName: "Oleum Allii Sativi",
      note: "Alliin molekülünün alliinaz enzimiyle parçalanıp damıtılmasıyla oluşan uçucu sülfür bileşikleridir; penisilinden 100 kat daha geniş spektrumlu antibakteriyel etkiye sahip olup damar içi plak oluşumunu önler."
    },
    {
      colloquial: "Çörek Otu Yağı / Kara Habbe Yağı",
      scientific: "Nigella sativa Tohumu Soğuk Pres Sabit Yağı (Timokinon %1-2, Ditiymokinon & Linoleik Asit)",
      formula: "C10H12O2_thymoquinone_rich",
      category: "İmmünomodülatör & Antihistaminik Fonksiyonel Yağ",
      subId: "sub-bot-black-seed-cold-pressed",
      safety: "🟢 Güvenli Fonksiyonel Besin ve Masaj Yağı",
      everydayUsage: "Alerjik rinit ve astımda bağışıklık dengeleyici günlük kaşık, sedef ve egzama ovma yağı, saç dökülmesi ve eklem sertliği masaj bazı.",
      alchemicalName: "Oleum Nigellae Sativae Seminis",
      note: "İslam ve Ortadoğu tıbbında 'ölüm hariç her derde deva' olarak anılan kadim tohum yağıdır; ana biyoaktifi olan timokinon, mast hücrelerinden histamin salınımını bloke ederek alerjik inflamasyonu kökünden durdurur."
    },
    {
      colloquial: "Kâfuru Yağı / Sıvı Kafur",
      scientific: "Cinnamomum camphora Ağacı Sıvı Fraksiyonu (Safrol, Pinen & Sineol Zengin Yağ)",
      formula: "C10H16_camphor_oil",
      category: "Aromaterapik Masaj Yağı & Dekonjestan",
      subId: "sub-bot-camphor-oil-liquid",
      safety: "🟡 Yalnızca Harici Kullanım (Yüksek Dozda Nörotoksik Olabilir)",
      everydayUsage: "Göğüs masaj ovması, burun tıkanıklığı buhar banyosu, boyun ve bel tutulmalarında ısıtıcı losyon ചില.",
      alchemicalName: "Oleum Camphoratum / Oleum Camphorae Liquidum",
      note: "Kafur kristallerinin ayrıştırılmasından sonra kalan fraksiyondur; derideki termoreseptörleri hızla uyararak kan akışını artırır ve kas liflerindeki laktik asit birikimini dağıtır."
    },
    {
      colloquial: "Acı Badem Suyu / Amigdalin Distilatı",
      scientific: "Prunus amygdalus var. amara Tohum Buhar Distilatı (Benzaldehit & Eser Siyanür Ayrıştırılmış)",
      formula: "C7H6O_benzaldehyde_water",
      category: "Kozmetik Koku & Spazmolitik Hidrosol",
      subId: "sub-bot-bitter-almond-water",
      safety: "🟡 Ham Distilat Toksiktir (Yalnızca Siyanürsüzleştirilmiş Eczane Formu Kullanılır)",
      everydayUsage: "Geleneksel öksürük yatıştırıcı damlalar, lüks acıbadem kurabiyesi aroması, cilt lekesi giderici acıbadem sütü toniği.",
      alchemicalName: "Aqua Amygdalarum Amararum",
      note: "Amigdalin glikozitinin emülsin enzimiyle parçalanması sonucu oluşur; saflaştırılmış formu solunum merkezini hafifçe yatıştırarak inatçı spazmodik öksürüğü keser."
    },
    {
      colloquial: "Meyve Asidi / Glikolik Asit (AHA)",
      scientific: "Glikolik Asit / Hidroksiasetik Asit (Saccharum officinarum Fermantasyon Ürünü)",
      formula: "C2H4O3_glycolic_acid",
      category: "Kimyasal Peeling & Keratolitik AHA",
      subId: "sub-cosm-glycolic-acid",
      safety: "🟡 %10 Üzeri Konsantrasyonlarda Ciltte Yanma Yapar (Güneş Koruyucu Şarttır)",
      everydayUsage: "Cilt yenileyici kimyasal peeling solüsyonu, akne ve leke giderici gece toniği, batık ve kıl dönmesi önleyici losyon.",
      alchemicalName: "Acidum Glycolicum / Acidum Saccharinum",
      note: "AHA (Alfa Hidroksi Asit) ailesinin en küçük molekül ağırlıklı üyesidir; stratum corneumdaki korneositler arası lipit bağlarını çözerek ölü deri tabakasını nazikçe soyar ve alt katmandan taze hücre üretimini tetikler."
    },
    {
      colloquial: "Süt Asidi / Laktik Asit (AHA)",
      scientific: "L-Laktik Asit / 2-Hidroksipropanoik Asit (Peynir Altı Suyu ve Şeker Fermantasyonu)",
      formula: "C3H6O3_lactic_acid",
      category: "Nemlendirici AHA & Doğal Asitlik Düzenleyici",
      subId: "sub-cosm-lactic-acid",
      safety: "🟢 Güvenli Doğal Cilt ve Gıda Asidi",
      everydayUsage: "Doğal nemlendirici faktör (NMF) destekleyici cilt serumu, genital bölge pH 3.8-4.2 dengeleyici yıkama jeli, turşu ve peynir koruyucu asidi.",
      alchemicalName: "Acidum Lacticum",
      note: "Kleopatra'nın eşek sütü banyolarının arkasındaki aktif bilimsel maddedir; cildi eksfoliye ederken seramid sentezini artırır ve derin hidrasyon sağlar."
    },
    {
      colloquial: "Elma Asidi / Malik Asit",
      scientific: "DL-Malik Asit / Hidroksibütandioik Asit (Yeşil Elma ve Ekşi Meyve Asidi)",
      formula: "C4H6O5_malic_acid",
      category: "Enerji Metaboliti & Keratolitik Asit",
      subId: "sub-food-malic-acid",
      safety: "🟢 Güvenli Gıda ve Cilt Bakım Asidi",
      everydayUsage: "Kronik yorgunluk ve fibromiyaljide ATP enerji üretim desteği (Magnezyum Malat), ekşi şekerleme aroması, diş beyazlatıcı doğal çilek lapası.",
      alchemicalName: "Acidum Malicum / Acidum Pomorum",
      note: "Krebs (sitrik asit) döngüsünün kritik bir ara basamağıdır; mitokondride hücresel enerji metabolizmasını hızlandırırken ciltte kolajen üretimini uyarır."
    },
    {
      colloquial: "Üzüm Asidi / Tartarik Asit (Krem Tartar Asidi)",
      scientific: "L(+)-Tartarik Asit / 2,3-Dihidroksibütandioik Asit (Şarap Tortusu Asidi)",
      formula: "C4H6O6_tartaric_acid",
      category: "Kiral Asit & Geleneksel Kabartma Tuzu Bazı",
      subId: "sub-food-tartaric-acid",
      safety: "🟢 Güvenli Doğal Gıda Asidi",
      everydayUsage: "Kabartma tozu üretimi, geleneksel lokum kıvam dengeleyici ve şeker kristalleşmesini önleyici şerbet asidi, metal parlatma banyosu.",
      alchemicalName: "Acidum Tartaricum / Sal Tartari",
      note: "Louis Pasteur'ün 1848'de moleküler kiraliteyi (sağ/sol el optik izomeri) keşfettiği tarihi kimyasal maddedir; fermantasyon fıçılarında dibe çöken tartar taşından saflaştırılır."
    },
    {
      colloquial: "Biberiye Külü / Spajirik Potas Tuzu",
      scientific: "Rosmarinus officinalis Biyokütle Kalsinasyon Külü (Spajirik Potasyum Karbonat & Eser Oksitler)",
      formula: "K2CO3_rosemary_salt",
      category: "Spajirik Felsefe Tuzu & Bitkisel Alkali",
      subId: "sub-spag-rosemary-salt",
      safety: "🟢 Güvenli Bitkisel Tuz Kalıntısı",
      everydayUsage: "Spajirik tentürlerde uçucu yağ ve alkol fazını yeniden 'beden' ile birleştiren kilit reaktif, alkali mineral takviyesi çayı.",
      alchemicalName: "Sal Spagyricum Rosmarini",
      note: "Paracelsus spajirya geleneğinde bitkinin 'Tuz' (beden) prensibidir; bitki posası akkor ateşte kül rengi beyazlaşana kadar kalsine edilip yağmur suyunda kristallendirilir."
    },
    {
      colloquial: "Keten Tohumu Külü / Bitkisel Kalsiyum Fosfat",
      scientific: "Linum usitatissimum Tohum Kalsinasyon Külü (Kalsiyum, Magnezyum Fosfat & Silikat Mineralleri)",
      formula: "Ca3(PO4)2_linum_ash",
      category: "Biyojenik Mineral & Kemik Güçlendirici",
      subId: "sub-spag-flaxseed-ash",
      safety: "🟢 Güvenli Doğal Biyojenik Mineral",
      everydayUsage: "Kemik kırıkları ve osteoporoz tedavisinde geleneksel mineral kürü, kalsiyum ve fosfor takviyesi macunları bazı.",
      alchemicalName: "Sal Vegetabilis Lini",
      note: "Tohumların içerdiği organik fosfolipit ve kalsiyumun yüksek ısıda kalsinasyonuyla inorganik biyoyararlanımlı tuz formuna dönüştürülmüş halidir."
    },
    {
      colloquial: "Karanfil Külü / Bitkisel Öjenolat Tuzu",
      scientific: "Syzygium aromaticum Kalsinasyon Külü (Potasyum, Magnezyum Karbonat & İyonik Mineraller)",
      formula: "K2CO3_eugenol_ash",
      category: "Alkalize Edici Mineral & Diş Tozu",
      subId: "sub-spag-clove-ash",
      safety: "🟢 Güvenli Doğal Diş Temizleme Minerali",
      everydayUsage: "Geleneksel diş ve diş eti temizleme tozu (misvak külü benzeri), ağız asitliğini anında nötralize edici gargara bazı.",
      alchemicalName: "Sal Caryophyllorum",
      note: "Karanfil posasının kalsinasyonuyla elde edilen beyaz tuz kalıntısıdır; tükürük pH'ını alkaliye kaydırarak asidik diş çürümelerini durdurur."
    },
    {
      colloquial: "Söğüt Külü / Spajirik Salisilat Tuzu",
      scientific: "Salix alba Dal Kabuğu Kalsinasyon Külü (Kalsiyum & Potasyum Oksit Bileşimi)",
      formula: "K2CO3_salix_ash",
      category: "Spajirik Tuz & Romatizma Minerali",
      subId: "sub-spag-willow-ash",
      safety: "🟢 Güvenli Geleneksel Mineral Tuzu",
      everydayUsage: "Doğal aspirin tentürü üretiminde saflaştırılmış spajirik bağlayıcı tuz, eklem romatizması banyoları katkısı.",
      alchemicalName: "Sal Corticis Salicis",
      note: "Söğüt ağacı kabuklarının kalsine edilmesiyle elde edilir; salisin ve salisilik asit içeren bitkisel süzüntüye geri eklenerek tuz formu oluşturulur."
    },
    {
      colloquial: "Arpa Çimi Suyu / Canlı Klorofil Özütü",
      scientific: "Hordeum vulgare Taze Çim Soğuk Sıkım Suyu (Magnezyum-Klorofilin, SOD Enzimi & Polifenoller)",
      formula: "C55H72MgN4O5_chlorophyll",
      category: "Biyoaktif Antioksidan & Kan Yapıcı Tonik",
      subId: "sub-bot-barley-grass-juice",
      safety: "🟢 Güvenli Fonksiyonel Besin Özütü",
      everydayUsage: "Alkali yeşil detoks içeceği, anemi ve demir emilimi artırıcı süper besin, yara iyileşmesini hızlandırıcı klorofil kompresi.",
      alchemicalName: "Succus Herbae Hordei Viridis",
      note: "Klorofil molekülü, merkezinde demir yerine magnezyum atomu taşıyan insan hemoglobinine neredeyse ikiz yapıdadır; kandaki oksijen taşınmasını ve eritrosit yenilenmesini destekler."
    },
    {
      colloquial: "Kırmızı Pancar Boyası / Betanin",
      scientific: "Beta vulgaris Kökü Konsantre Özütü (Betanin Glukoziti & Betalain Pigmentleri)",
      formula: "C24H26N2O13_betanin",
      category: "Doğal Gıda Boyası & Nitrik Oksit Kaynağı",
      subId: "sub-food-beetroot-betanin",
      safety: "🟢 Güvenli Doğal Gıda Boyası ve Fonksiyonel Besin",
      everydayUsage: "Doğal pembe-kırmızı gıda boyası (E162), sporcularda dayanıklılık ve damar genişletici nitrat desteği, karaciğer detoksifikasyonu.",
      alchemicalName: "Extractum Radicis Betae Rubrae",
      note: "Doğal azotlu betalain pigmentleridir; sentetik azo boyalarının aksine toksik ve kanserojen değildir, damar endotelinde nitrik oksit (NO) sentezini uyararak tansiyonu dengeler."
    },
    {
      colloquial: "Zerdeçal Ruhu / Kurkumin Yağı",
      scientific: "Curcuma longa Rizomu Süperkritik CO2 Ekstraktı (Kurkumin, Demetoksikurkumin & Turmeron)",
      formula: "C21H20O6_curcumin",
      category: "Anti-Enflamatuar & Eklem Onarıcı",
      subId: "sub-bot-turmeric-curcumin-oil",
      safety: "🟢 Güvenli Fitofarmasötik (Karabiber piperini ile biyoyararlanımı 20 kat artar)",
      everydayUsage: "Romatizma ve kireçlenmede eklem kıkırdağı koruyucu damlalar, inflamatuar bağırsak hastalıkları desteği, altın süt (Golden Milk) kürü.",
      alchemicalName: "Oleum Curcumae Longae",
      note: "NF-kB ve COX-2 inflamasyon yolaklarını güçlü şekilde bloke eden kurkuminoidleri içerir; lipofilik yapısıyla hücre zarını serbest radikal hasarından korur."
    },
    {
      colloquial: "Zencefil Suyu / Zingiber Hidrosolü",
      scientific: "Zingiber officinale Rizom Buhar Distilatı (Zingiberen, Sineol & Sitral)",
      formula: "C15H24_zingiberene_water",
      category: "Antiemetik & Termojenik Hidrosol",
      subId: "sub-bot-ginger-hydrosol",
      safety: "🟢 Güvenli Gıda ve İçecek Hidrosolü",
      everydayUsage: "Hamilelik ve yol tutması (deniz tutması) bulantısını kesen ferahlatıcı sprey, kışın vücudu ısıtıcı çay toniği, saç kökü kanlandırıcı tonik.",
      alchemicalName: "Aqua Zingiberis Rhizomatis",
      note: "Zencefilin uçucu aromatik seskiterpenlerini taşır; mide-bağırsak sistemindeki 5-HT3 serotonin reseptörlerini baskılayarak bulantı refleksini hızla dindirir."
    },
    {
      colloquial: "Limon Tuzu Kalsinasyonu / Kalsiyum Sitrat Külü",
      scientific: "Sitrik Asit ve Kalsiyum Karbonat Kalsinasyon Kalıntısı (Biyolojik Kalsiyum Karbonat & Oksit)",
      formula: "Ca3(C6H5O7)2_calcined",
      category: "Mineral Asimilasyon Kalıntısı & Antiasit",
      subId: "sub-spag-calcium-citrate-ash",
      safety: "🟢 Güvenli Mide Antiasidi",
      everydayUsage: "Mide ekşimesi ve asiditesini hızla nötralize edici alkali toz, biyoyararlanımı yüksek emilebilir kalsiyum kaynağı.",
      alchemicalName: "Calx Citrata",
      note: "Limon suyunun istiridye veya yumurta kabuğuyla nötrlenip kurutulmasıyla hazırlanan antik tıbbi kalsiyum sitrat tuzunun akkor fırın kalıntısıdır."
    },
    {
      colloquial: "Hardal Külü / Bitkisel Sülfat Tuzu",
      scientific: "Sinapis nigra Kalsinasyon Külü (Potasyum Sülfat & Kalsiyum Oksit Kalıntısı)",
      formula: "K2SO4_mustard_ash",
      category: "Spajirik Kükürt Tuzu & Çözücü",
      subId: "sub-spag-mustard-ash",
      safety: "🟢 Güvenli Bitkisel Tuz",
      everydayUsage: "Spajirik mineral banyoları, organik sülfat kaynağı olarak toprak ve bitki güçlendirici iksir.",
      alchemicalName: "Sal Seminum Sinapis",
      note: "Hardal tohumlarının kalsinasyonuyla elde edilen sülfürce zengin inorganik tuzdur; mineral kristalizasyonunda doğal tohumlayıcı olarak işlev görür."
    },
    {
      colloquial: "Isırgan Külü / Biyoaktif Silikat-Potas",
      scientific: "Urtica dioica Kalsinasyon Külü (Biyojenik Çözünür Silisik Asit & Potasyum Karbonat)",
      formula: "K2SiO3_rich_nettle_ash",
      category: "Biyojenik Silika & Mineral Takviyesi",
      subId: "sub-spag-nettle-ash",
      safety: "🟢 Güvenli Doğal Mineral Külü",
      everydayUsage: "Kırılgan saç ve tırnak güçlendirici spajirik damla, bitki korumada doğal mantar önleyici yaprak spreyi.",
      alchemicalName: "Sal Herbae Urticae",
      note: "Isırgan bitkisinin yakıcı tüylerindeki silika ve mineraller kalsinasyon külünde yoğunlaşır; bağ dokusunda kolajen liflerini çapraz bağlayarak güçlendirir."
    },
    {
      colloquial: "Pelin Külü / Spajirik Acı Tuz",
      scientific: "Artemisia absinthium Kalsinasyon Külü (Potasyum Klorür & Karbonat Tuzu)",
      formula: "KCl_K2CO3_wormwood_ash",
      category: "Spajirik Beden Tuzu & Sindirim Tuzu",
      subId: "sub-spag-wormwood-ash",
      safety: "🟢 Güvenli Spajirik Bitki Tuzu",
      everydayUsage: "Geleneksel pelin iksiri (Absinthe Spagyric Tincture) formülasyonunun mineral üçüncü ayağı, safra ve mide uyarımı.",
      alchemicalName: "Sal Absinthii",
      note: "Pelin otu posasının yakılıp defalarca suda çözündürülüp süzülmesiyle (çözme-bağlama / solve et coagula) elde edilen kar beyazı arı potasyum tuzudur."
    },
    {
      colloquial: "Gül Külü / Floralkali Tuzu",
      scientific: "Rosa damascena Yaprak Kalsinasyon Külü (Hafif Alkali Potasyum & Fosfor Tuzu)",
      formula: "K2CO3_rose_ash",
      category: "Kozmetik Alkali & Spajirik Tuz",
      subId: "sub-spag-rose-ash",
      safety: "🟢 Güvenli Doğal Çiçek Tuzu",
      everydayUsage: "Gül suyu ve gül yağını mikro-emülsifiye edip sabitleyen spajirik iksir tuzu, göz banyosu mineral katkısı.",
      alchemicalName: "Sal Florum Rosae",
      note: "Damıtılmış gül yapraklarının fırında kalsinasyonuyla elde edilir; gül hidrosolüne eklendiğinde kokunun kalıcılığını ve biyo-özümsemesini artırır."
    },
    {
      colloquial: "Mürver Meyvesi Şurubu / Sambukol Özü",
      scientific: "Sambucus nigra Olgun Meyve Ekstresi (Siyanidin-3-Glukozit, Sambusiyanin & C Vitamini)",
      formula: "C21H21O11_cyanidin_sambucol",
      category: "Kuvvetli Antiviral & İmmün Destek Şurubu",
      subId: "sub-bot-elderberry-syrup",
      safety: "🟢 Güvenli Pişirilmiş Meyve Şurubu (Çiğ Meyve Tüketilmemelidir)",
      everydayUsage: "İnfluenza A/B ve soğuk algınlığında viral girişi engelleyici koruyucu şurup, kış aylarında bağışıklık kalkanı içeceği.",
      alchemicalName: "Roob Sambuci / Succus Sambuci Inspissatus",
      note: "Mürver meyvesindeki antosiyaninler virüs yüzeyindeki hemaglütinin proteinlerine bağlanarak virüsün insan hücresine girişini ve replikasyonunu doğrudan bloke eder."
    },
    {
      colloquial: "Kantarun Külü / Kırmızı Kantaron Tuzu",
      scientific: "Hypericum perforatum Çiçek ve Sap Kalsinasyon Külü (Potasyum Oksit & Biyojenik Fosfat)",
      formula: "K2CO3_hypericum_ash",
      category: "Spajirik Felsefe Tuzu & Doku Onarıcı",
      subId: "sub-spag-st-john-ash",
      safety: "🟢 Güvenli Bitkisel Kalsinasyon Tuzu",
      everydayUsage: "Spajirik kırmızı kantaron iksirinin (Rubedo) mineral ayağı, yara ve yanık dokusu sıkılaştırıcı mineral tonik.",
      alchemicalName: "Sal Hyperici / Sal Rubedo",
      note: "Güneşte bekletilmiş kantaron bitkisi posasının beyaz kül olana kadar yakılmasıyla elde edilen saf çözünür tuzdur; kırmızı renkli hiperisin yağ fraksiyonuyla birleştirilerek eksiksiz spajirik üçleme (Kükürt-Cıva-Tuz) tamamlanır."
    },
    {
      colloquial: "Civanperçemi Külü / Spajirik Hemostatik Tuz",
      scientific: "Achillea millefolium Biyokütle Kalsinasyon Külü (Potasyum Klorür, Karbonat & Demir İzleri)",
      formula: "K2CO3_achillea_ash",
      category: "Spajirik Tuz & Kanama Dindirici",
      subId: "sub-spag-yarrow-ash",
      safety: "🟢 Güvenli Doğal Bitki Külü",
      everydayUsage: "Civanperçemi tentürünün beden tuzu olarak damıtığa eklenmesi, kılcal damar toniği banyo katkısı.",
      alchemicalName: "Sal Achilleae Millefolii",
      note: "Yara otu olarak bilinen civanperçeminin kalsine edilmesiyle elde edilen inorganik mineral fazıdır; damar büzücü ve pıhtılaşmayı hızlandırıcı mineral elektrolitleri barındırır."
    },
    {
      colloquial: "Kekik Külü / Karvakrolat Tuzu",
      scientific: "Thymus vulgaris / Origanum onites Kalsinasyon Külü (Potasyum Sülfat & Kalsiyum Karbonat)",
      formula: "K2SO4_thyme_ash",
      category: "Spajirik Tuz & Akciğer Toniği",
      subId: "sub-spag-thyme-ash",
      safety: "🟢 Güvenli Bitkisel Kalsinasyon Tuzu",
      everydayUsage: "Spajirik kekik iksiri üretiminde uçucu yağ ile alkolün geri bağlandığı kristal taban, antiseptik boğaz tozu.",
      alchemicalName: "Sal Thymi Rustici",
      note: "Kekik posasından elde edilen bu kalsinasyon tuzu yüksek oranda sülfür ve alkali iyonları taşır; akciğer mukozasındaki mikropları temizlerken alkali pH tamponu sağlar."
    },
    {
      colloquial: "Adaçayı Külü / Salvia Tuzu",
      scientific: "Salvia officinalis Yaprak Kalsinasyon Külü (Potasyum Karbonat & Magnezyum Oksit)",
      formula: "K2CO3_salvia_ash",
      category: "Spajirik Beden Tuzu & Antiperspirant",
      subId: "sub-spag-sage-ash",
      safety: "🟢 Güvenli Bitkisel Mineral Kalıntısı",
      everydayUsage: "Adaçayı spajirik iksiri sabitleyicisi, aşırı terleme ve ateş basmalarında mineral dengesi sağlayıcı çay takviyesi.",
      alchemicalName: "Sal Salviae Officinalis",
      note: "Adaçayının uçucu yağları damıtıldıktan sonra geride kalan yaprak posasının yüksek fırında saflaştırılmasıyla elde edilir; bitkinin ter bezlerini büzücü etkisini derinleştirir."
    },
    {
      colloquial: "Papatya Külü / Spajirik Bisabololat Tuzu",
      scientific: "Matricaria chamomilla Çiçek Kalsinasyon Külü (Kalsiyum & Potasyum Karbonat Minerali)",
      formula: "CaCO3_K2CO3_chamomile_ash",
      category: "Spajirik Tuz & Antispazmodik",
      subId: "sub-spag-chamomile-ash",
      safety: "🟢 Güvenli Doğal Mineral Külü",
      everydayUsage: "Spajirik papatya iksirinin yatıştırıcı mineral fazı, bebek banyolarında kireç yumuşatıcı ve cilt sakinleştirici mineral katkı.",
      alchemicalName: "Sal Chamomillae Vulgaris",
      note: "Papatya çiçeklerinin beyaz kül kalıntısıdır; antispazmodik düz kas gevşemesini destekleyen magnezyum ve potasyum iyonlarını bitkisel formda sunar."
    },
    {
      colloquial: "Kuşburnu Ekstraktı / Doğal C Vitamini Özü",
      scientific: "Rosa canina Meyve Ekstresi (L-Askorbik Asit, Galaktolipidler & Karotenoidler)",
      formula: "C6H8O6_ascorbic_rosehip",
      category: "Güçlü Antioksidan & Kolajen Sentezleyici",
      subId: "sub-bot-rosehip-extract",
      safety: "🟢 Güvenli Fonksiyonel Besin ve Cilt Aktifi",
      everydayUsage: "Eklem kireçlenmesinde kıkırdak yıkımını önleyen doğal galaktolipid kürü (GOPO), cilt parlatıcı ve leke açıcı C vitamini serumu, bağışıklık toniği.",
      alchemicalName: "Extractum Fructus Cynosbati",
      note: "Doğadaki en zengin doğal C vitamini ve biyoflavonoid depolarından biridir; narenciyeden 50 kat daha konsantre askorbik asit taşır ve sentetik C vitaminine kıyasla emilimi 3 kat daha yüksektir."
    },
    {
      colloquial: "Civanperçemi Yağı / Mavi Kamazulen Yağı",
      scientific: "Achillea millefolium Çiçek Buhar Distilasyonu Uçucu Yağı (%10-20 Saf Kamazulen)",
      formula: "C14H16_chamazulene_pure",
      category: "Koyu Mavi Uçucu Yağ & Güçlü Anti-İnflamatuar",
      subId: "sub-bot-yarrow-blue-oil",
      safety: "🟡 Yalnızca Harici Seyreltilerek Kullanılır (Saf Halde Koyu Mürekkep Rengindedir)",
      everydayUsage: "Kronik egzama ve atopik dermatit yatıştırıcı mavi serum, güneş yanığı ve cerrahi yara izi (skar) onarıcı balzam, varis masaj yağı.",
      alchemicalName: "Oleum Millefolii Coeruleum",
      note: "Distilasyon esnasında matrisindeki renksiz matrikarin molekülü yüksek buhar ısısıyla lakton halkasını açarak göz alıcı lacivert/kobalt mavisi renkte kamazulene dönüşür; bilinen en güçlü doğal antihistaminik ajanlardandır."
    },
    {
      colloquial: "Mavi Papatya Yağı / Alman Papatyası Yağı",
      scientific: "Matricaria chamomilla Çiçek Uçucu Yağı (Kamazulen, alfa-Bisabolol & Bisabolol Oksit A/B)",
      formula: "C14H16_chamomile_blue",
      category: "Lüks Antialerjik Mavi Yağ & Doku Onarıcı",
      subId: "sub-bot-german-chamomile-blue",
      safety: "🟢 Haricen Güvenli Lüks Kozmetik Uçucu Yağı",
      everydayUsage: "Kızarık ve hassas kuperozlu ciltleri sakinleştirici gece iksiri, alerjik kontakt dermatit yatıştırıcı krem, bebek pişik merhemleri bazı.",
      alchemicalName: "Oleum Chamomillae Coeruleum / Matricaria Oil",
      note: "Hakiki Alman papatyasının derin lacivert renkli mucizevi esansiyel yağıdır; bisabolol ve kamazulen sinerjisiyle lökotrien B4 sentezini baskılayarak kortizon benzeri güçlü sakinleştirme sağlar."
    },
    {
      colloquial: "Lavantin Yağı / Melez Lavanta Ruhu",
      scientific: "Lavandula hybrida / Lavandula grosso Uçucu Yağı (Linalool, Linalil Asetat & %6-8 Kafur)",
      formula: "C10H18O_lavandin",
      category: "Analjezik Masaj Yağı & Doğal Dezenfektan",
      subId: "sub-bot-lavandin-oil",
      safety: "🟢 Güvenli Masaj ve Difüzör Yağı",
      everydayUsage: "Sporcular için kas tutulması ve kramp ovma yağı, çamaşır ve ev temizliğinde doğal hijyenik koku, güve kovucu gardırop spreyi.",
      alchemicalName: "Oleum Lavandulae Hybridae",
      note: "Gerçek lavanta (L. angustifolia) ile geniş yapraklı dağ lavantasının (L. latifolia) doğal melezidir; içerdiği doğal kafur oranı sayesinde kasları ısıtır ve solunum yollarını rahatlatır."
    },
    {
      colloquial: "Itır Yağı / Geranyum Ruhu",
      scientific: "Pelargonium graveolens Yaprak Uçucu Yağı (Sitronellol, Geraniyol, Linalool & İzomenton)",
      formula: "C10H20O_citronellol_rich",
      category: "Hormon Dengeleyici & Lenfatik Dolaşım Yağı",
      subId: "sub-bot-geranium-oil",
      safety: "🟢 Güvenli Parfümeri ve Cilt Yağı",
      everydayUsage: "Gül yağı alternatifi lüks parfüm kalp notası, menopoz ve PMS dönemi duygu durumu dengeleyici koklama, selülit ve lenf ödemi masaj yağı.",
      alchemicalName: "Oleum Pelargonii / Oleum Geranii",
      note: "Gül benzeri taze çiçeksi kokusuyla bilinir; böbrek üstü bezlerini ve sebum üretimini regüle ederek hem kuru hem aşırı yağlı ciltlerde mükemmel denge kurar."
    },
    {
      colloquial: "Civanperçemi Merhemi / Yara Kapatıcı Balzam",
      scientific: "Achillea millefolium Özütü ve Balmumu Galenik Merhemi (Kamazulen, Cera Alba & Zeytinyağı)",
      formula: "C14H16_cera_alba_pomade",
      category: "Geleneksel Galenik Merhem & Yara Onarıcı",
      subId: "sub-pharm-yarrow-balm",
      safety: "🟢 Güvenli Doğal Galenik Merhem",
      everydayUsage: "Kılıç ve bıçak kesikleri ilk yardımı (Militaris Herba), topuk ve meme ucu çatlakları balzamı, donuk ve soğuk vurması merhemi.",
      alchemicalName: "Unguentum Millefolii / Balsamum Vulnerarium",
      note: "Roma lejyonerlerinin savaş çantalarında taşıdığı kadim yara merhemidir; balmumunun sağladığı oklüzif nem bariyeri altında kamazulen doku granülasyonunu ve epitelizasyonu hızlandırır."
    },
    {
      colloquial: "Çay Ağacı Yağı / Melaleuka Ruhu",
      scientific: "Melaleuca alternifolia Yaprak Uçucu Yağı (Terpinen-4-ol %40+, gamma-Terpinen & alfa-Pinen)",
      formula: "C10H18O_terpinen4ol",
      category: "Geniş Spektrumlu Doğal Antiseptik & Antifungal",
      subId: "sub-bot-tea-tree-oil",
      safety: "🟢 Haricen Güvenli / Dahilen Yutulmaz (Göz Çevresine Sürülmez)",
      everydayUsage: "Ergenlik sivilcesi ve akne üzerine noktasal pamuk uygulaması, ayak tırnak mantarı kürü, kepekli saç derisi şampuanı katkısı.",
      alchemicalName: "Oleum Melaleucae Alternifoliae",
      note: "Avustralya yerlileri Aborjinlerin bin yıllık antiseptiğidir; terpinen-4-ol bileşeni bakteri hücre zarının lipit katmanını çözerek antibiyotik dirençli MRSA bakterilerini bile etkisiz hale getirir."
    },
    {
      colloquial: "Buhur Yağı / Olibanum Esansı",
      scientific: "Boswellia carterii Sakız-Reçinesi Buhar Distilatı (alfa-Pinen, Olibanol & Limonen)",
      formula: "C10H16_pinene_frankincense",
      category: "Ruhsal Sakinleştirici & Hücre Yenileyici Yağ",
      subId: "sub-bot-frankincense-essential-oil",
      safety: "🟢 Güvenli Lüks Aromaterapi ve Cilt Bakım Yağı",
      everydayUsage: "Meditasyon ve derin nefes alma difüzör yağı, olgun ciltlerde kırışıklık açıcı ve elastikiyet artırıcı gece serumu, skar dokusu silici.",
      alchemicalName: "Oleum Olibani / Oleum Thurifero",
      note: "Kadim tütsü reçinesinin damıtılmasıyla elde edilen buhar esansıdır; beynin amigdala merkezinde nörotransmitter aktiviteyi dengeleyerek derin iç huzur ve odaklanma sağlar."
    },
    {
      colloquial: "Paçuli Yağı / Tefarik Ruhu",
      scientific: "Pogostemon cablin Fermente Yaprak Buhar Distilatı (Paçulol, Pogostol & Karyofillen)",
      formula: "C15H26O_patchoulol",
      category: "Topraksı Fiksatif & Afrodizyak Parfüm Bazı",
      subId: "sub-bot-patchouli-oil",
      safety: "🟢 Güvenli Parfümeri ve Cilt Yağı",
      everydayUsage: "Lüks oryantal parfümlerde kalıcılık sağlayan baz nota fiksatif, kuru egzama ve çatlak cilt kremleri, kumaş ve halı koruyucu doğal güve kovucu.",
      alchemicalName: "Oleum Patchouli / Oleum Pogostemonis",
      note: "İpek Yolu tüccarlarının ipek kumaşları güvelerden korumak için kullandığı ve zamanla lüksün simgesi haline gelen karakteristik kokudur; yıllandıkça şarap gibi olgunlaşır ve kokusu zenginleşir."
    },
    {
      colloquial: "Vetiver Yağı / Güve Otu Kökü Yağı",
      scientific: "Chrysopogon zizanioides Saçak Kök Buhar Distilatı (Khusimol, Vetiverol & Vetivon)",
      formula: "C15H24O_khusimol",
      category: "Topraklayıcı Nöro-Sedatif & Parfümeri Fiksatif",
      subId: "sub-bot-vetiver-oil",
      safety: "🟢 Güvenli Lüks Parfümeri Yağı",
      everydayUsage: "Erkek parfümlerinde asil odunsu-dumanlı taban notası, anksiyete ve ADHD (dikkat eksikliği) sakinleştirici koklama, aşırı zihinsel yorgunlukta topraklanma.",
      alchemicalName: "Oleum Vetiveriae / Oleum Ivarancusae",
      note: "Hindistan'da 'Huzur Yağı' (Oil of Tranquillity) olarak adlandırılır; toprağın metrelerce derinine inen köklerinden damıtılır ve sinir sisteminde sempatik hiperaktiviteyi hızla sakinleştirir."
    },
    {
      colloquial: "Ylang Ylang Yağı / Cananga Esansı",
      scientific: "Cananga odorata Çiçek Fraksiyonel Distilatı (Linalool, Geranil Asetat, Karyofillen & Benzil Benzoat)",
      formula: "C10H18O_linalool_ylang",
      category: "Hipotansif & Egzotik Afrodizyak",
      subId: "sub-bot-ylang-ylang-oil",
      safety: "🟢 Güvenli Lüks Parfümeri Yağı (Aşırı Koklandığında Baş Ağrısı Yapabilir)",
      everydayUsage: "Yüksek tansiyon ve taşikardi anında koklama ile nabız düşürücü, Chanel No.5 benzeri lüks parfümler, parlak saç serumu.",
      alchemicalName: "Oleum Canangae Odoratae",
      note: "Çiçeklerin damıtılmasında süreye göre Extra, I, II, III ve Tam (Complete) fraksiyonlarına ayrılır; parasempatik sinir sistemini aktive ederek kalp atım hızını ve sistolik tansiyonu düşürür."
    },
    {
      colloquial: "Bergamot Yağı / Bergamoten Ruhu",
      scientific: "Citrus bergamia Meyve Kabuğu Soğuk Sıkım Yağı (Linalil Asetat, Linalool, Limonen & Bergapten)",
      formula: "C12H20O2_linalyl_acetate",
      category: "Neşelendirici Nöro-Tonik & Earl Grey Çayı Aroması",
      subId: "sub-bot-bergamot-oil",
      safety: "🟡 Fototoksiktir (Güneşe Çıkmadan Önce Sürülmez / FCF Bergapten-Free Formu Tercih Edilir)",
      everydayUsage: "Geleneksel Earl Grey çayının karakteristik kokusu, sabah uyanma ve depresyon giderici aroma difüzörü, yağlı akne temizleme suyu.",
      alchemicalName: "Oleum Bergamottae",
      note: "İtalyan Calabria kıyılarının eşsiz narenciyesidir; beyinde dopamin ve serotonin nörotransmitterlerinin salınımını tetikleyerek zihinsel karanlığı ve karamsarlığı dağıtır."
    },
    {
      colloquial: "Sedir Ağacı Yağı / Atlas Sediri Ruhu",
      scientific: "Cedrus atlantica Odun Buhar Distilatı (beta-Himakalen, alfa-Himakalen & Atlanton)",
      formula: "C15H24_himachalene",
      category: "Lenfatik Drenaj & Saç Kökü Uyarıcı Yağ",
      subId: "sub-bot-cedarwood-atlas-oil",
      safety: "🟢 Güvenli Masaj ve Saç Bakım Yağı",
      everydayUsage: "Androjenik saç dökülmesi (alopesi areata) için biberiye ile kombine saç serumu, selülit ovması, meditasyon tütsüsü.",
      alchemicalName: "Oleum Cedri Atlantici",
      note: "Bin yıllık kadim sedir ormanlarının odunundan damıtılır; kılcal damarlarda lenfatik drenajı hızlandırırken sebum dengesizliğini giderir ve güveleri kumaşlardan uzak tutar."
    },
    {
      colloquial: "Limon Otu Yağı / Lemongrass Esansı",
      scientific: "Cymbopogon citratus / flexuosus Yaprak Distilatı (Geranial & Neral Sitral Karışımı %75+)",
      formula: "C10H16O_citral_rich",
      category: "Kuvvetli Doğal Böcek Kovucu & Doku Sıkılaştırıcı",
      subId: "sub-bot-lemongrass-oil",
      safety: "🟡 Hassas Ciltlerde Seyreltilmelidir (Deri İrritasyon Riski)",
      everydayUsage: "Sivrisinek ve kene kovucu doğal vücut spreyi, spor sonrası laktik asit dağıtıcı bacak losyonu, genişlemiş gözenek sıkılaştırıcı tonik.",
      alchemicalName: "Oleum Cymbopogonis Citrati",
      note: "Yüksek sitral içeriği sayesinde sivrisineklerin koku reseptörlerini kör ederek doğal kalkan oluşturur; aynı zamanda güçlü antifungal aktivitesiyle ayak mantarını yok eder."
    },
    {
      colloquial: "Palmarosa Yağı / Hint Itırı Yağı",
      scientific: "Cymbopogon martinii var. motia Buhar Distilatı (%80-85 Saf Geraniyol & Geranil Asetat)",
      formula: "C10H18O_geraniol_pure",
      category: "Doğal Geraniyol Kaynağı & Hücre Yenileyici",
      subId: "sub-bot-palmarosa-oil",
      safety: "🟢 Cilt İçin En Güvenli ve Nazik Uçucu Yağlardan Biridir",
      everydayUsage: "Kuru ve nemsiz ciltler için yoğun hidrasyon sağlayan nemlendirici krem bazı, doğal gül kokulandırıcısı, koltuk altı doğal deodorantı.",
      alchemicalName: "Oleum Palmarosae",
      note: "Yabani bir tropik çimden damıtılmasına rağmen dünyanın en yüksek saflıktaki doğal geraniyol kaynağıdır; ciltte hücresel nem dengesini regüle eder ve koku yapan bakterilerin üremesini durdurur."
    },
    {
      colloquial: "Biberiye Yağı / Sineol Ruhu",
      scientific: "Rosmarinus officinalis Yaprak Buhar Distilatı (1,8-Sineol %45+, alfa-Pinen & Kamfen)",
      formula: "C10H18O_cineole_rosemary",
      category: "Serebral Dolaşım & Hafıza Uyarıcı Uçucu Yağ",
      subId: "sub-bot-rosemary-oil",
      safety: "🟢 Güvenli Aromatik Yağ (Epilepsi Hastalarında Yüksek Dozdan Kaçınılmalıdır)",
      everydayUsage: "Konsantrasyon ve hafıza artırıcı koklama yağı, saç dökülmesine karşı saç derisi toniği, romatizma masaj yağı.",
      alchemicalName: "Oleum Rorismarini",
      note: "Asetilkolinesteraz enzimini inhibe ederek beyinde asetilkolin nörotransmitterinin parçalanmasını geciktirir; antik çağlardan beri öğrenme ve zihin netliği iksiri sayılır."
    },
    {
      colloquial: "Biberiye Suyu / Rozmarin Hidrosolü",
      scientific: "Rosmarinus officinalis Yaprak Buhar Distilasyonu Suyu (Rozmarinik Asit & 1,8-Sineol İzleri)",
      formula: "C18H16O8_rosmarinic_water",
      category: "Cilt Sıkılaştırıcı & Saç Kökü Canlandırıcı Hidrosol",
      subId: "sub-bot-rosemary-water",
      safety: "🟢 Güvenli Doğal Hidrosol",
      everydayUsage: "Kepek ve saç dökülmesini durduran saç dipleri spreyi, geniş gözenekleri küçülten yüz toniği, yorgun bacak ferahlatıcısı.",
      alchemicalName: "Aqua Rorismarini",
      note: "Uçucu yağ distilasyonu sırasında altta kalan saf sulu fazdır; cildin mikrosirkülasyonunu hızlandırırken sebum üretimini dengeler."
    },
    {
      colloquial: "Defne Yaprağı Suyu / Asil Defne Hidrosolü",
      scientific: "Laurus nobilis Yaprak Buhar Distilasyon Suyu (1,8-Sineol, Sabinen & Linalool Eserleri)",
      formula: "C10H18O_laurel_water",
      category: "Antiseptik & Arındırıcı Cilt Suyu",
      subId: "sub-bot-laurel-water",
      safety: "🟢 Güvenli Doğal Bitki Suyu",
      everydayUsage: "Tıraş sonrası tahriş yatıştırıcı tonik, yağlı saç durulama suyu, boğaz enfeksiyonlarında doğal gargara bazı.",
      alchemicalName: "Aqua Lauri Nobilis",
      note: "Akdeniz'in kadim defne yapraklarının damıtılmasıyla üretilir; güçlü bakterisit ve fungusit fenolik bileşikler barındırır."
    },
    {
      colloquial: "Nane Suyu / Mentol Hidrosolü",
      scientific: "Mentha piperita Yaprak Buhar Distilasyon Çözeltisi (Suda Çözünür Doğal Mentol & Menton)",
      formula: "C10H20O_menthol_water",
      category: "Serinletici & Termoregülatör Hidrosol",
      subId: "sub-bot-peppermint-water",
      safety: "🟢 Güvenli Doğal Serinletici",
      everydayUsage: "Yaz sıcağında anında vücut serinletici fısfıs sprey, güneş yanığı yatıştırıcı losyon bazı, migren anında şakak kompresi.",
      alchemicalName: "Aqua Menthae Piperitae",
      note: "Deri altındaki TRPM8 soğuk reseptörlerini tetikleyerek gerçek bir ısı kaybı olmadan beyne buz gibi ferahlık sinyali gönderir."
    },
    {
      colloquial: "Lavanta Suyu / Sakinleştirici Lavanta Hidrosolü",
      scientific: "Lavandula angustifolia Çiçek Buhar Distilatı (Linalool, Linalil Asetat & Terpinen-4-ol Eserleri)",
      formula: "C10H18O_linalool_water",
      category: "Anksiyolitik & Doku Onarıcı Çiçek Suyu",
      subId: "sub-bot-lavender-water",
      safety: "🟢 Bebek ve Hassas Ciltlerde Dahi Güvenlidir",
      everydayUsage: "Yastık spreyi olarak derin uyku tetikleyici, bebek pişik spreyi, epilasyon sonrası kızarıklık yatıştırıcı tonik.",
      alchemicalName: "Aqua Lavandulae",
      note: "Linalool molekülleri koku soğancığı üzerinden limbik sisteme ulaşarak GABAerjik nöronları yatıştırır ve anksiyeteyi düşürür."
    },
    {
      colloquial: "Mersin Suyu / Murt Yaprağı Hidrosolü",
      scientific: "Myrtus communis Yaprak Distilasyon Çözeltisi (Mirtenol, Mirtenil Asetat & Sineol İzleri)",
      formula: "C10H16O_myrtenol_water",
      category: "Veno-Tonik & Solunum Yolu Arındırıcı Hidrosol",
      subId: "sub-bot-myrtle-water",
      safety: "🟢 Güvenli Geleneksel Akdeniz Hidrosolü",
      everydayUsage: "Varis ve kılcal damar çatlamalarında bacak toniği, sinüzit buğusu, yağlı ve akneli cilt dengeleyici tonik.",
      alchemicalName: "Aqua Myrti Communis",
      note: "Anadolu halk hekimliğinde 'murt suyu' olarak bilinir; damar duvarlarını güçlendiren flavonoidler ve büzücü tanenler içerir."
    },
    {
      colloquial: "Rezene Yağı / Anetol Ruhu",
      scientific: "Foeniculum vulgare Tohum Buhar Distilatı (trans-Anetol %70+, Fenkon & Estragol)",
      formula: "C10H12O_anethole_fennel",
      category: "Spazmolitik & Karminatif Aromatik Yağ",
      subId: "sub-bot-fennel-oil",
      safety: "🟡 Hamilelikte ve Hormona Duyarlı Durumlarda Kullanılmaz (Estragol İçeriği)",
      everydayUsage: "Bebek ve yetişkin gaz sancılarında karın masajı, sindirim kolaylaştırıcı bitkisel şurup aroması, ağız ferahlatıcı.",
      alchemicalName: "Oleum Foeniculi",
      note: "trans-Anetol düz kaslardaki asetilkolin kasılmalarını bloke ederek bağırsak kramplarını ve mide spazmlarını saniyeler içinde çözer."
    },
    {
      colloquial: "Kimyon Tohumu Yağı / Küminaldehit Ruhu",
      scientific: "Cuminum cyminum Tohum Uçucu Yağı (Küminaldehit %40+, gamma-Terpinen & p-Simen)",
      formula: "C10H12O_cuminaldehyde",
      category: "Güçlü Karminatif & Termojenik Uçucu Yağ",
      subId: "sub-bot-cumin-oil",
      safety: "🟡 Güçlü Baharat Kokusu / Seyreltilerek Masaj Yağı Olarak Uygulanır",
      everydayUsage: "Sindirim yetersizliğinde mide ovma yağı, kas tutulmalarında ısıtıcı masaj losyonu, tarihi baharat iksiri.",
      alchemicalName: "Oleum Cumini",
      note: "Küminaldehit molekülü mide asidini ve pankreatik enzim sekresyonunu uyararak ağır yağlı yemeklerin sindirimini hızlandırır."
    },
    {
      colloquial: "Kişniş Tohumu Yağı / Koriandrol Ruhu",
      scientific: "Coriandrum sativum Tohum Buhar Distilatı (d-Linalool / Koriandrol %60-70 & alfa-Pinen)",
      formula: "C10H18O_coriandrol",
      category: "Nöro-Protektif & Toksin Atıcı Aromatik Yağ",
      subId: "sub-bot-coriander-oil",
      safety: "🟢 Güvenli ve Nazik Uçucu Yağ",
      everydayUsage: "Ağır metal şelasyon detoksları için masaj bazı, şişkinlik giderici karın losyonu, tarihi Chartreuse likör aroması.",
      alchemicalName: "Oleum Coriandri",
      note: "Tohumundaki d-linalool izomeri tatlı, odunsu ve sıcak bir koku profili verirken hücresel antioksidan enzimleri uyarır."
    },
    {
      colloquial: "Ardıç Meyvesi Yağı / Sabinen Ruhu",
      scientific: "Juniperus communis Meyve ve Kozalak Buhar Distilatı (alfa-Pinen, Sabinen & Mirsen)",
      formula: "C10H16_pinene_juniper",
      category: "Diüretik & Lenf Uyarıcı Detoks Yağı",
      subId: "sub-bot-juniper-berry-oil",
      safety: "🟡 Böbrek Hastalarında Yüksek Doz Dahili Kullanılmaz (Haricen Masajda Güvenlidir)",
      everydayUsage: "Selülit ve ödem çözücü bacak masaj yağı, detoks banyo tuzları, cin (gin) içkisi karakteristik aroması.",
      alchemicalName: "Oleum Juniperi Baccarum",
      note: "Terpinen-4-ol ve pinen bileşikleri böbrek glomerüllerinde filtrasyon hızını artırır; dokulardaki fazla suyun atılmasını destekler."
    },
    {
      colloquial: "Sedef Otu Suyu / Ruta Hidrosolü",
      scientific: "Ruta graveolens Yaprak Buhar Distilatı (2-Nonanon, 2-Undekanon & Rutin İzleri)",
      formula: "C11H22O_undecanone_water",
      category: "Göz Yorgunluğu & Kılcal Damar Tonik Hidrosolü",
      subId: "sub-bot-rue-water",
      safety: "🟡 Hamilelikte Kullanılmaz (Uterotonik Risk / Haricen Göz Kompresinde Güvenlidir)",
      everydayUsage: "Tarihi göz yorgunluğu kompresi, böcek ve akrep kovucu doğal sprey, varisli bacak pansumanı.",
      alchemicalName: "Aqua Rutae Graveolentis",
      note: "Ortaçağ manastır tıbbında 'göz otu suyu' olarak bilinen sedefotu, göz kılcallarının geçirgenliğini azaltarak görme keskinliğini destekler."
    },
    {
      colloquial: "Ihlamur Çiçeği Külü / Spajirik Tilia Tuzu",
      scientific: "Tilia cordata Çiçek Kalsinasyon Külü (Zengin Potasyum Karbonat & Biyojenik Silika K2CO3 + SiO2)",
      formula: "K2CO3+SiO2_tilia",
      category: "Spajirik Bitki Tuzu & Biyo-Mineral Kül",
      subId: "sub-base-ash-linden",
      safety: "🟢 Güvenli Doğal Mineral Kül",
      everydayUsage: "Spajirik tentür kristalizasyon tuzu, geleneksel alkali diş tozu katkısı, yatıştırıcı mineral banyo suyu.",
      alchemicalName: "Sal Salis Tiliae",
      note: "Ihlamur çiçeklerinin tam yanması ve fırında kalsine edilmesiyle elde edilen beyaz karlı tuzdur; spajirik simyada bitkinin 'tuz (beden)' prensibidir."
    },
    {
      colloquial: "Hayıt Meyvesi Suyu / Vitex Hidrosolü",
      scientific: "Vitex agnus-castus Meyve Buhar Distilasyon Çözeltisi (Kastisin, Okubin & Sabinen)",
      formula: "C21H22O8_casticin_water",
      category: "Hormonal Dengeleyici & Progesteron Destek Hidrosolü",
      subId: "sub-bot-chasteberry-water",
      safety: "🟢 Güvenli Doğal Kadın Sağlığı Hidrosolü",
      everydayUsage: "PMS dönemi gerginliği ve menopoz sıcak basmalarında vücut spreyi, hormonal akne yatıştırıcı yüz toniği.",
      alchemicalName: "Aqua Agni Casti",
      note: "Hipofiz bezindeki D2 dopaminerjik reseptörleri modüle ederek prolaktin salgısını dengeler; kadın döngüsel stabilitesini korur."
    },
    {
      colloquial: "Civanperçemi Hidrosolü / Spajirik Mavi Su",
      scientific: "Achillea millefolium Çiçek Buhar Distilasyon Suyu (Suda Çözünür Kamazulen Mikro-Zerreleri & Azulen)",
      formula: "C14H16_chamazulene_water",
      category: "Anti-Enflamatuar & Yara Onarıcı Mavi Hidrosol",
      subId: "sub-bot-yarrow-blue-water",
      safety: "🟢 Hassas ve Tahriş Olmuş Ciltler İçin İdeal",
      everydayUsage: "Açık yara ve kesik temizleme spreyi, roza ve kuperozlu cilt kızarıklık giderici tonik, egzama pansumanı.",
      alchemicalName: "Aqua Millefolii Coerulea",
      note: "Distilasyon sırasında hafif mavimsi tonda toplanır; kamazulen içeriği histamin salınımını ve lökosit infiltrasyonunu baskılar."
    },
    {
      colloquial: "Zufa Otu Yağı / Pinokamfon Ruhu",
      scientific: "Hyssopus officinalis Çiçekli Tepe Buhar Distilatı (İzopinokamfon %40+, Pinokamfon & beta-Pinen)",
      formula: "C10H16O_pinocamphone",
      category: "Bronkodilatör & Mukolitik Solunum Yağı",
      subId: "sub-bot-hyssop-oil",
      safety: "🟡 Yüksek Dozda Nörotoksiktir (Epileptojenik / Çocuklarda Buharlaştırılmaz)",
      everydayUsage: "Kronik bronşit ve balgamlı öksürük buğusu, tarihi kutsal arınma tütsüsü, göğüs merhemi.",
      alchemicalName: "Oleum Hyssopi",
      note: "İncil'de 'Beni zufaotuyla yıka, temizleneyim' ayetiyle kutsal sayılan kadim antiseptiktir; solunum yollarındaki inatçı mukusu parçalar."
    },
    {
      colloquial: "Sedir Ağacı Hidrosolü / Lübnan Sediri Suyu",
      scientific: "Cedrus libani / Cedrus atlantica Odun Distilasyon Suyu (Sedrol & Atlanton Eserleri)",
      formula: "C15H26O_cedrol_water",
      category: "Deri Matlaştırıcı & Sebum Düzenleyici Ağaç Suyu",
      subId: "sub-bot-cedar-hydrosol",
      safety: "🟢 Güvenli Doğal Odun Hidrosolü",
      everydayUsage: "Aşırı yağlanan saç ve kafa derisi durulama suyu, erkek tıraş sonrası spreyi, güve ve böcek kovucu gardırop spreyi.",
      alchemicalName: "Aqua Cedri Libani",
      note: "Bin yıllık sedir ağaçlarının kalbindeki reçineli odunun buharıyla elde edilir; yağ bezlerindeki aşırı sebum üretimini anında baskılar."
    },
    {
      colloquial: "Akgünlük Külü / Spajirik Olibanum Tuzu",
      scientific: "Boswellia carterii Sakız Reçinesi Kalsinasyon Külü (Kalsiyum Oksit, Potasyum Karbonat & Biyojenik Tuzlar)",
      formula: "CaO+K2CO3_boswellia",
      category: "Spajirik Tütsü Tuzu & Biyo-Reçine Külü",
      subId: "sub-base-ash-olibanum",
      safety: "🟢 Güvenli Doğal Mineral Kül",
      everydayUsage: "Spajirik tütsü özütlerinin yeniden canlandırılması, tarihi arındırıcı tapınak külleri, alkali banyo tuzu.",
      alchemicalName: "Sal Olibani Spagyricum",
      note: "Buhur reçinesinin alevsiz közde tam kalsine edilmesiyle üretilir; bosvelik asitlerin organik iskeleti kül fazında saf kristal tuza dönüşür."
    },
    {
      colloquial: "Okaliptüs Hidrosolü / Sineol Suyu",
      scientific: "Eucalyptus globulus Yaprak Distilasyon Çözeltisi (1,8-Sineol %80+ Mikro-Dispersiyonu)",
      formula: "C10H18O_eucalyptus_water",
      category: "Dekonjestan & Havadaki Virüsleri Temizleyici Hidrosol",
      subId: "sub-bot-eucalyptus-hydrosol",
      safety: "🟢 Doğal Solunum Ferahlatıcı (Göz Temasından Kaçınınız)",
      everydayUsage: "Tıkalı burun açıcı oda spreyi, sauna buhar suyu, maske içi ferahlatıcı sprey, ayak kokusu önleyici.",
      alchemicalName: "Aqua Eucalypti",
      note: "Akciğer alveollerindeki silya hareketini hızlandırarak patojenlerin dışarı atılmasını kolaylaştırır; ortam havasını mikroptan arındırır."
    },
    {
      colloquial: "Fesleğen Hidrosolü / Reyhan Suyu",
      scientific: "Ocimum basilicum Yaprak Buhar Distilasyon Suyu (Linalool, Öjenol & Metil Kavikol Eserleri)",
      formula: "C10H18O_basil_water",
      category: "Zihinsel Yorgunluk Giderici & Karminatif Bitki Suyu",
      subId: "sub-bot-basil-hydrosol",
      safety: "🟢 Güvenli Doğal Çiçek Suyu",
      everydayUsage: "Uzun çalışma saatlerinde zihinsel tükenmişliği gideren yüz spreyi, akne yatıştırıcı losyon, yemek aroması.",
      alchemicalName: "Aqua Basilicum",
      note: "Reyhanın neşelendirici ve sakinleştirici aromatik bileşikleri koku reseptörleri aracılığıyla beyin yorgunluğunu anında dağıtır."
    },
    {
      colloquial: "Tarçın Kabuğu Hidrosolü / Seylan Suyu",
      scientific: "Cinnamomum verum Kabuk Buhar Distilatı (Suda Çözünür Seylan Sinnamaldehiti & Öjenol)",
      formula: "C9H8O_cinnamaldehyde_water",
      category: "Termojenik & Antibakteriyel Isıtıcı Hidrosol",
      subId: "sub-bot-cinnamon-hydrosol",
      safety: "🟡 Hassas Ciltlerde Hafif Karıncalanma Yapabilir (Göz Çevresine Sürülmez)",
      everydayUsage: "Ağız kokusu giderici doğal sprey, kışın üşüyen ayaklar için ısıtıcı sprey, mikrop kırıcı oda kokusu.",
      alchemicalName: "Aqua Cinnamomi Veri",
      note: "Gerçek Seylan tarçınının saf suyla damıtılmasıdır; patojen bakterilerin hücre zarını yırtarak güçlü antiseptik koruma sağlar."
    },
    {
      colloquial: "Civanperçemi Tentürü / Akbaş Özütü",
      scientific: "Achillea millefolium Etanolik Galenik Özütü (Kamazulen, Apigenin & Achillein)",
      formula: "C14H16_chamazulene_tincture",
      category: "Doku Onarıcı & İç Kanamayı Dindirici Galenik İksir",
      subId: "sub-bot-yarrow-galenic-tincture",
      safety: "🟢 Güvenli Galenik Tentür (Alkol İçerir)",
      everydayUsage: "Mide spazmları, hemoroid rahatlatıcı kompres, diş eti kanaması için seyreltik gargara.",
      alchemicalName: "Tinctura Millefolii",
      note: "Truva Savaşı'nda Aşil'in askerlerin yarasını sarmak için kullandığına inanılan kadim hemostatik tentürdür."
    },
    {
      colloquial: "Andız Reçinesi Yağı / Sedir Katranı Ruhu",
      scientific: "Juniperus drupacea / Cedrus libani Doğal Reçine Özü (Kadinen & Sesquiterpen Laktonlar)",
      formula: "C15H24_cadinene_drupacea",
      category: "Akciğer Balgam Sökücü & Kadim Toros Reçinesi",
      subId: "sub-bot-elecampane-oil",
      safety: "🟢 Güvenli Geleneksel Pekmez ve Reçine Özütü",
      everydayUsage: "Kronik inatçı bronşit ve nefes darlığında göğüs masajı, parazit düşürücü, geleneksel bağışıklık toniği.",
      alchemicalName: "Oleum Resinae Juniperi Drupaceae",
      note: "Toros Dağları'nın yüksek zirvelerinde yetişen andız kozalaklarının reçinesinden elde edilen katran kokulu şifalı ekstredir."
    },
    {
      colloquial: "Meşe Kabuğu Suyu / Quercus Taneni",
      scientific: "Quercus robur Kabuk Buhar Distilatı (Hidrolize Edilebilir Ellagitanen & Gallik Asit)",
      formula: "C14H10O9_ellagitannin_water",
      category: "Aşırı Güçlü Büzücü (Astringent) & Kan Dindirici Hidrosol",
      subId: "sub-bot-oak-bark-water",
      safety: "🟢 Güvenli Harici Büzücü Doku Suyu",
      everydayUsage: "Gevşek diş etlerini sıkılaştıran gargara, aşırı terleyen ayak banyosu, egzama ve pişik banyosu katkısı.",
      alchemicalName: "Aqua Corticis Quercus",
      note: "Yüksek tanen içeriği mukoza proteinlerini çökelterek koruyucu esnek bir zar oluşturur ve mikroorganizmaların içeri sızmasını önler."
    },
    {
      colloquial: "Sarı Kantaron Suyu / Hiperisin Hidrosolü",
      scientific: "Hypericum perforatum Çiçek Buhar Distilasyonu Suyu (Hiperforin & Flavonoid İzleri)",
      formula: "C30H16O8_hypericin_water",
      category: "Yatıştırıcı Sinir Ucu Toniği & Güneş Yanığı Hidrosolü",
      subId: "sub-bot-st-johns-water",
      safety: "🟢 Yağı Gibi Fototoksik Değildir (Gündüz Kullanımı Güvenlidir)",
      everydayUsage: "Güneş sonrası kızaran cildi anında sakinleştiren sprey, nöropatik ağrılarda cilt kompresi, hassas yüz toniği.",
      alchemicalName: "Aqua Hyperici Perforati",
      note: "Kırmızı kantaron yağının aksine sulu distilat fototoksisite riski taşımaz; sinir uçlarındaki yanma hissini yatıştırır."
    },
    {
      colloquial: "Kekik Hidrosolü / Saf Zahter Suyu",
      scientific: "Thymbra spicata Çiçekli Dal Buhar Distilatı (%1-2 Doğal Timol & Karvakrol Suda Çözünmüş Faz)",
      formula: "C10H14O_carvacrol_water",
      category: "Geniş Spektrumlu Doğal Antibiyotik Hidrosol",
      subId: "sub-bot-thyme-pure-water",
      safety: "🟢 Güvenli ve Etkili Doğal Dezenfektan",
      everydayUsage: "Aft ve boğaz ağrısı gargarası, gıda yüzeyleri temizleme spreyi, akne ve sivilce kurutucu yüz toniği.",
      alchemicalName: "Aqua Thymi Spicatae",
      note: "Halk arasında 'acı su' olarak da bilinir; patojen bakterilerin hücre zarındaki ergosterol sentezini bozarak anında sterilizasyon sağlar."
    },
    {
      colloquial: "Melissa Ruhu / Oğul Otu Uçucu Yağı",
      scientific: "Melissa officinalis Çiçekli Dal Buhar Distilatı (Sitronellal, Neral & Geranial)",
      formula: "C10H18O_citronellal_melissa",
      category: "Kardiyak Sakinleştirici & Anti-Stres Lüks Yağ",
      subId: "sub-bot-lemon-balm-oil",
      safety: "🟢 Güvenli Nöro-Sedatif Aromaterapi Yağı",
      everydayUsage: "Taşikardi ve panik atak anında bileklere koklama, uykusuzluk masajı, herpes (uçuk) lezyonlarına lokal uygulama.",
      alchemicalName: "Oleum Melissae Citratae",
      note: "Tonlarca melisa yaprağından yalnızca gram düzeyinde elde edilebilen dünyanın en pahalı ve etkili doğal sakinleştirici uçucu yağlarındandır."
    },
    {
      colloquial: "Adaçayı Yağı / Dalmatian Salvia Yağı",
      scientific: "Salvia officinalis Çiçek ve Yaprak Buhar Distilatı (alfa-Tüyon %30+, 1,8-Sineol & Kamfor)",
      formula: "C10H16O_thujone_dalmatian",
      category: "Güçlü Astringent & Aşırı Terleme Engelleyici Yağ",
      subId: "sub-bot-dalmatian-sage-oil",
      safety: "🟡 Hamilelerde ve Çocuklarda Kullanılmaz (Tüyon Nörotoksisitesi)",
      everydayUsage: "El ve ayak terlemesi önleyici banyo damlası, saç dökülmesini durduran friksiyon yağı, tarihi dezenfektan.",
      alchemicalName: "Oleum Salviae Dalmaticae",
      note: "Dalmaçya kıyılarının yüksek tüyonlu hakiki adaçayıdır; ter bezlerinin kolinerjik aktivitesini doğrudan baskılar."
    },
    {
      colloquial: "Papatya Hidrosolü / Alman Papatyası Suyu",
      scientific: "Matricaria chamomilla Çiçek Buhar Distilasyon Çözeltisi (alfa-Bisabolol, Bisabolol Oksit & Matrisin İzleri)",
      formula: "C15H26O_bisabolol_water",
      category: "Bebek Cildi Koruyucu & Antihistaminik Çiçek Suyu",
      subId: "sub-bot-german-chamomile-water",
      safety: "🟢 Yeni Doğan Bebeklerde Dahi %100 Güvenlidir",
      everydayUsage: "Göz çapaklanması ve konjonktivit temizliği, bebek pişik kompresi, diş çıkaran bebeklerin yanaklarına masaj spreyi.",
      alchemicalName: "Aqua Chamomillae Matricariae",
      note: "Bisabolol molekülleri mast hücrelerinden histamin degranülasyonunu durdurarak alerjik kızarıklık ve kaşıntıyı nötralize eder."
    },
    {
      colloquial: "Civanperçemi Çiçeği Külü / Sal Millefolii",
      scientific: "Achillea millefolium Çiçek Kalsinasyon Külü (Zengin Potasyum Karbonat, Demir ve Magnezyum Oksit K2CO3 + Fe2O3)",
      formula: "K2CO3+Fe2O3_yarrow",
      category: "Spajirik Bitki Tuzu & Doku Sıkılaştırıcı Biyo-Mineral",
      subId: "sub-base-ash-yarrow-flower",
      safety: "🟢 Güvenli Doğal Mineral Kül",
      everydayUsage: "Spajirik esans döngüsünü tamamlama, geleneksel kan temizleyici mineral çayı katkısı, hemostatik yara tozu.",
      alchemicalName: "Sal Florum Millefolii",
      note: "Civanperçemi çiçeklerinin yakılıp kalsine edilmesiyle elde edilen tuzdur; spajirik tıp felsefesinde 'Aşil'in kanını pıhtılaştıran mineral ruh' kabul edilir."
    },
    {
      colloquial: "Sinirli Ot Suyu / Plantago Hidrosolü",
      scientific: "Plantago lanceolata Yaprak Buhar Distilatı (Okubin, Aukubozit & Müsilaj Fraksiyonları)",
      formula: "C15H22O9_aucubin_water",
      category: "Böcek Isırığı & Doku Rejenerasyon Hidrosolü",
      subId: "sub-bot-plantain-water",
      safety: "🟢 Doğal / Toksik Olmayan Hücre Yenileyici",
      everydayUsage: "Arı ve sivrisinek sokmasında anında kaşıntı dindirici sprey, egzama yatıştırıcı tonik, güneş yanığı kompresi.",
      alchemicalName: "Aqua Plantaginis Lanceolatae",
      note: "Okubin glikoziti ciltte kolajen sentezini uyararak epitelizasyonu hızlandırır ve böcek zehirlerini hızla nötralize eder."
    },
    {
      colloquial: "Isırgan Otu Suyu / Urtica Hidrosolü",
      scientific: "Urtica dioica Yaprak ve Kök Buhar Distilasyonu Suyu (Organik Asitler, Silikat İyonları & Formik Asit İzleri)",
      formula: "H2SiO3+HCOOH_water",
      category: "Kılcal Dolaşım Hızlandırıcı & Saç Kökü Güçlendirici",
      subId: "sub-bot-nettle-water",
      safety: "🟢 Güvenli Cilt ve Saç Hidrosolü",
      everydayUsage: "Erkek tipi saç dökülmesinde DHT engelleyici kafa derisi spreyi, romatizma ağrılarında kan dolaşımı artırıcı kompres.",
      alchemicalName: "Aqua Urticae Dioicae",
      note: "Saç foliküllerindeki 5-alfa redüktaz enzimini baskılayarak testosteronun dihidrotestosterona (DHT) dönüşümünü yavaşlatır."
    },
    {
      colloquial: "Karahindiba Kökü Özü / Taraksasin Ruhu",
      scientific: "Taraxacum officinale Kök Etanolik Ekstresi (Taraksasin, İnülin & Taraksasterol)",
      formula: "C30H50O_taraxasterol",
      category: "Karaciğer Faz-2 Detoks & Safra Akışı Artırıcı Özüt",
      subId: "sub-bot-dandelion-extract",
      safety: "🟢 Güvenli Doğal Hepatoprotektif Özüt",
      everydayUsage: "Karaciğer yağlanması ve sindirim yavaşlığında bitkisel damla, detoks çayları bazı, sarılık destek kürü.",
      alchemicalName: "Extractum Taraxaci Radicis",
      note: "Safra kesesi motilitesini artırarak safra akışını (kolagog etki) iki katına çıkarır; kandaki toksinlerin karaciğerden atılımını hızlandırır."
    },
    {
      colloquial: "Enginar Suyu / Sinarin Hidrosolü",
      scientific: "Cynara scolymus Taze Yaprak Distilasyon Çözeltisi (1,5-Dikafeoilkinik Asit / Sinarin İzleri)",
      formula: "C25H24O12_cynarin_water",
      category: "Kolesterol Düzenleyici & Karaciğer Koruyucu Hidrosol",
      subId: "sub-bot-artichoke-water",
      safety: "🟢 Güvenli Karaciğer ve Safra Desteği",
      everydayUsage: "Hepatosteatoz (karaciğer yağlanması) kürleri, kan temizleyici sabah toniği, akne karşıtı arındırıcı yüz spreyi.",
      alchemicalName: "Aqua Cynarae Scolymi",
      note: "Sinarin molekülü hepatositlerin hücresel yenilenmesini stimüle ederken LDL kolesterol sentezini karaciğer düzeyinde baskılar."
    },
    {
      colloquial: "Dulavratotu Suyu / Arctium Hidrosolü",
      scientific: "Arctium lappa Kök Buhar Distilatı (Arktigenin, Poliasetilenler & Klorojenik Asit)",
      formula: "C27H34O11_arctigenin_water",
      category: "Deri Arındırıcı & Kistik Akne Tedavi Hidrosolü",
      subId: "sub-bot-burdock-water",
      safety: "🟢 Güvenli Dermatolojik Bitki Suyu",
      everydayUsage: "İnatçı kistik sivilce ve çıbanlarda arındırıcı yüz kompresi, yağlı egzama ve seboreik dermatit toniği.",
      alchemicalName: "Aqua Arctii Lappae",
      note: "Deri altı sebase bezlerde sebum oksidasyonunu engeller ve Propionibacterium acnes bakterisinin kolonizasyonunu kırar."
    },
    {
      colloquial: "Kırkkilit Suyu / Biyo-Silika Hidrosolü",
      scientific: "Equisetum arvense Gövde Buhar Distilasyonu Suyu (Çözünür Biyojenik Monosilisik Asit Si(OH)4)",
      formula: "Si(OH)4_silica_water",
      category: "Bağ Dokusu & Elastin Sentezini Artırıcı Silika Hidrosolü",
      subId: "sub-bot-horsetail-water",
      safety: "🟢 Güvenli Doğal Mineral Hidrosol",
      everydayUsage: "Kırılgan tırnak ve dökülen saçları güçlendiren durulama suyu, kırışıklık önleyici kolajen toniği, selülit ovması.",
      alchemicalName: "Aqua Equiseti Arvensis",
      note: "Yeryüzünde biyolojik olarak en yüksek oranda çözünür silis barındıran bitkidir; prolin hidroksilaz enzimini uyararak kolajen bağlarını sıkılaştırır."
    },
    {
      colloquial: "Kudret Narı Hidrosolü / Momordica Suyu",
      scientific: "Momordica charantia Meyve Buhar Distilatı (Momordisin, Karatin & Lutein Mikro-Partikülleri)",
      formula: "C30H48O4_momordicin_water",
      category: "Mide Dokusu Koruyucu & Hücresel Yara Onarıcı Hidrosol",
      subId: "sub-bot-bitter-melon-water",
      safety: "🟢 Güvenli Doğal Galenik Distilat",
      everydayUsage: "Gastrit ve reflü rahatlatıcı seyreltik içme suyu katkısı, yanık ve yatak yaraları pansumanı, derin doku toniği.",
      alchemicalName: "Aqua Momordicae Charantiae",
      note: "Mide mukoza bariyerinde prostaglandin sentezini artırarak mide asidine karşı doğal bir kalkan oluşturur."
    },
    {
      colloquial: "Laden Hidrosolü / Cistus Suyu",
      scientific: "Cistus ladaniferus Yaprak ve Çiçek Buhar Distilasyon Suyu (Labdanolik Asit & Yüksek Polifenoller)",
      formula: "C20H34O3_labdane_water",
      category: "Kuvvetli Antiviral & Kırışıklık Karşıtı Doku Suyu",
      subId: "sub-bot-cistus-water",
      safety: "🟢 Güvenli Doğal Reçine Hidrosolü",
      everydayUsage: "Kış mevsiminde viral enfeksiyonlardan koruyucu boğaz spreyi, yaşlanma karşıtı lüks yüz sıkılaştırıcı tonik.",
      alchemicalName: "Aqua Cisti Ladaniferi",
      note: "Yüksek molekül ağırlıklı polifenolleri virüs zarf proteinlerine yapışarak hücreye girişlerini bloke eder; güçlü anti-aging aktivitesi gösterir."
    },
    {
      colloquial: "Civanperçemi Kökü Külü / Spajirik Toprak Tuzu",
      scientific: "Achillea millefolium Odunsu Kök Kalsinasyon Külü (Potasyum Sülfat, Kalsiyum Karbonat ve Silikat K2SO4 + CaCO3)",
      formula: "K2SO4+CaCO3_yarrow_root",
      category: "Spajirik Kök Tuzu & Kadim Mineral Omurga",
      subId: "sub-base-ash-yarrow-root",
      safety: "🟢 Güvenli Doğal Mineral Kül",
      everydayUsage: "Spajirik simya felsefesinde 'toprak' elementini temsil eden tuz kristalizasyonu, alkali mineral banyosu.",
      alchemicalName: "Sal Radicis Millefolii",
      note: "Bitkinin derin toprakla temas eden köklerinin yüksek ısıda fırınlanmasıyla elde edilen mineral tuzdur; bitkinin yer altı hafızasını barındırır."
    },
    {
      colloquial: "Defne Tohumu Külü / Spajirik Laurus Tuzu",
      scientific: "Laurus nobilis Yağlı Tohum Kalsinasyon Külü (Zengin Potasyum Karbonat ve Fosfat Tuzu K2CO3 + K3PO4)",
      formula: "K2CO3+K3PO4_laurel",
      category: "Spajirik Tohum Tuzu & Biyojenik Alkali",
      subId: "sub-base-ash-laurel-berry",
      safety: "🟢 Güvenli Doğal Mineral Kül",
      everydayUsage: "Geleneksel Halep sabunu üretiminde kül suyu katkısı, spajirik tentür arıtma, mineral takviyesi.",
      alchemicalName: "Sal Baccarum Lauri",
      note: "Defne tohumlarındaki trigliserit ve reçinenin kalsinasyonu ile açığa çıkan beyaz karlı potasyum tuzudur."
    },
    {
      colloquial: "Sığala Yağı Distilatı / Storaks Balsamı Ruhu",
      scientific: "Liquidambar orientalis Ağaç Gövde Yarası Reçinesi Buhar Distilatı (Stiren, Sinnamik Asit & Sinnamil Sinnamat)",
      formula: "C9H8O2_cinnamic_storax",
      category: "Antik Parfümeri Fiksatörü & Ülser Koruyucu Balzam",
      subId: "sub-bot-storax-distillate",
      safety: "🟢 Güvenli Kadim Muğla Endemik Ağaç Reçinesi",
      everydayUsage: "Lüks parfümlerde kalıcılık artırıcı dip nota sabitleyici, tarihi nefes darlığı buğusu, tahriş giderici göğüs merhemi.",
      alchemicalName: "Oleum Styrax Liquidus",
      note: "Dünyada yalnızca Muğla Köyceğiz ve Rodos vadilerinde yetişen endemik sığala ağaçlarının gövdesinden toplanan ve Kleopatra'nın aşk iksiri sayılan kokulu balzamdır."
    },
    {
      colloquial: "Gül Mayası Distilatı / Damascena Özü",
      scientific: "Rosa damascena Taze Taç Yaprak Vakum Distilatı (2-Feniletanol, Sitronellol & Geraniyol)",
      formula: "C8H10O_phenethyl_rose",
      category: "Kardiyak Rezonans & Hücresel Gençleştirici İksir",
      subId: "sub-bot-rose-may-extract",
      safety: "🟢 Güvenli Yenilebilir Lüks Çiçek Distilatı",
      everydayUsage: "Geleneksel gül reçeli ve lokum aroması, kalp ferahlatıcı şerbetler, anti-aging göz çevresi serumu.",
      alchemicalName: "Spiritus Rosae Damascenae",
      note: "Isparta gül vadilerinden sabah gün doğmadan toplanan güllerin ilk distilasyon mayasıdır; frekansı en yüksek doğal esans kabul edilir."
    },
    {
      colloquial: "Hatmi Kökü Müsilajı / Althaea Hidrosolü",
      scientific: "Althaea officinalis Kök Sulu Ekstresi (Yüksek Molekül Ağırlıklı Arabinogalaktan & Ramnogalakturonan Müsilajı)",
      formula: "C12H20O10_mucilage_althaea",
      category: "Demulsan & Mukoza Koruyucu Biyo-Jel Hidrosolü",
      subId: "sub-bot-marshmallow-root-water",
      safety: "🟢 Güvenli Doğal Koruyucu Müsilaj",
      everydayUsage: "Kuru ve tahriş edici inatçı öksürük şurubu bazı, reflüde yemek borusu koruyucu jel, hassas kuru cilt nemlendiricisi.",
      alchemicalName: "Mucilago Radicis Althaeae",
      note: "Suyla temas ettiğinde şişerek kaygan bir biyo-jel örtü oluşturur; asit ve mekanik sürtünmeye karşı hücre yüzeyini kaplar."
    },
    {
      colloquial: "Melekotu Kökü Yağı / Angelika Ruhu",
      scientific: "Angelica archangelica Kök Buhar Distilatı (alfa-Pinen, beta-Fellandren & Siklosiklopentadekanolid)",
      formula: "C15H28O2_angelica_root",
      category: "Kadim Veba Koruyucu & Misk Notalı Kök Yağı",
      subId: "sub-bot-angelica-root-oil",
      safety: "🟡 Fototoksiktir (Güneşe Çıkmadan Önce Sürülmez / Furanokumarin İçerir)",
      everydayUsage: "Bénédictine ve Chartreuse likörlerinin gizli taban aroması, sindirim toniği masajı, tarihi panzehir tütsüleri.",
      alchemicalName: "Oleum Radicis Angelicae",
      note: "Ortaçağ Avrupa'sında başmelek Mikail'in vebadan korunmak için insanlara vahyettiğine inanılan mistik kök ruhudur."
    },
    {
      colloquial: "Sığala Yağı Külü / Spajirik Styrax Tuzu",
      scientific: "Liquidambar orientalis Saf Reçine Kalsinasyon Külü (Kalsiyum Oksit, Potasyum Karbonat ve Silika CaO + K2CO3)",
      formula: "CaO+K2CO3_storax",
      category: "Spajirik Reçine Külü & Biyo-Mineral Kristal",
      subId: "sub-base-ash-storax",
      safety: "🟢 Güvenli Doğal Mineral Kül",
      everydayUsage: "Spajirik sığala iksirini bedensel tuzla tamamlama, geleneksel egzama külleri, alkali banyo tozu.",
      alchemicalName: "Sal Styracis Liquidi",
      note: "Endemik Anadolu sığala ağacı reçinesinin alevsiz közde tam kalsine edilmesiyle elde edilen beyaz billur tuzdur."
    },
    {
      colloquial: "Kantaron Çiçeği Külü / Sal Hyperici",
      scientific: "Hypericum perforatum Parlak Sarı Çiçek Kalsinasyon Külü (Potasyum Fosfat & Demir Karbonat K3PO4 + FeCO3)",
      formula: "K3PO4+FeCO3_hypericum",
      category: "Spajirik Çiçek Tuzu & Güneş Prensibi Minerali",
      subId: "sub-base-ash-hypericum-flower",
      safety: "🟢 Güvenli Doğal Spajirik Tuz",
      everydayUsage: "Spajirik sarı kantaron simya iksirinin 'tuz' bedenini yeniden canlandırma, sinir yatıştırıcı mineral takviyesi.",
      alchemicalName: "Sal Florum Hyperici",
      note: "Yaz gündönümünde toplanan sarı çiçeklerin yakılmasıyla elde edilir; simyada Güneş'in mineral bedenini simgeler."
    },
    {
      colloquial: "Civanperçemi Uçucu Yağı / Saf Kamazulen Ruhu",
      scientific: "Achillea millefolium Çiçek Özel Fraksiyonel Distilatı (%25+ Konsantre Koyu İndigo Kamazulen)",
      formula: "C14H16_pure_chamazulene",
      category: "Güçlü Anti-Enflamatuar & Lüks İndigo Mavi Uçucu Yağ",
      subId: "sub-bot-yarrow-pure-chamazulene",
      safety: "🟢 Seyreltilerek Masaj Yağı Olarak Uygulanır",
      everydayUsage: "Romatoid artrit eklem ovması, şiddetli egzama ve sedef yatıştırıcı merhem aktifi, lüks mavi yüz iksiri.",
      alchemicalName: "Oleum Millefolii Coeruleum Verum",
      note: "Distilasyon esnasında renksiz matrisin molekülünün pirolitik dehidrasyonu ile lacivert-mavi kamazulene dönüşmesiyle oluşur."
    },
    {
      colloquial: "Adaçayı Çiçeği Külü / Sal Salviae",
      scientific: "Salvia officinalis Çiçek Başçığı Kalsinasyon Külü (Magnezyum Oksit & Potasyum Karbonat MgO + K2CO3)",
      formula: "MgO+K2CO3_salvia",
      category: "Spajirik Bitki Tuzu & Boğaz Koruyucu Mineral",
      subId: "sub-base-ash-salvia-flower",
      safety: "🟢 Güvenli Doğal Mineral Kül",
      everydayUsage: "Boğaz enfeksiyonlarında adaçayı hidrosolüne ilave edilen mineral tuzu, tarihi diş beyazlatma tozu.",
      alchemicalName: "Sal Florum Salviae",
      note: "Adaçayının morumsu çiçeklerinin kalsinasyonu ile üretilen hafif magnezyumlu alkali tuzdur."
    },
    {
      colloquial: "Biberiye Kökü Külü / Spajirik Rosmarinus Tuzu",
      scientific: "Rosmarinus officinalis Odunsu Dal ve Kök Kalsinasyon Külü (Kalsiyum Karbonat, Potasyum Sülfat & Demir İzleri)",
      formula: "CaCO3+K2SO4_rosemary",
      category: "Spajirik Kök Tuzu & Dolaşım Destek Külü",
      subId: "sub-base-ash-rosemary-root",
      safety: "🟢 Güvenli Doğal Mineral Kül",
      everydayUsage: "Spajirik zihin toniği minerali, saç köklerini besleyen geleneksel alkali saç suyu katkısı.",
      alchemicalName: "Sal Radicis Rorismarini",
      note: "Biberiyenin derin kök sisteminin fırınlanmasıyla elde edilen mineral omurgadır; zihinsel odaklanma iksirlerinin temelidir."
    },
    {
      colloquial: "Zencefil Kökü Külü / Zingiber Mineral Tuzu",
      scientific: "Zingiber officinale Rizom Kalsinasyon Külü (Zengin Potasyum Karbonat & Biyojenik Silika K2CO3 + SiO2)",
      formula: "K2CO3+SiO2_ginger",
      category: "Termojenik Kök Minerali & Spajirik Sindirim Tuzu",
      subId: "sub-base-ash-ginger-rhizome",
      safety: "🟢 Güvenli Doğal Mineral Kül",
      everydayUsage: "Mide ateşi ve sindirim zayıflığında spajirik tentür kristali, alkali mineral suyu takviyesi.",
      alchemicalName: "Sal Rhizomatis Zingiberis",
      note: "Zencefil rizomlarının közde yakılıp kalsine edilmesiyle üretilen beyaz tuzdur; zencefilin ateş prensibini kül formunda sabitler."
    },
    {
      colloquial: "Zerdeçal Kökü Külü / Kurkumin Mineral Külü",
      scientific: "Curcuma longa Rizom Kalsinasyon Külü (Potasyum Oksit, Fosfat ve Magnezyum Tuzu K2O + P2O5)",
      formula: "K2O+P2O5_turmeric",
      category: "Karaciğer Koruyucu Spajirik Mineral & Altın Kül",
      subId: "sub-base-ash-turmeric-rhizome",
      safety: "🟢 Güvenli Doğal Mineral Kül",
      everydayUsage: "Spajirik kurkumin tentürünün mineralizasyonu, geleneksel ayurvedik kül (Bhasma) preparatları.",
      alchemicalName: "Sal Rhizomatis Curcumae",
      note: "Altın sarısı zerdeçal köklerinin kalsinasyonuyla elde edilen biyo-aktif minerallerdir; hücresel membran geçirgenliğini artırır."
    },
    {
      colloquial: "Karanfil Tomurcuğu Külü / Öjenol Tuzu",
      scientific: "Syzygium aromaticum Kuru Tomurcuk Kalsinasyon Külü (Potasyum Klorür, Karbonat & Kalsiyum Fosfat KCl + Ca3(PO4)2)",
      formula: "KCl+Ca3(PO4)2_clove",
      category: "Diş Minesi & Ağız Florası Koruyucu Mineral Külü",
      subId: "sub-base-ash-clove-bud",
      safety: "🟢 Güvenli Doğal Mineral Kül",
      everydayUsage: "Geleneksel diş macunu ve diş temizleme tozu mineral bazı, spajirik karanfil iksiri tuzu.",
      alchemicalName: "Sal Caryophylli",
      note: "Karanfil tomurcuklarının yakılmasıyla elde edilen bu tuz, kalsiyum fosfat zenginliği sayesinde diş minesini remineralize eder."
    },
    {
      colloquial: "Tarçın Kabuğu Külü / Seylan Mineral Külü",
      scientific: "Cinnamomum verum Kabuk Kalsinasyon Külü (Kalsiyum Oksit & Manganez Zengin Karbonat Külü)",
      formula: "CaO+MnCO3_cinnamon",
      category: "Spajirik Kabuk Tuzu & İnsülin Duyarlılığı Minerali",
      subId: "sub-base-ash-cinnamon-bark",
      safety: "🟢 Güvenli Doğal Mineral Kül",
      everydayUsage: "Metabolizma hızlandırıcı spajirik iksir katkısı, geleneksel tarçın mineral suyu.",
      alchemicalName: "Sal Corticis Cinnamomi",
      note: "Seylan tarçını kabuğunun kalsinasyonu sonucu oluşan manganez ve kalsiyum zengini beyaz kristal küldür."
    },
    {
      colloquial: "Kekik Çiçeği Külü / Spajirik Karvakrol Tuzu",
      scientific: "Thymus vulgaris Çiçek Kalsinasyon Külü (Potasyum Sülfat & Kalsiyum Karbonat K2SO4 + CaCO3)",
      formula: "K2SO4+CaCO3_thyme",
      category: "Solunum Açıcı & Spajirik Akciğer Tuzu",
      subId: "sub-base-ash-thyme-flower",
      safety: "🟢 Güvenli Doğal Mineral Kül",
      everydayUsage: "Kronik astım ve bronşit spajirik kürlerinde mineral taşıyıcı, antiseptik mineral gargara katkısı.",
      alchemicalName: "Sal Florum Thymi",
      note: "Yabani dağ kekiğinin çiçeklerinin kalsine edilmesiyle elde edilen tuzdur; antik hekimlikte akciğer dokusunu kurutucu sayılır."
    },
    {
      colloquial: "Limon Kabuğu Külü / Biyojenik Sitrat Külü",
      scientific: "Citrus limon Meyve Kabuğu Kalsinasyon Külü (Potasyum Karbonat & Biyo-Kalsiyum K2CO3 + CaO)",
      formula: "K2CO3+CaO_lemon",
      category: "Alkalize Edici Vücut Asidi Nötralize Edici Kül",
      subId: "sub-base-ash-lemon-peel",
      safety: "🟢 Güvenli Doğal Narenciye Külü",
      everydayUsage: "Gut hastalığı ve ürik asit fazlalığında alkali su hazırlama tuzu, doğal temizleyici kül suyu.",
      alchemicalName: "Sal Corticis Citri",
      note: "Limon kabuklarının fırında kalsinasyonuyla elde edilen beyaz alkali küldür; vücut sıvılarını hızla alkaliye çeker."
    },
    {
      colloquial: "Portakal Çiçeği Suyu / Neroli Hidrosolü (Saf)",
      scientific: "Citrus aurantium var. amara Çiçek Buhar Distilasyonu Suyu (Linalool, Linalil Asetat & Antranilat Eserleri)",
      formula: "C10H18O_neroli_pure_water",
      category: "Psiko-Emosyonel Şok & Panik Giderici Çiçek Suyu",
      subId: "sub-bot-neroli-pure-water",
      safety: "🟢 Bebekler ve Hamileler İçin En Güvenli Çiçek Sularından Biri",
      everydayUsage: "Ani korku ve panik anında yüze ve ağza fısfıs sprey, bebekleri sakinleştirici banyo suyu, lüks yüz toniği.",
      alchemicalName: "Aqua Florum Aurantii Verum",
      note: "Acı portakal çiçeklerinin damıtılmasıyla toplanan saf hidrosoldür; koku siniri üzerinden amigdala aktivitesini saniyeler içinde yatıştırır."
    },
    {
      colloquial: "Itır Çiçeği Suyu / Geranyum Hidrosolü",
      scientific: "Pelargonium graveolens Yaprak ve Çiçek Buhar Distilasyon Suyu (Sitronellol, Geraniyol & Linalool İzleri)",
      formula: "C10H20O_geranium_water",
      category: "Hormonal Cilt Dengeleyici & Kılcal Damar Kalkanı",
      subId: "sub-bot-geranium-flower-water",
      safety: "🟢 Güvenli Doğal Çiçek Suyu",
      everydayUsage: "T-bölgesi yağlı, yanakları kuru karma cilt toniği, menopoz dönemi kuruluk spreyi, doğal parfüm tabanı.",
      alchemicalName: "Aqua Pelargonii Graveolentis",
      note: "Deri pH'ını fizyolojik 5.5 dengesine oturtur; yağ bezlerine sebum üretimini dengeleme sinyali verir."
    },
    {
      colloquial: "Ylang Ylang Hidrosolü / Cananga Çiçek Suyu",
      scientific: "Cananga odorata Çiçek Fraksiyonel Buhar Distilatı (Linalool & Benzil Benzoat Mikro-Çözeltisi)",
      formula: "C14H12O2_ylang_water",
      category: "Hipotansif Cilt Toniği & Egzotik Saç Parlatıcı",
      subId: "sub-bot-ylang-hydrosol",
      safety: "🟢 Güvenli Doğal Tropikal Hidrosol",
      everydayUsage: "Mat ve cansız saçlara ışıltı veren durulanmayan saç spreyi, yüksek tansiyonda göğüs ferahlatıcı sprey.",
      alchemicalName: "Aqua Canangae Odoratae",
      note: "Tropik Madagaskar adasının eşsiz çiçeklerinin damıtılmasıdır; saç tellerindeki kütikül pullarını pürüzsüzleştirerek ayna gibi parlatır."
    },
    {
      colloquial: "Yasemin Çiçeği Konkreti / Jasminum Özütü",
      scientific: "Jasminum grandiflorum Çiçek Heksan/Etanol Galenik Ekstresi (Benzil Asetat, Linalool & Cis-Jasmon)",
      formula: "C11H16O_cis_jasmone",
      category: "Afrodizyak & Duygusal Güven Verici Lüks Çiçek Konkreti",
      subId: "sub-bot-jasmine-concrete",
      safety: "🟢 Güvenli Parfümeri ve Masaj Yağı Aktifi",
      everydayUsage: "Lüks katı parfüm bazı, doğum sonrası duygusal tükenmişlik masaj yağı, derin kırışıklık bakım merhemi.",
      alchemicalName: "Concretum Jasmini",
      note: "Gece ay ışığında açan yasemin çiçeklerinin soğuk çözücü ekstraksiyonu ile elde edilen koyu kırmızımsı balmumu kıvamında saf çiçek özüdür."
    },
    {
      colloquial: "Sümbülteber Özü / Tuberosa Ruhu",
      scientific: "Polianthes tuberosa Çiçek Enflöraj Ekstresi (Metil Benzoat, Benzil Salisilat & Öjenol)",
      formula: "C14H12O3_benzyl_salicylate",
      category: "Narkotik Çiçeksi & Kadim Fransız Enflöraj Esansı",
      subId: "sub-bot-tuberose-extract",
      safety: "🟢 Güvenli Lüks Parfümeri Özütü",
      everydayUsage: "Dünyanın en değerli niş parfümleri için dip nota fiksatif esansı, meditasyon tütsüsü yağı.",
      alchemicalName: "Oleum Polianthis Tuberosae",
      note: "Grasse'da tarihi yağ emdirilmiş cam çerçeveler (enflöraj) üzerine dizilen çiçeklerin kokusunu hayvansal/bitkisel yağa bırakmasıyla üretilir."
    },
    {
      colloquial: "Mür Reçinesi Külü / Spajirik Myrrha Tuzu",
      scientific: "Commiphora myrrha Sakız Reçinesi Kalsinasyon Külü (Kalsiyum Fosfat, Potasyum Karbonat & Demir Oksit)",
      formula: "Ca3(PO4)2+K2CO3_myrrh",
      category: "Kadim Mısır Mumyalama Tuzu & Spajirik Reçine Külü",
      subId: "sub-base-ash-myrrh-resin",
      safety: "🟢 Güvenli Doğal Mineral Kül",
      everydayUsage: "Spajirik mür tentürünün kristal tuzu, tarihi diş eti kuvvetlendirici kül tozu, arındırıcı tapınak külleri.",
      alchemicalName: "Sal Resinae Myrrhae",
      note: "Kadim Mısır'da firavunların ebedi korunması için kullanılan mür reçinesinin kalsinasyonuyla elde edilen çürüme önleyici mineral tuza dönüşümüdür."
    }
  ];

  // =========================================================================
  // 10. MULTI-STEP CASCADE REACTION & SYNTHESIS CYCLE ENGINE
  // =========================================================================
  const CASCADE_PATHWAYS = {
    "bordeaux_mixture_cycle": {
      name: "Kireç Döngüsü & Tarımsal Bordo Bulamacı Kademeli Sentezi",
      description: "Doğal kireçtaşından (CaCO3) başlayarak yüksek sıcaklıkta kalsinasyon, suyla söndürme ve bakır sülfatla tarımsal mantar ilacı (Bordo bulamacı) sentezi.",
      steps: [
        {
          stepNumber: 1,
          title: "Kireçtaşı Kalsinasyonu (Fırında Pişirme)",
          equation: "CaCO3(k) ➔ CaO(k) + CO2(g) ↑",
          inputMaterial: "Kalsiyum Karbonat (Kireçtaşı / Mermer Tozu)",
          outputMaterial: "Kalsiyum Oksit (Sönmemiş Kireç)",
          tempC: 900,
          reactionType: "Yüksek Endotermik Termal Ayrışma",
          deltaH_kJ_mol: 178.3,
          stoichiometricRatio: 0.560,
          nominalYieldPct: 95.0,
          lossMechanism: "Fırın tozutması ve eksik termal dönüşüm"
        },
        {
          stepNumber: 2,
          title: "Kireç Söndürme (Ekzotermik Hidratasyon)",
          equation: "CaO(k) + H2O(s) ➔ Ca(OH)2(k)",
          inputMaterial: "Kalsiyum Oksit (Sönmemiş Kireç)",
          outputMaterial: "Kalsiyum Hidroksit (Sönmüş Kireç)",
          tempC: 25,
          reactionType: "Şiddetli Ekzotermik Hidratasyon",
          deltaH_kJ_mol: -65.2,
          stoichiometricRatio: 1.321,
          nominalYieldPct: 98.0,
          lossMechanism: "Kap cidarlarında yapışma ve buharlaşma kaybı"
        },
        {
          stepNumber: 3,
          title: "Bordo Bulamacı Çökelmesi (Bakır Sülfat Kompleksi)",
          equation: "Ca(OH)2(aq) + CuSO4(aq) ➔ Cu(OH)2·CaSO4(k) ↓",
          inputMaterial: "Kalsiyum Hidroksit (Sönmüş Kireç)",
          outputMaterial: "Bordo Bulamacı Çökeltisi [Cu(OH)2 + CaSO4]",
          tempC: 25,
          reactionType: "Nötralizasyon & Eşzamanlı Çift Çökelme",
          deltaH_kJ_mol: -78.4,
          stoichiometricRatio: 3.149,
          nominalYieldPct: 96.0,
          lossMechanism: "Filtre kağıdı gözenek tutulması ve yıkama kaybı"
        }
      ]
    },
    "wood_ash_soap_cycle": {
      name: "Geleneksel Kül Suyu Potasından Doğal Arap Sabunu Döngüsü",
      description: "Odun külünden alkali potasyum karbonat liçingi, sönmüş kireçle kostifikasyon (KOH üretimi) ve zeytinyağı ile yumuşak potasyum sabunu sentezi.",
      steps: [
        {
          stepNumber: 1,
          title: "Odun Külü Liçingi & Süzme",
          equation: "K2CO3(kül) + H2O ➔ K2CO3(aq)",
          inputMaterial: "Kuru Odun Külü (Meşe/Kayın)",
          outputMaterial: "Konsantre Potas Çözeltisi (K2CO3)",
          tempC: 80,
          reactionType: "Katı-Sıvı Çözücü Liçingi",
          deltaH_kJ_mol: -28.0,
          stoichiometricRatio: 0.100,
          nominalYieldPct: 90.0,
          lossMechanism: "Kül gözeneklerinde hapsolan sıvı tutulması"
        },
        {
          stepNumber: 2,
          title: "Kireçle Kostifikasyon (KOH Üretimi)",
          equation: "K2CO3(aq) + Ca(OH)2(aq) ➔ 2 KOH(aq) + CaCO3(k) ↓",
          inputMaterial: "Potasyum Karbonat (K2CO3)",
          outputMaterial: "Potasyum Hidroksit (Kostik Potas, KOH)",
          tempC: 80,
          reactionType: "Metatez & Çökelme Ayrıştırması",
          deltaH_kJ_mol: -8.2,
          stoichiometricRatio: 0.812,
          nominalYieldPct: 94.0,
          lossMechanism: "Kalsiyum karbonat çökeltisiyle birlikte taşınma"
        },
        {
          stepNumber: 3,
          title: "Zeytinyağı Sabunlaşması (Arap Sabunu)",
          equation: "Trigliserit + 3 KOH ➔ Gliserin + 3 Potasyum Sabunu",
          inputMaterial: "Potasyum Hidroksit (KOH)",
          outputMaterial: "Doğal Potasyum Arap Sabunu",
          tempC: 75,
          reactionType: "Ester Hidrolizi & Sabunlaşma",
          deltaH_kJ_mol: -105.0,
          stoichiometricRatio: 5.670,
          nominalYieldPct: 98.0,
          lossMechanism: "Karıştırma teknesi cidarlarında kalan viskoz sabun"
        }
      ]
    },
    "solvay_soda_cycle": {
      name: "Solvay Prosesi & Çamaşır Sodası Kademeli Sentezi",
      description: "Tuzlu su, amonyak ve kireçtaşı kalsinasyonundan açığa çıkan CO2 ile saf sodyum bikarbonat ve çamaşır sodası (Na2CO3) üretim döngüsü.",
      steps: [
        {
          stepNumber: 1,
          title: "Kireç Fırını & CO2 Üretimi",
          equation: "CaCO3(k) ➔ CaO(k) + CO2(g) ↑",
          inputMaterial: "Kalsiyum Karbonat",
          outputMaterial: "Karbondioksit Gazı (CO2)",
          tempC: 900,
          reactionType: "Yüksek Sıcaklık Kalsinasyonu",
          deltaH_kJ_mol: 178.3,
          stoichiometricRatio: 0.440,
          nominalYieldPct: 95.0,
          lossMechanism: "Baca gazı kaçakları"
        },
        {
          stepNumber: 2,
          title: "Amonyaklı Salamurada Karbonatlaşma",
          equation: "NaCl + NH3 + CO2 + H2O ➔ NaHCO3(k) ↓ + NH4Cl(aq)",
          inputMaterial: "Karbondioksit Gazı (CO2)",
          outputMaterial: "Ham Sodyum Bikarbonat Çökeltisi",
          tempC: 35,
          reactionType: "Ekzotermik Gaz Absorpsiyonu & Çökelme",
          deltaH_kJ_mol: -135.0,
          stoichiometricRatio: 1.909,
          nominalYieldPct: 92.0,
          lossMechanism: "Ana çözeltide çözünmüş kalan bikarbonat iyonları"
        },
        {
          stepNumber: 3,
          title: "Bikarbonat Kalsinasyonu (Çamaşır Sodası)",
          equation: "2 NaHCO3(k) ➔ Na2CO3(k) + H2O(g) + CO2(g) ↑",
          inputMaterial: "Sodyum Bikarbonat",
          outputMaterial: "Saf Çamaşır Sodası (Na2CO3)",
          tempC: 200,
          reactionType: "Termal Ayrışma & Gaz Salımı",
          deltaH_kJ_mol: 129.0,
          stoichiometricRatio: 0.631,
          nominalYieldPct: 97.0,
          lossMechanism: "Kuru toz uçuntuları"
        }
      ]
    }
  };

  function calculateReactionCascade(pathwayKey, initialMassG, efficiencyFactor) {
    const pathway = CASCADE_PATHWAYS[pathwayKey] || CASCADE_PATHWAYS["bordeaux_mixture_cycle"];
    const m0 = parseFloat(initialMassG) > 0 ? parseFloat(initialMassG) : 1000.0;
    const eff = parseFloat(efficiencyFactor) > 0 && parseFloat(efficiencyFactor) <= 1.5 ? parseFloat(efficiencyFactor) : 1.0;

    let currentMass = m0;
    let cumulativeYieldPct = 100.0;
    let totalEnthalpySumKJ = 0;
    const executedSteps = [];

    pathway.steps.forEach(step => {
      const stepYield = Math.min(99.9, step.nominalYieldPct * eff);
      const yieldFrac = stepYield / 100.0;
      const theoreticalMass = currentMass * step.stoichiometricRatio;
      const actualMass = Math.round(theoreticalMass * yieldFrac * 10) / 10;
      const massLossG = Math.round((theoreticalMass - actualMass) * 10) / 10;

      cumulativeYieldPct = (cumulativeYieldPct * yieldFrac);
      totalEnthalpySumKJ += step.deltaH_kJ_mol;

      executedSteps.push({
        stepNumber: step.stepNumber,
        title: step.title,
        equation: step.equation,
        inputMaterial: step.inputMaterial,
        inputMassG: Math.round(currentMass * 10) / 10,
        outputMaterial: step.outputMaterial,
        theoreticalMassG: Math.round(theoreticalMass * 10) / 10,
        actualMassG: actualMass,
        lossMassG: massLossG,
        stepYieldPct: Math.round(stepYield * 10) / 10,
        deltaH_kJ_mol: step.deltaH_kJ_mol,
        tempC: step.tempC,
        reactionType: step.reactionType,
        lossMechanism: step.lossMechanism
      });

      currentMass = actualMass;
    });

    cumulativeYieldPct = Math.round(cumulativeYieldPct * 10) / 10;
    const totalMassOutput = Math.round(currentMass * 10) / 10;
    const netThermalProfile = totalEnthalpySumKJ < 0
      ? `Net Ekzotermik (Toplam Isı Salımı: ${Math.round(Math.abs(totalEnthalpySumKJ) * 10) / 10} kJ/mol)`
      : `Net Endotermik (Gereken Dış Enerji: ${Math.round(totalEnthalpySumKJ * 10) / 10} kJ/mol)`;

    return {
      pathwayKey: pathwayKey,
      pathwayName: pathway.name,
      description: pathway.description,
      initialInputMassG: m0,
      finalOutputMassG: totalMassOutput,
      cumulativeYieldPct: cumulativeYieldPct,
      totalEnthalpySumKJ: Math.round(totalEnthalpySumKJ * 10) / 10,
      netThermalProfile: netThermalProfile,
      totalStepsCount: pathway.steps.length,
      steps: executedSteps
    };
  }

  // =========================================================================
  // 11. SOLVENT RECOVERY & CONDENSER DUTY BALANCER (Rotavap & Distillation)
  // =========================================================================
  const CONDENSER_SOLVENTS = {
    "ethanol": {
      name: "Etanol (%96 Tarımsal / Biyolojik Alkol)",
      formula: "C2H5OH",
      mw: 46.07,
      density_g_ml: 0.789,
      bp_1atm_c: 78.3,
      deltaH_vap_kj_kg: 846.0,
      antoine: { A: 8.20417, B: 1642.89, C: 230.300 },
      recommendedCoolantTempC: 10.0,
      description: "Bitkisel ekstraksiyon ve tentür geri kazanımında en yaygın solvent."
    },
    "isopropanol": {
      name: "İzopropil Alkol (IPA / 2-Propanol)",
      formula: "C3H8O",
      mw: 60.10,
      density_g_ml: 0.786,
      bp_1atm_c: 82.6,
      deltaH_vap_kj_kg: 665.0,
      antoine: { A: 8.11778, B: 1580.92, C: 219.610 },
      recommendedCoolantTempC: 12.0,
      description: "Reçine çözme ve yüzey temizleme solventi."
    },
    "acetone": {
      name: "Aseton (Dimetil Keton)",
      formula: "C3H6O",
      mw: 58.08,
      density_g_ml: 0.784,
      bp_1atm_c: 56.1,
      deltaH_vap_kj_kg: 518.0,
      antoine: { A: 7.02447, B: 1161.0, C: 224.0 },
      recommendedCoolantTempC: 5.0,
      description: "Çok uçucu polar solvent; kondenserde düşük sıcaklık gerektirir."
    },
    "ethyl_acetate": {
      name: "Etil Asetat (Asetik Eter)",
      formula: "C4H8O2",
      mw: 88.11,
      density_g_ml: 0.902,
      bp_1atm_c: 77.1,
      deltaH_vap_kj_kg: 366.0,
      antoine: { A: 7.0443, B: 1211.0, C: 216.0 },
      recommendedCoolantTempC: 10.0,
      description: "Kafein, fenolikler ve ester ekstraksiyonunda mükemmel organik çözücü."
    },
    "methanol": {
      name: "Metanol (Odun Ruhu / Metil Alkol)",
      formula: "CH3OH",
      mw: 32.04,
      density_g_ml: 0.792,
      bp_1atm_c: 64.7,
      deltaH_vap_kj_kg: 1100.0,
      antoine: { A: 7.87863, B: 1473.11, C: 230.0 },
      recommendedCoolantTempC: 8.0,
      description: "Polar fitokimyasal ekstraksiyon çözücüsü."
    },
    "water": {
      name: "Saf Distile Su (H2O)",
      formula: "H2O",
      mw: 18.015,
      density_g_ml: 1.000,
      bp_1atm_c: 100.0,
      deltaH_vap_kj_kg: 2260.0,
      antoine: { A: 8.07131, B: 1730.63, C: 233.426 },
      recommendedCoolantTempC: 20.0,
      description: "Hidrosol ve sulu ekstrakt konsantrasyonu."
    }
  };

  function calculateSolventRecovery(solventKey, distillationRateMlH, coolantTempC, systemPressureMbar, condenserAreaM2) {
    const solv = CONDENSER_SOLVENTS[solventKey] || CONDENSER_SOLVENTS["ethanol"];
    const rateMlH = parseFloat(distillationRateMlH) > 0 ? parseFloat(distillationRateMlH) : 500.0;
    const T_cool = parseFloat(coolantTempC) !== undefined && !isNaN(parseFloat(coolantTempC)) ? parseFloat(coolantTempC) : 15.0;
    const P_mbar = parseFloat(systemPressureMbar) > 0 ? parseFloat(systemPressureMbar) : 1013.25;
    const P_mmHg = P_mbar * 0.750062;
    const areaM2 = parseFloat(condenserAreaM2) > 0 ? parseFloat(condenserAreaM2) : 0.15;

    // Mass evaporation rate
    const massRateG_h = rateMlH * solv.density_g_ml;
    const massRateKg_s = (massRateG_h / 1000.0) / 3600.0;

    // Condensation Thermal Duty Q (Watts) = m_dot * deltaH_vap
    const dutyWatts = massRateKg_s * (solv.deltaH_vap_kj_kg * 1000.0);
    const dutyKW = Math.round((dutyWatts / 1000.0) * 100) / 100;

    // Operating Boiling Point at P_mbar via Antoine
    const A = solv.antoine.A;
    const B = solv.antoine.B;
    const C = solv.antoine.C;
    const logP = Math.log10(P_mmHg);
    let T_boil = solv.bp_1atm_c;
    if (A > logP) {
      T_boil = (B / (A - logP)) - C;
    }
    T_boil = Math.round(T_boil * 10) / 10;

    // Temperature differences for counter-current condenser
    const coolantRiseC = 2.5;
    const deltaT1 = Math.max(1.0, T_boil - T_cool);
    const deltaT2 = Math.max(0.5, T_boil - (T_cool + coolantRiseC));
    let LMTD = (deltaT1 - deltaT2) / Math.log(deltaT1 / deltaT2);
    if (isNaN(LMTD) || LMTD <= 0) LMTD = deltaT1;
    LMTD = Math.round(LMTD * 10) / 10;

    // Vapor pressure at condenser exit temperature (T_exit = T_cool + 2)
    const T_exit = T_cool + 2.0;
    const P_vap_exit_mmHg = Math.pow(10, A - (B / (T_exit + C)));
    const P_vap_exit_mbar = P_vap_exit_mmHg / 0.750062;

    // Vent Loss Fraction = P_vap_exit / P_system
    let lossFraction = P_vap_exit_mbar / P_mbar;
    lossFraction = Math.max(0.005, Math.min(0.40, lossFraction));

    // Overall Recovery Efficiency %
    let recoveryPct = (1.0 - lossFraction) * 100.0;
    recoveryPct = Math.round(Math.max(50.0, Math.min(99.5, recoveryPct)) * 10) / 10;
    const lossPct = Math.round((100.0 - recoveryPct) * 10) / 10;

    const recoveredRateMlH = Math.round(rateMlH * (recoveryPct / 100.0) * 10) / 10;
    const ventLossMlH = Math.round((rateMlH - recoveredRateMlH) * 10) / 10;

    // Required cooling water flow (L/h) to absorb Q with 3°C rise
    const cpWater = 4.184;
    const deltaTCoolantTarget = 3.0;
    const coolingWaterL_h = Math.round(((dutyWatts * 3600.0) / (cpWater * 1000.0 * deltaTCoolantTarget)) * 10) / 10;

    let efficiencyRating = "⭐⭐⭐⭐⭐ Mükemmel Geri Kazanım (>%95)";
    let recommendation = "Soğutma suyu sıcaklığı ve kondenser kapasitesi solventi neredeyse tamamen sıvılaştırmak için fazlasıyla yeterli.";
    if (recoveryPct < 85.0) {
      efficiencyRating = "⚠️ Düşük Yoğuşma Verimi (Buhar Kaçağı Riski)";
      recommendation = `Soğutma suyunuz (${T_cool}°C) solvent buhar basıncına göre ılık kalıyor. Kondenser çıkışından vakum pompasına veya atmosfere saatte ${ventLossMlH} mL solvent kaçabilir! Soğutma suyu sıcaklığını <${solv.recommendedCoolantTempC}°C seviyesine düşürün veya sirkülatör soğutucu (chiller) kullanın.`;
    } else if (recoveryPct < 93.0) {
      efficiencyRating = "🟡 Orta Düzey Yoğuşma (%85 - %93)";
      recommendation = `Kondenser çalışır durumda ancak hafif buhar kaçışı mevcut (${ventLossMlH} mL/h). Soğutma debisini artırmak verimi %95 üzerine çıkaracaktır.`;
    }

    return {
      solventKey: solventKey,
      solventName: solv.name,
      chemicalFormula: solv.formula,
      molecularWeight: solv.mw,
      density: solv.density_g_ml,
      latentHeatVap_kJ_kg: solv.deltaH_vap_kj_kg,
      distillationRateMlH: rateMlH,
      massRateG_h: Math.round(massRateG_h * 10) / 10,
      systemPressureMbar: P_mbar,
      operatingBoilingPointC: T_boil,
      coolantTempC: T_cool,
      condenserAreaM2: areaM2,
      coolingDutyWatts: Math.round(dutyWatts),
      coolingDutyKW: dutyKW,
      lmtdC: LMTD,
      exitVaporPressureMbar: Math.round(P_vap_exit_mbar * 10) / 10,
      recoveryYieldPct: recoveryPct,
      ventLossPct: lossPct,
      recoveredRateMlH: recoveredRateMlH,
      ventLossMlH: ventLossMlH,
      requiredCoolingWaterFlowL_h: coolingWaterL_h,
      efficiencyRating: efficiencyRating,
      engineeringAdvice: recommendation
    };
  }

  // =========================================================================
  // 12. DYNAMIC SOLID-LIQUID EXTRACTION & LEACHING KINETICS ENGINE
  // =========================================================================
  const EXTRACTION_BOTANICAL_PROFILES = {
    "polyphenols_tea": {
      name: "Yeşil Çay / Zeytin Yaprağı Polifenolleri (Kateşinler & EGCG)",
      category: "Antioksidan Flavonoid / Polifenol",
      Deff_25: 2.5e-11, // m^2/s at 25°C
      Ea: 22000,        // J/mol activation energy
      C_inf: 180.0,      // mg/g dry biomass (18% active yield)
      recommendedSolvent: "Etanol/Su (%50-%70 v/v)",
      ballastRisk: "Aşırı sürede acı kateşin polimerleri ve sindirimi zor tanenler çözünür."
    },
    "curcumin_turmeric": {
      name: "Zerdeçal Rizomu Kurkuminoidleri (Kurkumin & BDMC)",
      category: "Lipofilik Polifenolik Pigment",
      Deff_25: 1.2e-11,
      Ea: 28000,
      C_inf: 50.0,       // mg/g biomass (5% curcuminoid)
      recommendedSolvent: "Yüksek Dereceli Etanol (%80-%96 v/v) veya Aseton",
      ballastRisk: "Aşırı maserasyonda kök nişastaları ve reçineler jelleşip süzmeyi bloke eder."
    },
    "caffeine_coffee": {
      name: "Kahve / Çay / Mate Kafein Ekstraksiyonu",
      category: "Purin Alkaloidi",
      Deff_25: 4.0e-11,
      Ea: 18000,
      C_inf: 35.0,       // mg/g biomass (3.5% caffeine)
      recommendedSolvent: "Sıcak Su veya Sulu Etanol (%40-%60)",
      ballastRisk: "Uzun sürede klorojenik asit bozunma ürünleri ve acı melanoidinler geçer."
    },
    "hypericin_stjohn": {
      name: "Sarı Kantaron Çiçeği Hiperisin & Flavonoidleri",
      category: "Naftodiantron & Flavonoid Kompleksi",
      Deff_25: 1.8e-11,
      Ea: 25000,
      C_inf: 15.0,       // mg/g biomass (1.5% active)
      recommendedSolvent: "Etanol (%60-%80 v/v) veya Zeytinyağı (Maserasyon)",
      ballastRisk: "Işık altında hiperisin fotooksidasyona uğrar; maserasyon karanlık kapta tutulmalıdır."
    },
    "tannins_oak": {
      name: "Meşe Mazısı / Kestane Kabuğu Tanenleri",
      category: "Hidrolize Olabilir Polifenolik Tanenler",
      Deff_25: 0.8e-11,
      Ea: 32000,
      C_inf: 120.0,      // mg/g biomass (12% tannin)
      recommendedSolvent: "Su veya Düşük Dereceli Sulu Etanol (%30)",
      ballastRisk: "Düşük difüzyon hızı nedeniyle uzun süre gerektirir; aşırı ısınmada pirogallol bozunması oluşur."
    },
    "custom_botanical": {
      name: "Genel Tıbbi & Aromatik Bitki Özütü",
      category: "Genel Fitokimyasal Özüt",
      Deff_25: 2.0e-11,
      Ea: 24000,
      C_inf: 40.0,       // mg/g biomass
      recommendedSolvent: "Etanol/Su karışımı (%60-%70)",
      ballastRisk: "Aşırı maserasyonda selüloz döküntüleri ve balast klorofil çözeltiyi bulandırır."
    }
  };

  const EXTRACTION_PARTICLE_SIZES = {
    "fine_powder": {
      name: "Çok İnce Pudra / Toz (0.1 mm)",
      radius_mm: 0.1,
      radius_m: 0.0001,
      description: "Hızlı difüzyon, çok kısa ekstraksiyon süresi. Süzme filtrasyonu zordur."
    },
    "medium_cut": {
      name: "İnce Kıyım / Granül (0.5 mm)",
      radius_mm: 0.5,
      radius_m: 0.0005,
      description: "Dengeli farmasötik partikül boyutu; hem hızlı çözünür hem kolay süzülür."
    },
    "chopped_leaves": {
      name: "Kıyılmış Yaprak / Çiçek (1.0 mm)",
      radius_mm: 1.0,
      radius_m: 0.001,
      description: "Geleneksel drog kesimi. Orta düzey maserasyon süresi gerektirir."
    },
    "coarse_seeds": {
      name: "Kaba Kırılmış Tohum / Tane (2.0 mm)",
      radius_mm: 2.0,
      radius_m: 0.002,
      description: "Kabuk direnci yüksektir; çözücünün çekirdeğe difüzyonu saatler alır."
    },
    "whole_root": {
      name: "Bütün Kök / Kalın Ağaç Kabuğu (4.0 mm)",
      radius_mm: 4.0,
      radius_m: 0.004,
      description: "Büyük difüzyon mesafesi. Düşük hız, günlerce maserasyon gerektirebilir."
    }
  };

  function calculateExtractionKinetics(activeKey, particleKey, biomassG, solventVolMl, tempC, durationHours) {
    const profile = EXTRACTION_BOTANICAL_PROFILES[activeKey] || EXTRACTION_BOTANICAL_PROFILES["polyphenols_tea"];
    const particle = EXTRACTION_PARTICLE_SIZES[particleKey] || EXTRACTION_PARTICLE_SIZES["medium_cut"];

    const m_bio = Math.max(1.0, parseFloat(biomassG) || 50.0);
    const V_solv = Math.max(10.0, parseFloat(solventVolMl) || 500.0);
    const T_C = parseFloat(tempC) !== undefined && !isNaN(parseFloat(tempC)) ? parseFloat(tempC) : 40.0;
    const t_hours = Math.max(0.01, parseFloat(durationHours) || 4.0);

    const T_K = T_C + 273.15;
    const R = 8.314462618;
    const r_m = particle.radius_m;

    // Arrhenius temperature correction on effective diffusivity:
    // D_eff(T) = D_eff,25 * exp(-Ea/R * (1/T - 1/298.15))
    const D_eff = profile.Deff_25 * Math.exp((-profile.Ea / R) * ((1.0 / T_K) - (1.0 / 298.15)));

    // Crank's spherical unsteady-state diffusion fractional yield Y(t)
    // Y(Fo) = 1 - (6/pi^2) * sum_{n=1}^5 (1/n^2) * exp(-n^2 * pi^2 * Fo)
    const calcYieldAtTimeSec = (tSec) => {
      if (tSec <= 0) return 0;
      const Fo = (D_eff * tSec) / (r_m * r_m);
      let sum = 0.0;
      const piSq = Math.PI * Math.PI;
      for (let n = 1; n <= 5; n++) {
        sum += (1.0 / (n * n)) * Math.exp(-n * n * piSq * Fo);
      }
      const Y = 1.0 - (6.0 / piSq) * sum;
      return Math.min(0.999, Math.max(0.0, Y));
    };

    // Actual user time
    const t_sec = t_hours * 3600.0;
    const fractionalYield = calcYieldAtTimeSec(t_sec);
    const yieldPct = Math.round(fractionalYield * 1000) / 10; // e.g. 88.5%

    // Time to 95% yield (Fo ~ 0.285)
    // t_95 = 0.285 * r^2 / D_eff
    const t_95_sec = (0.285 * r_m * r_m) / D_eff;
    const t_95_hours = Math.round((t_95_sec / 3600.0) * 100) / 100;
    const t_95_mins = Math.round(t_95_sec / 60.0);

    // Mass balances
    // Total potential active (mg) = biomassG * C_inf
    const totalPotentialActiveMg = Math.round(m_bio * profile.C_inf * 10) / 10;
    // Extracted active at current time (mg)
    const extractedActiveMg = Math.round(totalPotentialActiveMg * fractionalYield * 10) / 10;
    const extractedActiveG = Math.round((extractedActiveMg / 1000.0) * 1000) / 1000;
    // Concentration in extract (mg/mL)
    const solutionConcentrationMgMl = Math.round((extractedActiveMg / V_solv) * 100) / 100;

    // Solid to Liquid Ratio
    const solidLiquidRatio = `1 : ${(V_solv / m_bio).toFixed(1)}`;

    // Generate kinetic progression time-points (5 points)
    const sampleHours = [
      Math.round((t_hours * 0.25) * 10) / 10,
      Math.round((t_hours * 0.50) * 10) / 10,
      Math.round((t_hours * 0.75) * 10) / 10,
      t_hours,
      t_95_hours
    ];
    // Deduplicate and sort sample points
    const uniqueSortedHours = Array.from(new Set(sampleHours)).sort((a, b) => a - b);
    const progressionCurve = uniqueSortedHours.map(h => {
      const yFrac = calcYieldAtTimeSec(h * 3600.0);
      return {
        hours: h,
        yieldPct: Math.round(yFrac * 1000) / 10,
        extractedMg: Math.round(totalPotentialActiveMg * yFrac * 10) / 10
      };
    });

    // Rating and Engineering Recommendation
    let rating = "";
    let advice = "";
    if (yieldPct < 70.0) {
      rating = "Eksik Ekstraksiyon (%Y < 70) ⚠️";
      advice = `Mevcut ${t_hours} saatlik süre difüzyon için yetersizdir; bitki hücrelerinde potansiyel aktif maddenin %${(100 - yieldPct).toFixed(1)} kadarı hapsolmuştur. Verimi %95'e çıkarmak için süreyi ${t_95_hours} saate (veya partikül boyutunu küçülterek) artırınız.`;
    } else if (yieldPct >= 70.0 && yieldPct < 96.0) {
      rating = "Optimal Fitofarmasötik Denge (%Y ~ 70-95) ✅";
      advice = `Kinetik eğri ideal ekstraksiyon bölgesindedir (%${yieldPct}). Yüksek aktif madde verimi elde edilirken balast maddelerin (acı tanenler, mumlar) çözeltiye sızması asgari düzeyde tutulmuştur. ${profile.recommendedSolvent} ile maserasyon önerilir.`;
    } else {
      rating = "Aşırı Maserasyon / Balast Riski (%Y > 96) ⚠️";
      advice = `Aktif madde ekstraksiyonu neredeyse tamamlanmıştır (%${yieldPct}), ancak sürenin daha fazla uzatılması hücre çeperlerinin parçalanmasına neden olur. ${profile.ballastRisk} Masereyi derhal süzünüz.`;
    }

    return {
      activeKey: activeKey,
      activeName: profile.name,
      category: profile.category,
      particleKey: particleKey,
      particleName: particle.name,
      particleRadiusMm: particle.radius_mm,
      biomassG: m_bio,
      solventVolMl: V_solv,
      solidLiquidRatio: solidLiquidRatio,
      tempC: T_C,
      durationHours: t_hours,
      effectiveDiffusivityM2S: D_eff.toExponential(3),
      yieldPct: yieldPct,
      fractionalYield: Math.round(fractionalYield * 1000) / 1000,
      totalPotentialActiveMg: totalPotentialActiveMg,
      extractedActiveMg: extractedActiveMg,
      extractedActiveG: extractedActiveG,
      solutionConcentrationMgMl: solutionConcentrationMgMl,
      timeTo95PctHours: t_95_hours,
      timeTo95PctMins: t_95_mins,
      recommendedSolvent: profile.recommendedSolvent,
      ballastRiskNotice: profile.ballastRisk,
      efficiencyRating: rating,
      engineeringAdvice: advice,
      progressionCurve: progressionCurve
    };
  }

  // =========================================================================
  // 13. GAS ABSORPTION & HENRY'S LAW SOLUBILITY ENGINE
  // =========================================================================
  const GAS_ABSORPTION_SPECIES = {
    "co2_carbonation": {
      name: "Karbondioksit (CO2) - İçecek Gazlama & Karbonasyon",
      formula: "CO2",
      mw: 44.01,
      kH_298: 0.034, // mol/(L·bar) at 25°C
      C_T: 2400.0,   // -dln(kH)/d(1/T) in Kelvin
      defaultP_bar: 3.5,
      defaultT_C: 4.0,
      recommendedMaxP_bar: 5.0,
      vesselSafetyLimit_bar: 6.0,
      application: "Maden suyu, soda, tonik ve şampanya üretimi.",
      note: "Soğuk sıvı (4°C) oda sıcaklığına (25°C) göre yaklaşık 2 kat daha fazla CO2 tutar. Şişelemeden önce sıvıyı mutlaka soğutunuz."
    },
    "o2_aeration": {
      name: "Oksijen (O2) - Havalandırma & Biyoreaktör Fermantasyonu",
      formula: "O2",
      mw: 32.00,
      kH_298: 0.0013,
      C_T: 1500.0,
      defaultP_bar: 1.0,
      defaultT_C: 20.0,
      recommendedMaxP_bar: 2.0,
      vesselSafetyLimit_bar: 4.0,
      application: "Kültür fermantasyonu, aerobik biyoreaktörler ve su havalandırması.",
      note: "Suda çözünürlüğü düşüktür; 20°C'de 1 atm saf O2 altında ~44 mg/L, havada ise ~9 mg/L'dir."
    },
    "so2_preservation": {
      name: "Kükürt Dioksit (SO2) - Şarap & Gıda Antioksidan Koruma",
      formula: "SO2",
      mw: 64.066,
      kH_298: 1.25,
      C_T: 3100.0,
      defaultP_bar: 0.1,
      defaultT_C: 15.0,
      recommendedMaxP_bar: 1.0,
      vesselSafetyLimit_bar: 2.5,
      application: "Şarapçılıkta yabani maya inhibisyonu ve oksidasyon önleme.",
      note: "Suda hızla çözünerek kükürtlü aside (H2SO3) dönüşür; aşırı dozaj asiditeyi ve sertliği bozar."
    },
    "nh3_absorption": {
      name: "Amonyak (NH3) - Gaz Yıkama & Sulu Amonyak Sentezi",
      formula: "NH3",
      mw: 17.031,
      kH_298: 59.0,
      C_T: 4100.0,
      defaultP_bar: 1.0,
      defaultT_C: 15.0,
      recommendedMaxP_bar: 1.5,
      vesselSafetyLimit_bar: 3.0,
      application: "Kimyasal gaz yıkama (scrubber) ve derişik amonyak çözeltisi (%25 NH4OH).",
      note: "Suyla yüksek ekzotermik reaksiyon verir; gaz yıkama kulesinde etkili soğutma şarttır."
    },
    "n2_inerting": {
      name: "Azot (N2) - Oksijen Giderme & İlaç/Gıda Başlık Azotlama",
      formula: "N2",
      mw: 28.013,
      kH_298: 0.00065,
      C_T: 1300.0,
      defaultP_bar: 1.0,
      defaultT_C: 20.0,
      recommendedMaxP_bar: 3.0,
      vesselSafetyLimit_bar: 6.0,
      application: "İlaç ampulü tepe boşluğu azotlama ve yağ oksidasyonunu durdurma.",
      note: "Suda son derece az çözünür; ortamdaki çözünmüş oksijeni sparging ile süpürmek için kullanılır."
    }
  };

  function calculateGasAbsorption(speciesKey, liquidVolL, pressureBar, tempC, gasPurityPct) {
    const gas = GAS_ABSORPTION_SPECIES[speciesKey] || GAS_ABSORPTION_SPECIES["co2_carbonation"];

    const V_liq = Math.max(0.05, parseFloat(liquidVolL) || 1.0);
    const P_total = Math.max(0.01, parseFloat(pressureBar) || gas.defaultP_bar);
    const T_C = parseFloat(tempC) !== undefined && !isNaN(parseFloat(tempC)) ? parseFloat(tempC) : gas.defaultT_C;
    const purityPct = Math.min(100.0, Math.max(1.0, parseFloat(gasPurityPct) || 100.0));

    const T_K = T_C + 273.15;
    const P_gas = P_total * (purityPct / 100.0); // Partial pressure in bar

    // Temperature correction via Van 't Hoff:
    // kH(T) = kH_298 * exp(C_T * (1/T - 1/298.15))
    const kH = gas.kH_298 * Math.exp(gas.C_T * ((1.0 / T_K) - (1.0 / 298.15)));

    // Dissolved equilibrium concentration
    const molarity = kH * P_gas; // mol/L
    const conc_g_L = molarity * gas.mw;
    const conc_mg_L = conc_g_L * 1000.0; // ppm

    // Total mass in batch
    const totalMassG = conc_g_L * V_liq;
    const totalMassMg = conc_mg_L * V_liq;

    // STP gas volume equivalent (0°C, 1 atm, 22.414 L/mol)
    const moles = molarity * V_liq;
    const gasVolStpL = moles * 22.414;
    const gasVolumesRatio = Math.round((molarity * 22.414) * 100) / 100; // Gas Volumes (GV)

    // Solubility multiplier compared to 25°C
    const tempEffectMultiplier = Math.round((kH / gas.kH_298) * 100) / 100;

    // Safety and Vessel Rating
    let safetyRating = "";
    let pressureWarning = "";
    if (P_total <= 3.0) {
      safetyRating = "🟢 Güvenli Çalışma Basıncı (Standart Kap / Şişe)";
      pressureWarning = "Basınç seviyesi standart cam şişeler ve contalı kaplar için güvenli aralıktadır.";
    } else if (P_total > 3.0 && P_total <= 5.0) {
      safetyRating = "🟡 Yüksek Basınç (Takviyeli Kap / PET Gerekir)";
      pressureWarning = "Bu basınçta standart ince cam şişe KULLANMAYINIZ. Kalın tabanlı şampanya şişesi veya basınç dayanımlı PET şişe tercih ediniz.";
    } else {
      safetyRating = "🛑 KRİTİK AŞIRI BASINÇ! (Patlama Riski)";
      pressureWarning = `DİKKAT: ${P_total} bar aşırı yüksek basınçtır! Cam kaplar patlayabilir. Paslanmaz çelik otoklav reaktör ve sertifikalı emniyet ventili (safety valve) zorunludur.`;
    }

    // Engineering Advice
    let advice = "";
    if (speciesKey === "co2_carbonation") {
      if (gasVolumesRatio < 2.0) {
        advice = `Hafif Gazlama (${gasVolumesRatio} GV): Yumuşak meyveli gazoz veya az gazlı maden suyu kıvamı. Daha yoğun köpük için basıncı 3.5 bara çıkarınız veya sıcaklığı 4°C'ye düşürünüz.`;
      } else if (gasVolumesRatio >= 2.0 && gasVolumesRatio <= 4.2) {
        advice = `İdeal Ticari Karbonasyon (${gasVolumesRatio} GV): Standart maden suyu, kola ve kaliteli gazoz seviyesi. Sıvı soğuk (${T_C}°C) tutulduğu sürece gaz sıvıda stabil kalır.`;
      } else {
        advice = `Yüksek Karbonasyon / Şampanya Seviyesi (${gasVolumesRatio} GV): Çok sert kabarcık yapısı. Şişe açılırken ani köpük patlaması (gushing) olmaması için servis öncesi 2°C'de 12 saat dinlendiriniz.`;
      }
    } else {
      advice = `${gas.application} ${gas.note} Çözeltideki doymuş konsantrasyon: ${Math.round(conc_mg_L * 10) / 10} mg/L (ppm).`;
    }

    return {
      speciesKey: speciesKey,
      speciesName: gas.name,
      chemicalFormula: gas.formula,
      molecularWeight: gas.mw,
      liquidVolumeL: V_liq,
      totalPressureBar: P_total,
      gasPurityPct: purityPct,
      partialPressureBar: Math.round(P_gas * 1000) / 1000,
      tempC: T_C,
      henryConstantMolLBar: kH.toExponential(3),
      molarityMolL: Math.round(molarity * 10000) / 10000,
      concentrationG_L: Math.round(conc_g_L * 100) / 100,
      concentrationMg_L: Math.round(conc_mg_L * 10) / 10,
      totalDissolvedMassG: Math.round(totalMassG * 100) / 100,
      totalDissolvedMassMg: Math.round(totalMassMg * 10) / 10,
      gasVolStpL: Math.round(gasVolStpL * 100) / 100,
      gasVolumesRatio: gasVolumesRatio,
      tempEffectMultiplier: tempEffectMultiplier,
      safetyRating: safetyRating,
      pressureWarning: pressureWarning,
      engineeringAdvice: advice,
      applicationNote: gas.note
    };
  }

  // =========================================================================
  // 14. HYDROGEL & GELLING AGENT RHEOLOGY ENGINE
  // =========================================================================
  const HYDROGEL_POLYMER_PROFILES = {
    "carbopol_940": {
      name: "Karbomer 940 (Karbopol / Çapraz Bağlı Poliakrilik Asit)",
      category: "Sentetik Anyonik Polimer",
      minConcentrationPct: 0.1,
      maxConcentrationPct: 1.5,
      defaultConcentrationPct: 0.5,
      neutralizationRequired: true,
      neutralizerType: "Trietanolamin (TEA) veya %10 NaOH",
      neutralizerRatioPerGramPolymer: 1.35, // g TEA per g carbomer for pH 6.8 - 7.2
      naohRatioPerGramPolymer: 0.40,       // g pure NaOH per g carbomer
      rheologyType: "Tiksotropik / Yüksek Verim Gerilimli Berrak Jel (Bingham Plastik)",
      typicalViscosityRangeCP: "30,000 - 60,000 cP",
      dispersionTechnique: "Topaklanmayı (lumping) önlemek için önce gliserin veya propilen glikol ile hamur (slurry) yapınız, ardından hızlı karıştırılan suya yavaşça serpiniz. Nötralizasyondan sonra hava kabarcığı oluşmaması için yavaş karıştırınız.",
      recommendedUse: "El dezenfektan jeli, ultrason jeli, şeffaf cilt bakım jelleri."
    },
    "xanthan_gum": {
      name: "Ksantan Sakızı (Xanthan Gum / Fermentasyon Polisakkariti)",
      category: "Doğal Biyopolimer",
      minConcentrationPct: 0.1,
      maxConcentrationPct: 2.0,
      defaultConcentrationPct: 0.8,
      neutralizationRequired: false,
      neutralizerType: "Gereksiz (Geniş pH Toleransı: 3.0 - 10.0)",
      neutralizerRatioPerGramPolymer: 0.0,
      naohRatioPerGramPolymer: 0.0,
      rheologyType: "Yalancı-Plastik (Pseudoplastic / Shear-Thinning: Çalkalandığında akıcı, durduğunda koyu)",
      typicalViscosityRangeCP: "1,500 - 15,000 cP",
      dispersionTechnique: "Topaklaşmayı engellemek için gliserin veya yağ fazında ıslatarak su fazına ekleyiniz. Elektrolitlere ve tuzlara karşı son derece dayanıklıdır.",
      recommendedUse: "Kozmetik serumlar, süspansiyon sabitleyici, sos ve gıda kıvamlaştırıcı."
    },
    "sodium_alginate": {
      name: "Sodyum Aljinat (Kahverengi Deniz Yosunu Polisakkariti)",
      category: "Doğal Anyonik Polimer",
      minConcentrationPct: 0.5,
      maxConcentrationPct: 4.0,
      defaultConcentrationPct: 1.5,
      neutralizationRequired: false,
      crosslinkerRequired: true,
      crosslinkerType: "Kalsiyum Klorür (CaCl2) veya Kalsiyum Laktat",
      crosslinkerRatioPerGramPolymer: 0.15, // g CaCl2 per g alginate for solid hydrogel
      rheologyType: "İyonik Çapraz Bağlı Hidrojel / Kalsiyum Aljinat Matrisi",
      typicalViscosityRangeCP: "500 - 8,000 cP (Çözelti) -> Katılaşan Jel",
      dispersionTechnique: "Aljinat çözeltisi hazırlandıktan sonra %1'lik CaCl2 banyosuna damlatıldığında ani kürecik veya film oluşturur (Moleküler gastronomi ve yara örtüsü).",
      recommendedUse: "Gelişmiş hidrojel yara örtüleri, kalsiyum aljinat kapsülleri, diş ölçü macunları."
    },
    "gelatin_bloom": {
      name: "Farmasötik Jelatin (Bloom 200 - Termo-Tersinir Kolajen)",
      category: "Doğal Protein Polimeri",
      minConcentrationPct: 1.0,
      maxConcentrationPct: 12.0,
      defaultConcentrationPct: 4.0,
      neutralizationRequired: false,
      crosslinkerRequired: false,
      rheologyType: "Termo-Tersinir Viskoelastik Jel (>35°C Sıvı, <30°C Katılaşır)",
      typicalViscosityRangeCP: "50 - 500 cP (Sıcak Sol) -> Katı Elastik Jel",
      dispersionTechnique: "Önce soğuk suda 10 dakika şişiriniz (bloom), ardından 55-60°C sıcak su banyosunda tamamen eritiniz. Kaynatmayınız.",
      recommendedUse: "Yumuşak/sert kapsül kabuğu, galenik merhem jelleri, hemostatik süngerler."
    },
    "hpmc_cellulose": {
      name: "Hidroksipropil Metilselüloz (HPMC / Hipromelloz)",
      category: "Yarı Sentetik Selüloz Eteri",
      minConcentrationPct: 0.2,
      maxConcentrationPct: 3.0,
      defaultConcentrationPct: 1.0,
      neutralizationRequired: false,
      crosslinkerRequired: false,
      rheologyType: "Newtonyen Olmayan Nötr Hidrojel (Şeffaf & Yağsız)",
      typicalViscosityRangeCP: "4,000 - 25,000 cP",
      dispersionTechnique: "Sıcak/Soğuk tekniği: Tozu suyun 1/3'ü kadar sıcak suya (80°C) serpip ıslatınız, ardından kalan soğuk/buzlu suyu ekleyip karıştırınız.",
      recommendedUse: "Suni gözyaşı damlaları, oftalmik jeller, yapışkan olmayan medikal jeller."
    }
  };

  function calculateHydrogelRheology(polymerKey, batchVolMl, concentrationPct, targetPH) {
    const profile = HYDROGEL_POLYMER_PROFILES[polymerKey] || HYDROGEL_POLYMER_PROFILES["carbopol_940"];

    const V_ml = Math.max(10.0, parseFloat(batchVolMl) || 250.0);
    const C_pct = Math.max(profile.minConcentrationPct, Math.min(profile.maxConcentrationPct * 1.5, parseFloat(concentrationPct) || profile.defaultConcentrationPct));
    const pH_target = parseFloat(targetPH) || 7.0;

    // Masses
    const m_polymer_g = Math.round((V_ml * (C_pct / 100.0)) * 100) / 100;
    const m_solvent_g = Math.round((V_ml - m_polymer_g) * 10) / 10;

    // Neutralization / Crosslinking math
    let neutralizerMassG = 0;
    let neutralizerDrops = 0;
    let naohSolution10PctMl = 0;
    let crosslinkerMassG = 0;
    let crosslinkerBathVolMl = 0;
    let neutralizationNotice = "";

    if (profile.neutralizationRequired) {
      neutralizerMassG = Math.round((m_polymer_g * profile.neutralizerRatioPerGramPolymer) * 100) / 100;
      neutralizerDrops = Math.round(neutralizerMassG * 30); // ~30 drops TEA per gram
      naohSolution10PctMl = Math.round((m_polymer_g * 4.0) * 10) / 10;
      neutralizationNotice = `Karbomer asidik dispersiyondur (pH ~3). Tam jelleşme ve berraklık için pH 6.5 - 7.5 aralığına nötralize edilmelidir. Bu parti için ${neutralizerMassG} g (~${neutralizerDrops} damla) saf Trietanolamin (TEA) veya ${naohSolution10PctMl} mL %10'luk NaOH çözeltisi gereklidir.`;
    } else if (profile.crosslinkerRequired) {
      crosslinkerMassG = Math.round((m_polymer_g * profile.crosslinkerRatioPerGramPolymer) * 100) / 100;
      crosslinkerBathVolMl = Math.round((crosslinkerMassG / 0.01) * 10) / 10;
      neutralizationNotice = `Aljinat çözeltisi kendiliğinden jelleşmez; iyonik çapraz bağlanma için kalsiyum iyonlarına ihtiyaç duyar. Matris sertleşmesi için ${crosslinkerMassG} g CaCl2 (yaklaşık ${crosslinkerBathVolMl} mL %1'lik kalsiyum banyosu) kullanınız.`;
    } else {
      neutralizationNotice = "Nötralizasyon veya çapraz bağlayıcı GEREKMEZ; polimer su ile temas edip hidratlandığında kendiliğinden viskozite kazanır.";
    }

    // Viscosity estimation
    let estViscosityCP = 1000;
    if (polymerKey === "carbopol_940") {
      estViscosityCP = Math.round(45000 * Math.pow(C_pct / 0.5, 2.2));
      estViscosityCP = Math.min(80000, Math.max(2000, estViscosityCP));
    } else if (polymerKey === "xanthan_gum") {
      estViscosityCP = Math.round(4500 * Math.pow(C_pct / 0.8, 1.8));
    } else if (polymerKey === "sodium_alginate") {
      estViscosityCP = Math.round(2000 * Math.pow(C_pct / 1.5, 2.0));
    } else if (polymerKey === "gelatin_bloom") {
      estViscosityCP = Math.round(100 * Math.pow(C_pct / 4.0, 2.5));
    } else if (polymerKey === "hpmc_cellulose") {
      estViscosityCP = Math.round(10000 * Math.pow(C_pct / 1.0, 2.0));
    }

    // Rheological texture rating
    let textureRating = "";
    if (estViscosityCP < 2000) {
      textureRating = "💧 Akıcı Serum / Hafif Losyon Kıvamı (<2,000 cP)";
    } else if (estViscosityCP >= 2000 && estViscosityCP < 15000) {
      textureRating = "🧴 Standart Kozmetik / Oftalmik Jel (2,000 - 15,000 cP)";
    } else if (estViscosityCP >= 15000 && estViscosityCP < 45000) {
      textureRating = "✨ Yoğun Tiksotropik Jel / El Dezenfektan Kıvamı (15,000 - 45,000 cP)";
    } else {
      textureRating = "💎 Çok Ağır / Kalıp Hidrojel & Merhem Bazı (>45,000 cP)";
    }

    return {
      polymerKey: polymerKey,
      polymerName: profile.name,
      category: profile.category,
      batchVolumeMl: V_ml,
      concentrationPct: C_pct,
      polymerMassG: m_polymer_g,
      solventMassG: m_solvent_g,
      estimatedViscosityCP: estViscosityCP,
      rheologyType: profile.rheologyType,
      textureRating: textureRating,
      neutralizationRequired: profile.neutralizationRequired,
      neutralizerMassG: neutralizerMassG,
      neutralizerDrops: neutralizerDrops,
      naohSolution10PctMl: naohSolution10PctMl,
      crosslinkerRequired: !!profile.crosslinkerRequired,
      crosslinkerMassG: crosslinkerMassG,
      dispersionTechnique: profile.dispersionTechnique,
      neutralizationNotice: neutralizationNotice,
      recommendedUse: profile.recommendedUse
    };
  }

  // =========================================================================
  // 15. SOLID-STATE ADSORPTION & DECOLORIZATION / DEODORIZATION BALANCER
  // Langmuir & Freundlich Isotherm Kinetics
  // =========================================================================
  const ADSORBENT_PROFILES = {
    "activated_carbon_powder": {
      name: "Toz Aktif Karbon (PAC / Powdered Activated Carbon)",
      category: "Mikro & Mezogözenekli Karbon",
      surfaceAreaM2_g: 1050,
      poreStructure: "Yüksek Yüzey Alanı Mikro/Mezogözenek",
      targetImpurities: "Bitkisel ekstrakt renk giderimi, polifenoller, koku molekülleri, organik toksinler",
      langmuir_qm_mg_g: 240.0,
      langmuir_KL_L_mg: 0.045,
      freundlich_KF: 42.0,
      freundlich_1_n: 0.36,
      recommendedTempC: 50.0,
      optimalContactTimeMin: 30,
      filterAidRequired: true,
      filterAidType: "Diatomit (Celite 545) Ön Tabaka",
      bulkDensity_g_ml: 0.45,
      description: "Buharla aktive edilmiş gözenekli karbon tozu. Çözeltideki koyu renk veren tanenleri, klorofili ve yanık kokularını anında yüzeyine çekerek hapseder."
    },
    "activated_carbon_granular": {
      name: "Granül Aktif Karbon (GAC / Granular Activated Carbon)",
      category: "Dolgulu Kolon / Kartuş Karbon",
      surfaceAreaM2_g: 950,
      poreStructure: "Makrogözenekli Serbest Akış Granülü",
      targetImpurities: "Damıtma distilatı cilalama, su arıtma, klor ve VOC tutma",
      langmuir_qm_mg_g: 175.0,
      langmuir_KL_L_mg: 0.028,
      freundlich_KF: 28.5,
      freundlich_1_n: 0.42,
      recommendedTempC: 25.0,
      optimalContactTimeMin: 45,
      filterAidRequired: false,
      filterAidType: "Kolon Kartuşu / Tülbent",
      bulkDensity_g_ml: 0.52,
      description: "Sıvı akışına direnç göstermeyen taneli karbon. Hidrozol ve distilasyon ürünlerindeki yabancı koku ve yüksek alkol kokularını temizlemek için idealdir."
    },
    "bentonite_bleaching_earth": {
      name: "Aktif Bentonit Kili (Ağartma Toprağı / Bleaching Earth)",
      category: "Tabakalı Montmorillonit Kili",
      surfaceAreaM2_g: 320,
      poreStructure: "Tabakalı Şişebilen Alüminosilikat",
      targetImpurities: "Bitkisel yağ ağartma (klorofil, karotenoidler), serbest yağ asitleri",
      langmuir_qm_mg_g: 110.0,
      langmuir_KL_L_mg: 0.018,
      freundlich_KF: 16.0,
      freundlich_1_n: 0.48,
      recommendedTempC: 85.0,
      optimalContactTimeMin: 25,
      filterAidRequired: true,
      filterAidType: "Perlit veya Diatomit Destek",
      bulkDensity_g_ml: 0.68,
      description: "Asitle aktive edilmiş doğal montmorillonit kili. Zeytinyağı, tohum yağları ve maserasyon yağlarındaki istenmeyen yeşil klorofil pigmentlerini bağlayarak altın sarısı berraklık kazandırır."
    },
    "diatomaceous_earth_celite": {
      name: "Diatomit / Süzme Toprağı (Kizelgur / Celite 545)",
      category: "Amorf Fosil Silika İskeleti",
      surfaceAreaM2_g: 45,
      poreStructure: "Geniş Geçirgenlikli Mikroskopik Kabuklar",
      targetImpurities: "Kolloidal tortu, bulanıklık, askıda katı maddeler, berraklaştırma",
      langmuir_qm_mg_g: 35.0,
      langmuir_KL_L_mg: 0.009,
      freundlich_KF: 5.2,
      freundlich_1_n: 0.62,
      recommendedTempC: 20.0,
      optimalContactTimeMin: 15,
      filterAidRequired: false,
      filterAidType: "Kendi Kendine Filtre Tabakası Oluşturur",
      bulkDensity_g_ml: 0.28,
      description: "Fosilleşmiş mikroskopik su yosunu kabukları. Filtre kağıdının tıkanmasını önler ve submikron bulanıklıkları tutarak kristal berraklığında süzüntü sağlar."
    },
    "zeolite_molecular_sieve": {
      name: "Doğal & Sentetik Zeolit (Klinoptilolit / 4A Moleküler Elek)",
      category: "Kafes Kristal Alüminosilikat",
      surfaceAreaM2_g: 650,
      poreStructure: "Düzenli 4 Ångström Kanalları",
      targetImpurities: "Su izleri kurutma (mutlak alkol), amonyum iyonları, uçucu organik gazlar",
      langmuir_qm_mg_g: 215.0,
      langmuir_KL_L_mg: 0.075,
      freundlich_KF: 52.0,
      freundlich_1_n: 0.26,
      recommendedTempC: 25.0,
      optimalContactTimeMin: 60,
      filterAidRequired: false,
      filterAidType: "Tülbent / Elek Ayrımı",
      bulkDensity_g_ml: 0.75,
      description: "Kusursuz 4 Ångström gözenek çapına sahip kafes kristal yapı. %96'lık etanolden suyu çekerek %99.5+ mutlak alkol elde etmede ve amonyak kokusunu emmede kullanılır."
    }
  };

  function calculateCarbonAdsorption(adsorbentKey, batchVolMl, initialConcPpm, targetRemovalPct, tempC) {
    const profile = ADSORBENT_PROFILES[adsorbentKey] || ADSORBENT_PROFILES["activated_carbon_powder"];

    const V_ml = Math.max(10.0, parseFloat(batchVolMl) || 1000.0);
    const V_L = V_ml / 1000.0;
    const C0 = Math.max(1.0, Math.min(10000.0, parseFloat(initialConcPpm) || 150.0));
    const eta = Math.max(10.0, Math.min(99.9, parseFloat(targetRemovalPct) || 90.0));
    const T_C = Math.max(10.0, Math.min(120.0, parseFloat(tempC) || profile.recommendedTempC));

    // Denge konsantrasyonu Ce (mg/L)
    const Ce = C0 * (1.0 - (eta / 100.0));
    const deltaM_mg = V_L * (C0 - Ce); // Çözeltiden çekilecek kirletici / pigment kütlesi (mg)

    // Sıcaklık düzeltme faktörü
    let tempFactor = 1.0;
    if (adsorbentKey === "bentonite_bleaching_earth") {
      tempFactor = 1.0 + (T_C - 25.0) * 0.005; // Yağ ağartmada yüksek sıcaklık kinetiği hızlandırır
    } else {
      tempFactor = Math.max(0.75, 1.0 - (T_C - 25.0) * 0.003); // Fiziksel adsorpsiyonda ılımlı sıcaklık idealdir
    }

    const qm = profile.langmuir_qm_mg_g * tempFactor;
    const KL = profile.langmuir_KL_L_mg;

    // 1. Langmuir denge kapasitesi qe (mg adsorbat / g adsorban)
    const qe_langmuir = (qm * KL * Ce) / (1.0 + (KL * Ce));

    // 2. Freundlich denge kapasitesi
    const KF = profile.freundlich_KF * tempFactor;
    const inv_n = profile.freundlich_1_n;
    const qe_freundlich = KF * Math.pow(Math.max(0.01, Ce), inv_n);

    // Ortalama mühendislik tasarım kapasitesi (mg/g)
    const qe_design = (qe_langmuir + qe_freundlich) / 2.0;

    // Teorik asgari adsorban kütlesi (g)
    const m_theoretical_g = deltaM_mg / Math.max(0.1, qe_design);

    // 1.25x Mühendislik güvenlik marjı (Hedef ağartmanın tam sağlanması için)
    const m_recommended_g = m_theoretical_g * 1.25;

    // Çözelti içindeki adsorban dozu (g/L ve % w/v)
    const dosage_g_L = m_recommended_g / V_L;
    const dosage_pct_wv = dosage_g_L / 10.0; // 1 g/L = %0.1 w/v

    // Hacimsel yatak hesabı (ml)
    const bedVolumeMl = m_recommended_g / profile.bulkDensity_g_ml;

    // Filtre yardımcısı ihtiyacı
    let filterAidG = 0;
    let filterAidNote = "Filtre yardımcısı gerektirmez.";
    if (profile.filterAidRequired) {
      filterAidG = Math.round(m_recommended_g * 0.75 * 10) / 10;
      filterAidNote = `Filtre kağıdının tıkanmasını önlemek için ${filterAidG} g Diatomit (Celite 545) ile ön tabaka veya harman önerilir.`;
    }

    return {
      adsorbentKey: adsorbentKey,
      adsorbentName: profile.name,
      category: profile.category,
      batchVolumeMl: V_ml,
      batchVolumeL: V_L,
      initialConcPpm: C0,
      targetRemovalPct: eta,
      equilibriumConcPpm: Math.round(Ce * 100) / 100,
      removedMassMg: Math.round(deltaM_mg * 10) / 10,
      operatingTempC: T_C,
      langmuirCapacityMg_g: Math.round(qe_langmuir * 10) / 10,
      freundlichCapacityMg_g: Math.round(qe_freundlich * 10) / 10,
      designCapacityMg_g: Math.round(qe_design * 10) / 10,
      theoreticalMassG: Math.round(m_theoretical_g * 100) / 100,
      recommendedMassG: Math.round(m_recommended_g * 100) / 100,
      dosageG_L: Math.round(dosage_g_L * 100) / 100,
      dosagePctWv: Math.round(dosage_pct_wv * 1000) / 1000,
      bedVolumeMl: Math.round(bedVolumeMl * 10) / 10,
      optimalContactTimeMin: profile.optimalContactTimeMin,
      filterAidRequired: profile.filterAidRequired,
      filterAidG: filterAidG,
      filterAidNote: filterAidNote,
      targetImpurities: profile.targetImpurities,
      description: profile.description
    };
  }

  // =========================================================================
  // 21. CONTINUOUS ROTARY VACUUM DRUM FILTRATION (RVDF) & CAKE DEWATERING BALANCER
  // =========================================================================
  const FILTRATION_SLURRY_PROFILES = {
    "caco3_precipitate": {
      name: "Kalsiyum Karbonat / Tebeşir Çökeltisi (Precipitated CaCO3)",
      specificCakeResistance_m_kg: 2.5e10, // α0 [m/kg]
      mediumResistance_m_inv: 1.0e10,      // Rm [1/m]
      cakePorosity: 0.42,                 // ε
      dryCakeBulkDensity_kg_m3: 1200,     // ρ_dry [kg/m³]
      solidDensity_kg_m3: 2710,           // ρ_solid [kg/m³]
      residualMoisturePct: 22.0,          // % w/w
      washEfficiencyPct: 92.0,            // %
      recommendedAirVelocity_m_min: 0.25, // superficial air velocity during dewatering
      dischargeMethod: "Kazıyıcı Bıçak (Scraper Knife)",
      compressibilityIndex: 0.15,         // s
      substanceId: "sub-caco3",
      notes: "İnorganik kristalin çökelti; mükemmel kek oluşumu ve yüksek süzülme hızı sağlar."
    },
    "gypsum_hydrate": {
      name: "Alçıtaşı / Jips Kristal Bulamacı (CaSO4·2H2O)",
      specificCakeResistance_m_kg: 8.0e9,
      mediumResistance_m_inv: 8.0e9,
      cakePorosity: 0.38,
      dryCakeBulkDensity_kg_m3: 1350,
      solidDensity_kg_m3: 2320,
      residualMoisturePct: 16.0,
      washEfficiencyPct: 95.0,
      recommendedAirVelocity_m_min: 0.30,
      dischargeMethod: "Kazıyıcı Bıçak veya Rulo Boşaltma (Scraper / Roll Discharge)",
      compressibilityIndex: 0.08,
      substanceId: "sub-min-gypsum",
      notes: "Hızlı filtre olan iri iğnemsi kristaller. Düşük kek direnci ve minimum nem içeriği sunar."
    },
    "paracetamol_api_crystals": {
      name: "Farmasötik API Kristalleri (Parasetamol / Aspirin Ham Çökelti)",
      specificCakeResistance_m_kg: 1.2e11,
      mediumResistance_m_inv: 2.5e10,
      cakePorosity: 0.48,
      dryCakeBulkDensity_kg_m3: 950,
      solidDensity_kg_m3: 1290,
      residualMoisturePct: 28.0,
      washEfficiencyPct: 88.0,
      recommendedAirVelocity_m_min: 0.20,
      dischargeMethod: "Hassas Bıçak veya İpli Boşaltma (Knife / String Discharge)",
      compressibilityIndex: 0.35,
      substanceId: "sub-pharm-paracetamol",
      notes: "İnce farmasötik kristal kek; ana likörün yıkanarak saflaştırılması ve solvent geri kazanımı kritiktir."
    },
    "starch_slurry": {
      name: "Endüstriyel Nişasta Bulamacı (Mısır / Patates Nişastası)",
      specificCakeResistance_m_kg: 4.5e10,
      mediumResistance_m_inv: 1.5e10,
      cakePorosity: 0.40,
      dryCakeBulkDensity_kg_m3: 1100,
      solidDensity_kg_m3: 1530,
      residualMoisturePct: 38.0,
      washEfficiencyPct: 85.0,
      recommendedAirVelocity_m_min: 0.22,
      dischargeMethod: "Kazıyıcı Bıçak (Scraper Knife)",
      compressibilityIndex: 0.22,
      substanceId: "sub-org-starch",
      notes: "Yüksek nem tutma kapasitesine sahip homojen nişasta keki; kek çatlamasını önlemek için rulo presleme önerilir."
    },
    "yeast_biomass": {
      name: "Biyokütle & Fermantasyon Posası (Maya / Mycelium / Hücre Çamuru)",
      specificCakeResistance_m_kg: 8.5e11,
      mediumResistance_m_inv: 5.0e10,
      cakePorosity: 0.55,
      dryCakeBulkDensity_kg_m3: 800,
      solidDensity_kg_m3: 1150,
      residualMoisturePct: 52.0,
      washEfficiencyPct: 78.0,
      recommendedAirVelocity_m_min: 0.15,
      dischargeMethod: "Ön Kaplamalı Döner Bıçak (Pre-coat Rotary Knife Discharge)",
      compressibilityIndex: 0.75,
      substanceId: "sub-bio-yeast",
      notes: "Yüksek derecede sıkışabilir jelatinimsi biyokütle; bez tıkanmasını önlemek için Diatomit (Celite) ön kaplama (pre-coat) şarttır."
    },
    "spent_carbon_sludge": {
      name: "Kullanılmış Ağartma Toprağı & Aktif Karbon Çamuru",
      specificCakeResistance_m_kg: 2.0e11,
      mediumResistance_m_inv: 3.0e10,
      cakePorosity: 0.50,
      dryCakeBulkDensity_kg_m3: 880,
      solidDensity_kg_m3: 1800,
      residualMoisturePct: 42.0,
      washEfficiencyPct: 82.0,
      recommendedAirVelocity_m_min: 0.18,
      dischargeMethod: "Kazıyıcı Bıçak veya Tel Boşaltma (Wire Discharge)",
      compressibilityIndex: 0.40,
      substanceId: "sub-min-bentonite",
      notes: "Mikron altı partiküller; kek gözeneklerini tıkayabilir, düşük devir (0.3-0.8 RPM) ve düzenli bez rejenerasyonu gerektirir."
    }
  };

  function calculateVacuumFiltration(slurryKey, drumArea_m2, slurryConc_g_L, vacuum_kPa, drumSpeed_rpm, submergencePct, washRatio_L_kg, liquidViscosity_mPa_s) {
    const profile = FILTRATION_SLURRY_PROFILES[slurryKey] || FILTRATION_SLURRY_PROFILES["caco3_precipitate"];

    const A = Math.max(0.1, Math.min(100.0, parseFloat(drumArea_m2) || 2.0)); // Drum alanı [m²]
    const c = Math.max(5.0, Math.min(600.0, parseFloat(slurryConc_g_L) || 100.0)); // Çamur konsantrasyonu [g/L = kg/m³]
    const vacKPa = Math.max(10.0, Math.min(95.0, parseFloat(vacuum_kPa) || 60.0)); // Vakum basıncı [kPa]
    const deltaP = vacKPa * 1000.0; // Basınç farkı [Pa]
    const N = Math.max(0.1, Math.min(5.0, parseFloat(drumSpeed_rpm) || 1.0)); // Tambur dönüş devri [RPM]
    const psi_pct = Math.max(15.0, Math.min(60.0, parseFloat(submergencePct) || 33.3)); // Daldırma oranı [%]
    const washRatio = Math.max(0.0, Math.min(5.0, parseFloat(washRatio_L_kg) || 1.5)); // Yıkama oranı [L/kg kuru katı]
    const mu_mPa_s = Math.max(0.3, Math.min(20.0, parseFloat(liquidViscosity_mPa_s) || 1.0)); // Viskozite [mPa·s]
    const mu = mu_mPa_s * 1e-3; // Viskozite [Pa·s]

    // Zaman hesaplamaları
    const t_cycle = 60.0 / N; // Bir tam tur süresi [saniye]
    const t_f = t_cycle * (psi_pct / 100.0); // Daldırma / kek oluşturma süresi [saniye]
    const dewaterFraction = Math.max(0.2, (100.0 - psi_pct - 15.0) / 100.0); // Susuzlaştırma / kurutma bölgesi oranı
    const t_dewater = t_cycle * dewaterFraction; // Kurutma süresi [saniye]

    // Basınca bağlı özgül kek direnci (Sıkışabilirlik düzeltmesi: α = α0 * (ΔP / 50kPa)^s)
    const s = profile.compressibilityIndex;
    const alpha = profile.specificCakeResistance_m_kg * Math.pow(deltaP / 50000.0, s);
    const Rm = profile.mediumResistance_m_inv;

    // Ruth / Darcy Karesel Denklemi: (mu * alpha * c / (2 * A² * ΔP)) * Vc² + (mu * Rm / (A * ΔP)) * Vc - tf = 0
    const a_quad = (mu * alpha * c) / (2.0 * A * A * deltaP);
    const b_quad = (mu * Rm) / (A * deltaP);
    const c_quad = -t_f;

    const discriminant = (b_quad * b_quad) - (4.0 * a_quad * c_quad);
    const V_c = Math.max(0.0001, (-b_quad + Math.sqrt(discriminant)) / (2.0 * a_quad)); // Tur başına süzüntü hacmi [m³]

    // Akış ve Üretim Hızları
    const filtrateFlowRate_m3_h = V_c * N * 60.0; // [m³/h]
    const filtrateFlowRate_L_h = filtrateFlowRate_m3_h * 1000.0; // [L/h]

    const dryCakePerRev_kg = c * V_c; // Tur başına kuru kek kütlesi [kg]
    const dryCakeRate_kg_h = dryCakePerRev_kg * N * 60.0; // [kg/h]

    // Kek Kalınlığı L_cake (m ve mm)
    // 1 turda tambur yüzeyinin tamamı döner ve V_c süzülür, oluşan kuru kek hacmi: V_cake = dryCakePerRev / rho_dry
    const dryCakeVolPerRev_m3 = dryCakePerRev_kg / profile.dryCakeBulkDensity_kg_m3;
    const cakeThickness_m = dryCakeVolPerRev_m3 / A;
    const cakeThickness_mm = cakeThickness_m * 1000.0;

    // Yaş Kek Üretimi ve Nem İçeriği
    const moistureFrac = profile.residualMoisturePct / 100.0;
    const wetCakeRate_kg_h = dryCakeRate_kg_h / (1.0 - moistureFrac);
    const retainedWaterRate_kg_h = wetCakeRate_kg_h - dryCakeRate_kg_h;

    // Yıkama Suyu İhtiyacı
    const washLiquidDemand_L_h = dryCakeRate_kg_h * washRatio;

    // Spesifik Akı ve Üretim Hızları
    const specificFiltrateFlux_L_m2_h = filtrateFlowRate_L_h / A;
    const specificSolidsYield_kg_m2_h = dryCakeRate_kg_h / A;

    // Vakum Pompası Hava Emiş Kapasitesi
    const dewaterArea_m2 = A * dewaterFraction;
    const airFlowRate_m3_h = dewaterArea_m2 * profile.recommendedAirVelocity_m_min * 60.0;
    const airFlowRate_CFM = airFlowRate_m3_h * 0.588578;
    const pumpPower_kW = (airFlowRate_m3_h * vacKPa) / (3600.0 * 0.60); // %60 pompa verimi

    // Kek Kalınlığı ve Boşaltma Değerlendirmesi
    let cakeEvaluation = "";
    let dischargeSuitability = "";
    if (cakeThickness_mm < 2.0) {
      cakeEvaluation = "⚠️ Aşırı İnce Kek (< 2 mm): Standart kazıyıcı bıçak keki soyamaz. Çamur konsantrasyonunu artırın, tambur devrini (RPM) düşürün veya döner bıçaklı ön kaplama (pre-coat) kullanın.";
      dischargeSuitability = "🔴 Standart bıçak yetersiz (Ön kaplama veya ipli boşaltma gerekir)";
    } else if (cakeThickness_mm <= 25.0) {
      cakeEvaluation = "🟢 İdeal Kek Kalınlığı (2 - 25 mm): Bıçaklı veya makaralı sıyırıcı ile temiz ve kesintisiz kek boşaltımı sağlanır.";
      dischargeSuitability = "🟢 " + profile.dischargeMethod + " ile tam uyumlu";
    } else {
      cakeEvaluation = "🟡 Aşırı Kalın Kek (> 25 mm): Yüksek kek direnci filtrasyon hızını düşürür ve kekte derin kuruma çatlakları (cracking) oluşturabilir. Tambur devrini artırın.";
      dischargeSuitability = "🟡 Kek kalınlığı sınırda (Yüksek tork ve çatlama kontrolü gerekir)";
    }

    return {
      slurryName: profile.name,
      drumAreaM2: A,
      slurryConcGL: c,
      vacuumKPa: vacKPa,
      drumSpeedRpm: N,
      submergencePct: psi_pct,
      washRatio: washRatio,
      liquidViscosityMPaS: mu_mPa_s,
      cycleTimeSec: Math.round(t_cycle * 10) / 10,
      filtrationTimeSec: Math.round(t_f * 10) / 10,
      dewateringTimeSec: Math.round(t_dewater * 10) / 10,
      filtrateRateL_h: Math.round(filtrateFlowRate_L_h * 10) / 10,
      filtrateRateM3_h: Math.round(filtrateFlowRate_m3_h * 1000) / 1000,
      dryCakeRateKg_h: Math.round(dryCakeRate_kg_h * 10) / 10,
      wetCakeRateKg_h: Math.round(wetCakeRate_kg_h * 10) / 10,
      retainedWaterRateKg_h: Math.round(retainedWaterRate_kg_h * 10) / 10,
      residualMoisturePct: profile.residualMoisturePct,
      cakeThicknessMm: Math.round(cakeThickness_mm * 100) / 100,
      cakeEvaluation: cakeEvaluation,
      dischargeSuitability: dischargeSuitability,
      recommendedDischarge: profile.dischargeMethod,
      washLiquidDemandL_h: Math.round(washLiquidDemand_L_h * 10) / 10,
      washEfficiencyPct: profile.washEfficiencyPct,
      specificFiltrateFlux: Math.round(specificFiltrateFlux_L_m2_h * 10) / 10,
      specificSolidsYield: Math.round(specificSolidsYield_kg_m2_h * 10) / 10,
      airFlowRateM3_h: Math.round(airFlowRate_m3_h * 10) / 10,
      airFlowRateCFM: Math.round(airFlowRate_CFM * 10) / 10,
      pumpPowerKW: Math.round(pumpPower_kW * 100) / 100,
      substanceId: profile.substanceId,
      notes: profile.notes
    };
  }

  // =========================================================================
  // 22. SPRAY DRYING & POWDER PARTICLE SIZING BALANCER
  // =========================================================================
  const SPRAY_DRYING_PROFILES = {
    "maltodextrin_carrier": {
      name: "Maltodekstrin / Akasya Zamkı Taşıyıcılı Bitkisel Ekstre",
      defaultFeedSolidsPct: 25.0,
      glassTransitionTempC: 65.0,
      stickyPointMarginC: 20.0,
      idealInletTempC: 165.0,
      idealOutletTempC: 75.0,
      atomizerType: "İki Akışkanlı Pnömatik Nozul (Two-Fluid Nozzle)",
      targetPowderMoisturePct: 3.5,
      trueParticleDensity_kg_m3: 1450.0,
      bulkLooseDensity_kg_m3: 450.0,
      nominalDropletSizeUm: 35.0,
      substanceId: "sub-bot-herbal-spray-powder",
      notes: "Bitkisel polifenol ve aromaların maltodekstrin mikrokapsülasyonu ile toz haline getirilmesi. Cidar yapışmasını önlemek için çıkış sıcaklığı 80°C altında tutulmalıdır."
    },
    "paracetamol_microcrystals": {
      name: "Farmasötik API & Polimer Dispersiyonu (Parasetamol / PVP K30)",
      defaultFeedSolidsPct: 20.0,
      glassTransitionTempC: 85.0,
      stickyPointMarginC: 20.0,
      idealInletTempC: 140.0,
      idealOutletTempC: 68.0,
      atomizerType: "Basınçlı Hidrolik Nozul (Pressure Nozzle)",
      targetPowderMoisturePct: 2.0,
      trueParticleDensity_kg_m3: 1300.0,
      bulkLooseDensity_kg_m3: 380.0,
      nominalDropletSizeUm: 28.0,
      substanceId: "sub-pharm-spray-api",
      notes: "Amorf katı dispersiyon (ASD); biyoyararlanımı artırır ve hızlı çözünür mikronize farmasötik toz üretir."
    },
    "dairy_whey_protein": {
      name: "Peynir Altı Suyu Proteini & Laktoz (Whey Isolate / WPC)",
      defaultFeedSolidsPct: 30.0,
      glassTransitionTempC: 52.0,
      stickyPointMarginC: 20.0,
      idealInletTempC: 180.0,
      idealOutletTempC: 70.0,
      atomizerType: "Döner Disk Atomizör (Rotary Spinning Disc)",
      targetPowderMoisturePct: 4.0,
      trueParticleDensity_kg_m3: 1250.0,
      bulkLooseDensity_kg_m3: 520.0,
      nominalDropletSizeUm: 45.0,
      substanceId: "sub-org-whey-protein",
      notes: "Yüksek proteinli süt ürünleri tozu; serbest laktozun kristallenme yapışkanlığına dikkat edilmeli, nem < %4 tutulmalıdır."
    },
    "instant_coffee_extract": {
      name: "Hazır Kahve & Çay Konsantresi Ekstresi",
      defaultFeedSolidsPct: 35.0,
      glassTransitionTempC: 58.0,
      stickyPointMarginC: 20.0,
      idealInletTempC: 200.0,
      idealOutletTempC: 90.0,
      atomizerType: "Yüksek Basınçlı Nozul (Vortex Nozzle)",
      targetPowderMoisturePct: 3.0,
      trueParticleDensity_kg_m3: 1350.0,
      bulkLooseDensity_kg_m3: 320.0,
      nominalDropletSizeUm: 55.0,
      substanceId: "sub-bot-instant-coffee",
      notes: "Aromatik volatil koruması için kule altı soğutma ve aglomerasyon siklonu ile iri granül form."
    },
    "silica_nanosol": {
      name: "Koloidal Silika & Katalizör Taşıyıcı Kürecikler",
      defaultFeedSolidsPct: 15.0,
      glassTransitionTempC: 400.0,
      stickyPointMarginC: 100.0,
      idealInletTempC: 220.0,
      idealOutletTempC: 100.0,
      atomizerType: "İki Akışkanlı Nozul (Pneumatic)",
      targetPowderMoisturePct: 1.0,
      trueParticleDensity_kg_m3: 2200.0,
      bulkLooseDensity_kg_m3: 250.0,
      nominalDropletSizeUm: 22.0,
      substanceId: "sub-min-silica-spheres",
      notes: "Katalizör ve kromatografi dolguları için mikron altı poröz silika mikrokürecikleri."
    }
  };

  function calculateSprayDrying(profileKey, feedRate_L_h, feedSolidsPct, inletTempC, outletTempC, ambientTempC, atomizingPressureBar) {
    const profile = SPRAY_DRYING_PROFILES[profileKey] || SPRAY_DRYING_PROFILES["maltodextrin_carrier"];

    const V_feed_L_h = Math.max(0.1, Math.min(500.0, parseFloat(feedRate_L_h) || 5.0)); // L/h
    const solidsPct = Math.max(1.0, Math.min(60.0, parseFloat(feedSolidsPct) !== undefined && !isNaN(parseFloat(feedSolidsPct)) ? parseFloat(feedSolidsPct) : profile.defaultFeedSolidsPct));
    const T_in = Math.max(100.0, Math.min(300.0, parseFloat(inletTempC) || profile.idealInletTempC));
    const T_out = Math.max(45.0, Math.min(130.0, parseFloat(outletTempC) || profile.idealOutletTempC));
    const T_amb = Math.max(5.0, Math.min(40.0, parseFloat(ambientTempC) || 20.0));
    const P_atom = Math.max(0.5, Math.min(10.0, parseFloat(atomizingPressureBar) || 2.5));

    // Sıvı besleme yoğunluğu (kg/m³)
    const rho_feed_kg_m3 = 1000.0 + (3.5 * solidsPct);
    const M_feed_kg_h = V_feed_L_h * (rho_feed_kg_m3 / 1000.0);
    const M_solids_kg_h = M_feed_kg_h * (solidsPct / 100.0);

    // Kuru toz üretimi (hedef nem payı dahil)
    const targetMoistureFrac = profile.targetPowderMoisturePct / 100.0;
    const M_powder_kg_h = M_solids_kg_h / (1.0 - targetMoistureFrac);
    const M_evap_kg_h = Math.max(0.01, M_feed_kg_h - M_powder_kg_h);

    // Termal denge ve kurutma havası debisi
    // deltaH_vap suyun buharlaşma entalpisi (kJ/kg)
    const deltaH_vap_kJ_kg = 2501.0 - (2.37 * T_out);
    const Cp_air_kJ_kg_C = 1.005;

    // Gereken kurutma havası kütlesi (kg/h)
    const deltaT_drying = Math.max(5.0, T_in - T_out);
    const M_air_kg_h = (M_evap_kg_h * deltaH_vap_kJ_kg) / (Cp_air_kJ_kg_C * deltaT_drying);
    const rho_air_amb = 1.204; // kg/m³ at 20°C
    const V_air_m3_h = M_air_kg_h / rho_air_amb;
    const V_air_CFM = V_air_m3_h * 0.588578;

    // Termal Verim (Drying Thermal Efficiency)
    const thermalEfficiencyPct = ((T_in - T_out) / Math.max(1.0, (T_in - T_amb))) * 100.0;

    // Isıtıcı Güç İhtiyacı (kW, %10 izolasyon kaybı marjı ile)
    const heaterPowerKW = ((M_air_kg_h * Cp_air_kJ_kg_C * (T_in - T_amb)) / 3600.0) * 1.10;

    // Damlacık ve Partikül Boyutu Tahmini (µm)
    // Atomizasyon basıncı arttıkça damlacık küçülür: D_drop = D0 * (2.5 / P_atom)^0.4
    const meanDropletSizeUm = profile.nominalDropletSizeUm * Math.pow(2.5 / P_atom, 0.4);
    // Tek damlacık büzüşme katsayısı: d_p = D_drop * (solidsFrac * rho_feed / rho_solid)^(1/3)
    const volumeShrinkRatio = (solidsPct / 100.0) * (rho_feed_kg_m3 / profile.trueParticleDensity_kg_m3);
    const meanParticleSizeUm = meanDropletSizeUm * Math.pow(volumeShrinkRatio, 1.0 / 3.0);

    // Camsı Geçiş & Cidar Yapışma Riski Analizi
    const stickyPointC = profile.glassTransitionTempC + profile.stickyPointMarginC;
    let stickingRisk = "";
    let stickingSeverity = "low";
    if (T_out > stickyPointC) {
      stickingSeverity = "high";
      stickingRisk = `🔴 CİDAR YAPIŞMASI & YANMA RİSKİ: Çıkış sıcaklığı (${T_out}°C) yapışkanlık noktasını (${stickyPointC}°C) aşmaktadır! Toz kurutma kulesi duvarlarına yapışarak karamelize olur ve verim düşer. Çıkış sıcaklığını düşürünüz veya formülasyona taşıyıcı maltodekstrin ekleyiniz.`;
    } else if (T_out >= profile.glassTransitionTempC) {
      stickingSeverity = "medium";
      stickingRisk = `🟡 DİKKAT: Çıkış sıcaklığı kritik camsı geçiş aralığında (${profile.glassTransitionTempC}°C - ${stickyPointC}°C). Kule içi cidar üfleme havası (air broom) ve soğutma ceketi önerilir.`;
    } else {
      stickingSeverity = "low";
      stickingRisk = `🟢 KUSURSUZ AMORF KATILAŞMA: Çıkış sıcaklığı (${T_out}°C) camsı geçiş sıcaklığının (${profile.glassTransitionTempC}°C) altındadır. Tozlar serbest akışkan (free-flowing) formda siklona ulaşır.`;
    }

    // Siklon ve Filtre Ayrıştırma Verimleri
    const cycloneEfficiency = 0.945; // %94.5 siklon toplama verimi
    const cyclonePowderRateKg_h = M_powder_kg_h * cycloneEfficiency;
    const filterFinesRateKg_h = M_powder_kg_h * (1.0 - cycloneEfficiency);
    const powderBulkVolumeL_h = (M_powder_kg_h / profile.bulkLooseDensity_kg_m3) * 1000.0;

    return {
      profileName: profile.name,
      feedRateL_h: V_feed_L_h,
      feedSolidsPct: Math.round(solidsPct * 10) / 10,
      inletTempC: T_in,
      outletTempC: T_out,
      ambientTempC: T_amb,
      atomizingPressureBar: P_atom,
      feedMassRateKg_h: Math.round(M_feed_kg_h * 100) / 100,
      waterEvapRateKg_h: Math.round(M_evap_kg_h * 100) / 100,
      totalPowderRateKg_h: Math.round(M_powder_kg_h * 100) / 100,
      cyclonePowderRateKg_h: Math.round(cyclonePowderRateKg_h * 100) / 100,
      filterFinesRateKg_h: Math.round(filterFinesRateKg_h * 1000) / 1000,
      powderBulkVolumeL_h: Math.round(powderBulkVolumeL_h * 100) / 100,
      airFlowRateM3_h: Math.round(V_air_m3_h * 10) / 10,
      airFlowRateCFM: Math.round(V_air_CFM * 10) / 10,
      thermalEfficiencyPct: Math.round(thermalEfficiencyPct * 10) / 10,
      heaterPowerKW: Math.round(heaterPowerKW * 100) / 100,
      meanDropletSizeUm: Math.round(meanDropletSizeUm * 10) / 10,
      meanParticleSizeUm: Math.round(meanParticleSizeUm * 10) / 10,
      atomizerType: profile.atomizerType,
      targetPowderMoisturePct: profile.targetPowderMoisturePct,
      glassTransitionTempC: profile.glassTransitionTempC,
      stickyPointC: stickyPointC,
      stickingRisk: stickingRisk,
      stickingSeverity: stickingSeverity,
      substanceId: profile.substanceId,
      notes: profile.notes
    };
  }

  // =========================================================================
  // 23. SUPERCRITICAL CO2 EXTRACTION & SOLUTE DENSITY BALANCER
  // =========================================================================
  const SUPERCRITICAL_EXTRACT_PROFILES = {
    "caffeine_coffee": {
      name: "Kahve Çekirdeği Kafeini & Dekaf Prosesi (Coffea arabica)",
      activeCompound: "Kafein (1,3,7-Trimetilksantin)",
      feedActivePct: 1.8,
      defaultPressureBar: 250.0,
      defaultTempC: 45.0,
      defaultCosolventPct: 3.0,
      k: 4.2,
      A: -3200.0,
      B: 11.48,
      cosolventBeta: 0.65,
      targetRecoveryPct: 95.0,
      waxFractionPct: 18.0,
      substanceId: "sub-bot-caffeine-extract",
      notes: "Yeşil kahve çekirdeklerinden kafein ekstraksiyonu. %3 etanol/su ko-çözücü polarlığı artırarak kafein çözünürlüğünü 3 kattan fazla artırır."
    },
    "lavender_essential_oil": {
      name: "Lavanta Çiçeği Terpen & Esterleri (Lavandula angustifolia)",
      activeCompound: "Linalil Asetat & Linalool",
      feedActivePct: 3.5,
      defaultPressureBar: 100.0,
      defaultTempC: 40.0,
      defaultCosolventPct: 0.0,
      k: 3.2,
      A: -2400.0,
      B: 10.60,
      cosolventBeta: 0.20,
      targetRecoveryPct: 96.0,
      waxFractionPct: 12.0,
      substanceId: "sub-bot-lavender-sc-extract",
      notes: "Düşük basınç (90-110 bar) saf apolar monoterpen ve esterleri seçici olarak çeker; kütiküler ağır vaksları geride bırakır. Termal bozunma sıfırdır."
    },
    "capsaicin_chili": {
      name: "Acı Kırmızı Biber Kapsaisinoidleri (Capsicum annuum)",
      activeCompound: "Kapsaisin & Dihidrokapsaisin",
      feedActivePct: 0.85,
      defaultPressureBar: 280.0,
      defaultTempC: 50.0,
      defaultCosolventPct: 4.0,
      k: 5.1,
      A: -3800.0,
      B: 13.50,
      cosolventBeta: 0.58,
      targetRecoveryPct: 94.0,
      waxFractionPct: 28.0,
      substanceId: "sub-bot-capsaicin-oleoresin",
      notes: "Yüksek SHU acılık oleoresini. 1. separatörde kırmızı vakslar ayrılırken 2. separatörde saf kapsaisin kristalleri çöker."
    },
    "curcumin_turmeric": {
      name: "Zerdeçal Kurkuminoid Kompleksi (Curcuma longa)",
      activeCompound: "Kurkumin, Demetoksikurkumin, Bisdemetoksikurkumin",
      feedActivePct: 4.5,
      defaultPressureBar: 320.0,
      defaultTempC: 55.0,
      defaultCosolventPct: 6.0,
      k: 6.2,
      A: -4600.0,
      B: 15.80,
      cosolventBeta: 0.75,
      targetRecoveryPct: 92.0,
      waxFractionPct: 22.0,
      substanceId: "sub-bot-curcumin-sc-extract",
      notes: "Yüksek molekül ağırlıklı polifenolik kurkuminoidler için 300+ bar ve %6-8 etanol modifiyeri şarttır."
    },
    "astaxanthin_algae": {
      name: "Haematococcus Mikroalg Doğal Astaksantin",
      activeCompound: "Doğal Astaksantin Karotenoid Esterleri",
      feedActivePct: 2.5,
      defaultPressureBar: 350.0,
      defaultTempC: 60.0,
      defaultCosolventPct: 5.0,
      k: 6.8,
      A: -5100.0,
      B: 17.20,
      cosolventBeta: 0.68,
      targetRecoveryPct: 90.0,
      waxFractionPct: 35.0,
      substanceId: "sub-bot-astaxanthin-sc-extract",
      notes: "Işığa ve oksijene aşırı duyarlı süper antioksidan karotenoid. Süperkritik CO2 sıfır oksijenli ortamda karotenoidleri koruyarak saflaştırır."
    },
    "hops_humulone": {
      name: "Şerbetçiotu Alfa Asitleri & Lüpolin (Humulus lupulus)",
      activeCompound: "Hümülon & Kohümülon Reçinesi",
      feedActivePct: 12.0,
      defaultPressureBar: 180.0,
      defaultTempC: 45.0,
      defaultCosolventPct: 0.0,
      k: 3.5,
      A: -2700.0,
      B: 11.20,
      cosolventBeta: 0.25,
      targetRecoveryPct: 97.0,
      waxFractionPct: 15.0,
      substanceId: "sub-bot-hops-sc-extract",
      notes: "Bira ve fitoterapi endüstrisinde altın standart. Klorofili çekmeden saf acılık reçinelerini ayrıştırır."
    }
  };

  /**
   * Supercritical CO2 Density Correlation (Span-Wagner inspired parameterized fit)
   * Valid for P: 50 - 500 bar, T: 25 - 90 °C
   */
  function calculateCO2FluidDensity(P_bar, T_C) {
    const T_K = T_C + 273.15;
    const Pc = 73.8;
    const Tc = 304.25;
    if (P_bar < Pc) {
      // Subcritical gas region
      const Z = 0.85;
      return Math.max(10.0, Math.min(180.0, (P_bar * 1e5 * 0.04401) / (Z * 8.31446 * T_K)));
    }
    const dP = P_bar - Pc;
    const dT = T_K - Tc;
    const rho_inf = 1040.0;
    const comp = Math.pow(dP / (dP + 55.0), 0.38);
    const therm = 1.0 - 0.0032 * dT - (45.0 / (dP + 20.0)) * (dT / 50.0);
    const rho = rho_inf * comp * therm;
    return Math.max(200.0, Math.min(1050.0, rho));
  }

  function calculateSupercriticalExtraction(profileKey, feedMassKg, co2FlowKg_h, pressureBar, tempC, cosolventPct) {
    const profile = SUPERCRITICAL_EXTRACT_PROFILES[profileKey] || SUPERCRITICAL_EXTRACT_PROFILES["caffeine_coffee"];

    const M_feed_kg = Math.max(0.1, Math.min(2000.0, parseFloat(feedMassKg) || 5.0)); // kg
    const mdot_CO2 = Math.max(1.0, Math.min(500.0, parseFloat(co2FlowKg_h) || 25.0)); // kg/h
    const P_ext = Math.max(50.0, Math.min(500.0, parseFloat(pressureBar) || profile.defaultPressureBar)); // bar
    const T_ext = Math.max(25.0, Math.min(90.0, parseFloat(tempC) || profile.defaultTempC)); // °C
    const modPct = Math.max(0.0, Math.min(15.0, parseFloat(cosolventPct) !== undefined && !isNaN(parseFloat(cosolventPct)) ? parseFloat(cosolventPct) : profile.defaultCosolventPct)); // % EtOH

    // 1. Ekstraktör Yoğunluğu (kg/m³)
    const rho_ext = calculateCO2FluidDensity(P_ext, T_ext);

    // 2. Chrastil Denge Çözünürlüğü (g aktif / kg CO2)
    const T_K = T_ext + 273.15;
    const lnS_pure = profile.k * Math.log(rho_ext / 1000.0) + (profile.A / T_K) + profile.B;
    const S_pure_g_kg = Math.max(0.001, Math.exp(lnS_pure));

    // 3. Ko-çözücü (Modifier) Zenginleştirme Faktörü
    const E_mod = 1.0 + (profile.cosolventBeta * Math.pow(modPct, 1.15));
    const S_eff_g_kg = S_pure_g_kg * E_mod;

    // 4. Hedef Aktif Madde Kütle Dengesi
    const M_active_in_g = M_feed_kg * (profile.feedActivePct / 100.0) * 1000.0; // g
    const M_active_target_g = M_active_in_g * (profile.targetRecoveryPct / 100.0); // g

    // 5. Yatak Denge Yaklaşım Verimi (%88) ve Ekstraksiyon Hızı
    const eta_bed = 0.88;
    const extractionRate_g_h = mdot_CO2 * S_eff_g_kg * eta_bed; // g aktif / saat

    // 6. Gerekli Ekstraksiyon Süresi
    const time_hours = Math.max(0.05, M_active_target_g / Math.max(0.001, extractionRate_g_h));
    const time_minutes = Math.round(time_hours * 60.0);

    // 7. Toplam Dolaştırılan CO2 ve Solvent/Besleme (S/F) Oranı
    const totalCO2_kg = mdot_CO2 * time_hours;
    const solventFeedRatio = totalCO2_kg / M_feed_kg;

    // 8. İki Kademeli Siklon Basınç Düşürme & Ayrıştırma Fraksiyonları
    // Toplam ham ekstrakt (aktif + kütiküler vakslar ve ağır lipidler)
    const totalExtract_g = M_active_target_g / (1.0 - (profile.waxFractionPct / 100.0));
    const separator1_wax_g = totalExtract_g * (profile.waxFractionPct / 100.0);
    const separator2_pureActive_g = M_active_target_g;

    // Separatör 1: 120 bar, 50°C (Ağır vakslar çöker)
    const rho_sep1 = calculateCO2FluidDensity(120.0, 50.0);
    // Separatör 2: 50 bar, 25°C (Gaz fazı flaş, saf aktif çöker)
    const rho_sep2 = calculateCO2FluidDensity(50.0, 25.0);

    // 9. Kapalı Döngü CO2 Geri Kazanımı (%96.5 döngü verimi)
    const co2RecyclePct = 96.5;
    const co2LossKg = totalCO2_kg * ((100.0 - co2RecyclePct) / 100.0);

    // 10. Ko-çözücü Tüketimi (kg)
    const cosolventConsumptionKg = (totalCO2_kg * (modPct / 100.0));

    // 11. Yüksek Basınç Diyafram Pompası Güç & Enerji Hesabı
    const rho_pump_liquid = 950.0; // kg/m³ subcooled liquid at 50 bar, 5°C
    const V_pump_m3_h = mdot_CO2 / rho_pump_liquid;
    const deltaP_Pa = Math.max(0, (P_ext - 50.0) * 1e5);
    const pumpEfficiency = 0.70;
    const pumpPowerKW = (V_pump_m3_h * deltaP_Pa) / (3600.0 * pumpEfficiency * 1000.0);
    const totalEnergyKWh = (pumpPowerKW * time_hours + (0.045 * totalCO2_kg)) * 1.15; // Pompa + soğutucu/ısıtıcı yükü

    // 12. Emniyet ve Basınç Değerlendirmesi
    let safetyRating = "";
    let safetySeverity = "low";
    if (P_ext >= 350.0) {
      safetySeverity = "high";
      safetyRating = "🛑 KRİTİK YÜKSEK BASINÇ (≥350 bar): Dövme çelik otoklav reaktör, çift bağımsız patlama diski (rupture disc) ve PED/ASME Section VIII sertifikasyonu zorunludur!";
    } else if (P_ext > 220.0) {
      safetySeverity = "medium";
      safetyRating = "🟡 YÜKSEK BASINÇ (220 - 350 bar): Standart endüstriyel süperkritik proses aralığı. Sertifikalı yüksek basınç emniyet valfi gereklidir.";
    } else if (P_ext < 73.8) {
      safetySeverity = "high";
      safetyRating = "⚠️ SÜPERKRİTİK FAZIN ALTINDA (<73.8 bar): Basınç CO2 kritik basıncının altındadır! Süperkritik çözücü gücü oluşmaz, faz sıvı veya gazdır.";
    } else {
      safetySeverity = "low";
      safetyRating = "🟢 GÜVENLİ / ORTA SÜPERKRİTİK BASINÇ (74 - 220 bar): Narin uçucu yağ, aroma ve monoterpenlerin fraksiyonlanması için ideal düşük çözünürlüklü seçici bölge.";
    }

    return {
      profileName: profile.name,
      activeCompound: profile.activeCompound,
      feedMassKg: M_feed_kg,
      co2FlowKg_h: mdot_CO2,
      pressureBar: P_ext,
      tempC: T_ext,
      cosolventPct: modPct,
      extractorDensityKg_m3: Math.round(rho_ext * 10) / 10,
      pureSolubilityG_kg: Math.round(S_pure_g_kg * 1000) / 1000,
      effectiveSolubilityG_kg: Math.round(S_eff_g_kg * 1000) / 1000,
      cosolventEnhancementFactor: Math.round(E_mod * 100) / 100,
      targetRecoveryPct: profile.targetRecoveryPct,
      feedActiveMassG: Math.round(M_active_in_g * 10) / 10,
      recoveredActiveMassG: Math.round(M_active_target_g * 10) / 10,
      totalCrudeExtractG: Math.round(totalExtract_g * 10) / 10,
      separator1WaxMassG: Math.round(separator1_wax_g * 10) / 10,
      separator2PureExtractG: Math.round(separator2_pureActive_g * 10) / 10,
      extractionRateG_h: Math.round(extractionRate_g_h * 10) / 10,
      extractionTimeHours: Math.round(time_hours * 100) / 100,
      extractionTimeMinutes: time_minutes,
      totalCO2CirculatedKg: Math.round(totalCO2_kg * 10) / 10,
      solventToFeedRatio: Math.round(solventFeedRatio * 10) / 10,
      separator1DensityKg_m3: Math.round(rho_sep1 * 10) / 10,
      separator2DensityKg_m3: Math.round(rho_sep2 * 10) / 10,
      co2RecycleEfficiencyPct: co2RecyclePct,
      co2MakeupLossKg: Math.round(co2LossKg * 100) / 100,
      cosolventConsumptionKg: Math.round(cosolventConsumptionKg * 100) / 100,
      pumpPowerKW: Math.round(pumpPowerKW * 100) / 100,
      totalEnergyKWh: Math.round(totalEnergyKWh * 10) / 10,
      safetyRating: safetyRating,
      safetySeverity: safetySeverity,
      substanceId: profile.substanceId,
      notes: profile.notes
    };
  }

  // =========================================================================
  // 24. CROSS-FLOW MEMBRANE SEPARATION & RO / UF BALANCER
  // =========================================================================
  const MEMBRANE_SEPARATION_PROFILES = {
    "ro_seawater_desalination": {
      name: "Deniz Suyu Ters Ozmoz (SWRO / Seawater Desalination)",
      membraneType: "Poliamid İnce Film Kompozit (TFC-RO)",
      mwco: "< 100 Da",
      soluteName: "Tuzluluk / NaCl (%3.5 TDS)",
      defaultFeedConcGL: 35.0,
      soluteMW: 58.44,
      vanTHoffFactor: 1.9,
      rejectionPct: 99.6,
      pureWaterPermeabilityLp20: 1.8,
      defaultTMPBar: 60.0,
      defaultRecoveryPct: 45.0,
      reflectionCoeff: 0.99,
      gelConcentrationGL: 120.0,
      massTransferCoeffKd: 85.0,
      substanceId: "sub-pure-water",
      notes: "Tuzlu deniz suyundan içme suyu eldesi. Yüksek ozmotik karşı basınç (27-30 bar) nedeniyle 55-65 bar transmembran basınç (TMP) gereklidir."
    },
    "uf_whey_protein_isolate": {
      name: "Peynir Altı Suyu Proteini Konsantrasyonu (WPC-80 / WPI)",
      membraneType: "Polietersülfon (PES) 10 kDa Spiral Sarımlı",
      mwco: "10 kDa",
      soluteName: "Peynir Altı Suyu Proteini (Beta-Laktoglobulin & BSA)",
      defaultFeedConcGL: 12.0,
      soluteMW: 18400.0,
      vanTHoffFactor: 1.0,
      rejectionPct: 98.8,
      pureWaterPermeabilityLp20: 8.5,
      defaultTMPBar: 4.5,
      defaultRecoveryPct: 80.0,
      reflectionCoeff: 0.08,
      gelConcentrationGL: 240.0,
      massTransferCoeffKd: 42.0,
      substanceId: "sub-org-whey-protein",
      notes: "Laktoz ve mineraller serbestçe permeata geçerken proteinler 5 kat konsantre edilerek %80 kuru madde saflığında protein konsantresi üretilir."
    },
    "nf_antibiotic_api_concentration": {
      name: "Antibiyotik & Farmasötik API Konsantrasyonu (Nanofiltrasyon)",
      membraneType: "Sülfone PES 400 Da NF Düz Plaka / Spiral",
      mwco: "400 Da",
      soluteName: "Amoksisilin / Sefalosporin API",
      defaultFeedConcGL: 8.0,
      soluteMW: 365.4,
      vanTHoffFactor: 1.0,
      rejectionPct: 97.5,
      pureWaterPermeabilityLp20: 4.2,
      defaultTMPBar: 16.0,
      defaultRecoveryPct: 75.0,
      reflectionCoeff: 0.85,
      gelConcentrationGL: 160.0,
      massTransferCoeffKd: 55.0,
      substanceId: "sub-pharm-api-concentrate",
      notes: "Termolabil aktif farmasötik maddelerin ısı uygulamadan oda sıcaklığında konsantre edilmesi ve inorganik tuzların (tuzsuzlaştırma) ayrıştırılması."
    },
    "uf_endotoxin_pyrogen_removal": {
      name: "Farmasötik WFI Enjeksiyonluk Su & Pirojen/Endotoksin Giderimi",
      membraneType: "Hidrofilik Selüloz Asetat 6 kDa UF",
      mwco: "6 kDa",
      soluteName: "Bakteriyel Lipopolisakkarit / Endotoksin (LPS)",
      defaultFeedConcGL: 0.05,
      soluteMW: 100000.0,
      vanTHoffFactor: 1.0,
      rejectionPct: 99.9,
      pureWaterPermeabilityLp20: 7.0,
      defaultTMPBar: 3.0,
      defaultRecoveryPct: 90.0,
      reflectionCoeff: 0.05,
      gelConcentrationGL: 50.0,
      massTransferCoeffKd: 65.0,
      substanceId: "sub-pharm-wfi-water",
      notes: "Enjeksiyonluk su (WFI) üretiminde endotoksin (<0.25 EU/mL) ve virüslerin tutulması; steril ve apirojen yüksek saflıkta permeat suyu eldesi."
    },
    "mf_fermentation_cell_harvest": {
      name: "Fermantasyon Biyokütlesi & Hücre Hasadı (Mikrofiltrasyon)",
      membraneType: "PVDF 0.2 µm MF İçi Boş Elyaf (Hollow Fiber)",
      mwco: "0.2 µm (~500 kDa)",
      soluteName: "Bakteri & Maya Hücre Kütlesi (Saccharomyces cerevisiae)",
      defaultFeedConcGL: 25.0,
      soluteMW: 1000000.0,
      vanTHoffFactor: 1.0,
      rejectionPct: 99.9,
      pureWaterPermeabilityLp20: 25.0,
      defaultTMPBar: 1.2,
      defaultRecoveryPct: 85.0,
      reflectionCoeff: 0.02,
      gelConcentrationGL: 180.0,
      massTransferCoeffKd: 35.0,
      substanceId: "sub-bio-cell-biomass",
      notes: "Santrifüj gerektirmeden fermantasyon ortamından berrak metabolit sıvısının ayrıştırılması ve hücrelerin koyulaştırılması."
    },
    "nf_sugar_juice_concentration": {
      name: "Meyve Suyu & Şeker Şurubu Konsantrasyonu (Nanofiltrasyon)",
      membraneType: "Polipiperazin Amid 250 Da NF",
      mwco: "250 Da",
      soluteName: "Sukroz / Glukoz Meyve Şekerleri (Brix Artırımı)",
      defaultFeedConcGL: 100.0,
      soluteMW: 342.3,
      vanTHoffFactor: 1.0,
      rejectionPct: 98.5,
      pureWaterPermeabilityLp20: 3.2,
      defaultTMPBar: 28.0,
      defaultRecoveryPct: 60.0,
      reflectionCoeff: 0.90,
      gelConcentrationGL: 350.0,
      massTransferCoeffKd: 48.0,
      substanceId: "sub-org-concentrated-juice",
      notes: "Isıl evaporatör kullanmadan taze meyve suyunun aromasını ve C vitaminini koruyarak 10 °Brix'ten 25 °Brix'e konsantre edilmesi."
    }
  };

  function calculateMembraneSeparation(profileKey, feedFlow_L_h, membraneArea_m2, tmpBar, tempC, recoveryPct) {
    const profile = MEMBRANE_SEPARATION_PROFILES[profileKey] || MEMBRANE_SEPARATION_PROFILES["ro_seawater_desalination"];

    const Q_feed = Math.max(1.0, Math.min(50000.0, parseFloat(feedFlow_L_h) || 500.0)); // L/h
    const A_m = Math.max(0.1, Math.min(2000.0, parseFloat(membraneArea_m2) || 10.0)); // m²
    const P_tmp = Math.max(0.2, Math.min(120.0, parseFloat(tmpBar) || profile.defaultTMPBar)); // bar
    const T_c = Math.max(5.0, Math.min(70.0, parseFloat(tempC) !== undefined && !isNaN(parseFloat(tempC)) ? parseFloat(tempC) : 20.0)); // °C
    const Y_target = Math.max(5.0, Math.min(95.0, parseFloat(recoveryPct) !== undefined && !isNaN(parseFloat(recoveryPct)) ? parseFloat(recoveryPct) : profile.defaultRecoveryPct)); // %

    const T_K = T_c + 273.15;
    const R_GAS_BAR = 0.0831446; // L·bar / (mol·K)

    // Sıcaklık viskozite düzeltmesi (20°C referansına göre su viskozitesi)
    const mu_rel = Math.exp(-0.0239 * (T_c - 20.0));
    const Lp_T = profile.pureWaterPermeabilityLp20 / mu_rel;

    // Madde derişimleri ve kütle dengesi
    const C_feed = profile.defaultFeedConcGL; // g/L
    const Y_frac = Y_target / 100.0;
    const CF = 1.0 / Math.max(0.01, 1.0 - Y_frac);
    const R_obs = profile.rejectionPct / 100.0;

    const C_perm = C_feed * (1.0 - R_obs);
    const C_ret = C_feed * (1.0 + (Y_frac / Math.max(0.01, 1.0 - Y_frac)) * R_obs);

    // Ozmotik basınç farkı (Van 't Hoff)
    const deltaC_mol_L = Math.max(0, (profile.vanTHoffFactor * (C_ret - C_perm)) / profile.soluteMW);
    const deltaPi_bar = deltaC_mol_L * R_GAS_BAR * T_K;

    // Net Sürücü Basınç (NDP = TMP - sigma * deltaPi)
    const sigma = profile.reflectionCoeff;
    const NDP_bar = Math.max(0.0, P_tmp - (sigma * deltaPi_bar));

    // Saf su akısı ve konsantrasyon polarizasyonu
    const J_pure = Lp_T * NDP_bar; // LMH (L / m²·h)
    const CP = Math.exp(J_pure / Math.max(1.0, profile.massTransferCoeffKd));
    // Polarizasyon ve kek tabakası düzeltilmiş gerçek akı:
    const J_actual = NDP_bar > 0.05 ? J_pure / (1.0 + 0.15 * Math.max(0, CP - 1.0)) : 0.0;

    // Debi hesaplamaları
    const Q_perm = J_actual * A_m; // L/h
    const actualRecoveryPct = Math.min(99.0, (Q_perm / Q_feed) * 100.0);
    const Q_ret = Math.max(0.1, Q_feed - Q_perm); // L/h

    // Pompa ve Enerji Analizi
    const Q_feed_m3_s = Q_feed / 3600000.0;
    const P_Pa = P_tmp * 1e5;
    const pumpEff = 0.75;
    const pumpPowerKW = (Q_feed_m3_s * P_Pa) / (pumpEff * 1000.0);
    const specificEnergyKWh_m3 = Q_perm > 0 ? (pumpPowerKW / (Q_perm / 1000.0)) : 0.0;

    // Emniyet ve Fouling Değerlendirmesi
    let foulingStatus = "";
    let foulingSeverity = "low";
    if (NDP_bar <= 0.5) {
      foulingSeverity = "high";
      foulingStatus = "🛑 YETERSİZ SÜRÜCÜ BASINÇ (Ozmotik Kilitlenme): Retentat ozmotik basıncı transmembran basınca eşitlendi; permeat akışı durma noktasında! TMP basıncını artırın veya geri kazanım oranını düşürün.";
    } else if (CP > 2.5) {
      foulingSeverity = "high";
      foulingStatus = "🔴 AŞIRI KONSANTRASYON POLARİZASYONU & JEL TABAKASI (CP > 2.5): Membran yüzeyinde partikül/jel keki oluşumu riski yüksek! Çapraz akış hızını (Cross-flow velocity) artırarak hidrodinamik süpürmeyi yükseltiniz.";
    } else if (CP > 1.8) {
      foulingSeverity = "medium";
      foulingStatus = "🟡 ORTA POLARİZASYON (1.8 < CP ≤ 2.5): Membran sınır tabakasında birikim başladı; periyodik ters yıkama (backwash) veya CIP temizliği önerilir.";
    } else {
      foulingSeverity = "low";
      foulingStatus = "🟢 İDEAL AKIŞ REJİMİ (CP ≤ 1.8): Çapraz akış süpürme kuvveti konsantrasyon polarizasyonunu sınır tabakada kontrol altında tutuyor; istikrarlı akı profili.";
    }

    return {
      profileName: profile.name,
      membraneType: profile.membraneType,
      mwco: profile.mwco,
      targetSolute: profile.soluteName,
      feedFlow_L_h: Math.round(Q_feed * 10) / 10,
      membraneArea_m2: A_m,
      transmembranePressureBar: P_tmp,
      tempC: T_c,
      feedConcGL: Math.round(C_feed * 100) / 100,
      retentateConcGL: Math.round(C_ret * 100) / 100,
      permeateConcGL: Math.round(C_perm * 1000) / 1000,
      rejectionPct: profile.rejectionPct,
      osmoticPressureBar: Math.round(deltaPi_bar * 100) / 100,
      netDrivingPressureBar: Math.round(NDP_bar * 100) / 100,
      permeateFluxLMH: Math.round(J_actual * 10) / 10,
      permeateFlowRate_L_h: Math.round(Q_perm * 10) / 10,
      permeateFlowRate_m3_h: Math.round((Q_perm / 1000.0) * 1000) / 1000,
      retentateFlowRate_L_h: Math.round(Q_ret * 10) / 10,
      actualRecoveryPct: Math.round(actualRecoveryPct * 10) / 10,
      concentrationFactor: Math.round(CF * 10) / 10,
      tempCorrectionFactor: Math.round((1.0 / mu_rel) * 100) / 100,
      concentrationPolarizationCP: Math.round(CP * 100) / 100,
      foulingEvaluation: foulingStatus,
      foulingSeverity: foulingSeverity,
      pumpPowerKW: Math.round(pumpPowerKW * 100) / 100,
      specificEnergyKWh_m3: Math.round(specificEnergyKWh_m3 * 100) / 100,
      substanceId: profile.substanceId,
      notes: profile.notes
    };
  }

  // =========================================================================
  // 25. BIOREACTOR & MICROBIAL FERMENTATION KINETICS BALANCER (MONOD & OTR)
  // =========================================================================
  const FERMENTATION_PROFILES = {
    "yeast_scerevisiae": {
      name: "Saccharomyces cerevisiae (Ekmek & Bira Mayası Biyokütlesi & Bioetanol)",
      organism: "Saccharomyces cerevisiae",
      organismType: "Ökaryotik Maya Mantarı (Fakültatif Anaerop)",
      muMax_h: 0.42,       // 1/h maximum specific growth rate
      Ks_g_L: 0.25,        // g/L Monod affinity constant (glucose)
      Y_xs: 0.50,          // g biomass / g substrate (glucose)
      Y_ps: 0.48,          // g product / g substrate (ethanol)
      qO2_mmol_g_h: 8.0,   // specific oxygen uptake rate
      optTempC: 30,
      tLag_h: 1.5,
      targetProduct: "Etanol & Biyokütle",
      productName: "Fermente Biyokütle & Etanol",
      substanceId: "sub-bio-yeast-biomass",
      defaultVolumeL: 100.0,
      defaultInoculumGL: 0.5,
      defaultSubstrateGL: 40.0,
      defaultResidualGL: 1.0,
      defaultAerationVVM: 1.0,
      notes: "Yüksek şeker konsantrasyonlarında Crabtree etkisiyle aerobik ortamda dahi glikoz fermantasyonuyla etanol sentezlenir."
    },
    "ecoli_recombinant": {
      name: "Escherichia coli (Rekombinant İnsülin / Somatropin Terapötik Protein)",
      organism: "Escherichia coli BL21(DE3)",
      organismType: "Gram Negatif Bakteri (Aerobik Ekspresyon)",
      muMax_h: 0.85,
      Ks_g_L: 0.15,
      Y_xs: 0.45,
      Y_ps: 0.08,
      qO2_mmol_g_h: 18.0,
      optTempC: 37,
      tLag_h: 0.8,
      targetProduct: "Rekombinant Human İnsülin",
      productName: "Rekombinant İnsülin Ham Biyokütlesi",
      substanceId: "sub-pharm-insulin",
      defaultVolumeL: 50.0,
      defaultInoculumGL: 0.8,
      defaultSubstrateGL: 30.0,
      defaultResidualGL: 0.5,
      defaultAerationVVM: 1.5,
      notes: "Hızlı büyüme fazında aşırı asetat birikimini önlemek için glikoz beslemesi eksponansiyel fed-batch rejimiyle kontrol edilir."
    },
    "penicillium_antibiotic": {
      name: "Penicillium chrysogenum (Penisilin G Antibiyotik Biyosentezi)",
      organism: "Penicillium chrysogenum",
      organismType: "Filamentöz Fungus / Küf Mantarı (Obligat Aerop)",
      muMax_h: 0.12,
      Ks_g_L: 0.40,
      Y_xs: 0.40,
      Y_ps: 0.14,
      qO2_mmol_g_h: 6.5,
      optTempC: 25,
      tLag_h: 6.0,
      targetProduct: "Penisilin G Antibiyotik",
      productName: "Penisilin G Fermentasyon Sıvısı",
      substanceId: "sub-pharm-penicillin",
      defaultVolumeL: 200.0,
      defaultInoculumGL: 1.0,
      defaultSubstrateGL: 50.0,
      defaultResidualGL: 2.0,
      defaultAerationVVM: 0.8,
      notes: "Penisilin ikincil bir metabolittir (idiophase); büyüme sınırlanıp glikoz yerini laktoz veya yavaş glikoz beslemesine bıraktığında biyosentez zirve yapar."
    },
    "lactobacillus_probiotic": {
      name: "Lactobacillus plantarum (Probiyotik & L-Laktik Asit Fermantasyonu)",
      organism: "Lactobacillus plantarum",
      organismType: "Gram Pozitif Laktik Bakteri (Mikroaerofilik)",
      muMax_h: 0.48,
      Ks_g_L: 0.30,
      Y_xs: 0.22,
      Y_ps: 0.85,
      qO2_mmol_g_h: 0.5,
      optTempC: 37,
      tLag_h: 1.2,
      targetProduct: "L-Laktik Asit & Canlı Probiyotik",
      productName: "Laktik Asit & Probiyotik Kültür",
      substanceId: "sub-bio-lactic-acid",
      defaultVolumeL: 100.0,
      defaultInoculumGL: 0.5,
      defaultSubstrateGL: 50.0,
      defaultResidualGL: 1.5,
      defaultAerationVVM: 0.2,
      notes: "Mikroaerofilik homofermentatif laktik asit bakterisidir; fermantasyon ortamı pH 5.5-6.0 civarında NaOH veya kireç sütü ile titre edilmelidir."
    },
    "aspergillus_citric": {
      name: "Aspergillus niger (Sitrik Asit Monohidrat Biyoproses)",
      organism: "Aspergillus niger",
      organismType: "Filamentöz Fungus (Pellet Morfolojisi)",
      muMax_h: 0.18,
      Ks_g_L: 0.50,
      Y_xs: 0.35,
      Y_ps: 0.72,
      qO2_mmol_g_h: 12.0,
      optTempC: 28,
      tLag_h: 4.0,
      targetProduct: "Sitrik Asit Monohidrat",
      productName: "Sitrik Asit Fermantasyon Şerbeti",
      substanceId: "sub-org-citric-acid",
      defaultVolumeL: 500.0,
      defaultInoculumGL: 0.6,
      defaultSubstrateGL: 120.0,
      defaultResidualGL: 5.0,
      defaultAerationVVM: 1.2,
      notes: "Yüksek sukroz veya pancar melası ortamında demir ve mangan kısıtlaması Krebs döngüsünü akonitaz aşamasında durdurarak aşırı sitrik asit birikimini tetikler."
    },
    "spirulina_phototroph": {
      name: "Arthrospira platensis (Spirulina Mavi Fikosiyanin & Tek Hücre Proteini)",
      organism: "Arthrospira platensis",
      organismType: "Alkalifilik Siyanobakteri / Mikroalg (Foto-ototrof)",
      muMax_h: 0.08,
      Ks_g_L: 0.10,
      Y_xs: 0.65,
      Y_ps: 0.18,
      qO2_mmol_g_h: -2.0, // net oxygen producer in light
      optTempC: 32,
      tLag_h: 8.0,
      targetProduct: "Doğal Mavi Fikosiyanin",
      productName: "Spirulina Biyokütlesi & Fikosiyanin",
      substanceId: "sub-bio-spirulina",
      defaultVolumeL: 250.0,
      defaultInoculumGL: 0.3,
      defaultSubstrateGL: 15.0, // NaHCO3 carbon source
      defaultResidualGL: 1.0,
      defaultAerationVVM: 0.5,
      notes: "Foto-ototrof ve alkalifilik siyanobakteridir; pH 9.0-10.5 aralığında inorganik bikarbonat beslemesi ve aydınlatma ile saf antioksidan protein sentezler."
    }
  };

  function calculateBioreactorFermentation(profileKey, workingVolumeL, initialBiomassGL, initialSubstrateGL, residualSubstrateGL, aerationVVM, tempC) {
    const profile = FERMENTATION_PROFILES[profileKey] || FERMENTATION_PROFILES["yeast_scerevisiae"];

    const V_L = Math.max(0.5, Math.min(50000.0, parseFloat(workingVolumeL) || profile.defaultVolumeL)); // L
    const X_0 = Math.max(0.01, Math.min(50.0, parseFloat(initialBiomassGL) || profile.defaultInoculumGL)); // g/L
    const S_0 = Math.max(1.0, Math.min(300.0, parseFloat(initialSubstrateGL) || profile.defaultSubstrateGL)); // g/L
    let S_f = Math.max(0.01, Math.min(S_0 * 0.9, parseFloat(residualSubstrateGL) !== undefined && !isNaN(parseFloat(residualSubstrateGL)) ? parseFloat(residualSubstrateGL) : profile.defaultResidualGL)); // g/L
    if (S_f >= S_0) S_f = S_0 * 0.1;
    const vvm = Math.max(0.0, Math.min(4.0, parseFloat(aerationVVM) !== undefined && !isNaN(parseFloat(aerationVVM)) ? parseFloat(aerationVVM) : profile.defaultAerationVVM)); // vvm
    const T_c = Math.max(15.0, Math.min(50.0, parseFloat(tempC) || profile.optTempC)); // °C

    // 1. Monod kinetik büyüme hızı:
    const deltaT = Math.abs(T_c - profile.optTempC);
    const tempInactivation = Math.exp(-0.04 * deltaT * deltaT);
    const mu_eff = profile.muMax_h * (S_0 / (profile.Ks_g_L + S_0)) * tempInactivation;
    const doublingTimeHours = Math.log(2) / Math.max(0.001, mu_eff);

    // 2. Tüketilen substrat ve biyokütle / ürün oluşumu
    const deltaS = S_0 - S_f; // g/L
    const X_produced = profile.Y_xs * deltaS; // g/L
    const X_final = X_0 + X_produced; // g/L
    const totalBiomassKg = (X_final * V_L) / 1000.0; // kg

    const P_final = profile.Y_ps * deltaS; // g/L
    const totalProductKg = (P_final * V_L) / 1000.0; // kg
    const totalProductG = P_final * V_L; // g

    // 3. Fermantasyon süresi (Logaritmik büyüme + Monod doygunluk integrali + Lag süresi)
    const growthTerm = (1.0 / Math.max(0.01, mu_eff)) * Math.log(Math.max(1.01, X_final / X_0));
    const substrateTerm = (profile.Ks_g_L / Math.max(0.01, mu_eff * S_0)) * Math.log(Math.max(1.05, S_0 / S_f));
    const batchDurationHours = profile.tLag_h + growthTerm + substrateTerm;

    // 4. Çözünmüş Oksijen (DO) ve Gaz Kütle Transferi (OTR & OUR)
    const C_star_mmol_L = 0.25 * (1.0 - 0.015 * (T_c - 25.0));
    const kLa_h = vvm > 0 ? (35.0 * Math.pow(vvm, 0.75) * 1.5) : 5.0; // 1/h
    const OTR_max_mmol_L_h = kLa_h * C_star_mmol_L; // mmol O2 / (L·h)
    const OUR_max_mmol_L_h = Math.max(0, profile.qO2_mmol_g_h * X_final); // mmol O2 / (L·h)

    let DO_pct = 100.0;
    if (vvm === 0 && profile.qO2_mmol_g_h > 0) {
      DO_pct = 0.0;
    } else if (profile.qO2_mmol_g_h <= 0) {
      DO_pct = 100.0; // Algler gündüz fotosentezle oksijen üretir
    } else {
      DO_pct = Math.max(0.0, Math.min(100.0, ((OTR_max_mmol_L_h - OUR_max_mmol_L_h) / Math.max(1.0, OTR_max_mmol_L_h)) * 100.0));
    }

    // 5. Metabolik Isı Üretimi ve Ceket Soğutma Gücü (Cooney-Wang: 460 kJ / mol O2)
    const totalOxygenDemand_mol_h = (OUR_max_mmol_L_h * V_L) / 1000.0; // mol O2 / h
    const metabolicHeatKW = Math.max(0, (totalOxygenDemand_mol_h * 460.0) / 3600.0); // kW

    // Hava debisi
    const airFlow_L_min = vvm * V_L; // L/min
    const airFlow_m3_h = (airFlow_L_min * 60.0) / 1000.0; // m³/h

    // 6. Emniyet, Havalandırma ve Köpük Değerlendirmesi
    let bioStatus = "";
    let bioSeverity = "low";

    if (DO_pct < 15.0 && profile.qO2_mmol_g_h > 0) {
      bioSeverity = "high";
      bioStatus = "🛑 KRİTİK OKSİJEN YETERSİZLİĞİ (Hipoksi / Anoksi Riski): Çözünmüş oksijen %15'in altına düştü! Hücre solunumu durabilir. Havalandırma debisini (vvm) ve karıştırıcı devrini artırın veya saf O2 zenginleştirmesi yapın.";
    } else if (DO_pct < 30.0 && profile.qO2_mmol_g_h > 0) {
      bioSeverity = "medium";
      bioStatus = "🟡 DÜŞÜK OKSİJEN SINIRI (DO %15 - %30): Hücreler oksijen sınırlı metabolizmaya girmek üzere; laktat/asetat gibi yan ürün birikimini önlemek için kLa transferini yükseltiniz.";
    } else if (metabolicHeatKW > 10.0) {
      bioSeverity = "medium";
      bioStatus = `🟡 YÜKSEK METABOLİK ISI SALINIMI (${Math.round(metabolicHeatKW * 10) / 10} kW): Biyoreaktör ceketi ve iç serpantinden yoğun soğutma suyu sirkülasyonu gereklidir.`;
    } else {
      bioSeverity = "low";
      bioStatus = "🟢 İDEAL AEROBİK BÜYÜME REJİMİ: Çözünmüş oksijen seviyesi (DO > %30), spesifik büyüme hızı ve kLa oksijen transfer dengesi kusursuz.";
    }

    return {
      profileName: profile.name,
      organism: profile.organism,
      organismType: profile.organismType,
      workingVolumeL: V_L,
      tempC: T_c,
      initialBiomassGL: X_0,
      initialSubstrateGL: S_0,
      residualSubstrateGL: Math.round(S_f * 100) / 100,
      substrateConsumedGL: Math.round(deltaS * 100) / 100,
      finalBiomassGL: Math.round(X_final * 100) / 100,
      totalBiomassKg: Math.round(totalBiomassKg * 1000) / 1000,
      targetProduct: profile.targetProduct,
      productName: profile.productName,
      finalProductGL: Math.round(P_final * 100) / 100,
      totalProductG: Math.round(totalProductG * 10) / 10,
      totalProductKg: Math.round(totalProductKg * 1000) / 1000,
      muSpecificGrowthRate: Math.round(mu_eff * 1000) / 1000,
      doublingTimeHours: Math.round(doublingTimeHours * 10) / 10,
      batchDurationHours: Math.round(batchDurationHours * 10) / 10,
      aerationVVM: vvm,
      airFlowRate_m3_h: Math.round(airFlow_m3_h * 100) / 100,
      kLa_h: Math.round(kLa_h * 10) / 10,
      dissolvedOxygenPct: Math.round(DO_pct * 10) / 10,
      metabolicHeatKW: Math.round(metabolicHeatKW * 100) / 100,
      bioStatus: bioStatus,
      bioSeverity: bioSeverity,
      substanceId: profile.substanceId,
      notes: profile.notes
    };
  }

  // =========================================================================
  // 26. ELECTROCHEMICAL CELL, GALVANIC CORROSION & FARADAY ELECTROLYSIS BALANCER
  // =========================================================================
  const ELECTROCHEMICAL_CELL_PROFILES = {
    "cu_acid_plating": {
      name: "Asidik Bakır Elektrokaplama & Galvanoplasti (Cu2+ + 2e- ➔ Cu)",
      metalName: "Metalik Bakır (Cu)",
      ionSymbol: "Cu²⁺",
      standardPotentialV: 0.34,
      electronsZ: 2,
      atomicMass: 63.55,
      densityG_cm3: 8.96,
      faradaicEfficiencyPct: 98.0,
      minCurrentDensity_A_dm2: 1.5,
      maxCurrentDensity_A_dm2: 5.0,
      defaultCurrentA: 5.0,
      defaultTimeMin: 30.0,
      defaultAreaCm2: 150.0,
      defaultVoltageV: 2.5,
      optTempC: 25.0,
      substanceId: "sub-elem-copper",
      notes: "Parlak ve pürüzsüz bakır kaplama; PCB baskılı devre yolları ve dekoratif nikel/krom altı korozyon bariyeri için endüstri standardıdır."
    },
    "zn_galvanizing": {
      name: "Çinko Galvaniz Kaplama & Korozyon Koruması (Zn2+ + 2e- ➔ Zn)",
      metalName: "Metalik Çinko (Zn)",
      ionSymbol: "Zn²⁺",
      standardPotentialV: -0.76,
      electronsZ: 2,
      atomicMass: 65.38,
      densityG_cm3: 7.14,
      faradaicEfficiencyPct: 92.0,
      minCurrentDensity_A_dm2: 1.0,
      maxCurrentDensity_A_dm2: 4.0,
      defaultCurrentA: 4.0,
      defaultTimeMin: 20.0,
      defaultAreaCm2: 200.0,
      defaultVoltageV: 3.2,
      optTempC: 30.0,
      substanceId: "sub-elem-zinc",
      notes: "Demir ve çelik parçaların atmosferik paslanmasını önleyen kurban anot mekanizmalı elektro-galvaniz banyosu."
    },
    "ni_watts_bath": {
      name: "Watts Banyosu Parlak Nikel Kaplama (Ni2+ + 2e- ➔ Ni)",
      metalName: "Metalik Nikel (Ni)",
      ionSymbol: "Ni²⁺",
      standardPotentialV: -0.26,
      electronsZ: 2,
      atomicMass: 58.69,
      densityG_cm3: 8.90,
      faradaicEfficiencyPct: 95.0,
      minCurrentDensity_A_dm2: 2.0,
      maxCurrentDensity_A_dm2: 6.0,
      defaultCurrentA: 6.0,
      defaultTimeMin: 25.0,
      defaultAreaCm2: 150.0,
      defaultVoltageV: 4.0,
      optTempC: 50.0,
      substanceId: "sub-elem-nickel",
      notes: "Otomotiv ve armatür sanayiinde aşınma direnci ve ayna parlaklığı sağlayan nikel sülfat / klorür bazlı elektrokaplama."
    },
    "ag_jewelry_plating": {
      name: "Gümüş Elektrokaplama & Takı Yaldızlama (Ag+ + e- ➔ Ag)",
      metalName: "Saf Gümüş (Ag)",
      ionSymbol: "Ag⁺",
      standardPotentialV: 0.80,
      electronsZ: 1,
      atomicMass: 107.87,
      densityG_cm3: 10.49,
      faradaicEfficiencyPct: 99.0,
      minCurrentDensity_A_dm2: 0.5,
      maxCurrentDensity_A_dm2: 2.0,
      defaultCurrentA: 1.5,
      defaultTimeMin: 15.0,
      defaultAreaCm2: 100.0,
      defaultVoltageV: 1.8,
      optTempC: 25.0,
      substanceId: "sub-elem-silver",
      notes: "Elektronik kontaklar ve lüks takı tasarımında yüksek elektriksel ve optik yansıtıcılık sağlayan tek valanslı gümüş kaplama."
    },
    "chlor_alkali_membrane": {
      name: "Klor-Alkali Membran Elektrolizi (2 Cl- + 2 H2O ➔ Cl2 + H2 + 2 OH-)",
      metalName: "Kostik Soda (NaOH) & Gaz Ürünler",
      ionSymbol: "Cl⁻ / Na⁺",
      standardPotentialV: -2.19,
      electronsZ: 2,
      atomicMass: 70.90,
      densityG_cm3: 1.50,
      faradaicEfficiencyPct: 94.0,
      minCurrentDensity_A_dm2: 10.0,
      maxCurrentDensity_A_dm2: 40.0,
      defaultCurrentA: 25.0,
      defaultTimeMin: 60.0,
      defaultAreaCm2: 100.0,
      defaultVoltageV: 3.5,
      optTempC: 85.0,
      substanceId: "sub-alk-caustic-soda",
      notes: "Sanayinin en kritik elektrokimyasal prosesi; doymuş tuzlu sudan klor gazı, hidrojen yakıtı ve %32'lik saf kostik soda üretir."
    },
    "mg_sacrificial_anode": {
      name: "Magnezyum Kurban Anot Katodik Koruma (Mg ➔ Mg2+ + 2e-)",
      metalName: "Aşınan Kurban Magnezyum (Mg)",
      ionSymbol: "Mg²⁺",
      standardPotentialV: -2.37,
      electronsZ: 2,
      atomicMass: 24.31,
      densityG_cm3: 1.74,
      faradaicEfficiencyPct: 55.0,
      minCurrentDensity_A_dm2: 0.05,
      maxCurrentDensity_A_dm2: 0.5,
      defaultCurrentA: 0.5,
      defaultTimeMin: 1440.0,
      defaultAreaCm2: 500.0,
      defaultVoltageV: 0.8,
      optTempC: 20.0,
      substanceId: "sub-elem-magnesium",
      notes: "Gemi tekneleri, yeraltı boru hatları ve termosifon kazanlarını paslanmaktan koruyan elektro-galvanik kurban anot tüketimi."
    }
  };

  function calculateElectrochemicalCell(profileKey, currentAmps, platingTimeMin, cathodeAreaCm2, cellVoltageV, tempC) {
    const profile = ELECTROCHEMICAL_CELL_PROFILES[profileKey] || ELECTROCHEMICAL_CELL_PROFILES["cu_acid_plating"];

    const I_A = Math.max(0.01, Math.min(5000.0, parseFloat(currentAmps) || profile.defaultCurrentA)); // Amperes
    const t_min = Math.max(0.1, Math.min(10080.0, parseFloat(platingTimeMin) || profile.defaultTimeMin)); // Minutes
    const A_cm2 = Math.max(1.0, Math.min(100000.0, parseFloat(cathodeAreaCm2) || profile.defaultAreaCm2)); // cm²
    const V_cell = Math.max(0.2, Math.min(48.0, parseFloat(cellVoltageV) || profile.defaultVoltageV)); // Volts
    const T_c = Math.max(10.0, Math.min(95.0, parseFloat(tempC) || profile.optTempC)); // °C

    const T_K = T_c + 273.15;
    const F_CONST = 96485.33; // C / mol
    const t_sec = t_min * 60.0;

    // 1. Akım Yoğunluğu (Current Density)
    const A_dm2 = A_cm2 / 100.0; // 1 dm² = 100 cm²
    const J_A_dm2 = I_A / A_dm2;

    // 2. Faraday Elektroliz Yasası
    const m_theo_g = (I_A * t_sec * profile.atomicMass) / (profile.electronsZ * F_CONST);
    const eta_faradaic = profile.faradaicEfficiencyPct / 100.0;
    const m_actual_g = m_theo_g * eta_faradaic;
    const m_actual_kg = m_actual_g / 1000.0;

    // 3. Kaplama Hacmi ve Mikron Cinsinden Kalınlık
    const vol_cm3 = m_actual_g / profile.densityG_cm3;
    const thickness_um = (vol_cm3 / A_cm2) * 10000.0;

    // 4. Nernst Denge Potansiyeli ve Sıcaklık Kayması
    const nernstPotentialV = profile.standardPotentialV + (0.00025 * (T_K - 298.15));

    // 5. Elektriksel Güç ve Enerji Tüketimi
    const powerWatts = V_cell * I_A;
    const energyKWh = (powerWatts * (t_min / 60.0)) / 1000.0;
    const specificEnergyKWh_kg = m_actual_kg > 0 ? (energyKWh / m_actual_kg) : 0.0;

    // 6. Emniyet ve Akım Yoğunluğu Teşhisi
    let statusText = "";
    let severity = "low";

    if (J_A_dm2 > profile.maxCurrentDensity_A_dm2 * 1.5) {
      severity = "high";
      statusText = `🔴 ŞİDDETLİ YANMA & HİDROJEN ÇIKIŞI (J = ${Math.round(J_A_dm2 * 10) / 10} A/dm² > ${profile.maxCurrentDensity_A_dm2}): Aşırı yüksek akım yoğunluğu! Katot köşelerinde yanık, siyah süngerimsi metal çökeltisi ve yoğun hidrojen gazı kabarması oluşur. Akımı düşürünüz.`;
    } else if (J_A_dm2 > profile.maxCurrentDensity_A_dm2) {
      severity = "medium";
      statusText = `🟡 SINIR ÜSTÜ AKIM YOĞUNLUĞU (${Math.round(J_A_dm2 * 10) / 10} A/dm²): İnce detaylarda pürüzlenme ve kristal irileşmesi riski; katot hareket mekanizması veya hava ajitasyonu önerilir.`;
    } else if (J_A_dm2 < profile.minCurrentDensity_A_dm2 * 0.5) {
      severity = "medium";
      statusText = `🟡 YETERSİZ AKIM YOĞUNLUĞU (${Math.round(J_A_dm2 * 10) / 10} A/dm² < ${profile.minCurrentDensity_A_dm2}): Kaplama hızı çok yavaş; çökelti mat ve donuk kalabilir.`;
    } else {
      severity = "low";
      statusText = `🟢 İDEAL PARLAK ELEKTROKAPLAMA REJİMİ: Akım yoğunluğu (${Math.round(J_A_dm2 * 10) / 10} A/dm²) çalışma aralığında; homojen, parlak ve mikro-çatlaksız metal birikimi.`;
    }

    return {
      profileName: profile.name,
      metalName: profile.metalName,
      ionSymbol: profile.ionSymbol,
      currentAmps: I_A,
      platingTimeMin: t_min,
      cathodeAreaCm2: A_cm2,
      cathodeAreaDm2: Math.round(A_dm2 * 100) / 100,
      cellVoltageV: V_cell,
      tempC: T_c,
      currentDensity_A_dm2: Math.round(J_A_dm2 * 100) / 100,
      theoreticalMassG: Math.round(m_theo_g * 100) / 100,
      actualMassG: Math.round(m_actual_g * 100) / 100,
      actualMassKg: Math.round(m_actual_kg * 1000) / 1000,
      coatingThicknessUm: Math.round(thickness_um * 10) / 10,
      faradaicEfficiencyPct: profile.faradaicEfficiencyPct,
      standardPotentialV: profile.standardPotentialV,
      nernstPotentialV: Math.round(nernstPotentialV * 1000) / 1000,
      powerWatts: Math.round(powerWatts * 10) / 10,
      energyKWh: Math.round(energyKWh * 1000) / 1000,
      specificEnergyKWh_kg: Math.round(specificEnergyKWh_kg * 100) / 100,
      diagnosticStatus: statusText,
      diagnosticSeverity: severity,
      substanceId: profile.substanceId,
      notes: profile.notes
    };
  }

  // =========================================================================
  // 27. FLUIDIZED BED GRANULATION, DRYING & WURSTER COATING BALANCER
  // =========================================================================
  const FLUIDIZED_BED_PROFILES = {
    "pharma_wet_granulation": {
      name: "İlaç Tableti Yaş Granülasyonu & Kurutma (Parasetamol/Laktoz + PVP K30)",
      processType: "Top-Spray Yaş Granülasyon & Kurutma",
      productDescription: "Parasetamol / Laktoz monohidrat tablet basım granülü",
      initialDpUm: 120.0,
      particleDensityKgM3: 1350.0,
      bedDiameterM: 0.40,
      defaultBatchMassKg: 25.0,
      binderSolidPct: 10.0,
      defaultSprayRateGMin: 50.0,
      optInletTempC: 65.0,
      optVelocityFactor: 2.2,
      targetResidualMoisturePct: 1.8,
      substanceId: "sub-pharm-granules-paracetamol",
      notes: "İnce toz halindeki parasetamol ve süt şekerini (laktoz) PVP K30 polimeriyle birleştirerek mükemmel akışkanlığa ve homojen tablet basım sertliğine sahip mikro-granüllere dönüştürür."
    },
    "wurster_pellet_coating": {
      name: "Wurster Taban Spreyi Enterik Pelet Kaplama (Eudragit L30D-55)",
      processType: "Wurster Bottom-Spray Hassas Film Kaplama",
      productDescription: "Mide asidine dirençli enterik film kaplı peletler",
      initialDpUm: 800.0,
      particleDensityKgM3: 1500.0,
      bedDiameterM: 0.30,
      defaultBatchMassKg: 15.0,
      binderSolidPct: 20.0,
      defaultSprayRateGMin: 20.0,
      optInletTempC: 45.0,
      optVelocityFactor: 2.5,
      targetResidualMoisturePct: 1.0,
      substanceId: "sub-pharm-pellets-enteric",
      notes: "Wurster kılavuz silindiri içindeki hızlandırılmış hava jetiyle sirküle olan nötr sukroz veya etken madde peletleri üzerine, mide asidinde çözünmeyen bağırsak hedefli pH 5.5+ enterik polimer filmi giydirir."
    },
    "effervescent_granulation": {
      name: "Efervesan Toz Granülasyonu & Kurutma (Sitrik Asit + Sodyum Bikarbonat)",
      processType: "Kontrollü Yaş Granülasyon & Hızlı Vakumlu Kurutma",
      productDescription: "Suda köpüren stabil efervesan granül",
      initialDpUm: 180.0,
      particleDensityKgM3: 1600.0,
      bedDiameterM: 0.50,
      defaultBatchMassKg: 50.0,
      binderSolidPct: 5.0,
      defaultSprayRateGMin: 45.0,
      optInletTempC: 75.0,
      optVelocityFactor: 2.0,
      targetResidualMoisturePct: 0.3,
      substanceId: "sub-pharm-effervescent-granule",
      notes: "Erken gaz çıkışını önlemek amacıyla hava bağıl nemi <%20 tutulan iklimlendirilmiş akışkan yatakta çok hızlı sprey ve flaş buharlaştırma ile üretilen hassas efervesan granül."
    },
    "food_agglomeration_instant": {
      name: "Hazır İçecek & Kahve/Kakao Hızlı Çözünürlük Aglomerasyonu (Instantization)",
      processType: "Gıda Tozu Top-Spray Aglomerasyonu",
      productDescription: "Sıcak/soğuk suda anında çözünen gözenekli hazır toz",
      initialDpUm: 45.0,
      particleDensityKgM3: 1100.0,
      bedDiameterM: 0.60,
      defaultBatchMassKg: 40.0,
      binderSolidPct: 8.0,
      defaultSprayRateGMin: 80.0,
      optInletTempC: 70.0,
      optVelocityFactor: 2.4,
      targetResidualMoisturePct: 2.5,
      substanceId: "sub-food-instant-powder",
      notes: "Hidrofobik ince kakao veya kahve tozlarını gözenekli salkımlara dönüştürerek su yüzeyinde topaklanmadan (fish-eyes) anında batmasını ve saniyeler içinde çözünmesini sağlar."
    },
    "detergent_zeolite_granulation": {
      name: "Deterjan Zeolit & Enzim Granülasyonu (Tozsuzlaştırma & Dayanım)",
      processType: "Yüksek Mukavemetli Sürekli/Kesikli Granülasyon",
      productDescription: "Aşınmaya dayanıklı, tozsuz aktif deterjan granülü",
      initialDpUm: 90.0,
      particleDensityKgM3: 1400.0,
      bedDiameterM: 0.50,
      defaultBatchMassKg: 60.0,
      binderSolidPct: 15.0,
      defaultSprayRateGMin: 90.0,
      optInletTempC: 80.0,
      optVelocityFactor: 2.2,
      targetResidualMoisturePct: 3.0,
      substanceId: "sub-ind-detergent-granules",
      notes: "İnce zeolit ve hassas enzim tozlarını polikarboksilat ve silikat bağlayıcılarla kaplayarak paketleme ve taşıma sırasında tozuma yapmayan sert granüllere dönüştürür."
    },
    "catalyst_fluidized_drying": {
      name: "Poröz Katalizör Taşıyıcı Kürecik Kurutma (Alümina / Silika Küreler)",
      processType: "Termal Akışkan Yataklı Desorpsiyon & Kurutma",
      productDescription: "Katalitik metal emdirilmiş gözenekli kürecikler",
      initialDpUm: 1500.0,
      particleDensityKgM3: 1750.0,
      bedDiameterM: 0.40,
      defaultBatchMassKg: 30.0,
      binderSolidPct: 0.0,
      defaultSprayRateGMin: 0.0,
      optInletTempC: 95.0,
      optVelocityFactor: 1.8,
      targetResidualMoisturePct: 0.5,
      substanceId: "sub-chem-catalyst-spheres",
      notes: "Heterojen katalizör küreciklerinin iç gözenek yapısını ve spesifik yüzey alanını (BET) bozmadan homojen termal sıvı desorpsiyonu sağlayan yüksek sıcaklık akışkan yatak kurutması."
    }
  };

  function calculateFluidizedBed(profileKey, batchMassKg, initialDpUm, inletTempC, airVelocityFactor, sprayRateGMin, processTimeMin) {
    const profile = FLUIDIZED_BED_PROFILES[profileKey] || FLUIDIZED_BED_PROFILES["pharma_wet_granulation"];

    const M_bed_kg = Math.max(0.5, Math.min(2000.0, parseFloat(batchMassKg) || profile.defaultBatchMassKg));
    const dp_um = Math.max(10.0, Math.min(5000.0, parseFloat(initialDpUm) || profile.initialDpUm));
    const T_in_c = Math.max(20.0, Math.min(160.0, parseFloat(inletTempC) || profile.optInletTempC));
    const k_u = Math.max(0.01, Math.min(8.0, airVelocityFactor !== undefined ? parseFloat(airVelocityFactor) : profile.optVelocityFactor));
    const spray_g_min = Math.max(0.0, Math.min(1000.0, sprayRateGMin !== undefined ? parseFloat(sprayRateGMin) : profile.defaultSprayRateGMin));
    const t_min = Math.max(1.0, Math.min(480.0, parseFloat(processTimeMin) || 30.0));

    const D_bed_m = profile.bedDiameterM;
    const A_bed_m2 = Math.PI * Math.pow(D_bed_m / 2.0, 2);
    const rho_p = profile.particleDensityKgM3;

    // 1. Akışkanlaştırıcı Gaz Termofiziksel Özellikleri (Giriş Sıcaklığı)
    const T_in_K = T_in_c + 273.15;
    const rho_g = 101325.0 / (287.05 * T_in_K); // kg/m³
    const mu_g = 1.716e-5 * Math.pow(T_in_K / 273.15, 0.76); // Pa·s

    // 2. Archimedes Sayısı (Ar) ve Minimum Akışkanlaşma Hızı (Umf) - Wen & Yu Korelasyonu
    const dp_m = dp_um * 1e-6; // metre
    const g = 9.81;
    const Ar = (Math.pow(dp_m, 3) * rho_g * (rho_p - rho_g) * g) / Math.pow(mu_g, 2);

    const C1 = 33.7;
    const C2 = 0.0408;
    const Re_mf = Math.sqrt(C1 * C1 + C2 * Ar) - C1;
    const U_mf = (Re_mf * mu_g) / (dp_m * rho_g); // m/s

    // 3. Terminal Taşınma Hızı (Ut) - Haider & Levenspiel (Aglomere Granül Durumu)
    const dpGranule_m = Math.max(dp_m * 2.5, 300e-6);
    const ArGranule = (Math.pow(dpGranule_m, 3) * rho_g * (rho_p - rho_g) * g) / Math.pow(mu_g, 2);
    const dStar = Math.pow(ArGranule, 1.0 / 3.0);
    const phi_s = 0.85; // Küresellik
    const uStar = 1.0 / (18.0 / (dStar * dStar) + (2.335 - 1.744 * phi_s) / Math.sqrt(dStar));
    const U_t = uStar * Math.pow((rho_g * rho_g) / (g * mu_g * (rho_p - rho_g)), -1.0 / 3.0); // m/s

    // 4. Çalışma Yüzeyel Gaz Hızı (Uo) ve Hava Debisi
    const U_nominal = Math.max(0.55, U_mf * 2.0);
    const U_o = U_nominal * (k_u / 2.0); // m/s
    const airFlow_m3_s = U_o * A_bed_m2;
    const airFlow_m3_h = airFlow_m3_s * 3600.0;
    const airFlow_cfm = airFlow_m3_h / 1.699;
    const airMassFlow_kg_h = airFlow_m3_h * rho_g;

    // 5. Termal Kurutma & Buharlaşma Kapasitesi
    const Cp_air = 1.005; // kJ/(kg·K)
    const DeltaH_vap = 2400.0; // kJ/kg su
    const T_exhaust_c = Math.max(26.0, T_in_c - (14.0 + 12.0 * (spray_g_min / 100.0)));
    const deltaT = T_in_c - T_exhaust_c;

    const evapCap_kg_h = (airMassFlow_kg_h * Cp_air * deltaT) / DeltaH_vap;
    const evapCap_g_min = (evapCap_kg_h * 1000.0) / 60.0;

    // Islanma / Kuruma Oranı (Wetting Ratio)
    const wettingRatio = evapCap_g_min > 0.01 ? (spray_g_min / evapCap_g_min) : 0.0;

    // 6. Sıvı Püskürtme, Katı Madde Alımı ve Granül Büyümesi
    const totalLiquidKg = (spray_g_min * t_min) / 1000.0;
    const binderSolidsKg = totalLiquidKg * (profile.binderSolidPct / 100.0);
    const finalBatchMassKg = M_bed_kg + binderSolidsKg;

    let finalDpUm = dp_um;
    let coatingThicknessUm = 0.0;

    if (profileKey === "wurster_pellet_coating") {
      const totalArea_m2 = (6.0 * M_bed_kg) / (rho_p * dp_m);
      const filmDensity_kg_m3 = 1200.0;
      coatingThicknessUm = totalArea_m2 > 0 ? (binderSolidsKg / (totalArea_m2 * filmDensity_kg_m3)) * 1e6 : 0.0;
      finalDpUm = dp_um + (coatingThicknessUm * 2.0);
    } else if (profile.binderSolidPct > 0 && spray_g_min > 0) {
      const growthFactor = 1.0 + 3.8 * (binderSolidsKg / M_bed_kg);
      finalDpUm = Math.min(3000.0, dp_um * Math.pow(growthFactor, 1.25));
    }

    // 7. Isıtıcı ve Fan Güç İhtiyacı
    const ambientTempC = 20.0;
    const heaterPowerKW = (airMassFlow_kg_h * Cp_air * (T_in_c - ambientTempC)) / 3600.0;
    const deltaP_bed_Pa = (M_bed_kg * g) / A_bed_m2 + 1500.0;
    const blowerPowerKW = (airFlow_m3_s * deltaP_bed_Pa) / (0.65 * 1000.0);

    // 8. Rejim ve Teşhis Değerlendirmesi
    let regime = "İdeal Kabarcıklı Akışkan Yatak";
    let severity = "low";
    let statusText = "🟢 İDEAL AKIŞKANLAŞMA & KURUTMA REJİMİ: Gaz hızı (Uo) minimum akışkanlaşma ile taşınma hızları arasında dengeli; aglomerasyon homojen ve yatak stabilitesi kusursuz.";

    if (U_o < U_mf) {
      regime = "Statik Yatak (Defluidized / Kanallaşma)";
      severity = "high";
      statusText = "🛑 YETERSİZ HAVA HIZI (Kanallaşma Riski): Yüzeyel gaz hızı (Uo) minimum akışkanlaşma hızının (Umf) altındadır! Partiküller tabanda hareketsiz kalır ve gaz kanalları açılarak kuruma durur. Hava debisini artırınız.";
    } else if (U_o > 0.90 * U_t) {
      regime = "Aşırı Gaz Hızı (Pnömatik Taşınma / Kaçak)";
      severity = "high";
      statusText = "🔴 AŞIRI HAVA HIZI (Toz Sürüklenmesi & Filtre Tıkanması): Gaz hızı terminal taşınma hızına (Ut) çok yakın! İnce partiküller yataktan fırlayarak torba filtreleri tıkayabilir. Hava debisini düşürünüz.";
    } else if (wettingRatio > 1.35) {
      regime = "Aşırı Islak Yatak (Çamurlaşma Riski)";
      severity = "high";
      statusText = "⚠️ AŞIRI ISLANMA & ÇÖKME UYARISI (Defluidization): Sıvı püskürtme hızı havanın buharlaştırma kapasitesini aşıyor! Yatakta aşırı yapışkanlık, dev topaklar ve akışkanlığın aniden çökme riski vardır. Sprey hızını düşürünüz veya giriş havasını ısıtınız.";
    } else if (wettingRatio < 0.35 && spray_g_min > 0) {
      regime = "Aşırı Kuru Yatak (Püskürtmeli Kuruma)";
      severity = "medium";
      statusText = "🟡 AŞIRI HIZLI KURUMA (Sprey Kuruma Kaybı): Yatak havası çok sıcak veya sprey debisi düşük; bağlayıcı damlacıkları partiküle ulaşamadan havada kuruyup toz haline geliyor. Sprey hızını artırınız.";
    }

    return {
      profileName: profile.name,
      processType: profile.processType,
      productDescription: profile.productDescription,
      batchMassKg: M_bed_kg,
      finalBatchMassKg: Math.round(finalBatchMassKg * 100) / 100,
      initialDpUm: Math.round(dp_um * 10) / 10,
      finalDpUm: Math.round(finalDpUm * 10) / 10,
      coatingThicknessUm: Math.round(coatingThicknessUm * 10) / 10,
      inletTempC: T_in_c,
      exhaustTempC: Math.round(T_exhaust_c * 10) / 10,
      u_mf_ms: Math.round(U_mf * 1000) / 1000,
      u_terminal_ms: Math.round(U_t * 100) / 100,
      superficialVelocity_ms: Math.round(U_o * 1000) / 1000,
      velocityFactor: Math.round(k_u * 10) / 10,
      airFlowRate_m3_h: Math.round(airFlow_m3_h * 10) / 10,
      airFlowRate_cfm: Math.round(airFlow_cfm * 10) / 10,
      sprayRate_g_min: spray_g_min,
      evaporativeCapacity_g_min: Math.round(evapCap_g_min * 10) / 10,
      wettingRatio: Math.round(wettingRatio * 100) / 100,
      processTimeMin: t_min,
      totalLiquidSprayedKg: Math.round(totalLiquidKg * 100) / 100,
      binderSolidsAddedKg: Math.round(binderSolidsKg * 100) / 100,
      heaterPowerKW: Math.round(heaterPowerKW * 10) / 10,
      blowerPowerKW: Math.round(blowerPowerKW * 100) / 100,
      fluidizationRegime: regime,
      diagnosticStatus: statusText,
      diagnosticSeverity: severity,
      targetResidualMoisturePct: profile.targetResidualMoisturePct,
      bedDiameterM: D_bed_m,
      substanceId: profile.substanceId,
      notes: profile.notes
    };
  }

  // =========================================================================
  // EXPORT MODULE TO GLOBAL
  // =========================================================================
  global.LabWizard = {
    SAP_OILS,
    ESSENTIAL_PLANTS,
    BIOACTIVE_EXTRACTIONS,
    EXTRACTION_SOLVENTS,
    EXTRACTION_METHODS,
    OINTMENT_BASES,
    COSMETIC_OILS_HLB,
    EMULSIFIERS_HLB,
    SALTS_SOLUBILITY,
    REACTION_THERMODYNAMICS,
    BUFFER_SYSTEMS,
    TRANSDERMAL_ACTIVES,
    TRANSDERMAL_VEHICLES,
    FREEZE_DRY_SOLUTES,
    PARTITION_SOLUTES,
    EXTRACTION_SOLVENT_PROFILES,
    OSMOTIC_SOLUTES,
    DISTILLATION_BINARY_SYSTEMS,
    PACKING_TYPES,
    TRADITIONAL_CHEM_DICTIONARY,
    CASCADE_PATHWAYS,
    CONDENSER_SOLVENTS,
    EXTRACTION_BOTANICAL_PROFILES,
    EXTRACTION_PARTICLE_SIZES,
    GAS_ABSORPTION_SPECIES,
    HYDROGEL_POLYMER_PROFILES,
    ADSORBENT_PROFILES,
    FILTRATION_SLURRY_PROFILES,
    SPRAY_DRYING_PROFILES,
    SUPERCRITICAL_EXTRACT_PROFILES,
    MEMBRANE_SEPARATION_PROFILES,
    FERMENTATION_PROFILES,
    ELECTROCHEMICAL_CELL_PROFILES,
    FLUIDIZED_BED_PROFILES,
    // Calculators
    calculateSaponification,
    calculateHydrodistillation,
    calculateSolventExtraction,
    calculateOintmentBatch,
    calculateHLBEmulsion,
    calculateCrystallization,
    calculateEthanolDilution,
    solveVacuumPressureForTemp,
    calculateReactionThermodynamics,
    calculateBufferSolution,
    calculateDermalPenetration,
    calculateFreezeDrying,
    calculateLiquidLiquidExtraction,
    calculateOsmoticPressure,
    calculateFractionalDistillation,
    calculateReactionCascade,
    calculateSolventRecovery,
    calculateExtractionKinetics,
    calculateGasAbsorption,
    calculateHydrogelRheology,
    calculateCarbonAdsorption,
    calculateVacuumFiltration,
    calculateSprayDrying,
    calculateSupercriticalExtraction,
    calculateMembraneSeparation,
    calculateBioreactorFermentation,
    calculateElectrochemicalCell,
    calculateFluidizedBed
  };

})(typeof window !== "undefined" ? window : global);

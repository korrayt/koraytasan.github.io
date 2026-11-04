/**
 * Çiftçiden Aldım — Ortak Veritabanı, Kuruş Fiyat Motoru, Kargo Ayırıcı ve Açık Kaynak Adaptör Çekirdeği
 * - www.koraytasan.com/ciftcidenaldim -> SADECE Gerçek (isDemo === false, approved) ürün ve tezgâhları gösterir.
 * - www.koraytasan.com/admin.ciftcidenaldim -> Hem Gerçek (isDemo: false) hem de DEMO Örnek (isDemo: true) kayıtları gösterir ve yönetir.
 */
(function (window) {
  const STORAGE_KEY = 'ciftcidenaldim_shared_live_db_v1';
  const CONSUMER_AUTH_KEY = 'ciftcidenaldim_consumer_auth_v1';
  const ADMIN_AUTH_KEY = 'ciftcidenaldim_admin_auth_v1';
  const CONSUMER_CART_KEY = 'ciftcidenaldim_consumer_cart_v1';

  const DEMO_STALLS = [
    {
      id: 's1',
      name: 'Boğatepe Yaylası Tezgâhı',
      producerName: 'İhan Koçulu & Ailesi',
      originCity: 'Kars',
      originDistrict: 'Boğatepe',
      originLabel: 'Kars · Boğatepe (2.300m)',
      foodBusinessRegistrationNo: 'TR-36-K-004192',
      status: 'approved',
      story: 'Kars Boğatepe köyü meralarında otlayan hayvanların sütünden geleneksel eski kaşar ve gravyer üretimi.',
      isDemo: true,
    },
    {
      id: 's2',
      name: 'Ayvalık Zeytinliği',
      producerName: 'Zeynep & Kerem Erdem',
      originCity: 'Balıkesir',
      originDistrict: 'Ayvalık',
      originLabel: 'Balıkesir · Ayvalık',
      foodBusinessRegistrationNo: 'TR-10-K-019482',
      status: 'approved',
      story: 'Ayvalık asırlık zeytin ağaçlarından erken hasat soğuk sıkım organik sertifikalı zeytinyağı.',
      isDemo: true,
    },
    {
      id: 's3',
      name: 'Kayısı Bahçesi Tezgâhı',
      producerName: 'Hacı Mehmet Doğan',
      originCity: 'Malatya',
      originDistrict: 'Yeşilyurt',
      originLabel: 'Malatya · Yeşilyurt',
      foodBusinessRegistrationNo: 'TR-44-K-008321',
      status: 'approved',
      story: 'Kükürtsüz güneşte kurutulmuş doğal gün kurusu kayısı ve dut kurusu.',
      isDemo: true,
    },
    {
      id: 's4',
      name: 'Boztepe Fıstık Ocağı',
      producerName: 'Mahmut Şahin',
      originCity: 'Gaziantep',
      originDistrict: 'Nizip',
      originLabel: 'Gaziantep · Nizip',
      foodBusinessRegistrationNo: 'TR-27-K-014820',
      status: 'approved',
      story: 'Nizip ve Barak ovası kendi fıstık bahçelerimizden ilk hasat boz iç ve kavrulmuş Antep fıstığı.',
      isDemo: true,
    },
    {
      id: 's5',
      name: 'Tokat Bahçem',
      producerName: 'Mustafa Usta',
      originCity: 'Tokat',
      originDistrict: 'Kazova',
      originLabel: 'Tokat · Kazova',
      foodBusinessRegistrationNo: 'TR-60-K-009112',
      status: 'approved',
      story: 'Kazova bereketli topraklarından açık tarla ince kabuklu Tokat domatesi ve salamura yaprak.',
      isDemo: true,
    },
    {
      id: 's6',
      name: 'Aydın İncir Evi',
      producerName: 'Hatice Aydın',
      originCity: 'Aydın',
      originDistrict: 'Germencik',
      originLabel: 'Aydın · Germencik',
      foodBusinessRegistrationNo: 'TR-09-K-006541',
      status: 'approved',
      story: 'Germencik dağ köylerinde dalında kuruyan organik sertifikalı sarılop kuru incir.',
      isDemo: true,
    },
    {
      id: 's7',
      name: 'Yayla Mandırası (Soğuk Zincir Bekleyen)',
      producerName: 'Cemalettin Yılmaz',
      originCity: 'Trabzon',
      originDistrict: 'Tonya',
      originLabel: 'Trabzon · Tonya',
      foodBusinessRegistrationNo: 'TR-61-K-002910',
      status: 'shipping_validation_pending',
      story: 'Yayık tereyağı üreticisi — yalnızca termal çanta sunduğu için soğuk zincir logger doğrulaması bekliyor.',
      isDemo: true,
    },
    {
      id: 's8',
      name: 'ArıBeyi Yaylası',
      producerName: 'Selim Çamlı',
      originCity: 'Muğla',
      originDistrict: 'Milas',
      originLabel: 'Muğla · Milas',
      foodBusinessRegistrationNo: 'TR-48-K-011209',
      status: 'approved',
      story: 'Prolin ve C4 şeker analizi doğrulanmış ham çam ve yayla çiçek balı.',
      isDemo: true,
    },
    {
      id: 's9',
      name: 'Çamlıbel Çiftliği (Pilot Yumurta)',
      producerName: 'Sevgi & Orhan Demir',
      originCity: 'Bursa',
      originDistrict: 'Karacabey',
      originLabel: 'Bursa · Karacabey',
      foodBusinessRegistrationNo: 'TR-16-K-018300',
      status: 'qa_pending',
      story: 'Serbest gezen tavuk yumurtası — viyol darbe/kırılma düşme testi QA onayı bekliyor.',
      isDemo: true,
    },
    {
      id: 's10',
      name: 'Antakya Güneşi',
      producerName: 'Meryem & Kemal Özkan',
      originCity: 'Hatay',
      originDistrict: 'Antakya',
      originLabel: 'Hatay · Antakya',
      foodBusinessRegistrationNo: 'TR-31-K-007714',
      status: 'approved',
      story: 'Samandağ ve Antakya biberlerinden güneşte kurutulmuş geleneksel biber salçası ve nar ekşisi.',
      isDemo: true,
    },
    {
      id: 's11',
      name: 'TaşFırın Köy Evi',
      producerName: 'Zeliha Nine & Oğlu',
      originCity: 'Bolu',
      originDistrict: 'Mudurnu',
      originLabel: 'Bolu · Mudurnu',
      foodBusinessRegistrationNo: 'TR-14-K-003190',
      status: 'approved',
      story: 'Atalık siyez ve karakılçık unundan odun ateşinde pişirilen ekşi mayalı köy ekmeği.',
      isDemo: true,
    },
    {
      id: 's12',
      name: 'Anadolu Soğuk Bahçe',
      producerName: 'Bursa Kooperatif Birliği',
      originCity: 'Bursa',
      originDistrict: 'İnegöl',
      originLabel: 'Bursa · İnegöl',
      foodBusinessRegistrationNo: 'TR-16-K-022410',
      status: 'approved',
      story: 'Hasat anında -40 derecede şoklanmış (IQF) kuru buzlu dondurulmuş orman meyveleri.',
      isDemo: true,
    },
  ];

  const DEMO_PRODUCTS = [
    {
      id: 'p1',
      name: 'Kars Eski Kaşarı (12 Ay Dinlendirilmiş)',
      category: 'sut-urunleri',
      region: 'Kars',
      origin: 'Kars · Boğatepe',
      stallId: 's1',
      stallName: 'Boğatepe Yaylası Tezgâhı',
      unit: '1 kg',
      desiredNetKurus: 35600,
      packagingCostKurus: 3500,
      priceKurus: 46000,
      priceTl: 460,
      stock: 28,
      seasonal: true,
      productionMethod: 'processed',
      productionMethodLabel: 'Mera Sütü · Geleneksel Olgunlaştırma',
      hasVerifiedOrganicCert: false,
      shippingProfile: 'chilled',
      shippingLabel: 'Soğuk zincir (+2/+4°C) · Logger Doğrulamalı',
      shippingBaseFeeKurus: 18900,
      shippingBaseFeeTl: 189,
      complianceStatus: 'approved',
      orderable: true,
      badge: 'DEMO · Yöresel Özel',
      image: '/ciftcidenaldim/assets/kars-kasari.jpg',
      batchLotNumber: 'LOT-KARS-2026-09',
      isDemo: true,
    },
    {
      id: 'p2',
      name: 'Ayvalık Erken Hasat Soğuk Sıkım Zeytinyağı',
      category: 'zeytin-zeytinyagi',
      region: 'Balıkesir',
      origin: 'Balıkesir · Ayvalık',
      stallId: 's2',
      stallName: 'Ayvalık Zeytinliği',
      unit: '1 L',
      desiredNetKurus: 31100,
      packagingCostKurus: 2500,
      priceKurus: 39500,
      priceTl: 395,
      stock: 45,
      seasonal: true,
      productionMethod: 'open_field',
      productionMethodLabel: 'Açık Zeytinlik · Organik Sertifikalı (TR-OT-003)',
      hasVerifiedOrganicCert: true,
      organicCertNumber: 'TR-OT-003-2026-AYV',
      shippingProfile: 'liquid',
      shippingLabel: 'Kırılmaz hava yastıklı sıvı kolisi',
      shippingBaseFeeKurus: 10900,
      shippingBaseFeeTl: 109,
      complianceStatus: 'approved',
      orderable: true,
      badge: 'DEMO · Sertifikalı Organik',
      image: '/ciftcidenaldim/assets/zeytinyagi.jpg',
      batchLotNumber: 'LOT-AYV-2026-10',
      isDemo: true,
    },
    {
      id: 'p3',
      name: 'Malatya Kükürtsüz Gün Kurusu Kayısı',
      category: 'kuru-meyve',
      region: 'Malatya',
      origin: 'Malatya · Yeşilyurt',
      stallId: 's3',
      stallName: 'Kayısı Bahçesi Tezgâhı',
      unit: '500 g',
      desiredNetKurus: 20100,
      packagingCostKurus: 1600,
      priceKurus: 25500,
      priceTl: 255,
      stock: 60,
      seasonal: true,
      productionMethod: 'stored',
      productionMethodLabel: 'Açık Bahçe · Güneşte Doğal Kurutma',
      hasVerifiedOrganicCert: false,
      shippingProfile: 'dry_ambient',
      shippingLabel: 'Üreticiden doğrudan kuru gıda kargosu',
      shippingBaseFeeKurus: 8900,
      shippingBaseFeeTl: 89,
      complianceStatus: 'approved',
      orderable: true,
      badge: 'DEMO · Tam Mevsimi',
      image: '/ciftcidenaldim/assets/kuru-kayisi.jpg',
      batchLotNumber: 'LOT-MLT-2026-08',
      isDemo: true,
    },
    {
      id: 'p4',
      name: 'Gaziantep İlk Hasat Boz İç Antep Fıstığı',
      category: 'kuruyemis',
      region: 'Gaziantep',
      origin: 'Gaziantep · Nizip',
      stallId: 's4',
      stallName: 'Boztepe Fıstık Ocağı',
      unit: '500 g',
      desiredNetKurus: 39100,
      packagingCostKurus: 1700,
      priceKurus: 48000,
      priceTl: 480,
      stock: 32,
      seasonal: true,
      productionMethod: 'stored',
      productionMethodLabel: 'Açık Bahçe · Yeni Mahsul',
      hasVerifiedOrganicCert: false,
      shippingProfile: 'dry_ambient',
      shippingLabel: 'Üreticiden doğrudan vakumlu paket',
      shippingBaseFeeKurus: 8900,
      shippingBaseFeeTl: 89,
      complianceStatus: 'approved',
      orderable: true,
      badge: 'DEMO · Coğrafi Yöre',
      image: '/ciftcidenaldim/assets/antep-fistigi.jpg',
      batchLotNumber: 'LOT-GZT-2026-09',
      isDemo: true,
    },
    {
      id: 'p5',
      name: 'Tokat Kazova Tarla Domatesi',
      category: 'sebze-meyve',
      region: 'Tokat',
      origin: 'Tokat · Kazova',
      stallId: 's5',
      stallName: 'Tokat Bahçem',
      unit: '1 kg',
      desiredNetKurus: 5975,
      packagingCostKurus: 400,
      priceKurus: 7500,
      priceTl: 75,
      stock: 40,
      seasonal: true,
      productionMethod: 'open_field',
      productionMethodLabel: 'Açık Tarla · Günlük Hasat',
      hasVerifiedOrganicCert: false,
      shippingProfile: 'fresh_fragile',
      shippingLabel: 'Havalandırmalı darbe emici taze sebze kolisi',
      shippingBaseFeeKurus: 12900,
      shippingBaseFeeTl: 129,
      complianceStatus: 'approved',
      orderable: true,
      badge: 'DEMO · Tarladan Taze',
      image: '/ciftcidenaldim/assets/tarla-domatesi.jpg',
      batchLotNumber: 'LOT-TKT-2026-11',
      isDemo: true,
    },
    {
      id: 'p6',
      name: 'Aydın Germencik Sarılop Dağ İnciri',
      category: 'kuru-meyve',
      region: 'Aydın',
      origin: 'Aydın · Germencik',
      stallId: 's6',
      stallName: 'Aydın İncir Evi',
      unit: '500 g',
      desiredNetKurus: 25200,
      packagingCostKurus: 1600,
      priceKurus: 31500,
      priceTl: 315,
      stock: 50,
      seasonal: true,
      productionMethod: 'stored',
      productionMethodLabel: 'Organik Sertifikalı (TR-OT-011) · Dalında Kurutma',
      hasVerifiedOrganicCert: true,
      organicCertNumber: 'TR-OT-011-2026-AYD',
      shippingProfile: 'dry_ambient',
      shippingLabel: 'Üreticiden doğrudan koruyucu paket',
      shippingBaseFeeKurus: 8900,
      shippingBaseFeeTl: 89,
      complianceStatus: 'approved',
      orderable: true,
      badge: 'DEMO · Sertifikalı Organik',
      image: '/ciftcidenaldim/assets/aydin-inciri.jpg',
      batchLotNumber: 'LOT-AYD-2026-09',
      isDemo: true,
    },
    {
      id: 'p7',
      name: 'Trabzon Tonya Yayık Tereyağı (Soğuk Zincir QA Bekliyor)',
      category: 'sut-urunleri',
      region: 'Trabzon',
      origin: 'Trabzon · Tonya',
      stallId: 's7',
      stallName: 'Yayla Mandırası',
      unit: '1 kg',
      desiredNetKurus: 32900,
      packagingCostKurus: 3200,
      priceKurus: 42500,
      priceTl: 425,
      stock: 15,
      seasonal: false,
      productionMethod: 'processed',
      productionMethodLabel: 'Geleneksel Yayık · Soğuk Zincir Testi Bekliyor',
      hasVerifiedOrganicCert: false,
      shippingProfile: 'chilled',
      shippingLabel: 'KURAL #13: Yalnızca termal çanta yeterli değildir; logger testi bekliyor',
      shippingBaseFeeKurus: 18900,
      shippingBaseFeeTl: 189,
      complianceStatus: 'shipping_validation_pending',
      orderable: false,
      badge: 'DEMO · QA Bekliyor',
      image: '/ciftcidenaldim/assets/yayla-tereyagi.jpg',
      batchLotNumber: 'LOT-TRB-2026-10',
      isDemo: true,
    },
    {
      id: 'p8',
      name: 'Muğla Milas Analizli Ham Yayla Balı',
      category: 'kahvaltilik-recel-bal',
      region: 'Muğla',
      origin: 'Muğla · Milas',
      stallId: 's8',
      stallName: 'ArıBeyi Yaylası',
      unit: '850 g',
      desiredNetKurus: 38200,
      packagingCostKurus: 2600,
      priceKurus: 48000,
      priceTl: 480,
      stock: 38,
      seasonal: true,
      productionMethod: 'open_field',
      productionMethodLabel: 'Laboratuvar Analizli (Prolin > 650)',
      hasVerifiedOrganicCert: false,
      shippingProfile: 'liquid',
      shippingLabel: 'Darbe emici kavanoz zırhı ile gönderim',
      shippingBaseFeeKurus: 10900,
      shippingBaseFeeTl: 109,
      complianceStatus: 'approved',
      orderable: true,
      badge: 'DEMO · Analiz Doğrulamalı',
      image: '/ciftcidenaldim/assets/cicek-bali.jpg',
      batchLotNumber: 'LOT-MGL-2026-08',
      isDemo: true,
    },
    {
      id: 'p9',
      name: 'Serbest Gezen Köy Yumurtası 15li (Kırılma QA Bekliyor)',
      category: 'yumurta',
      region: 'Bursa',
      origin: 'Bursa · Karacabey',
      stallId: 's9',
      stallName: 'Çamlıbel Çiftliği',
      unit: '15 Adet',
      desiredNetKurus: 9200,
      packagingCostKurus: 2300,
      priceKurus: 13500,
      priceTl: 135,
      stock: 20,
      seasonal: true,
      productionMethod: 'open_field',
      productionMethodLabel: 'Kontrollü Pilot · Viyol Düşme Testi Bekliyor',
      hasVerifiedOrganicCert: false,
      shippingProfile: 'fresh_fragile',
      shippingLabel: 'Özel süngerli viyol testi tamamlanmadan satışa açılmaz',
      shippingBaseFeeKurus: 12900,
      shippingBaseFeeTl: 129,
      complianceStatus: 'qa_pending',
      orderable: false,
      badge: 'DEMO · Pilot QA Bekliyor',
      image: '/ciftcidenaldim/assets/koy-yumurtasi.jpg',
      batchLotNumber: 'LOT-BRS-2026-11',
      isDemo: true,
    },
    {
      id: 'p10',
      name: 'Hatay Antakya Güneşte Kurutulmuş Biber Salçası',
      category: 'kahvaltilik-recel-bal',
      region: 'Hatay',
      origin: 'Hatay · Antakya',
      stallId: 's10',
      stallName: 'Antakya Güneşi',
      unit: '1 kg',
      desiredNetKurus: 19300,
      packagingCostKurus: 2400,
      priceKurus: 25500,
      priceTl: 255,
      stock: 54,
      seasonal: true,
      productionMethod: 'processed',
      productionMethodLabel: 'Geleneksel Güneşte Kurutma',
      hasVerifiedOrganicCert: false,
      shippingProfile: 'liquid',
      shippingLabel: 'Sızdırmaz vakumlu kapak + darbe koruma',
      shippingBaseFeeKurus: 10900,
      shippingBaseFeeTl: 109,
      complianceStatus: 'approved',
      orderable: true,
      badge: 'DEMO · Yöresel Klasik',
      image: '/ciftcidenaldim/assets/biber-salcasi.jpg',
      batchLotNumber: 'LOT-HTY-2026-09',
      isDemo: true,
    },
    {
      id: 'p11',
      name: 'Bolu Mudurnu Atalık Siyez Ekşi Mayalı Köy Ekmeği',
      category: 'firindan',
      region: 'Bolu',
      origin: 'Bolu · Mudurnu',
      stallId: 's11',
      stallName: 'TaşFırın Köy Evi',
      unit: '1 kg Somun',
      desiredNetKurus: 9800,
      packagingCostKurus: 1250,
      priceKurus: 13000,
      priceTl: 130,
      stock: 25,
      seasonal: true,
      productionMethod: 'processed',
      productionMethodLabel: 'Pazartesi-Çarşamba Fırından Çıktığı Gün Sevk',
      hasVerifiedOrganicCert: false,
      shippingProfile: 'fresh_fragile',
      shippingLabel: 'Nefes alan kraft ambalaj ile aynı gün çıkış',
      shippingBaseFeeKurus: 12900,
      shippingBaseFeeTl: 129,
      complianceStatus: 'approved',
      orderable: true,
      badge: 'DEMO · Taş Fırından',
      image: '/ciftcidenaldim/assets/eksi-maya-ekmek.jpg',
      batchLotNumber: 'LOT-BOL-2026-11',
      isDemo: true,
    },
    {
      id: 'p12',
      name: 'İnegöl Şoklanmış (IQF) Dondurulmuş Orman Meyveleri',
      category: 'dondurulmus',
      region: 'Bursa',
      origin: 'Bursa · İnegöl',
      stallId: 's12',
      stallName: 'Anadolu Soğuk Bahçe',
      unit: '500 g',
      desiredNetKurus: 18500,
      packagingCostKurus: 4000,
      priceKurus: 26500,
      priceTl: 265,
      stock: 19,
      seasonal: false,
      productionMethod: 'stored',
      productionMethodLabel: '-18°C Kuru Buzlu EPS Termal Kutu',
      hasVerifiedOrganicCert: false,
      shippingProfile: 'frozen',
      shippingLabel: '-18°C Donuk Zincir · 24 Saat Ekspres Teslimat',
      shippingBaseFeeKurus: 23900,
      shippingBaseFeeTl: 239,
      complianceStatus: 'approved',
      orderable: true,
      badge: 'DEMO · -18°C Donuk Zincir',
      image: '/ciftcidenaldim/assets/dondurulmus-meyve.jpg',
      batchLotNumber: 'LOT-BRS-IQF-2026',
      isDemo: true,
    },
  ];

  function loadDb() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && Array.isArray(parsed.products) && Array.isArray(parsed.stalls)) {
          return parsed;
        }
      }
    } catch (e) {
      // ignore
    }
    const initial = {
      stalls: DEMO_STALLS,
      products: DEMO_PRODUCTS,
      producerApplications: [],
      orders: [],
      auditLog: [
        {
          id: 'aud_init_1',
          time: '04.11.2026 08:00',
          actor: 'SYSTEM',
          text: 'Sistem başlatıldı. 12 DEMO tezgâh ve 12 DEMO ürün yalnızca /admin.ciftcidenaldim panelinde görünür şekilde izole edildi.',
        },
      ],
    };
    saveDb(initial);
    return initial;
  }

  function saveDb(db) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
    } catch (e) {
      // ignore
    }
  }

  /**
   * Kuruş Bazlı Fiyat ve Komisyon Motoru (Kural #8 & Bölüm 6)
   * Örnek: desiredNet=30 TL (3000 kr), packaging=4 TL (400 kr), commission=0.15 -> 40.00 TL (4000 kr)
   */
  function calculatePriceBreakdown(desiredNetTl, packagingCostTl, commissionRate = 0.15) {
    const netKurus = Math.round(Number(desiredNetTl || 0) * 100);
    const packKurus = Math.round(Number(packagingCostTl || 0) * 100);
    const rawCustomerKurus = Math.round((netKurus + packKurus) / (1 - commissionRate));
    // En yakın tam TL'ye yuvarla
    const finalCustomerKurus = Math.round(rawCustomerKurus / 100) * 100;
    const commissionTotalKurus = Math.round(finalCustomerKurus * commissionRate);
    const commissionNetServiceKurus = Math.round(commissionTotalKurus / 1.2);
    const commissionVatKurus = commissionTotalKurus - commissionNetServiceKurus;
    const withholdingTaxOnePercentKurus = Math.round(finalCustomerKurus * 0.01);
    const sellerGrossBeforePackKurus = finalCustomerKurus - commissionTotalKurus;
    const sellerNetAfterPackKurus = sellerGrossBeforePackKurus - packKurus;

    return {
      desiredNetKurus: netKurus,
      packagingCostKurus: packKurus,
      customerFinalPriceKurus: finalCustomerKurus,
      customerFinalPriceTl: Math.round(finalCustomerKurus / 100),
      commissionTotalKurus,
      commissionTotalTl: (commissionTotalKurus / 100).toFixed(2),
      commissionNetServiceTl: (commissionNetServiceKurus / 100).toFixed(2),
      commissionVatTl: (commissionVatKurus / 100).toFixed(2),
      withholdingTaxTl: (withholdingTaxOnePercentKurus / 100).toFixed(2),
      sellerNetAfterPackTl: (sellerNetAfterPackKurus / 100).toFixed(2),
    };
  }

  /**
   * SEARCH-01: Meilisearch Türkçe Diakritik ve Yöresel Eşanlamlı Arama
   */
  const SYNONYMS = {
    kasar: ['kaşar', 'bogatepe', 'boğatepe', 'kars'],
    sizma: ['sızma', 'zeytinyagi', 'zeytinyağı', 'ayvalik', 'ayvalık'],
    fistik: ['fıstık', 'antep', 'boz ic'],
    kayisi: ['kayısı', 'gun kurusu', 'gün kurusu', 'malatya'],
    incir: ['aydın', 'aydin', 'sarilop', 'dağ inciri'],
    ekmek: ['eksi maya', 'ekşi maya', 'siyez', 'bolu'],
  };

  function normalizeTr(str) {
    return String(str || '')
      .toLocaleLowerCase('tr-TR')
      .replace(/ğ/g, 'g')
      .replace(/ü/g, 'u')
      .replace(/ş/g, 's')
      .replace(/ı/g, 'i')
      .replace(/ö/g, 'o')
      .replace(/ç/g, 'c')
      .replace(/â/g, 'a')
      .replace(/[^a-z0-9\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function matchesTurkishSearch(query, textFields) {
    const q = normalizeTr(query);
    if (!q) return true;
    const haystack = normalizeTr(textFields.join(' '));
    if (haystack.includes(q)) return true;
    for (const [k, list] of Object.entries(SYNONYMS)) {
      if (k.includes(q) || q.includes(k)) {
        for (const syn of list) {
          if (haystack.includes(normalizeTr(syn))) return true;
        }
      }
    }
    return false;
  }

  /**
   * Çok Tezgâhlı Dağıtık Sepet ve Kargo Ayırıcı (Kural #4)
   * Anahtar: stallId + origin + compatibilityGroup
   */
  function buildDistributedCart(cartMap, productsPool) {
    const groupsMap = {};
    let itemsSubtotalKurus = 0;
    let shippingTotalKurus = 0;
    const stallsSet = new Set();

    Object.entries(cartMap || {}).forEach(([productId, qty]) => {
      const quantity = Number(qty || 0);
      if (quantity <= 0) return;
      const product = productsPool.find((p) => p.id === productId);
      if (!product || !product.orderable) return;

      const compat =
        product.shippingProfile === 'frozen'
          ? 'FROZEN'
          : product.shippingProfile === 'chilled'
            ? 'CHILLED'
            : 'AMBIENT';
      const key = `${product.stallId}__${compat}`;
      stallsSet.add(product.stallId);

      if (!groupsMap[key]) {
        groupsMap[key] = {
          groupKey: key,
          stallId: product.stallId,
          stallName: product.stallName,
          origin: product.origin,
          shippingProfile: product.shippingProfile,
          shippingLabel: product.shippingLabel,
          shippingFeeKurus: product.shippingBaseFeeKurus || 8900,
          shippingFeeTl: product.shippingBaseFeeTl || 89,
          items: [],
          itemsSubtotalKurus: 0,
        };
      }
      const lineKurus = product.priceKurus * quantity;
      groupsMap[key].items.push({
        product,
        quantity,
        lineTotalTl: Math.round(lineKurus / 100),
      });
      groupsMap[key].itemsSubtotalKurus += lineKurus;
      itemsSubtotalKurus += lineKurus;
    });

    const groups = Object.values(groupsMap);
    groups.forEach((g) => {
      shippingTotalKurus += g.shippingFeeKurus;
      g.groupTotalTl = Math.round((g.itemsSubtotalKurus + g.shippingFeeKurus) / 100);
    });

    return {
      groups,
      distinctStallCount: stallsSet.size,
      distinctShipmentCount: groups.length,
      itemsSubtotalTl: Math.round(itemsSubtotalKurus / 100),
      shippingTotalTl: Math.round(shippingTotalKurus / 100),
      grandTotalTl: Math.round((itemsSubtotalKurus + shippingTotalKurus) / 100),
    };
  }

  window.CiftcidenAldimCore = {
    STORAGE_KEY,
    CONSUMER_AUTH_KEY,
    ADMIN_AUTH_KEY,
    CONSUMER_CART_KEY,
    loadDb,
    saveDb,
    calculatePriceBreakdown,
    matchesTurkishSearch,
    buildDistributedCart,
    getConsumerRealCatalog() {
      const db = loadDb();
      return {
        stalls: db.stalls.filter((s) => !s.isDemo && s.status === 'approved'),
        products: db.products.filter(
          (p) => !p.isDemo && p.complianceStatus === 'approved' && p.orderable
        ),
      };
    },
    getAdminFullCatalog() {
      return loadDb();
    },
  };
})(window);

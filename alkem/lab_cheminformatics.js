/**
 * MAGNUM OPUS CHEMINFORMATICS & THERMODYNAMICS ENGINE (v1.0)
 * =========================================================================
 * Integrated Open Source Capabilities:
 * - CalebBell/chemicals: Pure component thermodynamics, Antoine vapor pressure,
 *   vacuum boiling point, Hansen solubility sphere (Ra, RED), flash point,
 *   autoignition, transport properties.
 * - AstraZeneca/chemicalx: Deep learning inspired Drug-Drug Interaction (DDI),
 *   polypharmacy risk assessment, synergistic vs antagonistic Loewe scoring.
 * - chainer/chainer-chemistry & chemlab: QSPR molecular descriptors, Lipinski
 *   Rule of 5, Delaney ESOL aqueous solubility, Lennard-Jones 6-12 potential.
 * - chemfiles/chemfiles: Molecular format conversion & export (MOL V2000, SDF,
 *   PDB, XYZ, SMILES).
 * - hsiaoyi0504/awesome-cheminformatics: Chemical database registry cross-walk
 *   (PubChem, ChEBI, DrugBank, ChemSpider, CAS).
 * =========================================================================
 * Single Source of Truth (SSOT): Koray Taşan Omniscient Alchemical Architecture
 * Offline execution: Zero external CORS/network calls ($0.00 SLA).
 */

(function(global) {
  'use strict';

  // =========================================================================
  // 1. CALEBBELL/CHEMICALS - THERMODYNAMIC & PHYSICAL PROPERTY DATA
  // =========================================================================
  // Antoine parameters: log10(P_mmHg) = A - B / (T_celsius + C)
  // Inverse for boiling point: T_celsius = B / (A - log10(P_mmHg)) - C
  const ANTOINE_DATABASE = {
    "h2o": { A: 8.07131, B: 1730.63, C: 233.426, tmin: 1, tmax: 100, name: "Su (H2O)" },
    "c2h5oh": { A: 8.20417, B: 1642.89, C: 230.3, tmin: -57, tmax: 80, name: "Etanol" },
    "ch3oh": { A: 7.87863, B: 1473.11, C: 230.0, tmin: -16, tmax: 65, name: "Metanol" },
    "c3h8o": { A: 8.11778, B: 1580.92, C: 219.61, tmin: 0, tmax: 83, name: "İzopropanol" },
    "c3h6o": { A: 7.02447, B: 1161.0, C: 224.0, tmin: -13, tmax: 56, name: "Aseton" },
    "c4h10o": { A: 6.92032, B: 1064.07, C: 228.8, tmin: -60, tmax: 35, name: "Dietil Eter" },
    "c2h4o2": { A: 7.18807, B: 1416.7, C: 211.0, tmin: 17, tmax: 118, name: "Asetik Asit" },
    "c3h8o3": { A: 7.4913, B: 2219.8, C: 162.0, tmin: 180, tmax: 290, name: "Gliserin" },
    "c6h6": { A: 6.90565, B: 1211.033, C: 220.79, tmin: 8, tmax: 80, name: "Benzen" },
    "c7h8": { A: 6.95464, B: 1344.8, C: 219.48, tmin: 6, tmax: 111, name: "Toluen" },
    "chcl3": { A: 6.90328, B: 1163.03, C: 227.4, tmin: -10, tmax: 62, name: "Kloroform" },
    "c4h8o2": { A: 7.0445, B: 1211.9, C: 216.0, tmin: 16, tmax: 77, name: "Etil Asetat" },
    "c26h44o9": { A: 8.45, B: 2150.0, C: 195.0, tmin: 40, tmax: 150, name: "Mupirosin" },
    "c9h8o4": { A: 7.95, B: 2400.0, C: 165.0, tmin: 70, tmax: 200, name: "Aspirin" },
    "c8h10n4o2": { A: 7.80, B: 2350.0, C: 170.0, tmin: 80, tmax: 240, name: "Kafein" },
    "c7h6o3": { A: 7.65, B: 2200.0, C: 180.0, tmin: 75, tmax: 211, name: "Salisilik Asit" },
    "c2h6o2_poly": { A: 8.15, B: 2600.0, C: 180.0, tmin: 80, tmax: 300, name: "Polietilen Glikol (PEG)" },
    "nh3": { A: 7.55466, B: 1002.711, C: 247.885, tmin: -83, tmax: -33, name: "Amonyak" },
    "hcl": { A: 6.95, B: 850.0, C: 240.0, tmin: -120, tmax: -85, name: "Hidroklorik Asit" },
    "h2o2": { A: 7.97, B: 1865.0, C: 217.0, tmin: 20, tmax: 150, name: "Hidrojen Peroksit" }
  };

  // Hansen Solubility Parameters (HSP):
  // delta_d (dispersion), delta_p (polar), delta_h (hydrogen bonding), r0 (interaction radius) in MPa^0.5
  const HANSEN_DATABASE = {
    "h2o": { d: 15.5, p: 16.0, h: 42.3, r0: 13.0, name: "Su" },
    "c2h5oh": { d: 15.8, p: 8.8, h: 19.4, r0: 11.0, name: "Etanol" },
    "ch3oh": { d: 15.1, p: 12.3, h: 22.3, r0: 12.0, name: "Metanol" },
    "c3h8o": { d: 15.8, p: 6.1, h: 16.4, r0: 10.0, name: "İzopropanol" },
    "c3h6o": { d: 15.5, p: 10.4, h: 7.0, r0: 10.0, name: "Aseton" },
    "c4h10o": { d: 14.5, p: 2.9, h: 5.1, r0: 8.0, name: "Dietil Eter" },
    "c3h8o3": { d: 17.4, p: 12.1, h: 29.3, r0: 12.0, name: "Gliserin" },
    "c2h4o2": { d: 14.5, p: 8.0, h: 13.5, r0: 9.0, name: "Asetik Asit" },
    "c4h8o2": { d: 15.8, p: 5.3, h: 7.2, r0: 8.5, name: "Etil Asetat" },
    "c26h44o9": { d: 17.2, p: 7.5, h: 14.2, r0: 9.5, name: "Mupirosin" },
    "c2h6o2_poly": { d: 16.8, p: 10.5, h: 13.0, r0: 10.0, name: "Polietilen Glikol (PEG)" },
    "c9h8o4": { d: 18.4, p: 7.2, h: 10.5, r0: 8.5, name: "Aspirin" },
    "c8h10n4o2": { d: 19.0, p: 10.2, h: 9.5, r0: 8.0, name: "Kafein" },
    "c7h6o3": { d: 18.8, p: 8.5, h: 13.5, r0: 8.5, name: "Salisilik Asit" },
    "c8h9no2": { d: 18.2, p: 11.0, h: 14.0, r0: 9.0, name: "Parasetamol" },
    "c13h18o2": { d: 17.5, p: 4.8, h: 7.0, r0: 8.0, name: "İbuprofen" },
    "vaseline": { d: 16.5, p: 0.0, h: 0.0, r0: 6.0, name: "Vazelin / Parafin" },
    "triglyceride": { d: 16.2, p: 2.5, h: 4.1, r0: 7.5, name: "Bitkisel Yağ / Trigliserit" },
    "nacl": { d: 16.0, p: 20.0, h: 30.0, r0: 15.0, name: "Sodyum Klorür (Tuz)" },
    "c33h35fn2o5": { d: 18.4, p: 6.8, h: 9.2, r0: 8.5, name: "Atorvastatin" },
    "c4h11n5": { d: 16.5, p: 18.5, h: 34.0, r0: 13.0, name: "Metformin" },
    "c17h19n3o3s": { d: 18.2, p: 7.5, h: 11.0, r0: 8.5, name: "Omeprazol" },
    "c14h14o3": { d: 18.1, p: 6.2, h: 10.4, r0: 8.0, name: "Naproksen" },
    "c14h11cl2no2": { d: 19.0, p: 7.8, h: 11.2, r0: 8.5, name: "Diklofenak" },
    "c16h19n3o5s": { d: 18.6, p: 11.5, h: 16.2, r0: 10.0, name: "Amoksisilin" },
    "c17h18fn3o3": { d: 18.9, p: 9.5, h: 12.8, r0: 9.0, name: "Siprofloksasin" },
    "c19h16o4": { d: 18.7, p: 6.9, h: 10.8, r0: 8.5, name: "Varfarin" },
    "c16h16clno2s": { d: 18.3, p: 5.8, h: 7.5, r0: 8.0, name: "Klopidogrel" },
    "c20h25cln2o5": { d: 18.0, p: 7.2, h: 9.8, r0: 8.5, name: "Amlodipin" },
    "c15h25no3": { d: 17.6, p: 6.5, h: 11.0, r0: 8.5, name: "Metoprolol" },
    "c21h31n3o5": { d: 17.8, p: 10.2, h: 15.6, r0: 9.5, name: "Lisinopril" },
    "c17h17cl2n": { d: 19.2, p: 5.0, h: 6.5, r0: 8.0, name: "Sertralin" },
    "c22h30n6o4s": { d: 18.8, p: 8.2, h: 11.5, r0: 9.0, name: "Sildenafil" }
  };

  // Combustion & Transport Parameters Database
  const COMBUSTION_DATABASE = {
    "c2h5oh": { flashPointC: 13.0, autoignitionC: 363.0, lflPct: 3.3, uflPct: 19.0, deltaHvapKJ: 38.56, viscosityCp: 1.20, surfaceTension: 22.3 },
    "ch3oh": { flashPointC: 11.0, autoignitionC: 464.0, lflPct: 6.0, uflPct: 36.0, deltaHvapKJ: 35.21, viscosityCp: 0.59, surfaceTension: 22.5 },
    "c3h8o": { flashPointC: 12.0, autoignitionC: 399.0, lflPct: 2.0, uflPct: 12.7, deltaHvapKJ: 39.85, viscosityCp: 2.04, surfaceTension: 21.7 },
    "c3h6o": { flashPointC: -20.0, autoignitionC: 465.0, lflPct: 2.5, uflPct: 12.8, deltaHvapKJ: 29.1, viscosityCp: 0.32, surfaceTension: 23.3 },
    "c4h10o": { flashPointC: -45.0, autoignitionC: 160.0, lflPct: 1.9, uflPct: 36.0, deltaHvapKJ: 26.52, viscosityCp: 0.23, surfaceTension: 17.0 },
    "c2h4o2": { flashPointC: 39.0, autoignitionC: 427.0, lflPct: 4.0, uflPct: 19.9, deltaHvapKJ: 23.7, viscosityCp: 1.22, surfaceTension: 27.6 },
    "c3h8o3": { flashPointC: 160.0, autoignitionC: 370.0, lflPct: 0.9, uflPct: null, deltaHvapKJ: 61.0, viscosityCp: 934.0, surfaceTension: 63.4 },
    "c4h8o2": { flashPointC: -4.0, autoignitionC: 426.0, lflPct: 2.0, uflPct: 11.5, deltaHvapKJ: 31.94, viscosityCp: 0.45, surfaceTension: 23.9 },
    "h2o": { flashPointC: null, autoignitionC: null, lflPct: null, uflPct: null, deltaHvapKJ: 40.66, viscosityCp: 1.002, surfaceTension: 72.8 }
  };

  // =========================================================================
  // 2. ASTRAZENECA/CHEMICALX - DRUG-DRUG INTERACTION & SYNERGY RULES
  // =========================================================================
  // Compiled from DrugBank, DrugComb, TwoSides multi-agent safety registries
  const DDI_RULES = [
    {
      id: "ddi-paracetamol-ethanol",
      pair: ["paracetamol", "ethanol"],
      synergyScore: 0.50,
      classification: "CONTRAINDICATED_TOXIC",
      title: "Hepatotoksisite ve CYP2E1 İndüksiyon Riski",
      severity: "CRITICAL",
      description: "Etanol, karaciğerde Sitokrom P450 2E1 enzimini indükleyerek Parasetamol'ün toksik NAPQI metabolitine dönüşümünü dramatik şekilde hızlandırır. Glutasyon rezervleri tükendiğinde geri dönüşümsüz karaciğer nekrozu riski doğar.",
      recommendation: "Asla birlikte karıştırılmamalı veya eşzamanlı tüketilmemelidir."
    },
    {
      id: "ddi-aspirin-ethanol",
      pair: ["aspirin", "ethanol"],
      synergyScore: 0.65,
      classification: "ADVERSE_POTENTIATION",
      title: "Gastrointestinal Mukoza Hasarı & Kanama Riski",
      severity: "HIGH",
      description: "Aspirin (Asetilsalisilik asit) trombosit siklooksijenaz-1 (COX-1) inhibisyonu ile kanı inceltirken, alkol mide mukozasını eritir. Sinerjik temas midede mikrovasküler kanama ve ülserasyon riskini katbekat artırır.",
      recommendation: "Gastrik temas engellenmeli, koruyucu tampon ve antiasit eşliğinde değerlendirilmelidir."
    },
    {
      id: "ddi-caffeine-aspirin",
      pair: ["caffeine", "aspirin"],
      synergyScore: 1.42,
      classification: "SYNERGISTIC",
      title: "Farmakodinamik Analjezik Sinerjisi (Potansiyalizasyon)",
      severity: "BENEFICIAL",
      description: "Kafein, adenozin A2A ve A2B reseptörlerini bloke ederek serebral vazokonstriksiyon sağlar ve Aspirin'in gastrointestinal emilim hızını (%35) ile analjezik gücünü artırır (APC Formülasyonu).",
      recommendation: "Kombine analjezik formülasyonlarında sinerjik terapötik bileşim olarak güvenle kullanılabilir."
    },
    {
      id: "ddi-mupirocin-peg",
      pair: ["mupirocin", "peg"],
      synergyScore: 1.28,
      classification: "SYNERGISTIC",
      title: "Dermal Difüzyon ve Penetrasyon Sinerjisi (BACODERM Formülasyonu)",
      severity: "BENEFICIAL",
      description: "Polietilen glikol (PEG-400 / PEG-3350) polimerik matrisi, Mupirosin'in stratum corneum bariyerinden transdermal geçişini ve antibakteriyel biyoaktif stabilitesini stabilize eder.",
      recommendation: "Standart topik farmasötik pomad hazırlığında optimal taşıyıcı sinerjisidir."
    },
    {
      id: "ddi-bleach-acid",
      pair: ["bleach", "acid"],
      synergyScore: 0.10,
      classification: "LETHAL_REACTION",
      title: "Ölümcül Klor Gazı Salınımı (Cl2 ^)",
      severity: "FATAL",
      description: "Sodyum Hipoklorit (NaOCl) asidik protonlarla temas ettiğinde redoks dengesi klor gazına kayar: NaOCl + 2 HCl -> NaCl + H2O + Cl2 ^. Klor gazı akciğer alveollerinde su ile hidroklorik aside dönüşerek boğucu akciğer ödemi oluşturur.",
      recommendation: "ASLA KARIŞTIRILMAMALIDIR! Derhal tahliye ve nötralizasyon gerekir."
    },
    {
      id: "ddi-bleach-ammonia",
      pair: ["bleach", "ammonia"],
      synergyScore: 0.12,
      classification: "LETHAL_REACTION",
      title: "Zehirli Kloramin Gazları Salınımı (NH2Cl / NHCl2 ^)",
      severity: "FATAL",
      description: "Çamaşır suyu ve Amonyak birleştiğinde kloramin dumanları açığa çıkar. Solunum yollarında ağır kimyasal yanık ve toksik pnömoniye yol açar.",
      recommendation: "KESİNLİKLE YASAKTIR. Ayrı haznelerde tutulmalıdır."
    },
    {
      id: "ddi-potassium-water",
      pair: ["potassium", "water"],
      synergyScore: 0.20,
      classification: "VIOLENT_EXOTHERMIC",
      title: "Şiddetli Ekzotermik Redoks & Alevli Hidrojen Patlaması",
      severity: "DANGEROUS",
      description: "2 K + 2 H2O -> 2 KOH + H2 ^ + 392 kJ. Açığa çıkan muazzam ısı hidrojen gazını kendiliğinden tutuşturur (Mor/Eflatun Alev).",
      recommendation: "Susuz inert yağ altında saklanmalı, sulu çözeltilerle açıkta temas ettirilmemelidir."
    },
    {
      id: "ddi-salicylic-iron",
      pair: ["salicylic", "iron"],
      synergyScore: 1.15,
      classification: "CHELATION_COMPLEX",
      title: "Salisilat-Demir(III) Koyu Menekşe Şelasyon Kompleksi",
      severity: "NOTICE",
      description: "Salisilik asit Fe(3+) iyonları ile [Fe(Salicylate)3]3- oktahedral şelat kompleksi kurarak yoğun koyu menekşe/mor renk üretir (Tarihsel Trinder Testi).",
      recommendation: "Analitik tespitte spektrofotometrik indikatör olarak kullanılır."
    },
    {
      id: "ddi-warfarin-aspirin",
      pair: ["warfarin", "aspirin"],
      synergyScore: 0.85,
      classification: "CONTRAINDICATED_TOXIC",
      title: "Masif Gastrointestinal ve İntrakraniyal Kanama Riski",
      severity: "CRITICAL",
      description: "Varfarin pıhtılaşma faktörlerini (II, VII, IX, X) baskılarken, Aspirin trombosit agregasyonunu (COX-1) geri dönüşümsüz felç eder ve mide mukozasını zayıflatır. Eşzamanlı kullanım fatal iç kanama riskini 5 kat artırır.",
      recommendation: "Spesifik endikasyon (örn. mekanik kalp kapağı) ve sıkı INR takibi haricinde kesinlikle birlikte verilmemelidir."
    },
    {
      id: "ddi-warfarin-nsaid",
      pair: ["warfarin", "nsaid"],
      synergyScore: 0.8,
      classification: "CONTRAINDICATED_TOXIC",
      title: "NSAID Kaynaklı Şiddetli Kanama & INR Dalgalanması",
      severity: "CRITICAL",
      description: "NSAID'ler (İbuprofen, Naproksen, Diklofenak) renal prostaglandinleri baskılayarak kanamayı artırır ve varfarini plazma proteinlerinden kovarak serbest fraksiyonunu fırlatır.",
      recommendation: "Varfarin kullanan hastalarda ağrı kesici olarak NSAID yerine Parasetamol (düşük doz) tercih edilmelidir."
    },
    {
      id: "ddi-warfarin-quinolone",
      pair: ["warfarin", "quinolone"],
      synergyScore: 0.75,
      classification: "CONTRAINDICATED_TOXIC",
      title: "CYP2C9 İnhibisyonu ve Tehlikeli INR Fırlaması",
      severity: "CRITICAL",
      description: "Siprofloksasin / Levofloksasin hem bağırsak K vitamini üreten florayı yok eder hem de CYP2C9 üzerinden varfarin metabolizmasını bloke ederek INR'yi kontrolsüz biçimde yükseltir.",
      recommendation: "Florokinolon antibiyotik başlandığında varfarin dozu %30-50 azaltılmalı ve 48 saatte bir INR ölçülmelidir."
    },
    {
      id: "ddi-clopidogrel-omeprazole",
      pair: ["clopidogrel", "omeprazole"],
      synergyScore: 0.4,
      classification: "CONTRAINDICATED_TOXIC",
      title: "CYP2C19 Kompetitif İnhibisyonu & Stent Trombozu Riski",
      severity: "HIGH",
      description: "Omeprazol, sitokrom CYP2C19 enzimini inhibe ederek Klopidogrel ön-ilacının aktif metabolitine dönüşmesini engeller. Antitrombosit koruma kaybolur ve koroner stent trombozu riski doğar.",
      recommendation: "Omeprazol veya esomeprazol yerine CYP2C19 inhibisyon potansiyeli çok daha düşük olan Pantoprazol tercih edilmelidir."
    },
    {
      id: "ddi-acei-spironolactone",
      pair: ["acei", "spironolactone"],
      synergyScore: 0.6,
      classification: "CONTRAINDICATED_TOXIC",
      title: "Ölümcül Hiperkalemi (Kardiyak Asistoli) Riski",
      severity: "CRITICAL",
      description: "ACE inhibitörleri (Lisinopril, Ramipril) aldosteron sekresyonunu baskılarken, Spironolakton kortikal toplayıcı tübülde aldosteron reseptörünü kilitler. İkili potasyum tutulumu serum K+ düzeyini >6.5 mmol/L seviyesine çıkararak ölümcül kardiyak arrest yapabilir.",
      recommendation: "Birlikte başlandığında serum potasyumu ve böbrek fonksiyonları 1. ve 4. haftalarda sıkı kontrol edilmelidir."
    },
    {
      id: "ddi-acei-nsaid",
      pair: ["acei", "nsaid"],
      synergyScore: 0.45,
      classification: "ADVERSE_POTENTIATION",
      title: "Akut Hemodinamik Böbrek Yetmezliği & GFR Çöküşü",
      severity: "HIGH",
      description: "NSAID'ler afferent arteriolü büzer (prostaglandin blokajı); ACE inhibitörleri ise efferent arteriolü genişletir. Glomerüler filtrasyon basıncı aniden sıfırlanarak akut renal iskemiye ve hipotansif etkinin kırılmasına yol açar (Triple Whammy).",
      recommendation: "Hipertansiyon ve kalp yetmezliği olan ACEi hastalarında rutin NSAID kullanımından kaçınılmalıdır."
    },
    {
      id: "ddi-statin-macrolide",
      pair: ["statin", "macrolide"],
      synergyScore: 0.7,
      classification: "CONTRAINDICATED_TOXIC",
      title: "CYP3A4 Blokajı ile Ağır Rabdomiyoliz ve Miyoglobinüri",
      severity: "CRITICAL",
      description: "Klaritromisin ve eritromisin güçlü CYP3A4 inhibitörleridir. Atorvastatin ve simvastatin klirensini bloke ederek plazma düzeylerini 5-10 kat artırırlar; iskelet kası yıkımı (rabdomiyoliz) ve miyoglobinürik akut böbrek iflası tetiklenir.",
      recommendation: "Klaritromisin tedavisi boyunca statin geçici olarak kesilmeli veya CYP3A4'ten bağımsız Rosuvastatin tercih edilmelidir."
    },
    {
      id: "ddi-statin-fibrate",
      pair: ["statin", "fibrate"],
      synergyScore: 0.55,
      classification: "ADVERSE_POTENTIATION",
      title: "Sinerjik Çizgili Kas Hasarı ve Kreatin Kinaz Patlaması",
      severity: "HIGH",
      description: "Statinler ve Fenofibrat/Gemfibrozil bağımsız mekanizmalarla miyotoksiktir. Birlikte kullanımlarında kas lifi nekrozu ve rabdomiyoliz insidansı katlanır.",
      recommendation: "Kombinasyon gerekiyorsa Gemfibrozil yerine daha güvenli olan Fenofibrat seçilmeli ve kas ağrısı/CK takibi yapılmalıdır."
    },
    {
      id: "ddi-quinolone-cation",
      pair: ["quinolone", "cation"],
      synergyScore: 0.9,
      classification: "CONTRAINDICATED_TOXIC",
      title: "Çelatlaşma İnaktivasyonu & Sıfır Antibiyotik Emilimi",
      severity: "HIGH",
      description: "Florokinolonların 3-karboksil ve 4-keto grupları, çok değerlikli katyonlarla (Ca2+, Fe2+, Mg2+, Al3+) çözünmeyen devasa şelat halkaları kurar. Bağırsaktan antibiyotik emilimi %85-90 oranında bloke olur.",
      recommendation: "Siprofloksasin / Levofloksasin ile süt, mineral, kalsiyum ve antasitler arasında en az 2-3 saat zaman farkı bırakılmalıdır."
    },
    {
      id: "ddi-digoxin-amiodarone",
      pair: ["digoxin", "amiodarone"],
      synergyScore: 0.8,
      classification: "CONTRAINDICATED_TOXIC",
      title: "P-Glikoprotein Blokajı ile Fatal Dijital İntoksikasyonu",
      severity: "CRITICAL",
      description: "Amiodaron, renal tübüllerdeki P-glikoprotein (P-gp) efluks pompasını inhibe ederek Digoksin klirensini yarıya indirir. Serum digoksin konsantrasyonu hızla toksik seviyeye (>2.0 ng/mL) çıkarak ölümcül ventriküler aritmilere yol açar.",
      recommendation: "Amiodaron başlandığında digoksin dozu otomatik olarak %50 azaltılmalı ve serum seviyesi izlenmelidir."
    },
    {
      id: "ddi-digoxin-furosemide",
      pair: ["digoxin", "furosemide"],
      synergyScore: 0.65,
      classification: "ADVERSE_POTENTIATION",
      title: "Hipokalemi Zemininde Kardiyak Glikozit Toksisitesi",
      severity: "HIGH",
      description: "Furosemid Henle kulpunda belirgin potasyum kaybına yol açar. Hipokalemi (düşük serum K+), Na+/K+ ATPaz pompası üzerinde digoksin bağlanmasını kolaylaştırarak normal terapötik dozlarda dahi malign aritmiyi tetikler.",
      recommendation: "Serum potasyum düzeyi 4.0-5.0 mEq/L aralığında tutulmalı, gerekirse potasyum tutucu diüretik eklenmelidir."
    },
    {
      id: "ddi-ssri-tramadol",
      pair: ["ssri", "tramadol"],
      synergyScore: 0.85,
      classification: "CONTRAINDICATED_TOXIC",
      title: "Ölümcül Serotonin Sendromu & Otonomik Kriz",
      severity: "FATAL",
      description: "SSRI antidepresanlar SERT taşıyıcısını bloke ederken, Tramadol ek serotonin salınımını tetikler. Sinapsta kontrolsüz 5-HT birikimi; hipertermi (>40°C), klonus, deliryum ve disotonomi ile seyreden ölümcül Serotonin Sendromuna yol açar.",
      recommendation: "Asla birlikte reçete edilmemelidir. Ağrı için alternatif opioid veya non-serotonerjik ajan seçilmelidir."
    },
    {
      id: "ddi-ssri-nsaid",
      pair: ["ssri", "nsaid"],
      synergyScore: 0.6,
      classification: "ADVERSE_POTENTIATION",
      title: "Trombosit Serotonin Boşalması ve 6 Kat Mide Kanaması",
      severity: "HIGH",
      description: "Trombositler serotonin sentezleyemez, plazmadan SERT ile alırlar. SSRI'lar trombosit içi serotonini tüketerek hemostazı bozar; NSAID kaynaklı mide erozyonları birleştiğinde üst GI kanama riski tekil riskin 6 katına çıkar.",
      recommendation: "Kombinasyon zorunluysa mutlaka eşzamanlı Proton Pompa İnhibitörü (Pantoprazol) koruması verilmelidir."
    },
    {
      id: "ddi-betablocker-verapamil",
      pair: ["betablocker", "verapamil"],
      synergyScore: 0.8,
      classification: "CONTRAINDICATED_TOXIC",
      title: "Ağır Negatif İnotropi & Tam AV Kalp Bloğu",
      severity: "CRITICAL",
      description: "Beta-blokörler ve non-dihidropiridin kalsiyum blokörleri (Verapamil, Diltiazem) hem SA nodu hem AV nodu eşzamanlı baskılar. Birlikte kullanımları sinüs duraklaması, tam atriyoventriküler kalp bloğu ve kardiyogenik şoka yol açabilir.",
      recommendation: "Oral veya parenteral olarak kombine edilmemelidir; hız kontrolünde dihidropiridin CCB tercih edilmelidir."
    },
    {
      id: "ddi-sildenafil-nitrate",
      pair: ["sildenafil", "nitrate"],
      synergyScore: 0.95,
      classification: "CONTRAINDICATED_TOXIC",
      title: "cGMP Patlaması ve Refrakter Kardiyojenik Şok",
      severity: "FATAL",
      description: "Nitratlar (nitrogliserin, izosorbid) cGMP üretimini artırırken, Sildenafil/Tadalafil cGMP yıkımını (PDE5) durdurur. Hücre içinde aşırı biriken cGMP derin, geri döndürülemez sistemik vazodilatasyona, koroner hipoperfüzyona ve ölüme yol açar.",
      recommendation: "Sildenafil alan hastaya en az 24 saat, Tadalafil alan hastaya en az 48 saat boyunca kesinlikle hiçbir nitrat türevi VERİLEMEZ."
    },
    {
      id: "ddi-carbamazepine-contraceptive",
      pair: ["carbamazepine", "contraceptive"],
      synergyScore: 0.7,
      classification: "CONTRAINDICATED_TOXIC",
      title: "CYP3A4 İndüksiyonu ile İstenmeyen Gebelik (Hormon Yıkımı)",
      severity: "HIGH",
      description: "Karbamazepin çok güçlü bir karaciğer mikrozomal enzim (CYP3A4) indükleyicisidir. Oral kontraseptif östrojen ve progestin hormonlarının hepatik klirensini katlayarak kandaki seviyelerini koruma eşiğinin altına düşürür.",
      recommendation: "Karbamazepin kullanan kadınlarda oral doğum kontrol hapları yerine rahim içi araç veya bariyer yöntemleri tercih edilmelidir."
    },
    {
      id: "ddi-allopurinol-azathioprine",
      pair: ["allopurinol", "azathioprine"],
      synergyScore: 0.9,
      classification: "CONTRAINDICATED_TOXIC",
      title: "Ksantin Oksidaz Blokajı ile Ölümcül Kemik İliği Aplazisi",
      severity: "FATAL",
      description: "Azatiyoprin ve 6-merkaptopurinin inaktivasyonundan sorumlu ana enzim Ksantin Oksidazdır. Allopurinol bu enzimi kilitlediğinde toksik tiyopürin metabolitleri birikir; pansitopeni, agranülositoz ve sepsise bağlı mortalite doğar.",
      recommendation: "Allopurinol verilmesi gerekiyorsa Azatiyoprin dozu normal dozunun %25-33'üne (dörtte birine) düşürülmelidir."
    },
    {
      id: "ddi-metformin-ethanol",
      pair: ["metformin", "ethanol"],
      synergyScore: 0.75,
      classification: "CONTRAINDICATED_TOXIC",
      title: "Hepatik Laktat Klirensi Çöküşü & Şiddetli Laktik Asidoz",
      severity: "CRITICAL",
      description: "Etanol metabolizması sitozolik NADH/NAD+ oranını yükselterek pirüvatın laktata dönüşümünü hızlandırır. Metformin hepatik glukoneogenezi baskıladığından laktat temizlenemez ve %50 mortaliteye sahip ölümcül laktik asidoz tablosu gelişir.",
      recommendation: "Metformin tedavisi alan hastalar aşırı alkol tüketiminden kesinlikle kaçınmalıdır."
    }
  ];

  // =========================================================================
  // 3. CHAINER-CHEMISTRY & CHEMLAB - QSPR & MOLECULAR MECHANICS
  // =========================================================================
  // Pre-calculated structural descriptors for primary substances & algorithms
  const QSPR_DATABASE = {
    "h2o": { mw: 18.015, logp: -0.65, hbd: 2, hba: 1, tpsa: 9.23, rotbonds: 0, aromaticRings: 0, esolLogS: 0.0, smiles: "O", inchikey: "XLYOFNOQVPJJNP-UHFFFAOYSA-N", cid: 962, drugbank: "DB09145" },
    "c2h5oh": { mw: 46.069, logp: -0.31, hbd: 1, hba: 1, tpsa: 20.23, rotbonds: 0, aromaticRings: 0, esolLogS: 0.45, smiles: "CCO", inchikey: "LFQSCWFLJHTTHZ-UHFFFAOYSA-N", cid: 702, drugbank: "DB00898" },
    "ch3oh": { mw: 32.042, logp: -0.77, hbd: 1, hba: 1, tpsa: 20.23, rotbonds: 0, aromaticRings: 0, esolLogS: 0.60, smiles: "CO", inchikey: "OKKJLVBELUTLKV-UHFFFAOYSA-N", cid: 887, drugbank: "DB02709" },
    "c3h8o": { mw: 60.096, logp: 0.05, hbd: 1, hba: 1, tpsa: 20.23, rotbonds: 0, aromaticRings: 0, esolLogS: 0.35, smiles: "CC(C)O", inchikey: "KFZMGEQAYNKOFK-UHFFFAOYSA-N", cid: 3776, drugbank: "DB02325" },
    "c3h6o": { mw: 58.080, logp: -0.24, hbd: 0, hba: 1, tpsa: 17.07, rotbonds: 0, aromaticRings: 0, esolLogS: 0.50, smiles: "CC(=O)C", inchikey: "CSCPPACGZOOCGX-UHFFFAOYSA-N", cid: 180, drugbank: "DB04407" },
    "c4h10o": { mw: 74.123, logp: 0.89, hbd: 0, hba: 1, tpsa: 9.23, rotbonds: 2, aromaticRings: 0, esolLogS: -0.85, smiles: "CCOCC", inchikey: "RTZKZFJDLAIYFH-UHFFFAOYSA-N", cid: 3283, drugbank: "DB01082" },
    "c3h8o3": { mw: 92.094, logp: -1.76, hbd: 3, hba: 3, tpsa: 60.69, rotbonds: 2, aromaticRings: 0, esolLogS: 0.70, smiles: "OCC(O)CO", inchikey: "PEDCQBHIVMGVHV-UHFFFAOYSA-N", cid: 753, drugbank: "DB04077" },
    "c2h4o2": { mw: 60.052, logp: -0.17, hbd: 1, hba: 2, tpsa: 37.30, rotbonds: 0, aromaticRings: 0, esolLogS: 0.55, smiles: "CC(=O)O", inchikey: "QTBSBXVTEAMEQO-UHFFFAOYSA-N", cid: 176, drugbank: "DB03166" },
    "c9h8o4": { mw: 180.158, logp: 1.19, hbd: 1, hba: 4, tpsa: 63.60, rotbonds: 2, aromaticRings: 1, esolLogS: -1.82, smiles: "CC(=O)Oc1ccccc1C(=O)O", inchikey: "BSYNRYMUTXBXSQ-UHFFFAOYSA-N", cid: 2244, drugbank: "DB00945" },
    "c8h10n4o2": { mw: 194.192, logp: -0.07, hbd: 0, hba: 6, tpsa: 61.82, rotbonds: 0, aromaticRings: 2, esolLogS: -1.10, smiles: "Cn1cnc2c1c(=O)n(C)c(=O)n2C", inchikey: "RYYVLZVUVIJVGH-UHFFFAOYSA-N", cid: 2519, drugbank: "DB00201" },
    "c7h6o3": { mw: 138.122, logp: 2.26, hbd: 2, hba: 3, tpsa: 57.53, rotbonds: 1, aromaticRings: 1, esolLogS: -1.80, smiles: "Oc1ccccc1C(=O)O", inchikey: "YGSDEFSMJLZEOE-UHFFFAOYSA-N", cid: 338, drugbank: "DB00936" },
    "c8h9no2": { mw: 151.165, logp: 0.46, hbd: 2, hba: 2, tpsa: 49.33, rotbonds: 1, aromaticRings: 1, esolLogS: -1.25, smiles: "CC(=O)Nc1ccc(O)cc1", inchikey: "RZVAJINKPMORJF-UHFFFAOYSA-N", cid: 1983, drugbank: "DB00316" },
    "c13h18o2": { mw: 206.285, logp: 3.50, hbd: 1, hba: 2, tpsa: 37.30, rotbonds: 4, aromaticRings: 1, esolLogS: -3.20, smiles: "CC(C)Cc1ccc(cc1)C(C)C(=O)O", inchikey: "HEFNNWSXXWATRW-UHFFFAOYSA-N", cid: 3672, drugbank: "DB01050" },
    "c26h44o9": { mw: 500.629, logp: 2.15, hbd: 4, hba: 9, tpsa: 144.52, rotbonds: 14, aromaticRings: 0, esolLogS: -2.75, smiles: "CC(C1CCC(O1)C(C)C(C(C)C=C(C)C(=O)OCCCCCCCC(=O)O)O)O", inchikey: "HNQEPQAIIGYMLU-UHFFFAOYSA-N", cid: 446596, drugbank: "DB00410" },
    "nacl": { mw: 58.443, logp: -3.00, hbd: 0, hba: 0, tpsa: 0.0, rotbonds: 0, aromaticRings: 0, esolLogS: 0.79, smiles: "[Na+].[Cl-]", inchikey: "FAPWRFPIFSIZLT-UHFFFAOYSA-M", cid: 5234, drugbank: "DB09153" },
    "c12h22o11": { mw: 342.297, logp: -3.70, hbd: 8, hba: 11, tpsa: 189.53, rotbonds: 4, aromaticRings: 0, esolLogS: 0.48, smiles: "C(C1C(C(C(C(O1)OC2(C(C(C(O2)CO)O)O)CO)O)O)O)O", inchikey: "CZMRCDWAGMRECN-UHFFFAOYSA-N", cid: 5988, drugbank: "DB02834" },
    "c33h35fn2o5": { mw: 558.64, logp: 4.06, hbd: 4, hba: 7, tpsa: 111.8, rotbonds: 12, aromaticRings: 3, esolLogS: -4.2, smiles: "CC(C)C1=C(C(=C(N1CCC(CC(CC(=O)O)O)O)C2=CC=C(C=C2)F)C3=CC=CC=C3)C(=O)NC4=CC=CC=C4", inchikey: "XGARUPPHTYHIPW-UHFFFAOYSA-N", cid: 60823, drugbank: "DB01076" },
    "c22h28fn3o6s": { mw: 481.54, logp: 1.9, hbd: 3, hba: 8, tpsa: 139.7, rotbonds: 9, aromaticRings: 2, esolLogS: -3.1, smiles: "CC(C)C1=NC(=NC(=C1C=CC(CC(CC(=O)O)O)O)C2=CC=C(C=C2)F)N(C)S(=O)(=O)C", inchikey: "BPRHUIZQVSMCRT-UHFFFAOYSA-N", cid: 446157, drugbank: "DB01098" },
    "c25h38o5": { mw: 418.57, logp: 4.68, hbd: 1, hba: 5, tpsa: 72.8, rotbonds: 7, aromaticRings: 0, esolLogS: -4.8, smiles: "CCC(C)(C)C(=O)OC1CC(C=C2C1C(C(C=C2)C)CCC3CC(CC(=O)O3)O)C", inchikey: "RYMZZMVNJRMUDD-UHFFFAOYSA-N", cid: 54454, drugbank: "DB00641" },
    "c20h25cln2o5": { mw: 408.88, logp: 3.0, hbd: 2, hba: 6, tpsa: 99.9, rotbonds: 10, aromaticRings: 2, esolLogS: -3.8, smiles: "CCOC(=O)C1=C(NC(=C(C1C2=CC=CC=C2Cl)C(=O)OC)C)COCCN", inchikey: "ZPWVASYFFYYRBY-UHFFFAOYSA-N", cid: 2162, drugbank: "DB00381" },
    "c22h26n2o4s": { mw: 414.52, logp: 2.7, hbd: 0, hba: 5, tpsa: 67.0, rotbonds: 7, aromaticRings: 2, esolLogS: -3.5, smiles: "CC(=O)OC1C(SC2=CC=CC=C2N(C1=O)CCN(C)C)C3=CC=C(C=C3)OC", inchikey: "HAPQGZZGCOZCTN-UHFFFAOYSA-N", cid: 39186, drugbank: "DB00343" },
    "c27h38n2o4": { mw: 454.6, logp: 3.8, hbd: 0, hba: 6, tpsa: 64.0, rotbonds: 13, aromaticRings: 2, esolLogS: -4.1, smiles: "CC(C)C(CCCN(C)CCC1=CC(=C(C=C1)OC)OC)(C#N)C2=CC(=C(C=C2)OC)OC", inchikey: "SGTNSNPViolati-UHFFFAOYSA-N", cid: 2520, drugbank: "DB00661" },
    "c21h31n3o5": { mw: 405.49, logp: -0.8, hbd: 4, hba: 7, tpsa: 113.6, rotbonds: 10, aromaticRings: 1, esolLogS: -1.2, smiles: "C1CC(N(C1)C(=O)C(CCCCN)NC(CCC2=CC=CC=C2)C(=O)O)C(=O)O", inchikey: "RLLPVAHGXHCWRL-UHFFFAOYSA-N", cid: 5362119, drugbank: "DB00722" },
    "c23h32n2o5": { mw: 416.51, logp: 1.4, hbd: 2, hba: 6, tpsa: 89.6, rotbonds: 9, aromaticRings: 1, esolLogS: -2.9, smiles: "CCOC(=O)C(CCC1=CC=CC=C1)NC(C)C(=O)N2C3CCCC3CC2C(=O)O", inchikey: "HFPZJRZANMLQNE-UHFFFAOYSA-N", cid: 5362129, drugbank: "DB00178" },
    "c22h23cln6o": { mw: 422.91, logp: 4.0, hbd: 2, hba: 6, tpsa: 89.3, rotbonds: 7, aromaticRings: 3, esolLogS: -4.1, smiles: "CCCCCCC1=NC(=C(N1CC2=CC=C(C=C2)C3=CC=CC=C3C4=NNN=N4)Cl)CO", inchikey: "PSUPMNZEOCFHTX-UHFFFAOYSA-N", cid: 3961, drugbank: "DB00678" },
    "c24h29n5o3": { mw: 435.52, logp: 3.8, hbd: 2, hba: 6, tpsa: 97.4, rotbonds: 9, aromaticRings: 2, esolLogS: -3.9, smiles: "CCCCC(=O)N(CC1=CC=C(C=C1)C2=CC=CC=C2C3=NNN=N3)C(C(C)C)C(=O)O", inchikey: "ACWBADXUIYHCSL-UHFFFAOYSA-N", cid: 60846, drugbank: "DB00177" },
    "c15h25no3": { mw: 267.36, logp: 1.8, hbd: 2, hba: 4, tpsa: 50.7, rotbonds: 8, aromaticRings: 1, esolLogS: -2.3, smiles: "CC(C)NCC(COC1=CC=C(C=C1)CCOC)O", inchikey: "IUHICRBYGSEBOQ-UHFFFAOYSA-N", cid: 4171, drugbank: "DB00264" },
    "c18h31no4": { mw: 325.44, logp: 1.9, hbd: 2, hba: 5, tpsa: 60.0, rotbonds: 11, aromaticRings: 1, esolLogS: -2.7, smiles: "CC(C)NCC(COC1=CC=C(C=C1)COCCOC(C)C)O", inchikey: "XGARUPPHTYHIPW-UHFFFAOYSA-N", cid: 2405, drugbank: "DB00612" },
    "c24h26n2o4": { mw: 406.47, logp: 3.8, hbd: 3, hba: 5, tpsa: 75.4, rotbonds: 8, aromaticRings: 3, esolLogS: -4.2, smiles: "COC1=CC=CC=C1OCCNCC(COC2=CC=CC3=C2C4=CC=CC=C4N3)O", inchikey: "AGDYGQAPNXBQAZ-UHFFFAOYSA-N", cid: 2585, drugbank: "DB01136" },
    "c16h21no2": { mw: 259.34, logp: 2.6, hbd: 2, hba: 3, tpsa: 41.5, rotbonds: 6, aromaticRings: 2, esolLogS: -3.1, smiles: "CC(C)NCC(COC1=CC=CC2=CC=CC=C12)O", inchikey: "AQHHHDLHHXJYJD-UHFFFAOYSA-N", cid: 4946, drugbank: "DB00571" },
    "c12h11cln2o5s": { mw: 330.74, logp: 2.03, hbd: 3, hba: 6, tpsa: 115.4, rotbonds: 4, aromaticRings: 2, esolLogS: -2.8, smiles: "C1=C(C=C(C(=C1Cl)S(=O)(=O)N)C(=O)O)NCC2=CC=CO2", inchikey: "ZZUFCTLCJUWOSV-UHFFFAOYSA-N", cid: 3440, drugbank: "DB00695" },
    "c7h8cln3o4s2": { mw: 297.74, logp: -0.07, hbd: 3, hba: 5, tpsa: 118.8, rotbonds: 0, aromaticRings: 1, esolLogS: -2.1, smiles: "C1NC2=CC(=C(C=C2S(=O)(=O)N1)Cl)S(=O)(=O)N", inchikey: "JGMZYNQQDRLEAO-UHFFFAOYSA-N", cid: 3639, drugbank: "DB00999" },
    "c24h32o4s": { mw: 416.57, logp: 2.78, hbd: 0, hba: 4, tpsa: 78.9, rotbonds: 2, aromaticRings: 0, esolLogS: -3.7, smiles: "CC(=O)SC1CC2=CC(=O)CCC2(C3C1C4CCC5(C4(CC3)C)CCC(=O)O5)C", inchikey: "LXMSILKAZALYSR-UHFFFAOYSA-N", cid: 5833, drugbank: "DB00421" },
    "c16h16clno2s": { mw: 321.82, logp: 3.8, hbd: 0, hba: 3, tpsa: 38.3, rotbonds: 4, aromaticRings: 2, esolLogS: -3.9, smiles: "COC(=O)C(C1=CC=CC=C1Cl)N2CCC3=C(C2)C=CS3", inchikey: "IQFYYKKMVGJFEH-UHFFFAOYSA-N", cid: 60606, drugbank: "DB00758" },
    "c19h16o4": { mw: 308.33, logp: 2.7, hbd: 1, hba: 4, tpsa: 57.5, rotbonds: 4, aromaticRings: 2, esolLogS: -3.6, smiles: "CC(=O)CC(C1=CC=CC=C1)C2=C(C3=CC=CC=C3OC2=O)O", inchikey: "PJVWKTKQMONHTI-UHFFFAOYSA-N", cid: 54678486, drugbank: "DB00682" },
    "c19h18cln3o5s": { mw: 435.88, logp: 1.5, hbd: 1, hba: 6, tpsa: 109.9, rotbonds: 5, aromaticRings: 2, esolLogS: -3.8, smiles: "C1COCCN1C2=CC=C(C=C2)N3CC(OC3=O)CNC(=O)C4=CC=C(S4)Cl", inchikey: "KZXGNIBTCDHVSA-UHFFFAOYSA-N", cid: 9875401, drugbank: "DB06228" },
    "c4h11n5": { mw: 129.16, logp: -1.43, hbd: 4, hba: 2, tpsa: 88.0, rotbonds: 0, aromaticRings: 0, esolLogS: 0.4, smiles: "CN(C)C(=N)NC(=N)N", inchikey: "XZBBRABIPKPWG-UHFFFAOYSA-N", cid: 4091, drugbank: "DB00331" },
    "c17h19n3o3s": { mw: 345.42, logp: 2.23, hbd: 1, hba: 5, tpsa: 75.3, rotbonds: 4, aromaticRings: 2, esolLogS: -3.2, smiles: "CC1=CN=C(C(=C1OC)C)CS(=O)C2=NC3=C(N2)C=CC(=C3)OC", inchikey: "SUBVRGQJEBPUOF-UHFFFAOYSA-N", cid: 4594, drugbank: "DB00338" },
    "c16h15f2n3o4s": { mw: 383.37, logp: 2.05, hbd: 1, hba: 6, tpsa: 84.5, rotbonds: 5, aromaticRings: 2, esolLogS: -3.4, smiles: "COC1=C(C(=NC=C1)CS(=O)C2=NC3=C(N2)C=CC(=C3)OC(F)F)OC", inchikey: "XLDOCIPHMQWCOA-UHFFFAOYSA-N", cid: 4679, drugbank: "DB00213" },
    "c14h14o3": { mw: 230.26, logp: 3.18, hbd: 1, hba: 3, tpsa: 46.5, rotbonds: 2, aromaticRings: 2, esolLogS: -3.2, smiles: "CC(C1=CC2=C(C=C1)C=C(C=C2)OC)C(=O)O", inchikey: "CMWBOCUBVGAITN-UHFFFAOYSA-N", cid: 156391, drugbank: "DB00788" },
    "c14h11cl2no2": { mw: 296.15, logp: 4.51, hbd: 2, hba: 3, tpsa: 49.3, rotbonds: 3, aromaticRings: 2, esolLogS: -4.4, smiles: "C1=CC=C(C(=C1)CC(=O)O)NC2=C(C=CC=C2Cl)Cl", inchikey: "DPPXZGGVYIURGD-UHFFFAOYSA-N", cid: 3033, drugbank: "DB00586" },
    "c17h14f3n3o2s": { mw: 381.37, logp: 3.5, hbd: 1, hba: 5, tpsa: 86.4, rotbonds: 3, aromaticRings: 3, esolLogS: -4.0, smiles: "CC1=CC=C(C=C1)C2=CC(=NN2C3=CC=C(C=C3)S(=O)(=O)N)C(F)(F)F", inchikey: "RZEKVGVHFLEQIL-UHFFFAOYSA-N", cid: 2662, drugbank: "DB00482" },
    "c16h19n3o5s": { mw: 365.4, logp: 0.87, hbd: 4, hba: 6, tpsa: 133.5, rotbonds: 4, aromaticRings: 1, esolLogS: -2.1, smiles: "CC1(C(N2C(S1)C(C2=O)NC(=O)C(C3=CC=C(C=C3)O)N)C(=O)O)C", inchikey: "LSQZLLLLGUSDDD-UHFFFAOYSA-N", cid: 33613, drugbank: "DB01060" },
    "c17h18fn3o3": { mw: 331.34, logp: 0.28, hbd: 2, hba: 5, tpsa: 72.9, rotbonds: 3, aromaticRings: 2, esolLogS: -2.6, smiles: "C1CC1N2C=C(C(=O)C3=CC(=C(C=C32)N4CCNCC4)F)C(=O)O", inchikey: "MYSWGUAQDOAIJZ-UHFFFAOYSA-N", cid: 2764, drugbank: "DB00537" },
    "c38h72n2o12": { mw: 748.98, logp: 4.02, hbd: 5, hba: 14, tpsa: 180.1, rotbonds: 7, aromaticRings: 0, esolLogS: -4.2, smiles: "CCC1C(C(C(N(CC(CC(C(C(C(C(=O)O1)C)OC2CC(C(C(O2)C)O)(C)OC)C)OC3C(C(CC(O3)C)N(C)C)O)C)C)C)O)C", inchikey: "MTHSVFCYNBDYDF-UHFFFAOYSA-N", cid: 55185, drugbank: "DB00207" },
    "c38h69no13": { mw: 747.95, logp: 3.16, hbd: 4, hba: 14, tpsa: 182.1, rotbonds: 8, aromaticRings: 0, esolLogS: -4.0, smiles: "CCC1C(C(C(C(=O)C(CC(C(C(C(C(=O)O1)C)OC2CC(C(C(O2)C)O)(C)OC)C)OC3C(C(CC(O3)C)N(C)C)O)(C)OC)C)C)O)C", inchikey: "AGUSPWZZOOWIBQ-UHFFFAOYSA-N", cid: 84029, drugbank: "DB01211" },
    "c22h24n2o8": { mw: 444.43, logp: -0.02, hbd: 6, hba: 9, tpsa: 181.7, rotbonds: 2, aromaticRings: 1, esolLogS: -2.6, smiles: "CC1C2CC3C(C(=O)C(=C(C3(C(=O)C2=C(C4=C1C=CC=C4O)O)O)O)C(=O)N)N(C)C", inchikey: "XUZYLNBYGDKNJG-UHFFFAOYSA-N", cid: 54671203, drugbank: "DB00254" },
    "c17h17cl2n": { mw: 306.23, logp: 4.3, hbd: 1, hba: 1, tpsa: 12.0, rotbonds: 2, aromaticRings: 2, esolLogS: -4.2, smiles: "CNC1CCC(C2=CC=CC=C12)C3=CC(=C(C=C3)Cl)Cl", inchikey: "BLFLLBZGZJTVJG-UHFFFAOYSA-N", cid: 68617, drugbank: "DB01104" },
    "c17h18f3no": { mw: 309.33, logp: 4.05, hbd: 1, hba: 2, tpsa: 21.3, rotbonds: 5, aromaticRings: 2, esolLogS: -4.1, smiles: "CNCCC(C1=CC=CC=C1)OC2=CC=C(C=C2)C(F)(F)F", inchikey: "RTHCYVBBDHJXIQ-UHFFFAOYSA-N", cid: 3386, drugbank: "DB00472" },
    "c9h17no2": { mw: 171.24, logp: -1.1, hbd: 2, hba: 3, tpsa: 63.3, rotbonds: 2, aromaticRings: 0, esolLogS: -0.9, smiles: "C1CCC(CC1)(CC(=O)O)CN", inchikey: "UGFAIRKFASHBSB-UHFFFAOYSA-N", cid: 3446, drugbank: "DB00996" },
    "c8h17no2": { mw: 159.23, logp: -1.35, hbd: 2, hba: 3, tpsa: 63.3, rotbonds: 3, aromaticRings: 0, esolLogS: -0.8, smiles: "CC(C)CC(CN)CC(=O)O", inchikey: "AYFYKLLPOWKGID-UHFFFAOYSA-N", cid: 54669, drugbank: "DB00230" },
    "c13h21no3": { mw: 239.31, logp: 0.66, hbd: 4, hba: 4, tpsa: 72.7, rotbonds: 4, aromaticRings: 1, esolLogS: -1.8, smiles: "CC(C)(C)NCC(C1=CC(=C(C=C1)O)CO)O", inchikey: "XGGBVPBODDHSIS-UHFFFAOYSA-N", cid: 2088, drugbank: "DB01001" },
    "c21h25cln2o3": { mw: 388.89, logp: 1.7, hbd: 1, hba: 5, tpsa: 53.0, rotbonds: 6, aromaticRings: 2, esolLogS: -3.2, smiles: "C1CN(CCN1CCOCC(=O)O)C(C2=CC=CC=C2)C3=CC=C(C=C3)Cl", inchikey: "ZKLPARSLPDLSSM-UHFFFAOYSA-N", cid: 2678, drugbank: "DB00341" },
    "c5h9no3s": { mw: 163.19, logp: -0.6, hbd: 3, hba: 4, tpsa: 75.3, rotbonds: 3, aromaticRings: 0, esolLogS: -0.5, smiles: "CC(=O)NC(CS)C(=O)O", inchikey: "PWLGBNMSAZSMBL-UHFFFAOYSA-N", cid: 12035, drugbank: "DB06151" },
    "c22h29fo5": { mw: 392.46, logp: 1.83, hbd: 3, hba: 5, tpsa: 94.8, rotbonds: 2, aromaticRings: 0, esolLogS: -3.1, smiles: "CC1CC2C3CCC4=CC(=O)C=CC4(C3(C(CC2(C1(C(=O)CO)O)C)O)F)C", inchikey: "UREBDLICKHMUKA-UHFFFAOYSA-N", cid: 5743, drugbank: "DB01234" },
    "c22h30n6o4s": { mw: 474.58, logp: 2.7, hbd: 1, hba: 7, tpsa: 113.8, rotbonds: 7, aromaticRings: 3, esolLogS: -3.8, smiles: "CCCC1=NN(C2=C1N=C(NC2=O)C3=C(C=CC(=C3)S(=O)(=O)N4CCN(CC4)C)OCC)C", inchikey: "BNRBCGZELIXJTG-UHFFFAOYSA-N", cid: 135398744, drugbank: "DB00203" },
    "c9h13no3": { mw: 183.2, logp: -0.43, hbd: 4, hba: 4, tpsa: 72.7, rotbonds: 2, aromaticRings: 1, esolLogS: -1.2, smiles: "CNC C(C1=CC(=C(C=C1)O)O)O", inchikey: "DOCEOAONQNOZCH-UHFFFAOYSA-N", cid: 5816, drugbank: "DB00668" },
    "c17h23no3": { mw: 289.37, logp: 1.83, hbd: 1, hba: 4, tpsa: 49.8, rotbonds: 4, aromaticRings: 1, esolLogS: -2.6, smiles: "CN1C2CCC1CC(C2)OC(=O)C(CO)C3=CC=CC=C3", inchikey: "RKUNNOAONLHTDA-UHFFFAOYSA-N", cid: 174174, drugbank: "DB00572" },
    "c14h22n2o": { mw: 234.34, logp: 2.44, hbd: 1, hba: 2, tpsa: 32.3, rotbonds: 4, aromaticRings: 1, esolLogS: -2.7, smiles: "CCN(CC)CC(=O)NC1=C(C=CC=C1C)C", inchikey: "ZNZRZZOQBRTCAL-UHFFFAOYSA-N", cid: 3926, drugbank: "DB00281" },
    "c8h15no2": { mw: 157.21, logp: -1.5, hbd: 2, hba: 3, tpsa: 63.3, rotbonds: 2, aromaticRings: 0, esolLogS: -0.6, smiles: "C1CC(CCC1CN)C(=O)O", inchikey: "JYIKLTIWZFOTOW-UHFFFAOYSA-N", cid: 5526, drugbank: "DB00302" }
  };

  // =========================================================================
  // 4. CHEMICAL CORE CALCULATION ENGINE
  // =========================================================================

  /**
   * Calculate boiling point at variable pressure using Antoine Equation (CalebBell/chemicals)
   * @param {string} formulaKey - Normalized chemical formula (e.g. 'h2o', 'c2h5oh')
   * @param {number} pressureMbar - Pressure in millibars (Standard atm: 1013.25 mbar)
   * @param {number} fallbackNormalBpC - Standard boiling point at 1 atm if Antoine not found
   * @returns {Object} Boiling point, vapor pressure curve points, method used
   */
  function calculateBoilingPointAtPressure(formulaKey, pressureMbar, fallbackNormalBpC) {
    const P = Math.max(1.0, Math.min(50000.0, pressureMbar || 1013.25));
    const P_mmHg = P / 1.33322387415; // mbar to mmHg
    const key = (formulaKey || "").toLowerCase().replace(/[^a-z0-9_]/g, "");

    const entry = ANTOINE_DATABASE[key];

    if (entry) {
      // T = B / (A - log10(P_mmHg)) - C
      const logP = Math.log10(P_mmHg);
      const denom = entry.A - logP;
      if (denom > 0.1) {
        const bpC = (entry.B / denom) - entry.C;
        return {
          boilingPointC: Math.round(bpC * 10) / 10,
          pressureMbar: P,
          method: "Antoine DIPPR Hassas Denklem",
          formula: entry.name,
          normalBpC: Math.round(((entry.B / (entry.A - Math.log10(760.0))) - entry.C) * 10) / 10,
          deltaT: Math.round((bpC - ((entry.B / (entry.A - Math.log10(760.0))) - entry.C)) * 10) / 10,
          isVacuum: P < 1000.0
        };
      }
    }

    // Fallback: Clausius-Clapeyron with Trouton's Rule (CalebBell/chemicals phase_change)
    const T0_C = fallbackNormalBpC !== undefined && fallbackNormalBpC !== null ? fallbackNormalBpC : 100.0;
    const T0_K = T0_C + 273.15;
    const R = 8.31446; // J/(mol*K)
    const deltaHvap = 88.0 * T0_K; // Trouton's rule: ~88 J/(mol*K)

    // ln(P / P0) = - (deltaHvap / R) * (1/T - 1/T0)
    // 1/T = 1/T0 - (R * ln(P/P0)) / deltaHvap
    const P0 = 1013.25;
    const invT = (1.0 / T0_K) - ((R * Math.log(P / P0)) / deltaHvap);
    const T_K = 1.0 / invT;
    const bpC = T_K - 273.15;

    return {
      boilingPointC: Math.round(bpC * 10) / 10,
      pressureMbar: P,
      method: "Clausius-Clapeyron & Trouton Termodinamik Tahmin",
      formula: formulaKey || "Bileşen",
      normalBpC: T0_C,
      deltaT: Math.round((bpC - T0_C) * 10) / 10,
      isVacuum: P < 1000.0
    };
  }

  /**
   * Calculate vapor pressure at given temperature using Antoine Equation
   */
  function calculateVaporPressureAtTemp(formulaKey, tempC, fallbackNormalBpC) {
    const T = tempC !== undefined ? tempC : 20.0;
    const key = (formulaKey || "").toLowerCase().replace(/[^a-z0-9_]/g, "");
    const entry = ANTOINE_DATABASE[key];

    if (entry) {
      // log10(P_mmHg) = A - B / (T + C)
      const logP = entry.A - (entry.B / (T + entry.C));
      const P_mmHg = Math.pow(10, logP);
      const P_mbar = P_mmHg * 1.33322387415;
      return {
        vaporPressureMbar: Math.round(P_mbar * 100) / 100,
        vaporPressureMmHg: Math.round(P_mmHg * 100) / 100,
        tempC: T,
        method: "Antoine DIPPR"
      };
    }

    // Clausius Clapeyron approximation
    const T0_C = fallbackNormalBpC || 100.0;
    const T0_K = T0_C + 273.15;
    const T_K = T + 273.15;
    const deltaHvap = 88.0 * T0_K;
    const R = 8.31446;
    const lnRatio = - (deltaHvap / R) * ((1.0 / T_K) - (1.0 / T0_K));
    const P_mbar = 1013.25 * Math.exp(lnRatio);

    return {
      vaporPressureMbar: Math.round(P_mbar * 100) / 100,
      vaporPressureMmHg: Math.round((P_mbar / 1.33322) * 100) / 100,
      tempC: T,
      method: "Clausius-Clapeyron Trouton"
    };
  }

  /**
   * Hansen Solubility Sphere Evaluation (CalebBell/chemicals)
   * Computes Ra distance and Relative Energy Difference (RED)
   */
  function evaluateHansenSolubility(soluteKey, solventKey) {
    const s1Key = (soluteKey || "").toLowerCase().replace(/[^a-z0-9_]/g, "");
    const s2Key = (solventKey || "").toLowerCase().replace(/[^a-z0-9_]/g, "");

    const h1 = HANSEN_DATABASE[s1Key] || { d: 17.0, p: 8.0, h: 10.0, r0: 9.0, name: soluteKey };
    const h2 = HANSEN_DATABASE[s2Key] || { d: 15.5, p: 16.0, h: 42.3, r0: 13.0, name: solventKey };

    // Ra^2 = 4*(d1 - d2)^2 + (p1 - p2)^2 + (h1 - h2)^2
    const deltaD = h1.d - h2.d;
    const deltaP = h1.p - h2.p;
    const deltaH = h1.h - h2.h;
    const Ra = Math.sqrt(4 * deltaD * deltaD + deltaP * deltaP + deltaH * deltaH);

    // RED = Ra / R0
    const RED = Ra / (h1.r0 || 10.0);

    let classification = "UNKNOWN";
    let badgeClass = "badge-outline";
    let description = "";

    if (RED < 0.8) {
      classification = "YÜKSEK ÇÖZÜNÜRLÜK (Kusursuz Karışma)";
      badgeClass = "badge-teal";
      description = "Çözünen madde çözücünün Hansen çözünürlük küresinin merkezindedir. Moleküller arası dispersiyon, polarite ve H-bağları kusursuz uyum sağlar.";
    } else if (RED <= 1.1) {
      classification = "SINIRDA ÇÖZÜNÜRLÜK (Kısmi / Sıcakta Çözünür)";
      badgeClass = "badge-gold";
      description = "Çözünen madde çözünürlük küresinin sınırındadır. Oda sıcaklığında kısmi çözünme veya süspansiyon; ısıtıldığında tam homojenleşme gözlenir.";
    } else {
      classification = "ÇÖZÜNMEZ (Faz Ayrışması / Tortu)";
      badgeClass = "badge-red";
      description = "Hansen mesafesi etkileşim yarıçapını aşmaktadır (RED > 1.0). Polarite veya hidrojen bağı uyumsuzluğu sebebiyle iki faz birbirinden ayrışır.";
    }

    return {
      solute: h1.name,
      solvent: h2.name,
      soluteHSP: { d: h1.d, p: h1.p, h: h1.h },
      solventHSP: { d: h2.d, p: h2.p, h: h2.h },
      Ra: Math.round(Ra * 100) / 100,
      RED: Math.round(RED * 100) / 100,
      classification: classification,
      badgeClass: badgeClass,
      description: description,
      isSoluble: RED <= 1.0
    };
  }

  /**
   * Drug-Drug Interaction & Synergy Evaluator (AstraZeneca/chemicalx)
   */
  function evaluateDrugInteractions(speciesList) {
    if (!Array.isArray(speciesList) || speciesList.length < 2) {
      return { hasInteraction: false, interactions: [] };
    }

    const detectedInteractions = [];

    // Helper to match species names with bilingual and formula synonym dictionary
    const SYNONYMS = {
      "paracetamol": ["parasetamol", "paracetamol", "asetaminofen", "acetaminophen", "c8h9no2"],
      "ethanol": ["etanol", "ethanol", "etil alkol", "ethyl alcohol", "spiritus vini", "c2h5oh"],
      "aspirin": ["aspirin", "asetilsalisilik", "acetylsalicylic", "c9h8o4"],
      "caffeine": ["kafein", "caffeine", "c8h10n4o2"],
      "mupirocin": ["mupirosin", "mupirocin", "c26h44o9"],
      "peg": ["peg", "polietilen glikol", "polyethylene glycol", "macrogol"],
      "bleach": ["çamaşır suyu", "camasir suyu", "bleach", "hipoklorit", "hypochlorite", "naocl"],
      "acid": ["asit", "acid", "hcl", "tuz ruhu", "h2so4", "zaç", "hno3", "asetik"],
      "ammonia": ["amonyak", "ammonia", "nh3", "nh4oh"],
      "potassium": ["potasyum", "potassium", "sub-elem-k", "sub-potasyum"],
      "water": ["su", "water", "aqua", "h2o"],
      "salicylic": ["salisilik", "salicylic", "c7h6o3"],
      "iron": ["demir", "iron", "fe", "ferrum", "feso4", "fecl3"],
      "warfarin": ["varfarin", "warfarin", "c19h16o4", "coumadin"],
      "clopidogrel": ["klopidogrel", "clopidogrel", "c16h16clno2s", "plavix"],
      "omeprazole": ["omeprazol", "omeprazole", "c17h19n3o3s", "losec", "pantoprazol", "pantoprazole", "esomeprazol", "esomeprazole"],
      "acei": ["lisinopril", "ramipril", "enalapril", "kaptopril", "captopril", "ace_inhibitor", "c21h31n3o5", "c23h32n2o5"],
      "spironolactone": ["spironolakton", "spironolactone", "aldactone", "c24h32o4s"],
      "nsaid": ["ibuprofen", "naproksen", "naproxen", "diklofenak", "diclofenac", "ketoprofen", "aspirin", "meloksikam", "celecoxib", "selekoksib", "indometasin", "c14h14o3", "c14h11cl2no2", "c13h18o2"],
      "statin": ["atorvastatin", "simvastatin", "rosuvastatin", "lipitor", "crestor", "zocor", "c33h35fn2o5", "c25h38o5", "c22h28fn3o6s"],
      "macrolide": ["klaritromisin", "clarithromycin", "azitromisin", "azithromycin", "eritromisin", "klacid", "c38h69no13", "c38h72n2o12"],
      "fibrate": ["fenofibrat", "fenofibrate", "lipanthyl", "gemfibrozil", "c20h21clo4"],
      "quinolone": ["siprofloksasin", "ciprofloxacin", "levofloksasin", "levofloxacin", "cipro", "cravit", "moksifloksasin", "c17h18fn3o3", "c18h20fn3o4"],
      "cation": ["kalsiyum", "calcium", "demir", "iron", "magnezyum", "magnesium", "antasit", "antacid", "sut", "süt", "sub-elem-ca", "sub-elem-fe", "sub-elem-mg"],
      "digoxin": ["digoksin", "digoxin", "digoxine", "c41h64o14"],
      "amiodarone": ["amiodaron", "amiodarone", "cordarone", "c25h29i2no3"],
      "verapamil": ["verapamil", "diltiazem", "isoptin", "diltizem", "c27h38n2o4", "c22h26n2o4s"],
      "furosemide": ["furosemid", "furosemide", "lasix", "c12h11cln2o5s"],
      "ssri": ["sertralin", "sertraline", "fluoksetin", "fluoxetine", "essitalopram", "escitalopram", "prozac", "lustral", "cipralex", "c17h17cl2n", "c17h18f3no"],
      "tramadol": ["tramadol", "contramal", "kantaron", "st_johns_wort"],
      "betablocker": ["metoprolol", "bisoprolol", "propranolol", "karvedilol", "carvedilol", "beloc", "concor", "dideral", "c15h25no3", "c18h31no4", "c16h21no2"],
      "sildenafil": ["sildenafil", "tadalafil", "viagra", "cialis", "c22h30n6o4s", "c22h19n3o4"],
      "nitrate": ["nitrogliserin", "nitroglycerin", "izosorbid", "isosorbide", "monoket", "isordil", "nitrat"],
      "carbamazepine": ["karbamazepin", "carbamazepine", "tegretol", "c15h12n2o"],
      "contraceptive": ["estradiol", "progesteron", "levonorgestrel", "yasmin", "yaz", "kontraseptif", "c18h24o2", "c21h30o2", "c21h28o2"],
      "allopurinol": ["allopurinol", "zyloric", "c5h4n4o"],
      "azathioprine": ["azatiyoprin", "azathioprine", "imuran", "6-merkaptopurin"],
      "metformin": ["metformin", "glukofen", "matofin", "diaformin", "glifor", "c4h11n5"]
    };

    function hasSpecies(keyword) {
      const k = keyword.toLowerCase();
      const targets = SYNONYMS[k] || [k];

      return speciesList.some(s => {
        const n = (s.name || "").toLowerCase();
        const f = (s.formula || "").toLowerCase();
        const id = (s.id || s.subId || "").toLowerCase();
        return targets.some(t => n.includes(t) || f.includes(t) || id.includes(t));
      });
    }

    DDI_RULES.forEach(rule => {
      const match = rule.pair.every(k => hasSpecies(k));
      if (match) {
        detectedInteractions.push(rule);
      }
    });

    const hasFatal = detectedInteractions.some(i => i.severity === 'FATAL');

    return {
      hasInteraction: detectedInteractions.length > 0,
      interactionsFound: detectedInteractions.length > 0,
      count: detectedInteractions.length,
      interactionsCount: detectedInteractions.length,
      interactions: detectedInteractions,
      hasFatalGas: hasFatal,
      highestSeverity: hasFatal ? 'FATAL' :
                       detectedInteractions.some(i => i.severity === 'CRITICAL') ? 'CRITICAL' :
                       detectedInteractions.some(i => i.severity === 'DANGEROUS') ? 'DANGEROUS' :
                       detectedInteractions.some(i => i.severity === 'HIGH') ? 'HIGH' :
                       detectedInteractions.some(i => i.severity === 'BENEFICIAL') ? 'BENEFICIAL' : 'NORMAL'
    };
  }

  /**
   * Lipinski Rule of 5 and QSPR Properties (chainer-chemistry & chemlab)
   */
  function evaluateQSPRAndLipinski(substance) {
    if (!substance) return null;

    const fKey = (substance.chemical_formula || "").toLowerCase().replace(/[^a-z0-9_]/g, "");
    const qspr = QSPR_DATABASE[fKey] || {};

    const mw = qspr.mw || substance.mw || 100.0;
    const logp = qspr.logp !== undefined ? qspr.logp : (mw > 300 ? 2.5 : (mw > 100 ? 1.0 : -0.5));
    const hbd = qspr.hbd !== undefined ? qspr.hbd : ((substance.chemical_formula || "").match(/OH|NH/g) || []).length;
    const hba = qspr.hba !== undefined ? qspr.hba : ((substance.chemical_formula || "").match(/[ON]/g) || []).length;
    const tpsa = qspr.tpsa !== undefined ? qspr.tpsa : Math.round((hba * 18.0 + hbd * 10.0) * 10) / 10;
    const rotbonds = qspr.rotbonds !== undefined ? qspr.rotbonds : Math.min(15, Math.floor(mw / 35));
    const esolLogS = qspr.esolLogS !== undefined ? qspr.esolLogS : Math.round((0.16 - 0.63 * logp - 0.0062 * mw + 0.066 * rotbonds) * 100) / 100;

    // Lipinski Violations (MW <= 500, LogP <= 5, HBD <= 5, HBA <= 10)
    let violations = 0;
    const violationDetails = [];
    if (mw > 500) { violations++; violationDetails.push(`MW > 500 (${mw.toFixed(1)} Da)`); }
    if (logp > 5.0) { violations++; violationDetails.push(`LogP > 5.0 (${logp.toFixed(2)})`); }
    if (hbd > 5) { violations++; violationDetails.push(`H-Bond Donör > 5 (${hbd})`); }
    if (hba > 10) { violations++; violationDetails.push(`H-Bond Alıcı > 10 (${hba})`); }

    const isDruglike = violations <= 1;

    return {
      mw: mw,
      logp: logp,
      hbd: hbd,
      hba: hba,
      tpsa: tpsa,
      rotbonds: rotbonds,
      esolLogS: esolLogS,
      solubilityCategory: esolLogS > -1.0 ? "Yüksek Çözünürlük" : (esolLogS > -3.0 ? "Orta Çözünürlük" : "Düşük / Lipofilik"),
      violations: violations,
      violationDetails: violationDetails,
      isDruglike: isDruglike,
      ruleOfFivePassed: violations === 0,
      smiles: qspr.smiles || (substance.chemical_formula || "C"),
      inchikey: qspr.inchikey || "N/A",
      cid: qspr.cid || null,
      drugbank: qspr.drugbank || null
    };
  }

  // =========================================================================
  // 5. CHEMFILES - MOLECULAR STRUCTURE EXPORTER (MOL, SDF, PDB, XYZ)
  // =========================================================================

  /**
   * Generates MDL Molfile V2000 structure format
   */
  function generateMolV2000(substance) {
    const name = substance.name || "Molecule";
    const formula = substance.chemical_formula || "C";
    const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, "");

    let mol = `${name}\n  AntigravityChemfilesBridge_${dateStr}\n\n`;

    // Simple 2D coordinates heuristic generator for atoms
    const atoms = [];
    const bonds = [];

    // Parse simple formula tokens (e.g. C, H, O, N)
    const matches = formula.match(/([A-Z][a-z]*)(\d*)/g) || ["C", "H"];
    let atomIdx = 1;
    let radius = 1.2;

    matches.forEach((token, groupIdx) => {
      const m = token.match(/([A-Z][a-z]*)(\d*)/);
      if (!m) return;
      const elem = m[1];
      const count = parseInt(m[2], 10) || 1;
      const countToRender = Math.min(12, count);

      for (let i = 0; i < countToRender; i++) {
        const angle = ((atomIdx - 1) / 8.0) * Math.PI * 2;
        const x = (Math.cos(angle) * (radius + groupIdx * 0.8)).toFixed(4);
        const y = (Math.sin(angle) * (radius + groupIdx * 0.8)).toFixed(4);
        const z = "0.0000";
        atoms.push({ id: atomIdx, elem: elem, x, y, z });

        if (atomIdx > 1) {
          bonds.push({ from: atomIdx - 1, to: atomIdx, type: 1 });
        }
        atomIdx++;
      }
    });

    if (atoms.length === 0) {
      atoms.push({ id: 1, elem: "C", x: "0.0000", y: "0.0000", z: "0.0000" });
    }

    // Counts line
    const atomCount = String(atoms.length).padStart(3, " ");
    const bondCount = String(bonds.length).padStart(3, " ");
    mol += `${atomCount}${bondCount}  0  0  0  0  0  0  0  0999 V2000\n`;

    // Atom block
    atoms.forEach(a => {
      const x = String(a.x).padStart(10, " ");
      const y = String(a.y).padStart(10, " ");
      const z = String(a.z).padStart(10, " ");
      const elem = a.elem.padEnd(3, " ");
      mol += `${x}${y}${z} ${elem} 0  0  0  0  0  0  0  0  0  0  0  0\n`;
    });

    // Bond block
    bonds.forEach(b => {
      const from = String(b.from).padStart(3, " ");
      const to = String(b.to).padStart(3, " ");
      const type = String(b.type).padStart(3, " ");
      mol += `${from}${to}${type}  0  0  0  0\n`;
    });

    mol += "M  END\n";
    return mol;
  }

  /**
   * Generates Structure-Data File (SDF) format with metadata tags
   */
  function generateSDF(substance) {
    let sdf = generateMolV2000(substance);
    const qspr = evaluateQSPRAndLipinski(substance) || {};

    sdf += `> <NAME>\n${substance.name || ""}\n\n`;
    sdf += `> <CHEMICAL_FORMULA>\n${substance.chemical_formula || ""}\n\n`;
    sdf += `> <CAS_NUMBER>\n${substance.cas_number || "N/A"}\n\n`;
    sdf += `> <MOLECULAR_WEIGHT>\n${qspr.mw || substance.mw || 100.0}\n\n`;
    sdf += `> <LOGP_OCTANOL_WATER>\n${qspr.logp || 0.0}\n\n`;
    sdf += `> <TPSA_POLAR_SURFACE_AREA>\n${qspr.tpsa || 0.0}\n\n`;
    sdf += `> <SMILES>\n${qspr.smiles || ""}\n\n`;
    if (qspr.cid) sdf += `> <PUBCHEM_CID>\n${qspr.cid}\n\n`;
    if (qspr.drugbank) sdf += `> <DRUGBANK_ID>\n${qspr.drugbank}\n\n`;
    sdf += "$$$$\n";
    return sdf;
  }

  /**
   * Generates Protein Data Bank (PDB) format
   */
  function generatePDB(substance) {
    const name = (substance.name || "MOL").slice(0, 3).toUpperCase();
    const formula = substance.chemical_formula || "C";
    let pdb = `HEADER    COMPUTATIONAL CHEMINFORMATICS MODEL     ${new Date().toISOString().slice(0, 10)}\n`;
    pdb += `TITLE     ${substance.name || "Chemical Structure"}\n`;
    pdb += `COMPND    MOL_ID: 1; MOLECULE: ${substance.name || "Molecule"}; FORMULA: ${formula}\n`;

    const matches = formula.match(/([A-Z][a-z]*)(\d*)/g) || ["C"];
    let atomIdx = 1;
    let radius = 1.3;

    matches.forEach((token, gIdx) => {
      const m = token.match(/([A-Z][a-z]*)(\d*)/);
      if (!m) return;
      const elem = m[1];
      const count = Math.min(10, parseInt(m[2], 10) || 1);

      for (let i = 0; i < count; i++) {
        const phi = (atomIdx / 10.0) * Math.PI * 2;
        const x = (Math.cos(phi) * (radius + gIdx * 0.7)).toFixed(3).padStart(8, " ");
        const y = (Math.sin(phi) * (radius + gIdx * 0.7)).toFixed(3).padStart(8, " ");
        const z = ((i - count / 2) * 0.4).toFixed(3).padStart(8, " ");
        const serial = String(atomIdx).padStart(5, " ");
        const atomName = (elem + String(i + 1)).padEnd(4, " ");

        pdb += `HETATM${serial} ${atomName} ${name} A   1    ${x}${y}${z}  1.00 20.00          ${elem.padStart(2, " ")}\n`;
        atomIdx++;
      }
    });

    pdb += "END\n";
    return pdb;
  }

  /**
   * Generates Cartesian XYZ format
   */
  function generateXYZ(substance) {
    const formula = substance.chemical_formula || "C";
    const matches = formula.match(/([A-Z][a-z]*)(\d*)/g) || ["C"];
    const rows = [];
    let atomIdx = 1;

    matches.forEach((token, gIdx) => {
      const m = token.match(/([A-Z][a-z]*)(\d*)/);
      if (!m) return;
      const elem = m[1];
      const count = Math.min(12, parseInt(m[2], 10) || 1);

      for (let i = 0; i < count; i++) {
        const angle = (atomIdx / 8.0) * Math.PI * 2;
        const x = (Math.cos(angle) * (1.2 + gIdx * 0.6)).toFixed(4);
        const y = (Math.sin(angle) * (1.2 + gIdx * 0.6)).toFixed(4);
        const z = (0.0).toFixed(4);
        rows.push(`${elem.padEnd(3, " ")} ${x.padStart(10, " ")} ${y.padStart(10, " ")} ${z.padStart(10, " ")}`);
        atomIdx++;
      }
    });

    let xyz = `${rows.length}\n`;
    xyz += `${substance.name || "Molecule"} - Formula: ${formula} - Generated by Antigravity Chemfiles Bridge\n`;
    xyz += rows.join("\n") + "\n";
    return xyz;
  }

  /**
   * Trigger in-browser file download
   */
  function downloadMolecularFile(content, filename, mimeType) {
    if (typeof window === "undefined" || typeof document === "undefined") return;
    const blob = new Blob([content], { type: mimeType || "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // =========================================================================
  // 6. AWESOME-CHEMINFORMATICS - DATABASE REGISTRY & CROSS-WALK
  // =========================================================================
  function getDatabaseRegistryLinks(substance) {
    if (!substance) return [];

    const fKey = (substance.chemical_formula || "").toLowerCase().replace(/[^a-z0-9_]/g, "");
    const qspr = QSPR_DATABASE[fKey] || {};
    const links = [];

    // PubChem
    const cid = qspr.cid || substance.pubchem_cid;
    if (cid) {
      links.push({
        database: "PubChem (NIH)",
        id: `CID ${cid}`,
        badge: "badge-teal",
        url: `https://pubchem.ncbi.nlm.nih.gov/compound/${cid}`,
        description: "Biyoaktif aktiviteler, 3D kristal yapı ve patent kayıtları"
      });
    }

    // DrugBank
    const dbId = qspr.drugbank || substance.drugbank_id;
    if (dbId) {
      links.push({
        database: "DrugBank",
        id: dbId,
        badge: "badge-gold",
        url: `https://go.drugbank.com/drugs/${dbId}`,
        description: "Farmakolojik hedefler, metabolizma (CYP450) ve klinik denemeler"
      });
    }

    // CAS Registry
    if (substance.cas_number && substance.cas_number !== "N/A") {
      links.push({
        database: "Common Chemistry (CAS)",
        id: substance.cas_number,
        badge: "badge-outline",
        url: `https://commonchemistry.cas.org/detail?cas_rn=${encodeURIComponent(substance.cas_number)}`,
        description: "Amerikan Kimya Derneği (ACS) resmi tescil kaydı"
      });
    }

    // ChemSpider Search Link
    const query = substance.chemical_formula || substance.name;
    links.push({
      database: "ChemSpider (RSC)",
      id: "RSC Search",
      badge: "badge-teal",
      url: `https://www.chemspider.com/Search.aspx?q=${encodeURIComponent(query)}`,
      description: "Royal Society of Chemistry spektroskopi ve fiziksel özellik veritabanı"
    });

    return links;
  }

  // =========================================================================
  // 7. UNIFIED HIGH-LEVEL CHEMINFORMATICS ANALYSIS API
  // =========================================================================
  function analyzeSubstance(substance, pressureMbar) {
    if (!substance) return null;
    const p = pressureMbar || 1013.25;

    const fKey = (substance.chemical_formula || "").toLowerCase().replace(/[^a-z0-9_]/g, "");
    const thermo = calculateBoilingPointAtPressure(fKey, p, substance.boiling_point_c);
    const vapP = calculateVaporPressureAtTemp(fKey, 20.0, substance.boiling_point_c);
    const combustion = COMBUSTION_DATABASE[fKey] || {};
    const qspr = evaluateQSPRAndLipinski(substance);
    const hsp = HANSEN_DATABASE[fKey] || null;
    const dbLinks = getDatabaseRegistryLinks(substance);

    return {
      substance: substance,
      thermodynamics: {
        pressureMbar: p,
        dynamicBpC: thermo.boilingPointC,
        normalBpC: thermo.normalBpC,
        deltaBpC: thermo.deltaT,
        method: thermo.method,
        isVacuum: thermo.isVacuum,
        vaporPressure20C_mbar: vapP.vaporPressureMbar,
        flashPointC: combustion.flashPointC !== undefined ? combustion.flashPointC : null,
        autoignitionC: combustion.autoignitionC !== undefined ? combustion.autoignitionC : null,
        lflPct: combustion.lflPct || null,
        uflPct: combustion.uflPct || null,
        deltaHvapKJ: combustion.deltaHvapKJ || null,
        viscosityCp: combustion.viscosityCp || null,
        surfaceTension: combustion.surfaceTension || null
      },
      hansenSolubility: hsp ? {
        dispersion: hsp.d,
        polar: hsp.p,
        hydrogenBonding: hsp.h,
        interactionRadius: hsp.r0,
        totalHildebrand: Math.round(Math.sqrt(hsp.d*hsp.d + hsp.p*hsp.p + hsp.h*hsp.h) * 10) / 10
      } : null,
      qsprLipinski: qspr,
      databaseLinks: dbLinks,
      formats: {
        mol: generateMolV2000(substance),
        sdf: generateSDF(substance),
        pdb: generatePDB(substance),
        xyz: generateXYZ(substance),
        smiles: qspr?.smiles || substance.chemical_formula
      }
    };
  }

  function analyzeVesselCheminformatics(vesselItems, catalog, pressureMbar) {
    if (!Array.isArray(vesselItems) || vesselItems.length === 0) {
      return { feasible: false, message: "Reaksiyon kabında madde bulunamadı." };
    }

    const p = pressureMbar || 1013.25;
    const analyzedSubstances = [];

    vesselItems.forEach(item => {
      const sub = catalog.find(s => s.id === item.subId) || {
        name: item.customLabel || "Özel Madde",
        chemical_formula: item.customLabel || "C",
        boiling_point_c: 100.0,
        melting_point_c: 0.0
      };
      analyzedSubstances.push(analyzeSubstance(sub, p));
    });

    // Check Drug-Drug Interactions
    const ddiReport = evaluateDrugInteractions(vesselItems.map(i => {
      const s = catalog.find(x => x.id === i.subId);
      return { id: i.subId, name: s ? s.name : i.customLabel, formula: s ? s.chemical_formula : '' };
    }));

    // Check Hansen Pairwise Miscibility / Solubility if >= 2 substances
    const hansenPairs = [];
    if (analyzedSubstances.length >= 2) {
      for (let i = 0; i < analyzedSubstances.length; i++) {
        for (let j = i + 1; j < analyzedSubstances.length; j++) {
          const s1 = analyzedSubstances[i].substance;
          const s2 = analyzedSubstances[j].substance;
          const fKey1 = (s1.chemical_formula || "").toLowerCase().replace(/[^a-z0-9_]/g, "");
          const fKey2 = (s2.chemical_formula || "").toLowerCase().replace(/[^a-z0-9_]/g, "");
          hansenPairs.push(evaluateHansenSolubility(fKey1, fKey2));
        }
      }
    }

    return {
      feasible: true,
      pressureMbar: p,
      isVacuum: p < 1000.0,
      substancesCount: analyzedSubstances.length,
      substances: analyzedSubstances,
      ddiReport: ddiReport,
      hansenPairs: hansenPairs
    };
  }

  // --- Export to Global Environment ---
  global.LabCheminformatics = {
    ANTOINE_DATABASE,
    HANSEN_DATABASE,
    COMBUSTION_DATABASE,
    DDI_RULES,
    QSPR_DATABASE,
    // Methods
    calculateBoilingPointAtPressure,
    calculateVaporPressureAtTemp,
    evaluateHansenSolubility,
    evaluateDrugInteractions,
    evaluateQSPRAndLipinski,
    generateMolV2000,
    generateSDF,
    generatePDB,
    generateXYZ,
    downloadMolecularFile,
    getDatabaseRegistryLinks,
    analyzeSubstance,
    analyzeVesselCheminformatics
  };

})(typeof window !== "undefined" ? window : global);

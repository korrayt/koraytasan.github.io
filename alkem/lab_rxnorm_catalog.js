// =========================================================================
// TEST LAB 1000: NLM RxNorm & RxClass Pharmacological Active Ingredients Catalog
// Generated automatically by scripts/sync_nlm_rxnorm.js
// Compatible with Zero-CORS offline execution (file:/// protocol)
//
// Mandatory NLM Attribution:
// "This product uses publicly available data from the U.S. National Library of Medicine (NLM), National Institutes of Health, Department of Health and Human Services; NLM is not responsible for the product and does not endorse or recommend this or any other product."
//
// Legal & AI Disclaimer:
// "Formüller yapay zeka araçları ve hesaplama motorları kullanılarak internet verileri araştırmaları sonucu oluşturulmuştur. Sonuçlarda hata olabilir."
// =========================================================================

(function(global) {
  'use strict';

  var RXNORM_CATALOG = {
  "schema_version": "1.0.0",
  "title": "TEST LAB 1000 malzeme",
  "record_count": 1000,
  "retrieved_at_utc": "2026-10-09T02:08:28+00:00",
  "nlm_attribution": "This product uses publicly available data from the U.S. National Library of Medicine (NLM), National Institutes of Health, Department of Health and Human Services; NLM is not responsible for the product and does not endorse or recommend this or any other product.",
  "endpoints": {
    "rxnorm_in": "https://rxnav.nlm.nih.gov/REST/allconcepts.json?tty=IN",
    "rxnorm_pin": "https://rxnav.nlm.nih.gov/REST/allconcepts.json?tty=PIN",
    "prescribe_in": "https://rxnav.nlm.nih.gov/REST/Prescribe/allconcepts.json?tty=IN",
    "rxclass_atc": "https://rxnav.nlm.nih.gov/REST/rxclass/allClasses.json?classTypes=ATC1-4",
    "rxclass_doc": "https://lhncbc.nlm.nih.gov/RxNav/APIs/api-RxClass.getClassMembers.html",
    "rxnorm_ttys": "https://www.nlm.nih.gov/research/umls/rxnorm/docs/appendix5.html",
    "atc_antipyretics": "https://atcddd.fhi.no/atc_ddd_index/?code=N02B&showdescription=no",
    "atc_antiinflammatory": "https://atcddd.fhi.no/atc_ddd_index/?code=M01A&showdescription=no"
  },
  "atc_groups": {
    "A": {
      "code": "A",
      "name_en": "ALIMENTARY TRACT AND METABOLISM",
      "name_tr": "Sindirim sistemi ve metabolizma",
      "icon": "🍞"
    },
    "B": {
      "code": "B",
      "name_en": "BLOOD AND BLOOD FORMING ORGANS",
      "name_tr": "Kan ve kan yapıcı organlar",
      "icon": "🩸"
    },
    "C": {
      "code": "C",
      "name_en": "CARDIOVASCULAR SYSTEM",
      "name_tr": "Kalp ve damar sistemi",
      "icon": "❤️"
    },
    "D": {
      "code": "D",
      "name_en": "DERMATOLOGICALS",
      "name_tr": "Dermatolojik ilaçlar",
      "icon": "🧴"
    },
    "G": {
      "code": "G",
      "name_en": "GENITO URINARY SYSTEM AND SEX HORMONES",
      "name_tr": "Ürogenital sistem ve cinsiyet hormonları",
      "icon": "🧬"
    },
    "H": {
      "code": "H",
      "name_en": "SYSTEMIC HORMONAL PREPARATIONS",
      "name_tr": "Sistemik hormonal preparatlar",
      "icon": "⚖️"
    },
    "J": {
      "code": "J",
      "name_en": "ANTIINFECTIVES FOR SYSTEMIC USE",
      "name_tr": "Sistemik kullanım için anti-enfektifler",
      "icon": "🛡️"
    },
    "L": {
      "code": "L",
      "name_en": "ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS",
      "name_tr": "Antineoplastik ve immünomodülatör ajanlar",
      "icon": "🔬"
    },
    "M": {
      "code": "M",
      "name_en": "MUSCULO-SKELETAL SYSTEM",
      "name_tr": "Kas ve iskelet sistemi",
      "icon": "🦴"
    },
    "N": {
      "code": "N",
      "name_en": "NERVOUS SYSTEM",
      "name_tr": "Sinir sistemi",
      "icon": "🧠"
    },
    "P": {
      "code": "P",
      "name_en": "ANTIPARASITIC PRODUCTS, INSECTICIDES AND REPELLENTS",
      "name_tr": "Antiparaziter ürünler",
      "icon": "🌿"
    },
    "R": {
      "code": "R",
      "name_en": "RESPIRATORY SYSTEM",
      "name_tr": "Solunum sistemi",
      "icon": "🫁"
    },
    "S": {
      "code": "S",
      "name_en": "SENSORY ORGANS",
      "name_tr": "Duyu organları",
      "icon": "👁️"
    },
    "V": {
      "code": "V",
      "name_en": "VARIOUS",
      "name_tr": "Çeşitli",
      "icon": "📦"
    }
  },
  "term_definitions": [
    {
      "term": "antipiretik",
      "record_kind": "effect_class",
      "material": false,
      "source_url": "https://atcddd.fhi.no/atc_ddd_index/?code=N02B&showdescription=no"
    },
    {
      "term": "antienflamatuar",
      "record_kind": "effect_class",
      "material": false,
      "source_url": "https://atcddd.fhi.no/atc_ddd_index/?code=M01A&showdescription=no"
    },
    {
      "term": "hidroklorür",
      "record_kind": "salt_descriptor",
      "material": false,
      "source_url": "https://www.nlm.nih.gov/research/umls/rxnorm/docs/appendix5.html"
    }
  ],
  "materials": [
    {
      "id": "RXNORM:4910",
      "sequence": 1,
      "display_name": "Gliserin",
      "canonical_name": "glycerin",
      "aliases": [
        "Gliserin",
        "gliserol",
        "glycerin",
        "glycerol"
      ],
      "rxcui": "4910",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A06AG04",
        "A06AX01"
      ],
      "atc_memberships": [
        {
          "code": "A06AG04",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A06AG",
          "subclass_name": "Enemas"
        },
        {
          "code": "A06AX01",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A06AX",
          "subclass_name": "Other drugs for constipation"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/4910/properties.json"
    },
    {
      "id": "RXNORM:3966",
      "sequence": 2,
      "display_name": "Efedrin",
      "canonical_name": "ephedrine",
      "aliases": [
        "Efedrin",
        "ephedrine"
      ],
      "rxcui": "3966",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C01CA26",
        "R01AA03",
        "R01AB05",
        "R03CA02",
        "S01FB02"
      ],
      "atc_memberships": [
        {
          "code": "C01CA26",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C01CA",
          "subclass_name": "Adrenergic and dopaminergic agents"
        },
        {
          "code": "R01AA03",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R01AA",
          "subclass_name": "Sympathomimetics, plain"
        },
        {
          "code": "R01AB05",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R01AB",
          "subclass_name": "Sympathomimetics, combinations excl. corticosteroids"
        },
        {
          "code": "R03CA02",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R03CA",
          "subclass_name": "Alpha- and beta-adrenoreceptor agonists"
        },
        {
          "code": "S01FB02",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01FB",
          "subclass_name": "Sympathomimetics excl. antiglaucoma preparations"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/3966/properties.json"
    },
    {
      "id": "RXNORM:6901",
      "sequence": 3,
      "display_name": "Metilfenidat",
      "canonical_name": "methylphenidate",
      "aliases": [
        "methylphenidate",
        "Metilfenidat"
      ],
      "rxcui": "6901",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N06BA04"
      ],
      "atc_memberships": [
        {
          "code": "N06BA04",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N06BA",
          "subclass_name": "Centrally acting sympathomimetics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6901/properties.json"
    },
    {
      "id": "RXNORM:91165",
      "sequence": 4,
      "display_name": "Efedrin hidroklorür",
      "canonical_name": "ephedrine hydrochloride",
      "aliases": [
        "Efedrin hidroklorür",
        "ephedrine HCl",
        "ephedrine hydrochloride"
      ],
      "rxcui": "91165",
      "term_type": "PIN",
      "record_type_tr": "Hidroklorür formu",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C01CA26",
        "R01AA03",
        "R01AB05",
        "R03CA02",
        "S01FB02"
      ],
      "atc_memberships": [
        {
          "code": "C01CA26",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C01CA",
          "subclass_name": "Adrenergic and dopaminergic agents"
        },
        {
          "code": "R01AA03",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R01AA",
          "subclass_name": "Sympathomimetics, plain"
        },
        {
          "code": "R01AB05",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R01AB",
          "subclass_name": "Sympathomimetics, combinations excl. corticosteroids"
        },
        {
          "code": "R03CA02",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R03CA",
          "subclass_name": "Alpha- and beta-adrenoreceptor agonists"
        },
        {
          "code": "S01FB02",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01FB",
          "subclass_name": "Sympathomimetics excl. antiglaucoma preparations"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/91165/properties.json"
    },
    {
      "id": "RXNORM:203188",
      "sequence": 5,
      "display_name": "Metilfenidat hidroklorür",
      "canonical_name": "methylphenidate hydrochloride",
      "aliases": [
        "methylphenidate HCl",
        "methylphenidate hydrochloride",
        "Metilfenidat hidroklorür"
      ],
      "rxcui": "203188",
      "term_type": "PIN",
      "record_type_tr": "Hidroklorür formu",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N06BA04"
      ],
      "atc_memberships": [
        {
          "code": "N06BA04",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N06BA",
          "subclass_name": "Centrally acting sympathomimetics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/203188/properties.json"
    },
    {
      "id": "RXNORM:1946825",
      "sequence": 6,
      "display_name": "abemaciclib",
      "canonical_name": "abemaciclib",
      "aliases": [
        "abemaciclib"
      ],
      "rxcui": "1946825",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01EF03"
      ],
      "atc_memberships": [
        {
          "code": "L01EF03",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01EF",
          "subclass_name": "Cyclin-dependent kinase (CDK) inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1946825/properties.json"
    },
    {
      "id": "RXNORM:1100072",
      "sequence": 7,
      "display_name": "abiraterone",
      "canonical_name": "abiraterone",
      "aliases": [
        "abiraterone"
      ],
      "rxcui": "1100072",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L02BX03"
      ],
      "atc_memberships": [
        {
          "code": "L02BX03",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L02BX",
          "subclass_name": "Other hormone antagonists and related agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1100072/properties.json"
    },
    {
      "id": "RXNORM:2591476",
      "sequence": 8,
      "display_name": "abrocitinib",
      "canonical_name": "abrocitinib",
      "aliases": [
        "abrocitinib"
      ],
      "rxcui": "2591476",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D11AH08"
      ],
      "atc_memberships": [
        {
          "code": "D11AH08",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D11AH",
          "subclass_name": "Agents for dermatitis, excluding corticosteroids"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2591476/properties.json"
    },
    {
      "id": "RXNORM:1986808",
      "sequence": 9,
      "display_name": "acalabrutinib",
      "canonical_name": "acalabrutinib",
      "aliases": [
        "acalabrutinib"
      ],
      "rxcui": "1986808",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01EL02"
      ],
      "atc_memberships": [
        {
          "code": "L01EL02",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01EL",
          "subclass_name": "Bruton's tyrosine kinase (BTK) inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1986808/properties.json"
    },
    {
      "id": "RXNORM:82819",
      "sequence": 10,
      "display_name": "acamprosate",
      "canonical_name": "acamprosate",
      "aliases": [
        "acamprosate"
      ],
      "rxcui": "82819",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N07BB03"
      ],
      "atc_memberships": [
        {
          "code": "N07BB03",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N07BB",
          "subclass_name": "Drugs used in alcohol dependence"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/82819/properties.json"
    },
    {
      "id": "RXNORM:149",
      "sequence": 11,
      "display_name": "acebutolol",
      "canonical_name": "acebutolol",
      "aliases": [
        "acebutolol"
      ],
      "rxcui": "149",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C07AB04"
      ],
      "atc_memberships": [
        {
          "code": "C07AB04",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C07AB",
          "subclass_name": "Beta blocking agents, selective"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/149/properties.json"
    },
    {
      "id": "RXNORM:2721766",
      "sequence": 12,
      "display_name": "aceclidine",
      "canonical_name": "aceclidine",
      "aliases": [
        "aceclidine"
      ],
      "rxcui": "2721766",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "S",
      "primary_group_name_tr": "Duyu organları",
      "atc_codes": [
        "S01EB08"
      ],
      "atc_memberships": [
        {
          "code": "S01EB08",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01EB",
          "subclass_name": "Parasympathomimetics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2721766/properties.json"
    },
    {
      "id": "RXNORM:155",
      "sequence": 13,
      "display_name": "acepromazine",
      "canonical_name": "acepromazine",
      "aliases": [
        "acepromazine"
      ],
      "rxcui": "155",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N05AA04"
      ],
      "atc_memberships": [
        {
          "code": "N05AA04",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N05AA",
          "subclass_name": "Phenothiazines with aliphatic side-chain"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/155/properties.json"
    },
    {
      "id": "RXNORM:161",
      "sequence": 14,
      "display_name": "Parasetamol",
      "canonical_name": "acetaminophen",
      "aliases": [
        "acetaminophen",
        "paracetamol",
        "Parasetamol"
      ],
      "rxcui": "161",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N02BE01"
      ],
      "atc_memberships": [
        {
          "code": "N02BE01",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N02BE",
          "subclass_name": "Anilides"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/161/properties.json"
    },
    {
      "id": "RXNORM:168",
      "sequence": 15,
      "display_name": "acetic acid",
      "canonical_name": "acetic acid",
      "aliases": [
        "acetic acid"
      ],
      "rxcui": "168",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "G",
      "primary_group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
      "atc_codes": [
        "G01AD02",
        "S02AA10"
      ],
      "atc_memberships": [
        {
          "code": "G01AD02",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G01AD",
          "subclass_name": "Organic acids"
        },
        {
          "code": "S02AA10",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S02AA",
          "subclass_name": "Antiinfectives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/168/properties.json"
    },
    {
      "id": "RXNORM:16728",
      "sequence": 16,
      "display_name": "acetohydroxamic acid",
      "canonical_name": "acetohydroxamic acid",
      "aliases": [
        "acetohydroxamic acid"
      ],
      "rxcui": "16728",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "G",
      "primary_group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
      "atc_codes": [
        "G04BX03"
      ],
      "atc_memberships": [
        {
          "code": "G04BX03",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G04BX",
          "subclass_name": "Other urologicals"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/16728/properties.json"
    },
    {
      "id": "RXNORM:193",
      "sequence": 17,
      "display_name": "acetylcarnitine",
      "canonical_name": "acetylcarnitine",
      "aliases": [
        "acetylcarnitine"
      ],
      "rxcui": "193",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N06BX12"
      ],
      "atc_memberships": [
        {
          "code": "N06BX12",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N06BX",
          "subclass_name": "Other psychostimulants and nootropics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/193/properties.json"
    },
    {
      "id": "RXNORM:194",
      "sequence": 18,
      "display_name": "acetylcholine",
      "canonical_name": "acetylcholine",
      "aliases": [
        "acetylcholine"
      ],
      "rxcui": "194",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "S",
      "primary_group_name_tr": "Duyu organları",
      "atc_codes": [
        "S01EB09"
      ],
      "atc_memberships": [
        {
          "code": "S01EB09",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01EB",
          "subclass_name": "Parasympathomimetics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/194/properties.json"
    },
    {
      "id": "RXNORM:272",
      "sequence": 19,
      "display_name": "activated charcoal",
      "canonical_name": "activated charcoal",
      "aliases": [
        "activated charcoal",
        "medicinal charcoal"
      ],
      "rxcui": "272",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A07BA01"
      ],
      "atc_memberships": [
        {
          "code": "A07BA01",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A07BA",
          "subclass_name": "Charcoal preparations"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/272/properties.json"
    },
    {
      "id": "RXNORM:281",
      "sequence": 20,
      "display_name": "Asiklovir",
      "canonical_name": "acyclovir",
      "aliases": [
        "aciclovir",
        "acyclovir",
        "Asiklovir"
      ],
      "rxcui": "281",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D06BB03",
        "J05AB01",
        "S01AD03"
      ],
      "atc_memberships": [
        {
          "code": "D06BB03",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D06BB",
          "subclass_name": "Antivirals"
        },
        {
          "code": "J05AB01",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J05AB",
          "subclass_name": "Nucleosides and nucleotides excl. reverse transcriptase inhibitors"
        },
        {
          "code": "S01AD03",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01AD",
          "subclass_name": "Antivirals"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/281/properties.json"
    },
    {
      "id": "RXNORM:2625882",
      "sequence": 21,
      "display_name": "adagrasib",
      "canonical_name": "adagrasib",
      "aliases": [
        "adagrasib"
      ],
      "rxcui": "2625882",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01XX77"
      ],
      "atc_memberships": [
        {
          "code": "L01XX77",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01XX",
          "subclass_name": "Other antineoplastic agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2625882/properties.json"
    },
    {
      "id": "RXNORM:327361",
      "sequence": 22,
      "display_name": "adalimumab",
      "canonical_name": "adalimumab",
      "aliases": [
        "adalimumab"
      ],
      "rxcui": "327361",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L04AB04"
      ],
      "atc_memberships": [
        {
          "code": "L04AB04",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L04AB",
          "subclass_name": "Tumor necrosis factor alpha (TNF-alpha) inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/327361/properties.json"
    },
    {
      "id": "RXNORM:60223",
      "sequence": 23,
      "display_name": "adapalene",
      "canonical_name": "adapalene",
      "aliases": [
        "adapalene"
      ],
      "rxcui": "60223",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D10AD03"
      ],
      "atc_memberships": [
        {
          "code": "D10AD03",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D10AD",
          "subclass_name": "Retinoids for topical use in acne"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/60223/properties.json"
    },
    {
      "id": "RXNORM:296",
      "sequence": 24,
      "display_name": "adenosine",
      "canonical_name": "adenosine",
      "aliases": [
        "adenosine"
      ],
      "rxcui": "296",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C01EB10"
      ],
      "atc_memberships": [
        {
          "code": "C01EB10",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C01EB",
          "subclass_name": "Other cardiac preparations"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/296/properties.json"
    },
    {
      "id": "RXNORM:1232150",
      "sequence": 25,
      "display_name": "aflibercept",
      "canonical_name": "aflibercept",
      "aliases": [
        "aflibercept"
      ],
      "rxcui": "1232150",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01XX44",
        "S01LA05"
      ],
      "atc_memberships": [
        {
          "code": "L01XX44",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01XX",
          "subclass_name": "Other antineoplastic agents"
        },
        {
          "code": "S01LA05",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01LA",
          "subclass_name": "Antineovascularisation agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1232150/properties.json"
    },
    {
      "id": "RXNORM:338817",
      "sequence": 26,
      "display_name": "agalsidase beta",
      "canonical_name": "agalsidase beta",
      "aliases": [
        "agalsidase beta"
      ],
      "rxcui": "338817",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A16AB04"
      ],
      "atc_memberships": [
        {
          "code": "A16AB04",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A16AB",
          "subclass_name": "Enzymes"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/338817/properties.json"
    },
    {
      "id": "RXNORM:435",
      "sequence": 27,
      "display_name": "Salbutamol",
      "canonical_name": "albuterol",
      "aliases": [
        "albuterol",
        "salbutamol",
        "Salbutamol"
      ],
      "rxcui": "435",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "R",
      "primary_group_name_tr": "Solunum sistemi",
      "atc_codes": [
        "R03AC02",
        "R03CC02"
      ],
      "atc_memberships": [
        {
          "code": "R03AC02",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R03AC",
          "subclass_name": "Selective beta-2-adrenoreceptor agonists"
        },
        {
          "code": "R03CC02",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R03CC",
          "subclass_name": "Selective beta-2-adrenoreceptor agonists"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/435/properties.json"
    },
    {
      "id": "RXNORM:1000082",
      "sequence": 28,
      "display_name": "alcaftadine",
      "canonical_name": "alcaftadine",
      "aliases": [
        "alcaftadine"
      ],
      "rxcui": "1000082",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "S",
      "primary_group_name_tr": "Duyu organları",
      "atc_codes": [
        "S01GX11"
      ],
      "atc_memberships": [
        {
          "code": "S01GX11",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01GX",
          "subclass_name": "Other antiallergics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1000082/properties.json"
    },
    {
      "id": "RXNORM:70223",
      "sequence": 29,
      "display_name": "aldesleukin",
      "canonical_name": "aldesleukin",
      "aliases": [
        "aldesleukin"
      ],
      "rxcui": "70223",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L03AC01"
      ],
      "atc_memberships": [
        {
          "code": "L03AC01",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L03AC",
          "subclass_name": "Interleukins"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/70223/properties.json"
    },
    {
      "id": "RXNORM:1727455",
      "sequence": 30,
      "display_name": "alectinib",
      "canonical_name": "alectinib",
      "aliases": [
        "alectinib"
      ],
      "rxcui": "1727455",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01ED03"
      ],
      "atc_memberships": [
        {
          "code": "L01ED03",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01ED",
          "subclass_name": "Anaplastic lymphoma kinase (ALK) inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1727455/properties.json"
    },
    {
      "id": "RXNORM:117055",
      "sequence": 31,
      "display_name": "alemtuzumab",
      "canonical_name": "alemtuzumab",
      "aliases": [
        "alemtuzumab"
      ],
      "rxcui": "117055",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L04AG06"
      ],
      "atc_memberships": [
        {
          "code": "L04AG06",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L04AG",
          "subclass_name": "Monoclonal antibodies"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/117055/properties.json"
    },
    {
      "id": "RXNORM:480",
      "sequence": 32,
      "display_name": "alfentanil",
      "canonical_name": "alfentanil",
      "aliases": [
        "alfentanil"
      ],
      "rxcui": "480",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N01AH02"
      ],
      "atc_memberships": [
        {
          "code": "N01AH02",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N01AH",
          "subclass_name": "Opioid anesthetics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/480/properties.json"
    },
    {
      "id": "RXNORM:17300",
      "sequence": 33,
      "display_name": "alfuzosin",
      "canonical_name": "alfuzosin",
      "aliases": [
        "alfuzosin"
      ],
      "rxcui": "17300",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "G",
      "primary_group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
      "atc_codes": [
        "G04CA01"
      ],
      "atc_memberships": [
        {
          "code": "G04CA01",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G04CA",
          "subclass_name": "Alpha-adrenoreceptor antagonists"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/17300/properties.json"
    },
    {
      "id": "RXNORM:17305",
      "sequence": 34,
      "display_name": "alginic acid",
      "canonical_name": "alginic acid",
      "aliases": [
        "alginic acid"
      ],
      "rxcui": "17305",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A02BX13"
      ],
      "atc_memberships": [
        {
          "code": "A02BX13",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A02BX",
          "subclass_name": "Other drugs for peptic ulcer and gastro-oesophageal reflux disease (GORD)"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/17305/properties.json"
    },
    {
      "id": "RXNORM:1659152",
      "sequence": 35,
      "display_name": "alirocumab",
      "canonical_name": "alirocumab",
      "aliases": [
        "alirocumab"
      ],
      "rxcui": "1659152",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C10AX14"
      ],
      "atc_memberships": [
        {
          "code": "C10AX14",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C10AX",
          "subclass_name": "Other lipid modifying agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1659152/properties.json"
    },
    {
      "id": "RXNORM:81864",
      "sequence": 36,
      "display_name": "alitretinoin",
      "canonical_name": "alitretinoin",
      "aliases": [
        "alitretinoin"
      ],
      "rxcui": "81864",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D11AH04",
        "L01XF02"
      ],
      "atc_memberships": [
        {
          "code": "D11AH04",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D11AH",
          "subclass_name": "Agents for dermatitis, excluding corticosteroids"
        },
        {
          "code": "L01XF02",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01XF",
          "subclass_name": "Retinoids for cancer treatment"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/81864/properties.json"
    },
    {
      "id": "RXNORM:519",
      "sequence": 37,
      "display_name": "allopurinol",
      "canonical_name": "allopurinol",
      "aliases": [
        "allopurinol"
      ],
      "rxcui": "519",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "M",
      "primary_group_name_tr": "Kas ve iskelet sistemi",
      "atc_codes": [
        "M04AA01"
      ],
      "atc_memberships": [
        {
          "code": "M04AA01",
          "group_code": "M",
          "group_name_tr": "Kas ve iskelet sistemi",
          "subclass_code": "M04AA",
          "subclass_name": "Preparations inhibiting uric acid production"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/519/properties.json"
    },
    {
      "id": "RXNORM:279645",
      "sequence": 38,
      "display_name": "almotriptan",
      "canonical_name": "almotriptan",
      "aliases": [
        "almotriptan"
      ],
      "rxcui": "279645",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N02CC05"
      ],
      "atc_memberships": [
        {
          "code": "N02CC05",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N02CC",
          "subclass_name": "Selective serotonin (5HT1) agonists"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/279645/properties.json"
    },
    {
      "id": "RXNORM:1368001",
      "sequence": 39,
      "display_name": "alogliptin",
      "canonical_name": "alogliptin",
      "aliases": [
        "alogliptin"
      ],
      "rxcui": "1368001",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A10BH04"
      ],
      "atc_memberships": [
        {
          "code": "A10BH04",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A10BH",
          "subclass_name": "Dipeptidyl peptidase 4 (DPP-4) inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1368001/properties.json"
    },
    {
      "id": "RXNORM:85248",
      "sequence": 40,
      "display_name": "alosetron",
      "canonical_name": "alosetron",
      "aliases": [
        "alosetron"
      ],
      "rxcui": "85248",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A03AE01"
      ],
      "atc_memberships": [
        {
          "code": "A03AE01",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A03AE",
          "subclass_name": "Serotonin receptor antagonists"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/85248/properties.json"
    },
    {
      "id": "RXNORM:535",
      "sequence": 41,
      "display_name": "alpha 1-antitrypsin",
      "canonical_name": "alpha 1-antitrypsin",
      "aliases": [
        "alfa1 antitrypsin",
        "alpha 1-antitrypsin"
      ],
      "rxcui": "535",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B02AB02"
      ],
      "atc_memberships": [
        {
          "code": "B02AB02",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B02AB",
          "subclass_name": "Proteinase inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/535/properties.json"
    },
    {
      "id": "RXNORM:8410",
      "sequence": 42,
      "display_name": "alteplase",
      "canonical_name": "alteplase",
      "aliases": [
        "alteplase"
      ],
      "rxcui": "8410",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B01AD02",
        "S01XA13"
      ],
      "atc_memberships": [
        {
          "code": "B01AD02",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B01AD",
          "subclass_name": "Enzymes"
        },
        {
          "code": "S01XA13",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01XA",
          "subclass_name": "Other ophthalmologicals"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/8410/properties.json"
    },
    {
      "id": "RXNORM:46241",
      "sequence": 43,
      "display_name": "aluminum chloride",
      "canonical_name": "aluminum chloride",
      "aliases": [
        "aluminium chloride",
        "aluminum chloride"
      ],
      "rxcui": "46241",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D10AX01"
      ],
      "atc_memberships": [
        {
          "code": "D10AX01",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D10AX",
          "subclass_name": "Other anti-acne preparations for topical use"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/46241/properties.json"
    },
    {
      "id": "RXNORM:612",
      "sequence": 44,
      "display_name": "aluminum hydroxide",
      "canonical_name": "aluminum hydroxide",
      "aliases": [
        "aluminium hydroxide",
        "aluminum hydroxide"
      ],
      "rxcui": "612",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A02AB01"
      ],
      "atc_memberships": [
        {
          "code": "A02AB01",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A02AB",
          "subclass_name": "Aluminium compounds"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/612/properties.json"
    },
    {
      "id": "RXNORM:17614",
      "sequence": 45,
      "display_name": "aluminum magnesium silicate",
      "canonical_name": "aluminum magnesium silicate",
      "aliases": [
        "almasilate",
        "aluminum magnesium silicate"
      ],
      "rxcui": "17614",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A02AD05"
      ],
      "atc_memberships": [
        {
          "code": "A02AD05",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A02AD",
          "subclass_name": "Combinations and complexes of aluminium, calcium and magnesium compounds"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/17614/properties.json"
    },
    {
      "id": "RXNORM:17618",
      "sequence": 46,
      "display_name": "aluminum phosphate",
      "canonical_name": "aluminum phosphate",
      "aliases": [
        "aluminium phosphate",
        "aluminum phosphate"
      ],
      "rxcui": "17618",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A02AB03"
      ],
      "atc_memberships": [
        {
          "code": "A02AB03",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A02AB",
          "subclass_name": "Aluminium compounds"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/17618/properties.json"
    },
    {
      "id": "RXNORM:625",
      "sequence": 47,
      "display_name": "ambroxol",
      "canonical_name": "ambroxol",
      "aliases": [
        "ambroxol"
      ],
      "rxcui": "625",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "R",
      "primary_group_name_tr": "Solunum sistemi",
      "atc_codes": [
        "R02AD05",
        "R05CB06"
      ],
      "atc_memberships": [
        {
          "code": "R02AD05",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R02AD",
          "subclass_name": "Anesthetics, local"
        },
        {
          "code": "R05CB06",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R05CB",
          "subclass_name": "Mucolytics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/625/properties.json"
    },
    {
      "id": "RXNORM:17652",
      "sequence": 48,
      "display_name": "amcinonide",
      "canonical_name": "amcinonide",
      "aliases": [
        "amcinonide"
      ],
      "rxcui": "17652",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D07AC11"
      ],
      "atc_memberships": [
        {
          "code": "D07AC11",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D07AC",
          "subclass_name": "Corticosteroids, potent (group III)"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/17652/properties.json"
    },
    {
      "id": "RXNORM:627",
      "sequence": 49,
      "display_name": "amdinocillin pivoxil",
      "canonical_name": "amdinocillin pivoxil",
      "aliases": [
        "amdinocillin pivoxil",
        "pivmecillinam"
      ],
      "rxcui": "627",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J01CA08"
      ],
      "atc_memberships": [
        {
          "code": "J01CA08",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J01CA",
          "subclass_name": "Penicillins with extended spectrum"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/627/properties.json"
    },
    {
      "id": "RXNORM:2106338",
      "sequence": 50,
      "display_name": "amifampridine",
      "canonical_name": "amifampridine",
      "aliases": [
        "amifampridine"
      ],
      "rxcui": "2106338",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N07XX05"
      ],
      "atc_memberships": [
        {
          "code": "N07XX05",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N07XX",
          "subclass_name": "Other nervous system drugs"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2106338/properties.json"
    },
    {
      "id": "RXNORM:4126",
      "sequence": 51,
      "display_name": "amifostine",
      "canonical_name": "amifostine",
      "aliases": [
        "amifostine"
      ],
      "rxcui": "4126",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "V",
      "primary_group_name_tr": "Diğer maddeler",
      "atc_codes": [
        "V03AF05"
      ],
      "atc_memberships": [
        {
          "code": "V03AF05",
          "group_code": "V",
          "group_name_tr": "Diğer maddeler",
          "subclass_code": "V03AF",
          "subclass_name": "Detoxifying agents for antineoplastic treatment"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/4126/properties.json"
    },
    {
      "id": "RXNORM:689",
      "sequence": 52,
      "display_name": "aminophylline",
      "canonical_name": "aminophylline",
      "aliases": [
        "aminophylline"
      ],
      "rxcui": "689",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "R",
      "primary_group_name_tr": "Solunum sistemi",
      "atc_codes": [
        "R03DA05"
      ],
      "atc_memberships": [
        {
          "code": "R03DA05",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R03DA",
          "subclass_name": "Xanthines"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/689/properties.json"
    },
    {
      "id": "RXNORM:7833",
      "sequence": 53,
      "display_name": "aminosalicylic acid",
      "canonical_name": "aminosalicylic acid",
      "aliases": [
        "4-aminosalicylic acid",
        "aminosalicylic acid"
      ],
      "rxcui": "7833",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J04AA01"
      ],
      "atc_memberships": [
        {
          "code": "J04AA01",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J04AA",
          "subclass_name": "Aminosalicylic acid and derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/7833/properties.json"
    },
    {
      "id": "RXNORM:17767",
      "sequence": 54,
      "display_name": "Amlodipin",
      "canonical_name": "amlodipine",
      "aliases": [
        "Amlodipin",
        "amlodipine"
      ],
      "rxcui": "17767",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C08CA01"
      ],
      "atc_memberships": [
        {
          "code": "C08CA01",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C08CA",
          "subclass_name": "Dihydropyridine derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/17767/properties.json"
    },
    {
      "id": "RXNORM:712",
      "sequence": 55,
      "display_name": "ammonium chloride",
      "canonical_name": "ammonium chloride",
      "aliases": [
        "ammonium chloride"
      ],
      "rxcui": "712",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B05XA04",
        "G04BA01"
      ],
      "atc_memberships": [
        {
          "code": "B05XA04",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B05XA",
          "subclass_name": "Electrolyte solutions"
        },
        {
          "code": "G04BA01",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G04BA",
          "subclass_name": "Acidifiers"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/712/properties.json"
    },
    {
      "id": "RXNORM:723",
      "sequence": 56,
      "display_name": "Amoksisilin",
      "canonical_name": "amoxicillin",
      "aliases": [
        "Amoksisilin",
        "amoxicillin"
      ],
      "rxcui": "723",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J01CA04"
      ],
      "atc_memberships": [
        {
          "code": "J01CA04",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J01CA",
          "subclass_name": "Penicillins with extended spectrum"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/723/properties.json"
    },
    {
      "id": "RXNORM:732",
      "sequence": 57,
      "display_name": "amphotericin B",
      "canonical_name": "amphotericin B",
      "aliases": [
        "amphotericin B"
      ],
      "rxcui": "732",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A01AB04",
        "A07AA07",
        "G01AA03",
        "J02AA01"
      ],
      "atc_memberships": [
        {
          "code": "A01AB04",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A01AB",
          "subclass_name": "Antiinfectives and antiseptics for local oral treatment"
        },
        {
          "code": "A07AA07",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A07AA",
          "subclass_name": "Antibiotics"
        },
        {
          "code": "G01AA03",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G01AA",
          "subclass_name": "Antibiotics"
        },
        {
          "code": "J02AA01",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J02AA",
          "subclass_name": "Antibiotics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/732/properties.json"
    },
    {
      "id": "RXNORM:733",
      "sequence": 58,
      "display_name": "ampicillin",
      "canonical_name": "ampicillin",
      "aliases": [
        "ampicillin"
      ],
      "rxcui": "733",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J01CA01",
        "S01AA19"
      ],
      "atc_memberships": [
        {
          "code": "J01CA01",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J01CA",
          "subclass_name": "Penicillins with extended spectrum"
        },
        {
          "code": "S01AA19",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01AA",
          "subclass_name": "Antibiotics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/733/properties.json"
    },
    {
      "id": "RXNORM:228656",
      "sequence": 59,
      "display_name": "amprenavir",
      "canonical_name": "amprenavir",
      "aliases": [
        "amprenavir"
      ],
      "rxcui": "228656",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J05AE05"
      ],
      "atc_memberships": [
        {
          "code": "J05AE05",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J05AE",
          "subclass_name": "Protease inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/228656/properties.json"
    },
    {
      "id": "RXNORM:742",
      "sequence": 60,
      "display_name": "amyl nitrite",
      "canonical_name": "amyl nitrite",
      "aliases": [
        "amyl nitrite"
      ],
      "rxcui": "742",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "V",
      "primary_group_name_tr": "Diğer maddeler",
      "atc_codes": [
        "V03AB22"
      ],
      "atc_memberships": [
        {
          "code": "V03AB22",
          "group_code": "V",
          "group_name_tr": "Diğer maddeler",
          "subclass_code": "V03AB",
          "subclass_name": "Antidotes"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/742/properties.json"
    },
    {
      "id": "RXNORM:743",
      "sequence": 61,
      "display_name": "amylase",
      "canonical_name": "amylase",
      "aliases": [
        "amylase",
        "diastase"
      ],
      "rxcui": "743",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A09AA01"
      ],
      "atc_memberships": [
        {
          "code": "A09AA01",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A09AA",
          "subclass_name": "Enzyme preparations"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/743/properties.json"
    },
    {
      "id": "RXNORM:341018",
      "sequence": 62,
      "display_name": "anidulafungin",
      "canonical_name": "anidulafungin",
      "aliases": [
        "anidulafungin"
      ],
      "rxcui": "341018",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J02AX06"
      ],
      "atc_memberships": [
        {
          "code": "J02AX06",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J02AX",
          "subclass_name": "Other antimycotics for systemic use"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/341018/properties.json"
    },
    {
      "id": "RXNORM:2472152",
      "sequence": 63,
      "display_name": "ansuvimab",
      "canonical_name": "ansuvimab",
      "aliases": [
        "ansuvimab"
      ],
      "rxcui": "2472152",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J06BD04"
      ],
      "atc_memberships": [
        {
          "code": "J06BD04",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J06BD",
          "subclass_name": "Antiviral monoclonal antibodies"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2472152/properties.json"
    },
    {
      "id": "RXNORM:873",
      "sequence": 64,
      "display_name": "anthralin",
      "canonical_name": "anthralin",
      "aliases": [
        "anthralin",
        "dithranol"
      ],
      "rxcui": "873",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D05AC01"
      ],
      "atc_memberships": [
        {
          "code": "D05AC01",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D05AC",
          "subclass_name": "Antracen derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/873/properties.json"
    },
    {
      "id": "RXNORM:1722336",
      "sequence": 65,
      "display_name": "anthrax immune globulin",
      "canonical_name": "anthrax immune globulin",
      "aliases": [
        "anthrax immune globulin",
        "anthrax immunoglobulin"
      ],
      "rxcui": "1722336",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J06BB19"
      ],
      "atc_memberships": [
        {
          "code": "J06BB19",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J06BB",
          "subclass_name": "Specific immunoglobulins"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1722336/properties.json"
    },
    {
      "id": "RXNORM:1009",
      "sequence": 66,
      "display_name": "antithrombin III",
      "canonical_name": "antithrombin III",
      "aliases": [
        "antithrombin III"
      ],
      "rxcui": "1009",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B01AB02"
      ],
      "atc_memberships": [
        {
          "code": "B01AB02",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B01AB",
          "subclass_name": "Heparin group"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1009/properties.json"
    },
    {
      "id": "RXNORM:2753162",
      "sequence": 67,
      "display_name": "apitegromab",
      "canonical_name": "apitegromab",
      "aliases": [
        "apitegromab"
      ],
      "rxcui": "2753162",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "M",
      "primary_group_name_tr": "Kas ve iskelet sistemi",
      "atc_codes": [
        "M09AX16"
      ],
      "atc_memberships": [
        {
          "code": "M09AX16",
          "group_code": "M",
          "group_name_tr": "Kas ve iskelet sistemi",
          "subclass_code": "M09AX",
          "subclass_name": "Other drugs for disorders of the musculo-skeletal system"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2753162/properties.json"
    },
    {
      "id": "RXNORM:1364430",
      "sequence": 68,
      "display_name": "apixaban",
      "canonical_name": "apixaban",
      "aliases": [
        "apixaban"
      ],
      "rxcui": "1364430",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B01AF02"
      ],
      "atc_memberships": [
        {
          "code": "B01AF02",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B01AF",
          "subclass_name": "Direct factor Xa inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1364430/properties.json"
    },
    {
      "id": "RXNORM:1043",
      "sequence": 69,
      "display_name": "apomorphine",
      "canonical_name": "apomorphine",
      "aliases": [
        "apomorphine"
      ],
      "rxcui": "1043",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "G",
      "primary_group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
      "atc_codes": [
        "G04BE07",
        "N04BC07"
      ],
      "atc_memberships": [
        {
          "code": "G04BE07",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G04BE",
          "subclass_name": "Drugs used in erectile dysfunction"
        },
        {
          "code": "N04BC07",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N04BC",
          "subclass_name": "Dopamine agonists"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1043/properties.json"
    },
    {
      "id": "RXNORM:14845",
      "sequence": 70,
      "display_name": "apraclonidine",
      "canonical_name": "apraclonidine",
      "aliases": [
        "apraclonidine"
      ],
      "rxcui": "14845",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "S",
      "primary_group_name_tr": "Duyu organları",
      "atc_codes": [
        "S01EA03"
      ],
      "atc_memberships": [
        {
          "code": "S01EA03",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01EA",
          "subclass_name": "Sympathomimetics in glaucoma therapy"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/14845/properties.json"
    },
    {
      "id": "RXNORM:358255",
      "sequence": 71,
      "display_name": "aprepitant",
      "canonical_name": "aprepitant",
      "aliases": [
        "aprepitant"
      ],
      "rxcui": "358255",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A04AD12"
      ],
      "atc_memberships": [
        {
          "code": "A04AD12",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A04AD",
          "subclass_name": "Other antiemetics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/358255/properties.json"
    },
    {
      "id": "RXNORM:2679059",
      "sequence": 72,
      "display_name": "aprocitentan",
      "canonical_name": "aprocitentan",
      "aliases": [
        "aprocitentan"
      ],
      "rxcui": "2679059",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C02KN01"
      ],
      "atc_memberships": [
        {
          "code": "C02KN01",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C02KN",
          "subclass_name": "Other antihypertensives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2679059/properties.json"
    },
    {
      "id": "RXNORM:1098",
      "sequence": 73,
      "display_name": "argipressin",
      "canonical_name": "argipressin",
      "aliases": [
        "argipressin",
        "vasopressin (argipressin)"
      ],
      "rxcui": "1098",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "H",
      "primary_group_name_tr": "Sistemik hormonlar (cinsiyet hormonları ve insülin hariç)",
      "atc_codes": [
        "H01BA01"
      ],
      "atc_memberships": [
        {
          "code": "H01BA01",
          "group_code": "H",
          "group_name_tr": "Sistemik hormonlar (cinsiyet hormonları ve insülin hariç)",
          "subclass_code": "H01BA",
          "subclass_name": "Vasopressin and analogues"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1098/properties.json"
    },
    {
      "id": "RXNORM:2694283",
      "sequence": 74,
      "display_name": "arimoclomol",
      "canonical_name": "arimoclomol",
      "aliases": [
        "arimoclomol"
      ],
      "rxcui": "2694283",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N07XX17"
      ],
      "atc_memberships": [
        {
          "code": "N07XX17",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N07XX",
          "subclass_name": "Other nervous system drugs"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2694283/properties.json"
    },
    {
      "id": "RXNORM:18343",
      "sequence": 75,
      "display_name": "artemether",
      "canonical_name": "artemether",
      "aliases": [
        "artemether"
      ],
      "rxcui": "18343",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "P",
      "primary_group_name_tr": "Antiparaziter maddeler, insektisitler ve repellentler",
      "atc_codes": [
        "P01BE02"
      ],
      "atc_memberships": [
        {
          "code": "P01BE02",
          "group_code": "P",
          "group_name_tr": "Antiparaziter maddeler, insektisitler ve repellentler",
          "subclass_code": "P01BE",
          "subclass_name": "Artemisinin and derivatives, plain"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/18343/properties.json"
    },
    {
      "id": "RXNORM:1151",
      "sequence": 76,
      "display_name": "Askorbik asit",
      "canonical_name": "ascorbic acid",
      "aliases": [
        "ascorbic acid",
        "Askorbik asit"
      ],
      "rxcui": "1151",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A11GA01",
        "G01AD03",
        "S01XA15"
      ],
      "atc_memberships": [
        {
          "code": "A11GA01",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A11GA",
          "subclass_name": "Ascorbic acid (vitamin C), plain"
        },
        {
          "code": "G01AD03",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G01AD",
          "subclass_name": "Organic acids"
        },
        {
          "code": "S01XA15",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01XA",
          "subclass_name": "Other ophthalmologicals"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1151/properties.json"
    },
    {
      "id": "RXNORM:1156",
      "sequence": 77,
      "display_name": "asparaginase",
      "canonical_name": "asparaginase",
      "aliases": [
        "asparaginase"
      ],
      "rxcui": "1156",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01XX02"
      ],
      "atc_memberships": [
        {
          "code": "L01XX02",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01XX",
          "subclass_name": "Other antineoplastic agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1156/properties.json"
    },
    {
      "id": "RXNORM:1191",
      "sequence": 78,
      "display_name": "Aspirin",
      "canonical_name": "aspirin",
      "aliases": [
        "acetylsalicylic acid",
        "aspirin",
        "Aspirin"
      ],
      "rxcui": "1191",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A01AD05",
        "B01AC06",
        "N02BA01"
      ],
      "atc_memberships": [
        {
          "code": "A01AD05",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A01AD",
          "subclass_name": "Other agents for local oral treatment"
        },
        {
          "code": "B01AC06",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B01AC",
          "subclass_name": "Platelet aggregation inhibitors excl. heparin"
        },
        {
          "code": "N02BA01",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N02BA",
          "subclass_name": "Salicylic acid and derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1191/properties.json"
    },
    {
      "id": "RXNORM:343047",
      "sequence": 79,
      "display_name": "atazanavir",
      "canonical_name": "atazanavir",
      "aliases": [
        "atazanavir"
      ],
      "rxcui": "343047",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J05AE08"
      ],
      "atc_memberships": [
        {
          "code": "J05AE08",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J05AE",
          "subclass_name": "Protease inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/343047/properties.json"
    },
    {
      "id": "RXNORM:1202",
      "sequence": 80,
      "display_name": "Atenolol",
      "canonical_name": "atenolol",
      "aliases": [
        "Atenolol",
        "atenolol"
      ],
      "rxcui": "1202",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C07AB03"
      ],
      "atc_memberships": [
        {
          "code": "C07AB03",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C07AB",
          "subclass_name": "Beta blocking agents, selective"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1202/properties.json"
    },
    {
      "id": "RXNORM:38400",
      "sequence": 81,
      "display_name": "atomoxetine",
      "canonical_name": "atomoxetine",
      "aliases": [
        "atomoxetine"
      ],
      "rxcui": "38400",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N06BA09"
      ],
      "atc_memberships": [
        {
          "code": "N06BA09",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N06BA",
          "subclass_name": "Centrally acting sympathomimetics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/38400/properties.json"
    },
    {
      "id": "RXNORM:83367",
      "sequence": 82,
      "display_name": "Atorvastatin",
      "canonical_name": "atorvastatin",
      "aliases": [
        "atorvastatin",
        "Atorvastatin"
      ],
      "rxcui": "83367",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C10AA05"
      ],
      "atc_memberships": [
        {
          "code": "C10AA05",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C10AA",
          "subclass_name": "HMG CoA reductase inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/83367/properties.json"
    },
    {
      "id": "RXNORM:60212",
      "sequence": 83,
      "display_name": "atovaquone",
      "canonical_name": "atovaquone",
      "aliases": [
        "atovaquone"
      ],
      "rxcui": "60212",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "P",
      "primary_group_name_tr": "Antiparaziter maddeler, insektisitler ve repellentler",
      "atc_codes": [
        "P01AX06"
      ],
      "atc_memberships": [
        {
          "code": "P01AX06",
          "group_code": "P",
          "group_name_tr": "Antiparaziter maddeler, insektisitler ve repellentler",
          "subclass_code": "P01AX",
          "subclass_name": "Other agents against amoebiasis and other protozoal diseases"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/60212/properties.json"
    },
    {
      "id": "RXNORM:1223",
      "sequence": 84,
      "display_name": "atropine",
      "canonical_name": "atropine",
      "aliases": [
        "atropine"
      ],
      "rxcui": "1223",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A03BA01",
        "S01FA01"
      ],
      "atc_memberships": [
        {
          "code": "A03BA01",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A03BA",
          "subclass_name": "Belladonna alkaloids, tertiary amines"
        },
        {
          "code": "S01FA01",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01FA",
          "subclass_name": "Anticholinergics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1223/properties.json"
    },
    {
      "id": "RXNORM:1227",
      "sequence": 85,
      "display_name": "auranofin",
      "canonical_name": "auranofin",
      "aliases": [
        "auranofin"
      ],
      "rxcui": "1227",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "M",
      "primary_group_name_tr": "Kas ve iskelet sistemi",
      "atc_codes": [
        "M01CB03"
      ],
      "atc_memberships": [
        {
          "code": "M01CB03",
          "group_code": "M",
          "group_name_tr": "Kas ve iskelet sistemi",
          "subclass_code": "M01CB",
          "subclass_name": "Gold preparations"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1227/properties.json"
    },
    {
      "id": "RXNORM:1256",
      "sequence": 86,
      "display_name": "Azatioprin",
      "canonical_name": "azathioprine",
      "aliases": [
        "azathioprine",
        "Azatioprin"
      ],
      "rxcui": "1256",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L04AX01"
      ],
      "atc_memberships": [
        {
          "code": "L04AX01",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L04AX",
          "subclass_name": "Other immunosuppressants"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1256/properties.json"
    },
    {
      "id": "RXNORM:18603",
      "sequence": 87,
      "display_name": "azelastine",
      "canonical_name": "azelastine",
      "aliases": [
        "azelastine"
      ],
      "rxcui": "18603",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "R",
      "primary_group_name_tr": "Solunum sistemi",
      "atc_codes": [
        "R01AC03",
        "R06AX19",
        "S01GX07"
      ],
      "atc_memberships": [
        {
          "code": "R01AC03",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R01AC",
          "subclass_name": "Antiallergic agents, excl. corticosteroids"
        },
        {
          "code": "R06AX19",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R06AX",
          "subclass_name": "Other antihistamines for systemic use"
        },
        {
          "code": "S01GX07",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01GX",
          "subclass_name": "Other antiallergics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/18603/properties.json"
    },
    {
      "id": "RXNORM:18631",
      "sequence": 88,
      "display_name": "Azitromisin",
      "canonical_name": "azithromycin",
      "aliases": [
        "azithromycin",
        "Azitromisin"
      ],
      "rxcui": "18631",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J01FA10",
        "S01AA26"
      ],
      "atc_memberships": [
        {
          "code": "J01FA10",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J01FA",
          "subclass_name": "Macrolides"
        },
        {
          "code": "S01AA26",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01AA",
          "subclass_name": "Antibiotics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/18631/properties.json"
    },
    {
      "id": "RXNORM:1292",
      "sequence": 89,
      "display_name": "baclofen",
      "canonical_name": "baclofen",
      "aliases": [
        "baclofen"
      ],
      "rxcui": "1292",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "M",
      "primary_group_name_tr": "Kas ve iskelet sistemi",
      "atc_codes": [
        "M03BX01"
      ],
      "atc_memberships": [
        {
          "code": "M03BX01",
          "group_code": "M",
          "group_name_tr": "Kas ve iskelet sistemi",
          "subclass_code": "M03BX",
          "subclass_name": "Other centrally acting agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1292/properties.json"
    },
    {
      "id": "RXNORM:2099995",
      "sequence": 90,
      "display_name": "baloxavir marboxil",
      "canonical_name": "baloxavir marboxil",
      "aliases": [
        "baloxavir marboxil"
      ],
      "rxcui": "2099995",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J05AX25"
      ],
      "atc_memberships": [
        {
          "code": "J05AX25",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J05AX",
          "subclass_name": "Other antivirals"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2099995/properties.json"
    },
    {
      "id": "RXNORM:18747",
      "sequence": 91,
      "display_name": "balsalazide",
      "canonical_name": "balsalazide",
      "aliases": [
        "balsalazide"
      ],
      "rxcui": "18747",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A07EC04"
      ],
      "atc_memberships": [
        {
          "code": "A07EC04",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A07EC",
          "subclass_name": "Aminosalicylic acid and similar agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/18747/properties.json"
    },
    {
      "id": "RXNORM:2047232",
      "sequence": 92,
      "display_name": "baricitinib",
      "canonical_name": "baricitinib",
      "aliases": [
        "baricitinib"
      ],
      "rxcui": "2047232",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L04AF02"
      ],
      "atc_memberships": [
        {
          "code": "L04AF02",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L04AF",
          "subclass_name": "Janus-associated kinase (JAK) inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2047232/properties.json"
    },
    {
      "id": "RXNORM:196102",
      "sequence": 93,
      "display_name": "basiliximab",
      "canonical_name": "basiliximab",
      "aliases": [
        "basiliximab"
      ],
      "rxcui": "196102",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L04AC02"
      ],
      "atc_memberships": [
        {
          "code": "L04AC02",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L04AC",
          "subclass_name": "Interleukin inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/196102/properties.json"
    },
    {
      "id": "RXNORM:2743398",
      "sequence": 94,
      "display_name": "baxdrostat",
      "canonical_name": "baxdrostat",
      "aliases": [
        "baxdrostat"
      ],
      "rxcui": "2743398",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C02KN02"
      ],
      "atc_memberships": [
        {
          "code": "C02KN02",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C02KN",
          "subclass_name": "Other antihypertensives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2743398/properties.json"
    },
    {
      "id": "RXNORM:1441386",
      "sequence": 95,
      "display_name": "bazedoxifene",
      "canonical_name": "bazedoxifene",
      "aliases": [
        "bazedoxifene"
      ],
      "rxcui": "1441386",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "G",
      "primary_group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
      "atc_codes": [
        "G03XC02"
      ],
      "atc_memberships": [
        {
          "code": "G03XC02",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G03XC",
          "subclass_name": "Selective estrogen receptor modulators"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1441386/properties.json"
    },
    {
      "id": "RXNORM:1364504",
      "sequence": 96,
      "display_name": "bedaquiline",
      "canonical_name": "bedaquiline",
      "aliases": [
        "bedaquiline"
      ],
      "rxcui": "1364504",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J04AK05"
      ],
      "atc_memberships": [
        {
          "code": "J04AK05",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J04AK",
          "subclass_name": "Other drugs for treatment of tuberculosis"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1364504/properties.json"
    },
    {
      "id": "RXNORM:1112973",
      "sequence": 97,
      "display_name": "belatacept",
      "canonical_name": "belatacept",
      "aliases": [
        "belatacept"
      ],
      "rxcui": "1112973",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L04AA28"
      ],
      "atc_memberships": [
        {
          "code": "L04AA28",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L04AA",
          "subclass_name": "Selective immunosuppressants"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1112973/properties.json"
    },
    {
      "id": "RXNORM:2564025",
      "sequence": 98,
      "display_name": "belumosudil",
      "canonical_name": "belumosudil",
      "aliases": [
        "belumosudil"
      ],
      "rxcui": "2564025",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L04AA48"
      ],
      "atc_memberships": [
        {
          "code": "L04AA48",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L04AA",
          "subclass_name": "Selective immunosuppressants"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2564025/properties.json"
    },
    {
      "id": "RXNORM:2567226",
      "sequence": 99,
      "display_name": "belzutifan",
      "canonical_name": "belzutifan",
      "aliases": [
        "belzutifan"
      ],
      "rxcui": "2567226",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01XX74"
      ],
      "atc_memberships": [
        {
          "code": "L01XX74",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01XX",
          "subclass_name": "Other antineoplastic agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2567226/properties.json"
    },
    {
      "id": "RXNORM:134547",
      "sequence": 100,
      "display_name": "bendamustine",
      "canonical_name": "bendamustine",
      "aliases": [
        "bendamustine"
      ],
      "rxcui": "134547",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01AA09"
      ],
      "atc_memberships": [
        {
          "code": "L01AA09",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01AA",
          "subclass_name": "Nitrogen mustard analogues"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/134547/properties.json"
    },
    {
      "id": "RXNORM:18889",
      "sequence": 101,
      "display_name": "benoxinate",
      "canonical_name": "benoxinate",
      "aliases": [
        "benoxinate",
        "oxybuprocaine"
      ],
      "rxcui": "18889",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D04AB03",
        "S01HA02"
      ],
      "atc_memberships": [
        {
          "code": "D04AB03",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D04AB",
          "subclass_name": "Anesthetics for topical use"
        },
        {
          "code": "S01HA02",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01HA",
          "subclass_name": "Local anesthetics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/18889/properties.json"
    },
    {
      "id": "RXNORM:1378",
      "sequence": 102,
      "display_name": "benzalkonium",
      "canonical_name": "benzalkonium",
      "aliases": [
        "benzalkonium"
      ],
      "rxcui": "1378",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D08AJ01",
        "D09AA11",
        "R02AA16"
      ],
      "atc_memberships": [
        {
          "code": "D08AJ01",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D08AJ",
          "subclass_name": "Quaternary ammonium compounds"
        },
        {
          "code": "D09AA11",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D09AA",
          "subclass_name": "Medicated dressings with antiinfectives"
        },
        {
          "code": "R02AA16",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R02AA",
          "subclass_name": "Antiseptics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1378/properties.json"
    },
    {
      "id": "RXNORM:2690627",
      "sequence": 103,
      "display_name": "benzgalantamine",
      "canonical_name": "benzgalantamine",
      "aliases": [
        "benzgalantamine"
      ],
      "rxcui": "2690627",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N06DA06"
      ],
      "atc_memberships": [
        {
          "code": "N06DA06",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N06DA",
          "subclass_name": "Anticholinesterases"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2690627/properties.json"
    },
    {
      "id": "RXNORM:1399",
      "sequence": 104,
      "display_name": "benzocaine",
      "canonical_name": "benzocaine",
      "aliases": [
        "benzocaine"
      ],
      "rxcui": "1399",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C05AD03",
        "D04AB04",
        "N01BA05",
        "R02AD01"
      ],
      "atc_memberships": [
        {
          "code": "C05AD03",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C05AD",
          "subclass_name": "Local anesthetics"
        },
        {
          "code": "D04AB04",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D04AB",
          "subclass_name": "Anesthetics for topical use"
        },
        {
          "code": "N01BA05",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N01BA",
          "subclass_name": "Esters of aminobenzoic acid"
        },
        {
          "code": "R02AD01",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R02AD",
          "subclass_name": "Anesthetics, local"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1399/properties.json"
    },
    {
      "id": "RXNORM:18993",
      "sequence": 105,
      "display_name": "benzonatate",
      "canonical_name": "benzonatate",
      "aliases": [
        "benzonatate"
      ],
      "rxcui": "18993",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "R",
      "primary_group_name_tr": "Solunum sistemi",
      "atc_codes": [
        "R05DB01"
      ],
      "atc_memberships": [
        {
          "code": "R05DB01",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R05DB",
          "subclass_name": "Other cough suppressants"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/18993/properties.json"
    },
    {
      "id": "RXNORM:1418",
      "sequence": 106,
      "display_name": "benzoyl peroxide",
      "canonical_name": "benzoyl peroxide",
      "aliases": [
        "benzoyl peroxide"
      ],
      "rxcui": "1418",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D10AE01"
      ],
      "atc_memberships": [
        {
          "code": "D10AE01",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D10AE",
          "subclass_name": "Peroxides"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1418/properties.json"
    },
    {
      "id": "RXNORM:2637758",
      "sequence": 107,
      "display_name": "beremagene geperpavec",
      "canonical_name": "beremagene geperpavec",
      "aliases": [
        "beremagene geperpavec"
      ],
      "rxcui": "2637758",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D03AX16"
      ],
      "atc_memberships": [
        {
          "code": "D03AX16",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D03AX",
          "subclass_name": "Other cicatrizants"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2637758/properties.json"
    },
    {
      "id": "RXNORM:819911",
      "sequence": 108,
      "display_name": "besifloxacin",
      "canonical_name": "besifloxacin",
      "aliases": [
        "besifloxacin"
      ],
      "rxcui": "819911",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "S",
      "primary_group_name_tr": "Duyu organları",
      "atc_codes": [
        "S01AE08"
      ],
      "atc_memberships": [
        {
          "code": "S01AE08",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01AE",
          "subclass_name": "Fluoroquinolones"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/819911/properties.json"
    },
    {
      "id": "RXNORM:19143",
      "sequence": 109,
      "display_name": "beta carotene",
      "canonical_name": "beta carotene",
      "aliases": [
        "beta carotene",
        "betacarotene"
      ],
      "rxcui": "19143",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A11CA02",
        "D02BB01"
      ],
      "atc_memberships": [
        {
          "code": "A11CA02",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A11CA",
          "subclass_name": "Vitamin A, plain"
        },
        {
          "code": "D02BB01",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D02BB",
          "subclass_name": "Protectives against UV-radiation for systemic use"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/19143/properties.json"
    },
    {
      "id": "RXNORM:1514",
      "sequence": 110,
      "display_name": "betamethasone",
      "canonical_name": "betamethasone",
      "aliases": [
        "betamethasone"
      ],
      "rxcui": "1514",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A07EA04",
        "C05AA05",
        "D07AC01",
        "D07XC01",
        "H02AB01",
        "R01AD06",
        "R03BA04",
        "S01BA06",
        "S01CB04",
        "S02BA07",
        "S03BA03"
      ],
      "atc_memberships": [
        {
          "code": "A07EA04",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A07EA",
          "subclass_name": "Corticosteroids acting locally"
        },
        {
          "code": "C05AA05",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C05AA",
          "subclass_name": "Corticosteroids"
        },
        {
          "code": "D07AC01",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D07AC",
          "subclass_name": "Corticosteroids, potent (group III)"
        },
        {
          "code": "D07XC01",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D07XC",
          "subclass_name": "Corticosteroids, potent, other combinations"
        },
        {
          "code": "H02AB01",
          "group_code": "H",
          "group_name_tr": "Sistemik hormonlar (cinsiyet hormonları ve insülin hariç)",
          "subclass_code": "H02AB",
          "subclass_name": "Glucocorticoids"
        },
        {
          "code": "R01AD06",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R01AD",
          "subclass_name": "Corticosteroids"
        },
        {
          "code": "R03BA04",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R03BA",
          "subclass_name": "Glucocorticoids"
        },
        {
          "code": "S01BA06",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01BA",
          "subclass_name": "Corticosteroids, plain"
        },
        {
          "code": "S01CB04",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01CB",
          "subclass_name": "Corticosteroids/antiinfectives/mydriatics in combination"
        },
        {
          "code": "S02BA07",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S02BA",
          "subclass_name": "Corticosteroids"
        },
        {
          "code": "S03BA03",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S03BA",
          "subclass_name": "Corticosteroids"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1514/properties.json"
    },
    {
      "id": "RXNORM:2610349",
      "sequence": 111,
      "display_name": "betibeglogene autotemcel",
      "canonical_name": "betibeglogene autotemcel",
      "aliases": [
        "betibeglogene autotemcel"
      ],
      "rxcui": "2610349",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B06AX02"
      ],
      "atc_memberships": [
        {
          "code": "B06AX02",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B06AX",
          "subclass_name": "Other hematological agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2610349/properties.json"
    },
    {
      "id": "RXNORM:253337",
      "sequence": 112,
      "display_name": "bevacizumab",
      "canonical_name": "bevacizumab",
      "aliases": [
        "bevacizumab"
      ],
      "rxcui": "253337",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01FG01",
        "S01LA08"
      ],
      "atc_memberships": [
        {
          "code": "L01FG01",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01FG",
          "subclass_name": "VEGF/VEGFR (Vascular Endothelial Growth Factor / -Receptor) inhibitors"
        },
        {
          "code": "S01LA08",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01LA",
          "subclass_name": "Antineovascularisation agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/253337/properties.json"
    },
    {
      "id": "RXNORM:233272",
      "sequence": 113,
      "display_name": "bexarotene",
      "canonical_name": "bexarotene",
      "aliases": [
        "bexarotene"
      ],
      "rxcui": "233272",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01XF03"
      ],
      "atc_memberships": [
        {
          "code": "L01XF03",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01XF",
          "subclass_name": "Retinoids for cancer treatment"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/233272/properties.json"
    },
    {
      "id": "RXNORM:83008",
      "sequence": 114,
      "display_name": "bicalutamide",
      "canonical_name": "bicalutamide",
      "aliases": [
        "bicalutamide"
      ],
      "rxcui": "83008",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L02BB03"
      ],
      "atc_memberships": [
        {
          "code": "L02BB03",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L02BB",
          "subclass_name": "Anti-androgens"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/83008/properties.json"
    },
    {
      "id": "RXNORM:283810",
      "sequence": 115,
      "display_name": "bimatoprost",
      "canonical_name": "bimatoprost",
      "aliases": [
        "bimatoprost"
      ],
      "rxcui": "283810",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "S",
      "primary_group_name_tr": "Duyu organları",
      "atc_codes": [
        "S01EE03"
      ],
      "atc_memberships": [
        {
          "code": "S01EE03",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01EE",
          "subclass_name": "Prostaglandin analogues"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/283810/properties.json"
    },
    {
      "id": "RXNORM:2668041",
      "sequence": 116,
      "display_name": "bimekizumab",
      "canonical_name": "bimekizumab",
      "aliases": [
        "bimekizumab"
      ],
      "rxcui": "2668041",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L04AC21"
      ],
      "atc_memberships": [
        {
          "code": "L04AC21",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L04AC",
          "subclass_name": "Interleukin inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2668041/properties.json"
    },
    {
      "id": "RXNORM:2049122",
      "sequence": 117,
      "display_name": "binimetinib",
      "canonical_name": "binimetinib",
      "aliases": [
        "binimetinib"
      ],
      "rxcui": "2049122",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01EE03"
      ],
      "atc_memberships": [
        {
          "code": "L01EE03",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01EE",
          "subclass_name": "Mitogen-activated protein kinase (MEK) inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2049122/properties.json"
    },
    {
      "id": "RXNORM:1588",
      "sequence": 118,
      "display_name": "Biyotin",
      "canonical_name": "biotin",
      "aliases": [
        "biotin",
        "Biyotin"
      ],
      "rxcui": "1588",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A11HA05"
      ],
      "atc_memberships": [
        {
          "code": "A11HA05",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A11HA",
          "subclass_name": "Other plain vitamin preparations"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1588/properties.json"
    },
    {
      "id": "RXNORM:1596",
      "sequence": 119,
      "display_name": "bisacodyl",
      "canonical_name": "bisacodyl",
      "aliases": [
        "bisacodyl"
      ],
      "rxcui": "1596",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A06AB02",
        "A06AG02"
      ],
      "atc_memberships": [
        {
          "code": "A06AB02",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A06AB",
          "subclass_name": "Contact laxatives"
        },
        {
          "code": "A06AG02",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A06AG",
          "subclass_name": "Enemas"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1596/properties.json"
    },
    {
      "id": "RXNORM:236665",
      "sequence": 120,
      "display_name": "black cohosh extract",
      "canonical_name": "black cohosh extract",
      "aliases": [
        "black cohosh extract",
        "Cimicifugae rhizoma"
      ],
      "rxcui": "236665",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "G",
      "primary_group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
      "atc_codes": [
        "G02CX04"
      ],
      "atc_memberships": [
        {
          "code": "G02CX04",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G02CX",
          "subclass_name": "Other gynecologicals"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/236665/properties.json"
    },
    {
      "id": "RXNORM:1622",
      "sequence": 121,
      "display_name": "bleomycin",
      "canonical_name": "bleomycin",
      "aliases": [
        "bleomycin"
      ],
      "rxcui": "1622",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01DC01"
      ],
      "atc_memberships": [
        {
          "code": "L01DC01",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01DC",
          "subclass_name": "Other cytotoxic antibiotics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1622/properties.json"
    },
    {
      "id": "RXNORM:1700",
      "sequence": 122,
      "display_name": "boric acid",
      "canonical_name": "boric acid",
      "aliases": [
        "boric acid"
      ],
      "rxcui": "1700",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "S",
      "primary_group_name_tr": "Duyu organları",
      "atc_codes": [
        "S02AA03"
      ],
      "atc_memberships": [
        {
          "code": "S02AA03",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S02AA",
          "subclass_name": "Antiinfectives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1700/properties.json"
    },
    {
      "id": "RXNORM:358258",
      "sequence": 123,
      "display_name": "bortezomib",
      "canonical_name": "bortezomib",
      "aliases": [
        "bortezomib"
      ],
      "rxcui": "358258",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01XG01"
      ],
      "atc_memberships": [
        {
          "code": "L01XG01",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01XG",
          "subclass_name": "Proteasome inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/358258/properties.json"
    },
    {
      "id": "RXNORM:1307619",
      "sequence": 124,
      "display_name": "bosutinib",
      "canonical_name": "bosutinib",
      "aliases": [
        "bosutinib"
      ],
      "rxcui": "1307619",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01EA04"
      ],
      "atc_memberships": [
        {
          "code": "L01EA04",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01EA",
          "subclass_name": "BCR-ABL tyrosine kinase inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1307619/properties.json"
    },
    {
      "id": "RXNORM:2176312",
      "sequence": 125,
      "display_name": "bremelanotide",
      "canonical_name": "bremelanotide",
      "aliases": [
        "bremelanotide"
      ],
      "rxcui": "2176312",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "G",
      "primary_group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
      "atc_codes": [
        "G02CX05"
      ],
      "atc_memberships": [
        {
          "code": "G02CX05",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G02CX",
          "subclass_name": "Other gynecologicals"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2176312/properties.json"
    },
    {
      "id": "RXNORM:2121777",
      "sequence": 126,
      "display_name": "brexanolone",
      "canonical_name": "brexanolone",
      "aliases": [
        "brexanolone"
      ],
      "rxcui": "2121777",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N06AX29"
      ],
      "atc_memberships": [
        {
          "code": "N06AX29",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N06AX",
          "subclass_name": "Other antidepressants"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2121777/properties.json"
    },
    {
      "id": "RXNORM:1658314",
      "sequence": 127,
      "display_name": "brexpiprazole",
      "canonical_name": "brexpiprazole",
      "aliases": [
        "brexpiprazole"
      ],
      "rxcui": "1658314",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N05AX16"
      ],
      "atc_memberships": [
        {
          "code": "N05AX16",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N05AX",
          "subclass_name": "Other antipsychotics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1658314/properties.json"
    },
    {
      "id": "RXNORM:1872251",
      "sequence": 128,
      "display_name": "brodalumab",
      "canonical_name": "brodalumab",
      "aliases": [
        "brodalumab"
      ],
      "rxcui": "1872251",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L04AC12"
      ],
      "atc_memberships": [
        {
          "code": "L04AC12",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L04AC",
          "subclass_name": "Interleukin inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1872251/properties.json"
    },
    {
      "id": "RXNORM:2204915",
      "sequence": 129,
      "display_name": "brolucizumab",
      "canonical_name": "brolucizumab",
      "aliases": [
        "brolucizumab"
      ],
      "rxcui": "2204915",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "S",
      "primary_group_name_tr": "Duyu organları",
      "atc_codes": [
        "S01LA06"
      ],
      "atc_memberships": [
        {
          "code": "S01LA06",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01LA",
          "subclass_name": "Antineovascularisation agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2204915/properties.json"
    },
    {
      "id": "RXNORM:1752",
      "sequence": 130,
      "display_name": "bromelains",
      "canonical_name": "bromelains",
      "aliases": [
        "bromelains"
      ],
      "rxcui": "1752",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D03BA03",
        "M09AB03"
      ],
      "atc_memberships": [
        {
          "code": "D03BA03",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D03BA",
          "subclass_name": "Proteolytic enzymes"
        },
        {
          "code": "M09AB03",
          "group_code": "M",
          "group_name_tr": "Kas ve iskelet sistemi",
          "subclass_code": "M09AB",
          "subclass_name": "Enzymes"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1752/properties.json"
    },
    {
      "id": "RXNORM:19831",
      "sequence": 131,
      "display_name": "budesonide",
      "canonical_name": "budesonide",
      "aliases": [
        "budesonide"
      ],
      "rxcui": "19831",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A07EA06",
        "D07AC09",
        "R01AD05",
        "R03BA02"
      ],
      "atc_memberships": [
        {
          "code": "A07EA06",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A07EA",
          "subclass_name": "Corticosteroids acting locally"
        },
        {
          "code": "D07AC09",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D07AC",
          "subclass_name": "Corticosteroids, potent (group III)"
        },
        {
          "code": "R01AD05",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R01AD",
          "subclass_name": "Corticosteroids"
        },
        {
          "code": "R03BA02",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R03BA",
          "subclass_name": "Glucocorticoids"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/19831/properties.json"
    },
    {
      "id": "RXNORM:1808",
      "sequence": 132,
      "display_name": "bumetanide",
      "canonical_name": "bumetanide",
      "aliases": [
        "bumetanide"
      ],
      "rxcui": "1808",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C03CA02"
      ],
      "atc_memberships": [
        {
          "code": "C03CA02",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C03CA",
          "subclass_name": "Sulfonamides, plain"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1808/properties.json"
    },
    {
      "id": "RXNORM:1815",
      "sequence": 133,
      "display_name": "bupivacaine",
      "canonical_name": "bupivacaine",
      "aliases": [
        "bupivacaine"
      ],
      "rxcui": "1815",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N01BB01"
      ],
      "atc_memberships": [
        {
          "code": "N01BB01",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N01BB",
          "subclass_name": "Amides"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1815/properties.json"
    },
    {
      "id": "RXNORM:42347",
      "sequence": 134,
      "display_name": "Bupropion",
      "canonical_name": "bupropion",
      "aliases": [
        "Bupropion",
        "bupropion"
      ],
      "rxcui": "42347",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N06AX12"
      ],
      "atc_memberships": [
        {
          "code": "N06AX12",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N06AX",
          "subclass_name": "Other antidepressants"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/42347/properties.json"
    },
    {
      "id": "RXNORM:1827",
      "sequence": 135,
      "display_name": "buspirone",
      "canonical_name": "buspirone",
      "aliases": [
        "buspirone"
      ],
      "rxcui": "1827",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N05BE01"
      ],
      "atc_memberships": [
        {
          "code": "N05BE01",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N05BE",
          "subclass_name": "Azaspirodecanedione derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1827/properties.json"
    },
    {
      "id": "RXNORM:47461",
      "sequence": 136,
      "display_name": "butenafine",
      "canonical_name": "butenafine",
      "aliases": [
        "butenafine"
      ],
      "rxcui": "47461",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D01AE23"
      ],
      "atc_memberships": [
        {
          "code": "D01AE23",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D01AE",
          "subclass_name": "Other antifungals for topical use"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/47461/properties.json"
    },
    {
      "id": "RXNORM:19884",
      "sequence": 137,
      "display_name": "butoconazole",
      "canonical_name": "butoconazole",
      "aliases": [
        "butoconazole"
      ],
      "rxcui": "19884",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "G",
      "primary_group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
      "atc_codes": [
        "G01AF15"
      ],
      "atc_memberships": [
        {
          "code": "G01AF15",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G01AF",
          "subclass_name": "Imidazole derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/19884/properties.json"
    },
    {
      "id": "RXNORM:996051",
      "sequence": 138,
      "display_name": "cabazitaxel",
      "canonical_name": "cabazitaxel",
      "aliases": [
        "cabazitaxel"
      ],
      "rxcui": "996051",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01CD04"
      ],
      "atc_memberships": [
        {
          "code": "L01CD04",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01CD",
          "subclass_name": "Taxanes"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/996051/properties.json"
    },
    {
      "id": "RXNORM:47579",
      "sequence": 139,
      "display_name": "cabergoline",
      "canonical_name": "cabergoline",
      "aliases": [
        "cabergoline"
      ],
      "rxcui": "47579",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "G",
      "primary_group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
      "atc_codes": [
        "G02CB03",
        "N04BC06"
      ],
      "atc_memberships": [
        {
          "code": "G02CB03",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G02CB",
          "subclass_name": "Prolactine inhibitors"
        },
        {
          "code": "N04BC06",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N04BC",
          "subclass_name": "Dopamine agonists"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/47579/properties.json"
    },
    {
      "id": "RXNORM:1363268",
      "sequence": 140,
      "display_name": "cabozantinib",
      "canonical_name": "cabozantinib",
      "aliases": [
        "cabozantinib"
      ],
      "rxcui": "1363268",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01EX07"
      ],
      "atc_memberships": [
        {
          "code": "L01EX07",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01EX",
          "subclass_name": "Other protein kinase inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1363268/properties.json"
    },
    {
      "id": "RXNORM:1886",
      "sequence": 141,
      "display_name": "Kafein",
      "canonical_name": "caffeine",
      "aliases": [
        "caffeine",
        "Kafein"
      ],
      "rxcui": "1886",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D11AX26",
        "N06BC01"
      ],
      "atc_memberships": [
        {
          "code": "D11AX26",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D11AX",
          "subclass_name": "Other dermatologicals"
        },
        {
          "code": "N06BC01",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N06BC",
          "subclass_name": "Xanthine derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1886/properties.json"
    },
    {
      "id": "RXNORM:1889",
      "sequence": 142,
      "display_name": "calcifediol",
      "canonical_name": "calcifediol",
      "aliases": [
        "calcifediol"
      ],
      "rxcui": "1889",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A11CC06",
        "H05BX05"
      ],
      "atc_memberships": [
        {
          "code": "A11CC06",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A11CC",
          "subclass_name": "Vitamin D and analogues"
        },
        {
          "code": "H05BX05",
          "group_code": "H",
          "group_name_tr": "Sistemik hormonlar (cinsiyet hormonları ve insülin hariç)",
          "subclass_code": "H05BX",
          "subclass_name": "Other anti-parathyroid agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1889/properties.json"
    },
    {
      "id": "RXNORM:1894",
      "sequence": 143,
      "display_name": "Kalsitriol",
      "canonical_name": "calcitriol",
      "aliases": [
        "calcitriol",
        "Kalsitriol"
      ],
      "rxcui": "1894",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A11CC04",
        "D05AX03"
      ],
      "atc_memberships": [
        {
          "code": "A11CC04",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A11CC",
          "subclass_name": "Vitamin D and analogues"
        },
        {
          "code": "D05AX03",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D05AX",
          "subclass_name": "Other antipsoriatics for topical use"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1894/properties.json"
    },
    {
      "id": "RXNORM:1897",
      "sequence": 144,
      "display_name": "calcium carbonate",
      "canonical_name": "calcium carbonate",
      "aliases": [
        "calcium carbonate"
      ],
      "rxcui": "1897",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A02AC01",
        "A12AA04"
      ],
      "atc_memberships": [
        {
          "code": "A02AC01",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A02AC",
          "subclass_name": "Calcium compounds"
        },
        {
          "code": "A12AA04",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A12AA",
          "subclass_name": "Calcium"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1897/properties.json"
    },
    {
      "id": "RXNORM:47613",
      "sequence": 145,
      "display_name": "calcium citrate",
      "canonical_name": "calcium citrate",
      "aliases": [
        "calcium citrate"
      ],
      "rxcui": "47613",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A12AA13"
      ],
      "atc_memberships": [
        {
          "code": "A12AA13",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A12AA",
          "subclass_name": "Calcium"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/47613/properties.json"
    },
    {
      "id": "RXNORM:1908",
      "sequence": 146,
      "display_name": "calcium gluconate",
      "canonical_name": "calcium gluconate",
      "aliases": [
        "calcium gluconate"
      ],
      "rxcui": "1908",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A12AA03",
        "B05XA19",
        "D11AX03"
      ],
      "atc_memberships": [
        {
          "code": "A12AA03",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A12AA",
          "subclass_name": "Calcium"
        },
        {
          "code": "B05XA19",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B05XA",
          "subclass_name": "Electrolyte solutions"
        },
        {
          "code": "D11AX03",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D11AX",
          "subclass_name": "Other dermatologicals"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1908/properties.json"
    },
    {
      "id": "RXNORM:1919",
      "sequence": 147,
      "display_name": "calcium phosphate",
      "canonical_name": "calcium phosphate",
      "aliases": [
        "calcium phosphate"
      ],
      "rxcui": "1919",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A12AA01"
      ],
      "atc_memberships": [
        {
          "code": "A12AA01",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A12AA",
          "subclass_name": "Calcium"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1919/properties.json"
    },
    {
      "id": "RXNORM:20063",
      "sequence": 148,
      "display_name": "calcium polycarbophil",
      "canonical_name": "calcium polycarbophil",
      "aliases": [
        "calcium polycarbophil",
        "polycarbophil calcium"
      ],
      "rxcui": "20063",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A06AC08"
      ],
      "atc_memberships": [
        {
          "code": "A06AC08",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A06AC",
          "subclass_name": "Bulk-forming laxatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/20063/properties.json"
    },
    {
      "id": "RXNORM:1373458",
      "sequence": 149,
      "display_name": "canagliflozin",
      "canonical_name": "canagliflozin",
      "aliases": [
        "canagliflozin"
      ],
      "rxcui": "1373458",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A10BK02"
      ],
      "atc_memberships": [
        {
          "code": "A10BK02",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A10BK",
          "subclass_name": "Sodium-glucose co-transporter 2 (SGLT2) inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1373458/properties.json"
    },
    {
      "id": "RXNORM:1656052",
      "sequence": 150,
      "display_name": "cangrelor",
      "canonical_name": "cangrelor",
      "aliases": [
        "cangrelor"
      ],
      "rxcui": "1656052",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B01AC25"
      ],
      "atc_memberships": [
        {
          "code": "B01AC25",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B01AC",
          "subclass_name": "Platelet aggregation inhibitors excl. heparin"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1656052/properties.json"
    },
    {
      "id": "RXNORM:194000",
      "sequence": 151,
      "display_name": "capecitabine",
      "canonical_name": "capecitabine",
      "aliases": [
        "capecitabine"
      ],
      "rxcui": "194000",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01BC06"
      ],
      "atc_memberships": [
        {
          "code": "L01BC06",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01BC",
          "subclass_name": "Pyrimidine analogues"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/194000/properties.json"
    },
    {
      "id": "RXNORM:2669967",
      "sequence": 152,
      "display_name": "capivasertib",
      "canonical_name": "capivasertib",
      "aliases": [
        "capivasertib"
      ],
      "rxcui": "2669967",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01EX27"
      ],
      "atc_memberships": [
        {
          "code": "L01EX27",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01EX",
          "subclass_name": "Other protein kinase inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2669967/properties.json"
    },
    {
      "id": "RXNORM:2362165",
      "sequence": 153,
      "display_name": "capmatinib",
      "canonical_name": "capmatinib",
      "aliases": [
        "capmatinib"
      ],
      "rxcui": "2362165",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01EP01",
        "L01EX17"
      ],
      "atc_memberships": [
        {
          "code": "L01EP01",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01EP",
          "subclass_name": "Cellular-mesenchymal-epithelial transition factor (c-MET) kinase inhibitors"
        },
        {
          "code": "L01EX17",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01EX",
          "subclass_name": "Other protein kinase inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2362165/properties.json"
    },
    {
      "id": "RXNORM:1992",
      "sequence": 154,
      "display_name": "capsaicin",
      "canonical_name": "capsaicin",
      "aliases": [
        "capsaicin"
      ],
      "rxcui": "1992",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "M",
      "primary_group_name_tr": "Kas ve iskelet sistemi",
      "atc_codes": [
        "M02AB01",
        "N01BX04"
      ],
      "atc_memberships": [
        {
          "code": "M02AB01",
          "group_code": "M",
          "group_name_tr": "Kas ve iskelet sistemi",
          "subclass_code": "M02AB",
          "subclass_name": "Capsaicin and similar agents"
        },
        {
          "code": "N01BX04",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N01BX",
          "subclass_name": "Other local anesthetics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1992/properties.json"
    },
    {
      "id": "RXNORM:2011",
      "sequence": 155,
      "display_name": "carbazochrome",
      "canonical_name": "carbazochrome",
      "aliases": [
        "carbazochrome"
      ],
      "rxcui": "2011",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B02BX02"
      ],
      "atc_memberships": [
        {
          "code": "B02BX02",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B02BX",
          "subclass_name": "Other systemic hemostatics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2011/properties.json"
    },
    {
      "id": "RXNORM:20217",
      "sequence": 156,
      "display_name": "carbetapentane",
      "canonical_name": "carbetapentane",
      "aliases": [
        "carbetapentane",
        "pentoxyverine"
      ],
      "rxcui": "20217",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "R",
      "primary_group_name_tr": "Solunum sistemi",
      "atc_codes": [
        "R05DB05"
      ],
      "atc_memberships": [
        {
          "code": "R05DB05",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R05DB",
          "subclass_name": "Other cough suppressants"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/20217/properties.json"
    },
    {
      "id": "RXNORM:2020",
      "sequence": 157,
      "display_name": "carbimazole",
      "canonical_name": "carbimazole",
      "aliases": [
        "carbimazole"
      ],
      "rxcui": "2020",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "H",
      "primary_group_name_tr": "Sistemik hormonlar (cinsiyet hormonları ve insülin hariç)",
      "atc_codes": [
        "H03BB01"
      ],
      "atc_memberships": [
        {
          "code": "H03BB01",
          "group_code": "H",
          "group_name_tr": "Sistemik hormonlar (cinsiyet hormonları ve insülin hariç)",
          "subclass_code": "H03BB",
          "subclass_name": "Sulfur-containing imidazole derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2020/properties.json"
    },
    {
      "id": "RXNORM:20220",
      "sequence": 158,
      "display_name": "carbinoxamine",
      "canonical_name": "carbinoxamine",
      "aliases": [
        "carbinoxamine"
      ],
      "rxcui": "20220",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "R",
      "primary_group_name_tr": "Solunum sistemi",
      "atc_codes": [
        "R06AA08"
      ],
      "atc_memberships": [
        {
          "code": "R06AA08",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R06AA",
          "subclass_name": "Aminoalkyl ethers"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/20220/properties.json"
    },
    {
      "id": "RXNORM:2023",
      "sequence": 159,
      "display_name": "carbocysteine",
      "canonical_name": "carbocysteine",
      "aliases": [
        "carbocisteine",
        "carbocysteine"
      ],
      "rxcui": "2023",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "R",
      "primary_group_name_tr": "Solunum sistemi",
      "atc_codes": [
        "R05CB03"
      ],
      "atc_memberships": [
        {
          "code": "R05CB03",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R05CB",
          "subclass_name": "Mucolytics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2023/properties.json"
    },
    {
      "id": "RXNORM:40048",
      "sequence": 160,
      "display_name": "carboplatin",
      "canonical_name": "carboplatin",
      "aliases": [
        "carboplatin"
      ],
      "rxcui": "40048",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01XA02"
      ],
      "atc_memberships": [
        {
          "code": "L01XA02",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01XA",
          "subclass_name": "Platinum compounds"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/40048/properties.json"
    },
    {
      "id": "RXNORM:1667655",
      "sequence": 161,
      "display_name": "cariprazine",
      "canonical_name": "cariprazine",
      "aliases": [
        "cariprazine"
      ],
      "rxcui": "1667655",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N05AX15"
      ],
      "atc_memberships": [
        {
          "code": "N05AX15",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N05AX",
          "subclass_name": "Other antipsychotics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1667655/properties.json"
    },
    {
      "id": "RXNORM:2105",
      "sequence": 162,
      "display_name": "carmustine",
      "canonical_name": "carmustine",
      "aliases": [
        "carmustine"
      ],
      "rxcui": "2105",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01AD01"
      ],
      "atc_memberships": [
        {
          "code": "L01AD01",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01AD",
          "subclass_name": "Nitrosoureas"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2105/properties.json"
    },
    {
      "id": "RXNORM:2116",
      "sequence": 163,
      "display_name": "carteolol",
      "canonical_name": "carteolol",
      "aliases": [
        "carteolol"
      ],
      "rxcui": "2116",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C07AA15",
        "S01ED05"
      ],
      "atc_memberships": [
        {
          "code": "C07AA15",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C07AA",
          "subclass_name": "Beta blocking agents, non-selective"
        },
        {
          "code": "S01ED05",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01ED",
          "subclass_name": "Beta blocking agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2116/properties.json"
    },
    {
      "id": "RXNORM:2129",
      "sequence": 164,
      "display_name": "castor oil",
      "canonical_name": "castor oil",
      "aliases": [
        "castor oil"
      ],
      "rxcui": "2129",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A06AB05"
      ],
      "atc_memberships": [
        {
          "code": "A06AB05",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A06AB",
          "subclass_name": "Contact laxatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2129/properties.json"
    },
    {
      "id": "RXNORM:2176",
      "sequence": 165,
      "display_name": "cefaclor",
      "canonical_name": "cefaclor",
      "aliases": [
        "cefaclor"
      ],
      "rxcui": "2176",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J01DC04"
      ],
      "atc_memberships": [
        {
          "code": "J01DC04",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J01DC",
          "subclass_name": "Second-generation cephalosporins"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2176/properties.json"
    },
    {
      "id": "RXNORM:25033",
      "sequence": 166,
      "display_name": "cefixime",
      "canonical_name": "cefixime",
      "aliases": [
        "cefixime"
      ],
      "rxcui": "25033",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J01DD08"
      ],
      "atc_memberships": [
        {
          "code": "J01DD08",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J01DD",
          "subclass_name": "Third-generation cephalosporins"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/25033/properties.json"
    },
    {
      "id": "RXNORM:2186",
      "sequence": 167,
      "display_name": "cefotaxime",
      "canonical_name": "cefotaxime",
      "aliases": [
        "cefotaxime"
      ],
      "rxcui": "2186",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J01DD01"
      ],
      "atc_memberships": [
        {
          "code": "J01DD01",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J01DD",
          "subclass_name": "Third-generation cephalosporins"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2186/properties.json"
    },
    {
      "id": "RXNORM:19552",
      "sequence": 168,
      "display_name": "cefprozil",
      "canonical_name": "cefprozil",
      "aliases": [
        "cefprozil"
      ],
      "rxcui": "19552",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J01DC10"
      ],
      "atc_memberships": [
        {
          "code": "J01DC10",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J01DC",
          "subclass_name": "Second-generation cephalosporins"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/19552/properties.json"
    },
    {
      "id": "RXNORM:1040004",
      "sequence": 169,
      "display_name": "ceftaroline fosamil",
      "canonical_name": "ceftaroline fosamil",
      "aliases": [
        "ceftaroline fosamil"
      ],
      "rxcui": "1040004",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J01DI02"
      ],
      "atc_memberships": [
        {
          "code": "J01DI02",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J01DI",
          "subclass_name": "Other cephalosporins and penems"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1040004/properties.json"
    },
    {
      "id": "RXNORM:2193",
      "sequence": 170,
      "display_name": "ceftriaxone",
      "canonical_name": "ceftriaxone",
      "aliases": [
        "ceftriaxone"
      ],
      "rxcui": "2193",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J01DD04"
      ],
      "atc_memberships": [
        {
          "code": "J01DD04",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J01DD",
          "subclass_name": "Third-generation cephalosporins"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2193/properties.json"
    },
    {
      "id": "RXNORM:140587",
      "sequence": 171,
      "display_name": "Selekoksib",
      "canonical_name": "celecoxib",
      "aliases": [
        "celecoxib",
        "Selekoksib"
      ],
      "rxcui": "140587",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01XX33",
        "M01AH01"
      ],
      "atc_memberships": [
        {
          "code": "L01XX33",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01XX",
          "subclass_name": "Other antineoplastic agents"
        },
        {
          "code": "M01AH01",
          "group_code": "M",
          "group_name_tr": "Kas ve iskelet sistemi",
          "subclass_code": "M01AH",
          "subclass_name": "Coxibs"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/140587/properties.json"
    },
    {
      "id": "RXNORM:2058826",
      "sequence": 172,
      "display_name": "cemiplimab",
      "canonical_name": "cemiplimab",
      "aliases": [
        "cemiplimab"
      ],
      "rxcui": "2058826",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01FF06"
      ],
      "atc_memberships": [
        {
          "code": "L01FF06",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01FF",
          "subclass_name": "PD-1/PD-L1 (Programmed cell death protein 1/death ligand 1) inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2058826/properties.json"
    },
    {
      "id": "RXNORM:2104332",
      "sequence": 173,
      "display_name": "cenegermin",
      "canonical_name": "cenegermin",
      "aliases": [
        "cenegermin"
      ],
      "rxcui": "2104332",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "S",
      "primary_group_name_tr": "Duyu organları",
      "atc_codes": [
        "S01XA24"
      ],
      "atc_memberships": [
        {
          "code": "S01XA24",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01XA",
          "subclass_name": "Other ophthalmologicals"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2104332/properties.json"
    },
    {
      "id": "RXNORM:2265690",
      "sequence": 174,
      "display_name": "cenobamate",
      "canonical_name": "cenobamate",
      "aliases": [
        "cenobamate"
      ],
      "rxcui": "2265690",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N03AX25"
      ],
      "atc_memberships": [
        {
          "code": "N03AX25",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N03AX",
          "subclass_name": "Other antiepileptics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2265690/properties.json"
    },
    {
      "id": "RXNORM:1535457",
      "sequence": 175,
      "display_name": "ceritinib",
      "canonical_name": "ceritinib",
      "aliases": [
        "ceritinib"
      ],
      "rxcui": "1535457",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01ED02"
      ],
      "atc_memberships": [
        {
          "code": "L01ED02",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01ED",
          "subclass_name": "Anaplastic lymphoma kinase (ALK) inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1535457/properties.json"
    },
    {
      "id": "RXNORM:709271",
      "sequence": 176,
      "display_name": "certolizumab pegol",
      "canonical_name": "certolizumab pegol",
      "aliases": [
        "certolizumab pegol"
      ],
      "rxcui": "709271",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L04AB05"
      ],
      "atc_memberships": [
        {
          "code": "L04AB05",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L04AB",
          "subclass_name": "Tumor necrosis factor alpha (TNF-alpha) inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/709271/properties.json"
    },
    {
      "id": "RXNORM:20610",
      "sequence": 177,
      "display_name": "Setirizin",
      "canonical_name": "cetirizine",
      "aliases": [
        "cetirizine",
        "Setirizin"
      ],
      "rxcui": "20610",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "R",
      "primary_group_name_tr": "Solunum sistemi",
      "atc_codes": [
        "R06AE07",
        "S01GX12"
      ],
      "atc_memberships": [
        {
          "code": "R06AE07",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R06AE",
          "subclass_name": "Piperazine derivatives"
        },
        {
          "code": "S01GX12",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01GX",
          "subclass_name": "Other antiallergics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/20610/properties.json"
    },
    {
      "id": "RXNORM:2286",
      "sequence": 178,
      "display_name": "cetylpyridinium",
      "canonical_name": "cetylpyridinium",
      "aliases": [
        "cetylpyridinium"
      ],
      "rxcui": "2286",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B05CA01",
        "D08AJ03",
        "D09AA07",
        "R02AA06"
      ],
      "atc_memberships": [
        {
          "code": "B05CA01",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B05CA",
          "subclass_name": "Antiinfectives"
        },
        {
          "code": "D08AJ03",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D08AJ",
          "subclass_name": "Quaternary ammonium compounds"
        },
        {
          "code": "D09AA07",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D09AA",
          "subclass_name": "Medicated dressings with antiinfectives"
        },
        {
          "code": "R02AA06",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R02AA",
          "subclass_name": "Antiseptics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2286/properties.json"
    },
    {
      "id": "RXNORM:236664",
      "sequence": 179,
      "display_name": "chaste tree preparation",
      "canonical_name": "chaste tree preparation",
      "aliases": [
        "Agni casti fructus",
        "chaste tree preparation"
      ],
      "rxcui": "236664",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "G",
      "primary_group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
      "atc_codes": [
        "G02CX03"
      ],
      "atc_memberships": [
        {
          "code": "G02CX03",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G02CX",
          "subclass_name": "Other gynecologicals"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/236664/properties.json"
    },
    {
      "id": "RXNORM:2346",
      "sequence": 180,
      "display_name": "chlorambucil",
      "canonical_name": "chlorambucil",
      "aliases": [
        "chlorambucil"
      ],
      "rxcui": "2346",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01AA02"
      ],
      "atc_memberships": [
        {
          "code": "L01AA02",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01AA",
          "subclass_name": "Nitrogen mustard analogues"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2346/properties.json"
    },
    {
      "id": "RXNORM:2348",
      "sequence": 181,
      "display_name": "chloramphenicol",
      "canonical_name": "chloramphenicol",
      "aliases": [
        "chloramphenicol"
      ],
      "rxcui": "2348",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D06AX02",
        "D10AF03",
        "G01AA05",
        "J01BA01",
        "S01AA01",
        "S02AA01",
        "S03AA08"
      ],
      "atc_memberships": [
        {
          "code": "D06AX02",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D06AX",
          "subclass_name": "Other antibiotics for topical use"
        },
        {
          "code": "D10AF03",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D10AF",
          "subclass_name": "Antiinfectives for treatment of acne"
        },
        {
          "code": "G01AA05",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G01AA",
          "subclass_name": "Antibiotics"
        },
        {
          "code": "J01BA01",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J01BA",
          "subclass_name": "Amphenicols"
        },
        {
          "code": "S01AA01",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01AA",
          "subclass_name": "Antibiotics"
        },
        {
          "code": "S02AA01",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S02AA",
          "subclass_name": "Antiinfectives"
        },
        {
          "code": "S03AA08",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S03AA",
          "subclass_name": "Antiinfectives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2348/properties.json"
    },
    {
      "id": "RXNORM:2354",
      "sequence": 182,
      "display_name": "chlorcyclizine",
      "canonical_name": "chlorcyclizine",
      "aliases": [
        "chlorcyclizine"
      ],
      "rxcui": "2354",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "R",
      "primary_group_name_tr": "Solunum sistemi",
      "atc_codes": [
        "R06AE04"
      ],
      "atc_memberships": [
        {
          "code": "R06AE04",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R06AE",
          "subclass_name": "Piperazine derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2354/properties.json"
    },
    {
      "id": "RXNORM:2356",
      "sequence": 183,
      "display_name": "chlordiazepoxide",
      "canonical_name": "chlordiazepoxide",
      "aliases": [
        "chlordiazepoxide"
      ],
      "rxcui": "2356",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N05BA02"
      ],
      "atc_memberships": [
        {
          "code": "N05BA02",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N05BA",
          "subclass_name": "Benzodiazepine derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2356/properties.json"
    },
    {
      "id": "RXNORM:2378",
      "sequence": 184,
      "display_name": "chlorobutanol",
      "canonical_name": "chlorobutanol",
      "aliases": [
        "chlorobutanol"
      ],
      "rxcui": "2378",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A04AD04"
      ],
      "atc_memberships": [
        {
          "code": "A04AD04",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A04AD",
          "subclass_name": "Other antiemetics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2378/properties.json"
    },
    {
      "id": "RXNORM:2396",
      "sequence": 185,
      "display_name": "chlorothiazide",
      "canonical_name": "chlorothiazide",
      "aliases": [
        "chlorothiazide"
      ],
      "rxcui": "2396",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C03AA04"
      ],
      "atc_memberships": [
        {
          "code": "C03AA04",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C03AA",
          "subclass_name": "Thiazides, plain"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2396/properties.json"
    },
    {
      "id": "RXNORM:2400",
      "sequence": 186,
      "display_name": "chlorpheniramine",
      "canonical_name": "chlorpheniramine",
      "aliases": [
        "chlorphenamine",
        "chlorpheniramine"
      ],
      "rxcui": "2400",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "R",
      "primary_group_name_tr": "Solunum sistemi",
      "atc_codes": [
        "R06AB04"
      ],
      "atc_memberships": [
        {
          "code": "R06AB04",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R06AB",
          "subclass_name": "Substituted alkylamines"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2400/properties.json"
    },
    {
      "id": "RXNORM:2403",
      "sequence": 187,
      "display_name": "chlorpromazine",
      "canonical_name": "chlorpromazine",
      "aliases": [
        "chlorpromazine"
      ],
      "rxcui": "2403",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N05AA01"
      ],
      "atc_memberships": [
        {
          "code": "N05AA01",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N05AA",
          "subclass_name": "Phenothiazines with aliphatic side-chain"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2403/properties.json"
    },
    {
      "id": "RXNORM:2409",
      "sequence": 188,
      "display_name": "chlorthalidone",
      "canonical_name": "chlorthalidone",
      "aliases": [
        "chlortalidone",
        "chlorthalidone"
      ],
      "rxcui": "2409",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C03BA04"
      ],
      "atc_memberships": [
        {
          "code": "C03BA04",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C03BA",
          "subclass_name": "Sulfonamides, plain"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2409/properties.json"
    },
    {
      "id": "RXNORM:2418",
      "sequence": 189,
      "display_name": "Kolekalsiferol",
      "canonical_name": "cholecalciferol",
      "aliases": [
        "cholecalciferol",
        "colecalciferol",
        "Kolekalsiferol"
      ],
      "rxcui": "2418",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A11CC05"
      ],
      "atc_memberships": [
        {
          "code": "A11CC05",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A11CC",
          "subclass_name": "Vitamin D and analogues"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2418/properties.json"
    },
    {
      "id": "RXNORM:1440856",
      "sequence": 190,
      "display_name": "cholic acid",
      "canonical_name": "cholic acid",
      "aliases": [
        "cholic acid"
      ],
      "rxcui": "1440856",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A05AA03"
      ],
      "atc_memberships": [
        {
          "code": "A05AA03",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A05AA",
          "subclass_name": "Bile acids and derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1440856/properties.json"
    },
    {
      "id": "RXNORM:1433887",
      "sequence": 191,
      "display_name": "choline fenofibrate",
      "canonical_name": "choline fenofibrate",
      "aliases": [
        "choline fenofibrate"
      ],
      "rxcui": "1433887",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C10AB11"
      ],
      "atc_memberships": [
        {
          "code": "C10AB11",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C10AB",
          "subclass_name": "Fibrates"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1433887/properties.json"
    },
    {
      "id": "RXNORM:2473",
      "sequence": 192,
      "display_name": "chondroitin sulfates",
      "canonical_name": "chondroitin sulfates",
      "aliases": [
        "chondroitin sulfate",
        "chondroitin sulfates"
      ],
      "rxcui": "2473",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "M",
      "primary_group_name_tr": "Kas ve iskelet sistemi",
      "atc_codes": [
        "M01AX25"
      ],
      "atc_memberships": [
        {
          "code": "M01AX25",
          "group_code": "M",
          "group_name_tr": "Kas ve iskelet sistemi",
          "subclass_code": "M01AX",
          "subclass_name": "Other antiinflammatory and antirheumatic agents, non-steroids"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2473/properties.json"
    },
    {
      "id": "RXNORM:4986",
      "sequence": 193,
      "display_name": "chorionic gonadotropin",
      "canonical_name": "chorionic gonadotropin",
      "aliases": [
        "chorionic gonadotrophin",
        "chorionic gonadotropin"
      ],
      "rxcui": "4986",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "G",
      "primary_group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
      "atc_codes": [
        "G03GA01"
      ],
      "atc_memberships": [
        {
          "code": "G03GA01",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G03GA",
          "subclass_name": "Gonadotropins"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/4986/properties.json"
    },
    {
      "id": "RXNORM:274964",
      "sequence": 194,
      "display_name": "ciclesonide",
      "canonical_name": "ciclesonide",
      "aliases": [
        "ciclesonide"
      ],
      "rxcui": "274964",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "R",
      "primary_group_name_tr": "Solunum sistemi",
      "atc_codes": [
        "R01AD13",
        "R03BA08"
      ],
      "atc_memberships": [
        {
          "code": "R01AD13",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R01AD",
          "subclass_name": "Corticosteroids"
        },
        {
          "code": "R03BA08",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R03BA",
          "subclass_name": "Glucocorticoids"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/274964/properties.json"
    },
    {
      "id": "RXNORM:21090",
      "sequence": 195,
      "display_name": "ciclopirox",
      "canonical_name": "ciclopirox",
      "aliases": [
        "ciclopirox"
      ],
      "rxcui": "21090",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D01AE14",
        "G01AX12"
      ],
      "atc_memberships": [
        {
          "code": "D01AE14",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D01AE",
          "subclass_name": "Other antifungals for topical use"
        },
        {
          "code": "G01AX12",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G01AX",
          "subclass_name": "Other antiinfectives and antiseptics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/21090/properties.json"
    },
    {
      "id": "RXNORM:83171",
      "sequence": 196,
      "display_name": "cidofovir",
      "canonical_name": "cidofovir",
      "aliases": [
        "cidofovir"
      ],
      "rxcui": "83171",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J05AB12"
      ],
      "atc_memberships": [
        {
          "code": "J05AB12",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J05AB",
          "subclass_name": "Nucleosides and nucleotides excl. reverse transcriptase inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/83171/properties.json"
    },
    {
      "id": "RXNORM:21107",
      "sequence": 197,
      "display_name": "cilostazol",
      "canonical_name": "cilostazol",
      "aliases": [
        "cilostazol"
      ],
      "rxcui": "21107",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B01AC23"
      ],
      "atc_memberships": [
        {
          "code": "B01AC23",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B01AC",
          "subclass_name": "Platelet aggregation inhibitors excl. heparin"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/21107/properties.json"
    },
    {
      "id": "RXNORM:2541",
      "sequence": 198,
      "display_name": "cimetidine",
      "canonical_name": "cimetidine",
      "aliases": [
        "cimetidine"
      ],
      "rxcui": "2541",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A02BA01"
      ],
      "atc_memberships": [
        {
          "code": "A02BA01",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A02BA",
          "subclass_name": "H2-receptor antagonists"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2541/properties.json"
    },
    {
      "id": "RXNORM:2667433",
      "sequence": 199,
      "display_name": "cipaglucosidase alfa",
      "canonical_name": "cipaglucosidase alfa",
      "aliases": [
        "cipaglucosidase alfa"
      ],
      "rxcui": "2667433",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A16AB23"
      ],
      "atc_memberships": [
        {
          "code": "A16AB23",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A16AB",
          "subclass_name": "Enzymes"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2667433/properties.json"
    },
    {
      "id": "RXNORM:2551",
      "sequence": 200,
      "display_name": "Siprofloksasin",
      "canonical_name": "ciprofloxacin",
      "aliases": [
        "ciprofloxacin",
        "Siprofloksasin"
      ],
      "rxcui": "2551",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J01MA02",
        "S01AE03",
        "S02AA15",
        "S03AA07"
      ],
      "atc_memberships": [
        {
          "code": "J01MA02",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J01MA",
          "subclass_name": "Fluoroquinolones"
        },
        {
          "code": "S01AE03",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01AE",
          "subclass_name": "Fluoroquinolones"
        },
        {
          "code": "S02AA15",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S02AA",
          "subclass_name": "Antiinfectives"
        },
        {
          "code": "S03AA07",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S03AA",
          "subclass_name": "Antiinfectives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2551/properties.json"
    },
    {
      "id": "RXNORM:35255",
      "sequence": 201,
      "display_name": "cisapride",
      "canonical_name": "cisapride",
      "aliases": [
        "cisapride"
      ],
      "rxcui": "35255",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A03FA02"
      ],
      "atc_memberships": [
        {
          "code": "A03FA02",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A03FA",
          "subclass_name": "Propulsives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/35255/properties.json"
    },
    {
      "id": "RXNORM:2555",
      "sequence": 202,
      "display_name": "cisplatin",
      "canonical_name": "cisplatin",
      "aliases": [
        "cisplatin"
      ],
      "rxcui": "2555",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01XA01"
      ],
      "atc_memberships": [
        {
          "code": "L01XA01",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01XA",
          "subclass_name": "Platinum compounds"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2555/properties.json"
    },
    {
      "id": "RXNORM:997602",
      "sequence": 203,
      "display_name": "citicoline",
      "canonical_name": "citicoline",
      "aliases": [
        "citicoline"
      ],
      "rxcui": "997602",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N06BX06"
      ],
      "atc_memberships": [
        {
          "code": "N06BX06",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N06BX",
          "subclass_name": "Other psychostimulants and nootropics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/997602/properties.json"
    },
    {
      "id": "RXNORM:2716802",
      "sequence": 204,
      "display_name": "clesrovimab",
      "canonical_name": "clesrovimab",
      "aliases": [
        "clesrovimab"
      ],
      "rxcui": "2716802",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J06BD10"
      ],
      "atc_memberships": [
        {
          "code": "J06BD10",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J06BD",
          "subclass_name": "Antiviral monoclonal antibodies"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2716802/properties.json"
    },
    {
      "id": "RXNORM:2582",
      "sequence": 205,
      "display_name": "Klindamisin",
      "canonical_name": "clindamycin",
      "aliases": [
        "clindamycin",
        "Klindamisin"
      ],
      "rxcui": "2582",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D10AF01",
        "G01AA10",
        "J01FF01"
      ],
      "atc_memberships": [
        {
          "code": "D10AF01",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D10AF",
          "subclass_name": "Antiinfectives for treatment of acne"
        },
        {
          "code": "G01AA10",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G01AA",
          "subclass_name": "Antibiotics"
        },
        {
          "code": "J01FF01",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J01FF",
          "subclass_name": "Lincosamides"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2582/properties.json"
    },
    {
      "id": "RXNORM:21241",
      "sequence": 206,
      "display_name": "clobazam",
      "canonical_name": "clobazam",
      "aliases": [
        "clobazam"
      ],
      "rxcui": "21241",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N05BA09"
      ],
      "atc_memberships": [
        {
          "code": "N05BA09",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N05BA",
          "subclass_name": "Benzodiazepine derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/21241/properties.json"
    },
    {
      "id": "RXNORM:21249",
      "sequence": 207,
      "display_name": "clocortolone",
      "canonical_name": "clocortolone",
      "aliases": [
        "clocortolone"
      ],
      "rxcui": "21249",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D07AB21"
      ],
      "atc_memberships": [
        {
          "code": "D07AB21",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D07AB",
          "subclass_name": "Corticosteroids, moderately potent (group II)"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/21249/properties.json"
    },
    {
      "id": "RXNORM:44151",
      "sequence": 208,
      "display_name": "clofarabine",
      "canonical_name": "clofarabine",
      "aliases": [
        "clofarabine"
      ],
      "rxcui": "44151",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01BB06"
      ],
      "atc_memberships": [
        {
          "code": "L01BB06",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01BB",
          "subclass_name": "Purine analogues"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/44151/properties.json"
    },
    {
      "id": "RXNORM:2597",
      "sequence": 209,
      "display_name": "clomipramine",
      "canonical_name": "clomipramine",
      "aliases": [
        "clomipramine"
      ],
      "rxcui": "2597",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N06AA04"
      ],
      "atc_memberships": [
        {
          "code": "N06AA04",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N06AA",
          "subclass_name": "Non-selective monoamine reuptake inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2597/properties.json"
    },
    {
      "id": "RXNORM:2599",
      "sequence": 210,
      "display_name": "clonidine",
      "canonical_name": "clonidine",
      "aliases": [
        "clonidine"
      ],
      "rxcui": "2599",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C02AC01",
        "N02CX02",
        "S01EA04"
      ],
      "atc_memberships": [
        {
          "code": "C02AC01",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C02AC",
          "subclass_name": "Imidazoline receptor agonists"
        },
        {
          "code": "N02CX02",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N02CX",
          "subclass_name": "Other antimigraine preparations"
        },
        {
          "code": "S01EA04",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01EA",
          "subclass_name": "Sympathomimetics in glaucoma therapy"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2599/properties.json"
    },
    {
      "id": "RXNORM:32968",
      "sequence": 211,
      "display_name": "Klopidogrel",
      "canonical_name": "clopidogrel",
      "aliases": [
        "clopidogrel",
        "Klopidogrel"
      ],
      "rxcui": "32968",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B01AC04"
      ],
      "atc_memberships": [
        {
          "code": "B01AC04",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B01AC",
          "subclass_name": "Platelet aggregation inhibitors excl. heparin"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/32968/properties.json"
    },
    {
      "id": "RXNORM:2623",
      "sequence": 212,
      "display_name": "clotrimazole",
      "canonical_name": "clotrimazole",
      "aliases": [
        "clotrimazole"
      ],
      "rxcui": "2623",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A01AB18",
        "D01AC01",
        "G01AF02"
      ],
      "atc_memberships": [
        {
          "code": "A01AB18",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A01AB",
          "subclass_name": "Antiinfectives and antiseptics for local oral treatment"
        },
        {
          "code": "D01AC01",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D01AC",
          "subclass_name": "Imidazole and triazole derivatives"
        },
        {
          "code": "G01AF02",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G01AF",
          "subclass_name": "Imidazole derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2623/properties.json"
    },
    {
      "id": "RXNORM:2626",
      "sequence": 213,
      "display_name": "clozapine",
      "canonical_name": "clozapine",
      "aliases": [
        "clozapine"
      ],
      "rxcui": "2626",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N05AH02"
      ],
      "atc_memberships": [
        {
          "code": "N05AH02",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N05AH",
          "subclass_name": "Diazepines, oxazepines, thiazepines and oxepines"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2626/properties.json"
    },
    {
      "id": "RXNORM:1306284",
      "sequence": 214,
      "display_name": "cobicistat",
      "canonical_name": "cobicistat",
      "aliases": [
        "cobicistat"
      ],
      "rxcui": "1306284",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "V",
      "primary_group_name_tr": "Diğer maddeler",
      "atc_codes": [
        "V03AX03"
      ],
      "atc_memberships": [
        {
          "code": "V03AX03",
          "group_code": "V",
          "group_name_tr": "Diğer maddeler",
          "subclass_code": "V03AX",
          "subclass_name": "Other therapeutic products"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1306284/properties.json"
    },
    {
      "id": "RXNORM:1722365",
      "sequence": 215,
      "display_name": "cobimetinib",
      "canonical_name": "cobimetinib",
      "aliases": [
        "cobimetinib"
      ],
      "rxcui": "1722365",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01EE02"
      ],
      "atc_memberships": [
        {
          "code": "L01EE02",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01EE",
          "subclass_name": "Mitogen-activated protein kinase (MEK) inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1722365/properties.json"
    },
    {
      "id": "RXNORM:2670",
      "sequence": 216,
      "display_name": "codeine",
      "canonical_name": "codeine",
      "aliases": [
        "codeine"
      ],
      "rxcui": "2670",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "R",
      "primary_group_name_tr": "Solunum sistemi",
      "atc_codes": [
        "R05DA04"
      ],
      "atc_memberships": [
        {
          "code": "R05DA04",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R05DA",
          "subclass_name": "Opium alkaloids and derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2670/properties.json"
    },
    {
      "id": "RXNORM:2683",
      "sequence": 217,
      "display_name": "colchicine",
      "canonical_name": "colchicine",
      "aliases": [
        "colchicine"
      ],
      "rxcui": "2683",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "M",
      "primary_group_name_tr": "Kas ve iskelet sistemi",
      "atc_codes": [
        "M04AC01"
      ],
      "atc_memberships": [
        {
          "code": "M04AC01",
          "group_code": "M",
          "group_name_tr": "Kas ve iskelet sistemi",
          "subclass_code": "M04AC",
          "subclass_name": "Preparations with no effect on uric acid metabolism"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2683/properties.json"
    },
    {
      "id": "RXNORM:141626",
      "sequence": 218,
      "display_name": "colesevelam",
      "canonical_name": "colesevelam",
      "aliases": [
        "colesevelam"
      ],
      "rxcui": "141626",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C10AC04"
      ],
      "atc_memberships": [
        {
          "code": "C10AC04",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C10AC",
          "subclass_name": "Bile acid sequestrants"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/141626/properties.json"
    },
    {
      "id": "RXNORM:2714",
      "sequence": 219,
      "display_name": "collagen",
      "canonical_name": "collagen",
      "aliases": [
        "collagen"
      ],
      "rxcui": "2714",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B02BC07",
        "G04BX11"
      ],
      "atc_memberships": [
        {
          "code": "B02BC07",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B02BC",
          "subclass_name": "Local hemostatics"
        },
        {
          "code": "G04BX11",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G04BX",
          "subclass_name": "Other urologicals"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2714/properties.json"
    },
    {
      "id": "RXNORM:2708333",
      "sequence": 220,
      "display_name": "concizumab",
      "canonical_name": "concizumab",
      "aliases": [
        "concizumab"
      ],
      "rxcui": "2708333",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B02BX10"
      ],
      "atc_memberships": [
        {
          "code": "B02BX10",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B02BX",
          "subclass_name": "Other systemic hemostatics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2708333/properties.json"
    },
    {
      "id": "RXNORM:302285",
      "sequence": 221,
      "display_name": "conivaptan",
      "canonical_name": "conivaptan",
      "aliases": [
        "conivaptan"
      ],
      "rxcui": "302285",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C03XA02"
      ],
      "atc_memberships": [
        {
          "code": "C03XA02",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C03XA",
          "subclass_name": "Vasopressin antagonists"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/302285/properties.json"
    },
    {
      "id": "RXNORM:1945077",
      "sequence": 222,
      "display_name": "copanlisib",
      "canonical_name": "copanlisib",
      "aliases": [
        "copanlisib"
      ],
      "rxcui": "1945077",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01EM02"
      ],
      "atc_memberships": [
        {
          "code": "L01EM02",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01EM",
          "subclass_name": "Phosphatidylinositol-3-kinase (Pi3K) inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1945077/properties.json"
    },
    {
      "id": "RXNORM:21579",
      "sequence": 223,
      "display_name": "copper sulfate",
      "canonical_name": "copper sulfate",
      "aliases": [
        "copper sulfate"
      ],
      "rxcui": "21579",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "V",
      "primary_group_name_tr": "Diğer maddeler",
      "atc_codes": [
        "V03AB20"
      ],
      "atc_memberships": [
        {
          "code": "V03AB20",
          "group_code": "V",
          "group_name_tr": "Diğer maddeler",
          "subclass_code": "V03AB",
          "subclass_name": "Antidotes"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/21579/properties.json"
    },
    {
      "id": "RXNORM:2890",
      "sequence": 224,
      "display_name": "cosyntropin",
      "canonical_name": "cosyntropin",
      "aliases": [
        "cosyntropin",
        "tetracosactide"
      ],
      "rxcui": "2890",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "H",
      "primary_group_name_tr": "Sistemik hormonlar (cinsiyet hormonları ve insülin hariç)",
      "atc_codes": [
        "H01AA02"
      ],
      "atc_memberships": [
        {
          "code": "H01AA02",
          "group_code": "H",
          "group_name_tr": "Sistemik hormonlar (cinsiyet hormonları ve insülin hariç)",
          "subclass_code": "H01AA",
          "subclass_name": "ACTH"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2890/properties.json"
    },
    {
      "id": "RXNORM:2915",
      "sequence": 225,
      "display_name": "creosote",
      "canonical_name": "creosote",
      "aliases": [
        "creosote"
      ],
      "rxcui": "2915",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "R",
      "primary_group_name_tr": "Solunum sistemi",
      "atc_codes": [
        "R05CA08"
      ],
      "atc_memberships": [
        {
          "code": "R05CA08",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R05CA",
          "subclass_name": "Expectorants"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2915/properties.json"
    },
    {
      "id": "RXNORM:2262279",
      "sequence": 226,
      "display_name": "crizanlizumab",
      "canonical_name": "crizanlizumab",
      "aliases": [
        "crizanlizumab"
      ],
      "rxcui": "2262279",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B06AX01"
      ],
      "atc_memberships": [
        {
          "code": "B06AX01",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B06AX",
          "subclass_name": "Other hematological agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2262279/properties.json"
    },
    {
      "id": "RXNORM:1364449",
      "sequence": 227,
      "display_name": "crofelemer",
      "canonical_name": "crofelemer",
      "aliases": [
        "crofelemer"
      ],
      "rxcui": "1364449",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A07XA06"
      ],
      "atc_memberships": [
        {
          "code": "A07XA06",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A07XA",
          "subclass_name": "Other antidiarrheals"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1364449/properties.json"
    },
    {
      "id": "RXNORM:1310706",
      "sequence": 228,
      "display_name": "crospovidone",
      "canonical_name": "crospovidone",
      "aliases": [
        "crospovidone"
      ],
      "rxcui": "1310706",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A07BC03"
      ],
      "atc_memberships": [
        {
          "code": "A07BC03",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A07BC",
          "subclass_name": "Other intestinal adsorbents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1310706/properties.json"
    },
    {
      "id": "RXNORM:21949",
      "sequence": 229,
      "display_name": "cyclobenzaprine",
      "canonical_name": "cyclobenzaprine",
      "aliases": [
        "cyclobenzaprine"
      ],
      "rxcui": "21949",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "M",
      "primary_group_name_tr": "Kas ve iskelet sistemi",
      "atc_codes": [
        "M03BX08"
      ],
      "atc_memberships": [
        {
          "code": "M03BX08",
          "group_code": "M",
          "group_name_tr": "Kas ve iskelet sistemi",
          "subclass_code": "M03BX",
          "subclass_name": "Other centrally acting agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/21949/properties.json"
    },
    {
      "id": "RXNORM:3001",
      "sequence": 230,
      "display_name": "cyclopentolate",
      "canonical_name": "cyclopentolate",
      "aliases": [
        "cyclopentolate"
      ],
      "rxcui": "3001",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "S",
      "primary_group_name_tr": "Duyu organları",
      "atc_codes": [
        "S01FA04"
      ],
      "atc_memberships": [
        {
          "code": "S01FA04",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01FA",
          "subclass_name": "Anticholinergics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/3001/properties.json"
    },
    {
      "id": "RXNORM:3008",
      "sequence": 231,
      "display_name": "cyclosporine",
      "canonical_name": "cyclosporine",
      "aliases": [
        "ciclosporin",
        "cyclosporine"
      ],
      "rxcui": "3008",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L04AD01",
        "S01XA18"
      ],
      "atc_memberships": [
        {
          "code": "L04AD01",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L04AD",
          "subclass_name": "Calcineurin inhibitors"
        },
        {
          "code": "S01XA18",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01XA",
          "subclass_name": "Other ophthalmologicals"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/3008/properties.json"
    },
    {
      "id": "RXNORM:3022",
      "sequence": 232,
      "display_name": "cysteamine",
      "canonical_name": "cysteamine",
      "aliases": [
        "cysteamine",
        "mercaptamine"
      ],
      "rxcui": "3022",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A16AA04",
        "S01XA21"
      ],
      "atc_memberships": [
        {
          "code": "A16AA04",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A16AA",
          "subclass_name": "Amino acids and derivatives"
        },
        {
          "code": "S01XA21",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01XA",
          "subclass_name": "Other ophthalmologicals"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/3022/properties.json"
    },
    {
      "id": "RXNORM:3041",
      "sequence": 233,
      "display_name": "cytarabine",
      "canonical_name": "cytarabine",
      "aliases": [
        "cytarabine"
      ],
      "rxcui": "3041",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01BC01"
      ],
      "atc_memberships": [
        {
          "code": "L01BC01",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01BC",
          "subclass_name": "Pyrimidine analogues"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/3041/properties.json"
    },
    {
      "id": "RXNORM:1037042",
      "sequence": 234,
      "display_name": "dabigatran etexilate",
      "canonical_name": "dabigatran etexilate",
      "aliases": [
        "dabigatran etexilate"
      ],
      "rxcui": "1037042",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B01AE07"
      ],
      "atc_memberships": [
        {
          "code": "B01AE07",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B01AE",
          "subclass_name": "Direct thrombin inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1037042/properties.json"
    },
    {
      "id": "RXNORM:1424911",
      "sequence": 235,
      "display_name": "dabrafenib",
      "canonical_name": "dabrafenib",
      "aliases": [
        "dabrafenib"
      ],
      "rxcui": "1424911",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01EC02"
      ],
      "atc_memberships": [
        {
          "code": "L01EC02",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01EC",
          "subclass_name": "B-Raf serine-threonine kinase (BRAF) inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1424911/properties.json"
    },
    {
      "id": "RXNORM:3100",
      "sequence": 236,
      "display_name": "dactinomycin",
      "canonical_name": "dactinomycin",
      "aliases": [
        "dactinomycin"
      ],
      "rxcui": "3100",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01DA01"
      ],
      "atc_memberships": [
        {
          "code": "L01DA01",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01DA",
          "subclass_name": "Actinomycines"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/3100/properties.json"
    },
    {
      "id": "RXNORM:3102",
      "sequence": 237,
      "display_name": "danazol",
      "canonical_name": "danazol",
      "aliases": [
        "danazol"
      ],
      "rxcui": "3102",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "G",
      "primary_group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
      "atc_codes": [
        "G03XA01"
      ],
      "atc_memberships": [
        {
          "code": "G03XA01",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G03XA",
          "subclass_name": "Antigonadotropins and similar agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/3102/properties.json"
    },
    {
      "id": "RXNORM:2678952",
      "sequence": 238,
      "display_name": "danicopan",
      "canonical_name": "danicopan",
      "aliases": [
        "danicopan"
      ],
      "rxcui": "2678952",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L04AJ09"
      ],
      "atc_memberships": [
        {
          "code": "L04AJ09",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L04AJ",
          "subclass_name": "Complement inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2678952/properties.json"
    },
    {
      "id": "RXNORM:3105",
      "sequence": 239,
      "display_name": "dantrolene",
      "canonical_name": "dantrolene",
      "aliases": [
        "dantrolene"
      ],
      "rxcui": "3105",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "M",
      "primary_group_name_tr": "Kas ve iskelet sistemi",
      "atc_codes": [
        "M03CA01"
      ],
      "atc_memberships": [
        {
          "code": "M03CA01",
          "group_code": "M",
          "group_name_tr": "Kas ve iskelet sistemi",
          "subclass_code": "M03CA",
          "subclass_name": "Dantrolene and derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/3105/properties.json"
    },
    {
      "id": "RXNORM:1488564",
      "sequence": 240,
      "display_name": "dapagliflozin",
      "canonical_name": "dapagliflozin",
      "aliases": [
        "dapagliflozin"
      ],
      "rxcui": "1488564",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A10BK01"
      ],
      "atc_memberships": [
        {
          "code": "A10BK01",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A10BK",
          "subclass_name": "Sodium-glucose co-transporter 2 (SGLT2) inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1488564/properties.json"
    },
    {
      "id": "RXNORM:22299",
      "sequence": 241,
      "display_name": "daptomycin",
      "canonical_name": "daptomycin",
      "aliases": [
        "daptomycin"
      ],
      "rxcui": "22299",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J01XX09"
      ],
      "atc_memberships": [
        {
          "code": "J01XX09",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J01XX",
          "subclass_name": "Other antibacterials"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/22299/properties.json"
    },
    {
      "id": "RXNORM:283838",
      "sequence": 242,
      "display_name": "darbepoetin alfa",
      "canonical_name": "darbepoetin alfa",
      "aliases": [
        "darbepoetin alfa"
      ],
      "rxcui": "283838",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B03XA02"
      ],
      "atc_memberships": [
        {
          "code": "B03XA02",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B03XA",
          "subclass_name": "Other antianemic preparations"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/283838/properties.json"
    },
    {
      "id": "RXNORM:2591497",
      "sequence": 243,
      "display_name": "daridorexant",
      "canonical_name": "daridorexant",
      "aliases": [
        "daridorexant"
      ],
      "rxcui": "2591497",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N05CJ03"
      ],
      "atc_memberships": [
        {
          "code": "N05CJ03",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N05CJ",
          "subclass_name": "Orexin receptor antagonists"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2591497/properties.json"
    },
    {
      "id": "RXNORM:2180325",
      "sequence": 244,
      "display_name": "darolutamide",
      "canonical_name": "darolutamide",
      "aliases": [
        "darolutamide"
      ],
      "rxcui": "2180325",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L02BB06"
      ],
      "atc_memberships": [
        {
          "code": "L02BB06",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L02BB",
          "subclass_name": "Anti-androgens"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2180325/properties.json"
    },
    {
      "id": "RXNORM:460132",
      "sequence": 245,
      "display_name": "darunavir",
      "canonical_name": "darunavir",
      "aliases": [
        "darunavir"
      ],
      "rxcui": "460132",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J05AE10"
      ],
      "atc_memberships": [
        {
          "code": "J05AE10",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J05AE",
          "subclass_name": "Protease inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/460132/properties.json"
    },
    {
      "id": "RXNORM:2535233",
      "sequence": 246,
      "display_name": "dasiglucagon",
      "canonical_name": "dasiglucagon",
      "aliases": [
        "dasiglucagon"
      ],
      "rxcui": "2535233",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "H",
      "primary_group_name_tr": "Sistemik hormonlar (cinsiyet hormonları ve insülin hariç)",
      "atc_codes": [
        "H04AA02"
      ],
      "atc_memberships": [
        {
          "code": "H04AA02",
          "group_code": "H",
          "group_name_tr": "Sistemik hormonlar (cinsiyet hormonları ve insülin hariç)",
          "subclass_code": "H04AA",
          "subclass_name": "Glycogenolytic hormones"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2535233/properties.json"
    },
    {
      "id": "RXNORM:2703033",
      "sequence": 247,
      "display_name": "datopotamab deruxtecan",
      "canonical_name": "datopotamab deruxtecan",
      "aliases": [
        "datopotamab deruxtecan"
      ],
      "rxcui": "2703033",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01FX35"
      ],
      "atc_memberships": [
        {
          "code": "L01FX35",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01FX",
          "subclass_name": "Other monoclonal antibodies and antibody drug conjugates"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2703033/properties.json"
    },
    {
      "id": "RXNORM:3109",
      "sequence": 248,
      "display_name": "daunorubicin",
      "canonical_name": "daunorubicin",
      "aliases": [
        "daunorubicin"
      ],
      "rxcui": "3109",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01DB02"
      ],
      "atc_memberships": [
        {
          "code": "L01DB02",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01DB",
          "subclass_name": "Anthracyclines and related substances"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/3109/properties.json"
    },
    {
      "id": "RXNORM:3116",
      "sequence": 249,
      "display_name": "deanol",
      "canonical_name": "deanol",
      "aliases": [
        "deanol"
      ],
      "rxcui": "3116",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N06BX04"
      ],
      "atc_memberships": [
        {
          "code": "N06BX04",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N06BX",
          "subclass_name": "Other psychostimulants and nootropics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/3116/properties.json"
    },
    {
      "id": "RXNORM:614373",
      "sequence": 250,
      "display_name": "deferasirox",
      "canonical_name": "deferasirox",
      "aliases": [
        "deferasirox"
      ],
      "rxcui": "614373",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "V",
      "primary_group_name_tr": "Diğer maddeler",
      "atc_codes": [
        "V03AC03"
      ],
      "atc_memberships": [
        {
          "code": "V03AC03",
          "group_code": "V",
          "group_name_tr": "Diğer maddeler",
          "subclass_code": "V03AC",
          "subclass_name": "Iron chelating agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/614373/properties.json"
    },
    {
      "id": "RXNORM:11645",
      "sequence": 251,
      "display_name": "deferiprone",
      "canonical_name": "deferiprone",
      "aliases": [
        "deferiprone"
      ],
      "rxcui": "11645",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "V",
      "primary_group_name_tr": "Diğer maddeler",
      "atc_codes": [
        "V03AC02"
      ],
      "atc_memberships": [
        {
          "code": "V03AC02",
          "group_code": "V",
          "group_name_tr": "Diğer maddeler",
          "subclass_code": "V03AC",
          "subclass_name": "Iron chelating agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/11645/properties.json"
    },
    {
      "id": "RXNORM:3131",
      "sequence": 252,
      "display_name": "deferoxamine",
      "canonical_name": "deferoxamine",
      "aliases": [
        "deferoxamine"
      ],
      "rxcui": "3131",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "V",
      "primary_group_name_tr": "Diğer maddeler",
      "atc_codes": [
        "V03AC01"
      ],
      "atc_memberships": [
        {
          "code": "V03AC01",
          "group_code": "V",
          "group_name_tr": "Diğer maddeler",
          "subclass_code": "V03AC",
          "subclass_name": "Iron chelating agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/3131/properties.json"
    },
    {
      "id": "RXNORM:475230",
      "sequence": 253,
      "display_name": "degarelix",
      "canonical_name": "degarelix",
      "aliases": [
        "degarelix"
      ],
      "rxcui": "475230",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L02BX02"
      ],
      "atc_memberships": [
        {
          "code": "L02BX02",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L02BX",
          "subclass_name": "Other hormone antagonists and related agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/475230/properties.json"
    },
    {
      "id": "RXNORM:1927663",
      "sequence": 254,
      "display_name": "delafloxacin",
      "canonical_name": "delafloxacin",
      "aliases": [
        "delafloxacin"
      ],
      "rxcui": "1927663",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J01MA23"
      ],
      "atc_memberships": [
        {
          "code": "J01MA23",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J01MA",
          "subclass_name": "Fluoroquinolones"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1927663/properties.json"
    },
    {
      "id": "RXNORM:2641675",
      "sequence": 255,
      "display_name": "delandistrogene moxeparvovec",
      "canonical_name": "delandistrogene moxeparvovec",
      "aliases": [
        "delandistrogene moxeparvovec"
      ],
      "rxcui": "2641675",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "M",
      "primary_group_name_tr": "Kas ve iskelet sistemi",
      "atc_codes": [
        "M09AX15"
      ],
      "atc_memberships": [
        {
          "code": "M09AX15",
          "group_code": "M",
          "group_name_tr": "Kas ve iskelet sistemi",
          "subclass_code": "M09AX",
          "subclass_name": "Other drugs for disorders of the musculo-skeletal system"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2641675/properties.json"
    },
    {
      "id": "RXNORM:2721163",
      "sequence": 256,
      "display_name": "delgocitinib",
      "canonical_name": "delgocitinib",
      "aliases": [
        "delgocitinib"
      ],
      "rxcui": "2721163",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D11AH11"
      ],
      "atc_memberships": [
        {
          "code": "D11AH11",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D11AH",
          "subclass_name": "Agents for dermatitis, excluding corticosteroids"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2721163/properties.json"
    },
    {
      "id": "RXNORM:107771",
      "sequence": 257,
      "display_name": "demecarium",
      "canonical_name": "demecarium",
      "aliases": [
        "demecarium"
      ],
      "rxcui": "107771",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "S",
      "primary_group_name_tr": "Duyu organları",
      "atc_codes": [
        "S01EB04"
      ],
      "atc_memberships": [
        {
          "code": "S01EB04",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01EB",
          "subclass_name": "Parasympathomimetics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/107771/properties.json"
    },
    {
      "id": "RXNORM:3154",
      "sequence": 258,
      "display_name": "demeclocycline",
      "canonical_name": "demeclocycline",
      "aliases": [
        "demeclocycline"
      ],
      "rxcui": "3154",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D06AA01",
        "J01AA01"
      ],
      "atc_memberships": [
        {
          "code": "D06AA01",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D06AA",
          "subclass_name": "Tetracycline and derivatives"
        },
        {
          "code": "J01AA01",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J01AA",
          "subclass_name": "Tetracyclines"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/3154/properties.json"
    },
    {
      "id": "RXNORM:214470",
      "sequence": 259,
      "display_name": "denileukin diftitox",
      "canonical_name": "denileukin diftitox",
      "aliases": [
        "denileukin diftitox"
      ],
      "rxcui": "214470",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01XX29"
      ],
      "atc_memberships": [
        {
          "code": "L01XX29",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01XX",
          "subclass_name": "Other antineoplastic agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/214470/properties.json"
    },
    {
      "id": "RXNORM:993449",
      "sequence": 260,
      "display_name": "denosumab",
      "canonical_name": "denosumab",
      "aliases": [
        "denosumab"
      ],
      "rxcui": "993449",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "M",
      "primary_group_name_tr": "Kas ve iskelet sistemi",
      "atc_codes": [
        "M05BX04"
      ],
      "atc_memberships": [
        {
          "code": "M05BX04",
          "group_code": "M",
          "group_name_tr": "Kas ve iskelet sistemi",
          "subclass_code": "M05BX",
          "subclass_name": "Other drugs affecting bone structure and mineralization"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/993449/properties.json"
    },
    {
      "id": "RXNORM:27340",
      "sequence": 261,
      "display_name": "desflurane",
      "canonical_name": "desflurane",
      "aliases": [
        "desflurane"
      ],
      "rxcui": "27340",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N01AB07"
      ],
      "atc_memberships": [
        {
          "code": "N01AB07",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N01AB",
          "subclass_name": "Halogenated hydrocarbons"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/27340/properties.json"
    },
    {
      "id": "RXNORM:114934",
      "sequence": 262,
      "display_name": "desirudin",
      "canonical_name": "desirudin",
      "aliases": [
        "desirudin"
      ],
      "rxcui": "114934",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B01AE01"
      ],
      "atc_memberships": [
        {
          "code": "B01AE01",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B01AE",
          "subclass_name": "Direct thrombin inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/114934/properties.json"
    },
    {
      "id": "RXNORM:275635",
      "sequence": 263,
      "display_name": "desloratadine",
      "canonical_name": "desloratadine",
      "aliases": [
        "desloratadine"
      ],
      "rxcui": "275635",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "R",
      "primary_group_name_tr": "Solunum sistemi",
      "atc_codes": [
        "R06AX27"
      ],
      "atc_memberships": [
        {
          "code": "R06AX27",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R06AX",
          "subclass_name": "Other antihistamines for systemic use"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/275635/properties.json"
    },
    {
      "id": "RXNORM:3254",
      "sequence": 264,
      "display_name": "desonide",
      "canonical_name": "desonide",
      "aliases": [
        "desonide"
      ],
      "rxcui": "3254",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D07AB08",
        "S01BA11"
      ],
      "atc_memberships": [
        {
          "code": "D07AB08",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D07AB",
          "subclass_name": "Corticosteroids, moderately potent (group II)"
        },
        {
          "code": "S01BA11",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01BA",
          "subclass_name": "Corticosteroids, plain"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/3254/properties.json"
    },
    {
      "id": "RXNORM:3255",
      "sequence": 265,
      "display_name": "desoximetasone",
      "canonical_name": "desoximetasone",
      "aliases": [
        "desoximetasone"
      ],
      "rxcui": "3255",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D07AC03",
        "D07XC02"
      ],
      "atc_memberships": [
        {
          "code": "D07AC03",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D07AC",
          "subclass_name": "Corticosteroids, potent (group III)"
        },
        {
          "code": "D07XC02",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D07XC",
          "subclass_name": "Corticosteroids, potent, other combinations"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/3255/properties.json"
    },
    {
      "id": "RXNORM:734064",
      "sequence": 266,
      "display_name": "desvenlafaxine",
      "canonical_name": "desvenlafaxine",
      "aliases": [
        "desvenlafaxine"
      ],
      "rxcui": "734064",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N06AX23"
      ],
      "atc_memberships": [
        {
          "code": "N06AX23",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N06AX",
          "subclass_name": "Other antidepressants"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/734064/properties.json"
    },
    {
      "id": "RXNORM:2612087",
      "sequence": 267,
      "display_name": "deucravacitinib",
      "canonical_name": "deucravacitinib",
      "aliases": [
        "deucravacitinib"
      ],
      "rxcui": "2612087",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L04AF07"
      ],
      "atc_memberships": [
        {
          "code": "L04AF07",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L04AF",
          "subclass_name": "Janus-associated kinase (JAK) inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2612087/properties.json"
    },
    {
      "id": "RXNORM:2716558",
      "sequence": 268,
      "display_name": "deuruxolitinib",
      "canonical_name": "deuruxolitinib",
      "aliases": [
        "deuruxolitinib"
      ],
      "rxcui": "2716558",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L04AF09"
      ],
      "atc_memberships": [
        {
          "code": "L04AF09",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L04AF",
          "subclass_name": "Janus-associated kinase (JAK) inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2716558/properties.json"
    },
    {
      "id": "RXNORM:3264",
      "sequence": 269,
      "display_name": "Deksametazon",
      "canonical_name": "dexamethasone",
      "aliases": [
        "Deksametazon",
        "dexamethasone"
      ],
      "rxcui": "3264",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A01AC02",
        "C05AA09",
        "D07AB19",
        "D07XB05",
        "D10AA03",
        "H02AB02",
        "R01AD03",
        "S01BA01",
        "S01CB01",
        "S02BA06",
        "S03BA01"
      ],
      "atc_memberships": [
        {
          "code": "A01AC02",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A01AC",
          "subclass_name": "Corticosteroids for local oral treatment"
        },
        {
          "code": "C05AA09",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C05AA",
          "subclass_name": "Corticosteroids"
        },
        {
          "code": "D07AB19",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D07AB",
          "subclass_name": "Corticosteroids, moderately potent (group II)"
        },
        {
          "code": "D07XB05",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D07XB",
          "subclass_name": "Corticosteroids, moderately potent, other combinations"
        },
        {
          "code": "D10AA03",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D10AA",
          "subclass_name": "Corticosteroids, combinations for treatment of acne"
        },
        {
          "code": "H02AB02",
          "group_code": "H",
          "group_name_tr": "Sistemik hormonlar (cinsiyet hormonları ve insülin hariç)",
          "subclass_code": "H02AB",
          "subclass_name": "Glucocorticoids"
        },
        {
          "code": "R01AD03",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R01AD",
          "subclass_name": "Corticosteroids"
        },
        {
          "code": "S01BA01",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01BA",
          "subclass_name": "Corticosteroids, plain"
        },
        {
          "code": "S01CB01",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01CB",
          "subclass_name": "Corticosteroids/antiinfectives/mydriatics in combination"
        },
        {
          "code": "S02BA06",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S02BA",
          "subclass_name": "Corticosteroids"
        },
        {
          "code": "S03BA01",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S03BA",
          "subclass_name": "Corticosteroids"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/3264/properties.json"
    },
    {
      "id": "RXNORM:22696",
      "sequence": 270,
      "display_name": "dexbrompheniramine",
      "canonical_name": "dexbrompheniramine",
      "aliases": [
        "dexbrompheniramine"
      ],
      "rxcui": "22696",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "R",
      "primary_group_name_tr": "Solunum sistemi",
      "atc_codes": [
        "R06AB06"
      ],
      "atc_memberships": [
        {
          "code": "R06AB06",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R06AB",
          "subclass_name": "Substituted alkylamines"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/22696/properties.json"
    },
    {
      "id": "RXNORM:237162",
      "sequence": 271,
      "display_name": "Deksketoprofen",
      "canonical_name": "dexketoprofen",
      "aliases": [
        "Deksketoprofen",
        "dexketoprofen"
      ],
      "rxcui": "237162",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "M",
      "primary_group_name_tr": "Kas ve iskelet sistemi",
      "atc_codes": [
        "M01AE17",
        "M02AA27"
      ],
      "atc_memberships": [
        {
          "code": "M01AE17",
          "group_code": "M",
          "group_name_tr": "Kas ve iskelet sistemi",
          "subclass_code": "M01AE",
          "subclass_name": "Propionic acid derivatives"
        },
        {
          "code": "M02AA27",
          "group_code": "M",
          "group_name_tr": "Kas ve iskelet sistemi",
          "subclass_code": "M02AA",
          "subclass_name": "Antiinflammatory preparations, non-steroids for topical use"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/237162/properties.json"
    },
    {
      "id": "RXNORM:816346",
      "sequence": 272,
      "display_name": "dexlansoprazole",
      "canonical_name": "dexlansoprazole",
      "aliases": [
        "dexlansoprazole"
      ],
      "rxcui": "816346",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A02BC06"
      ],
      "atc_memberships": [
        {
          "code": "A02BC06",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A02BC",
          "subclass_name": "Proton pump inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/816346/properties.json"
    },
    {
      "id": "RXNORM:48937",
      "sequence": 273,
      "display_name": "dexmedetomidine",
      "canonical_name": "dexmedetomidine",
      "aliases": [
        "dexmedetomidine"
      ],
      "rxcui": "48937",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N05CM18"
      ],
      "atc_memberships": [
        {
          "code": "N05CM18",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N05CM",
          "subclass_name": "Other hypnotics and sedatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/48937/properties.json"
    },
    {
      "id": "RXNORM:22701",
      "sequence": 274,
      "display_name": "dexpanthenol",
      "canonical_name": "dexpanthenol",
      "aliases": [
        "dexpanthenol"
      ],
      "rxcui": "22701",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A11HA30",
        "D03AX03",
        "S01XA12"
      ],
      "atc_memberships": [
        {
          "code": "A11HA30",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A11HA",
          "subclass_name": "Other plain vitamin preparations"
        },
        {
          "code": "D03AX03",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D03AX",
          "subclass_name": "Other cicatrizants"
        },
        {
          "code": "S01XA12",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01XA",
          "subclass_name": "Other ophthalmologicals"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/22701/properties.json"
    },
    {
      "id": "RXNORM:42736",
      "sequence": 275,
      "display_name": "dexrazoxane",
      "canonical_name": "dexrazoxane",
      "aliases": [
        "dexrazoxane"
      ],
      "rxcui": "42736",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "V",
      "primary_group_name_tr": "Diğer maddeler",
      "atc_codes": [
        "V03AF02"
      ],
      "atc_memberships": [
        {
          "code": "V03AF02",
          "group_code": "V",
          "group_name_tr": "Diğer maddeler",
          "subclass_code": "V03AF",
          "subclass_name": "Detoxifying agents for antineoplastic treatment"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/42736/properties.json"
    },
    {
      "id": "RXNORM:3322",
      "sequence": 276,
      "display_name": "Diazepam",
      "canonical_name": "diazepam",
      "aliases": [
        "diazepam",
        "Diazepam"
      ],
      "rxcui": "3322",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N05BA01"
      ],
      "atc_memberships": [
        {
          "code": "N05BA01",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N05BA",
          "subclass_name": "Benzodiazepine derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/3322/properties.json"
    },
    {
      "id": "RXNORM:3355",
      "sequence": 277,
      "display_name": "Diklofenak",
      "canonical_name": "diclofenac",
      "aliases": [
        "diclofenac",
        "Diklofenak"
      ],
      "rxcui": "3355",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D11AX18",
        "M01AB05",
        "M02AA15",
        "S01BC03"
      ],
      "atc_memberships": [
        {
          "code": "D11AX18",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D11AX",
          "subclass_name": "Other dermatologicals"
        },
        {
          "code": "M01AB05",
          "group_code": "M",
          "group_name_tr": "Kas ve iskelet sistemi",
          "subclass_code": "M01AB",
          "subclass_name": "Acetic acid derivatives and related substances"
        },
        {
          "code": "M02AA15",
          "group_code": "M",
          "group_name_tr": "Kas ve iskelet sistemi",
          "subclass_code": "M02AA",
          "subclass_name": "Antiinflammatory preparations, non-steroids for topical use"
        },
        {
          "code": "S01BC03",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01BC",
          "subclass_name": "Antiinflammatory agents, non-steroids"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/3355/properties.json"
    },
    {
      "id": "RXNORM:3364",
      "sequence": 278,
      "display_name": "didanosine",
      "canonical_name": "didanosine",
      "aliases": [
        "didanosine"
      ],
      "rxcui": "3364",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J05AF02"
      ],
      "atc_memberships": [
        {
          "code": "J05AF02",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J05AF",
          "subclass_name": "Nucleoside and nucleotide reverse transcriptase inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/3364/properties.json"
    },
    {
      "id": "RXNORM:1011450",
      "sequence": 279,
      "display_name": "didecyldimethylammonium chloride",
      "canonical_name": "didecyldimethylammonium chloride",
      "aliases": [
        "didecyldimethylammonium chloride"
      ],
      "rxcui": "1011450",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D08AJ06"
      ],
      "atc_memberships": [
        {
          "code": "D08AJ06",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D08AJ",
          "subclass_name": "Quaternary ammonium compounds"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1011450/properties.json"
    },
    {
      "id": "RXNORM:3368",
      "sequence": 280,
      "display_name": "dienestrol",
      "canonical_name": "dienestrol",
      "aliases": [
        "dienestrol"
      ],
      "rxcui": "3368",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "G",
      "primary_group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
      "atc_codes": [
        "G03CB01",
        "G03CC02"
      ],
      "atc_memberships": [
        {
          "code": "G03CB01",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G03CB",
          "subclass_name": "Synthetic estrogens, plain"
        },
        {
          "code": "G03CC02",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G03CC",
          "subclass_name": "Estrogens, combinations with other drugs"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/3368/properties.json"
    },
    {
      "id": "RXNORM:23024",
      "sequence": 281,
      "display_name": "difenoxin",
      "canonical_name": "difenoxin",
      "aliases": [
        "difenoxin"
      ],
      "rxcui": "23024",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A07DA04"
      ],
      "atc_memberships": [
        {
          "code": "A07DA04",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A07DA",
          "subclass_name": "Antipropulsives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/23024/properties.json"
    },
    {
      "id": "RXNORM:91311",
      "sequence": 282,
      "display_name": "diflorasone",
      "canonical_name": "diflorasone",
      "aliases": [
        "diflorasone"
      ],
      "rxcui": "91311",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D07AC10"
      ],
      "atc_memberships": [
        {
          "code": "D07AC10",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D07AC",
          "subclass_name": "Corticosteroids, potent (group III)"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/91311/properties.json"
    },
    {
      "id": "RXNORM:3393",
      "sequence": 283,
      "display_name": "diflunisal",
      "canonical_name": "diflunisal",
      "aliases": [
        "diflunisal"
      ],
      "rxcui": "3393",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N02BA11"
      ],
      "atc_memberships": [
        {
          "code": "N02BA11",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N02BA",
          "subclass_name": "Salicylic acid and derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/3393/properties.json"
    },
    {
      "id": "RXNORM:3407",
      "sequence": 284,
      "display_name": "digoxin",
      "canonical_name": "digoxin",
      "aliases": [
        "digoxin"
      ],
      "rxcui": "3407",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C01AA05"
      ],
      "atc_memberships": [
        {
          "code": "C01AA05",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C01AA",
          "subclass_name": "Digitalis glycosides"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/3407/properties.json"
    },
    {
      "id": "RXNORM:23088",
      "sequence": 285,
      "display_name": "dihydrocodeine",
      "canonical_name": "dihydrocodeine",
      "aliases": [
        "dihydrocodeine"
      ],
      "rxcui": "23088",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N02AA08"
      ],
      "atc_memberships": [
        {
          "code": "N02AA08",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N02AA",
          "subclass_name": "Natural opium alkaloids"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/23088/properties.json"
    },
    {
      "id": "RXNORM:3418",
      "sequence": 286,
      "display_name": "dihydroergotamine",
      "canonical_name": "dihydroergotamine",
      "aliases": [
        "dihydroergotamine"
      ],
      "rxcui": "3418",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N02CA01"
      ],
      "atc_memberships": [
        {
          "code": "N02CA01",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N02CA",
          "subclass_name": "Ergot alkaloids"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/3418/properties.json"
    },
    {
      "id": "RXNORM:23162",
      "sequence": 287,
      "display_name": "dihydroxyaluminum aminoacetate",
      "canonical_name": "dihydroxyaluminum aminoacetate",
      "aliases": [
        "aluminium glycinate",
        "dihydroxyaluminum aminoacetate"
      ],
      "rxcui": "23162",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A02AB07"
      ],
      "atc_memberships": [
        {
          "code": "A02AB07",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A02AB",
          "subclass_name": "Aluminium compounds"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/23162/properties.json"
    },
    {
      "id": "RXNORM:3443",
      "sequence": 288,
      "display_name": "diltiazem",
      "canonical_name": "diltiazem",
      "aliases": [
        "diltiazem"
      ],
      "rxcui": "3443",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C05AE03",
        "C08DB01"
      ],
      "atc_memberships": [
        {
          "code": "C05AE03",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C05AE",
          "subclass_name": "Muscle relaxants"
        },
        {
          "code": "C08DB01",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C08DB",
          "subclass_name": "Benzothiazepine derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/3443/properties.json"
    },
    {
      "id": "RXNORM:324072",
      "sequence": 289,
      "display_name": "dimethicone",
      "canonical_name": "dimethicone",
      "aliases": [
        "dimethicone",
        "dimeticone"
      ],
      "rxcui": "324072",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "P",
      "primary_group_name_tr": "Antiparaziter maddeler, insektisitler ve repellentler",
      "atc_codes": [
        "P03AX05"
      ],
      "atc_memberships": [
        {
          "code": "P03AX05",
          "group_code": "P",
          "group_name_tr": "Antiparaziter maddeler, insektisitler ve repellentler",
          "subclass_code": "P03AX",
          "subclass_name": "Other ectoparasiticides, incl. scabicides"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/324072/properties.json"
    },
    {
      "id": "RXNORM:3455",
      "sequence": 290,
      "display_name": "dimethyl sulfoxide",
      "canonical_name": "dimethyl sulfoxide",
      "aliases": [
        "dimethyl sulfoxide"
      ],
      "rxcui": "3455",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "G",
      "primary_group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
      "atc_codes": [
        "G04BX13",
        "M02AX03"
      ],
      "atc_memberships": [
        {
          "code": "G04BX13",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G04BX",
          "subclass_name": "Other urologicals"
        },
        {
          "code": "M02AX03",
          "group_code": "M",
          "group_name_tr": "Kas ve iskelet sistemi",
          "subclass_code": "M02AX",
          "subclass_name": "Other topical products for joint and muscular pain"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/3455/properties.json"
    },
    {
      "id": "RXNORM:3521",
      "sequence": 291,
      "display_name": "dipyridamole",
      "canonical_name": "dipyridamole",
      "aliases": [
        "dipyridamole"
      ],
      "rxcui": "3521",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B01AC07"
      ],
      "atc_memberships": [
        {
          "code": "B01AC07",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B01AC",
          "subclass_name": "Platelet aggregation inhibitors excl. heparin"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/3521/properties.json"
    },
    {
      "id": "RXNORM:3541",
      "sequence": 292,
      "display_name": "disopyramide",
      "canonical_name": "disopyramide",
      "aliases": [
        "disopyramide"
      ],
      "rxcui": "3541",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C01BA03"
      ],
      "atc_memberships": [
        {
          "code": "C01BA03",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C01BA",
          "subclass_name": "Antiarrhythmics, class Ia"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/3541/properties.json"
    },
    {
      "id": "RXNORM:3616",
      "sequence": 293,
      "display_name": "dobutamine",
      "canonical_name": "dobutamine",
      "aliases": [
        "dobutamine"
      ],
      "rxcui": "3616",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C01CA07"
      ],
      "atc_memberships": [
        {
          "code": "C01CA07",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C01CA",
          "subclass_name": "Adrenergic and dopaminergic agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/3616/properties.json"
    },
    {
      "id": "RXNORM:72962",
      "sequence": 294,
      "display_name": "docetaxel",
      "canonical_name": "docetaxel",
      "aliases": [
        "docetaxel"
      ],
      "rxcui": "72962",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01CD02"
      ],
      "atc_memberships": [
        {
          "code": "L01CD02",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01CD",
          "subclass_name": "Taxanes"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/72962/properties.json"
    },
    {
      "id": "RXNORM:2687966",
      "sequence": 295,
      "display_name": "donanemab",
      "canonical_name": "donanemab",
      "aliases": [
        "donanemab"
      ],
      "rxcui": "2687966",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N06DX05"
      ],
      "atc_memberships": [
        {
          "code": "N06DX05",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N06DX",
          "subclass_name": "Other anti-dementia drugs"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2687966/properties.json"
    },
    {
      "id": "RXNORM:135447",
      "sequence": 296,
      "display_name": "donepezil",
      "canonical_name": "donepezil",
      "aliases": [
        "donepezil"
      ],
      "rxcui": "135447",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N06DA02"
      ],
      "atc_memberships": [
        {
          "code": "N06DA02",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N06DA",
          "subclass_name": "Anticholinesterases"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/135447/properties.json"
    },
    {
      "id": "RXNORM:3628",
      "sequence": 297,
      "display_name": "dopamine",
      "canonical_name": "dopamine",
      "aliases": [
        "dopamine"
      ],
      "rxcui": "3628",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C01CA04"
      ],
      "atc_memberships": [
        {
          "code": "C01CA04",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C01CA",
          "subclass_name": "Adrenergic and dopaminergic agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/3628/properties.json"
    },
    {
      "id": "RXNORM:337623",
      "sequence": 298,
      "display_name": "dornase alfa",
      "canonical_name": "dornase alfa",
      "aliases": [
        "dornase alfa",
        "dornase alfa (desoxyribonuclease)"
      ],
      "rxcui": "337623",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "R",
      "primary_group_name_tr": "Solunum sistemi",
      "atc_codes": [
        "R05CB13"
      ],
      "atc_memberships": [
        {
          "code": "R05CB13",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R05CB",
          "subclass_name": "Mucolytics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/337623/properties.json"
    },
    {
      "id": "RXNORM:60207",
      "sequence": 299,
      "display_name": "dorzolamide",
      "canonical_name": "dorzolamide",
      "aliases": [
        "dorzolamide"
      ],
      "rxcui": "60207",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "S",
      "primary_group_name_tr": "Duyu organları",
      "atc_codes": [
        "S01EC03"
      ],
      "atc_memberships": [
        {
          "code": "S01EC03",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01EC",
          "subclass_name": "Carbonic anhydrase inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/60207/properties.json"
    },
    {
      "id": "RXNORM:2539967",
      "sequence": 300,
      "display_name": "dostarlimab",
      "canonical_name": "dostarlimab",
      "aliases": [
        "dostarlimab"
      ],
      "rxcui": "2539967",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01FF07"
      ],
      "atc_memberships": [
        {
          "code": "L01FF07",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01FF",
          "subclass_name": "PD-1/PD-L1 (Programmed cell death protein 1/death ligand 1) inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2539967/properties.json"
    },
    {
      "id": "RXNORM:49276",
      "sequence": 301,
      "display_name": "doxazosin",
      "canonical_name": "doxazosin",
      "aliases": [
        "doxazosin"
      ],
      "rxcui": "49276",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C02CA04"
      ],
      "atc_memberships": [
        {
          "code": "C02CA04",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C02CA",
          "subclass_name": "Alpha-adrenoreceptor antagonists"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/49276/properties.json"
    },
    {
      "id": "RXNORM:3639",
      "sequence": 302,
      "display_name": "doxorubicin",
      "canonical_name": "doxorubicin",
      "aliases": [
        "doxorubicin"
      ],
      "rxcui": "3639",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01DB01"
      ],
      "atc_memberships": [
        {
          "code": "L01DB01",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01DB",
          "subclass_name": "Anthracyclines and related substances"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/3639/properties.json"
    },
    {
      "id": "RXNORM:3640",
      "sequence": 303,
      "display_name": "Doksisiklin",
      "canonical_name": "doxycycline",
      "aliases": [
        "Doksisiklin",
        "doxycycline"
      ],
      "rxcui": "3640",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A01AB22",
        "J01AA02"
      ],
      "atc_memberships": [
        {
          "code": "A01AB22",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A01AB",
          "subclass_name": "Antiinfectives and antiseptics for local oral treatment"
        },
        {
          "code": "J01AA02",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J01AA",
          "subclass_name": "Tetracyclines"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/3640/properties.json"
    },
    {
      "id": "RXNORM:233698",
      "sequence": 304,
      "display_name": "dronedarone",
      "canonical_name": "dronedarone",
      "aliases": [
        "dronedarone"
      ],
      "rxcui": "233698",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C01BD07"
      ],
      "atc_memberships": [
        {
          "code": "C01BD07",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C01BD",
          "subclass_name": "Antiarrhythmics, class III"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/233698/properties.json"
    },
    {
      "id": "RXNORM:3648",
      "sequence": 305,
      "display_name": "droperidol",
      "canonical_name": "droperidol",
      "aliases": [
        "droperidol"
      ],
      "rxcui": "3648",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N05AD08"
      ],
      "atc_memberships": [
        {
          "code": "N05AD08",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N05AD",
          "subclass_name": "Butyrophenone derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/3648/properties.json"
    },
    {
      "id": "RXNORM:1489913",
      "sequence": 306,
      "display_name": "droxidopa",
      "canonical_name": "droxidopa",
      "aliases": [
        "droxidopa"
      ],
      "rxcui": "1489913",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C01CA27"
      ],
      "atc_memberships": [
        {
          "code": "C01CA27",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C01CA",
          "subclass_name": "Adrenergic and dopaminergic agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1489913/properties.json"
    },
    {
      "id": "RXNORM:2058509",
      "sequence": 307,
      "display_name": "duvelisib",
      "canonical_name": "duvelisib",
      "aliases": [
        "duvelisib"
      ],
      "rxcui": "2058509",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01EM04"
      ],
      "atc_memberships": [
        {
          "code": "L01EM04",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01EM",
          "subclass_name": "Phosphatidylinositol-3-kinase (Pi3K) inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2058509/properties.json"
    },
    {
      "id": "RXNORM:3743",
      "sequence": 308,
      "display_name": "econazole",
      "canonical_name": "econazole",
      "aliases": [
        "econazole"
      ],
      "rxcui": "3743",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D01AC03",
        "G01AF05"
      ],
      "atc_memberships": [
        {
          "code": "D01AC03",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D01AC",
          "subclass_name": "Imidazole and triazole derivatives"
        },
        {
          "code": "G01AF05",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G01AF",
          "subclass_name": "Imidazole derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/3743/properties.json"
    },
    {
      "id": "RXNORM:1599538",
      "sequence": 309,
      "display_name": "edoxaban",
      "canonical_name": "edoxaban",
      "aliases": [
        "edoxaban"
      ],
      "rxcui": "1599538",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B01AF03"
      ],
      "atc_memberships": [
        {
          "code": "B01AF03",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B01AF",
          "subclass_name": "Direct factor Xa inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1599538/properties.json"
    },
    {
      "id": "RXNORM:195085",
      "sequence": 310,
      "display_name": "efavirenz",
      "canonical_name": "efavirenz",
      "aliases": [
        "efavirenz"
      ],
      "rxcui": "195085",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J05AG03"
      ],
      "atc_memberships": [
        {
          "code": "J05AG03",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J05AG",
          "subclass_name": "Non-nucleoside reverse transcriptase inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/195085/properties.json"
    },
    {
      "id": "RXNORM:1539753",
      "sequence": 311,
      "display_name": "efinaconazole",
      "canonical_name": "efinaconazole",
      "aliases": [
        "efinaconazole"
      ],
      "rxcui": "1539753",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D01AC19"
      ],
      "atc_memberships": [
        {
          "code": "D01AC19",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D01AC",
          "subclass_name": "Imidazole and triazole derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1539753/properties.json"
    },
    {
      "id": "RXNORM:569",
      "sequence": 312,
      "display_name": "eflornithine",
      "canonical_name": "eflornithine",
      "aliases": [
        "eflornithine"
      ],
      "rxcui": "569",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D11AX16",
        "L01XX79",
        "P01CX03"
      ],
      "atc_memberships": [
        {
          "code": "D11AX16",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D11AX",
          "subclass_name": "Other dermatologicals"
        },
        {
          "code": "L01XX79",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01XX",
          "subclass_name": "Other antineoplastic agents"
        },
        {
          "code": "P01CX03",
          "group_code": "P",
          "group_name_tr": "Antiparaziter maddeler, insektisitler ve repellentler",
          "subclass_code": "P01CX",
          "subclass_name": "Other agents against leishmaniasis and trypanosomiasis"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/569/properties.json"
    },
    {
      "id": "RXNORM:2628469",
      "sequence": 313,
      "display_name": "elacestrant",
      "canonical_name": "elacestrant",
      "aliases": [
        "elacestrant"
      ],
      "rxcui": "2628469",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L02BA04"
      ],
      "atc_memberships": [
        {
          "code": "L02BA04",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L02BA",
          "subclass_name": "Anti-estrogens"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2628469/properties.json"
    },
    {
      "id": "RXNORM:2698762",
      "sequence": 314,
      "display_name": "eladocagene exuparvovec",
      "canonical_name": "eladocagene exuparvovec",
      "aliases": [
        "eladocagene exuparvovec"
      ],
      "rxcui": "2698762",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A16AB26"
      ],
      "atc_memberships": [
        {
          "code": "A16AB26",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A16AB",
          "subclass_name": "Enzymes"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2698762/properties.json"
    },
    {
      "id": "RXNORM:2684941",
      "sequence": 315,
      "display_name": "elafibranor",
      "canonical_name": "elafibranor",
      "aliases": [
        "elafibranor"
      ],
      "rxcui": "2684941",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A05AX06"
      ],
      "atc_memberships": [
        {
          "code": "A05AX06",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A05AX",
          "subclass_name": "Other drugs for bile therapy"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2684941/properties.json"
    },
    {
      "id": "RXNORM:2049846",
      "sequence": 316,
      "display_name": "elagolix",
      "canonical_name": "elagolix",
      "aliases": [
        "elagolix"
      ],
      "rxcui": "2049846",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "H",
      "primary_group_name_tr": "Sistemik hormonlar (cinsiyet hormonları ve insülin hariç)",
      "atc_codes": [
        "H01CC03"
      ],
      "atc_memberships": [
        {
          "code": "H01CC03",
          "group_code": "H",
          "group_name_tr": "Sistemik hormonlar (cinsiyet hormonları ve insülin hariç)",
          "subclass_code": "H01CC",
          "subclass_name": "Anti-gonadotropin-releasing hormones"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2049846/properties.json"
    },
    {
      "id": "RXNORM:2059219",
      "sequence": 317,
      "display_name": "elapegademase",
      "canonical_name": "elapegademase",
      "aliases": [
        "elapegademase"
      ],
      "rxcui": "2059219",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L03AX21"
      ],
      "atc_memberships": [
        {
          "code": "L03AX21",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L03AX",
          "subclass_name": "Other immunostimulants"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2059219/properties.json"
    },
    {
      "id": "RXNORM:1734628",
      "sequence": 318,
      "display_name": "elbasvir",
      "canonical_name": "elbasvir",
      "aliases": [
        "elbasvir"
      ],
      "rxcui": "1734628",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J05AP10"
      ],
      "atc_memberships": [
        {
          "code": "J05AP10",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J05AP",
          "subclass_name": "Antivirals for treatment of HCV infections"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1734628/properties.json"
    },
    {
      "id": "RXNORM:231049",
      "sequence": 319,
      "display_name": "eletriptan",
      "canonical_name": "eletriptan",
      "aliases": [
        "eletriptan"
      ],
      "rxcui": "231049",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N02CC06"
      ],
      "atc_memberships": [
        {
          "code": "N02CC06",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N02CC",
          "subclass_name": "Selective serotonin (5HT1) agonists"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/231049/properties.json"
    },
    {
      "id": "RXNORM:1489914",
      "sequence": 320,
      "display_name": "elosulfase alfa",
      "canonical_name": "elosulfase alfa",
      "aliases": [
        "elosulfase alfa"
      ],
      "rxcui": "1489914",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A16AB12"
      ],
      "atc_memberships": [
        {
          "code": "A16AB12",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A16AB",
          "subclass_name": "Enzymes"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1489914/properties.json"
    },
    {
      "id": "RXNORM:1726104",
      "sequence": 321,
      "display_name": "elotuzumab",
      "canonical_name": "elotuzumab",
      "aliases": [
        "elotuzumab"
      ],
      "rxcui": "1726104",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01FX08"
      ],
      "atc_memberships": [
        {
          "code": "L01FX08",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01FX",
          "subclass_name": "Other monoclonal antibodies and antibody drug conjugates"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1726104/properties.json"
    },
    {
      "id": "RXNORM:1653781",
      "sequence": 322,
      "display_name": "eluxadoline",
      "canonical_name": "eluxadoline",
      "aliases": [
        "eluxadoline"
      ],
      "rxcui": "1653781",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A07DA06"
      ],
      "atc_memberships": [
        {
          "code": "A07DA06",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A07DA",
          "subclass_name": "Antipropulsives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1653781/properties.json"
    },
    {
      "id": "RXNORM:1306286",
      "sequence": 323,
      "display_name": "elvitegravir",
      "canonical_name": "elvitegravir",
      "aliases": [
        "elvitegravir"
      ],
      "rxcui": "1306286",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J05AJ02"
      ],
      "atc_memberships": [
        {
          "code": "J05AJ02",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J05AJ",
          "subclass_name": "Integrase inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1306286/properties.json"
    },
    {
      "id": "RXNORM:2104604",
      "sequence": 324,
      "display_name": "emapalumab",
      "canonical_name": "emapalumab",
      "aliases": [
        "emapalumab"
      ],
      "rxcui": "2104604",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L04AG09"
      ],
      "atc_memberships": [
        {
          "code": "L04AG09",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L04AG",
          "subclass_name": "Monoclonal antibodies"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2104604/properties.json"
    },
    {
      "id": "RXNORM:1545653",
      "sequence": 325,
      "display_name": "empagliflozin",
      "canonical_name": "empagliflozin",
      "aliases": [
        "empagliflozin"
      ],
      "rxcui": "1545653",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A10BK03"
      ],
      "atc_memberships": [
        {
          "code": "A10BK03",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A10BK",
          "subclass_name": "Sodium-glucose co-transporter 2 (SGLT2) inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1545653/properties.json"
    },
    {
      "id": "RXNORM:276237",
      "sequence": 326,
      "display_name": "emtricitabine",
      "canonical_name": "emtricitabine",
      "aliases": [
        "emtricitabine"
      ],
      "rxcui": "276237",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J05AF09"
      ],
      "atc_memberships": [
        {
          "code": "J05AF09",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J05AF",
          "subclass_name": "Nucleoside and nucleotide reverse transcriptase inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/276237/properties.json"
    },
    {
      "id": "RXNORM:3827",
      "sequence": 327,
      "display_name": "enalapril",
      "canonical_name": "enalapril",
      "aliases": [
        "enalapril"
      ],
      "rxcui": "3827",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C09AA02"
      ],
      "atc_memberships": [
        {
          "code": "C09AA02",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C09AA",
          "subclass_name": "ACE inhibitors, plain"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/3827/properties.json"
    },
    {
      "id": "RXNORM:1940332",
      "sequence": 328,
      "display_name": "enasidenib",
      "canonical_name": "enasidenib",
      "aliases": [
        "enasidenib"
      ],
      "rxcui": "1940332",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01XM01"
      ],
      "atc_memberships": [
        {
          "code": "L01XM01",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01XM",
          "subclass_name": "Isocitrate dehydrogenase (IDH) inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1940332/properties.json"
    },
    {
      "id": "RXNORM:67108",
      "sequence": 329,
      "display_name": "enoxaparin",
      "canonical_name": "enoxaparin",
      "aliases": [
        "enoxaparin"
      ],
      "rxcui": "67108",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B01AB05"
      ],
      "atc_memberships": [
        {
          "code": "B01AB05",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B01AB",
          "subclass_name": "Heparin group"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/67108/properties.json"
    },
    {
      "id": "RXNORM:2745988",
      "sequence": 330,
      "display_name": "ensitrelvir",
      "canonical_name": "ensitrelvir",
      "aliases": [
        "ensitrelvir"
      ],
      "rxcui": "2745988",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J05AE16"
      ],
      "atc_memberships": [
        {
          "code": "J05AE16",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J05AE",
          "subclass_name": "Protease inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2745988/properties.json"
    },
    {
      "id": "RXNORM:306266",
      "sequence": 331,
      "display_name": "entecavir",
      "canonical_name": "entecavir",
      "aliases": [
        "entecavir"
      ],
      "rxcui": "306266",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J05AF10"
      ],
      "atc_memberships": [
        {
          "code": "J05AF10",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J05AF",
          "subclass_name": "Nucleoside and nucleotide reverse transcriptase inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/306266/properties.json"
    },
    {
      "id": "RXNORM:2197862",
      "sequence": 332,
      "display_name": "entrectinib",
      "canonical_name": "entrectinib",
      "aliases": [
        "entrectinib"
      ],
      "rxcui": "2197862",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01EX14"
      ],
      "atc_memberships": [
        {
          "code": "L01EX14",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01EX",
          "subclass_name": "Other protein kinase inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2197862/properties.json"
    },
    {
      "id": "RXNORM:1307298",
      "sequence": 333,
      "display_name": "enzalutamide",
      "canonical_name": "enzalutamide",
      "aliases": [
        "enzalutamide"
      ],
      "rxcui": "1307298",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L02BB04"
      ],
      "atc_memberships": [
        {
          "code": "L02BB04",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L02BB",
          "subclass_name": "Anti-androgens"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1307298/properties.json"
    },
    {
      "id": "RXNORM:1310593",
      "sequence": 334,
      "display_name": "eosine yellowish",
      "canonical_name": "eosine yellowish",
      "aliases": [
        "eosin",
        "eosine yellowish"
      ],
      "rxcui": "1310593",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D08AX02"
      ],
      "atc_memberships": [
        {
          "code": "D08AX02",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D08AX",
          "subclass_name": "Other antiseptics and disinfectants"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1310593/properties.json"
    },
    {
      "id": "RXNORM:2637392",
      "sequence": 335,
      "display_name": "epcoritamab",
      "canonical_name": "epcoritamab",
      "aliases": [
        "epcoritamab"
      ],
      "rxcui": "2637392",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01FX27"
      ],
      "atc_memberships": [
        {
          "code": "L01FX27",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01FX",
          "subclass_name": "Other monoclonal antibodies and antibody drug conjugates"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2637392/properties.json"
    },
    {
      "id": "RXNORM:2671939",
      "sequence": 336,
      "display_name": "eplontersen",
      "canonical_name": "eplontersen",
      "aliases": [
        "eplontersen"
      ],
      "rxcui": "2671939",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N07XX21"
      ],
      "atc_memberships": [
        {
          "code": "N07XX21",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N07XX",
          "subclass_name": "Other nervous system drugs"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2671939/properties.json"
    },
    {
      "id": "RXNORM:2123125",
      "sequence": 337,
      "display_name": "erdafitinib",
      "canonical_name": "erdafitinib",
      "aliases": [
        "erdafitinib"
      ],
      "rxcui": "2123125",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01EN01"
      ],
      "atc_memberships": [
        {
          "code": "L01EN01",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01EN",
          "subclass_name": "Fibroblast growth factor receptor (FGFR) tyrosine kinase inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2123125/properties.json"
    },
    {
      "id": "RXNORM:4024",
      "sequence": 338,
      "display_name": "ergoloid mesylates, USP",
      "canonical_name": "ergoloid mesylates, USP",
      "aliases": [
        "ergoloid mesylates",
        "ergoloid mesylates, USP"
      ],
      "rxcui": "4024",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C04AE01"
      ],
      "atc_memberships": [
        {
          "code": "C04AE01",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C04AE",
          "subclass_name": "Ergot alkaloids"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/4024/properties.json"
    },
    {
      "id": "RXNORM:4025",
      "sequence": 339,
      "display_name": "ergotamine",
      "canonical_name": "ergotamine",
      "aliases": [
        "ergotamine"
      ],
      "rxcui": "4025",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N02CA02"
      ],
      "atc_memberships": [
        {
          "code": "N02CA02",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N02CA",
          "subclass_name": "Ergot alkaloids"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/4025/properties.json"
    },
    {
      "id": "RXNORM:1045453",
      "sequence": 340,
      "display_name": "eribulin",
      "canonical_name": "eribulin",
      "aliases": [
        "eribulin"
      ],
      "rxcui": "1045453",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01XX41"
      ],
      "atc_memberships": [
        {
          "code": "L01XX41",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01XX",
          "subclass_name": "Other antineoplastic agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1045453/properties.json"
    },
    {
      "id": "RXNORM:337525",
      "sequence": 341,
      "display_name": "erlotinib",
      "canonical_name": "erlotinib",
      "aliases": [
        "erlotinib"
      ],
      "rxcui": "337525",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01EB02"
      ],
      "atc_memberships": [
        {
          "code": "L01EB02",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01EB",
          "subclass_name": "Epidermal growth factor receptor (EGFR) tyrosine kinase inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/337525/properties.json"
    },
    {
      "id": "RXNORM:325642",
      "sequence": 342,
      "display_name": "ertapenem",
      "canonical_name": "ertapenem",
      "aliases": [
        "ertapenem"
      ],
      "rxcui": "325642",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J01DH03"
      ],
      "atc_memberships": [
        {
          "code": "J01DH03",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J01DH",
          "subclass_name": "Carbapenems"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/325642/properties.json"
    },
    {
      "id": "RXNORM:4053",
      "sequence": 343,
      "display_name": "erythromycin",
      "canonical_name": "erythromycin",
      "aliases": [
        "erythromycin"
      ],
      "rxcui": "4053",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D10AF02",
        "J01FA01",
        "S01AA17"
      ],
      "atc_memberships": [
        {
          "code": "D10AF02",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D10AF",
          "subclass_name": "Antiinfectives for treatment of acne"
        },
        {
          "code": "J01FA01",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J01FA",
          "subclass_name": "Macrolides"
        },
        {
          "code": "S01AA17",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01AA",
          "subclass_name": "Antibiotics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/4053/properties.json"
    },
    {
      "id": "RXNORM:2119365",
      "sequence": 344,
      "display_name": "esketamine",
      "canonical_name": "esketamine",
      "aliases": [
        "esketamine"
      ],
      "rxcui": "2119365",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N01AX14",
        "N06AX27"
      ],
      "atc_memberships": [
        {
          "code": "N01AX14",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N01AX",
          "subclass_name": "Other general anesthetics"
        },
        {
          "code": "N06AX27",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N06AX",
          "subclass_name": "Other antidepressants"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2119365/properties.json"
    },
    {
      "id": "RXNORM:1482502",
      "sequence": 345,
      "display_name": "eslicarbazepine",
      "canonical_name": "eslicarbazepine",
      "aliases": [
        "eslicarbazepine"
      ],
      "rxcui": "1482502",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N03AF04"
      ],
      "atc_memberships": [
        {
          "code": "N03AF04",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N03AF",
          "subclass_name": "Carboxamide derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1482502/properties.json"
    },
    {
      "id": "RXNORM:283742",
      "sequence": 346,
      "display_name": "esomeprazole",
      "canonical_name": "esomeprazole",
      "aliases": [
        "esomeprazole"
      ],
      "rxcui": "283742",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A02BC05"
      ],
      "atc_memberships": [
        {
          "code": "A02BC05",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A02BC",
          "subclass_name": "Proton pump inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/283742/properties.json"
    },
    {
      "id": "RXNORM:4077",
      "sequence": 347,
      "display_name": "estazolam",
      "canonical_name": "estazolam",
      "aliases": [
        "estazolam"
      ],
      "rxcui": "4077",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N05CD04"
      ],
      "atc_memberships": [
        {
          "code": "N05CD04",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N05CD",
          "subclass_name": "Benzodiazepine derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/4077/properties.json"
    },
    {
      "id": "RXNORM:4083",
      "sequence": 348,
      "display_name": "estradiol",
      "canonical_name": "estradiol",
      "aliases": [
        "estradiol"
      ],
      "rxcui": "4083",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "G",
      "primary_group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
      "atc_codes": [
        "G03CA03"
      ],
      "atc_memberships": [
        {
          "code": "G03CA03",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G03CA",
          "subclass_name": "Natural and semisynthetic estrogens, plain"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/4083/properties.json"
    },
    {
      "id": "RXNORM:4094",
      "sequence": 349,
      "display_name": "estriol",
      "canonical_name": "estriol",
      "aliases": [
        "estriol"
      ],
      "rxcui": "4094",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "G",
      "primary_group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
      "atc_codes": [
        "G03CA04",
        "G03CC06"
      ],
      "atc_memberships": [
        {
          "code": "G03CA04",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G03CA",
          "subclass_name": "Natural and semisynthetic estrogens, plain"
        },
        {
          "code": "G03CC06",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G03CC",
          "subclass_name": "Estrogens, combinations with other drugs"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/4094/properties.json"
    },
    {
      "id": "RXNORM:4099",
      "sequence": 350,
      "display_name": "estrogens, conjugated (USP)",
      "canonical_name": "estrogens, conjugated (USP)",
      "aliases": [
        "conjugated estrogens",
        "estrogens, conjugated (USP)"
      ],
      "rxcui": "4099",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "G",
      "primary_group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
      "atc_codes": [
        "G03CA57"
      ],
      "atc_memberships": [
        {
          "code": "G03CA57",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G03CA",
          "subclass_name": "Natural and semisynthetic estrogens, plain"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/4099/properties.json"
    },
    {
      "id": "RXNORM:461016",
      "sequence": 351,
      "display_name": "eszopiclone",
      "canonical_name": "eszopiclone",
      "aliases": [
        "eszopiclone"
      ],
      "rxcui": "461016",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N05CF04"
      ],
      "atc_memberships": [
        {
          "code": "N05CF04",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N05CF",
          "subclass_name": "Benzodiazepine related drugs"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/461016/properties.json"
    },
    {
      "id": "RXNORM:1876119",
      "sequence": 352,
      "display_name": "etelcalcetide",
      "canonical_name": "etelcalcetide",
      "aliases": [
        "etelcalcetide"
      ],
      "rxcui": "1876119",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "H",
      "primary_group_name_tr": "Sistemik hormonlar (cinsiyet hormonları ve insülin hariç)",
      "atc_codes": [
        "H05BX04"
      ],
      "atc_memberships": [
        {
          "code": "H05BX04",
          "group_code": "H",
          "group_name_tr": "Sistemik hormonlar (cinsiyet hormonları ve insülin hariç)",
          "subclass_code": "H05BX",
          "subclass_name": "Other anti-parathyroid agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1876119/properties.json"
    },
    {
      "id": "RXNORM:4110",
      "sequence": 353,
      "display_name": "ethambutol",
      "canonical_name": "ethambutol",
      "aliases": [
        "ethambutol"
      ],
      "rxcui": "4110",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J04AK02"
      ],
      "atc_memberships": [
        {
          "code": "J04AK02",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J04AK",
          "subclass_name": "Other drugs for treatment of tuberculosis"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/4110/properties.json"
    },
    {
      "id": "RXNORM:4112",
      "sequence": 354,
      "display_name": "ethamsylate",
      "canonical_name": "ethamsylate",
      "aliases": [
        "etamsylate",
        "ethamsylate"
      ],
      "rxcui": "4112",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B02BX01"
      ],
      "atc_memberships": [
        {
          "code": "B02BX01",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B02BX",
          "subclass_name": "Other systemic hemostatics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/4112/properties.json"
    },
    {
      "id": "RXNORM:448",
      "sequence": 355,
      "display_name": "Etanol",
      "canonical_name": "ethanol",
      "aliases": [
        "Etanol",
        "ethanol"
      ],
      "rxcui": "448",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D08AX08",
        "V03AB16",
        "V03AZ01"
      ],
      "atc_memberships": [
        {
          "code": "D08AX08",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D08AX",
          "subclass_name": "Other antiseptics and disinfectants"
        },
        {
          "code": "V03AB16",
          "group_code": "V",
          "group_name_tr": "Diğer maddeler",
          "subclass_code": "V03AB",
          "subclass_name": "Antidotes"
        },
        {
          "code": "V03AZ01",
          "group_code": "V",
          "group_name_tr": "Diğer maddeler",
          "subclass_code": "V03AZ",
          "subclass_name": "Nerve depressants"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/448/properties.json"
    },
    {
      "id": "RXNORM:24460",
      "sequence": 356,
      "display_name": "ethanolamine oleate",
      "canonical_name": "ethanolamine oleate",
      "aliases": [
        "ethanolamine oleate",
        "monoethanolamine oleate"
      ],
      "rxcui": "24460",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C05BB01"
      ],
      "atc_memberships": [
        {
          "code": "C05BB01",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C05BB",
          "subclass_name": "Sclerosing agents for local injection"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/24460/properties.json"
    },
    {
      "id": "RXNORM:4135",
      "sequence": 357,
      "display_name": "ethosuximide",
      "canonical_name": "ethosuximide",
      "aliases": [
        "ethosuximide"
      ],
      "rxcui": "4135",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N03AD01"
      ],
      "atc_memberships": [
        {
          "code": "N03AD01",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N03AD",
          "subclass_name": "Succinimide derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/4135/properties.json"
    },
    {
      "id": "RXNORM:1363043",
      "sequence": 358,
      "display_name": "ethyl ether",
      "canonical_name": "ethyl ether",
      "aliases": [
        "diethyl ether",
        "ethyl ether"
      ],
      "rxcui": "1363043",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N01AA01"
      ],
      "atc_memberships": [
        {
          "code": "N01AA01",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N01AA",
          "subclass_name": "Ethers"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1363043/properties.json"
    },
    {
      "id": "RXNORM:14584",
      "sequence": 359,
      "display_name": "etonogestrel",
      "canonical_name": "etonogestrel",
      "aliases": [
        "etonogestrel"
      ],
      "rxcui": "14584",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "G",
      "primary_group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
      "atc_codes": [
        "G03AC08"
      ],
      "atc_memberships": [
        {
          "code": "G03AC08",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G03AC",
          "subclass_name": "Progestogens"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/14584/properties.json"
    },
    {
      "id": "RXNORM:2668045",
      "sequence": 360,
      "display_name": "etrasimod",
      "canonical_name": "etrasimod",
      "aliases": [
        "etrasimod"
      ],
      "rxcui": "2668045",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L04AE05"
      ],
      "atc_memberships": [
        {
          "code": "L04AE05",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L04AE",
          "subclass_name": "Sphingosine-1-phosphate (S1P) receptor modulators"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2668045/properties.json"
    },
    {
      "id": "RXNORM:475969",
      "sequence": 361,
      "display_name": "etravirine",
      "canonical_name": "etravirine",
      "aliases": [
        "etravirine"
      ],
      "rxcui": "475969",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J05AG04"
      ],
      "atc_memberships": [
        {
          "code": "J05AG04",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J05AG",
          "subclass_name": "Non-nucleoside reverse transcriptase inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/475969/properties.json"
    },
    {
      "id": "RXNORM:2730302",
      "sequence": 362,
      "display_name": "etripamil",
      "canonical_name": "etripamil",
      "aliases": [
        "etripamil"
      ],
      "rxcui": "2730302",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C08DA03"
      ],
      "atc_memberships": [
        {
          "code": "C08DA03",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C08DA",
          "subclass_name": "Phenylalkylamine derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2730302/properties.json"
    },
    {
      "id": "RXNORM:141704",
      "sequence": 363,
      "display_name": "everolimus",
      "canonical_name": "everolimus",
      "aliases": [
        "everolimus"
      ],
      "rxcui": "141704",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01EG02",
        "L04AH02"
      ],
      "atc_memberships": [
        {
          "code": "L01EG02",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01EG",
          "subclass_name": "Mammalian target of rapamycin (mTOR) kinase inhibitors"
        },
        {
          "code": "L04AH02",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L04AH",
          "subclass_name": "Mammalian target of rapamycin (mTOR) kinase inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/141704/properties.json"
    },
    {
      "id": "RXNORM:2478335",
      "sequence": 364,
      "display_name": "evinacumab",
      "canonical_name": "evinacumab",
      "aliases": [
        "evinacumab"
      ],
      "rxcui": "2478335",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C10AX17"
      ],
      "atc_memberships": [
        {
          "code": "C10AX17",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C10AX",
          "subclass_name": "Other lipid modifying agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2478335/properties.json"
    },
    {
      "id": "RXNORM:1665684",
      "sequence": 365,
      "display_name": "evolocumab",
      "canonical_name": "evolocumab",
      "aliases": [
        "evolocumab"
      ],
      "rxcui": "1665684",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C10AX13"
      ],
      "atc_memberships": [
        {
          "code": "C10AX13",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C10AX",
          "subclass_name": "Other lipid modifying agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1665684/properties.json"
    },
    {
      "id": "RXNORM:2671667",
      "sequence": 366,
      "display_name": "exagamglogene autotemcel",
      "canonical_name": "exagamglogene autotemcel",
      "aliases": [
        "exagamglogene autotemcel"
      ],
      "rxcui": "2671667",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B06AX05"
      ],
      "atc_memberships": [
        {
          "code": "B06AX05",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B06AX",
          "subclass_name": "Other hematological agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2671667/properties.json"
    },
    {
      "id": "RXNORM:258494",
      "sequence": 367,
      "display_name": "exemestane",
      "canonical_name": "exemestane",
      "aliases": [
        "exemestane"
      ],
      "rxcui": "258494",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L02BG06"
      ],
      "atc_memberships": [
        {
          "code": "L02BG06",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L02BG",
          "subclass_name": "Aromatase inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/258494/properties.json"
    },
    {
      "id": "RXNORM:60548",
      "sequence": 368,
      "display_name": "exenatide",
      "canonical_name": "exenatide",
      "aliases": [
        "exenatide"
      ],
      "rxcui": "60548",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A10BJ01"
      ],
      "atc_memberships": [
        {
          "code": "A10BJ01",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A10BJ",
          "subclass_name": "Glucagon-like peptide-1 (GLP-1) analogues"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/60548/properties.json"
    },
    {
      "id": "RXNORM:341248",
      "sequence": 369,
      "display_name": "ezetimibe",
      "canonical_name": "ezetimibe",
      "aliases": [
        "ezetimibe"
      ],
      "rxcui": "341248",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C10AX09"
      ],
      "atc_memberships": [
        {
          "code": "C10AX09",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C10AX",
          "subclass_name": "Other lipid modifying agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/341248/properties.json"
    },
    {
      "id": "RXNORM:4249",
      "sequence": 370,
      "display_name": "factor IX",
      "canonical_name": "factor IX",
      "aliases": [
        "coagulation factor IX",
        "factor IX"
      ],
      "rxcui": "4249",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B02BD04"
      ],
      "atc_memberships": [
        {
          "code": "B02BD04",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B02BD",
          "subclass_name": "Blood coagulation factors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/4249/properties.json"
    },
    {
      "id": "RXNORM:4256",
      "sequence": 371,
      "display_name": "factor VIIa",
      "canonical_name": "factor VIIa",
      "aliases": [
        "coagulation factor VIIa",
        "factor VIIa"
      ],
      "rxcui": "4256",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B02BD08"
      ],
      "atc_memberships": [
        {
          "code": "B02BD08",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B02BD",
          "subclass_name": "Blood coagulation factors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/4256/properties.json"
    },
    {
      "id": "RXNORM:4257",
      "sequence": 372,
      "display_name": "factor VIII",
      "canonical_name": "factor VIII",
      "aliases": [
        "coagulation factor VIII",
        "factor VIII"
      ],
      "rxcui": "4257",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B02BD02"
      ],
      "atc_memberships": [
        {
          "code": "B02BD02",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B02BD",
          "subclass_name": "Blood coagulation factors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/4257/properties.json"
    },
    {
      "id": "RXNORM:4271",
      "sequence": 373,
      "display_name": "factor XIII",
      "canonical_name": "factor XIII",
      "aliases": [
        "coagulation factor XIII",
        "factor XIII"
      ],
      "rxcui": "4271",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B02BD07"
      ],
      "atc_memberships": [
        {
          "code": "B02BD07",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B02BD",
          "subclass_name": "Blood coagulation factors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/4271/properties.json"
    },
    {
      "id": "RXNORM:4278",
      "sequence": 374,
      "display_name": "Famotidin",
      "canonical_name": "famotidine",
      "aliases": [
        "Famotidin",
        "famotidine"
      ],
      "rxcui": "4278",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A02BA03"
      ],
      "atc_memberships": [
        {
          "code": "A02BA03",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A02BA",
          "subclass_name": "H2-receptor antagonists"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/4278/properties.json"
    },
    {
      "id": "RXNORM:73689",
      "sequence": 375,
      "display_name": "febuxostat",
      "canonical_name": "febuxostat",
      "aliases": [
        "febuxostat"
      ],
      "rxcui": "73689",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "M",
      "primary_group_name_tr": "Kas ve iskelet sistemi",
      "atc_codes": [
        "M04AA03"
      ],
      "atc_memberships": [
        {
          "code": "M04AA03",
          "group_code": "M",
          "group_name_tr": "Kas ve iskelet sistemi",
          "subclass_code": "M04AA",
          "subclass_name": "Preparations inhibiting uric acid production"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/73689/properties.json"
    },
    {
      "id": "RXNORM:24812",
      "sequence": 376,
      "display_name": "felbamate",
      "canonical_name": "felbamate",
      "aliases": [
        "felbamate"
      ],
      "rxcui": "24812",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N03AX10"
      ],
      "atc_memberships": [
        {
          "code": "N03AX10",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N03AX",
          "subclass_name": "Other antiepileptics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/24812/properties.json"
    },
    {
      "id": "RXNORM:4316",
      "sequence": 377,
      "display_name": "felodipine",
      "canonical_name": "felodipine",
      "aliases": [
        "felodipine"
      ],
      "rxcui": "4316",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C08CA02"
      ],
      "atc_memberships": [
        {
          "code": "C08CA02",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C08CA",
          "subclass_name": "Dihydropyridine derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/4316/properties.json"
    },
    {
      "id": "RXNORM:4331",
      "sequence": 378,
      "display_name": "fenoprofen",
      "canonical_name": "fenoprofen",
      "aliases": [
        "fenoprofen"
      ],
      "rxcui": "4331",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "M",
      "primary_group_name_tr": "Kas ve iskelet sistemi",
      "atc_codes": [
        "M01AE04"
      ],
      "atc_memberships": [
        {
          "code": "M01AE04",
          "group_code": "M",
          "group_name_tr": "Kas ve iskelet sistemi",
          "subclass_code": "M01AE",
          "subclass_name": "Propionic acid derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/4331/properties.json"
    },
    {
      "id": "RXNORM:24897",
      "sequence": 379,
      "display_name": "ferric ammonium citrate",
      "canonical_name": "ferric ammonium citrate",
      "aliases": [
        "ferric ammonium citrate"
      ],
      "rxcui": "24897",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "V",
      "primary_group_name_tr": "Diğer maddeler",
      "atc_codes": [
        "V08CA07"
      ],
      "atc_memberships": [
        {
          "code": "V08CA07",
          "group_code": "V",
          "group_name_tr": "Diğer maddeler",
          "subclass_code": "V08CA",
          "subclass_name": "Paramagnetic contrast media"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/24897/properties.json"
    },
    {
      "id": "RXNORM:24941",
      "sequence": 380,
      "display_name": "ferrous fumarate",
      "canonical_name": "ferrous fumarate",
      "aliases": [
        "ferrous fumarate"
      ],
      "rxcui": "24941",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B03AA02"
      ],
      "atc_memberships": [
        {
          "code": "B03AA02",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B03AA",
          "subclass_name": "Iron bivalent, oral preparations"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/24941/properties.json"
    },
    {
      "id": "RXNORM:24942",
      "sequence": 381,
      "display_name": "ferrous gluconate",
      "canonical_name": "ferrous gluconate",
      "aliases": [
        "ferrous gluconate"
      ],
      "rxcui": "24942",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B03AA03"
      ],
      "atc_memberships": [
        {
          "code": "B03AA03",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B03AA",
          "subclass_name": "Iron bivalent, oral preparations"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/24942/properties.json"
    },
    {
      "id": "RXNORM:24947",
      "sequence": 382,
      "display_name": "ferrous sulfate",
      "canonical_name": "ferrous sulfate",
      "aliases": [
        "ferrous sulfate"
      ],
      "rxcui": "24947",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B03AA07"
      ],
      "atc_memberships": [
        {
          "code": "B03AA07",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B03AA",
          "subclass_name": "Iron bivalent, oral preparations"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/24947/properties.json"
    },
    {
      "id": "RXNORM:2564146",
      "sequence": 383,
      "display_name": "fexinidazole",
      "canonical_name": "fexinidazole",
      "aliases": [
        "fexinidazole"
      ],
      "rxcui": "2564146",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "P",
      "primary_group_name_tr": "Antiparaziter maddeler, insektisitler ve repellentler",
      "atc_codes": [
        "P01CA03"
      ],
      "atc_memberships": [
        {
          "code": "P01CA03",
          "group_code": "P",
          "group_name_tr": "Antiparaziter maddeler, insektisitler ve repellentler",
          "subclass_code": "P01CA",
          "subclass_name": "Nitroimidazole derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2564146/properties.json"
    },
    {
      "id": "RXNORM:87636",
      "sequence": 384,
      "display_name": "Feksofenadin",
      "canonical_name": "fexofenadine",
      "aliases": [
        "Feksofenadin",
        "fexofenadine"
      ],
      "rxcui": "87636",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "R",
      "primary_group_name_tr": "Solunum sistemi",
      "atc_codes": [
        "R06AX26"
      ],
      "atc_memberships": [
        {
          "code": "R06AX26",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R06AX",
          "subclass_name": "Other antihistamines for systemic use"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/87636/properties.json"
    },
    {
      "id": "RXNORM:2637134",
      "sequence": 385,
      "display_name": "fezolinetant",
      "canonical_name": "fezolinetant",
      "aliases": [
        "fezolinetant"
      ],
      "rxcui": "2637134",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "G",
      "primary_group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
      "atc_codes": [
        "G02CX06"
      ],
      "atc_memberships": [
        {
          "code": "G02CX06",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G02CX",
          "subclass_name": "Other gynecologicals"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2637134/properties.json"
    },
    {
      "id": "RXNORM:2681011",
      "sequence": 386,
      "display_name": "fidanacogene elaparvovec",
      "canonical_name": "fidanacogene elaparvovec",
      "aliases": [
        "fidanacogene elaparvovec"
      ],
      "rxcui": "2681011",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B02BD17"
      ],
      "atc_memberships": [
        {
          "code": "B02BD17",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B02BD",
          "subclass_name": "Blood coagulation factors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2681011/properties.json"
    },
    {
      "id": "RXNORM:2562811",
      "sequence": 387,
      "display_name": "finerenone",
      "canonical_name": "finerenone",
      "aliases": [
        "finerenone"
      ],
      "rxcui": "2562811",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C03DA05"
      ],
      "atc_memberships": [
        {
          "code": "C03DA05",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C03DA",
          "subclass_name": "Aldosterone antagonists"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2562811/properties.json"
    },
    {
      "id": "RXNORM:2709439",
      "sequence": 388,
      "display_name": "fitusiran",
      "canonical_name": "fitusiran",
      "aliases": [
        "fitusiran"
      ],
      "rxcui": "2709439",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B02BX12"
      ],
      "atc_memberships": [
        {
          "code": "B02BX12",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B02BX",
          "subclass_name": "Other systemic hemostatics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2709439/properties.json"
    },
    {
      "id": "RXNORM:4440",
      "sequence": 389,
      "display_name": "flavoxate",
      "canonical_name": "flavoxate",
      "aliases": [
        "flavoxate"
      ],
      "rxcui": "4440",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "G",
      "primary_group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
      "atc_codes": [
        "G04BD02"
      ],
      "atc_memberships": [
        {
          "code": "G04BD02",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G04BD",
          "subclass_name": "Drugs for urinary frequency and incontinence"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/4440/properties.json"
    },
    {
      "id": "RXNORM:1665509",
      "sequence": 390,
      "display_name": "flibanserin",
      "canonical_name": "flibanserin",
      "aliases": [
        "flibanserin"
      ],
      "rxcui": "1665509",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "G",
      "primary_group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
      "atc_codes": [
        "G02CX02"
      ],
      "atc_memberships": [
        {
          "code": "G02CX02",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G02CX",
          "subclass_name": "Other gynecologicals"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1665509/properties.json"
    },
    {
      "id": "RXNORM:4450",
      "sequence": 391,
      "display_name": "Flukonazol",
      "canonical_name": "fluconazole",
      "aliases": [
        "fluconazole",
        "Flukonazol"
      ],
      "rxcui": "4450",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D01AC15",
        "J02AC01"
      ],
      "atc_memberships": [
        {
          "code": "D01AC15",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D01AC",
          "subclass_name": "Imidazole and triazole derivatives"
        },
        {
          "code": "J02AC01",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J02AC",
          "subclass_name": "Triazole and tetrazole derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/4450/properties.json"
    },
    {
      "id": "RXNORM:4451",
      "sequence": 392,
      "display_name": "flucytosine",
      "canonical_name": "flucytosine",
      "aliases": [
        "flucytosine"
      ],
      "rxcui": "4451",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D01AE21",
        "J02AX01"
      ],
      "atc_memberships": [
        {
          "code": "D01AE21",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D01AE",
          "subclass_name": "Other antifungals for topical use"
        },
        {
          "code": "J02AX01",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J02AX",
          "subclass_name": "Other antimycotics for systemic use"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/4451/properties.json"
    },
    {
      "id": "RXNORM:4452",
      "sequence": 393,
      "display_name": "fludrocortisone",
      "canonical_name": "fludrocortisone",
      "aliases": [
        "fludrocortisone"
      ],
      "rxcui": "4452",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "H",
      "primary_group_name_tr": "Sistemik hormonlar (cinsiyet hormonları ve insülin hariç)",
      "atc_codes": [
        "H02AA02"
      ],
      "atc_memberships": [
        {
          "code": "H02AA02",
          "group_code": "H",
          "group_name_tr": "Sistemik hormonlar (cinsiyet hormonları ve insülin hariç)",
          "subclass_code": "H02AA",
          "subclass_name": "Mineralocorticoids"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/4452/properties.json"
    },
    {
      "id": "RXNORM:4457",
      "sequence": 394,
      "display_name": "flumazenil",
      "canonical_name": "flumazenil",
      "aliases": [
        "flumazenil"
      ],
      "rxcui": "4457",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "V",
      "primary_group_name_tr": "Diğer maddeler",
      "atc_codes": [
        "V03AB25"
      ],
      "atc_memberships": [
        {
          "code": "V03AB25",
          "group_code": "V",
          "group_name_tr": "Diğer maddeler",
          "subclass_code": "V03AB",
          "subclass_name": "Antidotes"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/4457/properties.json"
    },
    {
      "id": "RXNORM:25120",
      "sequence": 395,
      "display_name": "flunisolide",
      "canonical_name": "flunisolide",
      "aliases": [
        "flunisolide"
      ],
      "rxcui": "25120",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "R",
      "primary_group_name_tr": "Solunum sistemi",
      "atc_codes": [
        "R01AD04",
        "R03BA03"
      ],
      "atc_memberships": [
        {
          "code": "R01AD04",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R01AD",
          "subclass_name": "Corticosteroids"
        },
        {
          "code": "R03BA03",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R03BA",
          "subclass_name": "Glucocorticoids"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/25120/properties.json"
    },
    {
      "id": "RXNORM:4491",
      "sequence": 396,
      "display_name": "fluorometholone",
      "canonical_name": "fluorometholone",
      "aliases": [
        "fluorometholone"
      ],
      "rxcui": "4491",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C05AA06",
        "D07AB06",
        "D07XB04",
        "D10AA01",
        "S01BA07",
        "S01CB05"
      ],
      "atc_memberships": [
        {
          "code": "C05AA06",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C05AA",
          "subclass_name": "Corticosteroids"
        },
        {
          "code": "D07AB06",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D07AB",
          "subclass_name": "Corticosteroids, moderately potent (group II)"
        },
        {
          "code": "D07XB04",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D07XB",
          "subclass_name": "Corticosteroids, moderately potent, other combinations"
        },
        {
          "code": "D10AA01",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D10AA",
          "subclass_name": "Corticosteroids, combinations for treatment of acne"
        },
        {
          "code": "S01BA07",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01BA",
          "subclass_name": "Corticosteroids, plain"
        },
        {
          "code": "S01CB05",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01CB",
          "subclass_name": "Corticosteroids/antiinfectives/mydriatics in combination"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/4491/properties.json"
    },
    {
      "id": "RXNORM:4493",
      "sequence": 397,
      "display_name": "Fluoksetin",
      "canonical_name": "fluoxetine",
      "aliases": [
        "Fluoksetin",
        "fluoxetine"
      ],
      "rxcui": "4493",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N06AB03"
      ],
      "atc_memberships": [
        {
          "code": "N06AB03",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N06AB",
          "subclass_name": "Selective serotonin reuptake inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/4493/properties.json"
    },
    {
      "id": "RXNORM:4501",
      "sequence": 398,
      "display_name": "flurazepam",
      "canonical_name": "flurazepam",
      "aliases": [
        "flurazepam"
      ],
      "rxcui": "4501",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N05CD01"
      ],
      "atc_memberships": [
        {
          "code": "N05CD01",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N05CD",
          "subclass_name": "Benzodiazepine derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/4501/properties.json"
    },
    {
      "id": "RXNORM:4502",
      "sequence": 399,
      "display_name": "flurbiprofen",
      "canonical_name": "flurbiprofen",
      "aliases": [
        "flurbiprofen"
      ],
      "rxcui": "4502",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "M",
      "primary_group_name_tr": "Kas ve iskelet sistemi",
      "atc_codes": [
        "M01AE09",
        "M02AA19",
        "R02AX01",
        "S01BC04"
      ],
      "atc_memberships": [
        {
          "code": "M01AE09",
          "group_code": "M",
          "group_name_tr": "Kas ve iskelet sistemi",
          "subclass_code": "M01AE",
          "subclass_name": "Propionic acid derivatives"
        },
        {
          "code": "M02AA19",
          "group_code": "M",
          "group_name_tr": "Kas ve iskelet sistemi",
          "subclass_code": "M02AA",
          "subclass_name": "Antiinflammatory preparations, non-steroids for topical use"
        },
        {
          "code": "R02AX01",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R02AX",
          "subclass_name": "Other throat preparations"
        },
        {
          "code": "S01BC04",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01BC",
          "subclass_name": "Antiinflammatory agents, non-steroids"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/4502/properties.json"
    },
    {
      "id": "RXNORM:4508",
      "sequence": 400,
      "display_name": "flutamide",
      "canonical_name": "flutamide",
      "aliases": [
        "flutamide"
      ],
      "rxcui": "4508",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L02BB01"
      ],
      "atc_memberships": [
        {
          "code": "L02BB01",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L02BB",
          "subclass_name": "Anti-androgens"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/4508/properties.json"
    },
    {
      "id": "RXNORM:41126",
      "sequence": 401,
      "display_name": "fluticasone",
      "canonical_name": "fluticasone",
      "aliases": [
        "fluticasone"
      ],
      "rxcui": "41126",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D07AC17",
        "R01AD08",
        "R03BA05"
      ],
      "atc_memberships": [
        {
          "code": "D07AC17",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D07AC",
          "subclass_name": "Corticosteroids, potent (group III)"
        },
        {
          "code": "R01AD08",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R01AD",
          "subclass_name": "Corticosteroids"
        },
        {
          "code": "R03BA05",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R03BA",
          "subclass_name": "Glucocorticoids"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/41126/properties.json"
    },
    {
      "id": "RXNORM:41127",
      "sequence": 402,
      "display_name": "fluvastatin",
      "canonical_name": "fluvastatin",
      "aliases": [
        "fluvastatin"
      ],
      "rxcui": "41127",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C10AA04"
      ],
      "atc_memberships": [
        {
          "code": "C10AA04",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C10AA",
          "subclass_name": "HMG CoA reductase inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/41127/properties.json"
    },
    {
      "id": "RXNORM:42355",
      "sequence": 403,
      "display_name": "fluvoxamine",
      "canonical_name": "fluvoxamine",
      "aliases": [
        "fluvoxamine"
      ],
      "rxcui": "42355",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N06AB08"
      ],
      "atc_memberships": [
        {
          "code": "N06AB08",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N06AB",
          "subclass_name": "Selective serotonin reuptake inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/42355/properties.json"
    },
    {
      "id": "RXNORM:4511",
      "sequence": 404,
      "display_name": "Folik asit",
      "canonical_name": "folic acid",
      "aliases": [
        "folic acid",
        "Folik asit"
      ],
      "rxcui": "4511",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B03BB01",
        "V04CX02"
      ],
      "atc_memberships": [
        {
          "code": "B03BB01",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B03BB",
          "subclass_name": "Folic acid and derivatives"
        },
        {
          "code": "V04CX02",
          "group_code": "V",
          "group_name_tr": "Diğer maddeler",
          "subclass_code": "V04CX",
          "subclass_name": "Other diagnostic agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/4511/properties.json"
    },
    {
      "id": "RXNORM:386938",
      "sequence": 405,
      "display_name": "follitropin alfa",
      "canonical_name": "follitropin alfa",
      "aliases": [
        "follitropin alfa"
      ],
      "rxcui": "386938",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "G",
      "primary_group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
      "atc_codes": [
        "G03GA05"
      ],
      "atc_memberships": [
        {
          "code": "G03GA05",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G03GA",
          "subclass_name": "Gonadotropins"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/386938/properties.json"
    },
    {
      "id": "RXNORM:25357",
      "sequence": 406,
      "display_name": "follitropin beta",
      "canonical_name": "follitropin beta",
      "aliases": [
        "follitropin beta"
      ],
      "rxcui": "25357",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "G",
      "primary_group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
      "atc_codes": [
        "G03GA06"
      ],
      "atc_memberships": [
        {
          "code": "G03GA06",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G03GA",
          "subclass_name": "Gonadotropins"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/25357/properties.json"
    },
    {
      "id": "RXNORM:321208",
      "sequence": 407,
      "display_name": "fondaparinux",
      "canonical_name": "fondaparinux",
      "aliases": [
        "fondaparinux"
      ],
      "rxcui": "321208",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B01AX05"
      ],
      "atc_memberships": [
        {
          "code": "B01AX05",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B01AX",
          "subclass_name": "Other antithrombotic agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/321208/properties.json"
    },
    {
      "id": "RXNORM:25255",
      "sequence": 408,
      "display_name": "formoterol",
      "canonical_name": "formoterol",
      "aliases": [
        "formoterol"
      ],
      "rxcui": "25255",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "R",
      "primary_group_name_tr": "Solunum sistemi",
      "atc_codes": [
        "R03AC13",
        "R03CC15"
      ],
      "atc_memberships": [
        {
          "code": "R03AC13",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R03AC",
          "subclass_name": "Selective beta-2-adrenoreceptor agonists"
        },
        {
          "code": "R03CC15",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R03CC",
          "subclass_name": "Selective beta-2-adrenoreceptor agonists"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/25255/properties.json"
    },
    {
      "id": "RXNORM:358262",
      "sequence": 409,
      "display_name": "fosamprenavir",
      "canonical_name": "fosamprenavir",
      "aliases": [
        "fosamprenavir"
      ],
      "rxcui": "358262",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J05AE07"
      ],
      "atc_memberships": [
        {
          "code": "J05AE07",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J05AE",
          "subclass_name": "Protease inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/358262/properties.json"
    },
    {
      "id": "RXNORM:72236",
      "sequence": 410,
      "display_name": "fosphenytoin",
      "canonical_name": "fosphenytoin",
      "aliases": [
        "fosphenytoin"
      ],
      "rxcui": "72236",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N03AB05"
      ],
      "atc_memberships": [
        {
          "code": "N03AB05",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N03AB",
          "subclass_name": "Hydantoin derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/72236/properties.json"
    },
    {
      "id": "RXNORM:2044896",
      "sequence": 411,
      "display_name": "fostamatinib",
      "canonical_name": "fostamatinib",
      "aliases": [
        "fostamatinib"
      ],
      "rxcui": "2044896",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B02BX09"
      ],
      "atc_memberships": [
        {
          "code": "B02BX09",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B02BX",
          "subclass_name": "Other systemic hemostatics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2044896/properties.json"
    },
    {
      "id": "RXNORM:228783",
      "sequence": 412,
      "display_name": "frovatriptan",
      "canonical_name": "frovatriptan",
      "aliases": [
        "frovatriptan"
      ],
      "rxcui": "228783",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N02CC07"
      ],
      "atc_memberships": [
        {
          "code": "N02CC07",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N02CC",
          "subclass_name": "Selective serotonin (5HT1) agonists"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/228783/properties.json"
    },
    {
      "id": "RXNORM:4601",
      "sequence": 413,
      "display_name": "furazolidone",
      "canonical_name": "furazolidone",
      "aliases": [
        "furazolidone"
      ],
      "rxcui": "4601",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "G",
      "primary_group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
      "atc_codes": [
        "G01AX06"
      ],
      "atc_memberships": [
        {
          "code": "G01AX06",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G01AX",
          "subclass_name": "Other antiinfectives and antiseptics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/4601/properties.json"
    },
    {
      "id": "RXNORM:4603",
      "sequence": 414,
      "display_name": "Furosemid",
      "canonical_name": "furosemide",
      "aliases": [
        "Furosemid",
        "furosemide"
      ],
      "rxcui": "4603",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C03CA01"
      ],
      "atc_memberships": [
        {
          "code": "C03CA01",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C03CA",
          "subclass_name": "Sulfonamides, plain"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/4603/properties.json"
    },
    {
      "id": "RXNORM:2628190",
      "sequence": 415,
      "display_name": "futibatinib",
      "canonical_name": "futibatinib",
      "aliases": [
        "futibatinib"
      ],
      "rxcui": "2628190",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01EN04"
      ],
      "atc_memberships": [
        {
          "code": "L01EN04",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01EN",
          "subclass_name": "Fibroblast growth factor receptor (FGFR) tyrosine kinase inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2628190/properties.json"
    },
    {
      "id": "RXNORM:25480",
      "sequence": 416,
      "display_name": "gabapentin",
      "canonical_name": "gabapentin",
      "aliases": [
        "gabapentin"
      ],
      "rxcui": "25480",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N02BF01"
      ],
      "atc_memberships": [
        {
          "code": "N02BF01",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N02BF",
          "subclass_name": "Gabapentinoids"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/25480/properties.json"
    },
    {
      "id": "RXNORM:25483",
      "sequence": 417,
      "display_name": "gadoteridol",
      "canonical_name": "gadoteridol",
      "aliases": [
        "gadoteridol"
      ],
      "rxcui": "25483",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "V",
      "primary_group_name_tr": "Diğer maddeler",
      "atc_codes": [
        "V08CA04"
      ],
      "atc_memberships": [
        {
          "code": "V08CA04",
          "group_code": "V",
          "group_name_tr": "Diğer maddeler",
          "subclass_code": "V08CA",
          "subclass_name": "Paramagnetic contrast media"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/25483/properties.json"
    },
    {
      "id": "RXNORM:4637",
      "sequence": 418,
      "display_name": "galantamine",
      "canonical_name": "galantamine",
      "aliases": [
        "galantamine"
      ],
      "rxcui": "4637",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N06DA04"
      ],
      "atc_memberships": [
        {
          "code": "N06DA04",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N06DA",
          "subclass_name": "Anticholinesterases"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/4637/properties.json"
    },
    {
      "id": "RXNORM:2058846",
      "sequence": 419,
      "display_name": "galcanezumab",
      "canonical_name": "galcanezumab",
      "aliases": [
        "galcanezumab"
      ],
      "rxcui": "2058846",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N02CD02"
      ],
      "atc_memberships": [
        {
          "code": "N02CD02",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N02CD",
          "subclass_name": "Calcitonin gene-related peptide (CGRP) antagonists"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2058846/properties.json"
    },
    {
      "id": "RXNORM:12574",
      "sequence": 420,
      "display_name": "gemcitabine",
      "canonical_name": "gemcitabine",
      "aliases": [
        "gemcitabine"
      ],
      "rxcui": "12574",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01BC05"
      ],
      "atc_memberships": [
        {
          "code": "L01BC05",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01BC",
          "subclass_name": "Pyrimidine analogues"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/12574/properties.json"
    },
    {
      "id": "RXNORM:4719",
      "sequence": 421,
      "display_name": "gemfibrozil",
      "canonical_name": "gemfibrozil",
      "aliases": [
        "gemfibrozil"
      ],
      "rxcui": "4719",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C10AB04"
      ],
      "atc_memberships": [
        {
          "code": "C10AB04",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C10AB",
          "subclass_name": "Fibrates"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/4719/properties.json"
    },
    {
      "id": "RXNORM:1596450",
      "sequence": 422,
      "display_name": "gentamicin",
      "canonical_name": "gentamicin",
      "aliases": [
        "gentamicin"
      ],
      "rxcui": "1596450",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D06AX07",
        "J01GB03",
        "S01AA11",
        "S02AA14",
        "S03AA06"
      ],
      "atc_memberships": [
        {
          "code": "D06AX07",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D06AX",
          "subclass_name": "Other antibiotics for topical use"
        },
        {
          "code": "J01GB03",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J01GB",
          "subclass_name": "Other aminoglycosides"
        },
        {
          "code": "S01AA11",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01AA",
          "subclass_name": "Antibiotics"
        },
        {
          "code": "S02AA14",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S02AA",
          "subclass_name": "Antiinfectives"
        },
        {
          "code": "S03AA06",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S03AA",
          "subclass_name": "Antiinfectives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1596450/properties.json"
    },
    {
      "id": "RXNORM:2672253",
      "sequence": 423,
      "display_name": "gepirone",
      "canonical_name": "gepirone",
      "aliases": [
        "gepirone"
      ],
      "rxcui": "2672253",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N06AX19"
      ],
      "atc_memberships": [
        {
          "code": "N06AX19",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N06AX",
          "subclass_name": "Other antidepressants"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2672253/properties.json"
    },
    {
      "id": "RXNORM:2709212",
      "sequence": 424,
      "display_name": "gepotidacin",
      "canonical_name": "gepotidacin",
      "aliases": [
        "gepotidacin"
      ],
      "rxcui": "2709212",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J01XX13"
      ],
      "atc_memberships": [
        {
          "code": "J01XX13",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J01XX",
          "subclass_name": "Other antibacterials"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2709212/properties.json"
    },
    {
      "id": "RXNORM:2105806",
      "sequence": 425,
      "display_name": "gilteritinib",
      "canonical_name": "gilteritinib",
      "aliases": [
        "gilteritinib"
      ],
      "rxcui": "2105806",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01EX13"
      ],
      "atc_memberships": [
        {
          "code": "L01EX13",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01EX",
          "subclass_name": "Other protein kinase inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2105806/properties.json"
    },
    {
      "id": "RXNORM:25789",
      "sequence": 426,
      "display_name": "glimepiride",
      "canonical_name": "glimepiride",
      "aliases": [
        "glimepiride"
      ],
      "rxcui": "25789",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A10BB12"
      ],
      "atc_memberships": [
        {
          "code": "A10BB12",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A10BB",
          "subclass_name": "Sulfonylureas"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/25789/properties.json"
    },
    {
      "id": "RXNORM:4821",
      "sequence": 427,
      "display_name": "glipizide",
      "canonical_name": "glipizide",
      "aliases": [
        "glipizide"
      ],
      "rxcui": "4821",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A10BB07"
      ],
      "atc_memberships": [
        {
          "code": "A10BB07",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A10BB",
          "subclass_name": "Sulfonylureas"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/4821/properties.json"
    },
    {
      "id": "RXNORM:4845",
      "sequence": 428,
      "display_name": "glucosamine",
      "canonical_name": "glucosamine",
      "aliases": [
        "glucosamine"
      ],
      "rxcui": "4845",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "M",
      "primary_group_name_tr": "Kas ve iskelet sistemi",
      "atc_codes": [
        "M01AX05"
      ],
      "atc_memberships": [
        {
          "code": "M01AX05",
          "group_code": "M",
          "group_name_tr": "Kas ve iskelet sistemi",
          "subclass_code": "M01AX",
          "subclass_name": "Other antiinflammatory and antirheumatic agents, non-steroids"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/4845/properties.json"
    },
    {
      "id": "RXNORM:4890",
      "sequence": 429,
      "display_name": "glutathione",
      "canonical_name": "glutathione",
      "aliases": [
        "glutathione"
      ],
      "rxcui": "4890",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "V",
      "primary_group_name_tr": "Diğer maddeler",
      "atc_codes": [
        "V03AB32"
      ],
      "atc_memberships": [
        {
          "code": "V03AB32",
          "group_code": "V",
          "group_name_tr": "Diğer maddeler",
          "subclass_code": "V03AB",
          "subclass_name": "Antidotes"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/4890/properties.json"
    },
    {
      "id": "RXNORM:819300",
      "sequence": 430,
      "display_name": "golimumab",
      "canonical_name": "golimumab",
      "aliases": [
        "golimumab"
      ],
      "rxcui": "819300",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L04AB06"
      ],
      "atc_memberships": [
        {
          "code": "L04AB06",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L04AB",
          "subclass_name": "Tumor necrosis factor alpha (TNF-alpha) inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/819300/properties.json"
    },
    {
      "id": "RXNORM:5011",
      "sequence": 431,
      "display_name": "gramicidin",
      "canonical_name": "gramicidin",
      "aliases": [
        "gramicidin"
      ],
      "rxcui": "5011",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "R",
      "primary_group_name_tr": "Solunum sistemi",
      "atc_codes": [
        "R02AB30"
      ],
      "atc_memberships": [
        {
          "code": "R02AB30",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R02AB",
          "subclass_name": "Antibiotics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/5011/properties.json"
    },
    {
      "id": "RXNORM:40114",
      "sequence": 432,
      "display_name": "guanfacine",
      "canonical_name": "guanfacine",
      "aliases": [
        "guanfacine"
      ],
      "rxcui": "40114",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C02AC02"
      ],
      "atc_memberships": [
        {
          "code": "C02AC02",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C02AC",
          "subclass_name": "Imidazoline receptor agonists"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/40114/properties.json"
    },
    {
      "id": "RXNORM:1928588",
      "sequence": 433,
      "display_name": "guselkumab",
      "canonical_name": "guselkumab",
      "aliases": [
        "guselkumab"
      ],
      "rxcui": "1928588",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L04AC16"
      ],
      "atc_memberships": [
        {
          "code": "L04AC16",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L04AC",
          "subclass_name": "Interleukin inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1928588/properties.json"
    },
    {
      "id": "RXNORM:5084",
      "sequence": 434,
      "display_name": "halcinonide",
      "canonical_name": "halcinonide",
      "aliases": [
        "halcinonide"
      ],
      "rxcui": "5084",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D07AD02"
      ],
      "atc_memberships": [
        {
          "code": "D07AD02",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D07AD",
          "subclass_name": "Corticosteroids, very potent (group IV)"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/5084/properties.json"
    },
    {
      "id": "RXNORM:41208",
      "sequence": 435,
      "display_name": "halobetasol",
      "canonical_name": "halobetasol",
      "aliases": [
        "halobetasol",
        "ulobetasol"
      ],
      "rxcui": "41208",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D07AC21"
      ],
      "atc_memberships": [
        {
          "code": "D07AC21",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D07AC",
          "subclass_name": "Corticosteroids, potent (group III)"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/41208/properties.json"
    },
    {
      "id": "RXNORM:5093",
      "sequence": 436,
      "display_name": "haloperidol",
      "canonical_name": "haloperidol",
      "aliases": [
        "haloperidol"
      ],
      "rxcui": "5093",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N05AD01"
      ],
      "atc_memberships": [
        {
          "code": "N05AD01",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N05AD",
          "subclass_name": "Butyrophenone derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/5093/properties.json"
    },
    {
      "id": "RXNORM:1309795",
      "sequence": 437,
      "display_name": "Hedera helix leaf extract",
      "canonical_name": "Hedera helix leaf extract",
      "aliases": [
        "Hedera helix leaf extract",
        "Hederae helicis folium"
      ],
      "rxcui": "1309795",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "R",
      "primary_group_name_tr": "Solunum sistemi",
      "atc_codes": [
        "R05CA12"
      ],
      "atc_memberships": [
        {
          "code": "R05CA12",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R05CA",
          "subclass_name": "Expectorants"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1309795/properties.json"
    },
    {
      "id": "RXNORM:5140",
      "sequence": 438,
      "display_name": "helium",
      "canonical_name": "helium",
      "aliases": [
        "helium"
      ],
      "rxcui": "5140",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "V",
      "primary_group_name_tr": "Diğer maddeler",
      "atc_codes": [
        "V03AN03"
      ],
      "atc_memberships": [
        {
          "code": "V03AN03",
          "group_code": "V",
          "group_name_tr": "Diğer maddeler",
          "subclass_code": "V03AN",
          "subclass_name": "Medical gases"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/5140/properties.json"
    },
    {
      "id": "RXNORM:5175",
      "sequence": 439,
      "display_name": "hemin",
      "canonical_name": "hemin",
      "aliases": [
        "hemin"
      ],
      "rxcui": "5175",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B06AB01"
      ],
      "atc_memberships": [
        {
          "code": "B06AB01",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B06AB",
          "subclass_name": "Heme products"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/5175/properties.json"
    },
    {
      "id": "RXNORM:5224",
      "sequence": 440,
      "display_name": "Heparin",
      "canonical_name": "heparin",
      "aliases": [
        "Heparin",
        "heparin"
      ],
      "rxcui": "5224",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B01AB01",
        "C05BA03",
        "S01XA14"
      ],
      "atc_memberships": [
        {
          "code": "B01AB01",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B01AB",
          "subclass_name": "Heparin group"
        },
        {
          "code": "C05BA03",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C05BA",
          "subclass_name": "Heparins or heparinoids for topical use"
        },
        {
          "code": "S01XA14",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01XA",
          "subclass_name": "Other ophthalmologicals"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/5224/properties.json"
    },
    {
      "id": "RXNORM:26744",
      "sequence": 441,
      "display_name": "hepatitis B immune globulin",
      "canonical_name": "hepatitis B immune globulin",
      "aliases": [
        "hepatitis B immune globulin",
        "hepatitis B immunoglobulin"
      ],
      "rxcui": "26744",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J06BB04"
      ],
      "atc_memberships": [
        {
          "code": "J06BB04",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J06BB",
          "subclass_name": "Specific immunoglobulins"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/26744/properties.json"
    },
    {
      "id": "RXNORM:5293",
      "sequence": 442,
      "display_name": "hexachlorophene",
      "canonical_name": "hexachlorophene",
      "aliases": [
        "hexachlorophene"
      ],
      "rxcui": "5293",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D08AE01"
      ],
      "atc_memberships": [
        {
          "code": "D08AE01",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D08AE",
          "subclass_name": "Phenol and derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/5293/properties.json"
    },
    {
      "id": "RXNORM:1426872",
      "sequence": 443,
      "display_name": "hexyl 5-aminolevulinate",
      "canonical_name": "hexyl 5-aminolevulinate",
      "aliases": [
        "hexaminolevulinate",
        "hexyl 5-aminolevulinate"
      ],
      "rxcui": "1426872",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "V",
      "primary_group_name_tr": "Diğer maddeler",
      "atc_codes": [
        "V04CX06"
      ],
      "atc_memberships": [
        {
          "code": "V04CX06",
          "group_code": "V",
          "group_name_tr": "Diğer maddeler",
          "subclass_code": "V04CX",
          "subclass_name": "Other diagnostic agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1426872/properties.json"
    },
    {
      "id": "RXNORM:5321",
      "sequence": 444,
      "display_name": "hexylresorcinol",
      "canonical_name": "hexylresorcinol",
      "aliases": [
        "hexylresorcinol"
      ],
      "rxcui": "5321",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "R",
      "primary_group_name_tr": "Solunum sistemi",
      "atc_codes": [
        "R02AA12"
      ],
      "atc_memberships": [
        {
          "code": "R02AA12",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R02AA",
          "subclass_name": "Antiseptics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/5321/properties.json"
    },
    {
      "id": "RXNORM:50975",
      "sequence": 445,
      "display_name": "histrelin",
      "canonical_name": "histrelin",
      "aliases": [
        "histrelin"
      ],
      "rxcui": "50975",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L02AE05"
      ],
      "atc_memberships": [
        {
          "code": "L02AE05",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L02AE",
          "subclass_name": "Gonadotropin releasing hormone analogues"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/50975/properties.json"
    },
    {
      "id": "RXNORM:260020",
      "sequence": 446,
      "display_name": "horse chestnut seed",
      "canonical_name": "horse chestnut seed",
      "aliases": [
        "Hippocastani semen",
        "horse chestnut seed"
      ],
      "rxcui": "260020",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C05CX03"
      ],
      "atc_memberships": [
        {
          "code": "C05CX03",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C05CX",
          "subclass_name": "Other capillary stabilizing agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/260020/properties.json"
    },
    {
      "id": "RXNORM:5470",
      "sequence": 447,
      "display_name": "hydralazine",
      "canonical_name": "hydralazine",
      "aliases": [
        "hydralazine"
      ],
      "rxcui": "5470",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C02DB02"
      ],
      "atc_memberships": [
        {
          "code": "C02DB02",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C02DB",
          "subclass_name": "Hydrazinophthalazine derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/5470/properties.json"
    },
    {
      "id": "RXNORM:5486",
      "sequence": 448,
      "display_name": "hydrochloric acid",
      "canonical_name": "hydrochloric acid",
      "aliases": [
        "hydrochloric acid"
      ],
      "rxcui": "5486",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A09AB03",
        "B05XA13"
      ],
      "atc_memberships": [
        {
          "code": "A09AB03",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A09AB",
          "subclass_name": "Acid preparations"
        },
        {
          "code": "B05XA13",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B05XA",
          "subclass_name": "Electrolyte solutions"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/5486/properties.json"
    },
    {
      "id": "RXNORM:5487",
      "sequence": 449,
      "display_name": "Hidroklorotiyazid",
      "canonical_name": "hydrochlorothiazide",
      "aliases": [
        "Hidroklorotiyazid",
        "hydrochlorothiazide"
      ],
      "rxcui": "5487",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C03AA03"
      ],
      "atc_memberships": [
        {
          "code": "C03AA03",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C03AA",
          "subclass_name": "Thiazides, plain"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/5487/properties.json"
    },
    {
      "id": "RXNORM:5489",
      "sequence": 450,
      "display_name": "hydrocodone",
      "canonical_name": "hydrocodone",
      "aliases": [
        "hydrocodone"
      ],
      "rxcui": "5489",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "R",
      "primary_group_name_tr": "Solunum sistemi",
      "atc_codes": [
        "R05DA03"
      ],
      "atc_memberships": [
        {
          "code": "R05DA03",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R05DA",
          "subclass_name": "Opium alkaloids and derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/5489/properties.json"
    },
    {
      "id": "RXNORM:5492",
      "sequence": 451,
      "display_name": "Hidrokortizon",
      "canonical_name": "hydrocortisone",
      "aliases": [
        "Hidrokortizon",
        "hydrocortisone"
      ],
      "rxcui": "5492",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A01AC03",
        "A07EA02",
        "C05AA01",
        "D07AA02",
        "D07XA01",
        "H02AB09",
        "S01BA02",
        "S01CB03",
        "S02BA01"
      ],
      "atc_memberships": [
        {
          "code": "A01AC03",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A01AC",
          "subclass_name": "Corticosteroids for local oral treatment"
        },
        {
          "code": "A07EA02",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A07EA",
          "subclass_name": "Corticosteroids acting locally"
        },
        {
          "code": "C05AA01",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C05AA",
          "subclass_name": "Corticosteroids"
        },
        {
          "code": "D07AA02",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D07AA",
          "subclass_name": "Corticosteroids, weak (group I)"
        },
        {
          "code": "D07XA01",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D07XA",
          "subclass_name": "Corticosteroids, weak, other combinations"
        },
        {
          "code": "H02AB09",
          "group_code": "H",
          "group_name_tr": "Sistemik hormonlar (cinsiyet hormonları ve insülin hariç)",
          "subclass_code": "H02AB",
          "subclass_name": "Glucocorticoids"
        },
        {
          "code": "S01BA02",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01BA",
          "subclass_name": "Corticosteroids, plain"
        },
        {
          "code": "S01CB03",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01CB",
          "subclass_name": "Corticosteroids/antiinfectives/mydriatics in combination"
        },
        {
          "code": "S02BA01",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S02BA",
          "subclass_name": "Corticosteroids"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/5492/properties.json"
    },
    {
      "id": "RXNORM:5499",
      "sequence": 452,
      "display_name": "Hidrojen peroksit",
      "canonical_name": "hydrogen peroxide",
      "aliases": [
        "Hidrojen peroksit",
        "hydrogen peroxide"
      ],
      "rxcui": "5499",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A01AB02",
        "D08AX01",
        "D11AX25",
        "S02AA06"
      ],
      "atc_memberships": [
        {
          "code": "A01AB02",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A01AB",
          "subclass_name": "Antiinfectives and antiseptics for local oral treatment"
        },
        {
          "code": "D08AX01",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D08AX",
          "subclass_name": "Other antiseptics and disinfectants"
        },
        {
          "code": "D11AX25",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D11AX",
          "subclass_name": "Other dermatologicals"
        },
        {
          "code": "S02AA06",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S02AA",
          "subclass_name": "Antiinfectives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/5499/properties.json"
    },
    {
      "id": "RXNORM:3423",
      "sequence": 453,
      "display_name": "hydromorphone",
      "canonical_name": "hydromorphone",
      "aliases": [
        "hydromorphone"
      ],
      "rxcui": "3423",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N02AA03"
      ],
      "atc_memberships": [
        {
          "code": "N02AA03",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N02AA",
          "subclass_name": "Natural opium alkaloids"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/3423/properties.json"
    },
    {
      "id": "RXNORM:5509",
      "sequence": 454,
      "display_name": "hydroquinone",
      "canonical_name": "hydroquinone",
      "aliases": [
        "hydroquinone"
      ],
      "rxcui": "5509",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D11AX11"
      ],
      "atc_memberships": [
        {
          "code": "D11AX11",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D11AX",
          "subclass_name": "Other dermatologicals"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/5509/properties.json"
    },
    {
      "id": "RXNORM:27221",
      "sequence": 455,
      "display_name": "hydrotalcite",
      "canonical_name": "hydrotalcite",
      "aliases": [
        "hydrotalcite"
      ],
      "rxcui": "27221",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A02AD04"
      ],
      "atc_memberships": [
        {
          "code": "A02AD04",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A02AD",
          "subclass_name": "Combinations and complexes of aluminium, calcium and magnesium compounds"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/27221/properties.json"
    },
    {
      "id": "RXNORM:5514",
      "sequence": 456,
      "display_name": "hydroxocobalamin",
      "canonical_name": "hydroxocobalamin",
      "aliases": [
        "hydroxocobalamin"
      ],
      "rxcui": "5514",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B03BA03",
        "V03AB33"
      ],
      "atc_memberships": [
        {
          "code": "B03BA03",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B03BA",
          "subclass_name": "Vitamin B12 (cyanocobalamin and analogues)"
        },
        {
          "code": "V03AB33",
          "group_code": "V",
          "group_name_tr": "Diğer maddeler",
          "subclass_code": "V03AB",
          "subclass_name": "Antidotes"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/5514/properties.json"
    },
    {
      "id": "RXNORM:5521",
      "sequence": 457,
      "display_name": "hydroxychloroquine",
      "canonical_name": "hydroxychloroquine",
      "aliases": [
        "hydroxychloroquine"
      ],
      "rxcui": "5521",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "P",
      "primary_group_name_tr": "Antiparaziter maddeler, insektisitler ve repellentler",
      "atc_codes": [
        "P01BA02"
      ],
      "atc_memberships": [
        {
          "code": "P01BA02",
          "group_code": "P",
          "group_name_tr": "Antiparaziter maddeler, insektisitler ve repellentler",
          "subclass_code": "P01BA",
          "subclass_name": "Aminoquinolines"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/5521/properties.json"
    },
    {
      "id": "RXNORM:5552",
      "sequence": 458,
      "display_name": "hydroxyurea",
      "canonical_name": "hydroxyurea",
      "aliases": [
        "hydroxycarbamide",
        "hydroxyurea"
      ],
      "rxcui": "5552",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01XX05"
      ],
      "atc_memberships": [
        {
          "code": "L01XX05",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01XX",
          "subclass_name": "Other antineoplastic agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/5552/properties.json"
    },
    {
      "id": "RXNORM:153970",
      "sequence": 459,
      "display_name": "hyoscyamine",
      "canonical_name": "hyoscyamine",
      "aliases": [
        "hyoscyamine"
      ],
      "rxcui": "153970",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A03BA03"
      ],
      "atc_memberships": [
        {
          "code": "A03BA03",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A03BA",
          "subclass_name": "Belladonna alkaloids, tertiary amines"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/153970/properties.json"
    },
    {
      "id": "RXNORM:27334",
      "sequence": 460,
      "display_name": "hypromellose",
      "canonical_name": "hypromellose",
      "aliases": [
        "hypromellose"
      ],
      "rxcui": "27334",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "S",
      "primary_group_name_tr": "Duyu organları",
      "atc_codes": [
        "S01KA02"
      ],
      "atc_memberships": [
        {
          "code": "S01KA02",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01KA",
          "subclass_name": "Viscoelastic substances"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/27334/properties.json"
    },
    {
      "id": "RXNORM:2043283",
      "sequence": 461,
      "display_name": "ibalizumab",
      "canonical_name": "ibalizumab",
      "aliases": [
        "ibalizumab"
      ],
      "rxcui": "2043283",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J05AX23"
      ],
      "atc_memberships": [
        {
          "code": "J05AX23",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J05AX",
          "subclass_name": "Other antivirals"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2043283/properties.json"
    },
    {
      "id": "RXNORM:2560213",
      "sequence": 462,
      "display_name": "ibrexafungerp",
      "canonical_name": "ibrexafungerp",
      "aliases": [
        "ibrexafungerp"
      ],
      "rxcui": "2560213",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J02AX07"
      ],
      "atc_memberships": [
        {
          "code": "J02AX07",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J02AX",
          "subclass_name": "Other antimycotics for systemic use"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2560213/properties.json"
    },
    {
      "id": "RXNORM:5640",
      "sequence": 463,
      "display_name": "İbuprofen",
      "canonical_name": "ibuprofen",
      "aliases": [
        "ibuprofen",
        "İbuprofen"
      ],
      "rxcui": "5640",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C01EB16",
        "G02CC01",
        "M01AE01",
        "M02AA13",
        "R02AX02"
      ],
      "atc_memberships": [
        {
          "code": "C01EB16",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C01EB",
          "subclass_name": "Other cardiac preparations"
        },
        {
          "code": "G02CC01",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G02CC",
          "subclass_name": "Antiinflammatory products for vaginal administration"
        },
        {
          "code": "M01AE01",
          "group_code": "M",
          "group_name_tr": "Kas ve iskelet sistemi",
          "subclass_code": "M01AE",
          "subclass_name": "Propionic acid derivatives"
        },
        {
          "code": "M02AA13",
          "group_code": "M",
          "group_name_tr": "Kas ve iskelet sistemi",
          "subclass_code": "M02AA",
          "subclass_name": "Antiinflammatory preparations, non-steroids for topical use"
        },
        {
          "code": "R02AX02",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R02AX",
          "subclass_name": "Other throat preparations"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/5640/properties.json"
    },
    {
      "id": "RXNORM:5650",
      "sequence": 464,
      "display_name": "idarubicin",
      "canonical_name": "idarubicin",
      "aliases": [
        "idarubicin"
      ],
      "rxcui": "5650",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01DB06"
      ],
      "atc_memberships": [
        {
          "code": "L01DB06",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01DB",
          "subclass_name": "Anthracyclines and related substances"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/5650/properties.json"
    },
    {
      "id": "RXNORM:1716191",
      "sequence": 465,
      "display_name": "idarucizumab",
      "canonical_name": "idarucizumab",
      "aliases": [
        "idarucizumab"
      ],
      "rxcui": "1716191",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "V",
      "primary_group_name_tr": "Diğer maddeler",
      "atc_codes": [
        "V03AB37"
      ],
      "atc_memberships": [
        {
          "code": "V03AB37",
          "group_code": "V",
          "group_name_tr": "Diğer maddeler",
          "subclass_code": "V03AB",
          "subclass_name": "Antidotes"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1716191/properties.json"
    },
    {
      "id": "RXNORM:51296",
      "sequence": 466,
      "display_name": "idebenone",
      "canonical_name": "idebenone",
      "aliases": [
        "idebenone"
      ],
      "rxcui": "51296",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N06BX13"
      ],
      "atc_memberships": [
        {
          "code": "N06BX13",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N06BX",
          "subclass_name": "Other psychostimulants and nootropics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/51296/properties.json"
    },
    {
      "id": "RXNORM:1544460",
      "sequence": 467,
      "display_name": "idelalisib",
      "canonical_name": "idelalisib",
      "aliases": [
        "idelalisib"
      ],
      "rxcui": "1544460",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01EM01"
      ],
      "atc_memberships": [
        {
          "code": "L01EM01",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01EM",
          "subclass_name": "Phosphatidylinositol-3-kinase (Pi3K) inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1544460/properties.json"
    },
    {
      "id": "RXNORM:644101",
      "sequence": 468,
      "display_name": "idursulfase",
      "canonical_name": "idursulfase",
      "aliases": [
        "idursulfase"
      ],
      "rxcui": "644101",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A16AB09"
      ],
      "atc_memberships": [
        {
          "code": "A16AB09",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A16AB",
          "subclass_name": "Enzymes"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/644101/properties.json"
    },
    {
      "id": "RXNORM:5657",
      "sequence": 469,
      "display_name": "ifosfamide",
      "canonical_name": "ifosfamide",
      "aliases": [
        "ifosfamide"
      ],
      "rxcui": "5657",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01AA06"
      ],
      "atc_memberships": [
        {
          "code": "L01AA06",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01AA",
          "subclass_name": "Nitrogen mustard analogues"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/5657/properties.json"
    },
    {
      "id": "RXNORM:40138",
      "sequence": 470,
      "display_name": "iloprost",
      "canonical_name": "iloprost",
      "aliases": [
        "iloprost"
      ],
      "rxcui": "40138",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B01AC11"
      ],
      "atc_memberships": [
        {
          "code": "B01AC11",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B01AC",
          "subclass_name": "Platelet aggregation inhibitors excl. heparin"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/40138/properties.json"
    },
    {
      "id": "RXNORM:282388",
      "sequence": 471,
      "display_name": "imatinib",
      "canonical_name": "imatinib",
      "aliases": [
        "imatinib"
      ],
      "rxcui": "282388",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01EA01"
      ],
      "atc_memberships": [
        {
          "code": "L01EA01",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01EA",
          "subclass_name": "BCR-ABL tyrosine kinase inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/282388/properties.json"
    },
    {
      "id": "RXNORM:5691",
      "sequence": 472,
      "display_name": "imipramine",
      "canonical_name": "imipramine",
      "aliases": [
        "imipramine"
      ],
      "rxcui": "5691",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N06AA02"
      ],
      "atc_memberships": [
        {
          "code": "N06AA02",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N06AA",
          "subclass_name": "Non-selective monoamine reuptake inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/5691/properties.json"
    },
    {
      "id": "RXNORM:59943",
      "sequence": 473,
      "display_name": "imiquimod",
      "canonical_name": "imiquimod",
      "aliases": [
        "imiquimod"
      ],
      "rxcui": "59943",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D06BB10"
      ],
      "atc_memberships": [
        {
          "code": "D06BB10",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D06BB",
          "subclass_name": "Antivirals"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/59943/properties.json"
    },
    {
      "id": "RXNORM:2588243",
      "sequence": 474,
      "display_name": "inclisiran",
      "canonical_name": "inclisiran",
      "aliases": [
        "inclisiran"
      ],
      "rxcui": "2588243",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C10AX16"
      ],
      "atc_memberships": [
        {
          "code": "C10AX16",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C10AX",
          "subclass_name": "Other lipid modifying agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2588243/properties.json"
    },
    {
      "id": "RXNORM:5781",
      "sequence": 475,
      "display_name": "İndometazin",
      "canonical_name": "indomethacin",
      "aliases": [
        "indometacin",
        "indomethacin",
        "İndometazin"
      ],
      "rxcui": "5781",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C01EB03",
        "M01AB01",
        "M02AA23",
        "S01BC01"
      ],
      "atc_memberships": [
        {
          "code": "C01EB03",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C01EB",
          "subclass_name": "Other cardiac preparations"
        },
        {
          "code": "M01AB01",
          "group_code": "M",
          "group_name_tr": "Kas ve iskelet sistemi",
          "subclass_code": "M01AB",
          "subclass_name": "Acetic acid derivatives and related substances"
        },
        {
          "code": "M02AA23",
          "group_code": "M",
          "group_name_tr": "Kas ve iskelet sistemi",
          "subclass_code": "M02AA",
          "subclass_name": "Antiinflammatory preparations, non-steroids for topical use"
        },
        {
          "code": "S01BC01",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01BC",
          "subclass_name": "Antiinflammatory agents, non-steroids"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/5781/properties.json"
    },
    {
      "id": "RXNORM:2373951",
      "sequence": 476,
      "display_name": "inebilizumab",
      "canonical_name": "inebilizumab",
      "aliases": [
        "inebilizumab"
      ],
      "rxcui": "2373951",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L04AG10"
      ],
      "atc_memberships": [
        {
          "code": "L04AG10",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L04AG",
          "subclass_name": "Monoclonal antibodies"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2373951/properties.json"
    },
    {
      "id": "RXNORM:2099289",
      "sequence": 477,
      "display_name": "inotersen",
      "canonical_name": "inotersen",
      "aliases": [
        "inotersen"
      ],
      "rxcui": "2099289",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N07XX15"
      ],
      "atc_memberships": [
        {
          "code": "N07XX15",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N07XX",
          "subclass_name": "Other nervous system drugs"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2099289/properties.json"
    },
    {
      "id": "RXNORM:1942950",
      "sequence": 478,
      "display_name": "inotuzumab ozogamicin",
      "canonical_name": "inotuzumab ozogamicin",
      "aliases": [
        "inotuzumab ozogamicin"
      ],
      "rxcui": "1942950",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01FB01"
      ],
      "atc_memberships": [
        {
          "code": "L01FB01",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01FB",
          "subclass_name": "CD22 (Clusters of Differentiation 22) inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1942950/properties.json"
    },
    {
      "id": "RXNORM:51428",
      "sequence": 479,
      "display_name": "insulin aspart, human",
      "canonical_name": "insulin aspart, human",
      "aliases": [
        "insulin aspart",
        "insulin aspart, human"
      ],
      "rxcui": "51428",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A10AB05",
        "A10AD05"
      ],
      "atc_memberships": [
        {
          "code": "A10AB05",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A10AB",
          "subclass_name": "Insulins and analogues for injection, fast-acting"
        },
        {
          "code": "A10AD05",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A10AD",
          "subclass_name": "Insulins and analogues for injection, intermediate- or long-acting combined with fast-acting"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/51428/properties.json"
    },
    {
      "id": "RXNORM:274783",
      "sequence": 480,
      "display_name": "insulin glargine",
      "canonical_name": "insulin glargine",
      "aliases": [
        "insulin glargine"
      ],
      "rxcui": "274783",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A10AE04"
      ],
      "atc_memberships": [
        {
          "code": "A10AE04",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A10AE",
          "subclass_name": "Insulins and analogues for injection, long-acting"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/274783/properties.json"
    },
    {
      "id": "RXNORM:400008",
      "sequence": 481,
      "display_name": "insulin glulisine, human",
      "canonical_name": "insulin glulisine, human",
      "aliases": [
        "insulin glulisine",
        "insulin glulisine, human"
      ],
      "rxcui": "400008",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A10AB06"
      ],
      "atc_memberships": [
        {
          "code": "A10AB06",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A10AB",
          "subclass_name": "Insulins and analogues for injection, fast-acting"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/400008/properties.json"
    },
    {
      "id": "RXNORM:72257",
      "sequence": 482,
      "display_name": "interferon beta-1b",
      "canonical_name": "interferon beta-1b",
      "aliases": [
        "interferon beta-1b"
      ],
      "rxcui": "72257",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L03AB08"
      ],
      "atc_memberships": [
        {
          "code": "L03AB08",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L03AB",
          "subclass_name": "Interferons"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/72257/properties.json"
    },
    {
      "id": "RXNORM:27712",
      "sequence": 483,
      "display_name": "invert sugar",
      "canonical_name": "invert sugar",
      "aliases": [
        "invert sugar"
      ],
      "rxcui": "27712",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C05BB03"
      ],
      "atc_memberships": [
        {
          "code": "C05BB03",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C05BB",
          "subclass_name": "Sclerosing agents for local injection"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/27712/properties.json"
    },
    {
      "id": "RXNORM:5956",
      "sequence": 484,
      "display_name": "iohexol",
      "canonical_name": "iohexol",
      "aliases": [
        "iohexol"
      ],
      "rxcui": "5956",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "V",
      "primary_group_name_tr": "Diğer maddeler",
      "atc_codes": [
        "V08AB02"
      ],
      "atc_memberships": [
        {
          "code": "V08AB02",
          "group_code": "V",
          "group_name_tr": "Diğer maddeler",
          "subclass_code": "V08AB",
          "subclass_name": "Watersoluble, nephrotropic, low osmolar X-ray contrast media"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/5956/properties.json"
    },
    {
      "id": "RXNORM:1546451",
      "sequence": 485,
      "display_name": "iothalamic acid",
      "canonical_name": "iothalamic acid",
      "aliases": [
        "iotalamic acid",
        "iothalamic acid"
      ],
      "rxcui": "1546451",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "V",
      "primary_group_name_tr": "Diğer maddeler",
      "atc_codes": [
        "V08AA04"
      ],
      "atc_memberships": [
        {
          "code": "V08AA04",
          "group_code": "V",
          "group_name_tr": "Diğer maddeler",
          "subclass_code": "V08AA",
          "subclass_name": "Watersoluble, nephrotropic, high osmolar X-ray contrast media"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1546451/properties.json"
    },
    {
      "id": "RXNORM:1094833",
      "sequence": 486,
      "display_name": "ipilimumab",
      "canonical_name": "ipilimumab",
      "aliases": [
        "ipilimumab"
      ],
      "rxcui": "1094833",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01FX04"
      ],
      "atc_memberships": [
        {
          "code": "L01FX04",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01FX",
          "subclass_name": "Other monoclonal antibodies and antibody drug conjugates"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1094833/properties.json"
    },
    {
      "id": "RXNORM:2671061",
      "sequence": 487,
      "display_name": "iptacopan",
      "canonical_name": "iptacopan",
      "aliases": [
        "iptacopan"
      ],
      "rxcui": "2671061",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L04AJ08"
      ],
      "atc_memberships": [
        {
          "code": "L04AJ08",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L04AJ",
          "subclass_name": "Complement inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2671061/properties.json"
    },
    {
      "id": "RXNORM:24909",
      "sequence": 488,
      "display_name": "iron sucrose",
      "canonical_name": "iron sucrose",
      "aliases": [
        "iron sucrose",
        "saccharated iron oxide"
      ],
      "rxcui": "24909",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B03AB02"
      ],
      "atc_memberships": [
        {
          "code": "B03AB02",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B03AB",
          "subclass_name": "Iron trivalent, oral preparations"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/24909/properties.json"
    },
    {
      "id": "RXNORM:2282018",
      "sequence": 489,
      "display_name": "isatuximab",
      "canonical_name": "isatuximab",
      "aliases": [
        "isatuximab"
      ],
      "rxcui": "2282018",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01FC02"
      ],
      "atc_memberships": [
        {
          "code": "L01FC02",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01FC",
          "subclass_name": "CD38 (Clusters of Differentiation 38) inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2282018/properties.json"
    },
    {
      "id": "RXNORM:1720882",
      "sequence": 490,
      "display_name": "isavuconazole",
      "canonical_name": "isavuconazole",
      "aliases": [
        "isavuconazole"
      ],
      "rxcui": "1720882",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J02AC05"
      ],
      "atc_memberships": [
        {
          "code": "J02AC05",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J02AC",
          "subclass_name": "Triazole and tetrazole derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1720882/properties.json"
    },
    {
      "id": "RXNORM:6011",
      "sequence": 491,
      "display_name": "isocarboxazid",
      "canonical_name": "isocarboxazid",
      "aliases": [
        "isocarboxazid"
      ],
      "rxcui": "6011",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N06AF01"
      ],
      "atc_memberships": [
        {
          "code": "N06AF01",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N06AF",
          "subclass_name": "Monoamine oxidase inhibitors, non-selective"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6011/properties.json"
    },
    {
      "id": "RXNORM:6026",
      "sequence": 492,
      "display_name": "isoflurane",
      "canonical_name": "isoflurane",
      "aliases": [
        "isoflurane"
      ],
      "rxcui": "6026",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N01AB06"
      ],
      "atc_memberships": [
        {
          "code": "N01AB06",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N01AB",
          "subclass_name": "Halogenated hydrocarbons"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6026/properties.json"
    },
    {
      "id": "RXNORM:6038",
      "sequence": 493,
      "display_name": "isoniazid",
      "canonical_name": "isoniazid",
      "aliases": [
        "isoniazid"
      ],
      "rxcui": "6038",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J04AC01"
      ],
      "atc_memberships": [
        {
          "code": "J04AC01",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J04AC",
          "subclass_name": "Hydrazides"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6038/properties.json"
    },
    {
      "id": "RXNORM:6058",
      "sequence": 494,
      "display_name": "isosorbide dinitrate",
      "canonical_name": "isosorbide dinitrate",
      "aliases": [
        "isosorbide dinitrate"
      ],
      "rxcui": "6058",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C01DA08",
        "C05AE02"
      ],
      "atc_memberships": [
        {
          "code": "C01DA08",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C01DA",
          "subclass_name": "Organic nitrates"
        },
        {
          "code": "C05AE02",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C05AE",
          "subclass_name": "Muscle relaxants"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6058/properties.json"
    },
    {
      "id": "RXNORM:6064",
      "sequence": 495,
      "display_name": "isotretinoin",
      "canonical_name": "isotretinoin",
      "aliases": [
        "isotretinoin"
      ],
      "rxcui": "6064",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D10AD04",
        "D10BA01"
      ],
      "atc_memberships": [
        {
          "code": "D10AD04",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D10AD",
          "subclass_name": "Retinoids for topical use in acne"
        },
        {
          "code": "D10BA01",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D10BA",
          "subclass_name": "Retinoids for treatment of acne"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6064/properties.json"
    },
    {
      "id": "RXNORM:6066",
      "sequence": 496,
      "display_name": "isoxsuprine",
      "canonical_name": "isoxsuprine",
      "aliases": [
        "isoxsuprine"
      ],
      "rxcui": "6066",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C04AA01"
      ],
      "atc_memberships": [
        {
          "code": "C04AA01",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C04AA",
          "subclass_name": "2-amino-1-phenylethanol derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6066/properties.json"
    },
    {
      "id": "RXNORM:33910",
      "sequence": 497,
      "display_name": "isradipine",
      "canonical_name": "isradipine",
      "aliases": [
        "isradipine"
      ],
      "rxcui": "33910",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C08CA03"
      ],
      "atc_memberships": [
        {
          "code": "C08CA03",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C08CA",
          "subclass_name": "Dihydropyridine derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/33910/properties.json"
    },
    {
      "id": "RXNORM:2199015",
      "sequence": 498,
      "display_name": "istradefylline",
      "canonical_name": "istradefylline",
      "aliases": [
        "istradefylline"
      ],
      "rxcui": "2199015",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N04CX01"
      ],
      "atc_memberships": [
        {
          "code": "N04CX01",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N04CX",
          "subclass_name": "Other antiparkinson drugs"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2199015/properties.json"
    },
    {
      "id": "RXNORM:2049873",
      "sequence": 499,
      "display_name": "ivosidenib",
      "canonical_name": "ivosidenib",
      "aliases": [
        "ivosidenib"
      ],
      "rxcui": "2049873",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01XM02"
      ],
      "atc_memberships": [
        {
          "code": "L01XM02",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01XM",
          "subclass_name": "Isocitrate dehydrogenase (IDH) inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2049873/properties.json"
    },
    {
      "id": "RXNORM:1723735",
      "sequence": 500,
      "display_name": "ixazomib",
      "canonical_name": "ixazomib",
      "aliases": [
        "ixazomib"
      ],
      "rxcui": "1723735",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01XG03"
      ],
      "atc_memberships": [
        {
          "code": "L01XG03",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01XG",
          "subclass_name": "Proteasome inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1723735/properties.json"
    },
    {
      "id": "RXNORM:6142",
      "sequence": 501,
      "display_name": "Ketoprofen",
      "canonical_name": "ketoprofen",
      "aliases": [
        "ketoprofen",
        "Ketoprofen"
      ],
      "rxcui": "6142",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "M",
      "primary_group_name_tr": "Kas ve iskelet sistemi",
      "atc_codes": [
        "M01AE03",
        "M02AA10"
      ],
      "atc_memberships": [
        {
          "code": "M01AE03",
          "group_code": "M",
          "group_name_tr": "Kas ve iskelet sistemi",
          "subclass_code": "M01AE",
          "subclass_name": "Propionic acid derivatives"
        },
        {
          "code": "M02AA10",
          "group_code": "M",
          "group_name_tr": "Kas ve iskelet sistemi",
          "subclass_code": "M02AA",
          "subclass_name": "Antiinflammatory preparations, non-steroids for topical use"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6142/properties.json"
    },
    {
      "id": "RXNORM:35827",
      "sequence": 502,
      "display_name": "ketorolac",
      "canonical_name": "ketorolac",
      "aliases": [
        "ketorolac"
      ],
      "rxcui": "35827",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "M",
      "primary_group_name_tr": "Kas ve iskelet sistemi",
      "atc_codes": [
        "M01AB15",
        "S01BC05"
      ],
      "atc_memberships": [
        {
          "code": "M01AB15",
          "group_code": "M",
          "group_name_tr": "Kas ve iskelet sistemi",
          "subclass_code": "M01AB",
          "subclass_name": "Acetic acid derivatives and related substances"
        },
        {
          "code": "S01BC05",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01BC",
          "subclass_name": "Antiinflammatory agents, non-steroids"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/35827/properties.json"
    },
    {
      "id": "RXNORM:41397",
      "sequence": 503,
      "display_name": "lactase",
      "canonical_name": "lactase",
      "aliases": [
        "lactase",
        "tilactase"
      ],
      "rxcui": "41397",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A09AA04"
      ],
      "atc_memberships": [
        {
          "code": "A09AA04",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A09AA",
          "subclass_name": "Enzyme preparations"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/41397/properties.json"
    },
    {
      "id": "RXNORM:6218",
      "sequence": 504,
      "display_name": "Laktüloz",
      "canonical_name": "lactulose",
      "aliases": [
        "lactulose",
        "Laktüloz"
      ],
      "rxcui": "6218",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A06AD11"
      ],
      "atc_memberships": [
        {
          "code": "A06AD11",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A06AD",
          "subclass_name": "Osmotically acting laxatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6218/properties.json"
    },
    {
      "id": "RXNORM:2712070",
      "sequence": 505,
      "display_name": "landiolol",
      "canonical_name": "landiolol",
      "aliases": [
        "landiolol"
      ],
      "rxcui": "2712070",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C07AB14"
      ],
      "atc_memberships": [
        {
          "code": "C07AB14",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C07AB",
          "subclass_name": "Beta blocking agents, selective"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2712070/properties.json"
    },
    {
      "id": "RXNORM:68092",
      "sequence": 506,
      "display_name": "lanreotide",
      "canonical_name": "lanreotide",
      "aliases": [
        "lanreotide"
      ],
      "rxcui": "68092",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "H",
      "primary_group_name_tr": "Sistemik hormonlar (cinsiyet hormonları ve insülin hariç)",
      "atc_codes": [
        "H01CB03"
      ],
      "atc_memberships": [
        {
          "code": "H01CB03",
          "group_code": "H",
          "group_name_tr": "Sistemik hormonlar (cinsiyet hormonları ve insülin hariç)",
          "subclass_code": "H01CB",
          "subclass_name": "Somatostatin and analogues"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/68092/properties.json"
    },
    {
      "id": "RXNORM:234416",
      "sequence": 507,
      "display_name": "lanthanum carbonate",
      "canonical_name": "lanthanum carbonate",
      "aliases": [
        "lanthanum carbonate"
      ],
      "rxcui": "234416",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "V",
      "primary_group_name_tr": "Diğer maddeler",
      "atc_codes": [
        "V03AE03"
      ],
      "atc_memberships": [
        {
          "code": "V03AE03",
          "group_code": "V",
          "group_name_tr": "Diğer maddeler",
          "subclass_code": "V03AE",
          "subclass_name": "Drugs for treatment of hyperkalemia and hyperphosphatemia"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/234416/properties.json"
    },
    {
      "id": "RXNORM:480167",
      "sequence": 508,
      "display_name": "lapatinib",
      "canonical_name": "lapatinib",
      "aliases": [
        "lapatinib"
      ],
      "rxcui": "480167",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01EH01"
      ],
      "atc_memberships": [
        {
          "code": "L01EH01",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01EH",
          "subclass_name": "Human epidermal growth factor receptor 2 (HER2) tyrosine kinase inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/480167/properties.json"
    },
    {
      "id": "RXNORM:43611",
      "sequence": 509,
      "display_name": "latanoprost",
      "canonical_name": "latanoprost",
      "aliases": [
        "latanoprost"
      ],
      "rxcui": "43611",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "S",
      "primary_group_name_tr": "Duyu organları",
      "atc_codes": [
        "S01EE01"
      ],
      "atc_memberships": [
        {
          "code": "S01EE01",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01EE",
          "subclass_name": "Prostaglandin analogues"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/43611/properties.json"
    },
    {
      "id": "RXNORM:1988390",
      "sequence": 510,
      "display_name": "latanoprostene bunod",
      "canonical_name": "latanoprostene bunod",
      "aliases": [
        "latanoprostene bunod"
      ],
      "rxcui": "1988390",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "S",
      "primary_group_name_tr": "Duyu organları",
      "atc_codes": [
        "S01EE06"
      ],
      "atc_memberships": [
        {
          "code": "S01EE06",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01EE",
          "subclass_name": "Prostaglandin analogues"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1988390/properties.json"
    },
    {
      "id": "RXNORM:2693758",
      "sequence": 511,
      "display_name": "lebrikizumab",
      "canonical_name": "lebrikizumab",
      "aliases": [
        "lebrikizumab"
      ],
      "rxcui": "2693758",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D11AH10"
      ],
      "atc_memberships": [
        {
          "code": "D11AH10",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D11AH",
          "subclass_name": "Agents for dermatitis, excluding corticosteroids"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2693758/properties.json"
    },
    {
      "id": "RXNORM:2626143",
      "sequence": 512,
      "display_name": "lecanemab",
      "canonical_name": "lecanemab",
      "aliases": [
        "lecanemab"
      ],
      "rxcui": "2626143",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N06DX04"
      ],
      "atc_memberships": [
        {
          "code": "N06DX04",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N06DX",
          "subclass_name": "Other anti-dementia drugs"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2626143/properties.json"
    },
    {
      "id": "RXNORM:2198944",
      "sequence": 513,
      "display_name": "lefamulin",
      "canonical_name": "lefamulin",
      "aliases": [
        "lefamulin"
      ],
      "rxcui": "2198944",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J01XX12"
      ],
      "atc_memberships": [
        {
          "code": "J01XX12",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J01XX",
          "subclass_name": "Other antibacterials"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2198944/properties.json"
    },
    {
      "id": "RXNORM:2272403",
      "sequence": 514,
      "display_name": "lemborexant",
      "canonical_name": "lemborexant",
      "aliases": [
        "lemborexant"
      ],
      "rxcui": "2272403",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N05CJ02"
      ],
      "atc_memberships": [
        {
          "code": "N05CJ02",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N05CJ",
          "subclass_name": "Orexin receptor antagonists"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2272403/properties.json"
    },
    {
      "id": "RXNORM:2625651",
      "sequence": 515,
      "display_name": "lenacapavir",
      "canonical_name": "lenacapavir",
      "aliases": [
        "lenacapavir"
      ],
      "rxcui": "2625651",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J05AX31"
      ],
      "atc_memberships": [
        {
          "code": "J05AX31",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J05AX",
          "subclass_name": "Other antivirals"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2625651/properties.json"
    },
    {
      "id": "RXNORM:342369",
      "sequence": 516,
      "display_name": "lenalidomide",
      "canonical_name": "lenalidomide",
      "aliases": [
        "lenalidomide"
      ],
      "rxcui": "342369",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L04AX04"
      ],
      "atc_memberships": [
        {
          "code": "L04AX04",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L04AX",
          "subclass_name": "Other immunosuppressants"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/342369/properties.json"
    },
    {
      "id": "RXNORM:1603296",
      "sequence": 517,
      "display_name": "lenvatinib",
      "canonical_name": "lenvatinib",
      "aliases": [
        "lenvatinib"
      ],
      "rxcui": "1603296",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01EX08"
      ],
      "atc_memberships": [
        {
          "code": "L01EX08",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01EX",
          "subclass_name": "Other protein kinase inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1603296/properties.json"
    },
    {
      "id": "RXNORM:2729426",
      "sequence": 518,
      "display_name": "lerodalcibep",
      "canonical_name": "lerodalcibep",
      "aliases": [
        "lerodalcibep"
      ],
      "rxcui": "2729426",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C10AX19"
      ],
      "atc_memberships": [
        {
          "code": "C10AX19",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C10AX",
          "subclass_name": "Other lipid modifying agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2729426/properties.json"
    },
    {
      "id": "RXNORM:72965",
      "sequence": 519,
      "display_name": "letrozole",
      "canonical_name": "letrozole",
      "aliases": [
        "letrozole"
      ],
      "rxcui": "72965",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L02BG04"
      ],
      "atc_memberships": [
        {
          "code": "L02BG04",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L02BG",
          "subclass_name": "Aromatase inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/72965/properties.json"
    },
    {
      "id": "RXNORM:42375",
      "sequence": 520,
      "display_name": "leuprolide",
      "canonical_name": "leuprolide",
      "aliases": [
        "leuprolide",
        "leuprorelin"
      ],
      "rxcui": "42375",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L02AE02"
      ],
      "atc_memberships": [
        {
          "code": "L02AE02",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L02AE",
          "subclass_name": "Gonadotropin releasing hormone analogues"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/42375/properties.json"
    },
    {
      "id": "RXNORM:2375522",
      "sequence": 521,
      "display_name": "levacetylleucine",
      "canonical_name": "levacetylleucine",
      "aliases": [
        "levacetylleucine"
      ],
      "rxcui": "2375522",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N07XX27"
      ],
      "atc_memberships": [
        {
          "code": "N07XX27",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N07XX",
          "subclass_name": "Other nervous system drugs"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2375522/properties.json"
    },
    {
      "id": "RXNORM:6371",
      "sequence": 522,
      "display_name": "levamisole",
      "canonical_name": "levamisole",
      "aliases": [
        "levamisole"
      ],
      "rxcui": "6371",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "P",
      "primary_group_name_tr": "Antiparaziter maddeler, insektisitler ve repellentler",
      "atc_codes": [
        "P02CE01"
      ],
      "atc_memberships": [
        {
          "code": "P02CE01",
          "group_code": "P",
          "group_name_tr": "Antiparaziter maddeler, insektisitler ve repellentler",
          "subclass_code": "P02CE",
          "subclass_name": "Imidazothiazole derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6371/properties.json"
    },
    {
      "id": "RXNORM:1813",
      "sequence": 523,
      "display_name": "levobunolol",
      "canonical_name": "levobunolol",
      "aliases": [
        "levobunolol"
      ],
      "rxcui": "1813",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "S",
      "primary_group_name_tr": "Duyu organları",
      "atc_codes": [
        "S01ED03"
      ],
      "atc_memberships": [
        {
          "code": "S01ED03",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01ED",
          "subclass_name": "Beta blocking agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1813/properties.json"
    },
    {
      "id": "RXNORM:42955",
      "sequence": 524,
      "display_name": "levocarnitine",
      "canonical_name": "levocarnitine",
      "aliases": [
        "levocarnitine"
      ],
      "rxcui": "42955",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A16AA01"
      ],
      "atc_memberships": [
        {
          "code": "A16AA01",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A16AA",
          "subclass_name": "Amino acids and derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/42955/properties.json"
    },
    {
      "id": "RXNORM:356887",
      "sequence": 525,
      "display_name": "levocetirizine",
      "canonical_name": "levocetirizine",
      "aliases": [
        "levocetirizine"
      ],
      "rxcui": "356887",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "R",
      "primary_group_name_tr": "Solunum sistemi",
      "atc_codes": [
        "R06AE09"
      ],
      "atc_memberships": [
        {
          "code": "R06AE09",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R06AE",
          "subclass_name": "Piperazine derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/356887/properties.json"
    },
    {
      "id": "RXNORM:6375",
      "sequence": 526,
      "display_name": "levodopa",
      "canonical_name": "levodopa",
      "aliases": [
        "levodopa"
      ],
      "rxcui": "6375",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N04BA01"
      ],
      "atc_memberships": [
        {
          "code": "N04BA01",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N04BA",
          "subclass_name": "Dopa and dopa derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6375/properties.json"
    },
    {
      "id": "RXNORM:82122",
      "sequence": 527,
      "display_name": "levofloxacin",
      "canonical_name": "levofloxacin",
      "aliases": [
        "levofloxacin"
      ],
      "rxcui": "82122",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J01MA12",
        "S01AE05"
      ],
      "atc_memberships": [
        {
          "code": "J01MA12",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J01MA",
          "subclass_name": "Fluoroquinolones"
        },
        {
          "code": "S01AE05",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01AE",
          "subclass_name": "Fluoroquinolones"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/82122/properties.json"
    },
    {
      "id": "RXNORM:6373",
      "sequence": 528,
      "display_name": "levonorgestrel",
      "canonical_name": "levonorgestrel",
      "aliases": [
        "levonorgestrel"
      ],
      "rxcui": "6373",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "G",
      "primary_group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
      "atc_codes": [
        "G03AC03",
        "G03AD01"
      ],
      "atc_memberships": [
        {
          "code": "G03AC03",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G03AC",
          "subclass_name": "Progestogens"
        },
        {
          "code": "G03AD01",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G03AD",
          "subclass_name": "Emergency contraceptives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6373/properties.json"
    },
    {
      "id": "RXNORM:6387",
      "sequence": 529,
      "display_name": "Lidokain",
      "canonical_name": "lidocaine",
      "aliases": [
        "lidocaine",
        "Lidokain"
      ],
      "rxcui": "6387",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C01BB01",
        "C05AD01",
        "D04AB01",
        "N01BB02",
        "R02AD02",
        "S01HA07",
        "S02DA01"
      ],
      "atc_memberships": [
        {
          "code": "C01BB01",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C01BB",
          "subclass_name": "Antiarrhythmics, class Ib"
        },
        {
          "code": "C05AD01",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C05AD",
          "subclass_name": "Local anesthetics"
        },
        {
          "code": "D04AB01",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D04AB",
          "subclass_name": "Anesthetics for topical use"
        },
        {
          "code": "N01BB02",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N01BB",
          "subclass_name": "Amides"
        },
        {
          "code": "R02AD02",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R02AD",
          "subclass_name": "Anesthetics, local"
        },
        {
          "code": "S01HA07",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01HA",
          "subclass_name": "Local anesthetics"
        },
        {
          "code": "S02DA01",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S02DA",
          "subclass_name": "Analgesics and anesthetics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6387/properties.json"
    },
    {
      "id": "RXNORM:2675860",
      "sequence": 530,
      "display_name": "lifileucel",
      "canonical_name": "lifileucel",
      "aliases": [
        "lifileucel"
      ],
      "rxcui": "2675860",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01XL11"
      ],
      "atc_memberships": [
        {
          "code": "L01XL11",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01XL",
          "subclass_name": "Antineoplastic cell and gene therapy"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2675860/properties.json"
    },
    {
      "id": "RXNORM:2665338",
      "sequence": 531,
      "display_name": "linerixibat",
      "canonical_name": "linerixibat",
      "aliases": [
        "linerixibat"
      ],
      "rxcui": "2665338",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A05AX08"
      ],
      "atc_memberships": [
        {
          "code": "A05AX08",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A05AX",
          "subclass_name": "Other drugs for bile therapy"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2665338/properties.json"
    },
    {
      "id": "RXNORM:190376",
      "sequence": 532,
      "display_name": "linezolid",
      "canonical_name": "linezolid",
      "aliases": [
        "linezolid"
      ],
      "rxcui": "190376",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J01XX08"
      ],
      "atc_memberships": [
        {
          "code": "J01XX08",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J01XX",
          "subclass_name": "Other antibacterials"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/190376/properties.json"
    },
    {
      "id": "RXNORM:6404",
      "sequence": 533,
      "display_name": "linseed oil",
      "canonical_name": "linseed oil",
      "aliases": [
        "linseed",
        "linseed oil"
      ],
      "rxcui": "6404",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A06AC05"
      ],
      "atc_memberships": [
        {
          "code": "A06AC05",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A06AC",
          "subclass_name": "Bulk-forming laxatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6404/properties.json"
    },
    {
      "id": "RXNORM:29046",
      "sequence": 534,
      "display_name": "Lisinopril",
      "canonical_name": "lisinopril",
      "aliases": [
        "lisinopril",
        "Lisinopril"
      ],
      "rxcui": "29046",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C09AA03"
      ],
      "atc_memberships": [
        {
          "code": "C09AA03",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C09AA",
          "subclass_name": "ACE inhibitors, plain"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/29046/properties.json"
    },
    {
      "id": "RXNORM:2479136",
      "sequence": 535,
      "display_name": "lisocabtagene maraleucel",
      "canonical_name": "lisocabtagene maraleucel",
      "aliases": [
        "lisocabtagene maraleucel"
      ],
      "rxcui": "2479136",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01XL08"
      ],
      "atc_memberships": [
        {
          "code": "L01XL08",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01XL",
          "subclass_name": "Antineoplastic cell and gene therapy"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2479136/properties.json"
    },
    {
      "id": "RXNORM:1440051",
      "sequence": 536,
      "display_name": "lixisenatide",
      "canonical_name": "lixisenatide",
      "aliases": [
        "lixisenatide"
      ],
      "rxcui": "1440051",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A10BJ03"
      ],
      "atc_memberships": [
        {
          "code": "A10BJ03",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A10BJ",
          "subclass_name": "Glucagon-like peptide-1 (GLP-1) analogues"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1440051/properties.json"
    },
    {
      "id": "RXNORM:52151",
      "sequence": 537,
      "display_name": "lodoxamide",
      "canonical_name": "lodoxamide",
      "aliases": [
        "lodoxamide"
      ],
      "rxcui": "52151",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "S",
      "primary_group_name_tr": "Duyu organları",
      "atc_codes": [
        "S01GX05"
      ],
      "atc_memberships": [
        {
          "code": "S01GX05",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01GX",
          "subclass_name": "Other antiallergics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/52151/properties.json"
    },
    {
      "id": "RXNORM:6466",
      "sequence": 538,
      "display_name": "lomustine",
      "canonical_name": "lomustine",
      "aliases": [
        "lomustine"
      ],
      "rxcui": "6466",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01AD02"
      ],
      "atc_memberships": [
        {
          "code": "L01AD02",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01AD",
          "subclass_name": "Nitrosoureas"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6466/properties.json"
    },
    {
      "id": "RXNORM:6468",
      "sequence": 539,
      "display_name": "Loperamid",
      "canonical_name": "loperamide",
      "aliases": [
        "Loperamid",
        "loperamide"
      ],
      "rxcui": "6468",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A07DA03"
      ],
      "atc_memberships": [
        {
          "code": "A07DA03",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A07DA",
          "subclass_name": "Antipropulsives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6468/properties.json"
    },
    {
      "id": "RXNORM:28889",
      "sequence": 540,
      "display_name": "Loratadin",
      "canonical_name": "loratadine",
      "aliases": [
        "Loratadin",
        "loratadine"
      ],
      "rxcui": "28889",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "R",
      "primary_group_name_tr": "Solunum sistemi",
      "atc_codes": [
        "R06AX13"
      ],
      "atc_memberships": [
        {
          "code": "R06AX13",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R06AX",
          "subclass_name": "Other antihistamines for systemic use"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/28889/properties.json"
    },
    {
      "id": "RXNORM:6470",
      "sequence": 541,
      "display_name": "Lorazepam",
      "canonical_name": "lorazepam",
      "aliases": [
        "Lorazepam",
        "lorazepam"
      ],
      "rxcui": "6470",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N05BA06"
      ],
      "atc_memberships": [
        {
          "code": "N05BA06",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N05BA",
          "subclass_name": "Benzodiazepine derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6470/properties.json"
    },
    {
      "id": "RXNORM:2103164",
      "sequence": 542,
      "display_name": "lorlatinib",
      "canonical_name": "lorlatinib",
      "aliases": [
        "lorlatinib"
      ],
      "rxcui": "2103164",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01ED05"
      ],
      "atc_memberships": [
        {
          "code": "L01ED05",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01ED",
          "subclass_name": "Anaplastic lymphoma kinase (ALK) inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2103164/properties.json"
    },
    {
      "id": "RXNORM:52175",
      "sequence": 543,
      "display_name": "Losartan",
      "canonical_name": "losartan",
      "aliases": [
        "Losartan",
        "losartan"
      ],
      "rxcui": "52175",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C09CA01"
      ],
      "atc_memberships": [
        {
          "code": "C09CA01",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C09CA",
          "subclass_name": "Angiotensin II receptor blockers (ARBs), plain"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/52175/properties.json"
    },
    {
      "id": "RXNORM:2671958",
      "sequence": 544,
      "display_name": "lovotibeglogene autotemcel",
      "canonical_name": "lovotibeglogene autotemcel",
      "aliases": [
        "lovotibeglogene autotemcel"
      ],
      "rxcui": "2671958",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B06AX06"
      ],
      "atc_memberships": [
        {
          "code": "B06AX06",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B06AX",
          "subclass_name": "Other hematological agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2671958/properties.json"
    },
    {
      "id": "RXNORM:6475",
      "sequence": 545,
      "display_name": "loxapine",
      "canonical_name": "loxapine",
      "aliases": [
        "loxapine"
      ],
      "rxcui": "6475",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N05AH01"
      ],
      "atc_memberships": [
        {
          "code": "N05AH01",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N05AH",
          "subclass_name": "Diazepines, oxazepines, thiazepines and oxepines"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6475/properties.json"
    },
    {
      "id": "RXNORM:2467140",
      "sequence": 546,
      "display_name": "lumasiran",
      "canonical_name": "lumasiran",
      "aliases": [
        "lumasiran"
      ],
      "rxcui": "2467140",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A16AX18"
      ],
      "atc_memberships": [
        {
          "code": "A16AX18",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A16AX",
          "subclass_name": "Various alimentary tract and metabolism products"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2467140/properties.json"
    },
    {
      "id": "RXNORM:2275602",
      "sequence": 547,
      "display_name": "lumateperone",
      "canonical_name": "lumateperone",
      "aliases": [
        "lumateperone"
      ],
      "rxcui": "2275602",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N05AD10"
      ],
      "atc_memberships": [
        {
          "code": "N05AD10",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N05AD",
          "subclass_name": "Butyrophenone derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2275602/properties.json"
    },
    {
      "id": "RXNORM:1999420",
      "sequence": 548,
      "display_name": "macimorelin",
      "canonical_name": "macimorelin",
      "aliases": [
        "macimorelin"
      ],
      "rxcui": "1999420",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "V",
      "primary_group_name_tr": "Diğer maddeler",
      "atc_codes": [
        "V04CD06"
      ],
      "atc_memberships": [
        {
          "code": "V04CD06",
          "group_code": "V",
          "group_name_tr": "Diğer maddeler",
          "subclass_code": "V04CD",
          "subclass_name": "Tests for pituitary function"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1999420/properties.json"
    },
    {
      "id": "RXNORM:6572",
      "sequence": 549,
      "display_name": "mafenide",
      "canonical_name": "mafenide",
      "aliases": [
        "mafenide"
      ],
      "rxcui": "6572",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D06BA03"
      ],
      "atc_memberships": [
        {
          "code": "D06BA03",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D06BA",
          "subclass_name": "Sulfonamides"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6572/properties.json"
    },
    {
      "id": "RXNORM:29151",
      "sequence": 550,
      "display_name": "magaldrate",
      "canonical_name": "magaldrate",
      "aliases": [
        "magaldrate"
      ],
      "rxcui": "29151",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A02AD02"
      ],
      "atc_memberships": [
        {
          "code": "A02AD02",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A02AD",
          "subclass_name": "Combinations and complexes of aluminium, calcium and magnesium compounds"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/29151/properties.json"
    },
    {
      "id": "RXNORM:142131",
      "sequence": 551,
      "display_name": "magnesium aspartate",
      "canonical_name": "magnesium aspartate",
      "aliases": [
        "magnesium aspartate"
      ],
      "rxcui": "142131",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A12CC05"
      ],
      "atc_memberships": [
        {
          "code": "A12CC05",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A12CC",
          "subclass_name": "Magnesium"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/142131/properties.json"
    },
    {
      "id": "RXNORM:29155",
      "sequence": 552,
      "display_name": "magnesium carbonate",
      "canonical_name": "magnesium carbonate",
      "aliases": [
        "magnesium carbonate"
      ],
      "rxcui": "29155",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A02AA01",
        "A06AD01"
      ],
      "atc_memberships": [
        {
          "code": "A02AA01",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A02AA",
          "subclass_name": "Magnesium compounds"
        },
        {
          "code": "A06AD01",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A06AD",
          "subclass_name": "Osmotically acting laxatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/29155/properties.json"
    },
    {
      "id": "RXNORM:52356",
      "sequence": 553,
      "display_name": "magnesium citrate",
      "canonical_name": "magnesium citrate",
      "aliases": [
        "magnesium citrate"
      ],
      "rxcui": "52356",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A06AD19",
        "A12CC04",
        "B05CB03"
      ],
      "atc_memberships": [
        {
          "code": "A06AD19",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A06AD",
          "subclass_name": "Osmotically acting laxatives"
        },
        {
          "code": "A12CC04",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A12CC",
          "subclass_name": "Magnesium"
        },
        {
          "code": "B05CB03",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B05CB",
          "subclass_name": "Salt solutions"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/52356/properties.json"
    },
    {
      "id": "RXNORM:52358",
      "sequence": 554,
      "display_name": "magnesium gluconate",
      "canonical_name": "magnesium gluconate",
      "aliases": [
        "magnesium gluconate"
      ],
      "rxcui": "52358",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A12CC03"
      ],
      "atc_memberships": [
        {
          "code": "A12CC03",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A12CC",
          "subclass_name": "Magnesium"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/52358/properties.json"
    },
    {
      "id": "RXNORM:6585",
      "sequence": 555,
      "display_name": "Magnezyum sülfat",
      "canonical_name": "magnesium sulfate",
      "aliases": [
        "magnesium sulfate",
        "Magnezyum sülfat"
      ],
      "rxcui": "6585",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A06AD04",
        "A12CC02",
        "B05XA05",
        "D11AX05",
        "V04CC02"
      ],
      "atc_memberships": [
        {
          "code": "A06AD04",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A06AD",
          "subclass_name": "Osmotically acting laxatives"
        },
        {
          "code": "A12CC02",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A12CC",
          "subclass_name": "Magnesium"
        },
        {
          "code": "B05XA05",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B05XA",
          "subclass_name": "Electrolyte solutions"
        },
        {
          "code": "D11AX05",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D11AX",
          "subclass_name": "Other dermatologicals"
        },
        {
          "code": "V04CC02",
          "group_code": "V",
          "group_name_tr": "Diğer maddeler",
          "subclass_code": "V04CC",
          "subclass_name": "Tests for bile duct patency"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6585/properties.json"
    },
    {
      "id": "RXNORM:6606",
      "sequence": 556,
      "display_name": "malathion",
      "canonical_name": "malathion",
      "aliases": [
        "malathion"
      ],
      "rxcui": "6606",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "P",
      "primary_group_name_tr": "Antiparaziter maddeler, insektisitler ve repellentler",
      "atc_codes": [
        "P03AX03"
      ],
      "atc_memberships": [
        {
          "code": "P03AX03",
          "group_code": "P",
          "group_name_tr": "Antiparaziter maddeler, insektisitler ve repellentler",
          "subclass_code": "P03AX",
          "subclass_name": "Other ectoparasiticides, incl. scabicides"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6606/properties.json"
    },
    {
      "id": "RXNORM:6628",
      "sequence": 557,
      "display_name": "mannitol",
      "canonical_name": "mannitol",
      "aliases": [
        "mannitol"
      ],
      "rxcui": "6628",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A06AD16",
        "B05BC01",
        "B05CX04",
        "R05CB16",
        "V04CX04"
      ],
      "atc_memberships": [
        {
          "code": "A06AD16",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A06AD",
          "subclass_name": "Osmotically acting laxatives"
        },
        {
          "code": "B05BC01",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B05BC",
          "subclass_name": "Solutions producing osmotic diuresis"
        },
        {
          "code": "B05CX04",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B05CX",
          "subclass_name": "Other irrigating solutions"
        },
        {
          "code": "R05CB16",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R05CB",
          "subclass_name": "Mucolytics"
        },
        {
          "code": "V04CX04",
          "group_code": "V",
          "group_name_tr": "Diğer maddeler",
          "subclass_code": "V04CX",
          "subclass_name": "Other diagnostic agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6628/properties.json"
    },
    {
      "id": "RXNORM:620216",
      "sequence": 558,
      "display_name": "maraviroc",
      "canonical_name": "maraviroc",
      "aliases": [
        "maraviroc"
      ],
      "rxcui": "620216",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J05AX09"
      ],
      "atc_memberships": [
        {
          "code": "J05AX09",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J05AX",
          "subclass_name": "Other antivirals"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/620216/properties.json"
    },
    {
      "id": "RXNORM:2473851",
      "sequence": 559,
      "display_name": "margetuximab",
      "canonical_name": "margetuximab",
      "aliases": [
        "margetuximab"
      ],
      "rxcui": "2473851",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01FD06"
      ],
      "atc_memberships": [
        {
          "code": "L01FD06",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01FD",
          "subclass_name": "HER2 (Human Epidermal Growth Factor Receptor 2) inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2473851/properties.json"
    },
    {
      "id": "RXNORM:2697133",
      "sequence": 560,
      "display_name": "marstacimab",
      "canonical_name": "marstacimab",
      "aliases": [
        "marstacimab"
      ],
      "rxcui": "2697133",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B02BX11"
      ],
      "atc_memberships": [
        {
          "code": "B02BX11",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B02BX",
          "subclass_name": "Other systemic hemostatics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2697133/properties.json"
    },
    {
      "id": "RXNORM:227239",
      "sequence": 561,
      "display_name": "masoprocol",
      "canonical_name": "masoprocol",
      "aliases": [
        "masoprocol"
      ],
      "rxcui": "227239",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01XX10"
      ],
      "atc_memberships": [
        {
          "code": "L01XX10",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01XX",
          "subclass_name": "Other antineoplastic agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/227239/properties.json"
    },
    {
      "id": "RXNORM:2600867",
      "sequence": 562,
      "display_name": "mavacamten",
      "canonical_name": "mavacamten",
      "aliases": [
        "mavacamten"
      ],
      "rxcui": "2600867",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C01EB24"
      ],
      "atc_memberships": [
        {
          "code": "C01EB24",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C01EB",
          "subclass_name": "Other cardiac preparations"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2600867/properties.json"
    },
    {
      "id": "RXNORM:2684021",
      "sequence": 563,
      "display_name": "mavorixafor",
      "canonical_name": "mavorixafor",
      "aliases": [
        "mavorixafor"
      ],
      "rxcui": "2684021",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L03AX24"
      ],
      "atc_memberships": [
        {
          "code": "L03AX24",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L03AX",
          "subclass_name": "Other immunostimulants"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2684021/properties.json"
    },
    {
      "id": "RXNORM:6672",
      "sequence": 564,
      "display_name": "mebendazole",
      "canonical_name": "mebendazole",
      "aliases": [
        "mebendazole"
      ],
      "rxcui": "6672",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "P",
      "primary_group_name_tr": "Antiparaziter maddeler, insektisitler ve repellentler",
      "atc_codes": [
        "P02CA01"
      ],
      "atc_memberships": [
        {
          "code": "P02CA01",
          "group_code": "P",
          "group_name_tr": "Antiparaziter maddeler, insektisitler ve repellentler",
          "subclass_code": "P02CA",
          "subclass_name": "Benzimidazole derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6672/properties.json"
    },
    {
      "id": "RXNORM:6674",
      "sequence": 565,
      "display_name": "mechlorethamine",
      "canonical_name": "mechlorethamine",
      "aliases": [
        "chlormethine",
        "mechlorethamine"
      ],
      "rxcui": "6674",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01AA05"
      ],
      "atc_memberships": [
        {
          "code": "L01AA05",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01AA",
          "subclass_name": "Nitrogen mustard analogues"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6674/properties.json"
    },
    {
      "id": "RXNORM:6676",
      "sequence": 566,
      "display_name": "meclizine",
      "canonical_name": "meclizine",
      "aliases": [
        "meclizine",
        "meclozine"
      ],
      "rxcui": "6676",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "R",
      "primary_group_name_tr": "Solunum sistemi",
      "atc_codes": [
        "R06AE05"
      ],
      "atc_memberships": [
        {
          "code": "R06AE05",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R06AE",
          "subclass_name": "Piperazine derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6676/properties.json"
    },
    {
      "id": "RXNORM:6678",
      "sequence": 567,
      "display_name": "meclofenamic acid",
      "canonical_name": "meclofenamic acid",
      "aliases": [
        "meclofenamic acid"
      ],
      "rxcui": "6678",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "M",
      "primary_group_name_tr": "Kas ve iskelet sistemi",
      "atc_codes": [
        "M01AG04",
        "M02AA18"
      ],
      "atc_memberships": [
        {
          "code": "M01AG04",
          "group_code": "M",
          "group_name_tr": "Kas ve iskelet sistemi",
          "subclass_code": "M01AG",
          "subclass_name": "Fenamates"
        },
        {
          "code": "M02AA18",
          "group_code": "M",
          "group_name_tr": "Kas ve iskelet sistemi",
          "subclass_code": "M02AA",
          "subclass_name": "Antiinflammatory preparations, non-steroids for topical use"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6678/properties.json"
    },
    {
      "id": "RXNORM:6694",
      "sequence": 568,
      "display_name": "mefloquine",
      "canonical_name": "mefloquine",
      "aliases": [
        "mefloquine"
      ],
      "rxcui": "6694",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "P",
      "primary_group_name_tr": "Antiparaziter maddeler, insektisitler ve repellentler",
      "atc_codes": [
        "P01BC02"
      ],
      "atc_memberships": [
        {
          "code": "P01BC02",
          "group_code": "P",
          "group_name_tr": "Antiparaziter maddeler, insektisitler ve repellentler",
          "subclass_code": "P01BC",
          "subclass_name": "Methanolquinolines"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6694/properties.json"
    },
    {
      "id": "RXNORM:6703",
      "sequence": 569,
      "display_name": "megestrol",
      "canonical_name": "megestrol",
      "aliases": [
        "megestrol"
      ],
      "rxcui": "6703",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "G",
      "primary_group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
      "atc_codes": [
        "G03AC05",
        "G03DB02",
        "L02AB01"
      ],
      "atc_memberships": [
        {
          "code": "G03AC05",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G03AC",
          "subclass_name": "Progestogens"
        },
        {
          "code": "G03DB02",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G03DB",
          "subclass_name": "Pregnadien derivatives"
        },
        {
          "code": "L02AB01",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L02AB",
          "subclass_name": "Progestogens"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6703/properties.json"
    },
    {
      "id": "RXNORM:41493",
      "sequence": 570,
      "display_name": "Meloksikam",
      "canonical_name": "meloxicam",
      "aliases": [
        "Meloksikam",
        "meloxicam"
      ],
      "rxcui": "41493",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "M",
      "primary_group_name_tr": "Kas ve iskelet sistemi",
      "atc_codes": [
        "M01AC06"
      ],
      "atc_memberships": [
        {
          "code": "M01AC06",
          "group_code": "M",
          "group_name_tr": "Kas ve iskelet sistemi",
          "subclass_code": "M01AC",
          "subclass_name": "Oxicams"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/41493/properties.json"
    },
    {
      "id": "RXNORM:6718",
      "sequence": 571,
      "display_name": "melphalan",
      "canonical_name": "melphalan",
      "aliases": [
        "melphalan"
      ],
      "rxcui": "6718",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01AA03"
      ],
      "atc_memberships": [
        {
          "code": "L01AA03",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01AA",
          "subclass_name": "Nitrogen mustard analogues"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6718/properties.json"
    },
    {
      "id": "RXNORM:29495",
      "sequence": 572,
      "display_name": "menatetrenone",
      "canonical_name": "menatetrenone",
      "aliases": [
        "menatetrenone"
      ],
      "rxcui": "29495",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "M",
      "primary_group_name_tr": "Kas ve iskelet sistemi",
      "atc_codes": [
        "M05BX08"
      ],
      "atc_memberships": [
        {
          "code": "M05BX08",
          "group_code": "M",
          "group_name_tr": "Kas ve iskelet sistemi",
          "subclass_code": "M05BX",
          "subclass_name": "Other drugs affecting bone structure and mineralization"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/29495/properties.json"
    },
    {
      "id": "RXNORM:6754",
      "sequence": 573,
      "display_name": "meperidine",
      "canonical_name": "meperidine",
      "aliases": [
        "meperidine",
        "pethidine"
      ],
      "rxcui": "6754",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N02AB02"
      ],
      "atc_memberships": [
        {
          "code": "N02AB02",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N02AB",
          "subclass_name": "Phenylpiperidine derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6754/properties.json"
    },
    {
      "id": "RXNORM:6760",
      "sequence": 574,
      "display_name": "meprobamate",
      "canonical_name": "meprobamate",
      "aliases": [
        "meprobamate"
      ],
      "rxcui": "6760",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N05BC01"
      ],
      "atc_memberships": [
        {
          "code": "N05BC01",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N05BC",
          "subclass_name": "Carbamates"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6760/properties.json"
    },
    {
      "id": "RXNORM:6762",
      "sequence": 575,
      "display_name": "merbromin",
      "canonical_name": "merbromin",
      "aliases": [
        "merbromin"
      ],
      "rxcui": "6762",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D08AK04"
      ],
      "atc_memberships": [
        {
          "code": "D08AK04",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D08AK",
          "subclass_name": "Mercurial products"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6762/properties.json"
    },
    {
      "id": "RXNORM:52582",
      "sequence": 576,
      "display_name": "mesalamine",
      "canonical_name": "mesalamine",
      "aliases": [
        "mesalamine",
        "mesalazine"
      ],
      "rxcui": "52582",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A07EC02"
      ],
      "atc_memberships": [
        {
          "code": "A07EC02",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A07EC",
          "subclass_name": "Aminosalicylic acid and similar agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/52582/properties.json"
    },
    {
      "id": "RXNORM:44",
      "sequence": 577,
      "display_name": "mesna",
      "canonical_name": "mesna",
      "aliases": [
        "mesna"
      ],
      "rxcui": "44",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "R",
      "primary_group_name_tr": "Solunum sistemi",
      "atc_codes": [
        "R05CB05",
        "V03AF01"
      ],
      "atc_memberships": [
        {
          "code": "R05CB05",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R05CB",
          "subclass_name": "Mucolytics"
        },
        {
          "code": "V03AF01",
          "group_code": "V",
          "group_name_tr": "Diğer maddeler",
          "subclass_code": "V03AF",
          "subclass_name": "Detoxifying agents for antineoplastic treatment"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/44/properties.json"
    },
    {
      "id": "RXNORM:7688",
      "sequence": 578,
      "display_name": "metaproterenol",
      "canonical_name": "metaproterenol",
      "aliases": [
        "metaproterenol",
        "orciprenaline"
      ],
      "rxcui": "7688",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "R",
      "primary_group_name_tr": "Solunum sistemi",
      "atc_codes": [
        "R03AB03",
        "R03CB03"
      ],
      "atc_memberships": [
        {
          "code": "R03AB03",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R03AB",
          "subclass_name": "Non-selective beta-adrenoreceptor agonists"
        },
        {
          "code": "R03CB03",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R03CB",
          "subclass_name": "Non-selective beta-adrenoreceptor agonists"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/7688/properties.json"
    },
    {
      "id": "RXNORM:6809",
      "sequence": 579,
      "display_name": "Metformin",
      "canonical_name": "metformin",
      "aliases": [
        "metformin",
        "Metformin"
      ],
      "rxcui": "6809",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A10BA02"
      ],
      "atc_memberships": [
        {
          "code": "A10BA02",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A10BA",
          "subclass_name": "Biguanides"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6809/properties.json"
    },
    {
      "id": "RXNORM:155080",
      "sequence": 580,
      "display_name": "methacholine",
      "canonical_name": "methacholine",
      "aliases": [
        "methacholine"
      ],
      "rxcui": "155080",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "V",
      "primary_group_name_tr": "Diğer maddeler",
      "atc_codes": [
        "V04CX03"
      ],
      "atc_memberships": [
        {
          "code": "V04CX03",
          "group_code": "V",
          "group_name_tr": "Diğer maddeler",
          "subclass_code": "V04CX",
          "subclass_name": "Other diagnostic agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/155080/properties.json"
    },
    {
      "id": "RXNORM:6813",
      "sequence": 581,
      "display_name": "methadone",
      "canonical_name": "methadone",
      "aliases": [
        "methadone"
      ],
      "rxcui": "6813",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N07BC02"
      ],
      "atc_memberships": [
        {
          "code": "N07BC02",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N07BC",
          "subclass_name": "Drugs used in opioid dependence"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6813/properties.json"
    },
    {
      "id": "RXNORM:6816",
      "sequence": 582,
      "display_name": "methamphetamine",
      "canonical_name": "methamphetamine",
      "aliases": [
        "metamfetamine",
        "methamphetamine"
      ],
      "rxcui": "6816",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N06BA03"
      ],
      "atc_memberships": [
        {
          "code": "N06BA03",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N06BA",
          "subclass_name": "Centrally acting sympathomimetics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6816/properties.json"
    },
    {
      "id": "RXNORM:6826",
      "sequence": 583,
      "display_name": "methazolamide",
      "canonical_name": "methazolamide",
      "aliases": [
        "methazolamide"
      ],
      "rxcui": "6826",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "S",
      "primary_group_name_tr": "Duyu organları",
      "atc_codes": [
        "S01EC05"
      ],
      "atc_memberships": [
        {
          "code": "S01EC05",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01EC",
          "subclass_name": "Carbonic anhydrase inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6826/properties.json"
    },
    {
      "id": "RXNORM:6837",
      "sequence": 584,
      "display_name": "methionine",
      "canonical_name": "methionine",
      "aliases": [
        "methionine"
      ],
      "rxcui": "6837",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "V",
      "primary_group_name_tr": "Diğer maddeler",
      "atc_codes": [
        "V03AB26"
      ],
      "atc_memberships": [
        {
          "code": "V03AB26",
          "group_code": "V",
          "group_name_tr": "Diğer maddeler",
          "subclass_code": "V03AB",
          "subclass_name": "Antidotes"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6837/properties.json"
    },
    {
      "id": "RXNORM:6851",
      "sequence": 585,
      "display_name": "Metotreksat",
      "canonical_name": "methotrexate",
      "aliases": [
        "methotrexate",
        "Metotreksat"
      ],
      "rxcui": "6851",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01BA01",
        "L04AX03"
      ],
      "atc_memberships": [
        {
          "code": "L01BA01",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01BA",
          "subclass_name": "Folic acid analogues"
        },
        {
          "code": "L04AX03",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L04AX",
          "subclass_name": "Other immunosuppressants"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6851/properties.json"
    },
    {
      "id": "RXNORM:89785",
      "sequence": 586,
      "display_name": "methscopolamine",
      "canonical_name": "methscopolamine",
      "aliases": [
        "methscopolamine",
        "methylscopolamine"
      ],
      "rxcui": "89785",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A03BB03",
        "S01FA03"
      ],
      "atc_memberships": [
        {
          "code": "A03BB03",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A03BB",
          "subclass_name": "Belladonna alkaloids, semisynthetic, quaternary ammonium compounds"
        },
        {
          "code": "S01FA03",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01FA",
          "subclass_name": "Anticholinergics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/89785/properties.json"
    },
    {
      "id": "RXNORM:337068",
      "sequence": 587,
      "display_name": "methyl 5-aminolevulinate",
      "canonical_name": "methyl 5-aminolevulinate",
      "aliases": [
        "methyl 5-aminolevulinate",
        "methyl aminolevulinate"
      ],
      "rxcui": "337068",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01XD03"
      ],
      "atc_memberships": [
        {
          "code": "L01XD03",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01XD",
          "subclass_name": "Sensitizers used in photodynamic/radiation therapy"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/337068/properties.json"
    },
    {
      "id": "RXNORM:6873",
      "sequence": 588,
      "display_name": "methylcellulose",
      "canonical_name": "methylcellulose",
      "aliases": [
        "methylcellulose"
      ],
      "rxcui": "6873",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A06AC06"
      ],
      "atc_memberships": [
        {
          "code": "A06AC06",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A06AC",
          "subclass_name": "Bulk-forming laxatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6873/properties.json"
    },
    {
      "id": "RXNORM:6878",
      "sequence": 589,
      "display_name": "methylene blue",
      "canonical_name": "methylene blue",
      "aliases": [
        "methylene blue",
        "methylthioninium chloride"
      ],
      "rxcui": "6878",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "V",
      "primary_group_name_tr": "Diğer maddeler",
      "atc_codes": [
        "V03AB17",
        "V04CG05"
      ],
      "atc_memberships": [
        {
          "code": "V03AB17",
          "group_code": "V",
          "group_name_tr": "Diğer maddeler",
          "subclass_code": "V03AB",
          "subclass_name": "Antidotes"
        },
        {
          "code": "V04CG05",
          "group_code": "V",
          "group_name_tr": "Diğer maddeler",
          "subclass_code": "V04CG",
          "subclass_name": "Tests for gastric secretion"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6878/properties.json"
    },
    {
      "id": "RXNORM:6883",
      "sequence": 590,
      "display_name": "methylergonovine",
      "canonical_name": "methylergonovine",
      "aliases": [
        "methylergometrine",
        "methylergonovine"
      ],
      "rxcui": "6883",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "G",
      "primary_group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
      "atc_codes": [
        "G02AB01"
      ],
      "atc_memberships": [
        {
          "code": "G02AB01",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G02AB",
          "subclass_name": "Ergot alkaloids"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6883/properties.json"
    },
    {
      "id": "RXNORM:6915",
      "sequence": 591,
      "display_name": "Metoklopramid",
      "canonical_name": "metoclopramide",
      "aliases": [
        "metoclopramide",
        "Metoklopramid"
      ],
      "rxcui": "6915",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A03FA01"
      ],
      "atc_memberships": [
        {
          "code": "A03FA01",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A03FA",
          "subclass_name": "Propulsives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6915/properties.json"
    },
    {
      "id": "RXNORM:6916",
      "sequence": 592,
      "display_name": "metolazone",
      "canonical_name": "metolazone",
      "aliases": [
        "metolazone"
      ],
      "rxcui": "6916",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C03BA08"
      ],
      "atc_memberships": [
        {
          "code": "C03BA08",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C03BA",
          "subclass_name": "Sulfonamides, plain"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6916/properties.json"
    },
    {
      "id": "RXNORM:6918",
      "sequence": 593,
      "display_name": "metoprolol",
      "canonical_name": "metoprolol",
      "aliases": [
        "metoprolol"
      ],
      "rxcui": "6918",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C07AB02"
      ],
      "atc_memberships": [
        {
          "code": "C07AB02",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C07AB",
          "subclass_name": "Beta blocking agents, selective"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6918/properties.json"
    },
    {
      "id": "RXNORM:6922",
      "sequence": 594,
      "display_name": "metronidazole",
      "canonical_name": "metronidazole",
      "aliases": [
        "metronidazole"
      ],
      "rxcui": "6922",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A01AB17",
        "D06BX01",
        "G01AF01",
        "J01XD01",
        "P01AB01"
      ],
      "atc_memberships": [
        {
          "code": "A01AB17",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A01AB",
          "subclass_name": "Antiinfectives and antiseptics for local oral treatment"
        },
        {
          "code": "D06BX01",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D06BX",
          "subclass_name": "Other chemotherapeutics"
        },
        {
          "code": "G01AF01",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G01AF",
          "subclass_name": "Imidazole derivatives"
        },
        {
          "code": "J01XD01",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J01XD",
          "subclass_name": "Imidazole derivatives"
        },
        {
          "code": "P01AB01",
          "group_code": "P",
          "group_name_tr": "Antiparaziter maddeler, insektisitler ve repellentler",
          "subclass_code": "P01AB",
          "subclass_name": "Nitroimidazole derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6922/properties.json"
    },
    {
      "id": "RXNORM:6923",
      "sequence": 595,
      "display_name": "metyrapone",
      "canonical_name": "metyrapone",
      "aliases": [
        "metyrapone"
      ],
      "rxcui": "6923",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "V",
      "primary_group_name_tr": "Diğer maddeler",
      "atc_codes": [
        "V04CD01"
      ],
      "atc_memberships": [
        {
          "code": "V04CD01",
          "group_code": "V",
          "group_name_tr": "Diğer maddeler",
          "subclass_code": "V04CD",
          "subclass_name": "Tests for pituitary function"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6923/properties.json"
    },
    {
      "id": "RXNORM:6926",
      "sequence": 596,
      "display_name": "mexiletine",
      "canonical_name": "mexiletine",
      "aliases": [
        "mexiletine"
      ],
      "rxcui": "6926",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C01BB02"
      ],
      "atc_memberships": [
        {
          "code": "C01BB02",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C01BB",
          "subclass_name": "Antiarrhythmics, class Ib"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6926/properties.json"
    },
    {
      "id": "RXNORM:325887",
      "sequence": 597,
      "display_name": "micafungin",
      "canonical_name": "micafungin",
      "aliases": [
        "micafungin"
      ],
      "rxcui": "325887",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J02AX05"
      ],
      "atc_memberships": [
        {
          "code": "J02AX05",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J02AX",
          "subclass_name": "Other antimycotics for systemic use"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/325887/properties.json"
    },
    {
      "id": "RXNORM:6960",
      "sequence": 598,
      "display_name": "midazolam",
      "canonical_name": "midazolam",
      "aliases": [
        "midazolam"
      ],
      "rxcui": "6960",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N05CD08"
      ],
      "atc_memberships": [
        {
          "code": "N05CD08",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N05CD",
          "subclass_name": "Benzodiazepine derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6960/properties.json"
    },
    {
      "id": "RXNORM:6964",
      "sequence": 599,
      "display_name": "mifepristone",
      "canonical_name": "mifepristone",
      "aliases": [
        "mifepristone"
      ],
      "rxcui": "6964",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "G",
      "primary_group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
      "atc_codes": [
        "G03XB01"
      ],
      "atc_memberships": [
        {
          "code": "G03XB01",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G03XB",
          "subclass_name": "Progesterone receptor modulators"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6964/properties.json"
    },
    {
      "id": "RXNORM:2054252",
      "sequence": 600,
      "display_name": "migalastat",
      "canonical_name": "migalastat",
      "aliases": [
        "migalastat"
      ],
      "rxcui": "2054252",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A16AX14"
      ],
      "atc_memberships": [
        {
          "code": "A16AX14",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A16AX",
          "subclass_name": "Various alimentary tract and metabolism products"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2054252/properties.json"
    },
    {
      "id": "RXNORM:52769",
      "sequence": 601,
      "display_name": "milrinone",
      "canonical_name": "milrinone",
      "aliases": [
        "milrinone"
      ],
      "rxcui": "52769",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C01CE02"
      ],
      "atc_memberships": [
        {
          "code": "C01CE02",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C01CE",
          "subclass_name": "Phosphodiesterase inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/52769/properties.json"
    },
    {
      "id": "RXNORM:6972",
      "sequence": 602,
      "display_name": "mineral oil",
      "canonical_name": "mineral oil",
      "aliases": [
        "liquid paraffin",
        "mineral oil"
      ],
      "rxcui": "6972",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A06AA01"
      ],
      "atc_memberships": [
        {
          "code": "A06AA01",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A06AA",
          "subclass_name": "Softeners, emollients"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6972/properties.json"
    },
    {
      "id": "RXNORM:6980",
      "sequence": 603,
      "display_name": "minocycline",
      "canonical_name": "minocycline",
      "aliases": [
        "minocycline"
      ],
      "rxcui": "6980",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A01AB23",
        "D10AF07",
        "J01AA08"
      ],
      "atc_memberships": [
        {
          "code": "A01AB23",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A01AB",
          "subclass_name": "Antiinfectives and antiseptics for local oral treatment"
        },
        {
          "code": "D10AF07",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D10AF",
          "subclass_name": "Antiinfectives for treatment of acne"
        },
        {
          "code": "J01AA08",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J01AA",
          "subclass_name": "Tetracyclines"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6980/properties.json"
    },
    {
      "id": "RXNORM:1367839",
      "sequence": 604,
      "display_name": "mipomersen",
      "canonical_name": "mipomersen",
      "aliases": [
        "mipomersen"
      ],
      "rxcui": "1367839",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C10AX11"
      ],
      "atc_memberships": [
        {
          "code": "C10AX11",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C10AX",
          "subclass_name": "Other lipid modifying agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1367839/properties.json"
    },
    {
      "id": "RXNORM:2668384",
      "sequence": 605,
      "display_name": "mirikizumab",
      "canonical_name": "mirikizumab",
      "aliases": [
        "mirikizumab"
      ],
      "rxcui": "2668384",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L04AC24"
      ],
      "atc_memberships": [
        {
          "code": "L04AC24",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L04AC",
          "subclass_name": "Interleukin inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2668384/properties.json"
    },
    {
      "id": "RXNORM:15996",
      "sequence": 606,
      "display_name": "mirtazapine",
      "canonical_name": "mirtazapine",
      "aliases": [
        "mirtazapine"
      ],
      "rxcui": "15996",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N06AX11"
      ],
      "atc_memberships": [
        {
          "code": "N06AX11",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N06AX",
          "subclass_name": "Other antidepressants"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/15996/properties.json"
    },
    {
      "id": "RXNORM:42331",
      "sequence": 607,
      "display_name": "misoprostol",
      "canonical_name": "misoprostol",
      "aliases": [
        "misoprostol"
      ],
      "rxcui": "42331",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A02BB01",
        "G02AD06"
      ],
      "atc_memberships": [
        {
          "code": "A02BB01",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A02BB",
          "subclass_name": "Prostaglandins"
        },
        {
          "code": "G02AD06",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G02AD",
          "subclass_name": "Prostaglandins"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/42331/properties.json"
    },
    {
      "id": "RXNORM:632",
      "sequence": 608,
      "display_name": "mitomycin",
      "canonical_name": "mitomycin",
      "aliases": [
        "mitomycin"
      ],
      "rxcui": "632",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01DC03"
      ],
      "atc_memberships": [
        {
          "code": "L01DC03",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01DC",
          "subclass_name": "Other cytotoxic antibiotics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/632/properties.json"
    },
    {
      "id": "RXNORM:7004",
      "sequence": 609,
      "display_name": "mitotane",
      "canonical_name": "mitotane",
      "aliases": [
        "mitotane"
      ],
      "rxcui": "7004",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01XX23"
      ],
      "atc_memberships": [
        {
          "code": "L01XX23",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01XX",
          "subclass_name": "Other antineoplastic agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/7004/properties.json"
    },
    {
      "id": "RXNORM:30131",
      "sequence": 610,
      "display_name": "moexipril",
      "canonical_name": "moexipril",
      "aliases": [
        "moexipril"
      ],
      "rxcui": "30131",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C09AA13"
      ],
      "atc_memberships": [
        {
          "code": "C09AA13",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C09AA",
          "subclass_name": "ACE inhibitors, plain"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/30131/properties.json"
    },
    {
      "id": "RXNORM:7019",
      "sequence": 611,
      "display_name": "molindone",
      "canonical_name": "molindone",
      "aliases": [
        "molindone"
      ],
      "rxcui": "7019",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N05AE02"
      ],
      "atc_memberships": [
        {
          "code": "N05AE02",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N05AE",
          "subclass_name": "Indole derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/7019/properties.json"
    },
    {
      "id": "RXNORM:2587901",
      "sequence": 612,
      "display_name": "molnupiravir",
      "canonical_name": "molnupiravir",
      "aliases": [
        "molnupiravir"
      ],
      "rxcui": "2587901",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J05AB18"
      ],
      "atc_memberships": [
        {
          "code": "J05AB18",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J05AB",
          "subclass_name": "Nucleosides and nucleotides excl. reverse transcriptase inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2587901/properties.json"
    },
    {
      "id": "RXNORM:2665204",
      "sequence": 613,
      "display_name": "momelotinib",
      "canonical_name": "momelotinib",
      "aliases": [
        "momelotinib"
      ],
      "rxcui": "2665204",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01EJ04"
      ],
      "atc_memberships": [
        {
          "code": "L01EJ04",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01EJ",
          "subclass_name": "Janus-associated kinase (JAK) inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2665204/properties.json"
    },
    {
      "id": "RXNORM:108118",
      "sequence": 614,
      "display_name": "mometasone",
      "canonical_name": "mometasone",
      "aliases": [
        "mometasone"
      ],
      "rxcui": "108118",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D07AC13",
        "D07XC03",
        "R01AD09",
        "R03BA07"
      ],
      "atc_memberships": [
        {
          "code": "D07AC13",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D07AC",
          "subclass_name": "Corticosteroids, potent (group III)"
        },
        {
          "code": "D07XC03",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D07XC",
          "subclass_name": "Corticosteroids, potent, other combinations"
        },
        {
          "code": "R01AD09",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R01AD",
          "subclass_name": "Corticosteroids"
        },
        {
          "code": "R03BA07",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R03BA",
          "subclass_name": "Glucocorticoids"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/108118/properties.json"
    },
    {
      "id": "RXNORM:1546433",
      "sequence": 615,
      "display_name": "monomethyl fumarate",
      "canonical_name": "monomethyl fumarate",
      "aliases": [
        "monomethyl fumarate"
      ],
      "rxcui": "1546433",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L04AX11"
      ],
      "atc_memberships": [
        {
          "code": "L04AX11",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L04AX",
          "subclass_name": "Other immunosuppressants"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1546433/properties.json"
    },
    {
      "id": "RXNORM:88249",
      "sequence": 616,
      "display_name": "montelukast",
      "canonical_name": "montelukast",
      "aliases": [
        "montelukast"
      ],
      "rxcui": "88249",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "R",
      "primary_group_name_tr": "Solunum sistemi",
      "atc_codes": [
        "R03DC03"
      ],
      "atc_memberships": [
        {
          "code": "R03DC03",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R03DC",
          "subclass_name": "Leukotriene receptor antagonists"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/88249/properties.json"
    },
    {
      "id": "RXNORM:7052",
      "sequence": 617,
      "display_name": "Morfin",
      "canonical_name": "morphine",
      "aliases": [
        "Morfin",
        "morphine"
      ],
      "rxcui": "7052",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N02AA01"
      ],
      "atc_memberships": [
        {
          "code": "N02AA01",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N02AA",
          "subclass_name": "Natural opium alkaloids"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/7052/properties.json"
    },
    {
      "id": "RXNORM:2099295",
      "sequence": 618,
      "display_name": "moxetumomab pasudotox",
      "canonical_name": "moxetumomab pasudotox",
      "aliases": [
        "moxetumomab pasudotox"
      ],
      "rxcui": "2099295",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01FB02"
      ],
      "atc_memberships": [
        {
          "code": "L01FB02",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01FB",
          "subclass_name": "CD22 (Clusters of Differentiation 22) inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2099295/properties.json"
    },
    {
      "id": "RXNORM:139462",
      "sequence": 619,
      "display_name": "moxifloxacin",
      "canonical_name": "moxifloxacin",
      "aliases": [
        "moxifloxacin"
      ],
      "rxcui": "139462",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J01MA14",
        "S01AE07"
      ],
      "atc_memberships": [
        {
          "code": "J01MA14",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J01MA",
          "subclass_name": "Fluoroquinolones"
        },
        {
          "code": "S01AE07",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01AE",
          "subclass_name": "Fluoroquinolones"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/139462/properties.json"
    },
    {
      "id": "RXNORM:42372",
      "sequence": 620,
      "display_name": "mupirocin",
      "canonical_name": "mupirocin",
      "aliases": [
        "mupirocin"
      ],
      "rxcui": "42372",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D06AX09",
        "R01AX06"
      ],
      "atc_memberships": [
        {
          "code": "D06AX09",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D06AX",
          "subclass_name": "Other antibiotics for topical use"
        },
        {
          "code": "R01AX06",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R01AX",
          "subclass_name": "Other nasal preparations"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/42372/properties.json"
    },
    {
      "id": "RXNORM:2644436",
      "sequence": 621,
      "display_name": "nadofaragene firadenovec",
      "canonical_name": "nadofaragene firadenovec",
      "aliases": [
        "nadofaragene firadenovec"
      ],
      "rxcui": "2644436",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01XL10"
      ],
      "atc_memberships": [
        {
          "code": "L01XL10",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01XL",
          "subclass_name": "Antineoplastic cell and gene therapy"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2644436/properties.json"
    },
    {
      "id": "RXNORM:7226",
      "sequence": 622,
      "display_name": "nadolol",
      "canonical_name": "nadolol",
      "aliases": [
        "nadolol"
      ],
      "rxcui": "7226",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C07AA12"
      ],
      "atc_memberships": [
        {
          "code": "C07AA12",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C07AA",
          "subclass_name": "Beta blocking agents, non-selective"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/7226/properties.json"
    },
    {
      "id": "RXNORM:7233",
      "sequence": 623,
      "display_name": "nafcillin",
      "canonical_name": "nafcillin",
      "aliases": [
        "nafcillin"
      ],
      "rxcui": "7233",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J01CF06"
      ],
      "atc_memberships": [
        {
          "code": "J01CF06",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J01CF",
          "subclass_name": "Beta-lactamase resistant penicillins"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/7233/properties.json"
    },
    {
      "id": "RXNORM:31476",
      "sequence": 624,
      "display_name": "naftifine",
      "canonical_name": "naftifine",
      "aliases": [
        "naftifine"
      ],
      "rxcui": "31476",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D01AE22"
      ],
      "atc_memberships": [
        {
          "code": "D01AE22",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D01AE",
          "subclass_name": "Other antifungals for topical use"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/31476/properties.json"
    },
    {
      "id": "RXNORM:7238",
      "sequence": 625,
      "display_name": "nalbuphine",
      "canonical_name": "nalbuphine",
      "aliases": [
        "nalbuphine"
      ],
      "rxcui": "7238",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N02AF02"
      ],
      "atc_memberships": [
        {
          "code": "N02AF02",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N02AF",
          "subclass_name": "Morphinan derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/7238/properties.json"
    },
    {
      "id": "RXNORM:1876597",
      "sequence": 626,
      "display_name": "naldemedine",
      "canonical_name": "naldemedine",
      "aliases": [
        "naldemedine"
      ],
      "rxcui": "1876597",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A06AH05"
      ],
      "atc_memberships": [
        {
          "code": "A06AH05",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A06AH",
          "subclass_name": "Peripheral opioid receptor antagonists"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1876597/properties.json"
    },
    {
      "id": "RXNORM:31479",
      "sequence": 627,
      "display_name": "nalmefene",
      "canonical_name": "nalmefene",
      "aliases": [
        "nalmefene"
      ],
      "rxcui": "31479",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N07BB05"
      ],
      "atc_memberships": [
        {
          "code": "N07BB05",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N07BB",
          "subclass_name": "Drugs used in alcohol dependence"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/31479/properties.json"
    },
    {
      "id": "RXNORM:7242",
      "sequence": 628,
      "display_name": "naloxone",
      "canonical_name": "naloxone",
      "aliases": [
        "naloxone"
      ],
      "rxcui": "7242",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A06AH04",
        "V03AB15"
      ],
      "atc_memberships": [
        {
          "code": "A06AH04",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A06AH",
          "subclass_name": "Peripheral opioid receptor antagonists"
        },
        {
          "code": "V03AB15",
          "group_code": "V",
          "group_name_tr": "Diğer maddeler",
          "subclass_code": "V03AB",
          "subclass_name": "Antidotes"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/7242/properties.json"
    },
    {
      "id": "RXNORM:7258",
      "sequence": 629,
      "display_name": "Naproksen",
      "canonical_name": "naproxen",
      "aliases": [
        "Naproksen",
        "naproxen"
      ],
      "rxcui": "7258",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "G",
      "primary_group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
      "atc_codes": [
        "G02CC02",
        "M01AE02",
        "M02AA12"
      ],
      "atc_memberships": [
        {
          "code": "G02CC02",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G02CC",
          "subclass_name": "Antiinflammatory products for vaginal administration"
        },
        {
          "code": "M01AE02",
          "group_code": "M",
          "group_name_tr": "Kas ve iskelet sistemi",
          "subclass_code": "M01AE",
          "subclass_name": "Propionic acid derivatives"
        },
        {
          "code": "M02AA12",
          "group_code": "M",
          "group_name_tr": "Kas ve iskelet sistemi",
          "subclass_code": "M02AA",
          "subclass_name": "Antiinflammatory preparations, non-steroids for topical use"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/7258/properties.json"
    },
    {
      "id": "RXNORM:354770",
      "sequence": 630,
      "display_name": "natalizumab",
      "canonical_name": "natalizumab",
      "aliases": [
        "natalizumab"
      ],
      "rxcui": "354770",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L04AG03"
      ],
      "atc_memberships": [
        {
          "code": "L04AG03",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L04AG",
          "subclass_name": "Monoclonal antibodies"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/354770/properties.json"
    },
    {
      "id": "RXNORM:7268",
      "sequence": 631,
      "display_name": "natamycin",
      "canonical_name": "natamycin",
      "aliases": [
        "natamycin"
      ],
      "rxcui": "7268",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A01AB10",
        "A07AA03",
        "D01AA02",
        "G01AA02",
        "S01AA10"
      ],
      "atc_memberships": [
        {
          "code": "A01AB10",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A01AB",
          "subclass_name": "Antiinfectives and antiseptics for local oral treatment"
        },
        {
          "code": "A07AA03",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A07AA",
          "subclass_name": "Antibiotics"
        },
        {
          "code": "D01AA02",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D01AA",
          "subclass_name": "Antibiotics"
        },
        {
          "code": "G01AA02",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G01AA",
          "subclass_name": "Antibiotics"
        },
        {
          "code": "S01AA10",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01AA",
          "subclass_name": "Antibiotics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/7268/properties.json"
    },
    {
      "id": "RXNORM:2474039",
      "sequence": 632,
      "display_name": "naxitamab",
      "canonical_name": "naxitamab",
      "aliases": [
        "naxitamab"
      ],
      "rxcui": "2474039",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01FX21"
      ],
      "atc_memberships": [
        {
          "code": "L01FX21",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01FX",
          "subclass_name": "Other monoclonal antibodies and antibody drug conjugates"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2474039/properties.json"
    },
    {
      "id": "RXNORM:31555",
      "sequence": 633,
      "display_name": "nebivolol",
      "canonical_name": "nebivolol",
      "aliases": [
        "nebivolol"
      ],
      "rxcui": "31555",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C07AB12"
      ],
      "atc_memberships": [
        {
          "code": "C07AB12",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C07AB",
          "subclass_name": "Beta blocking agents, selective"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/31555/properties.json"
    },
    {
      "id": "RXNORM:1723738",
      "sequence": 634,
      "display_name": "necitumumab",
      "canonical_name": "necitumumab",
      "aliases": [
        "necitumumab"
      ],
      "rxcui": "1723738",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01FE03"
      ],
      "atc_memberships": [
        {
          "code": "L01FE03",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01FE",
          "subclass_name": "EGFR (Epidermal Growth Factor Receptor) inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1723738/properties.json"
    },
    {
      "id": "RXNORM:2675287",
      "sequence": 635,
      "display_name": "nedosiran",
      "canonical_name": "nedosiran",
      "aliases": [
        "nedosiran"
      ],
      "rxcui": "2675287",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A16AX25"
      ],
      "atc_memberships": [
        {
          "code": "A16AX25",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A16AX",
          "subclass_name": "Various alimentary tract and metabolism products"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2675287/properties.json"
    },
    {
      "id": "RXNORM:31565",
      "sequence": 636,
      "display_name": "nefazodone",
      "canonical_name": "nefazodone",
      "aliases": [
        "nefazodone"
      ],
      "rxcui": "31565",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N06AX06"
      ],
      "atc_memberships": [
        {
          "code": "N06AX06",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N06AX",
          "subclass_name": "Other antidepressants"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/31565/properties.json"
    },
    {
      "id": "RXNORM:274771",
      "sequence": 637,
      "display_name": "nelarabine",
      "canonical_name": "nelarabine",
      "aliases": [
        "nelarabine"
      ],
      "rxcui": "274771",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01BB07"
      ],
      "atc_memberships": [
        {
          "code": "L01BB07",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01BB",
          "subclass_name": "Purine analogues"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/274771/properties.json"
    },
    {
      "id": "RXNORM:134527",
      "sequence": 638,
      "display_name": "nelfinavir",
      "canonical_name": "nelfinavir",
      "aliases": [
        "nelfinavir"
      ],
      "rxcui": "134527",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J05AE04"
      ],
      "atc_memberships": [
        {
          "code": "J05AE04",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J05AE",
          "subclass_name": "Protease inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/134527/properties.json"
    },
    {
      "id": "RXNORM:7299",
      "sequence": 639,
      "display_name": "neomycin",
      "canonical_name": "neomycin",
      "aliases": [
        "neomycin"
      ],
      "rxcui": "7299",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A01AB08",
        "A07AA01",
        "B05CA09",
        "D06AX04",
        "J01GB05",
        "R02AB01",
        "S01AA03",
        "S02AA07",
        "S03AA01"
      ],
      "atc_memberships": [
        {
          "code": "A01AB08",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A01AB",
          "subclass_name": "Antiinfectives and antiseptics for local oral treatment"
        },
        {
          "code": "A07AA01",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A07AA",
          "subclass_name": "Antibiotics"
        },
        {
          "code": "B05CA09",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B05CA",
          "subclass_name": "Antiinfectives"
        },
        {
          "code": "D06AX04",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D06AX",
          "subclass_name": "Other antibiotics for topical use"
        },
        {
          "code": "J01GB05",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J01GB",
          "subclass_name": "Other aminoglycosides"
        },
        {
          "code": "R02AB01",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R02AB",
          "subclass_name": "Antibiotics"
        },
        {
          "code": "S01AA03",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01AA",
          "subclass_name": "Antibiotics"
        },
        {
          "code": "S02AA07",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S02AA",
          "subclass_name": "Antiinfectives"
        },
        {
          "code": "S03AA01",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S03AA",
          "subclass_name": "Antiinfectives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/7299/properties.json"
    },
    {
      "id": "RXNORM:2725523",
      "sequence": 640,
      "display_name": "nerandomilast",
      "canonical_name": "nerandomilast",
      "aliases": [
        "nerandomilast"
      ],
      "rxcui": "2725523",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L04AA61"
      ],
      "atc_memberships": [
        {
          "code": "L04AA61",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L04AA",
          "subclass_name": "Selective immunosuppressants"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2725523/properties.json"
    },
    {
      "id": "RXNORM:53654",
      "sequence": 641,
      "display_name": "nevirapine",
      "canonical_name": "nevirapine",
      "aliases": [
        "nevirapine"
      ],
      "rxcui": "53654",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J05AG01"
      ],
      "atc_memberships": [
        {
          "code": "J05AG01",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J05AG",
          "subclass_name": "Non-nucleoside reverse transcriptase inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/53654/properties.json"
    },
    {
      "id": "RXNORM:7393",
      "sequence": 642,
      "display_name": "niacin",
      "canonical_name": "niacin",
      "aliases": [
        "niacin",
        "nicotinic acid"
      ],
      "rxcui": "7393",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C04AC01",
        "C10AD02"
      ],
      "atc_memberships": [
        {
          "code": "C04AC01",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C04AC",
          "subclass_name": "Nicotinic acid and derivatives"
        },
        {
          "code": "C10AD02",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C10AD",
          "subclass_name": "Nicotinic acid and derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/7393/properties.json"
    },
    {
      "id": "RXNORM:7417",
      "sequence": 643,
      "display_name": "nifedipine",
      "canonical_name": "nifedipine",
      "aliases": [
        "nifedipine"
      ],
      "rxcui": "7417",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C08CA05"
      ],
      "atc_memberships": [
        {
          "code": "C08CA05",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C08CA",
          "subclass_name": "Dihydropyridine derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/7417/properties.json"
    },
    {
      "id": "RXNORM:7421",
      "sequence": 644,
      "display_name": "nifurtimox",
      "canonical_name": "nifurtimox",
      "aliases": [
        "nifurtimox"
      ],
      "rxcui": "7421",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "P",
      "primary_group_name_tr": "Antiparaziter maddeler, insektisitler ve repellentler",
      "atc_codes": [
        "P01CC01"
      ],
      "atc_memberships": [
        {
          "code": "P01CC01",
          "group_code": "P",
          "group_name_tr": "Antiparaziter maddeler, insektisitler ve repellentler",
          "subclass_code": "P01CC",
          "subclass_name": "Nitrofuran derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/7421/properties.json"
    },
    {
      "id": "RXNORM:662281",
      "sequence": 645,
      "display_name": "nilotinib",
      "canonical_name": "nilotinib",
      "aliases": [
        "nilotinib"
      ],
      "rxcui": "662281",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01EA03"
      ],
      "atc_memberships": [
        {
          "code": "L01EA03",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01EA",
          "subclass_name": "BCR-ABL tyrosine kinase inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/662281/properties.json"
    },
    {
      "id": "RXNORM:2712693",
      "sequence": 646,
      "display_name": "nipocalimab",
      "canonical_name": "nipocalimab",
      "aliases": [
        "nipocalimab"
      ],
      "rxcui": "2712693",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L04AL03"
      ],
      "atc_memberships": [
        {
          "code": "L04AL03",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L04AL",
          "subclass_name": "Neonatal fragment crystallizable receptor (FcRn) inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2712693/properties.json"
    },
    {
      "id": "RXNORM:1918231",
      "sequence": 647,
      "display_name": "niraparib",
      "canonical_name": "niraparib",
      "aliases": [
        "niraparib"
      ],
      "rxcui": "1918231",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01XK02"
      ],
      "atc_memberships": [
        {
          "code": "L01XK02",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01XK",
          "subclass_name": "Poly (ADP-ribose) polymerase (PARP) inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1918231/properties.json"
    },
    {
      "id": "RXNORM:7435",
      "sequence": 648,
      "display_name": "nisoldipine",
      "canonical_name": "nisoldipine",
      "aliases": [
        "nisoldipine"
      ],
      "rxcui": "7435",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C08CA07"
      ],
      "atc_memberships": [
        {
          "code": "C08CA07",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C08CA",
          "subclass_name": "Dihydropyridine derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/7435/properties.json"
    },
    {
      "id": "RXNORM:31819",
      "sequence": 649,
      "display_name": "nitazoxanide",
      "canonical_name": "nitazoxanide",
      "aliases": [
        "nitazoxanide"
      ],
      "rxcui": "31819",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "P",
      "primary_group_name_tr": "Antiparaziter maddeler, insektisitler ve repellentler",
      "atc_codes": [
        "P01AX11"
      ],
      "atc_memberships": [
        {
          "code": "P01AX11",
          "group_code": "P",
          "group_name_tr": "Antiparaziter maddeler, insektisitler ve repellentler",
          "subclass_code": "P01AX",
          "subclass_name": "Other agents against amoebiasis and other protozoal diseases"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/31819/properties.json"
    },
    {
      "id": "RXNORM:61805",
      "sequence": 650,
      "display_name": "nitisinone",
      "canonical_name": "nitisinone",
      "aliases": [
        "nitisinone"
      ],
      "rxcui": "61805",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A16AX04"
      ],
      "atc_memberships": [
        {
          "code": "A16AX04",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A16AX",
          "subclass_name": "Various alimentary tract and metabolism products"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/61805/properties.json"
    },
    {
      "id": "RXNORM:7456",
      "sequence": 651,
      "display_name": "nitrogen",
      "canonical_name": "nitrogen",
      "aliases": [
        "nitrogen"
      ],
      "rxcui": "7456",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "V",
      "primary_group_name_tr": "Diğer maddeler",
      "atc_codes": [
        "V03AN04"
      ],
      "atc_memberships": [
        {
          "code": "V03AN04",
          "group_code": "V",
          "group_name_tr": "Diğer maddeler",
          "subclass_code": "V03AN",
          "subclass_name": "Medical gases"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/7456/properties.json"
    },
    {
      "id": "RXNORM:7476",
      "sequence": 652,
      "display_name": "nitroprusside",
      "canonical_name": "nitroprusside",
      "aliases": [
        "nitroprusside"
      ],
      "rxcui": "7476",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C02DD01"
      ],
      "atc_memberships": [
        {
          "code": "C02DD01",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C02DD",
          "subclass_name": "Nitroferricyanide derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/7476/properties.json"
    },
    {
      "id": "RXNORM:7486",
      "sequence": 653,
      "display_name": "nitrous oxide",
      "canonical_name": "nitrous oxide",
      "aliases": [
        "nitrous oxide"
      ],
      "rxcui": "7486",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N01AX13"
      ],
      "atc_memberships": [
        {
          "code": "N01AX13",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N01AX",
          "subclass_name": "Other general anesthetics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/7486/properties.json"
    },
    {
      "id": "RXNORM:42319",
      "sequence": 654,
      "display_name": "nizatidine",
      "canonical_name": "nizatidine",
      "aliases": [
        "nizatidine"
      ],
      "rxcui": "42319",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A02BA04"
      ],
      "atc_memberships": [
        {
          "code": "A02BA04",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A02BA",
          "subclass_name": "H2-receptor antagonists"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/42319/properties.json"
    },
    {
      "id": "RXNORM:2682678",
      "sequence": 655,
      "display_name": "nogapendekin alfa inbakicept",
      "canonical_name": "nogapendekin alfa inbakicept",
      "aliases": [
        "nogapendekin alfa and inbakicept",
        "nogapendekin alfa inbakicept"
      ],
      "rxcui": "2682678",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L03AC03"
      ],
      "atc_memberships": [
        {
          "code": "L03AC03",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L03AC",
          "subclass_name": "Interleukins"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2682678/properties.json"
    },
    {
      "id": "RXNORM:7514",
      "sequence": 656,
      "display_name": "norethindrone",
      "canonical_name": "norethindrone",
      "aliases": [
        "norethindrone",
        "norethisterone"
      ],
      "rxcui": "7514",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "G",
      "primary_group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
      "atc_codes": [
        "G03AC01",
        "G03DC02"
      ],
      "atc_memberships": [
        {
          "code": "G03AC01",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G03AC",
          "subclass_name": "Progestogens"
        },
        {
          "code": "G03DC02",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G03DC",
          "subclass_name": "Estren derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/7514/properties.json"
    },
    {
      "id": "RXNORM:1863556",
      "sequence": 657,
      "display_name": "nusinersen",
      "canonical_name": "nusinersen",
      "aliases": [
        "nusinersen"
      ],
      "rxcui": "1863556",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "M",
      "primary_group_name_tr": "Kas ve iskelet sistemi",
      "atc_codes": [
        "M09AX07"
      ],
      "atc_memberships": [
        {
          "code": "M09AX07",
          "group_code": "M",
          "group_name_tr": "Kas ve iskelet sistemi",
          "subclass_code": "M09AX",
          "subclass_name": "Other drugs for disorders of the musculo-skeletal system"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1863556/properties.json"
    },
    {
      "id": "RXNORM:7597",
      "sequence": 658,
      "display_name": "nystatin",
      "canonical_name": "nystatin",
      "aliases": [
        "nystatin"
      ],
      "rxcui": "7597",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A07AA02",
        "D01AA01",
        "G01AA01"
      ],
      "atc_memberships": [
        {
          "code": "A07AA02",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A07AA",
          "subclass_name": "Antibiotics"
        },
        {
          "code": "D01AA01",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D01AA",
          "subclass_name": "Antibiotics"
        },
        {
          "code": "G01AA01",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G01AA",
          "subclass_name": "Antibiotics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/7597/properties.json"
    },
    {
      "id": "RXNORM:2698195",
      "sequence": 659,
      "display_name": "obecabtagene autoleucel",
      "canonical_name": "obecabtagene autoleucel",
      "aliases": [
        "obecabtagene autoleucel"
      ],
      "rxcui": "2698195",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01XL12"
      ],
      "atc_memberships": [
        {
          "code": "L01XL12",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01XL",
          "subclass_name": "Antineoplastic cell and gene therapy"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2698195/properties.json"
    },
    {
      "id": "RXNORM:1746906",
      "sequence": 660,
      "display_name": "obiltoxaximab",
      "canonical_name": "obiltoxaximab",
      "aliases": [
        "obiltoxaximab"
      ],
      "rxcui": "1746906",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J06BC04"
      ],
      "atc_memberships": [
        {
          "code": "J06BC04",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J06BC",
          "subclass_name": "Antibacterial monoclonal antibodies"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1746906/properties.json"
    },
    {
      "id": "RXNORM:974779",
      "sequence": 661,
      "display_name": "obinutuzumab",
      "canonical_name": "obinutuzumab",
      "aliases": [
        "obinutuzumab"
      ],
      "rxcui": "974779",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01FA03"
      ],
      "atc_memberships": [
        {
          "code": "L01FA03",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01FA",
          "subclass_name": "CD20 (Clusters of Differentiation 20) inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/974779/properties.json"
    },
    {
      "id": "RXNORM:1876366",
      "sequence": 662,
      "display_name": "ocrelizumab",
      "canonical_name": "ocrelizumab",
      "aliases": [
        "ocrelizumab"
      ],
      "rxcui": "1876366",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L04AG08"
      ],
      "atc_memberships": [
        {
          "code": "L04AG08",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L04AG",
          "subclass_name": "Monoclonal antibodies"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1876366/properties.json"
    },
    {
      "id": "RXNORM:7617",
      "sequence": 663,
      "display_name": "octreotide",
      "canonical_name": "octreotide",
      "aliases": [
        "octreotide"
      ],
      "rxcui": "7617",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "H",
      "primary_group_name_tr": "Sistemik hormonlar (cinsiyet hormonları ve insülin hariç)",
      "atc_codes": [
        "H01CB02"
      ],
      "atc_memberships": [
        {
          "code": "H01CB02",
          "group_code": "H",
          "group_name_tr": "Sistemik hormonlar (cinsiyet hormonları ve insülin hariç)",
          "subclass_code": "H01CB",
          "subclass_name": "Somatostatin and analogues"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/7617/properties.json"
    },
    {
      "id": "RXNORM:2563966",
      "sequence": 664,
      "display_name": "odevixibat",
      "canonical_name": "odevixibat",
      "aliases": [
        "odevixibat"
      ],
      "rxcui": "2563966",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A05AX05"
      ],
      "atc_memberships": [
        {
          "code": "A05AX05",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A05AX",
          "subclass_name": "Other drugs for bile therapy"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2563966/properties.json"
    },
    {
      "id": "RXNORM:712566",
      "sequence": 665,
      "display_name": "ofatumumab",
      "canonical_name": "ofatumumab",
      "aliases": [
        "ofatumumab"
      ],
      "rxcui": "712566",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01FA02",
        "L04AG12"
      ],
      "atc_memberships": [
        {
          "code": "L01FA02",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01FA",
          "subclass_name": "CD20 (Clusters of Differentiation 20) inhibitors"
        },
        {
          "code": "L04AG12",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L04AG",
          "subclass_name": "Monoclonal antibodies"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/712566/properties.json"
    },
    {
      "id": "RXNORM:7623",
      "sequence": 666,
      "display_name": "ofloxacin",
      "canonical_name": "ofloxacin",
      "aliases": [
        "ofloxacin"
      ],
      "rxcui": "7623",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J01MA01",
        "S01AE01",
        "S02AA16"
      ],
      "atc_memberships": [
        {
          "code": "J01MA01",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J01MA",
          "subclass_name": "Fluoroquinolones"
        },
        {
          "code": "S01AE01",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01AE",
          "subclass_name": "Fluoroquinolones"
        },
        {
          "code": "S02AA16",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S02AA",
          "subclass_name": "Antiinfectives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/7623/properties.json"
    },
    {
      "id": "RXNORM:61381",
      "sequence": 667,
      "display_name": "olanzapine",
      "canonical_name": "olanzapine",
      "aliases": [
        "olanzapine"
      ],
      "rxcui": "61381",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N05AH03"
      ],
      "atc_memberships": [
        {
          "code": "N05AH03",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N05AH",
          "subclass_name": "Diazepines, oxazepines, thiazepines and oxepines"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/61381/properties.json"
    },
    {
      "id": "RXNORM:2392230",
      "sequence": 668,
      "display_name": "oliceridine",
      "canonical_name": "oliceridine",
      "aliases": [
        "oliceridine"
      ],
      "rxcui": "2392230",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N02AX07"
      ],
      "atc_memberships": [
        {
          "code": "N02AX07",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N02AX",
          "subclass_name": "Other opioids"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2392230/properties.json"
    },
    {
      "id": "RXNORM:1546059",
      "sequence": 669,
      "display_name": "olodaterol",
      "canonical_name": "olodaterol",
      "aliases": [
        "olodaterol"
      ],
      "rxcui": "1546059",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "R",
      "primary_group_name_tr": "Solunum sistemi",
      "atc_codes": [
        "R03AC19"
      ],
      "atc_memberships": [
        {
          "code": "R03AC19",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R03AC",
          "subclass_name": "Selective beta-2-adrenoreceptor agonists"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1546059/properties.json"
    },
    {
      "id": "RXNORM:135391",
      "sequence": 670,
      "display_name": "olopatadine",
      "canonical_name": "olopatadine",
      "aliases": [
        "olopatadine"
      ],
      "rxcui": "135391",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "R",
      "primary_group_name_tr": "Solunum sistemi",
      "atc_codes": [
        "R01AC08",
        "S01GX09"
      ],
      "atc_memberships": [
        {
          "code": "R01AC08",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R01AC",
          "subclass_name": "Antiallergic agents, excl. corticosteroids"
        },
        {
          "code": "S01GX09",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01GX",
          "subclass_name": "Other antiallergics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/135391/properties.json"
    },
    {
      "id": "RXNORM:32385",
      "sequence": 671,
      "display_name": "olsalazine",
      "canonical_name": "olsalazine",
      "aliases": [
        "olsalazine"
      ],
      "rxcui": "32385",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A07EC03"
      ],
      "atc_memberships": [
        {
          "code": "A07EC03",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A07EC",
          "subclass_name": "Aminosalicylic acid and similar agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/32385/properties.json"
    },
    {
      "id": "RXNORM:2623641",
      "sequence": 672,
      "display_name": "olutasidenib",
      "canonical_name": "olutasidenib",
      "aliases": [
        "olutasidenib"
      ],
      "rxcui": "2623641",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01XM03"
      ],
      "atc_memberships": [
        {
          "code": "L01XM03",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01XM",
          "subclass_name": "Isocitrate dehydrogenase (IDH) inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2623641/properties.json"
    },
    {
      "id": "RXNORM:27100",
      "sequence": 673,
      "display_name": "omacetaxine mepesuccinate",
      "canonical_name": "omacetaxine mepesuccinate",
      "aliases": [
        "omacetaxine mepesuccinate"
      ],
      "rxcui": "27100",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01XX40"
      ],
      "atc_memberships": [
        {
          "code": "L01XX40",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01XX",
          "subclass_name": "Other antineoplastic agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/27100/properties.json"
    },
    {
      "id": "RXNORM:2059269",
      "sequence": 674,
      "display_name": "omadacycline",
      "canonical_name": "omadacycline",
      "aliases": [
        "omadacycline"
      ],
      "rxcui": "2059269",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J01AA15"
      ],
      "atc_memberships": [
        {
          "code": "J01AA15",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J01AA",
          "subclass_name": "Tetracyclines"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2059269/properties.json"
    },
    {
      "id": "RXNORM:302379",
      "sequence": 675,
      "display_name": "omalizumab",
      "canonical_name": "omalizumab",
      "aliases": [
        "omalizumab"
      ],
      "rxcui": "302379",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "R",
      "primary_group_name_tr": "Solunum sistemi",
      "atc_codes": [
        "R03DX05"
      ],
      "atc_memberships": [
        {
          "code": "R03DX05",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R03DX",
          "subclass_name": "Other systemic drugs for obstructive airway diseases"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/302379/properties.json"
    },
    {
      "id": "RXNORM:7646",
      "sequence": 676,
      "display_name": "Omeprazol",
      "canonical_name": "omeprazole",
      "aliases": [
        "Omeprazol",
        "omeprazole"
      ],
      "rxcui": "7646",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A02BC01"
      ],
      "atc_memberships": [
        {
          "code": "A02BC01",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A02BC",
          "subclass_name": "Proton pump inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/7646/properties.json"
    },
    {
      "id": "RXNORM:2612691",
      "sequence": 677,
      "display_name": "omidenepag",
      "canonical_name": "omidenepag",
      "aliases": [
        "omidenepag"
      ],
      "rxcui": "2612691",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "S",
      "primary_group_name_tr": "Duyu organları",
      "atc_codes": [
        "S01EX06"
      ],
      "atc_memberships": [
        {
          "code": "S01EX06",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01EX",
          "subclass_name": "Other antiglaucoma preparations"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2612691/properties.json"
    },
    {
      "id": "RXNORM:2170226",
      "sequence": 678,
      "display_name": "onasemnogene abeparvovec",
      "canonical_name": "onasemnogene abeparvovec",
      "aliases": [
        "onasemnogene abeparvovec"
      ],
      "rxcui": "2170226",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "M",
      "primary_group_name_tr": "Kas ve iskelet sistemi",
      "atc_codes": [
        "M09AX09"
      ],
      "atc_memberships": [
        {
          "code": "M09AX09",
          "group_code": "M",
          "group_name_tr": "Kas ve iskelet sistemi",
          "subclass_code": "M09AX",
          "subclass_name": "Other drugs for disorders of the musculo-skeletal system"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2170226/properties.json"
    },
    {
      "id": "RXNORM:26225",
      "sequence": 679,
      "display_name": "Ondansetron",
      "canonical_name": "ondansetron",
      "aliases": [
        "ondansetron",
        "Ondansetron"
      ],
      "rxcui": "26225",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A04AA01"
      ],
      "atc_memberships": [
        {
          "code": "A04AA01",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A04AA",
          "subclass_name": "Serotonin (5HT3) antagonists"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/26225/properties.json"
    },
    {
      "id": "RXNORM:7676",
      "sequence": 680,
      "display_name": "opium",
      "canonical_name": "opium",
      "aliases": [
        "opium"
      ],
      "rxcui": "7676",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A07DA02",
        "N02AA02"
      ],
      "atc_memberships": [
        {
          "code": "A07DA02",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A07DA",
          "subclass_name": "Antipropulsives"
        },
        {
          "code": "N02AA02",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N02AA",
          "subclass_name": "Natural opium alkaloids"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/7676/properties.json"
    },
    {
      "id": "RXNORM:139994",
      "sequence": 681,
      "display_name": "oprelvekin",
      "canonical_name": "oprelvekin",
      "aliases": [
        "oprelvekin"
      ],
      "rxcui": "139994",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L03AC02"
      ],
      "atc_memberships": [
        {
          "code": "L03AC02",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L03AC",
          "subclass_name": "Interleukins"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/139994/properties.json"
    },
    {
      "id": "RXNORM:1547611",
      "sequence": 682,
      "display_name": "oritavancin",
      "canonical_name": "oritavancin",
      "aliases": [
        "oritavancin"
      ],
      "rxcui": "1547611",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J01XA05"
      ],
      "atc_memberships": [
        {
          "code": "J01XA05",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J01XA",
          "subclass_name": "Glycopeptide antibacterials"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1547611/properties.json"
    },
    {
      "id": "RXNORM:37925",
      "sequence": 683,
      "display_name": "orlistat",
      "canonical_name": "orlistat",
      "aliases": [
        "orlistat"
      ],
      "rxcui": "37925",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A08AB01"
      ],
      "atc_memberships": [
        {
          "code": "A08AB01",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A08AB",
          "subclass_name": "Peripherally acting antiobesity products"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/37925/properties.json"
    },
    {
      "id": "RXNORM:2286252",
      "sequence": 684,
      "display_name": "osilodrostat",
      "canonical_name": "osilodrostat",
      "aliases": [
        "osilodrostat"
      ],
      "rxcui": "2286252",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "H",
      "primary_group_name_tr": "Sistemik hormonlar (cinsiyet hormonları ve insülin hariç)",
      "atc_codes": [
        "H02CA02"
      ],
      "atc_memberships": [
        {
          "code": "H02CA02",
          "group_code": "H",
          "group_name_tr": "Sistemik hormonlar (cinsiyet hormonları ve insülin hariç)",
          "subclass_code": "H02CA",
          "subclass_name": "Anticorticosteroids"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2286252/properties.json"
    },
    {
      "id": "RXNORM:1721560",
      "sequence": 685,
      "display_name": "osimertinib",
      "canonical_name": "osimertinib",
      "aliases": [
        "osimertinib"
      ],
      "rxcui": "1721560",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01EB04"
      ],
      "atc_memberships": [
        {
          "code": "L01EB04",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01EB",
          "subclass_name": "Epidermal growth factor receptor (EGFR) tyrosine kinase inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1721560/properties.json"
    },
    {
      "id": "RXNORM:2602577",
      "sequence": 686,
      "display_name": "oteseconazole",
      "canonical_name": "oteseconazole",
      "aliases": [
        "oteseconazole"
      ],
      "rxcui": "2602577",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J02AC06"
      ],
      "atc_memberships": [
        {
          "code": "J02AC06",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J02AC",
          "subclass_name": "Triazole and tetrazole derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2602577/properties.json"
    },
    {
      "id": "RXNORM:28068",
      "sequence": 687,
      "display_name": "oxaceprol",
      "canonical_name": "oxaceprol",
      "aliases": [
        "oxaceprol"
      ],
      "rxcui": "28068",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D11AX09",
        "M01AX24"
      ],
      "atc_memberships": [
        {
          "code": "D11AX09",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D11AX",
          "subclass_name": "Other dermatologicals"
        },
        {
          "code": "M01AX24",
          "group_code": "M",
          "group_name_tr": "Kas ve iskelet sistemi",
          "subclass_code": "M01AX",
          "subclass_name": "Other antiinflammatory and antirheumatic agents, non-steroids"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/28068/properties.json"
    },
    {
      "id": "RXNORM:7773",
      "sequence": 688,
      "display_name": "oxacillin",
      "canonical_name": "oxacillin",
      "aliases": [
        "oxacillin"
      ],
      "rxcui": "7773",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J01CF04"
      ],
      "atc_memberships": [
        {
          "code": "J01CF04",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J01CF",
          "subclass_name": "Beta-lactamase resistant penicillins"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/7773/properties.json"
    },
    {
      "id": "RXNORM:32592",
      "sequence": 689,
      "display_name": "oxaliplatin",
      "canonical_name": "oxaliplatin",
      "aliases": [
        "oxaliplatin"
      ],
      "rxcui": "32592",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01XA03"
      ],
      "atc_memberships": [
        {
          "code": "L01XA03",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01XA",
          "subclass_name": "Platinum compounds"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/32592/properties.json"
    },
    {
      "id": "RXNORM:7779",
      "sequence": 690,
      "display_name": "oxandrolone",
      "canonical_name": "oxandrolone",
      "aliases": [
        "oxandrolone"
      ],
      "rxcui": "7779",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A14AA08"
      ],
      "atc_memberships": [
        {
          "code": "A14AA08",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A14AA",
          "subclass_name": "Androstan derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/7779/properties.json"
    },
    {
      "id": "RXNORM:7781",
      "sequence": 691,
      "display_name": "oxazepam",
      "canonical_name": "oxazepam",
      "aliases": [
        "oxazepam"
      ],
      "rxcui": "7781",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N05BA04"
      ],
      "atc_memberships": [
        {
          "code": "N05BA04",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N05BA",
          "subclass_name": "Benzodiazepine derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/7781/properties.json"
    },
    {
      "id": "RXNORM:32624",
      "sequence": 692,
      "display_name": "oxcarbazepine",
      "canonical_name": "oxcarbazepine",
      "aliases": [
        "oxcarbazepine"
      ],
      "rxcui": "32624",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N03AF02"
      ],
      "atc_memberships": [
        {
          "code": "N03AF02",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N03AF",
          "subclass_name": "Carboxamide derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/32624/properties.json"
    },
    {
      "id": "RXNORM:7798",
      "sequence": 693,
      "display_name": "oxolinic acid",
      "canonical_name": "oxolinic acid",
      "aliases": [
        "oxolinic acid"
      ],
      "rxcui": "7798",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J01MB05"
      ],
      "atc_memberships": [
        {
          "code": "J01MB05",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J01MB",
          "subclass_name": "Other quinolones"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/7798/properties.json"
    },
    {
      "id": "RXNORM:7814",
      "sequence": 694,
      "display_name": "oxymorphone",
      "canonical_name": "oxymorphone",
      "aliases": [
        "oxymorphone"
      ],
      "rxcui": "7814",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N02AA11"
      ],
      "atc_memberships": [
        {
          "code": "N02AA11",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N02AA",
          "subclass_name": "Natural opium alkaloids"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/7814/properties.json"
    },
    {
      "id": "RXNORM:110",
      "sequence": 695,
      "display_name": "oxyquinoline",
      "canonical_name": "oxyquinoline",
      "aliases": [
        "oxyquinoline"
      ],
      "rxcui": "110",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A01AB07",
        "D08AH03",
        "G01AC30",
        "R02AA14"
      ],
      "atc_memberships": [
        {
          "code": "A01AB07",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A01AB",
          "subclass_name": "Antiinfectives and antiseptics for local oral treatment"
        },
        {
          "code": "D08AH03",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D08AH",
          "subclass_name": "Quinoline derivatives"
        },
        {
          "code": "G01AC30",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G01AC",
          "subclass_name": "Quinoline derivatives"
        },
        {
          "code": "R02AA14",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R02AA",
          "subclass_name": "Antiseptics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/110/properties.json"
    },
    {
      "id": "RXNORM:2288236",
      "sequence": 696,
      "display_name": "ozanimod",
      "canonical_name": "ozanimod",
      "aliases": [
        "ozanimod"
      ],
      "rxcui": "2288236",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L04AE02"
      ],
      "atc_memberships": [
        {
          "code": "L04AE02",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L04AE",
          "subclass_name": "Sphingosine-1-phosphate (S1P) receptor modulators"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2288236/properties.json"
    },
    {
      "id": "RXNORM:56946",
      "sequence": 697,
      "display_name": "paclitaxel",
      "canonical_name": "paclitaxel",
      "aliases": [
        "paclitaxel"
      ],
      "rxcui": "56946",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01CD01"
      ],
      "atc_memberships": [
        {
          "code": "L01CD01",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01CD",
          "subclass_name": "Taxanes"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/56946/properties.json"
    },
    {
      "id": "RXNORM:2595243",
      "sequence": 698,
      "display_name": "pacritinib",
      "canonical_name": "pacritinib",
      "aliases": [
        "pacritinib"
      ],
      "rxcui": "2595243",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01EJ03"
      ],
      "atc_memberships": [
        {
          "code": "L01EJ03",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01EJ",
          "subclass_name": "Janus-associated kinase (JAK) inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2595243/properties.json"
    },
    {
      "id": "RXNORM:2586857",
      "sequence": 699,
      "display_name": "pafolacianine",
      "canonical_name": "pafolacianine",
      "aliases": [
        "pafolacianine"
      ],
      "rxcui": "2586857",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "V",
      "primary_group_name_tr": "Diğer maddeler",
      "atc_codes": [
        "V04CX10"
      ],
      "atc_memberships": [
        {
          "code": "V04CX10",
          "group_code": "V",
          "group_name_tr": "Diğer maddeler",
          "subclass_code": "V04CX",
          "subclass_name": "Other diagnostic agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2586857/properties.json"
    },
    {
      "id": "RXNORM:2663954",
      "sequence": 700,
      "display_name": "palovarotene",
      "canonical_name": "palovarotene",
      "aliases": [
        "palovarotene"
      ],
      "rxcui": "2663954",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "M",
      "primary_group_name_tr": "Kas ve iskelet sistemi",
      "atc_codes": [
        "M09AX11"
      ],
      "atc_memberships": [
        {
          "code": "M09AX11",
          "group_code": "M",
          "group_name_tr": "Kas ve iskelet sistemi",
          "subclass_code": "M09AX",
          "subclass_name": "Other drugs for disorders of the musculo-skeletal system"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2663954/properties.json"
    },
    {
      "id": "RXNORM:2724363",
      "sequence": 701,
      "display_name": "paltusotine",
      "canonical_name": "paltusotine",
      "aliases": [
        "paltusotine"
      ],
      "rxcui": "2724363",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "H",
      "primary_group_name_tr": "Sistemik hormonlar (cinsiyet hormonları ve insülin hariç)",
      "atc_codes": [
        "H01CB06"
      ],
      "atc_memberships": [
        {
          "code": "H01CB06",
          "group_code": "H",
          "group_name_tr": "Sistemik hormonlar (cinsiyet hormonları ve insülin hariç)",
          "subclass_code": "H01CB",
          "subclass_name": "Somatostatin and analogues"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2724363/properties.json"
    },
    {
      "id": "RXNORM:40790",
      "sequence": 702,
      "display_name": "Pantoprazol",
      "canonical_name": "pantoprazole",
      "aliases": [
        "Pantoprazol",
        "pantoprazole"
      ],
      "rxcui": "40790",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A02BC02"
      ],
      "atc_memberships": [
        {
          "code": "A02BC02",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A02BC",
          "subclass_name": "Proton pump inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/40790/properties.json"
    },
    {
      "id": "RXNORM:7895",
      "sequence": 703,
      "display_name": "papaverine",
      "canonical_name": "papaverine",
      "aliases": [
        "papaverine"
      ],
      "rxcui": "7895",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A03AD01",
        "G04BE02"
      ],
      "atc_memberships": [
        {
          "code": "A03AD01",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A03AD",
          "subclass_name": "Papaverine and derivatives"
        },
        {
          "code": "G04BE02",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G04BE",
          "subclass_name": "Drugs used in erectile dysfunction"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/7895/properties.json"
    },
    {
      "id": "RXNORM:1427222",
      "sequence": 704,
      "display_name": "parathyroid hormone",
      "canonical_name": "parathyroid hormone",
      "aliases": [
        "parathyroid hormone"
      ],
      "rxcui": "1427222",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "H",
      "primary_group_name_tr": "Sistemik hormonlar (cinsiyet hormonları ve insülin hariç)",
      "atc_codes": [
        "H05AA03"
      ],
      "atc_memberships": [
        {
          "code": "H05AA03",
          "group_code": "H",
          "group_name_tr": "Sistemik hormonlar (cinsiyet hormonları ve insülin hariç)",
          "subclass_code": "H05AA",
          "subclass_name": "Parathyroid hormones and analogues"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1427222/properties.json"
    },
    {
      "id": "RXNORM:73710",
      "sequence": 705,
      "display_name": "paricalcitol",
      "canonical_name": "paricalcitol",
      "aliases": [
        "paricalcitol"
      ],
      "rxcui": "73710",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "H",
      "primary_group_name_tr": "Sistemik hormonlar (cinsiyet hormonları ve insülin hariç)",
      "atc_codes": [
        "H05BX02"
      ],
      "atc_memberships": [
        {
          "code": "H05BX02",
          "group_code": "H",
          "group_name_tr": "Sistemik hormonlar (cinsiyet hormonları ve insülin hariç)",
          "subclass_code": "H05BX",
          "subclass_name": "Other anti-parathyroid agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/73710/properties.json"
    },
    {
      "id": "RXNORM:1364105",
      "sequence": 706,
      "display_name": "pasireotide",
      "canonical_name": "pasireotide",
      "aliases": [
        "pasireotide"
      ],
      "rxcui": "1364105",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "H",
      "primary_group_name_tr": "Sistemik hormonlar (cinsiyet hormonları ve insülin hariç)",
      "atc_codes": [
        "H01CB05"
      ],
      "atc_memberships": [
        {
          "code": "H01CB05",
          "group_code": "H",
          "group_name_tr": "Sistemik hormonlar (cinsiyet hormonları ve insülin hariç)",
          "subclass_code": "H01CB",
          "subclass_name": "Somatostatin and analogues"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1364105/properties.json"
    },
    {
      "id": "RXNORM:2053490",
      "sequence": 707,
      "display_name": "patisiran",
      "canonical_name": "patisiran",
      "aliases": [
        "patisiran"
      ],
      "rxcui": "2053490",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N07XX12"
      ],
      "atc_memberships": [
        {
          "code": "N07XX12",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N07XX",
          "subclass_name": "Other nervous system drugs"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2053490/properties.json"
    },
    {
      "id": "RXNORM:32987",
      "sequence": 708,
      "display_name": "pectin",
      "canonical_name": "pectin",
      "aliases": [
        "pectin"
      ],
      "rxcui": "32987",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A07BC01"
      ],
      "atc_memberships": [
        {
          "code": "A07BC01",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A07BC",
          "subclass_name": "Other intestinal adsorbents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/32987/properties.json"
    },
    {
      "id": "RXNORM:34132",
      "sequence": 709,
      "display_name": "pegaspargase",
      "canonical_name": "pegaspargase",
      "aliases": [
        "pegaspargase"
      ],
      "rxcui": "34132",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01XX24"
      ],
      "atc_memberships": [
        {
          "code": "L01XX24",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01XX",
          "subclass_name": "Other antineoplastic agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/34132/properties.json"
    },
    {
      "id": "RXNORM:1011650",
      "sequence": 710,
      "display_name": "pegloticase",
      "canonical_name": "pegloticase",
      "aliases": [
        "pegloticase"
      ],
      "rxcui": "1011650",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "M",
      "primary_group_name_tr": "Kas ve iskelet sistemi",
      "atc_codes": [
        "M04AX02"
      ],
      "atc_memberships": [
        {
          "code": "M04AX02",
          "group_code": "M",
          "group_name_tr": "Kas ve iskelet sistemi",
          "subclass_code": "M04AX",
          "subclass_name": "Other antigout preparations"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1011650/properties.json"
    },
    {
      "id": "RXNORM:2046360",
      "sequence": 711,
      "display_name": "pegvaliase",
      "canonical_name": "pegvaliase",
      "aliases": [
        "pegvaliase"
      ],
      "rxcui": "2046360",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A16AB19"
      ],
      "atc_memberships": [
        {
          "code": "A16AB19",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A16AB",
          "subclass_name": "Enzymes"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2046360/properties.json"
    },
    {
      "id": "RXNORM:278739",
      "sequence": 712,
      "display_name": "pegvisomant",
      "canonical_name": "pegvisomant",
      "aliases": [
        "pegvisomant"
      ],
      "rxcui": "278739",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "H",
      "primary_group_name_tr": "Sistemik hormonlar (cinsiyet hormonları ve insülin hariç)",
      "atc_codes": [
        "H01AX01"
      ],
      "atc_memberships": [
        {
          "code": "H01AX01",
          "group_code": "H",
          "group_name_tr": "Sistemik hormonlar (cinsiyet hormonları ve insülin hariç)",
          "subclass_code": "H01AX",
          "subclass_name": "Other anterior pituitary lobe hormones and analogues"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/278739/properties.json"
    },
    {
      "id": "RXNORM:2738648",
      "sequence": 713,
      "display_name": "pegzilarginase",
      "canonical_name": "pegzilarginase",
      "aliases": [
        "pegzilarginase"
      ],
      "rxcui": "2738648",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A16AB24"
      ],
      "atc_memberships": [
        {
          "code": "A16AB24",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A16AB",
          "subclass_name": "Enzymes"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2738648/properties.json"
    },
    {
      "id": "RXNORM:1547545",
      "sequence": 714,
      "display_name": "pembrolizumab",
      "canonical_name": "pembrolizumab",
      "aliases": [
        "pembrolizumab"
      ],
      "rxcui": "1547545",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01FF02"
      ],
      "atc_memberships": [
        {
          "code": "L01FF02",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01FF",
          "subclass_name": "PD-1/PD-L1 (Programmed cell death protein 1/death ligand 1) inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1547545/properties.json"
    },
    {
      "id": "RXNORM:68446",
      "sequence": 715,
      "display_name": "pemetrexed",
      "canonical_name": "pemetrexed",
      "aliases": [
        "pemetrexed"
      ],
      "rxcui": "68446",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01BA04"
      ],
      "atc_memberships": [
        {
          "code": "L01BA04",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01BA",
          "subclass_name": "Folic acid analogues"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/68446/properties.json"
    },
    {
      "id": "RXNORM:2359268",
      "sequence": 716,
      "display_name": "pemigatinib",
      "canonical_name": "pemigatinib",
      "aliases": [
        "pemigatinib"
      ],
      "rxcui": "2359268",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01EN02"
      ],
      "atc_memberships": [
        {
          "code": "L01EN02",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01EN",
          "subclass_name": "Fibroblast growth factor receptor (FGFR) tyrosine kinase inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2359268/properties.json"
    },
    {
      "id": "RXNORM:7975",
      "sequence": 717,
      "display_name": "penicillamine",
      "canonical_name": "penicillamine",
      "aliases": [
        "penicillamine"
      ],
      "rxcui": "7975",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "M",
      "primary_group_name_tr": "Kas ve iskelet sistemi",
      "atc_codes": [
        "M01CC01"
      ],
      "atc_memberships": [
        {
          "code": "M01CC01",
          "group_code": "M",
          "group_name_tr": "Kas ve iskelet sistemi",
          "subclass_code": "M01CC",
          "subclass_name": "Penicillamine and similar agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/7975/properties.json"
    },
    {
      "id": "RXNORM:7984",
      "sequence": 718,
      "display_name": "penicillin V",
      "canonical_name": "penicillin V",
      "aliases": [
        "penicillin V",
        "phenoxymethylpenicillin"
      ],
      "rxcui": "7984",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J01CE02"
      ],
      "atc_memberships": [
        {
          "code": "J01CE02",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J01CE",
          "subclass_name": "Beta-lactamase sensitive penicillins"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/7984/properties.json"
    },
    {
      "id": "RXNORM:8013",
      "sequence": 719,
      "display_name": "pentoxifylline",
      "canonical_name": "pentoxifylline",
      "aliases": [
        "pentoxifylline"
      ],
      "rxcui": "8013",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C04AD03"
      ],
      "atc_memberships": [
        {
          "code": "C04AD03",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C04AD",
          "subclass_name": "Purine derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/8013/properties.json"
    },
    {
      "id": "RXNORM:33094",
      "sequence": 720,
      "display_name": "peppermint oil",
      "canonical_name": "peppermint oil",
      "aliases": [
        "menthae piperitae aetheroleum",
        "peppermint oil"
      ],
      "rxcui": "33094",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A03AX15"
      ],
      "atc_memberships": [
        {
          "code": "A03AX15",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A03AX",
          "subclass_name": "Other drugs for functional gastrointestinal disorders"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/33094/properties.json"
    },
    {
      "id": "RXNORM:2183102",
      "sequence": 721,
      "display_name": "pexidartinib",
      "canonical_name": "pexidartinib",
      "aliases": [
        "pexidartinib"
      ],
      "rxcui": "2183102",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01EX15"
      ],
      "atc_memberships": [
        {
          "code": "L01EX15",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01EX",
          "subclass_name": "Other protein kinase inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2183102/properties.json"
    },
    {
      "id": "RXNORM:8123",
      "sequence": 722,
      "display_name": "phenelzine",
      "canonical_name": "phenelzine",
      "aliases": [
        "phenelzine"
      ],
      "rxcui": "8123",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N06AF03"
      ],
      "atc_memberships": [
        {
          "code": "N06AF03",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N06AF",
          "subclass_name": "Monoamine oxidase inhibitors, non-selective"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/8123/properties.json"
    },
    {
      "id": "RXNORM:8132",
      "sequence": 723,
      "display_name": "pheniramine",
      "canonical_name": "pheniramine",
      "aliases": [
        "pheniramine"
      ],
      "rxcui": "8132",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D04AA16",
        "R06AB05"
      ],
      "atc_memberships": [
        {
          "code": "D04AA16",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D04AA",
          "subclass_name": "Antihistamines for topical use"
        },
        {
          "code": "R06AB05",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R06AB",
          "subclass_name": "Substituted alkylamines"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/8132/properties.json"
    },
    {
      "id": "RXNORM:8141",
      "sequence": 724,
      "display_name": "phenolsulfonphthalein",
      "canonical_name": "phenolsulfonphthalein",
      "aliases": [
        "phenolsulfonphthalein"
      ],
      "rxcui": "8141",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "V",
      "primary_group_name_tr": "Diğer maddeler",
      "atc_codes": [
        "V04CH03"
      ],
      "atc_memberships": [
        {
          "code": "V04CH03",
          "group_code": "V",
          "group_name_tr": "Diğer maddeler",
          "subclass_code": "V04CH",
          "subclass_name": "Tests for renal function and ureteral injuries"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/8141/properties.json"
    },
    {
      "id": "RXNORM:8149",
      "sequence": 725,
      "display_name": "phenoxybenzamine",
      "canonical_name": "phenoxybenzamine",
      "aliases": [
        "phenoxybenzamine"
      ],
      "rxcui": "8149",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C04AX02"
      ],
      "atc_memberships": [
        {
          "code": "C04AX02",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C04AX",
          "subclass_name": "Other peripheral vasodilators"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/8149/properties.json"
    },
    {
      "id": "RXNORM:89722",
      "sequence": 726,
      "display_name": "phenylmercuric nitrate",
      "canonical_name": "phenylmercuric nitrate",
      "aliases": [
        "phenylmercuric nitrate"
      ],
      "rxcui": "89722",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D09AA04"
      ],
      "atc_memberships": [
        {
          "code": "D09AA04",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D09AA",
          "subclass_name": "Medicated dressings with antiinfectives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/89722/properties.json"
    },
    {
      "id": "RXNORM:8183",
      "sequence": 727,
      "display_name": "phenytoin",
      "canonical_name": "phenytoin",
      "aliases": [
        "phenytoin"
      ],
      "rxcui": "8183",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N03AB02"
      ],
      "atc_memberships": [
        {
          "code": "N03AB02",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N03AB",
          "subclass_name": "Hydantoin derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/8183/properties.json"
    },
    {
      "id": "RXNORM:1791685",
      "sequence": 728,
      "display_name": "pimavanserin",
      "canonical_name": "pimavanserin",
      "aliases": [
        "pimavanserin"
      ],
      "rxcui": "1791685",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N05AX17"
      ],
      "atc_memberships": [
        {
          "code": "N05AX17",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N05AX",
          "subclass_name": "Other antipsychotics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1791685/properties.json"
    },
    {
      "id": "RXNORM:8331",
      "sequence": 729,
      "display_name": "pimozide",
      "canonical_name": "pimozide",
      "aliases": [
        "pimozide"
      ],
      "rxcui": "8331",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N05AG02"
      ],
      "atc_memberships": [
        {
          "code": "N05AG02",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N05AG",
          "subclass_name": "Diphenylbutylpiperidine derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/8331/properties.json"
    },
    {
      "id": "RXNORM:8332",
      "sequence": 730,
      "display_name": "pindolol",
      "canonical_name": "pindolol",
      "aliases": [
        "pindolol"
      ],
      "rxcui": "8332",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C07AA03"
      ],
      "atc_memberships": [
        {
          "code": "C07AA03",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C07AA",
          "subclass_name": "Beta blocking agents, non-selective"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/8332/properties.json"
    },
    {
      "id": "RXNORM:8339",
      "sequence": 731,
      "display_name": "piperacillin",
      "canonical_name": "piperacillin",
      "aliases": [
        "piperacillin"
      ],
      "rxcui": "8339",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J01CA12"
      ],
      "atc_memberships": [
        {
          "code": "J01CA12",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J01CA",
          "subclass_name": "Penicillins with extended spectrum"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/8339/properties.json"
    },
    {
      "id": "RXNORM:8340",
      "sequence": 732,
      "display_name": "piperazine",
      "canonical_name": "piperazine",
      "aliases": [
        "piperazine"
      ],
      "rxcui": "8340",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "P",
      "primary_group_name_tr": "Antiparaziter maddeler, insektisitler ve repellentler",
      "atc_codes": [
        "P02CB01"
      ],
      "atc_memberships": [
        {
          "code": "P02CB01",
          "group_code": "P",
          "group_name_tr": "Antiparaziter maddeler, insektisitler ve repellentler",
          "subclass_code": "P02CB",
          "subclass_name": "Piperazine and derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/8340/properties.json"
    },
    {
      "id": "RXNORM:1592254",
      "sequence": 733,
      "display_name": "pirfenidone",
      "canonical_name": "pirfenidone",
      "aliases": [
        "pirfenidone"
      ],
      "rxcui": "1592254",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L04AX05"
      ],
      "atc_memberships": [
        {
          "code": "L04AX05",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L04AX",
          "subclass_name": "Other immunosuppressants"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1592254/properties.json"
    },
    {
      "id": "RXNORM:8356",
      "sequence": 734,
      "display_name": "Piroksikam",
      "canonical_name": "piroxicam",
      "aliases": [
        "Piroksikam",
        "piroxicam"
      ],
      "rxcui": "8356",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "M",
      "primary_group_name_tr": "Kas ve iskelet sistemi",
      "atc_codes": [
        "M01AC01",
        "M02AA07",
        "S01BC06"
      ],
      "atc_memberships": [
        {
          "code": "M01AC01",
          "group_code": "M",
          "group_name_tr": "Kas ve iskelet sistemi",
          "subclass_code": "M01AC",
          "subclass_name": "Oxicams"
        },
        {
          "code": "M02AA07",
          "group_code": "M",
          "group_name_tr": "Kas ve iskelet sistemi",
          "subclass_code": "M02AA",
          "subclass_name": "Antiinflammatory preparations, non-steroids for topical use"
        },
        {
          "code": "S01BC06",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01BC",
          "subclass_name": "Antiinflammatory agents, non-steroids"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/8356/properties.json"
    },
    {
      "id": "RXNORM:2629338",
      "sequence": 735,
      "display_name": "pirtobrutinib",
      "canonical_name": "pirtobrutinib",
      "aliases": [
        "pirtobrutinib"
      ],
      "rxcui": "2629338",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01EL05"
      ],
      "atc_memberships": [
        {
          "code": "L01EL05",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01EL",
          "subclass_name": "Bruton's tyrosine kinase (BTK) inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2629338/properties.json"
    },
    {
      "id": "RXNORM:733003",
      "sequence": 736,
      "display_name": "plerixafor",
      "canonical_name": "plerixafor",
      "aliases": [
        "plerixafor"
      ],
      "rxcui": "733003",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L03AX16"
      ],
      "atc_memberships": [
        {
          "code": "L03AX16",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L03AX",
          "subclass_name": "Other immunostimulants"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/733003/properties.json"
    },
    {
      "id": "RXNORM:2174090",
      "sequence": 737,
      "display_name": "polatuzumab vedotin",
      "canonical_name": "polatuzumab vedotin",
      "aliases": [
        "polatuzumab vedotin"
      ],
      "rxcui": "2174090",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01FX14"
      ],
      "atc_memberships": [
        {
          "code": "L01FX14",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01FX",
          "subclass_name": "Other monoclonal antibodies and antibody drug conjugates"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2174090/properties.json"
    },
    {
      "id": "RXNORM:8536",
      "sequence": 738,
      "display_name": "polymyxin B",
      "canonical_name": "polymyxin B",
      "aliases": [
        "polymyxin B"
      ],
      "rxcui": "8536",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A07AA05",
        "J01XB02",
        "S01AA18",
        "S02AA11",
        "S03AA03"
      ],
      "atc_memberships": [
        {
          "code": "A07AA05",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A07AA",
          "subclass_name": "Antibiotics"
        },
        {
          "code": "J01XB02",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J01XB",
          "subclass_name": "Polymyxins"
        },
        {
          "code": "S01AA18",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01AA",
          "subclass_name": "Antibiotics"
        },
        {
          "code": "S02AA11",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S02AA",
          "subclass_name": "Antiinfectives"
        },
        {
          "code": "S03AA03",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S03AA",
          "subclass_name": "Antiinfectives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/8536/properties.json"
    },
    {
      "id": "RXNORM:1369713",
      "sequence": 739,
      "display_name": "pomalidomide",
      "canonical_name": "pomalidomide",
      "aliases": [
        "pomalidomide"
      ],
      "rxcui": "1369713",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L04AX06"
      ],
      "atc_memberships": [
        {
          "code": "L04AX06",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L04AX",
          "subclass_name": "Other immunosuppressants"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1369713/properties.json"
    },
    {
      "id": "RXNORM:282446",
      "sequence": 740,
      "display_name": "posaconazole",
      "canonical_name": "posaconazole",
      "aliases": [
        "posaconazole"
      ],
      "rxcui": "282446",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J02AC04"
      ],
      "atc_memberships": [
        {
          "code": "J02AC04",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J02AC",
          "subclass_name": "Triazole and tetrazole derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/282446/properties.json"
    },
    {
      "id": "RXNORM:54987",
      "sequence": 741,
      "display_name": "potassium acetate",
      "canonical_name": "potassium acetate",
      "aliases": [
        "potassium acetate"
      ],
      "rxcui": "54987",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B05XA17"
      ],
      "atc_memberships": [
        {
          "code": "B05XA17",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B05XA",
          "subclass_name": "Electrolyte solutions"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/54987/properties.json"
    },
    {
      "id": "RXNORM:34296",
      "sequence": 742,
      "display_name": "potassium bicarbonate",
      "canonical_name": "potassium bicarbonate",
      "aliases": [
        "potassium bicarbonate",
        "potassium hydrogencarbonate"
      ],
      "rxcui": "34296",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A12BA04"
      ],
      "atc_memberships": [
        {
          "code": "A12BA04",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A12BA",
          "subclass_name": "Potassium"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/34296/properties.json"
    },
    {
      "id": "RXNORM:8591",
      "sequence": 743,
      "display_name": "potassium chloride",
      "canonical_name": "potassium chloride",
      "aliases": [
        "potassium chloride"
      ],
      "rxcui": "8591",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A12BA01",
        "B05XA01"
      ],
      "atc_memberships": [
        {
          "code": "A12BA01",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A12BA",
          "subclass_name": "Potassium"
        },
        {
          "code": "B05XA01",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B05XA",
          "subclass_name": "Electrolyte solutions"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/8591/properties.json"
    },
    {
      "id": "RXNORM:89903",
      "sequence": 744,
      "display_name": "potassium gluconate",
      "canonical_name": "potassium gluconate",
      "aliases": [
        "potassium gluconate"
      ],
      "rxcui": "89903",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A12BA05"
      ],
      "atc_memberships": [
        {
          "code": "A12BA05",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A12BA",
          "subclass_name": "Potassium"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/89903/properties.json"
    },
    {
      "id": "RXNORM:8597",
      "sequence": 745,
      "display_name": "potassium iodide",
      "canonical_name": "potassium iodide",
      "aliases": [
        "potassium iodide"
      ],
      "rxcui": "8597",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "R",
      "primary_group_name_tr": "Solunum sistemi",
      "atc_codes": [
        "R05CA02",
        "S01XA04",
        "V03AB21"
      ],
      "atc_memberships": [
        {
          "code": "R05CA02",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R05CA",
          "subclass_name": "Expectorants"
        },
        {
          "code": "S01XA04",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01XA",
          "subclass_name": "Other ophthalmologicals"
        },
        {
          "code": "V03AB21",
          "group_code": "V",
          "group_name_tr": "Diğer maddeler",
          "subclass_code": "V03AB",
          "subclass_name": "Antidotes"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/8597/properties.json"
    },
    {
      "id": "RXNORM:8611",
      "sequence": 746,
      "display_name": "povidone-iodine",
      "canonical_name": "povidone-iodine",
      "aliases": [
        "povidone-iodine"
      ],
      "rxcui": "8611",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D08AG02",
        "D09AA09",
        "D11AC06",
        "G01AX11",
        "R02AA15",
        "S01AX18"
      ],
      "atc_memberships": [
        {
          "code": "D08AG02",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D08AG",
          "subclass_name": "Iodine products"
        },
        {
          "code": "D09AA09",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D09AA",
          "subclass_name": "Medicated dressings with antiinfectives"
        },
        {
          "code": "D11AC06",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D11AC",
          "subclass_name": "Medicated shampoos"
        },
        {
          "code": "G01AX11",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G01AX",
          "subclass_name": "Other antiinfectives and antiseptics"
        },
        {
          "code": "R02AA15",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R02AA",
          "subclass_name": "Antiseptics"
        },
        {
          "code": "S01AX18",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01AX",
          "subclass_name": "Other antiinfectives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/8611/properties.json"
    },
    {
      "id": "RXNORM:2663938",
      "sequence": 747,
      "display_name": "pozelimab",
      "canonical_name": "pozelimab",
      "aliases": [
        "pozelimab"
      ],
      "rxcui": "2663938",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L04AJ11"
      ],
      "atc_memberships": [
        {
          "code": "L04AJ11",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L04AJ",
          "subclass_name": "Complement inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2663938/properties.json"
    },
    {
      "id": "RXNORM:662019",
      "sequence": 748,
      "display_name": "pralatrexate",
      "canonical_name": "pralatrexate",
      "aliases": [
        "pralatrexate"
      ],
      "rxcui": "662019",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01BA05"
      ],
      "atc_memberships": [
        {
          "code": "L01BA05",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01BA",
          "subclass_name": "Folic acid analogues"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/662019/properties.json"
    },
    {
      "id": "RXNORM:34345",
      "sequence": 749,
      "display_name": "pralidoxime",
      "canonical_name": "pralidoxime",
      "aliases": [
        "pralidoxime"
      ],
      "rxcui": "34345",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "V",
      "primary_group_name_tr": "Diğer maddeler",
      "atc_codes": [
        "V03AB04"
      ],
      "atc_memberships": [
        {
          "code": "V03AB04",
          "group_code": "V",
          "group_name_tr": "Diğer maddeler",
          "subclass_code": "V03AB",
          "subclass_name": "Antidotes"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/34345/properties.json"
    },
    {
      "id": "RXNORM:139953",
      "sequence": 750,
      "display_name": "pramlintide",
      "canonical_name": "pramlintide",
      "aliases": [
        "pramlintide"
      ],
      "rxcui": "139953",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A10BX05"
      ],
      "atc_memberships": [
        {
          "code": "A10BX05",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A10BX",
          "subclass_name": "Other blood glucose lowering drugs, excl. insulins"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/139953/properties.json"
    },
    {
      "id": "RXNORM:34347",
      "sequence": 751,
      "display_name": "pramoxine",
      "canonical_name": "pramoxine",
      "aliases": [
        "pramocaine",
        "pramoxine"
      ],
      "rxcui": "34347",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C05AD07",
        "D04AB07"
      ],
      "atc_memberships": [
        {
          "code": "C05AD07",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C05AD",
          "subclass_name": "Local anesthetics"
        },
        {
          "code": "D04AB07",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D04AB",
          "subclass_name": "Anesthetics for topical use"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/34347/properties.json"
    },
    {
      "id": "RXNORM:8628",
      "sequence": 752,
      "display_name": "praziquantel",
      "canonical_name": "praziquantel",
      "aliases": [
        "praziquantel"
      ],
      "rxcui": "8628",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "P",
      "primary_group_name_tr": "Antiparaziter maddeler, insektisitler ve repellentler",
      "atc_codes": [
        "P02BA01"
      ],
      "atc_memberships": [
        {
          "code": "P02BA01",
          "group_code": "P",
          "group_name_tr": "Antiparaziter maddeler, insektisitler ve repellentler",
          "subclass_code": "P02BA",
          "subclass_name": "Quinoline derivatives and related substances"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/8628/properties.json"
    },
    {
      "id": "RXNORM:34369",
      "sequence": 753,
      "display_name": "prednicarbate",
      "canonical_name": "prednicarbate",
      "aliases": [
        "prednicarbate"
      ],
      "rxcui": "34369",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D07AC18"
      ],
      "atc_memberships": [
        {
          "code": "D07AC18",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D07AC",
          "subclass_name": "Corticosteroids, potent (group III)"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/34369/properties.json"
    },
    {
      "id": "RXNORM:8638",
      "sequence": 754,
      "display_name": "Prednizolon",
      "canonical_name": "prednisolone",
      "aliases": [
        "prednisolone",
        "Prednizolon"
      ],
      "rxcui": "8638",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A01AC04",
        "A07EA01",
        "C05AA04",
        "D07AA03",
        "D07XA02",
        "H02AB06",
        "R01AD02",
        "S01BA04",
        "S01CB02",
        "S02BA03",
        "S03BA02"
      ],
      "atc_memberships": [
        {
          "code": "A01AC04",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A01AC",
          "subclass_name": "Corticosteroids for local oral treatment"
        },
        {
          "code": "A07EA01",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A07EA",
          "subclass_name": "Corticosteroids acting locally"
        },
        {
          "code": "C05AA04",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C05AA",
          "subclass_name": "Corticosteroids"
        },
        {
          "code": "D07AA03",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D07AA",
          "subclass_name": "Corticosteroids, weak (group I)"
        },
        {
          "code": "D07XA02",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D07XA",
          "subclass_name": "Corticosteroids, weak, other combinations"
        },
        {
          "code": "H02AB06",
          "group_code": "H",
          "group_name_tr": "Sistemik hormonlar (cinsiyet hormonları ve insülin hariç)",
          "subclass_code": "H02AB",
          "subclass_name": "Glucocorticoids"
        },
        {
          "code": "R01AD02",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R01AD",
          "subclass_name": "Corticosteroids"
        },
        {
          "code": "S01BA04",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01BA",
          "subclass_name": "Corticosteroids, plain"
        },
        {
          "code": "S01CB02",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01CB",
          "subclass_name": "Corticosteroids/antiinfectives/mydriatics in combination"
        },
        {
          "code": "S02BA03",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S02BA",
          "subclass_name": "Corticosteroids"
        },
        {
          "code": "S03BA02",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S03BA",
          "subclass_name": "Corticosteroids"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/8638/properties.json"
    },
    {
      "id": "RXNORM:8640",
      "sequence": 755,
      "display_name": "prednisone",
      "canonical_name": "prednisone",
      "aliases": [
        "prednisone"
      ],
      "rxcui": "8640",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A07EA03",
        "H02AB07"
      ],
      "atc_memberships": [
        {
          "code": "A07EA03",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A07EA",
          "subclass_name": "Corticosteroids acting locally"
        },
        {
          "code": "H02AB07",
          "group_code": "H",
          "group_name_tr": "Sistemik hormonlar (cinsiyet hormonları ve insülin hariç)",
          "subclass_code": "H02AB",
          "subclass_name": "Glucocorticoids"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/8640/properties.json"
    },
    {
      "id": "RXNORM:2198359",
      "sequence": 756,
      "display_name": "pretomanid",
      "canonical_name": "pretomanid",
      "aliases": [
        "pretomanid"
      ],
      "rxcui": "2198359",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J04AK08"
      ],
      "atc_memberships": [
        {
          "code": "J04AK08",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J04AK",
          "subclass_name": "Other drugs for treatment of tuberculosis"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2198359/properties.json"
    },
    {
      "id": "RXNORM:8686",
      "sequence": 757,
      "display_name": "prilocaine",
      "canonical_name": "prilocaine",
      "aliases": [
        "prilocaine"
      ],
      "rxcui": "8686",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N01BB04"
      ],
      "atc_memberships": [
        {
          "code": "N01BB04",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N01BB",
          "subclass_name": "Amides"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/8686/properties.json"
    },
    {
      "id": "RXNORM:8687",
      "sequence": 758,
      "display_name": "primaquine",
      "canonical_name": "primaquine",
      "aliases": [
        "primaquine"
      ],
      "rxcui": "8687",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "P",
      "primary_group_name_tr": "Antiparaziter maddeler, insektisitler ve repellentler",
      "atc_codes": [
        "P01BA03"
      ],
      "atc_memberships": [
        {
          "code": "P01BA03",
          "group_code": "P",
          "group_name_tr": "Antiparaziter maddeler, insektisitler ve repellentler",
          "subclass_code": "P01BA",
          "subclass_name": "Aminoquinolines"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/8687/properties.json"
    },
    {
      "id": "RXNORM:8700",
      "sequence": 759,
      "display_name": "procainamide",
      "canonical_name": "procainamide",
      "aliases": [
        "procainamide"
      ],
      "rxcui": "8700",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C01BA02"
      ],
      "atc_memberships": [
        {
          "code": "C01BA02",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C01BA",
          "subclass_name": "Antiarrhythmics, class Ia"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/8700/properties.json"
    },
    {
      "id": "RXNORM:8701",
      "sequence": 760,
      "display_name": "procaine",
      "canonical_name": "procaine",
      "aliases": [
        "procaine"
      ],
      "rxcui": "8701",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C05AD05",
        "N01BA02",
        "S01HA05"
      ],
      "atc_memberships": [
        {
          "code": "C05AD05",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C05AD",
          "subclass_name": "Local anesthetics"
        },
        {
          "code": "N01BA02",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N01BA",
          "subclass_name": "Esters of aminobenzoic acid"
        },
        {
          "code": "S01HA05",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01HA",
          "subclass_name": "Local anesthetics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/8701/properties.json"
    },
    {
      "id": "RXNORM:8702",
      "sequence": 761,
      "display_name": "procarbazine",
      "canonical_name": "procarbazine",
      "aliases": [
        "procarbazine"
      ],
      "rxcui": "8702",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01XB01"
      ],
      "atc_memberships": [
        {
          "code": "L01XB01",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01XB",
          "subclass_name": "Methylhydrazines"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/8702/properties.json"
    },
    {
      "id": "RXNORM:8782",
      "sequence": 762,
      "display_name": "propofol",
      "canonical_name": "propofol",
      "aliases": [
        "propofol"
      ],
      "rxcui": "8782",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N01AX10"
      ],
      "atc_memberships": [
        {
          "code": "N01AX10",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N01AX",
          "subclass_name": "Other general anesthetics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/8782/properties.json"
    },
    {
      "id": "RXNORM:8787",
      "sequence": 763,
      "display_name": "Propranolol",
      "canonical_name": "propranolol",
      "aliases": [
        "propranolol",
        "Propranolol"
      ],
      "rxcui": "8787",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C07AA05"
      ],
      "atc_memberships": [
        {
          "code": "C07AA05",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C07AA",
          "subclass_name": "Beta blocking agents, non-selective"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/8787/properties.json"
    },
    {
      "id": "RXNORM:8794",
      "sequence": 764,
      "display_name": "propylthiouracil",
      "canonical_name": "propylthiouracil",
      "aliases": [
        "propylthiouracil"
      ],
      "rxcui": "8794",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "H",
      "primary_group_name_tr": "Sistemik hormonlar (cinsiyet hormonları ve insülin hariç)",
      "atc_codes": [
        "H03BA02"
      ],
      "atc_memberships": [
        {
          "code": "H03BA02",
          "group_code": "H",
          "group_name_tr": "Sistemik hormonlar (cinsiyet hormonları ve insülin hariç)",
          "subclass_code": "H03BA",
          "subclass_name": "Thiouracils"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/8794/properties.json"
    },
    {
      "id": "RXNORM:8886",
      "sequence": 765,
      "display_name": "protriptyline",
      "canonical_name": "protriptyline",
      "aliases": [
        "protriptyline"
      ],
      "rxcui": "8886",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N06AA11"
      ],
      "atc_memberships": [
        {
          "code": "N06AA11",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N06AA",
          "subclass_name": "Non-selective monoamine reuptake inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/8886/properties.json"
    },
    {
      "id": "RXNORM:2107310",
      "sequence": 766,
      "display_name": "prucalopride",
      "canonical_name": "prucalopride",
      "aliases": [
        "prucalopride"
      ],
      "rxcui": "2107310",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A06AX05"
      ],
      "atc_memberships": [
        {
          "code": "A06AX05",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A06AX",
          "subclass_name": "Other drugs for constipation"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2107310/properties.json"
    },
    {
      "id": "RXNORM:24902",
      "sequence": 767,
      "display_name": "prussian blue insoluble",
      "canonical_name": "prussian blue insoluble",
      "aliases": [
        "prussian blue",
        "prussian blue insoluble"
      ],
      "rxcui": "24902",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "V",
      "primary_group_name_tr": "Diğer maddeler",
      "atc_codes": [
        "V03AB31"
      ],
      "atc_memberships": [
        {
          "code": "V03AB31",
          "group_code": "V",
          "group_name_tr": "Diğer maddeler",
          "subclass_code": "V03AB",
          "subclass_name": "Antidotes"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/24902/properties.json"
    },
    {
      "id": "RXNORM:8987",
      "sequence": 768,
      "display_name": "pyrazinamide",
      "canonical_name": "pyrazinamide",
      "aliases": [
        "pyrazinamide"
      ],
      "rxcui": "8987",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J04AK01"
      ],
      "atc_memberships": [
        {
          "code": "J04AK01",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J04AK",
          "subclass_name": "Other drugs for treatment of tuberculosis"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/8987/properties.json"
    },
    {
      "id": "RXNORM:1232405",
      "sequence": 769,
      "display_name": "pyrethrum extract",
      "canonical_name": "pyrethrum extract",
      "aliases": [
        "pyrethrum",
        "pyrethrum extract"
      ],
      "rxcui": "1232405",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "P",
      "primary_group_name_tr": "Antiparaziter maddeler, insektisitler ve repellentler",
      "atc_codes": [
        "P03AC01"
      ],
      "atc_memberships": [
        {
          "code": "P03AC01",
          "group_code": "P",
          "group_name_tr": "Antiparaziter maddeler, insektisitler ve repellentler",
          "subclass_code": "P03AC",
          "subclass_name": "Pyrethrines, incl. synthetic compounds"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1232405/properties.json"
    },
    {
      "id": "RXNORM:684879",
      "sequence": 770,
      "display_name": "Piridoksin",
      "canonical_name": "pyridoxine",
      "aliases": [
        "Piridoksin",
        "pyridoxine",
        "pyridoxine (vit B6)"
      ],
      "rxcui": "684879",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A11HA02"
      ],
      "atc_memberships": [
        {
          "code": "A11HA02",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A11HA",
          "subclass_name": "Other plain vitamin preparations"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/684879/properties.json"
    },
    {
      "id": "RXNORM:35185",
      "sequence": 771,
      "display_name": "quazepam",
      "canonical_name": "quazepam",
      "aliases": [
        "quazepam"
      ],
      "rxcui": "35185",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N05CD10"
      ],
      "atc_memberships": [
        {
          "code": "N05CD10",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N05CD",
          "subclass_name": "Benzodiazepine derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/35185/properties.json"
    },
    {
      "id": "RXNORM:9071",
      "sequence": 772,
      "display_name": "quinine",
      "canonical_name": "quinine",
      "aliases": [
        "quinine"
      ],
      "rxcui": "9071",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "P",
      "primary_group_name_tr": "Antiparaziter maddeler, insektisitler ve repellentler",
      "atc_codes": [
        "P01BC01"
      ],
      "atc_memberships": [
        {
          "code": "P01BC01",
          "group_code": "P",
          "group_name_tr": "Antiparaziter maddeler, insektisitler ve repellentler",
          "subclass_code": "P01BC",
          "subclass_name": "Methanolquinolines"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/9071/properties.json"
    },
    {
      "id": "RXNORM:2643048",
      "sequence": 773,
      "display_name": "quizartinib",
      "canonical_name": "quizartinib",
      "aliases": [
        "quizartinib"
      ],
      "rxcui": "2643048",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01EX11"
      ],
      "atc_memberships": [
        {
          "code": "L01EX11",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01EX",
          "subclass_name": "Other protein kinase inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2643048/properties.json"
    },
    {
      "id": "RXNORM:114979",
      "sequence": 774,
      "display_name": "rabeprazole",
      "canonical_name": "rabeprazole",
      "aliases": [
        "rabeprazole"
      ],
      "rxcui": "114979",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A02BC04"
      ],
      "atc_memberships": [
        {
          "code": "A02BC04",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A02BC",
          "subclass_name": "Proton pump inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/114979/properties.json"
    },
    {
      "id": "RXNORM:596205",
      "sequence": 775,
      "display_name": "ramelteon",
      "canonical_name": "ramelteon",
      "aliases": [
        "ramelteon"
      ],
      "rxcui": "596205",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N05CH02"
      ],
      "atc_memberships": [
        {
          "code": "N05CH02",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N05CH",
          "subclass_name": "Melatonin receptor agonists"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/596205/properties.json"
    },
    {
      "id": "RXNORM:1535922",
      "sequence": 776,
      "display_name": "ramucirumab",
      "canonical_name": "ramucirumab",
      "aliases": [
        "ramucirumab"
      ],
      "rxcui": "1535922",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01FG02"
      ],
      "atc_memberships": [
        {
          "code": "L01FG02",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01FG",
          "subclass_name": "VEGF/VEGFR (Vascular Endothelial Growth Factor / -Receptor) inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1535922/properties.json"
    },
    {
      "id": "RXNORM:595060",
      "sequence": 777,
      "display_name": "ranibizumab",
      "canonical_name": "ranibizumab",
      "aliases": [
        "ranibizumab"
      ],
      "rxcui": "595060",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "S",
      "primary_group_name_tr": "Duyu organları",
      "atc_codes": [
        "S01LA04"
      ],
      "atc_memberships": [
        {
          "code": "S01LA04",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01LA",
          "subclass_name": "Antineovascularisation agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/595060/properties.json"
    },
    {
      "id": "RXNORM:9143",
      "sequence": 778,
      "display_name": "ranitidine",
      "canonical_name": "ranitidine",
      "aliases": [
        "ranitidine"
      ],
      "rxcui": "9143",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A02BA02"
      ],
      "atc_memberships": [
        {
          "code": "A02BA02",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A02BA",
          "subclass_name": "H2-receptor antagonists"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/9143/properties.json"
    },
    {
      "id": "RXNORM:35829",
      "sequence": 779,
      "display_name": "ranolazine",
      "canonical_name": "ranolazine",
      "aliases": [
        "ranolazine"
      ],
      "rxcui": "35829",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C01EB18"
      ],
      "atc_memberships": [
        {
          "code": "C01EB18",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C01EB",
          "subclass_name": "Other cardiac preparations"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/35829/properties.json"
    },
    {
      "id": "RXNORM:134748",
      "sequence": 780,
      "display_name": "rasagiline",
      "canonical_name": "rasagiline",
      "aliases": [
        "rasagiline"
      ],
      "rxcui": "134748",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N04BD02"
      ],
      "atc_memberships": [
        {
          "code": "N04BD02",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N04BD",
          "subclass_name": "Monoamine oxidase B inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/134748/properties.json"
    },
    {
      "id": "RXNORM:283821",
      "sequence": 781,
      "display_name": "rasburicase",
      "canonical_name": "rasburicase",
      "aliases": [
        "rasburicase"
      ],
      "rxcui": "283821",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "V",
      "primary_group_name_tr": "Diğer maddeler",
      "atc_codes": [
        "V03AF07"
      ],
      "atc_memberships": [
        {
          "code": "V03AF07",
          "group_code": "V",
          "group_name_tr": "Diğer maddeler",
          "subclass_code": "V03AF",
          "subclass_name": "Detoxifying agents for antineoplastic treatment"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/283821/properties.json"
    },
    {
      "id": "RXNORM:1366567",
      "sequence": 782,
      "display_name": "raxibacumab",
      "canonical_name": "raxibacumab",
      "aliases": [
        "raxibacumab"
      ],
      "rxcui": "1366567",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J06BC02"
      ],
      "atc_memberships": [
        {
          "code": "J06BC02",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J06BC",
          "subclass_name": "Antibacterial monoclonal antibodies"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1366567/properties.json"
    },
    {
      "id": "RXNORM:73032",
      "sequence": 783,
      "display_name": "remifentanil",
      "canonical_name": "remifentanil",
      "aliases": [
        "remifentanil"
      ],
      "rxcui": "73032",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N01AH06"
      ],
      "atc_memberships": [
        {
          "code": "N01AH06",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N01AH",
          "subclass_name": "Opioid anesthetics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/73032/properties.json"
    },
    {
      "id": "RXNORM:73044",
      "sequence": 784,
      "display_name": "repaglinide",
      "canonical_name": "repaglinide",
      "aliases": [
        "repaglinide"
      ],
      "rxcui": "73044",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A10BX02"
      ],
      "atc_memberships": [
        {
          "code": "A10BX02",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A10BX",
          "subclass_name": "Other blood glucose lowering drugs, excl. insulins"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/73044/properties.json"
    },
    {
      "id": "RXNORM:35382",
      "sequence": 785,
      "display_name": "resorcinol",
      "canonical_name": "resorcinol",
      "aliases": [
        "resorcinol"
      ],
      "rxcui": "35382",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D10AX02",
        "S01AX06"
      ],
      "atc_memberships": [
        {
          "code": "D10AX02",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D10AX",
          "subclass_name": "Other anti-acne preparations for topical use"
        },
        {
          "code": "S01AX06",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01AX",
          "subclass_name": "Other antiinfectives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/35382/properties.json"
    },
    {
      "id": "RXNORM:76895",
      "sequence": 786,
      "display_name": "reteplase",
      "canonical_name": "reteplase",
      "aliases": [
        "reteplase"
      ],
      "rxcui": "76895",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B01AD07"
      ],
      "atc_memberships": [
        {
          "code": "B01AD07",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B01AD",
          "subclass_name": "Enzymes"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/76895/properties.json"
    },
    {
      "id": "RXNORM:2102775",
      "sequence": 787,
      "display_name": "revefenacin",
      "canonical_name": "revefenacin",
      "aliases": [
        "revefenacin"
      ],
      "rxcui": "2102775",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "R",
      "primary_group_name_tr": "Solunum sistemi",
      "atc_codes": [
        "R03BB08"
      ],
      "atc_memberships": [
        {
          "code": "R03BB08",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R03BB",
          "subclass_name": "Anticholinergics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2102775/properties.json"
    },
    {
      "id": "RXNORM:9344",
      "sequence": 788,
      "display_name": "ribavirin",
      "canonical_name": "ribavirin",
      "aliases": [
        "ribavirin"
      ],
      "rxcui": "9344",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J05AP01"
      ],
      "atc_memberships": [
        {
          "code": "J05AP01",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J05AP",
          "subclass_name": "Antivirals for treatment of HCV infections"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/9344/properties.json"
    },
    {
      "id": "RXNORM:1873916",
      "sequence": 789,
      "display_name": "ribociclib",
      "canonical_name": "ribociclib",
      "aliases": [
        "ribociclib"
      ],
      "rxcui": "1873916",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01EF02"
      ],
      "atc_memberships": [
        {
          "code": "L01EF02",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01EF",
          "subclass_name": "Cyclin-dependent kinase (CDK) inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1873916/properties.json"
    },
    {
      "id": "RXNORM:9346",
      "sequence": 790,
      "display_name": "Riboflavin",
      "canonical_name": "riboflavin",
      "aliases": [
        "Riboflavin",
        "riboflavin",
        "riboflavin (vit B2)"
      ],
      "rxcui": "9346",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A11HA04",
        "S01XA26"
      ],
      "atc_memberships": [
        {
          "code": "A11HA04",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A11HA",
          "subclass_name": "Other plain vitamin preparations"
        },
        {
          "code": "S01XA26",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01XA",
          "subclass_name": "Other ophthalmologicals"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/9346/properties.json"
    },
    {
      "id": "RXNORM:9384",
      "sequence": 791,
      "display_name": "rifampin",
      "canonical_name": "rifampin",
      "aliases": [
        "rifampicin",
        "rifampin"
      ],
      "rxcui": "9384",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J04AB02"
      ],
      "atc_memberships": [
        {
          "code": "J04AB02",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J04AB",
          "subclass_name": "Antibiotics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/9384/properties.json"
    },
    {
      "id": "RXNORM:35616",
      "sequence": 792,
      "display_name": "rifamycin SV",
      "canonical_name": "rifamycin SV",
      "aliases": [
        "rifamycin",
        "rifamycin SV"
      ],
      "rxcui": "35616",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A07AA13",
        "D06AX15",
        "J04AB03",
        "S01AA16",
        "S02AA12"
      ],
      "atc_memberships": [
        {
          "code": "A07AA13",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A07AA",
          "subclass_name": "Antibiotics"
        },
        {
          "code": "D06AX15",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D06AX",
          "subclass_name": "Other antibiotics for topical use"
        },
        {
          "code": "J04AB03",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J04AB",
          "subclass_name": "Antibiotics"
        },
        {
          "code": "S01AA16",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01AA",
          "subclass_name": "Antibiotics"
        },
        {
          "code": "S02AA12",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S02AA",
          "subclass_name": "Antiinfectives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/35616/properties.json"
    },
    {
      "id": "RXNORM:35617",
      "sequence": 793,
      "display_name": "rifapentine",
      "canonical_name": "rifapentine",
      "aliases": [
        "rifapentine"
      ],
      "rxcui": "35617",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J04AB05"
      ],
      "atc_memberships": [
        {
          "code": "J04AB05",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J04AB",
          "subclass_name": "Antibiotics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/35617/properties.json"
    },
    {
      "id": "RXNORM:35619",
      "sequence": 794,
      "display_name": "rifaximin",
      "canonical_name": "rifaximin",
      "aliases": [
        "rifaximin"
      ],
      "rxcui": "35619",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A07AA11",
        "D06AX11"
      ],
      "atc_memberships": [
        {
          "code": "A07AA11",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A07AA",
          "subclass_name": "Antibiotics"
        },
        {
          "code": "D06AX11",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D06AX",
          "subclass_name": "Other antibiotics for topical use"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/35619/properties.json"
    },
    {
      "id": "RXNORM:763450",
      "sequence": 795,
      "display_name": "rilonacept",
      "canonical_name": "rilonacept",
      "aliases": [
        "rilonacept"
      ],
      "rxcui": "763450",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L04AC04"
      ],
      "atc_memberships": [
        {
          "code": "L04AC04",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L04AC",
          "subclass_name": "Interleukin inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/763450/properties.json"
    },
    {
      "id": "RXNORM:1102270",
      "sequence": 796,
      "display_name": "rilpivirine",
      "canonical_name": "rilpivirine",
      "aliases": [
        "rilpivirine"
      ],
      "rxcui": "1102270",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J05AG05"
      ],
      "atc_memberships": [
        {
          "code": "J05AG05",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J05AG",
          "subclass_name": "Non-nucleoside reverse transcriptase inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1102270/properties.json"
    },
    {
      "id": "RXNORM:35623",
      "sequence": 797,
      "display_name": "riluzole",
      "canonical_name": "riluzole",
      "aliases": [
        "riluzole"
      ],
      "rxcui": "35623",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N07XX02"
      ],
      "atc_memberships": [
        {
          "code": "N07XX02",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N07XX",
          "subclass_name": "Other nervous system drugs"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/35623/properties.json"
    },
    {
      "id": "RXNORM:9386",
      "sequence": 798,
      "display_name": "rimantadine",
      "canonical_name": "rimantadine",
      "aliases": [
        "rimantadine"
      ],
      "rxcui": "9386",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J05AC02"
      ],
      "atc_memberships": [
        {
          "code": "J05AC02",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J05AC",
          "subclass_name": "Cyclic amines"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/9386/properties.json"
    },
    {
      "id": "RXNORM:1439816",
      "sequence": 799,
      "display_name": "riociguat",
      "canonical_name": "riociguat",
      "aliases": [
        "riociguat"
      ],
      "rxcui": "1439816",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C02KX05"
      ],
      "atc_memberships": [
        {
          "code": "C02KX05",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C02KX",
          "subclass_name": "Antihypertensives for pulmonary arterial hypertension"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1439816/properties.json"
    },
    {
      "id": "RXNORM:2369389",
      "sequence": 800,
      "display_name": "ripretinib",
      "canonical_name": "ripretinib",
      "aliases": [
        "ripretinib"
      ],
      "rxcui": "2369389",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01EX19"
      ],
      "atc_memberships": [
        {
          "code": "L01EX19",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01EX",
          "subclass_name": "Other protein kinase inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2369389/properties.json"
    },
    {
      "id": "RXNORM:2166040",
      "sequence": 801,
      "display_name": "risankizumab",
      "canonical_name": "risankizumab",
      "aliases": [
        "risankizumab"
      ],
      "rxcui": "2166040",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L04AC18"
      ],
      "atc_memberships": [
        {
          "code": "L04AC18",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L04AC",
          "subclass_name": "Interleukin inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2166040/properties.json"
    },
    {
      "id": "RXNORM:2390935",
      "sequence": 802,
      "display_name": "risdiplam",
      "canonical_name": "risdiplam",
      "aliases": [
        "risdiplam"
      ],
      "rxcui": "2390935",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "M",
      "primary_group_name_tr": "Kas ve iskelet sistemi",
      "atc_codes": [
        "M09AX10"
      ],
      "atc_memberships": [
        {
          "code": "M09AX10",
          "group_code": "M",
          "group_name_tr": "Kas ve iskelet sistemi",
          "subclass_code": "M09AX",
          "subclass_name": "Other drugs for disorders of the musculo-skeletal system"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2390935/properties.json"
    },
    {
      "id": "RXNORM:55685",
      "sequence": 803,
      "display_name": "risedronic acid",
      "canonical_name": "risedronic acid",
      "aliases": [
        "risedronic acid"
      ],
      "rxcui": "55685",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "M",
      "primary_group_name_tr": "Kas ve iskelet sistemi",
      "atc_codes": [
        "M05BA07"
      ],
      "atc_memberships": [
        {
          "code": "M05BA07",
          "group_code": "M",
          "group_name_tr": "Kas ve iskelet sistemi",
          "subclass_code": "M05BA",
          "subclass_name": "Bisphosphonates"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/55685/properties.json"
    },
    {
      "id": "RXNORM:2641595",
      "sequence": 804,
      "display_name": "ritlecitinib",
      "canonical_name": "ritlecitinib",
      "aliases": [
        "ritlecitinib"
      ],
      "rxcui": "2641595",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L04AF08"
      ],
      "atc_memberships": [
        {
          "code": "L04AF08",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L04AF",
          "subclass_name": "Janus-associated kinase (JAK) inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2641595/properties.json"
    },
    {
      "id": "RXNORM:1114195",
      "sequence": 805,
      "display_name": "rivaroxaban",
      "canonical_name": "rivaroxaban",
      "aliases": [
        "rivaroxaban"
      ],
      "rxcui": "1114195",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B01AF01"
      ],
      "atc_memberships": [
        {
          "code": "B01AF01",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B01AF",
          "subclass_name": "Direct factor Xa inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1114195/properties.json"
    },
    {
      "id": "RXNORM:183379",
      "sequence": 806,
      "display_name": "rivastigmine",
      "canonical_name": "rivastigmine",
      "aliases": [
        "rivastigmine"
      ],
      "rxcui": "183379",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N06DA03"
      ],
      "atc_memberships": [
        {
          "code": "N06DA03",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N06DA",
          "subclass_name": "Anticholinesterases"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/183379/properties.json"
    },
    {
      "id": "RXNORM:1091836",
      "sequence": 807,
      "display_name": "roflumilast",
      "canonical_name": "roflumilast",
      "aliases": [
        "roflumilast"
      ],
      "rxcui": "1091836",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D05AX06",
        "R03DX07"
      ],
      "atc_memberships": [
        {
          "code": "D05AX06",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D05AX",
          "subclass_name": "Other antipsoriatics for topical use"
        },
        {
          "code": "R03DX07",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R03DX",
          "subclass_name": "Other systemic drugs for obstructive airway diseases"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1091836/properties.json"
    },
    {
      "id": "RXNORM:877510",
      "sequence": 808,
      "display_name": "romidepsin",
      "canonical_name": "romidepsin",
      "aliases": [
        "romidepsin"
      ],
      "rxcui": "877510",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01XH02"
      ],
      "atc_memberships": [
        {
          "code": "L01XH02",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01XH",
          "subclass_name": "Histone deacetylase (HDAC) inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/877510/properties.json"
    },
    {
      "id": "RXNORM:805452",
      "sequence": 809,
      "display_name": "romiplostim",
      "canonical_name": "romiplostim",
      "aliases": [
        "romiplostim"
      ],
      "rxcui": "805452",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B02BX04"
      ],
      "atc_memberships": [
        {
          "code": "B02BX04",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B02BX",
          "subclass_name": "Other systemic hemostatics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/805452/properties.json"
    },
    {
      "id": "RXNORM:2587059",
      "sequence": 810,
      "display_name": "ropeginterferon alfa-2b",
      "canonical_name": "ropeginterferon alfa-2b",
      "aliases": [
        "ropeginterferon alfa-2b"
      ],
      "rxcui": "2587059",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L03AB15"
      ],
      "atc_memberships": [
        {
          "code": "L03AB15",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L03AB",
          "subclass_name": "Interferons"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2587059/properties.json"
    },
    {
      "id": "RXNORM:72302",
      "sequence": 811,
      "display_name": "ropinirole",
      "canonical_name": "ropinirole",
      "aliases": [
        "ropinirole"
      ],
      "rxcui": "72302",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N04BC04"
      ],
      "atc_memberships": [
        {
          "code": "N04BC04",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N04BC",
          "subclass_name": "Dopamine agonists"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/72302/properties.json"
    },
    {
      "id": "RXNORM:84108",
      "sequence": 812,
      "display_name": "rosiglitazone",
      "canonical_name": "rosiglitazone",
      "aliases": [
        "rosiglitazone"
      ],
      "rxcui": "84108",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A10BG02"
      ],
      "atc_memberships": [
        {
          "code": "A10BG02",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A10BG",
          "subclass_name": "Thiazolidinediones"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/84108/properties.json"
    },
    {
      "id": "RXNORM:301542",
      "sequence": 813,
      "display_name": "Rosuvastatin",
      "canonical_name": "rosuvastatin",
      "aliases": [
        "Rosuvastatin",
        "rosuvastatin"
      ],
      "rxcui": "301542",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C10AA07"
      ],
      "atc_memberships": [
        {
          "code": "C10AA07",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C10AA",
          "subclass_name": "HMG CoA reductase inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/301542/properties.json"
    },
    {
      "id": "RXNORM:1862579",
      "sequence": 814,
      "display_name": "rucaparib",
      "canonical_name": "rucaparib",
      "aliases": [
        "rucaparib"
      ],
      "rxcui": "1862579",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01XK03"
      ],
      "atc_memberships": [
        {
          "code": "L01XK03",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01XK",
          "subclass_name": "Poly (ADP-ribose) polymerase (PARP) inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1862579/properties.json"
    },
    {
      "id": "RXNORM:69036",
      "sequence": 815,
      "display_name": "rufinamide",
      "canonical_name": "rufinamide",
      "aliases": [
        "rufinamide"
      ],
      "rxcui": "69036",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N03AF03"
      ],
      "atc_memberships": [
        {
          "code": "N03AF03",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N03AF",
          "subclass_name": "Carboxamide derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/69036/properties.json"
    },
    {
      "id": "RXNORM:9500",
      "sequence": 816,
      "display_name": "rutin",
      "canonical_name": "rutin",
      "aliases": [
        "rutin",
        "rutoside"
      ],
      "rxcui": "9500",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C05CA01"
      ],
      "atc_memberships": [
        {
          "code": "C05CA01",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C05CA",
          "subclass_name": "Bioflavonoids"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/9500/properties.json"
    },
    {
      "id": "RXNORM:1193326",
      "sequence": 817,
      "display_name": "ruxolitinib",
      "canonical_name": "ruxolitinib",
      "aliases": [
        "ruxolitinib"
      ],
      "rxcui": "1193326",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D11AH09",
        "L01EJ01"
      ],
      "atc_memberships": [
        {
          "code": "D11AH09",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D11AH",
          "subclass_name": "Agents for dermatitis, excluding corticosteroids"
        },
        {
          "code": "L01EJ01",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01EJ",
          "subclass_name": "Janus-associated kinase (JAK) inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1193326/properties.json"
    },
    {
      "id": "RXNORM:236782",
      "sequence": 818,
      "display_name": "Saccharomyces boulardii",
      "canonical_name": "Saccharomyces boulardii",
      "aliases": [
        "saccharomyces boulardii",
        "Saccharomyces boulardii"
      ],
      "rxcui": "236782",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A07FA02"
      ],
      "atc_memberships": [
        {
          "code": "A07FA02",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A07FA",
          "subclass_name": "Antidiarrheal microorganisms"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/236782/properties.json"
    },
    {
      "id": "RXNORM:214817",
      "sequence": 819,
      "display_name": "sacrosidase",
      "canonical_name": "sacrosidase",
      "aliases": [
        "sacrosidase"
      ],
      "rxcui": "214817",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A16AB06"
      ],
      "atc_memberships": [
        {
          "code": "A16AB06",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A16AB",
          "subclass_name": "Enzymes"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/214817/properties.json"
    },
    {
      "id": "RXNORM:1922448",
      "sequence": 820,
      "display_name": "safinamide",
      "canonical_name": "safinamide",
      "aliases": [
        "safinamide"
      ],
      "rxcui": "1922448",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N04BD03"
      ],
      "atc_memberships": [
        {
          "code": "N04BD03",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N04BD",
          "subclass_name": "Monoamine oxidase B inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1922448/properties.json"
    },
    {
      "id": "RXNORM:9525",
      "sequence": 821,
      "display_name": "salicylic acid",
      "canonical_name": "salicylic acid",
      "aliases": [
        "salicylic acid"
      ],
      "rxcui": "9525",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D01AE12",
        "S01BC08"
      ],
      "atc_memberships": [
        {
          "code": "D01AE12",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D01AE",
          "subclass_name": "Other antifungals for topical use"
        },
        {
          "code": "S01BC08",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01BC",
          "subclass_name": "Antiinflammatory agents, non-steroids"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/9525/properties.json"
    },
    {
      "id": "RXNORM:36108",
      "sequence": 822,
      "display_name": "salsalate",
      "canonical_name": "salsalate",
      "aliases": [
        "salsalate"
      ],
      "rxcui": "36108",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N02BA06"
      ],
      "atc_memberships": [
        {
          "code": "N02BA06",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N02BA",
          "subclass_name": "Salicylic acid and derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/36108/properties.json"
    },
    {
      "id": "RXNORM:1923319",
      "sequence": 823,
      "display_name": "sarilumab",
      "canonical_name": "sarilumab",
      "aliases": [
        "sarilumab"
      ],
      "rxcui": "1923319",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L04AC14"
      ],
      "atc_memberships": [
        {
          "code": "L04AC14",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L04AC",
          "subclass_name": "Interleukin inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1923319/properties.json"
    },
    {
      "id": "RXNORM:857974",
      "sequence": 824,
      "display_name": "saxagliptin",
      "canonical_name": "saxagliptin",
      "aliases": [
        "saxagliptin"
      ],
      "rxcui": "857974",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A10BH03"
      ],
      "atc_memberships": [
        {
          "code": "A10BH03",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A10BH",
          "subclass_name": "Dipeptidyl peptidase 4 (DPP-4) inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/857974/properties.json"
    },
    {
      "id": "RXNORM:9601",
      "sequence": 825,
      "display_name": "scopolamine",
      "canonical_name": "scopolamine",
      "aliases": [
        "scopolamine"
      ],
      "rxcui": "9601",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A04AD01",
        "N05CM05",
        "S01FA02"
      ],
      "atc_memberships": [
        {
          "code": "A04AD01",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A04AD",
          "subclass_name": "Other antiemetics"
        },
        {
          "code": "N05CM05",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N05CM",
          "subclass_name": "Other hypnotics and sedatives"
        },
        {
          "code": "S01FA02",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01FA",
          "subclass_name": "Anticholinergics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/9601/properties.json"
    },
    {
      "id": "RXNORM:1726975",
      "sequence": 826,
      "display_name": "sebelipase alfa",
      "canonical_name": "sebelipase alfa",
      "aliases": [
        "sebelipase alfa"
      ],
      "rxcui": "1726975",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A16AB14"
      ],
      "atc_memberships": [
        {
          "code": "A16AB14",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A16AB",
          "subclass_name": "Enzymes"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1726975/properties.json"
    },
    {
      "id": "RXNORM:2717944",
      "sequence": 827,
      "display_name": "sebetralstat",
      "canonical_name": "sebetralstat",
      "aliases": [
        "sebetralstat"
      ],
      "rxcui": "2717944",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B06AC08"
      ],
      "atc_memberships": [
        {
          "code": "B06AC08",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B06AC",
          "subclass_name": "Drugs used in hereditary angioedema"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2717944/properties.json"
    },
    {
      "id": "RXNORM:36314",
      "sequence": 828,
      "display_name": "secnidazole",
      "canonical_name": "secnidazole",
      "aliases": [
        "secnidazole"
      ],
      "rxcui": "36314",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "P",
      "primary_group_name_tr": "Antiparaziter maddeler, insektisitler ve repellentler",
      "atc_codes": [
        "P01AB07"
      ],
      "atc_memberships": [
        {
          "code": "P01AB07",
          "group_code": "P",
          "group_name_tr": "Antiparaziter maddeler, insektisitler ve repellentler",
          "subclass_code": "P01AB",
          "subclass_name": "Nitroimidazole derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/36314/properties.json"
    },
    {
      "id": "RXNORM:1599788",
      "sequence": 829,
      "display_name": "secukinumab",
      "canonical_name": "secukinumab",
      "aliases": [
        "secukinumab"
      ],
      "rxcui": "1599788",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L04AC10"
      ],
      "atc_memberships": [
        {
          "code": "L04AC10",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L04AC",
          "subclass_name": "Interleukin inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1599788/properties.json"
    },
    {
      "id": "RXNORM:2690869",
      "sequence": 830,
      "display_name": "seladelpar",
      "canonical_name": "seladelpar",
      "aliases": [
        "seladelpar"
      ],
      "rxcui": "2690869",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A05AX07"
      ],
      "atc_memberships": [
        {
          "code": "A05AX07",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A05AX",
          "subclass_name": "Other drugs for bile therapy"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2690869/properties.json"
    },
    {
      "id": "RXNORM:1729002",
      "sequence": 831,
      "display_name": "selexipag",
      "canonical_name": "selexipag",
      "aliases": [
        "selexipag"
      ],
      "rxcui": "1729002",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B01AC27"
      ],
      "atc_memberships": [
        {
          "code": "B01AC27",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B01AC",
          "subclass_name": "Platelet aggregation inhibitors excl. heparin"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1729002/properties.json"
    },
    {
      "id": "RXNORM:2178390",
      "sequence": 832,
      "display_name": "selinexor",
      "canonical_name": "selinexor",
      "aliases": [
        "selinexor"
      ],
      "rxcui": "2178390",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01XX66"
      ],
      "atc_memberships": [
        {
          "code": "L01XX66",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01XX",
          "subclass_name": "Other antineoplastic agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2178390/properties.json"
    },
    {
      "id": "RXNORM:36437",
      "sequence": 833,
      "display_name": "Sertralin",
      "canonical_name": "sertraline",
      "aliases": [
        "Sertralin",
        "sertraline"
      ],
      "rxcui": "36437",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N06AB06"
      ],
      "atc_memberships": [
        {
          "code": "N06AB06",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N06AB",
          "subclass_name": "Selective serotonin reuptake inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/36437/properties.json"
    },
    {
      "id": "RXNORM:2469247",
      "sequence": 834,
      "display_name": "setmelanotide",
      "canonical_name": "setmelanotide",
      "aliases": [
        "setmelanotide"
      ],
      "rxcui": "2469247",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A08AA12"
      ],
      "atc_memberships": [
        {
          "code": "A08AA12",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A08AA",
          "subclass_name": "Centrally acting antiobesity products"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2469247/properties.json"
    },
    {
      "id": "RXNORM:214824",
      "sequence": 835,
      "display_name": "sevelamer",
      "canonical_name": "sevelamer",
      "aliases": [
        "sevelamer"
      ],
      "rxcui": "214824",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "V",
      "primary_group_name_tr": "Diğer maddeler",
      "atc_codes": [
        "V03AE02"
      ],
      "atc_memberships": [
        {
          "code": "V03AE02",
          "group_code": "V",
          "group_name_tr": "Diğer maddeler",
          "subclass_code": "V03AE",
          "subclass_name": "Drugs for treatment of hyperkalemia and hyperphosphatemia"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/214824/properties.json"
    },
    {
      "id": "RXNORM:36453",
      "sequence": 836,
      "display_name": "sevoflurane",
      "canonical_name": "sevoflurane",
      "aliases": [
        "sevoflurane"
      ],
      "rxcui": "36453",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N01AB08"
      ],
      "atc_memberships": [
        {
          "code": "N01AB08",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N01AB",
          "subclass_name": "Halogenated hydrocarbons"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/36453/properties.json"
    },
    {
      "id": "RXNORM:2728380",
      "sequence": 837,
      "display_name": "sibeprenlimab",
      "canonical_name": "sibeprenlimab",
      "aliases": [
        "sibeprenlimab"
      ],
      "rxcui": "2728380",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L04AG18"
      ],
      "atc_memberships": [
        {
          "code": "L04AG18",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L04AG",
          "subclass_name": "Monoclonal antibodies"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2728380/properties.json"
    },
    {
      "id": "RXNORM:1535218",
      "sequence": 838,
      "display_name": "siltuximab",
      "canonical_name": "siltuximab",
      "aliases": [
        "siltuximab"
      ],
      "rxcui": "1535218",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L04AC11"
      ],
      "atc_memberships": [
        {
          "code": "L04AC11",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L04AC",
          "subclass_name": "Interleukin inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1535218/properties.json"
    },
    {
      "id": "RXNORM:2606543",
      "sequence": 839,
      "display_name": "silver",
      "canonical_name": "silver",
      "aliases": [
        "silver"
      ],
      "rxcui": "2606543",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D08AL30"
      ],
      "atc_memberships": [
        {
          "code": "D08AL30",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D08AL",
          "subclass_name": "Silver compounds"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2606543/properties.json"
    },
    {
      "id": "RXNORM:9789",
      "sequence": 840,
      "display_name": "silver nitrate",
      "canonical_name": "silver nitrate",
      "aliases": [
        "silver nitrate"
      ],
      "rxcui": "9789",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D08AL01"
      ],
      "atc_memberships": [
        {
          "code": "D08AL01",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D08AL",
          "subclass_name": "Silver compounds"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/9789/properties.json"
    },
    {
      "id": "RXNORM:9793",
      "sequence": 841,
      "display_name": "silver sulfadiazine",
      "canonical_name": "silver sulfadiazine",
      "aliases": [
        "silver sulfadiazine"
      ],
      "rxcui": "9793",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D06BA01"
      ],
      "atc_memberships": [
        {
          "code": "D06BA01",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D06BA",
          "subclass_name": "Sulfonamides"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/9793/properties.json"
    },
    {
      "id": "RXNORM:36567",
      "sequence": 842,
      "display_name": "Simvastatin",
      "canonical_name": "simvastatin",
      "aliases": [
        "Simvastatin",
        "simvastatin"
      ],
      "rxcui": "36567",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C10AA01"
      ],
      "atc_memberships": [
        {
          "code": "C10AA01",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C10AA",
          "subclass_name": "HMG CoA reductase inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/36567/properties.json"
    },
    {
      "id": "RXNORM:753346",
      "sequence": 843,
      "display_name": "sinecatechins",
      "canonical_name": "sinecatechins",
      "aliases": [
        "sinecatechins"
      ],
      "rxcui": "753346",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D06BB12"
      ],
      "atc_memberships": [
        {
          "code": "D06BB12",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D06BB",
          "subclass_name": "Antivirals"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/753346/properties.json"
    },
    {
      "id": "RXNORM:997261",
      "sequence": 844,
      "display_name": "sipuleucel-T",
      "canonical_name": "sipuleucel-T",
      "aliases": [
        "sipuleucel-T"
      ],
      "rxcui": "997261",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L03AX17"
      ],
      "atc_memberships": [
        {
          "code": "L03AX17",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L03AX",
          "subclass_name": "Other immunostimulants"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/997261/properties.json"
    },
    {
      "id": "RXNORM:35302",
      "sequence": 845,
      "display_name": "sirolimus",
      "canonical_name": "sirolimus",
      "aliases": [
        "sirolimus"
      ],
      "rxcui": "35302",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01EG04",
        "L04AH01",
        "S01XA23"
      ],
      "atc_memberships": [
        {
          "code": "L01EG04",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01EG",
          "subclass_name": "Mammalian target of rapamycin (mTOR) kinase inhibitors"
        },
        {
          "code": "L04AH01",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L04AH",
          "subclass_name": "Mammalian target of rapamycin (mTOR) kinase inhibitors"
        },
        {
          "code": "S01XA23",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01XA",
          "subclass_name": "Other ophthalmologicals"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/35302/properties.json"
    },
    {
      "id": "RXNORM:36676",
      "sequence": 846,
      "display_name": "Sodyum bikarbonat",
      "canonical_name": "sodium bicarbonate",
      "aliases": [
        "sodium bicarbonate",
        "Sodyum bikarbonat"
      ],
      "rxcui": "36676",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B05CB04",
        "B05XA02"
      ],
      "atc_memberships": [
        {
          "code": "B05CB04",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B05CB",
          "subclass_name": "Salt solutions"
        },
        {
          "code": "B05XA02",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B05XA",
          "subclass_name": "Electrolyte solutions"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/36676/properties.json"
    },
    {
      "id": "RXNORM:9863",
      "sequence": 847,
      "display_name": "Sodyum klorür",
      "canonical_name": "sodium chloride",
      "aliases": [
        "sodium chloride",
        "Sodyum klorür"
      ],
      "rxcui": "9863",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A12CA01",
        "B05CB01",
        "B05XA03"
      ],
      "atc_memberships": [
        {
          "code": "A12CA01",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A12CA",
          "subclass_name": "Sodium"
        },
        {
          "code": "B05CB01",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B05CB",
          "subclass_name": "Salt solutions"
        },
        {
          "code": "B05XA03",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B05XA",
          "subclass_name": "Electrolyte solutions"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/9863/properties.json"
    },
    {
      "id": "RXNORM:992920",
      "sequence": 848,
      "display_name": "sodium chlorite",
      "canonical_name": "sodium chlorite",
      "aliases": [
        "sodium chlorite"
      ],
      "rxcui": "992920",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D03AX11"
      ],
      "atc_memberships": [
        {
          "code": "D03AX11",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D03AX",
          "subclass_name": "Other cicatrizants"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/992920/properties.json"
    },
    {
      "id": "RXNORM:36709",
      "sequence": 849,
      "display_name": "sodium phosphate",
      "canonical_name": "sodium phosphate",
      "aliases": [
        "sodium phosphate"
      ],
      "rxcui": "36709",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A06AD17",
        "A06AG01",
        "B05XA09",
        "V03AG05"
      ],
      "atc_memberships": [
        {
          "code": "A06AD17",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A06AD",
          "subclass_name": "Osmotically acting laxatives"
        },
        {
          "code": "A06AG01",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A06AG",
          "subclass_name": "Enemas"
        },
        {
          "code": "B05XA09",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B05XA",
          "subclass_name": "Electrolyte solutions"
        },
        {
          "code": "V03AG05",
          "group_code": "V",
          "group_name_tr": "Diğer maddeler",
          "subclass_code": "V03AG",
          "subclass_name": "Drugs for treatment of hypercalcemia"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/36709/properties.json"
    },
    {
      "id": "RXNORM:56513",
      "sequence": 850,
      "display_name": "sodium propionate",
      "canonical_name": "sodium propionate",
      "aliases": [
        "sodium propionate"
      ],
      "rxcui": "56513",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "S",
      "primary_group_name_tr": "Duyu organları",
      "atc_codes": [
        "S01AX10"
      ],
      "atc_memberships": [
        {
          "code": "S01AX10",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01AX",
          "subclass_name": "Other antiinfectives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/56513/properties.json"
    },
    {
      "id": "RXNORM:36717",
      "sequence": 851,
      "display_name": "sodium selenate",
      "canonical_name": "sodium selenate",
      "aliases": [
        "sodium selenate"
      ],
      "rxcui": "36717",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A12CE01"
      ],
      "atc_memberships": [
        {
          "code": "A12CE01",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A12CE",
          "subclass_name": "Selenium"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/36717/properties.json"
    },
    {
      "id": "RXNORM:36721",
      "sequence": 852,
      "display_name": "sodium sulfate",
      "canonical_name": "sodium sulfate",
      "aliases": [
        "sodium sulfate"
      ],
      "rxcui": "36721",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A06AD13",
        "A12CA02"
      ],
      "atc_memberships": [
        {
          "code": "A06AD13",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A06AD",
          "subclass_name": "Osmotically acting laxatives"
        },
        {
          "code": "A12CA02",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A12CA",
          "subclass_name": "Sodium"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/36721/properties.json"
    },
    {
      "id": "RXNORM:56524",
      "sequence": 853,
      "display_name": "sodium tartrate",
      "canonical_name": "sodium tartrate",
      "aliases": [
        "sodium tartrate"
      ],
      "rxcui": "56524",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A06AD21"
      ],
      "atc_memberships": [
        {
          "code": "A06AD21",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A06AD",
          "subclass_name": "Osmotically acting laxatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/56524/properties.json"
    },
    {
      "id": "RXNORM:9913",
      "sequence": 854,
      "display_name": "sodium tetradecyl sulfate",
      "canonical_name": "sodium tetradecyl sulfate",
      "aliases": [
        "sodium tetradecyl sulfate"
      ],
      "rxcui": "9913",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C05BB04"
      ],
      "atc_memberships": [
        {
          "code": "C05BB04",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C05BB",
          "subclass_name": "Sclerosing agents for local injection"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/9913/properties.json"
    },
    {
      "id": "RXNORM:1484911",
      "sequence": 855,
      "display_name": "sofosbuvir",
      "canonical_name": "sofosbuvir",
      "aliases": [
        "sofosbuvir"
      ],
      "rxcui": "1484911",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J05AP08"
      ],
      "atc_memberships": [
        {
          "code": "J05AP08",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J05AP",
          "subclass_name": "Antivirals for treatment of HCV infections"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1484911/properties.json"
    },
    {
      "id": "RXNORM:2121751",
      "sequence": 856,
      "display_name": "solriamfetol",
      "canonical_name": "solriamfetol",
      "aliases": [
        "solriamfetol"
      ],
      "rxcui": "2121751",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N06BA14"
      ],
      "atc_memberships": [
        {
          "code": "N06BA14",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N06BA",
          "subclass_name": "Centrally acting sympathomimetics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2121751/properties.json"
    },
    {
      "id": "RXNORM:2557373",
      "sequence": 857,
      "display_name": "somapacitan",
      "canonical_name": "somapacitan",
      "aliases": [
        "somapacitan"
      ],
      "rxcui": "2557373",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "H",
      "primary_group_name_tr": "Sistemik hormonlar (cinsiyet hormonları ve insülin hariç)",
      "atc_codes": [
        "H01AC07"
      ],
      "atc_memberships": [
        {
          "code": "H01AC07",
          "group_code": "H",
          "group_name_tr": "Sistemik hormonlar (cinsiyet hormonları ve insülin hariç)",
          "subclass_code": "H01AC",
          "subclass_name": "Somatropin and somatropin agonists"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2557373/properties.json"
    },
    {
      "id": "RXNORM:2644503",
      "sequence": 858,
      "display_name": "somatrogon",
      "canonical_name": "somatrogon",
      "aliases": [
        "somatrogon"
      ],
      "rxcui": "2644503",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "H",
      "primary_group_name_tr": "Sistemik hormonlar (cinsiyet hormonları ve insülin hariç)",
      "atc_codes": [
        "H01AC08"
      ],
      "atc_memberships": [
        {
          "code": "H01AC08",
          "group_code": "H",
          "group_name_tr": "Sistemik hormonlar (cinsiyet hormonları ve insülin hariç)",
          "subclass_code": "H01AC",
          "subclass_name": "Somatropin and somatropin agonists"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2644503/properties.json"
    },
    {
      "id": "RXNORM:9947",
      "sequence": 859,
      "display_name": "sotalol",
      "canonical_name": "sotalol",
      "aliases": [
        "sotalol"
      ],
      "rxcui": "9947",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C07AA07"
      ],
      "atc_memberships": [
        {
          "code": "C07AA07",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C07AA",
          "subclass_name": "Beta blocking agents, non-selective"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/9947/properties.json"
    },
    {
      "id": "RXNORM:2678930",
      "sequence": 860,
      "display_name": "sotatercept",
      "canonical_name": "sotatercept",
      "aliases": [
        "sotatercept"
      ],
      "rxcui": "2678930",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C02KX06"
      ],
      "atc_memberships": [
        {
          "code": "C02KX06",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C02KX",
          "subclass_name": "Antihypertensives for pulmonary arterial hypertension"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2678930/properties.json"
    },
    {
      "id": "RXNORM:9997",
      "sequence": 861,
      "display_name": "Spironolakton",
      "canonical_name": "spironolactone",
      "aliases": [
        "spironolactone",
        "Spironolakton"
      ],
      "rxcui": "9997",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C03DA01"
      ],
      "atc_memberships": [
        {
          "code": "C03DA01",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C03DA",
          "subclass_name": "Aldosterone antagonists"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/9997/properties.json"
    },
    {
      "id": "RXNORM:258326",
      "sequence": 862,
      "display_name": "St. John's wort extract",
      "canonical_name": "St. John's wort extract",
      "aliases": [
        "Hyperici herba",
        "St. John's wort extract"
      ],
      "rxcui": "258326",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N06AX25"
      ],
      "atc_memberships": [
        {
          "code": "N06AX25",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N06AX",
          "subclass_name": "Other antidepressants"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/258326/properties.json"
    },
    {
      "id": "RXNORM:59763",
      "sequence": 863,
      "display_name": "stavudine",
      "canonical_name": "stavudine",
      "aliases": [
        "stavudine"
      ],
      "rxcui": "59763",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J05AF04"
      ],
      "atc_memberships": [
        {
          "code": "J05AF04",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J05AF",
          "subclass_name": "Nucleoside and nucleotide reverse transcriptase inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/59763/properties.json"
    },
    {
      "id": "RXNORM:2054968",
      "sequence": 864,
      "display_name": "stiripentol",
      "canonical_name": "stiripentol",
      "aliases": [
        "stiripentol"
      ],
      "rxcui": "2054968",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N03AX17"
      ],
      "atc_memberships": [
        {
          "code": "N03AX17",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N03AX",
          "subclass_name": "Other antiepileptics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2054968/properties.json"
    },
    {
      "id": "RXNORM:10114",
      "sequence": 865,
      "display_name": "streptozocin",
      "canonical_name": "streptozocin",
      "aliases": [
        "streptozocin"
      ],
      "rxcui": "10114",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01AD04"
      ],
      "atc_memberships": [
        {
          "code": "L01AD04",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01AD",
          "subclass_name": "Nitrosoureas"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/10114/properties.json"
    },
    {
      "id": "RXNORM:10156",
      "sequence": 866,
      "display_name": "sucralfate",
      "canonical_name": "sucralfate",
      "aliases": [
        "sucralfate"
      ],
      "rxcui": "10156",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A02BX02"
      ],
      "atc_memberships": [
        {
          "code": "A02BX02",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A02BX",
          "subclass_name": "Other drugs for peptic ulcer and gastro-oesophageal reflux disease (GORD)"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/10156/properties.json"
    },
    {
      "id": "RXNORM:56795",
      "sequence": 867,
      "display_name": "sufentanil",
      "canonical_name": "sufentanil",
      "aliases": [
        "sufentanil"
      ],
      "rxcui": "56795",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N01AH03"
      ],
      "atc_memberships": [
        {
          "code": "N01AH03",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N01AH",
          "subclass_name": "Opioid anesthetics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/56795/properties.json"
    },
    {
      "id": "RXNORM:1726988",
      "sequence": 868,
      "display_name": "sugammadex",
      "canonical_name": "sugammadex",
      "aliases": [
        "sugammadex"
      ],
      "rxcui": "1726988",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "V",
      "primary_group_name_tr": "Diğer maddeler",
      "atc_codes": [
        "V03AB35"
      ],
      "atc_memberships": [
        {
          "code": "V03AB35",
          "group_code": "V",
          "group_name_tr": "Diğer maddeler",
          "subclass_code": "V03AB",
          "subclass_name": "Antidotes"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1726988/properties.json"
    },
    {
      "id": "RXNORM:10172",
      "sequence": 869,
      "display_name": "sulfadimethoxine",
      "canonical_name": "sulfadimethoxine",
      "aliases": [
        "sulfadimethoxine"
      ],
      "rxcui": "10172",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J01ED01"
      ],
      "atc_memberships": [
        {
          "code": "J01ED01",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J01ED",
          "subclass_name": "Long-acting sulfonamides"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/10172/properties.json"
    },
    {
      "id": "RXNORM:10180",
      "sequence": 870,
      "display_name": "sulfamethoxazole",
      "canonical_name": "sulfamethoxazole",
      "aliases": [
        "sulfamethoxazole"
      ],
      "rxcui": "10180",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J01EC01"
      ],
      "atc_memberships": [
        {
          "code": "J01EC01",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J01EC",
          "subclass_name": "Intermediate-acting sulfonamides"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/10180/properties.json"
    },
    {
      "id": "RXNORM:10193",
      "sequence": 871,
      "display_name": "sulfathiazole",
      "canonical_name": "sulfathiazole",
      "aliases": [
        "sulfathiazole"
      ],
      "rxcui": "10193",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D06BA02",
        "J01EB07"
      ],
      "atc_memberships": [
        {
          "code": "D06BA02",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D06BA",
          "subclass_name": "Sulfonamides"
        },
        {
          "code": "J01EB07",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J01EB",
          "subclass_name": "Short-acting sulfonamides"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/10193/properties.json"
    },
    {
      "id": "RXNORM:37418",
      "sequence": 872,
      "display_name": "sumatriptan",
      "canonical_name": "sumatriptan",
      "aliases": [
        "sumatriptan"
      ],
      "rxcui": "37418",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N02CC01"
      ],
      "atc_memberships": [
        {
          "code": "N02CC01",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N02CC",
          "subclass_name": "Selective serotonin (5HT1) agonists"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/37418/properties.json"
    },
    {
      "id": "RXNORM:357977",
      "sequence": 873,
      "display_name": "sunitinib",
      "canonical_name": "sunitinib",
      "aliases": [
        "sunitinib"
      ],
      "rxcui": "357977",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01EX01"
      ],
      "atc_memberships": [
        {
          "code": "L01EX01",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01EX",
          "subclass_name": "Other protein kinase inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/357977/properties.json"
    },
    {
      "id": "RXNORM:1547099",
      "sequence": 874,
      "display_name": "suvorexant",
      "canonical_name": "suvorexant",
      "aliases": [
        "suvorexant"
      ],
      "rxcui": "1547099",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N05CJ01"
      ],
      "atc_memberships": [
        {
          "code": "N05CJ01",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N05CJ",
          "subclass_name": "Orexin receptor antagonists"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1547099/properties.json"
    },
    {
      "id": "RXNORM:42316",
      "sequence": 875,
      "display_name": "Takrolimus",
      "canonical_name": "tacrolimus",
      "aliases": [
        "tacrolimus",
        "Takrolimus"
      ],
      "rxcui": "42316",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D11AH01",
        "L04AD02"
      ],
      "atc_memberships": [
        {
          "code": "D11AH01",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D11AH",
          "subclass_name": "Agents for dermatitis, excluding corticosteroids"
        },
        {
          "code": "L04AD02",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L04AD",
          "subclass_name": "Calcineurin inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/42316/properties.json"
    },
    {
      "id": "RXNORM:358263",
      "sequence": 876,
      "display_name": "tadalafil",
      "canonical_name": "tadalafil",
      "aliases": [
        "tadalafil"
      ],
      "rxcui": "358263",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "G",
      "primary_group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
      "atc_codes": [
        "G04BE08"
      ],
      "atc_memberships": [
        {
          "code": "G04BE08",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G04BE",
          "subclass_name": "Drugs used in erectile dysfunction"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/358263/properties.json"
    },
    {
      "id": "RXNORM:2387211",
      "sequence": 877,
      "display_name": "tafasitamab",
      "canonical_name": "tafasitamab",
      "aliases": [
        "tafasitamab"
      ],
      "rxcui": "2387211",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01FX12"
      ],
      "atc_memberships": [
        {
          "code": "L01FX12",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01FX",
          "subclass_name": "Other monoclonal antibodies and antibody drug conjugates"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2387211/properties.json"
    },
    {
      "id": "RXNORM:2054023",
      "sequence": 878,
      "display_name": "tafenoquine",
      "canonical_name": "tafenoquine",
      "aliases": [
        "tafenoquine"
      ],
      "rxcui": "2054023",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "P",
      "primary_group_name_tr": "Antiparaziter maddeler, insektisitler ve repellentler",
      "atc_codes": [
        "P01BA07"
      ],
      "atc_memberships": [
        {
          "code": "P01BA07",
          "group_code": "P",
          "group_name_tr": "Antiparaziter maddeler, insektisitler ve repellentler",
          "subclass_code": "P01BA",
          "subclass_name": "Aminoquinolines"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2054023/properties.json"
    },
    {
      "id": "RXNORM:77492",
      "sequence": 879,
      "display_name": "tamsulosin",
      "canonical_name": "tamsulosin",
      "aliases": [
        "tamsulosin"
      ],
      "rxcui": "77492",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "G",
      "primary_group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
      "atc_codes": [
        "G04CA02"
      ],
      "atc_memberships": [
        {
          "code": "G04CA02",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G04CA",
          "subclass_name": "Alpha-adrenoreceptor antagonists"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/77492/properties.json"
    },
    {
      "id": "RXNORM:2602286",
      "sequence": 880,
      "display_name": "tapinarof",
      "canonical_name": "tapinarof",
      "aliases": [
        "tapinarof"
      ],
      "rxcui": "2602286",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D05AX07"
      ],
      "atc_memberships": [
        {
          "code": "D05AX07",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D05AX",
          "subclass_name": "Other antipsoriatics for topical use"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2602286/properties.json"
    },
    {
      "id": "RXNORM:2682954",
      "sequence": 881,
      "display_name": "tarlatamab",
      "canonical_name": "tarlatamab",
      "aliases": [
        "tarlatamab"
      ],
      "rxcui": "2682954",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01FX33"
      ],
      "atc_memberships": [
        {
          "code": "L01FX33",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01FX",
          "subclass_name": "Other monoclonal antibodies and antibody drug conjugates"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2682954/properties.json"
    },
    {
      "id": "RXNORM:2670453",
      "sequence": 882,
      "display_name": "taurolidine",
      "canonical_name": "taurolidine",
      "aliases": [
        "taurolidine"
      ],
      "rxcui": "2670453",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B05CA05"
      ],
      "atc_memberships": [
        {
          "code": "B05CA05",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B05CA",
          "subclass_name": "Antiinfectives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2670453/properties.json"
    },
    {
      "id": "RXNORM:1543173",
      "sequence": 883,
      "display_name": "tavaborole",
      "canonical_name": "tavaborole",
      "aliases": [
        "tavaborole"
      ],
      "rxcui": "1543173",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D01AE24"
      ],
      "atc_memberships": [
        {
          "code": "D01AE24",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D01AE",
          "subclass_name": "Other antifungals for topical use"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1543173/properties.json"
    },
    {
      "id": "RXNORM:83947",
      "sequence": 884,
      "display_name": "tazarotene",
      "canonical_name": "tazarotene",
      "aliases": [
        "tazarotene"
      ],
      "rxcui": "83947",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D05AX05"
      ],
      "atc_memberships": [
        {
          "code": "D05AX05",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D05AX",
          "subclass_name": "Other antipsoriatics for topical use"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/83947/properties.json"
    },
    {
      "id": "RXNORM:37617",
      "sequence": 885,
      "display_name": "tazobactam",
      "canonical_name": "tazobactam",
      "aliases": [
        "tazobactam"
      ],
      "rxcui": "37617",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J01CG02"
      ],
      "atc_memberships": [
        {
          "code": "J01CG02",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J01CG",
          "subclass_name": "Beta-lactamase inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/37617/properties.json"
    },
    {
      "id": "RXNORM:2619426",
      "sequence": 886,
      "display_name": "teclistamab",
      "canonical_name": "teclistamab",
      "aliases": [
        "teclistamab"
      ],
      "rxcui": "2619426",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01FX24"
      ],
      "atc_memberships": [
        {
          "code": "L01FX24",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01FX",
          "subclass_name": "Other monoclonal antibodies and antibody drug conjugates"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2619426/properties.json"
    },
    {
      "id": "RXNORM:2055104",
      "sequence": 887,
      "display_name": "tecovirimat",
      "canonical_name": "tecovirimat",
      "aliases": [
        "tecovirimat"
      ],
      "rxcui": "2055104",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J05AX24"
      ],
      "atc_memberships": [
        {
          "code": "J05AX24",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J05AX",
          "subclass_name": "Other antivirals"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2055104/properties.json"
    },
    {
      "id": "RXNORM:139778",
      "sequence": 888,
      "display_name": "tegaserod",
      "canonical_name": "tegaserod",
      "aliases": [
        "tegaserod"
      ],
      "rxcui": "139778",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A06AX06"
      ],
      "atc_memberships": [
        {
          "code": "A06AX06",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A06AX",
          "subclass_name": "Other drugs for constipation"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/139778/properties.json"
    },
    {
      "id": "RXNORM:473837",
      "sequence": 889,
      "display_name": "telavancin",
      "canonical_name": "telavancin",
      "aliases": [
        "telavancin"
      ],
      "rxcui": "473837",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J01XA03"
      ],
      "atc_memberships": [
        {
          "code": "J01XA03",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J01XA",
          "subclass_name": "Glycopeptide antibacterials"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/473837/properties.json"
    },
    {
      "id": "RXNORM:1872382",
      "sequence": 890,
      "display_name": "telotristat",
      "canonical_name": "telotristat",
      "aliases": [
        "telotristat"
      ],
      "rxcui": "1872382",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A16AX15"
      ],
      "atc_memberships": [
        {
          "code": "A16AX15",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A16AX",
          "subclass_name": "Various alimentary tract and metabolism products"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1872382/properties.json"
    },
    {
      "id": "RXNORM:10355",
      "sequence": 891,
      "display_name": "temazepam",
      "canonical_name": "temazepam",
      "aliases": [
        "temazepam"
      ],
      "rxcui": "10355",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N05CD07"
      ],
      "atc_memberships": [
        {
          "code": "N05CD07",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N05CD",
          "subclass_name": "Benzodiazepine derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/10355/properties.json"
    },
    {
      "id": "RXNORM:259280",
      "sequence": 892,
      "display_name": "tenecteplase",
      "canonical_name": "tenecteplase",
      "aliases": [
        "tenecteplase"
      ],
      "rxcui": "259280",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B01AD11"
      ],
      "atc_memberships": [
        {
          "code": "B01AD11",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B01AD",
          "subclass_name": "Enzymes"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/259280/properties.json"
    },
    {
      "id": "RXNORM:2477103",
      "sequence": 893,
      "display_name": "tepotinib",
      "canonical_name": "tepotinib",
      "aliases": [
        "tepotinib"
      ],
      "rxcui": "2477103",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01EP02",
        "L01EX21"
      ],
      "atc_memberships": [
        {
          "code": "L01EP02",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01EP",
          "subclass_name": "Cellular-mesenchymal-epithelial transition factor (c-MET) kinase inhibitors"
        },
        {
          "code": "L01EX21",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01EX",
          "subclass_name": "Other protein kinase inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2477103/properties.json"
    },
    {
      "id": "RXNORM:2274803",
      "sequence": 894,
      "display_name": "teprotumumab",
      "canonical_name": "teprotumumab",
      "aliases": [
        "teprotumumab"
      ],
      "rxcui": "2274803",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L04AG13"
      ],
      "atc_memberships": [
        {
          "code": "L04AG13",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L04AG",
          "subclass_name": "Monoclonal antibodies"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2274803/properties.json"
    },
    {
      "id": "RXNORM:37801",
      "sequence": 895,
      "display_name": "terbinafine",
      "canonical_name": "terbinafine",
      "aliases": [
        "terbinafine"
      ],
      "rxcui": "37801",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D01AE15",
        "D01BA02"
      ],
      "atc_memberships": [
        {
          "code": "D01AE15",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D01AE",
          "subclass_name": "Other antifungals for topical use"
        },
        {
          "code": "D01BA02",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D01BA",
          "subclass_name": "Antifungals for systemic use"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/37801/properties.json"
    },
    {
      "id": "RXNORM:10368",
      "sequence": 896,
      "display_name": "terbutaline",
      "canonical_name": "terbutaline",
      "aliases": [
        "terbutaline"
      ],
      "rxcui": "10368",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "R",
      "primary_group_name_tr": "Solunum sistemi",
      "atc_codes": [
        "R03AC03",
        "R03CC03"
      ],
      "atc_memberships": [
        {
          "code": "R03AC03",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R03AC",
          "subclass_name": "Selective beta-2-adrenoreceptor agonists"
        },
        {
          "code": "R03CC03",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R03CC",
          "subclass_name": "Selective beta-2-adrenoreceptor agonists"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/10368/properties.json"
    },
    {
      "id": "RXNORM:37806",
      "sequence": 897,
      "display_name": "terconazole",
      "canonical_name": "terconazole",
      "aliases": [
        "terconazole"
      ],
      "rxcui": "37806",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "G",
      "primary_group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
      "atc_codes": [
        "G01AG02"
      ],
      "atc_memberships": [
        {
          "code": "G01AG02",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G01AG",
          "subclass_name": "Triazole derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/37806/properties.json"
    },
    {
      "id": "RXNORM:1310520",
      "sequence": 898,
      "display_name": "teriflunomide",
      "canonical_name": "teriflunomide",
      "aliases": [
        "teriflunomide"
      ],
      "rxcui": "1310520",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L04AK02"
      ],
      "atc_memberships": [
        {
          "code": "L04AK02",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L04AK",
          "subclass_name": "Dihydroorotate dehydrogenase (DHODH) inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1310520/properties.json"
    },
    {
      "id": "RXNORM:32915",
      "sequence": 899,
      "display_name": "teriparatide",
      "canonical_name": "teriparatide",
      "aliases": [
        "teriparatide"
      ],
      "rxcui": "32915",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "H",
      "primary_group_name_tr": "Sistemik hormonlar (cinsiyet hormonları ve insülin hariç)",
      "atc_codes": [
        "H05AA02"
      ],
      "atc_memberships": [
        {
          "code": "H05AA02",
          "group_code": "H",
          "group_name_tr": "Sistemik hormonlar (cinsiyet hormonları ve insülin hariç)",
          "subclass_code": "H05AA",
          "subclass_name": "Parathyroid hormones and analogues"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/32915/properties.json"
    },
    {
      "id": "RXNORM:57048",
      "sequence": 900,
      "display_name": "terlipressin",
      "canonical_name": "terlipressin",
      "aliases": [
        "terlipressin"
      ],
      "rxcui": "57048",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "H",
      "primary_group_name_tr": "Sistemik hormonlar (cinsiyet hormonları ve insülin hariç)",
      "atc_codes": [
        "H01BA04"
      ],
      "atc_memberships": [
        {
          "code": "H01BA04",
          "group_code": "H",
          "group_name_tr": "Sistemik hormonlar (cinsiyet hormonları ve insülin hariç)",
          "subclass_code": "H01BA",
          "subclass_name": "Vasopressin and analogues"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/57048/properties.json"
    },
    {
      "id": "RXNORM:1044584",
      "sequence": 901,
      "display_name": "tesamorelin",
      "canonical_name": "tesamorelin",
      "aliases": [
        "tesamorelin"
      ],
      "rxcui": "1044584",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "H",
      "primary_group_name_tr": "Sistemik hormonlar (cinsiyet hormonları ve insülin hariç)",
      "atc_codes": [
        "H01AC06"
      ],
      "atc_memberships": [
        {
          "code": "H01AC06",
          "group_code": "H",
          "group_name_tr": "Sistemik hormonlar (cinsiyet hormonları ve insülin hariç)",
          "subclass_code": "H01AC",
          "subclass_name": "Somatropin and somatropin agonists"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1044584/properties.json"
    },
    {
      "id": "RXNORM:10379",
      "sequence": 902,
      "display_name": "testosterone",
      "canonical_name": "testosterone",
      "aliases": [
        "testosterone"
      ],
      "rxcui": "10379",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "G",
      "primary_group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
      "atc_codes": [
        "G03BA03"
      ],
      "atc_memberships": [
        {
          "code": "G03BA03",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G03BA",
          "subclass_name": "3-oxoandrosten (4) derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/10379/properties.json"
    },
    {
      "id": "RXNORM:1727875",
      "sequence": 903,
      "display_name": "tetanus immune globulin",
      "canonical_name": "tetanus immune globulin",
      "aliases": [
        "tetanus immune globulin",
        "tetanus immunoglobulin"
      ],
      "rxcui": "1727875",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J06BB02"
      ],
      "atc_memberships": [
        {
          "code": "J06BB02",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J06BB",
          "subclass_name": "Specific immunoglobulins"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1727875/properties.json"
    },
    {
      "id": "RXNORM:10390",
      "sequence": 904,
      "display_name": "tetrabenazine",
      "canonical_name": "tetrabenazine",
      "aliases": [
        "tetrabenazine"
      ],
      "rxcui": "10390",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N07XX06"
      ],
      "atc_memberships": [
        {
          "code": "N07XX06",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N07XX",
          "subclass_name": "Other nervous system drugs"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/10390/properties.json"
    },
    {
      "id": "RXNORM:10395",
      "sequence": 905,
      "display_name": "tetracycline",
      "canonical_name": "tetracycline",
      "aliases": [
        "tetracycline"
      ],
      "rxcui": "10395",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A01AB13",
        "D06AA04",
        "J01AA07",
        "S01AA09",
        "S02AA08",
        "S03AA02"
      ],
      "atc_memberships": [
        {
          "code": "A01AB13",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A01AB",
          "subclass_name": "Antiinfectives and antiseptics for local oral treatment"
        },
        {
          "code": "D06AA04",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D06AA",
          "subclass_name": "Tetracycline and derivatives"
        },
        {
          "code": "J01AA07",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J01AA",
          "subclass_name": "Tetracyclines"
        },
        {
          "code": "S01AA09",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01AA",
          "subclass_name": "Antibiotics"
        },
        {
          "code": "S02AA08",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S02AA",
          "subclass_name": "Antiinfectives"
        },
        {
          "code": "S03AA02",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S03AA",
          "subclass_name": "Antiinfectives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/10395/properties.json"
    },
    {
      "id": "RXNORM:10438",
      "sequence": 906,
      "display_name": "theophylline",
      "canonical_name": "theophylline",
      "aliases": [
        "theophylline"
      ],
      "rxcui": "10438",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "R",
      "primary_group_name_tr": "Solunum sistemi",
      "atc_codes": [
        "R03DA04"
      ],
      "atc_memberships": [
        {
          "code": "R03DA04",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R03DA",
          "subclass_name": "Xanthines"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/10438/properties.json"
    },
    {
      "id": "RXNORM:10454",
      "sequence": 907,
      "display_name": "Tiamin",
      "canonical_name": "thiamine",
      "aliases": [
        "thiamine",
        "thiamine (vit B1)",
        "Tiamin"
      ],
      "rxcui": "10454",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A11DA01"
      ],
      "atc_memberships": [
        {
          "code": "A11DA01",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A11DA",
          "subclass_name": "Vitamin B1, plain"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/10454/properties.json"
    },
    {
      "id": "RXNORM:10472",
      "sequence": 908,
      "display_name": "thimerosal",
      "canonical_name": "thimerosal",
      "aliases": [
        "thimerosal",
        "thiomersal"
      ],
      "rxcui": "10472",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D08AK06"
      ],
      "atc_memberships": [
        {
          "code": "D08AK06",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D08AK",
          "subclass_name": "Mercurial products"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/10472/properties.json"
    },
    {
      "id": "RXNORM:1546411",
      "sequence": 909,
      "display_name": "thiosulfate",
      "canonical_name": "thiosulfate",
      "aliases": [
        "thiosulfate"
      ],
      "rxcui": "1546411",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "V",
      "primary_group_name_tr": "Diğer maddeler",
      "atc_codes": [
        "V03AB06"
      ],
      "atc_memberships": [
        {
          "code": "V03AB06",
          "group_code": "V",
          "group_name_tr": "Diğer maddeler",
          "subclass_code": "V03AB",
          "subclass_name": "Antidotes"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1546411/properties.json"
    },
    {
      "id": "RXNORM:10473",
      "sequence": 910,
      "display_name": "thiotepa",
      "canonical_name": "thiotepa",
      "aliases": [
        "thiotepa"
      ],
      "rxcui": "10473",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01AC01"
      ],
      "atc_memberships": [
        {
          "code": "L01AC01",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01AC",
          "subclass_name": "Ethylene imines"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/10473/properties.json"
    },
    {
      "id": "RXNORM:10510",
      "sequence": 911,
      "display_name": "thiothixene",
      "canonical_name": "thiothixene",
      "aliases": [
        "thiothixene",
        "tiotixene"
      ],
      "rxcui": "10510",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N05AF04"
      ],
      "atc_memberships": [
        {
          "code": "N05AF04",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N05AF",
          "subclass_name": "Thioxanthene derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/10510/properties.json"
    },
    {
      "id": "RXNORM:1360721",
      "sequence": 912,
      "display_name": "thonzylamine",
      "canonical_name": "thonzylamine",
      "aliases": [
        "thonzylamine"
      ],
      "rxcui": "1360721",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D04AA01",
        "R01AC06",
        "R06AC06"
      ],
      "atc_memberships": [
        {
          "code": "D04AA01",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D04AA",
          "subclass_name": "Antihistamines for topical use"
        },
        {
          "code": "R01AC06",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R01AC",
          "subclass_name": "Antiallergic agents, excl. corticosteroids"
        },
        {
          "code": "R06AC06",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R06AC",
          "subclass_name": "Substituted ethylene diamines"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1360721/properties.json"
    },
    {
      "id": "RXNORM:10580",
      "sequence": 913,
      "display_name": "thyrotropin-releasing hormone",
      "canonical_name": "thyrotropin-releasing hormone",
      "aliases": [
        "protirelin",
        "thyrotropin-releasing hormone"
      ],
      "rxcui": "10580",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "V",
      "primary_group_name_tr": "Diğer maddeler",
      "atc_codes": [
        "V04CJ02"
      ],
      "atc_memberships": [
        {
          "code": "V04CJ02",
          "group_code": "V",
          "group_name_tr": "Diğer maddeler",
          "subclass_code": "V04CJ",
          "subclass_name": "Tests for thyreoidea function"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/10580/properties.json"
    },
    {
      "id": "RXNORM:31914",
      "sequence": 914,
      "display_name": "tiagabine",
      "canonical_name": "tiagabine",
      "aliases": [
        "tiagabine"
      ],
      "rxcui": "31914",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N03AG06"
      ],
      "atc_memberships": [
        {
          "code": "N03AG06",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N03AG",
          "subclass_name": "Fatty acid derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/31914/properties.json"
    },
    {
      "id": "RXNORM:1116632",
      "sequence": 915,
      "display_name": "ticagrelor",
      "canonical_name": "ticagrelor",
      "aliases": [
        "ticagrelor"
      ],
      "rxcui": "1116632",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B01AC24"
      ],
      "atc_memberships": [
        {
          "code": "B01AC24",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B01AC",
          "subclass_name": "Platelet aggregation inhibitors excl. heparin"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1116632/properties.json"
    },
    {
      "id": "RXNORM:38298",
      "sequence": 916,
      "display_name": "tioconazole",
      "canonical_name": "tioconazole",
      "aliases": [
        "tioconazole"
      ],
      "rxcui": "38298",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D01AC07",
        "G01AF08"
      ],
      "atc_memberships": [
        {
          "code": "D01AC07",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D01AC",
          "subclass_name": "Imidazole and triazole derivatives"
        },
        {
          "code": "G01AF08",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G01AF",
          "subclass_name": "Imidazole derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/38298/properties.json"
    },
    {
      "id": "RXNORM:6765",
      "sequence": 917,
      "display_name": "tiopronin",
      "canonical_name": "tiopronin",
      "aliases": [
        "tiopronin"
      ],
      "rxcui": "6765",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "G",
      "primary_group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
      "atc_codes": [
        "G04BX16"
      ],
      "atc_memberships": [
        {
          "code": "G04BX16",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G04BX",
          "subclass_name": "Other urologicals"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/6765/properties.json"
    },
    {
      "id": "RXNORM:190548",
      "sequence": 918,
      "display_name": "tipranavir",
      "canonical_name": "tipranavir",
      "aliases": [
        "tipranavir"
      ],
      "rxcui": "190548",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J05AE09"
      ],
      "atc_memberships": [
        {
          "code": "J05AE09",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J05AE",
          "subclass_name": "Protease inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/190548/properties.json"
    },
    {
      "id": "RXNORM:2471078",
      "sequence": 919,
      "display_name": "tirbanibulin",
      "canonical_name": "tirbanibulin",
      "aliases": [
        "tirbanibulin"
      ],
      "rxcui": "2471078",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D06BX03"
      ],
      "atc_memberships": [
        {
          "code": "D06BX03",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D06BX",
          "subclass_name": "Other chemotherapeutics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2471078/properties.json"
    },
    {
      "id": "RXNORM:73137",
      "sequence": 920,
      "display_name": "tirofiban",
      "canonical_name": "tirofiban",
      "aliases": [
        "tirofiban"
      ],
      "rxcui": "73137",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B01AC17"
      ],
      "atc_memberships": [
        {
          "code": "B01AC17",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B01AC",
          "subclass_name": "Platelet aggregation inhibitors excl. heparin"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/73137/properties.json"
    },
    {
      "id": "RXNORM:1986438",
      "sequence": 921,
      "display_name": "tisagenlecleucel",
      "canonical_name": "tisagenlecleucel",
      "aliases": [
        "tisagenlecleucel"
      ],
      "rxcui": "1986438",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01XL04"
      ],
      "atc_memberships": [
        {
          "code": "L01XL04",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01XL",
          "subclass_name": "Antineoplastic cell and gene therapy"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1986438/properties.json"
    },
    {
      "id": "RXNORM:2677426",
      "sequence": 922,
      "display_name": "tislelizumab",
      "canonical_name": "tislelizumab",
      "aliases": [
        "tislelizumab"
      ],
      "rxcui": "2677426",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01FF09"
      ],
      "atc_memberships": [
        {
          "code": "L01FF09",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01FF",
          "subclass_name": "PD-1/PD-L1 (Programmed cell death protein 1/death ligand 1) inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2677426/properties.json"
    },
    {
      "id": "RXNORM:2534233",
      "sequence": 923,
      "display_name": "tivozanib",
      "canonical_name": "tivozanib",
      "aliases": [
        "tivozanib"
      ],
      "rxcui": "2534233",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01EK03"
      ],
      "atc_memberships": [
        {
          "code": "L01EK03",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01EK",
          "subclass_name": "Vascular endothelial growth factor receptor (VEGFR) tyrosine kinase inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2534233/properties.json"
    },
    {
      "id": "RXNORM:10627",
      "sequence": 924,
      "display_name": "tobramycin",
      "canonical_name": "tobramycin",
      "aliases": [
        "tobramycin"
      ],
      "rxcui": "10627",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J01GB01",
        "S01AA12"
      ],
      "atc_memberships": [
        {
          "code": "J01GB01",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J01GB",
          "subclass_name": "Other aminoglycosides"
        },
        {
          "code": "S01AA12",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01AA",
          "subclass_name": "Antibiotics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/10627/properties.json"
    },
    {
      "id": "RXNORM:1357536",
      "sequence": 925,
      "display_name": "tofacitinib",
      "canonical_name": "tofacitinib",
      "aliases": [
        "tofacitinib"
      ],
      "rxcui": "1357536",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L04AF01"
      ],
      "atc_memberships": [
        {
          "code": "L04AF01",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L04AF",
          "subclass_name": "Janus-associated kinase (JAK) inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1357536/properties.json"
    },
    {
      "id": "RXNORM:2634995",
      "sequence": 926,
      "display_name": "tofersen",
      "canonical_name": "tofersen",
      "aliases": [
        "tofersen"
      ],
      "rxcui": "2634995",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N07XX22"
      ],
      "atc_memberships": [
        {
          "code": "N07XX22",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N07XX",
          "subclass_name": "Other nervous system drugs"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2634995/properties.json"
    },
    {
      "id": "RXNORM:10634",
      "sequence": 927,
      "display_name": "tolazoline",
      "canonical_name": "tolazoline",
      "aliases": [
        "tolazoline"
      ],
      "rxcui": "10634",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C04AB02",
        "M02AX02"
      ],
      "atc_memberships": [
        {
          "code": "C04AB02",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C04AB",
          "subclass_name": "Imidazoline derivatives"
        },
        {
          "code": "M02AX02",
          "group_code": "M",
          "group_name_tr": "Kas ve iskelet sistemi",
          "subclass_code": "M02AX",
          "subclass_name": "Other topical products for joint and muscular pain"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/10634/properties.json"
    },
    {
      "id": "RXNORM:72937",
      "sequence": 928,
      "display_name": "tolcapone",
      "canonical_name": "tolcapone",
      "aliases": [
        "tolcapone"
      ],
      "rxcui": "72937",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N04BX01"
      ],
      "atc_memberships": [
        {
          "code": "N04BX01",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N04BX",
          "subclass_name": "Other dopaminergic agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/72937/properties.json"
    },
    {
      "id": "RXNORM:119565",
      "sequence": 929,
      "display_name": "tolterodine",
      "canonical_name": "tolterodine",
      "aliases": [
        "tolterodine"
      ],
      "rxcui": "119565",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "G",
      "primary_group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
      "atc_codes": [
        "G04BD07"
      ],
      "atc_memberships": [
        {
          "code": "G04BD07",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G04BD",
          "subclass_name": "Drugs for urinary frequency and incontinence"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/119565/properties.json"
    },
    {
      "id": "RXNORM:358257",
      "sequence": 930,
      "display_name": "tolvaptan",
      "canonical_name": "tolvaptan",
      "aliases": [
        "tolvaptan"
      ],
      "rxcui": "358257",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C03XA01"
      ],
      "atc_memberships": [
        {
          "code": "C03XA01",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C03XA",
          "subclass_name": "Vasopressin antagonists"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/358257/properties.json"
    },
    {
      "id": "RXNORM:38404",
      "sequence": 931,
      "display_name": "topiramate",
      "canonical_name": "topiramate",
      "aliases": [
        "topiramate"
      ],
      "rxcui": "38404",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N03AX11"
      ],
      "atc_memberships": [
        {
          "code": "N03AX11",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N03AX",
          "subclass_name": "Other antiepileptics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/38404/properties.json"
    },
    {
      "id": "RXNORM:2682434",
      "sequence": 932,
      "display_name": "tovorafenib",
      "canonical_name": "tovorafenib",
      "aliases": [
        "tovorafenib"
      ],
      "rxcui": "2682434",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01EC04"
      ],
      "atc_memberships": [
        {
          "code": "L01EC04",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01EC",
          "subclass_name": "B-Raf serine-threonine kinase (BRAF) inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2682434/properties.json"
    },
    {
      "id": "RXNORM:10689",
      "sequence": 933,
      "display_name": "Tramadol",
      "canonical_name": "tramadol",
      "aliases": [
        "Tramadol",
        "tramadol"
      ],
      "rxcui": "10689",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N02AX02"
      ],
      "atc_memberships": [
        {
          "code": "N02AX02",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N02AX",
          "subclass_name": "Other opioids"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/10689/properties.json"
    },
    {
      "id": "RXNORM:38454",
      "sequence": 934,
      "display_name": "trandolapril",
      "canonical_name": "trandolapril",
      "aliases": [
        "trandolapril"
      ],
      "rxcui": "38454",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C09AA10"
      ],
      "atc_memberships": [
        {
          "code": "C09AA10",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C09AA",
          "subclass_name": "ACE inhibitors, plain"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/38454/properties.json"
    },
    {
      "id": "RXNORM:10691",
      "sequence": 935,
      "display_name": "tranexamic acid",
      "canonical_name": "tranexamic acid",
      "aliases": [
        "tranexamic acid"
      ],
      "rxcui": "10691",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B02AA02"
      ],
      "atc_memberships": [
        {
          "code": "B02AA02",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B02AA",
          "subclass_name": "Amino acids"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/10691/properties.json"
    },
    {
      "id": "RXNORM:283809",
      "sequence": 936,
      "display_name": "travoprost",
      "canonical_name": "travoprost",
      "aliases": [
        "travoprost"
      ],
      "rxcui": "283809",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "S",
      "primary_group_name_tr": "Duyu organları",
      "atc_codes": [
        "S01EE04"
      ],
      "atc_memberships": [
        {
          "code": "S01EE04",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01EE",
          "subclass_name": "Prostaglandin analogues"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/283809/properties.json"
    },
    {
      "id": "RXNORM:10737",
      "sequence": 937,
      "display_name": "trazodone",
      "canonical_name": "trazodone",
      "aliases": [
        "trazodone"
      ],
      "rxcui": "10737",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N06AX05"
      ],
      "atc_memberships": [
        {
          "code": "N06AX05",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N06AX",
          "subclass_name": "Other antidepressants"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/10737/properties.json"
    },
    {
      "id": "RXNORM:2619313",
      "sequence": 938,
      "display_name": "tremelimumab",
      "canonical_name": "tremelimumab",
      "aliases": [
        "tremelimumab"
      ],
      "rxcui": "2619313",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01FX20"
      ],
      "atc_memberships": [
        {
          "code": "L01FX20",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01FX",
          "subclass_name": "Other monoclonal antibodies and antibody drug conjugates"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2619313/properties.json"
    },
    {
      "id": "RXNORM:38508",
      "sequence": 939,
      "display_name": "treosulfan",
      "canonical_name": "treosulfan",
      "aliases": [
        "treosulfan"
      ],
      "rxcui": "38508",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01AB02"
      ],
      "atc_memberships": [
        {
          "code": "L01AB02",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01AB",
          "subclass_name": "Alkyl sulfonates"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/38508/properties.json"
    },
    {
      "id": "RXNORM:343048",
      "sequence": 940,
      "display_name": "treprostinil",
      "canonical_name": "treprostinil",
      "aliases": [
        "treprostinil"
      ],
      "rxcui": "343048",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B01AC21"
      ],
      "atc_memberships": [
        {
          "code": "B01AC21",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B01AC",
          "subclass_name": "Platelet aggregation inhibitors excl. heparin"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/343048/properties.json"
    },
    {
      "id": "RXNORM:10753",
      "sequence": 941,
      "display_name": "tretinoin",
      "canonical_name": "tretinoin",
      "aliases": [
        "tretinoin"
      ],
      "rxcui": "10753",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D10AD01",
        "L01XF01"
      ],
      "atc_memberships": [
        {
          "code": "D10AD01",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D10AD",
          "subclass_name": "Retinoids for topical use in acne"
        },
        {
          "code": "L01XF01",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01XF",
          "subclass_name": "Retinoids for cancer treatment"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/10753/properties.json"
    },
    {
      "id": "RXNORM:10759",
      "sequence": 942,
      "display_name": "triamcinolone",
      "canonical_name": "triamcinolone",
      "aliases": [
        "triamcinolone"
      ],
      "rxcui": "10759",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A01AC01",
        "C05AA12",
        "D07AB09",
        "D07XB02",
        "H02AB08",
        "R01AD11",
        "R03BA06",
        "S01BA05"
      ],
      "atc_memberships": [
        {
          "code": "A01AC01",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A01AC",
          "subclass_name": "Corticosteroids for local oral treatment"
        },
        {
          "code": "C05AA12",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C05AA",
          "subclass_name": "Corticosteroids"
        },
        {
          "code": "D07AB09",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D07AB",
          "subclass_name": "Corticosteroids, moderately potent (group II)"
        },
        {
          "code": "D07XB02",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D07XB",
          "subclass_name": "Corticosteroids, moderately potent, other combinations"
        },
        {
          "code": "H02AB08",
          "group_code": "H",
          "group_name_tr": "Sistemik hormonlar (cinsiyet hormonları ve insülin hariç)",
          "subclass_code": "H02AB",
          "subclass_name": "Glucocorticoids"
        },
        {
          "code": "R01AD11",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R01AD",
          "subclass_name": "Corticosteroids"
        },
        {
          "code": "R03BA06",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R03BA",
          "subclass_name": "Glucocorticoids"
        },
        {
          "code": "S01BA05",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01BA",
          "subclass_name": "Corticosteroids, plain"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/10759/properties.json"
    },
    {
      "id": "RXNORM:10767",
      "sequence": 943,
      "display_name": "triazolam",
      "canonical_name": "triazolam",
      "aliases": [
        "triazolam"
      ],
      "rxcui": "10767",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N05CD05"
      ],
      "atc_memberships": [
        {
          "code": "N05CD05",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N05CD",
          "subclass_name": "Benzodiazepine derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/10767/properties.json"
    },
    {
      "id": "RXNORM:10795",
      "sequence": 944,
      "display_name": "triclosan",
      "canonical_name": "triclosan",
      "aliases": [
        "triclosan"
      ],
      "rxcui": "10795",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D08AE04",
        "D09AA06"
      ],
      "atc_memberships": [
        {
          "code": "D08AE04",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D08AE",
          "subclass_name": "Phenol and derivatives"
        },
        {
          "code": "D09AA06",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D09AA",
          "subclass_name": "Medicated dressings with antiinfectives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/10795/properties.json"
    },
    {
      "id": "RXNORM:38623",
      "sequence": 945,
      "display_name": "triethanolamine",
      "canonical_name": "triethanolamine",
      "aliases": [
        "triethanolamine",
        "trolamine"
      ],
      "rxcui": "38623",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "D",
      "primary_group_name_tr": "Dermatolojik maddeler",
      "atc_codes": [
        "D03AX12"
      ],
      "atc_memberships": [
        {
          "code": "D03AX12",
          "group_code": "D",
          "group_name_tr": "Dermatolojik maddeler",
          "subclass_code": "D03AX",
          "subclass_name": "Other cicatrizants"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/38623/properties.json"
    },
    {
      "id": "RXNORM:10811",
      "sequence": 946,
      "display_name": "trihexyphenidyl",
      "canonical_name": "trihexyphenidyl",
      "aliases": [
        "trihexyphenidyl"
      ],
      "rxcui": "10811",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N04AA01"
      ],
      "atc_memberships": [
        {
          "code": "N04AA01",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N04AA",
          "subclass_name": "Tertiary amines"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/10811/properties.json"
    },
    {
      "id": "RXNORM:2479690",
      "sequence": 947,
      "display_name": "trilaciclib",
      "canonical_name": "trilaciclib",
      "aliases": [
        "trilaciclib"
      ],
      "rxcui": "2479690",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "V",
      "primary_group_name_tr": "Diğer maddeler",
      "atc_codes": [
        "V03AF12"
      ],
      "atc_memberships": [
        {
          "code": "V03AF12",
          "group_code": "V",
          "group_name_tr": "Diğer maddeler",
          "subclass_code": "V03AF",
          "subclass_name": "Detoxifying agents for antineoplastic treatment"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2479690/properties.json"
    },
    {
      "id": "RXNORM:10834",
      "sequence": 948,
      "display_name": "trimipramine",
      "canonical_name": "trimipramine",
      "aliases": [
        "trimipramine"
      ],
      "rxcui": "10834",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N06AA06"
      ],
      "atc_memberships": [
        {
          "code": "N06AA06",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N06AA",
          "subclass_name": "Non-selective monoamine reuptake inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/10834/properties.json"
    },
    {
      "id": "RXNORM:38782",
      "sequence": 949,
      "display_name": "triptorelin",
      "canonical_name": "triptorelin",
      "aliases": [
        "triptorelin"
      ],
      "rxcui": "38782",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L02AE04"
      ],
      "atc_memberships": [
        {
          "code": "L02AE04",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L02AE",
          "subclass_name": "Gonadotropin releasing hormone analogues"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/38782/properties.json"
    },
    {
      "id": "RXNORM:2632852",
      "sequence": 950,
      "display_name": "trofinetide",
      "canonical_name": "trofinetide",
      "aliases": [
        "trofinetide"
      ],
      "rxcui": "2632852",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N07XX24"
      ],
      "atc_memberships": [
        {
          "code": "N07XX24",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N07XX",
          "subclass_name": "Other nervous system drugs"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2632852/properties.json"
    },
    {
      "id": "RXNORM:10865",
      "sequence": 951,
      "display_name": "tromethamine",
      "canonical_name": "tromethamine",
      "aliases": [
        "trometamol",
        "tromethamine"
      ],
      "rxcui": "10865",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B05BB03",
        "B05XX02"
      ],
      "atc_memberships": [
        {
          "code": "B05BB03",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B05BB",
          "subclass_name": "Solutions affecting the electrolyte balance"
        },
        {
          "code": "B05XX02",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B05XX",
          "subclass_name": "Other i.v. solution additives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/10865/properties.json"
    },
    {
      "id": "RXNORM:10869",
      "sequence": 952,
      "display_name": "tropicamide",
      "canonical_name": "tropicamide",
      "aliases": [
        "tropicamide"
      ],
      "rxcui": "10869",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "S",
      "primary_group_name_tr": "Duyu organları",
      "atc_codes": [
        "S01FA06"
      ],
      "atc_memberships": [
        {
          "code": "S01FA06",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01FA",
          "subclass_name": "Anticholinergics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/10869/properties.json"
    },
    {
      "id": "RXNORM:236778",
      "sequence": 953,
      "display_name": "trospium",
      "canonical_name": "trospium",
      "aliases": [
        "trospium"
      ],
      "rxcui": "236778",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "G",
      "primary_group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
      "atc_codes": [
        "G04BD09"
      ],
      "atc_memberships": [
        {
          "code": "G04BD09",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G04BD",
          "subclass_name": "Drugs for urinary frequency and incontinence"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/236778/properties.json"
    },
    {
      "id": "RXNORM:10878",
      "sequence": 954,
      "display_name": "trypan blue",
      "canonical_name": "trypan blue",
      "aliases": [
        "trypan blue"
      ],
      "rxcui": "10878",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "S",
      "primary_group_name_tr": "Duyu organları",
      "atc_codes": [
        "S01KX02"
      ],
      "atc_memberships": [
        {
          "code": "S01KX02",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01KX",
          "subclass_name": "Other surgical aids"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/10878/properties.json"
    },
    {
      "id": "RXNORM:38998",
      "sequence": 955,
      "display_name": "tyloxapol",
      "canonical_name": "tyloxapol",
      "aliases": [
        "tyloxapol"
      ],
      "rxcui": "38998",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "R",
      "primary_group_name_tr": "Solunum sistemi",
      "atc_codes": [
        "R05CA01"
      ],
      "atc_memberships": [
        {
          "code": "R05CA01",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R05CA",
          "subclass_name": "Expectorants"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/38998/properties.json"
    },
    {
      "id": "RXNORM:21406",
      "sequence": 956,
      "display_name": "ubidecarenone",
      "canonical_name": "ubidecarenone",
      "aliases": [
        "ubidecarenone"
      ],
      "rxcui": "21406",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C01EB09"
      ],
      "atc_memberships": [
        {
          "code": "C01EB09",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C01EB",
          "subclass_name": "Other cardiac preparations"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/21406/properties.json"
    },
    {
      "id": "RXNORM:2626349",
      "sequence": 957,
      "display_name": "ublituximab",
      "canonical_name": "ublituximab",
      "aliases": [
        "ublituximab"
      ],
      "rxcui": "2626349",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L04AG14"
      ],
      "atc_memberships": [
        {
          "code": "L04AG14",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L04AG",
          "subclass_name": "Monoclonal antibodies"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2626349/properties.json"
    },
    {
      "id": "RXNORM:2268216",
      "sequence": 958,
      "display_name": "ubrogepant",
      "canonical_name": "ubrogepant",
      "aliases": [
        "ubrogepant"
      ],
      "rxcui": "2268216",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N02CD04"
      ],
      "atc_memberships": [
        {
          "code": "N02CD04",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N02CD",
          "subclass_name": "Calcitonin gene-related peptide (CGRP) antagonists"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2268216/properties.json"
    },
    {
      "id": "RXNORM:1005921",
      "sequence": 959,
      "display_name": "ulipristal",
      "canonical_name": "ulipristal",
      "aliases": [
        "ulipristal"
      ],
      "rxcui": "1005921",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "G",
      "primary_group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
      "atc_codes": [
        "G03AD02",
        "G03XB02"
      ],
      "atc_memberships": [
        {
          "code": "G03AD02",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G03AD",
          "subclass_name": "Emergency contraceptives"
        },
        {
          "code": "G03XB02",
          "group_code": "G",
          "group_name_tr": "Ürogenital sistem ve cinsiyet hormonları",
          "subclass_code": "G03XB",
          "subclass_name": "Progesterone receptor modulators"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1005921/properties.json"
    },
    {
      "id": "RXNORM:2196092",
      "sequence": 960,
      "display_name": "upadacitinib",
      "canonical_name": "upadacitinib",
      "aliases": [
        "upadacitinib"
      ],
      "rxcui": "2196092",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L04AF03"
      ],
      "atc_memberships": [
        {
          "code": "L04AF03",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L04AF",
          "subclass_name": "Janus-associated kinase (JAK) inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2196092/properties.json"
    },
    {
      "id": "RXNORM:1665222",
      "sequence": 961,
      "display_name": "uridine triacetate",
      "canonical_name": "uridine triacetate",
      "aliases": [
        "uridine triacetate"
      ],
      "rxcui": "1665222",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A16AX13"
      ],
      "atc_memberships": [
        {
          "code": "A16AX13",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A16AX",
          "subclass_name": "Various alimentary tract and metabolism products"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1665222/properties.json"
    },
    {
      "id": "RXNORM:73645",
      "sequence": 962,
      "display_name": "valacyclovir",
      "canonical_name": "valacyclovir",
      "aliases": [
        "valaciclovir",
        "valacyclovir"
      ],
      "rxcui": "73645",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J05AB11"
      ],
      "atc_memberships": [
        {
          "code": "J05AB11",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J05AB",
          "subclass_name": "Nucleosides and nucleotides excl. reverse transcriptase inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/73645/properties.json"
    },
    {
      "id": "RXNORM:275891",
      "sequence": 963,
      "display_name": "valganciclovir",
      "canonical_name": "valganciclovir",
      "aliases": [
        "valganciclovir"
      ],
      "rxcui": "275891",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J05AB14"
      ],
      "atc_memberships": [
        {
          "code": "J05AB14",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J05AB",
          "subclass_name": "Nucleosides and nucleotides excl. reverse transcriptase inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/275891/properties.json"
    },
    {
      "id": "RXNORM:31435",
      "sequence": 964,
      "display_name": "valrubicin",
      "canonical_name": "valrubicin",
      "aliases": [
        "valrubicin"
      ],
      "rxcui": "31435",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01DB09"
      ],
      "atc_memberships": [
        {
          "code": "L01DB09",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01DB",
          "subclass_name": "Anthracyclines and related substances"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/31435/properties.json"
    },
    {
      "id": "RXNORM:69749",
      "sequence": 965,
      "display_name": "Valsartan",
      "canonical_name": "valsartan",
      "aliases": [
        "valsartan",
        "Valsartan"
      ],
      "rxcui": "69749",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C09CA03"
      ],
      "atc_memberships": [
        {
          "code": "C09CA03",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C09CA",
          "subclass_name": "Angiotensin II receptor blockers (ARBs), plain"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/69749/properties.json"
    },
    {
      "id": "RXNORM:2669799",
      "sequence": 966,
      "display_name": "vamorolone",
      "canonical_name": "vamorolone",
      "aliases": [
        "vamorolone"
      ],
      "rxcui": "2669799",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "H",
      "primary_group_name_tr": "Sistemik hormonlar (cinsiyet hormonları ve insülin hariç)",
      "atc_codes": [
        "H02AB18"
      ],
      "atc_memberships": [
        {
          "code": "H02AB18",
          "group_code": "H",
          "group_name_tr": "Sistemik hormonlar (cinsiyet hormonları ve insülin hariç)",
          "subclass_code": "H02AB",
          "subclass_name": "Glucocorticoids"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2669799/properties.json"
    },
    {
      "id": "RXNORM:11124",
      "sequence": 967,
      "display_name": "vancomycin",
      "canonical_name": "vancomycin",
      "aliases": [
        "vancomycin"
      ],
      "rxcui": "11124",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A07AA09",
        "J01XA01",
        "S01AA28"
      ],
      "atc_memberships": [
        {
          "code": "A07AA09",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A07AA",
          "subclass_name": "Antibiotics"
        },
        {
          "code": "J01XA01",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J01XA",
          "subclass_name": "Glycopeptide antibacterials"
        },
        {
          "code": "S01AA28",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01AA",
          "subclass_name": "Antibiotics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/11124/properties.json"
    },
    {
      "id": "RXNORM:591622",
      "sequence": 968,
      "display_name": "varenicline",
      "canonical_name": "varenicline",
      "aliases": [
        "varenicline"
      ],
      "rxcui": "591622",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N07BA03",
        "S01XA28"
      ],
      "atc_memberships": [
        {
          "code": "N07BA03",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N07BA",
          "subclass_name": "Drugs used in nicotine dependence"
        },
        {
          "code": "S01XA28",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01XA",
          "subclass_name": "Other ophthalmologicals"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/591622/properties.json"
    },
    {
      "id": "RXNORM:39385",
      "sequence": 969,
      "display_name": "varicella-zoster immune globulin",
      "canonical_name": "varicella-zoster immune globulin",
      "aliases": [
        "varicella-zoster immune globulin",
        "varicella/zoster immunoglobulin"
      ],
      "rxcui": "39385",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J06BB03"
      ],
      "atc_memberships": [
        {
          "code": "J06BB03",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J06BB",
          "subclass_name": "Specific immunoglobulins"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/39385/properties.json"
    },
    {
      "id": "RXNORM:71535",
      "sequence": 970,
      "display_name": "vecuronium",
      "canonical_name": "vecuronium",
      "aliases": [
        "vecuronium"
      ],
      "rxcui": "71535",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "M",
      "primary_group_name_tr": "Kas ve iskelet sistemi",
      "atc_codes": [
        "M03AC03"
      ],
      "atc_memberships": [
        {
          "code": "M03AC03",
          "group_code": "M",
          "group_name_tr": "Kas ve iskelet sistemi",
          "subclass_code": "M03AC",
          "subclass_name": "Other quaternary ammonium compounds"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/71535/properties.json"
    },
    {
      "id": "RXNORM:1147220",
      "sequence": 971,
      "display_name": "vemurafenib",
      "canonical_name": "vemurafenib",
      "aliases": [
        "vemurafenib"
      ],
      "rxcui": "1147220",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01EC01"
      ],
      "atc_memberships": [
        {
          "code": "L01EC01",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01EC",
          "subclass_name": "B-Raf serine-threonine kinase (BRAF) inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1147220/properties.json"
    },
    {
      "id": "RXNORM:11170",
      "sequence": 972,
      "display_name": "verapamil",
      "canonical_name": "verapamil",
      "aliases": [
        "verapamil"
      ],
      "rxcui": "11170",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C08DA01"
      ],
      "atc_memberships": [
        {
          "code": "C08DA01",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C08DA",
          "subclass_name": "Phenylalkylamine derivatives"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/11170/properties.json"
    },
    {
      "id": "RXNORM:2475830",
      "sequence": 973,
      "display_name": "vericiguat",
      "canonical_name": "vericiguat",
      "aliases": [
        "vericiguat"
      ],
      "rxcui": "2475830",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C01DX22"
      ],
      "atc_memberships": [
        {
          "code": "C01DX22",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C01DX",
          "subclass_name": "Other vasodilators used in cardiac diseases"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2475830/properties.json"
    },
    {
      "id": "RXNORM:1989819",
      "sequence": 974,
      "display_name": "vestronidase alfa",
      "canonical_name": "vestronidase alfa",
      "aliases": [
        "vestronidase alfa"
      ],
      "rxcui": "1989819",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A16AB18"
      ],
      "atc_memberships": [
        {
          "code": "A16AB18",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A16AB",
          "subclass_name": "Enzymes"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1989819/properties.json"
    },
    {
      "id": "RXNORM:11194",
      "sequence": 975,
      "display_name": "vidarabine",
      "canonical_name": "vidarabine",
      "aliases": [
        "vidarabine"
      ],
      "rxcui": "11194",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J05AB03",
        "S01AD06"
      ],
      "atc_memberships": [
        {
          "code": "J05AB03",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J05AB",
          "subclass_name": "Nucleosides and nucleotides excl. reverse transcriptase inhibitors"
        },
        {
          "code": "S01AD06",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01AD",
          "subclass_name": "Antivirals"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/11194/properties.json"
    },
    {
      "id": "RXNORM:11196",
      "sequence": 976,
      "display_name": "viloxazine",
      "canonical_name": "viloxazine",
      "aliases": [
        "viloxazine"
      ],
      "rxcui": "11196",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N06AX09"
      ],
      "atc_memberships": [
        {
          "code": "N06AX09",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N06AX",
          "subclass_name": "Other antidepressants"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/11196/properties.json"
    },
    {
      "id": "RXNORM:11198",
      "sequence": 977,
      "display_name": "vinblastine",
      "canonical_name": "vinblastine",
      "aliases": [
        "vinblastine"
      ],
      "rxcui": "11198",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01CA01"
      ],
      "atc_memberships": [
        {
          "code": "L01CA01",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01CA",
          "subclass_name": "Vinca alkaloids and analogues"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/11198/properties.json"
    },
    {
      "id": "RXNORM:39541",
      "sequence": 978,
      "display_name": "vinorelbine",
      "canonical_name": "vinorelbine",
      "aliases": [
        "vinorelbine"
      ],
      "rxcui": "39541",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01CA04"
      ],
      "atc_memberships": [
        {
          "code": "L01CA04",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01CA",
          "subclass_name": "Vinca alkaloids and analogues"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/39541/properties.json"
    },
    {
      "id": "RXNORM:1242987",
      "sequence": 979,
      "display_name": "vismodegib",
      "canonical_name": "vismodegib",
      "aliases": [
        "vismodegib"
      ],
      "rxcui": "1242987",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01XJ01"
      ],
      "atc_memberships": [
        {
          "code": "L01XJ01",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01XJ",
          "subclass_name": "Hedgehog pathway inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1242987/properties.json"
    },
    {
      "id": "RXNORM:11248",
      "sequence": 980,
      "display_name": "vitamin B12",
      "canonical_name": "vitamin B12",
      "aliases": [
        "cyanocobalamin",
        "vitamin B12"
      ],
      "rxcui": "11248",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B03BA01"
      ],
      "atc_memberships": [
        {
          "code": "B03BA01",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B03BA",
          "subclass_name": "Vitamin B12 (cyanocobalamin and analogues)"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/11248/properties.json"
    },
    {
      "id": "RXNORM:8308",
      "sequence": 981,
      "display_name": "vitamin K1",
      "canonical_name": "vitamin K1",
      "aliases": [
        "phytomenadione",
        "vitamin K1"
      ],
      "rxcui": "8308",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B02BA01"
      ],
      "atc_memberships": [
        {
          "code": "B02BA01",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B02BA",
          "subclass_name": "Vitamin K"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/8308/properties.json"
    },
    {
      "id": "RXNORM:2637345",
      "sequence": 982,
      "display_name": "volanesorsen",
      "canonical_name": "volanesorsen",
      "aliases": [
        "volanesorsen"
      ],
      "rxcui": "2637345",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "C",
      "primary_group_name_tr": "Kalp ve damar sistemi",
      "atc_codes": [
        "C10AX18"
      ],
      "atc_memberships": [
        {
          "code": "C10AX18",
          "group_code": "C",
          "group_name_tr": "Kalp ve damar sistemi",
          "subclass_code": "C10AX",
          "subclass_name": "Other lipid modifying agents"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2637345/properties.json"
    },
    {
      "id": "RXNORM:11274",
      "sequence": 983,
      "display_name": "von Willebrand factor",
      "canonical_name": "von Willebrand factor",
      "aliases": [
        "von Willebrand factor"
      ],
      "rxcui": "11274",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B02BD10"
      ],
      "atc_memberships": [
        {
          "code": "B02BD10",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B02BD",
          "subclass_name": "Blood coagulation factors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/11274/properties.json"
    },
    {
      "id": "RXNORM:2604577",
      "sequence": 984,
      "display_name": "vonoprazan",
      "canonical_name": "vonoprazan",
      "aliases": [
        "vonoprazan"
      ],
      "rxcui": "2604577",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A02BC08"
      ],
      "atc_memberships": [
        {
          "code": "A02BC08",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A02BC",
          "subclass_name": "Proton pump inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2604577/properties.json"
    },
    {
      "id": "RXNORM:1537034",
      "sequence": 985,
      "display_name": "vorapaxar",
      "canonical_name": "vorapaxar",
      "aliases": [
        "vorapaxar"
      ],
      "rxcui": "1537034",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B01AC26"
      ],
      "atc_memberships": [
        {
          "code": "B01AC26",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B01AC",
          "subclass_name": "Platelet aggregation inhibitors excl. heparin"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1537034/properties.json"
    },
    {
      "id": "RXNORM:1455099",
      "sequence": 986,
      "display_name": "vortioxetine",
      "canonical_name": "vortioxetine",
      "aliases": [
        "vortioxetine"
      ],
      "rxcui": "1455099",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N06AX26"
      ],
      "atc_memberships": [
        {
          "code": "N06AX26",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N06AX",
          "subclass_name": "Other antidepressants"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/1455099/properties.json"
    },
    {
      "id": "RXNORM:2586354",
      "sequence": 987,
      "display_name": "vosoritide",
      "canonical_name": "vosoritide",
      "aliases": [
        "vosoritide"
      ],
      "rxcui": "2586354",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "M",
      "primary_group_name_tr": "Kas ve iskelet sistemi",
      "atc_codes": [
        "M05BX07"
      ],
      "atc_memberships": [
        {
          "code": "M05BX07",
          "group_code": "M",
          "group_name_tr": "Kas ve iskelet sistemi",
          "subclass_code": "M05BX",
          "subclass_name": "Other drugs affecting bone structure and mineralization"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2586354/properties.json"
    },
    {
      "id": "RXNORM:2604578",
      "sequence": 988,
      "display_name": "vutrisiran",
      "canonical_name": "vutrisiran",
      "aliases": [
        "vutrisiran"
      ],
      "rxcui": "2604578",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N07XX18"
      ],
      "atc_memberships": [
        {
          "code": "N07XX18",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N07XX",
          "subclass_name": "Other nervous system drugs"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2604578/properties.json"
    },
    {
      "id": "RXNORM:11289",
      "sequence": 989,
      "display_name": "Varfarin",
      "canonical_name": "warfarin",
      "aliases": [
        "Varfarin",
        "warfarin"
      ],
      "rxcui": "11289",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "B",
      "primary_group_name_tr": "Kan ve kan yapıcı organlar",
      "atc_codes": [
        "B01AA03"
      ],
      "atc_memberships": [
        {
          "code": "B01AA03",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B01AA",
          "subclass_name": "Vitamin K antagonists"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/11289/properties.json"
    },
    {
      "id": "RXNORM:39841",
      "sequence": 990,
      "display_name": "xylometazoline",
      "canonical_name": "xylometazoline",
      "aliases": [
        "xylometazoline"
      ],
      "rxcui": "39841",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "R",
      "primary_group_name_tr": "Solunum sistemi",
      "atc_codes": [
        "R01AA07",
        "R01AB06",
        "S01GA03"
      ],
      "atc_memberships": [
        {
          "code": "R01AA07",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R01AA",
          "subclass_name": "Sympathomimetics, plain"
        },
        {
          "code": "R01AB06",
          "group_code": "R",
          "group_name_tr": "Solunum sistemi",
          "subclass_code": "R01AB",
          "subclass_name": "Sympathomimetics, combinations excl. corticosteroids"
        },
        {
          "code": "S01GA03",
          "group_code": "S",
          "group_name_tr": "Duyu organları",
          "subclass_code": "S01GA",
          "subclass_name": "Sympathomimetics used as decongestants"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/39841/properties.json"
    },
    {
      "id": "RXNORM:2637955",
      "sequence": 991,
      "display_name": "zavegepant",
      "canonical_name": "zavegepant",
      "aliases": [
        "zavegepant"
      ],
      "rxcui": "2637955",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N02CD08"
      ],
      "atc_memberships": [
        {
          "code": "N02CD08",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N02CD",
          "subclass_name": "Calcitonin gene-related peptide (CGRP) antagonists"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2637955/properties.json"
    },
    {
      "id": "RXNORM:68503",
      "sequence": 992,
      "display_name": "ziconotide",
      "canonical_name": "ziconotide",
      "aliases": [
        "ziconotide"
      ],
      "rxcui": "68503",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N02BG08"
      ],
      "atc_memberships": [
        {
          "code": "N02BG08",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N02BG",
          "subclass_name": "Other analgesics and antipyretics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/68503/properties.json"
    },
    {
      "id": "RXNORM:11413",
      "sequence": 993,
      "display_name": "zidovudine",
      "canonical_name": "zidovudine",
      "aliases": [
        "zidovudine"
      ],
      "rxcui": "11413",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "J",
      "primary_group_name_tr": "Sistemik antiinfektifler",
      "atc_codes": [
        "J05AF01"
      ],
      "atc_memberships": [
        {
          "code": "J05AF01",
          "group_code": "J",
          "group_name_tr": "Sistemik antiinfektifler",
          "subclass_code": "J05AF",
          "subclass_name": "Nucleoside and nucleotide reverse transcriptase inhibitors"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/11413/properties.json"
    },
    {
      "id": "RXNORM:58295",
      "sequence": 994,
      "display_name": "zinc acetate",
      "canonical_name": "zinc acetate",
      "aliases": [
        "zinc acetate"
      ],
      "rxcui": "58295",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A16AX05"
      ],
      "atc_memberships": [
        {
          "code": "A16AX05",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A16AX",
          "subclass_name": "Various alimentary tract and metabolism products"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/58295/properties.json"
    },
    {
      "id": "RXNORM:58300",
      "sequence": 995,
      "display_name": "zinc gluconate",
      "canonical_name": "zinc gluconate",
      "aliases": [
        "zinc gluconate"
      ],
      "rxcui": "58300",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A12CB02"
      ],
      "atc_memberships": [
        {
          "code": "A12CB02",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A12CB",
          "subclass_name": "Zinc"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/58300/properties.json"
    },
    {
      "id": "RXNORM:39954",
      "sequence": 996,
      "display_name": "zinc sulfate",
      "canonical_name": "zinc sulfate",
      "aliases": [
        "zinc sulfate"
      ],
      "rxcui": "39954",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "A",
      "primary_group_name_tr": "Sindirim sistemi ve metabolizma",
      "atc_codes": [
        "A12CB01",
        "B05XA18"
      ],
      "atc_memberships": [
        {
          "code": "A12CB01",
          "group_code": "A",
          "group_name_tr": "Sindirim sistemi ve metabolizma",
          "subclass_code": "A12CB",
          "subclass_name": "Zinc"
        },
        {
          "code": "B05XA18",
          "group_code": "B",
          "group_name_tr": "Kan ve kan yapıcı organlar",
          "subclass_code": "B05XA",
          "subclass_name": "Electrolyte solutions"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/39954/properties.json"
    },
    {
      "id": "RXNORM:2695869",
      "sequence": 997,
      "display_name": "zolbetuximab",
      "canonical_name": "zolbetuximab",
      "aliases": [
        "zolbetuximab"
      ],
      "rxcui": "2695869",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "L",
      "primary_group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
      "atc_codes": [
        "L01FX31"
      ],
      "atc_memberships": [
        {
          "code": "L01FX31",
          "group_code": "L",
          "group_name_tr": "Antineoplastik ve immünomodülatör maddeler",
          "subclass_code": "L01FX",
          "subclass_name": "Other monoclonal antibodies and antibody drug conjugates"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2695869/properties.json"
    },
    {
      "id": "RXNORM:135775",
      "sequence": 998,
      "display_name": "zolmitriptan",
      "canonical_name": "zolmitriptan",
      "aliases": [
        "zolmitriptan"
      ],
      "rxcui": "135775",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N02CC03"
      ],
      "atc_memberships": [
        {
          "code": "N02CC03",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N02CC",
          "subclass_name": "Selective serotonin (5HT1) agonists"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/135775/properties.json"
    },
    {
      "id": "RXNORM:39998",
      "sequence": 999,
      "display_name": "zonisamide",
      "canonical_name": "zonisamide",
      "aliases": [
        "zonisamide"
      ],
      "rxcui": "39998",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N03AX15"
      ],
      "atc_memberships": [
        {
          "code": "N03AX15",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N03AX",
          "subclass_name": "Other antiepileptics"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/39998/properties.json"
    },
    {
      "id": "RXNORM:2669905",
      "sequence": 1000,
      "display_name": "zuranolone",
      "canonical_name": "zuranolone",
      "aliases": [
        "zuranolone"
      ],
      "rxcui": "2669905",
      "term_type": "IN",
      "record_type_tr": "İlaç bileşeni",
      "primary_group_code": "N",
      "primary_group_name_tr": "Sinir sistemi",
      "atc_codes": [
        "N06AX31"
      ],
      "atc_memberships": [
        {
          "code": "N06AX31",
          "group_code": "N",
          "group_name_tr": "Sinir sistemi",
          "subclass_code": "N06AX",
          "subclass_name": "Other antidepressants"
        }
      ],
      "source": "NLM RxNorm",
      "source_url": "https://rxnav.nlm.nih.gov/REST/rxcui/2669905/properties.json"
    }
  ]
};

  // Expose to window / global scope
  global.TEST_LAB_1000_MALZEME = RXNORM_CATALOG.materials;
  global.NLM_RXNORM_METADATA = {
    title: RXNORM_CATALOG.title,
    record_count: RXNORM_CATALOG.record_count,
    retrieved_at_utc: RXNORM_CATALOG.retrieved_at_utc,
    nlm_attribution: RXNORM_CATALOG.nlm_attribution,
    endpoints: RXNORM_CATALOG.endpoints,
    atc_groups: RXNORM_CATALOG.atc_groups,
    term_definitions: RXNORM_CATALOG.term_definitions
  };

  // Helper search function for instant querying
  global.findRxNormMaterial = function(query) {
    if (!query || typeof query !== 'string') return [];
    var q = query.toLowerCase().trim();
    return global.TEST_LAB_1000_MALZEME.filter(function(item) {
      if (item.display_name && item.display_name.toLowerCase().indexOf(q) !== -1) return true;
      if (item.canonical_name && item.canonical_name.toLowerCase().indexOf(q) !== -1) return true;
      if (item.rxcui && item.rxcui.indexOf(q) !== -1) return true;
      if (item.primary_group_code && item.primary_group_code.toLowerCase() === q) return true;
      if (item.atc_codes && item.atc_codes.some(function(c) { return c.toLowerCase().indexOf(q) !== -1; })) return true;
      if (item.aliases && item.aliases.some(function(a) { return a.toLowerCase().indexOf(q) !== -1; })) return true;
      return false;
    });
  };

  // Quick lookup by RxCUI
  global.getRxNormByRxcui = function(rxcui) {
    if (!rxcui) return null;
    var str = String(rxcui).trim();
    for (var i = 0; i < global.TEST_LAB_1000_MALZEME.length; i++) {
      if (global.TEST_LAB_1000_MALZEME[i].rxcui === str) {
        return global.TEST_LAB_1000_MALZEME[i];
      }
    }
    return null;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      TEST_LAB_1000_MALZEME: global.TEST_LAB_1000_MALZEME,
      NLM_RXNORM_METADATA: global.NLM_RXNORM_METADATA,
      findRxNormMaterial: global.findRxNormMaterial,
      getRxNormByRxcui: global.getRxNormByRxcui
    };
  }
})(typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this));

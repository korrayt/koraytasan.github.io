import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const PAYMENT_ACCOUNT_NAME = "Soner Koray Taşan";
const PAYMENT_IBAN = "TR55 0082 9000 0949 1625 1758 65";
const TEST_NOTICE = "TEST SİPARİŞİ - GERÇEK ÖDEME/KARGO YOK";

export const FIXED_CUSTOMERS = [
  {
    id: "test-customer-1",
    fullName: "Ayşe Test Yılmaz",
    email: "ayse.test+carsipazar@example.com",
    phone: "+90 555 000 0101",
    country: "Türkiye",
    city: "İstanbul",
    address: "CarsiPazar test adresi 1, gönderim yapma"
  },
  {
    id: "test-customer-2",
    fullName: "Mehmet Test Kaya",
    email: "mehmet.test+carsipazar@example.com",
    phone: "+90 555 000 0102",
    country: "Türkiye",
    city: "Ankara",
    address: "CarsiPazar test adresi 2, gönderim yapma"
  },
  {
    id: "test-customer-3",
    fullName: "Elif Test Demir",
    email: "elif.test+carsipazar@example.com",
    phone: "+90 555 000 0103",
    country: "Türkiye",
    city: "İzmir",
    address: "CarsiPazar test adresi 3, gönderim yapma"
  },
  {
    id: "test-customer-4",
    fullName: "Can Test Aydın",
    email: "can.test+carsipazar@example.com",
    phone: "+90 555 000 0104",
    country: "Türkiye",
    city: "Bursa",
    address: "CarsiPazar test adresi 4, gönderim yapma"
  },
  {
    id: "test-customer-5",
    fullName: "Zeynep Test Şahin",
    email: "zeynep.test+carsipazar@example.com",
    phone: "+90 555 000 0105",
    country: "Türkiye",
    city: "Antalya",
    address: "CarsiPazar test adresi 5, gönderim yapma"
  }
];

const FALLBACK_PRODUCTS = [
  { id: "vacum-set", name: "Vakumlu Depolama Seti", price: 24.9, shipping: "7-12 gün" },
  { id: "phone-stand", name: "Katlanır Telefon Standı", price: 17.5, shipping: "6-10 gün" },
  { id: "bottle", name: "Minimal Termos Matarası", price: 19.2, shipping: "8-14 gün" },
  { id: "cable-organizer", name: "Manyetik Kablo Düzenleyici", price: 12, shipping: "6-11 gün" },
  { id: "lamp", name: "LED Gece Lambası", price: 21.8, shipping: "7-13 gün" },
  { id: "blender", name: "Taşınabilir Mini Blender", price: 29.4, shipping: "8-15 gün" }
];

function money(value) {
  return `$${value.toFixed(2)}`;
}

function shippingFor(subtotal, country) {
  const localCountry = String(country || "").trim().toLowerCase();
  if (!subtotal) return 0;
  if (!localCountry || localCountry.includes("türkiye") || localCountry.includes("turkey")) {
    return subtotal >= 50 ? 0 : 6.9;
  }
  return subtotal >= 75 ? 9.9 : 14.9;
}

function timestampForReference(date = new Date()) {
  return date.toISOString().replace(/\D/g, "").slice(0, 14);
}

function normalizeProduct(product) {
  return {
    id: String(product.id || "").trim(),
    name: String(product.name || "").trim(),
    price: Number(product.price || 0),
    shipping: String(product.shipping || "7-14 gün").trim() || "7-14 gün"
  };
}

function safeProducts(products) {
  const normalized = products.map((product) => normalizeProduct(product)).filter((product) => product.id && product.name);
  return normalized.length ? normalized : FALLBACK_PRODUCTS;
}

function buildCartForCustomer(customerIndex, cycleIndex, products = FALLBACK_PRODUCTS) {
  const productPool = safeProducts(products);
  const first = productPool[(customerIndex + cycleIndex) % productPool.length];
  const second = productPool[(customerIndex + cycleIndex + 2) % productPool.length];
  const firstQty = ((customerIndex + cycleIndex) % 3) + 1;
  const includeSecond = (customerIndex + cycleIndex) % 2 === 0;
  const cart = [{ ...first, qty: firstQty }];
  if (includeSecond) cart.push({ ...second, qty: 1 });
  return cart;
}

function buildIssueBody(order) {
  const cartLines = order.cart
    .map((item) => `- ${item.name} x ${item.qty} (${money(item.price)} each, tahmini kargo: ${item.shipping})`)
    .join("\n");

  return [
    `# ${TEST_NOTICE}`,
    "",
    "Bu kayıt sabit müşteri npm aracıyla test için oluşturulur.",
    "Gerçek ödeme alınmadı, gerçek kargo/fulfillment başlatılmamalı.",
    "",
    "## Müşteri Bilgileri",
    `- Test Müşteri ID: ${order.customer.id}`,
    `- Ad Soyad: ${order.customer.fullName}`,
    `- E-posta: ${order.customer.email}`,
    `- Telefon: ${order.customer.phone}`,
    `- Ülke: ${order.customer.country}`,
    `- Şehir: ${order.customer.city}`,
    "",
    "## Teslimat",
    `- Adres: ${order.customer.address}`,
    `- Kargo Tipi: ${order.shippingType}`,
    "",
    "## Ödeme",
    "- Yöntem: Havale / EFT test akışı",
    `- Hesap Sahibi: ${PAYMENT_ACCOUNT_NAME}`,
    `- IBAN: ${PAYMENT_IBAN}`,
    `- Referans: ${order.paymentReference}`,
    "- Durum: TEST - ödeme yapılmadı",
    "",
    "## Operasyon",
    "- Sipariş Durumu: TEST siparişi",
    "- Kargo Durumu: TEST - gönderim yapılmayacak",
    "- Kargo Takip No: TEST-YOK",
    "",
    "## Sepet",
    cartLines,
    "",
    "## Toplam",
    `- Ara Toplam: ${money(order.subtotal)}`,
    `- Kargo: ${money(order.shipping)}`,
    `- Genel Toplam: ${money(order.total)}`,
    "",
    "## Not",
    order.note,
    "",
    "_Bu kayıt CarsiPazar sabit müşteri test döngüsü tarafından oluşturuldu._"
  ].join("\n");
}

export function createOrdersForCycle(cycleIndex, date = new Date(), products = FALLBACK_PRODUCTS, productsSource = "fallback-products") {
  return FIXED_CUSTOMERS.map((customer, customerIndex) => {
    const cart = buildCartForCustomer(customerIndex, cycleIndex, products);
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const shipping = shippingFor(subtotal, customer.country);
    const paymentReference = `TEST-CARSIPAZAR-${cycleIndex + 1}-${customer.id}-${timestampForReference(date)}`;
    const order = {
      test: true,
      notice: TEST_NOTICE,
      cycle: cycleIndex + 1,
      customer,
      productsSource,
      cart,
      subtotal,
      shipping,
      total: subtotal + shipping,
      paymentReference,
      shippingType: "Standart teslimat",
      note: "Sabit müşteri döngü testi. Gerçek ödeme/kargo yok."
    };
    const title = `[TEST][CarsiPazar] ${customer.fullName} - ${customer.city} - ${paymentReference}`;
    return {
      ...order,
      title,
      body: buildIssueBody(order)
    };
  });
}

function parseArgs(argv) {
  const options = {
    cycles: 1,
    loop: false,
    intervalMs: 30000,
    json: false,
    assert: false,
    createIssues: false,
    verifyLive: false,
    maxCycles: null,
    siteUrl: "https://koraytasan.com/carsipazar/",
    repo: "korrayt/koraytasan.github.io"
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    const [name, inlineValue] = arg.split("=");
    const nextValue = inlineValue ?? argv[index + 1];

    if (arg === "--loop") options.loop = true;
    if (arg === "--json") options.json = true;
    if (arg === "--assert") options.assert = true;
    if (arg === "--create-issues") options.createIssues = true;
    if (arg === "--verify-live") options.verifyLive = true;
    if (name === "--cycles") {
      options.cycles = Number(nextValue);
      if (inlineValue === undefined) index += 1;
    }
    if (name === "--interval-ms") {
      options.intervalMs = Number(nextValue);
      if (inlineValue === undefined) index += 1;
    }
    if (name === "--max-cycles") {
      options.maxCycles = Number(nextValue);
      if (inlineValue === undefined) index += 1;
    }
    if (name === "--repo") {
      options.repo = String(nextValue || options.repo);
      if (inlineValue === undefined) index += 1;
    }
    if (name === "--site-url") {
      options.siteUrl = String(nextValue || options.siteUrl);
      if (inlineValue === undefined) index += 1;
    }
  }

  if (!Number.isInteger(options.cycles) || options.cycles < 1) {
    throw new Error("--cycles değeri 1 veya daha büyük bir tam sayı olmalı.");
  }
  if (!Number.isInteger(options.intervalMs) || options.intervalMs < 1000) {
    throw new Error("--interval-ms değeri en az 1000 olmalı.");
  }
  if (options.maxCycles !== null && (!Number.isInteger(options.maxCycles) || options.maxCycles < 1)) {
    throw new Error("--max-cycles değeri 1 veya daha büyük bir tam sayı olmalı.");
  }
  if (options.loop && options.assert && options.maxCycles === null) {
    throw new Error("--loop ve --assert birlikte kullanılırsa --max-cycles verilmelidir.");
  }
  if (options.loop && options.createIssues && process.env.CARSIPAZAR_ALLOW_LIVE_LOOP !== "YES") {
    throw new Error("--loop ile GitHub issue açmak için CARSIPAZAR_ALLOW_LIVE_LOOP=YES gerekir.");
  }

  return options;
}

export function extractProductsFromStoreScript(storeScript) {
  const match = storeScript.match(/const\s+DEFAULT_PRODUCTS\s*=\s*(\[[\s\S]*?\n\];)/);
  if (!match) {
    throw new Error("DEFAULT_PRODUCTS listesi canlı store.js içinde bulunamadı.");
  }

  const products = Function(`"use strict"; return (${match[1].replace(/;$/, "")});`)();
  if (!Array.isArray(products) || products.length === 0) {
    throw new Error("DEFAULT_PRODUCTS listesi boş veya geçersiz.");
  }

  return safeProducts(products);
}

export async function verifyLiveStorefront(siteUrl = "https://koraytasan.com/carsipazar/") {
  const baseUrl = new URL(siteUrl);
  const bust = String(Date.now());
  const pageUrl = new URL(baseUrl);
  pageUrl.searchParams.set("codex_fixed_customers", bust);
  const scriptUrl = new URL("assets/store.js", baseUrl);
  scriptUrl.searchParams.set("codex_fixed_customers", bust);

  const [pageResponse, scriptResponse] = await Promise.all([
    fetch(pageUrl, { headers: { "cache-control": "no-cache", pragma: "no-cache" } }),
    fetch(scriptUrl, { headers: { "cache-control": "no-cache", pragma: "no-cache" } })
  ]);

  const [pageHtml, storeScript] = await Promise.all([pageResponse.text(), scriptResponse.text()]);
  const products = extractProductsFromStoreScript(storeScript);
  const checks = [
    ["storefront status", pageResponse.ok],
    ["store script status", scriptResponse.ok],
    ["IBAN", pageHtml.includes(PAYMENT_IBAN) || storeScript.includes(PAYMENT_IBAN)],
    ["payment reference field", pageHtml.includes("paymentReference")],
    ["default products", storeScript.includes("DEFAULT_PRODUCTS")],
    ["issue flow", storeScript.includes("buildIssueBody")],
    ["live product count", products.length >= 1]
  ];
  const missing = checks.filter(([, ok]) => !ok).map(([label]) => label);

  if (missing.length) {
    throw new Error(`Live storefront verification failed: ${missing.join(", ")}`);
  }

  return {
    pageUrl: pageUrl.toString(),
    scriptUrl: scriptUrl.toString(),
    products,
    checks: checks.map(([label]) => label)
  };
}

function createGitHubIssue(order, repo) {
  const result = spawnSync("gh", ["issue", "create", "--repo", repo, "--title", order.title, "--body", order.body], {
    encoding: "utf8"
  });

  if (result.status !== 0) {
    throw new Error(result.stderr || `gh issue create exited with ${result.status}`);
  }

  return result.stdout.trim();
}

function printHumanSummary(cycle, orders, issueUrls = []) {
  console.log(`CarsiPazar sabit müşteri döngüsü ${cycle}: ${orders.length} TEST sipariş üretildi.`);
  orders.forEach((order, index) => {
    const issueUrl = issueUrls[index] ? ` issue=${issueUrls[index]}` : "";
    console.log(
      `- ${order.customer.id}: ${order.customer.fullName}, ürün=${order.cart.length}, toplam=${money(order.total)}, ref=${order.paymentReference}${issueUrl}`
    );
  });
  console.log(TEST_NOTICE);
}

async function wait(ms) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

async function run() {
  const options = parseArgs(process.argv.slice(2));
  let cycleIndex = 0;
  const allOrders = [];
  let activeProducts = FALLBACK_PRODUCTS;
  let productsSource = "fallback-products";

  if (options.verifyLive) {
    const live = await verifyLiveStorefront(options.siteUrl);
    activeProducts = live.products;
    productsSource = "live-storefront";
    if (!options.json && !options.assert) {
      console.log(`Canlı storefront doğrulandı: ${live.pageUrl}`);
      console.log(`Canlı store.js doğrulandı: ${live.scriptUrl}`);
      console.log(`Canlı ürün listesi kullanılıyor: ${activeProducts.length} ürün.`);
    }
  }

  while (options.loop || cycleIndex < options.cycles) {
    const orders = createOrdersForCycle(cycleIndex, new Date(), activeProducts, productsSource);
    const issueUrls = [];

    if (options.createIssues) {
      for (const order of orders) {
        issueUrls.push(createGitHubIssue(order, options.repo));
      }
    }

    allOrders.push(...orders.map((order, index) => ({ ...order, issueUrl: issueUrls[index] || null })));

    if (!options.json && !options.assert) {
      printHumanSummary(cycleIndex + 1, orders, issueUrls);
    }

    cycleIndex += 1;
    if (options.loop && options.maxCycles !== null && cycleIndex >= options.maxCycles) break;
    if (!options.loop && cycleIndex >= options.cycles) break;
    await wait(options.intervalMs);
  }

  if (options.assert) {
    const expectedCycles = options.loop ? options.maxCycles : options.cycles;
    const expected = expectedCycles * FIXED_CUSTOMERS.length;
    if (allOrders.length !== expected) {
      throw new Error(`Expected ${expected} generated orders, got ${allOrders.length}.`);
    }
    if (allOrders.some((order) => !order.test || !order.body.includes(TEST_NOTICE))) {
      throw new Error("Generated orders must be marked as test orders.");
    }
    if (options.verifyLive && allOrders.some((order) => order.productsSource !== "live-storefront")) {
      throw new Error("Live verification mode must use live storefront products.");
    }
    console.log(`CarsiPazar fixed customer assertion passed: ${allOrders.length} test orders.`);
  }

  if (options.json) {
    console.log(
      JSON.stringify(
        {
          mode: options.createIssues ? "test-issues" : "dry-run",
          productsSource,
          customers: FIXED_CUSTOMERS.length,
          cycles: cycleIndex,
          orders: allOrders
        },
        null,
        2
      )
    );
  }
}

function isMainModule() {
  return process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
}

if (isMainModule()) {
  run().catch((error) => {
    console.error(error.message);
    process.exit(1);
  });
}

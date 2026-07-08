import { readFile } from "node:fs/promises";

const files = {
  storeHtml: "carsipazar/index.html",
  storeJs: "carsipazar/assets/store.js",
  adminHtml: "carsipazar/admin/index.html",
  adminJs: "carsipazar/admin/admin.js",
  issueTemplate: ".github/ISSUE_TEMPLATE/carsipazar-order.yml",
  fixedCustomers: "carsipazar/scripts/fixed-customers.mjs",
  packageJson: "package.json"
};

const requiredChecks = [
  ["storeHtml", "TR55 0082 9000 0949 1625 1758 65"],
  ["storeHtml", "Ödeme referansı"],
  ["storeJs", "Ödeme bekleniyor"],
  ["storeJs", "Kargo Takip No"],
  ["adminHtml", "Yeni ürün formu"],
  ["adminHtml", "Sipariş durum şablonları"],
  ["adminJs", "CATALOG_STORAGE_KEY"],
  ["issueTemplate", "Ödeme Referansı"],
  ["issueTemplate", "Operasyon Durumu"],
  ["fixedCustomers", "FIXED_CUSTOMERS"],
  ["fixedCustomers", "TEST SİPARİŞİ - GERÇEK ÖDEME/KARGO YOK"],
  ["fixedCustomers", "createOrdersForCycle"],
  ["fixedCustomers", "verifyLiveStorefront"],
  ["fixedCustomers", "extractProductsFromStoreScript"],
  ["fixedCustomers", "productsSource"],
  ["packageJson", "fixed-customers:carsipazar"],
  ["packageJson", "fixed-customers:carsipazar:live"],
  ["packageJson", "fixed-customers:carsipazar:loop:test"]
];

async function run() {
  const contents = {};
  for (const [key, filePath] of Object.entries(files)) {
    contents[key] = await readFile(filePath, "utf8");
  }

  const fixedCustomerCount = (contents.fixedCustomers.match(/test-customer-/g) || []).length;
  if (fixedCustomerCount !== 5) {
    console.error(`Expected 5 fixed test customers, found ${fixedCustomerCount}.`);
    process.exit(1);
  }

  const missing = requiredChecks.filter(([key, needle]) => !contents[key].includes(needle));
  if (missing.length) {
    for (const [key, needle] of missing) {
      console.error(`Missing "${needle}" in ${files[key]}`);
    }
    process.exit(1);
  }

  console.log("CarsiPazar smoke checks passed.");
}

run().catch((error) => {
  console.error(error.message);
  process.exit(1);
});

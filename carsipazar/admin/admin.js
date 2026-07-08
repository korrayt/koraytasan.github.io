const CATALOG_STORAGE_KEY = "carsipazar_catalog_v1";
const PAYMENT_ACCOUNT_NAME = "Soner Koray Taşan";
const PAYMENT_IBAN = "TR55 0082 9000 0949 1625 1758 65";
const DEFAULT_PRODUCTS = [
  {
    id: "vacum-set",
    name: "Vakumlu Depolama Seti",
    description: "Dolap düzeni için hafif, pratik ve yüksek algı değerli set.",
    price: 24.9,
    category: "home",
    badge: "Çok satan",
    shipping: "7-12 gün"
  },
  {
    id: "phone-stand",
    name: "Katlanır Telefon Standı",
    description: "Video izleme, masaüstü kullanım ve hızlı içerik üretimi için ideal.",
    price: 17.5,
    category: "tech",
    badge: "Trend",
    shipping: "6-10 gün"
  },
  {
    id: "bottle",
    name: "Minimal Termos Matarası",
    description: "Ofis, araba ve günlük kullanım için sade ama güçlü bir ürün.",
    price: 19.2,
    category: "lifestyle",
    badge: "Yeni",
    shipping: "8-14 gün"
  },
  {
    id: "cable-organizer",
    name: "Manyetik Kablo Düzenleyici",
    description: "Küçük sepette yüksek dönüşüm ihtimali olan, ucuz ve anlaşılır ürün.",
    price: 12,
    category: "tech",
    badge: "Hızlı dönüşüm",
    shipping: "6-11 gün"
  },
  {
    id: "lamp",
    name: "LED Gece Lambası",
    description: "Ambiyans yaratan, hediye olarak da satılabilecek dekoratif ürün.",
    price: 21.8,
    category: "home",
    badge: "Ev ürünü",
    shipping: "7-13 gün"
  },
  {
    id: "blender",
    name: "Taşınabilir Mini Blender",
    description: "Seyahat ve spor sonrası kullanım için sosyal medya dostu ürün.",
    price: 29.4,
    category: "lifestyle",
    badge: "Popüler",
    shipping: "8-15 gün"
  }
];

const $ = (selector, root = document) => root.querySelector(selector);

const storage = createStorage();
let products = loadProducts();

function createStorage() {
  try {
    const test = window.localStorage;
    const key = "__carsipazar_admin_probe__";
    test.setItem(key, "1");
    test.removeItem(key);
    return test;
  } catch {
    const memory = new Map();
    return {
      getItem(key) {
        return memory.has(key) ? memory.get(key) : null;
      },
      setItem(key, value) {
        memory.set(key, String(value));
      },
      removeItem(key) {
        memory.delete(key);
      }
    };
  }
}

function normalizeProduct(product) {
  return {
    id: String(product.id || "").trim(),
    name: String(product.name || "").trim(),
    description: String(product.description || "").trim(),
    price: Number(product.price || 0),
    category: String(product.category || "lifestyle").trim() || "lifestyle",
    badge: String(product.badge || "Yeni").trim() || "Yeni",
    shipping: String(product.shipping || "7-14 gün").trim() || "7-14 gün"
  };
}

function loadProducts() {
  try {
    const raw = storage.getItem(CATALOG_STORAGE_KEY);
    if (!raw) return [...DEFAULT_PRODUCTS];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [...DEFAULT_PRODUCTS];
    return parsed.map((item) => normalizeProduct(item)).filter((item) => item.id && item.name);
  } catch {
    return [...DEFAULT_PRODUCTS];
  }
}

function saveProducts(nextProducts) {
  products = nextProducts.map((item) => normalizeProduct(item));
  storage.setItem(CATALOG_STORAGE_KEY, JSON.stringify(products));
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function formatMoney(value) {
  return `$${Number(value || 0).toFixed(2)}`;
}

function updateCatalogCount() {
  const countEl = $("#catalogCount");
  if (countEl) countEl.textContent = String(products.length);
}

function renderProducts() {
  const list = $("#productList");
  if (!list) return;

  updateCatalogCount();
  list.innerHTML = "";

  if (!products.length) {
    const empty = document.createElement("div");
    empty.className = "empty";
    empty.textContent = "Katalog boş. İlk ürünü formdan ekleyebilirsin.";
    list.appendChild(empty);
    return;
  }

  products.forEach((product) => {
    const item = document.createElement("article");
    item.className = "product-item";
    item.innerHTML = `
      <div class="product-item-head">
        <div>
          <strong class="label">${product.badge}</strong>
          <h3>${product.name}</h3>
        </div>
        <div><strong>${formatMoney(product.price)}</strong></div>
      </div>
      <p>${product.description}</p>
      <div class="product-item-meta">
        <span><strong>ID:</strong> ${product.id}</span>
        <span><strong>Kategori:</strong> ${product.category}</span>
        <span><strong>Teslimat:</strong> ${product.shipping}</span>
      </div>
      <div class="product-item-actions">
        <button class="button secondary" type="button" data-action="remove">Kaldır</button>
      </div>
    `;

    const removeButton = item.querySelector('[data-action="remove"]');
    removeButton.addEventListener("click", () => {
      const next = products.filter((entry) => entry.id !== product.id);
      saveProducts(next);
      renderProducts();
    });

    list.appendChild(item);
  });
}

function addProductFromForm(form) {
  const formData = new FormData(form);
  const name = String(formData.get("name") || "").trim();
  const idRaw = String(formData.get("id") || "").trim();
  const id = idRaw || `${slugify(name)}-${Date.now().toString(36)}`;
  const nextProduct = normalizeProduct({
    id,
    name,
    description: formData.get("description"),
    price: formData.get("price"),
    category: formData.get("category"),
    badge: formData.get("badge"),
    shipping: formData.get("shipping")
  });

  const next = [nextProduct, ...products.filter((entry) => entry.id !== nextProduct.id)];
  saveProducts(next);
  renderProducts();
  form.reset();
  form.elements.category.value = "home";
  form.elements.badge.value = "Yeni";
  form.elements.shipping.value = "7-14 gün";
}

function init() {
  renderProducts();

  $("#productForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    addProductFromForm(event.currentTarget);
  });

  $("#resetCatalog")?.addEventListener("click", () => {
    saveProducts([...DEFAULT_PRODUCTS]);
    renderProducts();
  });

  $$(".copy-button").forEach((button) => {
    button.addEventListener("click", async () => {
      const text = button.dataset.copy || "";
      try {
        await navigator.clipboard.writeText(text);
        const original = button.textContent;
        button.textContent = "Kopyalandı";
        setTimeout(() => {
          button.textContent = original || "Kopyala";
        }, 1500);
      } catch {
        alert("Kopyalama başarısız oldu. Elle kopyalayabilirsin.");
      }
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

window.addEventListener("storage", (event) => {
  if (event.key !== CATALOG_STORAGE_KEY) return;
  products = loadProducts();
  renderProducts();
});

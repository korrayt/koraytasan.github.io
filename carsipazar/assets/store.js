const REPO_ISSUE_URL = "https://github.com/korrayt/koraytasan.github.io/issues/new";
const CART_STORAGE_KEY = "carsipazar_cart_v1";
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
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const storage = createStorage();

const state = {
  cart: loadCart(),
  filter: "all",
  products: loadProducts()
};

function createStorage() {
  try {
    const test = window.localStorage;
    const key = "__carsipazar_probe__";
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

function loadCart() {
  try {
    const raw = storage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function loadProducts() {
  try {
    const raw = storage.getItem(CATALOG_STORAGE_KEY);
    if (!raw) return [...DEFAULT_PRODUCTS];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [...DEFAULT_PRODUCTS];
    return parsed
      .filter((item) => item && item.id && item.name)
      .map((item) => normalizeProduct(item));
  } catch {
    return [...DEFAULT_PRODUCTS];
  }
}

function saveProducts() {
  storage.setItem(CATALOG_STORAGE_KEY, JSON.stringify(state.products));
}

function saveCart() {
  storage.setItem(CART_STORAGE_KEY, JSON.stringify(state.cart));
}

function formatMoney(value) {
  return `$${value.toFixed(2)}`;
}

function productById(id) {
  return state.products.find((item) => item.id === id);
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

function cartQuantity(id) {
  return state.cart.find((item) => item.id === id)?.qty ?? 0;
}

function addToCart(id) {
  const existing = state.cart.find((item) => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    const product = productById(id);
    if (!product) return;
    state.cart.push({ ...product, qty: 1 });
  }
  saveCart();
  renderCart();
}

function decreaseFromCart(id) {
  const existing = state.cart.find((item) => item.id === id);
  if (!existing) return;
  existing.qty -= 1;
  state.cart = state.cart.filter((item) => item.qty > 0);
  saveCart();
  renderCart();
}

function clearCart() {
  state.cart = [];
  saveCart();
  renderCart();
}

function cartSubtotal() {
  return state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function shippingEstimate() {
  const subtotal = cartSubtotal();
  const country = ($("#country")?.value || "").trim().toLowerCase();
  if (!subtotal) return 0;
  if (!country || country.includes("türkiye") || country.includes("turkey")) {
    return subtotal >= 50 ? 0 : 6.9;
  }
  return subtotal >= 75 ? 9.9 : 14.9;
}

function renderCart() {
  const cartItems = $("#cartItems");
  const subtotalEl = $("#subtotal");
  const shippingEl = $("#shipping");
  const grandTotalEl = $("#grandTotal");

  if (!cartItems) return;

  if (!state.cart.length) {
    cartItems.classList.add("empty-state");
    cartItems.innerHTML = "Sepete ürün ekleyin.";
  } else {
    cartItems.classList.remove("empty-state");
    cartItems.innerHTML = "";
    const list = document.createElement("div");
    list.className = "cart-list";

    state.cart.forEach((item) => {
      const row = document.createElement("div");
      row.className = "cart-line";
      row.innerHTML = `
        <div class="cart-line-head">
          <strong>${item.name}</strong>
          <span>${formatMoney(item.price * item.qty)}</span>
        </div>
        <small>${formatMoney(item.price)} x ${item.qty}</small>
        <div class="cart-line-actions">
          <button type="button" aria-label="${item.name} azalt">-</button>
          <button type="button" aria-label="${item.name} artır">+</button>
        </div>
      `;
      const [minusBtn, plusBtn] = $$("button", row);
      minusBtn.addEventListener("click", () => decreaseFromCart(item.id));
      plusBtn.addEventListener("click", () => addToCart(item.id));
      list.appendChild(row);
    });

    cartItems.appendChild(list);
  }

  const subtotal = cartSubtotal();
  const shipping = shippingEstimate();
  const total = subtotal + shipping;

  if (subtotalEl) subtotalEl.textContent = formatMoney(subtotal);
  if (shippingEl) shippingEl.textContent = subtotal ? formatMoney(shipping) : formatMoney(0);
  if (grandTotalEl) grandTotalEl.textContent = formatMoney(total);
}

function renderProducts() {
  const grid = $("#productGrid");
  if (!grid) return;

  grid.innerHTML = "";

  state.products.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.dataset.category = product.category;
    card.innerHTML = `
      <div class="product-badge">${product.badge}</div>
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <div class="product-meta">
        <span>${formatMoney(product.price)}</span>
        <span>${product.shipping}</span>
      </div>
      <button class="button small add-to-cart" data-id="${product.id}" type="button">Sepete ekle</button>
    `;
    grid.appendChild(card);
  });

  $$(".add-to-cart", grid).forEach((button) => {
    button.addEventListener("click", () => addToCart(button.dataset.id));
  });

  const countEl = $("#heroProductCount");
  if (countEl) {
    countEl.textContent = String(state.products.length);
  }

  if (!state.products.length) {
    const empty = document.createElement("div");
    empty.className = "loading-card";
    empty.textContent = "Henüz ürün eklenmedi.";
    grid.appendChild(empty);
    return;
  }

  applyFilter(state.filter);
}

function applyFilter(filter) {
  state.filter = filter;
  const cards = $$(".product-card");
  cards.forEach((card) => {
    const matches = filter === "all" || card.dataset.category === filter;
    card.classList.toggle("is-hidden", !matches);
  });
  $$(".filter").forEach((button) => button.classList.toggle("active", button.dataset.filter === filter));
}

function collectOrderData() {
  return {
    fullName: $("#fullName")?.value.trim(),
    email: $("#email")?.value.trim(),
    phone: $("#phone")?.value.trim(),
    country: $("#country")?.value.trim(),
    city: $("#city")?.value.trim(),
    address: $("#address")?.value.trim(),
    note: $("#note")?.value.trim(),
    shippingType: $("#shippingType")?.value,
    paymentReference: $("#paymentReference")?.value.trim()
  };
}

function buildProductData(formData) {
  return normalizeProduct({
    id: formData.id,
    name: formData.name,
    description: formData.description,
    price: formData.price,
    category: formData.category,
    badge: formData.badge,
    shipping: formData.shipping
  });
}

function shippingLabel(value) {
  if (value === "express") return "Hızlı teslimat";
  if (value === "international") return "Uluslararası gönderim";
  return "Standart teslimat";
}

function buildIssueBody(order) {
  const cartLines = state.cart.map((item) => `- ${item.name} x ${item.qty} (${formatMoney(item.price)} each)`).join("\n");
  const subtotal = formatMoney(cartSubtotal());
  const shipping = formatMoney(shippingEstimate());
  const total = formatMoney(cartSubtotal() + shippingEstimate());
  return [
    "## Müşteri Bilgileri",
    `- Ad Soyad: ${order.fullName}`,
    `- E-posta: ${order.email}`,
    `- Telefon: ${order.phone}`,
    `- Ülke: ${order.country}`,
    `- Şehir: ${order.city}`,
    "",
    "## Teslimat",
    `- Adres: ${order.address}`,
    `- Kargo Tipi: ${shippingLabel(order.shippingType)}`,
    "",
    "## Ödeme",
    `- Yöntem: Havale / EFT`,
    `- Hesap Sahibi: ${PAYMENT_ACCOUNT_NAME}`,
    `- IBAN: ${PAYMENT_IBAN}`,
    `- Referans: ${order.paymentReference}`,
    "",
    "## Sepet",
    cartLines || "- Sepet boş",
    "",
    "## Toplam",
    `- Ara Toplam: ${subtotal}`,
    `- Kargo: ${shipping}`,
    `- Genel Toplam: ${total}`,
    "",
    "## Not",
    order.note || "-",
    "",
    "_Bu sipariş CarsiPazar storefront üzerinden oluşturuldu._"
  ].join("\n");
}

function openGitHubIssue(order) {
  const title = `[CarsiPazar] ${order.fullName} - ${order.city}`;
  const body = buildIssueBody(order);
  const url = `${REPO_ISSUE_URL}?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function init() {
  window.carsipazarReady = true;
  renderProducts();

  $$(".filter").forEach((button) => {
    button.addEventListener("click", () => applyFilter(button.dataset.filter || "all"));
  });

  $("#country")?.addEventListener("input", renderCart);
  $("#paymentReference")?.addEventListener("input", () => {});
  $("#clearCart")?.addEventListener("click", clearCart);

  $("#orderForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!state.cart.length) {
      alert("Lütfen önce sepete en az bir ürün ekleyin.");
      return;
    }

    const order = collectOrderData();
    const missing = Object.entries(order).find(([, value]) => !value);
    if (missing) {
      alert("Lütfen tüm zorunlu alanları doldurun.");
      return;
    }

    openGitHubIssue(order);
  });

  renderCart();
  $$(".copy-button").forEach((button) => {
    button.addEventListener("click", async () => {
      const text = button.dataset.copy || "";
      try {
        await navigator.clipboard.writeText(text);
        button.textContent = "Kopyalandı";
        setTimeout(() => {
          button.textContent = "IBAN'ı kopyala";
        }, 1500);
      } catch {
        alert("IBAN kopyalanamadı. Elle kopyalayabilirsin.");
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
  state.products = loadProducts();
  renderProducts();
});

window.carsipazarCatalog = {
  getAll() {
    return [...state.products];
  },
  add(product) {
    const normalized = buildProductData(product);
    state.products = [normalized, ...state.products.filter((item) => item.id !== normalized.id)];
    saveProducts();
    renderProducts();
    return normalized;
  },
  remove(id) {
    state.products = state.products.filter((item) => item.id !== id);
    saveProducts();
    renderProducts();
  },
  reset() {
    state.products = [...DEFAULT_PRODUCTS];
    saveProducts();
    renderProducts();
  }
};

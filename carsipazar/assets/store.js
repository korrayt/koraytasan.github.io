const REPO_ISSUE_URL = "https://github.com/korrayt/koraytasan.github.io/issues/new";
const STORAGE_KEY = "carsipazar_cart_v1";

const PRODUCTS = [
  { id: "vacum-set", name: "Vakumlu Depolama Seti", price: 24.9, category: "home" },
  { id: "phone-stand", name: "Katlanır Telefon Standı", price: 17.5, category: "tech" },
  { id: "bottle", name: "Minimal Termos Matarası", price: 19.2, category: "lifestyle" },
  { id: "cable-organizer", name: "Manyetik Kablo Düzenleyici", price: 12, category: "tech" },
  { id: "lamp", name: "LED Gece Lambası", price: 21.8, category: "home" },
  { id: "blender", name: "Taşınabilir Mini Blender", price: 29.4, category: "lifestyle" }
];

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const storage = createStorage();

const state = {
  cart: loadCart(),
  filter: "all"
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
    const raw = storage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveCart() {
  storage.setItem(STORAGE_KEY, JSON.stringify(state.cart));
}

function formatMoney(value) {
  return `$${value.toFixed(2)}`;
}

function productById(id) {
  return PRODUCTS.find((item) => item.id === id);
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
    shippingType: $("#shippingType")?.value
  };
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
  $$(".add-to-cart").forEach((button) => {
    button.addEventListener("click", () => addToCart(button.dataset.id));
  });

  $$(".filter").forEach((button) => {
    button.addEventListener("click", () => applyFilter(button.dataset.filter || "all"));
  });

  $("#clearCart")?.addEventListener("click", clearCart);
  $("#country")?.addEventListener("input", renderCart);

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

  applyFilter("all");
  renderCart();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

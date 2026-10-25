/**
 * Ecommiki — Agentic Commerce Portal  (v2.0.0)
 * - Real-time ROI calculator
 * - Order dialog + demo form → delivered by e-mail (FormSubmit) with mailto fallback
 * Author: Koray Taşan · koray.t@cor3us.com
 */
(() => {
    "use strict";

    // ------------------------------------------------------------------
    // Config
    // ------------------------------------------------------------------
    const FORM_ENDPOINT = "https://formsubmit.co/ajax/krytsn@gmail.com";
    const CC_EMAILS = "koray.t@cor3us.com,ben@koraytasan.com";
    const ALL_EMAILS = ["krytsn@gmail.com", "koray.t@cor3us.com", "ben@koraytasan.com"];

    const PRODUCTS = {
        mcp: { name: "Otonom Sepet Kurtarma MCP Seti", price: 99 },
        brain: { name: "E-Com Growth Brain Playbook", price: 49 },
        outreach: { name: "B2B Cold Outreach Swipe File", price: 29 },
        bundle: { name: "Ajans Başlangıç Paketi (3'ü bir arada)", price: 139 },
    };

    const $ = (sel, root = document) => root.querySelector(sel);
    const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

    const formatTRY = (val) =>
        new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY", maximumFractionDigits: 0 }).format(val);

    // ------------------------------------------------------------------
    // ROI calculator
    // ------------------------------------------------------------------
    function initROI() {
        const el = {
            revenue: $("#input-revenue"),
            abandonment: $("#input-abandonment"),
            recovery: $("#input-recovery"),
            tickets: $("#input-tickets"),
        };
        if (!el.revenue) return;

        const out = {
            revenue: $("#display-revenue"),
            abandonment: $("#display-abandonment"),
            recovery: $("#display-recovery"),
            tickets: $("#display-tickets"),
            annual: $("#res-annual-gain"),
            rescue: $("#res-monthly-rescue"),
            support: $("#res-monthly-support"),
            abandoned: $("#res-abandoned"),
        };

        const SUPPORT_AUTOMATION = 0.4; // conservative share of Tier-1 / WISMO tickets
        const COST_PER_TICKET = 150; // ₺, internal handling cost

        const animate = (node, target) => {
            const start = Number(node.dataset.value || 0);
            node.dataset.value = String(target);
            const t0 = performance.now();
            const step = (now) => {
                const p = Math.min((now - t0) / 400, 1);
                node.textContent = formatTRY(start + (target - start) * p * (2 - p));
                if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
        };

        const calc = () => {
            const revenue = Number(el.revenue.value);
            const abandonRate = Number(el.abandonment.value) / 100;
            const recoveryRate = Number(el.recovery.value) / 100;
            const tickets = Number(el.tickets.value);

            out.revenue.textContent = formatTRY(revenue);
            out.abandonment.textContent = `%${el.abandonment.value}`;
            out.recovery.textContent = `%${el.recovery.value}`;
            out.tickets.textContent = `${new Intl.NumberFormat("tr-TR").format(tickets)} Adet`;

            // Initiated cart value = revenue / (1 - abandonment); abandoned = initiated - revenue
            const abandonedValue = revenue / (1 - abandonRate) - revenue;
            const monthlyRescue = abandonedValue * recoveryRate;
            const monthlySupport = tickets * SUPPORT_AUTOMATION * COST_PER_TICKET;

            animate(out.abandoned, abandonedValue);
            animate(out.rescue, monthlyRescue);
            animate(out.support, monthlySupport);
            animate(out.annual, (monthlyRescue + monthlySupport) * 12);
        };

        Object.values(el).forEach((input) => input.addEventListener("input", calc));
        calc();
    }

    // ------------------------------------------------------------------
    // Order dialog
    // ------------------------------------------------------------------
    function initOrderDialog() {
        const dialog = $("#order-dialog");
        const form = $("#order-form");
        if (!dialog || !form) return;

        const productBoxes = $$('input[name="product"]', form);
        const totalNode = $("#order-total");

        const updateTotal = () => {
            const selected = productBoxes.filter((b) => b.checked).map((b) => b.value);
            // Bundle already contains the three single products
            const effective = selected.includes("bundle") ? ["bundle"] : selected;
            const total = effective.reduce((sum, key) => sum + PRODUCTS[key].price, 0);
            totalNode.textContent = `$${total}`;
            return { selected: effective, total };
        };

        productBoxes.forEach((box) =>
            box.addEventListener("change", () => {
                if (box.value === "bundle" && box.checked) {
                    productBoxes.forEach((b) => { if (b.value !== "bundle") b.checked = false; });
                } else if (box.checked) {
                    const bundle = productBoxes.find((b) => b.value === "bundle");
                    if (bundle) bundle.checked = false;
                }
                updateTotal();
            })
        );

        const open = (productKey) => {
            productBoxes.forEach((b) => { b.checked = b.value === productKey; });
            updateTotal();
            $(".form-status", form).textContent = "";
            $(".form-status", form).className = "form-status";
            form.querySelector('button[type="submit"]').hidden = false;
            if (typeof dialog.showModal === "function") dialog.showModal();
            else dialog.setAttribute("open", "");
            document.body.classList.add("dialog-open");
            setTimeout(() => $("#order-name").focus(), 50);
        };

        const close = () => {
            dialog.close ? dialog.close() : dialog.removeAttribute("open");
        };

        dialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));
        dialog.addEventListener("click", (e) => { if (e.target === dialog) close(); });
        $$("[data-close]", dialog).forEach((b) => b.addEventListener("click", close));
        $$(".order-btn").forEach((btn) => btn.addEventListener("click", () => open(btn.dataset.product)));

        // Deep link: /ecommiki/#siparis or #siparis-mcp
        const hash = location.hash.match(/^#siparis(?:-(\w+))?$/);
        if (hash) open(PRODUCTS[hash[1]] ? hash[1] : "bundle");

        form.ecommikiSummary = updateTotal;
    }

    // ------------------------------------------------------------------
    // Request forms (order + demo) → e-mail
    // ------------------------------------------------------------------
    const makeId = (prefix) => {
        const d = new Date();
        const ymd = `${String(d.getFullYear()).slice(2)}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
        return `${prefix}-${ymd}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
    };

    function buildPayload(form) {
        const type = form.dataset.type;
        const isOrder = type === "Sipariş";
        const id = makeId(isOrder ? "ECM" : "DEMO");
        const data = {};

        new FormData(form).forEach((value, key) => {
            if (key === "product" || key === "_honey") return;
            const v = String(value).trim();
            if (v) data[key] = v;
        });

        const payload = { [isOrder ? "Sipariş No" : "Talep No"]: id, "Talep Tipi": type };

        if (isOrder && form.ecommikiSummary) {
            const { selected, total } = form.ecommikiSummary();
            payload["Ürünler"] = selected.map((k) => `${PRODUCTS[k].name} ($${PRODUCTS[k].price})`).join(" + ");
            payload["Toplam (USD)"] = `$${total}`;
        }

        Object.assign(payload, data);
        payload["Sayfa"] = location.href.split("#")[0];
        payload["Tarih"] = new Date().toLocaleString("tr-TR");

        const email = data["E-posta"] || "";
        const subjectTail = isOrder ? (payload["Ürünler"] || "") : (data["Mağaza"] || data["Ad Soyad"] || "");

        return {
            id,
            isOrder,
            fields: payload,
            meta: {
                _subject: `Ecommiki ${type} ${id} — ${subjectTail}`.slice(0, 180),
                _cc: CC_EMAILS,
                _template: "table",
                _captcha: "false",
                _replyto: email,
            },
        };
    }

    function mailtoLink({ id, fields, meta }) {
        const body = Object.entries(fields).map(([k, v]) => `${k}: ${v}`).join("\n");
        return `mailto:${ALL_EMAILS.join(",")}?subject=${encodeURIComponent(meta._subject)}&body=${encodeURIComponent(body)}`;
    }

    function showSuccess(statusNode, { id, isOrder }) {
        statusNode.className = "form-status is-success";
        statusNode.innerHTML = isOrder
            ? `<div>✅ Siparişiniz alındı.</div><div class="order-id">${id}</div>
               <div>Ödeme bilgileri ve teslim adımları <strong>24 saat içinde</strong> e-postanıza gönderilecek. Spam klasörünüzü de kontrol edin.</div>`
            : `<div>✅ Talebiniz alındı (<strong>${id}</strong>).</div><div>En geç 24 saat içinde size dönüş yapacağız.</div>`;
    }

    function showFailure(statusNode, payload) {
        statusNode.className = "form-status is-error";
        statusNode.innerHTML = `Form şu an gönderilemedi. Bilgileriniz kaybolmasın diye aşağıdaki butonla hazır e-posta olarak gönderebilirsiniz.
            <br><a class="btn btn-secondary btn-sm" href="${mailtoLink(payload)}">📧 E-posta ile gönder</a>`;
    }

    function initRequestForms() {
        $$(".js-request-form").forEach((form) => {
            form.addEventListener("submit", async (e) => {
                e.preventDefault();
                const statusNode = $(".form-status", form);
                const submitBtn = form.querySelector('button[type="submit"]');

                // Validation
                if (form.dataset.type === "Sipariş" && !$$('input[name="product"]:checked', form).length) {
                    statusNode.className = "form-status is-error";
                    statusNode.textContent = "Lütfen en az bir ürün seçin.";
                    return;
                }
                if (!form.reportValidity()) return;

                const payload = buildPayload(form);

                // Honeypot → silently "succeed"
                if (form.querySelector('input[name="_honey"]').value) {
                    showSuccess(statusNode, payload);
                    return;
                }

                const originalText = submitBtn.textContent;
                submitBtn.disabled = true;
                submitBtn.textContent = "Gönderiliyor...";

                try {
                    const res = await fetch(FORM_ENDPOINT, {
                        method: "POST",
                        headers: { "Content-Type": "application/json", Accept: "application/json" },
                        body: JSON.stringify({ ...payload.fields, ...payload.meta }),
                    });
                    const json = await res.json().catch(() => ({}));
                    if (!res.ok || String(json.success) !== "true") throw new Error(json.message || `HTTP ${res.status}`);

                    showSuccess(statusNode, payload);
                    submitBtn.hidden = true;
                    form.reset();
                    if (form.ecommikiSummary) form.ecommikiSummary();
                } catch (err) {
                    console.warn("[ecommiki] form delivery failed:", err.message);
                    showFailure(statusNode, payload);
                } finally {
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                }
            });
        });
    }

    document.addEventListener("DOMContentLoaded", () => {
        initROI();
        initOrderDialog();
        initRequestForms();
    });
})();

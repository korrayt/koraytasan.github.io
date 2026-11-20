/**
 * YAVUZ YANGIN GÜVENLİK - ANA JAVASCRIPT MOTORU
 * Web: www.koraytasan.com/yavuzyangin
 */

document.addEventListener('DOMContentLoaded', () => {
  initCalculator();
  initModal();
  initMobileMenu();
  initFormHandlers();
});

// 1. Yangın Güvenliği İhtiyaç Hesaplayıcı (Yönetmelik Uyumlu)
function initCalculator() {
  const facilitySelect = document.getElementById('calc-facility');
  const areaInput = document.getElementById('calc-area');
  const riskSelect = document.getElementById('calc-risk');

  if (!facilitySelect || !areaInput || !riskSelect) return;

  function calculate() {
    const area = parseFloat(areaInput.value) || 0;
    const risk = riskSelect.value;
    const facility = facilitySelect.value;

    let kktCount = 0;
    let co2Count = 0;
    let cabinetNeeded = false;
    let specialSystem = 'Standart Tüp Koruması';

    // Binaların Yangından Korunması Hakkında Yönetmelik Madde 99:
    // Düşük tehlike: Her 500 m2 için 1 adet 6kg KKT
    // Orta tehlike: Her 250 m2 için 1 adet 6kg KKT
    // Yüksek tehlike: Her 200 m2 için 1 adet 6kg KKT + CO2
    if (area > 0) {
      if (risk === 'low') {
        kktCount = Math.max(1, Math.ceil(area / 500));
        co2Count = Math.ceil(kktCount * 0.3);
      } else if (risk === 'medium') {
        kktCount = Math.max(2, Math.ceil(area / 250));
        co2Count = Math.max(1, Math.ceil(kktCount * 0.4));
      } else { // high
        kktCount = Math.max(4, Math.ceil(area / 200));
        co2Count = Math.max(2, Math.ceil(kktCount * 0.5));
      }

      // Yangın Dolabı Kriteri (Yönetmelik Madde 94):
      if (area >= 600 || facility === 'factory' || facility === 'warehouse') {
        cabinetNeeded = true;
      }

      // Özel Sistem Önerisi
      if (facility === 'restaurant') {
        specialSystem = 'Davlumbaz Otomatik Söndürme (F Sınıfı)';
      } else if (facility === 'server') {
        specialSystem = 'FM-200 / Novec 1230 Temiz Gazlı Söndürme';
      } else if (facility === 'factory' && area > 2000) {
        specialSystem = 'Otomatik Islak Borulu Sprinkler Şebekesi';
      } else if (facility === 'warehouse') {
        specialSystem = 'Erken Uyarı Beam Dedektör & Hidrant Hattı';
      }
    }

    // UI Güncelleme
    const elKkt = document.getElementById('res-kkt');
    const elCo2 = document.getElementById('res-co2');
    const elCabinet = document.getElementById('res-cabinet');
    const elSpecial = document.getElementById('res-special');

    if (elKkt) elKkt.innerText = `${kktCount} Adet (6 kg ABC)`;
    if (elCo2) elCo2.innerText = `${co2Count} Adet (5 kg CO2)`;
    if (elCabinet) elCabinet.innerText = cabinetNeeded ? 'Zorunlu (TS EN 671-1)' : 'Tavsiye Edilir';
    if (elSpecial) elSpecial.innerText = specialSystem;

    // WhatsApp Teklif Butonunu Güncelle
    const waBtn = document.getElementById('calc-wa-btn');
    if (waBtn) {
      const facilityText = facilitySelect.options[facilitySelect.selectedIndex].text;
      const msg = encodeURIComponent(
        `Merhaba Yavuz Yangın, ${facilityText} için yaklaşık ${area} m² alanda yangın tüpü ve güvenlik teklifi almak istiyorum. (Tahmini hesaplama: ${kktCount} adet 6kg KKT, ${co2Count} adet CO2). Tesisimiz için keşif ve fiyat teklifi hazırlayabilir misiniz?`
      );
      waBtn.href = `https://wa.me/905324149288?text=${msg}`;
    }
  }

  facilitySelect.addEventListener('change', calculate);
  areaInput.addEventListener('input', calculate);
  riskSelect.addEventListener('change', calculate);
  calculate(); // Başlangıç çağrısı
}

// 2. Hızlı Teklif Modalı
function initModal() {
  const modal = document.getElementById('quote-modal');
  const openBtns = document.querySelectorAll('.open-quote-modal');
  const closeBtns = document.querySelectorAll('.modal-close, .modal-close-btn');

  if (!modal) return;

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('active');
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.classList.remove('active');
      modal.classList.remove('is-open');
    });
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      modal.classList.remove('active');
    }
  });
}

// 3. Mobil Menü
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });
  }
}

// 4. Form Yönetimi ve WhatsApp Gönderimi
function initFormHandlers() {
  const forms = document.querySelectorAll('.quote-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('[name="name"]')?.value || '';
      const company = form.querySelector('[name="company"]')?.value || '';
      const phone = form.querySelector('[name="phone"]')?.value || '';
      const service = form.querySelector('[name="service"]')?.value || 'Genel Yangın Güvenliği';
      const notes = form.querySelector('[name="notes"]')?.value || '';

      const text = encodeURIComponent(
        `*Yavuz Yangın Teklif & Keşif Talebi*\n\nYetkili: ${name}\nFirma: ${company}\nTelefon: ${phone}\nHizmet: ${service}\nNot: ${notes}`
      );

      // Başarılı bildirim ve WhatsApp yönlendirmesi
      window.open(`https://wa.me/905324149288?text=${text}`, '_blank');
      form.reset();
      
      const modal = document.getElementById('quote-modal');
      if (modal) modal.classList.remove('active');
    });
  });
}

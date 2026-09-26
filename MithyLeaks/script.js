/**
 * MithyLeaks — Interactive Reader & Tri-Lingual Tab Controller
 * Languages: TR (Türkçe), EN (English), LT (Latina)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const tabs = document.querySelectorAll('.lang-tab');
  const views = {
    tr: document.getElementById('content-tr'),
    en: document.getElementById('content-en'),
    lt: document.getElementById('content-lt')
  };

  const titles = {
    tr: document.querySelector('.title-tr'),
    en: document.querySelector('.title-en'),
    lt: document.querySelector('.title-lt')
  };

  const captions = {
    tr: document.querySelector('.caption-tr'),
    en: document.querySelector('.caption-en'),
    lt: document.querySelector('.caption-lt')
  };

  const epigraphs = {
    tr: document.querySelector('.epigraph-tr'),
    en: document.querySelector('.epigraph-en'),
    lt: document.querySelector('.epigraph-lt')
  };

  const localizedElements = document.querySelectorAll('[data-tr]');

  // Scroll Progress Bar
  const progressBar = document.getElementById('scrollProgress');
  window.addEventListener('scroll', () => {
    const docEl = document.documentElement;
    const scrollTop = docEl.scrollTop || document.body.scrollTop;
    const scrollHeight = docEl.scrollHeight - docEl.clientHeight;
    if (scrollHeight > 0) {
      const progress = (scrollTop / scrollHeight) * 100;
      progressBar.style.width = progress + '%';
    }
  }, { passive: true });

  // Function to switch language
  function setLanguage(lang, updateHash = true) {
    if (!['tr', 'en', 'lt'].includes(lang)) lang = 'tr';

    // Update body class
    document.body.className = `lang-${lang}`;

    // Update tabs
    tabs.forEach(tab => {
      const isActive = tab.dataset.lang === lang;
      tab.classList.toggle('active', isActive);
      tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    // Update Content Views
    Object.keys(views).forEach(k => {
      if (views[k]) {
        if (k === lang) {
          views[k].style.display = 'block';
          setTimeout(() => views[k].classList.add('active'), 20);
        } else {
          views[k].classList.remove('active');
          views[k].style.display = 'none';
        }
      }
    });

    // Update Titles
    Object.keys(titles).forEach(k => {
      if (titles[k]) titles[k].style.display = (k === lang) ? 'inline' : 'none';
    });

    // Update Captions
    Object.keys(captions).forEach(k => {
      if (captions[k]) captions[k].style.display = (k === lang) ? 'inline' : 'none';
    });

    // Update Epigraphs
    Object.keys(epigraphs).forEach(k => {
      if (epigraphs[k]) epigraphs[k].style.display = (k === lang) ? 'block' : 'none';
    });

    // Update localized UI strings
    localizedElements.forEach(el => {
      const text = el.getAttribute(`data-${lang}`);
      if (text) el.textContent = text;
    });

    // Update page title
    const metaTitles = {
      tr: "MithyLeaks — Medusa'ya ne oldu? | Koray Taşan",
      en: "MithyLeaks — What Happened to Medusa? | Koray Taşan",
      lt: "MithyLeaks — Quid Accidit Medusae? | Koray Taşan"
    };
    document.title = metaTitles[lang] || metaTitles.tr;

    // Save preference
    try {
      localStorage.setItem('mithyleaks_lang', lang);
    } catch (e) {}

    // Update URL hash
    if (updateHash) {
      if (history.replaceState) {
        history.replaceState(null, null, `#${lang}`);
      } else {
        location.hash = `#${lang}`;
      }
    }
  }

  // Bind Tab Click Events
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = tab.dataset.lang;
      setLanguage(lang, true);
    });
  });

  // Determine initial language from hash or storage
  const hashLang = (location.hash || '').replace('#', '').toLowerCase();
  let initialLang = 'tr';
  if (['tr', 'en', 'lt'].includes(hashLang)) {
    initialLang = hashLang;
  } else {
    try {
      const stored = localStorage.getItem('mithyleaks_lang');
      if (stored && ['tr', 'en', 'lt'].includes(stored)) {
        initialLang = stored;
      }
    } catch (e) {}
  }

  setLanguage(initialLang, false);

  // Font Size Adjusters
  const root = document.documentElement;
  let currentFontSize = 1.28; // rem
  const fontInc = document.getElementById('fontInc');
  const fontDec = document.getElementById('fontDec');

  if (fontInc && fontDec) {
    fontInc.addEventListener('click', () => {
      if (currentFontSize < 1.6) {
        currentFontSize += 0.08;
        root.style.setProperty('--base-font-size', `${currentFontSize.toFixed(2)}rem`);
      }
    });

    fontDec.addEventListener('click', () => {
      if (currentFontSize > 1.05) {
        currentFontSize -= 0.08;
        root.style.setProperty('--base-font-size', `${currentFontSize.toFixed(2)}rem`);
      }
    });
  }

  // Social Share Handlers
  const pageUrl = window.location.href.split('#')[0];
  const shareTexts = {
    tr: "MithyLeaks: Medusa'ya ne oldu? — Koray Taşan",
    en: "MithyLeaks: What Happened to Medusa? — Koray Taşan",
    lt: "MithyLeaks: Quid Accidit Medusae? — Koray Taşan"
  };

  const getShareText = () => {
    const currentLang = document.body.className.replace('lang-', '') || 'tr';
    return shareTexts[currentLang] || shareTexts.tr;
  };

  const shareWhatsApp = document.getElementById('shareWhatsApp');
  if (shareWhatsApp) {
    shareWhatsApp.addEventListener('click', () => {
      const text = encodeURIComponent(`${getShareText()} \n${window.location.href}`);
      window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
    });
  }

  const shareX = document.getElementById('shareX');
  if (shareX) {
    shareX.addEventListener('click', () => {
      const text = encodeURIComponent(getShareText());
      const url = encodeURIComponent(window.location.href);
      window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
    });
  }

  const shareLinkedIn = document.getElementById('shareLinkedIn');
  if (shareLinkedIn) {
    shareLinkedIn.addEventListener('click', () => {
      const url = encodeURIComponent(window.location.href);
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
    });
  }

  const copyLinkBtn = document.getElementById('copyLinkBtn');
  const copyLinkText = document.getElementById('copyLinkText');
  if (copyLinkBtn && copyLinkText) {
    copyLinkBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(window.location.href).then(() => {
        const originalText = copyLinkText.textContent;
        copyLinkText.textContent = "Kopyalandı! ✓";
        setTimeout(() => {
          copyLinkText.textContent = originalText;
        }, 2200);
      }).catch(() => {
        prompt("Bağlantıyı kopyalayın:", window.location.href);
      });
    });
  }
});

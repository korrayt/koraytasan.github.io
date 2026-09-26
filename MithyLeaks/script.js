(() => {
  const panels = [...document.querySelectorAll('[data-panel]')];
  const tabs = [...document.querySelectorAll('.language-tabs [data-lang]')];
  const labels = window.MITHY_LABELS || {};
  const footer = document.getElementById('footerText');
  const topLink = document.getElementById('topLink');
  const drawerTitle = document.getElementById('drawerTitle');
  const archiveOpen = document.getElementById('archiveOpen');
  const drawer = document.getElementById('archiveDrawer');
  const progress = document.querySelector('.reading-progress i');

  const normalize = (v) => ['tr','en','la'].includes(v) ? v : 'tr';
  const initial = normalize(location.hash.replace('#','') || localStorage.getItem('mithyleaks-language') || 'tr');

  function switchLang(lang, updateHash = true){
    lang = normalize(lang);
    document.documentElement.dataset.lang = lang;
    document.documentElement.lang = lang === 'la' ? 'la' : lang;
    panels.forEach(p => p.hidden = p.dataset.panel !== lang);
    tabs.forEach(t => {
      const active = t.dataset.lang === lang;
      t.classList.toggle('active', active);
      t.setAttribute('aria-pressed', active ? 'true':'false');
    });
    const l = labels[lang] || labels.tr;
    footer.textContent = l.footer;
    topLink.textContent = l.top + ' ↑';
    drawerTitle.textContent = l.index;
    archiveOpen.firstChild.nodeValue = (l.open_index || 'Archive') + ' ';
    localStorage.setItem('mithyleaks-language', lang);
    if(updateHash) history.replaceState(null,'','#'+lang);
    document.title = `MithyLeaks — ${l.title || 'Medusa'} / ${l.subtitle || ''}`;
    updateProgress();
  }

  tabs.forEach(t => t.addEventListener('click', () => switchLang(t.dataset.lang)));
  window.addEventListener('hashchange', () => switchLang(normalize(location.hash.slice(1)), false));

  function openDrawer(){drawer.classList.add('open');drawer.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
  function closeDrawer(){drawer.classList.remove('open');drawer.setAttribute('aria-hidden','true');document.body.style.overflow=''}
  archiveOpen.addEventListener('click', openDrawer);
  drawer.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeDrawer));
  window.addEventListener('keydown', e => { if(e.key === 'Escape') closeDrawer(); });

  function updateProgress(){
    const panel = panels.find(p => !p.hidden);
    if(!panel) return;
    const article = panel.querySelector('.story');
    const rect = article.getBoundingClientRect();
    const start = window.scrollY + rect.top - window.innerHeight * .3;
    const end = start + article.offsetHeight - window.innerHeight * .55;
    const pct = Math.max(0, Math.min(1, (window.scrollY-start)/(end-start)));
    progress.style.width = `${pct*100}%`;
  }
  window.addEventListener('scroll', updateProgress, {passive:true});
  window.addEventListener('resize', updateProgress);

  switchLang(initial, false);
  updateProgress();
})();

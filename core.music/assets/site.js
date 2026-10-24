(()=>{
  'use strict';
  const nav=document.querySelector('#primary-navigation');
  const toggle=document.querySelector('.menu-toggle');
  if(nav&&toggle){
    const close=()=>{nav.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open menu')};
    toggle.addEventListener('click',()=>{const open=!nav.classList.contains('is-open');nav.classList.toggle('is-open',open);toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close menu':'Open menu')});
    nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',close));
    document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
    document.addEventListener('click',e=>{if(!nav.contains(e.target)&&!toggle.contains(e.target))close()});
  }
  const search=document.querySelector('#post-search');
  const buttons=Array.from(document.querySelectorAll('[data-filter]'));
  const cards=Array.from(document.querySelectorAll('.blog-card'));
  const empty=document.querySelector('#blog-empty');
  if(cards.length&&(buttons.length||search)){
    let filter='all';
    const apply=()=>{
      const query=(search?.value||'').trim().toLocaleLowerCase();
      let count=0;
      for(const card of cards){
        const category=card.dataset.category||'';
        const matchesFilter=filter==='all'||(filter==='ai'&&category.includes('ai'))||(filter==='story'&&(category.includes('story')||category.includes('sound')))||(filter==='process'&&(category.includes('production')||category.includes('process')));
        const show=matchesFilter&&(!query||(card.dataset.search||'').includes(query));
        card.hidden=!show;
        if(show)count++;
      }
      if(empty)empty.hidden=count>0;
    };
    buttons.forEach(button=>button.addEventListener('click',()=>{filter=button.dataset.filter||'all';buttons.forEach(b=>{const active=b===button;b.classList.toggle('is-selected',active);b.setAttribute('aria-pressed',String(active))});apply()}));
    search?.addEventListener('input',apply);
  }
})();


// Interactive Video Player Switcher
document.addEventListener('DOMContentLoaded', () => {
  const playerIframe = document.querySelector('[data-video-player]');
  const trackItems = document.querySelectorAll('[data-video-id]');
  
  if (playerIframe && trackItems.length > 0) {
    trackItems.forEach(item => {
      item.addEventListener('click', (e) => {
        const videoId = item.getAttribute('data-video-id');
        const videoTitle = item.getAttribute('data-video-title') || 'CORE MUSIC Player';
        if (videoId) {
          playerIframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
          playerIframe.title = videoTitle;
          trackItems.forEach(t => t.classList.remove('is-playing'));
          item.classList.add('is-playing');
        }
      });
    });
  }
});

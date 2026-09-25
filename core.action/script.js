const screens = {
  edit:{label:'core.craft',title:'Edit & NLE Timeline',descTR:'MOVIE / SCENE / PLAN hiyerarşisiyle detay ve bütün arasında anında geçiş.',descEN:'Move instantly between detail and whole-film context through MOVIE / SCENE / PLAN.',src:'assets/ui/edit.webp'},
  script:{label:'coretex',title:'Script & Narrative',descTR:'Senaryo, sahne, karakter, breakdown ve anlatı zekası aynı üretim zincirinde.',descEN:'Screenplay, scene, character, breakdown and narrative intelligence in one production chain.',src:'assets/ui/script.webp'},
  production:{label:'core.pulse',title:'Pre-Production & Set',descTR:'Planlama, shot list, storyboard ve çekim kararlarını gerçek medya ile bağla.',descEN:'Connect planning, shot lists, storyboards and set decisions directly to captured media.',src:'assets/ui/production.webp'},
  media:{label:'core.flow',title:'Media, Ingest & Project Compiler',descTR:'Dağınık medyayı analiz et, organize et, proxy/sync/relink akışını tek yerde yönet.',descEN:'Analyze and organize incoming media, then manage proxy, sync and relink workflows in one place.',src:'assets/ui/media.webp'},
  graph:{label:'core.graph',title:'Motion Graphics',descTR:'Timeline’a canlı layer olarak eklenebilen düzenlenebilir motion composition ve şablonlar.',descEN:'Editable motion compositions and templates that live directly as timeline layers.',src:'assets/ui/graph.webp'},
  style:{label:'core.style',title:'Image & Still Design',descTR:'Poster, thumbnail ve sabit görselleri katmanlı, non-destructive proje olarak üret.',descEN:'Create posters, thumbnails and stills as layered, non-destructive projects.',src:'assets/ui/style.webp'},
  color:{label:'kolor core.action',title:'Professional Color Lab',descTR:'PLAN correction + SCENE match + MOVIE look: tek kapsam motorunda üç seviye renk kontrolü.',descEN:'PLAN correction + SCENE match + MOVIE look: three levels of color control in one scope engine.',src:'assets/ui/color.webp'},
  clean:{label:'clean core.action',title:'VFX Roto & Repair',descTR:'Roto, tracking, cleanup ve AI patch işlemlerini maskeli ve geri alınabilir tut.',descEN:'Keep roto, tracking, cleanup and AI patch work masked, layered and reversible.',src:'assets/ui/clean.webp'},
  audio:{label:'corous',title:'Audio Production',descTR:'Dialogue, ADR, Foley, ambience, SFX, score, mix ve mastering aynı ses çalışma alanında.',descEN:'Dialogue, ADR, Foley, ambience, SFX, score, mix and mastering in one audio workspace.',src:'assets/ui/audio.webp'},
  engine:{label:'core.engine',title:'Render, QC & Export',descTR:'Codec, render queue, QC, teslim paketleri ve kaynak görünürlüğü tek kontrol merkezinde.',descEN:'Codecs, render queue, QC, delivery packages and resource visibility in one control center.',src:'assets/ui/engine.webp'},
  publish:{label:'Publish',title:'Publishing Control',descTR:'Platform varyantları, metadata, thumbnail, takvim ve onay sürecini final master ile bağlı tut.',descEN:'Keep platform variants, metadata, thumbnails, schedules and approvals connected to the final master.',src:'assets/ui/publish.webp'},
  archive:{label:'Archive',title:'Preservation & Restore',descTR:'Consolidate, manifest, checksum, provenance ve restore noktalarıyla uzun ömürlü proje koruması.',descEN:'Long-term preservation through consolidation, manifests, checksums, provenance and restore points.',src:'assets/ui/archive.webp'},
};

let lang='tr';
const langToggle=document.getElementById('langToggle');
langToggle.addEventListener('click',()=>{lang=lang==='tr'?'en':'tr';document.documentElement.lang=lang;document.querySelectorAll('[data-tr][data-en]').forEach(el=>{el.textContent=el.dataset[lang]});langToggle.textContent=lang==='tr'?'TR / EN':'EN / TR';updateScreenText();updateScopeText();});

const screenImage=document.getElementById('screenImage');
const screenLabel=document.getElementById('screenLabel');
const screenTitle=document.getElementById('screenTitle');
const screenDescription=document.getElementById('screenDescription');
let currentScreen='edit';
function updateScreenText(){const s=screens[currentScreen];screenLabel.textContent=s.label;screenTitle.textContent=s.title;screenDescription.textContent=lang==='tr'?s.descTR:s.descEN;}
document.querySelectorAll('.screen-tab').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.screen-tab').forEach(x=>x.classList.remove('active'));btn.classList.add('active');currentScreen=btn.dataset.screen;const s=screens[currentScreen];screenImage.style.opacity=.22;setTimeout(()=>{screenImage.src=s.src;screenImage.onload=()=>{screenImage.style.opacity=1};updateScreenText()},130)}));

const scopeData={
  plan:{label:'PLAN',tr:['Tek planın çalışma masası.','Kaynak seçimleri, ses eşleme, shot-level correction, cleanup, mask ve clip bazlı kararlar burada yaşar.',['Source','Sync','Color Correction','Cleanup','Mask']],en:['The workbench for a single shot.','Source selection, audio sync, shot-level correction, cleanup, masks and clip-level decisions live here.',['Source','Sync','Color Correction','Cleanup','Mask']]},
  scene:{label:'SCENE',tr:['Sahnenin yaratıcı çalışma alanı.','Bitmiş PLAN bloklarını birleştir; sahne ritmi, ambiyans, grafik, SFX, match ve sahneye özgü kararları burada kur.',['Assembly','Scene Match','Ambience','Graphics','SFX']],en:['The creative workspace for a scene.','Assemble finished PLAN blocks and shape scene rhythm, ambience, graphics, SFX, matching and scene-level decisions here.',['Assembly','Scene Match','Ambience','Graphics','SFX']]},
  movie:{label:'MOVIE',tr:['Filmin temiz final assembly alanı.','Sahne sırası, global film look, score, master grafik paketi ve final bütünlüğü burada yönetilir.',['Master Assembly','Film Look','Score','Global Graphics','Pacing']],en:['The clean final assembly of the film.','Manage scene order, global film look, score, master graphics package and final continuity here.',['Master Assembly','Film Look','Score','Global Graphics','Pacing']]}
};
let currentScope='plan';
function updateScopeText(){const d=scopeData[currentScope];const arr=d[lang];const box=document.getElementById('scopeCopy');box.querySelector('.scope-label').textContent=d.label;box.querySelector('h3').textContent=arr[0];box.querySelector('p').textContent=arr[1];box.querySelector('.scope-tags').innerHTML=arr[2].map(x=>`<span>${x}</span>`).join('');document.querySelectorAll('.scope-node.small').forEach(x=>x.classList.toggle('active',currentScope==='plan'));document.querySelector('.scope-node.mid').classList.toggle('active',currentScope==='scene');document.querySelector('.scope-node.big').classList.toggle('active',currentScope==='movie');}
document.querySelectorAll('.scope-btn').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.scope-btn').forEach(x=>x.classList.remove('active'));btn.classList.add('active');currentScope=btn.dataset.scope;updateScopeText();}));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08,rootMargin:'0px 0px -30px'});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const lightbox=document.getElementById('lightbox');const lbImage=document.getElementById('lightboxImage');document.getElementById('openLightbox').addEventListener('click',()=>{lbImage.src=screens[currentScreen].src;lightbox.showModal()});document.getElementById('closeLightbox').addEventListener('click',()=>lightbox.close());lightbox.addEventListener('click',e=>{if(e.target===lightbox)lightbox.close()});

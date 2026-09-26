from pathlib import Path
import re, html, json, math

ROOT = Path('/mnt/data/MithyLeaks')

LANGS = {
    'tr': {
        'file': ROOT/'medusa-tr.md',
        'label':'TÜRKÇE',
        'title':'MEDUSA',
        'subtitle':'Kayıp Metamorfoz',
        'kicker':'DOSYA 001 · SIZDIRILMIŞ MİT',
        'manifesto':'Mitler çoğu zaman yalan söylemez. Yalnızca gerçeğin hangi kısmını anlatacaklarına karar verirler.',
        'archive':'ARŞİV', 'index':'DOSYA İNDEKSİ', 'status':'DURUM', 'statusv':'YENİDEN KURULDU',
        'subject':'ÖZNE', 'thread':'İZ', 'evidence':'KALAN İZ', 'read':'OKUMA', 'minutes':'dk',
        'note':'Edebi yeniden kurgu · Antik kaynakların bıraktığı boşluklardan türetilmiştir.',
        'next':'SONRAKİ SIZINTI', 'next_title':'DOSYA 002 · YAKINDA', 'next_copy':'Başka bir mit, başka bir eksik tanıklık. Arşiv açık kalacak.',
        'top':'Yukarı', 'open_index':'Arşiv', 'close':'Kapat', 'footer':'MithyLeaks · Unutulan değil, saklanan hikâyeler.',
        'chapters':'BÖLÜMLER', 'canonical':'KIRIK KAYIT', 'canon_quote':'inveni qui se vidisse referret',
        'canon_note':'“Onu gördüğünü söyleyen birine rastladım.” — Ovidius, Metamorphoses IV',
    },
    'en': {
        'file': ROOT/'medusa-en.md',
        'label':'ENGLISH', 'title':'MEDUSA', 'subtitle':'The Lost Metamorphosis',
        'kicker':'FILE 001 · LEAKED MYTH',
        'manifesto':'Myths rarely lie. They merely decide which part of the truth they will tell.',
        'archive':'ARCHIVE', 'index':'FILE INDEX', 'status':'STATUS', 'statusv':'RECONSTRUCTED',
        'subject':'SUBJECT', 'thread':'THREAD', 'evidence':'SURVIVING TRACE', 'read':'READ', 'minutes':'min',
        'note':'Literary reconstruction · Built from the silences left between surviving ancient fragments.',
        'next':'NEXT LEAK', 'next_title':'FILE 002 · COMING SOON', 'next_copy':'Another myth. Another missing testimony. The archive will remain open.',
        'top':'Top', 'open_index':'Archive', 'close':'Close', 'footer':'MithyLeaks · Not forgotten stories. Hidden ones.',
        'chapters':'SECTIONS', 'canonical':'BROKEN RECORD', 'canon_quote':'inveni qui se vidisse referret',
        'canon_note':'“I found one who said that he had seen her.” — Ovid, Metamorphoses IV',
    },
    'la': {
        'file': ROOT/'medusa-la.md',
        'label':'LATINA', 'title':'MEDUSA', 'subtitle':'Metamorphosis Amissa',
        'kicker':'ARCHIVUM 001 · FABULA REVELATA',
        'manifesto':'Fabulae raro mentiuntur. Tantum statuunt quam partem veritatis narrent.',
        'archive':'ARCHIVUM', 'index':'INDEX FABULARUM', 'status':'STATUS', 'statusv':'RECONSTRUCTA',
        'subject':'SUBIECTUM', 'thread':'FILUM', 'evidence':'VESTIGIUM', 'read':'LECTIO', 'minutes':'min',
        'note':'Reconstructio litteraria · Ex silentio inter fragmenta antiqua relicto composita.',
        'next':'PROXIMA REVELATIO', 'next_title':'ARCHIVUM 002 · MOX', 'next_copy':'Alia fabula. Aliud testimonium amissum. Archivum apertum manebit.',
        'top':'Sursum', 'open_index':'Archivum', 'close':'Claude', 'footer':'MithyLeaks · Fabulae non oblitae, sed occultatae.',
        'chapters':'PARTES', 'canonical':'TESTIMONIUM FRACTUM', 'canon_quote':'inveni qui se vidisse referret',
        'canon_note':'Ovidius, Metamorphoses IV',
    }
}

def inline_md(s):
    s = html.escape(s, quote=False)
    s = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', s)
    s = re.sub(r'\*(.+?)\*', r'<em>\1</em>', s)
    return s

def render_md(text):
    text = text.replace('\\\n','\n')
    parts = [p.strip() for p in re.split(r'\n\s*\n', text) if p.strip()]
    out=[]
    section=1
    for p in parts:
        if p.strip() == '---':
            out.append(f'<div class="myth-break" aria-hidden="true"><span>§</span><i></i><b>{section:02d}</b><i></i><span>§</span></div>')
            section += 1
            continue
        p = p.replace('\\','').strip()
        clean = re.sub(r'[*_]', '', p).strip()
        classes=[]
        if len(clean) < 75 and (clean.startswith(('“','"','‘',"'")) or clean.endswith(('.”','.”','?”','!”','.”'))):
            classes.append('dialogue')
        if len(clean) < 42 and not re.search(r'[.!?…]$', clean) and section>1:
            classes.append('micro')
        if clean in {'MEDUSA','Phidias.','Phidias'}:
            classes.append('name-reveal')
        out.append(f'<p class="{" ".join(classes)}">{inline_md(p)}</p>')
    return '\n'.join(out), section-1

rendered={}
for code, d in LANGS.items():
    txt = d['file'].read_text(encoding='utf-8')
    html_body, sections = render_md(txt)
    word_count = len(re.findall(r'\b\w+\b', txt, re.UNICODE))
    rendered[code] = {'html':html_body, 'words':word_count, 'sections':sections}

lang_articles=[]
for code, d in LANGS.items():
    data=rendered[code]
    lang_articles.append(f'''<section class="language-panel" data-panel="{code}" lang="{code if code!='la' else 'la'}" {'hidden' if code!='tr' else ''}>
      <header class="dossier-hero">
        <div class="hero-sigil" aria-hidden="true">
          <svg viewBox="0 0 220 220" role="img"><defs><radialGradient id="g{code}" cx="50%" cy="44%" r="55%"><stop offset="0" stop-color="#c9a76a" stop-opacity=".23"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient></defs><circle cx="110" cy="110" r="96" fill="url(#g{code})" stroke="currentColor" stroke-width="1" opacity=".65"/><path d="M31 112c22-39 49-58 79-58s57 19 79 58c-22 39-49 58-79 58s-57-19-79-58Z" fill="none" stroke="currentColor" stroke-width="1.5"/><ellipse cx="110" cy="112" rx="27" ry="44" fill="none" stroke="currentColor"/><path d="M111 67c-8-20-29-28-42-14 21 1 26 15 17 28m25-14c7-21 28-31 43-17-21 3-26 17-16 30M89 157c-16 13-34 10-42-5 18 6 29-2 34-16m50 21c15 13 34 11 43-4-18 5-29-3-34-17" fill="none" stroke="currentColor" stroke-linecap="round"/><circle cx="110" cy="112" r="8" fill="currentColor" opacity=".8"/></svg>
        </div>
        <div class="hero-copy">
          <div class="eyebrow">{d['kicker']}</div>
          <h1>{d['title']}</h1>
          <p class="subtitle">{d['subtitle']}</p>
          <p class="manifesto">{d['manifesto']}</p>
          <div class="hero-meta"><span>MYTH–001</span><span>∙</span><span>{data['words']} words</span><span>∙</span><span>{data['sections']+1} fragments</span></div>
        </div>
      </header>

      <div class="reading-grid">
        <aside class="dossier-rail">
          <div class="rail-card">
            <div class="rail-label">{d['archive']}</div><div class="rail-value">MYTH–001</div>
            <div class="rail-label">{d['status']}</div><div class="rail-value status">{d['statusv']}</div>
            <div class="rail-label">{d['subject']}</div><div class="rail-value">MEDUSA</div>
            <div class="rail-label">{d['thread']}</div><div class="rail-value">ATHENA / PERSEUS / YUSUF</div>
            <div class="rail-label">{d['read']}</div><div class="rail-value">≈ {math.ceil(data['words']/210)} {d['minutes']}</div>
          </div>
          <div class="evidence-card">
            <span>{d['canonical']}</span>
            <blockquote>{d['canon_quote']}</blockquote>
            <small>{d['canon_note']}</small>
          </div>
          <p class="archive-note">{d['note']}</p>
        </aside>
        <article class="story">{data['html']}</article>
      </div>

      <section class="next-file">
        <div class="next-kicker">{d['next']}</div>
        <h2>{d['next_title']}</h2>
        <p>{d['next_copy']}</p>
        <div class="redacted"><i></i><i></i><i></i><i></i></div>
      </section>
    </section>''')

labels = {code:{k:v for k,v in d.items() if isinstance(v,str)} for code,d in LANGS.items()}

html_doc = f'''<!doctype html>
<html lang="tr" data-lang="tr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#080706" />
  <meta name="description" content="MithyLeaks — myths reconstructed from the silences they left behind." />
  <title>MithyLeaks — File 001 / Medusa</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <div class="reading-progress" aria-hidden="true"><i></i></div>
  <div class="grain" aria-hidden="true"></div>

  <header class="site-header">
    <a class="brand" href="#top" aria-label="MithyLeaks home">
      <span class="brand-mark" aria-hidden="true">Μ</span>
      <span>MITHY<span>LEAKS</span></span>
    </a>
    <nav class="language-tabs" aria-label="Language">
      <button class="active" data-lang="tr">TR</button>
      <button data-lang="en">EN</button>
      <button data-lang="la">LAT</button>
    </nav>
    <button class="archive-button" id="archiveOpen">ARCHIVE <span>☰</span></button>
  </header>

  <main id="top">
    {''.join(lang_articles)}
  </main>

  <footer class="site-footer">
    <div class="footer-sigil">ΜL</div>
    <p id="footerText">{LANGS['tr']['footer']}</p>
    <a href="#top" id="topLink">{LANGS['tr']['top']} ↑</a>
  </footer>

  <div class="archive-drawer" id="archiveDrawer" aria-hidden="true">
    <button class="drawer-backdrop" data-close aria-label="Close"></button>
    <section class="drawer-panel" role="dialog" aria-modal="true" aria-labelledby="drawerTitle">
      <div class="drawer-head"><div><small>MITHYLEAKS</small><h2 id="drawerTitle">{LANGS['tr']['index']}</h2></div><button data-close class="drawer-close">×</button></div>
      <div class="file-list">
        <a href="#top" class="file-card active" data-close><span>001</span><div><small>OPEN FILE</small><strong>MEDUSA</strong><em>The Lost Metamorphosis</em></div><b>→</b></a>
        <div class="file-card locked"><span>002</span><div><small>SEALED</small><strong>████████</strong><em>record pending</em></div><b>⌁</b></div>
        <div class="file-card locked"><span>003</span><div><small>SEALED</small><strong>██████████</strong><em>record pending</em></div><b>⌁</b></div>
      </div>
      <p class="drawer-foot">What survives is not always what happened.</p>
    </section>
  </div>

  <script>window.MITHY_LABELS={json.dumps(labels, ensure_ascii=False)};</script>
  <script src="script.js"></script>
</body>
</html>'''

(ROOT/'index.html').write_text(html_doc, encoding='utf-8')
print('wrote index.html', len(html_doc))

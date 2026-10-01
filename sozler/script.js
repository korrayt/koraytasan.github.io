/**
 * Koray Taşan - Şarkı Sözleri & Lirik Platformu Script
 */
(() => {
  const lyricsData = window.KORAY_LYRICS || [];
  const grid = document.getElementById('lyricsGrid');
  const searchInput = document.getElementById('searchInput');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const modalOverlay = document.getElementById('modalOverlay');
  const modalClose = document.getElementById('modalClose');
  const modalTitle = document.getElementById('modalTitle');
  const modalSubtitle = document.getElementById('modalSubtitle');
  const modalBody = document.getElementById('modalBody');
  const copyBtn = document.getElementById('copyBtn');
  const toast = document.getElementById('toast');
  const fontPlusBtn = document.getElementById('fontPlus');
  const fontMinusBtn = document.getElementById('fontMinus');
  const addModalOverlay = document.getElementById('addModalOverlay');
  const openAddModalBtn = document.getElementById('openAddModalBtn');
  const closeAddModalBtn = document.getElementById('closeAddModalBtn');
  const addSongForm = document.getElementById('addSongForm');
  const exportJsonBtn = document.getElementById('exportJsonBtn');

  let currentFilter = 'all';
  let searchQuery = '';
  let activeLyric = null;
  let currentFontSize = 22; // default in px

  // Render lyric cards
  function renderCards() {
    grid.innerHTML = '';
    const filtered = lyricsData.filter(item => {
      const matchFilter = currentFilter === 'all' || item.tags.includes(currentFilter);
      if (!matchFilter) return false;

      if (!searchQuery) return true;
      const q = searchQuery.toLowerCase();
      const inTitle = item.title.toLowerCase().includes(q);
      const inSub = (item.subtitle || '').toLowerCase().includes(q);
      const inQuote = (item.quote || '').toLowerCase().includes(q);
      const inLines = item.sections.some(sec => sec.lines.some(l => l.toLowerCase().includes(q)));

      return inTitle || inSub || inQuote || inLines;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
          <p style="font-size: 18px; font-family: var(--serif); font-style: italic;">Aradığınız kriterde şarkı sözü bulunamadı.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(item => {
      const card = document.createElement('article');
      card.className = 'lyric-card';
      card.setAttribute('data-id', item.id);

      const tagsHtml = item.tags.map(t => `<span class="tag-badge">${t}</span>`).join('');
      const thumbHtml = item.youtubeId ? `
        <div class="card-thumb-preview">
          <img src="https://i.ytimg.com/vi/${item.youtubeId}/hqdefault.jpg" alt="${item.title}" loading="lazy" />
          <span class="card-play-tag">▶ YouTube</span>
        </div>
      ` : '';

      card.innerHTML = `
        <div>
          ${thumbHtml}
          <div class="card-meta">
            <span>${item.date}</span>
            <span>${item.readTime}</span>
          </div>
          <div class="card-header">
            <h3 class="card-title">${item.title}</h3>
            <p class="card-subtitle">${item.subtitle || ''}</p>
          </div>
          <div class="card-quote">“${item.quote}”</div>
        </div>
        <div>
          <div class="card-tags">${tagsHtml}</div>
          <div class="card-footer">
            <span class="card-cta">Sözleri & Videoyu Aç <span>→</span></span>
            <a href="/sozler/${item.id}/" class="card-direct-link" style="color: var(--gold); text-decoration: none; font-size: 11px; padding: 5px 10px; border: 1px solid var(--line); border-radius: 6px; background: rgba(255,255,255,0.03);" onclick="event.stopPropagation();">Ayrı Sayfa ↗</a>
          </div>
        </div>
      `;

      card.addEventListener('click', () => openModal(item));
      grid.appendChild(card);
    });
  }

  // Open Reading Modal
  function openModal(item) {
    activeLyric = item;
    modalTitle.textContent = item.title;
    modalSubtitle.textContent = item.subtitle ? `${item.subtitle} · ${item.date}` : item.date;

    let videoHtml = '';
    if (item.youtubeId) {
      videoHtml = `
        <div class="modal-video-box">
          <div class="video-responsive">
            <iframe 
              src="https://www.youtube-nocookie.com/embed/${item.youtubeId}?rel=0&modestbranding=1" 
              title="${item.title}" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen>
            </iframe>
          </div>
        </div>
      `;
    }

    let shareBarHtml = `
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid var(--line);">
        <a href="/sozler/${item.id}/" class="action-btn" style="text-decoration: none; font-size: 13px;">
          <span>🔗</span> Ayrı Sayfa Olarak Aç (Paylaşım Linki) ↗
        </a>
        <a href="${item.youtubeUrl}" target="_blank" rel="noopener" class="action-btn" style="text-decoration: none; font-size: 13px;">
          <span>▶</span> YouTube'da Aç ↗
        </a>
      </div>
    `;

    let contentHtml = '<div class="lyrics-content">';
    item.sections.forEach(sec => {
      const typeClass = sec.type || 'stanza';
      const labelHtml = sec.label ? `<span class="stanza-label">${sec.label}</span>` : '';
      const linesHtml = sec.lines.map(line => {
        if (!line.trim()) return '<div style="height: 14px;"></div>';
        return `<div class="lyric-line">${line}</div>`;
      }).join('');

      contentHtml += `
        <div class="stanza-block ${typeClass}">
          ${labelHtml}
          ${linesHtml}
        </div>
      `;
    });
    contentHtml += '</div>';

    modalBody.innerHTML = videoHtml + shareBarHtml + contentHtml;
    modalBody.style.fontSize = `${currentFontSize}px`;
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';

    history.replaceState(null, '', `#${item.id}`);
  }

  // Close Modal
  function closeModal() {
    modalOverlay.classList.remove('open');
    modalBody.innerHTML = ''; // stops video immediately
    document.body.style.overflow = '';
    activeLyric = null;
    history.replaceState(null, '', window.location.pathname + window.location.search);
  }

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeAddModal();
    }
  });

  // Font size adjustments
  fontPlusBtn.addEventListener('click', () => {
    if (currentFontSize < 32) {
      currentFontSize += 2;
      modalBody.style.fontSize = `${currentFontSize}px`;
    }
  });

  fontMinusBtn.addEventListener('click', () => {
    if (currentFontSize > 16) {
      currentFontSize -= 2;
      modalBody.style.fontSize = `${currentFontSize}px`;
    }
  });

  // Copy Lyrics
  copyBtn.addEventListener('click', () => {
    if (!activeLyric) return;

    let text = `${activeLyric.title.toUpperCase()}\n${activeLyric.subtitle ? activeLyric.subtitle + '\n' : ''}Sanatçı: khrysaor\nProdüksiyon & Düzenleme: khrysaor (Koray Taşan)\n\n`;

    activeLyric.sections.forEach(sec => {
      if (sec.label) text += `[${sec.label}]\n`;
      sec.lines.forEach(l => {
        text += `${l}\n`;
      });
      text += '\n';
    });

    text += `https://www.koraytasan.com/sozler/${activeLyric.id}/`;

    navigator.clipboard.writeText(text).then(() => {
      showToast('Şarkı sözleri panoya kopyalandı ✓');
    }).catch(() => {
      showToast('Kopyalama başarısız oldu.');
    });
  });

  // Toast notification
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  // Filter click handler
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.tag;
      renderCards();
    });
  });

  // Search input handler
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim();
    renderCards();
  });

  // Add Lyric Modal logic (for quick drafts by Koray)
  function openAddModal() {
    addModalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeAddModal() {
    addModalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (openAddModalBtn) openAddModalBtn.addEventListener('click', openAddModal);
  if (closeAddModalBtn) closeAddModalBtn.addEventListener('click', closeAddModal);
  if (addModalOverlay) {
    addModalOverlay.addEventListener('click', (e) => {
      if (e.target === addModalOverlay) closeAddModal();
    });
  }

  if (addSongForm) {
    addSongForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('newTitle').value.trim();
      const subtitle = document.getElementById('newSubtitle').value.trim();
      const tags = document.getElementById('newTags').value.split(',').map(s => s.trim()).filter(Boolean);
      const rawText = document.getElementById('newLyrics').value.trim();

      if (!title || !rawText) return;

      const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

      // Parse blocks
      const paragraphs = rawText.split(/\n\s*\n/);
      const sections = paragraphs.map(p => {
        const lines = p.split('\n').map(l => l.trim());
        let label = null;
        let type = 'stanza';

        if (lines[0] && lines[0].startsWith('[') && lines[0].endsWith(']')) {
          label = lines[0].slice(1, -1);
          lines.shift();
          const lowLabel = label.toLowerCase();
          if (lowLabel.includes('chorus') || lowLabel.includes('nakarat')) type = 'chorus';
          else if (lowLabel.includes('bridge') || lowLabel.includes('köprü')) type = 'bridge';
          else if (lowLabel.includes('intro')) type = 'intro';
          else if (lowLabel.includes('outro')) type = 'outro';
          else type = 'verse';
        }

        return { type, label, lines };
      });

      const newSong = {
        id,
        title,
        subtitle: subtitle || 'Yeni Şarkı',
        date: new Date().getFullYear().toString(),
        tags: tags.length ? tags : ['Yeni'],
        readTime: '3 dk',
        quote: sections[0]?.lines[0] || title,
        sections
      };

      lyricsData.unshift(newSong);
      renderCards();
      closeAddModal();
      showToast('Yeni şarkı sözü listeye eklendi! ✓');
      openModal(newSong);
    });
  }

  // Initial check hash
  function checkHash() {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const found = lyricsData.find(item => item.id === hash);
      if (found) {
        openModal(found);
      }
    }
  }

  // Init
  renderCards();
  checkHash();
  window.addEventListener('hashchange', checkHash);
})();

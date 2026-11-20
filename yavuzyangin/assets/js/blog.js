/**
 * YAVUZ YANGIN - SEO BLOG ETKİLEŞİM MOTORU
 */

document.addEventListener('DOMContentLoaded', () => {
  initBlogFilters();
  initBlogSearch();
  initReadingProgress();
});

function initBlogFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.blog-card');

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-category');

      cards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat === category) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

function initBlogSearch() {
  const searchInput = document.getElementById('blog-search-input');
  const cards = document.querySelectorAll('.blog-card');

  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();

    cards.forEach(card => {
      const title = card.querySelector('.blog-card-title')?.innerText.toLowerCase() || '';
      const excerpt = card.querySelector('.blog-card-excerpt')?.innerText.toLowerCase() || '';
      const tags = card.querySelector('.blog-card-tag')?.innerText.toLowerCase() || '';

      if (title.includes(query) || excerpt.includes(query) || tags.includes(query)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
}

function initReadingProgress() {
  const progressBar = document.getElementById('reading-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / docHeight) * 100;
    progressBar.style.width = scrolled + '%';
  });
}

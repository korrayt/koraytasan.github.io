document.addEventListener('DOMContentLoaded', () => {
    // Initialize all features
    initNavigation();
    initScrollEffects();
    initAiFilter();
    initPortfolioFilter();
    initContactForm();
});

// Navigation & Sidebar
function initNavigation() {
    const sidebar = document.getElementById('sidebar');
    const navToggle = document.getElementById('navToggle');
    const backdrop = document.getElementById('sidebarBackdrop');
    const mobileTopbar = document.getElementById('mobileTopbar');

    // Toggle sidebar on mobile
    function toggleSidebar(open) {
        if (!sidebar) return;
        const shouldOpen = typeof open === 'boolean' ? open : !sidebar.classList.contains('active');
        sidebar.classList.toggle('active', shouldOpen);
        if (backdrop) backdrop.classList.toggle('active', shouldOpen);
        if (navToggle) navToggle.classList.toggle('active', shouldOpen);
        document.body.style.overflow = (shouldOpen && window.innerWidth < 1024) ? 'hidden' : '';
    }

    if (navToggle) {
        navToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleSidebar();
        });
    }

    if (backdrop) {
        backdrop.addEventListener('click', () => toggleSidebar(false));
    }

    // Close mobile menu on link click
    if (sidebar) {
        sidebar.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 1024) {
                    toggleSidebar(false);
                }
            });
        });
    }

    // Mobile topbar scroll shadow effect
    window.addEventListener('scroll', () => {
        if (mobileTopbar) {
            if (window.scrollY > 20) {
                mobileTopbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
            } else {
                mobileTopbar.style.boxShadow = 'none';
            }
        }
    });

    // Smooth scroll for in-page anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || !targetId) return;
            e.preventDefault();
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Active Section ScrollSpy for Sidebar
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.sidebar-nav a[href^="#"]');

    if ('IntersectionObserver' in window && sections.length && navItems.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navItems.forEach(item => {
                        if (item.getAttribute('href') === `#${id}`) {
                            item.classList.add('active');
                        } else {
                            item.classList.remove('active');
                        }
                    });
                }
            });
        }, {
            rootMargin: '-20% 0px -60% 0px',
            threshold: 0
        });

        sections.forEach(sec => observer.observe(sec));
    }
}

// Scroll-triggered animations
function initScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Stagger animation for grid items
                if (entry.target.parentElement) {
                    const siblings = entry.target.parentElement.querySelectorAll('.fade-in');
                    siblings.forEach((sibling, index) => {
                        sibling.style.transitionDelay = `${index * 0.08}s`;
                    });
                }
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// AI & Products Filter
function initAiFilter() {
    const filterBtns = document.querySelectorAll('.ai-filter-btn');
    const cards = document.querySelectorAll('.case-study-card');

    if (!filterBtns.length || !cards.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.statusFilter;

            cards.forEach(card => {
                const status = card.dataset.status;
                if (filter === 'all' || status === filter) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(15px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 250);
                }
            });
        });
    });
}

// Film & Media Portfolio filter (supports multi-categories)
function initPortfolioFilter() {
    const filterBtns = document.querySelectorAll('.media-filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    if (!filterBtns.length || !portfolioItems.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            // Filter items
            portfolioItems.forEach(item => {
                const categories = (item.dataset.category || '').toLowerCase().split(' ');
                if (filter === 'all' || categories.includes(filter)) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 250);
                }
            });
        });
    });
}

// Contact form
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        submitBtn.innerHTML = '<span>✓</span> Gönderiliyor...';
        submitBtn.disabled = true;

        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Profile image fallback
const profileImg = document.getElementById('profileImage');
if (profileImg) {
    profileImg.addEventListener('error', function () {
        this.src = 'https://ui-avatars.com/api/?name=Koray+Tasan&size=350&background=7c3aed&color=fff&bold=true&font-size=0.33';
    });
}

// Easter egg - Console message
console.log('%c🚀 Koray Taşan | AI Product & Systems Architect · Creative Technologist', 'font-size: 16px; font-weight: bold; color: #a855f7;');
console.log('%cStories → Systems → Intelligent Products | Contact: ben@koraytasan.com', 'font-size: 12px; color: #94a3b8;');


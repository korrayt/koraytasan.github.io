document.addEventListener('DOMContentLoaded', () => {
    // Initialize all features
    initNavigation();
    initScrollEffects();
    initAiFilter();
    initPortfolioFilter();
    initContactForm();
    initBlogShowcase();
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

    // Desktop Sidebar Collapse/Expand Toggle
    const collapseBtn = document.getElementById('sidebarCollapseBtn');
    if (collapseBtn) {
        const savedCollapsed = localStorage.getItem('kt_sidebar_collapsed');
        if (savedCollapsed === 'true' && window.innerWidth >= 1024) {
            document.body.classList.add('sidebar-collapsed');
        }

        collapseBtn.addEventListener('click', () => {
            document.body.classList.toggle('sidebar-collapsed');
            const isNowCollapsed = document.body.classList.contains('sidebar-collapsed');
            localStorage.setItem('kt_sidebar_collapsed', isNowCollapsed ? 'true' : 'false');
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



// ============================================
// Blog & Dynamic Interest Showcase Logic
// ============================================
function initBlogShowcase() {
    const spotlightEl = document.getElementById('blogSpotlight');
    if (!spotlightEl) return;

    // Curated Blog Posts Data
    const BLOG_POSTS = [
        {
            id: 'dijital-icerik',
            title: 'Dijital İçerik Üretimi: 1.000+ Marka Videosundan Algoritmik Otoriteye',
            slug: '/yazilar/dijital-icerik-uretimi-1000-marka-videosundan-algoritmik-otoriteye.html',
            category: 'video',
            catLabel: 'Dijital İçerik & Algoritma',
            catColor: '#f59e0b',
            thumb: '/yazilar/assets/dijital-icerik-uretimi/og-image.jpg',
            readTime: '14 dk okuma',
            date: '25 Ekim 2026',
            excerpt: 'Tüvit ceket Moiré krizinden YUV renk uzayı cerrahisine, 31.74 GB\'lık 4K YouTube master darboğazlarından 131 otonom denetçiye uzanan gerçek saha kılavuzu.',
            chips: ['1000+ Video', 'Moiré Cerrahisi', 'YouTube dR/dt', '4K FFmpeg'],
            badge: '✦ REHBER #01'
        },
        {
            id: 'ai-video',
            title: 'AI Video Üretimi ve Yeni Nesil Kurgu: core.action STUDIO Mimarisi',
            slug: '/yazilar/ai-video-uretimi-ve-yeni-nesil-kurgu-core-action-studio-mimarisi.html',
            category: 'video',
            catLabel: 'AI Video & NLE',
            catColor: '#38bdf8',
            thumb: '/yazilar/assets/ai-video-uretimi/og-image.jpg',
            readTime: '15 dk okuma',
            date: '25 Ekim 2026',
            excerpt: 'Karakterin sahnede ceket değiştirdiği Wardrobe Drift krizini nasıl çözdük? Wan2.2, Runway ve Flux çoklu derleyicisi, OpenRigLogic C++ AVX-512 yamaları ve 6GB VRAM\'de Hollywood standardı.',
            chips: ['core.action STUDIO', 'Wardrobe Drift', 'OpenRigLogic', '6GB VRAM'],
            badge: '✦ REHBER #02'
        },
        {
            id: 'ai-sanat',
            title: 'AI Sanat ve Anlatı Evrenleri: Prompt Mühendisliğinden Ruhu Olan Dünyalara',
            slug: '/yazilar/ai-sanat-ve-anlati-evrenleri-prompt-muhendisliginden-ruhu-olan-dunyalara.html',
            category: 'sanat',
            catLabel: 'AI Sanat & Evrenler',
            catColor: '#d4a359',
            thumb: '/yazilar/assets/ai-sanat/og-image.jpg',
            readTime: '13 dk okuma',
            date: '25 Ekim 2026',
            excerpt: '"Tek hamlede yapabiliyorsam değerli değildir." MithyLeaks 3 dilli (TR/EN/LT) anlatı mimarisi, SUSSUZ sanal prodüksiyonu ve Rönesans craquelure restorasyonu.',
            chips: ['MithyLeaks', 'SUSSUZ', 'Rönesans Craquelure', 'Anlatı'],
            badge: '✦ REHBER #03'
        },
        {
            id: 'ai-muzik',
            title: 'AI Müzik Prodüksiyonu ve Ses Mühendisliği: CORE MUSIC, khrysaor ve Uyku Atlası',
            slug: '/yazilar/ai-muzik-produksiyonu-ve-ses-muhendisligi-core-music-khrysaor-uyku-atlasi.html',
            category: 'muzik',
            catLabel: 'AI Müzik & DSP',
            catColor: '#c084fc',
            thumb: '/yazilar/assets/ai-muzik/og-image.jpg',
            readTime: '14 dk okuma',
            date: '25 Ekim 2026',
            excerpt: '4 alt plak şirketi mimarisi (CORE LONDON, khrysaor, SUSSUZ OST, Angaralı Keremsi), KOR hibrit sanatçı deneyi, EBU R128 (-14 LUFS vs -21 LUFS) psikoakustik mastering ve semantik foley sırları.',
            chips: ['CORE MUSIC', 'khrysaor', 'EBU R128', 'Uyku Atlası'],
            badge: '✦ REHBER #04'
        },
        {
            id: 'ai-proje',
            title: 'AI ile Proje ve Sistem Geliştirmek: Ajan Orkestrasyonu ve $0.00 SLA Mimari',
            slug: '/yazilar/ai-ile-proje-ve-sistem-gelistirmek-ajan-orkestrasyonu-ve-sifir-maliyetli-mimari.html',
            category: 'sistem',
            catLabel: 'AI Sistem & Proje Geliştirme',
            catColor: '#34d399',
            thumb: '/yazilar/assets/ai-proje-gelistirme/og-image.jpg',
            readTime: '15 dk okuma',
            date: '25 Ekim 2026',
            excerpt: '"Rutini kodla, gerisi sihir." 6 uzman ajan matrisi (@orchestrator, @dev-coder, @polymath-blogger), silinmeyen kronolojik hafıza, AutoCAD .dxf teklif otomasyonu ve yerel yalın yazılım mühendisliği.',
            chips: ['Multi-Agent', '$0.00 SLA', 'Bina Otomasyon', 'Yerel Mühendislik'],
            badge: '✦ REHBER #05'
        },
        {
            id: '3d-web',
            title: '3D Dijital İkiz, PropTech, Moleküler Simya ve Kriptografik Mahremiyet',
            slug: '/yazilar/3d-dijital-ikiz-proptech-molekuler-simya-ve-kriptografik-mahremiyet.html',
            category: 'web',
            catLabel: '3D Web & Deep Tech',
            catColor: '#60a5fa',
            thumb: '/yazilar/assets/web-evrenleri/og-image.jpg',
            readTime: '16 dk okuma',
            date: '25 Ekim 2026',
            excerpt: 'Tarayıcıda 9.400 CAD parçasını 60 FPS döndürmek (BUILD UP BUILD DOWN), Find My Home, ALKEM (RDKit) moleküler kimya motoru, IT\'S US Safe Space ve Amblyopia DTx.',
            chips: ['BUILD UP BUILD DOWN', 'FindMyHome', 'ALKEM', 'IT\'S US'],
            badge: '✦ REHBER #06'
        },
        {
            id: 'manifesto',
            title: 'Hikâyeden Sistemlere: Kurgunun Görünmeyen Yasaları',
            slug: '/yazilar/hikayeden-sistemlere-kurgunun-gorunmeyen-yasalari.html',
            category: 'video',
            catLabel: 'Deneme & Kurucu Manifesto',
            catColor: '#ec4899',
            thumb: '/sussuz/assets/img/sussuz_hero_widescreen.jpg',
            readTime: '5 dk okuma',
            date: '24 Eylül 2026',
            excerpt: '20 yıllık yönetmenlik, yazarlık ve kurgu ustalığından akıllı ürün mimarilerine uzanan köprü; core.action, SUSSUZ, Uyku Atlası ve yaşayan sistemlerin felsefi manifestosu.',
            chips: ['Kurgu Felsefesi', '24 Kare', 'Kurucu Manifesto'],
            badge: '✦ MANİFESTO'
        }
    ];

    // Live Field Notes / Aforizmalar for the ticker
    const TICKER_NOTES = [
        "💡 Saha Notu #01: Tüvit ceket Moiré krizinde RGB filtreleri yetersiz kalır; YUV uzayında kroma ayrıştırması şarttır.",
        "🎬 Saha Notu #02: AI videoda Wardrobe Drift krizini çözmek için yüz ve giysi token'larını OpenRigLogic ile kilitleyin.",
        "🏛️ Saha Notu #03: Plastik AI kusursuzluğunun ilacı, dijital dokuya organik kusur, craquelure ve tarihsel patina katmaktır.",
        "🎵 Saha Notu #04: Spotify -14 LUFS ve -1 dBFS True Peak mastering, yüksek dinamik aralığı korumanın anahtarıdır.",
        "⚡ Saha Notu #05: Rutini kodla, gerisi sihir... $0.00 SLA ile çalışan otonom ajan matrisi her türlü karmaşıklığı yener.",
        "🏎️ Saha Notu #06: Web tarayıcısında 9.400 CAD parçasını 60 FPS akıtmak, draw call'ları GPU InstancedMesh ile birleştirmekten geçer.",
        "✍️ Saha Notu #00: Kurgu kesmek değil; iki düşünce arasındaki görünmez elektrik arkını doğru zamanda ateşlemektir."
    ];

    // State Variables
    let currentInterest = localStorage.getItem('kt_blog_interest') || 'all';
    let filteredPosts = [...BLOG_POSTS];
    let currentIndex = 0;
    let isPaused = false;
    let rotateInterval = null;
    let progressTimer = null;
    let progressPercent = 0;
    const DURATION_MS = 7500;
    const TICK_MS = 50;

    // DOM Elements
    const badgeEl = document.getElementById('spotlightBadge');
    const titleEl = document.getElementById('spotlightTitle');
    const descEl = document.getElementById('spotlightDesc');
    const chipsEl = document.getElementById('spotlightChips');
    const readBtn = document.getElementById('spotlightReadBtn');
    const metaEl = document.getElementById('spotlightMeta');
    const mediaImg = document.getElementById('spotlightImg');
    const mediaOverlay = document.getElementById('spotlightOverlay');
    const mediaLink = document.getElementById('spotlightMediaLink');
    const indexEl = document.getElementById('spotlightIndex');
    const progressBar = document.getElementById('spotlightProgressBar');
    const prevBtn = document.getElementById('spotlightPrevBtn');
    const nextBtn = document.getElementById('spotlightNextBtn');
    const pills = document.querySelectorAll('.blog-interest-pill');
    const cards = document.querySelectorAll('.blog-article-card');

    // Field Note Ticker elements
    const tickerText = document.getElementById('tickerText');
    const tickerNextBtn = document.getElementById('tickerNextBtn');
    let tickerIndex = 0;
    let tickerTimer = null;

    // Filter Posts by Category
    function updateFilteredPosts() {
        if (currentInterest === 'all') {
            filteredPosts = [...BLOG_POSTS];
        } else {
            filteredPosts = BLOG_POSTS.filter(p => {
                if (currentInterest === 'video') return p.category === 'video' || p.id === 'manifesto';
                if (currentInterest === 'sistem') return p.category === 'sistem' || p.id === 'ai-video';
                if (currentInterest === 'muzik') return p.category === 'muzik';
                if (currentInterest === 'sanat') return p.category === 'sanat' || p.id === 'manifesto';
                if (currentInterest === 'web') return p.category === 'web';
                return p.category === currentInterest;
            });
        }
        if (filteredPosts.length === 0) filteredPosts = [...BLOG_POSTS];
        if (currentIndex >= filteredPosts.length) currentIndex = 0;
    }

    // Render Current Spotlight
    function renderSpotlight() {
        const post = filteredPosts[currentIndex];
        if (!post) return;

        // Animate elements with soft transition (clean, minimal styling via CSS)
        if (badgeEl) {
            badgeEl.innerText = `${post.badge} • ${post.catLabel}`;
        }

        if (titleEl) {
            titleEl.innerText = post.title;
            titleEl.href = post.slug;
        }

        if (descEl) {
            descEl.innerText = post.excerpt;
        }

        if (chipsEl) {
            chipsEl.innerHTML = post.chips.map(chip => `<span class="spotlight-chip">${chip}</span>`).join('');
        }

        if (readBtn) {
            readBtn.href = post.slug;
        }

        if (metaEl) {
            metaEl.innerText = `Koray Taşan • ${post.readTime} • ${post.date}`;
        }

        if (mediaImg) {
            mediaImg.src = post.thumb;
            mediaImg.alt = post.title;
        }

        if (mediaLink) {
            mediaLink.href = post.slug;
        }

        if (mediaOverlay) {
            mediaOverlay.innerText = post.catLabel;
        }

        if (indexEl) {
            indexEl.innerText = `${currentIndex + 1} / ${filteredPosts.length}`;
        }

        resetProgress();
    }

    // Progress Bar & Auto-rotation
    function resetProgress() {
        progressPercent = 0;
        if (progressBar) progressBar.style.width = '0%';
    }

    function startAutoRotation() {
        stopAutoRotation();
        rotateInterval = setInterval(() => {
            if (!isPaused) {
                progressPercent += (TICK_MS / DURATION_MS) * 100;
                if (progressBar) progressBar.style.width = `${Math.min(progressPercent, 100)}%`;

                if (progressPercent >= 100) {
                    goToNextSpotlight();
                }
            }
        }, TICK_MS);
    }

    function stopAutoRotation() {
        if (rotateInterval) {
            clearInterval(rotateInterval);
            rotateInterval = null;
        }
    }

    function goToNextSpotlight() {
        currentIndex = (currentIndex + 1) % filteredPosts.length;
        renderSpotlight();
    }

    function goToPrevSpotlight() {
        currentIndex = (currentIndex - 1 + filteredPosts.length) % filteredPosts.length;
        renderSpotlight();
    }

    // Filter Grid Cards based on category
    function filterCardsInGrid() {
        cards.forEach(card => {
            const cardCats = (card.getAttribute('data-blog-category') || '').split(' ');
            const isMatch = (currentInterest === 'all') || cardCats.includes(currentInterest);

            if (isMatch) {
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
                }, 200);
            }
        });
    }

    // Set Active Interest
    function setActiveInterest(interest) {
        currentInterest = interest;
        localStorage.setItem('kt_blog_interest', interest);

        // Update Pill UI
        pills.forEach(pill => {
            if (pill.getAttribute('data-interest') === interest) {
                pill.classList.add('active');
            } else {
                pill.classList.remove('active');
            }
        });

        // Update posts, spotlight and grid
        updateFilteredPosts();
        currentIndex = 0;
        renderSpotlight();
        filterCardsInGrid();
    }

    // Ticker Logic
    function updateTicker() {
        if (!tickerText) return;
        tickerText.style.opacity = '0';
        tickerText.style.transform = 'translateY(-6px)';
        setTimeout(() => {
            tickerText.innerText = TICKER_NOTES[tickerIndex];
            tickerText.style.opacity = '1';
            tickerText.style.transform = 'translateY(0)';
        }, 250);
    }

    function nextTicker() {
        tickerIndex = (tickerIndex + 1) % TICKER_NOTES.length;
        updateTicker();
    }

    function startTickerTimer() {
        if (tickerTimer) clearInterval(tickerTimer);
        tickerTimer = setInterval(nextTicker, 8500);
    }

    // Event Listeners
    if (prevBtn) prevBtn.addEventListener('click', () => { goToPrevSpotlight(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { goToNextSpotlight(); });

    // Pause rotation on hover
    spotlightEl.addEventListener('mouseenter', () => { isPaused = true; });
    spotlightEl.addEventListener('mouseleave', () => { isPaused = false; });
    spotlightEl.addEventListener('touchstart', () => { isPaused = true; }, { passive: true });
    spotlightEl.addEventListener('touchend', () => { isPaused = false; }, { passive: true });

    // Interest Pills click
    pills.forEach(pill => {
        pill.addEventListener('click', () => {
            const interest = pill.getAttribute('data-interest');
            setActiveInterest(interest);
        });
    });

    // Ticker manual advance
    if (tickerNextBtn) {
        tickerNextBtn.addEventListener('click', () => {
            nextTicker();
            startTickerTimer();
        });
    }

    // Initial Execution
    setActiveInterest(currentInterest);
    startAutoRotation();
    updateTicker();
    startTickerTimer();
}

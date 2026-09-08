const sliders = document.querySelectorAll('.slider');

sliders.forEach((slider) => {
    const slides = slider.querySelectorAll('.slide');
    if (slides.length === 0) return;

    let index = 0;

    setInterval(() => {
        slides[index].classList.remove('active');
        index = (index + 1) % slides.length;
        slides[index].classList.add('active');
    }, 3000);
});

function initTheme() {
    const toggle = document.querySelector('.theme-toggle');
    if (!toggle) return;

    function applyIcon() {
        const isLight = document.documentElement.getAttribute('data-theme') === 'light';
        toggle.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
        toggle.innerHTML = isLight
            ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 3a1 1 0 0 1 1 1v1.07a7 7 0 1 1-7 7H5a1 1 0 1 1 0-2h1.07A5 5 0 1 0 12 5.07V4a1 1 0 0 1 1-1z"/></svg>'
            : '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 18a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1zm5.657-2.343a1 1 0 0 1 1.414 0l.707.707a1 1 0 1 1-1.414 1.414l-.707-.707a1 1 0 0 1 0-1.414zM18 11a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1zM5.636 16.95a1 1 0 0 1 1.414 0l.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 0-1.414zM7 11a1 1 0 0 1-1 1H5a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1zm2.343-5.657a1 1 0 0 1 0 1.414l-.707.707A1 1 0 1 1 5.222 6.05l.707-.707a1 1 0 0 1 1.414 0zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"/></svg>';
    }

    toggle.addEventListener('click', () => {
        const isLight = document.documentElement.getAttribute('data-theme') === 'light';

        if (isLight) {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('portfolio-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('portfolio-theme', 'light');
        }

        applyIcon();
    });

    applyIcon();
}

function runIntro() {
    const intro = document.getElementById('wakanda-intro');
    const skipIntro = sessionStorage.getItem('portfolio-intro-seen') === 'true';

    if (!intro || skipIntro) {
        if (intro) intro.remove();
        document.body.classList.remove('intro-active');
        document.body.classList.add('portfolio-ready');
        return;
    }

    sessionStorage.setItem('portfolio-intro-seen', 'true');

    setTimeout(() => {
        intro.classList.add('wakanda-intro-hide');
        document.body.classList.remove('intro-active');
        document.body.classList.add('portfolio-ready');

        setTimeout(() => {
            intro.remove();
        }, 900);
    }, 2600);
}

function initCaseStudyToggles() {
    document.querySelectorAll('.case-study').forEach((caseStudy) => {
        const toggle = caseStudy.querySelector('.case-study-toggle');
        const content = caseStudy.querySelector('.case-study-content');
        const label = caseStudy.querySelector('.case-study-toggle-label');
        if (!toggle || !content) return;

        toggle.addEventListener('click', () => {
            const isOpen = caseStudy.classList.toggle('is-open');
            toggle.setAttribute('aria-expanded', String(isOpen));

            if (label) {
                label.textContent = isOpen ? 'Hide case study' : 'View case study';
            }

            content.style.maxHeight = isOpen ? `${content.scrollHeight}px` : '0px';
        });
    });
}

function initProjectsAutoScroll() {
    const grid = document.querySelector('.detail-section.projects-grid');
    if (!grid || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let paused = false;
    let resumeTimer = null;

    function pauseAutoScroll() {
        paused = true;
        clearTimeout(resumeTimer);
    }

    function scheduleResume() {
        clearTimeout(resumeTimer);
        resumeTimer = setTimeout(() => {
            paused = false;
        }, 4000);
    }

    grid.addEventListener('mouseenter', pauseAutoScroll);
    grid.addEventListener('mouseleave', scheduleResume);
    grid.addEventListener('touchstart', pauseAutoScroll, { passive: true });
    grid.addEventListener('touchend', scheduleResume, { passive: true });
    grid.addEventListener('wheel', pauseAutoScroll, { passive: true });

    setInterval(() => {
        if (paused) return;

        const card = grid.querySelector('.project-card');
        if (!card) return;

        const gap = 28;
        const scrollStep = card.offsetWidth + gap;
        const maxScroll = grid.scrollWidth - grid.clientWidth;

        if (maxScroll <= 0) return;

        if (grid.scrollLeft >= maxScroll - 4) {
            grid.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            grid.scrollBy({ left: scrollStep, behavior: 'smooth' });
        }
    }, 4500);
}

function init() {
    initTheme();
    runIntro();
    initCaseStudyToggles();
    initProjectsAutoScroll();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

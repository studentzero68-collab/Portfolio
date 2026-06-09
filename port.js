const sliders = document.querySelectorAll('.slider');

sliders.forEach((slider) => {
    const slides = slider.querySelectorAll('.slide');
    let index = 0;

    setInterval(() => {
        slides[index].classList.remove('active');
        index = (index + 1) % slides.length;
        slides[index].classList.add('active');
    }, 3000);
});

const intro = document.getElementById('wakanda-intro');

function runIntro() {
    if (!intro) {
        document.body.classList.remove('intro-active');
        document.body.classList.add('portfolio-ready');
        return;
    }

    setTimeout(() => {
        intro.classList.add('wakanda-intro-hide');
        document.body.classList.remove('intro-active');
        document.body.classList.add('portfolio-ready');

        setTimeout(() => {
            intro.remove();
        }, 900);
    }, 2600);
}

function animateSkillBars() {
    const fills = document.querySelectorAll('.skill-fill');
    const percents = document.querySelectorAll('.skill-overall-percent, .breakdown-percent');

    fills.forEach((fill) => {
        fill.style.width = `${fill.dataset.width}%`;
    });

    percents.forEach((el) => {
        const target = Number(el.dataset.target);
        const duration = 1400;
        const start = performance.now();

        function update(now) {
            const progress = Math.min((now - start) / duration, 1);
            const value = Math.round(target * progress);
            el.textContent = `${value}%`;

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    });
}

const skillsSection = document.getElementById('skills');

if (skillsSection) {
    const skillObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                animateSkillBars();
                observer.disconnect();
            }
        });
    }, { threshold: 0.25 });

    skillObserver.observe(skillsSection);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runIntro);
} else {
    runIntro();
}

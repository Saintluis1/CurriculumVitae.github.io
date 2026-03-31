document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // LANGUAGE SWITCHER
    // ==========================================
    const langSwitch = document.getElementById('lang-switch');

    function setLanguage(lang) {
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-it], [data-en]').forEach(el => {
            const content = lang === 'it' ? el.getAttribute('data-it') : el.getAttribute('data-en');
            if (content) {
                if (content.includes('<') && content.includes('>')) {
                    el.innerHTML = content;
                } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = content;
                } else {
                    el.textContent = content;
                }
            }
        });
    }

    const currentLang = langSwitch && langSwitch.checked ? 'en' : 'it';
    setLanguage(currentLang);

    if (langSwitch) {
        langSwitch.addEventListener('change', function () {
            setLanguage(this.checked ? 'en' : 'it');
        });
    }

    // ==========================================
    // SMOOTH SCROLL
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ==========================================
    // ACTIVE NAV LINK ON SCROLL
    // ==========================================
    const navLinks = document.querySelectorAll('.nav-link');
    const sectionIds = ['bio', 'experience', 'skills', 'education', 'certifications', 'passions'];

    function setActiveLink(id) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + id) {
                link.classList.add('active');
            }
        });
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setActiveLink(entry.target.id);
            }
        });
    }, {
        rootMargin: '-40% 0px -55% 0px',
        threshold: 0
    });

    sectionIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
    });

});
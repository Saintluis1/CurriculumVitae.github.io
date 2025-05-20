document.addEventListener('DOMContentLoaded', () => {
    // Language switcher logic
    const langSwitch = document.getElementById('lang-switch');
    function setLanguage(lang) {
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-it], [data-en]').forEach(el => {
            if (lang === 'it' && el.dataset.it) {
                el.textContent = el.dataset.it;
            } else if (lang === 'en' && el.dataset.en) {
                el.textContent = el.dataset.en;
            }
        });
    }
    // Initial language
    setLanguage('it');
    langSwitch.checked = false;
    langSwitch.addEventListener('change', function() {
        setLanguage(this.checked ? 'en' : 'it');
    });

    // Smooth scroll for anchor links (optional)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}); 
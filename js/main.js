document.addEventListener('DOMContentLoaded', () => {
    // 1. Mise à jour du lien actif au défilement (Scrollspy)
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
    // Si on est sur l'index (page principale avec sections)
    if (sections.length > 0 && navLinks.length > 0) {
        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                // On ajoute un petit offset pour déclencher le changement un peu avant
                if (pageYOffset >= (sectionTop - 150)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }

    // 2. Animation d'apparition au défilement (Intersection Observer)
    const animatableElements = document.querySelectorAll('.card, .timeline-item, .about-content > div');
    
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        animatableElements.forEach(el => {
            el.style.opacity = 0;
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.7s ease-out, transform 0.7s ease-out';
            observer.observe(el);
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Surligner le lien actif dans la navigation
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        // On retire la classe active partout
        link.classList.remove('active');
        
        // Si le href correspond au path courant, on met active
        // Cas particulier pour l'index ou la racine
        if (href === currentPath || (currentPath === '' && href === 'index.html')) {
            link.classList.add('active');
        }
        
        // Si on est sur une page de réalisation (commence par rea-), on active le lien "Réalisations"
        if (currentPath.startsWith('rea-') && href === 'realisations.html') {
            link.classList.add('active');
        }
    });

    // Simple animation d'apparition pour les cartes
    const cards = document.querySelectorAll('.card, .timeline-item');
    
    // Si l'API IntersectionObserver est supportée
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

        cards.forEach(card => {
            card.style.opacity = 0;
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            observer.observe(card);
        });
    }
});

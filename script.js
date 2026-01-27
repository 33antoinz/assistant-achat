document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Simulation de rareté (Social Proof & Urgency)
    // Pour un service premium, on montre que le cercle est sélectif.
    const updateStats = () => {
        const slotsElement = document.querySelector('.pre-title');
        // On remplace le texte statique par un indicateur dynamique
        if (slotsElement) {
            slotsElement.innerHTML = `SESSION JANVIER : <span style="color: #d4af37">12 PLACES RESTANTES</span>`;
        }
    };
    updateStats();

    // 2. Aperçu interactif des Chapitres
    // Quand l'utilisateur clique sur un chapitre, on affiche le "Sommaire du cours"
    const chapters = document.querySelectorAll('.chapter');
    
    chapters.forEach(chapter => {
        chapter.style.cursor = 'pointer';
        chapter.addEventListener('click', function() {
            // Effet visuel de sélection
            chapters.forEach(c => c.style.borderColor = 'transparent');
            this.style.borderLeft = '2px solid var(--accent)';
            this.style.paddingLeft = '20px';
            this.style.transition = 'all 0.3s ease';

            // Logique de contenu : On pourrait charger ici une vidéo preview
            console.log(`Chargement de la preview : ${this.querySelector('h2').innerText}`);
        });
    });

    // 3. Gestion de l'appel à l'action (Conversion)
    const ctaButtons = document.querySelectorAll('.cta-join, .btn-final');
    
    ctaButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            // Animation de chargement "Secure Checkout"
            btn.innerHTML = "Initialisation du portail sécurisé...";
            btn.style.opacity = '0.7';
            
            setTimeout(() => {
                // Redirection vers Stripe/Patreon (simulée)
                alert("Redirection vers l'espace de paiement sécurisé Privilège Invisible.");
                btn.innerHTML = "S'INSCRIRE À LA FORMATION";
                btn.style.opacity = '1';
            }, 1200);
        });
    });

    // 4. Sticky Header discret au scroll
    const header = document.querySelector('.main-header nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(249, 247, 242, 0.95)';
            header.style.padding = '1rem 5%';
            header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.05)';
        } else {
            header.style.background = 'transparent';
            header.style.padding = '2rem 5%';
            header.style.boxShadow = 'none';
        }
    });
});

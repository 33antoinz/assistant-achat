document.addEventListener('DOMContentLoaded', () => {
    // Effet d'apparition au scroll pour les cartes
    const observerOptions = { threshold: 0.1 };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card').forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "all 0.8s ease-out";
        observer.observe(card);
    });

    // Interaction subtile sur le logo
    const logo = document.querySelector('.logo');
    logo.addEventListener('mouseover', () => {
        logo.innerText = "ACCÈS PRIVÉ";
    });
    logo.addEventListener('mouseout', () => {
        logo.innerText = "PRIVILÈGE INVISIBLE";
    });
});

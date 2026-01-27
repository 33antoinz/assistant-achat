document.querySelectorAll('.module-card').forEach(card => {
    card.addEventListener('click', () => {
        alert("Accès réservé aux membres Privilège. Veuillez régulariser votre abonnement pour débloquer le protocole complet.");
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = { threshold: 0.2 };

    const reveal = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // Appliquer l'effet sur les sections
    document.querySelectorAll('.module-item, .hero').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "all 1s cubic-bezier(0.2, 0.8, 0.2, 1)";
        reveal.observe(el);
    });
});

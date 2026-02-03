document.getElementById('frigoUpload').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        // Simulation de l'analyse IA
        simulateAIAnalysis();
    }
});

function simulateAIAnalysis() {
    const resultsSection = document.getElementById('resultsSection');
    const list = document.getElementById('shoppingList');
    
    // Simulation de données reçues par une API
    const items = ['Lait Demi-écrémé', 'Oeufs x12', 'Beurre doux', 'Yaourts Nature'];
    
    list.innerHTML = '';
    items.forEach(item => {
        list.innerHTML += `
            <li class="py-3 flex justify-between items-center">
                <span>${item}</span>
                <input type="checkbox" checked class="h-5 w-5 accent-green-500">
            </li>
        `;
    });

    resultsSection.classList.remove('hidden');
    window.scrollTo({ top: resultsSection.offsetTop, behavior: 'smooth' });
}

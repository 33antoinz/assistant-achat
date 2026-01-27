const database = {
    "tech": {
        title: "Optimisation Hardware (Apple/Samsung/Sony)",
        steps: [
            "1. Ne jamais acheter en direct. Attendez le cycle de 'Refurbished Grade A' à J+90.",
            "2. Utilisez l'extension de garantie légale de 2 ans pour forcer un remplacement à neuf en fin de cycle.",
            "3. Technique du panier abandonné : Loggez-vous, restez 3min sur le paiement, partez. Attendez le mail de -10%."
        ]
    },
    "voyage": {
        title: "Arbitrage Aérien & Hôtelier",
        steps: [
            "1. VPN réglé sur le pays d'origine de la compagnie aérienne.",
            "2. Loi 261/2004 : Si retard > 3h, réclamez 600€ même 2 ans après.",
            "3. Appelez l'hôtel en direct après avoir vu le prix Booking : demandez le 'Manager Rate' (-15%)."
        ]
    },
    "default": {
        title: "Stratégie d'Ingénierie Standard",
        steps: [
            "1. Vérifiez l'historique de prix (Keepa/CamelCamelCamel).",
            "2. Cherchez le code promo via les outils d'affiliation cachés.",
            "3. Achetez des cartes cadeaux à prix réduit (Raise/Boursorama) pour payer."
        ]
    }
};

const input = document.getElementById('user-query');
const btn = document.getElementById('send-btn');
const messages = document.getElementById('messages');
const resultArea = document.getElementById('strategy-result');
const resultContent = document.getElementById('strategy-content');

btn.addEventListener('click', analyzeQuery);

function analyzeQuery() {
    const query = input.value.toLowerCase();
    if (!query) return;

    // Simulation de réflexion
    addMessage("user", query);
    addMessage("system", "Analyse des variables de marché en cours...");
    
    btn.disabled = true;
    
    setTimeout(() => {
        let category = "default";
        if (query.includes("iphone") || query.includes("pc") || query.includes("tech")) category = "tech";
        if (query.includes("vol") || query.includes("hotel") || query.includes("voyage")) category = "voyage";
        
        showResult(database[category]);
        btn.disabled = false;
    }, 1500);
}

function addMessage(type, text) {
    const div = document.createElement('div');
    div.className = `msg ${type}`;
    div.innerText = type === "system" ? `> ${text}` : text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
}

function showResult(data) {
    resultArea.classList.remove('hidden');
    resultContent.innerHTML = `
        <h3>${data.title}</h3>
        <ul>
            ${data.steps.map(s => `<li>${s}</li>`).join('')}
        </ul>
    `;
    addMessage("system", "Protocole prêt. Bonne exécution.");
}

function resetAssistant() {
    resultArea.classList.add('hidden');
    input.value = "";
    messages.innerHTML = '<div class="msg system">En attente de paramètres...</div>';
}



const quotes = [
    "Health is a relationship between you and your body. Nurture it, and it will thrive.",
    "A healthy outside starts from the inside.",
    "Wellness is the key to a vibrant life. Choose health, choose happiness.",
    "Take care of your body; it's the only place you have to live.",
    "Healthy living is a journey, not a destination. Every step counts.",
    "Nourish your body, mind, and soul. A balanced life is a healthy life.",
    "The greatest wealth is health. Invest in yourself.",
    "Every day is a new opportunity to improve your health. Seize it.",
    "Your body hears everything your mind says. Keep it positive.",
    "A healthy lifestyle is not about restrictions, but about making choices that empower your well-being."
];

const quoteButtons = document.querySelectorAll(".quote");

quoteButtons.forEach((quoteButton) => {
    quoteButton.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];

        document.getElementById("quoteText").innerText = randomQuote;
        document.getElementById("quoteModal").style.display = "block";
    });
});


function closeModal() {
    document.getElementById("quoteModal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("quoteModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
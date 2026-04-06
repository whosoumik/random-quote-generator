const quotes = [
  "Believe in yourself.",
  "Dream big, work hard.",
  "Success is a journey, not a destination.",
  "Stay positive, work hard, make it happen.",
  "Push yourself beyond limits.",
  "Small steps every day lead to big results.",
  "Don't stop until you're proud."
];

function generateQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  const quoteText = document.getElementById("quote");

  quoteText.style.opacity = 0;

  setTimeout(() => {
    quoteText.innerText = quotes[random];
    quoteText.style.opacity = 1;
  }, 200);
}

function copyQuote() {
  const text = document.getElementById("quote").innerText;
  navigator.clipboard.writeText(text);
  alert("Quote copied!");
}

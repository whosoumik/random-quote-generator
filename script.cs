const quotes = [
  "Believe in yourself.",
  "Stay hungry, stay foolish.",
  "Do something today that your future self will thank you for.",
  "Success is not final, failure is not fatal.",
  "Push yourself, because no one else will."
];

function generateQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[random];
}

const welcome = document.getElementById("welcome");
const player1 = document.getElementById("player1-alomgir");
const player2 = document.getElementById("player2-jahidul");
const gameArea = document.getElementById("game-area");

welcome.addEventListener("animationend", () => {
  player1.classList.remove("hidden");
  player1.classList.add("shown");
});

player1.addEventListener("transitionend", () => {
  player2.classList.remove("hidden");
  player2.classList.add("shown");
});

player2.addEventListener("transitionend", () => {
  // After introductions, show game area (add your game logic here)
  gameArea.classList.remove("hidden");
  // Add your code to initialize the number guessing game here
});

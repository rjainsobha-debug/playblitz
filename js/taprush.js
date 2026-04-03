const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 300;
canvas.height = 500;

// GAME STATE
let playerY = 400;
let barY = 0;
let speed = 2;
let score = 0;
let gameRunning = true;

// DRAW PLAYER
function drawPlayer() {
  ctx.fillStyle = "#00ffd5";
  ctx.fillRect(140, playerY, 20, 20);
}

// DRAW MOVING BAR
function drawBar() {
  // RED ZONE
  ctx.fillStyle = "red";
  ctx.fillRect(80, barY, 140, 10);

  // GREEN PERFECT ZONE
  ctx.fillStyle = "lime";
  ctx.fillRect(120, barY, 60, 10);
}

// MAIN LOOP
function update() {
  if (!gameRunning) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  barY += speed;

  if (barY > canvas.height) {
    barY = 0;
  }

  drawPlayer();
  drawBar();

  requestAnimationFrame(update);
}

// CLICK EVENT
canvas.addEventListener("click", () => {
  if (!gameRunning) return;

  // SOUND
  if (typeof playTap === "function") playTap();

  // HIT DETECTION
  if (barY > playerY && barY < playerY + 20) {
    score++;
    speed += 0.4;
  } else {
    gameOver();
  }

  document.getElementById("score").innerText = "Score: " + score;
});

// GAME OVER
function gameOver() {
  gameRunning = false;

  // SOUND
  if (typeof playGameOver === "function") playGameOver();

  // SAVE SCORE (Firebase)
  if (typeof saveScore === "function") saveScore(score);

  setTimeout(() => {
    alert("Game Over! Your Score: " + score);
  }, 100);
}

// RESTART
function restartGame() {
  barY = 0;
  speed = 2;
  score = 0;
  gameRunning = true;

  document.getElementById("score").innerText = "Score: 0";

  update();
}

// START GAME
update();

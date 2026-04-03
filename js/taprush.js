const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 300;
canvas.height = 500;

let playerY = 250;
let barY = 0;
let speed = 2;
let score = 0;

function drawPlayer() {
  ctx.fillStyle = "#00ffcc";
  ctx.fillRect(140, playerY, 20, 20);
}

function drawBar() {
  ctx.fillStyle = "red";
  ctx.fillRect(100, barY, 100, 10);

  ctx.fillStyle = "green";
  ctx.fillRect(130, barY, 40, 10);
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  barY += speed;

  if (barY > canvas.height) {
    barY = 0;
  }

  drawPlayer();
  drawBar();

  requestAnimationFrame(update);
}

canvas.addEventListener("click", () => {
  if (barY > playerY && barY < playerY + 20) {
    score++;
    speed += 0.5;
  } else {
    alert("Game Over! Score: " + score);
    restartGame();
  }

  document.getElementById("score").innerText = "Score: " + score;
});

function restartGame() {
  barY = 0;
  speed = 2;
  score = 0;
  document.getElementById("score").innerText = "Score: 0";
}

update();

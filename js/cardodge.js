const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 300;
canvas.height = 500;

let carX = 140;
let obstacleY = 0;
let obstacleX = Math.random() * 260;
let score = 0;

document.addEventListener("keydown", e => {
  if (e.key === "ArrowLeft") carX -= 20;
  if (e.key === "ArrowRight") carX += 20;
});

function game() {
  ctx.clearRect(0,0,300,500);

  ctx.fillStyle = "#00ffd5";
  ctx.fillRect(carX, 450, 20, 40);

  ctx.fillStyle = "red";
  ctx.fillRect(obstacleX, obstacleY, 20, 40);

  obstacleY += 5;

  if (obstacleY > 500) {
    obstacleY = 0;
    obstacleX = Math.random() * 260;
    score++;
  }

  if (
    obstacleY > 420 &&
    obstacleX < carX + 20 &&
    obstacleX + 20 > carX
  ) {
    alert("Crash! Score: " + score);
    location.reload();
  }

  requestAnimationFrame(game);
}

game();

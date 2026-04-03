const tapSound = new Audio("assets/sounds/tap.mp3");
const gameOverSound = new Audio("assets/sounds/gameover.mp3");

function playTap(){
  tapSound.currentTime = 0;
  tapSound.play();
}

function playGameOver(){
  gameOverSound.currentTime = 0;
  gameOverSound.play();
}

// assigning elements to variables
const playerOne = document.querySelector(".btnOne");
const playerTwo = document.querySelector(".btnTwo");
const reset = document.querySelector(".btnReset");
const scoreP1 = document.querySelector(".scoreP1");
const scoreP2 = document.querySelector(".scoreP2");
const playingTo = document.querySelector("#playingTo");
const winMessage = document.querySelector(".winMessage");

let winningScore = 15;
let gameOver = false;

// functions
function incrementScore(scoreElement) {
  if (parseInt(scoreElement.textContent) !== winningScore) {
    scoreElement.textContent++;
  }
}

function isGameOver(scoreElement) {
  if (parseInt(scoreElement.textContent) === winningScore) {
    gameOver = true;
  }
  if (gameOver) {
    if (parseInt(scoreP1.textContent) > parseInt(scoreP2.textContent)) {
      winMessage.textContent = "Player 1 Wins!";
    } else if (parseInt(scoreP1.textContent) < parseInt(scoreP2.textContent)) {
      winMessage.textContent = "Player 2 Wins!";
    }
    playerOne.disabled = true;
    playerTwo.disabled = true;
  }
}

// event listeners
playerOne.addEventListener("click", () => {
  incrementScore(scoreP1);
  isGameOver(scoreP1);
});

playerTwo.addEventListener("click", () => {
  incrementScore(scoreP2);
  isGameOver(scoreP2);
});

reset.addEventListener("click", () => {
  scoreP1.textContent = 0;
  scoreP2.textContent = 0;
  gameOver = false;
  playerOne.disabled = false;
  playerTwo.disabled = false;
  winMessage.textContent = "";
});

playingTo.addEventListener("change", function () {
  winningScore = parseInt(this.value);
});

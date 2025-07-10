const diplayResult = document.querySelector(".result");
const displayMoves = document.querySelector(".moves");
const displayScore = document.querySelector(".score");
const moves = {
  Rock: '<img class="small-operation" src="./images/rock-emoji.png" />',
  Paper: '<img class="small-operation" src="./images/paper-emoji.png" />',
  Scissors: '<img class="small-operation" src="./images/scissors-emoji.png" />',
};

// get data from localStorage
let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  loses: 0,
  ties: 0,
};

updateScore();

function pickComputerMove() {
  let computerMove = "";
  let randomNumber = Math.random();
  if (0 <= randomNumber && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (1 / 3 <= randomNumber && randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else {
    computerMove = "Scissors";
  }

  return computerMove;
}

function playGame(playerMove) {
  let computerMove = pickComputerMove();
  let result = "";

  if (computerMove === playerMove) {
    score.ties++;
    result = "Tie.";
  } else {
    if (
      (computerMove === "Rock" && playerMove === "Paper") ||
      (computerMove === "Paper" && playerMove == "Scissors") ||
      (computerMove === "Scissors" && playerMove === "Rock")
    ) {
      score.wins++;
      result = "You win.";
    } else {
      score.loses++;
      result = "You lose.";
    }
  }

  // save score data in localStorage
  // localStorage only support string
  localStorage.setItem("score", JSON.stringify(score));

  diplayResult.innerText = `${result}`;
  displayMoves.innerHTML = `You ${moves[playerMove]}  ${moves[computerMove]} Computer`;
  updateScore();
}

function updateScore() {
  displayScore.innerText = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;
}

function resetScore() {
  score.wins = 0;
  score.loses = 0;
  score.ties = 0;
  updateScore();
  // remove data in localStorage
  localStorage.removeItem("score");
}

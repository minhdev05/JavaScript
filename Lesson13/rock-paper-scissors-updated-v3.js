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

function pickMove() {
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

document.querySelector(".js-rock-button").addEventListener("click", () => {
  playGame("Rock");
});

document.querySelector(".js-paper-button").addEventListener("click", () => {
  playGame("Paper");
});

document.querySelector(".js-scissors-button").addEventListener("click", () => {
  playGame("Scissors");
});

document.body.addEventListener("keydown", (event) => {
  console.log(event.key);
  if (event.key === "r") playGame("Rock");
  else if (event.key === "p") playGame("Paper");
  else if (event.key === "s") playGame("Scissors");
  else if (event.key === "a") autoPlay();
  else if (event.key === " ") resetScore();
  else return;
});

function playGame(playerMove) {
  let computerMove = pickMove();
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

document.querySelector(".js-reset-btn").addEventListener("click", () => {
  resetScore();
});

function resetScore() {
  const confirmation = document.querySelector(".confirmation-container");
  confirmation.style.display = "block";

  document.querySelector(".yes-btn").addEventListener("click", () => {
    score.wins = 0;
    score.loses = 0;
    score.ties = 0;
    updateScore();
    // remove data in localStorage
    localStorage.removeItem("score");
    confirmation.style.display = "none";
  });

  document.querySelector(".no-btn").addEventListener("click", () => {
    confirmation.style.display = "none";
  });
}

let isAutoplaying = false;
let intervalId;

document.querySelector(".js-autoplay-btn").addEventListener("click", () => {
  autoPlay();
});

function autoPlay() {
  if (!isAutoplaying) {
    document.querySelector(".autoplay-btn").innerText = "Stop Playing";
    intervalId = setInterval(() => {
      let playerMove = pickMove();
      playGame(playerMove);
    }, 1000);
    isAutoplaying = true;
  } else {
    document.querySelector(".autoplay-btn").innerText = "Autoplay";
    clearInterval(intervalId);
    isAutoplaying = false;
  }
}

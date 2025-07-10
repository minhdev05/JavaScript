let score = JSON.parse(localStorage.getItem("scoreCoin")) || {
  wins: 0,
  loses: 0,
};

function playGame(guess) {
  let randomNumber = Math.random();
  let result = "";
  let gameMessage = "";

  if (randomNumber < 0.5) {
    result = "heads";
  } else {
    result = "tails";
  }

  if (guess === result) {
    score.wins++;
    gameMessage = "You Win!!!";
  } else {
    score.loses++;
    gameMessage = "You Lose!!!";
  }

  localStorage.setItem("scoreCoin", JSON.stringify(score));
  alert(
    `Guess: ${guess}\nResult: ${result}\n${gameMessage}\nWins: ${score.wins}, Loses: ${score.loses}`
  );
}

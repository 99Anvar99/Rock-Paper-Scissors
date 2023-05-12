const buttons = document.querySelectorAll("button");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");

let playerChoice;
let computerChoice;
let score = {
  player: 0,
  computer: 0,
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playerChoice = button.id;
    computerChoice = computerPlay();
    playRound(playerChoice, computerChoice);
    updateScore();
  });
});

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    displayResult("It's a tie!");
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    displayResult("You win!");
    score.player++;
  } else {
    displayResult("You lose!");
    score.computer++;
  }
}

function displayResult(result) {
  const resultDiv = document.querySelector(".result");
  resultDiv.innerHTML = `<p>You chose ${playerChoice}.<br>The computer chose ${computerChoice}.</p><p>${result}</p>`;
}

function updateScore() {
  playerScore.textContent = score.player;
  computerScore.textContent = score.computer;
}

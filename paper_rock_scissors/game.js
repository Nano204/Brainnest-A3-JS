const options = ["Rock", "Paper", "Scissors"];
const player = { name: "Player", color: "aqua", selection: null, score: 0 };
const computer = { name: "Computer", color: "orange", selection: null, score: 0 };
const draws = { name: "Draw", score: 0, color: "grey" };
let rounds = 0;

//Map all the elements I'll use
const playerButtons = Array.from(
  document.getElementById("playerSpace").querySelectorAll(".gameButton")
);

const playerText = document.getElementById("playerText");
const computerText = document.getElementById("computerText");
const roundCount = document.getElementById("roundCount");
const nextRoundButton = document.getElementById("nextRoundButton");
const restartButton = document.getElementById("restartButton");
const winnerAnnouncer = document.getElementById("winnerAnnouncer");
const winner = document.getElementById("winner");
const winningComment = document.getElementById("winningComment");
const gameWinnerAnnouncer = document.getElementById("gameWinnerAnnouncer");
const gameWinner = document.getElementById("gameWinner");
const computerScore = document.getElementById("computerScore");
const playerScore = document.getElementById("playerScore");
const drawScore = document.getElementById("drawScore");
const playerHand = document.getElementById("playerHand");
const computerHand = document.getElementById("computerHand");

//Set event listeners
playerButtons.map((button) => {
  button.addEventListener("click", (event) => {
    player.selection = event.target.outerText;
    playRound();
  });
});

nextRoundButton.addEventListener("click", restore);
restartButton.addEventListener("click", restart);

//Create support funtions for listeners
function playRound() {
  computer.selection = options[Math.floor(Math.random() * 3)];
  let winner;
  if (player.selection == computer.selection) {
    winner = draws;
  } else if (
    (player.selection === "Paper" && computer.selection === "Scissors") ||
    (player.selection === "Scissors" && computer.selection === "Rock") ||
    (player.selection === "Rock" && computer.selection === "Paper")
  ) {
    winner = computer;
  } else {
    winner = player;
  }
  winner.score += 1;
  rounds += 1;
  render(winner);
  isFinished();
}

function render(roundWinner) {
  playerButtons.map((button) => (button.style.display = "none"));
  winningComment.style.display = "none";
  winnerAnnouncer.style.display = "initial";
  winner.style.display = "initial";
  playerText.style.display = "initial";
  nextRoundButton.style.display = "initial";
  roundCount.innerText = `Round ${rounds}`;
  winner.innerText = roundWinner.name;
  computerScore.innerText = `Computer score: ${computer.score}`;
  playerScore.innerText = `Player score: ${player.score}`;
  drawScore.innerText = `Draw score: ${draws.score}`;
  playerText.innerText = player.selection;
  computerText.innerText = computer.selection;
  winner.style.color = roundWinner.color;
  playerHand.src = `./images/${player.selection.toLowerCase()}.png`;
  computerHand.src = `./images/${computer.selection.toLowerCase()}.png`;
}

function restore() {
  playerButtons.map((button) => (button.style.display = "initial"));
  computerText.innerText = "Waiting...";
  winnerAnnouncer.style.display = "none";
  nextRoundButton.style.display = "none";
  winner.style.display = "none";
  playerText.style.display = "none";
}

function restart() {
  restore();
  roundCount.innerText = `Start!`;
  winningComment.style.display = "initial";
  [draws.score, player.score, computer.score, rounds] = [0, 0, 0, 0];
  computerScore.innerText = `Computer score: ${computer.score}`;
  playerScore.innerText = `Player score: ${player.score}`;
  drawScore.innerText = `Draw score: ${draws.score}`;
  computerScore.style.display = "initial";
  playerScore.style.display = "initial";
  drawScore.style.display = "initial";
  gameWinnerAnnouncer.style.display = "none";
  restartButton.style.display = "none";
  gameWinner.style.display = "none";
}

function isFinished() {
  let finalWinner;
  if (player.score == 5) finalWinner = player;
  if (computer.score == 5) finalWinner = computer;
  if (finalWinner) {
    winnerAnnouncer.style.display = "none";
    winner.style.display = "none";
    gameWinnerAnnouncer.style.display = "initial";
    gameWinner.style.display = "initial";
    nextRoundButton.style.display = "none";
    restartButton.style.display = "initial";
    computerScore.style.display = "none";
    playerScore.style.display = "none";
    drawScore.style.display = "none";
    gameWinner.innerText = finalWinner.name;
    gameWinner.style.color = finalWinner.color;
  }
}

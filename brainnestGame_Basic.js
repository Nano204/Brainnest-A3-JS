const options = ["rock", "paper", "scissors"];
const player = { name: "Player", selection: null, score: 0 };
const computer = { name: "Computer", selection: null, score: 0 };
const draws = { score: 0 };

function computerPlay() {
  return options[Math.floor(Math.random() * 3)];
}

function playRound() {
  computer.selection = computerPlay();
  player.selection = prompt("Choose yours: rock, paper, scissors").toLowerCase();
  if (player.selection == computer.selection) {
    console.log("There is a draw");
    return draws;
  } else if (
    (player.selection === "paper" && computer.selection === "scissors") ||
    (player.selection === "scissors" && computer.selection === "rock") ||
    (player.selection === "rock" && computer.selection === "paper")
  ) {
    let winner = computer;
  } else {
    let winner = player;
  }
  console.log(`The round winner is: ${winner.name}`);
  return winner;
}

function game() {
  for (let round = 1; round <= 5; round++) {
    const winner = playRound();
    ++winner.score;
  }
  return computer.score == player.score
    ? "There is a draw"
    : computer.score > player.score
    ? "THE GAME WINNER IS: COMPUTER"
    : "THE GAME WINNER IS: PLAYER";
}
game();

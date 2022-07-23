const options = ["rock", "paper", "scissors"];
const player = { name: "Player", selection: null, score: 0 };
const computer = { name: "Computer", selection: null, score: 0 };
const draws = { score: 0 };

function computerPlay() {
  return options[Math.floor(Math.random() * 3)];
}

function playRound() {
  computer.selection = computerPlay();
  player.selection = prompt("Choose yours: rock, paper, scissors");
  player.selection && (player.selection = player.selection.toLowerCase());
  if (!validatePromptInput(player.selection)) return;
  if (player.selection.toLowerCase() == computer.selection) {
    return draws;
  } else if (
    (player.selection === "paper" && computer.selection === "scissors") ||
    (player.selection === "scissors" && computer.selection === "rock") ||
    (player.selection === "rock" && computer.selection === "paper")
  ) {
    return computer;
  } else {
    return player;
  }
}

function validatePromptInput(input) {
  while (input || input == "") {
    if (options.includes(input)) {
      return true;
    } else {
      input = prompt("Invalid option, try again\nChoose yours: rock, paper, scissors");
    }
  }
  if (!input) {
    console.log("Player has cancel game");
    return false;
  }
}

function logScoreBoard(winner, round, lastRound) {
  console.log(`-------------Round ${round}-------------`);
  console.log("Player select: ", player.selection);
  console.log("Computer select: ", computer.selection);
  winner === draws
    ? console.log("There's a draw")
    : console.log(`The round winner is: ${winner.name}`);
  console.log("Player score: ", player.score);
  console.log("Computer score: ", computer.score);
  console.log("Draws: ", draws.score);
  if (lastRound) {
    console.log("---------Results----------");
    const gameWinner =
      computer.score > player.score
        ? computer
        : computer.score < player.score
        ? player
        : draws;
    gameWinner == draws
      ? console.log("There is a draw")
      : console.log(`THE GAME WINNER IS: ${gameWinner.name.toUpperCase()}`);
  }
}

function game() {
  console.clear();
  alert("Game has started, we will play 5 rounds");
  [computer.score, player.score, draws.score] = [0, 0, 0];
  for (let round = 1; round <= 5; round++) {
    const winner = playRound();
    if (!winner) break;
    ++winner.score;
    let lastRound = round == 5;
    logScoreBoard(winner, round, lastRound);
  }
  return confirm("Wanna play again?") ? game() : "Thanks for playing";
}

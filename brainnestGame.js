const options = ["rock", "paper", "scissors"];
const player = { name: "Player", selection: null, score: 0 };
const computer = { name: "Computer", selection: null, score: 0 };
const draws = { score: 0 };

function computerPlay() {
  return options[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection == computerSelection) {
    return draws;
  } else if (
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "paper")
  ) {
    return computer;
  } else {
    return player;
  }
}

function validatePromptInput(input) {
  while (input || input == "") {
    if (options.includes(input.toLowerCase())) {
      return true;
    } else {
      input = prompt("Invalid option, try again\nChoose yours: rock, paper,scissors");
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
  console.log("Player score: ", player.score);
  console.log("Computer score: ", computer.score);
  console.log("Draws: ", draws.score);
  winner === draws
    ? console.log("There's a draw")
    : console.log(`The winner is: ${winner.name}`);
  console.log();
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
      : console.log(`THE GAME WINNER IS: ${winner.name.toUpperCase()}`);
  }
}

function game() {
  console.clear();
  alert("Game has started, we will play 5 rounds");
  [computer.score, player.score, draws.score] = [0, 0, 0];
  for (let round = 1; round <= 5; round++) {
    computer.selection = computerPlay();
    player.selection = prompt("Choose yours: rock, paper, scissors");
    if (!validatePromptInput(player.selection)) break;
    const winner = playRound(player.selection, computer.selection);
    ++winner.score;
    let lastRound = round == 5;
    logScoreBoard(winner, round, lastRound);
  }
  return confirm("Wanna play again?") ? game() : "Thanks for playing";
}

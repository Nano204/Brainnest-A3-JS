//Declare goblal variables for options in array
const options = ["rock", "paper", "scissors"];

function computerPlay() {
  //Create a random number value and use as index in array
  return options[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  // if (!playerSelection || !computerSelection) return;
  //Show players selection
  console.log("Player select: ", playerSelection.toLowerCase());
  console.log("Computer select: ", computerSelection);
  //Set alias to playerSelection and computerSelection, to make shorter calls
  //Find index to use mathematical operations to uses generic cases and make shorter code
  const cS = options.findIndex((e) => e === computerSelection.toLowerCase());
  const pS = options.findIndex((e) => e === playerSelection.toLowerCase());
  //Set mathematical cases
  if (pS - cS == 0) {
    console.log("There's a tie");
    return "tie";
  } else if (pS - cS == -1 || pS - cS == 2) {
    console.log("The winner is: computer");
    return "computer";
  } else {
    console.log("The winner is: player");
    return "player";
  }
}

//Play game
function game() {
  //Start a scoreboard
  let computerScore = 0;
  let playerScore = 0;
  let ties = 0;
  //Ask the player what's the maximun amount of rounds it wants to play
  let playTimes = prompt("How many round would you like to play?");
  //Set bucles to make player use a correct answer
  while (!playTimes || isNaN(playTimes)) {
    if (!playTimes) {
      console.log("I though you wanna play!");
      return;
    }
    playTimes = prompt(
      "Invalid option, try again\nHow many round would you like to play?"
    );
  }
  //Show the player how many round have set and the rules
  alert(
    `Maximun amount of rounds setted to ${playTimes}\nRemember: Game will stop if one of contender has no possibilites to win`
  );
  //Set the bucle to play times as many round you like
  for (let i = 0; i < playTimes; i++) {
    console.log(`-------------Round ${i + 1}-------------`);
    const computerSelection = computerPlay();
    let playerSelection = prompt("Choose yours: rock, paper,scissors");
    //Set bucles to make player use a correct answer
    while (!options.includes(playerSelection)) {
      if (!playerSelection && playerSelection !== "") {
        console.log("Player has run away");
        break;
      }
      playerSelection = prompt(
        "Invalid option, try again\nChoose yours: rock, paper,scissors"
      );
    }
    //Finish game is player cancel
    if (!playerSelection) break;
    //Play round and add games to socerboard
    const winner = playRound(playerSelection, computerSelection);
    switch (winner) {
      case "player":
        ++playerScore;
        break;
      case "computer":
        ++computerScore;
        break;
      case "tie":
        ++ties;
        break;
    }
    //Show results after ending the round
    console.log("Computer score: ", computerScore);
    console.log("Player score: ", playerScore);
    console.log("Ties: ", ties);
    console.log();
    //Validate if ther is any posibilities to win for both contendors or break
    if (
      computerScore > playerScore + (playTimes - 1 - i) ||
      playerScore > computerScore + (playTimes - 1 - i)
    ) {
      break;
    }
  }
  //Show results
  console.log("---------Results----------");
  if (computerScore > playerScore) {
    console.log("The winner is: Computer");
  } else if (computerScore < playerScore) {
    console.log("The winner is: Player");
  } else {
    console.log("There is a tie");
  }
  console.log("Finish");
  //Ask to play again
  const repeat = confirm("Wanna play again?");
  if (repeat) {
    console.clear();
    game();
  }
}

game();

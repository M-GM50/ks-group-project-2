function computerPlay() {
  let random = Math.floor(Math.random() * 3) + 1;

  if (random === 1) {
    return "rock";
  } else if (random === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playerPlay() {
  let player = prompt("Enter rock, paper or scissors ?");
  player = player.toLowerCase();
  return player;
}

function whoWins(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "It's a Draw!";
  } else if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      return "You win! Rock beats Scissors!";
    } else {
      return "You Lose!";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      return "You Win! Scissors beats Paper";
    } else {
      return "You Lose!";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return "You Win! Paper beats Rock";
    } else {
      return "You Lose!";
    }
  }
}

function playGame() {
  let playerChoice = playerPlay();
  let computerChoice = computerPlay();
  console.log("player: ", playerChoice);
  console.log("computer: ", computerChoice);
  let result = whoWins(playerChoice, computerChoice);
  console.log(result);
}

playGame();

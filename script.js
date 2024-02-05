function computerPlay() {
  let random = Math.floor(Math.random() * 3) + 1;

  if (random === 1) {
    return "Rock";
  } else if (random === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playerPlay() {
  let player = prompt("Enter rock, paper or scissors ?");
  player = player.toLowerCase();
  if (player === "rock") {
    return "You have chosen Rock";
  } else if (player === "paper") {
    return "You have chosen Paper";
  } else if (player === "scissors") {
    return "You have chosen Scissors";
  } else {
    alert("Invalid choice. Please enter rock, paper or scissors.");
  }
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
  let result = whoWins(playerPlay(), computerPlay());
  console.log(result);
}

playGame();

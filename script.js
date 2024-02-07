const greetingMassage = {
  title: "Welcome to the Rock, Paper, Scissors Game!",
  intro:
    "This game is a very simple, yet exciting game that pits two opponents against each other to determine the ultimate victor.",
};
const gameRules = {
  title: "The Rules are straghtforward:",
  line1: "Rocks beats Scissors",
  line2: "Scissors beats Paper",
  line3: "Paper beats Rock",
  line4:
    "Can you defeat the evil AI in this epic battle?You will play 5 rounds,at the end who get more points is the winner!!!",
  line5:
    "(I will post the rules on the console as well just in case you forget.)",
};

function isPlayerReady() {
  let response = prompt("Are you ready to play? (yes/no)").toLowerCase();
  while (response !== "yes" && response !== "no") {
    alert("Invalid response. Please enter 'yes' or 'no'.");
    response = prompt("Are you ready to play? (yes/no)").toLowerCase();
  }
  return response === "yes";
}

function appStart() {
  alert(`${greetingMassage.title}\n${greetingMassage.intro} `);
  console.log(
    `${gameRules.title}\n${gameRules.line1}\n${gameRules.line2}\n${gameRules.line3}\n${gameRules.line4}`
  );
  alert(
    `${gameRules.title}\n${gameRules.line1}\n${gameRules.line2}\n${gameRules.line3}\n${gameRules.line4}\n${gameRules.line5}`
  );

  if (isPlayerReady()) {
    // Start the game
    playGame();
    console.log("Game start");
  } else {
    alert("Alright, maybe next time. Goodbye!");
  }
}

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

function reStartGame() {
  let playerChoice = prompt("Do you want another chance to win? (yes/no)")
  if (playerChoice == "yes")
  {
    appStart();
  }
  else {
    alert("Alright, see you soon!");
  }
}


appStart();
reStartGame();



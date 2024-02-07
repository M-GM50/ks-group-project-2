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

const initialQuestion = "Choose: rock, paper or scissors ?";
const wrongInput = "Wrong Input!";
const computerVictory = " Bad ending. Victory goes to the Evil AI!";
const playerVictory = "What a Epic Game, You are the Victor!";
const draw = "After a close game You tied the Evil AI!";

var playerScore = 0;
var computerScore = 0;

function incrementPlayerScore() {
  playerScore++;
}

function incrementComputerScore() {
  computerScore++;
}

function determineWinner() {
  if (playerScore > computerScore) {
    alert(playerVictory);
  }
  else if(computerScore > playerScore) {
    alert(computerVictory);
  }
  else {
    alert(draw);
  }
}

function isPlayerReady() {
  try {
    let response = prompt("Are you ready to play? (yes/no)");
    if (response === null) {
      throw new Error("See you next time!!!");
    } else {
      while (response !== "yes" && response !== "no") {
        alert("Invalid response. Please enter 'yes' or 'no'.");
        response = prompt("Are you ready to play? (yes/no)").toLowerCase();
      }
      return response === "yes";
    }
  } catch (error) {
    console.log(error.message);
  }
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
    console.log("Game start");
    Rounds();
    determineWinner(); // rose added this line
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

const isValidInput = (input) => {
  return input === 'rock' || input === 'paper' || input === 'scissors';
}

function playerPlay() {
  let question = initialQuestion;

  while (true) {
    let playerChoose = prompt(question)?.toLowerCase();

    if (isValidInput(playerChoose)) {
      return playerChoose;
    } else {
      question = `${wrongInput} ${initialQuestion}`;
    }
  }
}

function Rounds() {
  let round = 1;
  for (let i = 0; i < 5; i++) {
    console.log(`Round: ${round}`);
    playGame();
    round++;
  }
}

function whoWins(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "It's a Draw!";
  }
  else if (playerSelection === "rock" && computerSelection === "scissors") {
    incrementPlayerScore(); // rose added this line
    return "You win! Rock beats Scissors!";
  }
  else if (playerSelection === "scissors" && computerSelection === "paper") {
    incrementPlayerScore(); // rose added this line
    return "You Win! Scissors beats Paper";
  }
  else if (playerSelection === "paper" && computerSelection === "rock") {
    incrementPlayerScore(); // rose added this line
    return "You Win! Paper beats Rock";
  }
  else {
    incrementComputerScore();
    return "You Lose!";
  }

}



function playGame() {
  let playerChoice = playerPlay();
  let computerChoice = computerPlay();

  console.log("player: ", playerChoice);
  console.log("computer: ", computerChoice);
  let result = whoWins(playerChoice, computerChoice);
  console.log(result);
  alert(`Computer: ${computerScore} - You: ${playerScore}`); // rose added this line

}

function reStartGame() {
  let playerChoice = prompt("Do you want another chance to win? (yes/no)")
  if (playerChoice == "yes") {
    console.clear();
    playerScore = 0;
    computerScore = 0;
    appStart();
  }
  else {
    alert("Alright, see you soon!");
  }
}

appStart();
reStartGame();



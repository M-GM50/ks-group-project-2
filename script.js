const aiResponses = [
  "Pathetic human, your defeat was inevitable!",
  "You're not even a worthy adversary, just a momentary annoyance.",
  "How amusing, you believed victory was within your grasp.",
  "You thought you could beat me? How cute",
  "Not even worthy of my time...",
  "Do you think randomness is your ally?",
];

const greetingMassage = {
  title: "👋 Welcome to the Rock, Paper, Scissors Game!",
  intro:
    "This is a very simple, yet exciting game that pits two opponents against each other to determine the ultimate victor.🏆",
};

const gameRules = {
  title: "The Rules are straightforward:",
  line1: "→ Rock beats Scissors",
  line2: "→ Scissors beats Paper",
  line3: "→ Paper beats Rock",
  line4:
    "Can you defeat the 😈evil AI in this epic battle? You will play 5 rounds,at the end who get more points is the winner!!!",
  line5:
    "(I will post the rules on the console as well just in case you forget.)",
};

const gameStartMsg = "🚦 Game start";
const initialQuestion = "Choose: rock, paper or scissors ?";
const invalidResponse = "❌ Invalid response. Please enter 'yes' or 'no'";
const wrongInput = "❌ Wrong Input!";
const computerVictory = " Bad ending. Victory goes to the 😈Evil AI!";
const playerVictory = "What a Epic Game, You are the 🏆Victor!";
const draw = "After a close game You tied the Evil AI!";
const readyToPlay = "Are you ready to play? (yes/no)";
const greeting = "Alright, maybe next time. Goodbye! 👋";

const nOfRounds = 5;

let playerScore = 0;
let computerScore = 0;

const showMessage = (message) => {
  console.log(message);
  alert(message);
};

const getRandomAiResponses = () => {
  let response = "😈 You Lose! \n";
  return response + aiResponses[Math.floor(Math.random() * aiResponses.length)];
};

const incrementPlayerScore = () => playerScore++;

const incrementComputerScore = () => computerScore++;

const resetScores = () => {
  playerScore = 0;
  computerScore = 0;
};

function determineWinner() {
  if (playerScore > computerScore) {
    showMessage(playerVictory);
  } else if (computerScore > playerScore) {
    showMessage(computerVictory);
  } else {
    showMessage(draw);
  }
}

function isPlayerReady() {
  try {
    let response = prompt("👉 Are you ready to play? (yes/no)");
    if (response === null) {
      throw new Error("👋 See you next time!!!");
    } else {
      while (response !== "yes" && response !== "no") {
        showMessage(invalidResponse);
        response = prompt(readyToPlay).toLowerCase();
      }
      return response === "yes";
    }
  } catch (error) {
    console.log(error.message);
  }
}

function appStart() {
  showMessage(`${greetingMassage.title}\n${greetingMassage.intro} `);
  showMessage(
    `${gameRules.title}\n${gameRules.line1}\n${gameRules.line2}\n${gameRules.line3}\n${gameRules.line4}`
  );

  gameStart();
}

function gameStart() {
  if (isPlayerReady()) {
    game();
  } else {
    showMessage(greeting);
  }
}

function game() {
  // Play the game
  showMessage(gameStartMsg);
  Rounds();
  determineWinner();

  reStartGame();
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

const isValidInput = (input) =>
  input === "rock" || input === "paper" || input === "scissors";

function playerPlay(roundNumber) {
  const roundCounterMessage = `🚩 ROUND ${roundNumber}`;
  let question = `${roundCounterMessage} \n${initialQuestion}`;

  while (true) {
    let playerChoose = prompt(question)?.toLowerCase();

    if (isValidInput(playerChoose)) {
      return playerChoose;
    } else {
      question = `${roundCounterMessage}\n${wrongInput} ${initialQuestion}`;
    }
  }
}

const showScores = (round) => {
  let scoreMessage = `Computer: ${computerScore} - You: ${playerScore}`;
  const roundsLeft = nOfRounds - round;

  if (roundsLeft > 0) scoreMessage += `\n${roundsLeft} ROUNDS LEFT`;

  showMessage(scoreMessage);
};

function Rounds() {
  let round = 1;
  for (let i = 0; i < nOfRounds; i++) {
    playGame(round);
    showScores(round);
    round++;
  }
}

function whoWins(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "🤷‍♂️ It's a Draw!";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    incrementPlayerScore(); // rose added this line
    return "🥳 You win! Rock beats Scissors!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    incrementPlayerScore(); // rose added this line
    return "🥳 You Win! Scissors beats Paper";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    incrementPlayerScore(); // rose added this line
    return "🥳 You Win! Paper beats Rock";
  } else {
    incrementComputerScore();
    return getRandomAiResponses();
  }
}

function playGame(round) {
  let playerChoice = playerPlay(round);
  let computerChoice = computerPlay();
  let result = whoWins(playerChoice, computerChoice);
  showMessage(
    `Player Choice: ${playerChoice}\nComputer Choice: ${computerChoice}\n${result}`
  );
}

function reStartGame() {
  let playerChoice = prompt("Do you want play again? (yes/no)");
  if (playerChoice == "yes") {
    console.clear();
    resetScores();
    gameStart();
  } else {
    showMessage("👋 Alright, see you soon!");
  }
}

appStart();

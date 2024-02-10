const aiResponses = [
  `😈 Evil AI: "Pathetic human, your defeat was inevitable!"`,
  `😈 Evil AI: "You're not even a worthy adversary, just a momentary annoyance."`,
  `😈 Evil AI: "How amusing, you believed victory was within your grasp."`,
  `😈 Evil AI: "You thought you could beat me? How cute"`,
  `😈 Evil AI: "Not even worthy of my time..."`,
  `😈 Evil AI: "Do you think randomness is your ally?"`,
];

const greetingMassage = {
  title: "👋 Welcome to the Rock, Paper, Scissors Game!",
  intro:
    "This is a very simple, yet exciting game that pits two opponents against each other to determine the ultimate victor.🏆",
};

const gameRules = {
  title: "The Rules are straightforward:",
  line1: "→ Rock beats Scissors",
  line2: "→ Scissors beat Paper",
  line3: "→ Paper beats Rock",
  line4:
    "Can you defeat the 😈evil AI in this epic battle? You will play 5 rounds, at the end who get more points is the winner!!!",
  line5:
    "(I will post the rules on the console as well just in case you forget.)",
};

const gameStartMsg = "🚦 GAME START";
const initialQuestion = "Choose: rock, paper or scissors ?";
const invalidResponse = "❌ Invalid response. Please enter 'yes' or 'no'";
const wrongInput = "❌ Wrong Input!";
const computerVictory = " Bad ending. Victory goes to the 😈Evil AI!";
const playerVictory = "What a Epic Game, You are the 🏆Victor!";
const draw = "After a close game You tied the Evil AI! 🤷‍♂️";
const readyToPlay = "👉 Are you ready to play? (yes/no)";
const greeting = "Alright, maybe next time. Goodbye! 👋";

const nOfRounds = 5;

let playerScore = 0;
let computerScore = 0;

const showMessage = (message) => {
  console.log(message);
  alert(message);
};

function wantToQuitGame() {
  let confirmQuitMessage = prompt("Are you sure to quit the game?(yes/no)");
  if (
    confirmQuitMessage === null ||
    confirmQuitMessage.toLowerCase().trim() === "no"
  ) {
    // cancel quit, go back to the game
    return false;
  } else {
    if (
      confirmQuitMessage.toLowerCase().trim() !== "yes" &&
      confirmQuitMessage.toLowerCase().trim() !== "no"
    ) {
      showMessage(invalidResponse);
      return wantToQuitGame();
    } else {
      return true;
    }
  }
}

const getRandomAiResponses = () =>
  showMessage(aiResponses[Math.floor(Math.random() * aiResponses.length)]);

const increasePlayerScore = () => playerScore++;

const increaseComputerScore = () => computerScore++;

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
  let response = prompt(readyToPlay);
  if (response === null || response.toLowerCase().trim() === "no") {
    return response === "no";
  } else {
    if (
      response.toLowerCase().trim() !== "yes" &&
      response.toLowerCase().trim() !== "no"
    ) {
      showMessage(invalidResponse);
      return isPlayerReady();
    } else {
      return response.toLowerCase().trim() === "yes";
    }
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
    console.clear();
    return;
  }
}

function game() {
  showMessage(gameStartMsg);
  rounds();
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

  let playerChoose = prompt(question);

  // If user cancels, return null
  if (playerChoose === null) {
    if (wantToQuitGame(true)) {
      showMessage(greeting);
      console.clear();
    } else {
      return playerPlay(roundNumber);
    }
  } else {
    if (isValidInput(playerChoose)) {
      playerChoose = playerChoose.toLowerCase().trim();
      return playerChoose;
    } else {
      showMessage(wrongInput);
      return playerPlay(roundNumber);
    }
  }
}

const showScores = (round) => {
  let scoreMessage = `Computer: ${computerScore} - You: ${playerScore}`;
  const roundsLeft = nOfRounds - round;

  if (roundsLeft > 0) {
    scoreMessage += `\n${roundsLeft} ROUNDS LEFT`;
  } else {
    scoreMessage += `\n🚩 FINAL SCORE`;
  }

  showMessage(scoreMessage);
};

function rounds() {
  let round = 1;
  for (let i = 0; i < nOfRounds; i++) {
    playGame(round);
    showScores(round);
    round++;
  }
}

function whoWins(playerSelection, computerSelection) {
  let winner;
  let winMsg;
  let victory;
  const rockBeatsScissorsMsg = "Rock beats Scissors!";
  const paperBeatsRockMsg = "Paper beats Rock!";
  const scissorsBeatsPaperMsg = "Scissors beat Paper!";

  if (playerSelection === computerSelection) {
    winner = "draw";
    winMsg = `You both chose ${playerSelection}`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    winner = "player";
    winMsg = rockBeatsScissorsMsg;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    winner = "player";
    winMsg = scissorsBeatsPaperMsg;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    winner = "player";
    winMsg = paperBeatsRockMsg;
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    winner = "computer";
    winMsg = rockBeatsScissorsMsg;
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    winner = "computer";
    winMsg = scissorsBeatsPaperMsg;
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    winner = "computer";
    winMsg = paperBeatsRockMsg;
  }

  victory = {
    playerChoice: playerSelection,
    computerChoice: computerSelection,
    winner: winner,
    winMsg: winMsg,
  };

  return victory;
}

function handleVictory(victory) {
  let resultMessage;

  if (victory.winner === "player") {
    resultMessage = "🥳 You win!";
    increasePlayerScore();
  } else if (victory.winner === "computer") {
    resultMessage = "😭 You Lose!";
    increaseComputerScore();
  } else if (victory.winner === "draw") {
    resultMessage = "🤷‍♂️ It's a Draw!";
  }

  resultMessage = `${resultMessage} ${victory.winMsg}`;

  showMessage(
    `Player Choice: ${victory.playerChoice}\nComputer Choice: ${victory.computerChoice}\n${resultMessage}`
  );

  if (victory.winner === "computer") getRandomAiResponses();
}

function playGame(round) {
  let playerChoice = playerPlay(round);
  let computerChoice = computerPlay();
  let result = whoWins(playerChoice, computerChoice);

  handleVictory(result);
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

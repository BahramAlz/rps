//all elements by id
const choices = document.querySelectorAll(".choice");
const message = document.getElementById("message");
const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");

const roundNumberSpan = document.getElementById("round-number");
const resetBtn = document.getElementById("reset-btn");

let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;

const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

const determineWinner = (playerChoice, computerChoice) => {
  if (playerChoice == computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    return "You Win!";
  } else {
    computerScore++;
    return "Computer Wins!";
  }
};

const updateScore = () => {
  playerScoreSpan.textContent = playerScore;
  computerScoreSpan.textContent = computerScore;
};

const updateRound = () => {
  roundNumber++;
  roundNumberSpan.textContent = roundNumber;
};

const resetGame = () => {
  if (roundNumber > 1) {
    playerScore = 0;
    computerScore = 0;
    roundNumber = 1;
    updateScore();
    updateRound();
    message.textContent = "Choose your weapon!";
  } else {
    message.textContent = "Why are you resetting already??";
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const playerChoice = choice.getAttribute("data-choice");
    const computerChoice = getComputerChoice();
    const resultMessage = determineWinner(playerChoice, computerChoice);

    message.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${resultMessage}`;
    updateScore();
    updateRound();
  });
});

resetBtn.addEventListener("click", resetGame);

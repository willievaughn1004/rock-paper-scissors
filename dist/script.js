// Variables

const gameChoices = document.querySelectorAll(".game-choices");
const playerSymbol = document.querySelector(".player-symbol");
const computerSymbol = document.querySelector(".computer-symbol");
const roundStatus = document.querySelector("#round-status");
const roundMessage = document.querySelector("#round-message");
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");

// Functions

const getPlayerChoice = (event) => {
  const button = event.target.closest("button");
  if (button) {
    return [button.getAttribute("id"), button.innerHTML];
  }
};

const getComputerChoice = () => {
  let gameArr = [
    ["Rock", '<i class="fa-regular fa-hand-back-fist"></i>'],
    ["Paper", '<i class="fa-regular fa-hand"></i>'],
    ["Scissors", '<i class="fa-regular fa-hand-scissors"></i>'],
  ];
  return gameArr[Math.floor(Math.random() * gameArr.length)];
};

const playRound = (event) => {
  const playerSelection = getPlayerChoice(event);
  const computerSelection = getComputerChoice();

  playerSymbol.innerHTML = playerSelection[1];
  computerSymbol.innerHTML = computerSelection[1];

  if (playerSelection[0] === computerSelection[0]) {
    roundStatus.textContent = "It's a tie!";
    roundMessage.textContent = `${playerSelection[0]} ties with ${playerSelection[0]}`;
    return;
  }

  if (playerSelection[0] === "Rock") {
    if (computerSelection[0] === "Paper") {
      roundStatus.textContent = "You Lose!";
      roundMessage.textContent = "Paper beats Rock";
      computerScore.textContent++;
    } else {
      roundStatus.textContent = "You Win!";
      roundMessage.textContent = "Rock beats Scissors";
      playerScore.textContent++;
    }
  }

  if (playerSelection[0] === "Paper") {
    if (computerSelection[0] === "Scissors") {
      roundStatus.textContent = "You Lose!";
      roundMessage.textContent = "Scissors beats Paper";
      computerScore.textContent++;
    } else {
      roundStatus.textContent = "You Win!";
      roundMessage.textContent = "Paper beats Rock";
      playerScore.textContent++;
    }
  }

  if (playerSelection[0] === "Scissors") {
    if (computerSelection[0] === "Rock") {
      roundStatus.textContent = "You Lose!";
      roundMessage.textContent = "Rock beats Scissors";
      computerScore.textContent++;
    } else {
      roundStatus.textContent = "You Win!";
      roundMessage.textContent = "Scissors beats Paper";
      playerScore.textContent++;
    }
  }

  if (parseInt(computerScore.textContent) === 5 || parseInt(playerScore.textContent) === 5) {
    if (playerScore.textContent > computerScore.textContent) {
      alert("You won!");
    } else {
      alert("You lost...");
    }

    playerSymbol.innerHTML = '<i class="fa-solid fa-question"></i>';
    computerSymbol.innerHTML = '<i class="fa-solid fa-question"></i>';
    roundStatus.textContent = "Choose your weapon";
    roundMessage.textContent = "First to score 5 points wins the game";
    playerScore.textContent = 0;
    computerScore.textContent = 0;

  }

};

// Event Listeners

gameChoices.forEach((choice) => choice.addEventListener("click", playRound));

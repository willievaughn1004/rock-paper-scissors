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
    roundStatus.innerText = "It's a tie!";
    roundMessage.innerText = `${playerSelection[0]} ties with ${playerSelection[0]}`;
    return;
  }

  if (playerSelection[0] === "Rock") {
    if (computerSelection[0] === "Paper") {
      roundStatus.innerText = "You Lose!";
      roundMessage.innerText = "Paper beats Rock";
      computerScore.innerText++;
    } else {
      roundStatus.innerText = "You Win!";
      roundMessage.innerText = "Rock beats Scissors";
      playerScore.innerText++;
    }
  }

  if (playerSelection[0] === "Paper") {
    if (computerSelection[0] === "Scissors") {
      roundStatus.innerText = "You Lose!";
      roundMessage.innerText = "Scissors beats Paper";
      computerScore.innerText++;
    } else {
      roundStatus.innerText = "You Win!";
      roundMessage.innerText = "Paper beats Rock";
      playerScore.innerText++;
    }
  }

  if (playerSelection[0] === "Scissors") {
    if (computerSelection[0] === "Rock") {
      roundStatus.innerText = "You Lose!";
      roundMessage.innerText = "Rock beats Scissors";
      computerScore.innerText++;
    } else {
      roundStatus.innerText = "You Win!";
      roundMessage.innerText = "Scissors beats Paper";
      playerScore.innerText++;
    }
  }

  if (parseInt(computerScore.innerText) === 5 || parseInt(playerScore.innerText) === 5) {
    if (playerScore.innerText > computerScore.innerText) {
      alert("You won!");
    } else {
      alert("You lost...");
    }

    playerSymbol.innerHTML = '<i class="fa-solid fa-question"></i>';
    computerSymbol.innerHTML = '<i class="fa-solid fa-question"></i>';
    roundStatus.innerText = "Choose your weapon";
    roundMessage.innerText = "First to score 5 points wins the game";
    playerScore.innerText = 0;
    computerScore.innerText = 0;

  }

  console.log(computerScore.innerText + playerScore.innerText)

};

// Event Listeners

gameChoices.forEach((choice) => choice.addEventListener("click", playRound));

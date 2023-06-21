// Variables

const gameChoices = document.querySelectorAll(".game-choices");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

// Functions

const getPlayerChoice = (event) => {
  const button = event.target.closest("button");
  if (button) {
    playRound(button.getAttribute("id"), getComputerChoice())
  }

};

const getComputerChoice = () => {
  let gameArr = ["rock", "paper", "scissors"];
  return gameArr[Math.floor(Math.random() * gameArr.length)];
};

const playRound = (playerSelection, computerSelection) => {
  
  if (playerSelection === computerSelection) {
    return "Draw! Go again!";
  }

  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return "You Lose! Paper beats Rock";
    } else {
      return "You Win! Rock beats Scissors";
    }
  }

  if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      return "You Lose! Scissors beats Paper";
    } else {
      return "You Win! Paper beats Rock";
    }
  }

  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return "You Lose! Rock beats Scissors";
    } else {
      return "You Win! Scissors beats Paper";
    }
  }
};

const game = (rounds) => {
  let playerWins = 0;
  let computerWins = 0;

  for (let i = rounds; i > 0; i--) {
    let round = playRound(getPlayerChoice(), getComputerChoice());

    if (/win/gi.test(round)) {
      alert(round);
      playerWins++;
    } else if (/lose/gi.test(round)) {
      alert(round);
      computerWins++;
    } else {
      alert(round);
      i++;
    }
  }

  if (playerWins > computerWins) {
    alert("You won best of five rounds!");
  } else if (playerWins === computerWins) {
    alert("You guys tied!");
  } else {
    alert("You lost best of five rounds!");
  }
};

// Event Listeners

gameChoices.forEach((choice) =>
  choice.addEventListener("click", getPlayerChoice)
);

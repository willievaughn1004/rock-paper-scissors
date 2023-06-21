const getPlayerChoice = () => {

    let playerChoice = prompt("Choose between Rock, Paper, or Scissors!");

    if (/rock|scissors|paper/gi.test(playerChoice)) {
        return playerChoice;
    } else {
        alert("Try again. You must choice between Rock, Paper, or Scissors")
        return getPlayerChoice();
    }

};

const getComputerChoice = () => {
  let gameArr = ["Rock", "Paper", "Scissors"];
  return gameArr[Math.floor(Math.random() * gameArr.length)];
};

const playRound = (playerSelection, computerSelection) => {

  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    return "Draw! Go again!";
  }

  if (/rock/gi.test(playerSelection)) {
    if (computerSelection === "Paper") {
      return "You Lose! Paper beats Rock";
    } else {
      return "You Win! Rock beats Scissors";
    }
  }

  if (/paper/gi.test(playerSelection)) {
    if (computerSelection === "Scissors") {
      return "You Lose! Scissors beats Paper";
    } else {
      return "You Win! Paper beats Rock";
    }
  }

  if (/scissors/gi.test(playerSelection)) {
    if (computerSelection === "Rock") {
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
    console.log("Hey")
  }
};

game(5);

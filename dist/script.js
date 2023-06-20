// const getPlayerChoice = () => {
//     return prompt("Choose between Rock, Paper, or Scissors!")
// }


const getPlayerChoice = () => {
    return "Paper";
}

const getComputerChoice = () => {
    let gameArr = ['Rock', 'Paper', 'Scissors']
    return gameArr[Math.floor(Math.random() * gameArr.length)];
}

const playRound = (playerSelection, computerSelection) => {

if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    return "Draw!"
}

if (/rock/gi.test(playerSelection)) {
    if (computerSelection === "Paper") {
        return "You Lose! Paper beats Rock"
    } else {
        return "You Win! Rock beats Scissors"
    }
}

if (/paper/gi.test(playerSelection)) {
    if (computerSelection === "Scissors") {
        return "You Lose! Scissors beats Paper"
    } else {
        return "You Win! Paper beats Rock"
    }
}

if (/scissors/gi.test(playerSelection)) {
    if (computerSelection === "Rock") {
        return "You Lose! Rock beats Scissors"
    } else {
        return "You Win! Scissors beats Paper"
    }
}

}

const game = (rounds) => {
    let playerWins = 0;

        console.log(playRound(getPlayerChoice(), getComputerChoice()))
        console.log(/win/gi.test(playRound(getPlayerChoice(), getComputerChoice())))

        for (let i = rounds; i > 0; i--) {
            
        }

        if (/win/gi.test(playRound(getPlayerChoice(), getComputerChoice()))) {
            playerWins++
        }
    

    console.log(playerWins);

    if (playerWins > 0) {
        return "You won best of five rounds!"
    } else {
        return "You lost best of five rounds!"
    }
}

console.log(game(5));
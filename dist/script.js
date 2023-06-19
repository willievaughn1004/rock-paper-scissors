
let playerPrompt = prompt();

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

const game = () => {
    let playerWins = 0;

    for (let i = 5; i > 0; i--) {
        console.log(playerPrompt, getComputerChoice())
    }
}

game();
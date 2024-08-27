
let humanScore = 0;
let computerScore = 0;
let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

function getComputerChoice() {
    let num = Math.floor(Math.random() * 100);
    if (num >= 0 && num <= 32) {
        return "Rock"
    }
    else if (num >= 33 && num <= 66) {
        return "Paper"
    }
    else {
        return "Scissor"
    }

}

function getHumanChoice() {
    let humanChoice = prompt("Enter one of the choices among Rock, Paper and Scissor");
    if (humanChoice.toLowerCase() === "Rock".toLowerCase() ||
        humanChoice.toLowerCase() === "Paper".toLowerCase() ||
        humanChoice.toLowerCase() === "Scissor.".toLowerCase()) {
        return humanChoice
    }
    else return "Please enter a valid choice";
}



function playRound(humanChoice, computerChoice) {
    if (humanChoice.toUpperCase() === "ROCK" && computerChoice.toUpperCase() === "PAPER") {
        console.log("You win! Rock beats Paper");
    }
    else if (humanChoice.toUpperCase() === "ROCK" && computerChoice.toUpperCase() === "SCISSOR") {
        console.log("you Lose! Scissor bets Rock");
    }
    else if (humanChoice.toUpperCase() === "SCISSOR" && computerChoice.toUpperCase() === "ROCK") {
        console.log("You Lose! Rock bets Scissor");
    }
    else if (humanChoice.toUpperCase() === "SCISSOR" && computerChoice.toUpperCase() === "PAPER") {
        console.log("You Win! Scissor bets paper");
    }
    else if (humanChoice.toUpperCase() === "PAPER" && computerChoice.toUpperCase() === "SCISSOR") {
        console.log("You Lose! Scosspr bets Paper");
    }
    else if (humanChoice.toUpperCase() === "PAPER" && computerChoice.toUpperCase() === "ROCK") {
        console.log("You Win! Paper bets Rock");
    }
    else if (humanChoice.toUpperCase() === computerChoice.toUpperCase()) {
        console.log("Draw");
    }


}

console.log(playRound());


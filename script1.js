







let humanScore = 0;
let computerScore = 0;

//function to get the random computer choice
function getComputerChoice() {
    let num = Math.floor(Math.random() * 100);
    if (num >= 0 && num > 34) {
        return "Rock"
    }
    else if (num >= 34 && num > 67) {
        return "Paper"
    }
    else return "Scissor"
}

// function to get the input choice from player

function getHumanChoice() {
    let humanChoice = prompt("Please enter your choice");
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock" ||
        humanChoice === "paper" ||
        humanChoice === "scissor") {

        return humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
    }
    else console.log("Enter the valid choice");

}
//varialbes for storeing the return values from humanchoice and computer choice function

// let humanChoice = getHumanChoice();
// let computerChoice = getComputerChoice();

//function for playing one round of game

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Draw");

    }
    else if (humanChoice === "Rock" && computerChoice === "Scissor") {
        console.log("You won! Rock beats Scissor.");
        return humanScore += 1;
    }
    else if (humanChoice === "Rock" && computerChoice === "Paper") {
        console.log("You lost! Paper beats Rock.");
        return computerScore += 1;
    }
    else if (humanChoice === "Scissor" && computerChoice === "Paper") {
        console.log("You won! scissor beats Paper.");
        return humanScore += 1;
    }
    else if (humanChoice === "Scissor" && computerChoice === "Rock") {
        console.log("You lost! Rock beats Scissor.");
        return computerScore += 1;
    }
    else if (humanChoice === "Paper" && computerChoice === "Scissor") {
        console.log("You lost! Scissor beats Paper.");
        return computerScore += 1;
    }
    else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("You won! Paper beats Rock.");
        return humanScore += 1;
    }


}
//New function to playing the 5 rounds, calling the choice each time and then prining the final result in console
function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    if (humanScore > computerScore) {
        console.log(`you Won by ${humanScore} - ${computerScore}`);
    }
    else console.log(`you lost by ${humanScore} - ${computerScore}`);
}

playGame();
// console.log(`humanScore = ${humanScore}`);
// console.log(`computerScore = ${humanScore}`);


//challange1: storing the values of scores after playing the game 5 times
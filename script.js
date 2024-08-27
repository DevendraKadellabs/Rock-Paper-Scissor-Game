function playGame() {
    for (let i = 0; i < 5; i++) {

        let humanScore = 0;
        let computerScore = 0;
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        // Get the random computer choice

        function getComputerChoice() {
            let num = Math.floor(Math.random() * 100);
            if (num >= 0 && num <= 32) {
                return "Rock";
            }
            else if (num >= 33 && num <= 66) {
                return "Paper";
            }
            else {
                return "Scissor";
            }

        }
        // Get the human choice from input
        function getHumanChoice() {
            let humanChoice = prompt("Enter one of the choices among Rock, Paper and Scissor");
            if (humanChoice.toLowerCase() === "Rock".toLowerCase() ||
                humanChoice.toLowerCase() === "Paper".toLowerCase() ||
                humanChoice.toLowerCase() === "Scissor".toLowerCase()) {
                return humanChoice
            }
            else return "Please enter a valid choice";
        }



        function playRound(humanChoice, computerChoice) {

            if (humanChoice.toUpperCase() === "ROCK" && computerChoice.toUpperCase() === "PAPER") {
                console.log("You Lose! Paper beats Rock");
                humanScore += 1;
                return humanScore;
            }
            else if (humanChoice.toUpperCase() === "ROCK" && computerChoice.toUpperCase() === "SCISSOR") {
                console.log("you Win! Rock beats Scissor");
                humanScore += 1;
                return humanScore;
            }
            else if (humanChoice.toUpperCase() === "SCISSOR" && computerChoice.toUpperCase() === "ROCK") {
                console.log("You Lose! Rock beats Scissor");
                computerScore += 1;
                return computerScore;
            }
            else if (humanChoice.toUpperCase() === "SCISSOR" && computerChoice.toUpperCase() === "PAPER") {
                console.log("You Win! Scissor beats paper");
                computerScore += 1;
                return computerScore;
            }
            else if (humanChoice.toUpperCase() === "PAPER" && computerChoice.toUpperCase() === "SCISSOR") {
                console.log("You Lose! Scissor beats Paper");
                computerScore += 1;
                return computerScore;
            }
            else if (humanChoice.toUpperCase() === "PAPER" && computerChoice.toUpperCase() === "ROCK") {
                console.log("You Win! Paper beats Rock");
                humanScore += 1;
                return humanScore;
            }
            else if (humanChoice.toUpperCase() === computerChoice.toUpperCase()) {
                console.log("Draw");
            }
            else {
                console.log("Invalid input");
            }


        }
        console.log(playRound(humanChoice, computerChoice));
    }
}


// function playGame() {

//     for (let i = 0; i < 5; i++) {
//         playRound(humanChoice, computerChoice);
//     }
//     console.log(`humanscore is ${humanScore}`);
//     console.log(`computerscore is ${computerScore}`);
// }
playGame();

// console.log(playGame());


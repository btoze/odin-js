function getComputerChoice() {
    let randomNumb = Math.floor(Math.random() * 3);
    let compChoice = ""
    switch (randomNumb) {
        case 0:
            compChoice = "rock";
            break;
        case 1:
            compChoice = "paper";
            break;
        case 2:
            compChoice = "scissors";
            break;
        default:
            compChoice = "invalid";
    }

    return compChoice
}


function playRound(playerSelection, computerSelection) {
    let user_action = playerSelection.toLowerCase();
    let computer_action = computerSelection;
    let gameResult;

    if (user_action === computer_action) {
        gameResult = `Both players selected ${user_action}. It's a tie!`;
    } else if (user_action === "rock") {
        if (computer_action === "scissors") {
            gameResult = "Rock smashes scissors! You win!";
        } else {
            gameResult = "Paper covers rock! You lose.";
        }
    } else if (user_action === "paper") {
        if (computer_action === "rock") {
            gameResult = "Paper covers rock! You win!";
        } else {
            gameResult = "Scissors cuts paper! You lose.";
        }
    } else if (user_action === "scissors") {
        if (computer_action === "paper") {
            gameResult = "Scissors cuts paper! You win!";
        } else {
            gameResult = "Rock smashes scissors! You lose.";
        }
    }
    
    return gameResult;
}
 



const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(computerSelection);

console.log(playRound(playerSelection, computerSelection));


// let computer generate random number between 1-3
// Link "Rock", "Paper", "Scissor" to numbers 1-3
// Return value as String

// Get User Input (Rock, Paper or Scissor) make it case insensetive display undefined if user doesnt make a valid choice
let humanScore = 0;
let computerScore = 0



function getComputerChoice(ComputerChoice) {

    ComputerChoice = Math.floor(Math.random() * 3) + 1;
    
    if(ComputerChoice == 1){
        ComputerChoice= "rock";
    }
    else if(ComputerChoice == 2){
        ComputerChoice = "paper";
    }
    else {
        ComputerChoice = "scissor";
    }
    return ComputerChoice;
}


function getHumanChoice(HumanChoice) {
     HumanChoice = prompt("Rock, Paper or Scissor?");
    return HumanChoice;
}





function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == "rock" && computerChoice == "paper"){
        computerScore++;
        return "You Lost";

    }
    else if (humanChoice == "rock" && computerChoice == "scissor") {
        humanScore++;
        return "You Won";
    }
    else if (humanChoice == "paper" && computerChoice == "scissor") {
        computerScore++;
        return "You Lost";
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        return "You Won";
    }
    else if (humanChoice == "scissor" && computerChoice == "rock") {
        computerScore++;
        return "You Lost";
    }
    else if (humanChoice == "scissor" && computerChoice == "paper") {
        humanScore++;
        return "You Won";
    }
    else{
        return "Tie";
    }
    
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);
        alert(`Round ${i + 1}: ${result}\nYour choice: ${humanChoice}\nComputer's choice: ${computerChoice}\nYour Score: ${humanScore}\nComputer's Score: ${computerScore}`);
    }
    if (humanScore > computerScore) {
        alert("Congratulations! You won the game!");
    } else if (humanScore < computerScore) {
        alert("Sorry, you lost the game.");
    } else {
        alert("The game is a tie.");
    }
}
playGame();

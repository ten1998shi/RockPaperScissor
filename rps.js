
// let computer generate random number between 1-3
// Link "Rock", "Paper", "Scissor" to numbers 1-3
// Return value as String

// Get User Input (Rock, Paper or Scissor) make it case insensetive display undefined if user doesnt make a valid choice

let humanScore = 0;
let computerScore = 0;


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
        computerScore = computerScore + 1;
        result = alert("You lost");

    }
    else if (humanChoice == "rock" && computerChoice == "scissor") {
        humanScore = humanScore +1;
        result = alert("You Won");
    }
    else if (humanChoice == "paper" && computerChoice == "scissor") {
        computerScore = computerScore + 1;
        result = alert("You Lost");
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore = humanScore + 1;
        result = alert("You Won");
    }
    else if (humanChoice == "scissor" && computerChoice == "rock") {
        computerScore = computerScore + 1;
        result = alert("You Lost");
    }
    else if (humanChoice == "scissor" && computerChoice == "paper") {
        humanScore = humanScore + 1;
        result = alert("You Won");
    }
    else{
        result = alert("Tie")
    }
    return result;    
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playGame(){
    for(i=0;i<5;++i){
    playRound(humanSelection, computerSelection)
    }
    if(playRound == "You Won") {
        humanScore = humanScore +1;
        currentScore = alert(`Your Score: ${humanScore}. Computer Score: ${computerScore}.`);
    }
    else if(playRound == "You Lost"){
        computerScore = computerScore +1;
        currentScore = alert(`Your Score: ${humanScore}. Computer Score: ${computerScore}.`);
    }
    return currentScore
}






// let computer generate random number between 1-3
// Link "Rock", "Paper", "Scissor" to numbers 1-3
// Return value as String

// Get User Input (Rock, Paper or Scissor) make it case insensetive display undefined if user doesnt make a valid choice



function getComputerChoice(ComputerChoice) {

    ComputerChoice = Math.floor(Math.random() * 3) + 1;
    
    if(ComputerChoice == 1){
        ComputerChoice = "Rock";
    }
    else if(ComputerChoice == 2){
        ComputerChoice = "Paper";
    }
    else {
        ComputerChoice = "Scissor";
    }
    return ComputerChoice;
}

console.log(getComputerChoice());

function getHumanChoice(HumanChoice) {
     HumanChoice = prompt("Rock, Paper or Scissor?");
     HumanChoice = HumanChoice.toLowerCase();
    return HumanChoice;
}

console.log(getHumanChoice());




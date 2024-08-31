
// let computer generate random number between 1-3
// Link "Rock", "Paper", "Scissor" to numbers 1-3
// Return value as String
// Get User Input (Rock, Paper or Scissor) make it case insensetive display undefined if user doesnt make a valid choice

const playerChoices = document.getElementById("playerChoices");
const lifeseDisplay = document.getElementById("lifeseDisplay");
const playerLifes = document.getElementById("playerLifes");
const computerLifes = document.getElementById("computerLifes");
const buttonRock = document.getElementById("buttonRock");
const buttonPaper = document.getElementById("buttonPaper");
const buttonScissor = document.getElementById("buttonScissor");
const gameResult = document.getElementById("gameResult");

function getComputerChoice(){

    let randomNum = Math.floor(Math.random() * 3) + 1;
   
    return randomNum;
}

function getPlayerChoice(){

  
    let choiceValue;

    if(buttonRock){
        choiceValue = 1;
    }
    else if(buttonPaper){
        choiceValue = 2;

    }
    else{
        choiceValue = 3;
    }

    return choiceValue;
}


function playGame(player, computer){
    const playerLifes = 5;
    const computerLifes = 5;
    if(choiceValue === randomNum){
        
        console.log("YIts a Tie")
    }

    else if(choiceValue === 1 & randomNum === 2){
        playerLifes = Number(playerLifes) -= 1;
        console.log("You lost paper beats rock");
    }

    else if(choiceValue === 2 & randomNum === 3){
        playerLifes = Number(playerLifes) -= 1;
        console.log("You lost scissor beats paper");
    }

    else if(choiceValue === 3 & randomNum === 1){
        playerLifes = Number(playerLifes) -= 1;
        console.log("You lost rock beats scissor");

    }

    else if(choiceValue === 1 & randomNum === 3){
        computerLifes = Number(computerLifes) -= 1;
        console.log("You won rock beats scissor");
    }
    else if(choiceValue === 2 & randomNum === 1){
        computerLifes = Number(computerLifes) -= 1;
        console.log("You won paper beats rock");
    }
    else if(choiceValue === 3 & randomNum === 2){
        computerLifes = Number(computerLifes) -= 1;
        console.log("You won scissor beats paper")
    }

}

function playFiveRounds(){
    while(playerLifes >= 0 & computerLifes >= 0){
        playGame();

        if(playerLifes === 0){
           console.log("You lost all of your Lifes! GAMEOVER!") 
           break;
        }
        else if(computerLifes === 0){
            console.log("The computer has no lifes left! YOU WON!")
            break;
        }
    }

}


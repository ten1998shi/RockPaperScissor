
// let computer generate random number between 1-3
// Link "Rock", "Paper", "Scissor" to numbers 1-3
// Return value as String
// Get User Input (Rock, Paper or Scissor) make it case insensetive display undefined if user doesnt make a valid choice
const buttonRock = document.getElementById("buttonRock");
const buttonPaper = document.getElementById("buttonPaper");
const buttonScissor = document.getElementById("buttonScissor");
/*while(playerLifes >= 0 && computerLifes >= 0){

    if(playerLifes == 0){
        console.log("You dont have any lifes left. YOU LOST!")
        break;
    }
    else if(computerLifes == 0){
        console.log("YOU WON! the Computer has no lifes left.")
        break
    }

}*/
let playerLifes = 5;
let computerLifes = 5;
function checkGameOver() {
    if (playerLifes === 0) {
        document.getElementById("gameResult").innerHTML = "You don't have any lives left. YOU LOST!";
        return true;
    } else if (computerLifes === 0) {
        document.getElementById("gameResult").innerHTML ="YOU WON! The Computer has no lives left.";
        return true;
    }
    return false;
}


function playGame(){

    
        let choiceValue = 0;
           
    
        let randomNum = Math.floor(Math.random() * 3) + 1;
        choiceValue = 1;
        if(choiceValue === randomNum){
            document.getElementById("gameResult").innerHTML ="Its a Tie"
        }
    
        else if(choiceValue === 1 && randomNum === 2){
            playerLifes = playerLifes -= 1;
            document.getElementById("gameResult").innerHTML =`You lost paper beats rock. Your lifes: ${playerLifes} Computer lifes: ${computerLifes}`;
        }
    
        else if(choiceValue === 2 && randomNum === 3){
            playerLifes = playerLifes -= 1;
            document.getElementById("gameResult").innerHTML =`You lost scissor beats paper Your lifes: ${playerLifes} Computer lifes: ${computerLifes}`;
        }
    
        else if(choiceValue === 3 && randomNum === 1){
            playerLifes = playerLifes -= 1;
            document.getElementById("gameResult").innerHTML =`You lost rock beats scissor Your lifes: ${playerLifes} Computer lifes: ${computerLifes}`;
    
        }
    
        else if(choiceValue === 1 && randomNum === 3){
            computerLifes = computerLifes -= 1;
            document.getElementById("gameResult").innerHTML =`You won rock beats scissor Your lifes: ${playerLifes} Computer lifes: ${computerLifes}`;
        }
        else if(choiceValue === 2 && randomNum === 1){
            computerLifes = computerLifes -= 1;
            document.getElementById("gameResult").innerHTML =`You won paper beats rock Your lifes: ${playerLifes} Computer lifes: ${computerLifes}`;
        }
        else if(choiceValue === 3 && randomNum === 2){
            computerLifes = computerLifes -= 1;
            document.getElementById("gameResult").innerHTML =`You won scissor beats paper Your lifes: ${playerLifes} Computer lifes: ${computerLifes}`

        }
       
        if (checkGameOver()) {
            buttonRock.disabled = true;
            buttonPaper.disabled = true;
            buttonScissor.disabled = true;
    }
   

}


buttonRock.addEventListener('click', function(){

    playGame(1);

});

buttonPaper.addEventListener('click', function(){

    playGame(2);

});

buttonScissor.addEventListener('click', function(){

    playGame(3);

});




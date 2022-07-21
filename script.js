console.log("Hello");

function getComputerChoice() {
    let selector = Math.floor(Math.random()*3) + 1;
    //console.log(`Selector ${selector}`);
    if (selector === 1) {
        return "rock";
    } else if (selector === 2) {
        return "paper";
    }
    return "scissors";
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (((playerSelection === "rock") && (computerSelection === "paper")) || 
       ((playerSelection === "paper") && (computerSelection === "scissors")) ||
       ((playerSelection === "scissors") && (computerSelection === "rock"))) {
        return [0,3, `LOSS: You had ${playerSelection} and computer had ${computerSelection}.`];
    }
    else if (((playerSelection === "rock") && (computerSelection === "scissors")) || 
       ((playerSelection === "paper") && (computerSelection === "rock")) ||
       ((playerSelection === "scissors") && (computerSelection === "paper"))) {
        return [3,0,`WIN: You had ${playerSelection} and computer had ${computerSelection}.`];
    }
    
    return [1,1,`TIE: You had ${playerSelection} and computer had ${computerSelection}.`];

}

function game() {
    let playerSelection = '';
    let playerScore=0;
    let computerScore=0;
    let keepGoing = true;
    let i = 0;
    console.log(`Score-> Player ${playerScore} : Computer ${computerScore}`);

    while (keepGoing) {
        playerSelection = prompt("Choose [rock][paper][scissors]"); 
        if ((playerSelection.toLowerCase() === "rock") || (playerSelection.toLowerCase() === "paper") || (playerSelection.toLowerCase() === "scissors")) {
            result = playRound(playerSelection,getComputerChoice());
            playerScore+=Number(result[0]);
            computerScore+=Number(result[1]);
            console.log(result[2]);
            console.log(`Score-> Player ${playerScore} : Computer ${computerScore}`);
            i++;
            if (i >= 5) {
                keepGoing = false;
            }
        } else {
            console.log("Invalid selection.");
        }
        
    }

    console.log(`Final Score-> Player ${playerScore} : Computer ${computerScore}`);
}

game();
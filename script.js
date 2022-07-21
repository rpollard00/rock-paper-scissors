console.log("Hello");

function getComputerChoice() {
    let selector = Math.floor(Math.random()*3) + 1;
    console.log(`Selector ${selector}`);
    if (selector === 1) {
        return "rock";
    } else if (selector === 2) {
        return "paper";
    }
    return "scissors";
}

// scenarios
// rock paper l
// rock scissors w
// rock rock t
// paper paper t
// paper scissors l
// paper rock w
// scissors paper w
// scissors scissors t
// scissors rock l
function rpsRound(playerSelection, computerSelection) {
    if (((playerSelection === "rock") && (computerSelection === "paper")) || 
       ((playerSelection === "paper") && (computerSelection === "scissors")) ||
       ((playerSelection === "scissors") && (computerSelection === "rock"))) {
        console.log(`LOSS: You had ${playerSelection} and computer had ${computerSelection}.`);
    }
    else if (((playerSelection === "rock") && (computerSelection === "scissors")) || 
       ((playerSelection === "paper") && (computerSelection === "rock")) ||
       ((playerSelection === "scissors") && (computerSelection === "paper"))) {
        console.log(`WIN: You had ${playerSelection} and computer had ${computerSelection}.`);
    }
    else {
        console.log(`TIE: You had ${playerSelection} and computer had ${computerSelection}.`);
    }
}

rpsRound(getComputerChoice(), getComputerChoice());
rpsRound(getComputerChoice(), getComputerChoice());
rpsRound(getComputerChoice(), getComputerChoice());
rpsRound(getComputerChoice(), getComputerChoice());
rpsRound(getComputerChoice(), getComputerChoice());
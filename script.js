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
        return [0,3, `LOSS[0 pts]: You had ${playerSelection} and computer had ${computerSelection}.`];
    }
    else if (((playerSelection === "rock") && (computerSelection === "scissors")) || 
       ((playerSelection === "paper") && (computerSelection === "rock")) ||
       ((playerSelection === "scissors") && (computerSelection === "paper"))) {
        return [3,0,`WIN[3 pts]: You had ${playerSelection} and computer had ${computerSelection}.`];
    }
    
    return [1,1,`TIE[1 pt]: You had ${playerSelection} and computer had ${computerSelection}.`];

}

function controlClick(e) {
    const result = playRound(e.target.id, getComputerChoice());
    results.textContent = result[2];
    playerScoreTotal += parseInt(result[0]);
    computerScoreTotal += parseInt(result[1]);
    playerScore.textContent = String(playerScoreTotal);
    computerScore.textContent = String(computerScoreTotal);
    

    // Disable the controls
    if ((playerScoreTotal >= 20) || (computerScoreTotal >= 20)) {
        results.classList.add('winner');
        controls.forEach((control) => control.classList.add('gameover'));
        controls.forEach((control) => control.removeEventListener('click', controlClick));
    } 

    if ((playerScoreTotal === computerScoreTotal) && playerScoreTotal >= 20) {
        results.textContent += '\n' + '   Somehow, the result is a TIE...'
    }
    else if (playerScoreTotal >= 20) {
        results.textContent += "  YOU WIN!";
        playerScore.classList.add('winner');
    } else if (computerScoreTotal >= 20) {
        results.textContent += "  COMPUTER WINS :(";
        computerScore.classList.add('winner');
    }

    console.log(e.target.id);
}

const controls = document.querySelectorAll('.control');
const results = document.querySelector('#results');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const scores = document.querySelectorAll('.scoreval')

let playerScoreTotal = 0;
let computerScoreTotal = 0;
results.textContent = 'Click a button to play Rock, Paper, Scissors.\n Soccer scoring. First to 20 wins.'
playerScore.textContent = String(playerScoreTotal);
computerScore.textContent = String(computerScoreTotal); 



// runs a game cycle
controls.forEach((control) => control.addEventListener('click', controlClick));

// adds the styling on click
controls.forEach((control) => control.addEventListener('mousedown', () => {
    control.classList.add('select');
}));

controls.forEach((control) => control.addEventListener('mouseup', () => {
    control.classList.remove('select');
}));


// hover styling
controls.forEach((control) => control.addEventListener('mouseover', () => {
    control.classList.add('hover')
}));

controls.forEach((control) => control.addEventListener('mouseout', () => {
    control.classList.remove('hover')
}));


// scores.forEach((score) => score.addEventListener('change', (e) => {
//     console.log(e);
// }));






//game();
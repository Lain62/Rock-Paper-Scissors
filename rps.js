// 0 == rock, 1 == scissors, 2 == paper
function getPlayerChoice(chosen) {
    chosen = chosen.toLowerCase()
    if (chosen == "rock") {
        return 'rock';
}   else if (chosen == "scissors") {
        return 'scissors';
}   else if (chosen == "paper") {
        return 'paper';
}   else {
        // put a loss statement here
        return 'error on player choice';
}
};

function getComputerChoice() {
    let botChoice = Math.floor(Math.random() * 3);
    switch (botChoice) {
        case 0:
            return 'rock';
        case 1:
            return 'scissors';
        case 2:
            return 'paper'; 
        case 3:
            return "error on computer choice";
    }
};

function playRound(playerSelection, computerSelection){
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'win'
    } 
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'win'
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'win'
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'lose'
    }
    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'lose'
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'lose'}
    else {
        return 'draw'
    }

};

let playerPrompt = prompt("choose a fighter: rock, paper, scissors");

const playerSelection = getPlayerChoice(playerPrompt);
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection))

console.log(getComputerChoice())
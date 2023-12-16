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
    
};

let playerPrompt = prompt("choose a fighter: rock, paper, scissor");

const playerSelection = getPlayerChoice(playerPrompt);
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection))

console.log(getComputerChoice())
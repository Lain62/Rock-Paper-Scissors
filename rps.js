// 0 == rock, 1 == scissors, 2 == paper
let playerScore = 0
let computerScore = 0
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
        playerScore++;
        return 'win'
    } 
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        return 'win'
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore++;
        return 'win'
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore++;
        return 'lose'
    }
    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore++;
        return 'lose'
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore++;
        return 'lose'}
    else {
        return 'draw'
    };
};

function game() {
    for (let i = 1; i <= 5 ; i++){
        let playerPrompt = prompt("choose a fighter: rock, paper, scissors");
        const playerSelection = getPlayerChoice(playerPrompt);
        const computerSelection = getComputerChoice();
        console.log("You choose " + playerSelection + " bot choose " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log("The score is you: " + playerScore + " bot is " + computerScore)
    }
}

console.log(game())


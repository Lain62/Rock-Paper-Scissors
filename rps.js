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
        return 'unknown choice';
}

}

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
            return "this is impossible tbh";
    }
};

let playerChoice = prompt("choose a fighter: rock, paper, scissor");
console.log("you choose " + getPlayerChoice(playerChoice))
console.log("bot chooses " + getComputerChoice())
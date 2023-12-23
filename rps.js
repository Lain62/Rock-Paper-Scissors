// 0 == rock, 1 == scissors, 2 == paper
let playerScore = 0
let computerScore = 0
function getPlayerChoice(chosen) {
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
		return 'drew'
	};
};

let roundsPlayed = 0; 
let roundsMax = 5
function game(choice) {
	roundsPlayed += 1
	if (roundsPlayed <= roundsMax){
	const playerSelection = getPlayerChoice(choice);
	const computerSelection = getComputerChoice();
	console.log("You choose " + playerSelection + " bot choose " + computerSelection);
	console.log("you have " + playRound(playerSelection, computerSelection) + " this round!");
	console.log("The score is you: " + playerScore + " bot is " + computerScore)
	}
	if (roundsPlayed == roundsMax) {
		if (playerScore > computerScore) {
			console.log("You've won the game!")
		} else if ( playerScore < computerScore) {
			console.log("You've lost the game!")
		} else {
			console.log("You've drawn the game!")
		}
	}
	if (roundsPlayed > roundsMax){
		console.log("the game is over")
	}
}
const btnRock = document.querySelector('#rock')
const btnPaper = document.querySelector('#paper')
const btnScissors = document.querySelector('#scissors')

btnRock.addEventListener('click', () => {console.log(game("rock"))})
btnPaper.addEventListener('click', () => {console.log(game("paper"))})
btnScissors.addEventListener('click', () => {console.log(game("scissors"))})


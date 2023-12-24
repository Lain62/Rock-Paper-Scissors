// 0 == rock, 1 == scissors, 2 == paper
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

let playerScore = 0
let computerScore = 0
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


function game(choice) {
	roundsPlayed += 1
	if (roundsPlayed <= roundsMax){
		const playerSelection = getPlayerChoice(choice);
		const computerSelection = getComputerChoice();
		let textRoundResult = "You choose " + playerSelection.toUpperCase() + " and the bot choose " + computerSelection.toUpperCase()
		let textRoundResultCondition = "You've " + playRound(playerSelection, computerSelection)
		divResults.appendChild(roundResultCondition)
		roundResultCondition.innerText = textRoundResultCondition
		roundResult.innerText = textRoundResult
		const historyRounds = document.createElement('p') // shows history of all rounds result
		historyRounds.innerText = textRoundResult
		divHistory.appendChild(historyRounds)
		divResults.appendChild(roundResult)
		result.innerText = "The score is you: " + playerScore + " bot is " + computerScore; 
		divResults.appendChild(result)
	}
	let paragameResult = ""
	if (roundsPlayed == roundsMax) {
		if (playerScore > computerScore) {
			paragameResult =	"You've won the game!"
		} else if ( playerScore < computerScore) {
			paragameResult = "You've lost the game!"
		} else {
			paragameResult = "You've drawn the game!"
		}
		const historyRounds = document.createElement('h5') // shows history of all rounds result
		gameResult.innerText = paragameResult
		historyRounds.innerText = paragameResult
		divHistory.appendChild(historyRounds)
		divResults.appendChild(gameResult)
		gameOver.innerText ="the game is over!"
		divResults.appendChild(gameOver)
		btnReset.innerText ="Reset"
		divResults.appendChild(btnReset)
	}
}

function gameReset(){
	playerScore = 0
	computerScore = 0
	roundsPlayed = 0
	roundResult.remove()
	gameResult.remove()
	result.remove()
	gameOver.remove()
	btnReset.remove()	
	const historyRounds = document.createElement('h5') // shows history of all rounds result
	historyRounds.innerText = "Game Reset!"
	divHistory.appendChild(historyRounds)
}


let roundsPlayed = 0; 
let roundsMax = 5

const btnReset = document.createElement('button')
const roundResult = document.createElement('p') // shows what is the result of the current round
const roundResultCondition = document.createElement('h4') //shows if you win,drew,or lost the round
const result = document.createElement('p'); // shows all the current score
const gameResult = document.createElement('h2') // shows the result of all rounds
const gameOver = document.createElement('h3') // just shows the game is over

const btnRock = document.querySelector('#rock')
const btnPaper = document.querySelector('#paper')
const btnScissors = document.querySelector('#scissors')
const divResults = document.querySelector('.results')
const divHistory = document.querySelector('.history')

btnRock.addEventListener('click', () => {console.log(game("rock"))})
btnPaper.addEventListener('click', () => {console.log(game("paper"))})
btnScissors.addEventListener('click', () => {console.log(game("scissors"))})
btnReset.addEventListener('click', () => {gameReset()})

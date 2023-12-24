let playerScore = 0
let computerScore = 0
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

function getPlayerChoice(chosen) {
	if (chosen == "rock") {
		return 'rock';
	}   else if (chosen == "scissors") {
		return 'scissors';
	}   else if (chosen == "paper") {
		return 'paper';
	}   else {
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

function playRound(player,computer){
	if (player == 'rock' && computer == 'scissors') {
		playerScore++;
		return 'win'
	} 
	else if (player == 'scissors' && computer == 'paper') {
		playerScore++;
		return 'win'
	}
	else if (player == 'paper' && computer == 'rock') {
		playerScore++;
		return 'win'
	}
	else if (player == 'paper' && computer == 'scissors') {
		computerScore++;
		return 'lose'
	}
	else if (player == 'rock' && computer == 'paper') {
		computerScore++;
		return 'lose'
	}
	else if (player == 'scissors' && computer == 'rock') {
		computerScore++;
		return 'lose'}
	else {
		return 'drew'
	};
};


function game(choice) {
	let paragameResult = ""

	roundsPlayed += 1

	if (roundsPlayed <= roundsMax){

		const player = getPlayerChoice(choice);
		const computer = getComputerChoice();
		let textRoundResult = "You choose " + player.toUpperCase() + " and the bot choose " + computer.toUpperCase()
		let textRoundResultCondition = "You've " + playRound(player, computer)

		const historyRounds = document.createElement('p') // shows history of all rounds result

		roundResultCondition.innerText = textRoundResultCondition
		roundResult.innerText = textRoundResult
		result.innerText = "The score is you: " + playerScore + " bot is " + computerScore; 
		historyRounds.innerText = textRoundResult

		divHistory.appendChild(historyRounds)
		divResults.appendChild(roundResult)
		divResults.appendChild(roundResultCondition)
		divResults.appendChild(result)
	}

	if (roundsPlayed == roundsMax) {

		if (playerScore > computerScore) {
			paragameResult ="You've won the game!"
		} else if ( playerScore < computerScore) {
			paragameResult ="You've lost the game!"
		} else {
			paragameResult ="You've drawn the game!"
		}

		const historyRounds = document.createElement('h5') // shows history of all rounds result

		gameResult.innerText = paragameResult
		historyRounds.innerText = paragameResult
		gameOver.innerText ="the game is over!"
		btnReset.innerText ="Reset"

		divHistory.appendChild(historyRounds)
		divResults.appendChild(gameResult)
		divResults.appendChild(gameOver)
		divResults.appendChild(btnReset)
	}
}

function gameReset(){
	const historyRounds = document.createElement('h5') // shows history of all rounds result

	playerScore = 0
	computerScore = 0
	roundsPlayed = 0

	roundResult.remove()
	gameResult.remove()
	result.remove()
	gameOver.remove()
	btnReset.remove()	

	historyRounds.innerText = "Game Reset!"

	divHistory.appendChild(historyRounds)
}

btnRock.addEventListener('click', () => {console.log(game("rock"))})
btnPaper.addEventListener('click', () => {console.log(game("paper"))})
btnScissors.addEventListener('click', () => {console.log(game("scissors"))})
btnReset.addEventListener('click', () => {gameReset()})

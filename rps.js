let playerScore = 0
let computerScore = 0
let currentRound = 0; 
let roundsMaxPlayed = 5

const btnReset = document.createElement('button')
const fightStart = document.createElement('p') // shows what is the result of the current round
const fightEnd = document.createElement('h4') //shows if you win,drew,or lost the round
const scores = document.createElement('p'); // shows all the current score
const matchResult = document.createElement('h2') // shows the result of all rounds
const gameOver = document.createElement('h3') // just shows the game is over

const btnRock = document.querySelector('#rock')
const btnPaper = document.querySelector('#paper')
const btnScissors = document.querySelector('#scissors')
const divResults = document.querySelector('.results')
const divHistory = document.querySelector('.history')

function playerChoice(chosen) {
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

function computerChoice() {
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
	let paraGameResult = ""

	currentRound += 1

	if (currentRound <= roundsMaxPlayed){

		const player = playerChoice(choice);
		const computer = computerChoice();
		let paraFightStart = "You choose " + player.toUpperCase() + " and the bot choose " + computer.toUpperCase()
		let paraFightEnd = "You've " + playRound(player, computer)
		let paraHistoryTracker = paraFightStart + " | " + playerScore + ":" + computerScore

		const historyTracker = document.createElement('p') // shows history of all rounds result

		fightStart.innerText = paraFightStart
		fightEnd.innerText = paraFightEnd
		scores.innerText = "The score is you: " + playerScore + " bot is " + computerScore; 
		historyTracker.innerText = paraHistoryTracker

		divHistory.appendChild(historyTracker)
		divResults.appendChild(fightStart)
		divResults.appendChild(fightEnd)
		divResults.appendChild(scores)
	}

	if (currentRound == roundsMaxPlayed) {

		if (playerScore > computerScore) {
			paraGameResult ="You've won the game!"
		} else if ( playerScore < computerScore) {
			paraGameResult ="You've lost the game!"
		} else {
			paraGameResult ="You've drawn the game!"
		}

		const historyEndTracker = document.createElement('h5') // shows history of all rounds result

		matchResult.innerText = paraGameResult
		historyEndTracker.innerText = paraGameResult
		gameOver.innerText ="the game is over!"
		btnReset.innerText ="Reset"

		divHistory.appendChild(historyEndTracker)
		divResults.appendChild(matchResult)
		divResults.appendChild(gameOver)
		divResults.appendChild(btnReset)
	}
}

function gameReset(){
	const historyRounds = document.createElement('h5') // shows history of all rounds result

	playerScore = 0
	computerScore = 0
	currentRound = 0

	fightStart.remove()
	matchResult.remove()
	scores.remove()
	gameOver.remove()
	btnReset.remove()	

	historyRounds.innerText = "Game Reset!"

	divHistory.appendChild(historyRounds)
}

btnRock.addEventListener('click', () => {console.log(game("rock"))})
btnPaper.addEventListener('click', () => {console.log(game("paper"))})
btnScissors.addEventListener('click', () => {console.log(game("scissors"))})
btnReset.addEventListener('click', () => {gameReset()})

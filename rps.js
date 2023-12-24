// setup
let playerScore = 0
let computerScore = 0
let currentRound = 0; 
let roundsMaxPlayed = 5

const btnReset = document.createElement('button') // The reset buttons that shows in game over
const fightStart = document.createElement('p') // Shows what you and the bot picks for the current fight
const fightEnd = document.createElement('h4') // Shows text if you win/lose/draw the current fight
const scores = document.createElement('p'); // Shows the current scores of both players
const matchResult = document.createElement('h2') // shows the game over result if you win/lose/draw
const gameOver = document.createElement('h3') // Shows text Game over

const btnRock = document.querySelector('#rock')
const btnPaper = document.querySelector('#paper')
const btnScissors = document.querySelector('#scissors')
const divResults = document.querySelector('.results')
const divHistory = document.querySelector('.history')

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

function fight(player,computer){
	if (player == 'rock' && computer == 'scissors') {
		playerScore++;
		return 'win'
	} 	
	else if (player == 'rock' && computer == 'paper') {
		computerScore++;
		return 'lose'
	}
	else if (player == 'scissors' && computer == 'paper') {
		playerScore++;
		return 'win'
	}
	else if (player == 'scissors' && computer == 'rock') {
		computerScore++;
		return 'lose';
	}
	else if (player == 'paper' && computer == 'rock') {
		playerScore++;
		return 'win';
	}
	else if (player == 'paper' && computer == 'scissors') {
		computerScore++;
		return 'lose';
	}
	else {
		return 'drew'
	};
};

function game(choice) {
	let paraGameResult = ""

	currentRound += 1

	if (currentRound <= roundsMaxPlayed){
		const computer = computerChoice();
		let paraFightStart = `You choose ${choice.toUpperCase()} and the bot choose ${computer.toUpperCase()}`
		let paraFightEnd = `You've ${fight(choice, computer)}`
		let paraHistoryTracker = `${paraFightStart} | ${playerScore} : ${computerScore}`

		const historyTracker = document.createElement('p') // shows history of all rounds result

		fightStart.innerText = paraFightStart
		fightEnd.innerText = paraFightEnd
		scores.innerText = `The score is you: ${playerScore} bot is: ${computerScore}` 
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
	const historyRounds = document.createElement('h5') // shows history of all gameover result

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

btnRock.addEventListener('click', () => {game("rock")})
btnPaper.addEventListener('click', () => {game("paper")})
btnScissors.addEventListener('click', () => {game("scissors")})
btnReset.addEventListener('click', () => {gameReset()})

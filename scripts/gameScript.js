var randomNumber = Math.floor(Math.random()*100) + 1;

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var loOrHi = document.querySelector('.loOrHi');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

var guessCount = 1;
var resetButton;

function checkGuess(){
	var userGuess = Number(guessField.value);

	if (guessCount === 1){
		guesses.textContent = 'Previous guesses '  ;
	}
	guesses.textContent += '-> ' + userGuess + ' ';	



	if (userGuess === randomNumber ){
		lastResult.textContent = 'Congratulations!!! Ya Beauty, you got it Corect';
		lastResult.style.backgroundColor = 'green';
		loOrHi.textContent = '';
		setGameOver();
	}
	else if (guessCount === 10 ){
		lastResult.textContent = '!!! Game Over Dude!!!';
		setGameOver();
	}else {
		lastResult.textContent = 'Dude, You guessed wrong!!!';
		lastResult.style.backgroundColor = 'red';
		if(userGuess < randomNumber){
			loOrHi.textContent = 'Dude thats too low!!!';
		}
		else if(userGuess > randomNumber){
			loOrHi.textContent = 'Dude thats too high!!!';
		}
	}

	guessCount++;
	guessField.value='';
	guessField.focus();

	
}
guessSubmit.addEventListener('click',checkGuess);

function setGameOver(){
	guessField.disabled = true;
	guessSubmit.disabled = true;
	resetButton = document.createElement('button');
	resetButton.textContent = 'Start new game';
	document.body.appendChild(resetButton);
	resetButton.addEventListener('click',resetGame);
}

function resetGame() {
	guessCount = 1;

	var resetParas = document.querySelectorAll('.resultParas p');
	for(var i = 0; i <resetParas.length; i++){
		resetParas[i].textContent = '';
	}

	resetButton.parentNode.removeChild(resetButton);

	guessField.disabled = false;
	guessSubmit.disabled = false;
	guessField.value = '';
	guessField.focus();

	lastResult.style.backgroundColor = '#FFD4C9';

	randomNumber = Math.floor(Math.random()* 100) + 1;
}


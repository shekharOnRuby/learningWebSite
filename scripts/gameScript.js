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
		guesses.textContent = 'Previous guesses -> '  ;
	}
	if (guessCount !== 10 ){
		guesses.textContent += userGuess + '';	
	}
	else{
		guesses.textContent += userGuess + ' -> ';
	}
	

	if (userGuess === randomNumber){
		lastResult.textContent = 'Congratulations!!! Ya Beauty, you got it Corect';
		lastResult.style.backgroundColor = 'green';
		loOrHi.textContent = ' ';
		setGameOver();
	}
	else if (guessCount === 10 ){
		lastResult.textContent = '!!! Game Over Dude!!!';
		setGameOver();
	}
	else {
		lastResult.textContent = ' Dude, You guessed wrong!!!';
		lastResult.style.backgroundColor = 'red';
		if(userGuess < randomNumber){
			loOrHi.textContent = ' Dude thats too low!!!';
		}
		else if(userGuess > randomNumber){
			loOrHi.textContent = ' Dude thats too high!!!';
		}
	}

	guessCount++;
	guessField.value='';
	guessField.focus();

	guessSubmit.addEventListener('click',checkGuess);
}

function setGameOver(){
	alert ("in setGameOver");
}
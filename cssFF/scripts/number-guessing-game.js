
/*

    Generate a random number between 1 and 100.
    Record the turn number the player is on. Start it on 1.
    Provide the player with a way to guess what the number is.
    Once a guess has been submitted first record it somewhere so the user can see their previous guesses.
    Next, check whether it is the correct number.
    If it is correct:
        Display congratulations message.
        Stop the player from being able to enter more guesses (this would mess the game up).
        Display control allowing the player to restart the game.
    If it is wrong and the player has turns left:
        Tell the player they are wrong.
        Allow them to enter another guess.
        Increment the turn number by 1.
    If it is wrong and the player has no turns left:
        Tell the player it is game over.
        Stop the player from being able to enter more guesses (this would mess the game up).
        Display control allowing the player to restart the game.
    Once the game restarts, make sure the game logic and UI are completely reset, then go back to step 1.


*/


let randomTarget = Math.floor(Math.random() *100 + 1)
alert(randomTarget)
let turnNumber = 1;
let previousGuess = document.querySelector('.guesses');
let lowOrHi = document.querySelector('.lowOrHi')


let guessSubmit = document.querySelector('.guessSubmit')
let guessField = document.querySelector('.guessField')
let lastResult = document.querySelector('.lastResult')

let resetButton

guessSubmit.addEventListener('click',checkGuess)



function checkGuess(){
	let currentGuess = Number(guessField.value)

	if (turnNumber===1){
		previousGuess.textContent = 'Previous guesses: '
	}

	previousGuess.textContent += currentGuess

	if (currentGuess === randomTarget){
		lastResult.textContent = ' Congratulations! You got it right!'
		lastResult.style.backgroundColor = 'green'
		lowOrHi.textContent = ''
		setGameOver()
	}
	else if (turnNumber === 10){
		lastResult.textContent = '!!!Game Over!!!'
		lastResult.style.textTransform = 'uppercase'
		setGameOver()
	}
    else{
        if(currentGuess < randomTarget){
            lowOrHi.textContent = 'The guess is too low'
        }
        if (currentGuess > randomTarget){
            lowOrHi.textContent = ' The guess is too high'
        }
    }

    turnNumber++

}

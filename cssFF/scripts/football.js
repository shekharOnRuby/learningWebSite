var para = document.querySelector('p');


para.addEventListener('click', updateName);

function updateName(){
	var name = prompt('Enter a Name');
	para.textContent = 'Player 1: '+ name;
}
var myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';

/*document.querySelector('html').onclick = function(){
	alert("Would you like a Glass of Wine ???");
}*/

var myImage = document.querySelector('img');

myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/bronski.jpeg'){
		myImage.setAttribute('src','images/1hgk6p.jpg');
	}
	else {
		myImage.setAttribute('src','images/bronski.jpeg');
	}
}

var myButton = document.querySelector('button');

function setUserName(){
	var myName = prompt('Please enter your Name: ');
	localStorage.setItem('name','myName');
	myHeading.textContent = 'Mozilla is Cool, ' + myName;
}

myButton.onclick = function (){
	setUserName();
}
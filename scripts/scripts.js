var text = document.getElementById("text");
var html = document.getElementById("html");
var api = document.getElementById("api");
var google = document.getElementById("google");


// adding eventListeners
text.addEventListener("click",function(){request("https://s3.amazonaws.com/sitepoint-book-content/jsninja/hello.txt")},false);
html.addEventListener("click",function(){request("https://s3.amazonaws.com/sitepoint-book-content/jsninja/hello.htm")},false);
api.addEventListener("click",function(){request("http://ip.jsontest.com/")},false);
google.addEventListener("click",function(){request("https://www.googleapis.com/youtube/v3/channels?part=contentDetails&mine=true")},false);

//adding requestfuncion
function request(url){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if (xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 403)){
			document.getElementById("output").innerHTML = xhr.responseText;
		}


	}

	xhr.open("GET",url,true);
	xhr.send();
	document.getElementById("output").innerHTML = "Waiting for response ...";
}


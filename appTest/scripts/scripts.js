$(document).ready(function(){
    $("#submit").click(function(){
        alert("form submitted");
    });
    $("#trigger").click(function(){
        $(demo).html("Hello World");
    });
});
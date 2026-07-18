let username;
username = window.prompt("What is your name?");


document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("heading").textContent = "Hello " + username;
}
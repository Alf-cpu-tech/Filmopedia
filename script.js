//script.js
// taken from w3schoosl how to create a responisve nav bar
//https://www.w3schools.com/howto/howto_js_topnav_responsive.asp

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function setUp() {
  document.body.innerHTML = " ";
  var addDiv = document.createElement("div");
  addDiv.setAttribute("id", "message_div");
  document.body.appendChild(addDiv);
  document.body.style.backgroundColor = "black";
  document.body.style.color = "#39e43a";
  document.body.style.fontFamily = "Courier";
  follow();
}

var message =
  "Wake up Neo..... The Matrix has you.... Follow the white rabbit.... Knock, Knock, Neo.";
var messageArray = message.split("");
var loopTimer;

function follow() {
  if (messageArray.length > 0) {
    document.getElementById("message_div").innerHTML += messageArray.shift();
  } else {
    clearTimeout(loopTimer);
    return false;
  }
  loopTimer = setTimeout("follow()", 70);
}

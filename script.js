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
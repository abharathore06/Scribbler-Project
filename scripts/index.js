//Sign In Modal
var modal = document.getElementById("signinModal");
var btn = document.getElementById("si");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//Sign Up Modal
var modal1 = document.getElementById("signupModal");
var btn1 = document.getElementById("sup");
var span1 = document.getElementsByClassName("close1")[0];
var rd=document.getElementById("redirect");
btn1.onclick = function() {
  modal1.style.display = "block";
}

span1.onclick = function() {
  modal1.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}

rd.onclick=function() {
  modal.style.display = "none";
  modal1.style.display = "block";
}



//Create Modal
var modal2 = document.getElementById("createModal");
var btn2 = document.getElementById("createMod");
var span2 = document.getElementsByClassName("close2")[0];

btn2.onclick = function() {
  modal2.style.display = "block";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}


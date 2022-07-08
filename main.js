const myTimeout = setTimeout(myGreeting, 5000);

function myGreeting() {
  document.getElementById("mich").innerHTML = "Michael";
  document.getElementById("rainbow-box").style.backgroundImage = "url('portugal.png')";
}

var buttons = document.querySelectorAll('input[type="button"]');

function displayQuote() {
  document.getElementById("quote").innerHTML = "happy birthday shortcake";
}

function btnMinecraft() {
  var sound = document.getElementById("btnAudioClick");
  window.location.href = './selectworld.html';
  sound.play();
}

function Minecraft() {
  var sound = document.getElementById("btnAudioClick");
  window.location.href = './heart.html';
  sound.play();
}
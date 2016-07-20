var link = document.createElement("link");
link.href = "https://jenbennings.github.io/wololo/wololo.css";
link.type = "text/css";
link.rel = "stylesheet";
document.getElementsByTagName('head')[0].appendChild(link);

document.getElementsByTagName('body')[0].className+=' cursor';

var horn = document.createElement("audio");
horn.src = "https://jenbennings.github.io/wololo/horn.mp3";
horn.autoplay = true;

document.body.insertBefore(horn, document.body.firstChild);

var randomSound = function() {
  var soundUrl = ['https://jenbennings.github.io/wololo/ayoyoyo.mp3', 'https://jenbennings.github.io/wololo/wololo.mp3'];
  var random = soundUrl[Math.floor(Math.random()*soundUrl.length)];
  return random;
};

var playAudio = function() {
  this.removeEventListener('canplay', playAudio);
  this.currentTime = 0;
  this.play();
};

var audio;
var target;
var originalColor;
var originalBg;
var originalTarget;

var convert = function() {
  var audio = new Audio(randomSound());
  audio.pause;
  audio.loop = false;
  originalTarget = target;
  audio.addEventListener('canplay', playAudio);

  originalColor = originalTarget.style.color;
  originalBg = originalTarget.style.backgroundColor;
  originalTarget.style.color = 'white';
  if (originalBg == 'blue' || originalBg == '#ff0000' || originalBg = '#f00') {
    originalTarget.style.backgroundColor = 'red';
  } else {
    originalTarget.style.backgroundColor = 'blue';
  }
}

var _monkMode = function(evt) {
  event.preventDefault();
  target = event.target;
  convert();
}

document.body.addEventListener('click', _monkMode);

document.onkeydown = function(evt) {
  evt = evt || window.event;
  if (evt.keyCode == 27) {
    document.body.classList.remove("cursor");
    document.body.removeEventListener('click', _monkMode);
  }
};

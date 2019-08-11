var playing = false;
var hbSound = new Audio("https://ar-gift.github.io/assets/happy-birthday.mp3");

var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

function playSafari() {
  isSafari && hbSound.play();
}

//Detect end of audio
hbSound.addEventListener("ended", function() {
  hbSound.currentTime = 0;
  if (playing) {
    hbSound.play();
  }
});

AFRAME.registerComponent('markerhandler', {
  init: function() {
    // Set up the tick throttling. Will check if marker is active every 500ms
    this.tick = AFRAME.utils.throttleTick(this.tick, 500, this);
  },
  tick: function() {
    if (document.querySelector("#hb-marker").object3D.visible && !playing) {
      hbSound.play();
      playing = true;
    } else {
      playing = document.querySelector("#hb-marker").object3D.visible;
      if (!playing) {
        hbSound.pause();
        hbSound.currentTime = 0;
      };
    }
  }
});

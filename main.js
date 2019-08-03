var playing = false;
var hbSound = new Audio("/assets/happy-birthday.mp3");

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
    }
  }
});

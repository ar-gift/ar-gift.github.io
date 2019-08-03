AFRAME.registerComponent('trigger', {
  init: function() {
    setInterval(() => {
      this.el.emit('starFireworks', {
        position: new THREE.Vector3(
          -2 + Math.random() * 4,
          0
          -2 + Math.random() * 4
        ),
        rotation: new THREE.Vector3(-90, 0, 0)
      });
    }, 1000)
  }
});

var playing = false;
var hbSound = new Audio("./assets/happy-birthday.wav");

//Detect end of audio
hbSound.addEventListener("ended", function() {
  hbSound.currentTime = 0;
  playing = true;
});

AFRAME.registerComponent('markerhandler', {
  init: function() {
    // Set up the tick throttling. Will check if marker is active every 500ms
    this.tick = AFRAME.utils.throttleTick(this.tick, 500, this);
  },
  tick: function(t, dt) {

    if (document.querySelector("#hb-marker").object3D.visible && playing) {
      // MARKER IS PRESENT
      hbSound.play();
      playing = true;
    } else {
      playing = false;
    }

  }
});

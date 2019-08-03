AFRAME.registerComponent('trigger', {
  init: function() {
    setInterval(() => {
      // this.el.emit('starFireworks', {
      //   position: new THREE.Vector3(
      //     -2 + Math.random() * 4,
      //     0
      //     -2 + Math.random() * 4
      //   ),
      //   rotation: new THREE.Vector3(-90, 0, 0)
      // });
      console.log("asd");
    }, 1000)
  },
});

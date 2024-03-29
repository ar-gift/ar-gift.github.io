var debug = AFRAME.utils.debug;

var error = debug('aframe-text-component:error');

var fontLoader = new THREE.FontLoader();

AFRAME.registerComponent('text-geometry', {
    schema: {
      bevelEnabled: {default: false},
      bevelSize: {default: 8, min: 0},
      bevelThickness: {default: 12, min: 0},
      curveSegments: {default: 12, min: 0},
      font: {type: 'asset' },
      height: {default: 0.05, min: 0},
      size: {default: 0.5, min: 0},
      style: {default: 'normal', oneOf: ['normal', 'italics']},
      weight: {default: 'normal', oneOf: ['normal', 'bold']},
      value: {default: ''}
    },

    /**
     * Called when component is attached and when component data changes.
     * Generally modifies the entity based on the data.
     */
    init: function () {
      var el = this.el;
      el.setObject3D('mesh', new THREE.Mesh());
    },

    update: function () {
      var data = this.data;
      var el = this.el;

      var mesh = el.getObject3D('mesh');
      if (data.font.constructor === String) {
        // Load typeface.json font.
        fontLoader.load(data.font, function (font) {
          var textData = AFRAME.utils.clone(data);
          textData.font = font;
          mesh.geometry = new THREE.TextGeometry(data.value, textData);
        });
      } else if (data.font.constructor === Object) {
        // Set font if already have a typeface.json through setAttribute.
        mesh.geometry = new THREE.TextGeometry(data.value, data);
      } else {
        error('Must provide `font` (typeface.json) or `fontPath` (string) to text component.');
      }
    }
  });

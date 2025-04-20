var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Green Cube
var geometry1 = new THREE.BoxGeometry();
var material1 = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube1 = new THREE.Mesh(geometry1, material1);
scene.add(cube1);

// Blue Cube
var geometry2 = new THREE.BoxGeometry();
var material2 = new THREE.MeshBasicMaterial({ color: 0x0000ff });
var cube2 = new THREE.Mesh(geometry2, material2);

cube2.position.x = 2;
scene.add(cube2);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);

    cube1.rotation.x += 0.01;
    cube1.rotation.y += 0.01;

    cube2.rotation.x += 0.01;
    cube2.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();

function getScene() {
    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0x111111);
    return scene;
  }

  /**
  * Generate the camera to be used in the scene. Camera args:
  *   [0] field of view: identifies the portion of the scene
  *     visible at any time (in degrees)
  *   [1] aspect ratio: identifies the aspect ratio of the
  *     scene in width/height
  *   [2] near clipping plane: objects closer than the near
  *     clipping plane are culled from the scene
  *   [3] far clipping plane: objects farther than the far
  *     clipping plane are culled from the scene
  **/

  function getCamera() {
    var aspectRatio = window.innerWidth / window.innerHeight;
    var camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
    camera.position.set(0, 90, -10);
    return camera;
  }

  /**
  * Generate the light to be used in the scene. Light args:
  *   [0]: Hexadecimal color of the light
  *   [1]: Numeric value of the light's strength/intensity
  *   [2]: The distance from the light where the intensity is 0
  * @param {obj} scene: the current scene object
  **/

  function getLight(scene) {
    var light = new THREE.PointLight(0xffffff, 1, 0);
    light.position.set(20, 50, 20);
    scene.add(light);

    var ambientLight = new THREE.AmbientLight(0x111111);
    scene.add(ambientLight);
    return light;
  }

  /**
  * Generate the renderer to be used in the scene
  **/

  function getRenderer() {
    // Create the canvas with a renderer
    var renderer = new THREE.WebGLRenderer({antialias: true});
    // Add support for retina displays
    renderer.setPixelRatio(window.devicePixelRatio);
    // Specify the size of the canvas
    renderer.setSize(window.innerWidth, window.innerHeight);
    // Add the canvas to the DOM
    document.body.appendChild(renderer.domElement);
    return renderer;
  }

  /**
  * Generate the controls to be used in the scene
  * @param {obj} camera: the three.js camera for the scene
  * @param {obj} renderer: the three.js renderer for the scene
  **/

  function getControls(camera, renderer) {
    var controls = new THREE.TrackballControls(camera, renderer.domElement);
    controls.zoomSpeed = 0.4;
    controls.panSpeed = 0.4;
    return controls;
  }

  /**
  * Load Skull model
  **/

  function loadModel() {
    var loader = new THREE.OBJLoader();
    loader.load( 'Skull.obj', function ( object ) {
      object.rotation.z = Math.PI;
      scene.add( object );
      document.querySelector('h1').style.display = 'none';
    } );
  }

  /**
  * Render!
  **/

  function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
    controls.update();
  };

  var scene = getScene();
  var camera = getCamera();
  var light = getLight(scene);
  var renderer = getRenderer();
  var controls = getControls(camera, renderer);

  loadModel()

  render();


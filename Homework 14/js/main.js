var scene = getScene();
var camera = getCamera();
var light = getLight(scene);
var renderer = getRenderer();

// === OBJECTS ===

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

// Model
var skull; 
function loadModel() {
  var loader = new THREE.OBJLoader();
  loader.load('Skull.obj', function (object) {
    skull = object; 
    skull.position.y = -20; 
    scene.add(skull);
  });
}

function render() {
  requestAnimationFrame(render);

  cube1.rotation.x += 0.01;
  cube1.rotation.y += 0.01;

  cube2.rotation.x += 0.01;
  cube2.rotation.y += 0.01;

  if (skull) {
    skull.rotation.x += 0.01;
    skull.rotation.y += 0.01;
  }

  renderer.render(scene, camera);
}

render();

function getScene() {
  var scene = new THREE.Scene();
  scene.background = new THREE.Color(0x111111);
  return scene;
}

function getCamera() {
  var aspectRatio = window.innerWidth / window.innerHeight;
  var camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
  camera.position.set(0, 2, 10);
  return camera;
}

function getLight(scene) {
  var light = new THREE.PointLight(0xffffff, 1, 0);
  light.position.set(20, 50, 20);
  scene.add(light);

  var ambientLight = new THREE.AmbientLight(0x333333);
  scene.add(ambientLight);
  return light;
}

function getRenderer() {
  var renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  return renderer;
}

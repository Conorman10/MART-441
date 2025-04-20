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


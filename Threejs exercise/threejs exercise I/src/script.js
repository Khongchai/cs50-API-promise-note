import * as THREE from "three";
import { sizes } from "./static/sizes";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { initArray } from "./objects/meshArray";
import { enableTestEnv } from "./testing/enableTestEnv";

const scene = new THREE.Scene();
const meshArray = initArray(1000);

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;

const canvas = document.querySelector("canvas.webgl");
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});
renderer.setSize(sizes.width, sizes.height);

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

const testObjects = enableTestEnv();
addAllToScene();
tick();

//////////////////////////////////////////////////
function tick() {
  renderer.render(scene, camera);

  //requires because controls.enableDamping
  controls.update();

  requestAnimationFrame(tick);
}

function addAllToScene() {
  meshArray.forEach((mesh) => {
    scene.add(mesh);
  });
  scene.add(camera);
  if (testObjects.length > 0) {
    for (let i = 0, length = testObjects.length; i < length; i++) {
      scene.add(testObjects[i]);
    }
  }
}

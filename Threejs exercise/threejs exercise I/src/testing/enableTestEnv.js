import * as THREE from "three";
import * as dat from "dat.gui";

export function enableTestEnv(...objectsForTesting) {
  const gui = new dat.GUI();

  const axesHelper = new THREE.AxesHelper(5);
  return [axesHelper];
}

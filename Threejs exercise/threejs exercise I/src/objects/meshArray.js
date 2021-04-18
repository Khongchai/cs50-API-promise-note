import * as THREE from "three";

export function initArray(arraySize) {
  const meshArray = [];
  for (let i = 0; i < arraySize; i++) {
    const geometry = new THREE.SphereGeometry(1, 20, 30);
    const material = new THREE.MeshNormalMaterial();
    const newBall = new THREE.Mesh(geometry, material);
    const arbitraryThreshold = 300;

    newBall.position.set(
      Math.floor(Math.random() * arbitraryThreshold - 100),
      Math.floor(Math.random() * arbitraryThreshold - 100),
      Math.floor(Math.random() * arbitraryThreshold - 140)
    );
    meshArray.push(newBall);
  }
  return meshArray;
}

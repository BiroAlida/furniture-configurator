/* *************************************************
Create & return the Cube object:
cube.js
    ↓
Create a cube
    ↓
return cube
************************************************* */
import * as THREE from 'three';

export function createCube() {

    const geometry = new THREE.BoxGeometry();

    const material = new THREE.MeshStandardMaterial({
        color: 0xffffff
    });

    const cube = new THREE.Mesh(
        geometry,
        material
    );

    cube.position.y = 0.5;
    cube.castShadow = true; //A kocka árnyékot dobhat.

    return cube;
}
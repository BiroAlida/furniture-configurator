/* *************************************************
Create & return the Light object:
light.js
    ↓
Create the light
    ↓
return light
************************************************* */
import * as THREE from 'three';

export function createLight() {

    const light = new THREE.DirectionalLight(
        0xffffff,
        3
    );

    light.position.set(3, 3, 3);
    light.castShadow = true; //Ez a fény árnyékot képes létrehozni.

    return light;
}
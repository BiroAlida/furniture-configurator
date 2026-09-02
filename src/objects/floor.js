/* *************************************************
A floor.js feladata nem az, hogy hozzáadja a padlót a scene-hez.
Csak elkészíti a padló objektumot és visszaadja.
floor.js
    ↓
Létrehoz egy padlót
    ↓
return floor
************************************************* */
import * as THREE from 'three';

export function createFloor() {

    const floorGeometry = new THREE.PlaneGeometry(10, 10);

    const floorMaterial = new THREE.MeshStandardMaterial({
        color: 0x888888
    });

    const floor = new THREE.Mesh(
        floorGeometry,
        floorMaterial
    );

    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true; //A padlónak fogadnia kell az árnyékot (Ide rávetülhet más objektum (kocka) árnyéka)

    return floor;
}
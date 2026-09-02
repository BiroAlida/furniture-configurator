import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { createFloor } from './objects/floor.js';
import { createCube } from './objects/cube.js';
import { createLight } from './objects/light.js';
import { loadFurniture } from './loaders/loadFurniture.js';
import { logMeshes, debugColorizeMeshes } from './utils/debugUtils.js';
import { setWoodColor, setWoodTexture } from './utils/furnitureUtils.js';
import { woodTextures } from './materials/woodTextures.js';
import { createFurnitureController } from './controllers/furnitureController.js';

// Scene
const scene = new THREE.Scene();

scene.background = new THREE.Color(0x222222);


// Camera
const camera = new THREE.PerspectiveCamera(
    25,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

//camera.position.z = 5; Kamera indulo poziciojanak beallitasa
camera.position.set(3, 2, 5); // "termékfotó" nézet: X = 3 → kicsit jobbról nézzük; Y = 2 → kicsit felülről; Z = 5 → távolság

// Renderer
const renderer = new THREE.WebGLRenderer({
    antialias: true
});

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

renderer.shadowMap.enabled = true; // árnyék-rendszert bekapcsolasa

document.body.appendChild(renderer.domElement);

// Az eger huzasaval lehet forgatni a kockat & zoom-in/out-olni 
const controls = new OrbitControls(
    camera,
    renderer.domElement
);

//controls.target.set(0, 0, 0); //A kamera forgási középpontja legyen az origó.
//controls.update(); //módosítottuk a kamera és a target állapotát, ezert kell az update()


// Add cube to the scene
// const cube = createCube();
// scene.add(cube);
//controls.target.copy(cube.position); //A kamera forgási középpontja legyen a kocka pozicioja.

// Load the 3D .GLB furniture model (table)
const furniture = await loadFurniture();

scene.add(furniture);
const furnitureController = createFurnitureController(furniture);

controls.target.copy(furniture.position);
controls.update();

// Load the selected color for the table
const woodColorPicker = document.getElementById("wood-color");
woodColorPicker.addEventListener("input", (event) => {
  setWoodColor(furnitureController, event.target.value);
});

// Load the selected texture for the table
const textureLoader = new THREE.TextureLoader();
const woodTexturePicker = document.getElementById("wood-finish");

woodTexturePicker.addEventListener("change", (event) => {

    if (event.target.value === "original") {

        setWoodTexture(furnitureController, furnitureController.originalWoodTexture);
        return;
    }

    setWoodTexture(
        furnitureController,
        woodTextures[event.target.value]
    );

});

// Add floor to the scene
const floor = createFloor();
scene.add(floor);


// Add light to the scene
const light = createLight();
scene.add(light);


// Animation loop
function animate() {

    requestAnimationFrame(animate);

    controls.update();

    // cube.rotation.x += 0.01; // Kocka automatikus forgasa
    // cube.rotation.y += 0.01;

    renderer.render(
        scene,
        camera
    );

}

animate();

window.addEventListener("resize", () => {

    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

});
import * as THREE from "three";

const textureLoader = new THREE.TextureLoader();

export const woodTextures = { // Loading the different textures from public/textures/wood, the glb's original texture is not included here

    pine: textureLoader.load("/textures/wood/pine.jpg"),

    oak: textureLoader.load("/textures/wood/oak.jpg"),

    strand_board: textureLoader.load("/textures/wood/strand_board.jpg")

};
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const loader = new GLTFLoader();

export async function loadFurniture() {
    const loader = new GLTFLoader();
    
    const gltf = await new Promise((resolve, reject) => {

        loader.load(
            '/models/desk/source/desk_korund_1400_900.glb',

            (loadedModel) => resolve(loadedModel),

            undefined,

            (error) => reject(error)
        );

    });

    return gltf.scene;
}
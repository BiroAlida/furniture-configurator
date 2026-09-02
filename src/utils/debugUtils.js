// Output in console the Mesh's name and material object
export function logMeshes(furniture) {

    // furniture.traverse((child) => {

    //     if (child.isMesh) {
    //         console.log(child.name, child.material);
    //     }

    // });

    furniture.traverse((child) => {

        if (child.isMesh && child.material.name === "wood") {
            console.log(child.material);
        }

    });

}

/* Add diferent color to each Mesh of the GLB Object so that you know how the designer estabilished the components:
ex: For a table: * the Table panel becames red cause thats one Mesh
                 * the 4 legs of the table becomes green cause thats another Mesh
                 * the 2 short sidepanels become blue -> 3rd Mesh
                 * the 2 long sidepanels become yellow -> 4th Mesh
                 * ...etc. -----> depends on how the designer estabilished the Meshes
*/
export function debugColorizeMeshes(furniture) {
    const colors = [
        0xff0000, // piros
        0x00ff00, // zold
        0x0000ff, // kek
        0xffff00, // sarga
        0xff00ff, // lila
        0x00ffff, // cian
        0xff8800, // narancs
        0x888888,
        0xffffff,
        0xff66aa,
        0x66ff66,
        0x6666ff
];

    let index = 0;

    furniture.traverse((child) => {

        if (child.isMesh) {

            child.material = child.material.clone();

            child.material.color.setHex(colors[index]);

            index++;

        }

    });
}
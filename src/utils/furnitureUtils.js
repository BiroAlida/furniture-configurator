// export function setWoodColor(furniture, color) {
    
//     furniture.traverse((child) => {

//         if (!child.isMesh) return;

//             if (child.material.name === "wood") {

//                 child.material.color.set(color);

//             }

//         });
// }

export function setWoodColor(controller, color) {

    controller.woodMeshes.forEach((mesh) => {

        mesh.material.color.set(color);

    });
    
}

// export function setWoodTexture(furniture, texture) {

//     furniture.traverse((child) => {

//         if (!child.isMesh) return;

//         if (child.material.name === "wood") {

//             child.material.map = texture;
//             child.material.needsUpdate = true;

//         }

//     });

// }

export function setWoodTexture(controller, texture) {

    controller.woodMeshes.forEach((mesh) => {

        mesh.material.map = texture;

        mesh.material.needsUpdate = true;

    });

}
/* ***************************************************************
******************************************************************

After loading the furniture, we traverse the model only once, 
and then we store the importants parts like so:

Furniture

│

├── woodMeshes

│      Cube002
│      Cube003
│      Cube004
│      ...

│

├── metalMeshes

│      Nut
│      Cylinder001
│      ...

│

└── originalWoodTexture

******************************************************************
****************************************************************** */

export function createFurnitureController(furniture) {

    const controller = {

        furniture,

        woodMeshes: [],

        metalMeshes: [],

        originalWoodTexture: null

    };

    furniture.traverse((child) => {

        if (!child.isMesh) return;

        switch (child.material.name) {

            case "wood":

                controller.woodMeshes.push(child);

                if (!controller.originalWoodTexture) {

                    controller.originalWoodTexture =
                        child.material.map;

                }

                break;

            case "metall":

                controller.metalMeshes.push(child);

                break;

        }

    });

    return controller;

}
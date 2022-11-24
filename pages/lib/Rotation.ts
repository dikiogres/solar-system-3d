import * as THREE from "three";

export default class Rotation {

    planetMesh: any;
    planetPositionX: any;
    position: any;
    y: number;
    z: number;
    showRotation: boolean;

    constructor(planetMesh: any, showRotation = false) {
        this.planetPositionX = planetMesh.position.x;
        this.y = 0.25;
        this.z = 0.25;
        this.showRotation = showRotation;
      }
}


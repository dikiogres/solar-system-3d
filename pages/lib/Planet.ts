import * as THREE from "three";

interface Props { 
    radius: any;
    positionX: any;
    textureFile: any;
}

export default class Planet {
    radius: Props;
    positionX: Props;
    textureFile: Props;

    constructor(radius:Props, positionX:Props, textureFile:Props) {
        this.radius = radius;
        this.positionX = positionX;
        this.textureFile = textureFile;
    }
}


import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from "three/examples/jsm/libs/stats.module";

export default class SceneInit {
    
    fov: number;
    camera:any = new THREE.PerspectiveCamera;
    scene:any = new THREE.Scene;
    stats: number;
    controls: string;
    renderer:any = new THREE.WebGLRenderer;


    constructor(fov = 36, camera:any, scene:any, stats:number, controls:string, renderer:any) {
        this.fov = fov;
        this.scene = scene;
        this.stats = stats;
        this.camera = camera;
        this.controls = controls;
        this.renderer = renderer;
    }

    initScene() {
        this.camera = new THREE.PerspectiveCamera(
            this.fov,
            window.innerWidth / window.innerHeight,
            1,
            1000
        );
        this.camera.position.z = 128;
        this.scene = new THREE.Scene();
    }

    
}

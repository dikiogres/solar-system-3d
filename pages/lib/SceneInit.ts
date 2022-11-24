import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from "three/examples/jsm/libs/stats.module";

export default class SceneInit {
    
    fov: number;
    camera = new THREE.PerspectiveCamera;
    scene = new THREE.Scene;
    stats: number;
    controls: string;
    renderer = new THREE.WebGLRenderer;


    constructor(fov = 36, camera:any, scene:any, stats:number, controls:string, renderer:any) {
        this.fov = fov;
        this.scene = scene;
        this.stats = stats;
        this.camera = camera;
        this.controls = controls;
        this.renderer = renderer;
      }
}

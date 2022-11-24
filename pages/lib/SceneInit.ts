import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from "three/examples/jsm/libs/stats.module";

export default class SceneInit {
    
    public fov: number;
    public camera:any = new THREE.PerspectiveCamera;
    public scene:any = new THREE.Scene;
    public stats: number;
    public controls: string;
    public renderer:any = new THREE.WebGLRenderer;


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

        // const spaceTexture:any = new THREE.TextureLoader().load("space2.jpeg");
        // this.scene.background = spaceTexture;

        // specify a canvas which is already created in the HTML file and tagged by an id
        // aliasing enabled
        this.renderer = new THREE.WebGLRenderer({
            canvas: document.getElementById("myThreeJsCanvas") as HTMLInputElement,
            antialias: true,
        });
    
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
    }

}

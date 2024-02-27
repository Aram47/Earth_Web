import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Stats from 'three/examples/jsm/libs/stats.module';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const scene = new THREE.Scene();
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

axesHelper.setColors(0, 0, 0);

var light = new THREE.SpotLight();
light.position.set(5, 5, 5);
scene.add(light);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.setZ(2);
camera.position.setX(0);
camera.position.setY(1);

const renderer = new THREE.WebGLRenderer();
renderer.physicallyCorrectLights = true;
renderer.shadowMap.enabled = true;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
const loader = new GLTFLoader();

loader.load('./earth/scene.gltf',
    function (gltf) {
        gltf.scene.traverse(function (child) {
            if ((child).isMesh) {
                child.material.color.set(0xf7f1f0);
                child.material.color.r = child.material.color.r * 40;
                child.material.color.g = child.material.color.g * 40;
                child.material.color.b = child.material.color.b * 40;
                let m = child;
                m.receiveShadow = true;
                m.castShadow = true;
            }
            if ((child).isLight) {
                let l = child;
                l.castShadow = true;
                l.shadow.bias = -0.3;
                l.shadow.mapSize.width = 2048;
                l.shadow.mapSize.height = 2048;
            }
        });
        scene.add(gltf.scene);
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    (error) => {
        console.log(error);
    }
);

window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
}

const stats = Stats();
document.body.appendChild(stats.dom);

function animate() {
    requestAnimationFrame(animate);
    scene.traverse(function (object) {
        if (object.isMesh) {
            object.rotation.y += 0.001; // Adjust rotation speed here
        }
    });
    controls.update();
    render();
    stats.update();
}

function render() {
    renderer.render(scene, camera);
}

animate();




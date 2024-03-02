import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import useStyles from './style';

function GlobeComponent() {
  const classes = useStyles(); 
  const mountRef = useRef<HTMLDivElement>(null); 

  useEffect(() => {
    const scene = new THREE.Scene();

    const light = new THREE.SpotLight();
    light.position.set(5, 5, 5);
    scene.add(light);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.setZ(2);
    camera.position.setX(0.25);
    camera.position.setY(1);

    const renderer = new THREE.WebGLRenderer();
    renderer.shadowMap.enabled = true;
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current) mountRef.current.appendChild(renderer.domElement); // Use the ref to append the renderer

    const controls = new OrbitControls(camera, renderer.domElement);
    const loader = new GLTFLoader();

    loader.load('/models/earth_model/scene.gltf',
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
        // gltf.scene.position.x += 0.5;
        scene.add(gltf.scene);
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    (error) => {
        console.log(error);
    }
    );

    // const stats = Stats();
    // mountRef.current.appendChild(stats.dom); // Append stats to the mount point

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener('resize', onWindowResize, false);

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      scene.traverse(function (object) {
        if (object.isMesh) {
            object.rotation.y += 0.001; // Adjust rotation speed here
        }
    });
      controls.update();
      // stats.update();
      renderer.render(scene, camera);
    }
    animate();

    // Cleanup
    return () => {
      if (mountRef.current) mountRef.current.removeChild(renderer.domElement); 
      window.removeEventListener('resize', onWindowResize);
    };
  }, []); 

  return <div ref={mountRef} className={classes.globeContainer} />; 
}

export default GlobeComponent;

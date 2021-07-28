import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import "../../../css/customTheme.css";
 
function OssCanvas() {
    const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' && window.innerWidth);
    const [screenHeight, setScreenHeight] = useState(typeof window !== 'undefined' && window.innerWidth);

    const canvasRef = useRef(null);

    let canvasHeight, canvasWidth;
    let camera, scene, renderer, material, mesh;
    
    useEffect(() => {
        window.addEventListener('resize', onWindowResize, false);
        
        let controls;
        
        if (screenWidth > 800) {
            canvasHeight = 500;
            canvasWidth = screenWidth/2;
        } else {
            canvasHeight = 500
            canvasWidth = screenWidth;
        }

        function onWindowResize(event) {
            setScreenHeight(window.innerHeight);
            setScreenWidth(window.innerWidth);
            renderer.setSize(canvasWidth, canvasHeight);
        }
      
        function init(width, height) {

            const ctx = canvasRef.current;
            renderer = new THREE.WebGLRenderer({canvas: ctx});

            camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100);
            
            controls = new OrbitControls( camera, renderer.domElement );
            controls.enableZoom = false;

            const radius = window.innerWidth > 768 ? 7 : 5;  
            const detail = 8; 
            const geometry = new THREE.IcosahedronGeometry(radius, detail);
            camera.position.z = 2;
            
            controls.update();
            
            scene = new THREE.Scene();
            renderer.setSize(canvasWidth, canvasHeight);
            
            scene.background = new THREE.Color(0xfff8f6);
            
            material = new THREE.MeshBasicMaterial({color: 0x615D5D, wireframe: true});
            
            mesh = new THREE.Mesh(geometry, material);

            scene.add(mesh);
            mesh.position.set(3, 0, -9.5);

            controls.target.copy(mesh.position)
            
            controls.update();
            

            renderer.setPixelRatio(window.devicePixelRatio);
            onWindowResize();
        }
      
        function animate() {
            requestAnimationFrame(animate);

            mesh.rotation.x += 0.001;
            mesh.rotation.y += 0.001;
            mesh.rotation.z += 0.001;

            controls.update();
            
            renderer.render(scene, camera);
        }
      
        init(canvasWidth, canvasHeight);
        animate();

        return () => {
            renderer.dispose();
        }
    }, []);

    return (
        <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} className="ossCanvas"></canvas>
    );
}

export default OssCanvas;

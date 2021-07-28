import React, { useState, useRef, useEffect } from "react";
import * as THREE from "three";
import gsap from "gsap"
import "../../../css/customTheme.css";
import vertex from '!!raw-loader!../../../shaders/vertex.vert';
import fragment from '!!raw-loader!../../../shaders/fragment.frag';
 
function HeroCanvas() {
    const canvasRef = useRef(null);

    let canvasHeight, canvasWidth, screenWidth, screenHeight;

    useEffect(() => {

      screenWidth = window.innerWidth;
      screenHeight = window.innerHeight;

      let mouse = {x: 0.0, y: 0.0};
      let fragMouse = {x: 0.0, y: 0.0};

      let camera, mesh, scene, renderer, material, obliqueMaterial, obliqueMesh;//, uniforms;

      window.addEventListener('resize', onWindowResize, false);
  
      if (screenWidth > 800) {
        canvasHeight = screenHeight;
        canvasWidth = screenWidth / 2;
      } else {
        canvasHeight = screenHeight / 2;
        canvasWidth = screenWidth;
      }

      canvasRef.current.width = canvasWidth;
      canvasRef.current.height = canvasHeight;

      canvasRef.current.addEventListener("mousemove", function (event) {
      
        let ctx = {
          x: (event.clientX),
          y: (event.clientY)
        };

        const canvasOffset = {
          left: canvasRef.current.getBoundingClientRect().x,
          top: canvasRef.current.getBoundingClientRect().y
        };

        ctx.x = ((ctx.x - canvasOffset.left) / canvasWidth);
        ctx.y = ((ctx.y - canvasOffset.top) / canvasHeight);
      
        gsap.to(mouse, 2, {
          x: ctx.x * (canvasWidth / canvasHeight) - (canvasWidth / canvasHeight) / 2,
          y: (1.0 - ctx.y) - 0.5,
          onUpdate: ()=>{
            material.uniforms.u_mouse.value.x = mouse.x;
            material.uniforms.u_mouse.value.y = mouse.y;
          }
        });
        
        gsap.to(fragMouse, 2, {
          x: ctx.x,
          y: (1.0 - ctx.y),
          onUpdate: ()=>{
            material.uniforms.u_fragMouse.value.x = fragMouse.x;
            material.uniforms.u_fragMouse.value.y = fragMouse.y;
          }
        });
      });
  
      init(canvasWidth, canvasHeight);
      animate();
  
      function init(width, height) {
        const ctx = canvasRef.current;
        
        renderer = new THREE.WebGLRenderer({canvas: ctx});
        renderer.autoClearColor = false;
  
        camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);

        var geometry = new THREE.PlaneBufferGeometry(width / height, 1, 3, 3);
        
        const radius = 3.5;  
        const detail = 8; 
        var obliqueGeometry = new THREE.IcosahedronGeometry(radius, detail);

        geometry.scale(100.0, 100.0, 1.0);

        scene = new THREE.Scene();
        renderer.setSize(canvasWidth, canvasHeight);
  
        let uniforms = {
          u_time: {
              type: "f",
              value: 1.0
          },
          u_resolution: {
              type: "v2",
              value: new THREE.Vector2()
          },
          u_mouse: {
              type: "v2",
              value: new THREE.Vector2()
          },
          u_fragMouse: {
              type: "v2",
              value: new THREE.Vector2()
          },
        };
  
        scene.background = new THREE.Color('red');
  
        camera.position.z = 5;

        material = new THREE.ShaderMaterial({
          uniforms: uniforms,
          vertexShader: vertex, // vertexShader,
          fragmentShader: fragment, // fragmentShader,
          // wireframe: true,
          side: THREE.DoubleSide
        });
  
        obliqueMaterial = new THREE.MeshBasicMaterial({color: 0x1E2123, wireframe: true});
        
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(0, 0, -20.0);
        scene.add(mesh);
        
        obliqueMesh = new THREE.Mesh(obliqueGeometry, obliqueMaterial)
        obliqueMesh.position.set(0, 0, -9.5);
        scene.add(obliqueMesh);

        renderer.setPixelRatio(window.devicePixelRatio);
        onWindowResize();
      }
  
      function onWindowResize(event) {
        screenHeight = window.innerHeight;
        screenWidth = window.innerWidth;

        renderer.setSize(canvasWidth, canvasHeight);
        material.uniforms.u_resolution.value.x = renderer.domElement.width;
        material.uniforms.u_resolution.value.y = renderer.domElement.height;
      }
  
      function animate() {
        requestAnimationFrame(animate);
        obliqueMesh.rotation.x+=0.005;
        obliqueMesh.rotation.y+=0.005;
        material.uniforms.u_time.value += 0.05;
        renderer.render(scene, camera);
      }

      return ()=>{
        renderer.dispose();
      }
    }, []);

    return (
      <canvas ref={canvasRef} className="homeCanvas"></canvas>
    );
}

export default HeroCanvas;

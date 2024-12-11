// import React, { useEffect, useState } from 'react';
// import * as THREE from 'three';

// const SpheresBackground = () => {
//   const [textureLoader] = useState(new THREE.TextureLoader());
//   const [textures, setTextures] = useState([]);

//   useEffect(() => {
//     // Load your textures
//     //https://i.postimg.cc/rmXVSGYS/pika2.png
//     const texture1 = textureLoader.load('https://i.postimg.cc/rmXVSGYS/pika2.png');
//     const texture2 = textureLoader.load('https://i.postimg.cc/rmXVSGYS/pika2.png');
//     const texture3 = textureLoader.load('https://i.postimg.cc/rmXVSGYS/pika2.png');
//     setTextures([texture1, texture2, texture3]);

//     // Set up the scene, camera, and renderer
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ alpha: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.domElement.style.position = 'fixed';
//     renderer.domElement.style.top = '0';
//     renderer.domElement.style.left = '0';
//     renderer.domElement.style.zIndex = '-1'; // Ensures it stays behind the content
//     document.body.appendChild(renderer.domElement);

//     // Create spheres and spread them evenly across the background
//     const spheres = [];
//     const velocities = [];
//     const numSpheres = 50000; // Lowered for smoother animation
//     const geometry = new THREE.SphereGeometry(1, 100, 100);
    
//     const material = new THREE.MeshBasicMaterial({ map: texture1 });

//     for (let i = 0; i < numSpheres; i++) {
//       const sphere = new THREE.Mesh(geometry, material.clone());
      
//       // Random positions within the viewport
//       sphere.position.set(
//         (Math.random() - 0.5) * window.innerWidth,
//         (Math.random() - 0.5) * window.innerHeight,
//         (Math.random() - 0.5) * 20
//       );
      
//       spheres.push(sphere);
//       scene.add(sphere);

//       // Assign random velocities for each sphere
//       velocities.push({
//         x: (Math.random() - 0.5) * 0.9, // Random velocity in X direction
//         y: (Math.random() - 0.5) * 0.9, // Random velocity in Y direction
//         z: (Math.random() - 0.5) * 0.009 // Random velocity in Z direction (depth)
//       });
//     }

//     camera.position.z = 5;

//     // Animation loop for smooth movement and rotation
//     const animate = () => {
//       requestAnimationFrame(animate);

//       // Rotate and move spheres based on their velocities
//       spheres.forEach((sphere, index) => {
//         // Rotate spheres slowly
//         sphere.rotation.x += 0.02;
//         sphere.rotation.y += 0.02;
//         // sphere.rotation.z += 0.02;
//         // Move spheres based on their velocities
//         sphere.position.x += velocities[index].x;
//         sphere.position.y += velocities[index].y;
//         sphere.position.z += velocities[index].z;

//         // Boundary checks to make spheres loop back
//         if (sphere.position.x > window.innerWidth / 2) sphere.position.x = -window.innerWidth / 2;
//         if (sphere.position.x < -window.innerWidth / 2) sphere.position.x = window.innerWidth / 2;
//         if (sphere.position.y > window.innerHeight / 2) sphere.position.y = -window.innerHeight / 2;
//         if (sphere.position.y < -window.innerHeight / 2) sphere.position.y = window.innerHeight / 2;
//       });

//       renderer.render(scene, camera);
//     };
//     animate();

//     // Handle window resize
//     const onWindowResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener('resize', onWindowResize);

//     // Cleanup on unmount
//     return () => {
//       window.removeEventListener('resize', onWindowResize);
//       document.body.removeChild(renderer.domElement);
//     };
//   }, [textureLoader]);

//   return null;
// };

// export default SpheresBackground;



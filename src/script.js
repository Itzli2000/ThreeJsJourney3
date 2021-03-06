import "./style.css";
import * as THREE from "three";
import gsap from "gsap";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

// Animations using time
// let time = Date.now();

// const tick = () => {
//   const currentTime = Date.now();
//   const deltaTime = currentTime - time;
//   time = currentTime;
//   console.log(deltaTime);
//   mesh.rotation.y += 0.001 * deltaTime;
//   renderer.render(scene, camera);
//   window.requestAnimationFrame(tick);
// };

// tick();

// Animations using Clock
// const clock = new THREE.Clock();

// const tick = () => {
//   const elapsedTime = clock.getElapsedTime();
//   //   mesh.rotation.y = elapsedTime;
//   mesh.position.y = Math.sin(elapsedTime);
//   mesh.position.x = Math.cos(elapsedTime);
//   //   mesh.rotation.y = elapsedTime * Math.PI * 2;
//   renderer.render(scene, camera);
//   window.requestAnimationFrame(tick);
// };

// tick();

// Animations using GSAP
gsap.to(mesh.position, {
    x: 2,
    duration: 1,
    delay: 1,
})
gsap.to(mesh.position, {
    x: 0,
    duration: 1,
    delay: 2,
})

const tick = () => {
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();

"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const ParticleWave = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let container;
    let camera, scene, renderer;
    let particles,
      count = 0;
    let mouseX = 0,
      mouseY = 0;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    const SEPARATION = 100,
      AMOUNTX = 50,
      AMOUNTY = 50;

    init();
    animate();

    function init() {
      container = mountRef.current;

      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        1,
        10000,
      );
      camera.position.z = 1000;
      camera.position.y = 2000;
      camera.position.x = 2000;

      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x161617);

      const numParticles = AMOUNTX * AMOUNTY;
      const positions = new Float32Array(numParticles * 3);
      const scales = new Float32Array(numParticles);

      let i = 0,
        j = 0;

      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          positions[i] = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
          positions[i + 1] = 0;
          positions[i + 2] = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;

          scales[j] = 1;

          i += 3;
          j++;
        }
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3),
      );
      geometry.setAttribute("scale", new THREE.BufferAttribute(scales, 1));

      const material = new THREE.ShaderMaterial({
        uniforms: {
          color: { value: new THREE.Color(0xcbfb45) },
        },
        vertexShader: `
                    attribute float scale;
                    void main() {
                        vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
                        gl_PointSize = scale * ( 300.0 / - mvPosition.z );
                        gl_Position = projectionMatrix * mvPosition;
                    }
                `,
        fragmentShader: `
                    uniform vec3 color;
                    void main() {
                        if ( length( gl_PointCoord - vec2( 0.5, 0.5 ) ) > 0.475 ) discard;
                        gl_FragColor = vec4( color, 1.0 );
                    }
                `,
      });

      particles = new THREE.Points(geometry, material);
      scene.add(particles);

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, 800);
      container.appendChild(renderer.domElement);

      container.style.touchAction = "none";
      container.addEventListener("pointermove", onPointerMove);

      window.addEventListener("resize", onWindowResize);
    }

    function onWindowResize() {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, 800);
    }

    function onPointerMove(event) {
      if (event.isPrimary === false) return;

      mouseX = event.clientX - windowHalfX;
      mouseY = event.clientY - windowHalfY;
    }

    function animate() {
      requestAnimationFrame(animate);

      render();
    }

    function render() {
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      const positions = particles.geometry.attributes.position.array;
      const scales = particles.geometry.attributes.scale.array;

      let i = 0,
        j = 0;

      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          positions[i + 1] =
            Math.sin((ix + count) * 0.3) * 50 +
            Math.sin((iy + count) * 0.5) * 50;
          scales[j] =
            (Math.sin((ix + count) * 0.3) + 1) * 20 +
            (Math.sin((iy + count) * 0.5) + 1) * 20;

          i += 3;
          j++;
        }
      }

      particles.geometry.attributes.position.needsUpdate = true;
      particles.geometry.attributes.scale.needsUpdate = true;

      renderer.render(scene, camera);

      count += 0.1;
    }

    return () => {
      window.removeEventListener("resize", onWindowResize);
      container.removeEventListener("pointermove", onPointerMove);
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      className="absolute"
      ref={mountRef}
      style={{ width: "100vw", height: "50vh" }}
    />
  );
};

export default ParticleWave;

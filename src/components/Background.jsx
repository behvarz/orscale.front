"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // ---- Galaxy geometry
    const particles = 6000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particles * 3);
    const colors = new Float32Array(particles * 3);

    const colorInside = new THREE.Color("#ff6030"); // turuncu-kırmızı
    const colorOutside = new THREE.Color("#1b3984"); // morumsu-mavi

    for (let i = 0; i < particles; i++) {
      const i3 = i * 3;

      // Spiral dağılım
      const radius = Math.random() * 5;
      const spinAngle = radius * 1.5;
      const branch = i % 3;
      const angle = (branch / 3) * Math.PI * 2 + spinAngle;

      positions[i3] = Math.cos(angle) * radius + (Math.random() - 0.5) * 0.3;
      positions[i3 + 1] = (Math.random() - 0.5) * 0.3;
      positions[i3 + 2] = Math.sin(angle) * radius + (Math.random() - 0.5) * 0.3;

      // Renk geçişi
      const mixedColor = colorInside.clone();
      mixedColor.lerp(colorOutside, radius / 5);
      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // ---- Material
    const material = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // ---- Animation
    const animate = () => {
      points.rotation.y += 0.0008;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // ---- Resize
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 w-full h-full" />;
}

/* eslint-disable react-hooks/purity */
"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Preload } from "@react-three/drei";
import * as THREE from "three";

interface Hero3DSceneProps {
  mousePos: { x: number; y: number };
}

function AbstractObject({ mousePos }: { mousePos: { x: number; y: number } }) {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);

  // Smooth mouse interpolation
  const targetRotation = useMemo(() => new THREE.Vector2(), []);
  
  useFrame((_, delta) => {
    if (!groupRef.current) return;
    
    // Map mouse position 0-100 to rotation angles -2 to 2 degrees (roughly -0.05 to 0.05 rad)
    const normalizedX = (mousePos.x / 100) * 2 - 1;
    const normalizedY = (mousePos.y / 100) * 2 - 1;
    
    // eslint-disable-next-line react-hooks/immutability
    targetRotation.x = normalizedY * 0.1; // subtle tilt
    // eslint-disable-next-line react-hooks/immutability
    targetRotation.y = normalizedX * 0.15; // subtle pan

    // Smooth dampening
    groupRef.current.rotation.x = THREE.MathUtils.damp(groupRef.current.rotation.x, targetRotation.x, 2, delta);
    groupRef.current.rotation.y = THREE.MathUtils.damp(groupRef.current.rotation.y, targetRotation.y, 2, delta);
    
    // Slow continuous rotation of the object itself
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.05;
      meshRef.current.rotation.z += delta * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={1}>
        <mesh ref={meshRef} position={[2, 0, -2]}>
          {/* Abstract sculptural object */}
          <icosahedronGeometry args={[1.5, 1]} />
          <meshStandardMaterial 
            color="#e97451" // burnt sienna tint
            roughness={0.2}
            metalness={0.9}
            envMapIntensity={1}
            wireframe={true}
          />
        </mesh>
      </Float>
      
      {/* Background soft particles/dust */}
      <Particles count={100} />
    </group>
  );
}

function Particles({ count }: { count: number }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 10 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -20 + Math.random() * 40;
      const yFactor = -20 + Math.random() * 40;
      const zFactor = -20 + Math.random() * 40;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  useFrame((_, delta) => {
    particles.forEach((particle, i) => {
      let t = particle.t;
      const { factor, speed, xFactor, yFactor, zFactor } = particle;
      t = particle.t += speed * delta;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);
      
      dummy.position.set(
        (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );
      dummy.scale.set(s, s, s);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();
      
      if (mesh.current) {
        mesh.current.setMatrixAt(i, dummy.matrix);
      }
    });
    if (mesh.current) mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]} position={[0, 0, -10]}>
      <dodecahedronGeometry args={[0.02, 0]} />
      <meshStandardMaterial color="#f9f6f0" transparent opacity={0.2} roughness={1} />
    </instancedMesh>
  );
}

export function Hero3DScene({ mousePos }: Hero3DSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 2]} // Optimize for mobile while maintaining crispness on high DPI
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      {/* Lighting setup based on PDF requirements: dark environment, soft key, warm rim */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} color="#f9f6f0" />
      <directionalLight position={[-5, 5, -5]} intensity={1} color="#e97451" />
      <pointLight position={[0, -5, 0]} intensity={0.5} color="#800020" />
      
      <AbstractObject mousePos={mousePos} />
      
      {/* Environment map for realistic reflections */}
      <Environment preset="city" />
      
      <Preload all />
    </Canvas>
  );
}

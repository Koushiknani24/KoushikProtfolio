/* eslint-disable react-hooks/purity */
"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Preload, Sphere, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function DigitalCore() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Orbiting particles
  const particles = useRef<THREE.Points>(null);
  const particleCount = 500;
  const positions = new Float32Array(particleCount * 3);
  
  for(let i=0; i<particleCount; i++) {
    const r = 2 + Math.random() * 2;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos((Math.random() * 2) - 1);
    
    positions[i*3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i*3+2] = r * Math.cos(phi);
  }

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Slow rotation for the core and orbits
      groupRef.current.rotation.y += delta * 0.1;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.2;
    }
    if (particles.current) {
      particles.current.rotation.y -= delta * 0.05;
      particles.current.rotation.z += delta * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Floating glowing digital core */}
      <Sphere args={[1, 64, 64]}>
        <meshStandardMaterial 
          color="#0a0a0a" 
          roughness={0.1} 
          metalness={1} 
          envMapIntensity={2}
        />
      </Sphere>
      
      {/* Inner glow (approximated with additive blending) */}
      <Sphere args={[1.1, 32, 32]}>
        <meshBasicMaterial color="#e97451" transparent opacity={0.1} blending={THREE.AdditiveBlending} />
      </Sphere>
      
      {/* Thin orbit lines */}
      <mesh rotation={[Math.PI/2, 0, 0]}>
        <ringGeometry args={[2.5, 2.51, 64]} />
        <meshBasicMaterial color="#f9f6f0" transparent opacity={0.2} side={THREE.DoubleSide} />
      </mesh>
      <mesh rotation={[Math.PI/3, Math.PI/4, 0]}>
        <ringGeometry args={[3, 3.01, 64]} />
        <meshBasicMaterial color="#e97451" transparent opacity={0.15} side={THREE.DoubleSide} />
      </mesh>

      {/* Particles */}
      <Points ref={particles}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <PointMaterial color="#f9f6f0" size={0.03} transparent opacity={0.4} sizeAttenuation depthWrite={false} />
      </Points>
    </group>
  );
}

export function Contact3DScene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#f9f6f0" />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#e97451" />
        <pointLight position={[0, 0, 0]} intensity={2} color="#e97451" distance={5} />
        
        <DigitalCore />
        
        <Environment preset="city" />
        <Preload all />
      </Canvas>
    </div>
  );
}

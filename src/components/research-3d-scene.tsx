/* eslint-disable react-hooks/purity */
"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Preload, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ResearchDataVisualization() {
  const groupRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);
  
  // Create a sphere of points
  const points = useMemo(() => {
    const p = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos((Math.random() * 2) - 1);
      const r = 2.5 + (Math.random() * 0.5); // Add some noise to the radius
      
      p[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      p[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      p[i * 3 + 2] = r * Math.cos(phi);
    }
    return p;
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={1}>
        <Points ref={pointsRef} positions={points}>
          <PointMaterial 
            transparent 
            color="#e97451" 
            size={0.02} 
            sizeAttenuation={true} 
            depthWrite={false} 
            opacity={0.6} 
          />
        </Points>
        
        {/* Core connected node */}
        <mesh>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="#0a0a0a" roughness={0.2} metalness={0.8} transparent opacity={0.8} />
        </mesh>
        
        {/* Orbit lines */}
        <mesh rotation={[Math.PI/2, 0, 0]}>
          <torusGeometry args={[2.8, 0.01, 16, 100]} />
          <meshBasicMaterial color="#f9f6f0" transparent opacity={0.2} />
        </mesh>
        <mesh rotation={[Math.PI/4, Math.PI/4, 0]}>
          <torusGeometry args={[3, 0.01, 16, 100]} />
          <meshBasicMaterial color="#f9f6f0" transparent opacity={0.1} />
        </mesh>
      </Float>
    </group>
  );
}

export function Research3DScene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#f9f6f0" />
        
        <ResearchDataVisualization />
        
        <Environment preset="city" />
        <Preload all />
      </Canvas>
    </div>
  );
}

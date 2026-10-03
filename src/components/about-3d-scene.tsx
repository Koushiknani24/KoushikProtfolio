"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Preload, Line, Sphere } from "@react-three/drei";
import * as THREE from "three";

const node1Pos = new THREE.Vector3(-1.5, 1, 0);
const node2Pos = new THREE.Vector3(0, -0.5, 1);
const node3Pos = new THREE.Vector3(1.5, 1, -0.5);

function IdeasCodeProductNodes() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Animated flowing path
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lineRef = useRef<any>(null);
  const linePoints = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3([
      node1Pos,
      new THREE.Vector3(-0.8, 0.2, 0.5),
      node2Pos,
      new THREE.Vector3(0.8, 0.2, 0.2),
      node3Pos
    ]);
    return curve.getPoints(50);
  }, []);
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
      
      // Scroll-driven subtle rotation could be added here by reading window.scrollY
      const scrollY = window.scrollY;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        (scrollY * 0.001) % (Math.PI * 2),
        0.05
      );
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        {/* Ideas Node */}
        <Sphere args={[0.3, 32, 32]} position={node1Pos}>
          <meshStandardMaterial color="#f9f6f0" roughness={0.1} metalness={0.8} />
        </Sphere>
        
        {/* Code Node */}
        <Sphere args={[0.4, 32, 32]} position={node2Pos}>
          <meshStandardMaterial color="#e97451" roughness={0.3} metalness={0.9} wireframe />
        </Sphere>
        
        {/* Product Node */}
        <Sphere args={[0.5, 32, 32]} position={node3Pos}>
          <meshStandardMaterial color="#800020" roughness={0.2} metalness={0.5} />
        </Sphere>

        {/* Connecting Data Path */}
        <Line 
          ref={lineRef}
          points={linePoints}
          color="#f9f6f0"
          lineWidth={1.5}
          transparent
          opacity={0.3}
          dashed={true}
          dashSize={0.1}
          dashOffset={0}
        />
        
        {/* Floating abstract tech blocks */}
        <mesh position={[-1, -1, -1]} rotation={[0.5, 0.5, 0]}>
          <boxGeometry args={[0.2, 0.2, 0.2]} />
          <meshStandardMaterial color="#4a0010" />
        </mesh>
        
        <mesh position={[1, 1.5, 1]} rotation={[0.2, -0.4, 0.1]}>
          <boxGeometry args={[0.15, 0.15, 0.15]} />
          <meshStandardMaterial color="#f9f6f0" opacity={0.5} transparent />
        </mesh>
      </Float>
    </group>
  );
}

export function About3DScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 40 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 10, 5]} intensity={1} color="#f9f6f0" />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#e97451" />
      
      <IdeasCodeProductNodes />
      
      <Environment preset="city" />
      <Preload all />
    </Canvas>
  );
}

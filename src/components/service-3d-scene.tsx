"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Preload, Box, Sphere, Torus, Cylinder, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

interface Service3DSceneProps {
  activeIndex: number;
}

function ServiceVisuals({ activeIndex }: Service3DSceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const targetRotation = useRef(0);
  
  useFrame((_, delta) => {
    if (!groupRef.current) return;
    
    // Rotate to different face based on active index (abstract representation)
    targetRotation.current = (activeIndex * Math.PI) / 4;
    groupRef.current.rotation.y = THREE.MathUtils.damp(
      groupRef.current.rotation.y,
      targetRotation.current,
      3,
      delta
    );
    
    // Continuous slow rotation for life
    groupRef.current.rotation.x += delta * 0.1;
    groupRef.current.rotation.z += delta * 0.05;
  });

  // Depending on the index, we can show slightly different compositions
  // or a single complex object that looks different from different angles.
  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        {/* Core abstract structure */}
        {activeIndex === 0 && ( // Websites: floating planes
          <group>
            <Box args={[2.5, 1.5, 0.1]} position={[0, 0, 0]}>
              <meshStandardMaterial color="#f9f6f0" roughness={0.2} metalness={0.8} />
            </Box>
            <Box args={[2, 1, 0.05]} position={[0, 0, 0.2]}>
               <meshStandardMaterial color="#0a0a0a" roughness={0.5} />
            </Box>
          </group>
        )}
        
        {activeIndex === 1 && ( // Web Apps: dashboard panels
          <group>
            <Box args={[1, 1.5, 0.1]} position={[-0.6, 0, 0]}>
              <meshStandardMaterial color="#e97451" roughness={0.3} metalness={0.7} />
            </Box>
            <Box args={[1, 0.7, 0.1]} position={[0.6, 0.4, 0.2]}>
              <meshStandardMaterial color="#f9f6f0" roughness={0.1} />
            </Box>
            <Box args={[1, 0.7, 0.1]} position={[0.6, -0.4, -0.2]}>
              <meshStandardMaterial color="#800020" roughness={0.4} />
            </Box>
          </group>
        )}
        
        {activeIndex === 2 && ( // AI + Automation: nodes
          <group>
            <Sphere args={[0.5, 32, 32]} position={[0, 0, 0]}>
              <meshStandardMaterial color="#f9f6f0" wireframe />
            </Sphere>
            <Sphere args={[0.2, 16, 16]} position={[-1, 1, 0]}>
              <meshStandardMaterial color="#e97451" />
            </Sphere>
            <Sphere args={[0.3, 16, 16]} position={[1, -0.5, 0.5]}>
              <meshStandardMaterial color="#800020" />
            </Sphere>
          </group>
        )}

        {activeIndex === 3 && ( // UI / UX: floating frames
          <group>
            <Torus args={[1, 0.05, 16, 100]} rotation={[Math.PI/4, Math.PI/4, 0]}>
              <meshStandardMaterial color="#f9f6f0" roughness={0.1} metalness={1} />
            </Torus>
            <Torus args={[0.6, 0.05, 16, 100]} rotation={[-Math.PI/4, 0, 0]}>
              <meshStandardMaterial color="#e97451" roughness={0.2} />
            </Torus>
          </group>
        )}

        {activeIndex === 4 && ( // App Design: device frame
          <group>
            <RoundedBox args={[1.2, 2.4, 0.1]} radius={0.1}>
              <meshStandardMaterial color="#800020" metalness={0.8} roughness={0.2} />
            </RoundedBox>
            <Box args={[1.1, 2.3, 0.05]} position={[0, 0, 0.05]}>
              <meshStandardMaterial color="#0a0a0a" roughness={0.8} />
            </Box>
          </group>
        )}

        {activeIndex === 5 && ( // Digital Products: modular blocks
          <group>
             <Box args={[0.8, 0.8, 0.8]} position={[-0.5, 0.5, 0]}>
               <meshStandardMaterial color="#f9f6f0" />
             </Box>
             <Box args={[0.8, 0.8, 0.8]} position={[0.5, -0.5, 0.2]}>
               <meshStandardMaterial color="#e97451" />
             </Box>
          </group>
        )}
        
        {activeIndex === 6 && ( // Software Assistance: connected modules
          <group>
            <Cylinder args={[0.5, 0.5, 1.5, 32]} position={[0, 0, 0]} rotation={[Math.PI/2, 0, 0]}>
              <meshStandardMaterial color="#800020" metalness={0.9} roughness={0.1} />
            </Cylinder>
            <Cylinder args={[0.2, 0.2, 2, 32]} position={[0, 0, 0]} rotation={[0, 0, Math.PI/4]}>
              <meshStandardMaterial color="#f9f6f0" />
            </Cylinder>
          </group>
        )}

        {activeIndex === 7 && ( // Software Development: intricate code blocks
          <group>
            <Box args={[1, 0.2, 0.5]} position={[0, 0.5, 0]}>
              <meshStandardMaterial color="#f9f6f0" />
            </Box>
            <Box args={[0.8, 0.2, 0.5]} position={[0, 0, 0]}>
              <meshStandardMaterial color="#e97451" />
            </Box>
            <Box args={[1.2, 0.2, 0.5]} position={[0, -0.5, 0]}>
              <meshStandardMaterial color="#800020" />
            </Box>
          </group>
        )}

        {activeIndex === 8 && ( // Maintenance & Support: stable rotating system
          <group>
            <Torus args={[1.2, 0.2, 16, 100]} rotation={[Math.PI/2, 0, 0]}>
              <meshStandardMaterial color="#e97451" wireframe />
            </Torus>
            <Sphere args={[0.6, 32, 32]}>
              <meshStandardMaterial color="#f9f6f0" metalness={1} roughness={0} />
            </Sphere>
          </group>
        )}

        {activeIndex === 9 && ( // Business Tech Assistance: connecting structures
          <group>
            <Sphere args={[0.4, 32, 32]} position={[-0.8, 0, 0]}>
               <meshStandardMaterial color="#f9f6f0" />
            </Sphere>
            <Sphere args={[0.4, 32, 32]} position={[0.8, 0, 0]}>
               <meshStandardMaterial color="#800020" />
            </Sphere>
            <Cylinder args={[0.05, 0.05, 1.6]} rotation={[0, 0, Math.PI/2]}>
               <meshStandardMaterial color="#e97451" />
            </Cylinder>
          </group>
        )}
      </Float>
    </group>
  );
}

export function Service3DScene({ activeIndex }: Service3DSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#f9f6f0" />
      <pointLight position={[-5, -5, -5]} intensity={0.8} color="#e97451" />
      
      <ServiceVisuals activeIndex={activeIndex} />
      
      <Environment preset="studio" />
      <Preload all />
    </Canvas>
  );
}

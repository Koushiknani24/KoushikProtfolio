"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float, Line, Preload } from "@react-three/drei";
import * as THREE from "three";

const skillCategories = [
  { name: "Programming", items: ["Python", "Java", "C"], color: "#f9f6f0" },
  { name: "Web", items: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"], color: "#e97451" },
  { name: "Database", items: ["SQL", "DBMS", "SQLite"], color: "#800020" },
  { name: "Core", items: ["Data Structures & Algorithms", "OOP"], color: "#f9f6f0" },
  { name: "AI / ML", items: ["NumPy", "Pandas", "OpenCV", "NLP", "Hugging Face", "Machine Learning"], color: "#e97451" },
  { name: "Tools", items: ["Git", "GitHub", "VS Code", "Selenium", "Jira"], color: "#800020" },
];

function Constellation() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Create nodes with fixed positions so lines don't jitter
  const nodes = useMemo(() => {
    const temp: { id: number; category: typeof skillCategories[0]; position: THREE.Vector3 }[] = [];
    const radius = 3;
    
    skillCategories.forEach((category, i) => {
      const phi = Math.acos(-1 + (2 * i) / skillCategories.length);
      const theta = Math.sqrt(skillCategories.length * Math.PI) * phi;
      
      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);
      
      temp.push({ 
        id: i, 
        category, 
        position: new THREE.Vector3(x, y, z) 
      });
    });
    return temp;
  }, []);

  // Connect nodes with lines
  const lines = useMemo(() => {
    const temp: THREE.Vector3[][] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].position.distanceTo(nodes[j].position) < 4) {
          temp.push([nodes[i].position, nodes[j].position]);
        }
      }
    }
    return temp;
  }, [nodes]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
      groupRef.current.rotation.z += delta * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      {lines.map((points, idx) => (
        <Line 
          key={idx}
          points={points}
          color="#f9f6f0"
          lineWidth={0.5}
          transparent
          opacity={0.15}
        />
      ))}
      
      {nodes.map((node, idx) => (
        <Float key={idx} speed={1} rotationIntensity={0} floatIntensity={0.2} floatingRange={[-0.1, 0.1]}>
          <group position={node.position}>
            {/* Main Category Node */}
            <mesh>
              <sphereGeometry args={[0.05, 16, 16]} />
              <meshBasicMaterial color={node.category.color} />
            </mesh>
            
            <Text
              position={[0, 0.3, 0]}
              fontSize={0.25}
              color={node.category.color}
              anchorX="center"
              anchorY="middle"
              outlineWidth={0.02}
              outlineColor="#0a0a0a"
            >
              {node.category.name}
            </Text>
            
            {/* Skill items surrounding the category */}
            {node.category.items.map((item: string, j: number) => {
              const angle = (j / node.category.items.length) * Math.PI * 2;
              const r = 0.8;
              const ix = r * Math.cos(angle);
              const iy = r * Math.sin(angle);
              
              return (
                <Text
                  key={j}
                  position={[ix, iy, 0]}
                  fontSize={0.12}
                  color="#f9f6f0"
                  fillOpacity={0.8}
                  anchorX="center"
                  anchorY="middle"
                >
                  {item}
                </Text>
              );
            })}
          </group>
        </Float>
      ))}
    </group>
  );
}

export function Skills3DScene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <Constellation />
        <Preload all />
      </Canvas>
    </div>
  );
}

"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Line, RoundedBox } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

type SceneProps = { progress: number };
const orange = "#c5562a";

function Panel({ position, rotation = [0, 0, 0], scale = 1, accent = false, opacity = 1 }: { position: [number, number, number]; rotation?: [number, number, number]; scale?: number; accent?: boolean; opacity?: number }) {
  return <group position={position} rotation={rotation} scale={scale}>
    <RoundedBox args={[2.5, 1.52, .06]} radius={.08}><meshStandardMaterial color="#141414" roughness={.62} metalness={.22} transparent opacity={opacity} /></RoundedBox>
    <mesh position={[0, .51, .041]}><planeGeometry args={[2.14, .04]} /><meshBasicMaterial color={accent ? orange : "#f0ebe0"} transparent opacity={opacity * (accent ? .8 : .26)} /></mesh>
    {[[-.72, .16, .66], [-.72, -.08, 1.3], [-.72, -.42, .95]].map(([x, y, width], i) => <mesh key={i} position={[x, y, .041]}><planeGeometry args={[width, .06]} /><meshBasicMaterial color="#f0ebe0" transparent opacity={opacity * (.12 + i * .045)} /></mesh>)}
    <mesh position={[.67, -.13, .042]}><planeGeometry args={[.66, .6]} /><meshBasicMaterial color={accent ? orange : "#f0ebe0"} transparent opacity={opacity * (accent ? .24 : .08)} /></mesh>
  </group>;
}

function SystemScene({ progress }: SceneProps) {
  const root = useRef<THREE.Group>(null);
  const particleRefs = useRef<THREE.Mesh[]>([]);
  const p = THREE.MathUtils.smootherstep(progress, 0, 1);
  const panelsOpacity = THREE.MathUtils.smoothstep(progress, .22, .48);
  const automationOpacity = THREE.MathUtils.smoothstep(progress, .56, .78);
  const finalOpacity = THREE.MathUtils.smoothstep(progress, .78, .98);
  const points = useMemo(() => Array.from({ length: 24 }, (_, index) => ({ phase: index / 24, offset: (index % 4) * .18 })), []);

  useFrame((state, delta) => {
    if (root.current) {
      root.current.rotation.y = THREE.MathUtils.damp(root.current.rotation.y, -.16 + p * .33, 2.3, delta);
      root.current.rotation.x = THREE.MathUtils.damp(root.current.rotation.x, .06 - p * .1, 2.3, delta);
      root.current.position.x = THREE.MathUtils.damp(root.current.position.x, -p * .25, 2, delta);
    }
    particleRefs.current.forEach((particle, index) => {
      const t = (state.clock.elapsedTime * .14 + points[index].phase) % 1;
      particle.position.set(-3.8 + t * 7.6, .15 + Math.sin(t * Math.PI * 2) * .72 + points[index].offset, .18 + Math.cos(t * Math.PI * 3) * .18);
      particle.visible = progress > .1;
    });
  });

  return <group ref={root}>
    <group position={[-2.65, .15, 0]} scale={1 - p * .28}>
      <RoundedBox args={[1.45, 2.35, .22]} radius={.1}><meshStandardMaterial color="#171515" roughness={.8} /></RoundedBox>
      {[-.62, 0, .62].map((y, i) => <group key={y} position={[0, y, .13]}><mesh><planeGeometry args={[1.1, .28]} /><meshBasicMaterial color="#f0ebe0" transparent opacity={.08} /></mesh><mesh position={[-.28, 0, .01]}><planeGeometry args={[.12, .12]} /><meshBasicMaterial color={i === 1 ? orange : "#f0ebe0"} transparent opacity={i === 1 ? .85 : .25} /></mesh><mesh position={[.13, 0, .01]}><planeGeometry args={[.43, .035]} /><meshBasicMaterial color="#f0ebe0" transparent opacity={.26} /></mesh></group>)}
      <mesh position={[.48, .85, .14]}><circleGeometry args={[.05, 16]} /><meshBasicMaterial color={orange} /></mesh>
    </group>
    <Line points={[[-1.8, .2, 0], [-.75, .55, 0], [.2, .1, 0], [1.25, .55, 0], [3.25, .05, 0]]} color={orange} transparent opacity={.2 + progress * .45} lineWidth={1.1} />
    {points.map((item, index) => <mesh key={index} ref={(node) => { if (node) particleRefs.current[index] = node; }}><sphereGeometry args={[.028, 8, 8]} /><meshBasicMaterial color={orange} transparent opacity={.85} /></mesh>)}
    <group scale={.78 + panelsOpacity * .22} position={[.1, .05, .35]}><Panel position={[-.3, .55, -.2]} rotation={[0, .14, -.05]} scale={.76} opacity={panelsOpacity * .78} /><Panel position={[.85, -.45, .34]} rotation={[0, -.16, .07]} scale={.88} accent opacity={panelsOpacity} /><Panel position={[-.65, -.72, -.4]} rotation={[0, .18, -.06]} scale={.52} opacity={panelsOpacity * .56} /></group>
    <group position={[2.55, .2, .1]} scale={.55 + automationOpacity * .45}>{[[0, .75], [.9, .18], [.45, -.82], [-.55, -.38]].map(([x, y], index) => <group key={index} position={[x, y, .15]}><mesh><sphereGeometry args={[.16, 20, 20]} /><meshStandardMaterial color={index === 0 ? orange : "#f0ebe0"} emissive={index === 0 ? orange : "#000000"} emissiveIntensity={.3} transparent opacity={automationOpacity} /></mesh><mesh scale={1.8}><sphereGeometry args={[.16, 20, 20]} /><meshBasicMaterial color={orange} wireframe transparent opacity={automationOpacity * .18} /></mesh></group>)}<Line points={[[0,.75,.1],[.9,.18,.1],[.45,-.82,.1],[-.55,-.38,.1],[0,.75,.1]]} color={orange} transparent opacity={automationOpacity * .65} lineWidth={1} /></group>
    <group position={[.35, -.05, .72]} scale={.78 + finalOpacity * .32}><Panel position={[0, 0, 0]} scale={1.25} accent opacity={finalOpacity} />{[[-.7, -.88], [0, -.88], [.7, -.88]].map(([x, y], index) => <mesh key={index} position={[x, y, .1]}><circleGeometry args={[.09 + index * .025, 20]} /><meshBasicMaterial color={index === 1 ? orange : "#f0ebe0"} transparent opacity={finalOpacity * .65} /></mesh>)}</group>
  </group>;
}

export function Service3DScene({ progress }: SceneProps) {
  return <Canvas camera={{ position: [0, 0, 7.4], fov: 39 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}><ambientLight intensity={.8} /><directionalLight position={[3, 4, 5]} intensity={2} color="#f0ebe0" /><pointLight position={[-3, 1, 3]} intensity={16} distance={8} color="#c5562a" /><SystemScene progress={progress} /></Canvas>;
}

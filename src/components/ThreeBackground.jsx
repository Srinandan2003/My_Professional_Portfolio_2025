import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 20], fov: 60 }}>
        <color attach="background" args={['#0a0a0f']} />
        <fog attach="fog" args={['#0a0a0f', 15, 35]} />
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        <MinimalistShapes />
      </Canvas>
    </div>
  );
};

// Shape component moved outside the main component
function Shape({ position, rotation, scale, color }) {
  const meshRef = useRef();
  
  // Subtle movement
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1 + rotation[0];
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.1) * 0.1 + rotation[1];
    }
  });

  return (
    <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
      {Math.random() > 0.6 ? (
        <boxGeometry args={[1, 1, 1]} />
      ) : Math.random() > 0.3 ? (
        <dodecahedronGeometry args={[0.8, 0]} />
      ) : (
        <torusGeometry args={[0.6, 0.2, 16, 32]} />
      )}
      <meshStandardMaterial color={color} roughness={0.5} metalness={0.2} />
    </mesh>
  );
}

// MinimalistShapes component moved outside the main component
function MinimalistShapes() {
  // Create shapes with random positions, rotations, and scales
  const shapes = useMemo(() => {
    return Array.from({ length: 18 }, (_, i) => {
      const positionX = (Math.random() - 0.5) * 30;
      const positionY = (Math.random() - 0.5) * 20;
      const positionZ = (Math.random() - 0.5) * 10 - 5;
      
      // Create a gradient of colors from primary to accent color
      const baseColor = new THREE.Color("#6e57e0");
      const accentColor = new THREE.Color("#ff6b6b");
      const mixRatio = Math.random();
      const color = baseColor.clone().lerp(accentColor, mixRatio);
      
      return {
        position: [positionX, positionY, positionZ],
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
        scale: [0.5 + Math.random() * 1.5, 0.5 + Math.random() * 1.5, 0.5 + Math.random() * 1.5],
        color: color.getStyle(),
        key: i
      };
    });
  }, []);

  return (
    <group>
      {shapes.map((props) => (
        <Float 
          key={props.key} 
          speed={1} 
          rotationIntensity={0.5} 
          floatIntensity={1}
        >
          <Shape {...props} />
        </Float>
      ))}
    </group>
  );
}

export default ThreeBackground;
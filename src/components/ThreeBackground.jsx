// src/components/ThreeBackground.jsx
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

function AnimatedStarfield() {
  const starsRef = useRef();
  
  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.x += 0.0003;
      starsRef.current.rotation.y += 0.0002;
    }
  });

  return (
    <group ref={starsRef}>
      <Stars 
        radius={100} 
        depth={50} 
        count={3000} 
        factor={4} 
        saturation={0.6} 
        fade 
        speed={0.5} 
        color="#f3f3f4"
      />
    </group>
  );
}

const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 15] }}>
        <color attach="background" args={['#242424']} />
        <AnimatedStarfield />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
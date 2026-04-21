import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float } from '@react-three/drei';

const FloatingGem = ({ color }: { color: string }) => {
    const mesh = useRef<any>();
    
    useFrame((state) => {
        if (mesh.current) {
            mesh.current.rotation.y += 0.01;
            mesh.current.rotation.z += 0.01;
        }
    });

    return (
        <Float speed={5} rotationIntensity={2} floatIntensity={2}>
            <Sphere args={[1.5, 32, 32]} ref={mesh}>
                <MeshDistortMaterial
                    color={color}
                    speed={2}
                    distort={0.4}
                    radius={1}
                    metalness={0.8}
                    roughness={0.2}
                    emissive={color}
                    emissiveIntensity={1}
                />
            </Sphere>
        </Float>
    );
};

const Gem3D: React.FC<{ color?: string }> = ({ color = '#fbbf24' }) => {
    return (
        <div style={{ width: '100%', height: '100%', minHeight: '200px' }}>
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} />
                <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />
                <FloatingGem color={color} />
            </Canvas>
        </div>
    );
};

export default Gem3D;

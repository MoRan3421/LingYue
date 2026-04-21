import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshWobbleMaterial, PerspectiveCamera, Stars, Dodecahedron, Cylinder, Torus, Box, MeshDistortMaterial } from '@react-three/drei';

const MapElement = ({ type, color, pos, args = [4, 4, 4] as any }: any) => {
    return (
        <group position={pos}>
            {type === 'Island' && (
                <Box args={args}>
                    <meshStandardMaterial color="#2d1b4d" metalness={0.9} roughness={0.1} emissive="#4f46e5" emissiveIntensity={0.2} />
                </Box>
            )}
            {type === 'EnergyStream' && (
                <Box args={args}>
                    <MeshDistortMaterial color="#3b82f6" speed={3} distort={0.5} radius={1} transparent opacity={0.6} />
                </Box>
            )}
            {type === 'Bush' && (
                <Float speed={5} rotationIntensity={2}>
                    <Torus args={[2, 0.5, 16, 100]}>
                        <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.5} transparent opacity={0.4} />
                    </Torus>
                </Float>
            )}
        </group>
    );
};

const HeroModel = ({ color }: { color: string }) => {
    const mesh = useRef<any>();
    useFrame((state) => {
        if (mesh.current) {
            mesh.current.rotation.y += 0.02;
            mesh.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.5;
        }
    });
    return (
        <group ref={mesh}>
            <Dodecahedron args={[2.5, 0]}>
                <MeshWobbleMaterial color={color} factor={0.6} speed={2} metalness={0.9} roughness={0.1} />
            </Dodecahedron>
            {/* Energy Aura Ring */}
            <Torus args={[3, 0.1, 16, 100]} rotation={[Math.PI/2, 0, 0]}>
                <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} />
            </Torus>
        </group>
    );
};

const Scene3D: React.FC<{ playerPos: { x: number, y: number }, entities?: any[] }> = ({ playerPos, entities = [] }) => {
    return (
        <div style={{ width: '100%', height: '100%', background: '#000' }}>
            <Canvas shadows dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 100, 100]} rotation={[-Math.PI/2.5, 0, 0]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[50, 100, 50]} intensity={2.5} castShadow />
                <Stars radius={200} depth={50} count={7000} factor={6} saturation={1} fade speed={2} />
                
                {/* 3D Map Terrain Base */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
                    <planeGeometry args={[300, 300, 32, 32]} />
                    <meshStandardMaterial color="#050515" metalness={0.8} roughness={0.5} />
                </mesh>

                {/* Triple Lane Terrains - "River Valleys" */}
                <MapElement type="EnergyStream" pos={[0, -1, 0]} args={[300, 1, 15]} /> {/* Mid River */}
                <MapElement type="EnergyStream" pos={[-100, -1, -100]} args={[40, 1, 300]} rotation={[0, Math.PI/4, 0]} /> 
                <MapElement type="EnergyStream" pos={[100, -1, 100]} args={[40, 1, 300]} rotation={[0, Math.PI/4, 0]} />

                {/* Strategic Brushes (Hiding Clusters) */}
                <MapElement type="Bush" pos={[-30, 0, 30]} />
                <MapElement type="Bush" pos={[30, 0, -30]} />
                <MapElement type="Bush" pos={[0, 0, 60]} />

                {/* Floating Jungle Dividers */}
                <MapElement type="Island" pos={[-60, 10, 60]} args={[40, 20, 40]} />
                <MapElement type="Island" pos={[60, 10, -60]} args={[40, 20, 40]} />

                {/* Player Hero Model */}
                <group position={[(playerPos.x - 1500) / 30, 2, (playerPos.y - 1500) / 30]}>
                    <HeroModel color="#fbbf24" />
                </group>

                {/* Team Entities */}
                {entities.map((e, i) => (
                    <group key={i} position={[(e.x - 1500) / 30, 2, (e.y - 1500) / 30]}>
                         {e.type === 'Hero' ? <HeroModel color={e.team === 'blue' ? '#3b82f6' : '#ef4444'} /> : (
                             <SphereModel type={e.type} color={e.team === 'blue' ? '#3b82f6' : '#ef4444'} />
                         )}
                    </group>
                ))}

                <gridHelper args={[300, 30, '#ffffff05', '#ffffff05']} position={[0, -1, 0]} />
            </Canvas>
        </div>
    );
};

const SphereModel = ({ type, color }: { type: string, color: string }) => (
    <mesh>
        {type === 'Tower' ? <Cylinder args={[2, 3, 15, 32]} /> : <Torus args={[1, 0.3, 16, 100]} />}
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} emissive={color} emissiveIntensity={0.5} />
    </mesh>
);

export default Scene3D;

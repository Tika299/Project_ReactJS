import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const CoinModel = ({ url, isHovered, isPlaying }) => {
  const { scene } = useGLTF(url);
  const ref = useRef();

  // Xoay tự động khi isPlaying là true
  useFrame(() => {
    if (ref.current && isPlaying) {
      ref.current.rotation.y += 0.01; // Xoay chậm
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={[5, 5, 5]}
      castShadow
      receiveShadow
    />
  );
};

const Coin3D = ({ type }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isClicked, setIsClicked] = useState(false);

  const coinUrl =
    type === 'gold' ? '/models/gold_coin.glb' :
    type === 'silver' ? '/models/silver_coin.glb' :
    type === 'copper' ? '/models/copper_coin.glb' :
    '/models/copper_coin.glb';

  return (
    <div style={{ width: '400px', height: '400px', margin: '0 auto', background: '#1a1a1a' }}>
      <Canvas
        shadows
        camera={{ position: [0, 0, 10], fov: 45 }}
        style={{ border: '1px solid #333' }}
      >
        {/* Ánh sáng giống Sketchfab */}
        <ambientLight intensity={0.8} />
        <directionalLight
          position={[10, 10, 10]}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <pointLight position={[-10, 5, -5]} intensity={0.5} />
        <CoinModel url={coinUrl} isHovered={isHovered} isPlaying={isPlaying} />
        {/* Điều khiển camera */}
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          enableRotate={true}
          minDistance={5}
          maxDistance={15}
        />
      </Canvas>
      {/* Nút điều khiển giống Sketchfab */}
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          style={{ margin: '0 5px', padding: '5px 10px', background: '#007bff', color: 'white', border: 'none', borderRadius: '3px' }}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button
          onClick={() => setIsClicked(!isClicked)}
          style={{ margin: '0 5px', padding: '5px 10px', background: '#007bff', color: 'white', border: 'none', borderRadius: '3px' }}
        >
          {isClicked ? 'Reset' : 'Zoom'}
        </button>
      </div>
    </div>
  );
};

export default Coin3D;
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF, Stats } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');

  return (
    <mesh>
      {/* Optimized lighting setup */}
      <hemisphereLight intensity={1.5} groundColor="black" />
      <pointLight intensity={0.8} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.15}
        penumbra={1}
        intensity={isMobile ? 0.7 : 1} // Lower intensity for mobile
        castShadow={isMobile ? false : true} // Disable shadows for mobile
        shadow-mapSize={isMobile ? 512 : 1024} // Reduced shadow resolution for mobile
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.75} // Smaller model for mobile
        position={isMobile ? [0, -3, -3] : [0, -3.59, -1.5]} // Adjusted position for mobile
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)'); // Adjusted media query for better detection

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 26 }}
      gl={{
        preserveDrawingBuffer: true,
        powerPreference: 'low-power', // Optimized for low-power devices
      }}
    >
      {/* Stats for debugging performance */}
      <Stats />

      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
  
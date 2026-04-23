import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import { useMobileDetection } from "../../hooks";

const Computers = ({ isMobile, isLowEndDevice }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  // Disable shadows on mobile and low-end devices
  const shadowMapSize = isMobile ? 512 : 1024;
  const shadowQuality = isLowEndDevice ? 256 : shadowMapSize;

  return (
    <mesh>
      <hemisphereLight intensity={isMobile ? 0.2 : 0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={isMobile ? 0.8 : 1}
        castShadow={!isMobile}
        shadow-mapSize={shadowQuality}
      />
      <pointLight intensity={isMobile ? 0.8 : 1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const { isMobile, hasWebGL, isLowEndDevice } = useMobileDetection();
  const [showCanvas, setShowCanvas] = useState(true);

  useEffect(() => {
    // Don't show 3D canvas on very low-end mobile devices
    if (!hasWebGL) {
      setShowCanvas(false);
    }
  }, [hasWebGL]);

  // Fallback for devices without WebGL support
  if (!showCanvas) {
    return null;
  }

  return (
    <div className="w-full h-full absolute top-[120px] right-0 sm:right-[-20px]">
      <Canvas
        frameloop={isMobile ? 'demand' : 'auto'}
        shadows={!isLowEndDevice}
        dpr={isMobile ? [1, 1.5] : [1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{
          antialias: !isMobile,
          powerPreference: isMobile ? 'low-power' : 'high-performance',
          alpha: true,
          precision: isMobile ? 'mediump' : 'highp',
        }}
        performance={{
          min: isMobile ? 0.5 : 0.1,
          max: isMobile ? 0.8 : 1,
          debounce: isMobile ? 300 : 200,
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            autoRotate={!isLowEndDevice}
            autoRotateSpeed={2}
          />
          <Computers isMobile={isMobile} isLowEndDevice={isLowEndDevice} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;

import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import { useMobileDetection } from "../../hooks";

const Earth = ({ isMobile }) => {
  const earth = useGLTF("./planet_earth/scene.gltf");

  // Reduce scale on mobile for better performance
  const scale = isMobile ? 2 : 2.5;

  return (
    <primitive
      object={earth.scene}
      scale={scale}
      position-y={0}
      rotation-y={0}
    />
  );
};

const EarthCanvas = () => {
  const { isMobile, hasWebGL, isLowEndDevice } = useMobileDetection();
  const [showCanvas, setShowCanvas] = useState(true);

  useEffect(() => {
    // Don't render canvas on devices without WebGL support
    if (!hasWebGL) {
      setShowCanvas(false);
    }
  }, [hasWebGL]);

  // Fallback for devices without WebGL support
  if (!showCanvas) {
    return null;
  }

  return (
    <Canvas
      shadows={!isLowEndDevice}
      frameloop={isMobile ? 'demand' : 'auto'}
      dpr={isMobile ? [1, 1.5] : [1, 2]}
      gl={{
        preserveDrawingBuffer: true,
        powerPreference: isMobile ? 'low-power' : 'high-performance',
        antialias: !isMobile,
        precision: isMobile ? 'mediump' : 'highp',
        alpha: true,
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      performance={{
        min: isMobile ? 0.5 : 0.1,
        max: isMobile ? 0.8 : 1,
        debounce: isMobile ? 300 : 200,
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate={!isLowEndDevice}
          autoRotateSpeed={isMobile ? 1 : 2}
          enableZoom={!isMobile}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {/* Add lighting to the scene */}
        <ambientLight intensity={isMobile ? 0.4 : 0.5} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={isMobile ? 1 : 1.5}
          castShadow={!isLowEndDevice}
        />
        <Earth isMobile={isMobile} />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;

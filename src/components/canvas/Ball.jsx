import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";
import { useMobileDetection } from "../../hooks";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, props.isMobile ? 0 : 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const { isMobile, hasWebGL, isLowEndDevice } = useMobileDetection();
  const [renderCanvas, setRenderCanvas] = useState(true);

  useEffect(() => {
    // Don't render canvas on low-end mobile devices
    if (!hasWebGL) {
      setRenderCanvas(false);
    }
  }, [hasWebGL]);

  // Fallback for devices without WebGL support
  if (!renderCanvas) {
    return (
      <div className='flex items-center justify-center w-full h-full bg-gradient-to-r from-[#fff8eb] to-[#f5f0e8] rounded-lg'>
        <img src={icon} alt='tech' className='w-12 h-12 object-contain' />
      </div>
    );
  }

  return (
    <Canvas
      frameloop={isMobile ? 'demand' : 'demand'}
      dpr={isMobile ? [1, 1.5] : [1, 2]}
      gl={{
        preserveDrawingBuffer: true,
        powerPreference: isMobile ? 'low-power' : 'high-performance',
        antialias: !isMobile,
        alpha: true,
      }}
      performance={{
        min: isMobile ? 0.5 : 0.1,
        max: isMobile ? 0.8 : 1,
        debounce: 200,
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate={!isLowEndDevice}
          autoRotateSpeed={isMobile ? 2 : 4}
        />
        <Ball imgUrl={icon} isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;

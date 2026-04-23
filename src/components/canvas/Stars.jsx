import { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { useMobileDetection } from "../../hooks";

const Stars = (props) => {
  const ref = useRef();
  const { isMobile, isLowEndDevice } = useMobileDetection();
  
  // Reduce star count on mobile devices
  const starCount = isMobile ? (isLowEndDevice ? 1000 : 2500) : 5000;
  const [sphere] = useState(() => random.inSphere(new Float32Array(starCount), { radius: 1.2 }));

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={isMobile ? 0.003 : 0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const { hasWebGL } = useMobileDetection();
  const [showStars, setShowStars] = useState(true);

  useEffect(() => {
    if (!hasWebGL) {
      setShowStars(false);
    }
  }, [hasWebGL]);

  if (!showStars) {
    return null;
  }

  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas 
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 1.5]}
        gl={{
          powerPreference: "low-power",
          alpha: true,
        }}
        performance={{
          min: 0.5,
          max: 1,
          debounce: 200,
        }}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;

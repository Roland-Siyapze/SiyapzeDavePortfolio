import React, { useState, useEffect } from "react";

import { BallCanvas } from "./canvas";
import Canvas3DFallback from "./Canvas3DFallback";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { useMobileDetection } from "../hooks";

const Tech = () => {
  const { hasWebGL } = useMobileDetection();
  const [renderCanvas, setRenderCanvas] = useState(true);

  useEffect(() => {
    // If WebGL is not supported, use fallback
    if (!hasWebGL) {
      setRenderCanvas(false);
    }
  }, [hasWebGL]);

  return (
    <div className='flex flex-row flex-wrap justify-center xs:gap-6 sm:gap-10 gap-4'>
      {technologies.map((technology) => (
        <div className='xs:w-24 xs:h-24 sm:w-28 sm:h-28 w-20 h-20' key={technology.name}>
          {renderCanvas ? (
            <BallCanvas icon={technology.icon} />
          ) : (
            <Canvas3DFallback icon={technology.icon} label={technology.name} />
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");

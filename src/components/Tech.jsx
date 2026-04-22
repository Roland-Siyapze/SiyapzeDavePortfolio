import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center xs:gap-6 sm:gap-10 gap-4'>
      {technologies.map((technology) => (
        <div className='xs:w-24 xs:h-24 sm:w-28 sm:h-28 w-20 h-20' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");

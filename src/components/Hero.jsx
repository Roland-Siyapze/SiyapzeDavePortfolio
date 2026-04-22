import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useTheme } from "../context/ThemeContext";

const Hero = () => {
  const { isDarkMode } = useTheme();

  return (
    <section className={`relative w-full min-h-screen xs:min-h-[600px] md:h-screen mx-auto`}>
      <div
        className={`absolute inset-0 xs:top-[100px] sm:top-[120px] top-[80px] max-w-7xl mx-auto ${styles.paddingX} flex xs:flex-row flex-col items-start xs:gap-5 gap-3`}
      >
        <div className="flex xs:flex-col flex-row justify-center xs:items-center items-start xs:mt-5 mt-2">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="xs:w-1 w-0.5 xs:h-80 h-40 sm:h-80 violet-gradient" />
        </div>

        <div className="flex-1">
          <h1 className={`${styles.heroHeadText} ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            Hi, I'm <span className="text-[#915EFF]">Roland</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 md:mt-4 ${isDarkMode ? "text-white-100" : "text-gray-700"}`}>
            Optimized web solutions: <br className="sm:block hidden" />
            seamless UX, peak performance.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-5 sm:bottom-10 w-full flex justify-center items-center px-4">
        <a href="#about">
          <div className={`w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 ${isDarkMode ? "border-secondary" : "border-gray-600"}`}>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className={`w-3 h-3 rounded-full mb-1 ${isDarkMode ? "bg-secondary" : "bg-gray-600"}`}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

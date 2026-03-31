import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
import { useTheme } from "../context/ThemeContext";

const StarWrapper = (Component, idName) =>
  function HOC() {
    const { isDarkMode } = useTheme();
    
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0 ${
          isDarkMode ? "bg-primary" : "bg-transparent"
        }`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;

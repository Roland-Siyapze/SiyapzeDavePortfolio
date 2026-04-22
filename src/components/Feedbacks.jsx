import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useTheme } from "../context/ThemeContext";

const Feedbacks = () => {
  const { isDarkMode } = useTheme();

  useEffect(() => {
    // Load Elfsight platform script if not already loaded
    if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    } else if (window.eapps) {
      // If script already loaded, re-initialize widgets
      window.eapps.Platform.reload();
    }
  }, []);

  return (
    <div className={`mt-12 rounded-[20px] ${isDarkMode ? "bg-black-100" : "bg-gray-200"}`}>
      <div
        className={`rounded-2xl ${styles.padding} min-h-[300px] ${isDarkMode ? "bg-tertiary" : "bg-gray-300"}`}
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} ${isDarkMode ? "text-secondary" : "text-gray-600"}`}>
            What others say
          </p>
          <h2 className={`${styles.sectionHeadText} ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            Testimonials.
          </h2>
        </motion.div>
      </div>

      {/* Elfsight Google Reviews Widget */}
      <div className={`-mt-20 pb-14 ${styles.paddingX}`}>
        <div
          className="elfsight-app-68fe209b-70b6-4a2e-b54b-c21cde23d089"
          data-elfsight-app-lazy
        />
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");

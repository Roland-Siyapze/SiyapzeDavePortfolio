import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useTheme } from "../context/ThemeContext";

const Feedbacks = () => {
  const { isDarkMode } = useTheme();

  // Load Elfsight script once on mount
  useEffect(() => {
    if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Sync Elfsight theme whenever isDarkMode changes
  useEffect(() => {
    const applyTheme = () => {
      const widget = document.querySelector(
        ".elfsight-app-68fe209b-70b6-4a2e-b54b-c21cde23d089"
      );
      if (widget) {
        widget.setAttribute(
          "data-elfsight-app-theme",
          isDarkMode ? "dark" : "light"
        );
      }

      // Trigger Elfsight to re-render with new theme if API is ready
      if (window.eapps?.Platform) {
        window.eapps.Platform.reload();
      }
    };

    // Small delay to ensure widget DOM is ready
    const timeout = setTimeout(applyTheme, 300);
    return () => clearTimeout(timeout);
  }, [isDarkMode]);

  return (
    <div className={`xs:mt-12 mt-8 rounded-[20px] ${isDarkMode ? "bg-black-100" : "bg-gray-200"}`}>
      <div
        className={`rounded-2xl ${styles.padding} xs:min-h-[250px] min-h-[220px] ${isDarkMode ? "bg-tertiary" : "bg-gray-300"}`}
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
      <div className={`xs:-mt-16 -mt-12 xs:pb-10 pb-8 xs:px-6 overflow-hidden`}>
        <div
          className="elfsight-app-68fe209b-70b6-4a2e-b54b-c21cde23d089 w-full"
          data-elfsight-app-lazy
          data-elfsight-app-theme={isDarkMode ? "dark" : "light"}
        />
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");

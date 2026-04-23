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
      {/* Header Section */}
      <div
        className={`rounded-t-2xl px-6 xs:px-4 py-6 xs:py-4 ${isDarkMode ? "bg-tertiary" : "bg-gray-300"}`}
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

      {/* Two Column Layout */}
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 xs:px-3 px-6 py-10 xs:py-8 ${isDarkMode ? "bg-black-100" : "bg-gray-200"}`}>
        
        {/* Left Column - Text Content */}
        <motion.div
          variants={textVariant()}
          className="hidden md:flex flex-col justify-center"
        >
          <p className={`text-[16px] xs:text-[14px] leading-[24px] xs:leading-[20px] ${isDarkMode ? "text-secondary" : "text-gray-700"} mb-6`}>
            Our clients have entrusted us with their projects, and their feedback speaks to our commitment to excellence and customer satisfaction. Here's what they have to say about working with us.
          </p>
          
          <div className={`space-y-4 ${isDarkMode ? "text-secondary" : "text-gray-600"}`}>
            <div className="flex items-start gap-3">
              <span className={`text-xl mt-1 ${isDarkMode ? "text-green-400" : "text-green-600"}`}>✓</span>
              <div>
                <p className="font-semibold">Quality Work</p>
                <p className="text-[14px]">We deliver high-quality solutions that exceed expectations</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className={`text-xl mt-1 ${isDarkMode ? "text-green-400" : "text-green-600"}`}>✓</span>
              <div>
                <p className="font-semibold">On-Time Delivery</p>
                <p className="text-[14px]">Projects are completed on schedule and within budget</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className={`text-xl mt-1 ${isDarkMode ? "text-green-400" : "text-green-600"}`}>✓</span>
              <div>
                <p className="font-semibold">Client Support</p>
                <p className="text-[14px]">Dedicated support and communication throughout the project</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Elfsight Reviews Carousel */}
        <motion.div
          variants={textVariant()}
          className="flex flex-col justify-center"
        >
          <div className={`overflow-x-hidden overflow-y-visible rounded-lg px-2 xs:px-1`}>
            <div
              className="elfsight-app-68fe209b-70b6-4a2e-b54b-c21cde23d089 w-full"
              data-elfsight-app-lazy
              data-elfsight-app-theme={isDarkMode ? "dark" : "light"}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");

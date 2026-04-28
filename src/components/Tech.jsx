import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { useTheme } from "../context/ThemeContext";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const TechCard = ({ technology, index }) => {
  const { isDarkMode } = useTheme();
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative"
    >
      <div
        className={`
          relative overflow-hidden rounded-2xl border transition-all duration-300 cursor-default
          flex flex-col items-center justify-center gap-3
          xs:p-5 p-4 sm:p-6
          xs:min-h-[110px] min-h-[100px] sm:min-h-[120px]
          ${isDarkMode
            ? `bg-[#1a1640] border-[#ffffff10] ${hovered ? "border-[#915EFF50] shadow-[0_0_24px_#915EFF25]" : ""}`
            : `bg-white border-gray-100 ${hovered ? "border-violet-200 shadow-[0_8px_30px_rgba(145,94,255,0.12)]" : "shadow-sm"}`
          }
        `}
      >
        {/* Subtle gradient on hover */}
        <div
          className={`absolute inset-0 transition-opacity duration-300 pointer-events-none rounded-2xl ${
            isDarkMode
              ? "bg-gradient-to-br from-[#915EFF08] to-transparent"
              : "bg-gradient-to-br from-violet-50/60 to-transparent"
          } ${hovered ? "opacity-100" : "opacity-0"}`}
        />

        {/* Icon */}
        <div className="relative z-10 flex items-center justify-center">
          <img
            src={technology.icon}
            alt={technology.name}
            className={`
              xs:w-10 xs:h-10 w-9 h-9 sm:w-12 sm:h-12 object-contain
              transition-transform duration-300
              ${hovered ? "scale-110" : "scale-100"}
            `}
          />
        </div>

        {/* Label */}
        <span
          className={`
            relative z-10 text-center font-medium leading-tight
            xs:text-[11px] text-[10px] sm:text-[12px]
            transition-colors duration-300
            ${isDarkMode
              ? hovered ? "text-white" : "text-[#aaa6c3]"
              : hovered ? "text-violet-700" : "text-gray-500"
            }
          `}
        >
          {technology.name}
        </span>
      </div>
    </motion.div>
  );
};

const Tech = () => {
  const { isDarkMode } = useTheme();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} ${isDarkMode ? "text-secondary" : "text-gray-500"}`}>
          My toolkit
        </p>
        <h2 className={`${styles.sectionHeadText} ${isDarkMode ? "text-white" : "text-gray-900"}`}>
          Technologies.
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className={`mt-4 xs:text-[15px] text-[14px] sm:text-[17px] max-w-2xl leading-[26px] xs:leading-[28px] sm:leading-[30px] ${
          isDarkMode ? "text-secondary" : "text-gray-600"
        }`}
      >
        A curated set of technologies I work with to build performant, scalable,
        and polished digital products.
      </motion.p>

      {/* Divider */}
      <div
        className={`mt-10 mb-10 h-px w-full ${
          isDarkMode ? "bg-gradient-to-r from-transparent via-[#915EFF40] to-transparent" : "bg-gradient-to-r from-transparent via-violet-200 to-transparent"
        }`}
      />

      {/* Grid */}
      <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-6 gap-3 xs:gap-4 sm:gap-5">
        {technologies.map((technology, index) => (
          <TechCard key={technology.name} technology={technology} index={index} />
        ))}
      </div>

      {/* Bottom accent */}
      <div
        className={`mt-12 h-px w-full ${
          isDarkMode ? "bg-gradient-to-r from-transparent via-[#915EFF30] to-transparent" : "bg-gradient-to-r from-transparent via-violet-200 to-transparent"
        }`}
      />
    </>
  );
};

export default SectionWrapper(Tech, "");
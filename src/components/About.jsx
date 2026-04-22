import React from "react";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useTheme } from "../context/ThemeContext";

const ServiceCard = ({ index, title, icon }) => {
  const { isDarkMode } = useTheme();
  
  return (
  <Tilt className="xs:w-[170px] sm:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px]"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={`bg-tertiary rounded-[20px] xs:py-4 py-5 xs:px-8 px-12 min-h-[240px] xs:min-h-[220px] flex justify-evenly items-center flex-col ${
          isDarkMode ? "bg-tertiary" : "bg-gray-100"
        }`}
      >
        <img
          src={icon}
          alt="web-development"
          className="w-14 h-14 xs:w-16 xs:h-16 object-contain"
        />

        <h3 className={`text-[16px] xs:text-[18px] sm:text-[20px] font-bold text-center ${isDarkMode ? "text-white" : "text-gray-800"}`}>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);
};

const About = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} ${isDarkMode ? "text-secondary" : "text-gray-600"}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} ${isDarkMode ? "text-white" : "text-gray-900"}`}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={`mt-4 xs:text-[15px] text-[14px] sm:text-[17px] max-w-3xl leading-[24px] xs:leading-[26px] sm:leading-[30px] ${
          isDarkMode ? "text-secondary" : "text-gray-600"
        }`}
      >
        I'm a dynamic Full-Stack Developer with a proven ability to adapt to new
        technologies and environments. Skilled in both backend and frontend
        development, I'm passionate about collaborating with teams to deliver
        impactful web solutions. Let's work together to transform your ideas
        into reality.
      </motion.p>

      <div className="mt-16 xs:mt-12 flex flex-wrap xs:gap-5 sm:gap-10 gap-3 justify-center xs:justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <div className="mt-12 xs:mt-16 text-center">
        <Link
          to="/about"
          className="inline-block xs:px-6 px-8 xs:py-3 py-4 bg-violet-600 hover:bg-violet-700 xs:text-[14px] text-[14px] sm:text-[16px] text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Learn More About Me
        </Link>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

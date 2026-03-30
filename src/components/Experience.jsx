import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useTheme } from "../context/ThemeContext";

const ExperienceCard = ({ experience }) => {
  const { isDarkMode } = useTheme();
  
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: isDarkMode ? "#1d1836" : "#f5f5f5",
        color: isDarkMode ? "#fff" : "#1a1a1a",
      }}
      contentArrowStyle={{ borderRight: isDarkMode ? "7px solid  #232631" : "7px solid  #e0e0e0" }}
      date={experience.date}
      iconStyle={{ 
        background: experience.iconBg,
        border: isDarkMode ? "2px solid #fff" : "2px solid #333",
        boxShadow: isDarkMode ? "0 0 0 2px #fff" : "0 0 0 2px #333"
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className={`text-[24px] font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>{experience.title}</h3>
        <p
          className={`text-[16px] font-semibold ${isDarkMode ? "text-secondary" : "text-gray-600"}`}
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className={`text-[14px] pl-1 tracking-wider ${isDarkMode ? "text-white-100" : "text-gray-700"}`}
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center ${isDarkMode ? "text-secondary" : "text-gray-600"}`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center ${isDarkMode ? "text-white" : "text-gray-900"}`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline
          lineColor={isDarkMode ? "#fff" : "#333"}
        >
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");

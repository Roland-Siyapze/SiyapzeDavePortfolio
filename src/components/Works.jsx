import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { github, web } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useTheme } from "../context/ThemeContext";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  const { isDarkMode } = useTheme();
  // Determine which link to show
  const showLiveLink = live_link && live_link !== "";
  const showCodeLink = source_code_link && source_code_link !== "";

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={`p-3 xs:p-5 rounded-2xl xs:w-[320px] sm:w-[360px] w-full ${isDarkMode ? "bg-tertiary" : "bg-gray-100"}`}
      >
        <div className="relative w-full xs:h-[200px] h-[180px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end xs:m-3 m-2 card-img_hover gap-2">
            {showLiveLink && (
              <div
                onClick={() => window.open(live_link, "_blank")}
                className="bg-white/30 backdrop-blur-md w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-white/40 transition-all"
                title="View Live Project"
              >
                <img
                  src={web}
                  alt="live demo"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}
            {showCodeLink && (
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:opacity-80 transition-all"
                title="View Source Code"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}
          </div>
        </div>

        <div className="mt-3 xs:mt-5">
          <h3 className={`font-bold xs:text-[20px] text-[18px] sm:text-[24px] ${isDarkMode ? "text-white" : "text-gray-900"}`}>{name}</h3>
          <p className={`mt-2 xs:text-[14px] text-[13px] sm:text-[14px] leading-[22px] ${isDarkMode ? "text-secondary" : "text-gray-600"}`}>{description}</p>
        </div>

        <div className="mt-3 xs:mt-4 flex flex-wrap gap-1 xs:gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`xs:text-[13px] text-[12px] sm:text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const { isDarkMode } = useTheme();
  // Show only the first 3 projects
  const displayedProjects = projects.slice(0, 3);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} ${isDarkMode ? "text-secondary" : "text-gray-600"}`}>My work</p>
        <h2 className={`${styles.sectionHeadText} ${isDarkMode ? "text-white" : "text-gray-900"}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className={`mt-3 xs:text-[15px] text-[14px] sm:text-[17px] max-w-3xl leading-[22px] xs:leading-[26px] sm:leading-[30px] ${isDarkMode ? "text-secondary" : "text-gray-600"}`}
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-16 xs:mt-12 flex flex-wrap xs:gap-5 sm:gap-7 gap-4 justify-center xs:justify-start">
        {displayedProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      <div className="mt-12 xs:mt-16 flex justify-center">
        <Link to="/projects">
          <button className={`py-2 xs:py-3 px-6 xs:px-8 rounded-xl font-medium xs:text-[15px] text-[14px] sm:text-[16px] transition-all duration-300 ${
            isDarkMode 
              ? "bg-tertiary hover:bg-tertiary/80 text-white" 
              : "bg-gray-200 hover:bg-gray-300 text-gray-900"
          }`}>
            View All Projects
          </button>
        </Link>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");

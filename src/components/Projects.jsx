import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

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
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} initial="hidden" whileInView="show" viewport={{ once: true }}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={`p-5 rounded-2xl sm:w-[360px] w-full ${isDarkMode ? "bg-tertiary" : "bg-gray-100"}`}
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
            {showLiveLink && (
              <div
                onClick={() => window.open(live_link, "_blank")}
                className="bg-white/30 backdrop-blur-md w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
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
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
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

        <div className="mt-5">
          <h3 className={`font-bold text-[24px] ${isDarkMode ? "text-white" : "text-gray-900"}`}>{name}</h3>
          <p className={`mt-2 text-[14px] ${isDarkMode ? "text-secondary" : "text-gray-600"}`}>{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <>
      <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <p className={`${styles.sectionSubText} ${isDarkMode ? "text-secondary" : "text-gray-600"}`}>My work</p>
        <h2 className={`${styles.sectionHeadText} ${isDarkMode ? "text-white" : "text-gray-900"}`}>All Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden" whileInView="show" viewport={{ once: true }}
          className={`mt-3 text-[17px] max-w-3xl leading-[30px] ${isDarkMode ? "text-secondary" : "text-gray-600"}`}
        >
          The following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "");

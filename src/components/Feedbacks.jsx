import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { useTheme } from "../context/ThemeContext";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  const { isDarkMode } = useTheme();
  
  return (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className={`p-10 rounded-3xl xs:w-[320px] w-full ${isDarkMode ? "bg-black-200" : "bg-gray-200"}`}
  >
    <p className={`text-[48px] font-black ${isDarkMode ? "text-white" : "text-gray-900"}`}>"</p>

    <div className='mt-1'>
      <p className={`tracking-wider text-[18px] ${isDarkMode ? "text-white" : "text-gray-800"}`}>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className={`font-medium text-[16px] ${isDarkMode ? "text-white" : "text-gray-800"}`}>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className={`mt-1 text-[12px] ${isDarkMode ? "text-secondary" : "text-gray-500"}`}>
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);
};

const Feedbacks = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={`mt-12 rounded-[20px] ${isDarkMode ? "bg-black-100" : "bg-gray-200"}`}>
      <div
        className={`rounded-2xl ${styles.padding} min-h-[300px] ${isDarkMode ? "bg-tertiary" : "bg-gray-300"}`}
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} ${isDarkMode ? "text-secondary" : "text-gray-600"}`}>What others say</p>
          <h2 className={`${styles.sectionHeadText} ${isDarkMode ? "text-white" : "text-gray-900"}`}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");

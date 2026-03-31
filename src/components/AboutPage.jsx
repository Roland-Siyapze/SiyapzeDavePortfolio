import React from "react";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useTheme } from "../context/ThemeContext";
import { framework, coding, support, dataScience, profile } from "../assets";
import cv from "../assets/cv.pdf";

const LocationIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const EmailIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const SkillCard = ({ index, title, skills, icon }) => {
  const { isDarkMode } = useTheme();
  
  return (
    <Tilt className="w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.15, 0.75)} initial="hidden" whileInView="show" viewport={{ once: true }}
        className="w-full green-pink-gradient p-[1px] rounded-[20px]"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className={`rounded-[20px] py-6 px-5 min-h-[200px] flex justify-start items-start flex-col ${
            isDarkMode ? "bg-tertiary" : "bg-white shadow-lg"
          }`}
        >
          <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${isDarkMode ? "bg-black-200" : "bg-gray-200"}`}>
            <img src={icon} alt={title} className="w-10 h-10 object-contain" />
          </div>
          <h3 className={`text-[18px] font-bold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            {title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span 
                key={skill}
                className={`px-3 py-1 rounded-full text-xs ${
                  isDarkMode 
                    ? "bg-black-100 text-secondary" 
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const AboutPage = () => {
  const { isDarkMode } = useTheme();

  const personalInfo = {
    name: "Dave Roland Siyapze",
    title: "Full Stack Developer",
    location: "Douala, Cameroon",
    phone: "+237 657 546 363",
    email: "rsiyapze@gmail.com",
    website: "https://siyapzedaveportfolio.vercel.app/",
  };

  const summary = `Results-driven Full Stack & Mobile Web Developer with 3+ years of experience building scalable web and mobile applications across React Native, React, Laravel, and .NET ecosystems. Adept at handling full SDLC from UI/UX design and API integration to deployment and optimization. Passionate about creating seamless user experiences through clean architecture.`;

  const skillCategories = [
    {
      title: "Languages",
      icon: coding,
      skills: ["Python", "JavaScript", "PHP", "C#", "SQL", "C++"],
    },
    {
      title: "Frameworks",
      icon: framework,
      skills: [".NET", "Laravel", "React", "React Native", "Vue"],
    },
    {
      title: "Data & ML",
      icon: dataScience,
      skills: ["ML Integration", "Code Evaluation", "Data Analysis"],
    },
    {
      title: "Tools & Platforms",
      icon: support,
      skills: ["SQL Server", "Docker", "Git", "A/B Testing", "CI/CD"],
    },
  ];

  const education = {
    degree: "Bachelor of Engineering",
    major: "Computer Engineering",
    institution: "Institut Universitaire de la Côte",
    period: "2021 - 2025",
  };

  const certifications = [
    "Microsoft Office Specialist - PowerPoint & Excel (2019)",
    "IUC Bootcamp Participant",
    "Microsoft Office Competition Placements",
  ];

  const projects = [
    {
      name: "AI-Powered Coding Assessment Platform",
      period: "Jan 2025 - Jun 2025",
      description: "Automated code-scoring pipeline with ML-based heuristics for auto-grading candidates. Reduced manual screening effort significantly.",
      tags: ["React", "Python", "REST APIs", "ML"],
    },
    {
      name: "Full-stack E-commerce MVP",
      period: "Nov 2021 - Jan 2022",
      description: "End-to-end e-commerce prototype with auth, product search, cart, checkout & payment integration.",
      tags: ["React", "Laravel", "Payment API"],
    },
    {
      name: "Job Search Mobile App",
      period: "May 2023 - Jul 2023",
      description: "Cross-platform mobile job-listing app with searchable listings and user flows.",
      tags: ["React Native", "REST APIs"],
    },
  ];

  const softSkills = [
    {
      title: "Collaboration",
      desc: "Cross-functional teamwork with product, QA and ops to ship features.",
    },
    {
      title: "Problem Solving",
      desc: "Experience tutoring technical concepts clearly to peers and junior devs.",
    },
    {
      title: "Languages",
      desc: "English (fluent), French (native), German (basic)",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="min-h-screen bg-primary"
    >
      {/* Hero Section */}
      <div className= "pb-16">
        <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true }}   className="w-full">
          {/* Section Header Style */} 
          <div className="flex flex-row items-start gap-5">
            <div className="flex flex-col justify-center items-center">
              <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
              <div className="w-1 sm:h-32 h-20 violet-gradient" />
            </div>
            <div className="w-full">
              <p className={`${styles.sectionSubText} ${isDarkMode ? "text-secondary" : "text-gray-600"}`}>
                Get to know
              </p>
              <h1 className={`${styles.heroHeadText} ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                About Me
              </h1>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 mt-12 justify-center">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <Tilt
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
              className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden"
            >
              <div className="w-full h-full green-pink-gradient p-[3px] rounded-full">
                <div className={`w-full h-full rounded-full flex items-center justify-center ${
                  isDarkMode ? "bg-tertiary" : "bg-white"
                }`}>
                  <img 
                    src={profile} 
                    alt="Profile" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </Tilt>
          </div>

          {/* Personal Info */}
          <div className="text-center lg:text-left">
            <h2 className={`text-3xl lg:text-4xl font-bold mb-2 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}>
              {personalInfo.name}
            </h2>
            <h3 className="text-xl lg:text-2xl text-[#915EFF] font-semibold mb-6">
              {personalInfo.title}
            </h3>
            
            <div className={`space-y-3 text-lg ${isDarkMode ? "text-secondary" : "text-gray-600"}`}>
              <p className="flex items-center justify-center lg:justify-start gap-3">
                <LocationIcon className={`w-5 h-5 ${isDarkMode ? "text-secondary" : "text-gray-600"}`} />
                {personalInfo.location}
              </p>
              <p className="flex items-center justify-center lg:justify-start gap-3">
                <EmailIcon className={`w-5 h-5 ${isDarkMode ? "text-secondary" : "text-gray-600"}`} />
                {personalInfo.email}
              </p>
              <p className="flex items-center justify-center lg:justify-start gap-3">
                <PhoneIcon className={`w-5 h-5 ${isDarkMode ? "text-secondary" : "text-gray-600"}`} />
                {personalInfo.phone}
              </p>
            </div>
            
            {/* Resume Download Button */}
            <a
              href={cv}
              download="Dave_Roland_Siyapze_Resume.pdf"
              className="inline-block mt-8 px-8 py-4 bg-[#915EFF] hover:bg-[#7c4de6] text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <div className="py-16">
        <motion.div variants={fadeIn("", "", 0.1, 1)} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h3 className={`text-2xl lg:text-3xl font-bold mb-6 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}>
            <span className="text-[#915EFF]">//</span> Summary
          </h3>
          <div className={`p-6 lg:p-8 rounded-2xl ${
            isDarkMode ? "bg-tertiary" : "bg-white shadow-lg"
          }`}>
            <p className={`text-lg leading-relaxed ${
              isDarkMode ? "text-secondary" : "text-gray-600"
            }`}>
              {summary}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Technical Skills Section */}
      <div className="py-16">
        <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <p className={`${styles.sectionSubText} ${isDarkMode ? "text-secondary" : "text-gray-600"}`}>
            What I work with
          </p>
          <h2 className={`${styles.sectionHeadText} ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}>
            Skills & Expertise
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {skillCategories.map((category, index) => (
            <SkillCard 
              key={category.title} 
              index={index} 
              title={category.title}
              icon={category.icon}
              skills={category.skills}
            />
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="py-16">
        <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <p className={`${styles.sectionSubText} ${isDarkMode ? "text-secondary" : "text-gray-600"}`}>
            What I've built
          </p>
          <h2 className={`${styles.sectionHeadText} ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}>
            Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, index) => (
            <motion.div 
              key={project.name}
              variants={fadeIn("up", "spring", index * 0.1, 0.75)}
              initial="hidden" whileInView="show" viewport={{ once: true }}
            >
              <Tilt
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                className="w-full"
              >
                <div className={`p-6 rounded-2xl ${
                  isDarkMode ? "bg-tertiary" : "bg-white shadow-lg"
                }`}>
                  <div className="flex justify-between items-start mb-3">
                    <h4 className={`text-lg font-bold ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}>
                      {project.name}
                    </h4>
                  </div>
                  <span className="inline-block text-sm text-[#915EFF] font-medium mb-3">
                    {project.period}
                  </span>
                  <p className={`text-sm leading-relaxed mb-4 ${
                    isDarkMode ? "text-secondary" : "text-gray-600"
                  }`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 rounded text-xs bg-[#915EFF]/20 text-[#915EFF]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Education & Certifications Section */}
      <div className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div variants={fadeIn("right", "spring", 0.1, 0.75)} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h3 className={`text-2xl lg:text-3xl font-bold mb-8 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}>
              <span className="text-[#915EFF]">//</span> Education
            </h3>
            <div className={`p-6 rounded-2xl ${
              isDarkMode ? "bg-tertiary" : "bg-white shadow-lg"
            }`}>
              <h4 className={`text-xl font-semibold ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}>
                {education.degree}
              </h4>
              <p className="text-[#915EFF] font-medium mt-1">
                {education.major}
              </p>
              <p className={`mt-3 ${
                isDarkMode ? "text-secondary" : "text-gray-600"
              }`}>
                {education.institution}
              </p>
              <span className={`inline-block mt-3 px-4 py-2 rounded-full text-sm ${
                isDarkMode ? "bg-black-200 text-white" : "bg-gray-200 text-gray-700"
              }`}>
                {education.period}
              </span>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={fadeIn("right", "spring", 0.2, 0.75)} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h3 className={`text-2xl lg:text-3xl font-bold mb-8 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}>
              <span className="text-[#915EFF]">//</span> Certifications
            </h3>
            <div className={`space-y-4 ${
              isDarkMode ? "bg-tertiary" : "bg-white shadow-lg"
            } p-6 rounded-2xl`}>
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-3 p-3 rounded-xl ${
                    isDarkMode ? "bg-black-200/50" : "bg-gray-100"
                  }`}
                >
                  <div className="w-2 h-2 rounded-full bg-[#915EFF]" />
                  <span className={`${
                    isDarkMode ? "text-secondary" : "text-gray-700"
                  }`}>
                    {cert}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Transferable Skills Section */}
      <div className="py-16">
        <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <p className={`${styles.sectionSubText} ${isDarkMode ? "text-secondary" : "text-gray-600"}`}>
            Beyond coding
          </p>
          <h2 className={`${styles.sectionHeadText} ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}>
            Soft Skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {softSkills.map((skill, index) => (
            <motion.div 
              key={skill.title}
              variants={fadeIn("up", "spring", index * 0.1, 0.75)}
              initial="hidden" whileInView="show" viewport={{ once: true }}
            >
              <Tilt
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                className="w-full"
              >
                <div className={`p-6 rounded-2xl h-full ${
                  isDarkMode ? "bg-tertiary" : "bg-white shadow-lg"
                }`}>
                  <h4 className={`text-lg font-bold mb-2 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}>
                    {skill.title}
                  </h4>
                  <p className={`text-sm ${
                    isDarkMode ? "text-secondary" : "text-gray-600"
                  }`}>
                    {skill.desc}
                  </p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Back to Home Link */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto text-center">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#915EFF] hover:bg-[#7c4de6] text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(AboutPage, "");

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { useTheme } from "../context/ThemeContext";
import cv from "../assets/cv.pdf";
// Note: Add your profile image to assets folder and import it here
// import profile from "../assets/profile.png"; 

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

  const summary = `Results-driven Full Stack & Mobile Web Developer with 3+ years of experience building scalable web and mobile applications across React Native, React, Laravel, and .NET ecosystems. Adept at handling full SDLC from UI/UX design and API integration to deployment and optimization. Passionate about creating seamless user experiences through clean architecture. Strong focus on problem-solving, maintainable code, and cross-functional collaboration to deliver impactful, production-ready software.`;

  const technicalSkills = {
    languages: ["Python", "JavaScript (Node.js)", "PHP", "C#", "SQL", "C++"],
    frameworks: [".NET", "Laravel", "React", "React Native", "Vue"],
    dataML: ["Basic ML model integration", "Code evaluation pipelines", "Data analysis with Python"],
    tools: ["SQL Server", "Docker", "Git", "A/B testing", "Unit testing", "CI concepts"],
    other: ["SDLC", "REST APIs", "Authentication", "Payment integration"],
  };

  const education = {
    degree: "Bachelor of Engineering, Computer Engineering",
    institution: "Institut Universitaire de la Côte, Douala",
    period: "September 2021 - July 2025",
  };

  const certifications = [
    "Microsoft Office Specialist — PowerPoint & Excel (2019)",
    "IUC Bootcamp participant",
    "Microsoft Office competition placements",
  ];

  const transferableSkills = [
    "Collaboration & Communication: Worked cross-functionally with product, QA and ops to ship features.",
    "Problem Solving & Tutoring: Experience tutoring (Pythagore) — explains technical concepts clearly to peers and junior devs.",
    "Languages: English (fluent), French (native), German (basic).",
  ];

  const personalProjects = [
    {
      name: "AI-Powered Coding Assessment Platform",
      period: "January 2025 – June 2025",
      description: "Designed and prototyped an automated code-scoring pipeline that integrates static analysis and ML-based heuristics to auto-grade candidate submissions, reducing manual screening effort during pilot evaluations. Implemented REST APIs for submission intake and scoring, and dashboard endpoints for hiring teams to shortlist candidates faster.",
    },
    {
      name: "Full-stack E-commerce MVP",
      period: "November 2021 – January 2022",
      description: "Built an end-to-end e-commerce prototype (auth, product search, filters, cart, checkout & payment integration) used to validate product/market fit and demo the platform to potential vendors and early customers.",
    },
    {
      name: "Job Search Mobile App (React Native)",
      period: "May 2023 – July 2023",
      description: "Developed a mobile job-listing app to increase reach to mobile users and demonstrate cross-platform deployment; implemented searchable listings and user flows that mirrored web experience.",
    },
  ];

  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section with Profile */}
      <div className={`${styles.paddingX} pb-16`}>
        <motion.div variants={textVariant()} className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Profile Image - Left Column */}
            <div className="flex-shrink-0">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-teal-600 shadow-xl">
                {/* Note: Replace with actual profile image when available */}
                <div className={`w-full h-full flex items-center justify-center ${isDarkMode ? "bg-tertiary" : "bg-gray-300"}`}>
                  <span className={`text-6xl font-bold ${isDarkMode ? "text-white" : "text-gray-600"}`}>DR</span>
                </div>
              </div>
            </div>

            {/* Personal Info - Right Column */}
            <div className="flex-1 text-center md:text-left">
              <h1 className={`text-4xl md:text-5xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                {personalInfo.name}
              </h1>
              <h2 className={`text-2xl md:text-3xl mt-2 ${isDarkMode ? "text-teal-400" : "text-teal-600"}`}>
                {personalInfo.title}
              </h2>
              <div className={`mt-6 text-lg ${isDarkMode ? "text-secondary" : "text-gray-600"}`}>
                <p className="flex items-center justify-center md:justify-start gap-2">
                  📍 {personalInfo.location}
                </p>
                <p className="flex items-center justify-center md:justify-start gap-2 mt-2">
                  📧 {personalInfo.email}
                </p>
                <p className="flex items-center justify-center md:justify-start gap-2 mt-2">
                  📱 {personalInfo.phone}
                </p>
              </div>
              
              {/* Resume Download Button */}
              <a
                href={cv}
                download="Dave_Roland_Siyapze_Resume.pdf"
                className="inline-block mt-8 px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Download Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Summary Section */}
      <div className={`${styles.paddingX} py-12`}>
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeIn("", "", 0.1, 1)}>
            <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              Summary
            </h3>
            <p className={`text-lg leading-relaxed ${isDarkMode ? "text-secondary" : "text-gray-600"}`}>
              {summary}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Technical Skills Section */}
      <div className={`${styles.paddingX} py-12 bg-primary"}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div variants={textVariant()}>
            <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              Technical Skills
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {/* Languages */}
            <motion.div 
              variants={fadeIn("right", "spring", 0.1, 0.75)}
              className={`p-6 rounded-2xl ${isDarkMode ? "bg-tertiary" : "bg-gray-100"}`}
            >
              <h4 className={`text-lg font-semibold mb-3 ${isDarkMode ? "text-teal-400" : "text-teal-600"}`}>
                Languages
              </h4>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.languages.map((skill) => (
                  <span 
                    key={skill}
                    className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? "bg-black-200 text-white" : "bg-gray-200 text-gray-700"}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Frameworks */}
            <motion.div 
              variants={fadeIn("right", "spring", 0.2, 0.75)}
              className={`p-6 rounded-2xl ${isDarkMode ? "bg-tertiary" : "bg-gray-100"}`}
            >
              <h4 className={`text-lg font-semibold mb-3 ${isDarkMode ? "text-teal-400" : "text-teal-600"}`}>
                Frameworks / Libraries
              </h4>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.frameworks.map((skill) => (
                  <span 
                    key={skill}
                    className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? "bg-black-200 text-white" : "bg-gray-200 text-gray-700"}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div 
              variants={fadeIn("right", "spring", 0.3, 0.75)}
              className={`p-6 rounded-2xl ${isDarkMode ? "bg-tertiary" : "bg-gray-100"}`}
            >
              <h4 className={`text-lg font-semibold mb-3 ${isDarkMode ? "text-teal-400" : "text-teal-600"}`}>
                Tools / Platforms
              </h4>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.tools.map((skill) => (
                  <span 
                    key={skill}
                    className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? "bg-black-200 text-white" : "bg-gray-200 text-gray-700"}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Data/ML */}
            <motion.div 
              variants={fadeIn("right", "spring", 0.4, 0.75)}
              className={`p-6 rounded-2xl ${isDarkMode ? "bg-tertiary" : "bg-gray-100"}`}
            >
              <h4 className={`text-lg font-semibold mb-3 ${isDarkMode ? "text-teal-400" : "text-teal-600"}`}>
                Data / ML
              </h4>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.dataML.map((skill) => (
                  <span 
                    key={skill}
                    className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? "bg-black-200 text-white" : "bg-gray-200 text-gray-700"}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Other */}
            <motion.div 
              variants={fadeIn("right", "spring", 0.5, 0.75)}
              className={`p-6 rounded-2xl ${isDarkMode ? "bg-tertiary" : "bg-gray-100"}`}
            >
              <h4 className={`text-lg font-semibold mb-3 ${isDarkMode ? "text-teal-400" : "text-teal-600"}`}>
                Other
              </h4>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.other.map((skill) => (
                  <span 
                    key={skill}
                    className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? "bg-black-200 text-white" : "bg-gray-200 text-gray-700"}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>


      {/* Personal Projects Section */}
      <div className={`${styles.paddingX} py-12 bg-primary"}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div variants={textVariant()}>
            <h3 className={`text-2xl font-bold mb-8 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              Personal Projects
            </h3>
          </motion.div>

          <div className="space-y-6">
            {personalProjects.map((project, index) => (
              <motion.div 
                key={project.name}
                variants={fadeIn("", "", index * 0.1, 1)}
                className={`p-6 rounded-2xl ${isDarkMode ? "bg-tertiary" : "bg-white shadow-lg"}`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                  <h4 className={`text-lg font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                    {project.name}
                  </h4>
                  <span className={`mt-2 md:mt-0 text-sm ${isDarkMode ? "text-teal-400" : "text-teal-600"}`}>
                    {project.period}
                  </span>
                </div>
                <p className={`${isDarkMode ? "text-secondary" : "text-gray-600"}`}>
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Education & Certifications Section */}
      <div className={`${styles.paddingX} py-12`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Education */}
            <motion.div variants={fadeIn("right", "spring", 0.1, 0.75)}>
              <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                Education
              </h3>
              <div className={`p-6 rounded-2xl ${isDarkMode ? "bg-tertiary" : "bg-white shadow-lg"}`}>
                <h4 className={`text-lg font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  {education.degree}
                </h4>
                <p className={`mt-2 ${isDarkMode ? "text-secondary" : "text-gray-600"}`}>
                  {education.institution}
                </p>
                <span className={`inline-block mt-2 px-3 py-1 rounded-full text-sm ${isDarkMode ? "bg-black-200 text-white" : "bg-gray-200 text-gray-700"}`}>
                  {education.period}
                </span>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div variants={fadeIn("right", "spring", 0.2, 0.75)}>
              <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                Certifications & Achievements
              </h3>
              <div className={`p-6 rounded-2xl ${isDarkMode ? "bg-tertiary" : "bg-white shadow-lg"}`}>
                <ul className={`space-y-3 ${isDarkMode ? "text-secondary" : "text-gray-600"}`}>
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-teal-500">✓</span>
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Transferable Skills Section */}
      <div className={`${styles.paddingX} py-12 bg-primary"}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div variants={textVariant()}>
            <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              Transferable Skills
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {transferableSkills.map((skill, index) => (
              <motion.div 
                key={index}
                variants={fadeIn("right", "spring", index * 0.1, 0.75)}
                className={`p-6 rounded-2xl ${isDarkMode ? "bg-tertiary" : "bg-white shadow-lg"}`}
              >
                <p className={`${isDarkMode ? "text-secondary" : "text-gray-600"}`}>
                  {skill}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Back to Home Link */}
      <div className={`${styles.paddingX} py-12`}>
        <div className="max-w-7xl mx-auto text-center">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-semibold transition-all duration-300"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { useTheme } from "../context/ThemeContext";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";
import cv from "../assets/cv.pdf";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (toggle && !e.target.closest("button")) {
        setToggle(false);
      }
    };

    if (toggle) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [toggle]);

  const handleNavClick = (navTitle) => {
    setActive(navTitle);
    setToggle(false);
  };

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center xs:py-5 py-3 fixed top-0 z-20 transition-all duration-300 ${
        scrolled 
          ? isDarkMode 
            ? "bg-primary/95 backdrop-blur-sm shadow-lg" 
            : "bg-white/95 backdrop-blur-sm shadow-lg"
          : isDarkMode
          ? "bg-transparent"
          : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo & Brand */}
        <Link
          to="/"
          className="flex items-center xs:gap-2 gap-1 hover:opacity-80 transition-opacity"
          onClick={() => {
            setActive("");
            setToggle(false);
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-7 h-7 xs:w-9 xs:h-9 object-contain" />
          <p className={`xs:text-[16px] text-[14px] sm:text-[18px] font-bold cursor-pointer flex items-center ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}>
            Dave Roland &nbsp;
            <span className="sm:block hidden text-xs xs:text-sm"> | Fullstack Dev</span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none hidden sm:flex flex-row xs:gap-1 sm:gap-2 items-center">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <div
                className={`px-3 py-2 rounded-lg transition-all duration-300 cursor-pointer hover:${isDarkMode ? "bg-tertiary" : "bg-gray-100"} ${
                  active === nav.title 
                    ? isDarkMode
                      ? "text-violet-400 bg-tertiary"
                      : "text-violet-600 bg-gray-100"
                    : isDarkMode
                    ? "text-secondary hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                } xs:text-[16px] sm:text-[16px] md:text-[18px] font-medium`}
                onClick={() => handleNavClick(nav.title)}
              >
                {nav.id === 'projects' ? (
                  <Link to="/projects" className="block">{nav.title}</Link>
                ) : nav.id === 'about' ? (
                  <Link to="/about" className="block">{nav.title}</Link>
                ) : nav.id === 'contact' ? (
                  <Link to="/contact" className="block">{nav.title}</Link>
                ) : (
                  <a href={`#${nav.id}`} className="block">{nav.title}</a>
                )}
              </div>
            </li>
          ))}
        </ul>

        {/* Desktop Right Actions */}
        <div className="hidden sm:flex items-center xs:gap-3 sm:gap-4">
          <a
            href={cv}
            download="Dave_Roland_Siyapze_Resume.pdf"
            className={`px-4 py-2.5 font-medium rounded-lg transition-all duration-300 text-[14px] sm:text-[16px] ${
              isDarkMode
                ? "bg-violet-600 hover:bg-violet-700 text-white shadow-lg hover:shadow-violet-600/50"
                : "bg-violet-500 hover:bg-violet-600 text-white shadow-lg hover:shadow-violet-500/50"
            }`}
          >
            Resume
          </a>
          <button
            onClick={toggleTheme}
            className={`p-2.5 rounded-lg transition-all duration-300 hover:scale-110 ${
              isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
            }`}
            aria-label="Toggle theme"
            title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <img src={sun} alt="Light mode" className="w-5 h-5 invert" />
            ) : (
              <img src={moon} alt="Dark mode" className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button & Theme Toggle */}
        <div className="sm:hidden flex items-center xs:gap-2 gap-1.5">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
              isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
            }`}
            aria-label="Toggle theme"
            title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <img src={sun} alt="Light mode" className="w-5 h-5 invert" />
            ) : (
              <img src={moon} alt="Dark mode" className="w-5 h-5" />
            )}
          </button>
          <button
            onClick={() => setToggle(!toggle)}
            className={`p-2 rounded-lg transition-all duration-300 ${
              isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
            }`}
            aria-label="Toggle navigation menu"
            aria-expanded={toggle}
          >
            <img
              src={toggle ? close : menu}
              alt="menu"
              className={`w-6 h-6 xs:w-7 xs:h-7 object-contain transition-transform duration-300 ${
                toggle ? "rotate-90" : "rotate-0"
              } ${!isDarkMode ? "invert" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {toggle && (
        <div
          className={`absolute top-16 xs:top-20 right-0 left-0 mx-2 xs:mx-4 rounded-xl overflow-hidden shadow-2xl z-50 ${
            isDarkMode ? "bg-primary" : "bg-white"
          } border ${isDarkMode ? "border-gray-800" : "border-gray-200"} backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-300`}
        >
          <ul className="list-none flex flex-col py-3 xs:py-4">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`transition-all duration-300 ${
                  index !== navLinks.length - 1
                    ? isDarkMode
                      ? "border-b border-gray-800"
                      : "border-b border-gray-200"
                    : ""
                }`}
              >
                <div
                  className={`px-4 xs:px-6 py-3 xs:py-3 font-medium cursor-pointer transition-colors duration-300 ${
                    active === nav.title
                      ? isDarkMode
                        ? "text-violet-400 bg-gray-900"
                        : "text-violet-600 bg-gray-100"
                      : isDarkMode
                      ? "text-secondary hover:text-white hover:bg-gray-900"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  } xs:text-[15px] text-[14px]`}
                  onClick={() => handleNavClick(nav.title)}
                >
                  {nav.id === 'projects' ? (
                    <Link to="/projects" className="block">{nav.title}</Link>
                  ) : nav.id === 'about' ? (
                    <Link to="/about" className="block">{nav.title}</Link>
                  ) : nav.id === 'contact' ? (
                    <Link to="/contact" className="block">{nav.title}</Link>
                  ) : (
                    <a href={`#${nav.id}`} className="block">{nav.title}</a>
                  )}
                </div>
              </li>
            ))}
            <li className={`${isDarkMode ? "border-t border-gray-800" : "border-t border-gray-200"}`}>
              <a
                href={cv}
                download="Dave_Roland_Siyapze_Resume.pdf"
                className={`block px-4 xs:px-6 py-3 xs:py-3 font-medium transition-colors duration-300 xs:text-[15px] text-[14px] ${
                  isDarkMode
                    ? "text-violet-400 hover:bg-gray-900 hover:text-violet-300"
                    : "text-violet-600 hover:bg-gray-50 hover:text-violet-700"
                }`}
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* Mobile Menu Backdrop */}
      {toggle && (
        <div
          className="fixed inset-0 bg-black/20 -z-10 sm:hidden"
          onClick={() => setToggle(false)}
          aria-hidden="true"
        />      )}
    </nav>
  );
};

export default Navbar;

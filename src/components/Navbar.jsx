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

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center xs:py-5 py-3 fixed top-0 z-20 transition-colors duration-300 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center xs:gap-2 gap-1"
          onClick={() => {
            setActive("");
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

        <ul className="list-none hidden sm:flex flex-row xs:gap-8 sm:gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white xs:text-[16px] sm:text-[18px] font-medium cursor-pointer transition-colors ${
                isDarkMode ? "text-white" : "text-gray-700"
              }`}
              onClick={() => setActive(nav.title)}
            >
              {nav.id === 'projects' ? (
                <Link to="/projects">{nav.title}</Link>
              ) : nav.id === 'about' ? (
                <Link to="/about">{nav.title}</Link>
              ) : nav.id === 'contact' ? (
                <Link to="/contact">{nav.title}</Link>
              ) : (
                <a href={`#${nav.id}`}>{nav.title}</a>
              )}
            </li>
          ))}
          <li>
            <a
              href={cv}
              download="Dave_Roland_Siyapze_Resume.pdf"
              className="px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-full transition-colors xs:text-[14px] sm:text-[16px]"
            >
              Resume
            </a>
          </li>
          <li>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-200"
              }`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <img src={sun} alt="Light mode" className="w-5 h-5 invert" />
              ) : (
                <img src={moon} alt="Dark mode" className="w-5 h-5" />
              )}
            </button>
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center xs:gap-2 gap-1">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${
              isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-200"
            }`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <img src={sun} alt="Light mode" className="w-5 h-5 invert" />
            ) : (
              <img src={moon} alt="Dark mode" className="w-5 h-5" />
            )}
          </button>
          <button
            onClick={() => setToggle(!toggle)}
            className="p-1 rounded-full transition-colors"
            aria-label="Toggle navigation menu"
          >
            <img
              src={toggle ? close : menu}
              alt="menu"
              className={`w-6 h-6 xs:w-[28px] xs:h-[28px] object-contain ${
                !isDarkMode ? "invert" : ""
              }`}
            />
          </button>

          {toggle && (
            <div
              className={`p-4 xs:p-6 black-gradient absolute top-14 xs:top-20 right-0 mx-2 xs:mx-4 my-2 min-w-[160px] xs:min-w-[180px] z-10 rounded-xl shadow-lg`}
            >
              <ul className="list-none flex justify-end items-start flex-col xs:gap-4 gap-3">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer xs:text-[16px] text-[14px] transition-colors ${
                      active === nav.title ? "text-white" : "text-secondary"
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    {nav.id === 'projects' ? (
                      <Link to="/projects">{nav.title}</Link>
                    ) : nav.id === 'about' ? (
                      <Link to="/about">{nav.title}</Link>
                    ) : nav.id === 'contact' ? (
                      <Link to="/contact">{nav.title}</Link>
                    ) : (
                      <a href={`#${nav.id}`}>{nav.title}</a>
                    )}
                  </li>
                ))}
                <li>
                  <a
                    href={cv}
                    download="Dave_Roland_Siyapze_Resume.pdf"
                    className="font-poppins font-medium cursor-pointer xs:text-[16px] text-[14px] text-violet-400 hover:text-violet-300 transition-colors"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

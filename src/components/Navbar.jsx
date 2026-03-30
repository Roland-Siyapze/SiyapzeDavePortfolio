import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { useTheme } from "../context/ThemeContext";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";

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
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className={`text-[18px] font-bold cursor-pointer flex ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}>
            Dave Roland &nbsp;
            <span className="sm:block hidden"> | Fullstack Dev</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer ${
                isDarkMode ? "text-white" : "text-gray-700"
              }`}
              onClick={() => setActive(nav.title)}
            >
              {nav.id === 'projects' ? (
                <Link to="/projects">{nav.title}</Link>
              ) : (
                <a href={`#${nav.id}`}>{nav.title}</a>
              )}
            </li>
          ))}
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

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            onClick={toggleTheme}
            className={`p-2 mr-2 rounded-full transition-colors ${
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
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  {nav.id === 'projects' ? (
                    <Link to="/projects">{nav.title}</Link>
                  ) : (
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

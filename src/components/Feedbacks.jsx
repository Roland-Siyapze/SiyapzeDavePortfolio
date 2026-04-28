import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import { useTheme } from "../context/ThemeContext";

const Feedbacks = () => {
  const { isDarkMode } = useTheme();

  useEffect(() => {
    if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    const applyTheme = () => {
      const widget = document.querySelector(
        ".elfsight-app-68fe209b-70b6-4a2e-b54b-c21cde23d089"
      );
      if (widget) {
        widget.setAttribute(
          "data-elfsight-app-theme",
          isDarkMode ? "dark" : "light"
        );
      }
      if (window.eapps?.Platform) {
        window.eapps.Platform.reload();
      }
    };
    const timeout = setTimeout(applyTheme, 300);
    return () => clearTimeout(timeout);
  }, [isDarkMode]);

  const highlights = [
    {
      label: "Quality Work",
      desc: "Delivering solutions that exceed expectations on every project.",
    },
    {
      label: "On-Time Delivery",
      desc: "Projects completed on schedule and within agreed budgets.",
    },
    {
      label: "Dedicated Support",
      desc: "Clear communication and responsiveness throughout.",
    },
  ];

  return (
    <div className="xs:mt-12 mt-8">
      {/* ── Section header ─────────────────────────────────────── */}
      <motion.div variants={textVariant()}>
        <p
          className={`${styles.sectionSubText} ${
            isDarkMode ? "text-secondary" : "text-[#5c5a72]"
          }`}
        >
          What others say
        </p>
        <h2
          className={`${styles.sectionHeadText} ${
            isDarkMode ? "text-white" : "text-[#1c1b2e]"
          }`}
        >
          Testimonials.
        </h2>
      </motion.div>

      {/* ── Two-column body ────────────────────────────────────── */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        {/* Left — value props */}
        <motion.div
          variants={fadeIn("right", "tween", 0.1, 0.8)}
          className="hidden md:flex flex-col gap-6"
        >
          <p
            className={`text-[15px] leading-[26px] ${
              isDarkMode ? "text-secondary" : "text-[#5c5a72]"
            }`}
          >
            Clients trust me to deliver reliable, high-quality work. Here is
            what they have shared after working together.
          </p>

          <div className="flex flex-col gap-4 mt-2">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                variants={fadeIn("up", "tween", 0.1 + i * 0.1, 0.6)}
                className={`flex items-start gap-4 p-5 rounded-2xl border transition-colors duration-300 ${
                  isDarkMode
                    ? "bg-[#16162a] border-[rgba(255,255,255,0.06)]"
                    : "bg-[#eceae4] border-[rgba(28,27,46,0.08)]"
                }`}
              >
                {/* Accent dot */}
                <div
                  className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${
                    isDarkMode ? "bg-[#7c5cfc]" : "bg-[#6246ea]"
                  }`}
                />
                <div>
                  <p
                    className={`font-semibold text-[14px] mb-1 ${
                      isDarkMode ? "text-white" : "text-[#1c1b2e]"
                    }`}
                  >
                    {item.label}
                  </p>
                  <p
                    className={`text-[13px] leading-[20px] ${
                      isDarkMode ? "text-secondary" : "text-[#5c5a72]"
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right — Elfsight widget */}
        <motion.div
          variants={fadeIn("left", "tween", 0.15, 0.8)}
          className={`rounded-2xl border ${
            isDarkMode
              ? "border-[rgba(255,255,255,0.06)]"
              : "border-[rgba(28,27,46,0.08)]"
          }`}
          style={{
            /*
             * The background here deliberately matches what Elfsight
             * renders its widget on — transparent on dark, the same warm
             * parchment on light — so the widget feels embedded, not
             * pasted on top.
             */
            background: isDarkMode
              ? "transparent"
              : "#f4f3ef",
          }}
        >
          <div
            className="elfsight-app-68fe209b-70b6-4a2e-b54b-c21cde23d089 w-full"
            data-elfsight-app-lazy
            data-elfsight-app-theme={isDarkMode ? "dark" : "light"}
          />
        </motion.div>
      </div>

      {/* ── Bottom rule — consistent with Tech section ──────────── */}
      <div
        className={`mt-16 h-px w-full ${
          isDarkMode
            ? "bg-gradient-to-r from-transparent via-[#7c5cfc30] to-transparent"
            : "bg-gradient-to-r from-transparent via-[#6246ea20] to-transparent"
        }`}
      />
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
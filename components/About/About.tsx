"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Certifications from "./Certifications";
import Skills from "./Skills";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  return (
    <section
      id="about"
    >
      <h1 className="pt-5">About Me</h1>

      <motion.p
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ ease: "easeIn", duration: 0.5, delay: 0.2 }}
        className="text-center w-[1000px] mt-0.5"
      >
        Hello, everyone. I&apos;m{" "}
        <span className="text-primary">Thamizhiniyan C S</span>, an Ethical
        Hacker, Next.js Developer, and Cyber Security enthusiast currently in my
        third year of engineering studies. My expertise is centered around cyber
        security, digital forensics, and crafting engaging web applications with
        Next.js.
      </motion.p>

      <div className="w-[1000px] h-[600px] flex justify-center items-start mt-5 ">
        <Skills />
        <Certifications />
      </div>
    </section>
  );
};

export default About;

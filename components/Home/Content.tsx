"use client";

import React from "react";
import { IconBrandLinkedin, IconBrandGithubFilled } from "@tabler/icons-react";
import { motion, Variants } from "framer-motion";
import MatrixRain from "@/components/Home/MatrixRain";
import AnimatedText from "../AnimatedText";

const Content = ({
  textColor,
  matrixRain,
}: {
  textColor: string;
  matrixRain: boolean;
}) => {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ ease: "easeOut", duration: 0.5 }}
      className={`${textColor} absolute w-full h-full top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col justify-center items-center rounded-full *:tracking-widest *:z-[2]`}
    >
      {matrixRain && <MatrixRain className="z-[1]" />}

      <motion.h4 variants={variants} className="text-sm sm:text-xl">
        Hey Folks!!, I am
      </motion.h4>

      <AnimatedText
        el="h1"
        text={["Thamizhiniyan C S"]}
        className="text-2xl sm:text-4xl md:text-6xl xl:text-8xl my-8"
        repeatDelay={10000}
      />

      <div className="flex items-center h-[30px] sm:h-[50px]">
        <motion.h3
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: [null, -10, 0], opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 1.6 }}
          className="text-sm sm:text-2xl"
        >
          Ethical Hacker
        </motion.h3>

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [null, -10, 0] }}
          transition={{ ease: "easeIn", duration: 0.5, delay: 1.5 }}
          className="w-[1px] h-full mx-5 bg-primary"
        />

        <motion.h3
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: [null, 10, 0], opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 1.6 }}
          className="text-sm sm:text-2xl"
        >
          Next.js Developer
        </motion.h3>
      </div>

      <div className={`flex items-center justify-center mt-5 *:m-2`}>
        <motion.a
          href="https://www.linkedin.com/in/thamizhiniyancs/"
          target="_blank"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: [null, -10, 0], opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 2 }}
        >
          <IconBrandLinkedin />
        </motion.a>
        <motion.a
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: [null, 10, 0], opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 2 }}
          href="https://github.com/Thamizhiniyan18/"
          target="_blank"
        >
          <IconBrandGithubFilled />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Content;

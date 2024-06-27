"use client";

import React from "react";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import MatrixRainingCode from "@/components/Home/MatrixRain";
import Link from "next/link";
import { useState, useEffect } from "react";

interface MousePosition {
  x: number;
  y: number;
}

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  const size = 500;

  const { x, y } = mousePosition;

  useEffect(() => {
    setMousePosition({ x: window.innerWidth / 2, y: window.innerHeight / 2});

    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      className="relative w-full flex justify-center items-center h-[calc(100vh-50px)] max-h-[1080px]"
    >
      <div className="absolute flex flex-col justify-center items-center rounded-full">
        <h4 className="scroll-m-20 text-md md:text-xl font-semibold tracking-widest">
          Hey Folks!!, I am
        </h4>
        <h1 className="scroll-m-20 text-2xl md:text-6xl font-extrabold tracking-widest xl:text-8xl my-8">
          Thamizhiniyan C S
        </h1>
        <div className="flex items-center h-[50px]">
          <motion.h3
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: [null, -10, 0], opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}
            className="scroll-m-20 text-md text-right md:text-2xl font-semibold tracking-widest"
          >
            Penetration Tester
          </motion.h3>
          <Separator className="bg-primary mx-5" orientation="vertical" />
          <motion.h3
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: [null, 10, 0], opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}
            className="scroll-m-20 text-md text-left md:text-2xl font-semibold tracking-widest"
          >
            Next.js Developer
          </motion.h3>
        </div>
      </div>

      <motion.div
        className="hidden lg:flex overflow-hidden mouse-mask"
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut" }}
      >
        <div className="absolute flex flex-col justify-center items-center rounded-full">
          <MatrixRainingCode className="z-[1]" />
          <h4 className="scroll-m-20 text-xl font-semibold tracking-widest z-[2]">
            Hey Folks!!, I am
          </h4>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-widest z-[2] lg:text-8xl my-8">
            Thamizhiniyan C S
          </h1>
          <div className="flex items-center h-[50px] z-[2]">
            <motion.h3
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: [null, -10, 0], opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}
              className="scroll-m-20 text-md text-right md:text-2xl font-semibold tracking-widest"
            >
              Penetration Tester
            </motion.h3>
            <Separator className="bg-primary mx-5" orientation="vertical" />
            <motion.h3
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: [null, 10, 0], opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}
              className="scroll-m-20 text-md text-left md:text-2xl font-semibold tracking-widest"
            >
              Next.js Developer
            </motion.h3>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;

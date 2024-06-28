"use client";

import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Content from "./Content";

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
    let timeout: NodeJS.Timeout;
    const show = () => {
      timeout = setTimeout(async () => {}, 1000);
    };

    setMousePosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section id="home" className="mt-[50px]">
      <Content textColor="text-white" matrixRain={false} />

      <motion.div
        className="hidden lg:flex overflow-hidden mouse-mask"
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ ease: "backOut", duration: 0, delay: 0 }}
      >
        <Content textColor="text-primary" matrixRain={true} />
      </motion.div>
    </section>
  );
};

export default HeroSection;

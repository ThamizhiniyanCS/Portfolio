"use client";

import React from "react";
import { motion, useScroll } from "framer-motion";

type Props = {};

const NavScrollProgress = (props: Props) => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="progress-bar h-[1px] bg-primary"
      style={{ transformOrigin: "0%", scaleX: scrollYProgress }}
    />
  );
};

export default NavScrollProgress;
"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants, useInView } from "framer-motion";
import { useRef } from "react";
import { certifications } from "@/data/certifications";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  const defaultAnimations: Variants = {
    hidden: {
      opacity: 0,
      x: 40,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      className="w-full max-w-[450px] inline-block pl-1 mt-10 lg:mt-0"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ staggerChildren: 0.2 }}
    >
      <motion.h2 className="border-primary" variants={defaultAnimations}>
        Professional Certifications
      </motion.h2>
      {certifications.map(({ badge, link, title, validity, alt_text }) => (
        <motion.a
          key={Math.random()}
          href={link}
          target="_blank"
          className="inline-block w-full"
          variants={defaultAnimations}
        >
          <Card className="w-full max-h-[150px] sm:h-[100px] flex justify-left items-center p-2 border-none hover:bg-white/10">
            <Image src={badge} alt={alt_text} width={60} height={60}></Image>
            <div className="flex flex-col justify-center items-start p-2">
              <CardHeader className="p-0">
                <CardTitle className="text-lg">{title}</CardTitle>
              </CardHeader>
              <CardFooter className="p-0">
                <CardDescription>Validity: {validity}</CardDescription>
              </CardFooter>
            </div>
          </Card>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Certifications;

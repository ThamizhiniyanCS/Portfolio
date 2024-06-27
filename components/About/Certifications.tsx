"use client";

import React from "react";
import CEH from "@/public/CEH.png";
import CEHPRACTICAL from "@/public/CEHPRACTICAL.png";
import CEHMASTER from "@/public/CEHMASTER.png";
import MicrosoftBadge from "@/public/microsoft-certified-fundamentals-badge.svg";
import Image from "next/image";
import { motion, Variants, useInView } from "framer-motion";
import { useRef } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Certifications = () => {
  const certifications: {
    title: string;
    link: string;
    validity: string;
    badge: any;
    alt_text: string;
  }[] = [
    {
      title: "Certified Ethical Hacker (Theory)",
      validity: "2022 – 2025",
      link: "https://aspen.eccouncil.org/VerifyBadge?type=certification&a=AmSVYbqOhED0xd0auc6OIHg/9YhBLfakT4vhpWe2lWQ=",
      badge: CEH,
      alt_text: "Certified Ethical Hacker (Theory) Badge",
    },
    {
      title: "Certified Ethical Hacker (Practical)",
      validity: "2024 – 2027",
      link: "https://aspen.eccouncil.org/VerifyBadge?type=certification&a=lDUMGA02ZrQ5jP7bkbcoZa3rwrt9D8eOqKAzTKscIoI=",
      badge: CEHPRACTICAL,
      alt_text: "Certified Ethical Hacker (Practical) Badge",
    },
    {
      title: "Certified Ethical Hacker (Master)",
      validity: "2024 – 2027",
      link: "https://aspen.eccouncil.org/VerifyBadge?type=certification&a=lDUMGA02ZrQ5jP7bkbcoZfW3yjIB2u9cxFYTWc6XFuY=",
      badge: CEHMASTER,
      alt_text: "Certified Ethical Hacker (Master) Badge",
    },
    {
      title:
        "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
      validity: "Lifetime",
      link: "https://learn.microsoft.com/api/credentials/share/en-gb/ThamizhiniyanCS-1631/CFF28567621E4E2D",
      badge: MicrosoftBadge,
      alt_text:
        "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
    },
    {
      title: "Microsoft Certified: Azure Data Fundamentals",
      validity: "Lifetime",
      link: "https://learn.microsoft.com/api/credentials/share/en-gb/ThamizhiniyanCS-1631/A008F0B23CEF411E",
      badge: MicrosoftBadge,
      alt_text: "Microsoft Certified: Azure Data Fundamentals",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

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
      className="w-[450px] inline-block pl-1"
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
          <Card className="w-full h-[100px] flex justify-left items-center p-2 border-none hover:bg-white/10">
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

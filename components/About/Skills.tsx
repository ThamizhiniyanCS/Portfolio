import React from "react";
import LogoComponent, { LogoComponentData } from "./LogoComponent";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { Categories } from "@/data/skillsData";
import { motion } from "framer-motion";

const SkillsLoop = () => {
  return (
    <TableBody className="">
      {Object.entries(Categories).map(([key, values]) => (
        <TableRow key={key} className="">
          <TableCell className="">{key}</TableCell>
          <TableCell className="flex flex-row">
            {values.map(
              ({
                logoData,
                href,
                description,
                ClassName,
                ImageSource,
              }: LogoComponentData) => (
                <LogoComponent
                  key={href}
                  logoData={logoData}
                  href={href}
                  ClassName={ClassName}
                  description={description}
                  ImageSource={ImageSource}
                />
              )
            )}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

const Skills = () => {
  return (
    <motion.div
      initial={{ x: -30, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ ease: "easeIn", duration: 0.5 }}
      className="w-full max-w-[550px] h-full flex flex-col items-start justify-start pr-1"
    >
      <h2 className="w-full border-primary">Skills</h2>
      <Table>
        <TableCaption className="hidden lg:table-caption">
          Hover over each logo to know more about it.
        </TableCaption>
        <SkillsLoop />
      </Table>
    </motion.div>
  );
};

export default Skills;

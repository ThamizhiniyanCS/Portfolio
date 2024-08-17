import React from "react";
import { IconBrandLinkedin, IconBrandGithubFilled } from "@tabler/icons-react";

const Footer = () => {
  const date = new Date();

  return (
    <div className="w-full h-40 flex justify-center items-center flex-col">
      <div className="flex items-center justify-center text-primary">
        <a href="https://www.linkedin.com/in/thamizhiniyancs/" target="_blank">
          <IconBrandLinkedin />
        </a>
        <a href="https://github.com/Thamizhiniyan18/" target="_blank">
          <IconBrandGithubFilled />
        </a>
      </div>
      <p className="hidden md:block text-slate-500 text-xs tracking-widest">
        Designed & Developed by{" "}
        <span className="text-primary leading-[.5rem] text-base">
          Thamizhiniyan C S
        </span>{" "}
        Copyrights &#169; {date.getFullYear()}
      </p>
      <div className="flex md:hidden flex-col w-full items-center mt-3">
        <p className="text-slate-500 text-xs tracking-widest">
          Designed & Developed by
        </p>
        <p className="text-primary leading-[.5rem]">Thamizhiniyan C S</p>
        <p className="text-slate-500 text-xs tracking-widest">
          Copyrights &#169; {date.getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Footer;

import {
  siNextdotjs,
  siReact,
  siWindows,
  siLinux,
  siDocker,
  siVercel,
  siNodedotjs,
  siClerk,
  siFramer,
  siHtml5,
  siCss3,
  siTailwindcss,
  siShadcnui,
  siMysql,
  siMongodb,
  siPython,
  siJavascript,
  siTypescript,
  siGnubash,
  siBurpsuite,
  siWireshark,
  siMetasploit,
  siZap,
} from "simple-icons";
import { LogoComponentData } from "../components/About/LogoComponent";
import PythonLogo from "@/public/python-logo-only.svg";
import VercelLogo from "@/public/vercel-icon-light.svg";
import FramerLogo from "@/public/framer-color-logo.svg";
import TenableNessusLogo from "@/public/TenableNessusLogo.svg";
import NmapLogo from "@/public/sitelogo-nmap.svg";

const Frameworks: LogoComponentData[] = [
  {
    logoData: siNextdotjs,
    href: "https://nextjs.org/",
    description: "The React Framework for the Web.",
    ClassName: "bg-white rounded-full",
  },
];

const Frontend: LogoComponentData[] = [
  {
    logoData: siReact,
    href: "https://react.dev/",
    description: "The library for web and native user interfaces.",
  },
  {
    logoData: siShadcnui,
    href: "https://ui.shadcn.com/",
    description:
      "Beautifully designed components that you can copy and paste into your apps.",
    ClassName: "bg-white rounded-sm",
  },
  {
    logoData: siTailwindcss,
    href: "https://tailwindcss.com/",
    description:
      "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
  },
  {
    logoData: siFramer,
    href: "https://www.framer.com/motion/",
    description:
      "Framer Motion is a simple yet powerful motion library for React.",
    ImageSource: FramerLogo,
    ClassName: "",
  },
  {
    logoData: siHtml5,
    href: "https://html.spec.whatwg.org/",
    description: "HTML is the World Wide Web's core markup language.",
  },
  {
    logoData: siCss3,
    href: "https://www.w3.org/TR/CSS/",
    description:
      "CSS is a language for writing style sheets, and is designed to describe the rendering of structured documents (such as HTML and XML) on a variety of media.",
  },
];

const Databases: LogoComponentData[] = [
  {
    logoData: siMongodb,
    href: "https://www.mongodb.com/",
    description:
      "The world's most popular document database is now the world's most versatile developer data platform.",
  },
  {
    logoData: siMysql,
    href: "https://www.mysql.com/",
    description: "The world's most popular open source database.",
  },
];

const Backend: LogoComponentData[] = [
  {
    logoData: siNodedotjs,
    href: "https://nodejs.org/",
    description:
      "Node.js® is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.",
  },
];

const ProgrammingScripting: LogoComponentData[] = [
  {
    logoData: siGnubash,
    href: "https://www.gnu.org/software/bash/",
    description:
      "Bash is a free software shell that supports command-line editing, job control, shell functions, arrays, and more.",
  },
  {
    logoData: siPython,
    ImageSource: PythonLogo,
    href: "https://www.python.org/",
    description:
      "Python is a programming language that lets you work quickly and integrate systems more effectively.",
  },
  {
    logoData: siJavascript,
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    description:
      "JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions.",
    ClassName: "bg-white",
  },
  {
    logoData: siTypescript,
    href: "https://www.typescriptlang.org/",
    description:
      "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
  },
];

const OperatingSystems: LogoComponentData[] = [
  {
    logoData: siLinux,
    href: "https://kernel.org/",
    description:
      "Linux is a clone of the operating system Unix, written from scratch by Linus Torvalds with assistance from a loosely-knit team of hackers across the Net.",
    // ClassName: "bg-white rounded-full",
  },
  {
    logoData: siWindows,
    href: "https://www.microsoft.com/en-in/windows/",
    description:
      "Microsoft Windows is a product line of proprietary graphical operating systems developed and marketed by Microsoft.",
  },
];

const Others: LogoComponentData[] = [
  {
    logoData: siClerk,
    href: "https://clerk.com/",
    description:
      "Clerk is a complete suite of embeddable UIs, flexible APIs, and admin dashboards to authenticate and manage your users.",
  },
  {
    logoData: siDocker,
    href: "https://www.docker.com/",
    description:
      "Docker helps developers build, share, run, and verify applications anywhere — without tedious environment configuration or management.",
  },
  {
    logoData: siVercel,
    href: "https://vercel.com/",
    description:
      "Vercel provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web.",
    ImageSource: VercelLogo,
  },
];

const Security: LogoComponentData[] = [
  {
    logoData: siBurpsuite,
    href: "https://portswigger.net/burp",
    description:
      "Burp Suite enables its users to accelerate application security testing, no matter what their use case.",
  },
  {
    logoData: siZap,
    href: "https://www.zaproxy.org/",
    description:
      "The world’s most widely used web app scanner. Free and open source.",
  },
  {
    logoData: siWireshark,
    href: "https://www.wireshark.org/",
    description: "The world's most popular network protocol analyzer.",
  },
  {
    logoData: siMetasploit,
    href: "https://metasploit.com/",
    description: "The world’s most used penetration testing framework.",
  },
  {
    logoData: {
      title: "Tenable Nessus",
      hex: "",
      path: "",
      slug: "",
      source: "https://www.tenable.com/tenable-logos",
      guidelines:
        "https://static.tenable.com/marketing/brand/Tenable_Brand_Guidelines.pdf",
      svg: "",
    },
    href: "https://www.tenable.com/products/nessus",
    description:
      "The Global Gold Standard in Vulnerability Assessment Built for the Modern Attack Surface.",
    ImageSource: TenableNessusLogo,
    ClassName: "bg-white rounded-sm",
  },
  {
    logoData: {
      title: "Nmap",
      hex: "",
      path: "",
      slug: "",
      source: "https://nmap.org/images/",
      guidelines:
        "https://static.tenable.com/marketing/brand/Tenable_Brand_Guidelines.pdf",
      svg: "",
    },
    href: "https://nmap.org/",
    description:
      "Nmap (“Network Mapper”) is an open source tool for network exploration and security auditing.",
    ImageSource: NmapLogo,
  },
];

export const Categories: Record<string, LogoComponentData[]> = {
  Frameworks,
  Frontend,
  Backend,
  Databases,
  Others,
  "Operating Systems": OperatingSystems,
  "Programming/Scripting": ProgrammingScripting,
  Security,
};

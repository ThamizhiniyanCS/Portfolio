"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import NavScrollProgress from "@/components/NavScrollProgress";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "All",
    href: "/writeups?sbd=latest",
    description: "All the Writeups that I have written so far.",
  },
  {
    title: "HackTheBox",
    href: "/writeups?platform=hackthebox&sbd=latest",
    description: "HackTheBox Writeups.",
  },
  {
    title: "TryHackMe",
    href: "/writeups?platform=tryhackme&sbd=latest",
    description: "TryHackMe Writeups.",
  },
];

type Props = {};

export default function NavBar({}: Props) {
  const links: { name: string; href: string }[] = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Writeups", href: "#writeups" },
    { name: "Cheatsheets", href: "#cheatsheets" },
  ];

  return (
    <nav>
      <div className="xl:flex z-[45] bg-background w-full h-[49px] justify-between items-center px-10">
        <Link href="/">
          <p className="">Thamizhiniyan C S</p>
        </Link>

        <NavigationMenu className="">
          <NavigationMenuList>
            {links.map(({ name, href }) => (
              <NavigationMenuItem key={Math.random()}>
                <Link href={href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <NavScrollProgress />
    </nav>
  );
}

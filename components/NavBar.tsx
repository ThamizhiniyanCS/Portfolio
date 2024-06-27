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
  return (
    <div className="hidden xl:flex z-[45] bg-background fixed top-0 left-0 w-full h-[50px] justify-between items-center px-10">
      <Link href="/">
        <h1 className="">Thamizhiniyan C S</h1>
      </Link>

      <NavigationMenu className="">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="#about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="#Documentation" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Documentation
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

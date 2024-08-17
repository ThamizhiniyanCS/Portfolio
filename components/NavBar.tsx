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

import { links } from "@/data/navlinks";

type Props = {};

export default function NavBar({}: Props) {
  return (
    <nav>
      <div className="hidden lg:flex z-[45] bg-background w-full h-[49px] justify-between items-center px-10">
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

import React from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { IconMenu2 } from "@tabler/icons-react";
import { links } from "@/data/navlinks";

type Props = {};

const NavBarMobile = (props: Props) => {
  const date = new Date();

  return (
    <div className="flex lg:hidden z-[45] bg-background fixed top-0 left-0 w-full h-[100px] justify-between items-center px-5 md:px-10">
      <Link href="/">
        <h1 className="text-sm md:text-2xl">Thamizhiniyan C S</h1>
      </Link>
      <div className="flex items-center ">
        <Sheet>
          <SheetTrigger className="xl:hidden inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9 text-primary ml-4">
            <IconMenu2 />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="xl:hidden flex flex-col justify-between"
          >
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>Choose your destination.</SheetDescription>
            </SheetHeader>

            <div className="w-full p-4 flex flex-col">
              {links.map(({ name, href }) => (
                <Link href={href} key={Math.random()} className="my-2">
                  {name}
                </Link>
              ))}
            </div>

            <SheetFooter>
              <div className="flex flex-col w-full items-center">
                <p className="text-slate-500 text-xs tracking-widest">
                  Designed & Developed by
                </p>
                <p className="text-primary leading-[.5rem]">
                  Thamizhiniyan C S
                </p>
                <p className="text-slate-500 text-xs tracking-widest">
                  Copyrights &#169; {date.getFullYear()}
                </p>
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default NavBarMobile;

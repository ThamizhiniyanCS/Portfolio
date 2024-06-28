"use client";

import React from "react";
import { SimpleIcon } from "simple-icons";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { IconExternalLink } from "@tabler/icons-react";

export type LogoComponentData = {
  logoData: SimpleIcon;
  href: string;
  ClassName?: string;
  description: string;
};

const LogoComponent = ({
  logoData,
  href,
  ClassName,
  description,
}: LogoComponentData) => {
  const { hex, path, source, title } = logoData;

  return (
    <HoverCard>
      <HoverCardTrigger className="mx-2">
        <svg
          className={`${ClassName}`}
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill={`#${hex}`}
        >
          <path d={path} />
        </svg>
      </HoverCardTrigger>
      <HoverCardContent className="min-w-40 w-auto max-w-96 min-h-16 h-auto max-h-40 p-3 grid grid-cols-5 grid-rows-1 gap-2">
        <div className="flex justify-center items-center">
          <svg
            className={`${ClassName}`}
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill={`#${hex}`}
          >
            <path d={path} />
          </svg>
        </div>

        <div className="h-full flex flex-col justify-center items-start ml-2 col-span-4">
          <h4 className="w-full text-lg font-semibold flex justify-between items-center">
            {title}{" "}
            <a href={href} target="_blank" className="ml-2">
              <IconExternalLink />
            </a>
          </h4>
          <span className="text-sm mt-0">{description}</span>
          <span className="text-xs text-muted-foreground flex justify-start items-center">
            Logo Source
            <a href={source} target="_blank" className="ml-1">
              <IconExternalLink className="w-5 h-5" />
            </a>
          </span>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default LogoComponent;

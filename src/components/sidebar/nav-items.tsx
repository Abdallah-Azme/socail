"use client";
import { listItems } from "@/constants";
import Link from "next/link";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function NavItems() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <ul className="flex pt-8 flex-col gap-y-4 m-2 items-center lg:items-start ">
      {listItems.map((item, i) => (
        <Link
          className={cn(
            "text-xl w-full hover:bg-gray-700  px-2 pt-2 pb-1 rounded-lg hover:text-brand"
          )}
          key={item.link}
          href={item.link}
        >
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger>
                <li
                  className={cn(
                    "flex gap-4 items-center",
                    item.link === pathname ? "text-brand" : ""
                  )}
                >
                  {<item.icon size={24} className="" />}
                  <span className={cn("hidden lg:block")}>{item.label}</span>
                </li>
              </TooltipTrigger>
              <TooltipContent
                className="text-brand relative z-50 lg:hidden bg-gray-900"
                sideOffset={20}
                side="right"
              >
                {item.label}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Link>
      ))}
    </ul>
  );
}

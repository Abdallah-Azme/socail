import { listItems } from "@/constants";
import Link from "next/link";
import React from "react";

export default function NavItems() {
  return (
    <ul className="flex flex-col gap-y-2  m-2 items-center lg:items-start ">
      {listItems.map((item, i) => (
        <Link
          className="text-xl w-full hover:bg-gray-700  px-2 py-4 rounded-lg hover:text-rose-500"
          key={item.link}
          href={item.link}
        >
          <li className="flex gap-4 items-center">
            {<item.icon size={24} className="" />}
            <span className="hidden lg:block">{item.label}</span>
          </li>
        </Link>
      ))}
    </ul>
  );
}

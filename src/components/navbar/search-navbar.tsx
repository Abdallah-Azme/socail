import React from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { Separator } from "../ui/separator";

export default function SearchNavbar() {
  return (
    <div className=" relative hidden md:flex">
      <Input placeholder="Search" type="text" className="rounded-full w-96 " />
      <Separator
        orientation="vertical"
        className="absolute right-10 h-4/6 top-2 "
      />
      <Search className="absolute right-3 top-1/2 -translate-y-1/2 color-foreground" />
    </div>
  );
}

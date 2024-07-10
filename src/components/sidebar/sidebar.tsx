import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";
import NavItems from "./nav-items";

export default function Sidebar() {
  return (
    <div className="relative ">
      <div className=" w-14 lg:w-56"></div>
      <aside className="pt-8 w-14 lg:w-56 -mt-3 min-h-full fixed  bg-gray-900">
        <NavItems />
      </aside>
    </div>
  );
}

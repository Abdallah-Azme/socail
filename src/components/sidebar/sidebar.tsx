import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";
import NavItems from "./nav-items";

export default function Sidebar() {
  return (
    <div className="bg-gray-900">
      <div className="w-14 lg:w-52 min-h-full  px-4 pt-8  "></div>
      <div className={`fixed top-[72px] w-fit z-50  `}>
        <aside className="w-14 lg:w-52   ">
          <NavItems />
        </aside>
      </div>
    </div>
  );
}

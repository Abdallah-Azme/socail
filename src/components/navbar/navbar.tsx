import Logo from "@/components/logo";
import { Separator } from "../ui/separator";
import SearchNavbar from "./search-navbar";
import UserAvatar from "./userAvatar";

export default function Navbar() {
  return (
    <header className="h-16">
      <div className="fixed w-full top-0 left-0  z-10">
        <div className="flex justify-between px-4 py-2 items-center ">
          <Logo />
          <SearchNavbar />
          <UserAvatar />
        </div>
        <Separator />
      </div>
    </header>
  );
}

import Logo from "@/components/logo";
import { Separator } from "../ui/separator";
import SearchNavbar from "./search-navbar";
import UserLogin from "./user-login";

export default function Header() {
  const loggedIn = false;
  return (
    <header className="h-16  ">
      <div className="fixed bg-gray-900 w-full z-10">
        <div className="flex justify-between px-4 py-2 items-center ">
          <Logo />
          <SearchNavbar />
          <UserLogin />
        </div>
        <Separator className="mt-1.5" />
      </div>
    </header>
  );
}

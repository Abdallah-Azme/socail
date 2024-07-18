import Logo from "@/components/logo";
import { Separator } from "../ui/separator";
import SearchNavbar from "./search-navbar";
import UserLogin from "./user-login";
import { cookies } from "next/headers";
import { auth } from "@/actions/auth";
import { Avatar } from "../ui/avatar";
import UserAvatar from "../shared/user-avatar";
import UserAuth from "./user-auth";
import AlertWarring from "../alert-warrning";

export default async function Header() {
  const email = await auth(cookies().get("refresh_token")?.value);
  return (
    <header className="sticky col-span-2 row-span-1 h-fit bg-gray-900 top-0 w-auto z-50 ">
      <div className="flex justify-between px-4 py-2 items-center ">
        <Logo />
        <AlertWarring />
        <UserAuth email={email} />
      </div>
      <Separator className="w-full h-[2px] flex-1 z-50" />
    </header>
  );
}

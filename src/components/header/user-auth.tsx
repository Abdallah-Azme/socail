"use client";
import { useStore } from "@/store/store";
import UploadButton from "./upload-button";
import UserSignin from "./user-signin";
import UserAvatar from "./user-avatar";
import { Button } from "../ui/button";
import UserSignup from "./user-signup";

export default function UserAuth({ email }: { email: string | null }) {
  const { openSigninDialog } = useStore();
  return (
    <div className="">
      {email ? (
        <div className="flex gap-3">
          <UploadButton />
          <UserAvatar />
        </div>
      ) : (
        <>
          <Button className="bg-brand" onClick={openSigninDialog}>
            Log In.
          </Button>
          <UserSignin />
          <UserSignup />
        </>
      )}
    </div>
  );
}

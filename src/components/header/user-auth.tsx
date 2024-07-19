import React, { useEffect, useState } from "react";
import UserAvatar from "./userAvatar";
import UserLogin from "./user-login";
import UploadButton from "./upload-button";

export default function UserAuth({ email }: { email: string | null }) {
  return (
    <div className="">
      {email ? (
        <div className="flex gap-3">
          <UploadButton />
          <UserAvatar />
        </div>
      ) : (
        <UserLogin />
      )}
    </div>
  );
}

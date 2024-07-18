"use client";
import React, { useEffect, useState } from "react";
import UserAvatar from "./userAvatar";
import UserLogin from "./user-login";

export default function UserAuth({ email }: { email: string | null }) {
  return <div className="">{email ? <UserAvatar /> : <UserLogin />}</div>;
}

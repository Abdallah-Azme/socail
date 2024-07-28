import React from "react";
import UserBanner from "./ui/user-banner";

export default function Page({ params }: { params: { id: string } }) {
  const userId = params.id;
  console.log(userId);
  return <UserBanner userId={userId} />;
}

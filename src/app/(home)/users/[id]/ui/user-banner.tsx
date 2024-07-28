"use client";
import { fetchGet } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export default function UserBanner({ userId }: { userId: string }) {
  const query = useQuery({
    queryKey: ["getUser", userId],
    queryFn: async () => {
      return fetchGet("/users/" + userId);
    },
  });
  if (query.isLoading) {
    return <div className="">Loading</div>;
  }
  if (query.isError) {
    return <div className="">Error</div>;
  }
  console.log(query.data);
  return (
    <div className=" flex mt-16 ">
      <div className="relative w-40 h-40 ">
        <Image
          fill
          src={"/default-user-image.png"}
          alt="user-profile-image"
          className="rounded-full"
        />
      </div>
      <div>
        <h3></h3>
      </div>
    </div>
  );
}

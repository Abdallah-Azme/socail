"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="flex items-center flex-col gap-10 -m-20 justify-center h-screen">
      <h3 className="text-xl text-destructive text-center">
        Sorry this route does not exist.
      </h3>
      <Button size={"lg"} className="bg-brand" onClick={() => router.push("/")}>
        Click to go back to home page
      </Button>
    </div>
  );
}

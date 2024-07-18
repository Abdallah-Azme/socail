import React from "react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { TriangleAlert } from "lucide-react";
export default function AlertWarring() {
  return (
    <Alert className="w-[550x] flex justify-center items-center text-brand ">
      <TriangleAlert className="size-4 " />
      <AlertDescription className=" ">
        <span className="hidden md:inline">
          Just because it's here doesn't mean it's legit or real.
        </span>
        Don't trust anyone
      </AlertDescription>
    </Alert>
  );
}

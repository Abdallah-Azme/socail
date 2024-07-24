import React from "react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { TriangleAlert } from "lucide-react";
import { cn } from "@/lib/utils";
export default function AlertWarring() {
  return (
    <Alert
      className={cn(
        "w-[550x] flex justify-center items-center text-brand bg-destructive"
      )}
    >
      <TriangleAlert className="size-4 " />
      <AlertDescription className="">
        <span className="hidden lg:inline">
          Just because it's here doesn't mean it's legit or real.
        </span>
        <span className="text-sm"> Don't trust anyone.</span>
      </AlertDescription>
    </Alert>
  );
}

import React from "react";
import { Skeleton } from "../ui/skeleton";

export default function CardSkeleton() {
  return (
    <div className="grid relative md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 flex-wrap gap-6 justify-center items-center mt-10">
      <Skeleton className="h-[400px] w-[288px] rounded-xl" />
      <Skeleton className="h-[400px] w-[288px] rounded-xl" />
      <Skeleton className="h-[400px] w-[288px] rounded-xl" />
      <Skeleton className="h-[400px] w-[288px] rounded-xl" />
    </div>
  );
}

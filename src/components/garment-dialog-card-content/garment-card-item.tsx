"use client";

import { GarmentType } from "@/constants/types";
import { useStore } from "@/store/store";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function GarmentCardItem({ garment }: { garment: GarmentType }) {
  const { closeCardDialog, openCardDialog, openCardId } = useStore();
  const onToggleCardDialog = () => {
    if (openCardId) {
      closeCardDialog();
    } else {
      openCardDialog(garment.id);
    }
  };

  return (
    <Card className="h-fit max-w-72  relative" onClick={onToggleCardDialog}>
      <CardHeader className="p-4">
        <CardTitle className="break-words line-clamp-2">
          {garment.title}
        </CardTitle>
        <CardDescription className="break-words h-10 line-clamp-2">
          <span className="text-brand block">{garment.title}</span>
          <span>{garment.description}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="p-2">
        <div className="relative h-72">
          <Image fill src={garment.photo} alt="image" />
        </div>
      </CardContent>
      <CardFooter className="w-full p-1 text-sm">
        <div className="flex flex-col gap-2 p-2  w-full justify-start">
          <div className=" flex  justify-between w-full">
            <div>
              <span className="">🌏</span>:{garment.server}
            </div>
            <div className="min-w-28">
              <span>💵</span>: {garment.price} Eps
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { GearType } from "@/constants/types";
import { useStore } from "@/store/store";

export default function GearCardItem({ gear }: { gear: GearType }) {
  const { closeCardDialog, openCardDialog, openCardId } = useStore();
  const onToggleCardDialog = () => {
    if (openCardId) {
      closeCardDialog();
    } else {
      openCardDialog(gear.id);
    }
  };

  return (
    <Card className="h-fit max-w-72  relative" onClick={onToggleCardDialog}>
      <CardHeader className="p-4">
        <CardTitle className="break-words line-clamp-2">
          {gear.gearType}
        </CardTitle>
        <CardDescription className="break-words h-10 line-clamp-2">
          <span className="text-brand block">{gear.title}</span>
          <span>{gear.description}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="p-2">
        <div className="relative h-72">
          <Image fill src={gear.photo} alt="image" />
        </div>
      </CardContent>
      <CardFooter className="w-full p-1 text-sm">
        <div className="flex flex-col gap-2 p-2  w-full justify-start">
          <div className=" flex  justify-between w-full">
            <div>
              <span className="">🌏</span>:{gear.server}
            </div>
            <div className="min-w-28">
              <span>💵</span>: {gear.price} Eps
            </div>
          </div>
          <div className=" flex  justify-between w-full">
            <div>
              <span>⚡</span>:{gear.element}
            </div>
            <div className="min-w-28">
              <span>🔢</span>: {gear.maxElementValue}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

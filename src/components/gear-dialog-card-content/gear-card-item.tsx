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
        <CardTitle className="break-words">{gear.gearType}</CardTitle>
        <CardDescription className="break-words line-clamp-2">
          {gear.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-2">
        <div className="relative h-72">
          <Image fill src={gear.photo} alt="image" />
        </div>
      </CardContent>
      <CardFooter className="flex p-2 justify-between">
        <p className="flex justify-between w-full">
          <span>Server :{gear.server}</span>
          <span> Price : {gear.price}</span>
        </p>
      </CardFooter>
    </Card>
  );
}

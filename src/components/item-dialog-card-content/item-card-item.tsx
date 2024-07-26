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
import { ItemType } from "@/constants/types";
import { useStore } from "@/store/store";

export default function ItemCardItem({ item }: { item: ItemType }) {
  const { closeCardDialog, openCardDialog, openCardId } = useStore();
  const onToggleCardDialog = () => {
    if (openCardId) {
      closeCardDialog();
    } else {
      openCardDialog(item.id);
    }
  };

  return (
    <Card className="h-fit max-w-72  relative" onClick={onToggleCardDialog}>
      <CardHeader className="p-4">
        <CardTitle className="break-words line-clamp-2">{item.title}</CardTitle>
        <CardDescription className="break-words h-10 line-clamp-2">
          <span>{item.description}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="p-2">
        <div className="relative h-72">
          <Image fill src={item.photo} alt="image" />
        </div>
      </CardContent>
      <CardFooter className="w-full p-1 text-sm">
        <div className="flex flex-col gap-2 p-2  w-full justify-start">
          <div className=" flex  justify-between w-full">
            <div>
              <span className="">🌏</span>:{item.server}
            </div>
            <div className="min-w-28">
              <span>💵</span>: {item.price} Eps
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

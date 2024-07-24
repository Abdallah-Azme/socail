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
import { useStore } from "@/store/store";
import { PetType } from "@/constants/types";

export default function PetCardItem({ pet }: { pet: PetType }) {
  const { closeCardDialog, openCardDialog, openCardId } = useStore();
  const onToggleCardDialog = () => {
    if (openCardId) {
      closeCardDialog();
    } else {
      openCardDialog(pet.id);
    }
  };

  return (
    <Card className="h-fit max-w-72  relative" onClick={onToggleCardDialog}>
      <CardHeader className="p-4 h-20">
        <CardTitle className="break-words">{pet.type}</CardTitle>
        <CardDescription className="break-words line-clamp-2">
          {pet.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-2">
        <div className="relative h-72">
          <Image fill src={pet?.photos[0]?.imageUrl} alt="image" />
        </div>
      </CardContent>
      <CardFooter className="flex p-2 justify-between text-sm">
        <p className="flex justify-between w-full">
          <span>
            <span className="">🌏</span> :{pet.server}
          </span>
          <span className="min-w-24">
            <span>💵</span>: {pet.price} Eps
          </span>
        </p>
      </CardFooter>
    </Card>
  );
}

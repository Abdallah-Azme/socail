import { PetType } from "@/app/(home)/pet-cards";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function CardItem({ pet }: { pet: PetType }) {
  return (
    <Card className="h-fit w-72  relative">
      <CardHeader className="p-4">
        <CardTitle>{pet.type}</CardTitle>
        <CardDescription>{pet.description}</CardDescription>
      </CardHeader>
      <CardContent className="p-2">
        <div className="relative h-72">
          <Image fill src={pet.photos[0].imageUrl} alt="image" />
        </div>
      </CardContent>
      <CardFooter className="flex p-2 justify-between">
        <p className="flex justify-between w-full">
          <span>Server :{pet.server}</span>
          <span> Price : {pet.price}</span>
        </p>
      </CardFooter>
    </Card>
  );
}

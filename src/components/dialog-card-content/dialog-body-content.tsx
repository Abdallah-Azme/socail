import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PetTypeAllProperties } from "@/constants/types";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { Button } from "../ui/button";

export default function DialogContentBody({
  pet,
}: {
  pet: PetTypeAllProperties;
}) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Title: {pet.title}</CardTitle>
        <CardDescription>Description: {pet.description}</CardDescription>
      </CardHeader>
      <Separator className="w-11/12 mx-auto mb-2" />
      <CardContent className="flex gap-y-2 flex-col">
        <p className="">Star⭐: {pet.star}</p>
        <p className="">server: {pet.server}</p>
        <p className="">price: {pet.price} Eps</p>
        <Separator className="w-11/12 mx-auto mb-2" />
        <div>
          <p>Character name: {pet.petOwner.characterName}</p>
          <p>Contact info: {pet.petOwner.contactInfo}</p>
          <Button asChild variant={"link"} className="w-full">
            <Link href={`/users/${pet.petOwner.id}`}>
              Check the seller profile
            </Link>
          </Button>
        </div>
        <Separator className="w-11/12 mx-auto mt-2 mb-2" />
      </CardContent>
      <CardFooter className="px-2 flex justify-center">
        <p className="text-destructive text-xs md:text-md ">
          Just because it's here doesn't mean it's legit or real. Don't trust
          anyone.
        </p>
      </CardFooter>
    </Card>
  );
}

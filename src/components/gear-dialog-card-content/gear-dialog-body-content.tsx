import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GearTypeAllProperties, PetTypeAllProperties } from "@/constants/types";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { Button } from "../ui/button";

export default function GearDialogContentBody({
  gear,
}: {
  gear: GearTypeAllProperties;
}) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-brand">{gear.title}</CardTitle>
        <CardDescription>{gear.description}</CardDescription>
      </CardHeader>
      <Separator className="w-11/12 mx-auto mb-2" />
      <CardContent className=" gap-y-2 w-full">
        <div className="flex flex-col p-2 text-lg">
          <div className="flex flex-row">
            <p className="flex-1">💵: {gear.price} Eps</p>
            <p className="flex-1">🌏: {gear.server}</p>
          </div>
          <div className="flex flex-row">
            <p className="flex-1">
              ⚡: {gear.maxElementValue} - {gear.element}
            </p>
            <p className="flex-1">🧙‍♂️: {gear.characterClass}</p>
          </div>
        </div>
        <Separator className="w-11/12 mx-auto mb-2" />
        <div className="space-y-2">
          <p>Character name: {gear.gearOwner.characterName}</p>
          <p>Contact info: {gear.gearOwner.contactInfo}</p>
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

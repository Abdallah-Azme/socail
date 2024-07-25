import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GarmentTypeAllProperties } from "@/constants/types";
import { Separator } from "../ui/separator";

export default function GarmentDialogContentBody({
  garment,
}: {
  garment: GarmentTypeAllProperties;
}) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-brand">{garment.title}</CardTitle>
        <CardDescription>{garment.description}</CardDescription>
      </CardHeader>
      <Separator className="w-11/12 mx-auto mb-2" />
      <CardContent className=" gap-y-2 w-full">
        <div className="flex flex-col p-2 text-lg">
          <div className="flex flex-row">
            <p className="flex-1">💵: {garment.price} Eps</p>
            <p className="flex-1">🌏: {garment.server}</p>
          </div>
        </div>
        <Separator className="w-11/12 mx-auto mb-2" />
        <div className="space-y-2">
          <p>Character name: {garment.garmentOwner.characterName}</p>
          <p>Contact info: {garment.garmentOwner.contactInfo}</p>
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

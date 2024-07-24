import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { GearTypeAllProperties, PetTypeAllProperties } from "@/constants/types";
import Image from "next/image";
export default function GearCarouselDialogCard({
  gear,
}: {
  gear: GearTypeAllProperties;
}) {
  return <Image src={gear.photo} fill alt="Pet" className="object-contain" />;
}

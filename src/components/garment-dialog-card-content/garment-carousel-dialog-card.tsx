import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  GarmentTypeAllProperties,
  GearTypeAllProperties,
  PetTypeAllProperties,
} from "@/constants/types";
import Image from "next/image";
export default function GarmentCarouselDialogCard({
  garment,
}: {
  garment: GarmentTypeAllProperties;
}) {
  return (
    <div className="relative w-full aspect-square">
      <Image
        src={garment.photo}
        fill
        alt="garment"
        className="object-contain"
      />
    </div>
  );
}

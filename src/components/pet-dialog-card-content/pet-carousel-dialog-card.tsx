import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PetTypeAllProperties } from "@/constants/types";
import Image from "next/image";
export default function PetCarouselDialogCard({
  pet,
}: {
  pet: PetTypeAllProperties;
}) {
  return (
    <Carousel
      className="w-full"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent className="">
        {pet.photos.map((photo, i) => (
          <CarouselItem key={photo.imageUrl} className="">
            <div className="p-1">
              <div className="flex aspect-square items-center justify-center p-6 relative">
                <Image
                  src={photo.imageUrl}
                  fill
                  alt="Pet"
                  className="object-contain"
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  );
}

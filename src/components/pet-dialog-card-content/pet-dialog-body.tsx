import { PetType } from "@/constants/types";
import { fetchGet } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import CarouselDialogCard from "./pet-carousel-dialog-card";
import DialogContentBody from "./pet-dialog-body-content";

export default function PetDialogBody({
  pet,
  isOpen,
}: {
  pet: PetType;
  isOpen: boolean;
}) {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["fetch-pet", pet.id],
    queryFn: async () => fetchGet(`/pets/${pet.id}`),
    enabled: isOpen,
  });
  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <CarouselDialogCard pet={data.data} />
      <DialogContentBody pet={data.data} />
    </>
  );
}

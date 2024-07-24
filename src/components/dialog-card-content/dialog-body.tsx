import React from "react";
import CarouselDialogCard from "./carousel-dialog-card";
import { useQuery } from "@tanstack/react-query";
import { fetchGet } from "@/lib/utils";
import DialogContentBody from "./dialog-body-content";
import { PetType } from "@/constants/types";
import { Separator } from "../ui/separator";

export default function DialogBody({
  pet,
  isOpen,
}: {
  pet: PetType;
  isOpen: boolean;
}) {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["fetch-pet", pet.id],
    queryFn: async () => fetchGet(`/pets/${pet.id}`),
    // enabled: isOpen,
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

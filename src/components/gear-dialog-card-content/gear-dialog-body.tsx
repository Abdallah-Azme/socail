import { GearType } from "@/constants/types";
import { fetchGet } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import GearCarouselDialogCard from "./gear-carousel-dialog-card";
import GearDialogContentBody from "./gear-dialog-body-content";

export default function GearDialogBody({
  gear,
  isOpen,
}: {
  gear: GearType;
  isOpen: boolean;
}) {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["fetch-pet", gear.id],
    queryFn: async () => fetchGet(`/pets/${gear.id}`),
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
      <GearCarouselDialogCard gear={data.data} />
      <GearDialogContentBody gear={data.data} />
    </>
  );
}

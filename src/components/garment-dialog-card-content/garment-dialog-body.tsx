import { GarmentType } from "@/constants/types";
import { fetchGet } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import GarmentCarouselDialogCard from "./garment-carousel-dialog-card";
import GarmentDialogContentBody from "./garment-dialog-body-content";

export default function GarmentDialogBody({
  garment,
  isOpen,
}: {
  garment: GarmentType;
  isOpen: boolean;
}) {
  console.log({ garment });
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["fetch-garment", garment.id],
    queryFn: async () => fetchGet(`/garments/${garment.id}`),
    // enabled: isOpen,
  });
  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  console.log("data", data.data);
  return (
    <>
      <GarmentCarouselDialogCard garment={data.data} />
      <GarmentDialogContentBody garment={data.data} />
    </>
  );
}

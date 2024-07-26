import { ItemType } from "@/constants/types";
import { fetchGet } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import ItemCarouselDialogCard from "./item-carousel-dialog-card";
import ItemDialogContentBody from "./item-dialog-body-content";

export default function ItemDialogBody({
  item,
  isOpen,
}: {
  item: ItemType;
  isOpen: boolean;
}) {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["fetch-item", item.id],
    queryFn: async () => fetchGet(`/items/${item.id}`),
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
      <ItemCarouselDialogCard item={data.data} />
      <ItemDialogContentBody item={data.data} />
    </>
  );
}

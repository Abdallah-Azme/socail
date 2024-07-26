"use client";
import GearDialogCard from "@/components/gear-dialog-card-content/gear-dialog-card";
import ItemDialogCard from "@/components/item-dialog-card-content/item-dialog-card";
import InfiniteScroll from "@/components/shared/infinite-scroll";
import { GearType, ItemType, PetType } from "@/constants/types";
import { fetchGet } from "@/lib/utils";
import { useInfiniteQuery } from "@tanstack/react-query";

export default function ItemCards() {
  const {
    isPending,
    isError,
    data,
    error,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ["fetchItems"],
    queryFn: async ({ pageParam = undefined }) => {
      return fetchGet(`/items?cursor=${pageParam}`);
    },
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
    initialPageParam: undefined,
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const allItems = data.pages.flatMap((page) => page.data) as ItemType[];

  return (
    <InfiniteScroll
      onNextPage={!isFetchingNextPage && hasNextPage ? fetchNextPage : () => {}}
    >
      <div className="mt-10 ">
        <div className="grid relative md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 flex-wrap gap-6 justify-center items-center">
          {allItems.map((item) => (
            <ItemDialogCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </InfiniteScroll>
  );
}

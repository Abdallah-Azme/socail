"use client";
import GarmentDialogCard from "@/components/garment-dialog-card-content/garment-dialog-card";
import GearDialogCard from "@/components/gear-dialog-card-content/gear-dialog-card";
import InfiniteScroll from "@/components/shared/infinite-scroll";
import { GarmentType, GearType, PetType } from "@/constants/types";
import { fetchGet } from "@/lib/utils";
import { useInfiniteQuery } from "@tanstack/react-query";

export default function GarmentCards() {
  const {
    isPending,
    isError,
    data,
    error,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ["fetchGarments"],
    queryFn: async ({ pageParam = undefined }) => {
      return fetchGet(`/garments?cursor=${pageParam}`);
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

  const allGarments = data.pages.flatMap((page) => page.data) as GarmentType[];

  return (
    <InfiniteScroll
      onNextPage={!isFetchingNextPage && hasNextPage ? fetchNextPage : () => {}}
    >
      <div className="mt-10 ">
        <div className="grid relative md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 flex-wrap gap-6 justify-center items-center">
          {allGarments.map((garment) => (
            <GarmentDialogCard garment={garment} key={garment.id} />
          ))}
        </div>
      </div>
    </InfiniteScroll>
  );
}

"use client";
import PetDialogCard from "@/components/pet-dialog-card-content/pet-dialog-card";
import InfiniteScroll from "@/components/shared/infinite-scroll";
import { PetType } from "@/constants/types";
import { fetchGet } from "@/lib/utils";
import { useInfiniteQuery } from "@tanstack/react-query";

export default function PetCards() {
  const {
    isPending,
    isError,
    data,
    error,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ["fetchPet"],
    queryFn: async ({ pageParam = undefined }) => {
      return fetchGet(`/pets?cursor=${pageParam}`);
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

  const allPets = data.pages.flatMap((page) => page.data) as PetType[];

  return (
    <InfiniteScroll
      onNextPage={!isFetchingNextPage && hasNextPage ? fetchNextPage : () => {}}
    >
      <div className="mt-10 ">
        <div className="grid relative md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 flex-wrap gap-6 justify-center items-center">
          {allPets.map((pet) => (
            <PetDialogCard pet={pet} key={pet.id} />
          ))}
        </div>
      </div>
    </InfiniteScroll>
  );
}

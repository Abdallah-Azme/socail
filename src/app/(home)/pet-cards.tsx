"use client";
import DialogCard from "@/components/dialog-card-content/dialog-card";
import CardItem from "@/components/shared/card-item";
import InfiniteScroll from "@/components/shared/infinite-scroll";
import { PetType } from "@/constants/types";
import { fetchGet } from "@/lib/utils";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import React from "react";

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
  console.log({ allPets });
  // const pets = data.pages.flatMap((page, i) => page)[0].data ;

  return (
    <InfiniteScroll
      onNextPage={
        !isFetchingNextPage && hasNextPage
          ? fetchNextPage
          : () => console.log("there is nothing more to fetch")
      }
    >
      <div className="mt-10 ">
        <div className="grid relative md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 flex-wrap gap-6 justify-center items-center">
          {allPets.map((pet) => (
            <DialogCard pet={pet} key={pet.id} />
          ))}
        </div>
      </div>
    </InfiniteScroll>
  );
}

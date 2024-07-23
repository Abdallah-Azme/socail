"use client";
import CardItem from "@/components/shared/card-item";
import InfiniteScroll from "@/components/shared/infinite-scroll";
import { fetchGet } from "@/lib/utils";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import React from "react";

export type PetType = {
  id: string;
  type: string;
  description: string;
  image: string;
  price: number;
  server: string;
  title: string;
  photos: {
    imageUrl: string;
  }[];
};

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
    queryFn: async ({ pageParam }) => {
      return fetchGet(`/pets?cursor=${pageParam}`);
    },
    getNextPageParam: (lastPage) => lastPage.nextCursor ?? false,
    initialPageParam: 1,
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  const pets = data.pages.flatMap((page, i) => page)[0].data as PetType[];

  return (
    <InfiniteScroll
      onNextPage={
        !isFetchingNextPage && hasNextPage
          ? fetchNextPage
          : () => console.log("there is nothing more to fetch")
      }
    >
      <div className="mt-10 ">
        <div className="grid  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 flex-wrap gap-6 justify-center items-center">
          {pets.map((pet) => (
            <CardItem key={pet.id} pet={pet} />
          ))}
        </div>
      </div>
    </InfiniteScroll>
  );
}

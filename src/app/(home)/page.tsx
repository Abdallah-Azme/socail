import { fetchGet } from "@/lib/utils";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import PetCards from "./pet-cards";

export default async function Home() {
  const queryClient = new QueryClient();

  queryClient.prefetchInfiniteQuery({
    queryKey: ["fetchPets"],
    queryFn: async ({ pageParam = undefined }) => {
      return fetchGet(`/pets?cursor=${pageParam}`);
    },
    //@ts-ignore
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
    initialPageParam: undefined,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PetCards />
    </HydrationBoundary>
  );
}

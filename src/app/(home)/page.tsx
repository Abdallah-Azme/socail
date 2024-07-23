import CardItem from "@/components/shared/card-item";
import { fetchGet } from "@/lib/utils";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
  useQuery,
} from "@tanstack/react-query";
import PetCards from "./pet-cards";

export default async function Home() {
  const queryClient = new QueryClient();

  queryClient.prefetchInfiniteQuery({
    queryKey: ["fetchPet"],
    queryFn: async ({ pageParam }) => {
      return fetchGet(`/pets?cursor=${pageParam}`);
    },
    //@ts-ignore
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    initialPageParam: 1,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PetCards />
    </HydrationBoundary>
  );
}

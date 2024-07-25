import { fetchGet } from "@/lib/utils";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import GarmentCards from "./garment-cards";

export default async function GarmentPage() {
  const queryClient = new QueryClient();

  queryClient.prefetchInfiniteQuery({
    queryKey: ["fetchGarment"],
    queryFn: async ({ pageParam = undefined }) => {
      return fetchGet(`/garments?cursor=${pageParam}`);
    },
    //@ts-ignore
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
    initialPageParam: undefined,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <GarmentCards />
    </HydrationBoundary>
  );
}

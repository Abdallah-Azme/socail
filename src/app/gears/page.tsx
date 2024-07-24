import { fetchGet } from "@/lib/utils";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import GearCards from "./gear-cards";

export default async function GearPage() {
  const queryClient = new QueryClient();

  queryClient.prefetchInfiniteQuery({
    queryKey: ["fetchGear"],
    queryFn: async ({ pageParam = undefined }) => {
      return fetchGet(`/gears?cursor=${pageParam}`);
    },
    //@ts-ignore
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
    initialPageParam: undefined,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <GearCards />
    </HydrationBoundary>
  );
}

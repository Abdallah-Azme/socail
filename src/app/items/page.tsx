import { fetchGet } from "@/lib/utils";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import ItemCards from "./item-cards";

export default async function ItemPage() {
  const queryClient = new QueryClient();

  queryClient.prefetchInfiniteQuery({
    queryKey: ["fetchItem"],
    queryFn: async ({ pageParam = undefined }) => {
      return fetchGet(`/items?cursor=${pageParam}`);
    },
    //@ts-ignore
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
    initialPageParam: undefined,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ItemCards />
    </HydrationBoundary>
  );
}

"use client";
import { useInView } from "react-intersection-observer";

export default function InfiniteScroll({
  children,
  onNextPage,
}: {
  children: React.ReactNode;
  onNextPage: () => void;
}) {
  const { ref, inView, entry } = useInView({
    rootMargin: "200px",
    onChange(inView) {
      console.log(" on change got called");
      if (inView) {
        onNextPage();
        console.log(" on change got called from the in view");
      }
    },
  });

  return (
    <div>
      {children}
      <div ref={ref} />
    </div>
  );
}

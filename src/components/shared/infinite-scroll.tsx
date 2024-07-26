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
      if (inView) {
        onNextPage();
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

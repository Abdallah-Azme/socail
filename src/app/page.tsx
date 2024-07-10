import CardItem from "@/components/shared/card-item";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-10 flex-grow mx-10">
      <div className="flex flex-wrap gap-6 justify-center">
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    </div>
  );
}

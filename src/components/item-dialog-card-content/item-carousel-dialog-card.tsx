import { ItemTypeAllProperties } from "@/constants/types";
import Image from "next/image";
export default function ItemCarouselDialogCard({
  item,
}: {
  item: ItemTypeAllProperties;
}) {
  return (
    <div className="relative w-full aspect-square">
      <Image src={item.photo} fill alt="item" className="object-contain" />
    </div>
  );
}

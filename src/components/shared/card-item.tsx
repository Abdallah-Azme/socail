import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function CardItem() {
  const pet = {
    type: "Wolf",
    description: "320* Wolf for sell at server London",
    image: "/pet.png",
    price: "300",
    server: "London",
  };
  return (
    <Card className="h-fit w-64 z-0 relative">
      <CardHeader>
        <CardTitle>{pet.type}</CardTitle>
        <CardDescription>{pet.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative h-64">
          <Image fill src={pet.image} alt="image" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <p className="flex justify-between w-full">
          <span>Server :{pet.server}</span>
          <span> Price : {pet.price}</span>
        </p>
      </CardFooter>
    </Card>
  );
}

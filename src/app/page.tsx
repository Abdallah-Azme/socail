import { auth } from "@/actions/auth";
import CardItem from "@/components/shared/card-item";
import { Button } from "@/components/ui/button";
import { cookies } from "next/headers";
import Image from "next/image";
import jwt from "jsonwebtoken";
export default async function Home() {
  const accessToken = cookies().get("access_token")?.value;
  const value = await auth(accessToken);
  console.log(value);
  return (
    <div className="mt-10 ">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 flex-wrap gap-6 justify-center items-center">
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    </div>
  );
}

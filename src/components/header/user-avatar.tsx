"use client";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

import { fetchGet, fetchPost } from "@/lib/utils";
import { useMutation, useQuery } from "@tanstack/react-query";
import { CircleUserRound, Link, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { useStore } from "@/store/store";
import { useEffect } from "react";

export default function UserAvatar({ email }: { email: string }) {
  const { user, setUser } = useStore();
  const router = useRouter();
  const query = useQuery({
    queryKey: ["getUser", email],
    queryFn: () => {
      return fetchGet("/users/me");
    },
  });
  useEffect(() => {
    if (query.data) {
      setUser(query.data.data);
      console.log("from the if block", query.data.data);
    }
  }, [setUser, query.data]);
  console.log({ user });
  const mutation = useMutation({
    mutationFn: async () => fetchPost("/users/logout", {}),
    onSuccess: () => {
      router.refresh();
    },
  });
  console.log(user);
  return (
    <TooltipProvider delayDuration={50}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>User</AvatarFallback>
          </Avatar>
        </TooltipTrigger>
        <TooltipContent className="flex flex-col items-start " align="end">
          <Button
            variant="ghost"
            onClick={() => user?.id && router.push(`/users/${user?.id}`)}
          >
            <CircleUserRound className="mr-3" />
            View profile.
          </Button>
          <Button
            variant="ghost"
            className="w-full !items-start !justify-start"
            onClick={() => mutation.mutate()}
          >
            <LogOut className="mr-3" />
            Log out.
          </Button>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

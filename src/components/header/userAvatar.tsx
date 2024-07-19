"use client";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

import { CircleUserRound, LogOut } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchGet, fetchPost } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function UserAvatar() {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async () => fetchPost("/users/logout"),
    onSuccess: () => {
      router.refresh();
    },
  });
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
          <Button variant="ghost">
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

"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "../ui/button";
import UserAvatar from "./userAvatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Icon } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { useStore } from "@/store/store";
import { useMutation } from "@tanstack/react-query";
import { fetchPost } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";

const formSchema = z.object({
  email: z
    .string()
    .email("Enter valid email.")
    .max(50, "Max length is 50 characters."),
  password: z
    .string()
    .min(10, "Password cannot be less than 10 characters.")
    .max(50, "Max length is 50 characters."),
});

export default function UserLogin() {
  const router = useRouter();
  const { toast } = useToast();
  const mutation = useMutation({
    mutationFn: (data: object) => fetchPost("/users/login", data),
    mutationKey: ["login"],
    onSuccess: () => {
      router.refresh();
    },
  });
  const { closeLoginDialog, isLoginDialogOpen, openLoginDialog } = useStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutation.mutate(values);
    closeLoginDialog();
  }

  const loggedIn = false;

  return loggedIn ? (
    <UserAvatar />
  ) : (
    <>
      <Button className="bg-brand" onClick={openLoginDialog}>
        Log In.
      </Button>
      <Dialog
        open={isLoginDialogOpen}
        onOpenChange={isLoginDialogOpen ? closeLoginDialog : openLoginDialog}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle className=" text-center text-2xl mt-10">
              Log in to Social Trade
            </DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="JaneDoe@fake.example" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="**********"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button className="w-full mt-2">Sign In</Button>
            </form>
          </Form>
          <Separator />
          <Button
            size="lg"
            className="text-lg w-full bg-gray-900"
            variant="outline"
          >
            Continue with Google
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}

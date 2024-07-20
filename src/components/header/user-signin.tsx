"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { fetchPost } from "@/lib/utils";
import { useStore } from "@/store/store";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import UserSignup from "./user-signup";

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

export default function UserSignin() {
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: (data: object) => fetchPost("/users/signin", data),
    mutationKey: ["login"],
    onSuccess: () => {
      router.refresh();
    },
  });
  const {
    openSigninDialog,
    closeSigninDialog,
    isSigninDialogOpen,
    openSignupDialog,
  } = useStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutation.mutate(values);
    closeSigninDialog();
  }

  function onSignUp() {
    openSignupDialog();
    closeSigninDialog();
  }

  return (
    <Dialog
      open={isSigninDialogOpen}
      onOpenChange={isSigninDialogOpen ? closeSigninDialog : openSigninDialog}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle className=" text-center text-2xl mt-5">
            Log in to Social Trade
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* email to log in */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <p className="text-sm">
                    Your Gmail or other types of emails,{" "}
                    <span className="text-brand">
                      definitely NOT your game email.
                    </span>
                  </p>
                  <FormControl>
                    <Input placeholder="JaneDoe@fake.example" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* password */}
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
            <Button className="w-full mt-2">Sign in</Button>
          </form>
        </Form>
        <DialogFooter>
          <Separator />
          <Button onClick={onSignUp} variant={"link"}>
            Don't have an account? Sign up.
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

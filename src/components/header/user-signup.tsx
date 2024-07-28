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
import { servers } from "@/constants";
import { fetchPost } from "@/lib/utils";
import { useStore } from "@/store/store";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Separator } from "../ui/separator";
import { useToast } from "../ui/use-toast";
const fileSchema = z
  .instanceof(File)
  .refine((file) => file.type.startsWith("image/"), {
    message: "Invalid file type. Only images are allowed.",
  })
  .refine((file) => file.size <= 1 * 1024 * 1024, {
    message: "File size too large. Maximum size is 1MB per file.",
  });
const formSchema = z.object({
  email: z
    .string()
    .email("Enter valid email.")
    .max(50, "Max length is 50 characters."),
  password: z
    .string()
    .min(10, "Password cannot be less than 10 characters.")
    .max(50, "Max length is 50 characters."),
  username: z
    .string()
    .min(2, "Username is required")
    .max(20, "Username cannot be more than 20 characters."),
  contactInfo: z
    .string()
    .min(2, "Contact information is required")
    .max(50, "Contact information cannot be more than 50 characters."),
  characterName: z
    .string()
    .min(2, "Character Name  is required")
    .max(30, "Character Name  cannot be more than 30 characters."),
  server: z
    .string()
    .min(2, "server is required")
    .max(30, "Enter a valid server."),
  photos: z
    .array(fileSchema)
    .nonempty({ message: "At least one photo is required" }),
});

export default function UserSignup() {
  const { toast } = useToast();
  const [files, setFiles] = useState<File[]>([]);

  const router = useRouter();
  const mutation = useMutation({
    mutationFn: (data: object) => fetchPost("/users/signup", data),
    mutationKey: ["login"],
    onSuccess: () => {
      router.refresh();
      toast({ description: "Signup successful", duration: 2000 });
      closeSignupDialog();
    },
    onError: () => {
      toast({
        description: "Sorry but this email already under use",
        variant: "destructive",
        duration: 2000,
      });
    },
  });
  const {
    isSignupDialogOpen,
    openSignupDialog,
    closeSignupDialog,
    openSigninDialog,
  } = useStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      characterName: "",
      contactInfo: "",
      server: "",
      username: "",
      photos: undefined,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutation.mutate(values);
  }

  function onSignin() {
    closeSignupDialog();
    openSigninDialog();
  }
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);
    setFiles(selectedFiles);
    form.setValue("photos", selectedFiles as [File, ...File[]]);
  };
  return (
    <Dialog
      open={isSignupDialogOpen}
      onOpenChange={isSignupDialogOpen ? closeSignupDialog : openSignupDialog}
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
            {/* server */}
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="server"
                render={({ field }) => (
                  <FormItem className="min-w-56 flex-grow">
                    <FormLabel>Server</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl className="flex-1">
                        <SelectTrigger>
                          <SelectValue placeholder="Select a server" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {servers.map((server) => (
                          <SelectItem key={server} value={server}>
                            {server}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/*contact info */}
              <FormField
                control={form.control}
                name="contactInfo"
                render={({ field }) => (
                  <FormItem className="flex-grow">
                    <FormLabel>Contact information</FormLabel>
                    <FormControl>
                      <Input placeholder="user#1234@discord.com." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* character name  */}
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="characterName"
                render={({ field }) => (
                  <FormItem className="flex-grow">
                    <FormLabel>Character name</FormLabel>
                    <FormControl>
                      <Input placeholder="⚡Flash⚡" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* userName */}
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="flex-grow">
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Jane Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* photos */}
            <FormField
              control={form.control}
              name="photos"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Character photo</FormLabel>
                  <FormControl>
                    <Input
                      onChange={handleFileChange}
                      type="file"
                      accept="image/*"
                      multiple
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full mt-2">Sign Up</Button>
          </form>
        </Form>
        <DialogFooter className="block">
          <Separator />
          <Button onClick={onSignin} variant={"link"}>
            Already have an account? Sign in.
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { petTypeArray, servers } from "@/constants";
import { useStore } from "@/store/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
import { fetchPost, fetchPostForm } from "@/lib/utils";

interface FormDataType {
  price: string;
  type: string;
  star: string;
  title: string;
  server: string;
  description: string;
  photos: [File, ...File[]];
}

const fileSchema = z
  .instanceof(File)
  .refine((file) => file.type.startsWith("image/"), {
    message: "Invalid file type. Only images are allowed.",
  })
  .refine((file) => file.size <= 1 * 1024 * 1024, {
    message: "File size too large. Maximum size is 1MB per file.",
  });

const petSchema = z.object({
  price: z
    .string()
    .refine((val) => Number(val), { message: "The price has to be a number" }),
  star: z
    .string()
    .refine((val) => Number(val), { message: "The star has to be a number" }),
  title: z.string().max(50, "The title cannot be more than 50 characters."),
  type: z.string().max(30, "The type cannot be more than 30 characters."),
  server: z.string().max(30, "Enter a vail server."),
  description: z
    .string()
    .max(300, "The description cannot be more than 300 characters."),
  photos: z
    .array(fileSchema)
    .nonempty({ message: "At least one photo is required" })
    .max(4, { message: "You can upload a maximum of 4 photos." }),
});

export default function UploadPetForm() {
  const [filePreviews, setFilePreviews] = useState<string[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const mutation = useMutation({
    mutationFn: async (data: {
      price: string;
      type: string;
      star: string;
      title: string;
      server: string;
      description: string;
      photos: [File, ...File[]];
    }) => {
      const formData = new FormData();
      // Append each key-value pair to the FormData object
      (Object.keys(data) as (keyof FormDataType)[]).forEach((key) => {
        if (Array.isArray(data[key])) {
          // If the value is an array, iterate over it and append each item
          (data[key] as File[]).forEach((item) => {
            formData.append(key, item);
          });
        } else {
          formData.append(key, data[key] as string);
        }
      });
      fetchPostForm("/pets", formData);
    },
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);
    setFiles(selectedFiles);
    form.setValue("photos", selectedFiles as [File, ...File[]]);
    const previews = selectedFiles.map((file) => URL.createObjectURL(file));
    setFilePreviews(previews);
  };
  function onSubmit(values: z.infer<typeof petSchema>) {
    mutation.mutate(values);
    console.log(values);
  }

  const form = useForm<z.infer<typeof petSchema>>({
    resolver: zodResolver(petSchema),
    defaultValues: {
      description: "",
      price: "",
      server: "",
      star: "",
      title: "",
      type: "",
      photos: undefined,
    },
  });
  return (
    <div className="">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <div className="flex flex-col lg:flex-row  gap-3">
            <div className="flex gap-3 flex-grow">
              {/* Star */}
              <FormField
                control={form.control}
                name="star"
                render={({ field }) => (
                  <FormItem className=" flex-grow">
                    <FormLabel>Stars</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="200" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* price */}
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem className="  flex-grow">
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="200" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* Server */}
            <div className="flex gap-3 flex-grow">
              <FormField
                control={form.control}
                name="server"
                render={({ field }) => (
                  <FormItem className="flex-1 flex-grow">
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

              {/* pet type */}
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem className="flex-1 flex-grow">
                    <FormLabel>Pet type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a pet type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {petTypeArray.map((petType) => (
                          <SelectItem key={petType} value={petType}>
                            {petType}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Sell this pet." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Sell this pet or trade for higher star same type or other types"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* photos */}
          <FormField
            control={form.control}
            name="photos"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Photos</FormLabel>
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

          {/* Display Selected Photos */}
          {filePreviews.length > 0 && (
            <div className="mt-4">
              <h3>Selected Photos:</h3>
              <div className="flex flex-wrap gap-2">
                {filePreviews.map((preview, index) => (
                  <div key={index} className="relative">
                    <Image
                      width={128}
                      height={128}
                      src={preview}
                      className="w-32 h-32 object-cover rounded"
                      alt={`Pet photo ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          <Button type="submit" className="w-full mt-2">
            Upload
          </Button>
        </form>
      </Form>
    </div>
  );
}
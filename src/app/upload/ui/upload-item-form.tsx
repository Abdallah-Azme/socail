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
import { servers } from "@/constants";
import Image from "next/image";
import { useState } from "react";
import { z } from "zod";
import { Button } from "../../../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { Textarea } from "../../../components/ui/textarea";
import { itemSchema, useItemForm, useItemPostForm } from "../hooks/item-hook";

export default function UploadItemForm() {
  const [filePreviews, setFilePreviews] = useState<string[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const { form } = useItemForm();
  const { mutation } = useItemPostForm(form);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);
    setFiles(selectedFiles);
    form.setValue("photos", selectedFiles as [File, ...File[]]);
    const previews = selectedFiles.map((file) => URL.createObjectURL(file));
    setFilePreviews(previews);
  };

  function onSubmit(values: z.infer<typeof itemSchema>) {
    mutation.mutate(values, {
      onSuccess: () => {
        setFiles([]);
        setFilePreviews([]);
        form.reset();
      },
    });
  }

  return (
    <div className="">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <div className="flex flex-col   gap-3">
            <div className="flex gap-3 flex-grow">
              {/* price */}
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem className=" flex-1 flex-grow">
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min={1}
                        placeholder="200"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* quantity */}
              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem className=" flex-1 flex-grow">
                    <FormLabel>Quantity</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min={1}
                        placeholder="200"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-3 flex-grow">
              {/* Server */}
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
            </div>
          </div>
          {/* title */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Sell this gear." {...field} />
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
                    placeholder="Enter a description of the deal you are looking for, including the server you can trade on. If there is something specific you want to trade for, mention it here as well."
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
          <Button
            type="submit"
            disabled={mutation.isPending}
            className="w-full mt-2"
          >
            Upload
          </Button>
        </form>
      </Form>
    </div>
  );
}

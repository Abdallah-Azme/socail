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
import {
  characterClassTypeArray,
  elementTypeArray,
  equipmentTypeArray,
  servers,
} from "@/constants";
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
import { gearSchema, useGearForm, useGearPostForm } from "../hooks/gear-hook";

export default function UploadGearForm() {
  const [filePreviews, setFilePreviews] = useState<string[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const { form } = useGearForm();
  const { mutation } = useGearPostForm(form);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);
    setFiles(selectedFiles);
    form.setValue("photos", selectedFiles as [File, ...File[]]);
    const previews = selectedFiles.map((file) => URL.createObjectURL(file));
    setFilePreviews(previews);
  };

  function onSubmit(values: z.infer<typeof gearSchema>) {
    mutation.mutate(values, {
      onSuccess: () => {
        setFiles([]);
        setFilePreviews([]);
        form.reset({
          server: "",
          gearType: "",
          characterClass: "",
          element: "",
        });
      },
    });
  }

  return (
    <div className="">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <div className="flex flex-col   gap-3">
            <div className="flex gap-3 flex-grow">
              {/* max element value */}
              <FormField
                control={form.control}
                name="maxElementValue"
                render={({ field }) => (
                  <FormItem className=" flex-1 flex-grow">
                    <FormLabel>Element value</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min={0}
                        max={25}
                        placeholder="12"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Element */}
              <FormField
                control={form.control}
                name="element"
                render={({ field }) => (
                  <FormItem className="flex-1 flex-grow">
                    <FormLabel>Element</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl className="flex-1">
                        <SelectTrigger>
                          <SelectValue placeholder="Select an element" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {elementTypeArray.map((element) => (
                          <SelectItem key={element} value={element}>
                            {element}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* price */}
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem className=" flex-1 flex-grow">
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="200" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-3 flex-grow">
              {/* gear type */}
              <FormField
                control={form.control}
                name="gearType"
                render={({ field }) => (
                  <FormItem className="flex-1 flex-grow">
                    <FormLabel>Gear type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a gear type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {equipmentTypeArray.map((gear) => (
                          <SelectItem key={gear} value={gear}>
                            {gear}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
              {/* class */}
              <FormField
                control={form.control}
                name="characterClass"
                render={({ field }) => (
                  <FormItem className="flex-1 flex-grow">
                    <FormLabel>Class</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl className="flex-1">
                        <SelectTrigger>
                          <SelectValue placeholder="Select class" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {characterClassTypeArray.map((cla) => (
                          <SelectItem key={cla} value={cla}>
                            {cla}
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

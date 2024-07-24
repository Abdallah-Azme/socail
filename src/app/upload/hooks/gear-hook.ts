import { useToast } from "@/components/ui/use-toast";
import { fetchPostForm } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm, UseFormReturn } from "react-hook-form";
import { z } from "zod";

interface FormGearDataType {
  price: string;
  gearType: string;
  title: string;
  server: string;
  characterClass: string;
  element: string;
  maxElementValue: string;
  description: string;
  photos: [File, ...File[]];
}

export const useGearPostForm = (form: UseFormReturn<FormGearDataType>) => {
  const { toast } = useToast();

  const mutation = useMutation({
    mutationKey: ["uploadGear"],
    mutationFn: async (data: FormGearDataType) => {
      const formData = new FormData();
      (Object.keys(data) as (keyof FormGearDataType)[]).forEach((key) => {
        if (Array.isArray(data[key])) {
          (data[key] as File[]).forEach((item) => {
            formData.append(key, item);
          });
        } else {
          formData.append(key, data[key] as string);
        }
      });
      const result = await fetchPostForm("/gears", formData);
      return result;
    },
    onError: (error) => {
      toast({ description: error.message, variant: "destructive" });
    },
    onSuccess: () => {
      toast({
        description: "Gear uploaded successfully",
      });
      form.reset();
    },
  });

  return { mutation };
};

const fileSchema = z
  .instanceof(File)
  .refine((file) => file.type.startsWith("image/"), {
    message: "Invalid file type. Only images are allowed.",
  })
  .refine((file) => file.size <= 1 * 1024 * 1024, {
    message: "File size too large. Maximum size is 1MB per file.",
  });

export const gearSchema = z.object({
  price: z
    .string()
    .refine((val) => Number(val), { message: "The price has to be a number" }),
  title: z.string().max(50, "The title cannot be more than 50 characters."),
  characterClass: z
    .string()
    .max(50, "The class cannot be more than 50 characters."),
  element: z.string().max(20, "The element cannot be more than 50 characters."),
  maxElementValue: z
    .string()
    .refine((val) => Number(val), { message: "The price has to be a number" }),
  gearType: z.string().max(30, "The type cannot be more than 30 characters."),
  server: z.string().max(30, "Enter a valid server."),
  description: z
    .string()
    .max(300, "The description cannot be more than 300 characters."),
  photos: z
    .array(fileSchema)
    .nonempty({ message: "At least one photo is required" }),
});

export const useGearForm = () => {
  const form = useForm<z.infer<typeof gearSchema>>({
    resolver: zodResolver(gearSchema),
    defaultValues: {
      description: "",
      price: "",
      server: "",
      title: "",
      photos: undefined,
      characterClass: "",
      element: "",
      gearType: "",
      maxElementValue: "",
    },
  });

  return { form };
};

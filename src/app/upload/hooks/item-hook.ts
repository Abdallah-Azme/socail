import { useToast } from "@/components/ui/use-toast";
import { fetchPostForm } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm, UseFormReturn } from "react-hook-form";
import { z } from "zod";

interface FormItemDataType {
  price: string;
  title: string;
  server: string;
  quantity: string;
  description: string;
  photos: [File, ...File[]];
}

export const useItemPostForm = (form: UseFormReturn<FormItemDataType>) => {
  const { toast } = useToast();

  const mutation = useMutation({
    mutationKey: ["uploadItem"],
    mutationFn: async (data: FormItemDataType) => {
      const formData = new FormData();
      (Object.keys(data) as (keyof FormItemDataType)[]).forEach((key) => {
        if (Array.isArray(data[key])) {
          (data[key] as File[]).forEach((item) => {
            formData.append(key, item);
          });
        } else {
          formData.append(key, data[key] as string);
        }
      });
      const result = await fetchPostForm("/items", formData);
      return result;
    },
    onError: (error) => {
      toast({ description: error.message, variant: "destructive" });
    },
    onSuccess: () => {
      toast({
        description: "Item uploaded successfully",
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

export const itemSchema = z.object({
  price: z
    .string()
    .refine((val) => Number(val), { message: "The price has to be a number" }),
  title: z.string().max(50, "The title cannot be more than 50 characters."),
  quantity: z.string().refine((val) => Number(val), {
    message: "The quantity has to be a number",
  }),
  server: z.string().max(30, "Enter a valid server."),
  description: z
    .string()
    .max(300, "The description cannot be more than 300 characters."),
  photos: z
    .array(fileSchema)
    .nonempty({ message: "At least one photo is required" }),
});

export const useItemForm = () => {
  const form = useForm<z.infer<typeof itemSchema>>({
    resolver: zodResolver(itemSchema),
    defaultValues: {
      description: "",
      price: "",
      server: "",
      title: "",
      photos: undefined,
      quantity: "",
    },
  });

  return { form };
};

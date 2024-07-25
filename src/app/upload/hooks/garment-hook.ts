import { useToast } from "@/components/ui/use-toast";
import { fetchPostForm } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm, UseFormReturn } from "react-hook-form";
import { z } from "zod";

interface FormGarmentDataType {
  price: string;
  title: string;
  server: string;
  description: string;
  photos: [File, ...File[]];
  gender: string;
}

export const useGarmentPostForm = (
  form: UseFormReturn<FormGarmentDataType>
) => {
  const { toast } = useToast();
  const mutation = useMutation({
    mutationKey: ["uploadGarment"],
    mutationFn: async (data: FormGarmentDataType) => {
      const formData = new FormData();
      (Object.keys(data) as (keyof FormGarmentDataType)[]).forEach((key) => {
        if (Array.isArray(data[key])) {
          (data[key] as File[]).forEach((item) => {
            formData.append(key, item);
          });
        } else {
          formData.append(key, data[key] as string);
        }
      });
      const result = await fetchPostForm("/garments", formData);
      return result;
    },
    onError: (error) => {
      toast({ description: error.message, variant: "destructive" });
    },
    onSuccess: () => {
      toast({
        description: "Garment uploaded successfully",
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

export const garmentSchema = z.object({
  price: z
    .string()
    .refine((val) => Number(val), { message: "The price has to be a number" }),
  title: z.string().max(50, "The title cannot be more than 50 characters."),
  server: z.string().max(30, "Enter a valid server."),
  description: z
    .string()
    .max(300, "The description cannot be more than 300 characters."),
  photos: z
    .array(fileSchema)
    .nonempty({ message: "At least one photo is required" }),
  gender: z.string().max(10, "Choose a game valid gender."),
});

export const useGarmentForm = () => {
  const form = useForm<z.infer<typeof garmentSchema>>({
    resolver: zodResolver(garmentSchema),
    defaultValues: {
      description: "",
      price: "",
      server: "",
      title: "",
      photos: undefined,
      gender: "",
    },
  });

  return { form };
};

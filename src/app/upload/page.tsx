import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import UploadPetForm from "@/components/upload-forms/upload-pet-form";

export default function UploadPage() {
  return (
    <Card className="mt-10 max-w-5xl mx-auto">
      <CardHeader>
        <CardTitle>Have something to sell?</CardTitle>
        <CardDescription>
          You can upload anything you want to sell or trade. Be careful who you
          trade with and trust no one. If you get scammed, I cannot help you.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <UploadPetForm />
      </CardContent>
      <CardFooter>
        <p>
          Only game-related items are allowed to be shared here, so let's keep
          this website safe and clean.
        </p>
      </CardFooter>
    </Card>
  );
}

"use client";
import { CloudUpload } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function UploadButton() {
  return (
    <Link href="/upload">
      <Button className="text-brand" variant={"outline"}>
        <CloudUpload className="mr-2" />
        <span className="hidden md:inline">Got something to sell?</span>
        <span className="inline md:hidden">Upload</span>
      </Button>
    </Link>
  );
}

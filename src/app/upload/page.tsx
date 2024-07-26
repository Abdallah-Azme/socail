import UploadCard from "@/components/cards/upload-card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UploadGarmentForm from "./ui/upload-garment-form";
import UploadGearForm from "./ui/upload-gear-form";
import UploadPetForm from "./ui/upload-pet-form";
import UploadItemForm from "./ui/upload-item-form";

export default function UploadPage() {
  return (
    <Tabs defaultValue="pet" className="mt-10 w-full max-w-4xl mx-auto">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="pet">Pet</TabsTrigger>
        <TabsTrigger value="gear">Gear</TabsTrigger>
        <TabsTrigger value="garment">garment</TabsTrigger>
        <TabsTrigger value="item">item</TabsTrigger>
      </TabsList>
      <TabsContent value="pet">
        <UploadCard>
          <UploadPetForm />
        </UploadCard>
      </TabsContent>
      <TabsContent value="gear">
        <UploadCard>
          <UploadGearForm />
        </UploadCard>
      </TabsContent>
      <TabsContent value="garment">
        <UploadCard>
          <UploadGarmentForm />
        </UploadCard>
      </TabsContent>
      <TabsContent value="item">
        <UploadCard>
          <UploadItemForm />
        </UploadCard>
      </TabsContent>
    </Tabs>
  );
}

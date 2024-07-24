import UploadCard from "@/components/cards/upload-card";
import UploadGearCard from "@/components/cards/upload-gear-card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UploadPetForm from "./ui/upload-pet-form";
import UploadGearForm from "./ui/upload-gear-form";

export default function UploadPage() {
  return (
    <Tabs defaultValue="pet" className="mt-10 max-w-4xl mx-auto">
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
          <UploadPetForm />
        </UploadCard>
      </TabsContent>
      <TabsContent value="item">
        <UploadCard>
          <UploadPetForm />
        </UploadCard>
      </TabsContent>
    </Tabs>
  );
}

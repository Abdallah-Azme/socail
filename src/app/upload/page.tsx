import UploadPetCard from "@/components/cards/upload-pet-card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
        <UploadPetCard />
      </TabsContent>
      <TabsContent value="gear">
        <UploadPetCard />
      </TabsContent>
      <TabsContent value="garment">
        <UploadPetCard />
      </TabsContent>
      <TabsContent value="item">
        <UploadPetCard />
      </TabsContent>
    </Tabs>
  );
}

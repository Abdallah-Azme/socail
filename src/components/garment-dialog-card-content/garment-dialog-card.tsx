import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useStore } from "@/store/store";

import { GarmentType } from "@/constants/types";
import { DialogTitle } from "@radix-ui/react-dialog";
import GearCardItem from "./garment-card-item";
import GearDialogBody from "./garment-dialog-body";
import GarmentCardItem from "./garment-card-item";

export default function GarmentDialogCard({
  garment,
}: {
  garment: GarmentType;
}) {
  const { openCardDialog, openCardId, closeCardDialog } = useStore();
  const isOpen = openCardId === garment.id;
  const onToggleCardDialog = () => {
    if (openCardId) {
      closeCardDialog();
    } else {
      openCardDialog(garment.id);
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={onToggleCardDialog}>
      <DialogTrigger asChild>
        <GarmentCardItem garment={garment} />
      </DialogTrigger>
      <DialogContent
        aria-describedby={undefined}
        className="dialog-content flex flex-col items-center w-full sm:max-w-[620px] md:max-w-[700px] max-w-[700px] overflow-y-scroll max-h-full"
      >
        <DialogTitle className="text-brand">{garment.title}</DialogTitle>
        <GearDialogBody garment={garment} isOpen={isOpen} />
      </DialogContent>
    </Dialog>
  );
}

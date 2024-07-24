import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useStore } from "@/store/store";

import { GearType, PetType } from "@/constants/types";
import { DialogTitle } from "@radix-ui/react-dialog";
import CardItem from "../pet-dialog-card-content/pet-card-item";
import DialogBody from "../pet-dialog-card-content/pet-dialog-body";
import GearCardItem from "./gear-card-item";
import GearDialogBody from "./gear-dialog-body";

export default function GearDialogCard({ gear }: { gear: GearType }) {
  const { openCardDialog, openCardId, closeCardDialog } = useStore();
  const isOpen = openCardId === gear.id;

  const onToggleCardDialog = () => {
    if (openCardId) {
      closeCardDialog();
    } else {
      openCardDialog(gear.id);
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={onToggleCardDialog}>
      <DialogTrigger asChild>
        <GearCardItem gear={gear} />
      </DialogTrigger>
      <DialogContent
        aria-describedby={undefined}
        className="dialog-content flex flex-col items-center w-full sm:max-w-[620px] md:max-w-[700px] max-w-[700px] overflow-y-scroll max-h-full"
      >
        <DialogTitle className="text-brand">{gear.gearType}</DialogTitle>
        <GearDialogBody gear={gear} isOpen={isOpen} />
      </DialogContent>
    </Dialog>
  );
}

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useStore } from "@/store/store";

import { PetType } from "@/constants/types";
import { DialogTitle } from "@radix-ui/react-dialog";
import PetCardItem from "./pet-card-item";
import DialogBody from "./pet-dialog-body";
import PetDialogBody from "./pet-dialog-body";

export default function PetDialogCard({ pet }: { pet: PetType }) {
  const { openCardDialog, openCardId, closeCardDialog } = useStore();
  const isOpen = openCardId === pet.id;

  const onToggleCardDialog = () => {
    if (openCardId) {
      closeCardDialog();
    } else {
      openCardDialog(pet.id);
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={onToggleCardDialog}>
      <DialogTrigger asChild>
        <PetCardItem pet={pet} />
      </DialogTrigger>
      <DialogContent
        aria-describedby={undefined}
        className="dialog-content flex flex-col items-center w-full sm:max-w-[620px] md:max-w-[700px] max-w-[700px] overflow-y-scroll max-h-full"
      >
        <DialogTitle className="text-brand">{pet.type}</DialogTitle>
        <PetDialogBody pet={pet} isOpen={isOpen} />
      </DialogContent>
    </Dialog>
  );
}

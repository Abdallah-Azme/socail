import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useStore } from "@/store/store";

import { PetType } from "@/constants/types";
import { DialogTitle } from "@radix-ui/react-dialog";
import CardItem from "../shared/card-item";
import DialogBody from "./dialog-body";
import { Separator } from "@radix-ui/react-separator";
export default function DialogCard({ pet }: { pet: PetType }) {
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
        <CardItem pet={pet} />
      </DialogTrigger>
      <DialogContent
        aria-describedby={undefined}
        className="dialog-content flex flex-col items-center w-full sm:max-w-[620px] md:max-w-[700px] max-w-[700px] overflow-y-scroll max-h-full"
      >
        <DialogTitle className="text-brand">{pet.type}</DialogTitle>
        <DialogBody pet={pet} isOpen={isOpen} />
      </DialogContent>
    </Dialog>
  );
}

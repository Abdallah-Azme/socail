import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useStore } from "@/store/store";

import { ItemType } from "@/constants/types";
import { DialogTitle } from "@radix-ui/react-dialog";
import ItemCardItem from "./item-card-item";
import ItemDialogBody from "./item-dialog-body";

export default function ItemDialogCard({ item }: { item: ItemType }) {
  const { openCardDialog, openCardId, closeCardDialog } = useStore();
  const isOpen = openCardId === item.id;

  const onToggleCardDialog = () => {
    if (openCardId) {
      closeCardDialog();
    } else {
      openCardDialog(item.id);
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={onToggleCardDialog}>
      <DialogTrigger asChild>
        <ItemCardItem item={item} />
      </DialogTrigger>
      <DialogContent
        aria-describedby={undefined}
        className="dialog-content flex flex-col items-center w-full sm:max-w-[620px] md:max-w-[700px] max-w-[700px] overflow-y-scroll max-h-full"
      >
        <DialogTitle className="text-brand">{item.title}</DialogTitle>
        <ItemDialogBody item={item} isOpen={isOpen} />
      </DialogContent>
    </Dialog>
  );
}

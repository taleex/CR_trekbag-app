import { use } from "react";
import Button from "./Button";
import { useItemsStore } from "../stores/itemsStore";

export default function ButtonGroup() {
  const handleMarkAllAsComplete = useItemsStore(
    (state) => state.markAllAsComplete
  );
  const handleMarkAllAsIncomplete = useItemsStore(
    (state) => state.markAllAsIncomplete
  );
  const handleResetToInitial = useItemsStore((state) => state.resetToInitial);
  const handleRemoveAllItems = useItemsStore((state) => state.removeAllItems);

  return (
    <section className="button-group">
      <Button onClick={handleMarkAllAsComplete} buttonType="secondary">
        Mark all as complete
      </Button>
      <Button onClick={handleMarkAllAsIncomplete} buttonType="secondary">
        Mark all as incomplete
      </Button>
      <Button onClick={handleResetToInitial} buttonType="secondary">
        Reset to initial
      </Button>
      <Button onClick={handleRemoveAllItems} buttonType="secondary">
        Remove all items
      </Button>
    </section>
  );
}

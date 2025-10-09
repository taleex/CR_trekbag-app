import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({
  handleMarkAllAsComplete,
  handleMarkAllAsIncomplete,
  handleAddItem,
  handleRemoveAllItems,
  handleResetToInitial,
}) {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup
        handleMarkAllAsComplete={handleMarkAllAsComplete}
        handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
        handleResetToInitial={handleResetToInitial}
        handleRemoveAllItems={handleRemoveAllItems}
      />
    </div>
  );
}

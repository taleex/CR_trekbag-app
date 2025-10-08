import { useRef, useState } from "react";
import Button from "./Button";

export default function AddItemForm({ onAddItem }) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!itemText) {
      alert("Please enter an item name");
      inputRef.current.focus();
      return;
    }

    onAddItem(itemText);
    setItemText("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-item-form">
      <h2>Add New Item</h2>
      <input
        ref={inputRef}
        value={itemText}
        onChange={(e) => {
          setItemText(e.target.value);
        }}
        type="text"
        placeholder="Toothpaste.."
        autoFocus
      />
      <Button>Add to list</Button>
    </form>
  );
}

import Button from "./Button";

export default function AddItemForm() {
  return (
    <form className="add-item-form">
      <h2>Add New Item</h2>
      <input type="text" placeholder="Toothpaste.." />
      <Button>Add to list</Button>
    </form>
  );
}

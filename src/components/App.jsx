import { useEffect, useState } from "react";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import Itemlist from "./Itemlist";
import Sidebar from "./Sidebar";
import { initialItems } from "../lib/contstants";

function App() {
  const [items, setItems] = useState(() => {
    return JSON.parse(localStorage.getItem("items")) || initialItems;
  });

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    };

    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const handleDeleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const handleToggleItem = (id) => {
    const newItem = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }
      return item;
    });
    setItems(newItem);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleResetToInitial = () => {
    setItems(initialItems);
  };

  const handleMarkAllAsComplete = () => {
    const newItems = items.map((item) => ({ ...item, packed: true }));
    setItems(newItems);
  };

  const handleMarkAllAsIncomplete = () => {
    const newItems = items.map((item) => ({ ...item, packed: false }));
    setItems(newItems);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const totalNumberOfItems = items.length;

  const totalPackedItems = items.filter((item) => item.packed).length;

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header
          totalPackedItems={totalPackedItems}
          totalNumberOfItems={totalNumberOfItems}
        />
        <Itemlist
          handleToggleItem={handleToggleItem}
          handleDeleteItem={handleDeleteItem}
          items={items}
        />
        <Sidebar
          handleMarkAllAsComplete={handleMarkAllAsComplete}
          handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
          handleResetToInitial={handleResetToInitial}
          handleRemoveAllItems={handleRemoveAllItems}
          handleAddItem={handleAddItem}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;

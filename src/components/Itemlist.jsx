import { useState } from "react";
import { initialItems } from "../lib/contstants";

export default function Itemlist({
  items,
  handleDeleteItem,
  handleToggleItem,
}) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <Item
            onToggleItem={handleToggleItem}
            onDeleteItem={handleDeleteItem}
            key={item.id}
            item={item}
          />
        );
      })}
    </ul>
  );
}

function Item({ item, onToggleItem, onDeleteItem }) {
  return (
    <li className="item">
      <label>
        <input
          onChange={() => onToggleItem(item.id)}
          type="checkbox"
          checked={item.packed}
          readOnly
        />
        {item.name}
      </label>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

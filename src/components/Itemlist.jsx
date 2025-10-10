import Select from "react-select";
import EmptyView from "./EmptyView";
import { useMemo, useState } from "react";
import { use } from "react";

const sortingOptions = [
  { value: "default", label: "Sort by default" },
  { value: "packed", label: "Sort by packed" },
  { value: "unpacked", label: "Sort by unpacked" },
];

export default function Itemlist({
  items,
  handleDeleteItem,
  handleToggleItem,
}) {
  const [sortBy, setSortBy] = useState("default");

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "packed") {
          return b.packed - a.packed;
        }
        if (sortBy === "unpacked") {
          return a.packed - b.packed;
        }
        return 0;
      }),
    [items, sortBy]
  );

  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}

      {items.length > 0 ? (
        <section className="sorting">
          <Select
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
            onChange={(option) => setSortBy(option.value)}
          />
        </section>
      ) : null}

      {sortedItems.map((item) => (
        <Item
          onToggleItem={handleToggleItem}
          onDeleteItem={handleDeleteItem}
          key={item.id}
          item={item}
        />
      ))}
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

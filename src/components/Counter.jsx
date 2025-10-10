export default function Counter({ totalNumberOfItems, totalPackedItems }) {
  return (
    <p>
      <b>{totalPackedItems}</b> / {totalNumberOfItems} items packed
    </p>
  );
}

import Counter from "./Counter";
import Logo from "./Logo";

export default function Header({ totalNumberOfItems, totalPackedItems }) {
  return (
    <header>
      <Logo />
      <Counter
        totalPackedItems={totalPackedItems}
        totalNumberOfItems={totalNumberOfItems}
      />
    </header>
  );
}

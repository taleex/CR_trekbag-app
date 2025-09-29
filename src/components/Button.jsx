export default function Button({ type, children }) {
  return (
    <button
      className={`btn ${type === "secondary" ? "btn--secondary" : ""}`}
      type="submit"
    >
      {children}
    </button>
  );
}

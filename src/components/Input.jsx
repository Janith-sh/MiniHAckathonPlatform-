export default function Input({ placeholder, type = "text" }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full p-2 rounded-lg bg-card border border-border text-text focus:outline-none focus:ring-2 focus:ring-primary"
    />
  );
}
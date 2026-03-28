export default function Input({ placeholder, type = "text", icon }) {
  return (
    <div className="relative">
      {icon && (
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted">
          {icon}
        </div>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full p-2 rounded-lg bg-card border border-border text-text focus:outline-none focus:ring-2 focus:ring-primary ${
          icon ? "pl-10" : ""
        }`}
      />
    </div>
  );
}
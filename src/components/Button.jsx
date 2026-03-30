export default function Button({ children, type = "primary", onClick, disabled, className }) {
  const base = "px-4 py-2 rounded-lg font-medium transition";

  const styles = {
    primary: "bg-primary text-white hover:bg-primaryHover disabled:bg-gray-500 disabled:cursor-not-allowed",
    secondary: "bg-card border border-border text-text hover:bg-border/50 disabled:opacity-50 disabled:cursor-not-allowed",
    danger: "bg-danger text-white hover:bg-red-600 disabled:bg-gray-500 disabled:cursor-not-allowed"
  };

  return (
    <button
      className={`${base} ${styles[type]} ${className || ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
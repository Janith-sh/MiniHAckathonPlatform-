export default function Button({ children, type = "primary", onClick }) {
  const base = "px-4 py-2 rounded-lg font-medium transition";

  const styles = {
    primary: "bg-primary text-white hover:bg-primaryHover",
    secondary: "bg-card border border-border text-text",
    danger: "bg-danger text-white"
  };

  return <button className={`${base} ${styles[type]}`} onClick={onClick}>{children}</button>;
}
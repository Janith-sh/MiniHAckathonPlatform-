import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-card h-full border-r border-border p-4 space-y-4">
      <Link to="/dashboard" className="block hover:text-primary">
        Dashboard
      </Link>
      <Link to="/team" className="block hover:text-primary">
        Team
      </Link>
      <Link to="/submit" className="block hover:text-primary">
        Submit
      </Link>
    </div>
  );
}
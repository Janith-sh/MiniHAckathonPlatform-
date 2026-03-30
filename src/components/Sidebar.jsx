import { Link, useLocation } from "react-router-dom";
import { Home, Users, Upload } from "lucide-react";

export default function Sidebar() {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/dashboard", icon: <Home size={18} /> },
    { name: "Team", path: "/team", icon: <Users size={18} /> },
    { name: "Hackathons", path: "/hackathons", icon: <Upload size={18} /> },
  ];

  return (
    <div className="w-64 bg-card border-r border-border p-4 flex flex-col">
      
      <div className="mb-6 text-sm font-medium text-muted uppercase tracking-wide">Menu</div>

      <div className="space-y-1">
        {menu.map((item) => {
          const active = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                active
                  ? "bg-primary/10 text-primary border-l-2 border-primary"
                  : "text-text hover:bg-border/50 hover:text-primary"
              }`}
            >
              {item.icon}
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
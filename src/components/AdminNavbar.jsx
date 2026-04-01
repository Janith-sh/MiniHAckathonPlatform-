import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

export default function AdminNavbar() {
  const navigate = useNavigate();

  return (
    <div className="h-14 w-full bg-card/80 backdrop-blur-md border-b border-border flex items-center justify-between px-6">
      
      {/* Left */}
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/admin-dashboard")}>
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold">
          A
        </div>
        <h1 className="font-semibold text-lg">Admin Panel</h1>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <span className="text-sm text-muted">Admin</span>

        <button className="flex items-center gap-2 px-3 py-1 rounded-lg bg-card border border-border hover:bg-border transition">
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </div>
  );
}
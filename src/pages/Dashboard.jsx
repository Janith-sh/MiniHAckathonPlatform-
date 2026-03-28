import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { Users, FileText, Trophy, Plus, UserPlus } from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-bg text-text flex flex-col">
      <Navbar />

      <div className="flex flex-1 w-full">
        <Sidebar />

        <div className="flex-1 p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Dashboard</h2>

          {/* Quick Actions */}
          <div className="flex gap-4">
            <Button onClick={() => navigate("/create-team")}>
              <div className="flex items-center gap-2">
                <Plus size={16} />
                Create Team
              </div>
            </Button>
            <Button type="secondary" onClick={() => navigate("/join-team")}>
              <div className="flex items-center gap-2">
                <UserPlus size={16} />
                Join Team
              </div>
            </Button>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-card p-5 rounded-xl border border-border hover:border-primary transition">
              <div className="flex items-center gap-3 mb-3">
                <Users size={20} className="text-primary" />
                <h3 className="text-lg font-medium">Team Status</h3>
              </div>
              <p className="text-muted text-sm">
                You are not in a team yet
              </p>
            </div>

            <div className="bg-card p-5 rounded-xl border border-border hover:border-primary transition">
              <div className="flex items-center gap-3 mb-3">
                <FileText size={20} className="text-primary" />
                <h3 className="text-lg font-medium">Submission</h3>
              </div>
              <p className="text-muted text-sm">
                No submission yet
              </p>
            </div>

            <div className="bg-card p-5 rounded-xl border border-border hover:border-primary transition">
              <div className="flex items-center gap-3 mb-3">
                <Trophy size={20} className="text-primary" />
                <h3 className="text-lg font-medium">Hackathon Status</h3>
              </div>
              <p className="text-muted text-sm">
                Submissions Open
              </p>
            </div>
          </div>

          {/* Activity Section */}
          <div className="bg-card p-5 rounded-xl border border-border hover:border-primary transition">
            <h3 className="text-lg font-medium mb-2">Recent Activity</h3>
            <p className="text-muted text-sm">
              No recent activity
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
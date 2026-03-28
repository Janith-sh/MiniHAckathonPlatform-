import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

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
              Create Team
            </Button>
            <Button type="secondary" onClick={() => navigate("/join-team")}>
              Join Team
            </Button>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-card p-4 rounded-lg border border-border">
              <h3 className="text-lg font-medium">Team Status</h3>
              <p className="text-muted text-sm mt-2">
                You are not in a team yet
              </p>
            </div>

            <div className="bg-card p-4 rounded-lg border border-border">
              <h3 className="text-lg font-medium">Submission</h3>
              <p className="text-muted text-sm mt-2">
                No submission yet
              </p>
            </div>

            <div className="bg-card p-4 rounded-lg border border-border">
              <h3 className="text-lg font-medium">Hackathon Status</h3>
              <p className="text-muted text-sm mt-2">
                Submissions Open
              </p>
            </div>
          </div>

          {/* Activity Section */}
          <div className="bg-card p-4 rounded-lg border border-border">
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
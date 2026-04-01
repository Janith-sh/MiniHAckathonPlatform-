import AdminNavbar from "../components/AdminNavbar";
import AdminSidebar from "../components/AdminSidebar";
import { hackathons, teams } from "../data/mockData";
import { Trophy, Calendar, Users, UserCheck } from "lucide-react";

export default function AdminDashboard() {
  const totalHackathons = hackathons.length;
  const activeHackathons = hackathons.filter(h => h.status === "in_progress").length;
  const totalTeams = teams.length;
  const totalParticipants = hackathons.reduce((sum, h) => sum + h.participants, 0);

  return (
    <div className="min-h-screen w-full bg-bg text-text flex flex-col">
      <AdminNavbar />

      <div className="flex flex-1 w-full">
        <AdminSidebar />

        <div className="flex-1 p-6 space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-4 gap-6">
            <div className="bg-card p-5 rounded-xl border border-border">
              <div className="flex items-center gap-3 mb-3">
                <Trophy className="text-primary" size={24} />
                <div>
                  <h3 className="text-sm text-muted">Total Hackathons</h3>
                  <p className="text-2xl font-bold">{totalHackathons}</p>
                </div>
              </div>
            </div>

            <div className="bg-card p-5 rounded-xl border border-border">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="text-primary" size={24} />
                <div>
                  <h3 className="text-sm text-muted">Active Hackathons</h3>
                  <p className="text-2xl font-bold">{activeHackathons}</p>
                </div>
              </div>
            </div>

            <div className="bg-card p-5 rounded-xl border border-border">
              <div className="flex items-center gap-3 mb-3">
                <Users className="text-primary" size={24} />
                <div>
                  <h3 className="text-sm text-muted">Total Teams</h3>
                  <p className="text-2xl font-bold">{totalTeams}</p>
                </div>
              </div>
            </div>

            <div className="bg-card p-5 rounded-xl border border-border">
              <div className="flex items-center gap-3 mb-3">
                <UserCheck className="text-primary" size={24} />
                <div>
                  <h3 className="text-sm text-muted">Total Participants</h3>
                  <p className="text-2xl font-bold">{totalParticipants}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional content can be added here */}
        </div>
      </div>
    </div>
  );
}
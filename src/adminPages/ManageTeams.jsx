import AdminNavbar from "../components/AdminNavbar";
import AdminSidebar from "../components/AdminSidebar";
import { teams, hackathons } from "../data/mockData";
import { Users, User } from "lucide-react";

export default function ManageTeams() {
  const getHackathonName = (hackathonId) => {
    const hackathon = hackathons.find(h => h.id === hackathonId);
    return hackathon ? hackathon.name : "None";
  };

  return (
    <div className="min-h-screen w-full bg-bg text-text flex flex-col">
      <AdminNavbar />

      <div className="flex flex-1 w-full">
        <AdminSidebar />

        <div className="flex-1 p-6 space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Manage Teams</h1>
          </div>

          {/* Teams List */}
          <div className="bg-card p-6 rounded-xl border border-border">
            <h2 className="text-xl font-semibold mb-4">All Teams</h2>
            <div className="space-y-4">
              {teams.map((team) => (
                <div key={team.id} className="p-4 bg-bg rounded-lg">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-lg">{team.name}</h3>
                      <p className="text-sm text-muted">Leader: {team.leader}</p>
                      <p className="text-sm text-muted">Hackathon: {getHackathonName(team.hackathon)}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted">Members: {team.members.length}/{team.maxMembers}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {team.members.map((member) => (
                      <div key={member.id} className="flex items-center gap-2 px-3 py-1 bg-card border border-border rounded-lg">
                        <User size={14} />
                        <span className="text-sm">{member.name} ({member.role})</span>
                        {member.joined ? (
                          <span className="text-xs text-green-400">Joined</span>
                        ) : (
                          <span className="text-xs text-red-400">Pending</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import { useParams } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import AdminSidebar from "../components/AdminSidebar";
import { hackathons, teams } from "../data/mockData";
import { Users, User, FileText } from "lucide-react";

export default function HackathonDetails() {
  const { id } = useParams();
  const hackathon = hackathons.find(h => h.id === parseInt(id));
  const joinedTeams = teams.filter(team => team.hackathon === parseInt(id));

  if (!hackathon) {
    return <div>Hackathon not found</div>;
  }

  return (
    <div className="min-h-screen w-full bg-bg text-text flex flex-col">
      <AdminNavbar />

      <div className="flex flex-1 w-full">
        <AdminSidebar />

        <div className="flex-1 p-6 space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">{hackathon.name}</h1>
          </div>

          {/* Hackathon Info */}
          <div className="bg-card p-6 rounded-xl border border-border">
            <h2 className="text-xl font-semibold mb-4">Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted">Status</p>
                <p className="font-semibold">{hackathon.status}</p>
              </div>
              <div>
                <p className="text-sm text-muted">Date</p>
                <p className="font-semibold">{hackathon.date}</p>
              </div>
              <div>
                <p className="text-sm text-muted">Participants</p>
                <p className="font-semibold">{hackathon.participants}</p>
              </div>
              <div>
                <p className="text-sm text-muted">Prize</p>
                <p className="font-semibold">{hackathon.prize}</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-muted">Description</p>
              <p>{hackathon.description}</p>
            </div>
          </div>

          {/* Joined Teams */}
          <div className="bg-card p-6 rounded-xl border border-border">
            <h2 className="text-xl font-semibold mb-4">Joined Teams ({joinedTeams.length})</h2>
            <div className="space-y-4">
              {joinedTeams.map((team) => (
                <div key={team.id} className="p-4 bg-bg rounded-lg">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-lg">{team.name}</h3>
                      <p className="text-sm text-muted">Leader: {team.leader}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText size={16} className="text-muted" />
                      <span className="text-sm text-muted">Submission: Pending</span>
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
              {joinedTeams.length === 0 && (
                <p className="text-muted">No teams have joined this hackathon yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
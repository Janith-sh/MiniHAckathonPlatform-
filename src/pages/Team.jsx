import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { teams } from "../data/mockData";
import { Users, Crown, Hash, Trophy, ArrowLeft, Copy } from "lucide-react";

export default function Team() {
  const navigate = useNavigate();
  const [selectedTeam, setSelectedTeam] = useState(null);

  const hasTeam = true; // later from backend

  const copyJoinCode = (code) => {
    navigator.clipboard.writeText(code);
    alert("Join code copied to clipboard!");
  };

  if (selectedTeam) {
    return (
      <div className="min-h-screen w-full bg-bg text-text flex flex-col">
        <Navbar />

        <div className="flex flex-1 w-full">
          <Sidebar />

          <div className="flex-1 p-6">
            <div className="mb-6">
              <Button type="secondary" onClick={() => setSelectedTeam(null)}>
                <div className="flex items-center gap-2">
                  <ArrowLeft size={16} />
                  Back to Teams
                </div>
              </Button>
            </div>

            <div className="max-w-2xl">
              <div className="bg-card p-6 rounded-xl border border-border mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-3xl font-bold">{selectedTeam.name}</h1>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted">Join Code:</span>
                    <div className="flex items-center gap-2 bg-bg px-3 py-1 rounded border">
                      <code className="font-mono text-primary">{selectedTeam.joinCode}</code>
                      <Button
                        type="secondary"
                        onClick={() => copyJoinCode(selectedTeam.joinCode)}
                        className="p-1"
                      >
                        <Copy size={14} />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Crown className="text-primary" size={20} />
                    <div>
                      <p className="text-sm text-muted">Team Leader</p>
                      <p className="font-medium">{selectedTeam.leader}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Users className="text-primary" size={20} />
                    <div>
                      <p className="text-sm text-muted">Members</p>
                      <p className="font-medium">{selectedTeam.members.filter(m => m.joined).length}/{selectedTeam.maxMembers}</p>
                    </div>
                  </div>
                </div>

                {selectedTeam.hackathon && (
                  <div className="flex items-center gap-3 mb-6">
                    <Trophy className="text-primary" size={20} />
                    <div>
                      <p className="text-sm text-muted">Current Hackathon</p>
                      <p className="font-medium">{selectedTeam.hackathon}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-card p-6 rounded-xl border border-border">
                <h2 className="text-xl font-semibold mb-4">Team Members</h2>
                <div className="space-y-3">
                  {selectedTeam.members.map((member) => (
                    <div
                      key={member.id}
                      className={`p-4 rounded-lg border ${
                        member.joined
                          ? "bg-green-500/10 border-green-500/30"
                          : "bg-muted/20 border-muted"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${
                            member.joined ? "bg-green-400" : "bg-gray-400"
                          }`} />
                          <div>
                            <p className="font-medium">{member.name}</p>
                            <p className="text-sm text-muted capitalize">{member.role}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className={`text-sm px-2 py-1 rounded ${
                            member.joined
                              ? "bg-green-500/20 text-green-400"
                              : "bg-gray-500/20 text-gray-400"
                          }`}>
                            {member.joined ? "Joined" : "Pending"}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-bg text-text flex flex-col">
      <Navbar />

      <div className="flex flex-1 w-full">
        <Sidebar />

        <div className="flex-1 p-6">
          <h2 className="text-2xl mb-4">Team</h2>

          {!hasTeam ? (
            <div className="bg-card p-5 rounded-xl border border-border hover:border-primary transition text-center">
              <p className="mb-4 text-muted">
                You are not part of any team yet
              </p>

              <div className="flex justify-center gap-4">
                <Button onClick={() => navigate("/create-team")}>
                  Create Team
                </Button>
                <Button
                  type="secondary"
                  onClick={() => navigate("/join-team")}
                >
                  Join Team
                </Button>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex justify-center gap-4 mb-6">
                <Button onClick={() => navigate("/create-team")}>
                  Create Team
                </Button>
                <Button
                  type="secondary"
                  onClick={() => navigate("/join-team")}
                >
                  Join Team
                </Button>
              </div>

              <h1 className="text-2xl font-semibold mb-6">Your Teams</h1>

              <div className="grid grid-cols-3 gap-6">
                {teams.map((team) => (
                  <div
                    key={team.id}
                    className="bg-card p-5 rounded-xl border border-border hover:border-primary transition cursor-pointer"
                    onClick={() => setSelectedTeam(team)}
                  >
                    <h2 className="text-lg font-semibold">{team.name}</h2>

                    <p className="text-sm text-muted mt-2">
                      Leader: {team.leader}
                    </p>

                    <p className="text-sm text-muted">
                      Members: {team.members.filter(m => m.joined).length}/{team.maxMembers}
                    </p>

                    <p className="text-sm mt-2">
                      Hackathon:{" "}
                      {team.hackathon ? team.hackathon : "Not Joined"}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
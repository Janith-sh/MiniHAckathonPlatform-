import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Input from "../components/Input";
import Button from "../components/Button";
import { teams } from "../data/mockData";
import { Hash, Users, CheckCircle, XCircle } from "lucide-react";

export default function JoinTeam() {
  const [code, setCode] = useState("");
  const [team, setTeam] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);

  const handleFindTeam = () => {
    if (!code.trim()) {
      alert("Please enter a join code");
      return;
    }

    const found = teams.find(t => t.joinCode === code.toUpperCase());
    if (found) {
      setTeam(found);
    } else {
      alert("Invalid join code. Please check and try again.");
      setCode("");
    }
  };

  const handleJoin = () => {
    if (!selectedMember) {
      alert("Please select your name from the list");
      return;
    }

    const member = team.members.find(m => m.name === selectedMember);
    if (member.joined) {
      alert("This member slot is already taken. Please choose another name.");
      return;
    }

    alert(`Successfully joined "${team.name}" as ${selectedMember}!`);
    // Here you would typically make an API call to join the team
  };

  const handleBack = () => {
    setTeam(null);
    setSelectedMember(null);
    setCode("");
  };

  return (
    <div className="min-h-screen w-full bg-bg text-text flex flex-col">
      <Navbar />

      <div className="flex flex-1 w-full">
        <Sidebar />

        <div className="flex-1 p-6">
          <h2 className="text-2xl mb-6">Join Team</h2>

          <div className="max-w-md">
            {!team ? (
              <div className="bg-card p-6 rounded-xl border border-border hover:border-primary transition">
                <div className="mb-4">
                  <Input
                    placeholder="Enter Join Code (e.g., ABC123)"
                    icon={<Hash size={16} />}
                    value={code}
                    onChange={(e) => setCode(e.target.value.toUpperCase())}
                  />
                </div>

                <Button onClick={handleFindTeam} className="w-full">
                  Find Team
                </Button>

                <p className="text-sm text-muted mt-4 text-center">
                  Ask your team leader for the join code
                </p>
              </div>
            ) : (
              <div className="bg-card p-6 rounded-xl border border-border hover:border-primary transition">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">{team.name}</h3>
                  <Button type="secondary" onClick={handleBack}>
                    ← Back
                  </Button>
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted mb-2">
                    <Users size={16} />
                    <span>Select your name from available members:</span>
                  </div>

                  <div className="space-y-2">
                    {team.members.map((member) => (
                      <div
                        key={member.id}
                        className={`p-3 border rounded-lg cursor-pointer transition-all ${
                          selectedMember === member.name
                            ? "bg-primary/10 border-primary"
                            : member.joined
                            ? "bg-muted/20 border-muted cursor-not-allowed opacity-60"
                            : "bg-bg border-border hover:border-primary/50"
                        }`}
                        onClick={() => !member.joined && setSelectedMember(member.name)}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{member.name}</span>
                          <div className="flex items-center gap-2">
                            {member.role === "leader" && (
                              <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                                Leader
                              </span>
                            )}
                            {member.joined ? (
                              <XCircle size={16} className="text-red-400" />
                            ) : (
                              <CheckCircle size={16} className="text-green-400" />
                            )}
                          </div>
                        </div>
                        <div className="text-xs text-muted mt-1">
                          {member.joined ? "Already joined" : "Available"}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={handleJoin}
                  className="w-full"
                  disabled={!selectedMember}
                >
                  Join Team
                </Button>

                <p className="text-sm text-muted mt-4 text-center">
                  {team.members.filter(m => !m.joined).length} spot{team.members.filter(m => !m.joined).length !== 1 ? 's' : ''} available
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
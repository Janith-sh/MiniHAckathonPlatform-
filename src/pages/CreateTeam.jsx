import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Input from "../components/Input";
import Button from "../components/Button";
import { Type, UserPlus } from "lucide-react";

export default function CreateTeam() {
  const [teamName, setTeamName] = useState("");
  const [members, setMembers] = useState([
    { name: "" },
  ]);

  const addMember = () => {
    if (members.length < 5) {
      setMembers([...members, { name: "" }]);
    }
  };

  const handleMemberChange = (index, value) => {
    const updated = [...members];
    updated[index].name = value;
    setMembers(updated);
  };

  const removeMember = (index) => {
    if (members.length > 1) {
      const updated = members.filter((_, i) => i !== index);
      setMembers(updated);
    }
  };

  const generateCode = () => {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  };

  const handleSubmit = () => {
    if (!teamName.trim()) {
      alert("Please enter a team name");
      return;
    }

    const validMembers = members.filter(m => m.name.trim());
    if (validMembers.length === 0) {
      alert("Please add at least one team member");
      return;
    }

    const joinCode = generateCode();

    console.log("TEAM CREATED:", {
      teamName,
      joinCode,
      members: validMembers,
    });

    alert(`Team "${teamName}" Created Successfully!\n\nJoin Code: ${joinCode}\n\nShare this code with your team members to join.`);
  };

  return (
    <div className="min-h-screen w-full bg-bg text-text flex flex-col">
      <Navbar />

      <div className="flex flex-1 w-full">
        <Sidebar />

        <div className="flex-1 p-6">
          <h2 className="text-2xl mb-6">Create Team</h2>

          <div className="max-w-md">
            <div className="bg-card p-6 rounded-xl border border-border hover:border-primary transition">
              <div className="mb-4">
                <Input
                  placeholder="Team Name"
                  icon={<Type size={16} />}
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                />
              </div>

              <h3 className="text-lg font-medium mb-3">Team Members ({members.length}/5)</h3>

              <div className="space-y-3 mb-4">
                {members.map((member, index) => (
                  <div key={index} className="flex gap-2">
                    <div className="flex-1">
                      <Input
                        placeholder={`Member ${index + 1}`}
                        icon={<UserPlus size={16} />}
                        value={member.name}
                        onChange={(e) => handleMemberChange(index, e.target.value)}
                      />
                    </div>
                    {members.length > 1 && (
                      <Button
                        type="secondary"
                        onClick={() => removeMember(index)}
                        className="px-3"
                      >
                        ×
                      </Button>
                    )}
                  </div>
                ))}
              </div>

              {members.length < 5 && (
                <Button
                  type="secondary"
                  onClick={addMember}
                  className="w-full mb-4"
                >
                  + Add Member
                </Button>
              )}

              <Button
                onClick={handleSubmit}
                className="w-full"
                disabled={!teamName.trim() || members.filter(m => m.name.trim()).length === 0}
              >
                Create Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
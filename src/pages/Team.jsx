import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { teams } from "../data/mockData";

export default function Team() {
  const navigate = useNavigate();

  const hasTeam = true; // later from backend

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
                    className="bg-card p-5 rounded-xl border border-border"
                  >
                    <h2 className="text-lg font-semibold">{team.name}</h2>

                    <p className="text-sm text-muted mt-2">
                      Leader: {team.leader}
                    </p>

                    <p className="text-sm text-muted">
                      Members: {team.members}/{team.maxMembers}
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
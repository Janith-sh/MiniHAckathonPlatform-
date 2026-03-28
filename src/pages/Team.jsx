import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function Team() {
  const navigate = useNavigate();

  const hasTeam = false; // later from backend

  return (
    <div className="min-h-screen w-full bg-bg text-text flex flex-col">
      <Navbar />

      <div className="flex flex-1 w-full">
        <Sidebar />

        <div className="flex-1 p-6">
          <h2 className="text-2xl mb-4">Team</h2>

          {!hasTeam ? (
            <div className="bg-card p-6 rounded-lg border border-border text-center">
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
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl">Team Name</h3>
              <p className="text-muted mt-2">Members:</p>
              <ul className="mt-2">
                <li>Member 1</li>
                <li>Member 2</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
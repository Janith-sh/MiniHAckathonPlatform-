import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Input from "../components/Input";
import Button from "../components/Button";

export default function JoinTeam() {
  return (
    <div className="min-h-screen w-full bg-bg text-text flex flex-col">
      <Navbar />

      <div className="flex flex-1 w-full">
        <Sidebar />

        <div className="flex-1 p-6">
          <h2 className="text-2xl mb-4">Join Team</h2>

          <div className="bg-card p-6 rounded-lg border border-border w-96">
            <Input placeholder="Enter Team Code" />

            <div className="mt-4">
              <Button>Join Team</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
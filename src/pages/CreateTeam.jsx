import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Input from "../components/Input";
import Button from "../components/Button";
import { Type, FileText } from "lucide-react";

export default function CreateTeam() {
  return (
    <div className="min-h-screen w-full bg-bg text-text flex flex-col">
      <Navbar />

      <div className="flex flex-1 w-full">
        <Sidebar />

        <div className="flex-1 p-6">
          <h2 className="text-2xl mb-4">Create Team</h2>

          <div className="bg-card p-5 rounded-xl border border-border hover:border-primary transition w-96">
            <Input placeholder="Team Name" icon={<Type size={16} />} />
            <Input placeholder="Team Description" icon={<FileText size={16} />} />

            <div className="mt-4">
              <Button>Create Team</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
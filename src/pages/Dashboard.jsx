import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <div className="h-screen bg-bg text-text flex flex-col">
      
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />

        <div className="flex-1 p-6">
          <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-card p-4 rounded-lg border border-border">
              Team Status
            </div>

            <div className="bg-card p-4 rounded-lg border border-border">
              Submission Status
            </div>

            <div className="bg-card p-4 rounded-lg border border-border">
              Notifications
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
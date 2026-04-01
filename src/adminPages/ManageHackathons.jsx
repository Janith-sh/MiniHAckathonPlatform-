import { useState } from "react";
import AdminNavbar from "../components/AdminNavbar";
import AdminSidebar from "../components/AdminSidebar";
import Button from "../components/Button";
import Input from "../components/Input";
import { hackathons } from "../data/mockData";
import { Plus, Eye, Edit } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ManageHackathons() {
  const navigate = useNavigate();
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newHackathon, setNewHackathon] = useState({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  const handleCreate = () => {
    // Mock create, in real app send to backend
    console.log("Creating hackathon:", newHackathon);
    setShowCreateForm(false);
    setNewHackathon({ name: "", description: "", startDate: "", endDate: "" });
  };

  const changeStatus = (id, newStatus) => {
    // Mock change status
    console.log(`Changing status of hackathon ${id} to ${newStatus}`);
  };

  return (
    <div className="min-h-screen w-full bg-bg text-text flex flex-col">
      <AdminNavbar />

      <div className="flex flex-1 w-full">
        <AdminSidebar />

        <div className="flex-1 p-6 space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Manage Hackathons</h1>
            <Button onClick={() => setShowCreateForm(!showCreateForm)}>
              <div className="flex items-center gap-2">
                <Plus size={16} />
                Create Hackathon
              </div>
            </Button>
          </div>

          {/* Create Form */}
          {showCreateForm && (
            <div className="bg-card p-6 rounded-xl border border-border space-y-4">
              <h2 className="text-xl font-semibold">Create New Hackathon</h2>
              <Input
                placeholder="Hackathon Name"
                value={newHackathon.name}
                onChange={(e) => setNewHackathon({ ...newHackathon, name: e.target.value })}
              />
              <textarea
                placeholder="Description"
                className="w-full p-2 rounded-lg bg-card border border-border text-text focus:outline-none focus:ring-2 focus:ring-primary"
                rows={4}
                value={newHackathon.description}
                onChange={(e) => setNewHackathon({ ...newHackathon, description: e.target.value })}
              />
              <div className="grid grid-cols-2 gap-4">
                <Input
                  type="date"
                  placeholder="Start Date"
                  value={newHackathon.startDate}
                  onChange={(e) => setNewHackathon({ ...newHackathon, startDate: e.target.value })}
                />
                <Input
                  type="date"
                  placeholder="End Date"
                  value={newHackathon.endDate}
                  onChange={(e) => setNewHackathon({ ...newHackathon, endDate: e.target.value })}
                />
              </div>
              <div className="flex gap-3">
                <Button onClick={handleCreate}>Create</Button>
                <Button type="secondary" onClick={() => setShowCreateForm(false)}>Cancel</Button>
              </div>
            </div>
          )}

          {/* Hackathons List */}
          <div className="bg-card p-6 rounded-xl border border-border">
            <h2 className="text-xl font-semibold mb-4">Hackathons</h2>
            <div className="space-y-4">
              {hackathons.map((hackathon) => (
                <div key={hackathon.id} className="flex items-center justify-between p-4 bg-bg rounded-lg">
                  <div>
                    <h3 className="font-semibold">{hackathon.name}</h3>
                    <p className="text-sm text-muted">Status: {hackathon.status}</p>
                    <p className="text-sm text-muted">Date: {hackathon.date}</p>
                  </div>
                  <div className="flex gap-3">
                    <select
                      value={hackathon.status}
                      onChange={(e) => changeStatus(hackathon.id, e.target.value)}
                      className="p-2 rounded-lg bg-card border border-border text-text focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="pending">Pending</option>
                      <option value="in_progress">In Progress</option>
                      <option value="finished">Finished</option>
                    </select>
                    <Button type="secondary" onClick={() => navigate(`/admin-hackathon-details/${hackathon.id}`)}>
                      <div className="flex items-center gap-2">
                        <Eye size={16} />
                        View Teams
                      </div>
                    </Button>
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
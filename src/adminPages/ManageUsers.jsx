import { useState } from "react";
import AdminNavbar from "../components/AdminNavbar";
import AdminSidebar from "../components/AdminSidebar";
import Button from "../components/Button";
import { UserCheck, UserX } from "lucide-react";

// Mock users data
const mockUsers = [
  { id: 1, name: "Janith", email: "janith@example.com", role: "admin" },
  { id: 2, name: "Kamal", email: "kamal@example.com", role: "member" },
  { id: 3, name: "Nimal", email: "nimal@example.com", role: "member" },
  { id: 4, name: "John", email: "john@example.com", role: "member" },
  { id: 5, name: "Sarah", email: "sarah@example.com", role: "member" },
];

export default function ManageUsers() {
  const [users, setUsers] = useState(mockUsers);

  const changeRole = (id, newRole) => {
    setUsers(users.map(user => user.id === id ? { ...user, role: newRole } : user));
  };

  return (
    <div className="min-h-screen w-full bg-bg text-text flex flex-col">
      <AdminNavbar />

      <div className="flex flex-1 w-full">
        <AdminSidebar />

        <div className="flex-1 p-6 space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Manage Users</h1>
          </div>

          {/* Users List */}
          <div className="bg-card p-6 rounded-xl border border-border">
            <h2 className="text-xl font-semibold mb-4">All Users</h2>
            <div className="space-y-4">
              {users.map((user) => (
                <div key={user.id} className="flex items-center justify-between p-4 bg-bg rounded-lg">
                  <div>
                    <h3 className="font-semibold">{user.name}</h3>
                    <p className="text-sm text-muted">{user.email}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-1 rounded text-sm ${user.role === 'admin' ? 'bg-primary/10 text-primary' : 'bg-muted text-text'}`}>
                      {user.role}
                    </span>
                    <select
                      value={user.role}
                      onChange={(e) => changeRole(user.id, e.target.value)}
                      className="p-2 rounded-lg bg-card border border-border text-text focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="member">Member</option>
                      <option value="admin">Admin</option>
                    </select>
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
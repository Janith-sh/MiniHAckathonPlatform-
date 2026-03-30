import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { teams, hackathons, leaderboard, recentActivities } from "../data/mockData";
import { Trophy, Calendar, TrendingUp, Users, Plus, UserPlus, Clock, Award } from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();

  const totalTeams = teams.length;
  const pendingHackathons = hackathons.filter(h => h.status === "pending").length;
  const inProgressHackathons = hackathons.filter(h => h.status === "in_progress").length;

  return (
    <div className="min-h-screen w-full bg-bg text-text flex flex-col">
      <Navbar />

      <div className="flex flex-1 w-full">
        <Sidebar />

        <div className="flex-1 p-6 space-y-6">
          {/* Header with Quick Actions */}
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <div className="flex gap-3">
              <Button onClick={() => navigate("/create-team")}>
                <div className="flex items-center gap-2">
                  <Plus size={16} />
                  Create Team
                </div>
              </Button>
              <Button type="secondary" onClick={() => navigate("/join-team")}>
                <div className="flex items-center gap-2">
                  <UserPlus size={16} />
                  Join Team
                </div>
              </Button>
            </div>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-card p-5 rounded-xl border border-border">
              <div className="flex items-center gap-3 mb-3">
                <Users className="text-primary" size={24} />
                <div>
                  <h3 className="text-sm text-muted">Your Teams</h3>
                  <p className="text-2xl font-bold">{totalTeams}</p>
                </div>
              </div>
            </div>

            <div className="bg-card p-5 rounded-xl border border-border">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="text-primary" size={24} />
                <div>
                  <h3 className="text-sm text-muted">Active Hackathons</h3>
                  <p className="text-2xl font-bold">{inProgressHackathons}</p>
                </div>
              </div>
            </div>

            <div className="bg-card p-5 rounded-xl border border-border">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="text-primary" size={24} />
                <div>
                  <h3 className="text-sm text-muted">Open Hackathons</h3>
                  <p className="text-2xl font-bold">{pendingHackathons}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Leaderboard */}
            <div className="bg-card p-6 rounded-xl border border-border">
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="text-primary" size={20} />
                <h2 className="text-xl font-semibold">Leaderboard</h2>
              </div>
              <div className="space-y-3">
                {leaderboard.slice(0, 5).map((entry, index) => (
                  <div key={entry.rank} className="flex items-center justify-between p-3 bg-bg rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
                        index === 0 ? 'bg-yellow-500 text-black' :
                        index === 1 ? 'bg-gray-400 text-black' :
                        index === 2 ? 'bg-orange-600 text-white' :
                        'bg-muted text-text'
                      }`}>
                        {entry.rank}
                      </span>
                      <span className="font-medium">{entry.team}</span>
                    </div>
                    <div className="text-right">
                      <span className="font-bold">{entry.points}</span>
                      <span className={`ml-2 text-sm ${entry.change.startsWith('+') ? 'text-green-400' : entry.change.startsWith('-') ? 'text-red-400' : 'text-muted'}`}>
                        {entry.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Hackathons */}
            <div className="bg-card p-6 rounded-xl border border-border">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="text-primary" size={20} />
                <h2 className="text-xl font-semibold">Upcoming Hackathons</h2>
              </div>
              <div className="space-y-4">
                {hackathons.filter(h => h.status === "pending").map((hackathon) => (
                  <div key={hackathon.id} className="p-4 border border-border rounded-lg">
                    <h3 className="font-semibold mb-2">{hackathon.name}</h3>
                    <p className="text-sm text-muted mb-2">{hackathon.theme}</p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-primary font-medium">{hackathon.prize}</span>
                      <span className="text-muted">Due: {hackathon.deadline}</span>
                    </div>
                    <div className="mt-2 text-xs text-muted">
                      {hackathon.participants} teams registered
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-card p-6 rounded-xl border border-border">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="text-primary" size={20} />
              <h2 className="text-xl font-semibold">Recent Activities</h2>
            </div>
            <div className="space-y-3">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 p-3 bg-bg rounded-lg">
                  <div className={`p-2 rounded-full ${
                    activity.type === 'win' ? 'bg-yellow-500' :
                    activity.type === 'achievement' ? 'bg-purple-500' :
                    activity.type === 'submission' ? 'bg-blue-500' :
                    'bg-green-500'
                  }`}>
                    {activity.type === 'win' && <Trophy size={14} className="text-white" />}
                    {activity.type === 'achievement' && <Award size={14} className="text-white" />}
                    {activity.type === 'submission' && <TrendingUp size={14} className="text-white" />}
                    {activity.type === 'join' && <Users size={14} className="text-white" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-medium text-primary">{activity.team}</span> {activity.action}
                    </p>
                    <p className="text-xs text-muted">{activity.time}</p>
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
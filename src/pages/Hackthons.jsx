import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Button from "../components/Button";
import { hackathons } from "../data/mockData";
import { Calendar, Trophy, Users, ArrowLeft, Clock, Target, Award, Mail, CheckCircle, AlertCircle, XCircle } from "lucide-react";

export default function Hackathons() {
  const [selectedHackathon, setSelectedHackathon] = useState(null);

  if (selectedHackathon) {
    return (
      <div className="min-h-screen w-full bg-bg text-text flex flex-col">
        <Navbar />

        <div className="flex flex-1 w-full">
          <Sidebar />

          <div className="flex-1 p-6">
            <div className="mb-6">
              <Button type="secondary" onClick={() => setSelectedHackathon(null)}>
                <div className="flex items-center gap-2">
                  <ArrowLeft size={16} />
                  Back to Hackathons
                </div>
              </Button>
            </div>

            <div className="max-w-4xl space-y-6">
              {/* Header Section */}
              <div className="bg-card p-6 rounded-xl border border-border">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">{selectedHackathon.name}</h1>
                    <p className="text-muted mb-4">{selectedHackathon.description}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                      selectedHackathon.status === "pending"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : selectedHackathon.status === "in_progress"
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-green-500/20 text-green-400"
                    }`}>
                      {selectedHackathon.status.replace("_", " ").toUpperCase()}
                    </span>
                    {selectedHackathon.winner && (
                      <div className="flex items-center gap-2 text-green-400">
                        <Trophy size={16} />
                        <span className="text-sm font-medium">Winner: {selectedHackathon.winner}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="text-primary" size={20} />
                    <div>
                      <p className="text-sm text-muted">Date</p>
                      <p className="font-medium">{selectedHackathon.date}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Trophy className="text-primary" size={20} />
                    <div>
                      <p className="text-sm text-muted">Prize</p>
                      <p className="font-medium">{selectedHackathon.prize}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Users className="text-primary" size={20} />
                    <div>
                      <p className="text-sm text-muted">Teams</p>
                      <p className="font-medium">{selectedHackathon.participants}/{selectedHackathon.maxTeams}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Target className="text-primary" size={20} />
                    <div>
                      <p className="text-sm text-muted">Theme</p>
                      <p className="font-medium">{selectedHackathon.theme}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Section */}
              <div className="bg-card p-6 rounded-xl border border-border">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Clock className="text-primary" size={20} />
                  Timeline
                </h2>
                <div className="space-y-3">
                  {selectedHackathon.timeline.map((phase, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 bg-bg rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <div className="flex-1">
                        <p className="font-medium">{phase.phase}</p>
                        <p className="text-sm text-muted">{phase.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rules & Requirements */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-xl border border-border">
                  <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <CheckCircle className="text-primary" size={20} />
                    Rules
                  </h2>
                  <ul className="space-y-2">
                    {selectedHackathon.rules.map((rule, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">•</span>
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-card p-6 rounded-xl border border-border">
                  <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <AlertCircle className="text-primary" size={20} />
                    Requirements
                  </h2>
                  <ul className="space-y-2">
                    {selectedHackathon.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Judging Criteria */}
              <div className="bg-card p-6 rounded-xl border border-border">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Award className="text-primary" size={20} />
                  Judging Criteria
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedHackathon.judgingCriteria.map((criteria, index) => (
                    <div key={index} className="p-3 bg-bg rounded-lg">
                      <p className="text-sm">{criteria}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact & Action */}
              <div className="bg-card p-6 rounded-xl border border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Mail className="text-primary" size={20} />
                    <div>
                      <p className="text-sm text-muted">Contact</p>
                      <p className="font-medium">{selectedHackathon.contact}</p>
                    </div>
                  </div>

                  {selectedHackathon.status === "pending" && (
                    <Button className="px-8">
                      Join with Team
                    </Button>
                  )}

                  {selectedHackathon.status === "in_progress" && (
                    <Button type="secondary" className="px-8">
                      View Live Updates
                    </Button>
                  )}

                  {selectedHackathon.status === "finished" && (
                    <Button type="secondary" className="px-8">
                      View Results
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-bg text-text flex flex-col">
      <Navbar />

      <div className="flex flex-1 w-full">
        <Sidebar />

        <div className="flex-1 p-6">
          <h1 className="text-2xl font-semibold mb-6">Hackathons</h1>

          <div className="grid grid-cols-3 gap-6">
            {hackathons.map((hack) => (
              <div
                key={hack.id}
                className="bg-card p-6 rounded-xl border border-border hover:border-primary transition cursor-pointer"
                onClick={() => setSelectedHackathon(hack)}
              >
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-lg font-semibold">{hack.name}</h2>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium
                    ${
                      hack.status === "pending"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : hack.status === "in_progress"
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-green-500/20 text-green-400"
                    }`}
                  >
                    {hack.status.replace("_", " ").toUpperCase()}
                  </span>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted">
                    <Calendar size={16} />
                    <span>{hack.date}</span>
                  </div>

                  {hack.prize && (
                    <div className="flex items-center gap-2 text-sm text-muted">
                      <Trophy size={16} />
                      <span>{hack.prize}</span>
                    </div>
                  )}

                  {hack.participants && (
                    <div className="flex items-center gap-2 text-sm text-muted">
                      <Users size={16} />
                      <span>{hack.participants}/{hack.maxTeams} teams</span>
                    </div>
                  )}

                  {hack.theme && (
                    <p className="text-sm text-muted mt-2">
                      <strong>Theme:</strong> {hack.theme}
                    </p>
                  )}

                  {hack.winner && (
                    <p className="text-sm text-muted">
                      <strong>Winner:</strong> {hack.winner}
                    </p>
                  )}
                </div>

                {hack.status === "pending" && (
                  <Button className="w-full">
                    Join with Team
                  </Button>
                )}

                {hack.status === "in_progress" && (
                  <Button type="secondary" className="w-full">
                    View Details
                  </Button>
                )}

                {hack.status === "finished" && (
                  <Button type="secondary" className="w-full">
                    View Results
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
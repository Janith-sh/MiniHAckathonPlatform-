export const teams = [
  {
    id: 1,
    name: "Code Masters",
    leader: "You",
    joinCode: "ABC123",
    members: [
      { id: 1, name: "Janith", role: "leader", joined: true },
      { id: 2, name: "Kamal", role: "member", joined: false },
      { id: 3, name: "Nimal", role: "member", joined: false },
    ],
    maxMembers: 5,
    hackathon: null,
  },
  {
    id: 2,
    name: "Bug Hunters",
    leader: "John",
    joinCode: "XYZ789",
    members: [
      { id: 4, name: "John", role: "leader", joined: true },
      { id: 5, name: "Sarah", role: "member", joined: true },
      { id: 6, name: "Mike", role: "member", joined: false },
    ],
    maxMembers: 5,
    hackathon: null,
  },
  {
    id: 3,
    name: "Web Warriors",
    leader: "Jane",
    joinCode: "WEB456",
    members: [
      { id: 7, name: "Jane", role: "leader", joined: true },
      { id: 8, name: "Alex", role: "member", joined: true },
      { id: 9, name: "Lisa", role: "member", joined: true },
      { id: 10, name: "Tom", role: "member", joined: true },
      { id: 11, name: "Emma", role: "member", joined: true },
    ],
    maxMembers: 5,
    hackathon: null,
  },
];

export const hackathons = [
  {
    id: 1,
    name: "AI Challenge 2026",
    status: "pending",
    date: "2026-05-01",
    participants: 45,
    prize: "$10,000",
    theme: "Sustainable AI Solutions",
    deadline: "2026-04-25",
    description: "Build innovative AI solutions that address real-world sustainability challenges. Focus on environmental impact, ethical AI development, and scalable implementations.",
    rules: [
      "Teams must consist of 2-5 members",
      "All code must be original and open-source",
      "Solutions must demonstrate measurable environmental impact",
      "Projects must be completed within 48 hours"
    ],
    requirements: [
      "Working prototype or MVP",
      "Source code repository",
      "Project documentation",
      "Presentation/demo video"
    ],
    judgingCriteria: [
      "Innovation and creativity (30%)",
      "Technical implementation (25%)",
      "Environmental impact (25%)",
      "Presentation quality (20%)"
    ],
    timeline: [
      { phase: "Registration", date: "2026-03-01 to 2026-04-25" },
      { phase: "Hackathon Event", date: "2026-05-01 to 2026-05-03" },
      { phase: "Submission Deadline", date: "2026-05-03 23:59" },
      { phase: "Winner Announcement", date: "2026-05-10" }
    ],
    contact: "ai-challenge@hackathon.com",
    maxTeams: 50
  },
  {
    id: 2,
    name: "Web Dev Battle",
    status: "in_progress",
    date: "2026-04-10",
    participants: 67,
    prize: "$15,000",
    theme: "Modern Web Applications",
    deadline: "2026-04-08",
    description: "Create cutting-edge web applications using the latest technologies. Focus on user experience, performance, and innovative features.",
    rules: [
      "Teams of 3-5 developers",
      "Must use modern web technologies",
      "Applications must be responsive",
      "No external API restrictions"
    ],
    requirements: [
      "Fully functional web application",
      "GitHub repository with documentation",
      "Live demo deployment",
      "Technical presentation"
    ],
    judgingCriteria: [
      "User Experience & Design (25%)",
      "Technical Innovation (30%)",
      "Code Quality (20%)",
      "Business Viability (15%)",
      "Presentation (10%)"
    ],
    timeline: [
      { phase: "Registration Open", date: "2026-03-15 to 2026-04-08" },
      { phase: "Hacking Period", date: "2026-04-10 to 2026-04-12" },
      { phase: "Final Submissions", date: "2026-04-12 18:00" },
      { phase: "Judging & Awards", date: "2026-04-15" }
    ],
    contact: "web-battle@hackathon.com",
    maxTeams: 75
  },
  {
    id: 3,
    name: "Mobile Hackfest",
    status: "finished",
    date: "2026-02-20",
    participants: 52,
    prize: "$8,000",
    theme: "Mobile Innovation",
    winner: "Code Masters",
    description: "Develop innovative mobile applications that solve real problems. Focus on user-centric design and cutting-edge mobile technologies.",
    rules: [
      "Cross-platform or native mobile apps",
      "Must work on at least 2 platforms",
      "Original concepts only",
      "48-hour development time"
    ],
    requirements: [
      "Working mobile application",
      "App store ready builds",
      "Source code and documentation",
      "Demo presentation"
    ],
    judgingCriteria: [
      "Innovation (25%)",
      "User Experience (25%)",
      "Technical Excellence (25%)",
      "Market Potential (15%)",
      "Presentation (10%)"
    ],
    timeline: [
      { phase: "Registration", date: "2026-01-15 to 2026-02-15" },
      { phase: "Hackathon", date: "2026-02-20 to 2026-02-22" },
      { phase: "Winners Announced", date: "2026-02-25" }
    ],
    contact: "mobile-fest@hackathon.com",
    maxTeams: 60
  },
];

export const leaderboard = [
  { rank: 1, team: "Code Masters", points: 1250, change: "+50" },
  { rank: 2, team: "Dev Dynamos", points: 1180, change: "+25" },
  { rank: 3, team: "Web Warriors", points: 1050, change: "-10" },
  { rank: 4, team: "AI Pioneers", points: 980, change: "+15" },
  { rank: 5, team: "Bug Hunters", points: 890, change: "0" },
];

export const recentActivities = [
  {
    id: 1,
    type: "submission",
    team: "Code Masters",
    action: "Submitted project to AI Challenge 2026",
    time: "2 hours ago",
  },
  {
    id: 2,
    type: "join",
    team: "Bug Hunters",
    action: "Joined Web Dev Battle",
    time: "5 hours ago",
  },
  {
    id: 3,
    type: "achievement",
    team: "Web Warriors",
    action: "Earned UI/UX Excellence badge",
    time: "1 day ago",
  },
  {
    id: 4,
    type: "win",
    team: "Code Masters",
    action: "Won Mobile Hackfest 2026",
    time: "2 days ago",
  },
];

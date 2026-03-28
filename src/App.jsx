import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Team from "./pages/Team";
import CreateTeam from "./pages/CreateTeam";
import JoinTeam from "./pages/JoinTeam";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/team" element={<Team />} />
        <Route path="/create-team" element={<CreateTeam />} />
        <Route path="/join-team" element={<JoinTeam />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
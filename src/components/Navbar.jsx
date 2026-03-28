export default function Navbar() {
  return (
    <div className="h-14 bg-card border-b border-border flex items-center justify-between px-6">
      <h1 className="font-bold text-lg">Hackathon</h1>
      <button className="text-sm text-muted">Logout</button>
    </div>
  );
}
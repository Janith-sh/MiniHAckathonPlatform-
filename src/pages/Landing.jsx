import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function Landing() {
  return (
    <div className="min-h-screen w-full bg-bg text-text flex flex-col items-center justify-center">
      <div className="text-center max-w-2xl px-4">
        <h1 className="text-5xl font-bold text-text-h mb-6">
          Hackathon Platform
        </h1>
        <p className="text-lg text-muted mb-8">
          Welcome to the ultimate coding challenge! Join teams, compete in exciting hackathons,
          and showcase your skills. Whether you're a beginner or an expert, our platform provides
          the tools and community to turn your ideas into reality.
        </p>
        <div className="space-y-4">
          <p className="text-sm text-muted">
            Get started by logging in or creating a new account.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/login">
              <Button>
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button type="secondary">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
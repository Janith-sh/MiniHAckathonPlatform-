import Input from "../components/Input";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-bg text-text flex flex-col">
      <div className="flex flex-1 items-center justify-center w-full">
        <div className="bg-card p-6 rounded-xl w-96 border border-border">
          <h2 className="text-2xl mb-4 font-semibold">Login</h2>

          <div className="space-y-3">
            <Input placeholder="Email" />
            <Input placeholder="Password" type="password" />
          </div>

          <div className="mt-4">
            <Button onClick={() => navigate("/dashboard")}>
              Login
            </Button>
          </div>

          <p className="mt-3 text-sm text-muted">
            Don’t have an account?{" "}
            <Link to="/register" className="text-primary">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
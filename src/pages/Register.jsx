import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="h-screen flex items-center justify-center bg-bg text-text">
      <div className="bg-card p-6 rounded-xl w-96 border border-border">
        <h2 className="text-2xl mb-4 font-semibold">Create Account</h2>

        <div className="space-y-3">
          <Input placeholder="Email" />
          <Input placeholder="Password" type="password" />
          <Input placeholder="Confirm Password" type="password" />
        </div>

        <div className="mt-4">
          <Button>Register</Button>
        </div>

        <p className="mt-3 text-sm text-muted">
          Already have an account?{" "}
          <Link to="/" className="text-primary">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
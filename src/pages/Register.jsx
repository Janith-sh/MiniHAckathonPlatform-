import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { Mail, Lock } from "lucide-react";

export default function Register() {
  return (
    <div className="min-h-screen w-full bg-bg text-text flex flex-col">
      <div className="flex flex-1 items-center justify-center w-full">
        <div className="bg-card p-5 rounded-xl border border-border hover:border-primary transition w-96">
          <h2 className="text-2xl mb-4 font-semibold">Create Account</h2>

          <div className="space-y-3">
            <Input placeholder="Email" icon={<Mail size={16} />} />
            <Input placeholder="Password" type="password" icon={<Lock size={16} />} />
            <Input placeholder="Confirm Password" type="password" icon={<Lock size={16} />} />
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
    </div>
  );
}
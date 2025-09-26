import Link from "next/link";

import { Checkbox } from "@/components/ui/checkbox";

import { LoginForm } from "./LoginForm";
import { Terms } from "../components/Terms";

export default async function LoginPage() {
  return (
    <div>
      <p className="text-3xl font-bold text-left mb-7">Sign In</p>

      <LoginForm />
      <div className="mt-5 text-center">
        <Link href="/" className="hover:underline hover:opacity-70">
        Forgot Password?
        </Link>
      </div>

      <div className="flex items-center space-x-2 mt-4">
        <Checkbox id="terms" className="border-white" />
        <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Remember Me
        </label>
      </div>

      <div className="mt-4 flex gap-1">
        <p className="text-white opacity-70">Dont have an account?</p>
        <Link href="/register" className="opacity-1 text-white">
          Sign Up
        </Link>
      </div>

      <Terms />
    </div>
  );
}
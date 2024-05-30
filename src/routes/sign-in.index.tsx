import { Link, createFileRoute } from "@tanstack/react-router";
import LoginForm from "../components/auth/LoginForm";

export const Route = createFileRoute("/sign-in/")({
  component: LoginPage,
});

export function LoginPage() {
  return (
    <div>
      <h1>Sign in</h1>
      <Link to="/sign-up">Need an account?</Link>
      <LoginForm />
    </div>
  );
}

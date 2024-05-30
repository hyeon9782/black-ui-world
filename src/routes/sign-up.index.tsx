import { Link, createFileRoute } from "@tanstack/react-router";
import SignUpForm from "../components/auth/SignUpForm";

export const Route = createFileRoute("/sign-up/")({
  component: SignUpPa,
});

function SignUpPa() {
  return (
    <div>
      <h1>Sign up</h1>
      <Link to="/sign-in">Have an account?</Link>
      <SignUpForm />
    </div>
  );
}

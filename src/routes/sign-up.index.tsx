import { Link, createFileRoute } from "@tanstack/react-router";
import SignUpForm from "../components/auth/SignUpForm";

export const Route = createFileRoute("/sign-up/")({
  component: SignUpPage,
});

function SignUpPage() {
  return (
    <div>
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <h1>Sign up</h1>
        <Link to="/sign-in">Have an account?</Link>
      </div>
      <SignUpForm />
    </div>
  );
}

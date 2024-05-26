import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sigin-in/")({
  component: LoginPage,
});

export function LoginPage() {
  return <>Login Page</>;
}

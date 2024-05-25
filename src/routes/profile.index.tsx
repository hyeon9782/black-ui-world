import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/profile/")({
  component: ProfilePage,
});

export function ProfilePage() {
  return <></>;
}

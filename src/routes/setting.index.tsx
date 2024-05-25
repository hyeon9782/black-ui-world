import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/setting/")({
  component: SettingPage,
});

export function SettingPage() {
  return <></>;
}

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sigin-up/")({
  component: SiginUpPa,
});

function SiginUpPa() {
  return <div>Sigin Up</div>;
}

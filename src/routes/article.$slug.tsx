import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/article/$slug")({
  component: () => <div>Hello /article/!</div>,
});

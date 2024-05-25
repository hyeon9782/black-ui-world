import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/article/$slug")({
  component: () => ArticlePage,
});

export function ArticlePage() {
  return <></>;
}

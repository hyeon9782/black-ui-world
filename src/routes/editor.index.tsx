import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/editor/")({
  component: EditorPage,
});

export function EditorPage() {
  return (
    <>
      <div></div>
      <div></div>
    </>
  );
}

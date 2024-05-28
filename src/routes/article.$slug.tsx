import { createFileRoute } from "@tanstack/react-router";
import UserBox from "../components/user/UserBox";
import { Button } from "@black-ui/react";

export const Route = createFileRoute("/article/$slug")({
  component: () => ArticlePage,
});

export function ArticlePage() {
  return (
    <>
      <div>
        <h1></h1>
        <div>
          <UserBox />
          <div>
            <Button>Follow Maksim Estenban</Button>
            <Button>Favorite Article</Button>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
}

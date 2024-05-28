import { Avatar } from "@black-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import ArticleTab from "../components/article/ArticleTab";
import ArticleList from "../components/article/ArticleList";

export const Route = createFileRoute("/profile/")({
  component: ProfilePage,
});

export function ProfilePage() {
  return (
    <>
      <div>
        <div>
          <Avatar src="" size="2xl" />
          <span>Maksim Esteban</span>
        </div>
        <div></div>
      </div>
      <ArticleTab />
      <ArticleList />
    </>
  );
}

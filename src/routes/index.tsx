import { createFileRoute } from "@tanstack/react-router";
import ArticleList from "../components/article/ArticleList";
import ArticleTab from "../components/article/ArticleTab";
import ArticleListSkeleton from "../components/skeleton/ArticleListSkeleton";
import { Suspense } from "react";

export const Route = createFileRoute("/")({
  component: HomePage,
});

export function HomePage() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0 10px",
          width: "100%",
        }}
      >
        <ArticleTab />
        <Suspense fallback={<ArticleListSkeleton />}>
          <ArticleList />
        </Suspense>
      </div>
    </>
  );
}

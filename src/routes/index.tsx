import { createFileRoute } from "@tanstack/react-router";
import ArticlePreview from "../components/article/ArticlePreview";
import { useEffect, useState } from "react";
import { Article } from "../types/articles";
import { getArticles } from "../apis/articles";
import ArticleList from "../components/article/ArticleList";
import ArticleTab from "../components/article/ArticleTab";

export const Route = createFileRoute("/")({
  component: HomePage,
});

export function HomePage() {
  const [articles, setArticles] = useState<Article[]>([]);

  const fetchArticles = async () => {
    const response = await getArticles();
    console.log(response.data.articles);
    setArticles([...response.data.articles]);
  };

  useEffect(() => {
    fetchArticles();
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0 10px",
        }}
      >
        <ArticleTab />
        <ArticleList />
      </div>
    </>
  );
}

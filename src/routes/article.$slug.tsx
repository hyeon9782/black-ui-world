import { createFileRoute, useParams } from "@tanstack/react-router";
import UserBox from "../components/user/UserBox";
import { Button } from "@black-ui/react";
import { getArticle } from "../apis/articles";
import { useEffect, useState } from "react";
import { Article } from "../types/articles";

export const Route = createFileRoute("/article/$slug")({
  component: ArticlePage,
});

export function ArticlePage() {
  const { slug } = useParams({ from: "/article/$slug" });
  const [article, setArticle] = useState<Article>();

  const fetchArticle = async () => {
    const response = await getArticle(slug);
    console.log(response);
    setArticle({
      ...response.data.article,
    });
  };

  useEffect(() => {
    fetchArticle();
  }, []);
  return (
    <>
      {article?.slug && (
        <>
          <div>
            <h1>{article.title}</h1>
            <div>
              <UserBox profile={article.author} createdAt={article.createdAt} />
              <div>
                <Button>Follow Maksim Estenban</Button>
                <Button>Favorite Article</Button>
              </div>
            </div>
          </div>
          <div>{article.body}</div>
        </>
      )}
    </>
  );
}

import { useEffect, useState } from "react";
import { Article } from "../../types/articles";
import { getArticles } from "../../apis/articles";
import ArticlePreview from "./ArticlePreview";

const ArticleList = () => {
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
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {articles.map((article) => (
        <ArticlePreview key={article.slug} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;

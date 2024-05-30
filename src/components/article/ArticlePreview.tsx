import { Button, Card, Tag } from "@black-ui/react";
import { Article } from "../../types/articles";
import UserBox from "../user/UserBox";
import { useNavigate } from "@tanstack/react-router";
type Props = {
  article: Article;
};
const ArticlePreview = ({ article }: Props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate({ to: `/article/${article.slug}` });
  };
  return (
    <Card style={{ boxSizing: "border-box" }} onClick={handleClick}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <UserBox profile={article.author} createdAt={article.createdAt} />
        <div>
          <Button>{article.favoritesCount}</Button>
        </div>
      </div>
      <div
        style={{
          fontWeight: "bold",
          fontSize: "24px",
          height: "30px",
        }}
      >
        {article.title}
      </div>
      <div
        style={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          width: "100%",
          height: "50px",
        }}
      >
        {article.description}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <span>Read more...</span>
        <div style={{ display: "flex", gap: 10 }}>
          {article.tagList.map((tag) => (
            <Tag>{tag}</Tag>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ArticlePreview;

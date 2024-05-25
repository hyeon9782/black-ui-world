import { Card, Tag } from "@black-ui/react";
import { Article } from "../../types/articles";
type Props = {
  article: Article;
};
const ArticlePreview = ({ article }: Props) => {
  return (
    <Card>
      <div></div>
      <div
        style={{
          fontWeight: "bold",
          fontSize: "24px",
        }}
      >
        {article.title}
      </div>
      <div
        style={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          width: "300px",
          height: "200px",
        }}
      >
        {article.body}
      </div>
      <div style={{ display: "flex", gap: 10 }}>
        {article.tagList.map((tag) => (
          <Tag>{tag}</Tag>
        ))}
      </div>
    </Card>
  );
};

export default ArticlePreview;

import { useEffect, useState } from "react";
import { getTags } from "../../apis/tag";
import { Tag } from "@black-ui/react";

const SideBar = () => {
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    async function fetchTags() {
      const response = await getTags();
      console.log(response);

      setTags([...response.data.tags]);
    }

    fetchTags();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "200px",
        height: "300px",
      }}
    >
      {tags.map((tag, index) => (
        <Tag key={index}>{tag}</Tag>
      ))}
    </div>
  );
};

export default SideBar;

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
        position: "fixed",
        top: "100px",
        right: "10px",
        width: "250px",
        height: "200px",
        backgroundColor: "lightgray",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <p style={{ fontWeight: "bold" }}>Popula Tags</p>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {tags.map((tag, index) => (
          <Tag key={index} size="sm">
            {tag}
          </Tag>
        ))}
      </div>
    </div>
  );
};

export default SideBar;

import { Skeleton } from "@black-ui/react";

const ArticleListSkeleton = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {Array.from({ length: 8 }).map((_, index) => (
        <Skeleton
          key={index}
          width="100%"
          height=""
          background="lightgray"
          radius="5px"
        >
          <div
            style={{
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ display: "flex", gap: 10 }}>
                <Skeleton
                  width="30px"
                  height="30px"
                  background="gray"
                  radius="50%"
                ></Skeleton>
                <Skeleton
                  width="100px"
                  height="30px"
                  background="gray"
                  radius="5px"
                ></Skeleton>
              </div>
              <Skeleton
                width="70px"
                height="30px"
                background="gray"
                radius="5px"
              ></Skeleton>
            </div>
            <Skeleton
              width="100%"
              height="30px"
              background="gray"
              radius="5px"
            ></Skeleton>
            <Skeleton
              width="100%"
              height="70px"
              background="gray"
              radius="5px"
            ></Skeleton>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Skeleton
                width="100px"
                height="30px"
                background="gray"
                radius="5px"
              ></Skeleton>
              <div style={{ display: "flex", gap: 10 }}>
                <Skeleton
                  width="50px"
                  height="30px"
                  background="gray"
                  radius="5px"
                ></Skeleton>
                <Skeleton
                  width="50px"
                  height="30px"
                  background="gray"
                  radius="5px"
                ></Skeleton>
                <Skeleton
                  width="50px"
                  height="30px"
                  background="gray"
                  radius="5px"
                ></Skeleton>
              </div>
            </div>
          </div>
        </Skeleton>
      ))}
    </div>
  );
};

export default ArticleListSkeleton;

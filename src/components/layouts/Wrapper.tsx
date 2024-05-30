import { PropsWithChildren } from "react";

const Wrapper = ({ children }: PropsWithChildren) => {
  return (
    <main
      style={{
        margin: "0 auto",
        width: "1200px",
        height: "calc(100vh - 60px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </main>
  );
};

export default Wrapper;

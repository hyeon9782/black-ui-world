import { Outlet } from "@tanstack/react-router";
import Header from "./Header";
import "./index.css";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;

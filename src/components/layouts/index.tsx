import { Outlet } from "@tanstack/react-router";
import Header from "./Header";
import "./index.css";
import Footer from "./Footer";
import SideBar from "./SideBar";

const Layout = () => {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <main>
          <Outlet />
        </main>
        <SideBar></SideBar>
      </div>
      <Footer />
    </>
  );
};

export default Layout;

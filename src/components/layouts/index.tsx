import { Outlet } from "@tanstack/react-router";
import Header from "./Header";
import "./index.css";
import Footer from "./Footer";
import SideBar from "./SideBar";
import Wrapper from "./Wrapper";

const Layout = () => {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <Wrapper>
          <Outlet />
        </Wrapper>
        <SideBar></SideBar>
      </div>
      <Footer />
    </>
  );
};

export default Layout;

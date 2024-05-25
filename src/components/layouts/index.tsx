import { Outlet } from "@tanstack/react-router";
import Header from "./Header";
import "./index.css";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;

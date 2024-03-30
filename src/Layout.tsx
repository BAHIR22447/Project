import { Outlet } from "react-router-dom";
import {Navbar} from "./components/Navbar";
import "./layout.css";
import Footer from "./components/footer";

const Layout = () => {
  return (
    <div className="layout_body">
      <div className="navbar">
        <Navbar />
      </div>
      <Outlet />
      <div className="footer_container">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

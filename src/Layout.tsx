import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./layout.css";
const Layout = () => {
  return (
    <div className="layout_body">
      <div className="navbar">
        <Navbar />
      </div>
      
      <Outlet />
    </div>
  );
};

export default Layout;

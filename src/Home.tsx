import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Section_1 from "./components/Section_1";
import Section_2 from "./components/Section_2";
import Section_3 from "./components/Section_3";
import Section_4 from "./components/section_4";
import Section_5 from "./components/section_5";
import Section_6 from "./components/section_6";
import Footer from './components/footer'
// import Sidebar from "./components/sideBar";

function Home() {
  return (
    <>
      <div className="body">
        <div className="main">

          <div className="section_1">
            <Section_1 />
          </div>
          <div className="section_2">
            <Section_2 />
          </div>
          <div className="section_3">
            <Section_3 />
          </div>
        </div>
      </div>
      <div className="main_2">
        <Section_4 />
      </div>
      <div className="main_3">
        <div className="section_5_container">
          <Section_5 />
        </div>
        <div className="section_6_container">
          <Section_6 />
        </div>
      </div>
      <div className="footer_container">
        <Footer />
      </div>
      <Outlet />
    </>
  );
}

export default Home;

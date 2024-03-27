import "./navbar.css";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [linkList, setLinkList] = useState([
    {
      linkTo: "/",
      title: "Home",
      isActive: true,
      isArchived: false,
      isDeferint: false,
    },
    {
      linkTo: "/about",
      title: "About us",
      isActive: false,
      isArchived: false,
      isDeferint: false,
    },
    {
      linkTo: "/portfolio",
      title: "Portfolio",
      isActive: false,
      isArchived: false,
      isDeferint: false,
    },
    {
      linkTo: "/news",
      title: "News",
      isActive: false,
      isArchived: false,
      isDeferint: false,
    },
    {
      linkTo: "/contact",
      title: "Contact us",
      isActive: false,
      isArchived: false,
      isDeferint: true,
    },
  ]);

  let className = "links"

  const handleClick = (index: number) => {
    const updatedLinks = linkList.map((link, i) => ({
      ...link,
      isActive: i === index
    }));
    
    setLinkList(updatedLinks);
  };

  return (
    <>
      <nav className="nav_bar">
        <div className="logo">
          <img className="logo" src={Logo} alt="" />
        </div>

        <ul className="nav_links">
          {linkList.map((item, index) => {
            if (!item.isArchived && !item.isDeferint) {
              return (
                <li className="nav-item" key={index}>
                  <Link
                    className={className}
                    to={item.linkTo}
                    onClick={() => handleClick(index)}
                  >
                    {item.title}
                    <div
                      style={
                        item.isActive
                          ? { visibility: "visible" }
                          : { visibility: "hidden" }
                      }
                      className="reqtangle"
                    >
                      <div className="bigger"></div>
                      <div className="smaller"></div>
                    </div>
                  </Link>
                </li>
              );
            } else if (item.isDeferint) {
              return (
                <li className="nav-item" key={index}>
                  <Link
                    className={
                      item.isActive ? "contact_us active" : "contact_us"
                    }
                    to={item.linkTo}
                    onClick={ () => handleClick(index) }
                  >
                    {item.title}
                  </Link>
                </li>
              );
            }
            return null;
          })}
        </ul>
      </nav>
      <nav className="mobile_nav_bar">
        <div className="logo">
          <img className="logo" src={Logo} alt="" />
        </div>
        <ul className="nav_links">
          {linkList.map((item, index) => {
            if (!item.isArchived &&!item.isDeferint) {
              return (
                <li className="nav-item" key={index}>
                  <Link
                    className={item.isActive? "links active" : "links"}
                    to={item.linkTo}
                    onClick={() => handleClick(index)}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            } else if (item.isDeferint) {
              return (
                <li className="nav-item" key={index}>
                  <Link
                    className={
                      item.isActive? "contact_us active" : "contact_us"
                    }
                    to={item.linkTo}
                    onClick={() => handleClick(index)}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            }
            return null;
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

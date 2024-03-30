import "./footer.css";
import Logo from "../assets/Logo.png";
import { FaFacebookF } from "react-icons/fa";
import { RxInstagramLogo } from "react-icons/rx";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <div className="footer">
      <div className="container_footer">
        <div className="div_1">
          <img className="Logo_image" src={Logo} alt="" />
          <p id="p_1_footer">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p>@Logo</p>
        </div>
        <div className="div_2">
          <h4>About us</h4>
          <Link className="footer_links_hover" to={"#"}>
            Zeux
          </Link>
          <Link className="footer_links_hover" to={"#"}>
            Portfolio
          </Link>
          <Link className="footer_links_hover" to={"#"}>
            Careers
          </Link>
          <Link className="footer_links_hover" to={"#"}>
            Contact us
          </Link>
        </div>
        <div className="div_3">
          <h4>Contact us</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
          <p>+908 89097 890</p>
        </div>
        <div className="div_4">
          <Link
            className="facebook"
            to="https://www.facebook.com"
            target="_blank"
          >
            <FaFacebookF size={15} />
          </Link>
          <Link className="instagram" to="https://www.instagram.com" target="_blank">
            <RxInstagramLogo size={15} />
          </Link>
          <Link className="twitter" to="https://www.twitter.com" target="_blank">
            <FaTwitter size={15} />
          </Link>
          <Link className="linked_in" to="https://www.linkedin.com" target="_blank">
            <FaLinkedinIn enableBackground={"white"} size={15} />
          </Link>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright ® 2021 Lorem All rights Rcerved</p>
      </div>
    </div>
  );
};

export default footer;

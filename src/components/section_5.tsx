import "../components/section_5.css";
import image_1 from "../assets/section_5_images_1.png";
import image_2 from "../assets/section_5_image_2.png";
import image_3 from "../assets/section_5_image_3.png";
import image_4 from "../assets/section_5_images_4.png";
import image_5 from "../assets/section_5_image_5.png";
import image_6 from "../assets/section_5_image_6.png";
import Button from "./Button";
import './button.css'

const Section_5 = () => {
  return (
    <div className="section_5">
      <div className="container_section_5">
        <div className="upper_div_section_5_text">
          <h1>Our Recent Projects</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, sint. Lorem.
          </p>
        </div>
        <div className="lower_div_section_5_images">
          <div className="image_container_1">
            <img className="section_5_images_1" src={image_4} alt="" />
          </div>
          <div className="image_container_2">
            <img className="section_5_images_2" src={image_6} alt="" />
          </div>
          <div className="image_container_3">
            <img className="section_5_images_3" src={image_1} alt="" />
          </div>
          <div className="image_container_4">
            <img className="section_5_images_4" src={image_2} alt="" />
          </div>
          <div className="image_container_5">
            <img className="section_5_images_5" src={image_3} alt="" />
          </div>
          <div className="image_container_6">
            <img className="section_5_images_6" src={image_5} alt="" />
          </div>
        </div>

        <div className="button_see_all_section_5">
          <Button
            className="button_2 upper_div_button"
            backgroundColor="rgb(37, 30, 30)"
            color="white"
            borderRadius="8px"
          >
            SEE ALL
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Section_5;

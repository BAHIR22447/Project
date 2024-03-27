import "./section_4.css";
import { useState } from "react";
import { CiMobile3 } from "react-icons/ci";
import { BsPcDisplay } from "react-icons/bs";
import { SiPlaystation4 } from "react-icons/si";
import { GiVrHeadset } from "react-icons/gi";
import { MdDesignServices } from "react-icons/md";
import { TbHexagon3D } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa6";

const Section_4 = () => {
  const [section4List, setSection_4_list] = useState([
    {
      title: "Moblile Game Development",
      buttonIcon: <CiMobile3 className="icons_section_4" size={30} color="#FA9021" />,
      isPhone: false,
    },
    {
      title: "PC Game Development",
      buttonIcon: <BsPcDisplay  className="icons_section_4" size={30} color="#FA9021" />,
      isPhone: false,
    },
    {
      title: "PS4 Game Development",
      buttonIcon: (
        <SiPlaystation4 className="icons_section_4" size={30} color="#FA9021" />
      ),
      isPhone: false,
    },
    {
      title: "AR/VR Solution",
      buttonIcon: <GiVrHeadset className="icons_section_4" size={30} color="#FA9021" />,
      isPhone: false,
    },
    {
      title: "AR/VR Design",
      buttonIcon: <MdDesignServices className="icons_section_4" size={30} color="#FA9021" />,
      isPhone: false,
    },
    {
      title: "3D Modelings",
      buttonIcon: <TbHexagon3D className="icons_section_4" size={30} color="#FA9021" />,
      isPhone: false,
    },
  ]);

  return (
    <div className="section_4">
      <div className="back_drop_filter">
        <div className="section_4_container">
          <div className="upper_div_section_4">
            <h3>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima,
              consectetur in.
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              exercitationem voluptatum explicabo totam omnis odio aperiam vitae
              accusamus?
            </p>
          </div>
          <div className="lower_div_section_4">
            {section4List.map((item, index) => {
              return (
                <div key={index} className="lower_div_section_4_item">
                  <a href="#" className="button_links">
                    <div className="icon_container_section_4">
                      <div className="lower_div_section_4_item_icon">
                        {item.buttonIcon}
                      </div>
                    </div>
                    <div className="lower_div_section_4_item_title">
                      {item.title}
                    </div>
                    <div className="lower_div_section_4_item_button">
                      <FaArrowRight color="#FA9021" />
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_4;

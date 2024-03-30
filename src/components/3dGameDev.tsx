import React, { useState } from "react";
import Button from "./Button";
import "./3dGameDev.css";
import unity from "../assets/unity 1.png";
import unreal from "../assets/unreal 1.png";
import cry from "../assets/cry 1.png";

const Section_1: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <div className="window_pannal">
          <div className="pannal_details_div">
            <div className="upper_pannal_div_details">
              <h1>Details</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati voluptas itaque vero, magnam inventore qui ratione
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,
                officiis? Veniam deleniti similique consequuntur, alias animi
                harum dolore nobis assumenda perferendis. Quas officiis ut iure
                velit tenetur deserunt sint provident. Eaque perferendis fuga
                commodi eius rerum doloremque voluptatem modi fugit aspernatur
                quas nemo voluptatum ab tenetur quia consectetur fugiat
                recusandae, voluptates nihil eveniet sed laudantium in id
                reprehenderit repellendus. Aliquid.
                <img id="image_one_pannal" src={unity} alt="" />
                cum deserunt rem id. Praesentium tempora recusandae laboriosam
                nam laborum vel harum. Placeat, natus! Laborum, quo. Libero,
                aliquid non modi necessitatibus deleniti neque aliquam atque
                nobis? Voluptatem, corrupti quo. Nemo molestias velit dolorem
                qui odio repudiandae culpa, consequuntur excepturi dolorum quod
                mollitia veritatis ex? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Eius ducimus quos ad, quia alias Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Itaque rerum neque
                <img id="image_two_pannal" src={cry} alt="" />
                nihil temporibus expedita odit natus, in voluptatum repellat
                incidunt quas quia numquam omnis soluta, odio doloribus porro,
                provident ipsam. Consequuntur et enim asperiores vero natus
                illum earum recusandae nostrum ad omnis dolor illo alias nemo
                repellat, veniam eos quidem ducimus commodi aut. At, molestias.
                Consequuntur accusamus eaque non dolore! at maxime saepe nihil,
                adipisci quasi molestias mollitia voluptatibus ab a nisi iusto
                consectetur tenetur unde?2 Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Voluptas esse repellendus tenetur,
                deleniti soluta asperiores quas, iste, cupiditate sint iure
                deserunt obcaecati dolorem recusandae
                <img id="image_three_pannal" src={unreal} alt="" />
                commodi officia doloremque nam non amet! Quia, laborum.
                Reprehenderit magni aliquid delectus quo voluptatibus similique
                quis est dolores vero deleniti, officiis sapiente enim quidem.
                Dolore reiciendis quam optio assumenda iste impedit repudiandae!
                Nisi explicabo doloremque fugit. Sit officia autem repellat et
                laboriosam totam esse modi eum corporis. Quas consectetur,
                impedit numquam at molestiae voluptatem facilis sed quidem
                iusto. Id assumenda impedit ea tempore dolore, dolor aliquid.
              </p>
            </div>
            <div className="lower_button_pannal_close">
              <Button
                color="white"
                borderRadius="8px"
                backgroundColor="black"
                border="none"
                button="button_2"
                backgroundColorH="rgb(17, 16, 16)"
                colorH="whtie"
                transition="background-color 0.3s ease"
                onClick={togglePanel}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      <div onClick={isOpen ? togglePanel : undefined} className="container">
        <div className="left_div">
          <div className="text_1">
            <h4>
              <strong>3D game Dev</strong>
            </h4>
          </div>
          <div className="text_2">
            <h1>Work that we produce for our clients</h1>
          </div>
          <div className="text_3">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aut
              totam voluptatibus cupiditate ullam doloribus necessitatibus
            </p>
          </div>
          <div className="button">
            <Button
              color="white"
              borderRadius="30px"
              backgroundColor=" rgb(250,131,5)"
              border="none"
              button="button_1"
              backgroundColorH="rgb(95, 49, 0)"
              colorH="whtie"
              transition="background-color 0.3s ease"
              onClick={togglePanel}
            >
              Get more details
            </Button>
          </div>
        </div>

        <div className="right_div">
          <div className="upper_div">
            <img className="section_1_images" src={cry} alt="" />
            <img className="section_1_images" src={unreal} alt="" />
          </div>
          <div className="lower_div">
            <img className="section_1_images" src={unity} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section_1;

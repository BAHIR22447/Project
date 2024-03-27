import spider_man from "../assets/Spider_Man.png";
import "./section_3.css";

const Section_3 = () => {
  return (
    <div className="section_3">
      <div className="container_1">
        <div className="upper_div_section_3">
          <div className="upper_div_text_left">
            <h2>Lorem ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque cumque numquam, debitis nam odio molestias! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Ducimus, cumque.
            </p>
          </div>
        </div>
        <div className="image_container">
          <img className="image" src={spider_man} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section_3;

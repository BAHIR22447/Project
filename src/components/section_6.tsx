import "./section_6.css";
import Button from "./Button";

const section_6 = () => {
  return (
    <div className="section_6">
      <div className="container_section_6">
        <div className="upper_div_section_6_text">
          <h2>Lorem, ipsum.</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae fuga ab rem consectetur hic. At!
          </p>
        </div>
        <div className="lower_div_section_6">
          <div className="lower_div_section_6_texts">
            <div className="lower_div_section_6_left">
              <h2>Stay in the loop</h2>
            </div>
            <div className="lower_div_section_6_left_p">
              <p>
                Subscribe to receive the late news and updates about TDA. We
                promise not to spam you!
              </p>
            </div>
          </div>
          <div className="lower_div_section_6_right">
            <input
              className="input_section_6"
              type="email"
              placeholder="Enter email address"
            />
            <Button
              className="button_3"
              color="white"
              borderRadius="8px"
              backgroundColor="#DC7000"
              backgroundColorH="rgb(95, 49, 0)"
              colorH="whtie"
              transition="background-color 0.3s ease"
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};



export default section_6;

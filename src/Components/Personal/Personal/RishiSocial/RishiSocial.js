import React from "react";
import "./RishiSocial.css";
import social1 from "../../../../assets/rishi-insta.png";
import social2 from "../../../../assets/rishi-facebook.png";
import social3 from "../../../../assets/rishi-twitter.png";
import social4 from "../../../../assets/rishi-linkedin.png";
import social5 from "../../../../assets/rishi-tube.png";
import { Link } from "react-router-dom";

const RishiSocial = () => {
  return (
    <div className="pb-20 social-bg">
      <div className="hero-3 bg-[#20284E] text-white">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-xl font-bold">Find rishi on</h1>
            <div className="flex mx-auto gap-10 lg:flex-row flex-col mt-9 pb-12">
              <a
                href="https://www.instagram.com/x.rishi/?igshid=YmMyMTA2M2Y%3D&fbclid=IwAR0hHCrnwgAgLkIWdZjD3cJdNhqG-GVWARl9zeLIhSzKnYL3hG6kPwePlBk"
                target="blank"
              >
                <img src={social1} alt="" />
              </a>
              <a
                href="https://www.facebook.com/rishikesh.kumar.75054"
                target="blank"
              >
                <img src={social2} alt="" />
              </a>
              <a href="https://twitter.com/rishi_xpl" target="blank">
                <img src={social3} alt="" />
              </a>
              <a href="https://www.linkedin.com/in/xrishi/" target="blank">
                <img src={social4} alt="" />
              </a>
              <a href="https://youtube.com/@rishi9566" target="blank">
                <img src={social5} alt="" className="ml-5"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RishiSocial;

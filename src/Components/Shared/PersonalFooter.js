import React from "react";
import "./PersonalFooter.css";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import rishiSignature from "../../assets/rishi-signature.png";

const PersonalFooter = () => {
  return (
    <div className="bg-footer pb-10">
      <footer className="footer p-10 ">
        <div className="mx-auto lg:mx-0">
          <img src={rishiSignature} alt="" className="w-44 " />
        </div>

        <div className="mx-auto lg:mx-0">
          <Link to={"/myStory"} className="text-[#FBF8F0]">
            My Story
          </Link>
          <Link to={"/myProjects"} className="text-[#FBF8F0]">
            MyProjects
          </Link>
          <Link to={"/myBlogs"} className="text-[#FBF8F0]">
            MyBlogs
          </Link>
          <Link to={"/publicSpeaking"} className="text-[#FBF8F0]">
            Public Speaking
          </Link>
          <Link to={"/contact"} className="text-[#FBF8F0]">
            Contact Me
          </Link>
        </div>
        {/* <div>
          <Link to={"/blog"} className="text-[#FBF8F0]">Blog</Link>
          <Link className="text-[#FBF8F0]" to={"/about"}>
            About Us
          </Link>
        </div>
        <div>
          <a className="text-[#FBF8F0]">Support</a>
        </div> */}
      </footer>
      <div className="border-bottom"></div>

      <div className="flex justify-center">
        <div className="privacy p-4">
          <Link to={"/privacy"}>Privacy</Link>{" "}
          <span className="inline-block mr-10 ml-10 line">|</span>{" "}
          <Link to={"./terms"}>Terms</Link>
        </div>
      </div>

      <div className="social flex lg:justify-end justify-center lg:mr-12 mr-0 lg:mt-0 mt-4">
        <a href="#">
          <FaLinkedin className="mr-5"></FaLinkedin>
        </a>
        <a href="#">
          <FaInstagramSquare className="mr-5"></FaInstagramSquare>
        </a>
        <a href="#">
          <FaTwitter className="mr-5"></FaTwitter>
        </a>
        <a href="#">
          <FaFacebook className="mr-5"></FaFacebook>
        </a>
      </div>
    </div>
  );
};

export default PersonalFooter;

import React from "react";
import "./PersonalFooter.css";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
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
            My Projects
          </Link>
          <Link to={"/myBlogs"} className="text-[#FBF8F0]">
            My Blogs
          </Link>
        </div>

        <div className="mx-auto">
          <Link to={"/contact"} className="text-[#FBF8F0] ml-7">
            Products
          </Link>

          <a
            href="https://www.youtube.com/channel/UCXGr-W-Z9ubEZCy0abd2NQg"
            target="blank"
            className="text-[#FBF8F0] ml-7"
          >
            Latest Videos
          </a>

          <Link to={"/publicSpeaking"} className="text-[#FBF8F0] ml-7">
            Public Speaking
          </Link>
        </div>

        <div className="mx-auto">
          <Link to={"/contact"} className="text-[#FBF8F0]">
            Contact Me
          </Link>
          <Link to={"/media"} className="text-[#FBF8F0]">
            Media
          </Link>
        </div>

        <Link to={"/contact"} className="text-[#FBF8F0] mx-auto">
          XTRALIVING
        </Link>
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
        <a href="https://www.linkedin.com/in/xrishi/" target="blank">
          <FaLinkedin className="mr-5"></FaLinkedin>
        </a>
        <a
          href="https://www.instagram.com/x.rishi/?igshid=YmMyMTA2M2Y%3D&fbclid=IwAR0hHCrnwgAgLkIWdZjD3cJdNhqG-GVWARl9zeLIhSzKnYL3hG6kPwePlBk"
          target="blank"
        >
          <FaInstagramSquare className="mr-5"></FaInstagramSquare>
        </a>
        <a href="https://twitter.com/rishi_xpl" target="blank">
          <FaTwitter className="mr-5"></FaTwitter>
        </a>
        <a href="https://www.facebook.com/rishikesh.kumar.75054" target="blank">
          <FaFacebook className="mr-5"></FaFacebook>
        </a>
        <a href="https://youtube.com/@rishi9566" target="blank">
          <FaYoutube className="mr-5"></FaYoutube>
        </a>
      </div>
    </div>
  );
};

export default PersonalFooter;

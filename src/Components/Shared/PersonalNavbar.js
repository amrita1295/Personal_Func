import React, { useContext } from "react";
import { useState } from "react";

import { Link } from "react-router-dom";

import rishiSignature from "../../assets/rishi-nav.png";

const PersonalNavbar = () => {
  const menuItems = (
    <>
      <li className="mb-2 md:mb-0 md:pt-0 lg:mb-0 lg:pt-0 pt-2">
        <Link to="/">HOME</Link>
      </li>
      <li className="mb-2 md:mb-0 lg:mb-0">
        <Link to="/myStory">MyStory</Link>
      </li>
      <li className="mb-2 md:mb-0 lg:mb-0">
        <Link to="/myProjects">MyProjects </Link>
      </li>
      <li className="mb-2 md:mb-0 lg:mb-0">
        <Link to="/myBlogs">MyBlogs </Link>
      </li>
      <li className="mb-2 md:mb-0 lg:mb-0">
        <Link to="/contact">CONTACT </Link>
      </li>
    </>
  );
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 z-50">
      <div className="md:flex sm:gap-5 items-center justify-between bg-[#FBF8F0] lg:py-0 md:px-10 px-7">
        <Link to="/">
          <img src={rishiSignature} alt="" className="pt-5 w-[95px]" />
        </Link>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name="filter-outline"></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 gap-4 lg:gap-10 absolute md:static bg-[#FBF8F0] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-495px]"
          }`}
        >
          {menuItems}
        </ul>
      </div>
    </div>
  );
};

export default PersonalNavbar;

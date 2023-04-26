import React from "react";
import "./MyBlogs.css";
import myBlog1 from "../../../../assets/myBlog-1.png";
import myBlog2 from "../../../../assets/myBlog-2.png";
import myBlog3 from "../../../../assets/myBlog-3.png";
import { Link } from "react-router-dom";

const MyBlogs = () => {
  return (
    <div className="myBlogs-bg pt-12 pb-24">
      <h1 className="myBlogs-title text-center">My blogs</h1>

      <div className="flex justify-center mx-10 mt-16">
        <div className="flex lg:gap-28 gap-10 items-center flex-col lg:flex-row md:flex-row">
          <Link to={"/innovationEntrepreneurship"}>
            <div className="text-center">
              <img src={myBlog3} alt="" className="w-60 mx-auto" />
            </div>
          </Link>
          <Link to={"/gentleParenting"}>
            <div className="text-center">
              <img src={myBlog2} alt="" className="w-60 mx-auto" />
            </div>
          </Link>
          <Link to={'/functionalHealth'}>
          <div className="text-center">
            <img src={myBlog1} alt="" className="w-60 mx-auto" />
          </div></Link>
        </div>
      </div>
    </div>
  );
};

export default MyBlogs;

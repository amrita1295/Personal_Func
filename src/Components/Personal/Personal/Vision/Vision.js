import React from "react";
import "./Vision.css";
import videoIcon from "../../../../assets/Video Icon.png";
import video from "../../../../assets/rishi-video.mp4";
import video1 from "../../../../assets/Let's make healthy happen.mp4";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import thumb from "../../../../assets/thumb.png";
import { Link } from "react-router-dom";
const Vision = () => {
  return (
    <div className="vision-bg">
      <h1 className="text-center vision-title">Our Mission</h1>

      <Video className="mx-auto mt-20 video" poster = {thumb}>
        <source className="rounded-3xl" src={video1} type="video/mp4" />
      </Video>
{/* 
      <div className="main mt-10">
        <div className="flex justify-center  container-1">
          <Link
            to="https://www.youtube.com/watch?v=xZpANTcp51Y"
            alt=""
            target="_blank"
          >
              <img src={thumb} alt="" className="w-full"/>
              <div class="centered">
                <img src={videoIcon} alt="" />
            </div>
          </Link>
        </div>
      </div> */}
    </div>
  );
};

export default Vision;

import React from "react";
import "./Vision.css";

import video from "../../../../assets/rishi-video.mp4";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import thumb from '../../../../assets/thumb.png'
const Vision = () => {
  return (
    <div className="vision-bg">
      <h1 className="text-center vision-title">Our Mission</h1>

      <Video className="mx-auto mt-20 video" poster = {thumb}>
        <source className="rounded-3xl" src={video} type="video/mp4" />
      </Video>

    </div>
  );
};

export default Vision;

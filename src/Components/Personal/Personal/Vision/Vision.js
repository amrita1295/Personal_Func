import React from "react";
import "./Vision.css";

import video from "../../../../assets/customer-feedback.mp4";
import { DefaultPlayer } from "react-html5video";

const Vision = () => {
  return (
    <div>
      <h1 className="text-center vision-title">Our Mission</h1>

      <DefaultPlayer className="mx-auto mt-20 lg:w-96 w-80">
        <source className="rounded-3xl" src={video} type="video/mp4" />
      </DefaultPlayer>
    </div>
  );
};

export default Vision;

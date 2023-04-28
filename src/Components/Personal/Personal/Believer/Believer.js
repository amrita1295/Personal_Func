import React from "react";
import "./Believer.css";
import believer1 from "../../../../assets/believer-1.png";
import believer2 from "../../../../assets/believer-2.png";
import believer3 from "../../../../assets/believer-3.png";
import arrow from "../../../../assets/Arrow.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Believer = () => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };

  return (
    <div className="bg-believer pb-16 pt-12">
      <h1 className="text-center believer-title pb-6">Early believers</h1>


        <div className="text-white pb-20 m-2 mt-8">
          <Slider {...settings}>
            <div>
              <img src={believer1} alt="" className="img"/>
            </div>
            <div>
              <img src={believer2} alt="" className="img"/>
            </div>
            <div>
              <img src={believer3} alt="" className="img"/>
            </div>
            <div>
              <img src={believer1} alt="" className="img"/>
            </div>
            <div>
              <img src={believer2} alt="" className="img"/>
            </div>
          </Slider>
        </div>


      <div className="flex justify-center mt-8">
        <img src={arrow} alt="" />
      </div>
    </div>
  );
};

export default Believer;

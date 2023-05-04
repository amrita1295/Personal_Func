import React from "react";
import "./Believer.css";
import believer1 from "../../../../assets/believer-1.png";
import believer2 from "../../../../assets/believer-2.png";
import believer3 from "../../../../assets/believer-3.png";
import believer4 from "../../../../assets/believer-4.png";
import believer5 from "../../../../assets/believer-5.png";
import believer6 from "../../../../assets/believer-6.png";
import believer7 from "../../../../assets/believer-7.png";
import believer8 from "../../../../assets/believer-8.png";
import believer9 from "../../../../assets/believer-9.png";
import believer10 from "../../../../assets/believer-10.png";
import believer11 from "../../../../assets/believer-11.png";
import believer12 from "../../../../assets/believer-12.png";
import believer13 from "../../../../assets/believer-13.png";
import believer14 from "../../../../assets/believer-14.png";
import believer15 from "../../../../assets/believer-15.png";
import believer16 from "../../../../assets/believer-16.png";
import believer17 from "../../../../assets/believer-17.png";
import believer18 from "../../../../assets/believer-18.png";
import believer19 from "../../../../assets/believer-19.png";
import believer20 from "../../../../assets/believer-20.png";
import believer21 from "../../../../assets/believer-21.png";
import believer22 from "../../../../assets/believer-22.png";
import believer23 from "../../../../assets/believer-23.png";
import believer24 from "../../../../assets/believer-24.png";
import believer25 from "../../../../assets/believer-25.png";
import believer26 from "../../../../assets/believer-26.png";
import believer27 from "../../../../assets/believer-27.png";
import believer28 from "../../../../assets/believer-28.png";
import believer29 from "../../../../assets/believer-29.png";
import believer30 from "../../../../assets/believer-30.png";
import believer31 from "../../../../assets/believer-31.png";
import believer32 from "../../../../assets/believer-32.png";
import arrow from "../../../../assets/Arrow.png";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { PhotoProvider, PhotoView } from "react-photo-view";
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

      <div className="text-white pb-20 mx-20  mt-8">
        <Slider {...settings}>
          <PhotoProvider>
            <PhotoView src={believer1}>
              <img src={believer1} alt="" className="img cursor-pointer" />
            </PhotoView>
          </PhotoProvider>

          <PhotoProvider>
            <PhotoView src={believer2}>
              <img src={believer2} alt="" className="img cursor-pointer" />
            </PhotoView>
          </PhotoProvider>

          <PhotoProvider>
            <PhotoView src={believer3}>
              <img src={believer3} alt="" className="img cursor-pointer" />
            </PhotoView>
          </PhotoProvider>

          <PhotoProvider>
            <PhotoView src={believer4}>
              <img src={believer4} alt="" className="img cursor-pointer" />
            </PhotoView>
          </PhotoProvider>
          <PhotoProvider>
            <PhotoView src={believer5}>
              <img src={believer5} alt="" className="img cursor-pointer" />
            </PhotoView>
          </PhotoProvider>
          <PhotoProvider>
            <PhotoView src={believer6}>
              <img src={believer6} alt="" className="img cursor-pointer" />
            </PhotoView>
          </PhotoProvider>
          <PhotoProvider>
            <PhotoView src={believer7}>
              <img src={believer7} alt="" className="img cursor-pointer" />
            </PhotoView>
          </PhotoProvider>

          <PhotoProvider>
            <PhotoView src={believer8}>
              <img src={believer8} alt="" className="img cursor-pointer" />
            </PhotoView>
          </PhotoProvider>

          <PhotoProvider>
            <PhotoView src={believer9}>
              <img src={believer9} alt="" className="img cursor-pointer" />
            </PhotoView>
          </PhotoProvider>
          <PhotoProvider>
            <PhotoView src={believer10}>
              <img src={believer10} alt="" className="img cursor-pointer" />
            </PhotoView>
          </PhotoProvider>
          <PhotoProvider>
            <PhotoView src={believer11}>
              <img src={believer11} alt="" className="img cursor-pointer" />
            </PhotoView>
          </PhotoProvider>
          <PhotoProvider>
            <PhotoView src={believer12}>
              <img src={believer12} alt="" className="img cursor-pointer" />
            </PhotoView>
          </PhotoProvider>
          <PhotoProvider>
            <PhotoView src={believer13}>
              <img src={believer13} alt="" className="img cursor-pointer" />
            </PhotoView>
          </PhotoProvider>
          <PhotoProvider>
            <PhotoView src={believer14}>
              <img src={believer14} alt="" className="img cursor-pointer" />
            </PhotoView>
          </PhotoProvider>
          <PhotoProvider>
            <PhotoView src={believer15}>
              <img src={believer15} alt="" className="img cursor-pointer" />
            </PhotoView>
          </PhotoProvider>
          <PhotoProvider>
            <PhotoView src={believer16}>
              <img src={believer16} alt="" className="img cursor-pointer" />
            </PhotoView>
          </PhotoProvider>
          <PhotoProvider>
            <PhotoView src={believer17}>
              <img src={believer17} alt="" className="img cursor-pointer" />
            </PhotoView>
          </PhotoProvider>
          <PhotoProvider>
            <PhotoView src={believer18}>
              <img src={believer18} alt="" className="img cursor-pointer" />
            </PhotoView>
          </PhotoProvider>
          <PhotoProvider>
            <PhotoView src={believer19}>
              <img src={believer19} alt="" className="img cursor-pointer" />
            </PhotoView>
          </PhotoProvider>
          <PhotoProvider>
            <PhotoView src={believer20}>
              <img src={believer20} alt="" className="img cursor-pointer" />
            </PhotoView>
          </PhotoProvider>
          <PhotoProvider>
            <PhotoView src={believer21}>
              <img src={believer21} alt="" className="img cursor-pointer" />
            </PhotoView>
          </PhotoProvider>
          <PhotoProvider>
            <PhotoView src={believer22}>
              <img src={believer22} alt="" className="img cursor-pointer" />
            </PhotoView>
          </PhotoProvider>
          <PhotoProvider>
            <PhotoView src={believer23}>
              <img src={believer23} alt="" className="img cursor-pointer" />
            </PhotoView>
          </PhotoProvider>
          <PhotoProvider>
            <PhotoView src={believer24}>
              <img src={believer24} alt="" className="img cursor-pointer" />
            </PhotoView>
          </PhotoProvider>
          <PhotoProvider>
            <PhotoView src={believer25}>
              <img src={believer25} alt="" className="img cursor-pointer" />
            </PhotoView>
          </PhotoProvider>
          <PhotoProvider>
            <PhotoView src={believer26}>
              <img src={believer26} alt="" className="img cursor-pointer" />
            </PhotoView>
          </PhotoProvider>
          <PhotoProvider>
            <PhotoView src={believer27}>
              <img src={believer27} alt="" className="img cursor-pointer" />
            </PhotoView>
          </PhotoProvider>
          <PhotoProvider>
            <PhotoView src={believer28}>
              <img src={believer28} alt="" className="img cursor-pointer" />
            </PhotoView>
          </PhotoProvider>
          <PhotoProvider>
            <PhotoView src={believer29}>
              <img src={believer29} alt="" className="img cursor-pointer" />
            </PhotoView>
          </PhotoProvider>
          <PhotoProvider>
            <PhotoView src={believer30}>
              <img src={believer30} alt="" className="img cursor-pointer" />
            </PhotoView>
          </PhotoProvider>
          <PhotoProvider>
            <PhotoView src={believer31}>
              <img src={believer31} alt="" className="img cursor-pointer" />
            </PhotoView>
          </PhotoProvider>
          <PhotoProvider>
            <PhotoView src={believer32}>
              <img src={believer32} alt="" className="img cursor-pointer" />
            </PhotoView>
          </PhotoProvider>
        </Slider>
      </div>

      {/* <div className="flex justify-center mt-8">
        <img src={arrow} alt="" />
      </div> */}
    </div>
  );
};

export default Believer;

import React, { useRef } from "react";
import "./Media.css";
import event1 from "../../../../../assets/event-1.png";
import event2 from "../../../../../assets/event-2.png";
import event3 from "../../../../../assets/event-3.png";
import event4 from "../../../../../assets/event-4.png";
import media1 from "../../../../../assets/media-1.1.png";
import media2 from "../../../../../assets/media-2.1.png";
import media3 from "../../../../../assets/media-3.1.jpg";
import media4 from "../../../../../assets/media-4.1.png";
import blogArrow from "../../../../../assets/blog-arrow.png";
import mediaHeader from "../../../../../assets/media-header.png";
import left from "../../../../../assets/left-arrow.png";
import right from "../../../../../assets/right-arrow.png";
import slider1 from "../../../../../assets/media-slider-1.png";
import slider2 from "../../../../../assets/media-slider-2.png";
import slider3 from "../../../../../assets/media-slider-3.png";
import slider4 from "../../../../../assets/media-slider-4.png";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Media = () => {
  const sliderRef = useRef();
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const handleNext = () => {
    sliderRef.current.slickNext();
  };
  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="bg-media">
      <div className="mx-auto w-[72%]">
        <Slider {...settings} ref={sliderRef}>
          <div className="pt-24 pb-10  lg:px-24 px-12">
            <img src={slider1} alt="" />
            <p className="text-center lg:px-44  mt-6">
              "Xtraliving transforming health solution by focusing on movement,
              nutrition, sleep and stress.
            </p>
          </div>
          <div className="pt-24 pb-10 lg:px-64 px-12">
            <img src={slider2} alt="" />
            <p className="text-center lg:px-10  mt-6">
              ""Xtraliving building health solution specific for corporate
              employees by focusing on their lifestyle.
            </p>
          </div>
          <div className="pt-24 pb-10   lg:px-64 px-12">
            <img src={slider3} alt="" />
            <p className="text-center lg:px-10   mt-6">
              ""Fitness company building deep tech solution using their training
              expertise and understanding of market.
            </p>
          </div>
          <div className="lg:pt-0 md:pt-0 pt-36 lg:px-40 px-12">
            <img src={slider4} alt="" />
            <p className="text-center lg:px-44 md:px-24   mt-6">
              ""Xtraliving collaborate with Govt. of Maharashtra to spread
              awareness among 12 million students about health. "
            </p>
          </div>
        </Slider>
        <div style={{ textAlign: "center" }}>
          <button className="button mx-8 mt-6" onClick={handlePrev}>
            <img src={left} />
          </button>
          <button className="button" onClick={handleNext}>
            <img src={right} />
          </button>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-open bg-[#FBF8F0] mt-10 "
        >
          <div className="collapse-title text-xl font-medium">
            <div className="border-left flex items-center font-bold ml-7">
              <p className="ml-3 text-[#000000]">Events</p>
            </div>
          </div>
          <div className="collapse-content">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
              <Link to={"/quizCompetition"}>
                <div>
                  <img src={event1} alt="" className="" />
                  <h1 className="ml-7 font-bold">eNERGIZE Quiz Competition</h1>
                </div>
              </Link>
              <Link to={"/goGirl"}>
                <div>
                  <img src={event2} alt="" className="" />
                  <h1 className="ml-7 font-bold">Go Girl Go campaign</h1>
                </div>
              </Link>
              <Link to={'/fitnessChampionship'}>
                <div>
                  <img src={event3} alt="" className="" />
                  <h1 className="ml-7 font-bold">
                    eNERGIZE fitness championship
                  </h1>
                </div>
              </Link>
              <Link to={"/bootcamp"}>
                <div>
                  <img src={event4} alt="" className="" />
                  <h1 className="ml-7 font-bold">eNERGIZE Bootcamp</h1>
                </div>
              </Link>
            </div>

            <div className="mt-5 text-right mr-4">
              <Link to={"/events"}>
                <button className="">
                  <img src={blogArrow} alt="" className="w-24" />
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-open bg-[#FBF8F0] mt-10 "
        >
          <div className="collapse-title text-xl font-medium">
            <div className="border-left flex items-center font-bold ml-7">
              <p className="ml-3 text-[#000000]">Media</p>
            </div>
          </div>
          <div className="collapse-content">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 ml-7 mt-5 gap-5">
              <div>
                <img src={media1} alt="" className="" />
                <h1 className="mt-3 font-bold ">India Today</h1>
              </div>
              <div>
                <img src={media2} alt="" className="" />
                <h1 className="mt-3 font-bold">Times of India</h1>
              </div>
              <div>
                <img src={media3} alt="" className="" />
                <h1 className="mt-3 font-bold">The New Indian Express</h1>
              </div>
              <div>
                <img src={media4} alt="" className="" />
                <h1 className="mt-3 font-bold">Money Control</h1>
              </div>
            </div>
            <div className="mt-5 text-right mr-4">
              <Link to={"/allMedia"}>
                <button className="">
                  <img src={blogArrow} alt="" className="w-24" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;

import React from 'react';
import Slider from "react-slick";
import './Media.css'
import media from "../../../../assets/Media-1.png"
const Media = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div >
        <Slider {...settings}>
          <div >
            <img src={media} alt='media-1'/>
          </div>
          <div>
            <img src={media} alt='media-1'/>
          </div>
        </Slider>
        <br />
        </div>
      
    );
};

export default Media;
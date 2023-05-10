import React from "react";
import "./PersonalHeader.css";
import personalHeader from "../../../../assets/Personal-header.png";
import personalHeader1 from "../../../../assets/header-home.jpg";
import feature1 from '../../../../assets/personal-feature-1.png'
import feature2 from '../../../../assets/personal-feature-2.png'
import feature3 from '../../../../assets/personal-feature-3.png'
import feature4 from '../../../../assets/personal-feature-4.png'
import feature5 from '../../../../assets/personal-feature-5.png'
import feature6 from '../../../../assets/personal-feature-6.png'

const PersonalHeader = () => {
  return (
    <div className="pb-16">
      <div class="container-1">
        <img src={personalHeader1} alt="Snow" className="w-full" />
        <div className="centered-1 absolute lg:top-52 lg:left-28 md:top-32 md:left-8 top-12 left-6">
          <div class=" font-semibold text-md lg:text-4xl md:text-3xl text-left ">
            Cravings and ignorance lie at the root of
            <br />
            suffering. So even if you indulge, be aware :)
          </div>
          <p className="text-left mt-5 lg:text-2xl md:text-2xl text-sm">
            We are spreading awareness about a practical way to <br /> be functionally
            fit.
          </p>
        </div>
      </div>

      <h1 className="text-center feature-title pb-6 mt-10"> "As featured on"</h1>


      <div className="flex justify-center mx-10 mt-8">
        <div className="flex lg:gap-52 gap-24 items-center flex-col lg:flex-row md:flex-row">
          <div className="text-center">
            <img src={feature1} alt="" className="w-40 mx-auto"/>
          </div>
          <div className="text-center">
            <img src={feature2} alt=""  className="w-40 mx-auto"/>
          </div>
          <div className="text-center">
            <img src={feature3} alt=""  className="w-40 mx-auto"/>
          </div>
        </div>
      </div>

      <div className="flex justify-center mx-10 mt-16">
        <div className="flex lg:gap-52 gap-24 items-center flex-col lg:flex-row md:flex-row">
          <div className="text-center">
            <img src={feature4} alt="" className="w-40 mx-auto"/>
          </div>
          <div className="text-center">
            <img src={feature5} alt=""  className="w-40 mx-auto"/>
          </div>
          <div className="text-center">
            <img src={feature6} alt=""  className="w-40 mx-auto"/>
          </div>
        </div>
      </div>


    </div>
  );
};

export default PersonalHeader;

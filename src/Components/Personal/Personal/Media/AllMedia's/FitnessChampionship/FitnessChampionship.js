import React from "react";
import pic1 from "../../../../../../assets/eNERGIZEfitnesschampionship.png";

import pic2 from "../../../../../../assets/eNERGIZEfitnesschampionship.png";

const FitnessChampionship = () => {
  return (
    <div className="bg-[#FBF8F0] pb-12">
      <div className="mx-auto w-10/12">
        <img src={pic1} alt="" />

        <div tabIndex={0} className="collapse collapse-open bg-[#FBF8F0] mt-20">
          <div className="collapse-title text-xl font-medium">
            <div className="border-left flex items-center font-bold">
              <p className="ml-3 text-[#000000]">Winners</p>
            </div>
          </div>
          <div className="collapse-content">
            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-10 mt-10">
              <div>
                <p className="font-bold text-[#000000]">Open Category-Men</p>
                <p className="mt-8">Sajan Agarwal</p>
                <p className="mt-8">ADARSH</p>
                <p className="mt-8">Pravesh Tamang</p>
              </div>
              <div>
                <p className="font-bold text-[#000000]">Open Category-Women</p>
                <p className="mt-8">Shraddha Talekar</p>
                <p className="mt-8">Manaswee M Jamjare</p>
                <p className="mt-8">Rujula Amol Rohini Bhonsle</p>
              </div>
              <div>
                <p className="font-bold text-[#000000]">Age Group</p>
                <p className="mt-8">4-5 Years</p>
                <p className="mt-8">6-7 Years</p>
                <p className="mt-8">8-9 Years</p>
                <p className="mt-8">10-11 Years</p>
                <p className="mt-8">12-13 Years</p>
                <p className="mt-8">14-15 Years</p>
                <p className="mt-8">16-17 Years</p>
              </div>
              <div>
                <p className="font-bold text-[#000000]">Male</p>
                <p className="mt-8">Harshvardhan Kadarkar/ Adhrit Bhargava</p>
                <p className="mt-8">Arnav Nikhil Shah</p>
                <p className="mt-8">Moksh Agarwal</p>
                <p className="mt-8">Raghav Kaushal Nimhan</p>
                <p className="mt-8">Aseem Kunte</p>
                <p className="mt-8">Sarthak nirdosh dahiwale</p>
                <p className="mt-8">Vishal Vijay Gavali</p>
              </div>
              <div>
                <p className="font-bold text-[#000000]">Female</p>
                <p className="mt-8 invisible">fsfsf</p>
                <p className="mt-8">Aarya Sarang Chaudhari</p>
                <p className="mt-8">Charvi Lapsiya</p>
                <p className="mt-8">Rashi Subodh Narkhede</p>
                <p className="mt-8">Rashi Subodh Narkhede</p>
                <p className="mt-8">Kairavee Pande</p>
                <p className="mt-8">Aarohi Patil</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-3/6 mx-auto mt-10">
          <img src={pic2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FitnessChampionship;

import React from "react";
import pic1 from "../../../../../../assets/eNERGIZEfitnesschampionship.png";

import pic2 from "../../../../../../assets/eNERGIZEfitnesschampionship.png";

import signup from "../../../../../../assets/Sign up.png";
import recording from "../../../../../../assets/Recording Video.png";
import uploading from "../../../../../../assets/Upload to cloud.png";
import "./FitnessChampionship.css";
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
        <div tabIndex={0} className="collapse collapse-open bg-[#FBF8F0] mt-20">
          <div className="collapse-title text-xl font-medium">
            <div className="border-left flex items-center font-bold">
              <p className="ml-3 text-[#000000]">
                HOW FAR HAS YOUR FITNESS COME THESE 4 MONTHS?
              </p>
            </div>
          </div>
          <div className="collapse-content">
            <p className="mt-8">
              The lockdown, despite all its challenges has given an opportunity
              to introspect. A lot of us have opted for various kinds of home
              workouts, took a serious look at our eating habits and worked hard
              at it while staying at home.
            </p>
          </div>
        </div>
        <div tabIndex={0} className="collapse collapse-open bg-[#FBF8F0] mt-20">
          <div className="collapse-title text-xl font-medium">
            <div className="border-left flex items-center font-bold">
              <p className="ml-3 text-[#000000]">
                Now it’s time to put that to the test.
              </p>
            </div>
          </div>
          <div className="collapse-content">
            <p className="mt-8">
              Participate in THE eNERGIZE and push yourself in 3 workouts
              designed by our coaches and stand a chance to win fabulous
              prizes!! Link to submit your score is given at the bottom of the
              page
            </p>
          </div>
        </div>
        <div tabIndex={0} className="collapse collapse-open bg-[#FBF8F0] mt-20">
          <div className="collapse-title text-xl font-medium">
            <div className="border-left flex items-center font-bold">
              <p className="ml-3 text-[#000000]">THE TIMELINE</p>
            </div>
          </div>
          <div className="collapse-content">
            <div className="flex justify-between flex-col lg:flex-row mt-16 gap-5">
              <div>
                <h1 className="text-[16px] font-bold">
                  REGISTRATION FOR THE EVENT
                </h1>
                <p className="mt-3">
                  Registration for the event will start and interested
                  participants should submit their details at the link given
                  above.
                </p>
              </div>
              <div>
                <p className="bg-[#ED5009] p-3 rounded-lg font-bold text-center">
                  SEPT 01, 16:00 HRS IST
                </p>
              </div>
            </div>

            <div className="flex justify-between flex-col lg:flex-row mt-16 gap-5">
              <div>
                <h1 className="text-[16px] font-bold">
                  RELEASE OF THE WORKOUTS
                </h1>
                <p className="mt-3">
                  We will be releasing the 3 workouts to be performed for the
                  challenge on our website, YouTube and Instagram handle <br />{" "}
                  (
                  <span className="font-bold">
                    @itsxtraliving and @x60crossfit
                  </span>
                  ). All workouts are designed to target different aspects of
                  fitness
                </p>
              </div>
              <div>
                <p className="bg-[#ED5009] p-3 rounded-lg font-bold">
                  SEPT 10, 16:00 HRS IST
                </p>
              </div>
            </div>

            <div className="flex justify-between flex-col lg:flex-row mt-16 gap-5">
              <div>
                <h1 className="text-[16px] font-bold">
                  DEADLINE TO SUBMIT THE WORKOUT
                </h1>

                <p className="mt-3">
                  From the date of the release, your clock starts ticking!
                </p>

                <p className="mt-3">
                  Perform all 3 challenges and record your workouts in good
                  quality video. Calculate the scores and share both with us!
                </p>
              </div>
              <div>
                <p className="bg-[#ED5009] p-3 rounded-lg font-bold">
                  SEPT 25, 23:00 HRS IST
                </p>
              </div>
            </div>

            <div className="flex justify-between flex-col lg:flex-row mt-16 gap-5">
              <div>
                <h1 className="text-[16px] font-bold">
                  ANNOUNCEMENT OF THE WINNERS!
                </h1>

                <p className="mt-3">
                  Based on the videos and scores submitted, we will evaluate and
                  announce the top 10 fittest male and female entries and <br />{" "}
                  the two grand winners of the challenge.
                </p>
              </div>
              <div>
                <p className="bg-[#ED5009] p-3 rounded-lg font-bold">
                  OCTO 05, 11:00 HRS IST
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto mt-10">
          <img src={pic1} alt="" />
        </div>
        <div tabIndex={0} className="collapse collapse-open bg-[#FBF8F0] mt-20">
          <div className="collapse-title text-xl font-medium">
            <div className="border-left flex items-center font-bold">
              <p className="ml-3 text-[#000000]">HOW DO YOU PARTICIPATE ?</p>
            </div>
          </div>
          <div className="collapse-content">
            <div className="flex justify-center mx-8 mt-16">
              <div className="flex lg:gap-32 gap-8 items-center flex-col lg:flex-row">
                <div>
                  <img src={signup} alt="" className="w-24 mx-auto" />

                  <p className="text-center w-52 advisor-desc">
                    Leading paediatrics of US. “Top Doctor” from 2006 to 2018 by
                    San Diego
                  </p>
                </div>

                <div>
                  <img src={recording} alt="" className="w-24 mx-auto" />

                  <p className="text-center w-52 advisor-desc">
                    Senior leader in the edtech industry. Specialist in business
                    management.
                  </p>
                </div>

                <div>
                  <img src={uploading} alt="" className="w-24 mx-auto" />
                  <p className="text-center w-52 advisor-desc">
                    Seniors sports scientist in US. Author of many top selling
                    books including “Running Revolution”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-center pt-24 text-[#000000] text-[25px] font-semibold border-bottom-prize">
            Prizes
          </h1>

          <p className="text-[#000000] text-center mt-8 font-semibold">
            Overall Category (Women/Men)
          </p>
          <p className="text-[#000000] text-center mt-8 font-semibold">
            First Prize: Rs 75,000/-
          </p>
          <p className="text-[#000000] text-center mt-8 font-semibold">
            Second Prize: Rs 50,000/-
          </p>
          <p className="text-[#000000] text-center mt-8 font-semibold">
            Third Prize: Rs 25,000/-
          </p>

          <p className="text-[#000000] text-center mt-8 font-semibold">
            Trophy and Certificate for the winner in each category (Male/Female)
          </p>
        </div>
        
        <div>
          <div>
            <h1 className="text-center mt-12 font-bold text-[#000000] text-[23px]">
              Category for under 18
            </h1>
            <div  className="border-bottom-category"></div>
          </div>

          <div className="flex gap-8 flex-col lg:flex-row md:flex-row lg:px-40 px-10 mt-12">
            <div className="list-disc w-4/5">
              <li>4-5 Years</li>
              <li>6-7 Years</li>
              <li>8-9 Years</li>
              <li>10-11 Years</li>
              <li>12-13 Years</li>
              <li>14-15 Years</li>
              <li>16-17 Years</li>
            </div>
            <div className="flex items-center">
              Kids below 12 years will get a participation certificate by
              submitting just competition 1 workout. If you have been taking
              care of your fitness, this is a chance to test your progress. If
              you haven’t been consistent, here is where you start.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitnessChampionship;

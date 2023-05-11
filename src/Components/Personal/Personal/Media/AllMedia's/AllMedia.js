import React from "react";
import img1 from "../../../../../assets/media-1.png";
import img2 from "../../../../../assets/media-2.png";
import img3 from "../../../../../assets/media-3.png";
import img4 from "../../../../../assets/media-4.png";
import img5 from "../../../../../assets/media-5.png";
import img6 from "../../../../../assets/media-6.png";
import img7 from "../../../../../assets/media-7.png";
import img8 from "../../../../../assets/media-8.png";
import img9 from "../../../../../assets/media-9.png";
import img10 from "../../../../../assets/media-10.png";
import img11 from "../../../../../assets/media-11.png";
import img12 from "../../../../../assets/media-12.png";
import img13 from "../../../../../assets/media-13.png";
import img14 from "../../../../../assets/media-14.png";
import img15 from "../../../../../assets/media-15.png";
import img16 from "../../../../../assets/media-16.png";
import img17 from "../../../../../assets/media-17.png";
import img18 from "../../../../../assets/media-18.png";
import img19 from "../../../../../assets/media-19.png";
import img20 from "../../../../../assets/media-20.png";
import img21 from "../../../../../assets/media-21.png";
import img22 from "../../../../../assets/media-22.png";
import img23 from "../../../../../assets/media-23.png";
import img24 from "../../../../../assets/media-24.png";
import img25 from "../../../../../assets/media-25.png";
import img26 from "../../../../../assets/media-26.png";
import img27 from "../../../../../assets/media-27.png";
import img28 from "../../../../../assets/media-28.png";
import img29 from "../../../../../assets/media-29.png";
import img30 from "../../../../../assets/media-30.png";
import img31 from "../../../../../assets/media-31.png";
import img32 from "../../../../../assets/media-32.png";
import img33 from "../../../../../assets/media-33.png";
import img34 from "../../../../../assets/media-34.png";
import img35 from "../../../../../assets/media-35.png";
import img36 from "../../../../../assets/media-36.png";
import img37 from "../../../../../assets/media-37.png";
import img38 from "../../../../../assets/media-38.png";
import img39 from "../../../../../assets/media-39.png";
import img40 from "../../../../../assets/media-40.png";

import Slider from "react-slick";
import { PhotoProvider, PhotoView } from "react-photo-view";

const AllMedia = () => {
  return (
    <div className="bg-[#FBF8F0] pb-12">
      <div className="mx-auto w-3/4">
        <div tabIndex={0} className="collapse collapse-open bg-[#FBF8F0] pt-20">
          <div className="collapse-title text-xl font-medium">
            <div className="border-left flex items-center font-bold">
              <p className="ml-3 text-[#000000]">Media</p>
            </div>
          </div>
          <div className="collapse-content">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 mt-10">
              <div>
                <PhotoProvider>
                  <PhotoView src={img1}>
                    <img src={img1} alt="" className="cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>

                <p className="mt-2 mb-2 font-bold">India Today</p>
                <p className="text-justify">
                  India Today features Rishikesh Kumar's authored article on
                  Improving Children's Health amidst the pandemic
                </p>
              </div>
              <div>
                <PhotoProvider>
                  <PhotoView src={img2}>
                    <img src={img2} alt="" className="cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>

                <p className="mt-2 mb-2 font-bold">Times of India</p>
                <p className="text-justify">
                  eNERGIZE - National Level Online Athletic Fitness Championship
                </p>
              </div>
              <div>
                <PhotoProvider>
                  <PhotoView src={img3}>
                    <img src={img3} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>

                <p className="mt-2 mb-2 font-bold">The New Indian Express</p>
                <p className="text-justify">
                  Work-out from home is the new normal
                </p>
              </div>
              <div>
                <PhotoProvider>
                  <PhotoView src={img4}>
                    <img src={img4} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>

                <p className="mt-2 mb-2 font-bold">Money Control</p>
                <p className="text-justify">
                  Technology provoking Indians to stay fit amid Covid-19
                  lockdown
                </p>
              </div>
              <div>
                <PhotoProvider>
                  <PhotoView src={img5}>
                    <img src={img5} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>

                <p className="mt-2 mb-2 font-bold">ET Healthworld</p>
                <p className="text-justify">
                  India Today features Rishikesh Kumar's authored article on
                  Improving Children's Health amidst the pandemic
                </p>
              </div>
              <div>
                <PhotoProvider>
                  <PhotoView src={img6}>
                    <img src={img6} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">Newsd</p>
                <p className="text-justify">
                  National Level Online Fitness Athletic Championship expected
                  to witness more than 1,00,000 participants
                </p>
              </div>
              <div>
                <PhotoProvider>
                  <PhotoView src={img7}>
                    <img src={img7} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">Jhalak</p>
                <p className="text-justify">
                  News coverage dedicated to eNERGIZE
                </p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img8}>
                    <img src={img8} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">News Patrolling</p>
                <p className="text-justify">
                  Xtraliving, Sports Authority of India and Directorate of
                  Sports and Youth services of Maharashtra join hands to host
                  eNERGIZE
                </p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img9}>
                    <img src={img9} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">IANS Life</p>
                <p className="text-justify">
                  Xtraliving all set for National Level Online Fitness Athletic
                  Championship
                </p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img10}>
                    <img src={img10} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">Telangana Today</p>
                <p className="text-justify">X60 Crossfit in Headlines</p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img11}>
                    <img src={img11} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">Healthwire</p>
                <p className="text-justify">Boosting your immune system</p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img12}>
                    <img src={img12} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">News Karnataka</p>
                <p className="text-justify">
                  Hunt for 'fastest girl in Maharashtra' begins
                </p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img13}>
                    <img src={img13} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">Edex Live</p>
                <p className="text-justify">
                  Go Girl Go campaign winners affiliate with Xtraliving as
                  ambassadors
                </p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img14}>
                    <img src={img14} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">MSN</p>
                <p className="text-justify">
                  Maharashtra Government launches Go Girl Go Campaign
                </p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img15}>
                    <img src={img15} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">The New Indian Express</p>
                <p className="text-justify">
                  Why people feel depressed in winters?
                </p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img16}>
                    <img src={img16} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">The Sunday Standard</p>
                <p className="text-justify">
                  Crossing the path to fitness by X60 Crossfit
                </p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img17}>
                    <img src={img17} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">The News Now</p>
                <p className="text-justify">
                  Uddhav Thackeray gives thumbs up for Go Girl Go campaign
                </p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img18}>
                    <img src={img18} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">The Bridge</p>
                <p className="text-justify">
                  Maharashtra Govt launches campaign to raise women
                  participation
                </p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img19}>
                    <img src={img19} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">IANS Life</p>
                <p className="text-justify">Crossfit for life</p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img20}>
                    <img src={img20} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">India Today</p>
                <p className="text-justify">
                  Functional is the way for fitness
                </p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img21}>
                    <img src={img21} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">Outlook</p>
                <p className="text-justify">
                  How corporate life can cause hinderance in maintaining a
                  healthy lifestyle
                </p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img22}>
                    <img src={img22} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">Vanitha</p>
                <p className="text-justify">
                  New fitness trends in Hindi magazine
                </p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img23}>
                    <img src={img23} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">This Week India</p>
                <p className="text-justify">
                  Xtraliving, first official Indian representative to
                  collaborate with Precision Nutrition
                </p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img24}>
                    <img src={img24} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">APN News</p>
                <p className="text-justify">
                  Shri Uddhav Thackeray supports Go Girl Go Campaign
                </p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img25}>
                    <img src={img25} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">Hans India</p>
                <p className="text-justify">
                  Crossfit Games to Overcome Sadness
                </p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img26}>
                    <img src={img26} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">The Tribune</p>
                <p className="text-justify">
                  Rishikesh Kumar, Xtraliving founder and CEO headlines The
                  Tribune - motivates towards having a career in the fitness
                  industry
                </p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img27}>
                    <img src={img27} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">iDiva</p>
                <p className="text-justify">
                  Inculcating healthy habits at home in Hindi
                </p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img28}>
                    <img src={img28} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">The New Indian Express</p>
                <p className="text-justify">
                  Xtraliving provides workout at home courses amid the pandemic
                </p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img29}>
                    <img src={img29} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">The New Indian Express</p>
                <p className="text-justify">
                  Xtraliving stepping up with their virtual/digital services
                  during COVID-19 lockdown
                </p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img30}>
                    <img src={img30} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">Socialnews.xyz</p>
                <p className="text-justify">
                  Xtraliving provides support for Olympics to women in strength
                  training, conditioning and nutrition
                </p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img31}>
                    <img src={img31} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">Enadu</p>
                <p className="text-justify">X60 Crossfit Games</p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img32}>
                    <img src={img32} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">Hyderabad Today</p>
                <p className="text-justify">X60 Crossfit in Headlines</p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img33}>
                    <img src={img33} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">Exchange 4 Media</p>
                <p className="text-justify">
                  Xtraliving smoothly shifts towards 'work-out from home'
                </p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img34}>
                    <img src={img34} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">Exchange 4 Media</p>
                <p className="text-justify">X60 Crossfit</p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img35}>
                    <img src={img35} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">Hans India</p>
                <p className="text-justify">X60 Crossfit games</p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img36}>
                    <img src={img36} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">AndraJyothi</p>
                <p className="text-justify">
                  Crossfit games at X60 Crossfit studio
                </p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img37}>
                    <img src={img37} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">Sakshi</p>
                <p className="text-justify">X60 Crossfit Media Coverage</p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img38}>
                    <img src={img38} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">PopXo</p>
                <p className="text-justify">Self-isolation tips in hindi</p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img39}>
                    <img src={img39} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">Sakshi</p>
                <p className="text-justify">X60 Media Coverage</p>
              </div>
              <div>
              <PhotoProvider>
                  <PhotoView src={img40}>
                    <img src={img40} alt="" className=" cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
                <p className="mt-2 mb-2 font-bold">AndraPrabha</p>
                <p className="text-justify">Crossfit games</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllMedia;

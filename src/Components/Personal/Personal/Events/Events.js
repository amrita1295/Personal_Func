import React from "react";
import "./Events.css";
import pic1 from "../../../../assets/quiz-competition.png";
import pic2 from "../../../../assets/go-girl.png";
import pic3 from "../../../../assets/fitness-championship.png";
import pic4 from "../../../../assets/rise-on-athlete.png";
import pic5 from "../../../../assets/event-2.png";
import pic6 from "../../../../assets/event-3.png";
import pic7 from "../../../../assets/event-4.png";
import pic8 from "../../../../assets/eye-health.png";
import pic9 from "../../../../assets/risk-of-injury.png";
import pic10 from "../../../../assets/gymnastic-india.png";
import pic11 from "../../../../assets/event-1.png";
import pic12 from "../../../../assets/Myopia awareness talk.png";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <div className="event-bg">
      <div className="mx-auto w-10/12">
        {/* <div
          tabIndex={0}
          className="collapse collapse-open bg-[#FBF8F0] pt-10 "
        >
          <div className="collapse-title text-xl font-medium">
            <div className="border-left flex items-center font-bold ml-7">
              <p className="ml-3 text-[#000000]">Upcoming events</p>
            </div>
          </div>
          <div className="collapse-content">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
              <Link to={"/quizCompetition"}>
                <div>
                  <img src={pic1} alt="" className="" />
                  <h1 className="ml-7 font-bold">eNERGIZE Quiz Competition</h1>
                </div>
              </Link>
              <Link to={'/goGirl'}>
                <div>
                  <img src={pic2} alt="" className="" />
                  <h1 className="ml-7 font-bold">Go Girl Go campaign</h1>
                </div>
              </Link>
              <Link to={'/fitnessChampionship'}>
              <div>
                <img src={pic3} alt="" className="" />
                <h1 className="ml-7 font-bold">
                  eNERGIZE fitness championship
                </h1>
              </div>
              </Link>
            </div>
          </div>
        </div> */}
      </div>

      <div className="mx-auto w-10/12">
        <div
          tabIndex={0}
          className="collapse collapse-open bg-[#FBF8F0] pt-10 "
        >
          <div className="collapse-title text-xl font-medium">
            <div className="border-left flex items-center font-bold ml-7">
              <p className="ml-3 text-[#000000]">Previous events</p>
            </div>
          </div>
          <div className="collapse-content">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 ml-5 mt-5">
              <Link to={"/raiseOnAthlete"}>
                <div>
                  <img src={pic4} alt="" className="" />
                  <h1 className="mt-2 font-bold">Raise an Athlete​</h1>
                </div>
              </Link>
              <Link to={"/goGirl"}>
                <div>
                  <img src={pic5} alt="" className="" />
                  <h1 className="ml-7 font-bold">Go Girl Go campaign</h1>
                </div>
              </Link>
              <Link to={"/fitnessChampionship"}>
                <div>
                  <img src={pic6} alt="" className="" />
                  <h1 className="ml-7 font-bold">
                    eNERGIZE fitness championship
                  </h1>
                </div>
              </Link>
              <Link to={"/bootcamp"}>
                <div>
                  <img src={pic7} alt="" className="" />
                  <h1 className="ml-7 font-bold">eNERGIZE Bootcamp</h1>
                </div>
              </Link>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 ml-5">
              <Link to={"/eyeHealthSeminar"}>
                <div>
                  <img src={pic8} alt="" className="" />
                  <h1 className="mt-2 font-bold">Eye health seminar​</h1>
                </div>
              </Link>
              <Link to={"/reducingTheRiskOfInjury"}>
                <div>
                  <img src={pic9} alt="" className="" />
                  <h1 className="mt-2 font-bold">
                    Reducing the risk of injury
                  </h1>
                </div>
              </Link>
              <Link to={"/gymnasticsInIndia"}>
                <div>
                  <img src={pic10} alt="" className="" />
                  <h1 className="ml-7 font-bold">Gymnastics in India</h1>
                </div>
              </Link>
              <Link to={"/quizCompetition"}>
                <div>
                  <img src={pic11} alt="" className="" />
                  <h1 className="ml-7 font-bold">eNERGIZE quiz competition</h1>
                </div>
              </Link>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 ml-5">
              <Link to={"/myopiaAwareness"}>
                <div>
                  <img src={pic12} alt="" className="" />
                  <h1 className=" font-bold mt-2">Myopia awareness talk​</h1>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;

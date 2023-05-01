import React from "react";
import "./PublicSpeaking.css";

import publicSpeakingPic from "../../../../assets/publicSpeaking.png";

const PublicSpeaking = () => {
  return (
    <div className=" bg-[#FBF8F0] pb-12">
      <div className="mx-auto w-3/4">
        <img src={publicSpeakingPic} alt="" />

        <p className="mt-10 text-justify">
          Rishi has participated in several projects promoting health and
          well-being using technology and domain knowledge. These projects focus
          on improving athletes' performance, enhancing corporate employees'
          health, building a foundation of health in children, and fostering a
          culture of health in our society.
        </p>

        <div
          tabIndex={0}
          className="collapse collapse-open bg-[#FBF8F0] mt-10 "
        >
          <div className="collapse-title text-xl font-medium">
            <div className="border-left flex items-center font-bold">
              <p className="ml-3 text-[#000000]">Public speaking</p>
            </div>
          </div>
          <div className="collapse-content">
            <p className="text-justify mt-4">
              Rishikesh Kumar is passionate about sharing his knowledge and
              expertise through public speaking. He believes that public
              speaking is a powerful tool that can inspire and motivate
              individuals to take action towards improving their health and
              well-being.
            </p>
            <p className="mt-4 text-justify">
              Rishikesh has expertise in various topics related to health,
              nutrition, sports, fitness, parenting, innovation, and
              entrepreneurship. Through his experience as the founder of
              Xtraliving and as an entrepreneur for six years, with 13 years of
              experience in sales and business management, he has developed the
              necessary skills to engage audiences and deliver compelling
              presentations.
            </p>

            <p className="mt-4 text-justify">
              His health and performance work aligns with his electronics
              engineering background. Rishikesh believes technology can be a
              powerful tool in promoting health and well-being, and he is always
              looking for ways to leverage technology to improve health
              outcomes.
            </p>
            <p className="mt-4 text-justify">
              Rishikesh's public speaking engagements are aimed at helping
              individuals understand the importance of a healthy lifestyle and
              how it can improve their overall well-being. He believes that
              through public speaking, he can inspire individuals to take action
              towards living a healthier and more fulfilling life.
            </p>

            <p className="mt-4 text-justify">
              Functional health is often used as a complementary approach to
              traditional medicine. It is not meant to replace conventional
              medicine but to work alongside it to help patients achieve better
              overall health outcomes. By focusing on the root causes of health
              problems and addressing them with natural, non-invasive
              techniques, functional health can help patients achieve better
              health outcomes and improve their quality of life.
            </p>

            <p className="mt-4 text-justify">
              If you are interested in having Rishikesh speak at your event,
              please do not hesitate to get in touch. He would be happy to
              discuss the topics he covers in more detail and explore ways in
              which he can contribute to your event. I appreciate your interest
              in Rishikesh's work.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <img src={"arrow"} alt="" />
      </div>
    </div>
  );
};

export default PublicSpeaking;

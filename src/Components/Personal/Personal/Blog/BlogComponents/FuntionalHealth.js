import React from "react";
import functionalHealth from "../../../../../assets/Functional health.png";
import arrow from "../../../../../assets/Arrow.png";

const FuntionalHealth = () => {
  return (
    <div className="bg-[#FBF8F0] pb-12">
      <div className="mx-auto w-3/4">
        <img src={functionalHealth} alt="" />

        <div
          tabIndex={0}
          className="collapse collapse-open bg-[#FBF8F0] mt-10 "
        >
          <div className="collapse-title text-xl font-medium">
            <div className="border-left flex items-center font-bold">
              <p className="ml-3 text-[#000000]">Functional health</p>
            </div>
          </div>
          <div className="collapse-content">
            <p className="mt-5 text-justify">
              Functional health is an emerging approach to healthcare that
              emphasizes the optimal functioning of the body and its systems
              rather than simply treating symptoms or illnesses. This approach
              looks at the root causes of health problems and seeks to address
              them rather than just managing symptoms with medication or
              surgery.
            </p>

            <p className="mt-5 text-justify">
              Functional health practitioners believe that the body is an
              interconnected system of organs, cells, and tissues and that when
              one part of the body is not functioning correctly, it can also
              affect other areas. This approach focuses on identifying and
              treating the underlying causes of health problems rather than just
              treating the symptoms.
            </p>

            <p className="mt-5 text-justify">
              Functional health practitioners use various tools and techniques
              to help patients achieve optimal health. These may include dietary
              changes, nutritional supplements, exercise programs, stress
              reduction techniques, and other lifestyle modifications. They also
              work closely with patients to help them understand the
              interconnectedness of their bodies and how to maintain their
              health over time.
            </p>

            <p className="mt-5 text-justify">
              One of the fundamental principles of functional health is the
              belief that the body has an innate ability to heal itself.
              Functional health practitioners believe patients can achieve
              optimal health and wellness by supporting the body's natural
              healing processes.
            </p>
            <p className="mt-5 text-justify">
              Functional health is often used as a complementary approach to
              traditional medicine. It is not meant to replace conventional
              medicine but to work alongside it to help patients achieve better
              overall health outcomes. By focusing on the root causes of health
              problems and addressing them with natural, non-invasive
              techniques, functional health can help patients achieve better
              health outcomes and improve their quality of life.
            </p>
            <p className="mt-5 text-justify">
              If you are interested in functional health, working with a
              qualified practitioner who can guide you through the process is
              essential. Look for someone with experience in this area and
              willing to work with you to develop a customized plan that meets
              your unique needs and goals.
            </p>
            <p className="mt-5 text-justify">
              In conclusion, functional health is an approach to healthcare that
              emphasizes the optimal functioning of the body and its systems. It
              focuses on identifying and treating the root causes of health
              problems rather than just managing symptoms. By supporting the
              body's natural healing processes and working with patients to make
              lifestyle changes, functional health practitioners can help
              patients achieve better health outcomes and improve their overall
              quality of life.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <img src={arrow} alt="" />
      </div>
    </div>
  );
};

export default FuntionalHealth;

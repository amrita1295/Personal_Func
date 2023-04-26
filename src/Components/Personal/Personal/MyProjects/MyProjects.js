import React from "react";
import "./MyProjects.css";
import myProjectsPic from "../../../../assets/MyProjects.png";

const MyProjects = () => {
  return (
    <div className="bg-[#FBF8F0] pb-12">
      <div className="mx-auto w-3/4">
        <img src={myProjectsPic} alt="" />

        <p className="mt-10 text-justify">
          Rishi has participated in several projects promoting health and
          well-being using technology and domain knowledge. These projects focus
          on improving athletes' performance, enhancing corporate employees'
          health, building a foundation of health in children, and fostering a
          culture of health in our society.
        </p>

        <div tabIndex={0} className="collapse collapse-open bg-[#FBF8F0] mt-10 ">
          <div className="collapse-title text-xl font-medium">
            <div className="border-left flex items-center font-bold">
              <p className="ml-3 text-[#000000]">
                Improve Athletes' Performance:
              </p>
            </div>
          </div>
          <div className="collapse-content">
            <p className="text-justify mt-4">
              Rishi has worked with the Government of Maharashtra and the
              Gopichand Academy to improve athletes' performance, including
              Olympic athletes. They have developed customized training programs
              considering each athlete's unique needs and strengths. They also
              use advanced data analysis to optimize their performance, reduce
              injuries, and ensure they are ready to compete at the highest
              levels.
            </p>
          </div>
        </div>

        <div tabIndex={0} className="collapse collapse-open bg-[#FBF8F0] mt-10 ">
          <div className="collapse-title text-xl font-medium">
            <div className="border-left flex items-center font-bold">
              <p className="ml-3 text-[#000000]">
              Enhance Corporate Employees' Health
              </p>
            </div>
          </div>
          <div className="collapse-content">
            <p className="text-justify mt-4">
            Rishi collaborated with leading companies such as Facebook, DE Shaw, Arcesium, and Novartis to enhance the health of their employees. With the help of technology and data analysis, they are creating personalized health programs that cater to each employee's unique needs. Their holistic approach includes nutrition, exercise, and mental health to improve health outcomes, increase productivity, and reduce healthcare costs.
            </p>
          </div>
        </div>




        <div tabIndex={0} className="collapse collapse-open bg-[#FBF8F0] mt-10 ">
          <div className="collapse-title text-xl font-medium">
            <div className="border-left flex items-center font-bold">
              <p className="ml-3 text-[#000000]">
              Foster a Culture of Health in Society
              </p>
            </div>
          </div>
          <div className="collapse-content">
            <p className="text-justify mt-4">
            Rishi firmly believes that technology can be a powerful tool in promoting health and well-being in society. Therefore, they are always looking for opportunities to engage in projects and seminars that will help build a culture of health. Whether working with organizations, government agencies, or individuals, they are committed to using their expertise and knowledge to impact the world positively.
            </p>
          </div>
        </div>



        <div tabIndex={0} className="collapse collapse-open bg-[#FBF8F0] mt-10 ">
          <div className="collapse-title text-xl font-medium">
            <div className="border-left flex items-center font-bold">
              <p className="ml-3 text-[#000000]">
              Developing Innovative Health Tech Solutions
              </p>
            </div>
          </div>
          <div className="collapse-content">
            <p className="text-justify mt-4">
            Through their work in health tech, Rishi and their team are developing personalized solutions that leverage data and insights to help individuals achieve their fitness and wellness goals. They can use AI and ML algorithms to analyze data from wearables, fitness trackers, and other devices to provide customized training, nutrition, and recovery recommendations tailored to an individual's unique needs and goals. They also use IoT and computer vision to develop intelligent fitness equipment and platforms.
            </p>

            <p className="mt-4">If you are interested in collaborating or learning more about Rishi's work, please do not hesitate to contact him. He would happily discuss his projects in more detail and explore ways to work together to promote health and well-being.</p>
          </div>
        </div>



      </div>

      <div className="flex justify-center mt-8">
        <img src={"arrow"} alt="" />
      </div>
    </div>
  );
};

export default MyProjects;

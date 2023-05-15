import React from "react";
import gentleParentingPic from "../../../../../assets/Gentle parenting.png";
import arrow from "../../../../../assets/Arrow.png";

const GentleParenting = () => {
  return (
    <div className="bg-[#FBF8F0] pb-12">
       <img src={gentleParentingPic} alt="" />
      <div className="mx-auto w-3/4">
        <div
          tabIndex={0}
          className="collapse collapse-open bg-[#FBF8F0] mt-10 "
        >
          <div className="collapse-title text-xl font-medium">
            <div className="border-left flex items-center font-bold">
              <p className="ml-3 text-[#000000]">Gentle parenting</p>
            </div>
          </div>
          <div className="collapse-content">
            <p className="mt-5 text-justify">
              Gentle parenting is an approach to raising children rooted in
              respect, empathy, and understanding. It focuses on building a
              strong, loving relationship between parent and child and fostering
              an environment that supports a child's emotional, physical, and
              intellectual growth.
            </p>

            <p className="mt-5 text-justify">
              At the core of gentle parenting is the belief that children are
              unique individuals with their thoughts, feelings, and needs.
              Instead of controlling or dominating a child's behaviour through
              punishment or rewards, gentle parenting encourages parents to work
              collaboratively with their children to find solutions that meet
              everyone's needs.
            </p>

            <p className="mt-5 text-justify">
              One of the key principles of gentle parenting is the use of
              positive reinforcement instead of punishment. This means that
              instead of punishing a child for behaviour that a parent deems
              inappropriate, gentle parenting encourages parents to focus on
              positive behaviour and reinforce it with praise and rewards.
              Gentle parenting also emphasizes the importance of emotional
              regulation and modelling healthy coping skills. When a child is
              upset or experiencing strong emotions, gentle parenting encourages
              parents to validate their feelings and help them work through
              their emotions in a supportive, non-judgmental way. Another
              essential aspect of gentle parenting is the use of nonviolent
              communication. This means that parents are encouraged to use
              language that is compassionate, respectful, and non-threatening
              when communicating with their children. This can help to build a
              strong, trusting relationship between parent and child and create
              a safe and supportive environment for a child's emotional growth.
            </p>

            <p className="mt-5  text-justify">
              Overall, gentle parenting is an approach that is rooted in love,
              respect, and empathy. It recognizes that each child is unique and
              deserving of compassion and understanding. By fostering a
              supportive and loving environment, parents can help their children
              grow into confident, resilient adults who can navigate life's
              challenges with grace and compassion.
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

export default GentleParenting;

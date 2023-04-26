import React from "react";
import superFood from "../../../../../assets/superFood.png";

import arrow from '../../../../../assets/Arrow.png'

const SuperFood = () => {
  return (
    <div className="pt-24 bg-[#FBF8F0] pb-12">
      <div className="mx-auto w-3/4">
        <img src={superFood} alt="" />

        <div
          tabIndex={0}
          className="collapse collapse-open bg-[#FBF8F0] mt-10 "
        >
          <div className="collapse-title text-xl font-medium">
            <div className="border-left flex items-center font-bold">
              <p className="ml-3 text-[#000000]">Superfoods</p>
            </div>
          </div>
          <div className="collapse-content">
            <p className="text-justify mt-4">
              What if we told you that there are foods that are absolute
              powerhouses of all the nutrients together? You will be shocked
              right! So get ready to be shocked because such foods exist. They
              are called SUPERFOODS! These are foods that are extremely
              beneficial for human health due to their exceptionally high
              nutrient density. Eating superfoods enriches our bodies with all
              the much-needed nutrients and makes density. These are foods that
              are packed with all sorts of vitamins, minerals, fibres,
              antioxidants and good carbs. Foods having a high health quotient
              doesn’t mean they are free of calories. All foods have calories,
              just that some have a minimal healthy amount while others have a
              rather high amount which might be risky for your health. But
              that’s why these are called Superfoods, because they have
              low-calorie content and high nutrient density, making them super
              healthy for us, hence the name Superfoods. So which are these
              Superfoods that are so amazing for our health?
            </p>
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-open bg-[#FBF8F0] mt-10 "
        >
          <div className="collapse-title text-xl font-medium">
            <div className="border-left flex items-center font-bold">
              <p className="ml-3 text-[#000000]">
                10 Superfoods that are super healthy for us are:
              </p>
            </div>
          </div>
          <div className="collapse-content">
            <p className="text-justify mt-4 font-bold">
              1. Green Leafy Vegetables
            </p>
            <p className="ml-3 list-disc">
              <li className="mt-5">
                Some of the green veggies that are Superfoods are: Spinach,
                kale, mustard greens, swiss chard
              </li>
              <li>Nutrition Quotient:</li>
            </p>

            <p className="mt-5">
              Green leafy vegetables are a major source of Vitamin A, varients
              of Vitamin B, Vitamin C, Calcium, Iron, Magnesium, Sodium,
              Potassium, dietary fibre.
            </p>

            <p className="ml-3 list-disc">
              <li className="mt-5">
                You can eat them in the form of soups, sauteed veggies, or best,
                churn them into a juice or add them to your smoothie bowls,
                include them into your salad, sprinkle some olive oil and enjoy!
              </li>
            </p>
          </div>

          <div>
            <p className="text-justify mt-4 font-bold">2. Legumes</p>

            <p className="mt-5">
              Green leafy vegetables are a major source of Vitamin A, varients
              of Vitamin B, Vitamin C, Calcium, Iron, Magnesium, Sodium,
              Potassium, dietary fibre.
            </p>

            <p className="ml-3 list-disc">
              <li className="mt-5">
                You can eat them in the form of soups, sauteed veggies, or best,
                churn them into a juice or add them to your smoothie bowls,
                include them into your salad, sprinkle some olive oil and enjoy!
              </li>
              <li>Legumes that are considered Superfoods include:</li>
            </p>

            <p className="mt-5">
              Kidney beans, black beans, red beans, soybean, peas and garbanzo
              beans.
            </p>
            <li className="mt-5 ml-3">Nutrient Quotient:</li>

            <p className="mt-5">
              Vitamin C, Iron, Calcium, potassium, sodium, magnesium, vitamin
              B-6, Vitamin A and Iron
            </p>

            <p className="ml-3 list-disc">
              <li className="mt-5">
                You can include in your meal the form of soups and stews. Use
                pureed beans as a base for dips, add them to salads, cook them
                like pulses, cook the beans and make curries, or make fritters.
              </li>
            </p>
          </div>

          <div>
            <p className="text-justify mt-4 font-bold">3. Nuts and Seeds</p>

            <p className="ml-3 list-disc">
              <li className="mt-5">
                Nuts and seeds that are considered Superfoods are:
              </li>
            </p>

            <p className="mt-5">
              Walnuts, almonds, pistachios, cashews, pecans, Brazil Nuts, and
              macadamia nuts. As far as seeds are concerned, chia seeds, flax
              seeds, sunflower seeds, hemp seeds, and flax seeds. Peanuts are
              also a part of this category.
            </p>

            <li className="mt-5 ml-3">Nutrient Quotient:</li>

            <p className="mt-5">
              Vitamin E, Vitamin B-6, iron, zinc, magnesium, potassium,
              phosphorus and dietary fibre. They are also rich in dietary
              proteins, mono and polyunsaturated fats. They are low in saturated
              fats.
            </p>

            <p className="ml-3 list-disc">
              <li className="mt-5">
                They can be incorporated into your diet in the form of a healthy
                snack to munch on but not in very high quantities. You can have
                them in the form of various nut butter, add them to yoghurt, eat
                roasted nuts, and they can also be added to your salads.
              </li>
            </p>
          </div>

          <div>
            <p className="text-justify mt-4 font-bold">4. Yogurt</p>

            <p className="ml-3 list-disc">
              <li className="mt-5">
                Basic homemade yoghurt can be a superfood in itself. It is
                healthy to consume and keeps your nutrient tanks filled.
              </li>
              <li>Nutrient Quotient:</li>
            </p>

            <p className="mt-5">
              It has calcium, Vitamin B-6, Cobalamin, magnesium, sodium and
              potassium. Fermented and probiotic-rich foods like Yogurt help in
              reducing cholesterol, lowering blood pressure and improves your
              digestive system.
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

export default SuperFood;

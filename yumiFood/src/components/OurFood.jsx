import React from "react";
import { mealData } from "../Data/data";

const OurFood = () => {
  return (
    <>
      <div className="w-[90%] mx-auto">
        <div>
          <h2 className="text-center text-yellow-400 text-3xl font-bold py-5">
            Our Food
          </h2>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 py-6 gap-2">
          {mealData.map((meal) => (
            <div className="flex justify-center flex-col items-center">
              <div>
                <img
                  className="w-48 h-48 rounded-lg object-cover"
                  src={meal.image}
                  alt=""
                />
              </div>
              <div className="flex justify-center py-2 px-4 flex-col items-center">
                <p className="text-xl font-semibold uppercase">{meal.name}</p>
                <p className="text-xl font-semibold uppercase">{meal.price}</p>
                <button className="bg-black w-32 text-white rounded-md my-6 py-4 text-xl hover:text-yellow-400 font-semibold">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurFood;

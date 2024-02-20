import React from "react";

const Delivery = () => {
  return (
    <div className="w-full py-16 px-4">
      <h3 className="text-yellow-400 font-bold text-2xl text-center">
        Quick Delivery App
      </h3>
      <div className="grid grid-cols-2 md:w-[70%] mx-auto my-10 gap-10">
        <img
          className="w-96"
          src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp"
          alt=""
        />
        <div className="flex flex-col justify-center">
          <p className="font-bold text-green-600 text-3xl">Get the App</p>
          <h2 className="lg:text-5xl md:text-3xl sm:text-2xl  py-2 font-bold">
            The Fastest Food Delivery In India
          </h2>
          <button className="bg-black md:w-36 sm:w-28 text-white rounded-md my-6 py-4 md:text-xl sm:text-sm hover:text-yellow-400 font-semibold">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delivery;

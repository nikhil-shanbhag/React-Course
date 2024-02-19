import React, { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Hero = () => {
  const imgData = [
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v167267612/NetflixApp/ric_a4ewxo.jpg",
    },
  ];

  const [slider, setSlider] = useState(0);

  const handleminus = () => {
    setSlider(slider === 0 ? imgData.length - 1 : slider - 1);
  };
  const handleplus = () => {
    setSlider(slider === imgData.length - 1 ? 0 : slider + 1);
  };

  useEffect(() => {
    const sliderClear = setInterval(() => {
      handleplus();
    }, 2000);

    return () => clearInterval(sliderClear);
  }, [slider]);

  return (
    <div>
      <div className="w-[90%] mx-auto h-[80vh] my-5 relative">
        {imgData.map((item, i) => (
          <div key={i} className={`${slider === i ? "block" : "hidden"}`}>
            <img
              className="w-full h-[80vh] rounded-2xl object-cover"
              src={item.url}
              alt=""
            />
          </div>
        ))}
        <div className="w-full mx-auto h-[80vh] bg-black/50 absolute top-0 left-0 rounded-xl" />
        <p className="absolute top-[50%] text-center w-full font-semibold text-white text-sm sm:text-2xl md:text-3xl">
          Welcome to the world of tasty & fresh food
        </p>
        <div className="flex justify-between w-full px-5 absolute top-[50%] text-white">
          <FaChevronLeft
            size={24}
            className="cursor-pointer"
            onClick={handleminus}
          />
          <FaChevronRight
            size={24}
            className="cursor-pointer"
            onClick={handleplus}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

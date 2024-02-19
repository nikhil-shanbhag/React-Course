import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [sideNav, setSideNav] = useState(false);
  return (
    <>
      <div className="flex justify-between py-5 px-6 text-lg font-semibold relative shadow-xl">
        <GiHamburgerMenu
          size={24}
          onClick={() => setSideNav(!sideNav)}
          className="cursor-pointer block sm:hidden"
        />

        <div>
          <h2 className="font-bold text-xl md:text-2xl">
            Yumi<span className="text-yellow-400">Food</span>
          </h2>
        </div>

        <div>
          <ul className="sm:flex gap-4 hidden cursor-pointer">
            <li>Home</li>
            <li>About Us</li>
            <li>Offers</li>
            <li>Sign In</li>
          </ul>
        </div>

        <div>
          <FaCartShopping size={24} />
        </div>
      </div>

      {sideNav ? (
        <div className="absolute z-10 bg-white flex gap-5 h-screen w-1/2 top-0 left-0 shadow-2xl">
          <IoClose
            onClick={() => setSideNav(!sideNav)}
            className="absolute right-0"
            size={24}
          />

          <ul className="flex gap-4 cursor-pointer flex-col p-5 font-semibold">
            <li className="hover:text-yellow-400">Home</li>
            <li className="hover:text-yellow-400">About Us</li>
            <li className="hover:text-yellow-400">Offers</li>
            <li className="hover:text-yellow-400">Sign In</li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Header;

import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  const [sideNav, setSideNav] = useState(false);
  return (
    <>
      <div className="flex sticky top-0 z-10 bg-white justify-between py-5 px-6 text-lg font-semibold shadow-xl">
        <GiHamburgerMenu
          size={24}
          onClick={() => setSideNav(!sideNav)}
          className="cursor-pointer block sm:hidden"
        />

        <div>
          <Link to="/">
            <h2 className="font-bold text-xl md:text-2xl">
              Yumi<span className="text-yellow-400">Food</span>
            </h2>
          </Link>
        </div>

        <div>
          <ul className="sm:flex gap-4 hidden cursor-pointer">
            <Link to="/">
              <li className="hover:text-yellow-400">Home</li>
            </Link>
            <Link to="/aboutus">
              <li className="hover:text-yellow-400">About Us</li>
            </Link>
            <Link to="ourfood">
              <li className="hover:text-yellow-400">Our Food</li>
            </Link>
            <Link to="signin">
              <li className="hover:text-yellow-400">Sign In</li>
            </Link>
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
            <Link to="/">
              <li
                className="hover:text-yellow-400"
                onClick={() => setSideNav(!sideNav)}
              >
                Home
              </li>
            </Link>
            <Link to="/aboutus">
              <li
                className="hover:text-yellow-400"
                onClick={() => setSideNav(!sideNav)}
              >
                About Us
              </li>
            </Link>
            <Link to="/ourfood">
              <li
                className="hover:text-yellow-400"
                onClick={() => setSideNav(!sideNav)}
              >
                Our Food
              </li>
            </Link>
            <Link to="/signin">
              <li
                className="hover:text-yellow-400"
                onClick={() => setSideNav(!sideNav)}
              >
                Sign In
              </li>
            </Link>
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Header;

import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-black text-white">
      <div className="grid grid-cols-2 md:grid-cols-4 py-10 pl-6">
        <div>
          <h2 className="font-bold mb-3 text-xl md:text-2xl">
            Yumi<span className="text-yellow-400">Food</span>
          </h2>
          <p className="text-lg text-gray-400">
            © 2023 Bundl Technologies Pvt. Ltd
          </p>
        </div>
        <div>
          <h2 className="font-bold mb-3 text-xl md:text-2xl">Company</h2>
          <p className="md:text-lg text-sm mb-2 text-gray-400 cursor-pointer">
            About
          </p>
          <p className="md:text-lg text-sm mb-2 text-gray-400 cursor-pointer">
            Careers
          </p>
          <p className="md:text-lg text-sm mb-2 text-gray-400 cursor-pointer">
            Team
          </p>
          <p className="md:text-lg text-sm mb-2 text-gray-400 cursor-pointer">
            YumiFood one
          </p>
        </div>
        <div>
          <h2 className="font-bold mb-3 text-xl md:text-2xl">Help & Support</h2>
          <p className="md:text-lg text-sm mb-2 text-gray-400 cursor-pointer">
            Company
          </p>
          <p className="md:text-lg text-sm mb-2 text-gray-400 cursor-pointer">
            Partner with us
          </p>
          <p className="md:text-lg text-sm mb-2 text-gray-400 cursor-pointer">
            Ride with us
          </p>
        </div>
        <div>
          <h2 className="font-bold mb-3 text-xl md:text-2xl">We deliver to:</h2>
          <p className="md:text-lg text-sm mb-2 text-gray-400 cursor-pointer">
            Banglore
          </p>
          <p className="md:text-lg text-sm mb-2 text-gray-400 cursor-pointer">
            Gurgaon
          </p>
          <p className="md:text-lg text-sm mb-2 text-gray-400 cursor-pointer">
            Delhi
          </p>
          <p className="md:text-lg text-sm mb-2 text-gray-400 cursor-pointer">
            Mumbai
          </p>
          <p className="md:text-lg text-sm mb-2 text-gray-400 cursor-pointer">
            Pune
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";

const SignIn = () => {
  return (
    <div className="text-gray-600 w-[90%] sm:w-[80%] mx-auto">
      <div className="px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="font-medium text-3xl text-gray-900">
            Get Started with your Account
          </h1>
          <p className="leading-relaxed mt-4">
            Find Your Favourite Food On our platform. Just on step to order your
            Food
          </p>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium mb-5">Sign Up</h2>
          <div className="relative mb-4">
            <label for="full-name" className="leading-7 text-sm text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              className="w-full bg-white rounded border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label for="full-name" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label for="full-name" className="leading-7 text-sm text-gray-600">
              Mobile
            </label>
            <input
              type="text"
              name="mobile"
              className="w-full bg-white rounded border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label for="full-name" className="leading-7 text-sm text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full bg-white rounded border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="text-white bg-indigo-500 border-0 py-2 px8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

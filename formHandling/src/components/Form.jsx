import React from "react";

function Form() {
  return (
    <div className="flex items-center justify-center h-screen">
      <form>
        <div className="flex flex-col items-center justify-center border-2">
        <div class="w-44 h-12 bg-no-repeat inline-block" style="background-image: url('https://static.cdninstagram.com/rsrc.php/v3/ys/r/WBLlWbPOKZ9.png'); background-size: 44rem 66rem; background-position: 0 0;"/>

          <input
            className="p-2 w-64 border-[1px] mt-10 my-1"
            type="text"
            placeholder="Username"
          />
          <input
            className="p-2 w-64 border-[1px] mx-10 my-1"
            type="text"
            placeholder="Email"
          />
          <input
            className="p-2 w-64 border-[1px] mx-10 my-1"
            type="text"
            placeholder="Mobile Number"
          />
          <input
            className="p-2 w-64 border-[1px] mx-10 my-1"
            type="text"
            placeholder="Password"
          />
          <input
            className="p-2 w-64 border-[1px] mx-10 my-1"
            type="text"
            placeholder="Confirm Password"
          />
          <button
            className="bg-[#4cb5f9] py-2 px-4 text-white w-64 h-8 rounded-lg flex items-center justify-center mb-10 my-1"
            type="submit"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;


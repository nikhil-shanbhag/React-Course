import React, { useState } from "react";

function Form() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({});
  const [flag, setFlag] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const newError = {};

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.username === "") {
      newError.username = "please enter username";
    } else if (user.username.length <= 2 || user.username.length > 10) {
      newError.username = "username must be between 2 and 10";
    }

    if (user.email === "") {
      newError.email = "please enter email";
    } else if (user.email.indexOf("@") <= 0) {
      newError.email = " '@' invalid position";
    } else if (
      user.email.charAt(user.email.length - 4) != "." &&
      user.email.charAt(user.email.length - 3) != "."
    ) {
      newError.email = " '.' invalid position";
    }

    if (user.mobile === "") {
      newError.mobile = "please enter mobile";
    } else if (isNaN(user.mobile)) {
      newError.mobile = "please enter digit only";
    } else if (user.mobile.length > 10) {
      newError.mobile = "enter valid number";
    }

    if (user.password === "") {
      newError.password = "please enter password";
    } else if (user.password.length <= 5 || user.password.length > 15) {
      newError.password = "password must be between 5 and 15";
    }

    if (user.confirmPassword === "") {
      newError.confirmPassword = "please enter confirm Password";
    } else if (user.password !== user.confirmPassword) {
      newError.confirmPassword = "password not match";
    } else {
      setFlag(true);
    }

    setError(newError);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit}>
        <h1>
          {flag ? <p>{user.username} you have registered succesfully</p> : ""}
        </h1>
        <div className="flex flex-col items-center justify-center border-2">
          <input
            name="username"
            value={user.username}
            onChange={handleChange}
            className="p-2 w-64 border-[1px] mt-10 my-1"
            type="text"
            placeholder="Username"
            autoComplete="off"
          />
          <span className="text-red-500">{error.username}</span>
          <input
            name="email"
            value={user.email}
            onChange={handleChange}
            className="p-2 w-64 border-[1px] mx-10 my-1"
            type="text"
            placeholder="Email"
            autoComplete="off"
          />
          <span className="text-red-500">{error.email}</span>
          <input
            name="mobile"
            value={user.mobile}
            onChange={handleChange}
            className="p-2 w-64 border-[1px] mx-10 my-1"
            type="text"
            placeholder="Mobile Number"
            autoComplete="off"
          />
          <span className="text-red-500">{error.mobile}</span>
          <input
            name="password"
            value={user.password}
            onChange={handleChange}
            className="p-2 w-64 border-[1px] mx-10 my-1"
            type="text"
            placeholder="Password"
            autoComplete="off"
          />
          <span className="text-red-500">{error.password}</span>
          <input
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={handleChange}
            className="p-2 w-64 border-[1px] mx-10 my-1"
            type="text"
            placeholder="Confirm Password"
            autoComplete="off"
          />
          <span className="text-red-500">{error.confirmPassword}</span>
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

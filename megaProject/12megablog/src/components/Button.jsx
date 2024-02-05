import React from "react";

function Button({
  children,
  type = "button",
  bgColor = "text-white",
  classname = "",
  ...props
}) {
  return (
    <button
      className={`px-4 py2 rounded-lg ${bgColor} ${textColor} ${classname}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;

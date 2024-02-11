import React from "react";

function Navbar() {
  return (
    <div className="bg-slate-700 text-white p-4 sticky top-0 inset-x-0">
      <ul className="flex gap-10">
        <li>Home</li>
        <li>Resources</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;

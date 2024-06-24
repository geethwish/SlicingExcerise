import React from "react";

const Navbar = () => {
  return (
    <div className="absolute top-0 w-full flex content-center justify-between p-5 z-10">
      <div className="p-2 border-2 border-gray-700 text-gray-400 min-w-40 text-center">
        <h3 className="logo-font">LOGO</h3>
      </div>
      <div>Discover more</div>
    </div>
  );
};

export default Navbar;

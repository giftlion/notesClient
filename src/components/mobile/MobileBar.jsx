import React from "react";
import { Link } from "react-router-dom";

const MobileBar = ({ setIsMobileMenuOpen, isMobileMenuOpen }) => {
  return (
    <div className="absolute top-[60px] left-0 w-full h-[100px] bg-gray-500 flex flex-col justify-around text-center z-20 text-white">
      <Link
        to="/"
        className="px-4 py-3 w-full hover:bg-slate-400"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        Home
      </Link>

      <Link
        to="/notes"
        className="px-4 py-3 w-full hover:bg-slate-400"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        Notes
      </Link>
    </div>
  );
};

export default MobileBar;

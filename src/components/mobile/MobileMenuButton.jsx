import React from "react";

const MobileMenuButton = ({setIsMobileMenuOpen,isMobileMenuOpen}) => {
  return (
    <div>
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="text-3xl font-bold p-2 me-2"
      >
        <div className="h-[2px] w-[30px] bg-white mb-[6px]"></div>
        <div className="h-[2px] w-[30px] bg-white mb-[6px]"></div>
        <div className="h-[2px] w-[30px] bg-white"></div>
      </button>
    </div>
  );
};

export default MobileMenuButton;

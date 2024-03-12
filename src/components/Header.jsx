import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GrNotes } from "react-icons/gr";
import MobileBar from "./mobile/MobileBar";
import MobileMenuButton from "./mobile/MobileMenuButton";
import loggedInContext from "../context/loggedIn";
import Profile from "./Profile";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { loggedIn, setLoggedIn } = useContext(loggedInContext);
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });
  }, []);
  return (
    <>
      <nav className="w-full h-[60px] bg-gray-800 text-white text-center py-2 flex items-center justify-between">
        <div className="p-4">
          <Link
            to="/"
            className="text-3xl font-semibold font-mono flex items-center"
          >
            <GrNotes className="me-3" />
            Notes.js
          </Link>
        </div>
        {isMobile ? (
          <MobileMenuButton
            setIsMobileMenuOpen={setIsMobileMenuOpen}
            isMobileMenuOpen={isMobileMenuOpen}
          />
        ) : (
          <div>
            <ul className="w-[130px] flex justify-around items-center me-4">
              {!loggedIn && (
                <>
                  <li>
                    <Link
                      to="/"
                      className="hover:bg-blue-500 rounded-full px-4 py-3"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/login"
                      className="hover:bg-blue-500 rounded-full px-4 py-3"
                    >
                      Login
                    </Link>
                  </li>
                </>
              )}
              {loggedIn && (
                <>
                  <li>
                    <Link
                      to="/notes"
                      className="hover:bg-blue-500 rounded-full px-4 py-3"
                    >
                      Notes
                    </Link>
                  </li>
                  <Profile />
                </>
              )}
            </ul>
          </div>
        )}
      </nav>
      {isMobile && isMobileMenuOpen && (
        <MobileBar
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          isMobileMenuOpen={isMobileMenuOpen}
        />
      )}
    </>
  );
};

export default Header;

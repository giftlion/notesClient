import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdExit } from "react-icons/io";
import axios from "axios";
import { LOGOUT_URL } from "../routes/urls";
import { useContext } from "react";
import loggedInContext from "../context/loggedIn";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [isOpenProfileBar, setIsOpenProfileBar] = useState();
  const { setLoggedIn } = useContext(loggedInContext);
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await axios.post(LOGOUT_URL);
      localStorage.setItem("in", false.toString());
      setLoggedIn(localStorage.getItem("in") == "true" ? true : false);
      localStorage.removeItem("notes");
      localStorage.removeItem("in");
      localStorage.removeItem("user");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div
        className="w-[30px] h-[30px] rounded-full bg-white relative cursor-pointer me-3"
        onClick={() => setIsOpenProfileBar(!isOpenProfileBar)}
      ></div>
      {isOpenProfileBar && (
        <div className="w-[170px] h-[70px] z-30 bg-white absolute top-[50px] right-[10px]">
          <ul className="text-black h-full w-full">
            <li className="h-[50%] pt-1">user name</li>
            <li
              className="h-[50%] w-full hover:bg-slate-400 flex justify-center items-center cursor-pointer"
              onClick={() => {
                logout();
              }}
            >
              Logout
              <IoMdExit className="size-5 pt-1" />
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Profile;

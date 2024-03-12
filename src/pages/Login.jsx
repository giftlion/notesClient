import React, { useState } from "react";
import axios from "axios";
import { LOGIN_URL } from "../routes/urls";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import loggedInContext from "../context/loggedIn";

const Login = ({ setNotes, notes }) => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errorState, setErrorState] = useState("");
  const [errorType, setErrorType] = useState(0);
  const nav = useNavigate();
  const { setLoggedIn } = useContext(loggedInContext);

  const login = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(LOGIN_URL, formValues);
      localStorage.setItem("notes", JSON.stringify(data.user.notes));
      localStorage.setItem("in", true.toString());
      localStorage.setItem("user", JSON.stringify(data.user));
      setNotes(data.user.notes);
      setLoggedIn(localStorage.getItem("in") == "true" ? true : false);
      nav("/notes");
    } catch (error) {
      setErrorType(error.response.status);
      if (error.response.status === 404) {
        setErrorState("User not found");
      }
      if (error.response.status === 401) {
        setErrorState("Invalid password");
      }
    }
  };

  return (
    <div className="w-[450px] max-w-[90%] h-[400px] mx-auto mt-8 p-8 bg-white rounded shadow-md border-gray-700 border-2">
      <h2 className="text-4xl font-bold mb-4 text-center underline">Log In</h2>
      <form onSubmit={login} className="h-[100%]">
        <div className="relative z-0 mb-16">
          <input
            autoComplete="off"
            type="email"
            id="Email"
            className="block px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            onChange={(e) =>
              setFormValues({ ...formValues, email: e.target.value })
            }
          />
          <label
            htmlFor="Email"
            className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Email
          </label>
          <div className="relative">
            <div className="h-[15px] absolute top-0 left-0">
              {errorType === 404 && (
                <p className="text-red-500 text-sm">{errorState}</p>
              )}
            </div>
          </div>
        </div>
        <div className="relative z-0 mb-8">
          <input
            autoComplete="off"
            type={showPassword ? "text" : "password"}
            id="Password"
            className="block px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            onChange={(e) =>
              setFormValues({ ...formValues, password: e.target.value })
            }
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 px-3 flex items-center focus:outline-none"
          >
            {showPassword ? (
              <svg
                className="w-6 h-6 text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M21 12c0 1.2-4 6-9 6s-9-4.8-9-6c0-1.2 4-6 9-6s9 4.8 9 6Z"
                />
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 14c-.5-.6-.9-1.3-1-2 0-1 4-6 9-6m7.6 3.8A5 5 0 0 1 21 12c0 1-3 6-9 6h-1m-6 1L19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            )}
          </button>
          <label
            htmlFor="Password"
            className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Password
          </label>
          <div className="relative">
            <div className="h-[15px] absolute top-0 left-0">
              {errorType === 401 && (
                <p className="text-red-500 text-sm">{errorState}</p>
              )}
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded focus:outline-none hover:bg-blue-600 mt-10"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;

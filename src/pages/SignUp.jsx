import React, { useState } from "react";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-[100%] h-[100%] bg-slate-800">
      <div className="w-[500px] max-w-[90%] mx-auto mt-8 p-8 bg-white rounded shadow-md border-gray-700 border-2">
        <h2 className="text-4xl font-bold mb-4 text-center underline">
          Sign Up
        </h2>
        <form
        //   onSubmit={handleSubmit(MyRegister)}
        >
          <div className="relative z-0 mb-16">
            <input
              type="email"
              id="Email"
              className="block px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              // onChange={(e) =>
              //   setFormValues({ ...formValues, email: e.target.value })
              // }
              // {...register("email")}
            />
            <label
              htmlFor="Email"
              className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Email
            </label>
            <span className="text-red-500 text-sm mt-1">
              {/* {errors?.email?.message} */}
            </span>
          </div>
          <div className="relative z-0 mb-10">
            <input
              type={showPassword ? "text" : "password"}
              id="Password"
              className="block px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              // onChange={(e) =>
              //   setFormValues({ ...formValues, password: e.target.value })
              // }
              // {...register("password")}
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
            <span className="text-red-500 text-sm mt-1 h-4">
              {/* {errors?.password?.message} */}
            </span>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded focus:outline-none hover:bg-blue-600"
          >
            Sign Up
          </button>
          {/* {errorState && (
            <span className="mt-4 text-center text-red-600">
            {errorState}
            </span>
        )} */}
        </form>
      </div>
    </div>
  );
};

export default SignUp;

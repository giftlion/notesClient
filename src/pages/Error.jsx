import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div
      className="w-full h-[90vh] bg-gray-600 pt-20 text-center"
      // style={{ height: "90vh", paddingTop: "20px" }}
    >
      <h1
        className="text-9xl text-white text-center font-semibold pb-5"
        // style={{ fontSize: "9rem", paddingBottom: "5px" }}
      >
        404
      </h1>
      <p
        className="text-4xl text-white text-center pb-16"
        // style={{ fontSize: "4rem", paddingBottom: "4rem" }}
      >
        Page Not Found
      </p>
      <Link to="/" className="bg-blue-500 text-white rounded py-3 px-5">
        Go home
      </Link>
    </div>
  );
};

export default Error;

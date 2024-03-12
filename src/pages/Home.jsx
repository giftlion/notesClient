import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Blockquote } from "flowbite-react";

const Home = () => {
  return (
    <>
      <div className="text-center pt-[100px] h-[90vh] bg-gray-700 text-white border border-b-2 border-gray-700">
        <h1 className="sm:text-7xl text-5xl font-semibold">
          Welcome To <span className="font-mono text-blue-500">Notes.js</span>
        </h1>
        <p className="text-3xl p-10 md:w-[50%] w-[90%] mx-auto font-mono">
          here you can write notes and read them later thats the way you can
          manage your life
        </p>
        <Link to="/notes" className="bg-blue-500 text-white rounded py-3 px-5">
          Go To Notes
        </Link>
      </div>
      <div className="h-[100vh] w-full  mx-auto flex justify-center items-center bg-gray-600">
        <figure className="text-center max-w-[80%]">
          <svg
            className="mx-auto mb-3 h-10 w-10 text-gray-400 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <Blockquote>
            <p className="text-2xl font-medium italic text-white">
              Writing is a powerful tool for self-discovery and growth. Through
              the act of putting pen to paper, we not only capture our thoughts
              but also untangle the complexities of our minds, paving the way
              for clarity and insight.
            </p>
          </Blockquote>
          <figcaption className="mt-6 flex items-center justify-center space-x-3">
            <Avatar
              rounded
              size="xs"
              img="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1024px-ChatGPT_logo.svg.png"
              alt="profile picture"
            />
            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <cite className="pr-3 font-medium text-white">Chat GPT</cite>
              <cite className="pl-3 text-sm text-gray-400">
                AI Language Model
              </cite>
            </div>
          </figcaption>
        </figure>
      </div>
    </>
  );
};

export default Home;

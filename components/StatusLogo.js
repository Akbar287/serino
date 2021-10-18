import React from "react";

function StatusLogo({status}) {
  if(parseInt(status) == 1) {
    return (
      <div className="my-3 flex">
        <div className="border-b border-gray-300 absolute w-44 z-10 ml-2 mt-6"></div>
        <div className="z-20 rounded-full w-11 h-11 bg-blue-500 relative flex mx-1 justify-center items-center">
          <div className="rounded-full w-7 h-7 absolute flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        <div className="z-20 rounded-full w-11 h-11 border border-gray-300 relative flex mx-1 justify-center items-center">
          <div className="rounded-full w-4 h-4 bg-gray-300 absolute flex justify-center items-center"></div>
        </div>
        <div className="z-20 rounded-full w-11 h-11 border border-gray-300 relative flex mx-1 justify-center items-center">
          <div className="rounded-full w-4 h-4 bg-gray-300 absolute flex justify-center items-center"></div>
        </div>
        <div className="z-20 rounded-full w-11 h-11 border border-gray-300 relative flex mx-1 justify-center items-center">
          <div className="rounded-full w-4 h-4 bg-gray-300 absolute flex justify-center items-center"></div>
        </div>
      </div>
    );
  }
  if(parseInt(status) == 2) {
    return (
      <div className="my-3 flex">
        <div className="border-b border-gray-300 absolute w-44 z-10 ml-3 mt-6"></div>
        <div className="z-20 rounded-full w-11 h-11 border border-gray-300 relative flex mx-1 justify-center items-center">
          <div className="rounded-full w-7 h-7 bg-gray-300 absolute flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        <div className="z-20 rounded-full w-11 h-11 bg-blue-500 relative flex mx-1 justify-center items-center">
          <div className="rounded-full w-7 h-7 absolute flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        <div className="z-20 rounded-full w-11 h-11 border border-gray-300 relative flex mx-1 justify-center items-center">
          <div className="rounded-full w-4 h-4 bg-gray-300 absolute flex justify-center items-center"></div>
        </div>
        <div className="z-20 rounded-full w-11 h-11 border border-gray-300 relative flex mx-1 justify-center items-center">
          <div className="rounded-full w-4 h-4 bg-gray-300 absolute flex justify-center items-center"></div>
        </div>
      </div>
    );
  }
  if(parseInt(status) == 3) {
    return (
      <div className="my-3 flex">
        <div className="border-b border-gray-300 absolute w-44 z-10 ml-3 mt-6"></div>
        <div className="z-20 rounded-full w-11 h-11 border border-gray-300 relative flex mx-1 justify-center items-center">
          <div className="rounded-full w-7 h-7 bg-gray-300 absolute flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        <div className="z-20 rounded-full w-11 h-11 border border-gray-300 relative flex mx-1 justify-center items-center">
          <div className="rounded-full w-7 h-7 bg-gray-300 absolute flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        <div className="z-20 rounded-full w-11 h-11 bg-blue-500 relative flex mx-1 justify-center items-center">
          <div className="rounded-full w-7 h-7 absolute flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        <div className="z-20 rounded-full w-11 h-11 border border-gray-300 relative flex mx-1 justify-center items-center">
          <div className="rounded-full w-4 h-4 bg-gray-300 absolute flex justify-center items-center"></div>
        </div>
      </div>
    );
  }
  if(parseInt(status) == 4) {
    return (
      <div className="my-3 flex">
        <div className="border-b border-gray-300 absolute w-44 z-10 ml-3 mt-6"></div>
        <div className="z-20 rounded-full w-11 h-11 border border-gray-300 relative flex mx-1 justify-center items-center">
          <div className="rounded-full w-7 h-7 bg-gray-300 absolute flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        <div className="z-20 rounded-full w-11 h-11 border border-gray-300 relative flex mx-1 justify-center items-center">
          <div className="rounded-full w-7 h-7 bg-gray-300 absolute flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        <div className="z-20 rounded-full w-11 h-11 border border-gray-300 relative flex mx-1 justify-center items-center">
          <div className="rounded-full w-7 h-7 bg-gray-300 absolute flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        <div className="z-20 rounded-full w-11 h-11 bg-blue-500 relative flex mx-1 justify-center items-center">
          <div className="rounded-full w-7 h-7 absolute flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  else {
    return ''
  }
}

export default StatusLogo;

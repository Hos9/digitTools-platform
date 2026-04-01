import React from "react";
import account from "../../assets/user.png";
import cp from "../../assets/package.png";
import sc from "../../assets/rocket.png";

const Steps = () => {
  return (
    <div className="w-11/12 mx-auto py-30 bg-base-300">
      <div className="text-center">
        <h2 className="text-4xl font-bold py-2">Get Started in 3 Steps</h2>
        <p className="text-gray-400 pb-10">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      <div className="w-10/12 mx-auto grid grid-cols-3 gap-10">
        <div className="bg-white p-4 rounded-2xl relative">
          <div className="">
            <p className="bg-violet-600 text-white rounded-full size-7 items-center content-center text-center absolute right-5 text-xs">
              01
            </p>
          </div>
          <div className="py-22 px-6 text-center space-y-4">
            <img
              className="mx-auto bg-violet-200 rounded-full size-15 p-3"
              src={account}
              alt=""
            />
            <h3 className="text-xl font-bold">Create Account</h3>
            <p className="text-gray-400">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl relative">
          <div className="">
            <p className="bg-violet-600 text-white rounded-full size-7 items-center content-center text-center absolute right-5 text-xs">
              02
            </p>
          </div>
          <div className="py-22 px-6 text-center space-y-4">
            <img
              className="mx-auto bg-violet-200 rounded-full size-15 p-3"
              src={cp}
              alt=""
            />
            <h3 className="text-xl font-bold">Choose Products</h3>
            <p className="text-gray-400">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl relative">
          <div className="">
            <p className="bg-violet-600 text-white rounded-full size-7 items-center content-center text-center absolute right-5 text-xs">
              03
            </p>
          </div>
          <div className="py-22 px-6 text-center space-y-4">
            <img
              className="mx-auto bg-violet-200 rounded-full size-15 p-3"
              src={sc}
              alt=""
            />
            <h3 className="text-xl font-bold">Start Creating</h3>
            <p className="text-gray-400">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;

import React from "react";
import banner from "../../assets/banner.png";
import { FaRegDotCircle } from "react-icons/fa";
import { CiPlay1 } from "react-icons/ci";

const Hero = () => {
  return (
    <div className="mx-auto w-11/12 py-20">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={banner} className="w-11/12 rounded-lg shadow-2xl" />
          <div>
            <h6
              role="alert"
              className="alert alert-info alert-soft rounded-4xl p-2 mb-3 w-70 shadow-sm"
            >
              <span className="text-violet-600 opacity-100">
                <span className="flex gap-2 items-center w-full">
                  <FaRegDotCircle />
                  <p>New: AI-Powered Tools Available</p>
                </span>
              </span>
            </h6>
            <h1 className="text-5xl font-bold">
              Supercharge Your <br />
              Digital Workflow
            </h1>
            <p className="py-6">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today. Explore Products
            </p>
            <div className="flex gap-3">
              <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-4xl ">
                Get Started
              </button>
              <button className="btn btn-outline text-violet-600  rounded-4xl ">
                <CiPlay1 /> Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

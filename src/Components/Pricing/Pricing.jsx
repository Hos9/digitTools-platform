import React from "react";
import { FaCheck } from "react-icons/fa";

const Pricing = () => {
  return (
    <div className="w-11/12 mx-auto ">
      <div className="py-30 bg-whi  ">
        <div className="text-center">
          <h2 className="text-4xl font-bold py-2">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-400 pb-10">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="border-2 border-gray-300 rounded-4xl p-5">
            <h3 className="font-bold text-2xl">Starter</h3>
            <p className="">Perfect for getting started</p>
            <h2 className="py-6">
              <span className="font-bold text-2xl">$0</span>/month
            </h2>
            <p className="flex gap-2 items-center">
              {" "}
              <span className="text-green-500">
                <FaCheck />
              </span>
              Access to 10 free tools
            </p>
            <p className="flex gap-2 items-center">
              {" "}
              <span className="text-green-500">
                <FaCheck />
              </span>
              Basic templates
            </p>
            <p className="flex gap-2 items-center">
              <span className="text-green-500">
                <FaCheck />
              </span>
              Community support
            </p>
            <p className="flex gap-2 items-center">
              <span className="text-green-500">
                <FaCheck />
              </span>
              1 project per month
            </p>
            <button className="mt-5 btn btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-4xl text-white">
              Get Started Free
            </button>
          </div>

          <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white border-2 border-gray-300 rounded-4xl p-5">
            <h3 className="font-bold text-2xl">Pro</h3>
            <p className="">Best for professionals</p>
            <h2 className="py-6">
              <span className="font-bold text-2xl">$29</span>/month
            </h2>
            <p className="flex gap-2 items-center">
              <span className="text-white">
                <FaCheck />
              </span>
              Access to all premium tools
            </p>
            <p className="flex gap-2 items-center">
              {" "}
              <span className="text-white">
                <FaCheck />
              </span>
              Unlimited templates
            </p>
            <p className="flex gap-2 items-center">
              <span className="text-white">
                <FaCheck />
              </span>
              Priority support
            </p>
            <p className="flex gap-2 items-center">
              <span className="text-white">
                <FaCheck />
              </span>
              Unlimited projects
            </p>
            <p className="flex gap-2 items-center">
              <span className="text-white">
                <FaCheck />
              </span>
              Cloud sync
            </p>
            <p className="flex gap-2 items-center">
              <span className="text-white">
                <FaCheck />
              </span>
              Advanced analytics
            </p>
            <button className="mt-5 btn btn-block bg-white rounded-4xl text-violet">
              Get Started Free
            </button>
          </div>

          <div className="border-2 border-gray-300 rounded-4xl p-5">
            <h3 className="font-bold text-2xl">Enterprise</h3>
            <p className="">For teams and businesses</p>
            <h2 className="py-6">
              <span className="font-bold text-2xl">$99</span>/month
            </h2>
            <p className="flex gap-2 items-center">
              <span className="text-green-500">
                <FaCheck />
              </span>
              Everything in Pro
            </p>
            <p className="flex gap-2 items-center">
              <span className="text-green-500">
                <FaCheck />
              </span>
              Team collaboration
            </p>
            <p className="flex gap-2 items-center">
              <span className="text-green-500">
                <FaCheck />
              </span>
              Custom integrations
            </p>
            <p className="flex gap-2 items-center">
              <span className="text-green-500">
                <FaCheck />
              </span>
              Dedicated support
            </p>
            <p className="flex gap-2 items-center">
              <span className="text-green-500">
                <FaCheck />
              </span>
              SLA guarantee
            </p>
            <p className="flex gap-2 items-center">
              <span className="text-green-500">
                <FaCheck />
              </span>
              Custom branding
            </p>
            <button className="mt-5 btn btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-4xl text-white">
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

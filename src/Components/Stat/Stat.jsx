import React from "react";

const Stat = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-16 text-white mb-30">
      <div className="w-11/12 mx-auto grid grid-cols-3">
        <div className="text-center">
          <h2 className="font-extrabold text-6xl mb-3">50k+</h2>
          <p className="font-medium text-2xl">Active Users</p>
        </div>
        {/* <div className="divider divider-horizontal"></div> */}
        <div className="text-center border-l-2 border-r-2">
          <h2 className="font-extrabold text-6xl mb-3">200+</h2>
          <p className="font-medium text-2xl">Premium Tools</p>
        </div>
        {/* <div className="divider divider-horizontal"></div> */}
        <div className="text-center">
          <h2 className="font-extrabold text-6xl mb-3">4.9</h2>
          <p className="font-medium text-2xl">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Stat;

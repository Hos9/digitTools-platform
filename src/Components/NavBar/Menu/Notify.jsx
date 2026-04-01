import React from "react";
import { toast, ToastContainer } from "react-toastify";

const Notify = () => {
  const notify = () => toast("Wow so easy!");
  return (
    <div className="w-11/12 mx-auto">
      <button onClick={notify} className="btn">
        Notify!
      </button>
      <ToastContainer />
    </div>
  );
};

export default Notify;

import React from "react";
import { FaCheck } from "react-icons/fa";

const Card = ({ product }) => {
  return (
    <div className="">
      <div className="card w-11/12 mx-auto bg-base-100 shadow-sm space-y-4 border-2 border-gray-100">
        <div className="card-body relative">
          <span className="badge badge-xs badge-warning absolute right-5 top-2">
            {product.tag}
          </span>
          <div className="">
            <img
              src={product.icon}
              className="mb-4 border-2 rounded-full p-3 border-gray-300"
              alt=""
            />
            <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
            <p className="text-[#627382] mb-4">{product.description}</p>
            <span className="text-lg">
              {" "}
              <span className="font-bold text-2xl">${product.price}</span>/Mo
            </span>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            <li className="flex gap-2 items-center">
              <FaCheck />
              <span>{product.features[0]}</span>
            </li>
            <li className="flex gap-2 items-center">
              <FaCheck />
              <span>{product.features[1]}</span>
            </li>
            <li className="flex gap-2 items-center">
              <FaCheck />
              <span>{product.features[2]}</span>
            </li>
          </ul>
          <div className="mt-6">
            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] btn-block rounded-4xl text-white">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import SelectedProducts from "../AvailableProducts/Products/SelectedProducts";

const NavBar = ({ selectedProducts }) => {
  return (
    <div className="mx-auto w-11/12 py-5 items-center">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Products</a>
              </li>
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </div>
          <a className="text-5xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold leading-16">
            DigiTools
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Products</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-3">
          <div className="indicator">
            {selectedProducts.length > 0 && (
              <span className="indicator-item badge badge-secondary">
                {selectedProducts.length}
              </span>
            )}

            <button className="btn btn-ghost">
              <FiShoppingCart />
            </button>
          </div>
          <p className="btn btn-ghost">Login</p>
          <a className="btn btn-primary rounded-4xl bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

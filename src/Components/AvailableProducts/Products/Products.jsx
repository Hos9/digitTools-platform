import React, { use, useState } from "react";
import AvailableProducts from "../AvailableProducts";
import SelectedProducts from "./SelectedProducts";

const Products = ({ productsPromise }) => {
  const products = use(productsPromise);

  const [selectedType, setSelectedType] = useState("products");
  console.log(selectedType, "selectedType");

  return (
    <div>
      <div className="text-center mb-10">
        <h1 className="font-extrabold text-5xl mb-4">Premium Digital Tools</h1>
        <p className="mb-4 text-[#627382]">
          Choose from our curated collection of premium digital products
          designed <br />
          to boost your productivity and creativity.
        </p>
        <div className="btn rounded-4xl bg-base-100">
          <button
            onClick={() => setSelectedType("products")}
            className={`btn rounded-4xl shadow-xl ${selectedType === "products" ? "text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : ""}`}
          >
            Products
          </button>
          <button
            onClick={() => setSelectedType("cart")}
            className={`btn rounded-4xl shadow-xl ${selectedType === "cart" ? "text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : ""}`}
          >
            Cart (2)
          </button>
        </div>
      </div>

      {selectedType === "products" ? (
        <AvailableProducts products={products} />
      ) : (
        <SelectedProducts />
      )}
    </div>
  );
};

export default Products;

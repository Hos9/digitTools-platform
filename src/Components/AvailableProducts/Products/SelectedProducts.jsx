import React from "react";
import Products from "./Products";
import Card from "../../Cards/Card";
import { RiDeleteBin6Fill } from "react-icons/ri";

const SelectedProducts = ({ selectedProducts, setSelectedProducts }) => {
  console.log(selectedProducts, "selectedProducts");

  const handleDeleteSelectedProducts = (product) => {
    console.log(selectedProducts, "selectedProducts");

    const filteredProducts = selectedProducts.filter(
      (selectedProduct) => selectedProduct.name != product.name,
    );
    console.log(filteredProducts, "filteredProducts");
    setSelectedProducts(filteredProducts);
  };

  const totalPrice = selectedProducts.reduce(
    (total, product) => total + Number(product.price),
    0,
  );

  return (
    <div className="w-10/12 lg:w-8/12 mx-auto mb-10">
      {selectedProducts.map((product, ind) => {
        return (
          <div className="" key={ind}>
            <div className="flex border-2 border-gray-300 p-4 rounded-2xl bg-base-200 items-center justify-between shadow-md mb-4 hover:scale-y-110">
              <div className="flex gap-2 items-center ">
                <img
                  src={product.icon}
                  className="border-2 rounded-full p-3 border-gray-300 size-15"
                  alt=""
                />
                <div>
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <p>${product.price}</p>
                </div>
              </div>
              <div>
                <button
                  onClick={() => handleDeleteSelectedProducts(product)}
                  className="btn text-red-500"
                >
                  <RiDeleteBin6Fill />
                </button>
              </div>
            </div>
          </div>
        );
      })}

      <div className="border-t-2 border-gray-300 pt-4 mt-6 flex justify-between items-center">
        <h2 className="text-xl font-bold">Total:</h2>
        <h2 className="text-xl font-bold text-green-600">
          ${totalPrice.toFixed(2)}
        </h2>
      </div>

      <div className="mt-4 text-right">
        <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] btn-block rounded-4xl text-white px-6">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default SelectedProducts;

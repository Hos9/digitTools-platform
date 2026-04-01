import React from "react";
import Products from "./Products";
import Card from "../../Cards/Card";

const SelectedProducts = ({ selectedProducts }) => {
  console.log(selectedProducts, "selectedProducts");

  return <div className="mb-10">Selected Products</div>;
};

export default SelectedProducts;

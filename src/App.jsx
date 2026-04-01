import { Suspense, useState } from "react";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Notify from "./Components/NavBar/Menu/Notify";
import NavBar from "./Components/NavBar/NavBar";
import Stat from "./Components/Stat/Stat";
import Products from "./Components/AvailableProducts/Products/Products";
import SelectedProducts from "./Components/AvailableProducts/Products/SelectedProducts";
import Steps from "./Components/Steps/Steps";
import Pricing from "./Components/Pricing/pricing";

const fetchProduct = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const productsPromise = fetchProduct();

  const [selectedProducts, setSelectedProducts] = useState([]);

  return (
    <>
      <NavBar
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
      />
      <Hero />
      <Stat />
      <Suspense
        fallback={<span className="loading loading-bars loading-xl"></span>}
      >
        <Products productsPromise={productsPromise} />
      </Suspense>
      <Steps />
      <Pricing />
    </>
  );
}

export default App;

import { Suspense } from "react";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Notify from "./Components/NavBar/Menu/Notify";
import NavBar from "./Components/NavBar/NavBar";
import Stat from "./Components/Stat/Stat";
import Products from "./Components/AvailableProducts/Products/Products";

const fetchProduct = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const productsPromise = fetchProduct();

  return (
    <>
      <NavBar />
      <Hero />
      <Notify />
      <Stat />
      <Suspense
        fallback={<span className="loading loading-bars loading-xl"></span>}
      >
        <Products productsPromise={productsPromise} />
      </Suspense>
    </>
  );
}

export default App;

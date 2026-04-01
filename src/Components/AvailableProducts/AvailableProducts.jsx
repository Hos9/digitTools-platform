import Card from "../Cards/Card";

const AvailableProducts = ({
  products,
  selectedProducts,
  setSelectedProducts,
}) => {
  return (
    <div>
      <div className="items-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, ind) => {
          console.log(product, "products");
          return (
            <Card
              key={ind}
              product={product}
              selectedProducts={selectedProducts}
              setSelectedProducts={setSelectedProducts}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AvailableProducts;

import useFetch from "../hooks/useFetch";
import Product from "./Product";

function Products() {
  const { products, isPending, isError } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  if (isPending) {
    return (
      <div className="fixed inset-0 bg-zinc-200 flex justify-center items-center">
        <h2 className="text-lg font-medium">Loading . . .</h2>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="fixed inset-0 bg-zinc-200 flex justify-center items-center">
        <h2 className="text-lg font-medium">{isError}</h2>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6">
      {products &&
        products.map((product) => <Product key={product.id} {...product} />)}
    </div>
  );
}

export default Products;

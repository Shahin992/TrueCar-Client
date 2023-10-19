import { useLoaderData } from "react-router-dom";
import ProductCart from "./ProductCard/ProductCart";
import { useState } from "react";

const MyCart = () => {
  const cartProduct = useLoaderData();
  console.log(cartProduct);
  const [products,setProducts] =useState(cartProduct)

  return (
    <div className="max-w-7xl p-3 mx-auto mb-10">
      <h3 className="text-5xl font-extrabold text-center mb-10 ">My Cart</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {
            products.map((product) => <ProductCart product={product}
            products={products}
            setProducts={setProducts}
            ></ProductCart>)
        }
      </div>
    </div>
  );
};

export default MyCart;

import React, { useEffect, useState } from "react";
import { ProductCard } from "../ProductCard/ProductCard";
export default function ProductBody({ setCart, cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <div className="container py-4">
        <h1>Fashion Products</h1>
        <div className="row my-3 g-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              cart={cart}
              setCart={setCart}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

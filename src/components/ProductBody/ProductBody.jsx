import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { ProductCard } from "../ProductCard/ProductCard";
export default function ProductBody({ setCart, cart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(true);
      });
  }, []);

  return (
    <div>
      <div className="container py-4">
        <div className="row my-3 g-4">
          {loading ? (
            products?.map((product) => (
              <ProductCard
                key={product.id}
                cart={cart}
                setCart={setCart}
                product={product}
              />
            ))
          ) : (
            <div className="position-absolute w-75 my-5 py-5 text-center">
              <Spinner animation="border" />
            </div>
          )}
          {}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import ProductBody from "../ProductBody/ProductBody";

export default function Home({ setCart, cart }) {
  return (
    <>
      <ProductBody setCart={setCart} cart={cart} />
    </>
  );
}

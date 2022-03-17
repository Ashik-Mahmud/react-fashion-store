import React from "react";
import { AiFillStar } from "react-icons/ai";
import DetailsModal from "../Modal/DetailsModal";

export const ProductCard = ({ product, setCart, cart }) => {
  const { title, image, price, rating } = product;

  let stars = [];
  for (let i = 1; i < rating.rate; i++) {
    stars.push(i);
  }

  return (
    <div className="col-lg-3">
      <div className="card border-0 shadow p-3">
        <div className="card-header border-0 text-center bg-light p-3">
          <img width={"200"} height={"200"} src={image} alt={title} />
        </div>
        <div className="card-body">
          <h5 className="card-title">
            {title.length > 40 ? title.slice(0, 40) + "..." : title}
          </h5>

          <div className="my-3 d-flex align-items-center justify-content-between">
            <p className="m-0 text-success fw-bold">
              <span>{price}$</span>
            </p>
            <span className="text-danger fw-bold d-flex align-items-center">
              {stars.map((number) => (
                <AiFillStar key={number} />
              ))}
              {rating.rate}
              <span className="text-dark small text-muted ms-2">
                ({rating.count}){" "}
              </span>
            </span>
          </div>
          <div className="d-flex gap-2 mt-2">
            <button
              onClick={(e) => {
                e.target.style = "opacity: 0.6; pointer-events:none;";
                setCart(cart + 1);
              }}
              className="btn btn-sm btn-primary rounded-0"
            >
              Add to Cart
            </button>
            <DetailsModal product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

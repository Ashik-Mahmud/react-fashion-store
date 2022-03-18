import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import DetailsModal from "../Modal/DetailsModal";
export default function Carts() {
  const [carts, setCarts] = useState([]);
  const [deleteId, setDeleteId] = useState();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => response.json())
      .then((data) => {
        setCarts(data);
      });
  }, []);

  const items = JSON.parse(localStorage.getItem("carts"));
  const filteredCarts = carts.filter((cart) => items.includes(cart.id));
  const deletedItem = filteredCarts.filter((cart) => cart.id !== deleteId);
  const deletedItemId = deletedItem.map((item) => item.id);

  if (deleteId) {
    localStorage.setItem("carts", JSON.stringify(deletedItemId));
  }

  return (
    <>
      <div className="container py-5">
        <h3>Carts item</h3>
        {items.length !== 0 ? (
          <div className="row mt-4 g-4">
            {filteredCarts.map((cart) => (
              <CartsCard setDeleteId={setDeleteId} key={cart.id} cart={cart} />
            ))}
          </div>
        ) : (
          <h4 className="my-5 text-muted">No Carts Found.</h4>
        )}
      </div>
    </>
  );
}

const CartsCard = ({ cart, setDeleteId }) => {
  const { title, id, image, price, rating } = cart;
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
                ({rating.count})
              </span>
            </span>
          </div>
          <div className="d-flex gap-2 mt-2">
            <button
              onClick={() => setDeleteId(id)}
              className="btn btn-danger btn-sm"
            >
              Delete Item
            </button>
            <DetailsModal product={cart} />
          </div>
        </div>
      </div>
    </div>
  );
};

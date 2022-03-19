import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import DetailsModal from "../Modal/DetailsModal";
export default function Carts({ setCart }) {
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

  const totalCartsMoney = filteredCarts.reduce(
    (acc, item) => acc + item.price,
    0
  );

  setCart(items.length);
  if (deleteId) {
    localStorage.setItem("carts", JSON.stringify(deletedItemId));
  }

  return (
    <>
      <div className="container py-5">
        <h3>Carts item</h3>
        <div className="row align-items-start">
          <div className="col-lg-9">
            {items.length !== 0 ? (
              <div className="row mt-4 g-4">
                {filteredCarts.map((cart) => (
                  <CartsCard
                    setDeleteId={setDeleteId}
                    key={cart.id}
                    cart={cart}
                  />
                ))}
              </div>
            ) : (
              <h4 className="my-5 text-muted">No Carts Found.</h4>
            )}
          </div>
          <div className="col-lg-3 shadow p-4  mt-5">
            <div className="carts-estimate my-4">
              <h5>Total Carts Estimate</h5>
              <hr />
              <table className="table mt-4">
                <tbody>
                  <tr>
                    <td>Total Products</td>
                    <th>{items.length}</th>
                  </tr>
                  <tr>
                    <td>Carts Money</td>
                    <th>{totalCartsMoney} $</th>
                  </tr>
                  <tr>
                    <td>Tax 5%</td>
                    <th>{((totalCartsMoney * 5) / 100).toFixed(2)} $</th>
                  </tr>
                  <tr>
                    <td>
                      <b>Total Money</b>
                    </td>
                    <th>
                      {((totalCartsMoney * 5) / 100 + totalCartsMoney).toFixed(
                        2
                      )}
                      $
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
            <button className="mt-5 btn btn-primary  w-100 d-block ">
              Check Out
            </button>
          </div>
        </div>
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
    <div className="col-lg-10">
      <div className="card rounded-3 border-0 shadow p-3 flex-row align-items-center justify-content-between">
        <div className="card-header border-0 text-center bg-light p-3">
          <img width={"80"} height={"80"} src={image} alt={title} />
        </div>
        <div className="card-body px-5">
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
        </div>
        <div className="d-flex gap-2 mt-2">
          <DetailsModal product={cart} />
          <button
            onClick={() => setDeleteId(id)}
            className="btn btn-danger btn-sm"
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import { IoIosCloseCircle } from "react-icons/io";
import DetailsModal from "../Modal/DetailsModal";
import {
  deletedFromLocalStorage,
  handleDecreaseCart,
  handleIncreaseCart,
} from "./HandleCartsQty";
import { showQuantity, totalCartsMoneyFromStorage } from "./showData";
export default function Carts({ setCart }) {
  const [carts, setCarts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [isCoupon, setIsCoupon] = useState(false);
  const [totalMoney, setTotalMoney] = useState(0);

  const realTotalCartMoney = totalMoney
    ? totalMoney
    : totalCartsMoneyFromStorage();

  const realTax = (realTotalCartMoney * 5) / 100;

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => response.json())
      .then((data) => {
        setCarts(data);
        setLoading(true);
      });
  }, []);

  const items = JSON.parse(localStorage.getItem("carts"));

  const storageCarts = items?.map((item) => item.cartId);
  const filteredCarts = carts.filter((cart) => storageCarts?.includes(cart.id));

  setCart(items?.length);

  /* handle coupon  */
  const handleCoupon = (e) => {
    const couponCode = "honest";
    if (coupon === couponCode) {
      e.target.classList.remove("btn-info");
      e.target.classList.add("disabled", "btn-success");
      e.target.innerText = "Applied";
      setIsCoupon(true);
    } else {
      alert(
        `-${coupon}- name coupon is not available. please contact with them`
      );
    }
  };
  console.log(items);

  return (
    <>
      <div className="container py-5">
        <h3>Carts item</h3>
        <div className="row align-items-start">
          <div className="col-lg-8">
            {loading ? (
              items?.length !== 0 ? (
                <div className="row mt-4 gy-4">
                  {filteredCarts.map((cart) => (
                    <CartsCard
                      key={cart.id}
                      cart={cart}
                      setTotalMoney={setTotalMoney}
                    />
                  ))}
                </div>
              ) : (
                <h4 className="my-5 text-muted">No Carts Found.</h4>
              )
            ) : (
              <div className=" my-5 py-5 text-center">
                <Spinner animation="border" />
              </div>
            )}
          </div>
          {items.length > 0 && (
            <div className="col-lg-4 shadow p-4  mt-5">
              <div className="carts-estimate my-4">
                <h5>Total Carts Estimate</h5>
                <hr />
                <table className="table mt-4">
                  <tbody>
                    <tr>
                      <td style={{ width: "50%" }}>Total Products</td>
                      <th>{items?.length ? items?.length : 0}</th>
                    </tr>
                    <tr>
                      <td>Carts Money</td>
                      <th>
                        {realTotalCartMoney ? realTotalCartMoney : "000"} $
                      </th>
                    </tr>
                    <tr>
                      <td>Tax 5%</td>
                      <th>{realTax ? realTax.toFixed(2) : "000"} $</th>
                    </tr>
                    <tr>
                      <td>
                        <b>Total Money</b>
                      </td>
                      <th>
                        {isCoupon
                          ? realTotalCartMoney
                            ? (
                                parseFloat(realTotalCartMoney) +
                                parseFloat(realTax) -
                                50
                              ).toFixed(2)
                            : "000"
                          : realTotalCartMoney
                          ? (
                              parseFloat(realTotalCartMoney) +
                              parseFloat(realTax)
                            ).toFixed(2)
                          : "000"}
                        $
                      </th>
                    </tr>
                    <tr>
                      <td title="Save 50$ use Coupon">
                        Coupon-
                        <span
                          className={`${
                            isCoupon ? "bg-success " : "bg-info "
                          }text-white px-1 rounded-3`}
                        >
                          honest
                        </span>{" "}
                      </td>
                      <th className="input-group " title="Save 50$ use Coupon">
                        <input
                          type="text"
                          placeholder="Coupon Code"
                          className="form-control form-control-sm"
                          value={coupon}
                          onChange={(e) => setCoupon(e.target.value)}
                        />
                        <button
                          onClick={handleCoupon}
                          className="btn btn-info btn-sm"
                        >
                          Apply
                        </button>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button className="disabled mt-5 btn btn-primary  w-100 d-block ">
                Check Out
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

const CartsCard = ({ cart, setTotalMoney }) => {
  const { title, id, image, price, rating } = cart;
  const [cartsQty, setCartsQty] = useState(1);
  let stars = [];
  for (let i = 1; i < rating.rate; i++) {
    stars.push(i);
  }

  return (
    <div className="col-lg-10">
      <div className="card rounded-3 border-0 shadow-sm p-3 flex-row align-items-center justify-content-between">
        <div className="card-header border-0 text-center bg-light p-3">
          <img width={"50"} height={"50"} src={image} alt={title} />
        </div>
        <div className="card-body px-5 py-0 pt-2">
          <h5 className="card-title">
            {title.length > 40 ? title.slice(0, 40) + "..." : title}
          </h5>

          <div className="my-3 d-flex align-items-center justify-content-between">
            <p className="m-0 text-success fw-bold">
              <span>{showQuantity(id) * price}$</span>
            </p>
            <div className="counter d-flex align-items-center mx-4">
              <button
                onClick={() => {
                  handleDecreaseCart(setCartsQty, cartsQty, id, price);
                  setTotalMoney(totalCartsMoneyFromStorage());
                }}
                className="btn btn-light"
              >
                -
              </button>
              <input
                type="number"
                className="w-50 form-control bg-white rounded-0"
                readOnly
                value={showQuantity(id)}
              />
              <button
                onClick={() => {
                  handleIncreaseCart(setCartsQty, cartsQty, id, price);
                  setTotalMoney(totalCartsMoneyFromStorage());
                }}
                className="btn btn-light"
              >
                +
              </button>
            </div>
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
            onClick={(e) => deletedFromLocalStorage(e, id)}
            className="btn btn-danger btn-sm"
          >
            <IoIosCloseCircle />
          </button>
        </div>
      </div>
    </div>
  );
};

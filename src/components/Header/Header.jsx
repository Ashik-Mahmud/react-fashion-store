import React from "react";
import { BsCart3 } from "react-icons/bs";
import { FaOpencart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const NavMenu = ({ path, name }) => {
  return (
    <li className="nav-item  d-none d-sm-block d-md-block d-lg-block">
      <NavLink to={path} className="nav-link">
        {name}
      </NavLink>
    </li>
  );
};

export default function Header({ cart }) {
  const getItem = JSON.parse(localStorage.getItem("carts"));

  return (
    <>
      <header id="header">
        <nav className="navbar py-4 bg-light navbar-expand-lg navbar-light">
          <div className="container">
            <div className="logo fw-bold h3 ">
              <FaOpencart /> Fas<span className="text-danger">hion</span>
            </div>
            <div className="primary-menus">
              <ul className="navbar-nav">
                {["Home", "Mobile", "Password"].map((item, index) => (
                  <NavMenu
                    key={item + index}
                    path={`${
                      item.toLowerCase() === "home"
                        ? "/"
                        : "/" + item.toLowerCase()
                    }`}
                    name={item}
                  />
                ))}
                <li className="nav-item">
                  <NavLink to={"/carts"} className="nav-link">
                    <BsCart3 className="h6" />{" "}
                    <sup className="badge bg-dark text-white">
                      {cart ? cart : getItem?.length}
                    </sup>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

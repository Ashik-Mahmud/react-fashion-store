import React from "react";
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
  return (
    <>
      <header id="header">
        <nav className="navbar py-4 bg-light navbar-expand-lg navbar-light">
          <div className="container">
            <div className="logo fw-bold h3 text-uppercase">
              Fash<span className="text-danger">ion</span>
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
                    Cart <sup className="badge bg-primary">{cart}</sup>
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

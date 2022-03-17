import React from "react";
import { NavLink } from "react-router-dom";

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
                <li className="nav-item  d-none d-sm-block d-md-block d-lg-block">
                  <NavLink to="/" className="nav-link">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item  d-none d-sm-block d-md-block d-lg-block">
                  <NavLink to="/products" className="nav-link">
                    Products
                  </NavLink>
                </li>
                <li className="nav-item  d-none d-sm-block d-md-block d-lg-block">
                  <NavLink to="/mobile" className="nav-link">
                    Mobile
                  </NavLink>
                </li>
                <li className="nav-item">
                  <span className="nav-link">
                    Cart <sup className="badge bg-primary">{cart}</sup>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

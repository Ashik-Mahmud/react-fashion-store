import React from "react";

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
                  <a href="/" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item  d-none d-sm-block d-md-block d-lg-block">
                  <a href="/" className="nav-link">
                    Products
                  </a>
                </li>
                <li className="nav-item  d-none d-sm-block d-md-block d-lg-block">
                  <a href="/" className="nav-link">
                    Contact
                  </a>
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

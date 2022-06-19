import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

import logoL from "../../../images/logoL.png";

const NavBar = () => {
  return (
    <div className="header fixed-top">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <Link className="logo navbar-brand" to="/">
            <img className="logo__img" src={logoL} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mb-3 mb-lg-0 ms-auto me-auto ">
              <li className="nav-item">
                <Link to="/menu" className="nav-link">
                  Меню
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Доставка
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Про нас
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav mb-3 mb-lg-0 me-2">
              <li className="nav-item">
                <a type="tel" className="telephone" href="tel:+380964828292">
                  <i className="bi bi-telephone"></i> +38 (096) 48 28 292
                </a>
              </li>
              <li className="nav-item">
                <p className="BASKET">
                  0 грн <i className="bi bi-basket"></i>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

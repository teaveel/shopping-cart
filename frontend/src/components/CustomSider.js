import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import "../scss/style.scss";
import "../css/core-style.css";
import logo from "../img/core-img/logo.png";
import cart from "../img/core-img/cart.png";
import favorites from "../img/core-img/favorites.png";
import search from "../img/core-img/search.png";

export default function CustomSider({ page }) {
  return (
    <header className="header-area clearfix">
      <div className="nav-close">
        <i className="fa fa-close" aria-hidden="true"></i>
      </div>
      <div className="logo">
        <Link to="/">
          <img className="main-logo" src={logo} alt="" />
        </Link>
      </div>
      <nav className="amado-nav">
        <ul>
          <li className={page === "home" ? "active" : ""}>
            <Link to="/">Home</Link>
          </li>
          <li className={page === "shop" ? "active" : ""}>
            <Link to="/shop">Shop</Link>
          </li>

          <li className={page === "cart" ? "active" : ""}>
            <Link to="/cart">Cart</Link>
          </li>
          <li className={page === "checkout" ? "active" : ""}>
            <Link to="/checkout">Checkout</Link>
          </li>
        </ul>
      </nav>
      <div className="amado-btn-group mt-30 mb-100">
        <Button className="btn amado-btn mb-15">%Discount%</Button>
        <Button className="btn amado-btn active">New this week</Button>
      </div>
      <div className="cart-fav-search mb-100">
        <Link to="/cart" className="cart-nav">
          <img src={cart} alt="" /> Cart{" "}
          <span>({JSON.parse(localStorage.getItem("cart")).length})</span>
        </Link>
        <a href="#" className="fav-nav">
          <img src={favorites} alt="" /> Favourite
        </a>
        <a href="#" className="search-nav">
          <img src={search} alt="" /> Search
        </a>
      </div>
    </header>
  );
}

import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import {Layout, Menu, Button} from "antd";
import '../scss/style.scss'
import "../css/core-style.css"
import logo from "../img/core-img/logo.png"
import cart from "../img/core-img/cart.png"
import favorites from "../img/core-img/favorites.png"
import search from "../img/core-img/search.png"

const {Sider} = Layout;

export default function CustomSider() {
    return(
        <header className="header-area clearfix">
            {/* <!-- Close Icon --> */}
            <div className="nav-close">
                <i className="fa fa-close" aria-hidden="true"></i>
            </div>
            {/* <!-- Logo --> */}
            <div className="logo">
                <Link to="/">
                    <img className="main-logo" src={logo} alt="" />
                </Link>
                {/* <a href="index.html"></a> */}
            </div>
            {/* <!-- Amado Nav --> */}
            <nav className="amado-nav">
                <ul>
                    <li className="active">
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li><Link to="/shop">
                            Shop
                        </Link></li>
                    <li><Link to="/product">
                            Product
                        </Link></li>
                    <li><Link to="/cart">
                            Cart
                        </Link></li>
                    <li>
                        <Link to="/checkout">
                            Checkout
                        </Link>
                    </li>
                </ul>
            </nav>
            {/* <!-- Button Group --> */}
            <div className="amado-btn-group mt-30 mb-100">
                <Button className="btn amado-btn mb-15">%Discount%</Button>
                <Button className="btn amado-btn active">New this week</Button>
            </div>
            {/* <!-- Cart Menu --> */}
            <div className="cart-fav-search mb-100">
            <a href="cart.html" className="cart-nav"
                ><img src={cart} alt="" /> Cart <span>(0)</span></a
            >
            <a href="#" className="fav-nav"
                ><img src={favorites} alt="" /> Favourite</a
            >
            <a href="#" className="search-nav"
                ><img src={search} alt="" /> Search</a
            >
            </div>
            {/* <!-- Social Button --> */}
            <div className="social-info d-flex justify-content-between">
            <a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
            </div>
        </header>
    )
}
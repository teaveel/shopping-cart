import React from 'react';
import {Layout, Image} from "antd";
import {Link} from "react-router-dom"
import '../scss/style.scss'
import "../css/core-style.css"

const {Footer} = Layout;
export default function CustomFooter() {
    return(
        <Footer className="footer_area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-4">
                    <div className="single_widget_area">
                        <div className="footer-logo mr-50">
                            <img src="../img/core-img/logo2.png" alt=""/>
                        </div>
                        <p className="copywrite">
                        <script>
                            document.write(new Date().getFullYear());
                        </script>
                        <i className="fa fa-heart-o" aria-hidden="true"></i> by
                        <a href="https://colorlib.com" target="_blank">Colorlib</a> &
                        Re-distributed by
                        <a href="https://themewagon.com/" target="_blank">Themewagon</a>
                        </p>
                    </div>
                    </div>
                    <div className="col-12 col-lg-8">
                    <div className="single_widget_area">
                        <div className="footer_menu">
                        <nav className="navbar navbar-expand-lg justify-content-end">
                            <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#footerNavContent"
                            aria-controls="footerNavContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            >
                            <i className="fa fa-bars"></i>
                            </button>
                            <div className="collapse navbar-collapse" id="footerNavContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                <a className="nav-link" href="index.html">Home</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="shop.html">Shop</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="product-details.html"
                                    >Product</a
                                >
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="cart.html">Cart</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="checkout.html">Checkout</a>
                                </li>
                            </ul>
                            </div>
                        </nav>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </Footer>
    )
}
import React from 'react';
import {Layout, Row, Col} from "antd";
import {Link} from "react-router-dom"
import '../scss/style.scss'
import "../css/core-style.css"
import logo2 from "../img/core-img/logo2.png";
import moment from "moment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const {Footer} = Layout;
export default function CustomFooter() {
    return(
        <Footer className="footer_area">
            <div className="container">
                <Row align="center" justify="center" >
                    <Col span={ 8 }>
                        <div className="single_widget_area">
                            <div className="footer-logo mr-50">
                                <img src={logo2} alt=""/>
                            </div>
                            <p class="copywrite">
                                Copyright © 2021
                                All rights reserved | This template is made with
                                <FontAwesomeIcon icon={faHeart} /> by
                                <a href="https://colorlib.com" target="_blank">Colorlib</a> &amp;
                                Re-distributed by
                                <a href="https://themewagon.com/" target="_blank">Themewagon</a>
                            </p>
                            
                        </div>
                    </Col>
                    <Col span={ 16 }>
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
                    </Col>
                </Row>
            </div>
        </Footer>
    )
}
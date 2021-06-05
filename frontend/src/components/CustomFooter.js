import React from "react";
import { Row, Col } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../scss/style.scss";
import "../css/core-style.css";
import logo2 from "../img/core-img/logo2.png";

export default function CustomFooter() {
  return (
    <div className="footer_area">
      <div className="container">
        <Row align="middle" justify="space-between" className="d-flex">
          <Col span={8} className="center-item">
            <div className="single_widget_area">
              <div className="footer-logo mr-50">
                <img src={logo2} alt="" />
              </div>
              <p className="copywrite">
                Copyright © 2021 All rights reserved | This template is made
                with
                <FontAwesomeIcon icon={faHeart} /> by
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a>{" "}
                &amp; Re-distributed by
                <a href="https://themewagon.com/" target="_blank">
                  Themewagon
                </a>
              </p>
            </div>
          </Col>
          <Col span={16} className="center-item">
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
                  <div
                    className="collapse navbar-collapse"
                    id="footerNavContent"
                  >
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item active">
                        <Link className="nav-link" to="/">
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/shop">
                          Shop
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/cart">
                          Cart
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/checkout">
                          Checkout
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

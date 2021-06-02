import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout, Row, Col, Form, Button, Input, Checkbox, Slider } from "antd";
import "../scss/style.scss";
import "../css/core-style.css";
import { getProducts } from "../actions/product-action";

const { Sider, Content, Footer } = Layout;

export default function SideBar() {
  return (
    <div className="shop_sidebar_area">
      {/* <!-- ##### Single Widget ##### --> */}
      <div className="widget catagory mb-50">
        {/* <!-- Widget Title --> */}
        <h6 className="widget-title mb-30">Catagories</h6>

        {/* <!--  Catagories  --> */}
        <div className="catagories-menu">
          <ul>
            <li className="active">
              <a href="#">Chairs</a>
            </li>
            <li>
              <a href="#">Beds</a>
            </li>
            <li>
              <a href="#">Accesories</a>
            </li>
            <li>
              <a href="#">Furniture</a>
            </li>
            <li>
              <a href="#">Home Deco</a>
            </li>
            <li>
              <a href="#">Dressings</a>
            </li>
            <li>
              <a href="#">Tables</a>
            </li>
          </ul>
        </div>
      </div>

      {/* <!-- ##### Single Widget ##### --> */}
      <div className="widget brands mb-50">
        {/* <!-- Widget Title --> */}
        <h6 className="widget-title mb-30">Brands</h6>

        <div className="widget-desc">
          {/* <!-- Single Form Check --> */}
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="amado"
            />
            <label className="form-check-label" for="amado">
              Amado
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="ikea"
            />
            <label className="form-check-label" for="ikea">
              Ikea
            </label>
          </div>
          {/* <!-- Single Form Check --> */}
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="furniture"
            />
            <label className="form-check-label" for="furniture">
              Furniture Inc
            </label>
          </div>
          {/* <!-- Single Form Check --> */}
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="factory"
            />
            <label className="form-check-label" for="factory">
              The factory
            </label>
          </div>
          {/* <!-- Single Form Check --> */}
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="artdeco"
            />
            <label className="form-check-label" for="artdeco">
              Artdeco
            </label>
          </div>
        </div>
      </div>

      {/* <!-- ##### Single Widget ##### --> */}
      <div className="widget color mb-50">
        {/* <!-- Widget Title --> */}
        <h6 className="widget-title mb-30">Color</h6>

        <div className="widget-desc">
          <ul className="d-flex">
            <li>
              <a href="#" className="color1"></a>
            </li>
            <li>
              <a href="#" className="color2"></a>
            </li>
            <li>
              <a href="#" className="color3"></a>
            </li>
            <li>
              <a href="#" className="color4"></a>
            </li>
            <li>
              <a href="#" className="color5"></a>
            </li>
            <li>
              <a href="#" className="color6"></a>
            </li>
            <li>
              <a href="#" className="color7"></a>
            </li>
            <li>
              <a href="#" className="color8"></a>
            </li>
          </ul>
        </div>
      </div>

      {/* <!-- ##### Single Widget ##### --> */}
      <div className="widget price mb-50">
        {/* <!-- Widget Title --> */}
        <h6 className="widget-title mb-30">Price</h6>

        <div className="widget-desc">
          <div className="slider-range">
            <Slider range min={10} max={1000} defaultValue={[10, 1000]} />
            <div className="range-price">$10 - $1000</div>
          </div>
        </div>
      </div>
    </div>
  );
}

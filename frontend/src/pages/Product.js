import React, { Component, useState } from 'react';
import CustomSider from "../components/CustomSider";
import CustomFooter from "../components/CustomFooter";
import NewsLetter from "../components/NewsLetter";
import {Layout, Row, Col, Rate, Carousel, Breadcrumb} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle} from "@fortawesome/free-solid-svg-icons"

import '../scss/style.scss'
import "../css/core-style.css"
import product1 from "../img/product-img/pro-big-1.jpg"
import product2 from "../img/product-img/pro-big-2.jpg"
import product3 from "../img/product-img/pro-big-3.jpg"
import product4 from "../img/product-img/pro-big-4.jpg"


const {Sider, Content, Footer} = Layout;


export default function Product() {
    const [dotPosition, setDotPosition] = React.useState('top');

    const handlePositionChange = ({ target: { value } }) => {
        setDotPosition(value);
    };
    return(
        <Layout>
            <Layout>
                <Content className="main-content-wrapper d-flex clearfix">
                    <CustomSider />
                    {/* <!-- Product Details Area Start --> */}
                    <div className="single-product-area section-padding-100 clearfix">
                        <div className="container-fluid">
                            <Row>
                                <Col span={24}>
                                    <Breadcrumb className="breadcrumb mt-50">
                                        <Breadcrumb.Item className="breadcrumb-item"><a href="#">Home</a></Breadcrumb.Item>
                                        <Breadcrumb.Item className="breadcrumb-item"><a href="#">Furniture</a></Breadcrumb.Item>
                                        <Breadcrumb.Item className="breadcrumb-item"><a href="#">Chairs</a></Breadcrumb.Item>
                                        <Breadcrumb.Item className="breadcrumb-item active" aria-current="page">white modern chair</Breadcrumb.Item>
                                    </Breadcrumb>
                                </Col>
                            </Row>

                            <Row gutter={32}>
                                <Col span={14}>
                                    <div className="single_product_thumb">
                                        <div>
                                           
                                            <Carousel>
                                                <div>
                                                    <a className="gallery_img" href={product1}>
                                                        <img className="d-block w-100" src={product1} alt="First slide"/>
                                                    </a>
                                                </div>
                                                <div>
                                                    <a className="gallery_img" href={product2}>
                                                        <img className="d-block w-100" src={product2} alt="Second slide"/>
                                                    </a>
                                                </div>
                                                <div>
                                                    <a className="gallery_img" href={product3}>
                                                        <img className="d-block w-100" src={product3} alt="Third slide"/>
                                                    </a>
                                                </div>
                                                <div>
                                                    <a className="gallery_img" href={product4}>
                                                        <img className="d-block w-100" src={product4} alt="Fourth slide"/>
                                                    </a>
                                                </div>
                                            </Carousel>
                                        </div>
                                        {/* <div id="product_details_slider" className="carousel slide" data-ride="carousel">
                                            <ol className="carousel-indicators">
                                                <li className="active" data-target="#product_details_slider" data-slide-to="0" >
                                                </li>
                                                <li data-target="#product_details_slider" data-slide-to="1">
                                                </li>
                                                <li data-target="#product_details_slider" data-slide-to="2">
                                                </li>
                                                <li data-target="#product_details_slider" data-slide-to="3">
                                                </li>
                                            </ol>
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <a className="gallery_img" href={product1}>
                                                        <img className="d-block w-100" src={product1} alt="First slide"/>
                                                    </a>
                                                </div>
                                                <div className="carousel-item">
                                                    <a className="gallery_img" href={product2}>
                                                        <img className="d-block w-100" src={product2} alt="Second slide"/>
                                                    </a>
                                                </div>
                                                <div className="carousel-item">
                                                    <a className="gallery_img" href={product3}>
                                                        <img className="d-block w-100" src={product3} alt="Third slide"/>
                                                    </a>
                                                </div>
                                                <div className="carousel-item">
                                                    <a className="gallery_img" href={product4}>
                                                        <img className="d-block w-100" src={product4} alt="Fourth slide"/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </Col>
                                <Col span={10}>
                                    <div className="single_product_desc">
                                        {/* <!-- Product Meta Data --> */}
                                        <div className="product-meta-data">
                                            <div className="line"></div>
                                            <p className="product-price">$180</p>
                                            <a href="product-details.html">
                                                <h6>White Modern Chair</h6>
                                            </a>
                                            {/* <!-- Ratings & Review --> */}
                                            <Row justify="space-between" className="ratings-review mb-15 d-flex align-items-center justify-content-between">
                                                <Col span={16}>
                                                    <Rate allowHalf defaultValue={2.5} />
                                                </Col>
                                                <Col span={8} className="review">
                                                    <a href="#">Write A Review</a>
                                                </Col>
                                            </Row>
                                            {/* <!-- Avaiable --> */}
                                            <p className="avaibility">
                                                <FontAwesomeIcon icon={faCircle} color="#20d34a"/>
                                                &nbsp;In Stock
                                            </p>
                                        </div>

                                        <div className="short_overview my-5">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?</p>
                                        </div>

                                        {/* <!-- Add to Cart Form --> */}
                                        <form className="cart clearfix" method="post">
                                            <div className="cart-btn d-flex mb-50">
                                                <p>Qty</p>
                                                <div className="quantity">
                                                    <span className="qty-minus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) &amp;&amp; qty &gt; 1 ) effect.value--;return false;"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                                                    <input type="number" className="qty-text" id="qty" step="1" min="1" max="300" name="quantity" value="1"/>
                                                    <span className="qty-plus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"><i className="fa fa-caret-up" aria-hidden="true"></i></span>
                                                </div>
                                            </div>
                                            <button type="submit" name="addtocart" value="5" className="btn amado-btn">Add to cart</button>
                                        </form>

                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    {/* <!-- Product Details Area End --> */}
                </Content>
            </Layout>
            <NewsLetter />
            <CustomFooter />
        </Layout>
    )
}

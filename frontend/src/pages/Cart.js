import React, { Component } from 'react';
import CustomSider from "../components/CustomSider";
import CustomFooter from "../components/CustomFooter";
import NewsLetter from "../components/NewsLetter";
import {Layout, Row, Col} from "antd";
import '../scss/style.scss'
import "../css/core-style.css"
import cart1 from "../img/bg-img/cart1.jpg"
import cart2 from "../img/bg-img/cart2.jpg"
import cart3 from "../img/bg-img/cart3.jpg"


const {Sider, Content, Footer} = Layout;


export default function Cart() {

    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
        ];

        const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];

    return(
        <Layout>
            <Layout>
                <Content className="main-content-wrapper d-flex clearfix">
                    <CustomSider />
                    <div class="cart-table-area section-padding-100">
                        <div class="container-fluid">
                            <Row gutter={24}>
                                <Col lg={16} md={24}>
                                    <div class="cart-title mt-50">
                                        <h2>Shopping Cart</h2>
                                    </div>

                                    <div class="cart-table clearfix">
                                        <table class="table table-responsive">
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th>Name</th>
                                                    <th>Price</th>
                                                    <th>Quantity</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="cart_product_img">
                                                        <a href="#"><img src={cart1} alt="Product"/></a>
                                                    </td>
                                                    <td class="cart_product_desc">
                                                        <h5>White Modern Chair</h5>
                                                    </td>
                                                    <td class="price">
                                                        <span>$130</span>
                                                    </td>
                                                    <td class="qty">
                                                        <div class="qty-btn d-flex">
                                                            <p>Qty</p>
                                                            <div class="quantity">
                                                                <span class="qty-minus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) &amp;&amp; qty &gt; 1 ) effect.value--;return false;"><i class="fa fa-minus" aria-hidden="true"></i></span>
                                                                <input type="number" class="qty-text" id="qty" step="1" min="1" max="300" name="quantity" value="1"/>
                                                                <span class="qty-plus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"><i class="fa fa-plus" aria-hidden="true"></i></span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="cart_product_img">
                                                        <a href="#"><img src={cart2} alt="Product"/></a>
                                                    </td>
                                                    <td class="cart_product_desc">
                                                        <h5>Minimal Plant Pot</h5>
                                                    </td>
                                                    <td class="price">
                                                        <span>$10</span>
                                                    </td>
                                                    <td class="qty">
                                                        <div class="qty-btn d-flex">
                                                            <p>Qty</p>
                                                            <div class="quantity">
                                                                <span class="qty-minus" onclick="var effect = document.getElementById('qty2'); var qty = effect.value; if( !isNaN( qty ) &amp;&amp; qty &gt; 1 ) effect.value--;return false;"><i class="fa fa-minus" aria-hidden="true"></i></span>
                                                                <input type="number" class="qty-text" id="qty2" step="1" min="1" max="300" name="quantity" value="1"/>
                                                                <span class="qty-plus" onclick="var effect = document.getElementById('qty2'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"><i class="fa fa-plus" aria-hidden="true"></i></span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="cart_product_img">
                                                        <a href="#"><img src={cart3} alt="Product"/></a>
                                                    </td>
                                                    <td class="cart_product_desc">
                                                        <h5>Minimal Plant Pot</h5>
                                                    </td>
                                                    <td class="price">
                                                        <span>$10</span>
                                                    </td>
                                                    <td class="qty">
                                                        <div class="qty-btn d-flex">
                                                            <p>Qty</p>
                                                            <div class="quantity">
                                                                <span class="qty-minus" onclick="var effect = document.getElementById('qty3'); var qty = effect.value; if( !isNaN( qty ) &amp;&amp; qty &gt; 1 ) effect.value--;return false;"><i class="fa fa-minus" aria-hidden="true"></i></span>
                                                                <input type="number" class="qty-text" id="qty3" step="1" min="1" max="300" name="quantity" value="1"/>
                                                                <span class="qty-plus" onclick="var effect = document.getElementById('qty3'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"><i class="fa fa-plus" aria-hidden="true"></i></span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </Col>
                                <Col lg={8} md={24}>
                                    <div class="cart-summary">
                                        <h5>Cart Total</h5>
                                        <ul class="summary-table">
                                            <li><span>subtotal:</span> <span>$140.00</span></li>
                                            <li><span>delivery:</span> <span>Free</span></li>
                                            <li><span>total:</span> <span>$140.00</span></li>
                                        </ul>
                                        <div class="cart-btn mt-100">
                                            <a href="cart.html" class="btn amado-btn w-100">Checkout</a>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Content>
            </Layout>
            <NewsLetter />
            <CustomFooter />
        </Layout>
    )
}

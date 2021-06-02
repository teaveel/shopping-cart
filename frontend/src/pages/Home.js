import React, { Component } from 'react';
import CustomSider from "../components/CustomSider";
import CustomFooter from "../components/CustomFooter";
import NewsLetter from "../components/NewsLetter";
import {Layout, Row, Col} from "antd";
import '../scss/style.scss'
import "../css/core-style.css"
import bg1 from "../img/bg-img/1.jpg"
import bg2 from "../img/bg-img/2.jpg"
import bg3 from "../img/bg-img/3.jpg"
import bg4 from "../img/bg-img/4.jpg"
import bg5 from "../img/bg-img/5.jpg"
import bg6 from "../img/bg-img/6.jpg"
import bg7 from "../img/bg-img/7.jpg"
import bg8 from "../img/bg-img/8.jpg"
import bg9 from "../img/bg-img/9.jpg"


const {Sider, Content, Footer} = Layout;


export default function Home() {
    return(
        <Layout>
            <Layout>
                <Content className="main-content-wrapper d-flex clearfix">
                    <CustomSider />
                        {/* <!-- Product Catagories Area Start --> */}
                    <div className="products-catagories-area clearfix">
                        <div className="amado-pro-catagory clearfix">
                            <Row justify="center" align="top">
                                <Col span={8}className="single-products-catagory clearfix">
                                    <a href="shop.html">
                                        <img src={bg1} alt="" />
                                        {/* <!-- Hover Content --> */}
                                        <div className="hover-content">
                                            <div className="line"></div>
                                            <p>From $180</p>
                                            <h4>Modern Chair</h4>
                                        </div>
                                    </a>
                                    <a href="shop.html">
                                        <img src={bg5} alt="" />
                                        {/* <!-- Hover Content --> */}
                                        <div className="hover-content">
                                            <div className="line"></div>
                                            <p>From $180</p>
                                            <h4>Night Stand</h4>
                                        </div>
                                    </a>
                                    <a href="shop.html">
                                        <img src={bg8} alt="" />
                                        {/* <!-- Hover Content --> */}
                                        <div className="hover-content">
                                            <div className="line"></div>
                                            <p>From $318</p>
                                            <h4>Metallic Chair</h4>
                                        </div>
                                    </a>
                                </Col>

                                {/* <!-- Single Catagory --> */}
                                <Col span={8}className="single-products-catagory clearfix">
                                    <a href="shop.html">
                                        <img src={bg2} alt="" />
                                        {/* <!-- Hover Content --> */}
                                        <div className="hover-content">
                                            <div className="line"></div>
                                            <p>From $180</p>
                                            <h4>Minimalistic Plant Pot</h4>
                                        </div>
                                    </a>
                                    <a href="shop.html">
                                        <img src={bg6} alt="" />
                                        {/* <!-- Hover Content --> */}
                                        <div className="hover-content">
                                            <div className="line"></div>
                                            <p>From $18</p>
                                            <h4>Plant Pot</h4>
                                        </div>
                                    </a>
                                    <a href="shop.html">
                                        <img src={bg9} alt="" />
                                        {/* <!-- Hover Content --> */}
                                        <div className="hover-content">
                                            <div className="line"></div>
                                            <p>From $318</p>
                                            <h4>Modern Rocking Chair</h4>
                                        </div>
                                    </a>
                                </Col>

                                {/* <!-- Single Catagory --> */}
                                <Col span={8}className="single-products-catagory clearfix">
                                    <a href="shop.html">
                                        <img src={bg3} alt="" />
                                        {/* <!-- Hover Content --> */}
                                        <div className="hover-content">
                                            <div className="line"></div>
                                            <p>From $180</p>
                                            <h4>Modern Chair</h4>
                                        </div>
                                    </a>
                                    <a href="shop.html">
                                        <img src={bg4} alt="" />
                                        {/* <!-- Hover Content --> */}
                                        <div className="hover-content">
                                            <div className="line"></div>
                                            <p>From $320</p>
                                            <h4>Small Table</h4>
                                        </div>
                                    </a>
                                    <a href="shop.html">
                                        <img src={bg7} alt="" />
                                        {/* <!-- Hover Content --> */}
                                        <div className="hover-content">
                                            <div className="line"></div>
                                            <p>From $318</p>
                                            <h4>Home Deco</h4>
                                        </div>
                                    </a>
                                </Col>
                                
                            </Row>
                            
                            
                        </div>
                    </div>
                    {/* <!-- Product Catagories Area End --> */}
                    {/* <!-- ##### Main Content Wrapper End ##### --> */}
                   
                </Content>
            </Layout>
            <NewsLetter />
            <CustomFooter />
        </Layout>
    )
}

import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomSider from "../components/CustomSider";
import CustomFooter from "../components/CustomFooter";
import NewsLetter from "../components/NewsLetter";
import SideBar from "../components/SideBar";
import {
  Layout,
  Row,
  Col,
  Form,
  Button,
  Input,
  Checkbox,
  Slider,
  Rate,
  Card,
  Pagination,
  Select,
} from "antd";
import "../scss/style.scss";
import "../css/core-style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHeart, faThLarge } from "@fortawesome/free-solid-svg-icons";
import product1 from "../img/product-img/product1.jpg";
import product2 from "../img/product-img/product2.jpg";
import product3 from "../img/product-img/product3.jpg";
import product4 from "../img/product-img/product4.jpg";
import product5 from "../img/product-img/product5.jpg";
import product6 from "../img/product-img/product6.jpg";
import cartImg from "../img/core-img/cart.png";

import { getProducts } from "../actions/product-action";

const { Sider, Content, Footer } = Layout;
const { Meta } = Card;
const { Option } = Select;

export default function Shop() {
  const dispatch = useDispatch();

  //   const { products, loading, error } = useSelector((state) => state.products);

  //   console.log(products);
  const products = [
    {
      name: "PlayStation 5",
      price: 499,
      imageUrl:
        "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget dolor morbi non arcu risus quis varius quam. A diam sollicitudin tempor id eu nisl nunc mi. Ullamcorper a lacus vestibulum sed arcu. Turpis cursus in hac habitasse platea dictumst quisque sagittis. At elementum eu facilisis sed.",
      quantity: 15,
      brand: "PlayStation",
      color: "white",
      category: "ps",
      rate: 4,
    },
    {
      name: "Iphone 12",
      price: 1099,
      imageUrl:
        "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget dolor morbi non arcu risus quis varius quam. A diam sollicitudin tempor id eu nisl nunc mi. Ullamcorper a lacus vestibulum sed arcu. Turpis cursus in hac habitasse platea dictumst quisque sagittis. At elementum eu facilisis sed.",
      quantity: 10,
      brand: "Apple",
      color: "white",
      category: "phone",
      rate: 5,
    },
    {
      name: "Amazon Alexa",
      imageUrl:
        "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget dolor morbi non arcu risus quis varius quam. A diam sollicitudin tempor id eu nisl nunc mi. Ullamcorper a lacus vestibulum sed arcu. Turpis cursus in hac habitasse platea dictumst quisque sagittis. At elementum eu facilisis sed.",
      price: 50,
      quantity: 25,
      brand: "Apple",
      color: "white",
      category: "virtual assistant",
      rate: 3.5,
    },
    {
      name: "JBL FLIP 4",
      price: 140,
      imageUrl:
        "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget dolor morbi non arcu risus quis varius quam. A diam sollicitudin tempor id eu nisl nunc mi. Ullamcorper a lacus vestibulum sed arcu. Turpis cursus in hac habitasse platea dictumst quisque sagittis. At elementum eu facilisis sed.",
      quantity: 10,
      brand: "JBL",
      color: "black",
      category: "speaker",
      rate: 4,
    },
  ];

  useEffect(async () => {
    getProducts(dispatch);
    console.log(products);
  }, [dispatch]);
  return (
    <Layout>
      <Layout>
        <Content className="main-content-wrapper d-flex clearfix">
          <CustomSider />
          <SideBar />
          <div className="amado_product_area section-padding-100">
            <div className="container-fluid">
              <Row gutter={16}>
                <Col span={24}>
                  <Row
                    justify="space-between"
                    align="bottom"
                    className="product-topbar"
                  >
                    {/* <!-- Total Products --> */}
                    <Col span={12} className="total-products">
                      <p>Showing 1-8 0f 25</p>
                      <div className="view d-flex">
                        <a href="#">
                          <FontAwesomeIcon icon={faThLarge} />
                        </a>
                        <a href="#">
                          <FontAwesomeIcon icon={faBars} />
                        </a>
                      </div>
                    </Col>
                    {/* <!-- Sorting --> */}
                    <Col span={12} className="product-sorting d-flex">
                      <Form action="#" method="get">
                        <Form.Item>
                          <span>test</span>
                          <Select defaultValue="Date">
                            <Option value="value">Date</Option>
                            <Option value="value">Newest</Option>
                            <Option value="value">Popular</Option>
                          </Select>
                        </Form.Item>
                        <Form.Item>
                          <Select defaultValue="12">
                            <Option value="value">12</Option>
                            <Option value="value">24</Option>
                            <Option value="value">48</Option>
                            <Option value="value">96</Option>
                          </Select>
                        </Form.Item>
                      </Form>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row gutter={[16, 24]}>
                {products
                  ? products.map((product) => {
                      return (
                        <Col
                          className="gutter-row"
                          xs={24}
                          sm={12}
                          md={24}
                          xl={12}
                        >
                          <Card
                            hoverable
                            className="single-product-wrapper"
                            cover={
                              <img
                                src={product.imageUrl}
                                className="img-cover-product"
                                alt={product.description}
                              />
                            }
                          >
                            <Row className="product-description">
                              <Col span={12} className="product-meta-data">
                                <div className="line"></div>
                                <p className="product-price">
                                  ${product.price}
                                </p>
                                <h6>{product.name}</h6>
                              </Col>
                              <Col
                                span={8}
                                offset={4}
                                className="ratings-cart text-right"
                              >
                                <Rate
                                  disabled
                                  allowHalf
                                  defaultValue={product.rate}
                                />
                                {/*//TODO: ADD TO CART */}
                                <div className="cart">
                                  <a
                                    href="cart.html"
                                    data-toggle="tooltip"
                                    data-placement="left"
                                    title="Add to Cart"
                                  >
                                    <img src={cartImg} alt="" />
                                  </a>
                                </div>
                              </Col>
                            </Row>
                          </Card>
                        </Col>
                      );
                    })
                  : null}
              </Row>

              <Row>
                <Col span={24}>
                  {/* <!-- Pagination --> */}
                  <Pagination defaultCurrent={1} total={50} />
                </Col>
              </Row>
            </div>
          </div>
        </Content>
      </Layout>
      <NewsLetter />
      <CustomFooter />
    </Layout>
  );
}

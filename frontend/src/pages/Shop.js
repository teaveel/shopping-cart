import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
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
  Spin,
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
import {
  getCategories,
  getBrands,
  getColors,
} from "../actions/properties-action";

const { Sider, Content, Footer } = Layout;
const { Meta } = Card;
const { Option } = Select;

export default function Shop() {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector((state) => state.products);
  const { categories, brands, colors } = useSelector(
    (state) => state.properties
  );
  const [pageSize, setPageSize] = useState(8);

  const [filters, setFilters] = useState({
    page: 1,
    pageSize: pageSize,
  });

  const handleChangePage = (page, pageSize) => {};

  useEffect(async () => {
    dispatch(getProducts(filters));
    dispatch(getCategories());
    dispatch(getBrands());
    dispatch(getColors());
  }, [dispatch]);
  return (
    <Layout>
      <Layout>
        {loading ? (
          <span className="loading-area">
            <Spin size="large" />
          </span>
        ) : (
          <Content className="main-content-wrapper d-flex clearfix">
            <CustomSider page="shop" />
            <SideBar />
            <div className="amado_product_area section-padding-100">
              <div className="container-fluid">
                <Row justify="end" align="bottom">
                  {/* <!-- Sorting --> */}
                  <Col offset={16} span={24} className="product-sorting d-flex">
                    <Form action="#" method="get" layout="inline">
                      <Form.Item label="Sort by">
                        <Select
                          defaultValue="Date"
                          title="Sort by"
                          style={{ width: "150px" }}
                        >
                          <Option value="Date">Date</Option>
                          <Option value="Newest">Newest</Option>
                          <Option value="Popular">Popular</Option>
                        </Select>
                      </Form.Item>
                      <Form.Item label="View">
                        <Select
                          defaultValue={8}
                          onSelect={(value) => setPageSize(value)}
                        >
                          <Option value={8}>8</Option>
                          <Option value={12}>12</Option>
                          <Option value={16}>16</Option>
                          <Option value={20}>20</Option>
                        </Select>
                      </Form.Item>
                    </Form>
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
                            <Link to={`/product/${product._id}`}>
                              <Card
                                hoverable
                                className="single-product-wrapper"
                                cover={
                                  <img
                                    src={product.image}
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
                                  </Col>
                                </Row>
                              </Card>
                            </Link>
                          </Col>
                        );
                      })
                    : null}
                </Row>

                <Row>
                  <Col span={24}>
                    {/* <!-- Pagination --> */}
                    <Pagination
                      defaultCurrent={1}
                      total={12}
                      defaultPageSize={8}
                      pageSize={pageSize}
                      onChange={handleChangePage}
                      showTotal={(total, range) =>
                        `${range[0]}-${range[1]} of ${total} items`
                      }
                    />
                  </Col>
                </Row>
              </div>
            </div>
          </Content>
        )}
      </Layout>
      <NewsLetter />
      <CustomFooter />
    </Layout>
  );
}

import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import CustomSider from "../components/CustomSider";
import CustomFooter from "../components/CustomFooter";
import NewsLetter from "../components/NewsLetter";

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

import { getProducts } from "../actions/product-action";
import { getCategories, getBrands } from "../actions/properties-action";

const { Content } = Layout;
const { Option } = Select;

export default function Shop() {
  const dispatch = useDispatch();

  const { products, totalProducts, loading, error } = useSelector(
    (state) => state.products
  );
  const { categories, brands } = useSelector((state) => state.properties);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);
  const [sortBy, setSortBy] = useState("Newest");
  const [checkedCategories, setCheckedCategories] = useState(categories);
  const [checkedBrands, setCheckedBrands] = useState(brands);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000);

  const [filters, setFilters] = useState({
    page: page,
    pageSize: pageSize,
    sortBy: sortBy,
  });

  const handleChangePage = (page) => {
    setPage(page);
    setFilters({ ...filters, page });
  };
  const handleChangePageSize = (pageSize) => {
    setPageSize(pageSize);
    setFilters({ ...filters, pageSize });
  };
  const handleChangeSortBy = (value) => {
    setSortBy(value);
    setFilters({ ...filters, sortBy: value });
  };
  const handleChangeCategories = (checkedValue) => {
    setCheckedCategories(checkedValue);
    setFilters({ ...filters, categories: checkedValue.join(",") });
  };

  const handleChangeBrands = (checkedValue) => {
    setCheckedBrands(checkedValue);
    setFilters({ ...filters, brands: checkedValue.join(",") });
  };
  const handleChangePrice = (values) => {
    setMinPrice(values[0]);
    setMaxPrice(values[1]);
    setFilters({ ...filters, min: values[0], max: values[1] });
  };

  useEffect(() => {
    dispatch(getProducts(filters));
    dispatch(getCategories());
    dispatch(getBrands());
  }, [dispatch, filters]);
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
            <div className="shop_sidebar_area">
              <div className="widget category mb-50">
                <Form
                  initialValues={{
                    "category-group": checkedCategories,
                    "brand-group": checkedBrands,
                  }}
                >
                  <Form.Item name="category-group" label="Categories">
                    <Checkbox.Group onChange={handleChangeCategories}>
                      <Row>
                        {categories
                          ? categories.map((category) => {
                              return (
                                <Col span={24}>
                                  <Checkbox
                                    key={category}
                                    checked={true}
                                    value={category}
                                    style={{ lineHeight: "36px" }}
                                  >
                                    {category}
                                  </Checkbox>
                                </Col>
                              );
                            })
                          : null}
                      </Row>
                    </Checkbox.Group>
                  </Form.Item>
                  <Form.Item name="brand-group" label="Brands">
                    <Checkbox.Group onChange={handleChangeBrands}>
                      <Row>
                        {brands
                          ? brands.map((brand) => {
                              return (
                                <Col span={24}>
                                  <Checkbox
                                    value={brand}
                                    style={{ lineHeight: "36px" }}
                                  >
                                    {brand}
                                  </Checkbox>
                                </Col>
                              );
                            })
                          : null}
                      </Row>
                    </Checkbox.Group>
                  </Form.Item>

                  <Form.Item label="Price">
                    <Slider
                      range
                      min={0}
                      max={2000}
                      defaultValue={[minPrice, maxPrice]}
                      marks={{ 0: "0$", 2000: "2000$" }}
                      onAfterChange={handleChangePrice}
                    />
                  </Form.Item>
                </Form>
              </div>
            </div>
            <div className="amado_product_area section-padding-100">
              <div className="container-fluid">
                <Row justify="end" style={{ marginBottom: "15px" }}>
                  <Col span={9} className="product-sorting d-flex">
                    <Form action="#" method="get" layout="inline">
                      <Form.Item label="Sort by">
                        <Select
                          defaultValue={sortBy}
                          style={{ width: "100px" }}
                          onSelect={handleChangeSortBy}
                        >
                          <Option value="Newest">Newest</Option>
                          <Option value="Rating">Rating</Option>
                        </Select>
                      </Form.Item>
                      <Form.Item label="View">
                        <Select
                          defaultValue={pageSize}
                          style={{ width: "100px" }}
                          onSelect={handleChangePageSize}
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
                    <Pagination
                      defaultCurrent={page}
                      total={totalProducts}
                      defaultPageSize={pageSize}
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

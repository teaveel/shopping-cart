import React, { Component, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CustomSider from "../components/CustomSider";
import CustomFooter from "../components/CustomFooter";
import NewsLetter from "../components/NewsLetter";
import { Layout, Row, Col, Spin } from "antd";
import "../scss/style.scss";
import "../css/core-style.css";
import bg1 from "../img/bg-img/1.jpg";
import bg2 from "../img/bg-img/2.jpg";
import bg3 from "../img/bg-img/3.jpg";
import bg4 from "../img/bg-img/4.jpg";
import bg5 from "../img/bg-img/5.jpg";
import bg6 from "../img/bg-img/6.jpg";
import bg7 from "../img/bg-img/7.jpg";
import bg8 from "../img/bg-img/8.jpg";
import bg9 from "../img/bg-img/9.jpg";

import { getProducts } from "../actions/product-action";

const { Sider, Content, Footer } = Layout;

export default function Home() {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
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
            <CustomSider page="home" />
            {/* <!-- Product categories Area Start --> */}
            <div className="products-categories-area clearfix">
              <div className="amado-pro-category clearfix">
                <Row gutter={[12, 16]}>
                  {products
                    ? products.map((product) => {
                        return (
                          <Col
                            span={8}
                            className="single-products-category clearfix"
                          >
                            <Link to={`/product/${product._id}`}>
                              <img src={product.image} alt="" />
                              <div className="hover-content">
                                <div className="line"></div>
                                <p>From ${product.price}</p>
                                <h4>{product.name}</h4>
                              </div>
                            </Link>
                          </Col>
                        );
                      })
                    : null}
                </Row>
              </div>
            </div>
            {/* <!-- Product categories Area End --> */}
            {/* <!-- ##### Main Content Wrapper End ##### --> */}
          </Content>
        )}
      </Layout>
      <NewsLetter />
      <CustomFooter />
    </Layout>
  );
}

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CustomSider from "../components/CustomSider";
import CustomFooter from "../components/CustomFooter";
import NewsLetter from "../components/NewsLetter";
import { Layout, Row, Col, Spin } from "antd";
import "../scss/style.scss";
import "../css/core-style.css";

import { getProducts } from "../actions/product-action";

const { Content } = Layout;

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
          </Content>
        )}
      </Layout>
      <NewsLetter />
      <CustomFooter />
    </Layout>
  );
}

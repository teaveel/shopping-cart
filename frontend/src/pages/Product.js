import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CustomSider from "../components/CustomSider";
import CustomFooter from "../components/CustomFooter";
import NewsLetter from "../components/NewsLetter";
import {
  Layout,
  Row,
  Col,
  Rate,
  Form,
  Breadcrumb,
  Spin,
  Input,
  InputNumber,
  Button,
  notification,
} from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import "../scss/style.scss";
import "../css/core-style.css";

import { getProductDetails } from "../actions/product-action";
import { addToCart } from "../actions/cart-action";

const { Content } = Layout;

export default function Product(props) {
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );
  const productId = props.match.params.id;
  console.log(productId);
  useEffect(() => {
    dispatch(getProductDetails(productId));
  }, [dispatch, productId]);

  const { cartItems } = useSelector((state) => state.cart);
  const [qty, setQty] = useState(1);
  const changeQuantity = (value) => {
    setQty(value);
  };
  const handleAddToCart = () => {
    dispatch(addToCart(productId, qty));
    if (error) {
      notification["error"]({
        message: "Notification Title",
        description:
          "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
      });
    } else {
      notification["success"]({
        message: "Add product to cart successfully!",
        description: "Open cart to view details",
      });
    }
  };

  return (
    <Layout>
      <Layout>
        {loading ? (
          <span className="loading-area">
            <Spin size="large" />
          </span>
        ) : (
          <Content className="main-content-wrapper d-flex clearfix">
            <CustomSider page="product" />
            <div className="single-product-area section-padding-100 clearfix">
              <div className="container-fluid">
                <Row
                  style={{
                    marginBottom: "20px",
                  }}
                >
                  <Col span={24}>
                    <Breadcrumb className="breadcrumb mt-50">
                      <Breadcrumb.Item className="breadcrumb-item">
                        <Link to="/shop">Shop</Link>
                      </Breadcrumb.Item>
                      <Breadcrumb.Item className="breadcrumb-item">
                        <a href="#">{product.category}</a>
                      </Breadcrumb.Item>

                      <Breadcrumb.Item
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        {product.name}
                      </Breadcrumb.Item>
                    </Breadcrumb>
                  </Col>
                </Row>

                <Row gutter={32}>
                  <Col span={14}>
                    <div className="single_product_thumb">
                      <div>
                        <a className="gallery_img" href={product.image}>
                          <img
                            className="d-block w-100"
                            src={product.image}
                            alt="First slide"
                          />
                        </a>
                      </div>
                    </div>
                  </Col>
                  <Col span={10}>
                    <div className="single_product_desc">
                      <div className="product-meta-data">
                        <div className="line"></div>
                        <p className="product-price">${product.price}</p>
                        <h6>{product.name}</h6>
                        <Row
                          justify="space-between"
                          className="ratings-review mb-15 d-flex align-items-center justify-content-between"
                        >
                          <Col span={16}>
                            <Rate
                              disabled
                              allowHalf
                              defaultValue={product.rate}
                            />
                          </Col>
                          <Col span={8} className="review">
                            <a>Write A Review</a>
                          </Col>
                        </Row>
                        {product.quantity > 0 ? (
                          <p className="avaibility">
                            &nbsp;In Stock: {product.quantity}
                          </p>
                        ) : (
                          <p className="avaibility">
                            <FontAwesomeIcon icon={faCircle} color="#d34a20" />
                            &nbsp;In Stock: {product.quantity}
                          </p>
                        )}
                      </div>

                      <div className="short_overview my-5">
                        <p>{product.description}</p>
                      </div>

                      <Form
                        layout={"inline"}
                        className="cart clearfix"
                        method="post"
                      >
                        <Form.Item label="Quantity">
                          <InputNumber
                            size="large"
                            min={1}
                            max={product.quantity}
                            defaultValue={1}
                            onChange={changeQuantity}
                          />
                        </Form.Item>
                        <Button
                          type="submit"
                          name="addtocart"
                          value="5"
                          className="btn amado-btn"
                          onClick={handleAddToCart}
                        >
                          Add to cart
                        </Button>
                      </Form>
                    </div>
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

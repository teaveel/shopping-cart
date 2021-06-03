import React, { Component, useState } from "react";
import CustomSider from "../components/CustomSider";
import CustomFooter from "../components/CustomFooter";
import NewsLetter from "../components/NewsLetter";
import {
  Layout,
  Row,
  Col,
  Form,
  Input,
  Select,
  Checkbox,
  Button,
  Radio,
} from "antd";
import "../scss/style.scss";
import "../css/core-style.css";

const { Sider, Content, Footer } = Layout;
const { Option } = Select;
const { TextArea } = Input;

export default function Checkout() {
  const options = [
    { label: "Create an account", value: "Create an account" },
    {
      label: "Ship to a different address",
      value: "Ship to a different address",
    },
  ];
  const paymentOptions = [
    { label: "Cash on Delivery", value: "Cash on Delivery" },
    { label: "Paypal", value: "Paypal" },
  ];
  const [loading, setLoading] = useState(false);
  //TODO: HANDLE SEND REQUEST AND LOADING
  const enterLoading = (index) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  };

  return (
    <Layout>
      <Layout>
        <Content className="main-content-wrapper d-flex clearfix">
          <CustomSider page="checkout" />
          <div className="cart-table-area section-padding-100">
            <div className="container-fluid">
              <Row gutter={24}>
                <Col lg={16}>
                  <div
                    className="checkout_details_area mt-50 clearfix"
                    style={{ width: "100%" }}
                  >
                    <div className="cart-title">
                      <h2>Checkout</h2>
                    </div>

                    <Form action="#" method="post">
                      <Row gutter={[12, 0]}>
                        <Col md={12}>
                          <Form.Item
                            rules={[
                              {
                                required: true,
                                message: "Please input your first name!",
                              },
                            ]}
                          >
                            <Input
                              size="large"
                              id="first_name"
                              value=""
                              placeholder="First Name"
                              required
                            />
                          </Form.Item>
                        </Col>
                        <Col md={12}>
                          <Form.Item
                            rules={[
                              {
                                required: true,
                                message: "Please input your last name!",
                              },
                            ]}
                          >
                            <Input
                              size="large"
                              id="last_name"
                              value=""
                              placeholder="Last Name"
                              required
                            />
                          </Form.Item>
                        </Col>
                        <Col span={24}>
                          <Form.Item>
                            <Input
                              size="large"
                              id="company"
                              placeholder="Company Name"
                              value=""
                            />
                          </Form.Item>
                        </Col>
                        <Col span={24}>
                          <Form.Item>
                            <Input
                              size="large"
                              id="email"
                              placeholder="Email"
                              value=""
                            />
                          </Form.Item>
                        </Col>
                        <Col span={24}>
                          <Form.Item>
                            <Select
                              size="large"
                              defaultValue="United States"
                              id="country"
                            >
                              <Option value="usa">United States</Option>
                              <Option value="uk">United Kingdom</Option>
                              <Option value="ger">Germany</Option>
                              <Option value="fra">France</Option>
                              <Option value="ind">India</Option>
                              <Option value="aus">Australia</Option>
                              <Option value="bra">Brazil</Option>
                              <Option value="cana">Canada</Option>
                            </Select>
                          </Form.Item>
                        </Col>
                        <Col span={24}>
                          <Form.Item>
                            <Input
                              size="large"
                              id="email"
                              placeholder="Email"
                              value=""
                            />
                          </Form.Item>
                        </Col>
                        <Col span={24}>
                          <Form.Item>
                            <Input
                              size="large"
                              id="street_address"
                              placeholder="Address"
                              value=""
                            />
                          </Form.Item>
                        </Col>
                        <Col span={24}>
                          <Form.Item>
                            <Input
                              size="large"
                              id="city"
                              placeholder="Town"
                              value=""
                            />
                          </Form.Item>
                        </Col>
                        <Col md={12}>
                          <Form.Item>
                            <Input
                              size="large"
                              id="zipCode"
                              placeholder="Zip Code"
                              value=""
                            />
                          </Form.Item>
                        </Col>
                        <Col md={12}>
                          <Form.Item>
                            <Input
                              size="large"
                              id="phone_number"
                              min="0"
                              placeholder="Phone No"
                              value=""
                            />
                          </Form.Item>
                        </Col>
                        <Col span={24}>
                          <Form.Item>
                            <TextArea
                              name="comment"
                              id="comment"
                              cols="30"
                              rows="10"
                              placeholder="Leave a comment about your order"
                            ></TextArea>
                          </Form.Item>
                        </Col>

                        <Col span={24}>
                          <Form.Item>
                            <Checkbox.Group options={options} />
                          </Form.Item>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </Col>
                <Col lg={8} md={24}>
                  <div className="cart-summary">
                    <h5>Cart Total</h5>
                    <ul className="summary-table">
                      <li>
                        <span>subtotal:</span> <span>$140.00</span>
                      </li>
                      <li>
                        <span>delivery:</span> <span>Free</span>
                      </li>
                      <li>
                        <span>total:</span> <span>$140.00</span>
                      </li>
                    </ul>

                    <div className="payment-method">
                      <Radio.Group options={paymentOptions} />
                    </div>

                    <div className="cart-btn mt-100">
                      <Button
                        className="btn amado-btn"
                        type="primary"
                        loading={loading}
                        onClick={() => enterLoading()}
                      >
                        Checkout
                      </Button>
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
  );
}

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
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
  notification,
} from "antd";
import "../scss/style.scss";
import "../css/core-style.css";
import { resetCart } from "../actions/cart-action";
const { Sider, Content, Footer } = Layout;
const { Option } = Select;
const { TextArea } = Input;

const { getFieldsValue } = Form;

export default function Checkout(props) {
  const options = [
    {
      label: "Ship to a different address",
      value: "Ship to a different address",
    },
  ];
  const paymentOptions = [
    { label: "Cash on Delivery", value: "Cash" },
    { label: "Paypal", value: "Paypal" },
  ];

  const { cartItems } = useSelector((state) => state.cart);

  const [paymentType, setPaymentType] = useState("Cash");
  const handleChangePayment = (e) => {
    setPaymentType(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(props.form);
    console.log(e);
  };
  const dispatch = useDispatch();

  const onFinish = (values) => {
    if (cartItems.length == 0) {
      notification["error"]({
        message: "Checkout failed!",
        description: "Cart is empty!",
      });
      return;
    }
    const payload = {
      ...values,
      paymentType,
      cartItems: cartItems.map((item) => {
        return {
          _id: item.product,
          quantity: item.qty,
        };
      }),
    };
    axios.post("/api/checkout", payload).then(
      (response) => {
        console.log(response);
        const { error, success } = response.data;
        if (success) {
          notification["success"]({
            message: "Checkout successfully!",
            description: "Thank you for buying!",
          });
          dispatch(resetCart());

          form.setFieldsValue({
            firstName: "",
            lastName: "",
            company: "",
            email: "",
            country: "",
            address: "",
            city: "",
            comment: "",
            phoneNumber: "",
            zipCode: "",
            shipDiff: [],
          });
        } else {
          notification["error"]({
            message: "Checkout failed!",
            description: error,
          });
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };
  const [form] = Form.useForm();
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

                    <Form
                      form={form}
                      onFinish={onFinish}
                      id="checkout_form"
                      action="/api/checkout"
                      method="post"
                    >
                      <Row gutter={[12, 0]}>
                        <Col md={12}>
                          <Form.Item
                            rules={[
                              {
                                required: true,
                                message: "Please input your first name!",
                              },
                            ]}
                            name="firstName"
                          >
                            <Input
                              size="large"
                              id="first_name"
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
                            name="lastName"
                          >
                            <Input
                              size="large"
                              id="last_name"
                              placeholder="Last Name"
                              required
                            />
                          </Form.Item>
                        </Col>
                        <Col span={24}>
                          <Form.Item
                            name="company"
                            rules={[
                              {
                                required: true,
                                message: "Please input your company",
                              },
                            ]}
                          >
                            <Input
                              size="large"
                              id="company"
                              placeholder="Company Name"
                            />
                          </Form.Item>
                        </Col>
                        <Col span={24}>
                          <Form.Item
                            name="email"
                            rules={[
                              {
                                type: "email",
                                message: "The input is not valid e-mail!",
                              },
                              {
                                required: true,
                                message: "Please input your E-mail!",
                              },
                            ]}
                          >
                            <Input
                              size="large"
                              id="email"
                              placeholder="Email"
                            />
                          </Form.Item>
                        </Col>
                        <Col span={24}>
                          <Form.Item
                            name="country"
                            rules={[
                              {
                                required: true,
                                message: "Please input your country",
                              },
                            ]}
                          >
                            <Select
                              size="large"
                              placeholder="Select your country"
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
                          <Form.Item
                            name="address"
                            rules={[
                              {
                                required: true,
                                message: "Please input your street address",
                              },
                            ]}
                          >
                            <Input
                              size="large"
                              id="street_address"
                              placeholder="Address"
                            />
                          </Form.Item>
                        </Col>
                        <Col span={24}>
                          <Form.Item
                            name="city"
                            rules={[
                              {
                                required: true,
                                message: "Please input your city",
                              },
                            ]}
                          >
                            <Input size="large" id="city" placeholder="City" />
                          </Form.Item>
                        </Col>
                        <Col md={12}>
                          <Form.Item
                            name="zipCode"
                            rules={[
                              {
                                required: true,
                                message: "Please input zip code",
                              },
                            ]}
                          >
                            <Input
                              size="large"
                              id="zipCode"
                              placeholder="Zip Code"
                            />
                          </Form.Item>
                        </Col>
                        <Col md={12}>
                          <Form.Item
                            name="phoneNumber"
                            rules={[
                              {
                                required: true,
                                message: "Please input your phone number",
                              },
                            ]}
                          >
                            <Input
                              size="large"
                              id="phone_number"
                              min="0"
                              placeholder="Phone No"
                            />
                          </Form.Item>
                        </Col>
                        <Col span={24}>
                          <Form.Item name="comment">
                            <TextArea
                              id="comment"
                              cols="30"
                              rows="10"
                              placeholder="Leave a comment about your order"
                            ></TextArea>
                          </Form.Item>
                        </Col>

                        <Col span={24}>
                          <Form.Item name="shipDiff">
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
                        <span>Subtotal:</span>{" "}
                        <span>
                          $
                          {cartItems.reduce((total, item) => {
                            return (total += item.price * item.qty);
                          }, 0)}
                        </span>
                      </li>
                      <li>
                        <span>Delivery:</span> <span>Free</span>
                      </li>
                      <li>
                        <span>Total:</span>{" "}
                        <span>
                          $
                          {cartItems.reduce((total, item) => {
                            return (total += item.price * item.qty);
                          }, 0)}
                        </span>
                      </li>
                    </ul>

                    <div className="payment-method">
                      <Radio.Group
                        onChange={handleChangePayment}
                        options={paymentOptions}
                        defaultValue="Cash"
                        value={paymentType}
                      />
                    </div>

                    <div className="cart-btn mt-100">
                      <Button
                        htmlType="submit"
                        className="btn amado-btn"
                        form={form}
                        onClick={() => form.submit()}
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

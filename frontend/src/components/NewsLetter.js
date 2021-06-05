import React from "react";
import axios from "axios";
import { Row, Col, Form, Input, notification } from "antd";
import "../scss/style.scss";
import "../css/core-style.css";
export default function CustomFooter() {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    axios.post("/api/subscription", values).then(
      (response) => {
        const { error, success } = response.data;
        if (success) {
          notification["success"]({
            message: "Subscribe successfully!",
            description:
              "Thank you for subscribe. We will send your discount via email!",
          });
          form.setFieldsValue({
            email: "",
          });
        } else {
          notification["error"]({
            message: "Subscribe successfully!!",
            description: error,
          });
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };
  return (
    <section className="newsletter-area section-padding-100-0">
      <div className="container">
        <Row algin="middle">
          <Col span={12} className="col-12 col-lg-6 col-xl-7">
            <div className="newsletter-text mb-100">
              <h2>
                Subscribe for a <span>25% Discount</span>
              </h2>
              <p>
                Nulla ac convallis lorem, eget euismod nisl. Donec in libero sit
                amet mi vulputate consectetur. Donec auctor interdum purus, ac
                finibus massa bibendum nec.
              </p>
            </div>
          </Col>
          <Col span={12} className="col-12 col-lg-6 col-xl-5">
            <div className="newsletter-form mb-100">
              <Form form={form} method="post" onFinish={onFinish}>
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
                    type="email"
                    name="email"
                    className="nl-email"
                    placeholder="Your E-mail"
                  />
                </Form.Item>
                <input type="submit" value="Subscribe" />
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}

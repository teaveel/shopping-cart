import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CustomSider from "../components/CustomSider";
import CustomFooter from "../components/CustomFooter";
import NewsLetter from "../components/NewsLetter";
import {
  Layout,
  Row,
  Col,
  InputNumber,
  Button,
  Table,
  Tag,
  Popconfirm,
} from "antd";
import "../scss/style.scss";
import "../css/core-style.css";

import { removeFromCart } from "../actions/cart-action";

const { Sider, Content, Footer } = Layout;

export default function Cart() {
  const columns = [
    {
      title: "",
      dataIndex: "image",
      key: "image",
      render: (url) => <img src={url} alt="Product" />,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (text) => `$${text}`,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
      render: (text) => `$${text}`,
    },
    {
      title: "",
      key: "remove",
      dataIndex: "remove",
      render: (text, record) => (
        <Popconfirm
          title="Are you sure to remove this item?"
          onConfirm={() => {
            dispatch(removeFromCart(record.key));
            loadDataTable();
            console.log(cartItems);
          }}
          okText="Yes"
          cancelText="No"
        >
          <Tag color="volcano">Remove</Tag>
        </Popconfirm>
      ),
    },
  ];

  const [amount, setAmount] = useState(0);

  const dispatch = useDispatch();

  const [dataTable, setDataTable] = useState([]);
  const { cartItems } = useSelector((state) => state.cart);
  const loadDataTable = () => {
    let tmp = 0;
    const dataSource = cartItems.map((item) => {
      tmp += item.qty * item.price;
      return {
        key: item.product,
        image: item.image,
        name: item.name,
        price: item.price,
        quantity: item.qty,
        total: item.qty * item.price,
      };
    });
    setDataTable(dataSource);
    setAmount(tmp);
  };
  useEffect(() => {
    loadDataTable();
  }, [cartItems]);

  return (
    <Layout>
      <Layout>
        <Content className="main-content-wrapper d-flex clearfix">
          <CustomSider page="cart" />
          <div className="cart-table-area section-padding-100">
            <div className="container-fluid">
              <Row gutter={16}>
                <Col span={12}>
                  <div className="cart-title mt-50">
                    <h2>Shopping Cart</h2>
                  </div>
                  <Table
                    pagination={{ defaultPageSize: 5 }}
                    dataSource={dataTable}
                    columns={columns}
                  />
                  ;
                </Col>
                <Col span={6} offset={6}>
                  <div className="cart-summary">
                    <h5>Cart Total</h5>
                    <ul className="summary-table">
                      <li>
                        <span>subtotal:</span> <span>${amount}</span>
                      </li>
                      <li>
                        <span>delivery:</span> <span>Free</span>
                      </li>
                      <li>
                        <span>total:</span> <span>${amount}</span>
                      </li>
                    </ul>
                    <div className="cart-btn mt-100">
                      <Link to="/checkout">
                        <Button
                          style={{ width: "100%", cursor: "pointer" }}
                          className="btn amado-btn"
                        >
                          Checkout
                        </Button>
                      </Link>
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

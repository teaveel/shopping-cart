import React, { Component }  from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import "antd/dist/antd.css"
import "./scss/style.scss"
import "./css/core-style.css"
import {BackTop} from "antd"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import Product from "./pages/Product"
import Shop from "./pages/Shop"

function callback(key) {
  console.log(key);
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/shop" component={Shop}/>
        <Route path="/product" component={Product}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/checkout" component={Checkout}/>
      </Switch>
      <BackTop>
        <div className="back-top-btn">
          <FontAwesomeIcon icon={faAngleUp} />
        </div>
      </BackTop>
    </Router>
  );
}


export default App;

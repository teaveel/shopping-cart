import { combineReducers } from "redux";
import { productsReducer, productDetailsReducer } from "./product-reducer";
import { cartReducer } from "./cart-reducer";

export default combineReducers({
  products: productsReducer,
  productDetail: productDetailsReducer,
  cart: cartReducer,
});

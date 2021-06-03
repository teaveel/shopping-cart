import { combineReducers } from "redux";
import { productsReducer, productDetailsReducer } from "./product-reducer";
import { cartReducer } from "./cart-reducer";
import { propertiesReducer } from "./properties-reducer";

export default combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  properties: propertiesReducer,
});

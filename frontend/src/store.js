import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/index";

const middleware = [thunk];

const initialState = {
  cart: {
    cartItems: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
  },
};

const store = createStore(rootReducer, initialState);

export default store;

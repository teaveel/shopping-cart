import * as actionTypes from "../constants/cart-constants";

const initialState = {
  cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const newItem = action.payload;
      const existItem = state.cartItems.find(
        (item) => item.product === newItem.product
      );
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.product === existItem.product ? newItem : item
          ),
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, newItem],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.product != action.payload
        ),
      };
    default:
      return state;
  }
};

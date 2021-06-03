import * as actionTypes from "../constants/properties-constants";

const initialState = {
  categories: [],
  brands: [],
  colors: [],
};

export const propertiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CATEGORIES:
      return {
        products: action.payload,
      };
    case actionTypes.GET_BRANDS:
      return {
        products: action.payload,
      };
    case actionTypes.GET_COLORS:
      return {
        products: action.payload,
      };
    case actionTypes.GET_PROPERTIES_FAIL:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

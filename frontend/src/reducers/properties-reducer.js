import * as actionTypes from "../constants/properties-constants";

const initialState = {
  categories: [],
  brands: [],
};

export const propertiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case actionTypes.GET_BRANDS:
      return {
        ...state,
        brands: action.payload,
      };
    case actionTypes.GET_PROPERTIES_FAIL:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

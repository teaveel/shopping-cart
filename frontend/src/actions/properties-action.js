import * as actionTypes from "../constants/properties-constants";
import axios from "axios";

export const getCategories = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/properties/categories");
    dispatch({
      type: actionTypes.GET_CATEGORIES,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PROPERTIES_FAIL,
      payload: error.message,
    });
  }
};

export const getBrands = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/properties/brands");
    dispatch({
      type: actionTypes.GET_BRANDS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PROPERTIES_FAIL,
      payload: error.message,
    });
  }
};

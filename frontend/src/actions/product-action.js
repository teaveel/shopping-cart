import * as actionTypes from "../constants/product-constants";
import axios from "axios";
export const getProducts = (filters) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.GET_PRODUCTS_REQUEST,
    });
    let path = "/api/products?";
    for (let prop in filters) {
      path += `${prop}=${filters[prop]}&`;
    }
    console.log(path);
    const { data } = await axios.get(path);
    dispatch({
      type: actionTypes.GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCTS_FAIL,
      payload: error.message,
    });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_REQUEST,
    });
    console.log(id);
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
      payload: error.message,
    });
  }
};

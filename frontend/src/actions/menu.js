import axios from "axios";
import {
  GET_PRODUCTS,
  GET_PRODUCTS_ERROR,
  GET_CATEGORIES,
  GET_CATEGORIES_ERROR,
  SELECTED_PRODUCT,
} from "./constants";

export const getProducts = () => (dispatch) => {
  let axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
    },
  };

  axios
    .get("http://localhost:5000/products", axiosConfig)
    .then((res) => {
      if (res.status === 200 && res.data != "") {
        console.log(res);
        dispatch({
          type: GET_PRODUCTS,
          payload: res.data,
        });
      }
    })
    .catch((error) => {
      console.log(error.response);
      dispatch({
        type: GET_PRODUCTS_ERROR,
        payload: { msg: error.respose },
      });
    });
};

export const getCategories = () => (dispatch) => {
  let axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
    },
  };

  axios
    .get("http://localhost:5000/category", axiosConfig)
    .then((res) => {
      if (res.status === 200 && res.data != "") {
        console.log(res);
        dispatch({
          type: GET_CATEGORIES,
          payload: res.data,
        });
      }
    })
    .catch((error) => {
      console.log(error.response);
      dispatch({
        type: GET_CATEGORIES_ERROR,
        payload: { msg: error.respose },
      });
    });
};

export const setSelectedProduct = (data) => (dispatch) => {
  dispatch({
    type: SELECTED_PRODUCT,
    payload: { data },
  });
};

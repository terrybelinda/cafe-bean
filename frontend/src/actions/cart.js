import axios from "axios";
import {
  ADD_CART_FAILURE,
  ADD_CART_SUCCESS,
  GET_CART_SUCCESS,
  GET_CART_FAILURE,
} from "../actions/constants";

export const insertCart = (data) => (dispatch) => {
  let axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
    },
  };

  const body = JSON.stringify(data);

  axios
    .post("http://localhost:5000/insertCart", body, axiosConfig)
    .then((res) => {
      if (res.status === 200 && res.data != "") {
        dispatch({
          type: ADD_CART_SUCCESS,
          payload: res.data,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: ADD_CART_FAILURE,
      });
    });
};

export const getCart = (data) => (dispatch) => {
  let axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
    },
  };
  const body = JSON.stringify(data);

  axios
    .get("http://localhost:5000/getCart", {
      params: {
        user_id: 1,
      },
    })
    .then((res) => {
      if (res.status === 200 && res.data != "") {
        dispatch({
          type: GET_CART_SUCCESS,
          payload: res.data,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: GET_CART_FAILURE,
      });
    });
};

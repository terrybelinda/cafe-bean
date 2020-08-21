import axios from "axios";
import {
  SET_ALERT,
  REMOVE_ALERT,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from "../actions/constants";

export const register = (FormData) => (dispatch) => {
  let axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
    },
  };

  const body = JSON.stringify(FormData);

  axios
    .post("http://localhost:5000/register", body, axiosConfig)
    .then((res) => {
      if (res.status === 200 && res.data != "") {
        console.log(res);
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data,
        });
      }
    })
    .catch((error) => {
      console.log(error.response);
      dispatch({
        type: REGISTER_FAILURE,
      });
    });
};

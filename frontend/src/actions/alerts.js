import uuid from "uuid";
import {
  SET_ALERT,
  REMOVE_ALERT,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from "../actions/constants";

export const setAlert = (msg, alertType) => (dispatch) => {
  const id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id },
  });

  setTimeout(
    () =>
      dispatch({
        type: REMOVE_ALERT,
        payload: id,
      }),
    3000
  );
};

export const register = (msg, alertType) => (dispatch) => {};

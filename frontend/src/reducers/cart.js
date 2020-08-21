import {
  ADD_CART_FAILURE,
  ADD_CART_SUCCESS,
  GET_CART_FAILURE,
  GET_CART_SUCCESS,
} from "../actions/constants";

const initalState = {
  get_cart: [],
  insert_cart: [],
  error: "",
};

export default function (state = initalState, action) {
  switch (action.type) {
    case ADD_CART_SUCCESS:
      return {
        ...state,
        insert_cart: action.payload,
      };

    case ADD_CART_FAILURE:
      return { ...state, error: action.payload };

    case GET_CART_SUCCESS:
      return {
        ...state,
        get_cart: action.payload,
      };

    case GET_CART_FAILURE:
      return { ...state, error: action.payload };

    default:
      return state;
  }
}

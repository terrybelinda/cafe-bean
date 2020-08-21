import {
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS,
  GET_CATEGORIES,
  GET_CATEGORIES_ERROR,
  SELECTED_PRODUCT,
} from "../actions/constants";
const initalState = {
  products: [],
  categories: [],
  selectedProduct: "",
  errors: {},
};

export default function (state = initalState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case GET_PRODUCTS_ERROR:
      return { ...state, error: action.payload };

    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case GET_CATEGORIES_ERROR:
      return {
        ...state,
        categories: action.payload,
      };

    case SELECTED_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload,
      };

    default:
      return state;
  }
}

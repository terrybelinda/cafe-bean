import { REGISTER_FAILURE, REGISTER_SUCCESS } from "../actions/constants";
const initalState = {
  isAuthenticated: null,
  loading: null,
  user: null,
};

export default function (state = initalState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };

    case REGISTER_FAILURE:
      return { ...state, isAuthenticated: true, loading: false };

    default:
      return state;
  }
}

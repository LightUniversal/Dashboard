import { LOGIN_SUCCESS, REGISTER_SUCCESS, LOGOUT } from "./Actions";

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;

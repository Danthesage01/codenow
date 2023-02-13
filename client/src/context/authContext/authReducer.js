import {
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  GET_CURRENT_USER_BEGIN,
  GET_CURRENT_USER_SUCCESS,
  LOGOUT_USER
} from "./actions";

const authReducer = (state, action) => {
  switch (action.type) {
    // REGISTER
    case REGISTER_USER_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        showAlert: true,
      };
    case REGISTER_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
      };
    // LOGIN
    case LOGIN_USER_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        showAlert: true,
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
      };
    case GET_CURRENT_USER_BEGIN:
      return {
        ...state,
        userLoading: true,
      };
    case GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        userLoading: false,
        user: action.payload.user,
      };
    case LOGOUT_USER:
      return {
        ...state,
        userLoading: false,
        user: null,
      };
    default:
      throw new Error(`No such action : ${action.type}`);
  }
};

export default authReducer;

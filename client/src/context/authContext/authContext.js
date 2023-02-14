import React, { createContext, useContext, useEffect, useReducer } from "react";
import authReducer from "./authReducer";
import axios from "axios";
import {
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  GET_CURRENT_USER_BEGIN,
  GET_CURRENT_USER_SUCCESS,
  LOGOUT_USER,
  VERIFY_EMAIL_BEGIN,
  VERIFY_EMAIL_SUCCESS,
  VERIFY_EMAIL_ERROR,
  FORGOT_PASSWORD_BEGIN,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,
  RESET_PASSWORD_BEGIN,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
  TOGGLE_SIDEBAR
} from "./actions";
import { toast } from "react-toastify";

const AuthAppContext = createContext();

const initialState = {
  user: null,
  isLoading: false,
  showAlert: false,
  userLoading: true,
  isVerifyLoading: false,
  isVerifyError: false,
  userEmail: null,
  isSidebarToggle: false
};

const AuthAppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);


  // TOGGLE SIDEBAR
  const toggleSidebar = () =>{
    console.log(state.isSidebarToggle)
    dispatch({ type: TOGGLE_SIDEBAR})
  }

  // REGISTER
  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const { data } = await axios.post("/api/v1/auth/register", currentUser);
      const { user} = data;
      dispatch({ type: REGISTER_USER_SUCCESS, payload: { user } });
    } catch (error) {
      dispatch({ type: REGISTER_USER_ERROR });
      toast.error(error.response.data.msg);
    }
  };

  // VERIFY EMAIL
  const verifyEmail = async (query) => {
    dispatch({ type: VERIFY_EMAIL_BEGIN });
    try {
      const { data } = await axios.post("/api/v1/auth/verify-email", {
        verificationToken: query.get("token"),
        email: query.get("email"),
      });
      console.log(data);
      dispatch({ type: VERIFY_EMAIL_SUCCESS });
    } catch (error) {
      dispatch({ type: VERIFY_EMAIL_ERROR });
    }
  };
  // LOGIN
  const loginUser = async (currentUser) => {
    dispatch({ type: LOGIN_USER_BEGIN });
    try {
      const { data } = await axios.post("/api/v1/auth/login", currentUser);
      const { user, msg } = data;
      dispatch({ type: LOGIN_USER_SUCCESS, payload: { user } });
      toast.success(msg);
    } catch (error) {
      dispatch({ type: LOGIN_USER_ERROR });
      toast.error(error.response.data.msg);
    }
  };

  // FORGOT  PASSSWORD
  const forgotPassword = async (email) => {
    dispatch({ type: FORGOT_PASSWORD_BEGIN });
    try {
      const { data } = await axios.post("/api/v1/auth/forgot-password", {
        email,
      });
      console.log(data);
      dispatch({
        type: FORGOT_PASSWORD_SUCCESS,
        payload: { email: data.email },
      });
    } catch (error) {
      dispatch({ type: FORGOT_PASSWORD_ERROR });
    }
  };
  // RESET  PASSSWORD
  const resetPassword = async ( query, password ) => {
    dispatch({ type:RESET_PASSWORD_BEGIN });
    try {
      const { data } = await axios.post("/api/v1/auth/reset-password", {
        password,
        token: query.get("token"),
        email: query.get("email"),
      });
      console.log(data);
      dispatch({
        type: RESET_PASSWORD_SUCCESS
      });
    } catch (error) {
      dispatch({ type: RESET_PASSWORD_ERROR });
    }
  };

  // GETCURRENT USER FOR REFRESH
  const getCurrentUser = async () => {
    dispatch({ type: GET_CURRENT_USER_BEGIN });
    try {
      const { data } = await axios.get("/api/v1/auth/getCurrentUser");
      const { user } = data;
      dispatch({ type: GET_CURRENT_USER_SUCCESS, payload: { user } });
    } catch (error) {
      if (error.response.status === 401) {
        logoutUser();
      }
    }
  };

  // LOGOUT
  const logoutUser = async () => {
    await axios.get("/api/v1/auth/logout");
    dispatch({ type: LOGOUT_USER });
  };

  useEffect(() => {
    getCurrentUser();
    // eslint-disable-next-line
  }, []);
  return (
    <AuthAppContext.Provider
      value={{
        ...state,
        toggleSidebar,
        registerUser,
        loginUser,
        logoutUser,
        verifyEmail,
        forgotPassword,
        resetPassword
      }}
    >
      {children}
    </AuthAppContext.Provider>
  );
};

export default AuthAppProvider;

export const useAuthGlobalContext = () => {
  return useContext(AuthAppContext);
};

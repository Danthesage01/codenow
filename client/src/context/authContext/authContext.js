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
} from "./actions";
import { toast } from "react-toastify";

const AuthAppContext = createContext();

const initialState = {
  user: null,
  isLoading: false,
  showAlert: false,
  userLoading: true,
};

const AuthAppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // REGISTER
  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const { data } = await axios.post("/api/v1/auth/register", currentUser);
      const { user, msg } = data;
      dispatch({ type: REGISTER_USER_SUCCESS, payload: { user } });
      toast.success(msg);
    } catch (error) {
      dispatch({ type: REGISTER_USER_ERROR });
      toast.error(error.response.data.msg);
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
      };
    }
  };

  // LOGOUT
  const logoutUser = async () => {
    const { data } = await axios.get("/api/v1/auth/logout");
    dispatch({ type: LOGOUT_USER });
  };


  useEffect(() => {
    getCurrentUser();
  }, []);
  return (
    <AuthAppContext.Provider
      value={{ ...state, registerUser, loginUser, logoutUser }}
    >
      {children}
    </AuthAppContext.Provider>
  );
};

export default AuthAppProvider;

export const useAuthGlobalContext = () => {
  return useContext(AuthAppContext);
};

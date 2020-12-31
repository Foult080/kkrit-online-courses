import axios from "axios";
import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGOUT,
} from "./types";

import setAuthToken from "../utils/setAuthToken";
import { setAlert } from "./alert";

const config = {
  headers: {
    "Content-type": "application/json",
  },
};

//load user info
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get("/api/auth");
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const register = (values) => async (dispatch) => {
  const body = JSON.stringify(values);
  try {
    const res = await axios.post("/api/users", body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
    dispatch(setAlert("Вы успешно зарегистрировались", "success"));
  } catch (error) {
    const errors = error.response.data.errors;
    errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

//login user
export const login = (values) => async (dispatch) => {
  const body = JSON.stringify(values);
  try {
    const res = await axios.post("/api/auth", body, config);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    dispatch(setAlert("Вы успешно вошли", "success"));
    dispatch(loadUser());
  } catch (error) {
    const errors = error.response.data.errors;
    errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

//logout user
export const logOut = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};

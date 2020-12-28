import axios from "axios";
import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "./types";

import setAuthToken from "../utils/setAuthToken";

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

export const register = ({ name, email, password, role }) => async (
  dispatch
) => {
  const body = JSON.stringify({ name, email, password, role });
  try {
    const res = await axios.post("/api/users", body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (error) {
    const errors = error.response.data.errors;
    console.log(errors);
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
    dispatch(loadUser());
  } catch (error) {
    const errors = error.response.data.errors;
    console.log(errors);
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://goit-task-manager.herokuapp.com";

const setAuthHeader = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const clearAurhHeader = () => {
  axios.defaults.headers.common["Authorization"] = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (userInfo, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", userInfo);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (userInfo, thunkAPI) => {
    try {
      const response = await axios.post("/users/login", userInfo);
      setAuthHeader(response.data.token);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logOut", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    clearAurhHeader();
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    setAuthHeader(thunkAPI.getState().auth.token);
    const response = await axios.get("/users/me");
    return response.data;
  },
  {
    condition: (_, { getState }) => {
      return getState().auth.token !== null;
    },
  }
);

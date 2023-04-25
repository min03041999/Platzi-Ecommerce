import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import apiConfig from "../../api/apiConfig";
import { RootState } from "../store";

export interface IAuthentication {
  isProcessingRequest: boolean;
  accessToken?: string;
}
const initialState: IAuthentication = { isProcessingRequest: false };

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    success: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        isProcessingRequest: false,
      };
    },
  },
});

export const loginAsync = (login: any) => async (dispatch: any) => {
  try {
    const res = await axios.post(`${apiConfig.baseUrl}/auth/login`, login);
    dispatch(success(res.data));
  } catch (error: any) {
    throw new Error(error);
  }
};

export const { success } = loginSlice.actions;
export const showAuth = (state: RootState) => state.authentication;
export const loginReducer = loginSlice.reducer;

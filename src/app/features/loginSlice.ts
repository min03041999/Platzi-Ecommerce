import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { login } from "../services/loginServices";
import { IAccount } from "../../interface/interface";

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

export const loginAsync = (account: IAccount) => async (dispatch: any) => {
  try {
    const res = await login(account);
    console.log(res);
    // dispatch(success(res.data));
  } catch (error: any) {
    throw new Error(error);
  }
};

//Export action ra để sử dụng cho tiện
export const { success } = loginSlice.actions;

// Hàm giúp lấy ra state mong muốn.
// Hàm này có 1 tham số là root state là toàn bộ state trong store, chạy thử console.log(state) trong nội dung hàm để xem chi tiết
export const loginState = (state: RootState) => state.authentication;

//Export reducer trong stores
export const loginReducer = loginSlice.reducer;

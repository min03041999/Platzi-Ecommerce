import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import loginApi from "../../api/modules/login.api";
import tokenService from "../../api/tokenService";
import { IAccount, IAuthentication } from "../../interface/interface";

const initialState: IAuthentication = { isProcessingRequest: false };

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    start: (state) => {
      return {
        ...state,
        isProcessingRequest: true,
      };
    },
    success: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        isProcessingRequest: false
      };
    },
    error: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        isProcessingRequest: false,
      };
    },
  },
});

export const loginAsync = (account: IAccount) => async (dispatch: any) => {
  try {
    const res = await loginApi.login(account);
    tokenService.setToken(res);
    dispatch(profileAsync());
    dispatch(success({ message: "Login successful!" }));

  } catch (err: any) {
    console.log(err);
    dispatch(error({ message: "Login failed!" }));
  }
};

export const profileAsync = () => async (dispatch: any) => {
  try {
    const res = await loginApi.profile();
    tokenService.setUser(res);

  } catch (err: any) {
    console.log(err);
    dispatch(error(err));
  }
}

export const logoutAsync = () => {
  tokenService.removeToken();
  tokenService.removeUser();
}

//Export action ra để sử dụng cho tiện
export const { start, success, error } = loginSlice.actions;

// Hàm giúp lấy ra state mong muốn.
// Hàm này có 1 tham số là root state là toàn bộ state trong store, chạy thử console.log(state) trong nội dung hàm để xem chi tiết
export const loginState = (state: RootState) => state.authentication;

//Export reducer trong stores
export const loginReducer = loginSlice.reducer;

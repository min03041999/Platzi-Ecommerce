import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import loginApi from "../../api/modules/login.api";
import tokenService from "../../api/tokenService";
import { IAccount, IAuthentication } from "../../interface/interface";

const initialState: IAuthentication = { isProcessingRequest: false, user: tokenService.getUser(), token: tokenService.getToken() };

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
        ...action.payload,
        isProcessingRequest: false
      };
    },
    error: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        ...action.payload,
        isProcessingRequest: false,
      };
    },
  },
});

export const loginAuthAsync = (account: IAccount) => async (dispatch: any) => {
  try {
    const res = await loginApi.login(account);
    const token = tokenService.setToken(res);
    if (token !== null) {
      const res_: any = await loginApi.profile();
      if (res_.role === "admin") {
        tokenService.setUser(res_);
        dispatch(success({ message: "Login successful!", token: res, user: res_ }));
      } else {
        tokenService.removeToken();
        dispatch(error({ message: "Login is failed or not administrator", token: "", user: "" }));
      }
    }
  } catch (err: any) {
    dispatch(error({ message: "Login is failed !", token: "", user: "" }));
  }
};

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

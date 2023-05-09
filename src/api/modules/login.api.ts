import axiosClient from "../axiosClient";
import { IAccount } from "../../interface/interface";

const loginEndpoints = {
    login: "/auth/login",
    profile: "/auth/profile",
    refreshToken: "/auth/refresh-token"
}

const loginApi = {
    login: (account: IAccount) => {
        return axiosClient.post(loginEndpoints.login, account);
    },

    profile: () => {
        return axiosClient.get(loginEndpoints.profile);
    },

    refreshToken: (refresh_token: string) => {
        return axiosClient.post(loginEndpoints.refreshToken, refresh_token);
    }

}

export default loginApi;
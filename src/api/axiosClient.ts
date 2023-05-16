import axios from "axios";
import apiConfig from "./apiConfig";
import TokenServices from "./tokenService";
import loginApi from "./modules/login.api";

const axiosClient = axios.create({
    baseURL: apiConfig.baseUrl,
    headers: {
        "Content-Type": "application/json",
    }
});

axiosClient.interceptors.request.use((config) => {
    const accessToken = TokenServices.getAccessToken();

    if (accessToken) {
        config.headers["Authorization"] = 'Bearer ' + accessToken;
    }

    return config;
});

axiosClient.interceptors.response.use(
    (res) => {
        return res.data;
    },
    async (err) => {
        const originalConfig = err.config;

        if (err.response) {
            // Access Token was expired
            // if (err.response.status === 400 && !originalConfig._retry) {
            if (err.response.status === 400) {
                // originalConfig._retry = true;

                try {
                    const accessToken = TokenServices.getAccessToken();
                    const response = await loginApi.refreshToken(accessToken);
                    TokenServices.updateToken(response.data);

                    return axiosClient(originalConfig);
                } catch (_error) {
                    return Promise.reject(_error);
                }
            }
        }

        return Promise.reject(err);
    }
);

export default axiosClient;
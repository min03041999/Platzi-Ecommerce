import axios from "axios";
import apiConfig from "../../api/apiConfig";
import { IAccount } from "../../interface/interface";

export const login = async (account: IAccount) => {
    const res = await axios.post(`${apiConfig.baseUrl}/auth/login`, account);
    return { access_token: res.data.access_token, refresh_token: res.data.refresh_token };
}
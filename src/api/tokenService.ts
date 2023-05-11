const TokenServices = {
    setToken(token: any) {
        localStorage.setItem("token", JSON.stringify(token));
    },

    getToken() {
        const token = localStorage.getItem("token");
        if (token !== null) {
            return JSON.parse(token);
        }
        return null;
    },

    updateToken(token: any) {
        localStorage.setItem("token", JSON.stringify(token));
    },

    getRefreshToken() {
        const token = localStorage.getItem("token");
        if (token !== null) {
            return JSON.parse(token)?.refresh_token;
        }
        return null;
    },

    getAccessToken() {
        const token = localStorage.getItem("token");
        if (token !== null) {
            return JSON.parse(token)?.access_token;
        }
        return null;
    },

    removeToken() {
        localStorage.removeItem("token");
    },

    setUser(user: any) {
        localStorage.setItem("user", JSON.stringify(user));
    },

    getUser() {
        const user = localStorage.getItem("user");
        if (user !== null) {
            return JSON.parse(user);
        }
        return null;
    },

    removeUser() {
        localStorage.removeItem("user");
    },
}

export default TokenServices;



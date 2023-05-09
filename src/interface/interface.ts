export interface IAccount {
    email: string;
    password: string;
}

export interface IToken {
    accessToken: string;
    refreshToken: string;
}

export interface IAuthentication {
    isProcessingRequest: boolean;
}
import internal from "stream";

export interface IAccount {
    email: string;
    password: string;
}

export interface IToken {
    access_token: string;
    refresh_token: string;
}

export interface IUser {
    avatar: string;
    creationAt: string;
    email: string;
    id: internal;
    name: string;
    password: string;
    role: string;
    updatedAt: string;
}

export interface IAuthentication {
    isProcessingRequest: boolean;
    user: IUser;
    token: IToken;
    message?: string;
}
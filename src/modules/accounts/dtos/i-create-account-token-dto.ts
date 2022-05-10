interface ICreateAccountTokenDTO {
    accountId: string;
    expiresDate: Date;
    refreshToken: string;
}

export { ICreateAccountTokenDTO }
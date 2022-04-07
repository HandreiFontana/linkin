interface ICreateLinkDTO {
    id?: string;
    title: string,
    description: string,
    url: string,
    account_id: string,
    category: string,
    isPrivate?: boolean
};

export { ICreateLinkDTO };
interface ICreateLinkDTO {
    title: string,
    description: string,
    url: string,
    created_by: string,
    category: string,
    isPrivate: boolean
};

export { ICreateLinkDTO };
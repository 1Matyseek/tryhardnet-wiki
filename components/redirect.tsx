export const redirectExternal = (link: string) => {
    window.open(link, '_blank');
}

export const redirectInternal = (link: string) => {
    window.open(link, '_self');
}
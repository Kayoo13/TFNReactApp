
export const sortByTitle = (books) => {
    return books.slice().sort((a, b) => a.title.localeCompare(b.title));
};


export const sortByAuthor = (books) => {
    return books.slice().sort((a, b) => a.author.localeCompare(b.author));
};


export const sortByCategory = (books) => {
    return books.slice().sort((a, b) => a.category.localeCompare(b.category));
};

export const BOOK_POST_DATA_URL = '/api/posts';

export const REGISTER_URL = '/api/auth/register';

export const getBookData = (page: number) => `/api/posts/?page=${page}`;

export const deletePostItem = (id: string) => `/api/posts/${id}`;

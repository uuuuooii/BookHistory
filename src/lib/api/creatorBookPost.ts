import axios, { AxiosResponse } from 'axios';
import { deletePostItem, BOOK_POST_DATA_URL, getBookData } from './url';
import { PostDataProps } from './dto';

export const getBookPostData = async (): Promise<AxiosResponse> => {
  return axios.get(BOOK_POST_DATA_URL);
};

export const getBookPostInfiniteData = async (
  page: number
): Promise<AxiosResponse> => {
  return axios.get(getBookData(page));
};

export const postBookCreator = async (
  data: PostDataProps
): Promise<AxiosResponse> => {
  return axios.post(BOOK_POST_DATA_URL, data);
};

export const putBookUpdate = async (
  data: PostDataProps
): Promise<AxiosResponse> => {
  return axios.put(BOOK_POST_DATA_URL, data);
};

export const deletePostData = async (id: string): Promise<AxiosResponse> => {
  return axios.delete(deletePostItem(id));
};

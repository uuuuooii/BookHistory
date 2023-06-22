import axios, { AxiosResponse } from 'axios';
import { BOOK_POST_DATA_URL } from './url';

export const getBookPostData = async (): Promise<AxiosResponse> => {
  return axios.get(BOOK_POST_DATA_URL);
};

export const postBookCreator = async (data: any): Promise<AxiosResponse> => {
  return axios.post(BOOK_POST_DATA_URL, data);
};

import axios, { AxiosResponse } from 'axios';
import { BOOK_POST_DATA_URL, updatePost } from './url';
import { PostDataProps } from './dto';

export const getBookPostData = async (): Promise<AxiosResponse> => {
  return axios.get(BOOK_POST_DATA_URL);
};

// TODO: any 수정
export const postBookCreator = async (data: any): Promise<AxiosResponse> => {
  return axios.post(BOOK_POST_DATA_URL, data);
};

// TODO: any 수정
export const putBookUpdate = async (data: any): Promise<AxiosResponse> => {
  return axios.put(BOOK_POST_DATA_URL, data);
};

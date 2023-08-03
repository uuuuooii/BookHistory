import axios, { AxiosResponse } from 'axios';
import { PostRegister } from './dto';
import { REGISTER_URL } from './url';

const postRegister = async (data: PostRegister): Promise<AxiosResponse> => {
  return axios.post(REGISTER_URL, data);
};
export default postRegister;

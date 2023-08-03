import axios, { AxiosResponse } from 'axios';
import { PostRegister } from './dto';
import { REGISTER_URL } from './url';

const postRegister = async (data: PostRegister): Promise<AxiosResponse> => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return axios.post(REGISTER_URL, data, config);
};
export default postRegister;

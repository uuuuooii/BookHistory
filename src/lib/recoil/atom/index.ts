import { atom } from 'recoil';
import { PostDataProps } from '@/lib/api/dto';

const postDataList = atom<PostDataProps[]>({
  key: 'postData',
  default: [],
});
export default postDataList;

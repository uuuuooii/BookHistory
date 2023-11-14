'use client';

import React, {
  useEffect, useState, cache
} from 'react';
import { deletePostData, getBookPostData } from '@/app/lib/api/creatorBookPost';
import { PostDataProps } from '@/app/lib/api/dto';
import Item from './item';
import Wrapper from './style';

interface ElementProps {
  isUpload?: boolean;
  isAdmin?: boolean;
  editItem?: {
    selecteItem: PostDataProps | undefined;
    onClickSelecteItem: (item: PostDataProps) => void;
  };
}

const ListElement = ({
  isUpload,
  isAdmin,
  editItem,
}: ElementProps) => {
  const [postData, setPostData] = useState<PostDataProps[]>([]);
  const [isDelete, setIsDelete] = useState<boolean>(false);

  const handleDelete = async (id: string) => {
    await deletePostData(id);
    setIsDelete(true);
    alert('삭제 되었습니다');
  };

  useEffect(() => {
    // React cache function
    // React 캐시 기능을 사용하면 함수의 반환 값을 기억할 수 있어 동일한 함수를 한 번만 실행하면서 여러 번 호출할 수 있습니다.
    const getPostData = cache(async () => {
      const res = await getBookPostData();
      setPostData(res.data.reverse());
    });

    getPostData();
  }, [isUpload, isDelete]);

  return (
    <Wrapper>
      {postData.map((item, index) => (
        <Item
          key={item._id}
          postData={postData}
          index={index}
          item={item}
          handleDelete={handleDelete}
          isAdmin={isAdmin}
          editItem={editItem}
        />
      ))}
    </Wrapper>

  );
};

export default ListElement;

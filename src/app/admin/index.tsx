'use client';

import React, { cache, useEffect, useState } from 'react';
import Inner from '@/components/inner';
import useInput from '@/lib/hooks/useInput';
import Preview from './preview';
import {
  deletePostData, getBookPostData, postBookCreator, putBookUpdate
} from '@/lib/api/creatorBookPost';
import AdminInput from './input';
import useSelecteItem from '@/lib/hooks/useSelecteItem';
import { PostDataProps } from '@/lib/api/dto';
import * as S from './style';

const Admin = () => {
  const [isUpload, setIsUpload] = useState(false);
  const [postData, setPostData] = useState<PostDataProps[]>([]);
  const [isDelete, setIsDelete] = useState<boolean>(false);

  const titleInput = useInput();
  const imageInput = useInput();
  const contentInput = useInput();
  const starInput = useInput();
  const editItem = useSelecteItem();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const data = {
      title: titleInput.inputValue,
      star: starInput.inputValue,
      img: imageInput.inputValue,
      content: contentInput.inputValue
    };
    const res = await postBookCreator(data);
    if (res.data) {
      alert('등록 되었습니다');
      setIsUpload(true);
    }
  };

  const onSubmitEdit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const editData = {
      id: editItem.selecteItem?._id,
      title: editItem.selecteItem?.title,
      star: editItem.selecteItem?.star,
      img: editItem.selecteItem?.img,
      content: editItem.selecteItem?.content,
    };

    const res = await putBookUpdate(editData);
    if (res.data) {
      alert('수정되었습니다');
    }
  };

  const handleSubmit = editItem.selecteItem ? onSubmitEdit : onSubmit;

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
    <S.Form onSubmit={handleSubmit}>
      <Inner>
        <S.Wrapper>
          <S.PreviewWrapper>
            <Preview postData={postData} editItem={editItem} handleDelete={handleDelete} />
          </S.PreviewWrapper>
          <AdminInput
            titleInput={titleInput}
            imageInput={imageInput}
            contentInput={contentInput}
            starInput={starInput}
            editItem={editItem.selecteItem}
          />
        </S.Wrapper>
      </Inner>
    </S.Form>
  );
};

export default Admin;

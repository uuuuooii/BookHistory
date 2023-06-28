'use client';

import React, { useState } from 'react';
import Inner from '@/components/inner';
import useInput from '@/common/hook/useInput';
import * as S from './style';
import Preview from './preview';
import { postBookCreator, putBookUpdate } from '@/common/api/creatorBookPost';
import AdminInput from './input';
import { PostDataProps } from '@/common/api/dto';
import useEditItem from '@/common/hook/useEditItem';

const Admin = () => {
  const titleInput = useInput();
  const imageInput = useInput();
  const contentInput = useInput();
  const starInput = useInput();
  const editItem = useEditItem();
  console.log(editItem.editItem);
  const [isUpload, setIsUpload] = useState(false);

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
      id: editItem.editItem?._id,
      title: editItem.editItem?.title,
      star: editItem.editItem?.star,
      img: editItem.editItem?.img,
      content: editItem.editItem?.content,
    };

    const res = await putBookUpdate(editData);
    if (res.data) {
      alert('수정되었습니다');
    } else {
      alert('수정에 실패했습니다');
    }
    console.log(res.data);
  };

  const handleSubmit = editItem.editItem ? onSubmitEdit : onSubmit;

  return (
    <S.Form onSubmit={handleSubmit}>
      <Inner>
        <S.Wapper>
          <Preview isUpload={isUpload} editItem={editItem} />
          <AdminInput
            titleInput={titleInput}
            imageInput={imageInput}
            contentInput={contentInput}
            starInput={starInput}
            editItem={editItem.editItem}
          />
        </S.Wapper>
      </Inner>
    </S.Form>
  );
};

export default Admin;

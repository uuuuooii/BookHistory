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
      title: editItem.editItem?.title,
      star: editItem.editItem?.star,
      img: editItem.editItem?.img,
      content: editItem.editItem?.content,
    };

    // const res = await putBookUpdate(editItem.editItem?.id, editData);
    // console.log(res.data);
  };

  const handleSubmit = editItem ? onSubmitEdit : onSubmit;

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

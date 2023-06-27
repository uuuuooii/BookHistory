'use client';

import React, { useState } from 'react';
import Inner from '@/components/inner';
import useInput from '@/common/hook/useInput';
import * as S from './style';
import Preview from './preview';
import { postBookCreator } from '@/common/api/creatorBookPost';
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
    console.log(res.data);
    setIsUpload(true);
  };

  return (
    <S.Form onSubmit={onSubmit}>
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

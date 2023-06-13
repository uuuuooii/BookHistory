'use client';

import React from 'react';
import axios from 'axios';
import Inner from '@/components/inner';
import useInput from '@/common/hook/useInput';
import * as S from './style';

const Admin = () => {
  const titleInput = useInput();
  const imageInput = useInput();
  const contentInput = useInput();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const data = {
      title: titleInput.inputValue,
      img: imageInput.inputValue,
      content: contentInput.inputValue
    };

    const res = await axios.post('http://localhost:3000/api/posts', data);
    console.log(res.data);
  };
  return (
    <S.Form onSubmit={onSubmit}>
      <Inner>
        <S.InputWrapper>
          <input placeholder="title" value={titleInput.inputValue} onChange={titleInput.onChangeInput} />
          <input placeholder="image" value={imageInput.inputValue} onChange={imageInput.onChangeInput} />
          <input placeholder="content" value={contentInput.inputValue} onChange={contentInput.onChangeInput} />
          <S.Button type="submit">submit</S.Button>
        </S.InputWrapper>
      </Inner>
    </S.Form>
  );
};

export default Admin;

'use client';

import React, { useState } from 'react';
import Inner from '@/components/inner';
import useInput from '@/common/hook/useInput';
import * as S from './style';
import Preview from './preview';
import { postBookCreator } from '@/common/api/creatorBookPost';

const Admin = () => {
  const titleInput = useInput();
  const imageInput = useInput();
  const contentInput = useInput();
  const starInput = useInput();
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
          <Preview isUpload={isUpload} />
          <S.InputWrapper>
            <S.Input placeholder="책 제목을 입력해주세요" value={titleInput.inputValue} onChange={titleInput.onChangeInput} />
            <S.Input placeholder="별점을 입력해주세요. (최대 5개)" value={starInput.inputValue} onChange={starInput.onChangeInput} />
            <S.Input placeholder="이미지 url을 입력해주세요" value={imageInput.inputValue} onChange={imageInput.onChangeInput} />
            <S.Input isContent placeholder="완독 후기를 입력해주세요" value={contentInput.inputValue} onChange={contentInput.onChangeInput} />
            <S.Button type="submit">submit</S.Button>
          </S.InputWrapper>
        </S.Wapper>
      </Inner>
    </S.Form>
  );
};

export default Admin;

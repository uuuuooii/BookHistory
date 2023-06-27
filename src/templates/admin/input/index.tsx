import React from 'react';
import * as S from './style';
import { PostDataProps } from '@/common/api/dto';

interface InputProps {
  inputValue: string;
  onChangeInput: (e: {
    currentTarget: {
      value: React.SetStateAction<string>;
    };
  }) => void;
}

interface AdminInputProps {
  titleInput: InputProps;
  starInput: InputProps;
  imageInput: InputProps;
  contentInput: InputProps;
  editItem: PostDataProps | undefined
}

const AdminInput = ({
  titleInput, starInput, imageInput, contentInput, editItem
}: AdminInputProps) => {
  return (
    <S.InputWrapper>
      <S.Input placeholder="책 제목을 입력해주세요" value={editItem?.title || titleInput.inputValue} onChange={titleInput.onChangeInput} />
      <S.Input placeholder="별점을 입력해주세요. (최대 5개)" value={editItem?.star || starInput.inputValue} onChange={starInput.onChangeInput} />
      <S.Input placeholder="이미지 url을 입력해주세요" value={editItem?.img || imageInput.inputValue} onChange={imageInput.onChangeInput} />
      <S.Input isContent placeholder="완독 후기를 입력해주세요" value={editItem?.content || contentInput.inputValue} onChange={contentInput.onChangeInput} />
      <S.Button type="submit">submit</S.Button>
    </S.InputWrapper>
  );
};

export default AdminInput;

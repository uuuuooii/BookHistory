import React from 'react';
import * as S from './style';
import { PostDataProps } from '@/common/api/dto';
import useInput from '@/common/hook/useInput';

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
  const onChangeInput = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    fieldName: string
  ) => {
    if (editItem) {
      if (fieldName === 'title') {
        editItem.title = e.currentTarget.value;
      }
      if (fieldName === 'star') {
        editItem.star = e.currentTarget.value;
      }
      if (fieldName === 'img') {
        editItem.img = e.currentTarget.value;
      }
      if (fieldName === 'content') {
        editItem.content = e.currentTarget.value;
      }
    }
  };

  return (
    <S.InputWrapper>
      <S.Input
        placeholder="책 제목을 입력해주세요"
        value={editItem?.title || titleInput.inputValue}
        onChange={(e) => { onChangeInput(e, 'title'); titleInput.onChangeInput(e); }}
      />
      <S.Input
        placeholder="별점을 입력해주세요. (최대 5개)"
        value={editItem?.star || starInput.inputValue}
        onChange={(e) => { onChangeInput(e, 'star'); starInput.onChangeInput(e); }}
      />
      <S.Input
        placeholder="이미지 url을 입력해주세요"
        value={editItem?.img || imageInput.inputValue}
        onChange={(e) => { onChangeInput(e, 'img'); imageInput.onChangeInput(e); }}
      />
      <S.Input
        isContent
        placeholder="완독 후기를 입력해주세요"
        value={editItem?.content || contentInput.inputValue}
        onChange={(e) => { onChangeInput(e, 'content'); contentInput.onChangeInput(e); }}
        maxLength={200}
      />
      <S.Button type="submit">submit</S.Button>
    </S.InputWrapper>
  );
};

export default AdminInput;

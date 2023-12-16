import React from 'react';
import SelectStar from './star';
import { AdminInputProps } from './type';
import * as S from './style';

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

      if (fieldName === 'img') {
        editItem.img = e.currentTarget.value;
      }
      if (fieldName === 'content') {
        editItem.content = e.currentTarget.value;
      }
    }
  };

  const reset = () => {
    titleInput.reset();
    imageInput.reset();
    contentInput.reset();
  };

  return (
    <S.InputWrapper>
      <S.Input
        placeholder="책 제목을 입력해주세요"
        value={editItem?.title || titleInput.inputValue}
        onChange={(e) => { onChangeInput(e, 'title'); titleInput.onChangeInput(e); }}
      />
      <SelectStar starInput={starInput} editItem={editItem} />
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
      />
      <S.ButtonWrapper>
        <S.Button type="button" isReset onClick={() => reset()}>reset</S.Button>
        <S.Button type="submit">submit</S.Button>
      </S.ButtonWrapper>
    </S.InputWrapper>
  );
};

export default AdminInput;

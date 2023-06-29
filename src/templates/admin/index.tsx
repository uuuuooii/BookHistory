'use client';

import React, { useState } from 'react';
import Inner from '@/components/inner';
import useInput from '@/common/hook/useInput';
import * as S from './style';
import Preview from './preview';
import { postBookCreator, putBookUpdate } from '@/common/api/creatorBookPost';
import AdminInput from './input';
import useSelecteItem from '@/common/hook/useSelecteItem';

const Admin = () => {
  const titleInput = useInput();
  const imageInput = useInput();
  const contentInput = useInput();
  const starInput = useInput();
  const editItem = useSelecteItem();
  const deleteItem = useSelecteItem();

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
      id: editItem.selecteItem?._id,
      title: editItem.selecteItem?.title,
      star: editItem.selecteItem?.star,
      img: editItem.selecteItem?.img,
      content: editItem.selecteItem?.content,
    };

    const res = await putBookUpdate(editData);
    if (res.data) {
      alert('수정되었습니다');
    } else {
      alert('수정에 실패했습니다');
    }
    console.log(res.data);
  };

  const handleSubmit = editItem.selecteItem ? onSubmitEdit : onSubmit;

  return (
    <S.Form onSubmit={handleSubmit}>
      <Inner>
        <S.Wapper>
          <Preview isUpload={isUpload} editItem={editItem} deleteItem={deleteItem} />
          <AdminInput
            titleInput={titleInput}
            imageInput={imageInput}
            contentInput={contentInput}
            starInput={starInput}
            editItem={editItem.selecteItem}
          />
        </S.Wapper>
      </Inner>
    </S.Form>
  );
};

export default Admin;

import React, { useState } from 'react';
import { PostDataProps } from '../api/dto';

const useEditItem = () => {
  const [editItem, setEditItem] = useState<PostDataProps>();

  const onClickEditItem = (item: PostDataProps) => {
    setEditItem(item);
  };

  return { editItem, onClickEditItem };
};

export default useEditItem;

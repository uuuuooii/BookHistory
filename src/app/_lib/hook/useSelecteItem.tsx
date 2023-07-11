import React, { useState } from 'react';
import { PostDataProps } from '../../_app/api/dto';

const useSelecteItem = () => {
  const [selecteItem, setSelecteItem] = useState<PostDataProps>();

  const onClickSelecteItem = (item: PostDataProps) => {
    setSelecteItem(item);
  };

  return { selecteItem, onClickSelecteItem };
};

export default useSelecteItem;

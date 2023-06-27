import React from 'react';
import Image from 'next/image';
import * as S from './style';
import { PostDataProps } from '@/common/api/dto';

interface EditProps {
  item: PostDataProps;
  onClickEditItem: (item: PostDataProps) => void;
}

const EditItem = ({ item, onClickEditItem }: EditProps) => {
  return (
    <S.IconWrapper>
      <S.Icon onClick={() => onClickEditItem(item)}>
        <Image src="/images/svg/editeIcon.svg" alt="thumbnail-image" fill />
      </S.Icon>
      <S.Icon>
        <Image src="/images/svg/deleteIcon.svg" alt="thumbnail-image" fill />
      </S.Icon>
    </S.IconWrapper>

  );
};

export default EditItem;

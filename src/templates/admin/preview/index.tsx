import React from 'react';
import ListElement from '@/components/listElement';
import Wrapper from './style';
import { PostDataProps } from '@/common/api/dto';

interface PreviewProps {
  isUpload: boolean,
  onClickEditItem: (item: PostDataProps) => void
}

const Preview = ({ isUpload, onClickEditItem }: PreviewProps) => {
  return (
    <Wrapper>
      <ListElement isUpload={isUpload} onClickEditItem={onClickEditItem} isAdmin />
    </Wrapper>
  );
};

export default Preview;

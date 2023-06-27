import React from 'react';
import Element from '@/components/element';
import Wrapper from './style';
import { PostDataProps } from '@/common/api/dto';

interface PreviewProps {
  isUpload: boolean,
  onClickEditItem: (item: PostDataProps) => void
}

const Preview = ({ isUpload, onClickEditItem }: PreviewProps) => {
  return (
    <Wrapper>
      <Element isUpload={isUpload} onClickEditItem={onClickEditItem} isAdmin />
    </Wrapper>
  );
};

export default Preview;

import React from 'react';
import ListElement from '@/app/_components/listElement';
import Wrapper from './style';
import { PostDataProps } from '@/app/_app/api/dto';

interface PreviewProps {
  isUpload: boolean,
  editItem: {
    selecteItem: PostDataProps | undefined;
    onClickSelecteItem: (item: PostDataProps) => void;
  }
}

const Preview = ({ isUpload, editItem }: PreviewProps) => {
  return (
    <Wrapper>
      <ListElement isUpload={isUpload} editItem={editItem} isAdmin />
    </Wrapper>
  );
};

export default Preview;

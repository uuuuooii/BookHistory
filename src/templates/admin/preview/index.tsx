import React from 'react';
import ListElement from '@/components/listElement';
import Wrapper from './style';
import { PostDataProps } from '@/common/api/dto';

interface PreviewProps {
  isUpload: boolean,
  editItem: {
    selecteItem: PostDataProps | undefined;
    onClickSelecteItem: (item: PostDataProps) => void;
  }
  deleteItem: {
    selecteItem: PostDataProps | undefined;
    onClickSelecteItem: (item: PostDataProps) => void;
  }
}

const Preview = ({ isUpload, editItem, deleteItem }: PreviewProps) => {
  return (
    <Wrapper>
      <ListElement isUpload={isUpload} editItem={editItem} deleteItem={deleteItem} isAdmin />
    </Wrapper>
  );
};

export default Preview;

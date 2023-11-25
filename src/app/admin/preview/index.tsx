import React from 'react';
import ListElement from '@/components/listElement';
import Wrapper from './style';
import { PostDataProps } from '@/lib/api/dto';

interface PreviewProps {
  postData: PostDataProps[];
  handleDelete: (id: string) => Promise<void>;
  editItem: {
    selecteItem: PostDataProps | undefined;
    onClickSelecteItem: (item: PostDataProps) => void;
  };
}

const Preview = ({ postData, editItem, handleDelete }: PreviewProps) => {
  return (
    <Wrapper>
      <ListElement
        postData={postData}
        editItem={editItem}
        handleDelete={handleDelete}
        isAdmin
      />
    </Wrapper>
  );
};

export default Preview;

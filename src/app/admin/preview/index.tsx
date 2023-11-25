import React from 'react';
import ListElement from '@/components/listElement';
import Wrapper from './style';
import { PostDataProps } from '@/lib/api/dto';

interface PreviewProps {
  postData: PostDataProps[];
  postCount: number;
  handleDelete: (id: string) => Promise<void>;
  editItem: {
    selecteItem: PostDataProps | undefined;
    onClickSelecteItem: (item: PostDataProps) => void;
  };
}

const Preview = ({
  postData,
  postCount,
  editItem,
  handleDelete
}: PreviewProps) => {
  return (
    <Wrapper>
      <ListElement
        postData={postData}
        postCount={postCount}
        editItem={editItem}
        handleDelete={handleDelete}
        isAdmin
      />
    </Wrapper>
  );
};

export default Preview;

import React from 'react';
import { PostDataProps } from '@/lib/api/dto';
import Item from './item';
import Wrapper from './style';

interface ElementProps {
  postData: PostDataProps[];
  isAdmin?: boolean;
  handleDelete?: (id: string) => Promise<void>;
  editItem?: {
    selecteItem: PostDataProps | undefined;
    onClickSelecteItem: (item: PostDataProps) => void;
  };
}

const ListElement = ({
  postData,
  isAdmin,
  handleDelete,
  editItem,
}: ElementProps) => {
  return (
    <Wrapper>
      {postData.map((item, index) => (
        <Item
          key={item._id}
          postData={postData}
          index={index}
          item={item}
          handleDelete={handleDelete}
          isAdmin={isAdmin}
          editItem={editItem}
        />
      ))}
    </Wrapper>

  );
};

export default ListElement;

import React from 'react';
import { PostDataProps } from '@/lib/api/dto';
import Item from './item';
import Wrapper from './style';

interface ElementProps {
  postData: PostDataProps[];
  postCount: number;
  isAdmin?: boolean;
  handleDelete?: (id: string) => Promise<void>;
  editItem?: {
    selecteItem: PostDataProps | undefined;
    onClickSelecteItem: (item: PostDataProps) => void;
  };

}

const ListElement = ({
  postData,
  postCount,
  isAdmin,
  handleDelete,
  editItem,
}: ElementProps) => {
  return (
    <Wrapper>
      {postData.map((item, index) => (
        <Item
          key={item._id}
          postCount={postCount}
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

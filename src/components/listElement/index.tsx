'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { deletePostData, getBookPostData } from '@/common/api/creatorBookPost';
import { PostDataProps } from '@/common/api/dto';
import * as S from './style';

interface ElementProps {
  isUpload?: boolean;
  isAdmin?: boolean;
  editItem?: {
    selecteItem: PostDataProps | undefined;
    onClickSelecteItem: (item: PostDataProps) => void;
  }
}

const ListElement = ({
  isUpload, isAdmin, editItem
}: ElementProps) => {
  const [postData, setPostData] = useState<PostDataProps[]>([]);
  const [isDelete, setIsDelete] = useState<boolean>(false);

  const handleDelete = async (id: string) => {
    await deletePostData(id);
    setIsDelete(true);
    alert('삭제 되었습니다');
  };

  useEffect(() => {
    const getPostData = async () => {
      const res = await getBookPostData();
      setPostData(res.data.reverse());
    };
    getPostData();
  }, [isUpload, isDelete]);

  return (
    <S.Wrapper>
      {postData.map((item) => (
        <S.PostsItem
          key={item.title}
        >
          <S.ImageWrapper>
            <Image src={String(item.img)} alt="thumbnail-image" fill />
            {isAdmin && editItem && (
              <S.IconWrapper>
                <S.Icon onClick={() => editItem.onClickSelecteItem(item)}>
                  <Image src="/images/svg/editeIcon.svg" alt="thumbnail-image" fill />
                </S.Icon>
                <S.Icon onClick={() => handleDelete(String(item._id))}>
                  <Image src="/images/svg/deleteIcon.svg" alt="thumbnail-image" fill />
                </S.Icon>
              </S.IconWrapper>
            )}
          </S.ImageWrapper>
          <S.Contents>
            <h3>
              <S.ItemTitle href={`/detail?id=${item._id}`}>
                {item.title}
              </S.ItemTitle>
            </h3>
            <div>
              <div>{item.star}</div>
            </div>
            <div>
              <S.Desc>{item.content}</S.Desc>
            </div>
          </S.Contents>
        </S.PostsItem>
      ))}
    </S.Wrapper>

  );
};

export default ListElement;
